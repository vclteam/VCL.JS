import VX2 = require("./VXChartBar");
export declare class TChartBarH extends VX2.TChartBar {
    createBar(): Bar;
}
export declare class TDBChartBarH extends VX2.TDBChartBar {
    createBar(): Bar;
}
export declare class Bar extends VX2.Bar {
    _calc1(horizontal: boolean): void;
    redraw(): number;
    drawGridV(): number;
    transY(y: any): number;
    transX(x: any): any;
    drawSeriesV(): void;
    drawXAxisV(): void;
    drawXAxis(): any[];
    onHoverMove(x: any, y: any, evt: any): any;
    onHoverOut(): any;
    hoverContentForRow(index: any, series: any): any[];
}
