import V = require("VCL/VCL");
import VXU = require("VCL/VXUtils");
import VXC = require("VCL/VXComponent");
import VXD = require("VCL/VXDataset");
import VXCB = require("VCL/VXChartBase");

declare var Raphael;
export class VXChartDot extends VXCB.VXChartBase {
    public onClicked: (item: V.TDotValue) => void;

    /*
    * Occurs when the grid needs to paint a hint ,return a string
    */
    public onGetLabelText : (item: V.TDotValue) => string ;

    constructor(aOwner: VXC.VXComponent, renderTo?: string) {
        super(aOwner, renderTo);
        this.FitToWidth = true;
        this.Height = 200;

        this.onGetLabelText = (item: V.TDotValue) => {
            return item.Value + "\n" + item.LabelX + "\n" + item.LabelY;
        }
    }


    private _titleX: string;
    public get TitleX(): string {
        return this._titleX;
    }
    public set TitleX(val: string) {
        if (val != this._titleX) {
            this._titleX = val;
            this.draw(true);
        }
    }

    private _titleY: string;
    public get TitleY(): string {
        return this._titleY;
    }
    public set TitleY(val: string) {
        if (val != this._titleY) {
            this._titleY = val;
            this.draw(true);
        }
    }

    private _showselecteditem: boolean = true;
    /*
    * whether or not to enable coloring higher value symbols with warmer hue
    */
    public get ShowSelectedItem(): boolean {
        return this._showselecteditem;
    }
    public set ShowSelectedItem(val: boolean) {
        if (val != this._showselecteditem) {
            this._showselecteditem = val;
            this.draw(true);
        }
    }

    private _heatmap: boolean = true;
    /*
    * whether or not to enable coloring higher value symbols with warmer hue
    */
    public get HeatMap(): boolean {
        return this._heatmap;
    }
    public set HeatMap(val: boolean) {
        if (val != this._heatmap) {
            this._heatmap = val;
            this.draw(true);
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
            this.draw(true);
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
            this.draw(true);
        }
    }


    public values = new VXCB.VXChartValuesCollection<VXCB.VXDotValue>();
    public createValue(labelX: string, labelY: string, value: number): VXCB.VXDotValue {
        var col = new VXCB.VXDotValue();
        this.values.add(col);
        col.Value = value;
        col.LabelX = labelX;
        col.LabelY = labelY;
        return col;
    }

    public draw(reCreate: boolean) {
        if (!this.showed) return;
        this.create();
    }
    private selectednode: any;

    private raphael: any;
    private dotchart: any;
    public create() {
        this.jComponent.empty(); //clear all subcomponents
        this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'div', this.FitToWidth, this.FitToHeight);
        this.raphael = new Raphael(this.jComponent[0]);
        var xSet = new V.TList<string>();
        var ySet = new V.TList<string>();

        var xs = [];
        var ys = [];
        var data = [];
        var ids  = [];
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

        var self = this;
        this.dotchart = this.raphael.dotchart(0, 0, this.Width, this.Height, xs, ys, data,ids, {
            symbol: "o", max: this.DotMaxSize, heat: this.HeatMap,
            axis: "0 0 1 1",
            axisxstep: axisx.length - 1, axisystep: axisy.length - 1,
            axisxlabels: axisx, axisylabels: axisy,
            axisxtype: " ", axisytype: " ", opacity: this.Opacity,titleX : this.TitleX,titleY : this.TitleY

        }).hover(function () {
            var txt = "";
            if (this.obj != null) txt = self.onGetLabelText(this.obj)
            //this.value + "\n" + this.obj.LabelX + "\n" + this.obj.LabelY;
            var w = self.jComponent.width() / 2;
            if (this.x > w)
                this.marker = this.marker || self.raphael.tag(this.x, this.y, txt, 180, this.r + 2).insertBefore(this);
            else this.marker = this.marker || self.raphael.tag(this.x, this.y, txt, 0, this.r + 2).insertBefore(this);
            this.marker.show();
            }, function () {
                this.marker && this.marker.hide();
            });
        this.dotchart.click(function (x, b, f) {
            if (self.ShowSelectedItem) {
                if (self.selectednode) {
                    self.selectednode.attr({ stroke: "none", "stroke-width": 0 })
                 }
                self.selectednode = this;
                this.attr({ stroke: "#000", "stroke-width": 2 })
            }
            if (self.onClicked) self.onClicked(this.obj);
        });
    }
}
