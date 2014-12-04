import V = require("./VCL");
import VXU = require("./VXUtils");
import VXC = require("./VXComponent");
import VXD = require("./VXDataset");
import VXCB = require("./VXChartBase");

export class TChartLineBase extends VXCB.TGridChartBase {
    public onClicked: (value: V.TLineValue, series: number, idx: number) => void;

    private _showhoverlegend: boolean = true;
    public get ShowHoverLegend(): boolean {
        return this._showhoverlegend;
    }
    public set ShowHoverLegend(val: boolean) {
        if (val != this._showhoverlegend) {
            this._showhoverlegend = val;
            this.drawDelayed(true);
        }
    }

    private _minY: number = null;
    public get YMin(): number {
        return this._minY;
    }
    public set YMin(val: number) {
        if (val != this._minY) {
            this._minY = val;
            this.drawDelayed(true);
        }
    }

    private _maxY: number = null;
    public get YMax(): number {
        return this._maxY;
    }
    public set YMax(val: number) {
        if (val != this._maxY) {
            this._maxY = val;
            this.drawDelayed(true);
        }
    }

    private _series1color: string = "#0b62a4";
    public get Series1Color(): string {
        return this._series1color;
    }
    public set Series1Color(val: string) {
        var isOk = V.Application.checkColorString(val);
        if (!isOk) V.Application.raiseException("'" + val + "' is not valid hex color string");
        else {
            if (val != this._series1color) {
                this._series1color = val;
                this.drawDelayed(true);
            }
        }
    }

    private _series2color: string = "#7A92A3";

    public get Series2Color(): string {
        return this._series2color;
    }
    public set Series2Color(val: string) {
        var isOk = V.Application.checkColorString(val);
        if (!isOk) V.Application.raiseException("'" + val + "' is not valid hex color string");
        else {
            if (val != this._series2color) {
                this._series2color = val;
                this.drawDelayed(true);
            }
        }
    }

    private _series3color: string = "#4da74d";
    public get Series3Color(): string {
        return this._series3color;
    }
    public set Series3Color(val: string) {
        var isOk = V.Application.checkColorString(val);
        if (!isOk) V.Application.raiseException("'" + val + "' is not valid hex color string");
        else {
            if (val != this._series3color) {
                this._series3color = val;
                this.drawDelayed(true);
            }
        }
    }

    private _series4color: string = "#afd8f8";
    public get Series4Color(): string {
        return this._series4color;
    }
    public set Series4Color(val: string) {
        var isOk = V.Application.checkColorString(val);
        if (!isOk) V.Application.raiseException("'" + val + "' is not valid hex color string");
        else {
            if (val != this._series4color) {
                this._series4color = val;
                this.drawDelayed(true);
            }
        }
    }

    private _series5color: string = "#edc240";
    public get Series5Color(): string {
        return this._series5color;
    }
    public set Series5Color(val: string) {
        var isOk = V.Application.checkColorString(val);
        if (!isOk) V.Application.raiseException("'" + val + "' is not valid hex color string");
        else {
            if (val != this._series5color) {
                this._series5color = val;
                this.drawDelayed(true);
            }
        }
    }

    private _series6color: string = "#cb4b4b";
    public get Series6Color(): string {
        return this._series6color;
    }
    public set Series6Color(val: string) {
        var isOk = V.Application.checkColorString(val);
        if (!isOk) V.Application.raiseException("'" + val + "' is not valid hex color string");
        else {
            if (val != this._series6color) {
                this._series6color = val;
                this.drawDelayed(true);
            }
        }
    }


    private _series7color: string = "#727272";
    public get Series7Color(): string {
        return this._series7color;
    }
    public set Series7Color(val: string) {
        var isOk = V.Application.checkColorString(val);
        if (!isOk) V.Application.raiseException("'" + val + "' is not valid hex color string");
        else {
            if (val != this._series7color) {
                this._series7color = val;
                this.drawDelayed(true);
            }
        }
    }
    private _series8color: string = "#f1595f";
    public get Series8Color(): string {
        return this._series8color;
    }
    public set Series8Color(val: string) {
        var isOk = V.Application.checkColorString(val);
        if (!isOk) V.Application.raiseException("'" + val + "' is not valid hex color string");
        else {
            if (val != this._series8color) {
                this._series8color = val;
                this.drawDelayed(true);
            }
        }
    }
    private _series9color: string = "#79c36a";
    public get Series9Color(): string {
        return this._series9color;
    }
    public set Series9Color(val: string) {
        var isOk = V.Application.checkColorString(val);
        if (!isOk) V.Application.raiseException("'" + val + "' is not valid hex color string");
        else {
            if (val != this._series9color) {
                this._series9color = val;
                this.drawDelayed(true);
            }
        }
    }
    private _series10color: string = "#599ad3";
    public get Series10Color(): string {
        return this._series10color;
    }
    public set Series10Color(val: string) {
        var isOk = V.Application.checkColorString(val);
        if (!isOk) V.Application.raiseException("'" + val + "' is not valid hex color string");
        else {
            if (val != this._series10color) {
                this._series10color = val;
                this.drawDelayed(true);
            }
        }
    }

    private _series11color: string = "#EAA83A";
    public get Series11Color(): string {
        return this._series11color;
    }
    public set Series11Color(val: string) {
        var isOk = V.Application.checkColorString(val);
        if (!isOk) V.Application.raiseException("'" + val + "' is not valid hex color string");
        else {
            if (val != this._series11color) {
                this._series11color = val;
                this.drawDelayed(true);
            }
        }
    }


    private _series12color: string = "#f9a65a";
    public get Series12Color(): string {
        return this._series12color;
    }
    public set Series12Color(val: string) {
        var isOk = V.Application.checkColorString(val);
        if (!isOk) V.Application.raiseException("'" + val + "' is not valid hex color string");
        else {
            if (val != this._series12color) {
                this._series12color = val;
                this.drawDelayed(true);
            }
        }
    }

    private _series13color: string = "#9e66ab";
    public get Series13Color(): string {
        return this._series13color;
    }
    public set Series13Color(val: string) {
        var isOk = V.Application.checkColorString(val);
        if (!isOk) V.Application.raiseException("'" + val + "' is not valid hex color string");
        else {
            if (val != this._series13color) {
                this._series13color = val;
                this.drawDelayed(true);
            }
        }
    }


    private _series14color: string = "#cd7058";
    public get Series14Color(): string {
        return this._series14color;
    }
    public set Series14Color(val: string) {
        var isOk = V.Application.checkColorString(val);
        if (!isOk) V.Application.raiseException("'" + val + "' is not valid hex color string");
        else {
            if (val != this._series14color) {
                this._series14color = val;
                this.drawDelayed(true);
            }
        }
    }


    private _series15color: string = "#d77fb3";
    public get Series15Color(): string {
        return this._series15color;
    }
    public set Series15Color(val: string) {
        var isOk = V.Application.checkColorString(val);
        if (!isOk) V.Application.raiseException("'" + val + "' is not valid hex color string");
        else {
            if (val != this._series15color) {
                this._series15color = val;
                this.drawDelayed(true);
            }
        }
    }

    private _series1name: string = null;
    public get Series1Name(): string {
        return this._series1name;
    }
    public set Series1Name(val: string) {
        if (val != this._series1name) {
            this._series1name = val;
            this.drawDelayed(true);
        }
    }

    private _series2name: string = null;
    public get Series2Name(): string {
        return this._series2name;
    }
    public set Series2Name(val: string) {
        if (val != this._series2name) {
            this._series2name = val;
            this.drawDelayed(true);
        }
    }

    private _series3name: string = null;
    public get Series3Name(): string {
        return this._series3name;
    }
    public set Series3Name(val: string) {
        if (val != this._series3name) {
            this._series3name = val;
            this.drawDelayed(true);
        }
    }

    private _series4name: string = null;
    public get Series4Name(): string {
        return this._series4name;
    }
    public set Series4Name(val: string) {
        if (val != this._series4name) {
            this._series4name = val;
            this.drawDelayed(true);
        }
    }

    private _series5name: string = null;
    public get Series5Name(): string {
        return this._series5name;
    }
    public set Series5Name(val: string) {
        if (val != this._series5name) {
            this._series5name = val;
            this.drawDelayed(true);
        }
    }

