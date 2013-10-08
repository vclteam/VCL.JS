import V = require("VCL/VCL");
import VXU = require("VCL/VXUtils");
import VXC = require("VCL/VXComponent");
import VXD = require("VCL/VXDataset");
import VXCB = require("VCL/VXChartBase");

export class VXChartBar extends VXCB.VXChartBase {
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


    public onClicked: (value: V.TBarValue) => void;
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



    private _stack: boolean = true;
    public get Stacked(): boolean {
        return this._stack;
    }
    public set Stacked(val: boolean) {
        if (val != this._stack) {
            this._stack = val;
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
    
    public values = new VXCB.VXChartValuesCollection<VXCB.VXBarValue>();
    public createValue(label: string, value1?: number, value2?: number, value3?: number, value4?: number,
        value5?: number, value6?: number): VXCB.VXBarValue {
        var col = new VXCB.VXBarValue();
        this.values.add(col);
        col.Value1 = value1;
        col.Value2 = value2;
        col.Value3 = value3;
        col.Value4 = value4;
        col.Value5 = value5;
        col.Value6 = value6;
        col.Label = label;
        return col;
    }

    public getData(): any[] {
        var dataArray = [];
        this.values.forEach((valueOfElement: VXCB.VXBarValue) => {
            dataArray.push({
                x: valueOfElement.Label, id: valueOfElement.ID,
                value1: valueOfElement.Value1,
                value2: valueOfElement.Value2,
                value3: valueOfElement.Value3,
                value4: valueOfElement.Value4,
                value5: valueOfElement.Value5,
                value6: valueOfElement.Value6
            });
            return true;
        });
        return dataArray;
    }

    public draw(reCreate: boolean) {
        if (!this.showed) return;
        if (reCreate || !this.initialized) this.create();
        this.initialized = true;

        this.bar.setData(this.getData());
    }

    private bar: Bar;
    public create() {
        this.jComponent.empty(); //clear all subcomponents
        this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'div', this.FitToWidth, this.FitToHeight);

        this.bar = new Bar({
            element: this.jComponent[0],
            //data: dataArray,
            xkey: "x",
            ykeys: ["value1", "value2", "value3", "value4", "value5", "value6"],
            labels: [this.Series1Name, this.Series2Name, this.Series3Name, this.Series4Name, this.Series5Name, this.Series6Name],
            barSizeRatio: 0.75,
            barGap: 13,
            titleX : this.TitleX,
            paddingX: this.TitleX?40:15,
            titleY : this.TitleY,
            paddingY: this.TitleY?40:5,
            hideHover: 'auto',
            stacked: this.Stacked,
            barColors: [this.Series1Color, this.Series2Color, this.Series3Color, this.Series4Color,
                this.Series5Color, this.Series6Color],
            xLabelMargin: 15,
            gridTextSize: 12,
            gridTextFamily: 'sans-serif',
            gridTextWeight: 'normal',
            grid: this.ShowGridLines
        }, this);
        
        super.create();
    }
}

export class VXDBChartBar extends VXChartBar {
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
            this.draw(false);
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
            this.draw(false);
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
            this.draw(false);
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
            this.draw(false);
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
            this.draw(false);
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
            this.draw(false);
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
            this.draw(false);
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
            this.draw(false);
        }
    }

    public getData(): any[] {
        this.values.clear();
        var dataArray = [];
        if (this.Dataset == null || (this.ValueField1 == null && this.ValueField2 == null && this.ValueField3 == null && this.ValueField4 == null &&
            this.ValueField5 == null && this.ValueField6 == null) || this.LabelField == null) return dataArray;
        if (!this.Dataset.Active) return dataArray;
        this.Dataset.forEach(() => {
            var obj: any = {
                x: this.Dataset.getFieldValue(this.LabelField),
                value1: this.Dataset.getFieldValue(this.ValueField1),
                value2: this.Dataset.getFieldValue(this.ValueField2),
                value3: this.Dataset.getFieldValue(this.ValueField3),
                value4: this.Dataset.getFieldValue(this.ValueField4),
                value5: this.Dataset.getFieldValue(this.ValueField5),
                value6: this.Dataset.getFieldValue(this.ValueField6),
            };
            dataArray.push(obj);

            var col = new VXCB.VXBarValue();
            this.values.add(col);
            col.Value1 = obj.value1;
            col.Value2 = obj.value2;
            col.Value3 = obj.value3;
            col.Value4 = obj.value4;
            col.Value5 = obj.value5;
            col.Value6 = obj.value6;
            col.Label = obj.label;
            col.ID = this.Dataset.Recno.toString();
        });

        return dataArray;
    }
}


declare var Raphael;

function __bind(fn, me) { return function () { return fn.apply(me, arguments); }; }


