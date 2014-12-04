import V = require("./VCL");
import VXU = require("./VXUtils");
import VXD = require("./VXDataset");
import VXCB = require("./VXChartBase");

declare var Raphael;
export class TChartDotBase extends VXCB.TGridChartBase {
    private selectednode: any;

    constructor(aOwner: V.TComponent, renderTo?: string) {
        super(aOwner, renderTo);
        (<any>this)._fittowidth = true;
        this.Height = 200;
    }

    private _showselecteditem: boolean = true;
    /*
    * whether or not to the selected value will appers on click
    */
    public get ShowSelectedItem(): boolean {
        return this._showselecteditem;
    }
    public set ShowSelectedItem(val: boolean) {
        if (val != this._showselecteditem) {
            this._showselecteditem = val;
            this.drawDelayed(true);
        }
    }

    private _Dotcolor: string = "#9dcdd4";
    public get DotColor(): string {
        return this._Dotcolor;
    }
    public set DotColor(val: string) {
        if (V.Application.checkColorString(val)) {
            if (val != this._Dotcolor) {
                this._Dotcolor = val;
                this.drawDelayed(true);
            }
        }
    }

    private _horizontalgridline: number = 0;
    public get HorizontalGridLineWidth(): number {
        return this._horizontalgridline;
    }
    public set HorizontalGridLineWidth(val: number) {
        if (val != this._horizontalgridline) {
            this._horizontalgridline = val;
            this.drawDelayed(true);
        }
    }

    private _gridcolor: string = "#EEE";
    public get GridLineColor(): string {
        return this._gridcolor;
    }
    public set GridLineColor(val: string) {
        if (V.Application.checkColorString(val)) {
            if (val != this._gridcolor) {
                this._gridcolor = val;
                this.drawDelayed(true);
            }
        }
    }


    private _vertgridline: number = 0;
    public get VerticalGridLineWidth(): number {
        return this._vertgridline;
    }
    public set VerticalGridLineWidth(val: number) {
        if (val != this._vertgridline) {
            this._vertgridline = val;
            this.drawDelayed(true);
        }
    }



    private _dotmaxsize: number = 10;
    /*
    * maximum diameter of a dot
    */
    public get DotMaxSize(): number {
        return this._dotmaxsize;
    }
    public set DotMaxSize(val: number) {
        if (val != this._dotmaxsize) {
            this._dotmaxsize = val;
            this.drawDelayed(true);
        }
    }

    private _heatmap: boolean = false;
    /**
    * whether or not to enable coloring higher value symbols with warmer hue
    **/
    public get HeatMap(): boolean {
        return this._heatmap;
    }
    public set HeatMap(val: boolean) {
        if (val != this._heatmap) {
            this._heatmap = val;
            this.drawDelayed(true);
        }
    }


    private _opacity: number = 10;
    /*
    * opacity of the symbols
    */
    public get Opacity(): number {
        return this._opacity;
    }
    public set Opacity(val: number) {
        if (val != this._opacity) {
            this._opacity = val;
            this.drawDelayed(true);
        }
    }
}

class Dot extends VXCB.Grid {
    constructor(options, owner) {
        super(options, owner);
        this.grid = [];
        this.resizeEvent();
    }

    redraw() {
        this.owner.create();
        this.resizeEvent();
    }
}

export class TChartDot extends TChartDotBase {
    //depricated - use ToolTipFormat instead
    public onGetLabelText: (item: V.TDotValue) => any;
    /**
        Use the OnClick event handler to respond when the user clicks the control. 
    **/
    public onClicked: (item: V.TDotValue) => void;

    constructor(aOwner: V.TComponent, renderTo?: string) {
        super(aOwner, renderTo);
        if (this.ToolTipFormat)
            this.onGetLabelText = this.ToolTipFormat;

        var dot = new Dot({ element: this.jComponent[0] }, this);
    }