    private _series6name: string = null;
    public get Series6Name(): string {
        return this._series6name;
    }
    public set Series6Name(val: string) {
        if (val != this._series6name) {
            this._series6name = val;
            this.drawDelayed(true);
        }
    }

    private _series7name: string = null;
    public get Series7Name(): string {
        return this._series7name;
    }
    public set Series7Name(val: string) {
        if (val != this._series7name) {
            this._series7name = val;
            this.drawDelayed(true);
        }
    }


    private _series8name: string = null;
    public get Series8Name(): string {
        return this._series8name;
    }
    public set Series8Name(val: string) {
        if (val != this._series8name) {
            this._series8name = val;
            this.drawDelayed(true);
        }
    }
    private _series9name: string = null;
    public get Series9Name(): string {
        return this._series9name;
    }
    public set Series9Name(val: string) {
        if (val != this._series9name) {
            this._series9name = val;
            this.drawDelayed(true);
        }
    }
    private _series10name: string = null;
    public get Series10Name(): string {
        return this._series10name;
    }
    public set Series10Name(val: string) {
        if (val != this._series10name) {
            this._series10name = val;
            this.drawDelayed(true);
        }
    }

    private _series11name: string = null;
    public get Series11Name(): string {
        return this._series11name;
    }
    public set Series11Name(val: string) {
        if (val != this._series11name) {
            this._series11name = val;
            this.drawDelayed(true);
        }
    }


    private _series12name: string = null;
    public get Series12Name(): string {
        return this._series12name;
    }
    public set Series12Name(val: string) {
        if (val != this._series12name) {
            this._series12name = val;
            this.drawDelayed(true);
        }
    }


    private _series13name: string = null;
    public get Series13Name(): string {
        return this._series13name;
    }
    public set Series13Name(val: string) {
        if (val != this._series13name) {
            this._series13name = val;
            this.drawDelayed(true);
        }
    }


    private _series14name: string = null;
    public get Series14Name(): string {
        return this._series14name;
    }
    public set Series14Name(val: string) {
        if (val != this._series14name) {
            this._series14name = val;
            this.drawDelayed(true);
        }
    }


    private _series15name: string = null;
    public get Series15Name(): string {
        return this._series15name;
    }
    public set Series15Name(val: string) {
        if (val != this._series15name) {
            this._series15name = val;
            this.drawDelayed(true);
        }
    }

    /**
     * When set to false (the default), all null and undefined values in a data series will be ignored and lines will be drawn spanning them. 
    **/
    private _continuousine: boolean = false;
    public get ContinuousLine(): boolean {
        return this._continuousine;
    }
    public set ContinuousLine(val: boolean) {
        if (val != this._continuousine) {
            this._continuousine = val;
            this.drawDelayed(true);
        }
    }

    /**
     *  enable line smoothing. 
    */
    private _smooth: boolean = true;
    public get Smooth(): boolean {
        return this._smooth;
    }
    public set Smooth(val: boolean) {
        if (val != this._smooth) {
            this._smooth = val;
            this.drawDelayed(false);
        }
    }

    private _linewidth: number = 3;
    public get LineWidth(): number {
        return this._linewidth;
    }
    public set LineWidth(val: number) {
        if (val != this._linewidth) {
            this._linewidth = val;
            this.drawDelayed(false);
        }
    }

    private _defSelectionLast: boolean = false;
    public get SetLastSelected(): boolean {
        return this._defSelectionLast;
    }
    public set SetLastSelected(val: boolean) {
        if (val != this._defSelectionLast) {
            this._defSelectionLast = val;
            this.drawDelayed(true);
        }
    }

    public values = new VXCB.TChartValuesCollection<VXCB.TLineValue>();
    public createValue(date: any,
        value1?: number, value2?: number, value3?: number,
        value4?: number, value5?: number, value6?: number,
        value7?: number, value8?: number, value9?: number,
        value10?: number, value11?: number, value12?: number,
        value13?: number, value14?: number, value15?: number): VXCB.TLineValue {
        var col = new VXCB.TLineValue();

        col.Date = date;
        col.Value1 = value1;
        col.Value2 = value2;
        col.Value3 = value3;
        col.Value4 = value4;
        col.Value5 = value5;
        col.Value6 = value6;
        col.Value7 = value7;
        col.Value8 = value8;
        col.Value9 = value9;
        col.Value10 = value10;
        col.Value11 = value11;
        col.Value12 = value12;
        col.Value13 = value13;
        col.Value14 = value14;
        col.Value15 = value15;
        this.values.add(col);

        return col;
    }


    public getData(): any[] {
        var dataArray = [];
        this.values.forEach((valueOfElement: VXCB.TLineValue) => {
            dataArray.push({
                x: valueOfElement.Date,
                id: valueOfElement.ID,
                value1: !isFinite(valueOfElement.Value1) ? null : valueOfElement.Value1,
                value2: !isFinite(valueOfElement.Value2) ? null : valueOfElement.Value2,
                value3: !isFinite(valueOfElement.Value3) ? null : valueOfElement.Value3,
                value4: !isFinite(valueOfElement.Value4) ? null : valueOfElement.Value4,
                value5: !isFinite(valueOfElement.Value5) ? null : valueOfElement.Value5,
                value6: !isFinite(valueOfElement.Value6) ? null : valueOfElement.Value6,
                value7: !isFinite(valueOfElement.Value7) ? null : valueOfElement.Value7,
                value8: !isFinite(valueOfElement.Value8) ? null : valueOfElement.Value8,
                value9: !isFinite(valueOfElement.Value9) ? null : valueOfElement.Value9,
                value10: !isFinite(valueOfElement.Value10) ? null : valueOfElement.Value10,
                value11: !isFinite(valueOfElement.Value11) ? null : valueOfElement.Value11,
                value12: !isFinite(valueOfElement.Value12) ? null : valueOfElement.Value12,
                value13: !isFinite(valueOfElement.Value13) ? null : valueOfElement.Value13,
                value14: !isFinite(valueOfElement.Value14) ? null : valueOfElement.Value14,
                value15: !isFinite(valueOfElement.Value15) ? null : valueOfElement.Value15
            });
            return true;
        });
        return dataArray;
    }

}


export class TChartLine extends TChartLineBase {
    private jChart: Line;

    public selectedItem(series: number, idx: number, fireEvents: boolean) {
        this.jChart.clickItem(series, idx, fireEvents);
    }

    public draw(reCreate: boolean) {
        if (!this.parentInitialized()) return;
        super.draw(reCreate);

        this.jChart.setData(this.getData());
    }

    public create() {
        this.jComponent.empty(); //clear all subcomponents
        this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'div', this.FitToWidth, this.FitToHeight);
        var ymin = this.YMin != null ? String(this.YMin) : 'auto';
        var ymax = this.YMax != null ? String(this.YMax) : 'auto';

        this.jChart = new Line({
            element: this.jComponent[0],
            xkey: "x",
            ykeys: [
                "value1", "value2", "value3", "value4", "value5",
                "value6", "value7", "value8", "value9", "value10",
                "value11", "value12", "value13", "value14", "value15"
            ],
            labels: [
                this.Series1Name, this.Series2Name, this.Series3Name, this.Series4Name, this.Series5Name, this.Series6Name,
                this.Series7Name, this.Series8Name, this.Series9Name, this.Series10Name, this.Series11Name, this.Series12Name,
                this.Series13Name, this.Series14Name, this.Series15Name
            ],
            lineWidth: this.LineWidth,
            pointSize: 3,
            lineColors: [
                this.Series1Color, this.Series2Color, this.Series3Color, this.Series4Color, this.Series5Color, this.Series6Color,
                this.Series7Color, this.Series8Color, this.Series9Color, this.Series10Color, this.Series11Color, this.Series12Color,
                this.Series13Color, this.Series14Color, this.Series15Color
            ],
            pointWidths: [1],
            pointStrokeColors: ['#ffffff'],
            titleX: this.TitleX,
            paddingX: this.TitleX ? 35 : 15,
            titleY: this.TitleY,
            paddingY: this.TitleY ? 35 : 15,
            xLabelAngle: this.XLabelAngle,
            xLabelFormat: this.XLabelFormat,
            yLabelFormat: this.YLabelFormat,
            toolTipFormat: this.ToolTipFormat,
            pointFillColors: [],
            smooth: this.Smooth,
            xLabels: 'auto',
            hideHover: this.ShowHoverLegend,
            xLabelMargin: this.XLabelMargin,
            grid: this.ShowGridLines,
            continuousLine: this.ContinuousLine,
            preUnits: this.PreValueUnit,
            postUnits: this.PostValueUnit,
            gridTextSize: this.GridTextSize,
            gridTextColor: this.GridTextColor,
            titleTextColor: this.TitleTextColor,
            titleTextSize: this.TitleTextSize,
            gridTextFamily: this.Font,
            gridTitleWeight: this.GridTitleWeight,
            gridTextWeight: this.GridTextWeight,
            ymax: ymax,
            ymin: ymin,
            ygap: this.YGap,
            axisx: this.ShowXAxisLabels,
            axisy: this.ShowYAxisLabels,
        }, this);

