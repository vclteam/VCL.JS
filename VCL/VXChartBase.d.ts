import V = require("./VCL");
import VC = require("./VXComponent");
import VXO = require("./VXObject");
export declare class TChartBase extends VC.TComponent {
    /** Custom Format YLabel*/
    YLabelFormat: (label: number) => string;
    /** Custom Format XLabel*/
    XLabelFormat: (data: any) => string;
    /** Custom Format ToolTip */
    ToolTipFormat: (data: any) => string;
    constructor(aOwner: VC.TComponent, renderTo?: string);
    private _prevalueunit;
    PreValueUnit: string;
    private _postvalueunit;
    PostValueUnit: string;
    private image;
    private takeChartImage();
    exportToJPG(): void;
    private _dateFormatLongMode;
    DateFormatLongMode: boolean;
    private _SelectionEnabeld;
    SelectionEnabled: boolean;
    private _SelectedItems;
    SelectedItems: V.TCollection<TSelectedChartValue>;
    private _SelectedItem;
    SelectedItem: TSelectedChartValue;
    private _multiSelectMode;
    MultiSelectMode: boolean;
    private _TruncateLength;
    TruncateLength: number;
}
export declare class TSelectedChartValue extends VXO.TObject {
    private _series;
    Series: number;
    private _idx;
    Idx: number;
    private _chartValue;
    ChartValue: TChartValue;
}
export declare class TGridChartBase extends TChartBase {
    private _titleX;
    TitleX: string;
    private _titleY;
    TitleY: string;
    /** Angle between 0 - 360 */
    private _xLabelAngle;
    XLabelAngle: number;
    private _xLabelMargin;
    XLabelMargin: number;
    private _gridtextsize;
    GridTextSize: number;
    private _titletextsize;
    TitleTextSize: number;
    private _font;
    Font: string;
    private _gridTextWeight;
    GridTextWeight: string;
    private _titleTextWeight;
    GridTitleWeight: string;
    private _gridtextcolor;
    GridTextColor: string;
    private _titletextcolor;
    TitleTextColor: string;
    private _gapY;
    YGap: number;
    private _showgridlines;
    ShowGridLines: boolean;
    private _showXAxisValue;
    ShowXAxisLabels: boolean;
    private _showYAxisValue;
    ShowYAxisLabels: boolean;
    create(): void;
}
export declare class TChartValue extends VXO.TCollectionItem {
    constructor();
}
export declare class TDountValue extends TChartValue {
    private _value;
    Value: number;
    private _label;
    Label: string;
}
export declare class TDotValue extends TChartValue {
    private _value;
    Value: number;
    private _labelx;
    LabelX: string;
    private _labely;
    LabelY: string;
}
export declare class TBubbleValue extends TChartValue {
    private _value;
    Value: number;
    private _valuex;
    ValueX: number;
    private _valuey;
    ValueY: number;
}
export declare class TBarValue extends TChartValue {
    private _seriesvalue1;
    Value1: number;
    private _seriesvalue2;
    Value2: number;
    private _seriesvalue3;
    Value3: number;
    private _seriesvalue4;
    Value4: number;
    private _seriesvalue5;
    Value5: number;
    private _seriesvalue6;
    Value6: number;
    private _seriesvalue7;
    Value7: number;
    private _seriesvalue8;
    Value8: number;
    private _seriesvalue9;
    Value9: number;
    private _seriesvalue10;
    Value10: number;
    private _seriesvalue11;
    Value11: number;
    private _seriesvalue12;
    Value12: number;
    private _seriesvalue13;
    Value13: number;
    private _seriesvalue14;
    Value14: number;
    private _seriesvalue15;
    Value15: number;
    private _label;
    Label: string;
}
export declare class TLineValue extends TChartValue {
    private _seriesvalue1;
    Value1: number;
    private _seriesvalue2;
    Value2: number;
    private _seriesvalue3;
    Value3: number;
    private _seriesvalue4;
    Value4: number;
    private _seriesvalue5;
    Value5: number;
    private _seriesvalue6;
    Value6: number;
    private _seriesvalue7;
    Value7: number;
    private _seriesvalue8;
    Value8: number;
    private _seriesvalue9;
    Value9: number;
    private _seriesvalue10;
    Value10: number;
    private _seriesvalue11;
    Value11: number;
    private _seriesvalue12;
    Value12: number;
    private _seriesvalue13;
    Value13: number;
    private _seriesvalue14;
    Value14: number;
    private _seriesvalue15;
    Value15: number;
    private _date;
    Date: any;
}
export declare class TChartValuesCollection<T> extends VXO.TCollection<T> {
}
export declare class EventEmitter {
    private handlers;
    owner: TChartBase;
    constructor();
    on(name: any, handler: any): EventEmitter;
    fire(...arg: any[]): any;
}
export declare class Grid extends EventEmitter {
    cumulative: any;
    el: any;
    raphael: any;
    elementWidth: any;
    elementHeight: any;
    dirty: any;
    options: any;
    defaults: any;
    data: any;
    olddata: any;
    hover: any;
    xmin: any;
    xmax: any;
    events: any;
    left: any;
    right: any;
    top: any;
    bottom: any;
    grid: any;
    ygap: any;
    ymax: any;
    ymin: any;
    dy: any;
    dx: any;
    width: any;
    height: any;
    private timeoutId;
    private resizeId;
    constructor(options: any, owner: any);
    init(): void;
    calc(): void;
    postInit(): void;
    draw(): void;
    onHoverMove(x: any, y: any, evt: any): void;
    onHoverOut(x: any, y: any, evt: any): void;
    onGridClick(x: any, y: any, evt: any): void;
    gridDefaults: {
        xkey: string;
        ykeys: string[];
        axisy: boolean;
        axisx: boolean;
        grid: boolean;
        gridLineColor: string;
        gridStrokeWidth: number;
        gridTextColor: string;
        gridTextSize: number;
        gridTextFamily: string;
        gridTextWeight: string;
        hideHover: boolean;
        xLabelFormat: any;
        yLabelFormat: any;
        xLabelAngle: number;
        yLabelAngle: number;
        numLines: number;
        parseTime: boolean;
        postUnits: string;
        preUnits: string;
        ymax: string;
        ymin: string;
        ygap: number;
        goals: any[];
        goalStrokeWidth: number;
        goalLineColors: string[];
        events: any[];
        eventStrokeWidth: number;
        eventLineColors: string[];
        selectedOpacity: number;
        unselectOpacity: number;
        paddingX: number;
        paddingYRight: number;
        paddingY: number;
        paddingXTop: number;
    };
    resizeHandler(self: Grid): void;
    setData(data: any, redraw?: any): void;
    yboundary(boundaryType: any, currentValue: any): any;
    autoGridLines(ymin: any, ymax: any, nlines: any): any;
    _calc(): void;
    transY(y: any): number;
    transX(x: any): any;
    redraw(): void;
    resizeEvent(): void;
    xLabelFormat(data: any, humanFriendly: boolean, useTrancate?: boolean): string;
    yLabelFormat(label: any, humanFriendly: boolean): any;
    doLabelFormat(label: any, humanFriendly: boolean): string;
    hitTest(x: any, y: any): any;
    updateHover(x: any, y: any): any;
    drawGrid(): any;
    drawGoals(): any;
    drawEvents(): any;
    drawGoal(goal: any, color: any): any;
    drawEvent(event: any, color: any): any;
    drawGridLine(path: any): any;
    drawYAxisLabel(xPos: any, yPos: any, text: any, angle?: number): any;
    drawXAxisLabel(xPos: any, yPos: any, text: any, angle?: number): any;
    private timeProcess;
    private tempSpan;
    measureText(text: any, angle?: number): {
        height: any;
        width: any;
    };
    private toRadians(angle);
    trancateText(text: string): string;
}
export declare class Hover {
    private options;
    private el;
    offset: number;
    animation: boolean;
    constructor(options: any);
    update(html: any, x: any, y: any): JQuery;
    html(content: any): JQuery;
    moveTo(x: any, y: any): JQuery;
    show(): void;
    hide(): number;
    doMe(): void;
}
