import V = require("VCL/VCL");
import VC = require("VCL/VXComponent");
import VXO = require("VCL/VXObject");

export class VXChartBase extends VC.VXComponent {

    constructor(aOwner: VC.VXComponent, renderTo?: string) {
        super(aOwner, renderTo);
        (<any>this)._fittowidth = true;
        this.Height = 200;
    }

    private _prevalueunit: string;
    public get PreValueUnit(): string {
        return this._prevalueunit;
    }
    public set PreValueUnit(val: string) {
        if (val != this._prevalueunit) {
            this._prevalueunit = val;
        }
    }
    private _postvalueunit: string;
    public get PostValueUnit(): string {
        return this._postvalueunit;
    }
    public set PostValueUnit(val: string) {
        if (val != this._postvalueunit) {
            this._postvalueunit = val;
        }
    }

    private image: HTMLImageElement;
    private takeChartImage() {
        //create an image sanpshot
        var el = this.jComponent.children()[0];
        if (!el) return;
        var svgStr = new XMLSerializer().serializeToString(el);
        //for some reason xmlns apper twice
        svgStr = svgStr.replace('xmlns="http://www.w3.org/2000/svg"','');
        this.image = new Image();
        var svg = new Blob([svgStr], { type: "image/svg+xml;charset=utf-8" });
        var url = URL.createObjectURL(svg);
        this.image.onload = () => {
            URL.revokeObjectURL(url);
        };
        this.image.src = svgStr;//url;
    }

    public exportToJPG() {
        var canvas: HTMLCanvasElement = (<HTMLCanvasElement>$("<canvas>")[0]);
        var ctx = canvas.getContext("2d");
        ctx.drawImage(this.image, 0, 0);
        //$("#cnv").attr('src',canvas.toDataURL("image/png"));//canvas.toDataURL("image/jpg");
    }


}

export class VXChartValue extends VXO.VXCollectionItem {
    constructor() {
        super();
    }
}

export class VXDountValue extends VXChartValue {
    private _value: number;
    public get Value(): number {
        return this._value;
    }
    public set Value(val: number) {
        if (val != this._value) {
            this._value = val;
        }
    }

    private _label: string = "";
    public get Label(): string {
        return this._label;
    }
    public set Label(val: string) {
        if (val != this._label) {
            this._label = val;
        }
    }
}


export class VXDotValue extends VXChartValue {
    private _value: number;
    public get Value(): number {
        return this._value;
    }
    public set Value(val: number) {
        if (val != this._value) {
            this._value = val;
        }
    }

    private _labelx: string = "";
    public get LabelX(): string {
        return this._labelx;
    }
    public set LabelX(val: string) {
        if (val != this._labelx) {
            this._labelx = val;
        }
    }

    private _labely: string = "";
    public get LabelY(): string {
        return this._labely;
    }
    public set LabelY(val: string) {
        if (val != this._labely) {
            this._labely = val;
        }
    }
}

export class VXBubbleValue extends VXChartValue {
    private _value: number;
    public get Value(): number {
        return this._value;
    }
    public set Value(val: number) {
        if (val != this._value) {
            this._value = val;
        }
    }

    private _valuex: number;
    public get ValueX(): number {
        return this._valuex;
    }
    public set ValueX(val: number) {
        if (val != this._valuex) {
            this._valuex = val;
        }
    }

    private _valuey: number;
    public get ValueY(): number {
        return this._valuey;
    }
    public set ValueY(val: number) {
        if (val != this._valuey) {
            this._valuey = val;
        }
    }
}


export class VXBarValue extends VXChartValue {
    private _seriesvalue1: number;
    public get Value1(): number {
        return this._seriesvalue1;
    }
    public set Value1(val: number) {
        if (val != this._seriesvalue1) {
            this._seriesvalue1 = val;
        }
    }