        super.create();
    }
}

export class TChartArea extends TChartLineBase {
    private jChart: Area;


    private _fillopacity: number = 0.3;
    public get FillOpacity(): number {
        return this._fillopacity;
    }
    public set FillOpacity(val: number) {
        if (val != this._fillopacity) {
            this._fillopacity = val;
            this.drawDelayed(true);
        }
    }


    private _series1areacolor: string = "#0b62a4";
    public get Series1AreaColor(): string {
        return this._series1areacolor;
    }
    public set Series1AreaColor(val: string) {
        var isOk = V.Application.checkColorString(val);
        if (!isOk) V.Application.raiseException("'" + val + "' is not valid hex color string");
        else {
            if (val != this._series1areacolor) {
                this._series1areacolor = val;
                this.drawDelayed(true);
            }
        }
    }

    private _series2areacolor: string = "#7A92A3";

    public get Series2AreaColor(): string {
        return this._series2areacolor;
    }
    public set Series2AreaColor(val: string) {
        var isOk = V.Application.checkColorString(val);
        if (!isOk) V.Application.raiseException("'" + val + "' is not valid hex color string");
        else {
            if (val != this._series2areacolor) {
                this._series2areacolor = val;
                this.drawDelayed(true);
            }
        }
    }

    private _series3areacolor: string = "#4da74d";
    public get Series3AreaColor(): string {
        return this._series3areacolor;
    }
    public set Series3AreaColor(val: string) {
        var isOk = V.Application.checkColorString(val);
        if (!isOk) V.Application.raiseException("'" + val + "' is not valid hex color string");
        else {
            if (val != this._series3areacolor) {
                this._series3areacolor = val;
                this.drawDelayed(true);
            }
        }
    }

    private _series4areacolor: string = "#afd8f8";
    public get Series4AreaColor(): string {
        return this._series4areacolor;
    }
    public set Series4AreaColor(val: string) {
        var isOk = V.Application.checkColorString(val);
        if (!isOk) V.Application.raiseException("'" + val + "' is not valid hex color string");
        else {
            if (val != this._series4areacolor) {
                this._series4areacolor = val;
                this.drawDelayed(true);
            }
        }
    }

    private _series5areacolor: string = "#edc240";
    public get Series5AreaColor(): string {
        return this._series5areacolor;
    }
    public set Series5AreaColor(val: string) {
        var isOk = V.Application.checkColorString(val);
        if (!isOk) V.Application.raiseException("'" + val + "' is not valid hex color string");
        else {
            if (val != this._series5areacolor) {
                this._series5areacolor = val;
                this.drawDelayed(true);
            }
        }
    }

    private _series6areacolor: string = "#cb4b4b";
    public get Series6AreaColor(): string {
        return this._series6areacolor;
    }
    public set Series6AreaColor(val: string) {
        var isOk = V.Application.checkColorString(val);
        if (!isOk) V.Application.raiseException("'" + val + "' is not valid hex color string");
        else {
            if (val != this._series6areacolor) {
                this._series6areacolor = val;
                this.drawDelayed(true);
            }
        }
    }

    private _series7areacolor: string = "#727272";
    public get Series7AreaColor(): string {
        return this._series7areacolor;
    }
    public set Series7AreaColor(val: string) {
        var isOk = V.Application.checkColorString(val);
        if (!isOk) V.Application.raiseException("'" + val + "' is not valid hex color string");
        else {
            if (val != this._series7areacolor) {
                this._series7areacolor = val;
                this.drawDelayed(true);
            }
        }
    }
    private _series8areacolor: string = "#f1595f";
    public get Series8AreaColor(): string {
        return this._series8areacolor;
    }
    public set Series8AreaColor(val: string) {
        var isOk = V.Application.checkColorString(val);
        if (!isOk) V.Application.raiseException("'" + val + "' is not valid hex color string");
        else {
            if (val != this._series8areacolor) {
                this._series8areacolor = val;
                this.drawDelayed(true);
            }
        }
    }
    private _series9areacolor: string = "#79c36a";
    public get Series9AreaColor(): string {
        return this._series9areacolor;
    }
    public set Series9AreaColor(val: string) {
        var isOk = V.Application.checkColorString(val);
        if (!isOk) V.Application.raiseException("'" + val + "' is not valid hex color string");
        else {
            if (val != this._series9areacolor) {
                this._series9areacolor = val;
                this.drawDelayed(true);
            }
        }
    }
    private _series10areacolor: string = "#599ad3";
    public get Series10AreaColor(): string {
        return this._series10areacolor;
    }
    public set Series10AreaColor(val: string) {
        var isOk = V.Application.checkColorString(val);
        if (!isOk) V.Application.raiseException("'" + val + "' is not valid hex color string");
        else {
            if (val != this._series10areacolor) {
                this._series10areacolor = val;
                this.drawDelayed(true);
            }
        }
    }

    private _series11areacolor: string = "#EAA83A";
    public get Series11AreaColor(): string {
        return this._series11areacolor;
    }
    public set Series11AreaColor(val: string) {
        var isOk = V.Application.checkColorString(val);
        if (!isOk) V.Application.raiseException("'" + val + "' is not valid hex color string");
        else {
            if (val != this._series11areacolor) {
                this._series11areacolor = val;
                this.drawDelayed(true);
            }
        }
    }


    private _series12areacolor: string = "#f9a65a";
    public get Series12AreaColor(): string {
        return this._series12areacolor;
    }
    public set Series12AreaColor(val: string) {
        var isOk = V.Application.checkColorString(val);
        if (!isOk) V.Application.raiseException("'" + val + "' is not valid hex color string");
        else {
            if (val != this._series12areacolor) {
                this._series12areacolor = val;
                this.drawDelayed(true);
            }
        }
    }

    private _series13areacolor: string = "#9e66ab";
    public get Series13AreaColor(): string {
        return this._series13areacolor;
    }
    public set Series13AreaColor(val: string) {
        var isOk = V.Application.checkColorString(val);
        if (!isOk) V.Application.raiseException("'" + val + "' is not valid hex color string");
        else {
            if (val != this._series13areacolor) {
                this._series13areacolor = val;
                this.drawDelayed(true);
            }
        }
    }


    private _series14areacolor: string = "#cd7058";
    public get Series14AreaColor(): string {
        return this._series14areacolor;
    }
    public set Series14AreaColor(val: string) {
        var isOk = V.Application.checkColorString(val);
        if (!isOk) V.Application.raiseException("'" + val + "' is not valid hex color string");
        else {
            if (val != this._series14areacolor) {
                this._series14areacolor = val;
                this.drawDelayed(true);
            }
        }
    }

    private _series15areacolor: string = "#d77fb3";
    public get Series15AreaColor(): string {
        return this._series15areacolor;
    }
    public set Series15AreaColor(val: string) {
        var isOk = V.Application.checkColorString(val);
        if (!isOk) V.Application.raiseException("'" + val + "' is not valid hex color string");
        else {
            if (val != this._series15areacolor) {
                this._series15areacolor = val;
                this.drawDelayed(true);
            }
        }
    }


    public draw(reCreate: boolean) {
        if (!this.parentInitialized()) return;
        super.draw(reCreate);
        this.jChart.setData(this.getData());
    }

