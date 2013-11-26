import V = require("VCL/VCL");
import VXU = require("VCL/VXUtils");
import VXC = require("VCL/VXComponent");
import VXD = require("VCL/VXDataset");
import VXCB = require("VCL/VXChartBase");

export class VXChartDonut extends VXCB.VXChartBase {
    public onSelectionchanged: (value: V.TDountValue) => void;
    public onClicked: (value: V.TDountValue) => void;

    public values = new VXCB.VXChartValuesCollection<VXCB.VXDountValue>();
    public createValue(label: string, value: number): VXCB.VXDountValue {
        var col = new VXCB.VXDountValue();
        this.values.add(col);
        col.Value = value;
        col.Label = label;
        
        return col;
    }

    private _basecolor: V.BaseColor = V.BaseColor.Primary;
    public get BaseColor(): V.BaseColor {
        return this._basecolor;
    }
    public set BaseColor(val: V.BaseColor) {
        if (val != this._basecolor) {
            this._basecolor = val;
            this.draw(true);
        }
    }


    private donut: Donut;
    public selectedValue(): V.TDountValue {
        if (this.donut == null) return null;
        for (var i = this.donut.segments.length; i--;) {     
            if (!this.donut.segments[i].selected) continue;
            return <V.TDountValue>this.values.FindItemByID(this.donut.segments[i].ID);
        }
        return null;
    }


    public getData(): any[] {
        var dataArray = [];
        this.values.forEach((valueOfElement: VXCB.VXDountValue) => {
            var obj: any = { label: valueOfElement.Label, value: valueOfElement.Value, id: valueOfElement.ID };
            dataArray.push(obj);
            return true;
        });
        return dataArray;
    }

    public create() {
        this.jComponent.empty(); //clear all subcomponents
        this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'div', this.FitToWidth, this.FitToHeight);
        var dataArray = this.getData();

        var btnColor: string;
        switch (this.BaseColor) {
            case V.BaseColor.Default: btnColor = "btn"; break;
            case V.BaseColor.Primary: btnColor = "btn-primary"; break;
            case V.BaseColor.Info: btnColor = "btn-info"; break;
            case V.BaseColor.Success: btnColor = "btn-success"; break;
            case V.BaseColor.Warning: btnColor = "btn-warning"; break;
            case V.BaseColor.Danger: btnColor = "btn-danger"; break;
            default: btnColor = "btn-primary"; break;
        }
        btnColor = V.getClassStyleHexColor(btnColor, 'background-color');
        var colors = calculateShades(btnColor, dataArray.length);
        for (var j, x, i = colors.length; i; j = Math.floor(Math.random() * i), x = colors[--i], colors[i] = colors[j], colors[j] = x);

        this.donut = new Donut({
            element: this.jComponent[0],
            data: dataArray,
            colors: colors
        },this);
        super.create();
    }

    private componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }


    
    public draw(reCreate: boolean) {
        if (!this.parentInitialized())return;super.draw(reCreate);
        if (reCreate || !this.initialized) this.create();
        this.initialized = true;

    }
}

export class VXDBChartDonut extends VXChartDonut {
    private _valuefield: string;
    /**
    * Specifies the field from which the edit control displays data.
    */
    public get ValueField(): string {
        return this._valuefield;
    }
    public set ValueField(val: string) {
        if (val != this._valuefield) {
            this._valuefield = val.toUpperCase();
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
            if (val != this._dataset) {
                if (this._dataset != null) {
                    (<any>this._dataset).removeEventListener(VXD.VXDataset.EVENT_DATA_CHANGED, this);
                    (<any>this._dataset).removeEventListener(VXD.VXDataset.EVENT_STATE_CHANGED, this);
                }
                this._dataset = val;
                if (this._dataset) {
                    (<any>this._dataset).registerEventListener(VXD.VXDataset.EVENT_DATA_CHANGED, this, () => {
                        this.draw(true);
                    });
                    (<any>this._dataset).registerEventListener(VXD.VXDataset.EVENT_STATE_CHANGED, this, () => {
                        this.draw(true);
                    });
                }
            }
           
        }
    }