    private _seriesvalue2: number;
    public get Value2(): number {
        return this._seriesvalue2;
    }
    public set Value2(val: number) {
        if (val != this._seriesvalue2) {
            this._seriesvalue2 = val;
        }
    }

    private _seriesvalue3: number;
    public get Value3(): number {
        return this._seriesvalue3;
    }
    public set Value3(val: number) {
        if (val != this._seriesvalue3) {
            this._seriesvalue3 = val;
        }
    }

    private _seriesvalue4: number;
    public get Value4(): number {
        return this._seriesvalue4;
    }
    public set Value4(val: number) {
        if (val != this._seriesvalue4) {
            this._seriesvalue4 = val;
        }
    }

    private _seriesvalue5: number;
    public get Value5(): number {
        return this._seriesvalue5;
    }
    public set Value5(val: number) {
        if (val != this._seriesvalue5) {
            this._seriesvalue5 = val;
        }
    }

    private _seriesvalue6: number;
    public get Value6(): number {
        return this._seriesvalue6;
    }
    public set Value6(val: number) {
        if (val != this._seriesvalue6) {
            this._seriesvalue6 = val;
        }
    }

    private _seriesvalue7: number;
    public get Value7(): number {
        return this._seriesvalue7;
    }
    public set Value7(val: number) {
        if (val != this._seriesvalue7) {
            this._seriesvalue7 = val;
        }
    }
    private _seriesvalue8: number;
    public get Value8(): number {
        return this._seriesvalue8;
    }
    public set Value8(val: number) {
        if (val != this._seriesvalue8) {
            this._seriesvalue8 = val;
        }
    }
    private _seriesvalue9: number;
    public get Value9(): number {
        return this._seriesvalue9;
    }
    public set Value9(val: number) {
        if (val != this._seriesvalue9) {
            this._seriesvalue9 = val;
        }
    }
    private _seriesvalue10: number;
    public get Value10(): number {
        return this._seriesvalue10;
    }
    public set Value10(val: number) {
        if (val != this._seriesvalue10) {
            this._seriesvalue10 = val;
        }
    }
    private _seriesvalue11: number;
    public get Value11(): number {
        return this._seriesvalue11;
    }
    public set Value11(val: number) {
        if (val != this._seriesvalue11) {
            this._seriesvalue11 = val;
        }
    }

    private _seriesvalue12: number;
    public get Value12(): number {
        return this._seriesvalue12;
    }
    public set Value12(val: number) {
        if (val != this._seriesvalue12) {
            this._seriesvalue12 = val;
        }
    }


    private _seriesvalue13: number;
    public get Value13(): number {
        return this._seriesvalue13;
    }
    public set Value13(val: number) {
        if (val != this._seriesvalue13) {
            this._seriesvalue13 = val;
        }
    }


    private _seriesvalue14: number;
    public get Value14(): number {
        return this._seriesvalue14;
    }
    public set Value14(val: number) {
        if (val != this._seriesvalue14) {
            this._seriesvalue14 = val;
        }
    }


    private _seriesvalue15: number;
    public get Value15(): number {
        return this._seriesvalue15;
    }
    public set Value15(val: number) {
        if (val != this._seriesvalue15) {
            this._seriesvalue15 = val;
        }
    }

    private _label: string = "";
    public get Label(): string {
        return this._label;
    }
    public set Label(val: string) {
        if (val != this._label) {
            this._label = val;
        }
    }
}


export class VXLineValue extends VXChartValue {
    private _seriesvalue1: number;
    public get Value1(): number {
        return this._seriesvalue1;
    }
    public set Value1(val: number) {
        if (val != this._seriesvalue1) {
            this._seriesvalue1 = val;
        }
    }

    private _seriesvalue2: number;
    public get Value2(): number {
        return this._seriesvalue2;
    }
    public set Value2(val: number) {
        if (val != this._seriesvalue2) {
            this._seriesvalue2 = val;
        }
    }