class Bar extends VXCB.Grid {
    private bars;

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
            return (_ref = this.hover).update.apply(_ref, this.hoverContentForRow(this.data.length - 1));
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
        ypos = this.bottom + 1;

        
        if (this.options.titleX) {
            var b = this.measureText(this.options.titleX);
            var center = (this.width / 2) + (b.width / 2);
            this.raphael.text(center, this.bottom + this.options.paddingX - this.options.gridTextSize, this.options.titleX).
                attr('font-size', this.options.gridTextSize + 1).attr('font-family', this.options.gridTextFamily).
                attr('font-weight', "bold").attr('fill', this.options.gridTextColor);
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

    drawSeries() {
        var barWidth, bottom, groupWidth, idx, lastTop, left, leftPadding, numBars, row, rowold, sidx, size, top, ypos, zeroPos, _refold;
        groupWidth = this.width / this.options.data.length;
        numBars = this.options.stacked != null ? 1 : this.options.ykeys.length;
        barWidth = (groupWidth * this.options.barSizeRatio - this.options.barGap * (numBars - 1)) / numBars;
        this.options.barWidth = barWidth;
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
                            if (rowold && rowold._size && rowold._size.length >= sidx)
                                this.drawBar(left, top, barWidth, size, this.colorFor(row, sidx, 'bar'), rowold._size[sidx], rowold._top[sidx]);
                            else
                                this.drawBar(left, top, barWidth, size, this.colorFor(row, sidx, 'bar'), 0, 0);

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
        var r, _i, _len, _ref, wid = this.options.barWidth / 2;
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

    onGridClick(x, y) {
        if (!this.owner) return;
        var owner = <VXChartBar>this.owner;
        if (!owner.onClicked) return;

        var idx = this.hitTest(x, y);
        if (idx >= 0 && idx <= owner.values.size()) {
            if (owner instanceof VXDBChartBar && (<VXDBChartBar>owner).Dataset != null) {
                (<VXDBChartBar>owner).Dataset.Recno = parseInt(owner.values.toArray()[idx].ID);
            }
            (V.tryAndCatch(() => { owner.onClicked(owner.values.toArray()[idx]); }));
        }
    
    
    }

    onHoverMove(x, y) {
        var index, _ref;
        index = this.hitTest(x, y);
        if (index == -1) return;
        return (_ref = this.hover).update.apply(_ref, this.hoverContentForRow(index));
    }

    onHoverOut() {
        if (this.options.hideHover !== false) {
            return this.hover.hide();
        }
    }

    hoverContentForRow(index) {
        var content, j, row, x, y, _i, _len, _ref;
        row = this.data[index];
        if (row == null) return null;
        content = "<div style='pointer-events: none;' class='morris-hover-row-label'>" + row.label + "</div>";
        _ref = row.y;
        for (j = _i = 0, _len = _ref.length; _i < _len; j = ++_i) {
            y = _ref[j];
            if (y != null) content += "<div class='morris-hover-point' style='pointer-events: none;color: " + (this.colorFor(row, j, 'label')) + "'>\n  " + this.options.labels[j] + ":\n  " + (this.yLabelFormat(y, false)) + "\n</div>";
        }
        if (typeof this.options.hoverCallback === 'function') {
            content = this.options.hoverCallback(index, this.options, content);
        }
        x = this.left + (index + 0.5) * this.width / this.data.length;
        return [content, x];
    }

    drawXAxisLabel(xPos, yPos, text) {
        var label;
        return label = this.raphael.text(xPos, yPos, text).attr('font-size', this.options.gridTextSize).attr('font-family', this.options.gridTextFamily).attr('font-weight', this.options.gridTextWeight).attr('fill', this.options.gridTextColor);
    }

    drawBar(xPos, yPos, width, height, barColor, oldheight, oldy) {
        var self = this;
        var bar;
        if (oldheight > 0) {
            bar = this.raphael.rect(xPos, oldy, width, oldheight).attr('fill', barColor).attr('stroke-width', 0);
            bar.animate({ height: height, y: yPos }, 500, '>');
        } else {
            bar = this.raphael.rect(xPos, yPos, width, height).attr('fill', barColor).attr('stroke-width', 0);
        }
        
        
        bar.node.onclick = function (evt) {
            var offset = $(self.el).offset();
            self.onGridClick(evt.pageX - offset.left, evt.pageY - offset.top);
        };
        
        return bar;
    }

}



export class VXChartBullet extends VXC.VXComponent {
    constructor(aOwner: VXC.VXComponent, renderTo?: string) {
        super(aOwner, renderTo);
        this.Width = 200;
    }

    private _title: string = "Title";
    public get Title(): string {
        return this._title;
    }
    public set Title(val: string) {
        if (val != this._title) {
            this._title = val;
            this.draw(true);
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
                this.draw(true);
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
            this.draw(true);
        }
    }

    private _maximum: number = 100;
    public get Maximum(): number {
        return this._maximum;
    }
    public set Maximum(val: number) {
        if (val != this._maximum) {
            this._maximum = val;
            this.draw(true);
        }
    }

    private _showsubtitle: boolean = true;
    public get ShowSubTitle(): boolean {
        return this._showsubtitle;
    }
    public set ShowSubTitle(val: boolean) {
        if (val != this._showsubtitle) {
            this._showsubtitle = val;
            this.draw(true);
        }
    }

    private _showvalue: boolean = true;
    public get ShowValue(): boolean {
        return this._showvalue;
    }
    public set ShowValue(val: boolean) {
        if (val != this._showvalue) {
            this._showvalue = val;
            this.draw(true);
        }
    }


    private _valuefontsize: number = 24;
    public get ValueFontSize(): number {
        return this._valuefontsize;
    }
    public set ValueFontSize(val: number) {
        if (val != this._value) {
            this._valuefontsize = val;
            this.draw(true);
        }
    }

    public draw(reCreate: boolean) {
        if (!this.showed) return;
        this.create();
    }
    public create() {
        this.jComponent.empty(); //clear all subcomponents
        this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'div', this.FitToWidth, this.FitToHeight);
        this.jComponent.bulletChart({
            title: this.Title,
            titlecolor : this.TitleColor,
            current: this.Value,
            total: this.Maximum,
            tititlefontsize: this.ValueFontSize,
            showsubtitle: this.ShowSubTitle,
            showvalue: this.ShowValue
        });
    }
}