/// <reference path="Scripts/jquery.d.ts" />
/// <reference path="Scripts/d3.d.ts" />
import VXC = require("VCL/VXComponent");
import VXU = require("VCL/VXUtils");
import V = require("VCL/VCL");

//Collapsible Indented Tree
export class Margin {
    public top: number;
    public right: number;
    public bottom: number;
    public left: number;
};

export class TD3Tree extends VXC.TComponent {

    private _tree: D3.Layout.TreeLayout;
    private _root: D3.Layout.GraphNode;

    private _width: number;
    private _barWidth: number;
    private _me: TD3Tree = this;


    // diagonal line
    private _diagonal: D3.Svg.Diagonal;
    // whole element selection
    private _svg: D3.Selection;

    
    private onclickStub: (d: D3.Layout.GraphNode) => void;
    public onClicked: (sender: TD3Tree, root: D3.Layout.GraphNode, leaf: D3.Layout.GraphNode) => void;
    public onCollapsed: (sender: TD3Tree, root: D3.Layout.GraphNode, leaf: D3.Layout.GraphNode) => void;
    public onExpanded: (sender: TD3Tree, root: D3.Layout.GraphNode, leaf: D3.Layout.GraphNode) => void;
   

    public constructor(aOwner: VXC.TComponent, renderTo?: string, text?: string) {
        super(aOwner, renderTo);
        //http://stackoverflow.com/questions/14471975/how-can-i-preserve-lexical-scope-in-typescript-with-a-callback-function
        this.onclickStub = () => {
            this.click.apply(this, arguments);
        };

       
    }


    private _json: string = null;
    public get Json(): string {
        return this._json;
    }
    public set Json(val: string) {
        if (val != this._json) {
            this._json = val;
            //http://stackoverflow.com/questions/4935632/how-to-parse-json-in-javascript
            this._root = JSON && JSON.parse(this._json) || $.parseJSON(this._json);
            (<any>this._root).x0 = 0;
            (<any>this._root).y0 = 0;
            this.drawDelayed(true);
        }
    }

    private _duration: number = 400;
    public get Duration(): number {
        return this._duration;
    }
    public set Duration(val: number) {
        if (val != this._duration) {
            this._duration = val;
            this.drawDelayed(true);
        }
    }

    private _barHeight: number = 20;
    public get BarHeight(): number {
        return this._barHeight;
    }
    public set BarHeight(val: number) {
        if (val != this._barHeight) {
            this._barHeight = val;
            this.drawDelayed(true);
        }
    }


    // margins of the tree
    private _margin: Margin = { top: 30, right: 20, bottom: 30, left: 20 };
    public get Margin(): Margin {
        return this._margin;
    }
    public set Margin(val: Margin) {
        if (val != this._margin) {
            this._margin = val;
            this.drawDelayed(true);
        }
    }


    public create() {
        this.jComponent.empty();
        this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'div', this.FitToWidth, this.FitToHeight);        
        
        super.create();
        this.jComponent.show();

        this._width = this.Width - this._margin.left - this._margin.right;
        this._barWidth = this._width * .8;

        this._tree = this.d3.layout.tree().size([0, 100]);

        this._diagonal = this.d3.svg.diagonal()
            .projection((d) => { return [d.y, d.x]; });

        this._svg = this.d3.select("body"
        /*'#' + this.ID*/
            ).append("svg").attr("id", this.ID + "22")
            .attr("width", this._width + this._margin.left + this._margin.right)
            .append("g")
            .attr("transform", "translate(" + this._margin.left + "," + this._margin.top + ")");




        (<any>this._root).x0 = 0;
        (<any>this._root).y0 = 0;

        this.update(this._root);