    public values = new VXCB.TChartValuesCollection<VXCB.TDotValue>();
    public createValue(labelX: string, labelY: string, value: number): VXCB.TDotValue {
        var col = new VXCB.TDotValue();
        this.values.add(col);
        col.Value = value;
        col.LabelX = labelX;
        col.LabelY = labelY;
        return col;
    }

    public draw(reCreate: boolean) {
        if (!this.parentInitialized()) return;
        super.draw(true);//new do repaint        
    }

    private raphael: any;
    private dotchart: any;
    public create() {
        if (this.ToolTipFormat)
            this.onGetLabelText = this.ToolTipFormat;
        this.jComponent.empty(); //clear all subcomponents
        this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'div', this.FitToWidth, this.FitToHeight);
        $(this.jComponent[0]).empty();
        this.raphael = new Raphael(this.jComponent[0]);
        var xSet = new V.TList<string>();
        var ySet = new V.TList<string>();

        var xs = [];
        var ys = [];
        var data = [];
        var ids = [];
        var axisy = [];
        var axisx = [];
        if (this.values.length() == 0) return;

        this.values.forEach((item) => {
            var idx = xSet.indexOf(item.LabelX);
            if (idx == -1) {
                xSet.add(item.LabelX);
                axisx.push(item.LabelX);
            }
            idx = ySet.indexOf(item.LabelY);
            if (idx == -1) {
                ySet.add(item.LabelY);
                axisy.push(item.LabelY);
            }
            xs.push(xSet.indexOf(item.LabelX));
            ys.push(ySet.indexOf(item.LabelY));
            data.push(item.Value);
            ids.push(item);
        });

        var colors = [this.DotColor] //UC.Colors.calculateShades(this.DotColor, ids.length);
        var self = this;
        this.dotchart = this.raphael.dotchart(0, 0, this.Width, this.Height - 12, xs, ys, data, ids,
            {
                symbol: "o",
                colors: colors,
                max: this.DotMaxSize,
                heat: this.HeatMap,
                axis: "0 0 1 1",
                horizgridline: this.HorizontalGridLineWidth,
                vertgridline: this.VerticalGridLineWidth,
                gridlinecolor: this.GridLineColor,
                gridTextColor: this.GridTextColor,
                titleTextColor: this.TitleTextColor,
                gridTextSize: this.GridTextSize,
                titleTextSize: this.TitleTextSize,
                preUnits: this.PreValueUnit,
                postUnits: this.PostValueUnit,
                gridTextFamily: this.Font,
                gridTitleWeight: this.GridTitleWeight,
                gridTextWeight: this.GridTextWeight,
                axisxstep: axisx.length - 1,
                axisystep: axisy.length - 1,
                axisxlabels: axisx,
                axisylabels: axisy,
                axisxtype: " ",
                axisytype: " ",
                opacity: this.Opacity,
                titleX: this.TitleX,
                titleY: this.TitleY,
            });

        var hover = new VXCB.Hover({
            parent: this.jComponent
        });

        this.dotchart.hover(
            function () {
                var txt = "";
                var item = this.obj;
                if (item != null) {
                    if (self.onGetLabelText) txt = self.onGetLabelText(item);
                    else txt = item.Value + "<br>" + item.LabelX + "<br>" + item.LabelY;
                }
                //var w = self.jComponent.width() / 2;
                //if (this.x > w)
                //    this.marker = this.marker || self.raphael.tag(this.x, this.y, txt, 180, this.r + 2).insertBefore(this);
                //else this.marker = this.marker || self.raphael.tag(this.x, this.y, txt, 0, this.r + 2).insertBefore(this);
                ////this.marker.show();
                (hover).update.apply(hover, ["<div id='content' style='width:150px;overflow:hidden;'>" + txt + "</div>", this.x, this.y]);

            },
            function () {
                //this.marker && this.marker.hide();
                hover.hide();
            });

        this.dotchart.click(
            function (x, b, f) {
                if (self.ShowSelectedItem) {
                    if ((<any>self).selectednode) {
                        (<any>self).selectednode.attr({ stroke: "none", "stroke-width": 0 })
                     }
                    (<any>self).selectednode = this;
                    this.attr({ stroke: '#000', "stroke-width": 2 })
                }
                if (self.onClicked) self.onClicked(this.obj);
            });
    }

}

