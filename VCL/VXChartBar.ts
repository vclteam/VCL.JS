import V = require("VCL/VCL");
import VXU = require("VCL/VXUtils");
import VXC = require("VCL/VXComponent");
import VXD = require("VCL/VXDataset");
import VXCB = require("VCL/VXChartBase");

export class TChartBar extends VXCB.TChartBarBase {
    public height;
    private _maximumbarwidth: number = 40;
    public get MaximumBarWidth(): number {
        return this._maximumbarwidth;
    }
    public set MaximumBarWidth(val: number) {
        if (val != this._maximumbarwidth) {
            this._maximumbarwidth = val;
            this.drawDelayed(true);
        }
    }


    private _minY: number = 0;
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

    private _selectcolorOpacity: number = 1;
    /*
    * set the opacity of the selected bar  - values (0-1)
    */
    public get SelectedBarOpacity(): number {
        return this._selectcolorOpacity;
    }
    public set SelectedBarOpacity(val: number) {
        if (val != this._selectcolorOpacity) {
            if (val > 1 || val < 0) return;
            this._selectcolorOpacity = val;
            this.drawDelayed(true);
        }
    }

    private _unselectcolorOpacity: number = 0.8;
    /*
    * set the opacity of the unselected bars - values (0-1)
    */
    public get UnselectedBarOpacity(): number {
        return this._unselectcolorOpacity;
    }
    public set UnselectedBarOpacity(val: number) {
        if (val != this._unselectcolorOpacity) {
            if (val > 1 || val < 0) return;
            this._unselectcolorOpacity = val;
            this.drawDelayed(true);
        }
    }




    public onClicked: (value: V.TBarValue, series: number) => void;

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

    private _barleftopradius: number = 0;
    public get BarLeftTopRadius(): number {
        return this._barleftopradius;
    }
    public set BarLeftTopRadius(val: number) {
        if (val != this._barleftopradius) {
            this._barleftopradius = val;
            this.drawDelayed(true);
        }
    }

    private _barlefbottomradius: number = 0;
    public get BarLeftBottomRadius(): number {
        return this._barlefbottomradius;
    }
    public set BarLeftBottomRadius(val: number) {
        if (val != this._barlefbottomradius) {
            this._barlefbottomradius = val;
            this.drawDelayed(true);
        }
    }

    private _barRightopradius: number = 0;
    public get BarRightTopRadius(): number {
        return this._barRightopradius;
    }
    public set BarRightTopRadius(val: number) {
        if (val != this._barRightopradius) {
            this._barRightopradius = val;
            this.drawDelayed(true);
        }
    }

    private _barrightbottomradius: number = 0;
    public get BarRightBottomRadius(): number {
        return this._barrightbottomradius;
    }
    public set BarRightBottomRadius(val: number) {
        if (val != this._barrightbottomradius) {
            this._barrightbottomradius = val;
            this.drawDelayed(true);
        }
    }


    private _stack: boolean = true;
    public get Stacked(): boolean {
        return this._stack;
    }
    public set Stacked(val: boolean) {
        if (val != this._stack) {
            this._stack = val;
            this.drawDelayed(true);
        }
    }

    private _showgridlines: boolean = true;
    public get ShowGridLines(): boolean {
        return this._showgridlines;
    }
    public set ShowGridLines(val: boolean) {
        if (val != this._showgridlines) {
            this._showgridlines = val;
            this.drawDelayed(true);
        }
    }