    public getData(): any[]{
        this.values.clear();
        var dataArray = [];
        if (this.Dataset == null || this.ValueField == null) return dataArray;
        if (!this.Dataset.Active) return dataArray;
        this.Dataset.forEach(() => {
           
            var lbl: string = this.Dataset.getFieldValue(this.LabelField);
            if (lbl == null) lbl = "";
            var val: number = this.Dataset.getFieldValue(this.ValueField);
            var obj: any = { label: lbl, value: val, id: this.Dataset.ID };
            dataArray.push(obj);

            var col = new VXCB.VXDountValue();
            this.values.add(col);
            col.Value = val;
            col.Label = lbl;
            col.ID = this.Dataset.Recno.toString();
        });

        return dataArray;
    }
}






declare var Raphael;
var __slice = [].slice;


class Donut extends VXCB.EventEmitter {
    private el;
    private options;
    private data;
    private values;
    private raphael;
    public  segments: DonutSegment[];
    private text2;
    private text1;

    defaults = {
        colors: ['#0B62A4', '#3980B5', '#679DC6', '#95BBD7', '#B0CCE1', '#095791', '#095085', '#083E67', '#052C48', '#042135'],
        backgroundColor: '#FFFFFF',
        labelColor: '#000000',
        formatter: commas
    };