        var cmp: JQuery = $('#' + this.ID + "22")
        $("body").detach('#' + this.ID + "22");
        this.jComponent.append(cmp);

    }


    private update(source: D3.Layout.GraphNode) {

        // Runs the tree layout, returning the array of nodes associated with the specified root node.
        var nodes: Array<D3.Layout.GraphNode> = this._tree.nodes(this._root);

        var height = nodes.length * this._barHeight + this._margin.top + this._margin.bottom;

        this.d3.select("svg")
            .attr("height", height);

        this.d3.select(self.frameElement)
            .style("height", height + "px");


        // Compute the "layout".
        nodes.forEach((n, i) => {
            n.x = i * this._barHeight;
        });


        // Update the nodesō

        // get all existing child nodes into 'node' and
        // set id to every node in nodes list if not yet exists (works at the first time for the root)
        var i = 0;
        var node = this._svg.selectAll("g.cit-node")
            .data(nodes, (d: any) => { return d.id || (d.id = ++i); });

        // add new nodes and move them to parent's position
        var nodeEnter = node.enter().append("g")
            .attr("class", "cit-node")
            .attr("transform", (d) => { return "translate(" + (<any>source).y0 + "," + (<any>source).x0 + ")"; })
            .style("opacity", 1e-6);

        // Add required attributes to newly created nodes
        nodeEnter.append("rect")
            .attr("y", -this._barHeight / 2)
            .attr("height", this._barHeight)
            .attr("width", this._barWidth)
            .attr("class", this.color)
            //.style("fill", this.color)
            .on("click", this.onclickStub);

        // add text to new nodes
        nodeEnter.append("text")
            .attr("dy", 3.5)
            .attr("dx", 5.5)
            .text((d) => { return d.name; });

        // Transition of new nodes to their new position.
        nodeEnter.transition()
            .duration(this._duration)
            .attr("transform", (d) => { return "translate(" + d.y + "," + d.x + ")"; })
            .style("opacity", 1);

        // Transition of existing nodes to their new position.
        node.transition()
            .duration(this._duration)
            .attr("transform", (d) => { return "translate(" + d.y + "," + d.x + ")"; })
            .style("opacity", 1)
            .select("rect")
            .attr("class", this.color);
            //.style("fill", this.color);

        // Transition exiting nodes to the parent's new position.
        node.exit().transition()
            .duration(this._duration)
            .attr("transform", (d) => { return "translate(" + source.y + "," + source.x + ")"; })
            .style("opacity", 1e-6)
            .remove();

        // Update the linksō

        // get all existing child links into 'link' and
        // set id to every link if not yet exists (works at the first time for the root)
        var link = this._svg.selectAll("path.cit-link")
            .data(this._tree.links(nodes), (d) => { return d.target.id; });
        
        // Enter any new links at the parent's previous position.
        link.enter().insert("path", "g")
            .attr("class", "cit-link")
            .attr("d", (d) => {
                var o = { x: (<any>source).x0, y: (<any>source).y0 };
                return this._diagonal({ source: o, target: o });
            })
            .transition()
            .duration(this._duration)
            .attr("d", this._diagonal);

        // Transition links to their new position.
        link.transition()
            .duration(this._duration)
            .attr("d", this._diagonal);

        // Transition exiting links to the parent's new position.
        link.exit().transition()
            .duration(this._duration)
            .attr("d", (d) => {
                var o = { x: source.x, y: source.y };
                return this._diagonal({ source: o, target: o });
            })
            .remove();
    
        // Stash the old positions for transition.
        nodes.forEach((d) => {
            (<any>d).x0 = d.x;
            (<any>d).y0 = d.y;
        });
    }

    // Toggle children on click.
    private click(d: D3.Layout.GraphNode):void {
        if (d.children) {
            d._children = d.children;
            d.children = null;
        } else {
            d.children = d._children;
            d._children = null;
        }
        this.update(d);

        if (this.onClicked != null) {
            V.tryAndCatch(() => { this.onClicked(this,this._root, d); })
            };
        if (d._children) {
            if (this.onCollapsed != null) {
                V.tryAndCatch(() => { this.onCollapsed(this, this._root, d); })
            };
        }
        if (d.children) {
            if (this.onExpanded != null) {
                V.tryAndCatch(() => { this.onExpanded(this, this._root, d); })
            };
        }
    }

    private color(d) {
        //return d._children ? "#3182bd" : d.children ? "#c6dbef" : "#fd8d3c";
        return d._children ? "cit-collapsed" : d.children ? "cit-expanded" : "cit-leaf";
    }

    private libLoaded: boolean = false;
    private libLoading: boolean = false;
    private d3: any;
    public draw(reCreate: boolean) {
        if (this.libLoading) return;

        if (this.libLoaded) {
            if (!this.parentInitialized()) return;
            super.draw(reCreate);
            return;
        }

        this.libLoading = true;
        var self = this;
        V.Application.loadJSLibrary("d3", (d3) => {
            self.libLoading = false;
            self.libLoaded = true;
            this.d3 = d3;

            if (!this.parentInitialized()) return;
            super.draw(reCreate);
        });
       
    }

}