    public getData(): any[] {
        var dataArray = [];
        this.values.forEach((valueOfElement: VXCB.TBarValue) => {
            dataArray.push({
                x: valueOfElement.Label, id: valueOfElement.ID,
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

    public draw(reCreate: boolean) {
        if (!this.parentInitialized()) return;
        super.draw(reCreate);

        this.bar.setData(this.getData());
    }

    public createBar(): Bar {
        var ymin = this.YMin != null ? String(this.YMin) : 'auto'
        var ymax = this.YMax != null ? String(this.YMax) : 'auto'

        var b: Bar =
            new Bar({
                element: this.jComponent[0],
                //data: dataArray,
                xkey: "x",
                ykeys: ["value1", "value2", "value3", "value4", "value5", "value6", "value7", "value8", "value9", "value10", "value11", "value12", "value13", "value14", "value15"],
                labels: [this.Series1Name, this.Series2Name, this.Series3Name, this.Series4Name, this.Series5Name, this.Series6Name
                    , this.Series7Name, this.Series8Name, this.Series9Name, this.Series10Name, this.Series11Name, this.Series12Name
                    , this.Series13Name, this.Series14Name, this.Series5Name
                ],
                barSizeRatio: 0.75,
                barGap: 0,
                titleX: this.TitleX,
                paddingX: this.TitleX ? 35 : 20,
                titleY: this.TitleY,
                xLabelAngle : this.XLabelAngle,
                paddingY: this.TitleY ? 25 : 5,
                xLabelFormat: this.XLabelFormat,
                yLabelFormat: this.YLabelFormat,
                toolTipFormat: this.ToolTipFormat,
                hideHover: this.ShowHoverLegend ? 'auto' : 'always',
                stacked: this.Stacked,
                barColors: [
                    this.Series1Color, this.Series2Color, this.Series3Color, this.Series4Color, this.Series5Color, this.Series6Color,
                    this.Series7Color, this.Series8Color, this.Series9Color, this.Series10Color, this.Series11Color, this.Series12Color,
                    this.Series13Color, this.Series14Color, this.Series15Color
                ],
                xLabelMargin: 15, corners: [this.BarLeftTopRadius, this.BarRightTopRadius, this.BarRightBottomRadius, this.BarLeftBottomRadius],
                gridTextColor: this.GridTextColor,
                titleTextColor: this.TitleTextColor,
                gridTextSize: this.GridTextSize,
                titleTextSize: this.TitleTextSize,
                preUnits: this.PreValueUnit,
                postUnits: this.PostValueUnit,
                gridTextFamily: this.Font,
                gridTextWeight: 'normal',
                maximumbarwidth: this.MaximumBarWidth,
                grid: this.ShowGridLines,
                selectedOpacity: this.SelectedBarOpacity,
                unselectOpacity: this.UnselectedBarOpacity,
                ymax: ymax,
                ymin: ymin,
            }, this);

        return b;
    }

    public bar: Bar;
    public create() {
        this.jComponent.empty(); //clear all subcomponents
        this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'div', this.FitToWidth, this.FitToHeight);
        this.bar = this.createBar();
        super.create();
    }
}

export class TDBChartBar extends TChartBar {
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
            this.drawDelayed(false);
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
            this.drawDelayed(false);
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
            this.drawDelayed(false);
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
            this.drawDelayed(false);
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
            this.drawDelayed(false);
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
            this.drawDelayed(false);
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
            this.drawDelayed(false);
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
            this.drawDelayed(false);
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
            this.drawDelayed(false);
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
            this.drawDelayed(false);
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
            this.drawDelayed(false);
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
            this.drawDelayed(false);
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
            this.drawDelayed(false);
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
            this.drawDelayed(false);
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
            this.drawDelayed(false);
        }
    }

    private _labelfield: string;
    /**
    * Specifies the field from which the edit control displays data.
    */
    public get LabelField(): string {
        return this._labelfield;
    }
    public set LabelField(val: string) {
        if (val != this._labelfield) {
            this._labelfield = val.toUpperCase();
            this.drawDelayed(false);
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
            this.drawDelayed(false);
        }
    }

    public getData(): any[] {
        this.values.clear();
        var dataArray = [];
        if (this.Dataset == null || (this.ValueField1 == null && this.ValueField2 == null && this.ValueField3 == null && this.ValueField4 == null &&
            this.ValueField5 == null && this.ValueField6 == null && this.ValueField7 == null && this.ValueField8 == null && this.ValueField9 == null &&
            this.ValueField10 == null && this.ValueField11 == null && this.ValueField12 == null && this.ValueField13 == null &&
            this.ValueField14 == null && this.ValueField15) || this.LabelField == null) return dataArray;
        if (!this.Dataset.Active) return dataArray;
        this.Dataset.forEach(() => {
            var obj: any = {
                x: this.Dataset.getFieldValue(this.LabelField),
                value1: !isFinite(this.Dataset.getFieldValue(this.ValueField1)) ? null : this.Dataset.getFieldValue(this.ValueField1),
                value2: !isFinite(this.Dataset.getFieldValue(this.ValueField2)) ? null : this.Dataset.getFieldValue(this.ValueField2),
                value3: !isFinite(this.Dataset.getFieldValue(this.ValueField3)) ? null : this.Dataset.getFieldValue(this.ValueField3),
                value4: !isFinite(this.Dataset.getFieldValue(this.ValueField4)) ? null : this.Dataset.getFieldValue(this.ValueField4),
                value5: !isFinite(this.Dataset.getFieldValue(this.ValueField5)) ? null : this.Dataset.getFieldValue(this.ValueField5),
                value6: !isFinite(this.Dataset.getFieldValue(this.ValueField6)) ? null : this.Dataset.getFieldValue(this.ValueField6),
                value7: !isFinite(this.Dataset.getFieldValue(this.ValueField7)) ? null : this.Dataset.getFieldValue(this.ValueField7),
                value8: !isFinite(this.Dataset.getFieldValue(this.ValueField8)) ? null : this.Dataset.getFieldValue(this.ValueField8),
                value9: !isFinite(this.Dataset.getFieldValue(this.ValueField9)) ? null : this.Dataset.getFieldValue(this.ValueField9),
                value10: !isFinite(this.Dataset.getFieldValue(this.ValueField10)) ? null : this.Dataset.getFieldValue(this.ValueField10),
                value11: !isFinite(this.Dataset.getFieldValue(this.ValueField11)) ? null : this.Dataset.getFieldValue(this.ValueField11),
                value12: !isFinite(this.Dataset.getFieldValue(this.ValueField12)) ? null : this.Dataset.getFieldValue(this.ValueField12),
                value13: !isFinite(this.Dataset.getFieldValue(this.ValueField13)) ? null : this.Dataset.getFieldValue(this.ValueField13),
                value14: !isFinite(this.Dataset.getFieldValue(this.ValueField14)) ? null : this.Dataset.getFieldValue(this.ValueField14),
                value15: !isFinite(this.Dataset.getFieldValue(this.ValueField15)) ? null : this.Dataset.getFieldValue(this.ValueField15),
            };
            dataArray.push(obj);

            var col = new VXCB.TBarValue();
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
            col.Label = obj.x;
            col.ID = this.Dataset.Recno.toString();
        });

        return dataArray;
    }
}


declare var Raphael;

function __bind(fn, me) { return function () { return fn.apply(me, arguments); }; }


export class Bar extends VXCB.Grid {
    public bars;

    constructor(options, owner) {
        super($.extend({}, options, { parseTime: true }));
        this.owner = owner;

        this.onHoverOut = __bind(this.onHoverOut, this);
        this.onHoverMove = __bind(this.onHoverMove, this);
    }

    init() {
        this.cumulative = this.options.stacked;
        if (this.options.hideHover !== 'always') {
            this.hover = new VXCB.Hover({
                parent: this.el
            });

            this.on('hovermove', this.onHoverMove);
            this.on('hoverout', this.onHoverOut);
        }
    }

    calc() {
        var _ref;
        this.calcBars();
        if (this.options.hideHover === false) {
            return (_ref = this.hover).update.apply(_ref, this.hoverContentForRow(this.data.length - 1, -1));
        }
    }

    calcBars() {
        var row, y, _i, _len, _ref, _results;
        _ref = this.data;
        _results = [];
        for (var idx = _i = 0, _len = _ref.length; _i < _len; idx = ++_i) {
            row = _ref[idx];
            row._x = this.left + this.width * (idx + 0.5) / this.data.length;
            _results.push(row._y = (function () {
                var _j, _len1, _ref1, _results1;
                _ref1 = row.y;
                _results1 = [];
                for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
                    y = _ref1[_j];
                    if (y != null) {
                        _results1.push(this.transY(y));
                    } else {
                        _results1.push(null);
                    }
                }
                return _results1;
            }).call(this));
        }
        return _results;
    }

    draw() {
        if (this.options.axes) {
            this.drawXAxis();
        }
        return this.drawSeries();
    }

    drawXAxis() {
        var label, labelBox, margin, offset, prevAngleMargin, prevLabelMargin, row, textBox, ypos, _i, _ref, _results;
        prevLabelMargin = null;
        prevAngleMargin = null;
        _results = [];
        //draw x title
        ypos = this.bottom + 3;


        if (this.options.titleX) {
            var b = this.measureText(this.options.titleX);
            var center = (this.elementWidth / 2);
            this.raphael.text(center, this.elementHeight - this.options.titleTextSize /2,
                this.options.titleX).
                attr('font-size', this.options.titleTextSize).attr('font-family', this.options.gridTextFamily).
                attr('font-weight', "normal").attr('fill', this.options.titleTextColor);
        }

        for (var i = _i = 0, _ref = this.data.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
            row = this.data[this.data.length - 1 - i];
            label = this.drawXAxisLabel(row._x, ypos, row.label);
            textBox = label.getBBox();
            label.transform("r" + (-this.options.xLabelAngle));
            labelBox = label.getBBox();
            label.transform("t0," + (labelBox.height / 2) + "...");
            if (this.options.xLabelAngle !== 0) {
                offset = -0.5 * textBox.width * Math.cos(this.options.xLabelAngle * Math.PI / 180.0);
                label.transform("t" + offset + ",0...");
            }
            if ((!(prevLabelMargin != null) || prevLabelMargin >= labelBox.x + labelBox.width || (prevAngleMargin != null) && prevAngleMargin >= labelBox.x) && labelBox.x >= 0 && (labelBox.x + labelBox.width) < this.el.width()) {
                if (this.options.xLabelAngle !== 0) {
                    margin = 1.25 * this.options.gridTextSize / Math.sin(this.options.xLabelAngle * Math.PI / 180.0);
                    prevAngleMargin = labelBox.x - margin;
                }
                _results.push(prevLabelMargin = labelBox.x - this.options.xLabelMargin);
            } else {
                _results.push(label.remove());
            }
        }

        return _results;
    }

    public barNodes = [];

    drawSeries() {
        var barWidth, bottom, groupWidth, idx, lastTop, left, leftPadding, numBars, row, rowold, sidx, size, top, ypos, zeroPos, _refold;
        groupWidth = this.width / this.options.data.length;
        this.barNodes = [];
        numBars = 0;
        if (this.options.stacked == false) {
            for (var i = 0; i < 15; i++) {
                for (var j = 0; j < this.data.length; j++) {
                    if (this.data[j].y && this.data[j].y[i]) {
                        numBars++;
                        break;
                    }
                }
            }
        }
        this.options.numBars = Math.max(1, numBars);
        barWidth = (groupWidth * this.options.barSizeRatio - this.options.barGap * (this.options.numBars - 1)) / this.options.numBars;
        this.options.barWidth = Math.min(this.options.maximumbarwidth, barWidth);
        leftPadding = groupWidth * (1 - this.options.barSizeRatio) / 2;
        zeroPos = this.ymin <= 0 && this.ymax >= 0 ? this.transY(0) : null;
        return this.bars = (function () {
            var _i, _len, _ref, _results;
            _ref = this.data;
            _refold = this.olddata;
            _results = [];
            for (var idx = _i = 0, _len = _ref.length; _i < _len; idx = ++_i) {
                row = _ref[idx];
                if (_refold && _refold.length > idx)
                    rowold = _refold[idx];
                else rowold = null;
                lastTop = 0;
                _results.push((function () {
                    var _j, _len1, _ref1, _results1;
                    _ref1 = row._y;
                    row._size = [];
                    row._top = [];
                    _results1 = [];
                    for (sidx = _j = 0, _len1 = _ref1.length; _j < _len1; sidx = ++_j) {
                        ypos = _ref1[sidx];
                        if (ypos !== null) {
                            if (zeroPos) {
                                top = Math.min(ypos, zeroPos);
                                bottom = Math.max(ypos, zeroPos);
                            } else {
                                top = ypos;
                                bottom = this.bottom;
                            }
                            left = this.left + idx * groupWidth + leftPadding;
                            if (!this.options.stacked) {
                                left += sidx * (barWidth + this.options.barGap);
                            }
                            size = bottom - top;

                            if (this.options.stacked) {
                                top -= lastTop;
                            }
                            row._size.push(size);
                            row._top.push(top);
                            if (!this.barNodes[idx]) this.barNodes[idx] = [];

                            if (rowold && rowold._size && rowold._size.length >= sidx)
                                this.barNodes[idx].push(this.drawBar(idx, left, top, barWidth, size, this.colorFor(row, sidx, 'bar'), rowold._size[sidx], rowold._top[sidx], sidx, this.options.corners));
                            else
                                this.barNodes[idx].push(this.drawBar(idx, left, top, barWidth, size, this.colorFor(row, sidx, 'bar'), 0, 0, sidx, this.options.corners));

                            _results1.push(lastTop += size);
                        } else {
                            _results1.push(null);
                        }
                    }
                    return _results1;
                }).call(this));
            }
            return _results;
        }).call(this);
    }

    colorFor(row, sidx, type) {
        var r, s;
        if (typeof this.options.barColors === 'function') {
            r = {
                x: row.x,
                y: row.y[sidx],
                label: row.label
            };
            s = {
                index: sidx,
                key: this.options.ykeys[sidx],
                label: this.options.labels[sidx]
            };
            return this.options.barColors.call(this, r, s, type);
        } else {
            return this.options.barColors[sidx % this.options.barColors.length];
        }
    }

    hitTest(x, y) {
        /*if (this.data.length === 0) {
            return null;
        }
        x = Math.max(Math.min(x, this.right), this.left);
        return Math.min(this.data.length - 1, Math.floor((x - this.left) / (this.width / this.data.length)));*/
        var r, _i, _len, _ref, wid = this.options.barWidth / 2 * this.options.numBars;
        if (this.data.length === 0) {
            return null;
        }
        _ref = this.data.slice(1);
        for (var index = _i = 0, _len = _ref.length; _i <= _len; index = ++_i) {
            r = _ref[index];
            if (Math.abs(x - (this.data[index]._x)) < wid) {
                return index;
            }
        }
        return -1;
    }

    hitSeries(x, y) {
        var r, _i, _len, _ref;
        if (this.data.length === 0) {
            return null;
        }

        var indexX = this.hitTest(x, y);
        _ref = this.data.slice(indexX);
        _ref = _ref[0];
        _ref = _ref._top;
        for (var index = _i = 0, _len = _ref.length; _i <= _len; index = ++_i) {
            r = _ref[index];
            if (r < y) {
                return index;
            }
        }
        return -1;
    }

    clickItem(idx: number, series: number) {
        var owner = <TChartBar>this.owner;
        if (!this.owner) return;
        this.barNodes.forEach((item) => {
            item.forEach((node) => {
                node.attr('opacity', this.options.unselectOpacity);
            });
        });


        this.barNodes[idx].forEach((node) => { node.attr('opacity', this.options.selectedOpacity); });
        if (!owner.onClicked) return;
        if (idx >= 0 && idx <= owner.values.length()) {
            if ((owner instanceof TDBChartBar) && (<TDBChartBar>owner).Dataset != null) {
                (<TDBChartBar>owner).Dataset.Recno = parseInt(owner.values.toArray()[idx].ID);
            }
            (V.tryAndCatch(() => { owner.onClicked(owner.values.toArray()[idx], series) }));
        }
    }

    onGridClick(x, y, evt) {
        var idx = evt.target.idx;
        this.clickItem(idx, evt.target.series);
    }

    onHoverMove(x, y, evt) {
        var indexX, inxY, _ref;
        indexX = evt.target.idx;

        if (indexX == null || indexX < 0)
            return;

        if (!this.hover || this.barNodes.length == 0 || this.barNodes.length <= indexX || this.barNodes[indexX] == null)
            return;

        //var bar = this.barNodes[indexX][0];
        //var width: number = bar.attr('width');
        //if (indexX < this.barNodes.length / 2)
        //    this.hover.offset = width;
        //else
        //    this.hover.offset = -width;
        var series = evt.target.series;

        return (_ref = this.hover).update.apply(_ref, this.hoverContentForRow(indexX, series));
    }

    onHoverOut() {
        if (!this.hover) return;
        if (this.options.hideHover !== false) {
            return this.hover.hide();
        }
    }

    hoverContentForRow(index, series) {
        var content, j, row, x, y, _i, _len, _ref;
        row = this.data[index];
        if (row == null) {
            return null;
        }

        row.index = index;
        row.series = series;

        //user have data to put on
        if (typeof this.options.hoverCallback === 'function') {
            content = this.options.hoverCallback(index, this.options, content);
        }
        //generate hover div
        else {
            var lblX: string = "";
            if (!this.options.toolTipFormat) {
                lblX = this.options.titleX + ":\n  " + row.label;
            }
            content = "<div style='pointer-events: none;' class='morris-hover-row-label'>\n  " + lblX + "\n</div>";
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
                            if (lblY == null)
                                lblY = this.options.titleY;
                            //lbl = lbl.substring(0, 14);
                            lblY = lblY + ":\n  " + (this.yLabelFormat(y, false));
                        }
                        content += "<div style='pointer-events: none;color: " + (this.colorFor(row, j, 'label')) + "'>\n  " + lblY + "\n</div>";
                    }
                }
            }
        }

        //draw location
        return [content, row._x, row._y[series]];
    }

    drawXAxisLabel(xPos, yPos, text) {
        var label;
        return label = this.raphael.text(xPos, yPos, text).attr('font-size', this.options.gridTextSize).attr('font-family', this.options.gridTextFamily).attr('font-weight', this.options.gridTextWeight).attr('fill', this.options.gridTextColor);
    }

    public roundedRect(x, y, w, h, r = [0, 0, 0, 0]) {
        return ["M", x, r[0] + y, "Q", x, y, x + r[0], y,
            "L", x + w - r[1], y, "Q", x + w, y, x + w, y + r[1],
            "L", x + w, y + h - r[2], "Q", x + w, y + h, x + w - r[2], y + h,
            "L", x + r[3], y + h, "Q", x, y + h, x, y + h - r[3], "Z"];
    }

    drawBar(idx, xPos, yPos, width, height, barColor, oldheight, oldy, series, cornes: number[]= [0, 0, 0, 0]) {
        var self = this;
        var bar;
        var maxWidth: number = Math.min(this.options.maximumbarwidth, width);
        var newXpos = xPos + ((width - maxWidth) / 2);
        var zerCnt = 0;
        var zerMax = 0;
        cornes.forEach((item) => { if (item < 1) zerCnt++; else if (item > zerMax) zerMax = item });

        if (oldheight > 0) {
            if (zerCnt == 4 || zerMax > height) bar = this.raphael.rect(newXpos, oldy, maxWidth, oldheight).attr('fill', barColor).attr('opacity', this.options.unselectOpacity).attr('stroke-width', 0);
            else bar = this.raphael.path(this.roundedRect(newXpos, oldy, maxWidth, oldheight, cornes)).attr('fill', barColor).attr('opacity', this.options.unselectOpacity).attr('stroke-width', 0);
            bar.animate({ height: height, y: yPos }, 500, '>');
        } else {
            if (zerCnt == 4 || zerMax > height) bar = this.raphael.rect(newXpos, yPos, maxWidth, height).attr('fill', barColor).attr('opacity', this.options.unselectOpacity).attr('stroke-width', 0);
            else bar = this.raphael.path(this.roundedRect(newXpos, yPos, maxWidth, height, cornes)).attr('fill', barColor).attr('opacity', this.options.unselectOpacity).attr('stroke-width', 0);
        }

        bar.node.idx = idx;
        bar.node.series = series;
        bar.node.onclick = function (evt, x, y) {
            var offset = $(self.el).offset();
            self.onGridClick(evt.pageX - offset.left, evt.pageY - offset.top, evt);
        };

        bar.node.hovermove = function (evt, x, y) {
            self.onHoverMove(x, y, evt);
        }

        bar.node.hoverout = function (evt, x, y) {
            self.onHoverOut();
        }

        return bar;
    }

}