    private _seriesvalue3: number;
    public get Value3(): number {
        return this._seriesvalue3;
    }
    public set Value3(val: number) {
        if (val != this._seriesvalue3) {
            this._seriesvalue3 = val;
        }
    }

    private _seriesvalue4: number;
    public get Value4(): number {
        return this._seriesvalue4;
    }
    public set Value4(val: number) {
        if (val != this._seriesvalue4) {
            this._seriesvalue4 = val;
        }
    }

    private _seriesvalue5: number;
    public get Value5(): number {
        return this._seriesvalue5;
    }
    public set Value5(val: number) {
        if (val != this._seriesvalue5) {
            this._seriesvalue5 = val;
        }
    }

    private _seriesvalue6: number;
    public get Value6(): number {
        return this._seriesvalue6;
    }
    public set Value6(val: number) {
        if (val != this._seriesvalue6) {
            this._seriesvalue6 = val;
        }
    }


    private _date: Date;
    public get Date(): Date {
        return this._date;
    }
    public set Date(val: Date) {
        if (val != this._date) {
            this._date = val;
        }
    }
}


export class VXChartValuesCollection<T> extends VXO.VXCollection<T> {
}

var __slice = [].slice;


export class EventEmitter {
    private handlers;
    public owner: VXChartBase;

    on(name, handler) {
        if (this.handlers == null) {
            this.handlers = {};
        }
        if (this.handlers[name] == null) {
            this.handlers[name] = [];
        }
        this.handlers[name].push(handler);
        return this;
    }

    fire(...arg: any[]) {
        var args, handler, name, _i, _len, _ref, _results;
        name = arg[0], args = 2 <= arg.length ? __slice.call(arg, 1) : [];
        if ((this.handlers != null) && (this.handlers[name] != null)) {
            _ref = this.handlers[name];
            _results = [];
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                handler = _ref[_i];
                _results.push(handler.apply(null, args));
            }
            return _results;
        }
    }
}

declare var Raphael;

export class Grid extends EventEmitter {
    public cumulative;
    public el;
    public raphael;
    public elementWidth;
    public elementHeight;
    private dirty;
    public options;
    public defaults;
    public data;
    public olddata;
    public hover;
    public xmin;
    public xmax;
    private events;
    public left;
    public right;
    public top;
    public bottom;
    private grid;
    public ymax;
    public ymin;
    private dy;
    private dx;
    public width;
    private height;


    constructor(options) {
        super();
        var _this = this;
        if (typeof options.element === 'string') {
            this.el = $(document.getElementById(options.element));
        } else {
            this.el = $(options.element);
        }
        if (!(this.el != null) || this.el.length === 0) {
            throw new Error("Graph container element not found");
        }
        if (this.el.css('position') === 'static') {
            this.el.css('position', 'relative');
        }
        this.options = $.extend({}, this.gridDefaults, this.defaults || {}, options);
        if (typeof this.options.units === 'string') {
            this.options.postUnits = options.units;
        }
        this.raphael = new Raphael(this.el[0]);
        this.elementWidth = null;
        this.elementHeight = null;
        this.dirty = false;
        this.init();
        this.setData(this.options.data);
        this.el.bind('mousemove', function (evt) {
            var offset;
            offset = _this.el.offset();
            _this.onHoverMove(evt.pageX - offset.left, evt.pageY - offset.top, evt);
        });
        this.el.bind('mouseout', function (evt) {
            return _this.onHoverOut();
        });
        this.el.bind('touchstart touchmove touchend', function (evt) {
            var offset, touch;
            touch = evt.originalEvent.touches[0] || evt.originalEvent.changedTouches[0];
            offset = _this.el.offset();
            _this.fire('hover', touch.pageX - offset.left, touch.pageY - offset.top);
            return touch;
        });
        /*this.el.bind('click', function (evt) {
            var offset;
            offset = _this.el.offset();
            var y = _this.onGridClick(evt.pageX - offset.left, evt.pageY - offset.top);
            return y;

        });*/
        this.postInit();
    }
    init() { }
    calc() { }
    postInit() { }
    draw() { }
    onHoverMove(x, y, evt) { }
    onHoverOut() { }
    onGridClick(x, y, evt) { }
    

