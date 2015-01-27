import V = require("./VCL");
import VXU = require("./VXUtils");
import VXC = require("./VXComponent");
import VXD = require("./VXDataset");
import VXCB = require("./VXChartBase");

export class TChartDonut extends VXCB.TChartBase {
    public onClicked: (value: V.TDountValue) => void;

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

    private _showTextLegend: boolean = true;
    public get ShowTextLegend(): boolean {
        return this._showTextLegend;
    }
    public set ShowTextLegend(val: boolean) {
        if (val != this._showhoverlegend) {
            this._showTextLegend = val;
            this.drawDelayed(true);
        }
    }

    private _humanFriendlyvalue: boolean = false;
    /**
    * Donut become a pie
    */
    public get HumanFriendlyValueFormat(): boolean {
        return this._humanFriendlyvalue;
    }
    public set HumanFriendlyValueFormat(val: boolean) {
        if (val != this._humanFriendlyvalue) {
            this._humanFriendlyvalue = val;
            this.drawDelayed(true);
        }
    }


    private _behaveLikePie: boolean = false;
    /**
    * Donut become a pie
    */
    public get BehaveLikePie(): boolean {
        return this._behaveLikePie;
    }
    public set BehaveLikePie(val: boolean) {
        if (val != this._behaveLikePie) {
            this._behaveLikePie = val;
            this.drawDelayed(true);
        }
    }

    private _showZeroSlices: boolean = false;
    /**
    * Donut show ZeroSlices
    */
    public get ShowZeroSlices(): boolean {
        return this._showZeroSlices;
    }
    public set ShowZeroSlices(val: boolean) {
        if (val != this._showZeroSlices) {
            this._showZeroSlices = val;
            this.drawDelayed(true);
        }
    }

    private _startangle: number = 0;
    /**
    * Specifies the field from which the edit control displays data.
    */
    public get StartAngle(): number {
        return this._startangle;
    }
    public set StartAngle(val: number) {
        if (val != this._startangle) {
            this._startangle = val;
            this.drawDelayed(true);
        }
    }

    private _endangle: number = 360;
    /**
    * Specifies the field from which the edit control displays data.
    */
    public get EndAngle(): number {
        return this._endangle;
    }
    public set EndAngle(val: number) {
        if (val != this._endangle) {
            this._endangle = val;
            this.drawDelayed(true);
        }
    }

    private _drawlabel: boolean = true;
    /**
    * Specifies the field from which the edit control displays data.
    */
    public get DrawLabel(): boolean {
        return this._drawlabel;
    }
    public set DrawLabel(val: boolean) {
        if (val != this._drawlabel) {
            this._drawlabel = val;
            this.drawDelayed(true);
        }
    }

    private _drawvalue: boolean = true;
    /**
    * Specifies the field from which the edit control displays data.
    */
    public get DrawValue(): boolean {
        return this._drawvalue;
    }
    public set DrawValue(val: boolean) {
        if (val != this._drawvalue) {
            this._drawvalue = val;
            this.drawDelayed(true);
        }
    }

    private _titletextsize: number = 15;
    public get TextSize(): number {
        return this._titletextsize;
    }
    public set TextSize(val: number) {
        if (val != this._titletextsize) {
            this._titletextsize = val;
            this.drawDelayed(true);
        }
    }

    private _font: string = 'sans-serif';
    public get TextFont(): string {
        return this._font;
    }
    public set TextFont(val: string) {
        if (val != this._font) {
            this._font = val;
            this.drawDelayed(true);
        }
    }

    private _titleTextWeight: string = "bold";
    public get TitleTextWeight(): string {
        return this._titleTextWeight;
    }
    public set TitleTextWeight(val: string) {
        if (val != this._titleTextWeight) {
            this._titleTextWeight = val;
            this.drawDelayed(true);
        }
    }