export class TChartBullet extends VXC.TComponent {
    constructor(aOwner: VXC.TComponent, renderTo?: string) {
        super(aOwner, renderTo);
        if (!this.Width) this.Width = 200;
    }

    private _title: string = "Title";
    public get Title(): string {
        return this._title;
    }
    public set Title(val: string) {
        if (val != this._title) {
            this._title = val;
            this.drawDelayed(true);
        }
    }

    private _titlecolor: string;
    public get TitleColor(): string {
        return this._titlecolor;
    }
    public set TitleColor(val: string) {
        var isOk = /^#[0-9A-F]{6}$/i.test(val);
        if (!isOk) V.Application.raiseException("'" + val + "' is not valid hex color string");
        else {

            if (val != this._titlecolor) {
                this._titlecolor = val;
                this.drawDelayed(true);
            }
        }
    }


    private _value: number = 0;
    public get Value(): number {
        return this._value;
    }
    public set Value(val: number) {
        if (val != this._value) {
            this._value = val;
            this.drawDelayed(true);
        }
    }

    private _maximum: number = 100;
    public get Maximum(): number {
        return this._maximum;
    }
    public set Maximum(val: number) {
        if (val != this._maximum) {
            this._maximum = val;
            this.drawDelayed(true);
        }
    }

    private _showsubtitle: boolean = true;
    public get ShowSubTitle(): boolean {
        return this._showsubtitle;
    }
    public set ShowSubTitle(val: boolean) {
        if (val != this._showsubtitle) {
            this._showsubtitle = val;
            this.drawDelayed(true);
        }
    }

    private _showvalue: boolean = true;
    public get ShowValue(): boolean {
        return this._showvalue;
    }
    public set ShowValue(val: boolean) {
        if (val != this._showvalue) {
            this._showvalue = val;
            this.drawDelayed(true);
        }
    }


    private _valuefontsize: number = 24;
    public get ValueFontSize(): number {
        return this._valuefontsize;
    }
    public set ValueFontSize(val: number) {
        if (val != this._value) {
            this._valuefontsize = val;
            this.drawDelayed(true);
        }
    }

    public draw(reCreate: boolean) {
        require(["VCL/Scripts/jquery.bulletchart.js"], () => {
            if (!this.parentInitialized()) return;
            super.draw(reCreate);
            this.create();
        });

    }
    public create() {
        this.jComponent.empty(); //clear all subcomponents
        this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'div', this.FitToWidth, this.FitToHeight);
        this.jComponent.bulletChart({
            title: this.Title,
            titlecolor: this.TitleColor,
            current: this.Value,
            total: this.Maximum,
            tititlefontsize: this.ValueFontSize,
            showsubtitle: this.ShowSubTitle,
            showvalue: this.ShowValue
        });
    }
}