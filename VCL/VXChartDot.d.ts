import V = require("./VCL");
import VXCB = require("./VXChartBase");
export declare class TChartDotBase extends VXCB.TGridChartBase {
    private selectednode;
    constructor(aOwner: V.TComponent, renderTo?: string);
    private _showselecteditem;
    ShowSelectedItem: boolean;
    private _Dotcolor;
    DotColor: string;
    private _horizontalgridline;
    HorizontalGridLineWidth: number;
    private _gridcolor;
    GridLineColor: string;
    private _vertgridline;
    VerticalGridLineWidth: number;
    private _dotmaxsize;
    DotMaxSize: number;
    private _heatmap;
    /**
    * whether or not to enable coloring higher value symbols with warmer hue
    **/
    HeatMap: boolean;
    private _opacity;
    Opacity: number;
}
export declare class TChartDot extends TChartDotBase {
    onGetLabelText: (item: V.TDotValue) => any;
    /**
        Use the OnClick event handler to respond when the user clicks the control.
    **/
    onClicked: (item: V.TDotValue) => void;
    constructor(aOwner: V.TComponent, renderTo?: string);
    values: VXCB.TChartValuesCollection<VXCB.TDotValue>;
    createValue(labelX: string, labelY: string, value: number): VXCB.TDotValue;
    draw(reCreate: boolean): void;
    private raphael;
    private dotchart;
    create(): void;
}
export declare class TChartBubble extends TChartDotBase {
    private raphael;
    private dotchart;
    onGetLabelText: (item: V.TDotValue) => any;
    onClicked: (item: V.TDotValue) => void;
    constructor(aOwner: V.TComponent, renderTo?: string);
    values: VXCB.TChartValuesCollection<VXCB.TBubbleValue>;
    createValue(valueX: number, valueY: number, value: number): VXCB.TBubbleValue;
    draw(reCreate: boolean): void;
    create(): void;
}
