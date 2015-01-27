import VXC = require("./VXComponent");
import VXO = require("./VXObject");
import VXCO = require("./VXContainer");
import VXP = require("./VXWell");
export declare class TWidgetGrid extends VXCO.TContainer {
    private _minmum_column;
    MinimumColumns: number;
    private _margingorizontal;
    MarginHorizontal: number;
    private _marginvertical;
    MarginVertical: number;
    private _maxcolumns;
    MaxColumns: number;
    private _widgetwidth;
    WidgetWidth: number;
    private _widgetheight;
    WidgetHeight: number;
    jGridster: any;
    create(): void;
    constructor(aOwner: VXC.TComponent, renderTo?: string);
    draw(reCreate: boolean): void;
    widgets: VXO.TCollection<TWdgetPanel>;
    createWidget(renderTo: string, headerText: string, sizeX?: number, sizeY?: number, X?: number, Y?: number): TWdgetPanel;
    addWidget(widget: TWdgetPanel): void;
    private _addWidget(item, fast?);
    WidgetsLayout: string;
    onLayoutChanged: () => void;
    private updateWidgetsPositions(notifyEvent);
}
export declare class TWdgetPanel extends VXP.TPanel {
    widgetElment: JQuery;
    parentGrid: TWidgetGrid;
    private _widgetID;
    WidgetID: string;
    private _sizeY;
    SizeY: number;
    private _sizeX;
    SizeX: number;
    private _Y;
    Y: number;
    private _X;
    X: number;
    constructor(aOwner: VXC.TComponent, renderTo?: string, sizeX?: number, sizeY?: number, headerText?: string);
    create(): void;
    draw(reCreate: boolean): void;
    destroy(): void;
}
