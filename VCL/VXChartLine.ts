import V = require("VCL/VCL");
import VXU = require("VCL/VXUtils");
import VXC = require("VCL/VXComponent");
import VXD = require("VCL/VXDataset");
import VXCB = require("VCL/VXChartBase");


export class VXChartLineBase extends VXCB.VXChartBase {
    public onClicked: (value: V.TLineValue) => void;

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

    private _series1color: string = "#0b62a4";
    public get Series1Color(): string {
        return this._series1color;
    }
    public set Series1Color(val: string) {
        var isOk = /^#[0-9A-F]{6}$/i.test(val);
        if (!isOk) V.Application.raiseException("'" + val + "' is not valid hex color string");
        else {
            if (val != this._series1color) {
                this._series1color = val;
                this.draw(true);
            }
        }
    }

    private _series2color: string = "#7A92A3";

    public get Series2Color(): string {
        return this._series2color;
    }
    public set Series2Color(val: string) {
        var isOk = /^#[0-9A-F]{6}$/i.test(val);
        if (!isOk) V.Application.raiseException("'" + val + "' is not valid hex color string");
        else {
            if (val != this._series2color) {
                this._series2color = val;
                this.draw(true);
            }
        }
    }

    private _series3color: string = "#4da74d";
    public get Series3Color(): string {
        return this._series3color;
    }
    public set Series3Color(val: string) {
        var isOk = /^#[0-9A-F]{6}$/i.test(val);
        if (!isOk) V.Application.raiseException("'" + val + "' is not valid hex color string");
        else {
            if (val != this._series3color) {
                this._series3color = val;
                this.draw(true);
            }
        }
    }

    private _series4color: string = "#afd8f8";
    public get Series4Color(): string {
        return this._series4color;
    }
    public set Series4Color(val: string) {
        var isOk = /^#[0-9A-F]{6}$/i.test(val);
        if (!isOk) V.Application.raiseException("'" + val + "' is not valid hex color string");
        else {
            if (val != this._series4color) {
                this._series4color = val;
                this.draw(true);
            }
        }
    }

    private _series5color: string = "#edc240";
    public get Series5Color(): string {
        return this._series5color;
    }
    public set Series5Color(val: string) {
        var isOk = /^#[0-9A-F]{6}$/i.test(val);
        if (!isOk) V.Application.raiseException("'" + val + "' is not valid hex color string");
        else {
            if (val != this._series5color) {
                this._series5color = val;
                this.draw(true);
            }
        }
    }

    private _series6color: string = "#cb4b4b";
    public get Series6Color(): string {
        return this._series6color;
    }
    public set Series6Color(val: string) {
        var isOk = /^#[0-9A-F]{6}$/i.test(val);
        if (!isOk) V.Application.raiseException("'" + val + "' is not valid hex color string");
        else {
            if (val != this._series6color) {
                this._series6color = val;
                this.draw(true);
            }
        }
    }

    private _series1name: string = "Series 1";
    public get Series1Name(): string {
        return this._series1name;
    }
    public set Series1Name(val: string) {
        if (val != this._series1name) {
            this._series1name = val;
            this.draw(true);
        }
    }

    /*
     * When set to false (the default), all null and undefined values in a data series will be ignored and lines will be drawn spanning them. 
     */
    private _continuousine: boolean = false;
    public get ContinuousLine(): boolean {
        return this._continuousine;
    }
    public set ContinuousLine(val: boolean) {
        if (val != this._continuousine) {
            this._continuousine = val;
            this.draw(true);
        }
    }

    /*
     *  enable line smoothing. 
    */
    private _smooth: boolean = true;
    public get Smooth(): boolean {
        return this._smooth;
    }
    public set Smooth(val: boolean) {
        if (val != this._smooth) {
            this._smooth = val;
            this.draw(false);
        }
    }

    private _linewidth: number = 3;
    public get LineWidth(): number {
        return this._linewidth;
    }
    public set LineWidth(val: number) {
        if (val != this._linewidth) {
            this._linewidth = val;
            this.draw(false);
        }
    }

    private _series2name: string = "Series 2";
    public get Series2Name(): string {
        return this._series2name;
    }
    public set Series2Name(val: string) {
        if (val != this._series2name) {
            this._series2name = val;
            this.draw(true);
        }
    }