    public create() {
        if (this.jChart == null) {
            this.jComponent.empty(); //clear all subcomponents
            this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'div', this.FitToWidth, this.FitToHeight);
            var ymin = this.YMin != null ? String(this.YMin) : 'auto'
            var ymax = this.YMax != null ? String(this.YMax) : 'auto'


        this.jChart = new Area({
                element: this.jComponent[0],
                xkey: "x",
                ykeys: [
                    "value1", "value2", "value3", "value4", "value5",
                    "value6", "value7", "value8", "value9", "value10",
                    "value11", "value12", "value13", "value14", "value15"
                ],
                labels: [
                    this.Series1Name, this.Series2Name, this.Series3Name, this.Series4Name, this.Series5Name, this.Series6Name,
                    this.Series7Name, this.Series8Name, this.Series9Name, this.Series10Name, this.Series11Name, this.Series12Name,
                    this.Series13Name, this.Series14Name, this.Series15Name
                ],
                lineWidth: this.LineWidth,
                pointSize: 3,
                lineColors: [
                    this.Series1Color, this.Series2Color, this.Series3Color, this.Series4Color, this.Series5Color, this.Series6Color,
                    this.Series7Color, this.Series8Color, this.Series9Color, this.Series10Color, this.Series11Color, this.Series12Color,
                    this.Series13Color, this.Series14Color, this.Series15Color,
                ],
                areaColors: [
                    this.Series1AreaColor, this.Series2AreaColor, this.Series3AreaColor, this.Series4AreaColor, this.Series5AreaColor, this.Series6AreaColor,
                    this.Series7AreaColor, this.Series8AreaColor, this.Series9AreaColor, this.Series10AreaColor, this.Series11AreaColor, this.Series12AreaColor,
                    this.Series13AreaColor, this.Series14AreaColor, this.Series15AreaColor,
                ],
                pointWidths: [1],
                pointStrokeColors: ['#ffffff'],
                titleX: this.TitleX,
                paddingX: this.TitleX ? 35 : 15,
                titleY: this.TitleY,
                paddingY: this.TitleY ? 35 : 15,
                xLabelAngle: this.XLabelAngle,
                xLabelFormat: this.XLabelFormat,
                yLabelFormat: this.YLabelFormat,
                toolTipFormat: this.ToolTipFormat,
                pointFillColors: [],
                smooth: this.Smooth,
                xLabels: 'auto',
                hideHover: this.ShowHoverLegend,
                xLabelMargin: this.XLabelMargin,
                grid: this.ShowGridLines,
                continuousLine: this.ContinuousLine,
                preUnits: this.PreValueUnit,
                postUnits: this.PostValueUnit,
                gridTextSize: this.GridTextSize,
                gridTextColor: this.GridTextColor,
                titleTextColor: this.TitleTextColor,
                titleTextSize: this.TitleTextSize,
                gridTextFamily: this.Font,
                gridTitleWeight: this.GridTitleWeight,
                gridTextWeight: this.GridTextWeight,
                ymax: ymax,
                ymin: ymin,
                ygap: this.YGap,
                axisx: this.ShowXAxisLabels,
                axisy: this.ShowYAxisLabels,
                fillOpacity: this.FillOpacity,
                behaveLikeLine: false,
            }, this);
        }
        super.create();
    }
}

export class TDBChartLine extends TChartLine {
    private _value1field: string;
    /**
    * Specifies the field from which the edit control displays data.
    */
    public get ValueField1(): string {
        return this._value1field;
    }
    public set ValueField1(val: string) {
        if (val != this._value1field) {
            this._value1field = val.toUpperCase();
            this.drawDelayed(true);
        }
    }

    private _value2field: string;
    /**
    * Specifies the field from which the edit control displays data.
    */
    public get ValueField2(): string {
        return this._value2field;
    }
    public set ValueField2(val: string) {
        if (val != this._value2field) {
            this._value2field = val.toUpperCase();
            this.drawDelayed(true);
        }
    }

    private _value3field: string;
    /**
    * Specifies the field from which the edit control displays data.
    */
    public get ValueField3(): string {
        return this._value3field;
    }
    public set ValueField3(val: string) {
        if (val != this._value3field) {
            this._value3field = val.toUpperCase();
            this.draw(true);
        }
    }


    private _value4field: string;
    /**
    * Specifies the field from which the edit control displays data.
    */
    public get ValueField4(): string {
        return this._value4field;
    }
    public set ValueField4(val: string) {
        if (val != this._value4field) {
            this._value4field = val.toUpperCase();
            this.drawDelayed(true);
        }
    }

    private _value5field: string;
    /**
    * Specifies the field from which the edit control displays data.
    */
    public get ValueField5(): string {
        return this._value5field;
    }
    public set ValueField5(val: string) {
        if (val != this._value5field) {
            this._value5field = val.toUpperCase();
            this.drawDelayed(true);
        }
    }

    private _value6field: string;
    /**
    * Specifies the field from which the edit control displays data.
    */
    public get ValueField6(): string {
        return this._value6field;
    }
    public set ValueField6(val: string) {
        if (val != this._value6field) {
            this._value6field = val.toUpperCase();
            this.drawDelayed(true);
        }
    }

    private _value7field: string;
    /**
    * Specifies the field from which the edit control displays data.
    */
    public get ValueField7(): string {
        return this._value7field;
    }
    public set ValueField7(val: string) {
        if (val != this._value7field) {
            this._value7field = val.toUpperCase();
            this.drawDelayed(true);
        }
    }

    private _value8field: string;
    /**
    * Specifies the field from which the edit control displays data.
    */
    public get ValueField8(): string {
        return this._value8field;
    }
    public set ValueField8(val: string) {
        if (val != this._value8field) {
            this._value8field = val.toUpperCase();
            this.drawDelayed(true);
        }
    }

    private _value9field: string;
    /**
    * Specifies the field from which the edit control displays data.
    */
    public get ValueField9(): string {
        return this._value9field;
    }
    public set ValueField9(val: string) {
        if (val != this._value9field) {
            this._value9field = val.toUpperCase();
            this.drawDelayed(true);
        }
    }

    private _value10field: string;
    /**
    * Specifies the field from which the edit control displays data.
    */
    public get ValueField10(): string {
        return this._value10field;
    }
    public set ValueField10(val: string) {
        if (val != this._value10field) {
            this._value10field = val.toUpperCase();
            this.drawDelayed(true);
        }
    }

    private _value11field: string;
    /**
    * Specifies the field from which the edit control displays data.
    */
    public get ValueField11(): string {
        return this._value11field;
    }
    public set ValueField11(val: string) {
        if (val != this._value11field) {
            this._value11field = val.toUpperCase();
            this.drawDelayed(true);
        }
    }

    private _value12field: string;
    /**
    * Specifies the field from which the edit control displays data.
    */
    public get ValueField12(): string {
        return this._value12field;
    }
    public set ValueField12(val: string) {
        if (val != this._value12field) {
            this._value12field = val.toUpperCase();
            this.drawDelayed(true);
        }
    }

    private _value13field: string;
    /**
    * Specifies the field from which the edit control displays data.
    */
    public get ValueField13(): string {
        return this._value13field;
    }
    public set ValueField13(val: string) {
        if (val != this._value13field) {
            this._value13field = val.toUpperCase();
            this.drawDelayed(true);
        }
    }

    private _value14field: string;
    /**
    * Specifies the field from which the edit control displays data.
    */
    public get ValueField14(): string {
        return this._value14field;
    }
    public set ValueField14(val: string) {
        if (val != this._value14field) {
            this._value14field = val.toUpperCase();
            this.drawDelayed(true);
        }
    }

    private _value15field: string;
    /**
    * Specifies the field from which the edit control displays data.
    */
    public get ValueField15(): string {
        return this._value15field;
    }
    public set ValueField15(val: string) {
        if (val != this._value15field) {
            this._value15field = val.toUpperCase();
            this.drawDelayed(true);
        }
    }

    private _datefield: string;
    /**
    * Specifies the field from which the edit control displays data.
    */
    public get DateField(): string {
        return this._datefield;
    }
    public set DateField(val: string) {
        if (val != this._datefield) {
            this._datefield = val.toUpperCase();
            this.drawDelayed(true);
        }
    }