    public values = new VXCB.TChartValuesCollection<VXCB.TDountValue>();
    public createValue(label: string, value: number): VXCB.TDountValue {
        var col = new VXCB.TDountValue();
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
            this.drawDelayed(true);
        }
    }

    private _colorPallete: Array<string> = new Array<string>();
    public get ColorPallete(): Array<string>
    {
        if (!this._colorPallete || this._colorPallete.length == 0)
        {
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
            var colors = calculateShades(btnColor, this.values.length());
            for (var j, x, i = colors.length; i; j = Math.floor(Math.random() * i), x = colors[--i], colors[i] = colors[j], colors[j] = x);
            this._colorPallete = colors;
        }
        return this._colorPallete;
    }

    public set ColorPallete(val: Array<string>) {
        var allColorOK = true;
        if (val) val.forEach((item) => {
            var isOk = /^#[0-9A-F]{6}$/i.test(item);
            if (!isOk) {
                allColorOK = false;
                V.Application.raiseException("'" + item + "' is not valid hex color string");
            }
        });

        if (allColorOK) {
            this._colorPallete = val;
            this.drawDelayed(true);
        }
    }


    private donut: Donut;

    public selectedItem(idx: number, fireEvents: boolean) {
        this.donut.clickItem( idx, fireEvents);
    }

    /*
    public selectedValue(): V.TDountValue {
        if (this.donut == null) return null;
        for (var i = this.donut.segments.length; i--;) {
            if (!this.donut.segments[i].selected) continue;
            return <V.TDountValue>this.values.FindItemByID(this.donut.segments[i].ID);
        }
        return null;
    }
    */

    public getData(): any[] {
        var dataArray = [];
        this.values.forEach((valueOfElement: VXCB.TDountValue) => {
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

        this.TruncateLength = null;



        this.donut = new Donut({
            xkey: "label",
            ykeys: ["value"],
            backgroundColor: '#FFFFFF',
            labelColor: '#000000',
            element: this.jComponent[0],
            data: dataArray,
            colors: this.ColorPallete,
            showZeroVal: this.ShowZeroSlices,
            hideHover: this.ShowHoverLegend,
            startangle: this.StartAngle,
            endangle: this.EndAngle,
            toolTipFormat: this.ToolTipFormat,
            xLabelFormat: this.XLabelFormat,
            yLabelFormat: this.YLabelFormat,
            behaveLikePie: this.BehaveLikePie,
            gridTextWeight: this.TitleTextWeight,
            gridTextSize: this.TextSize,
            gridTextFamily: this.TextFont,
            hideText: this.ShowTextLegend,
            drawlabel: this.DrawLabel,
            drawvalue: this.DrawValue,
            humanfriendly: this.HumanFriendlyValueFormat
        }, this);
        super.create();
    }

    private componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }



    public draw(reCreate: boolean) {
        if (!this.parentInitialized()) return;
        super.draw(reCreate);

    }
}

export class TDBChartDonut extends TChartDonut {
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


    private _dataset: VXD.TDataset;
    /**
      * Specifies the dataset that contains the field it represents.
    **/
    public get Dataset(): VXD.TDataset {
        return this._dataset;
    }
    public set Dataset(val: VXD.TDataset) {
        val = (<any>this).checkDataset(val);
        if (val != this._dataset) {
            if (val != this._dataset) {
                if (this._dataset != null) {
                    (<any>this._dataset).removeEventListener(VXD.TDataset.EVENT_DATA_CHANGED, this);
                    (<any>this._dataset).removeEventListener(VXD.TDataset.EVENT_STATE_CHANGED, this);
                }
                this._dataset = val;
                if (this._dataset) {
                    (<any>this._dataset).registerEventListener(VXD.TDataset.EVENT_DATA_CHANGED, this, () => {
                        this.draw(true);
                    });
                    (<any>this._dataset).registerEventListener(VXD.TDataset.EVENT_STATE_CHANGED, this, () => {
                        this.draw(true);
                    });
                }
            }

        }
    }