    gridDefaults = {
        dateFormat: null,
        axes: true,
        grid: true,
        gridLineColor: '#aaa',
        gridStrokeWidth: 0.5,
        gridTextColor: '#888',
        gridTextSize: 12,
        gridTextFamily: 'sans-serif',
        gridTextWeight: 'normal',
        hideHover: false,
        yLabelFormat: null,
        xLabelAngle: 0,
        numLines: 5,
        paddingX: 15,
        paddingY: 5,
        parseTime: true,
        postUnits: '',
        preUnits: '',
        ymax: 'auto',
        ymin: 'auto 0',
        goals: [],
        goalStrokeWidth: 1.0,
        goalLineColors: ['#666633', '#999966', '#cc6666', '#663333'],
        events: [],
        eventStrokeWidth: 1.0,
        eventLineColors: ['#005a04', '#ccffbb', '#3a5f0b', '#005502']
    }

    setData(data, redraw?) {
        var e, idx, index, maxGoal, minGoal, ret, row, step, total, y, ykey, ymax, ymin, yval;
        redraw = true;

        this.options.data = data;
        if (!(data != null) || data.length === 0) {
            this.data = [];
            this.raphael.clear();
            if (this.hover != null) {
                this.hover.hide();
            }
            return;
        }
        ymax = this.cumulative ? 0 : null;
        ymin = this.cumulative ? 0 : null;
        if (this.options.goals.length > 0) {
            minGoal = Math.min.apply(null, this.options.goals);
            maxGoal = Math.max.apply(null, this.options.goals);
            ymin = ymin != null ? Math.min(ymin, minGoal) : minGoal;
            ymax = ymax != null ? Math.max(ymax, maxGoal) : maxGoal;
        }
        this.olddata = this.data;
        this.data = (function () {
            var _i, _len, _results;
            _results = [];
            for (index = _i = 0, _len = data.length; _i < _len; index = ++_i) {
                row = data[index];
                ret = {};
                ret.label = row[this.options.xkey];
                ret.id = row["id"];
                if (this.options.parseTime && ret.label.getMonth)
                {
                    ret.x = ret.label.getTime();
                    if (this.options.dateFormat) {
                        ret.label = this.options.dateFormat(ret.x);
                    } else {
                        var dt: Date = new Date(ret.x);
                        if (dt.getHours() == 0 && dt.getMinutes() == 0 && dt.getSeconds() == 0)
                            ret.label = V.Application.FormatDateTime(dt, V.Application.DateFormat);
                        else
                            ret.label = V.Application.FormatDateTime(dt, V.Application.LongDateFormat);
                        //ret.label = new Date(ret.label).toString();
                    }
                } else {
                    ret.x = index;
                    if (this.options.xLabelFormat) {
                        ret.label = this.options.xLabelFormat(ret);
                    }
                }
                total = 0;
                ret.y = (function () {
                    var _j, _len1, _ref, _results1;
                    _ref = this.options.ykeys;
                    _results1 = [];
                    for (idx = _j = 0, _len1 = _ref.length; _j < _len1; idx = ++_j) {
                        ykey = _ref[idx];
                        yval = row[ykey];
                        if (typeof yval === 'string') {
                            yval = parseFloat(yval);
                        }
                        if ((yval != null) && typeof yval !== 'number') {
                            yval = null;
                        }
                        if (yval != null) {
                            if (this.cumulative) {
                                total += yval;
                            } else {
                                if (ymax != null) {
                                    ymax = Math.max(yval, ymax);
                                    ymin = Math.min(yval, ymin);
                                } else {
                                    ymax = ymin = yval;
                                }
                            }
                        }
                        if (this.cumulative && (total != null)) {
                            ymax = Math.max(total, ymax);
                            ymin = Math.min(total, ymin);
                        }
                        _results1.push(yval);
                    }
                    return _results1;
                }).call(this);
                _results.push(ret);
            }
            return _results;
        }).call(this);

        if (this.options.parseTime) {
            this.data = this.data.sort(function (a, b) {
                if (a.x > b.x) return 1;
                if (a.x < b.x) return -1;
                return 0;
            });
        }
        
        this.xmin = this.data[0].x;
        

        this.xmax = this.data[this.data.length - 1].x;
        this.events = [];
        if (this.options.parseTime && this.options.events.length > 0) {
            this.events = (function () {
                var _i, _len, _ref, _results;
                _ref = this.options.events;
                _results = [];
                for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                    e = _ref[_i];
                    _results.push(parseDate(e));
                }
                return _results;
            }).call(this);
            this.xmax = Math.max(this.xmax, Math.max.apply(null, this.events));
            this.xmin = Math.min(this.xmin, Math.min.apply(null, this.events));
        }
        if (this.xmin === this.xmax) {
            this.xmin -= 1;
            this.xmax += 1;
        }
        this.ymin = this.yboundary('min', ymin);
        this.ymax = this.yboundary('max', ymax);
        if (this.ymin === this.ymax) {
            if (ymin) {
                this.ymin -= 1;
            }
            this.ymax += 1;
        }
        if (this.options.axes === true || this.options.grid === true) {
            if (this.options.ymax === this.gridDefaults.ymax && this.options.ymin === this.gridDefaults.ymin) {
                this.grid = this.autoGridLines(this.ymin, this.ymax, this.options.numLines);
                this.ymin = Math.min(this.ymin, this.grid[0]);
                this.ymax = Math.max(this.ymax, this.grid[this.grid.length - 1]);
            } else {
                step = (this.ymax - this.ymin) / (this.options.numLines - 1);
                this.grid = (function () {
                    var _i, _ref, _ref1, _results;
                    _results = [];
                    for (y = _i = _ref = this.ymin, _ref1 = this.ymax; _ref <= _ref1 ? _i <= _ref1 : _i >= _ref1; y = _i += step) {
                        _results.push(y);
                    }
                    return _results;
                }).call(this);
            }
        }
        this.dirty = true;
        return this.redraw();
    }

    yboundary(boundaryType, currentValue) {
        var boundaryOption, suggestedValue;
        boundaryOption = this.options["y" + boundaryType];
        if (typeof boundaryOption === 'string') {
            if (boundaryOption.slice(0, 4) === 'auto') {
                if (boundaryOption.length > 5) {
                    suggestedValue = parseInt(boundaryOption.slice(5), 10);
                    if (currentValue == null) {
                        return suggestedValue;
                    }
                    return Math[boundaryType](currentValue, suggestedValue);
                } else {
                    if (currentValue != null) {
                        return currentValue;
                    } else {
                        return 0;
                    }
                }
            } else {
                return parseInt(boundaryOption, 10);
            }
        } else {
            return boundaryOption;
        }
    }

    autoGridLines(ymin, ymax, nlines) {
        var gmax, gmin, grid, smag, span, step, unit, y, ymag;
        span = ymax - ymin;
        ymag = Math.floor(Math.log(span) / Math.log(10));
        unit = Math.pow(10, ymag);
        gmin = Math.floor(ymin / unit) * unit;
        gmax = Math.ceil(ymax / unit) * unit;
        step = (gmax - gmin) / (nlines - 1);
        if (unit === 1 && step > 1 && Math.ceil(step) !== step) {
            step = Math.ceil(step);
            gmax = gmin + step * (nlines - 1);
        }
        if (gmin < 0 && gmax > 0) {
            gmin = Math.floor(ymin / step) * step;
            gmax = Math.ceil(ymax / step) * step;
        }
        if (step < 1) {
            smag = Math.floor(Math.log(step) / Math.log(10));
            grid = (function () {
                var _i, _results;
                _results = [];
                for (y = _i = gmin; gmin <= gmax ? _i <= gmax : _i >= gmax; y = _i += step) {
                    _results.push(parseFloat(y.toFixed(1 - smag)));
                }
                return _results;
            })();
        } else {
            grid = (function () {
                var _i, _results;
                _results = [];
                for (y = _i = gmin; gmin <= gmax ? _i <= gmax : _i >= gmax; y = _i += step) {
                    _results.push(y);
                }
                return _results;
            })();
        }
        return grid;
    }

    _calc() {
        var bottomOffsets, gridLine, h, i, w, yLabelWidths;
        w = this.el.width();
        h = this.el.height();
        if (this.elementWidth !== w || this.elementHeight !== h || this.dirty) {
            this.elementWidth = w;
            this.elementHeight = h;
            this.dirty = false;
            this.left = this.options.paddingY;
            this.right = this.elementWidth - 15;//this.options.paddingY;
            this.top = 15;//this.options.paddingX;
            this.bottom = this.elementHeight - this.options.paddingX;
            if (this.options.axes) {
                yLabelWidths = (function () {
                    var _i, _len, _ref, _results;
                    _ref = this.grid;
                    _results = [];
                    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                        gridLine = _ref[_i];
                        _results.push(this.measureText(this.yAxisFormat(gridLine, true), 0).width);
                    }
                    return _results;
                }).call(this);
                this.left += Math.max.apply(Math, yLabelWidths);
                var cacheHeight = -1;
                bottomOffsets = (function () {
                    var _i, _ref, _results;
                    _results = [];
                    for (i = _i = 0, _ref = this.data.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
                        /*if (this.options.xLabelAngle == 0) {
                            if (cacheHeight == -1) {
                                cacheHeight = this.measureText(this.data[i].label, -this.options.xLabelAngle).height;
                            }
                            _results.push(cacheHeight); //same height 
                        } else {
                            _results.push(this.measureText(this.data[i].label, -this.options.xLabelAngle).height);
                        }*/
                        _results.push(this.measureText(this.data[i].text, -this.options.xLabelAngle).height);
                    }
                    return _results;
                }).call(this);
                this.bottom -= Math.max.apply(Math, bottomOffsets);
            }
            this.width = Math.max(1, this.right - this.left);
            this.height = Math.max(1, this.bottom - this.top);

            this.dx = this.width / (this.xmax - this.xmin);

            this.dy = this.height / (this.ymax - this.ymin);
            if (this.calc) {
                return this.calc();
            }
        }
    }

    transY(y) {
        return this.bottom - (y - this.ymin) * this.dy;
    }

    transX(x) {
        if (this.data.length === 1) {
            return (this.left + this.right) / 2;
        } else {
            return this.left + (x - this.xmin) * this.dx;
        
        }
    }

    redraw() {
        this.raphael.clear();
        this._calc();
        this.drawGrid();
        this.drawGoals();
        this.drawEvents();
        return this.draw();

    }

    measureText(text, angle = 0) {
        var ret, tt;
        if (text == null) return { height: 0, width: 0 };
        tt = this.raphael.text(100, 100, text).attr('font-size', this.options.gridTextSize).attr('font-family', this.options.gridTextFamily).attr('font-weight', this.options.gridTextWeight).rotate(angle);
        ret = tt.getBBox();
        tt.remove();
        return ret;
    }

    yAxisFormat(label, humanFriendly: boolean) {
        return this.yLabelFormat(label, humanFriendly);
    }

    yLabelFormat(label, humanFriendly: boolean) {
        if (typeof this.options.yLabelFormat === 'function') {
            return this.options.yLabelFormat(label);
        } else {
            if (label > 9999.99 && humanFriendly) return this.options.preUnits + V.humanFriendlyNumber(label, 1) + this.options.postUnits;
            return "" + this.options.preUnits + (V.commaNumber(label)) + this.options.postUnits;
        }
    }

    hitTest(x, y) {
        return null;
    }
    updateHover(x, y) {
        var hit, _ref;
        hit = this.hitTest(x, y);
        if (hit != null) {
            return (_ref = this.hover).update.apply(_ref, hit);
        }
    }

    drawGrid() {
        var lineY, y, _i, _len, _ref, _results;
        if (this.options.grid === false && this.options.axes === false) {
            return;
        }
        if (this.options.titleY) {
            var b = this.measureText(this.options.titleY, 270);
            var center = (this.elementHeight / 2);
            this.raphael.text(this.options.gridTextSize / 2 /*this.left - this.options.paddingY*/, center, this.options.titleY).
                attr('font-size', this.options.gridTextSize + 1).attr('font-family', this.options.gridTextFamily - 1).
                attr('font-weight', "normal").attr('fill', this.options.gridTextColor).rotate(270);
        }

        _ref = this.grid;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            lineY = _ref[_i];
            y = this.transY(lineY);
            if (this.options.axes) {
                this.drawYAxisLabel(this.left - 4, y, this.yAxisFormat(lineY, true));
            }
            if (this.options.grid) {
                _results.push(this.drawGridLine("M" + this.left + "," + y + "H" + (this.left + this.width)));
            } else {
                _results.push(void 0);
            }
        }
        return _results;
    }

    drawGoals() {
        var color, goal, i, _i, _len, _ref, _results;
        _ref = this.options.goals;
        _results = [];
        for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
            goal = _ref[i];
            color = this.options.goalLineColors[i % this.options.goalLineColors.length];
            _results.push(this.drawGoal(goal, color));
        }
        return _results;
    }

    drawEvents() {
        var color, event, i, _i, _len, _ref, _results;
        _ref = this.events;
        _results = [];
        for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
            event = _ref[i];
            color = this.options.eventLineColors[i % this.options.eventLineColors.length];
            _results.push(this.drawEvent(event, color));
        }
        return _results;
    }
    a
    drawGoal(goal, color) {
        return this.raphael.path("M" + this.left + "," + (this.transY(goal)) + "H" + this.right).attr('stroke', color).attr('stroke-width', this.options.goalStrokeWidth);
    }

    drawEvent(event, color) {
        return this.raphael.path("M" + (this.transX(event)) + "," + this.bottom + "V" + this.top).attr('stroke', color).attr('stroke-width', this.options.eventStrokeWidth);
    }

    drawYAxisLabel(xPos, yPos, text) {
        return this.raphael.text(xPos, yPos, text).attr('font-size', this.options.gridTextSize).attr('font-family', this.options.gridTextFamily).attr('font-weight', this.options.gridTextWeight).attr('fill', this.options.gridTextColor).attr('text-anchor', 'end');
    }

    drawGridLine(path) {
        return this.raphael.path(path).attr('stroke', this.options.gridLineColor).attr('stroke-width', this.options.gridStrokeWidth);
    }
}