    private _series3name: string = "Series 3";
    public get Series3Name(): string {
        return this._series3name;
    }
    public set Series3Name(val: string) {
        if (val != this._series3name) {
            this._series3name = val;
            this.draw(true);
        }
    }

    private _series4name: string = "Series 4";
    public get Series4Name(): string {
        return this._series4name;
    }
    public set Series4Name(val: string) {
        if (val != this._series4name) {
            this._series4name = val;
            this.draw(true);
        }
    }

    private _series5name: string = "Series 5";
    public get Series5Name(): string {
        return this._series5name;
    }
    public set Series5Name(val: string) {
        if (val != this._series5name) {
            this._series5name = val;
            this.draw(true);
        }
    }

    private _series6name: string = "Series 6";
    public get Series6Name(): string {
        return this._series6name;
    }
    public set Series6Name(val: string) {
        if (val != this._series6name) {
            this._series6name = val;
            this.draw(true);
        }
    }
    private _showgridlines: boolean = true;
    public get ShowGridLines(): boolean {
        return this._showgridlines;
    }
    public set ShowGridLines(val: boolean) {
        if (val != this._showgridlines) {
            this._showgridlines = val;
            this.draw(true);
        }
    }
    public values = new VXCB.VXChartValuesCollection<VXCB.VXLineValue>();
    public createValue(date: Date, value1?: number, value2?: number, value3?: number,
        value4?: number, value5?: number, value6?: number): VXCB.VXLineValue {
        var col = new VXCB.VXLineValue();
      
        col.Date = new Date(date.getTime());
        col.Value1 = value1;
        col.Value2 = value2;
        col.Value3 = value3;
        col.Value4 = value4;
        col.Value5 = value5;
        col.Value6 = value6;
        this.values.add(col);

        return col;
    }


    public getData(): any[]{
        var dataArray = [];

        this.values.forEach((valueOfElement) => {
            var obj: any = { x: valueOfElement.Date, id: valueOfElement.ID }
            obj.value1= valueOfElement.Value1;
            obj.value2= valueOfElement.Value2;
            obj.value3= valueOfElement.Value3;
            obj.value4= valueOfElement.Value4;
            obj.value5= valueOfElement.Value5;
            obj.value6= valueOfElement.Value6;
            dataArray.push(obj);
            return true;
        });

        return dataArray;
    }
}

export class VXChartLine extends VXChartLineBase {
    private jChart: Line;

    public draw(reCreate: boolean) {
        if (!this.showed) return;
        if (reCreate || !this.initialized) this.create();
        this.initialized = true;

        this.jChart.setData(this.getData());
    }

    public create() {
        this.jComponent.empty(); //clear all subcomponents
        this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'div', this.FitToWidth, this.FitToHeight);

        this.jChart = new Line({
            element: this.jComponent[0],
            xkey: "x",
            ykeys: ["value1", "value2", "value3", "value4", "value5", "value6"],
            labels: [this.Series1Name, this.Series2Name, this.Series3Name, this.Series4Name, this.Series5Name, this.Series6Name],
            lineWidth: this.LineWidth,
            pointSize: 3,
            lineColors: [this.Series1Color, this.Series2Color, this.Series3Color, this.Series4Color,
                this.Series5Color, this.Series6Color],
            pointWidths: [1],
            pointStrokeColors: ['#ffffff'],
            titleX : this.TitleX,
            paddingX: this.TitleX?40:15,
            titleY : this.TitleY,
            paddingY: this.TitleY?40:5,
            pointFillColors: [],
            smooth: this.Smooth,
            xLabels: 'auto',
            hideHover: 'auto',
            xLabelFormat: null,
            xLabelMargin: 15,
            grid: this.ShowGridLines,
            continuousLine: this.ContinuousLine,
            preUnits: this.PreValueUnit,
            postUnits: this.PostValueUnit,
            gridTextSize: 12,
            gridTextFamily: 'sans-serif',
            gridTextWeight: 'normal'
        }, this);

        super.create();
    }
}

export class VXChartArea extends VXChartLineBase {
    private jChart: Area;

   
    private _fillopacity: number = 0.1;
    public get FillOpacity(): number {
        return this._fillopacity;
    }
    public set FillOpacity(val: number) {
        if (val != this._fillopacity) {
            this._fillopacity = val;
            this.draw(true);
        }
    }