    private _dataset: VXD.TDataset;
    /*
     * Specifies the dataset that contains the field it represents.
     */
    public get Dataset(): VXD.TDataset {
        return this._dataset;
    }
    public set Dataset(val: VXD.TDataset) {
        if (val != this._dataset) {
            if (this._dataset) {
                (<any>this._dataset).removeEventListener(VXD.TDataset.EVENT_DATA_CHANGED, this);
                (<any>this._dataset).removeEventListener(VXD.TDataset.EVENT_STATE_CHANGED, this);
            }
            this._dataset = val;
            if (this._dataset) {
                (<any>this._dataset).registerEventListener(VXD.TDataset.EVENT_DATA_CHANGED, this, () => { this.drawDelayed(false); });
                (<any>this._dataset).registerEventListener(VXD.TDataset.EVENT_STATE_CHANGED, this, () => { this.drawDelayed(false); });
            }
            this.drawDelayed(true);
        }
    }

    public getData(): any[] {
        this.values.clear();
        var dataArray = [];
        if (this.Dataset == null ||
            (this.ValueField1 == null && this.ValueField2 == null && this.ValueField3 == null && this.ValueField4 == null &&
            this.ValueField5 == null && this.ValueField6 == null && this.ValueField7 == null && this.ValueField8 == null && this.ValueField9 == null &&
            this.ValueField10 == null && this.ValueField11 == null && this.ValueField12 == null && this.ValueField13 == null &&
            this.ValueField14 == null && this.ValueField15) || this.DateField == null) return dataArray;
        if (!this.Dataset.Active) return dataArray;
        this.Dataset.forEach(() => {
            var dtValue: any = this.Dataset.getFieldValue(this.DateField);
            if (dtValue !== null) {
                //if (!dtValue.getMonth)
                //    V.Application.raiseException("Field " + this.DateField + " not contain date value");

                var obj: any = { x: dtValue, id: this.Dataset.Recno }
                if (this.Dataset.getFieldValue(this.ValueField1) && isFinite(this.Dataset.getFieldValue(this.ValueField1))) obj.value1 = this.Dataset.getFieldValue(this.ValueField1);
                if (this.Dataset.getFieldValue(this.ValueField2) && isFinite(this.Dataset.getFieldValue(this.ValueField2))) obj.value2 = this.Dataset.getFieldValue(this.ValueField2);
                if (this.Dataset.getFieldValue(this.ValueField3) && isFinite(this.Dataset.getFieldValue(this.ValueField3))) obj.value3 = this.Dataset.getFieldValue(this.ValueField3);
                if (this.Dataset.getFieldValue(this.ValueField4) && isFinite(this.Dataset.getFieldValue(this.ValueField4))) obj.value4 = this.Dataset.getFieldValue(this.ValueField4);
                if (this.Dataset.getFieldValue(this.ValueField5) && isFinite(this.Dataset.getFieldValue(this.ValueField5))) obj.value5 = this.Dataset.getFieldValue(this.ValueField5);
                if (this.Dataset.getFieldValue(this.ValueField6) && isFinite(this.Dataset.getFieldValue(this.ValueField6))) obj.value6 = this.Dataset.getFieldValue(this.ValueField6);
                if (this.Dataset.getFieldValue(this.ValueField7) && isFinite(this.Dataset.getFieldValue(this.ValueField7))) obj.value7 = this.Dataset.getFieldValue(this.ValueField7);
                if (this.Dataset.getFieldValue(this.ValueField8) && isFinite(this.Dataset.getFieldValue(this.ValueField8))) obj.value8 = this.Dataset.getFieldValue(this.ValueField8);
                if (this.Dataset.getFieldValue(this.ValueField9) && isFinite(this.Dataset.getFieldValue(this.ValueField9))) obj.value9 = this.Dataset.getFieldValue(this.ValueField9);
                if (this.Dataset.getFieldValue(this.ValueField10) && isFinite(this.Dataset.getFieldValue(this.ValueField10))) obj.value10 = this.Dataset.getFieldValue(this.ValueField10);
                if (this.Dataset.getFieldValue(this.ValueField11) && isFinite(this.Dataset.getFieldValue(this.ValueField11))) obj.value11 = this.Dataset.getFieldValue(this.ValueField11);
                if (this.Dataset.getFieldValue(this.ValueField12) && isFinite(this.Dataset.getFieldValue(this.ValueField12))) obj.value12 = this.Dataset.getFieldValue(this.ValueField12);
                if (this.Dataset.getFieldValue(this.ValueField13) && isFinite(this.Dataset.getFieldValue(this.ValueField13))) obj.value13 = this.Dataset.getFieldValue(this.ValueField13);
                if (this.Dataset.getFieldValue(this.ValueField14) && isFinite(this.Dataset.getFieldValue(this.ValueField14))) obj.value14 = this.Dataset.getFieldValue(this.ValueField14);
                if (this.Dataset.getFieldValue(this.ValueField15) && isFinite(this.Dataset.getFieldValue(this.ValueField15))) obj.value15 = this.Dataset.getFieldValue(this.ValueField15);
                dataArray.push(obj);

                var col = new VXCB.TLineValue();
                this.values.add(col);
                col.Value1 = obj.value1;
                col.Value2 = obj.value2;
                col.Value3 = obj.value3;
                col.Value4 = obj.value4;
                col.Value5 = obj.value5;
                col.Value6 = obj.value6;
                col.Value7 = obj.value7;
                col.Value8 = obj.value8;
                col.Value9 = obj.value9;
                col.Value10 = obj.value10;
                col.Value11 = obj.value11;
                col.Value12 = obj.value12;
                col.Value13 = obj.value13;
                col.Value14 = obj.value14;
                col.Value15 = obj.value15;
                col.Date = obj.x;
                col.ID = obj.id;
            }
        });

        return dataArray;
    }
}

export class TDBChartArea extends TChartArea {
    private _value1field: string;
    /**
    * Specifies the field from which the edit control displays data.
    */
    public get ValueField1(): string {
        return this._value1field;
    }
    public set ValueField1(val: string) {
        if (val != this._value1field) {
            this._value1field = val.toUpperCase();
            this.draw(true);
        }
    }

    private _value2field: string;
    /**
    * Specifies the field from which the edit control displays data.
    */
    public get ValueField2(): string {
        return this._value2field;
    }
    public set ValueField2(val: string) {
        if (val != this._value2field) {
            this._value2field = val.toUpperCase();
            this.drawDelayed(true);
        }
    }

    private _value3field: string;
    /**
    * Specifies the field from which the edit control displays data.
    */
    public get ValueField3(): string {
        return this._value3field;
    }
    public set ValueField3(val: string) {
        if (val != this._value3field) {
            this._value3field = val.toUpperCase();
            this.draw(true);
        }
    }


    private _value4field: string;
    /**
    * Specifies the field from which the edit control displays data.
    */
    public get ValueField4(): string {
        return this._value4field;
    }
    public set ValueField4(val: string) {
        if (val != this._value4field) {
            this._value4field = val.toUpperCase();
            this.drawDelayed(true);
        }
    }

    private _value5field: string;
    /**
    * Specifies the field from which the edit control displays data.
    */
    public get ValueField5(): string {
        return this._value5field;
    }
    public set ValueField5(val: string) {
        if (val != this._value5field) {
            this._value5field = val.toUpperCase();
            this.drawDelayed(true);
        }
    }

    private _value6field: string;
    /**
    * Specifies the field from which the edit control displays data.
    */
    public get ValueField6(): string {
        return this._value6field;
    }
    public set ValueField6(val: string) {
        if (val != this._value6field) {
            this._value6field = val.toUpperCase();
            this.drawDelayed(true);
        }
    }


    private _datefield: string;
    /**
    * Specifies the field from which the edit control displays data.
    */
    public get DateField(): string {
        return this._datefield;
    }
    public set DateField(val: string) {
        if (val != this._datefield) {
            this._datefield = val.toUpperCase();
            this.drawDelayed(true);
        }
    }


    private _dataset: VXD.TDataset;
    /*
     * Specifies the dataset that contains the field it represents.
     */
    public get Dataset(): VXD.TDataset {
        return this._dataset;
    }
    public set Dataset(val: VXD.TDataset) {
        if (val != this._dataset) {
            if (this._dataset) {
                (<any>this._dataset).removeEventListener(VXD.TDataset.EVENT_DATA_CHANGED, this);
                (<any>this._dataset).removeEventListener(VXD.TDataset.EVENT_STATE_CHANGED, this);
            }
            this._dataset = val;
            if (this._dataset) {
                (<any>this._dataset).registerEventListener(VXD.TDataset.EVENT_DATA_CHANGED, this, () => { this.draw(false); });
                (<any>this._dataset).registerEventListener(VXD.TDataset.EVENT_STATE_CHANGED, this, () => { this.draw(false); });
            }
            this.draw(true);
        }
    }