export class TChartBubble extends TChartDotBase {
    private raphael: any;
    private dotchart: any;
    //depricated - use ToolTipFormat instead
    public onGetLabelText: (item: V.TDotValue) => any;
    public onClicked: (item: V.TDotValue) => void;

    constructor(aOwner: V.TComponent, renderTo?: string) {
        super(aOwner, renderTo);
        if (this.ToolTipFormat)
            this.onGetLabelText = this.ToolTipFormat;
    }


    public values = new VXCB.TChartValuesCollection<VXCB.TBubbleValue>();
    public createValue(valueX: number, valueY: number, value: number): VXCB.TBubbleValue {
        var col = new VXCB.TBubbleValue();
        this.values.add(col);
        col.Value = value;
        col.ValueX = valueX;
        col.ValueY = valueY;
        return col;
    }

    public draw(reCreate: boolean) {
        if (!this.parentInitialized()) return;
        super.draw(reCreate);
    }

    public create() {
        this.jComponent.empty(); //clear all subcomponents
        this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'div', this.FitToWidth, this.FitToHeight);
        this.raphael = new Raphael(this.jComponent[0]);
        var xSet = new V.TList<string>();
        var ySet = new V.TList<string>();

        var xs = [];
        var ys = [];
        var data = [];
        var ids = [];
        var axisy = [];
        var axisx = [];
        if (this.values.length() == 0) return;

        this.values.forEach((item) => {
            xs.push(item.ValueX);
            ys.push(item.ValueY);
            data.push(item.Value);
            ids.push(item);
        });


        var self = this;
        this.dotchart = this.raphael.dotchart(0, 0, this.Width, this.Height, xs, ys, data, ids, {
            symbol: "o",
            max: this.DotMaxSize,
            heat: this.HeatMap,
            axis: "0 0 1 1",
            // axisxstep: axisx.length - 1, axisystep: axisy.length - 1,
            gridTextColor: this.GridTextColor,
            titleTextColor: this.TitleTextColor,
            gridTextSize: this.GridTextSize,
            titleTextSize: this.TitleTextSize,
            preUnits: this.PreValueUnit,
            postUnits: this.PostValueUnit,
            gridTextFamily: this.Font,
            gridTitleWeight: this.GridTitleWeight,
            gridTextWeight: this.GridTextWeight,
            axisxtype: " ",
            axisytype: " ",
            opacity: this.Opacity,
            titleX: this.TitleX,
            titleY: this.TitleY
        });

        var hover = new VXCB.Hover({
            parent: this.jComponent
        });

        this.dotchart.hover(
            function () {
                var txt = "";
                var item = this.obj;
                if (item != null) {
                    if (self.onGetLabelText) txt = self.onGetLabelText(item);
                    else txt = item.Value + "<br>" + item.LabelX + "<br>" + item.LabelY;
                }
                //var w = self.jComponent.width() / 2;
                //if (this.x > w)
                //    this.marker = this.marker || self.raphael.tag(this.x, this.y, txt, 180, this.r + 2).insertBefore(this);
                //else this.marker = this.marker || self.raphael.tag(this.x, this.y, txt, 0, this.r + 2).insertBefore(this);
                ////this.marker.show();
                (hover).update.apply(hover, ["<div id='content' style='width:150px;overflow:hidden;'>" + txt + "</div>", this.x, this.y]);

            },
            function () {
                //this.marker && this.marker.hide();
                hover.hide();
            }
            );

        this.dotchart.click(function (x, b, f) {
            if (self.ShowSelectedItem) {
                if ((<any>self).selectednode) {
                    (<any>self).selectednode.attr({ stroke: "none", "stroke-width": 0 })
                 }
                (<any>self).selectednode = this;
                this.attr({ stroke: '#000', "stroke-width": 2 })
            }
            if (self.onClicked) self.onClicked(this.obj);
        });
    }

}