    constructor(options,owner) {
        super();
        this.owner = owner;
        this.select = __bind(this.select, this);

        this.click = __bind(this.click, this);

        var row;
        /*if (!(this instanceof Donut)) {
            return new Donut(options);
        }*/
        if (typeof options.element === 'string') {
            this.el = $(document.getElementById(options.element));
        } else {
            this.el = $(options.element);
        }
        this.options = $.extend({}, this.defaults, options);
        if (this.el === null || this.el.length === 0) {
            throw new Error("Graph placeholder not found.");
        }
        if (options.data === void 0 || options.data.length === 0) {
            return;
        }
        this.data = options.data;
        this.values = (function () {
            var _i, _len, _ref, _results;
            _ref = this.data;
            _results = [];
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                row = _ref[_i];
                _results.push(parseFloat(row.value));
            }
            return _results;
        }).call(this);
        this.redraw();
    }

    redraw() {
        var C, cx, cy, i, idx, last, max_value, min, next, seg, total, value, w, _i, _j, _k, _len, _len1, _len2, _ref, _ref1, _ref2, _results;
        this.el.empty();
        this.raphael = new Raphael(this.el[0]);
        cx = this.el.width() / 2;
        cy = this.el.height() / 2;
        w = (Math.min(cx, cy) - 10) / 3;
        total = 0;
        _ref = this.values;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            value = _ref[_i];
            total += value;
        }
        min = 5 / (2 * w);
        C = 1.9999 * Math.PI - min * this.data.length;
        last = 0;
        idx = 0;
        this.segments = [];
        _ref1 = this.values;
        for (i = _j = 0, _len1 = _ref1.length; _j < _len1; i = ++_j) {
            value = _ref1[i];
            next = last + min + C * (value / total);
            seg = new DonutSegment(cx, cy, w * 2, w, last, next,
                this.options.colors[idx % this.options.colors.length],
                this.options.backgroundColor, idx, this.raphael);
            seg.ID = this.data[i].id;
            seg.render();
            this.segments.push(seg);
            seg.on('hover', this.select);
            seg.on('click', this.click);
            last = next;
            idx += 1;
        }
        this.text1 = this.drawEmptyDonutLabel(cx, cy - 10, this.options.labelColor, 15, 800);
        this.text2 = this.drawEmptyDonutLabel(cx, cy + 10, this.options.labelColor, 14);
        max_value = Math.max.apply(null, (function () {
            var _k, _len2, _ref2, _results;
            _ref2 = this.values;
            _results = [];
            for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
                value = _ref2[_k];
                _results.push(value);
            }
            return _results;
        }).call(this));
        idx = 0;
        _ref2 = this.values;
        _results = [];
        for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
            value = _ref2[_k];
            if (value === max_value) {
                this.select(idx);
                break;
            }
            _results.push(idx += 1);
        }
        return _results;
    }

    click(idx) {
        var y = this.fire('click', idx, this.data[idx]);
        if (this.owner) {
            var owner = <VXChartDonut>this.owner;

            if (owner.onClicked != null && idx <= owner.values.length()) (V.tryAndCatch(() => { owner.onClicked(owner.values.toArray()[idx]); }));
        }
        return y;
    }

    select(idx: number) {
        var oldidx: number = -1;
        var row, s, segment, _i, _len, _ref;
        _ref = this.segments;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            s = _ref[_i];
            if (s.selected) oldidx = _i;
            s.deselect();
        }
        segment = this.segments[idx];
        segment.select();
        row = this.data[idx];
        var y = this.setLabels(row.label, this.options.formatter(row.value, row));
        if (oldidx != idx && this.owner) {
            var owner = <VXChartDonut>this.owner;
            if (owner instanceof VXDBChartDonut && (<VXDBChartDonut>owner).Dataset != null){
                (<VXDBChartDonut>owner).Dataset.Recno = parseInt(owner.values.toArray()[idx].ID);
            }
            if (owner.onSelectionchanged != null && idx <= owner.values.length()) {
                (V.tryAndCatch(() => { owner.onSelectionchanged(owner.values.toArray()[idx]); }));
            }
        }
        return y;
    }

    setLabels(label1, label2) {
        var inner, maxHeightBottom, maxHeightTop, maxWidth, text1bbox, text1scale, text2bbox, text2scale;
        inner = (Math.min(this.el.width() / 2, this.el.height() / 2) - 10) * 2 / 3;
        maxWidth = 1.8 * inner;
        maxHeightTop = inner / 2;
        maxHeightBottom = inner / 3;
        this.text1.attr({
            text: label1,
            transform: ''
        });
        text1bbox = this.text1.getBBox();
        text1scale = Math.min(maxWidth / text1bbox.width, maxHeightTop / text1bbox.height);
        this.text1.attr({
            transform: "S" + text1scale + "," + text1scale + "," + (text1bbox.x + text1bbox.width / 2) + "," + (text1bbox.y + text1bbox.height)
        });
        this.text2.attr({
            text: label2,
            transform: ''
        });
        text2bbox = this.text2.getBBox();
        text2scale = Math.min(maxWidth / text2bbox.width, maxHeightBottom / text2bbox.height);
        return this.text2.attr({
            transform: "S" + text2scale + "," + text2scale + "," + (text2bbox.x + text2bbox.width / 2) + "," + text2bbox.y
        });
    }

    drawEmptyDonutLabel = function (xPos, yPos, color, fontSize, fontWeight?) {
        var text;
        text = this.raphael.text(xPos, yPos, '').attr('font-size', fontSize).attr('fill', color);
        if (fontWeight != null) {
            text.attr('font-weight', fontWeight);
        }
        return text;
    }

  }


class DonutSegment extends VXCB.EventEmitter {
    private cx;
    private cy;
    private inner;
    private outer;
    private color;
    private backgroundColor;
    private index;
    private raphael;
    private sin_p0;
    private cos_p0;
    private cos_p1;
    private is_long;
    private path;
    private sin_p1;
    private selectedPath;
    private hilight;
    private arc;
    private seg;
    public selected;
    public ID;


    constructor(cx, cy, inner, outer, p0, p1, color, backgroundColor, index, raphael) {
        super();
        this.cx = cx;
        this.cy = cy;
        this.inner = inner;
        this.outer = outer;
        this.color = color;
        this.backgroundColor = backgroundColor;
        this.index = index;
        this.raphael = raphael;
        this.deselect = __bind(this.deselect, this);

        this.select = __bind(this.select, this);

        this.sin_p0 = Math.sin(p0);
        this.cos_p0 = Math.cos(p0);
        this.sin_p1 = Math.sin(p1);
        this.cos_p1 = Math.cos(p1);
        this.is_long = (p1 - p0) > Math.PI ? 1 : 0;
        this.path = this.calcSegment(this.inner + 3, this.inner + this.outer - 5);
        this.selectedPath = this.calcSegment(this.inner + 3, this.inner + this.outer);
        this.hilight = this.calcArc(this.inner);
    }