    public getData(): any[] {
        this.values.clear();
        var dataArray = [];
        if (this.Dataset == null || (this.ValueField1 == null && this.ValueField2 == null && this.ValueField3 == null && this.ValueField4 == null &&
            this.ValueField5 == null && this.ValueField6 == null) || this.DateField == null) return dataArray;
        if (!this.Dataset.Active) return dataArray;
        this.Dataset.forEach(() => {
            var dtValue: any = this.Dataset.getFieldValue(this.DateField);
            if (dtValue !== null) {
                //if (!dtValue.getMonth) V.Application.raiseException("Field " + this.DateField + " not containt date value");

                var obj: any = {
                    x: dtValue, id: this.Dataset.Recno
                };
                if (this.Dataset.getFieldValue(this.ValueField1)) obj.value1 = this.Dataset.getFieldValue(this.ValueField1);
                if (this.Dataset.getFieldValue(this.ValueField2)) obj.value2 = this.Dataset.getFieldValue(this.ValueField2);
                if (this.Dataset.getFieldValue(this.ValueField3)) obj.value3 = this.Dataset.getFieldValue(this.ValueField3);
                if (this.Dataset.getFieldValue(this.ValueField4)) obj.value4 = this.Dataset.getFieldValue(this.ValueField4);
                if (this.Dataset.getFieldValue(this.ValueField5)) obj.value5 = this.Dataset.getFieldValue(this.ValueField5);
                if (this.Dataset.getFieldValue(this.ValueField6)) obj.value6 = this.Dataset.getFieldValue(this.ValueField6);

                dataArray.push(obj);

                var col = new VXCB.TLineValue();
                this.values.add(col);
                col.Value1 = obj.value1;
                col.Value2 = obj.value2;
                col.Value3 = obj.value3;
                col.Value4 = obj.value4;
                col.Value5 = obj.value5;
                col.Value6 = obj.value6;
                col.Date = dtValue;
                col.ID = this.Dataset.Recno.toString();
            }
        });

        return dataArray;
    }
}


declare var Raphael;
function __bind(fn, me) { return function () { return fn.apply(me, arguments); }; }

class Line extends VXCB.Grid {
    public seriesPoints;
    private pointGrow;
    private pointShrink;
    public paths;


    constructor(options, owner) {
        super(options, owner);

        //this.hilight = __bind(this.hilight, this);

        //this.onHoverOut = __bind(this.onHoverOut, this);

        //this.onHoverMove = __bind(this.onHoverMove, this);
    }

    init() {
        this.pointGrow = Raphael.animation({
            r: this.options.pointSize + 3
        }, 25, 'linear');
        this.pointShrink = Raphael.animation({
            r: this.options.pointSize
        }, 25, 'linear');

        this.hover = new VXCB.Hover({
            parent: this.el
        });
        this.on('hovermove', this.onHoverMove);
        this.on('hoverout', this.onHoverOut);
        return this.on('gridclick', this.onGridClick);

    }


    calc() {
        this.calcPoints();
        return this.generatePaths();
    }