function parseDate(date) {
    var isecs, m, msecs, n, o, offsetmins, p, q, r, ret, secs;
    if (typeof date === 'number') { return date; }
    if (date.getHours() != null) { return date.dateime(); }

    m = date.match(/^(\d+) Q(\d)$/);
    n = date.match(/^(\d+)-(\d+)$/);
    o = date.match(/^(\d+)-(\d+)-(\d+)$/);
    p = date.match(/^(\d+) W(\d+)$/);
    q = date.match(/^(\d+)-(\d+)-(\d+)[ T](\d+):(\d+)(Z|([+-])(\d\d):?(\d\d))?$/);
    r = date.match(/^(\d+)-(\d+)-(\d+)[ T](\d+):(\d+):(\d+(\.\d+)?)(Z|([+-])(\d\d):?(\d\d))?$/);
    if (m) {
        return new Date(parseInt(m[1], 10), parseInt(m[2], 10) * 3 - 1, 1).getTime();
    } else if (n) {
        return new Date(parseInt(n[1], 10), parseInt(n[2], 10) - 1, 1).getTime();
    } else if (o) {
        return new Date(parseInt(o[1], 10), parseInt(o[2], 10) - 1, parseInt(o[3], 10)).getTime();
    } else if (p) {
        ret = new Date(parseInt(p[1], 10), 0, 1);
        if (ret.getDay() !== 4) {
            ret.setMonth(0, 1 + ((4 - ret.getDay()) + 7) % 7);
        }
        return ret.getTime() + parseInt(p[2], 10) * 604800000;
    } else if (q) {
        if (!q[6]) {
            return new Date(parseInt(q[1], 10), parseInt(q[2], 10) - 1, parseInt(q[3], 10), parseInt(q[4], 10), parseInt(q[5], 10)).getTime();
        } else {
            offsetmins = 0;
            if (q[6] !== 'Z') {
                offsetmins = parseInt(q[8], 10) * 60 + parseInt(q[9], 10);
                if (q[7] === '+') {
                    offsetmins = 0 - offsetmins;
                }
            }
            return Date.UTC(parseInt(q[1], 10), parseInt(q[2], 10) - 1, parseInt(q[3], 10), parseInt(q[4], 10), parseInt(q[5], 10) + offsetmins);
        }
    } else if (r) {
        secs = parseFloat(r[6]);
        isecs = Math.floor(secs);
        msecs = Math.round((secs - isecs) * 1000);
        if (!r[8]) {
            return new Date(parseInt(r[1], 10), parseInt(r[2], 10) - 1, parseInt(r[3], 10), parseInt(r[4], 10), parseInt(r[5], 10), isecs, msecs).getTime();
        } else {
            offsetmins = 0;
            if (r[8] !== 'Z') {
                offsetmins = parseInt(r[10], 10) * 60 + parseInt(r[11], 10);
                if (r[9] === '+') {
                    offsetmins = 0 - offsetmins;
                }
            }
            return Date.UTC(parseInt(r[1], 10), parseInt(r[2], 10) - 1, parseInt(r[3], 10), parseInt(r[4], 10), parseInt(r[5], 10) + offsetmins, isecs, msecs);
        }
    } else {
        return new Date(parseInt(date, 10), 0, 1).getTime();
    }
}

export class Hover {
    private options;
    private el: JQuery;
    public offset: number;


    constructor(options) {
        if (options == null) { options = {}; }
        this.options = $.extend({}, { "class": 'morris-hover morris-default-style' }, options);
        this.el = $("<div class='" + this.options["class"] + "'></div>");
        this.el.css('pointer-events', 'none');
        this.el.hide();
        this.options.parent.append(this.el);
    }

    update(html, x, y) {
        this.html(html);
        
        this.show();
        return this.moveTo(x, y);
    }

    html(content) {
        this.el.html(content);
        return this.el;
    }

    moveTo(x, y) {
        var hoverHeight, hoverWidth, left, parentHeight, parentWidth, top;
        parentWidth = this.options.parent.innerWidth();
        parentHeight = this.options.parent.innerHeight();
        hoverWidth = this.el.outerWidth();
        hoverHeight = this.el.outerHeight();
        var factor: number;
        if (this.offset > 0) factor = x  + this.offset / 2 - 5;
        else if (this.offset < 0) factor = x + this.offset / 2 - hoverWidth + 5;
        else factor = x - hoverWidth / 2;

        left = Math.min(Math.max(0, factor), parentWidth - hoverWidth);
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