    public getData(): any[] {
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

            var col = new VXCB.TDountValue();
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

class Donut extends VXCB.Grid {
    public segments: DonutSegment[];
    private text2;
    private text1;

    constructor(options, owner) {
        super(options, owner);
    }

    init() {
        this.hover = new VXCB.Hover({
            parent: this.el
        });

        this.on('hovermove', this.onHoverMove);
        this.on('hoverout', this.onHoverOut);
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
        this.hover.hide();
        if (tipId && tipId.indexOf("node") != -1) {
            this.hoverItem(idx, series);
            if (this.options.hideHover)
                this.hover.update.apply(this.hover, this.displayHoverForRow(idx, series));
        }
    }

    onHoverOut() {
        this.hover.hide();
        return this.hoverItem(null, null);
    }

    redraw() {
        var self = this;
        var C, cx, cy, last, min, next, seg, w, _i, _j, _k, _len, _len1, _len2, _ref, _ref1, _ref2, _results;
        this.el.empty();
        this.raphael = new Raphael(this.el[0]);
        this.init();

        var ang: number = Math.min(this.options.endangle - this.options.startangle, 360);

        var ww = this.el.width();
        var hh = this.el.height();
        var div = ww > hh && ang == 180 ? 1.1 : 2;
        cx = ww / 2;
        cy = hh / div /*+ 10*/;
        var txtH = this.measureText('---').height;
        var txtY;;

        var emptyTxt = "No Value";
        if (!this.options.hideText)
            emptyTxt = "";

        if (this.options.behaveLikePie) {
            txtY = txtH;
            this.text1 = this.drawEmptyDonutLabel(cx, txtY + 10, emptyTxt);
        } else if (Math.abs(Math.abs(this.options.endangle) - Math.abs(this.options.startangle)) > 91) {
            txtY = cy - txtH * 2;
            txtH = 0;
            this.text1 = this.drawEmptyDonutLabel(cx, txtY + 30, emptyTxt);
        } else {
            txtY = cy - txtH * 2;
            txtH = 0;
            this.text1 = this.drawEmptyDonutLabel(cx, txtY + 10, emptyTxt);
        }
        w = (Math.min(cx, cy - txtH * 3)) / 3 - 1;
        _ref = this.data;
        var totalValue = 0;
        var totalSeg = 0;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            var value = _ref[_i].y[0];
            if (value) {
                totalValue += value;
            }
            if (value || this.options.showZeroVal) {
                totalSeg++;
            }
        }
        if (totalValue == 0) totalValue = 1;

        min = 5 / (2 * w);
        C = (ang / 180) * Math.PI - min * totalSeg - 0.0001;
        last = (this.options.startangle / 180) * Math.PI;

        var idx = 0;
        this.segments = [];
        _ref1 = this.data;
        for (var i = _j = 0, _len1 = _ref1.length; _j < _len1; i = ++_j) {
            value = _ref1[i].y[0];
            var inner = 0;
            var outer = 0;
            if (this.options.behaveLikePie)
            { inner = 0; outer = w * 2.5; } else { inner = w * 2; outer = Math.max(20, w); }
            if (value || this.options.showZeroVal) {
                next = last + min + C * (value / totalValue);
                seg = new DonutSegment(
                    cx, cy, inner, outer, last, next - 0.02,
                    this.options.colors[idx % this.options.colors.length],
                    this.options.backgroundColor, idx, this.raphael, _ref1.length);
                seg.ID = this.data[i].id;
                var s = seg.render();
                s.node.TipId = "node";
                s.node.idx = idx;
                s.node.series = -1;
                s.node.onclick = function (evt, x, y) {
                    var offset = $(self.el).offset();
                    self.click(evt.pageX - offset.left, evt.pageY - offset.top, evt);
                };
                this.segments.push(seg);
                last = next;
                idx += 1;
            }
            else {
                idx += 1;
                this.segments.push(null);
                continue;
            }
        }

        if (_ref1.length) {
            //glow max_value idx
            var idx = 0;
            var max_value = _ref1[0].y[0];
            for (var i = 0; i < _ref1.length; i++) {
                var value = _ref1[i].y[0];
                if (value && max_value < value) {
                    max_value = value;
                    idx = i;
                }
            }
            if (max_value)
                this.hoverItem(idx, 0);
        }
        this.resizeEvent();
        return _results;
    }


    click(x, y, evt) {
        var idx = evt.target.idx;
        this.clickItem(idx, true);
    }

    clickItem(/*series: number,*/ idx: number, fireEvents: boolean = true) {
        if (!this.owner) return;
        var owner = <TChartDonut>this.owner;
        if (!owner.SelectionEnabled) return;

        //var y = this.fire('click', idx, this.data[idx]);
        //var id = this.data[idx].id;
        var item = owner.values.toArray()[idx];//owner.values.FindItemByID(id);
        var segment = this.segments[idx];

        if (item != null) {
            var o: V.TSelectedChartValue = new V.TSelectedChartValue();
            o.Idx = idx;
            o.Series = 0;
            o.ChartValue = item;

            //unselect all
            owner.SelectedItems.forEach((item) => {
                if (item) this.segments[item.Idx].deselect();
            });

            //check clicked
            owner.SelectedItem = o;
            owner.SelectedItems.forEach((item) => {
                if (item) this.segments[item.Idx].select();
            });

            if (owner instanceof TDBChartDonut && (<TDBChartDonut>owner).Dataset != null) {
                (<TDBChartDonut>owner).Dataset.Recno = parseInt(owner.values.toArray()[idx].ID);
            }

            var row = this.data[idx];
            if (this.options.hideText)
                this.setLabels(row, segment.color);

            if (fireEvents)
                if (owner.onClicked != null && idx <= owner.values.length()) (V.tryAndCatch(() => { owner.onClicked(item); }));
        }
        return;
    }

    hoverItem(idx, series) {
        if (!this.segments) return;
        //owner
        var owner = <TChartDonut>this.owner;

        //deselect oldIdx
        this.segments.forEach((item) => {
            if (item) item.deselect();
        });

        //check clicked
        owner.SelectedItems.forEach((item) => {
            if (item) this.segments[item.Idx].select();
        });

        var id;
        var segment;
        var row;
        if (idx == null && series == null) {
            if (owner.SelectedItems.length() != 0) {
                idx = owner.SelectedItems.get(0).Idx;
            }
            else {
                return;
            }
        }

        segment = this.segments[idx];
        row = this.data[idx];

        //glow
        segment.select();

        //set dataset Recno
        if (owner instanceof TDBChartDonut && (<TDBChartDonut>owner).Dataset != null) {
            (<TDBChartDonut>owner).Dataset.Recno = parseInt(owner.values.toArray()[idx].ID);
        }

        if (this.options.hideText)
            this.setLabels(row, segment.color);

        return;
    }

    displayHoverForRow(index, series) {
        var j, row, x, y, _i, _len, _ref
        row = this.data[index];
        if (row == null) {
            return null;
        }

        series = 0;
        row.index = index;
        row.series = series;
        var seg = this.segments[index];

        var content: string = "";
        var lblX: string = "";
        if (!this.options.toolTipFormat) {
            lblX = (this.options.drawlabel ? this.xLabelFormat(row, this.options.humanfriendly) : "");
            content = "<div style='pointer-events: none; color: " + seg.color + "' class='morris-hover-row-label'>" + lblX + "</div>";
        }
        _ref = row.y;
        for (j = 0; j < _ref.length; j++) {
            if (series == j) {
                y = _ref[j];
                if (y != null) {
                    var lblY: string = "";
                    if (this.options.toolTipFormat) {
                        lblY = this.options.toolTipFormat(row);
                    }
                    else {
                        lblY = (this.options.drawvalue ? this.yLabelFormat(row.y[0], this.options.humanfriendly) : "");
                    }
                    content += "<div style='pointer-events: none; color: " + seg.color + "'>" + lblY + "</div>";
                }
            }
        }


        //draw location
        var b = seg.seg.node.getBBox();
        return [content, b.x, b.y];
    }

    setLabels(row, color) {
        var inner, maxHeightBottom, maxHeightTop, maxWidth, text1bbox, text1scale, text2bbox, text2scale;

        inner = Math.min(this.el.width(), this.el.height()) / 2 * 1 / 2.5 - 5;
        maxWidth = inner * 2;
        if (this.options.behaveLikePie)
            maxWidth = Math.min(this.el.width() - 5, this.el.height() - 5);
        maxHeightTop = inner;
        var mytext: string = (this.options.drawlabel ? this.xLabelFormat(row, true) : "");
        var txtW = this.measureText(mytext).width;

        if (txtW > maxWidth) {
            var half_cut = Math.floor(mytext.length / 2);
            var space_cut = mytext.substr(0, half_cut).lastIndexOf(" ");
            if (space_cut > 0)
                mytext = mytext.substr(0, space_cut) + "\n" + mytext.substr(space_cut);
            else
                mytext = mytext.substr(0, half_cut) + "\n" + mytext.substr(half_cut);

            this.text1.attr({
                text: mytext,
                transform: '',
                fill: color,
            });

            text1bbox = this.text1.getBBox();
            text1scale = Math.min(maxWidth / text1bbox.width, maxHeightTop / text1bbox.height) * 1.5;
            if (text1scale > 1) text1scale = 1;
            this.text1.attr({
                text: (this.options.drawvalue ? this.yLabelFormat(row.y[0], this.options.humanfriendly) : "") + "\n" + mytext,
                transform: "S" + text1scale + "," + text1scale + "," + (text1bbox.x + text1bbox.width / 2) + "," + (text1bbox.y + text1bbox.height),
                fill: color,
            });
        }
        else {
            this.text1.attr({
                text: mytext,
                transform: '',
                fill: color,
            });

            text1bbox = this.text1.getBBox();
            text1scale = Math.min(maxWidth / text1bbox.width, maxHeightTop / text1bbox.height) * 1.5;
            if (text1scale > 1) text1scale = 1;

            this.text1.attr({
                text: (this.options.drawvalue ? this.yLabelFormat(row.y[0], this.options.humanfriendly) : "") + "\n" + mytext,
                transform: "S" + text1scale + "," + text1scale + "," + (text1bbox.x + text1bbox.width / 2) + "," + (text1bbox.y + text1bbox.height),
                fill: color,
            });
        }
    }


    drawEmptyDonutLabel(xPos, yPos, txt) {
        var text = this.raphael.text(xPos, yPos, txt);
        text.attr('font-size', this.options.gridTextSize).attr('font-family', this.options.gridTextFamily).attr('font-weight', this.options.gridTextWeight);
        return text;
    }

}


class DonutSegment extends VXCB.EventEmitter {
    private cx;
    private cy;
    private inner;
    private outer;
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
    public seg;
    public color;
    public selected;
    public count;
    public ID;