    calcPoints() {
        var row, y, _i, _len, _ref, _results;
        _ref = this.data;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            row = _ref[_i];
            row._x = this.transX(row.x);

            row._y = (function () {
                var _j, _len1, _ref1, _results1;
                _ref1 = row.y;
                _results1 = [];
                for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
                    y = _ref1[_j];
                    if (y != null) {
                        _results1.push(this.transY(y));
                    } else {
                        _results1.push(y);
                    }
                }
                return _results1;
            }).call(this);
            _results.push(row._ymax = Math.max.apply(null, [this.bottom].concat((function () {
                var _j, _len1, _ref1, _results1;
                _ref1 = row._y;
                _results1 = [];
                for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
                    y = _ref1[_j];
                    if (y != null) {
                        _results1.push(y);
                    }
                }
                return _results1;
            })())));
        }
        return _results;
    }

    hitTest(x, y) {
        var index, r, _i, _len, _ref;
        if (this.data.length === 0) {
            return null;
        }
        _ref = this.data.slice(1);
        for (index = _i = 0, _len = _ref.length; _i <= _len; index = ++_i) {
            r = _ref[index];
            if (Math.abs(x - (this.data[index]._x)) < 10) {
                return index;
            }
        }
        return -1;
    }


    onGridClick(x, y, evt) {
        //var index = this.hitTest(x, y);
        var series = evt.target.series;
        var idx = evt.target.idx;
        this.clickItem(series, idx);
    }

    clickItem(series: number, idx: number, fireEvents: boolean = true) {
        if (!this.owner) return;
        var owner = <TChartLine>this.owner;
        if (!owner.SelectionEnabled) return;

        var self = this;
        //set default selection
        if (idx == -1 && series == -1 && owner.SetLastSelected) {
            idx = owner.values.length() - 1;
            var tmp = this.data[idx];
            var max = tmp._y[0];
            for (var i = 0; i < tmp._y.length; i++) {
                if (typeof tmp._y[i] == 'number' && tmp._y[i] <= max)
                    series = i;
                max = tmp._y[i];
            }
        }

        //mark selection
        if (idx >= 0 && idx < owner.values.length()) {
            var id = this.data[idx].id;
            var item = owner.values.FindItemByID(id);

            if (item != null) {

                var o: V.TSelectedChartValue = new V.TSelectedChartValue();
                o.Idx = idx;
                o.Series = series;
                o.ChartValue = item;

                owner.SelectedItem = o;

                this.hoverItem(null, null);

                if (owner instanceof TDBChartLine && (<TDBChartLine>owner).Dataset != null) {
                    (<TDBChartLine>owner).Dataset.Recno = parseInt(id);
                }

                if (fireEvents)
                    if (owner.onClicked)
                        (V.tryAndCatch(() => { owner.onClicked(item, series, idx) }));
            }
        }
    }

    private oldTipId: string = "";
    onHoverMove(x, y, evt) {
        var tipId = evt.target.TipId;
        var idx = evt.target.idx;
        var series = evt.target.series;
        var key = tipId + idx + series + "";
        if (key == this.oldTipId) return;
        this.oldTipId = key;

        //start hover
        var _ref;
        this.hover.hide();
        if (tipId && tipId.indexOf("node") != -1) {
            if (this.options.hideHover)
                (_ref = this.hover).update.apply(_ref, this.hoverItem(idx, series));
        }
        if (tipId && tipId.indexOf("xlabel") != -1) {
            var l = evt.target.TipValue;
            if (this.options.hideHover)
                (_ref = this.hover).update.apply(_ref, ["<div style='pointer-events: none;' class='morris-hover-row-label'>\n  " + l + " \n</div>", x, y]);
        }
    }

    onHoverOut() {
        this.hover.hide();
        return this.hoverItem(null, null);
    }

    private oldPoint = [null, null];
    hoverItem(idx, series) {

        //owner
        var owner = <TChartLine>this.owner;

        if (this.oldPoint[0] != null && this.oldPoint[1] != null)
            this.seriesPoints[this.oldPoint[0]][this.oldPoint[1]].animate(this.pointShrink);

        //check clicked
        owner.SelectedItems.forEach((item) => {
            this.seriesPoints[item.Series][item.Idx].animate(this.pointGrow);
        });

        this.oldPoint = [series, idx];

        //continue?
        if (idx == null && series == null)
            return;

        this.seriesPoints[series][idx].animate(this.pointGrow);

        return this.hoverContentForRow(idx, series);
    }

    hoverContentForRow(index, series) {
        var j, row, x, y, _i, _len, _ref
        row = this.data[index];
        if (row == null) {
            return null;
        }

        row.index = index;
        row.series = series;

        var content: string = "";
        var lblX: string = "";
        if (!this.options.toolTipFormat) {
            lblX = (this.options.titleX ? this.options.titleX + ": " : "") + this.xLabelFormat(row, false, false);
            content = "<div style='pointer-events: none;' class='morris-hover-row-label'>" + lblX + "</div>";
        }
        _ref = row.y;
        for (j = _i = 0, _len = _ref.length; _i < _len; j = ++_i) {
            if (series == j) {
                y = _ref[j];
                if (y != null) {
                    var lblY: string = "";
                    if (this.options.toolTipFormat) {
                        lblY = this.options.toolTipFormat(row);
                    }
                    else {
                        lblY = this.options.labels[j];
                        if (lblY == null) lblY = this.options.titleY;
                        lblY = (this.options.titleY ? this.options.titleY + ": " : "") + (this.yLabelFormat(y, false));
                    }
                    content += "<div style='pointer-events: none;color: " + (this.colorFor(row, j, 'label')) + "'>" + lblY + "</div>";
                }
            }
        }

        //draw location
        return [content, row._x, row._y[series]];
    }

    generatePaths() {
        var c, coords, i, r, smooth;
        return this.paths = (function () {
            var _i, _ref, _ref1, _results;
            _results = [];
            for (i = _i = 0, _ref = this.options.ykeys.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
                smooth = this.options.smooth === true;//|| (_ref1 = this.options.ykeys[i], __indexOf.call(this.options.smooth, _ref1) >= 0);
                coords = (function () {
                    var _j, _len, _ref2, _results1;
                    _ref2 = this.data;
                    _results1 = [];
                    for (_j = 0, _len = _ref2.length; _j < _len; _j++) {
                        r = _ref2[_j];
                        if (r._y[i] !== void 0) {
                            _results1.push({
                                x: r._x,
                                y: r._y[i]
                            });
                        }
                    }
                    return _results1;
                }).call(this);
                if (this.options.continuousLine) {
                    coords = (function () {
                        var _j, _len, _results1;
                        _results1 = [];
                        for (_j = 0, _len = coords.length; _j < _len; _j++) {
                            c = coords[_j];
                            if (c.y !== null) {
                                _results1.push(c);
                            }
                        }
                        return _results1;
                    })();
                }
                if (coords.length > 1) {
                    _results.push(Line.createPath(coords, smooth, this.bottom));
                } else {
                    _results.push(null);
                }
            }
            return _results;
        }).call(this);
    }

    draw() {
        if (this.options.axisx) {
            this.drawXAxis();
        }
        this.drawSeries();

        this.clickItem(-1, -1);

        //if (!this.options.hideHover) {
        //    this.hoverItem(-1, -1);
        //}

        return;
    }

    drawXAxis() {
        var label, labelBox, angleSize, offset, prevAngleMargin, prevLabelMargin, row, textBox, ypos, _i, _ref, _results;
        prevLabelMargin = null;
        prevAngleMargin = null;
        _results = [];
        //draw x title
        ypos = this.bottom + 3;


        if (this.options.titleX) {
            var center = (this.elementWidth / 2);
            this.raphael.text(center, this.elementHeight - this.options.titleTextSize / 2,
                this.options.titleX).
                attr('font-size', this.options.titleTextSize).attr('font-family', this.options.gridTextFamily).
                attr('font-weight', this.options.gridTitleWeight).attr('fill', this.options.titleTextColor);
        }

        var _tmpLabels = [];
        for (var i = _i = 0, _ref = this.data.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
            row = this.data[i];
            label = this.measureText(this.xLabelFormat(row, true), this.options.xLabelAngle);

            //calc angle size - permit calculation of the triangle 
            if (this.options.xLabelAngle !== 0)
                angleSize = this.options.gridTextSize / Math.sin(this.options.xLabelAngle * Math.PI / 180.0);
            else
                angleSize = label.width;

            if (/*i==0 || i == _ref-1 ||*/ this.options.xLabelMargin == null || prevLabelMargin == null || (row._x >= 0 && row._x >= prevLabelMargin && row._x < this.el.width())) {
                _results.push(prevLabelMargin = row._x + angleSize + this.options.xLabelMargin);
                _tmpLabels.push(row);
            }
        }
        this.measureText(null);

        for (var i = 0; i < _tmpLabels.length; i++) {
            row = _tmpLabels[i];
            label = this.drawXAxisLabel(row._x, ypos, this.xLabelFormat(row, true), this.options.xLabelAngle);
            label.node.lastChild.TipValue = this.xLabelFormat(row, true, false);
            label.node.lastChild.TipId = "xlabel";

            //if ((<TChartBar>this.owner).ShowValueOnTop) {
            //    label = this.drawXAxisLabel(row._x, 5, this.valueLabelFormat(row, true), 0);
            //}
        }
        return _results;
    }

    drawSeries() {
        var i, _i, _j, _ref, _ref1, _results;
        this.seriesPoints = [];
        _results = [];
        for (i = _j = _ref1 = this.options.ykeys.length - 1; _ref1 <= 0 ? _j <= 0 : _j >= 0; i = _ref1 <= 0 ? ++_j : --_j) {
            this._drawLineFor(i);
            this._drawPointFor(i);
        }
        return _results;
    }


    _drawPointFor(index) {
        var circle, row, _i, _len, _ref, _results;
        this.seriesPoints[index] = [];
        _ref = this.data;
        _results = [];
        var self = this;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            row = _ref[_i];
            circle = null;
            if (row._y[index] != null) {
                var series = index;
                var idx = _i;
                circle = this.drawLinePoint(row._x, row._y[index], this.options.pointSize, this.colorFor(row, index, 'point'), index);
                circle.node.TipId = "node" + series + "" + idx;
                circle.node.series = series;
                circle.node.idx = idx;
                circle.node.onclick = function (evt) {
                    var offset = $(self.el).offset();
                    self.onGridClick(evt.pageX - offset.left, evt.pageY - offset.top, evt);
                };
            }
            this.seriesPoints[index].push(circle);
        }
        return _results;
    }

    _drawLineFor(index) {
        var path;
        path = this.paths[index];
        if (path !== null) {
            return this.drawLinePath(path, this.colorFor(null, index, 'line'));

        }
        return null;
    }

    static createPath(coords, smooth, bottom) {
        var coord, g, grads, i, ix, lg, path, prevCoord, x1, x2, y1, y2, _i, _len;
        path = "";
        if (smooth) {
            grads = Line.gradients(coords);
        }
        prevCoord = {
            y: null
        };
        for (i = _i = 0, _len = coords.length; _i < _len; i = ++_i) {
            coord = coords[i];
            if (coord.y != null) {
                if (prevCoord.y != null) {
                    if (smooth) {
                        g = grads[i];
                        lg = grads[i - 1];
                        ix = (coord.x - prevCoord.x) / 4;
                        x1 = prevCoord.x + ix;
                        y1 = Math.min(bottom, prevCoord.y + ix * lg);
                        x2 = coord.x - ix;
                        y2 = Math.min(bottom, coord.y - ix * g);
                        path += "C" + x1 + "," + y1 + "," + x2 + "," + y2 + "," + coord.x + "," + coord.y;
                    } else {
                        path += "L" + coord.x + "," + coord.y;
                    }
                } else {
                    if (!smooth || (grads[i] != null)) {
                        path += "M" + coord.x + "," + coord.y;
                    }
                }
            }
            prevCoord = coord;
        }
        return path;
    }

    static gradients(coords) {
        var coord, grad, i, nextCoord, prevCoord, _i, _len, _results;
        grad = function (a, b) {
            return (a.y - b.y) / (a.x - b.x);
        };
        _results = [];
        for (i = _i = 0, _len = coords.length; _i < _len; i = ++_i) {
            coord = coords[i];
            if (coord.y != null) {
                nextCoord = coords[i + 1] || {
                    y: null
                };
                prevCoord = coords[i - 1] || {
                    y: null
                };
                if ((prevCoord.y != null) && (nextCoord.y != null)) {
                    _results.push(grad(prevCoord, nextCoord));
                } else if (prevCoord.y != null) {
                    _results.push(grad(prevCoord, coord));
                } else if (nextCoord.y != null) {
                    _results.push(grad(coord, nextCoord));
                } else {
                    _results.push(null);
                }
            } else {
                _results.push(null);
            }
        }
        return _results;
    }

    //private clickHilight = [];
    //private hoverHilight = [];
    //hilight(index = null, series = null, grow: boolean = true) {
    //    if (index != null && series != null) {
    //        if (this.seriesPoints[series][index]) {
    //            if (grow)
    //                this.seriesPoints[series][index].animate(this.pointGrow);
    //            else
    //                this.seriesPoints[series][index].animate(this.pointShrink);

    //        }
    //    }
    //    return true;
    //}

    colorFor(row, sidx, type) {
        if (typeof this.options.lineColors === 'function') {
            return this.options.lineColors.call(this, row, sidx, type);
        } else if (type === 'point') {
            return this.options.pointFillColors[sidx % this.options.pointFillColors.length] || this.options.lineColors[sidx % this.options.lineColors.length];
        } else if (type === 'area') {
            return this.options.areaColors[sidx % this.options.lineColors.length];

        } else {
            return this.options.lineColors[sidx % this.options.lineColors.length];
        }
    }

    drawLinePath(path, lineColor) {
        return this.raphael.path(path).attr('stroke', lineColor).attr('stroke-width', this.options.lineWidth);
    }

    drawLinePoint(xPos, yPos, size, pointColor, lineIndex) {
        return this.raphael.circle(xPos, yPos, size).attr('fill', pointColor).attr('stroke-width', this.strokeWidthForSeries(lineIndex)).attr('stroke', this.strokeForSeries(lineIndex));
    }

    strokeWidthForSeries(index) {
        return this.options.pointWidths[index % this.options.pointWidths.length];
    }

    strokeForSeries(index) {
        return this.options.pointStrokeColors[index % this.options.pointStrokeColors.length];
    }
}