    calcArcPoints = function (r) {
        return [this.cx + r * this.sin_p0, this.cy + r * this.cos_p0, this.cx + r * this.sin_p1, this.cy + r * this.cos_p1];
    }

    calcSegment = function (r1, r2) {
        var ix0, ix1, iy0, iy1, ox0, ox1, oy0, oy1, _ref, _ref1;
        _ref = this.calcArcPoints(r1), ix0 = _ref[0], iy0 = _ref[1], ix1 = _ref[2], iy1 = _ref[3];
        _ref1 = this.calcArcPoints(r2), ox0 = _ref1[0], oy0 = _ref1[1], ox1 = _ref1[2], oy1 = _ref1[3];
        return ("M" + ix0 + "," + iy0) + ("A" + r1 + "," + r1 + ",0," + this.is_long + ",0," + ix1 + "," + iy1) + ("L" + ox1 + "," + oy1) + ("A" + r2 + "," + r2 + ",0," + this.is_long + ",1," + ox0 + "," + oy0) + "Z";
    }

    calcArc(r) {
        var ix0, ix1, iy0, iy1, _ref;
        _ref = this.calcArcPoints(r), ix0 = _ref[0], iy0 = _ref[1], ix1 = _ref[2], iy1 = _ref[3];
        return ("M" + ix0 + "," + iy0) + ("A" + r + "," + r + ",0," + this.is_long + ",0," + ix1 + "," + iy1);
    }

    render() {
        var _this = this;
        this.arc = this.drawDonutArc(this.hilight, this.color);
        return this.seg = this.drawDonutSegment(this.path, this.color, this.backgroundColor, function () {
            return _this.fire('hover', _this.index);
        }, function () {
                return _this.fire('click', _this.index);
            });
    }

    drawDonutArc(path, color) {
        return this.raphael.path(path).attr({
            stroke: color,
            'stroke-width': 2,
            opacity: 0
        });
    }

    drawDonutSegment(path, fillColor, strokeColor, hoverFunction, clickFunction) {
        return this.raphael.path(path).attr({
            fill: fillColor,
            stroke: strokeColor,
            'stroke-width': 3
        }).hover(hoverFunction).click(clickFunction);
    }

    select() {
        if (!this.selected) {
            this.seg.animate({
                path: this.selectedPath
            }, 150, '<>');
            this.arc.animate({
                opacity: 1
            }, 150, '<>');
            return this.selected = true;
        }
    }

    deselect() {
        if (this.selected) {
            this.seg.animate({
                path: this.path
            }, 150, '<>');
            this.arc.animate({
                opacity: 0
            }, 150, '<>');
            return this.selected = false;
        }
    }
}



function commas(num) {
    var absnum, intnum, ret, strabsnum;
    if (num != null) {
        ret = num < 0 ? "-" : "";
        absnum = Math.abs(num);
        intnum = Math.floor(absnum).toFixed(0);
        ret += intnum.replace(/(?=(?:\d{3})+$)(?!^)/g, ',');
        strabsnum = absnum.toString();
        if (strabsnum.length > intnum.length) {
            ret += strabsnum.slice(intnum.length);
        }
        return ret;
    } else {
        return '-';
    }
}
function __bind(fn, me) { return function () { return fn.apply(me, arguments); }; }


//*********************************************************************
// Tinter-Shader web application, (c) Copyright 2010 High Integrity Design, LLC
// http://www.highintegritydesign.com
//
// licensed under a Creative Commons Attribution-Share Alike 3.0 United States License. 
//	http://creativecommons.org/licenses/by-sa/3.0/us/
//*********************************************************************


//*********************************************************************
// parse an input string, looking for any number of hexadecimal color
// values, possibly with whitespace or garbage in between.  Return an array of 
// color values.
function parseColorValues(colorValues) {
    var colorValuesArray = colorValues.match(/[0-9A-Fa-f]{6}\b/g);
    return colorValuesArray; // this could be null if there are no matches
}