    constructor(cx, cy, inner, outer, p0, p1, color, backgroundColor, index, raphael, count) {
        super();
        this.count = count;
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
        var chng: number = (this.inner - this.outer) / 5;
        this.path = this.calcSegment(this.inner + 3, this.inner + this.outer - chng);
        this.selectedPath = this.calcSegment(this.inner + 3, this.inner + this.outer);
        this.hilight = this.calcArc(this.inner);
    }

    calcArcPoints = function (r) {
        return [this.cx - r * this.sin_p0, this.cy - r * this.cos_p0, this.cx - r * this.sin_p1, this.cy - r * this.cos_p1];
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
        this.seg = this.drawDonutSegment(this.path, this.color, this.backgroundColor);
        return this.seg;
    }

    drawDonutArc(path, color) {
        var s = this.count > 50 ? 0 : 2;  //Math.min(2, (1 / this.count) * 100);
        return this.raphael.path(path).attr({
            stroke: color,
            'stroke-width': s,
            opacity: 0
        });
    }

    drawDonutSegment(path, fillColor, strokeColor) {
        var s = this.count > 50 ? 0 : 2;// Math.min(2 , (1 / this.count) * 100);
        return this.raphael.path(path).attr({
            fill: fillColor,
            stroke: strokeColor,
            'stroke-width': s,
        });
    }

    select() {
        if (!this.selected) {
            //var t = Raphael.transformPath(this.path, 'T' + 0 + "," + -this.cx * 0.1);
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

    hide() {
        this.arc.hide();
        this.seg.hide();
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
//    http://creativecommons.org/licenses/by-sa/3.0/us/
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