    public draw(reCreate: boolean) {
        if (!this.showed) return;
        if (reCreate || !this.initialized) this.create();
        this.initialized = true;
        this.jChart.setData(this.getData());
    }

    public create() {
        this.jComponent.empty(); //clear all subcomponents
        this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'div', this.FitToWidth, this.FitToHeight);

        this.jChart = new Area({
            element: this.jComponent[0],
            xkey: "x",
            ykeys: ["value1", "value2", "value3", "value4", "value5", "value6"],
            labels: [this.Series1Name, this.Series2Name, this.Series3Name, this.Series4Name, this.Series5Name, this.Series6Name],
            lineWidth: this.LineWidth,
            pointSize: 3,
            lineColors: [this.Series1Color, this.Series2Color, this.Series3Color, this.Series4Color,
                this.Series5Color, this.Series6Color],
            pointWidths: [1],
            pointStrokeColors: ['#ffffff'],
            pointFillColors: [],
            smooth: this.Smooth,
            xLabels: 'auto',
            hideHover: 'auto',
            xLabelFormat: null,
            xLabelMargin: 24,
            grid: this.ShowGridLines,
            continuousLine: this.ContinuousLine,
            preUnits: this.PreValueUnit,
            postUnits: this.PostValueUnit,
            fillOpacity: this.FillOpacity,
            behaveLikeLine: false
        }, this);

        super.create();
    }
}