function labelSeries(dmin, dmax, pxwidth, specName, xLabelFormat) {
    var d, d0, ddensity, name, ret, s, spec, t, _i, _len, _ref;
    ddensity = 110 * (dmax - dmin) / pxwidth;
    d0 = new Date(dmin);
    spec = LABEL_SPECS[specName];
    if (spec === void 0) {
        _ref = AUTO_LABEL_ORDER;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            name = _ref[_i];
            s = LABEL_SPECS[name];
            if (ddensity >= s.span) {
                spec = s;
                break;
            }
        }
    }
    if (spec === void 0) {
        spec = LABEL_SPECS["second"];
    }
    if (xLabelFormat) {
        spec = $.extend({}, spec, {
            fmt: xLabelFormat
        });
    }
    d = spec.start(d0);
    ret = [];
    while ((t = d.getTime()) <= dmax) {
        if (t >= dmin) {
            ret.push([spec.fmt(d), t]);
        }
        spec.incr(d);
    }
    return ret;
}

var AUTO_LABEL_ORDER = ["decade", "year", "month", "day", "hour", "30min", "15min", "10min", "5min", "minute", "30sec", "15sec", "10sec", "5sec", "second"];

var LABEL_SPECS = {
    "decade": {
        span: 172800000000,
        start: function (d) {
            return new Date(d.getFullYear() - d.getFullYear() % 10, 0, 1);
        },
        fmt: function (d) {
            return "" + (d.getFullYear());
        },
        incr: function (d) {
            return d.setFullYear(d.getFullYear() + 10);
        }
    },
    "year": {
        span: 17280000000,
        start: function (d) {
            return new Date(d.getFullYear(), 0, 1);
        },
        fmt: function (d) {
            return "" + (d.getFullYear());
        },
        incr: function (d) {
            return d.setFullYear(d.getFullYear() + 1);
        }
    },
    "month": {
        span: 2419200000,
        start: function (d) {
            return new Date(d.getFullYear(), d.getMonth(), 1);
        },
        fmt: function (d) {
            return "" + (d.getFullYear()) + "-" + (pad2(d.getMonth() + 1));
        },
        incr: function (d) {
            return d.setMonth(d.getMonth() + 1);
        }
    },
    "day": {
        span: 86400000,
        start: function (d) {
            return new Date(d.getFullYear(), d.getMonth(), d.getDate());
        },
        fmt: function (d) {
            return "" + (d.getFullYear()) + "-" + (pad2(d.getMonth() + 1)) + "-" + (pad2(d.getDate()));
        },
        incr: function (d) {
            return d.setDate(d.getDate() + 1);
        }
    },
    "hour": minutesSpecHelper(60),
    "30min": minutesSpecHelper(30),
    "15min": minutesSpecHelper(15),
    "10min": minutesSpecHelper(10),
    "5min": minutesSpecHelper(5),
    "minute": minutesSpecHelper(1),
    "30sec": secondsSpecHelper(30),
    "15sec": secondsSpecHelper(15),
    "10sec": secondsSpecHelper(10),
    "5sec": secondsSpecHelper(5),
    "second": secondsSpecHelper(1)
}

function minutesSpecHelper(interval) {
    return {
        span: interval * 60 * 1000,
        start: function (d) {
            return new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours());
        },
        fmt: function (d) {
            return "" + (pad2(d.getHours())) + ":" + (pad2(d.getMinutes()));
        },
        incr: function (d) {
            return d.setUTCMinutes(d.getUTCMinutes() + interval);
        }
    };
}

function secondsSpecHelper(interval) {
    return {
        span: interval * 1000,
        start: function (d) {
            return new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes());
        },
        fmt: function (d) {
            return "" + (pad2(d.getHours())) + ":" + (pad2(d.getMinutes())) + ":" + (pad2(d.getSeconds()));
        },
        incr: function (d) {
            return d.setUTCSeconds(d.getUTCSeconds() + interval);
        }
    };
}


function pad2(number) {
    return (number < 10 ? '0' : '') + number;
}

class Area extends Line {
    //calcPoints() {
    //    var row, total, y, _i, _len, _ref, _results;
    //    _ref = this.data;
    //    _results = [];
    //    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    //        row = _ref[_i];
    //        row._x = this.transX(row.x);
    //        total = 0;
    //        row._y = (function () {
    //            var _j, _len1, _ref1, _results1;
    //            _ref1 = row.y;
    //            _results1 = [];
    //            for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
    //                y = _ref1[_j];
    //                if (this.options.behaveLikeLine) {
    //                    _results1.push(this.transY(y));
    //                } else {
    //                    total += y || 0;
    //                    _results1.push(this.transY(total));
    //                }
    //            }
    //            return _results1;
    //        }).call(this);
    //        _results.push(row._ymax = Math.max.apply(Math, row._y));
    //    }
    //    return _results;
    //}

    drawSeries() {
        var idx, range, _i, _j, _k, _len, _ref, _ref1, _results, _results1, _results2;
        this.seriesPoints = [];
        if (this.options.behaveLikeLine) {
            range = (function () {
                _results = [];
                for (var _i = 0, _ref = this.options.ykeys.length - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; 0 <= _ref ? _i++ : _i--) { _results.push(_i); }
                return _results;
            }).apply(this);
        } else {
            range = (function () {
                _results1 = [];
                for (var _j = _ref1 = this.options.ykeys.length - 1; _ref1 <= 0 ? _j <= 0 : _j >= 0; _ref1 <= 0 ? _j++ : _j--) { _results1.push(_j); }
                return _results1;
            }).apply(this);
        }
        _results2 = [];

        for (_k = 0, _len = range.length; _k < _len; _k++) {
            idx = _k;
            this._drawFillFor(idx);

            this._drawLineFor(idx);

            _results2.push(this._drawPointFor(idx));
        }
        return _results2;
    }

    _drawFillFor(index) {
        var path;
        path = this.paths[index];
        if (path !== null) {
            path = path + ("L" + (this.transX(this.xmax)) + "," + this.bottom + "L" + (this.transX(this.xmin)) + "," + this.bottom + "Z");
            return this.drawFilledPath(path, this.fillForSeries(index));
        }
    }

    fillForSeries(i) {
        var color;
        color = Raphael.rgb2hsl(this.colorFor(this.data[i], i, 'area'));
        return Raphael.hsl(color.h, this.options.behaveLikeLine ? color.s * 0.9 : color.s * 0.75, Math.min(0.98, this.options.behaveLikeLine ? color.l * 1.2 : color.l * 1.25));
    }

    drawFilledPath(path, fill) {
        var a = this.raphael.path(path).attr('fill', fill).attr('fill-opacity', this.options.fillOpacity).attr('stroke-width', 0).toBack();;
        return a;

    }
}