//*********************************************************************
// pad a hexadecimal string with zeros if it needs it
function pad(number, length) {
    var str = '' + number;
    while (str.length < length) {
        str = '0' + str;
    }
    return str;
}


//*********************************************************************
// given a hexadecimal string color value, return a string array of ten hex shades 
// from the color to black
function calculateShades(colorValue, count) {
    var red = parseInt(colorValue.substr(1, 2), 16);
    var green = parseInt(colorValue.substr(3, 2), 16);
    var blue = parseInt(colorValue.substr(5, 2), 16);
    while (red < 225 && green < 225 && blue < 225) { red *= 1.1; green *= 1.1; blue *= 1.1; }
    var min = Math.min(Math.min(red, green), blue);

    var redDecrement = red / (count + 1);
    var greenDecrement = green / (count + 1);
    var blueDecrement = blue / (count + 1);

    var shadeValues = [];
    var redString = null;
    var greenString = null;
    var blueString = null;

    for (var i = 0; i < count; i++) {
        redString = Math.round(red).toString(16); // convert red to hexadecimal string
        redString = pad(redString, 2); // pad the string if needed
        greenString = Math.round(green).toString(16); // convert green to hexadecimal string
        greenString = pad(greenString, 2); // pad the string if needed
        blueString = Math.round(blue).toString(16); // convert blue to hexadecimal string
        blueString = pad(blueString, 2); // pad the string if needed
        shadeValues[i] = '#' + redString + greenString + blueString;

        // reduce the shade towards black
        red = red - redDecrement;
        if (red <= 0) {
            red = 0;
        }
        green = green - greenDecrement;
        if (green <= 0) {
            green = 0;
        }
        blue = blue - blueDecrement;
        if (blue <= 0) {
            blue = 0;
        }
    }
    return shadeValues;
}


//*********************************************************************
// given a color value, return an array of ten tints from the color to white
function calculateTints(colorValue) {
    // break the hexadecimal color value into R, G, B one-byte components
    // and parse into decimal values.
    // calculate an increment value for R, G, and B based on 10% of the
    // difference between their original values, and white.
    var red = parseInt(colorValue.substr(0, 2), 16);
    var redIncrement = Math.round((255 - red) * 0.1);

    var green = parseInt(colorValue.substr(2, 2), 16);
    var greenIncrement = Math.round((255 - green) * 0.1);

    var blue = parseInt(colorValue.substr(4, 2), 16);
    var blueIncrement = Math.round((255 - blue) * 0.1);

    var tintValues = [];
    var redString = null;
    var greenString = null;
    var blueString = null;

    for (var i = 0; i < 10; i++) {
        redString = red.toString(16); // convert red to hexadecimal string
        redString = pad(redString, 2); // pad the string if needed
        greenString = green.toString(16); // convert green to hexadecimal string
        greenString = pad(greenString, 2); // pad the string if needed
        blueString = blue.toString(16); // convert blue to hexadecimal string
        blueString = pad(blueString, 2); // pad the string if needed
        tintValues[i] = redString + greenString + blueString;

        // increase the tint towards white
        red = red + redIncrement;
        if (red >= 255) {
            red = 255; // make sure we don't go above #FF
        }
        green = green + greenIncrement;
        if (green >= 255) {
            green = 255;
        }
        blue = blue + blueIncrement;
        if (blue >= 255) {
            blue = 255;
        }
    }
    tintValues[10] = "FFFFFF";
    return tintValues;
}


//*********************************************************************
// create an html table row holding either the color values as blocks of color
// or the hexadecimal color values in table cells, depending the
// parameter 'displayType'
function makeTableRowColors(colors, displayType) {
    var tableRow = "<tr>";
    for (var i = 0; i < colors.length; i++) {
        if (displayType == "colors") { // make a row of colors
            tableRow += "<td style=\"background-color:" + "#" + colors[i].toString(16) + "\";></td>";
        }
        else { // make a row of RGB values
            tableRow += "<td class=\"rgb-value\">#" + colors[i].toString(16).toUpperCase() + "</td>";
        }
    }
    tableRow += "</tr>";
    return tableRow;
}