export class VXDBChartLine extends VXChartLine {
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
            this.draw(true);
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
            this.draw(true);
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
            this.draw(true);
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
            this.draw(true);
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
            this.draw(true);
        }
    }


    private _dataset: VXD.VXDataset;
    /*
     * Specifies the dataset that contains the field it represents.
     */
    public get Dataset(): VXD.VXDataset {
        return this._dataset;
    }
    public set Dataset(val: VXD.VXDataset) {
        if (val != this._dataset) {
            if (this._dataset) {
                (<any>this._dataset).removeEventListener(VXD.VXDataset.EVENT_DATA_CHANGED, this);
                (<any>this._dataset).removeEventListener(VXD.VXDataset.EVENT_STATE_CHANGED, this);
            }
            this._dataset = val;
            if (this._dataset) {
                (<any>this._dataset).registerEventListener(VXD.VXDataset.EVENT_DATA_CHANGED, this, () => { this.draw(false); });
                (<any>this._dataset).registerEventListener(VXD.VXDataset.EVENT_STATE_CHANGED, this, () => { this.draw(false); });
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
                if (!dtValue.getMonth) V.Application.raiseException("Field " + this.DateField
                    + " not containt date value");

                var obj: any = { x: (<Date>dtValue), id: this.Dataset.Recno }
                if (this.Dataset.getFieldValue(this.ValueField1)) obj.value1 = this.Dataset.getFieldValue(this.ValueField1);
                if (this.Dataset.getFieldValue(this.ValueField2)) obj.value2 = this.Dataset.getFieldValue(this.ValueField2);
                if (this.Dataset.getFieldValue(this.ValueField3)) obj.value3 = this.Dataset.getFieldValue(this.ValueField3);
                if (this.Dataset.getFieldValue(this.ValueField4)) obj.value4 = this.Dataset.getFieldValue(this.ValueField4);
                if (this.Dataset.getFieldValue(this.ValueField5)) obj.value5 = this.Dataset.getFieldValue(this.ValueField5);
                if (this.Dataset.getFieldValue(this.ValueField6)) obj.value6 = this.Dataset.getFieldValue(this.ValueField6);
                dataArray.push(obj);

                var col = new VXCB.VXLineValue();
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

export class VXDBChartArea extends VXChartArea {
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
            this.draw(true);
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
            this.draw(true);
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
            this.draw(true);
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
            this.draw(true);
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
            this.draw(true);
        }
    }


    private _dataset: VXD.VXDataset;
    /*
     * Specifies the dataset that contains the field it represents.
     */
    public get Dataset(): VXD.VXDataset {
        return this._dataset;
    }
    public set Dataset(val: VXD.VXDataset) {
        if (val != this._dataset) {
            if (this._dataset) {
                (<any>this._dataset).removeEventListener(VXD.VXDataset.EVENT_DATA_CHANGED, this);
                (<any>this._dataset).removeEventListener(VXD.VXDataset.EVENT_STATE_CHANGED, this);
            }
            this._dataset = val;
            if (this._dataset) {
                (<any>this._dataset).registerEventListener(VXD.VXDataset.EVENT_DATA_CHANGED, this, () => { this.draw(false); });
                (<any>this._dataset).registerEventListener(VXD.VXDataset.EVENT_STATE_CHANGED, this, () => { this.draw(false); });
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
                if (!dtValue.getMonth) V.Application.raiseException("Field " + this.DateField
                    + " not containt date value");

                var obj: any = {
                    x: (<Date>dtValue), id: this.Dataset.Recno
                };
                if (this.Dataset.getFieldValue(this.ValueField1)) obj.value1 = this.Dataset.getFieldValue(this.ValueField1);
                if (this.Dataset.getFieldValue(this.ValueField2)) obj.value2 = this.Dataset.getFieldValue(this.ValueField2);
                if (this.Dataset.getFieldValue(this.ValueField3)) obj.value3 = this.Dataset.getFieldValue(this.ValueField3);
                if (this.Dataset.getFieldValue(this.ValueField4)) obj.value4 = this.Dataset.getFieldValue(this.ValueField4);
                if (this.Dataset.getFieldValue(this.ValueField5)) obj.value5 = this.Dataset.getFieldValue(this.ValueField5);
                if (this.Dataset.getFieldValue(this.ValueField6)) obj.value6 = this.Dataset.getFieldValue(this.ValueField6);

                dataArray.push(obj);

                var col = new VXCB.VXLineValue();
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
    public  paths;


    constructor(options, owner) {
        super(options);
        this.owner = owner;
        this.hilight = __bind(this.hilight, this);

        this.onHoverOut = __bind(this.onHoverOut, this);

        this.onHoverMove = __bind(this.onHoverMove, this);
    }

    init() {
        this.pointGrow = Raphael.animation({
            r: this.options.pointSize + 3
        }, 25, 'linear');
        this.pointShrink = Raphael.animation({
            r: this.options.pointSize
        }, 25, 'linear');
        if (this.options.hideHover !== 'always') {
            this.hover = new Hover({
                parent: this.el
            });
            this.on('hovermove', this.onHoverMove);
            this.on('hoverout', this.onHoverOut);
            return this.on('gridclick', this.onGridClick);
        }
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
            _results.push(row._ymax = Math.min.apply(null, [this.bottom].concat((function () {
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

    onGridClick(x, y) {
        if (this.owner == null) return;
        var owner = <VXChartLine>this.owner;
        if (owner.onClicked == null) return;

        var index = this.hitTest(x, y);
        if (index >= 0 && index <= owner.values.length()) {
            var id = this.data[index].id;
            var item = owner.values.FindItemByID(id);

            if (item != null) (V.tryAndCatch(() => {
                if (owner instanceof VXDBChartLine && (<VXDBChartLine>owner).Dataset != null) {
                    (<VXDBChartLine>owner).Dataset.Recno = parseInt(id);
                }

                owner.onClicked(item);
            }));
        }
    }

    onHoverMove(x, y) {
        var index;
        index = this.hitTest(x, y);
        if (index < 0) return;

        return this.displayHoverForRow(index);
    }

    onHoverOut() {
        if (this.options.hideHover !== false) {
            return this.displayHoverForRow(null);
        }
    }

    displayHoverForRow(index) {
        var _ref;
        if (index != null) {
            (_ref = this.hover).update.apply(_ref, this.hoverContentForRow(index));
            return this.hilight(index);
        } else {
            this.hover.hide();
            return this.hilight();
        }
    }

    hoverContentForRow(index) {
        var content, j, row, y, _i, _len, _ref;
        row = this.data[index];
        content = "<div class='morris-hover-row-label'>" + row.label + "</div>";
        _ref = row.y;
        for (j = _i = 0, _len = _ref.length; _i < _len; j = ++_i) {
            y = _ref[j];
            if (y != null) {

                content += "<div class='morris-hover-point' style='color: " + (this.colorFor(row, j, 'label')) + "'>\n  " + this.options.labels[j] + ":\n  " + (this.yLabelFormat(y, false)) + "\n</div>";
            }
        }
        if (typeof this.options.hoverCallback === 'function') {
            content = this.options.hoverCallback(index, this.options, content);
        }
        return [content, row._x, row._ymax];
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
        if (this.options.axes) {
            this.drawXAxis();
        }
        this.drawSeries();
        if (this.options.hideHover === false) {
            return this.displayHoverForRow(this.data.length - 1);
        }
    }

    drawXAxis() {
        var drawLabel, l, labels, prevAngleMargin, prevLabelMargin, row, ypos, _i, _len, _results,
            _this = this;

         ypos = this.bottom + 3;

        
        if (this.options.titleX) {
            var b = this.measureText(this.options.titleX);
            var center = (this.width / 2) + (b.width / 2);
            this.raphael.text(center, this.bottom + this.options.paddingX - this.options.gridTextSize, this.options.titleX).
                attr('font-size', this.options.gridTextSize + 1).attr('font-family', this.options.gridTextFamily).
                attr('font-weight', "bold").attr('fill', this.options.gridTextColor);
        } 

        prevLabelMargin = null;
        prevAngleMargin = null;
        drawLabel = function (labelText, xpos) {
            var label, labelBox, margin, offset, textBox;
            label = _this.drawXAxisLabel(_this.transX(xpos), ypos, labelText);
            textBox = label.getBBox();
            label.transform("r" + (-_this.options.xLabelAngle));
            labelBox = label.getBBox();
            label.transform("t0," + (labelBox.height / 2) + "...");
            if (_this.options.xLabelAngle !== 0) {
                offset = -0.5 * textBox.width * Math.cos(_this.options.xLabelAngle * Math.PI / 180.0);
                label.transform("t" + offset + ",0...");
            }
            labelBox = label.getBBox();
            if ((!(prevLabelMargin != null) || prevLabelMargin >= labelBox.x + labelBox.width || (prevAngleMargin != null) && prevAngleMargin >= labelBox.x) && labelBox.x >= 0 && (labelBox.x + labelBox.width) < _this.el.width()) {
                if (_this.options.xLabelAngle !== 0) {
                    margin = 1.25 * _this.options.gridTextSize / Math.sin(_this.options.xLabelAngle * Math.PI / 180.0);
                    prevAngleMargin = labelBox.x - margin;
                }
                return prevLabelMargin = labelBox.x - _this.options.xLabelMargin;
            } else {
                return label.remove();
            }
        };
        if (this.options.parseTime) {
            if (this.data.length === 1 && this.options.xLabels === 'auto') {
                labels = [[this.data[0].label, this.data[0].x]];
            } else {
                labels = labelSeries(this.xmin, this.xmax, this.width, this.options.xLabels, this.options.xLabelFormat);
            }
        } else {
            labels = (function () {
                var _i, _len, _ref, _results;
                _ref = this.data;
                _results = [];
                for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                    row = _ref[_i];
                    _results.push([row.label, row.x]);
                }
                return _results;
            }).call(this);
        }
        labels.reverse();
        _results = [];
        for (_i = 0, _len = labels.length; _i < _len; _i++) {
            l = labels[_i];
            _results.push(drawLabel(l[0], l[1]));
        }
        return _results;
    }

    drawSeries() {
        var i, _i, _j, _ref, _ref1, _results;
        this.seriesPoints = [];
        for (i = _i = _ref = this.options.ykeys.length - 1; _ref <= 0 ? _i <= 0 : _i >= 0; i = _ref <= 0 ? ++_i : --_i) {
            this._drawLineFor(i);
        }
        _results = [];
        for (i = _j = _ref1 = this.options.ykeys.length - 1; _ref1 <= 0 ? _j <= 0 : _j >= 0; i = _ref1 <= 0 ? ++_j : --_j) {
            _results.push(this._drawPointFor(i));
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

                circle = this.drawLinePoint(row._x, row._y[index], this.options.pointSize, this.colorFor(row, index, 'point'), index);
                circle.node.onclick = function (evt) {
                    var offset = $(self.el).offset();
                    self.onGridClick(evt.pageX - offset.left, evt.pageY - offset.top);
                };
            }
            _results.push(this.seriesPoints[index].push(circle));
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

    private prevHilight;
    hilight(index?) {
        var i, _i, _j, _ref, _ref1;
        if (this.prevHilight !== null && this.prevHilight !== index) {
            for (i = _i = 0, _ref = this.seriesPoints.length - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
                if (this.seriesPoints[i][this.prevHilight]) {
                    this.seriesPoints[i][this.prevHilight].animate(this.pointShrink);
                }
            }
        }
        if (index !== null && this.prevHilight !== index) {
            for (i = _j = 0, _ref1 = this.seriesPoints.length - 1; 0 <= _ref1 ? _j <= _ref1 : _j >= _ref1; i = 0 <= _ref1 ? ++_j : --_j) {
                if (this.seriesPoints[i][index]) {
                    this.seriesPoints[i][index].animate(this.pointGrow);
                }
            }
        }
        return this.prevHilight = index;
    }

    colorFor(row, sidx, type) {
        if (typeof this.options.lineColors === 'function') {
            return this.options.lineColors.call(this, row, sidx, type);
        } else if (type === 'point') {
            return this.options.pointFillColors[sidx % this.options.pointFillColors.length] || this.options.lineColors[sidx % this.options.lineColors.length];
        } else {
            return this.options.lineColors[sidx % this.options.lineColors.length];
        }
    }

    drawXAxisLabel(xPos, yPos, text) {
        return this.raphael.text(xPos, yPos, text).attr('font-size', this.options.gridTextSize).attr('font-family', this.options.gridTextFamily).attr('font-weight', this.options.gridTextWeight).attr('fill', this.options.gridTextColor);
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
    ddensity = 130 * (dmax - dmin) / pxwidth;
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

class Hover {
    private options;
    private el;
    constructor(options) {
        this.options = $.extend({}, { "class": 'morris-hover morris-default-style' }, options == null ? {} : options);
        this.el = $("<div class='" + this.options["class"] + "'></div>");
        this.el.hide();
        this.options.parent.append(this.el);
    }

    update(html, x, y) {
        this.html(html);
        this.show();
        return this.moveTo(x, y);
    }

    html(content) {
        return this.el.html(content);
    }

    moveTo(x, y) {
        var hoverHeight, hoverWidth, left, parentHeight, parentWidth, top;
        parentWidth = this.options.parent.innerWidth();
        parentHeight = this.options.parent.innerHeight();
        hoverWidth = this.el.outerWidth();
        hoverHeight = this.el.outerHeight();
        left = Math.min(Math.max(0, x - hoverWidth / 2), parentWidth - hoverWidth);
        if (y != null) {
            top = y - hoverHeight - 10;
            if (top < 0) {
                top = y + 10;
                if (top + hoverHeight > parentHeight) {
                    top = parentHeight / 2 - hoverHeight / 2;
                }
            }
        } else {
            top = parentHeight / 2 - hoverHeight / 2;
        }
        return this.el.css({
            left: left + "px",
            top: parseInt(top) + "px"
        });
    }

    show() {
        return this.el.show();
    }

    hide() {
        return this.el.hide();
    }
}


class Area extends Line {
    calcPoints() {
        var row, total, y, _i, _len, _ref, _results;
        _ref = this.data;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            row = _ref[_i];
            row._x = this.transX(row.x);
            total = 0;
            row._y = (function () {
                var _j, _len1, _ref1, _results1;
                _ref1 = row.y;
                _results1 = [];
                for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
                    y = _ref1[_j];
                    if (this.options.behaveLikeLine) {
                        _results1.push(this.transY(y));
                    } else {
                        total += y || 0;
                        _results1.push(this.transY(total));
                    }
                }
                return _results1;
            }).call(this);
            _results.push(row._ymax = Math.max.apply(Math, row._y));
        }
        return _results;
    }

    drawSeries() {
        var i, range, _i, _j, _k, _len, _ref, _ref1, _results, _results1, _results2;
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
            i = range[_k];
            this._drawFillFor(i);

            this._drawLineFor(i);

            _results2.push(this._drawPointFor(i));
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
        color = Raphael.rgb2hsl(this.colorFor(this.data[i], i, 'line'));
        return Raphael.hsl(color.h, this.options.behaveLikeLine ? color.s * 0.9 : color.s * 0.75, Math.min(0.98, this.options.behaveLikeLine ? color.l * 1.2 : color.l * 1.25));
    }

    drawFilledPath(path, fill) {
        return this.raphael.path(path).attr('fill', fill).attr('fill-opacity', this.options.fillOpacity).attr('stroke-width', 0);
    }
}


