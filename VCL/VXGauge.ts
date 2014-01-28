import VXC = require("VCL/VXComponent");
import VXU = require("VCL/VXUtils");
import V = require("VCL/VCL");


export class TGauge extends VXC.TComponent {
    private _value: number = 50;
    public get Value(): number {
        return this._value;
    }
    public set Value(val: number) {
        if (val != this._value) {
            this._value = val;
            this.draw(false);
        }
    }

    private _maxvalue: number = 100;
    public get MaxValue(): number {
        return this._maxvalue;
    }
    public set MaxValue(val: number) {
        if (val != this._maxvalue) {
            this._maxvalue = val;
            this.draw(true);
        }
    }

    private _minvalue: number = 0;
    public get MinValue(): number {
        return this._minvalue;
    }
    public set MinValue(val: number) {
        if (val != this._minvalue) {
            this._minvalue = val;
            this.drawDelayed(true);
        }
    }

    private _title: string ;
    public get Title(): string {
        return this._title;
    }
    public set Title(val: string) {
        if (val != this._title) {
            this._title = val;
            this.drawDelayed(true);
        }
    }

    private _label: string ;
    /*
    * the that appers below the value
    */
    public get Label(): string {
        return this._label;
    }
    public set Label(val: string) {
        if (val != this._label) {
            this._label = val;
            this.drawDelayed(true);
        }
    }

    private _symbol: string = "";
    /*
    * Special symbol to show next to value
    */
    public get Symbol(): string {
        return this._symbol;
    }
    public set Symbol(val: string) {
        if (val != this._symbol) {
            this._symbol = val;
            this.draw(true);
        }
    }


    private _gaugecolor: string = "#edebeb";
    public get GaugeColor(): string {
        return this._gaugecolor;
    }
    public set GaugeColor(val: string) {
        var isOk = /^#[0-9A-F]{6}$/i.test(val);
        if (!isOk) V.Application.raiseException("'" + val + "' is not valid hex color string");
        else {
            if (val != this._gaugecolor) {
                this._gaugecolor = val;
                this.draw(true);
            }
        }    
    }


    private _labelcolor: string = "#b3b3b3";
    public get LabelColor(): string {
        return this._labelcolor;
    }
    public set LabelColor(val: string) {
        var isOk = /^#[0-9A-F]{6}$/i.test(val);
        if (!isOk) V.Application.raiseException("'" + val + "' is not valid hex color string");
        else {

            if (val != this._labelcolor) {
                this._labelcolor = val;
                this.drawDelayed(true);
            }
        }
    }


    private _levelcolor1: string = V.getClassStyleHexColor('btn-success', 'background-color');// "#a9d70b";
    public get LevelColor1(): string {
        return this._levelcolor1;
    }
    public set LevelColor1(val: string) {
        var isOk = /^#[0-9A-F]{6}$/i.test(val);
        if (!isOk) V.Application.raiseException("'" + val + "' is not valid hex color string");
        else {

            if (val != this._levelcolor1) {
                this._levelcolor1 = val;
                this.drawDelayed(true);
            }
        }
    }


    private _levelcolor2: string = V.getClassStyleHexColor('btn-warning', 'background-color');//"#f9c802";
    public get LevelColor2(): string {
        return this._levelcolor2;
    }
    public set LevelColor2(val: string) {
        var isOk = /^#[0-9A-F]{6}$/i.test(val);
        if (!isOk) V.Application.raiseException("'" + val + "' is not valid hex color string");
        else {

            if (val != this._levelcolor2) {
                this._levelcolor2 = val;
                this.drawDelayed(true);
            }
        }
    }

    private _levelcolor3: string = V.getClassStyleHexColor('btn-danger', 'background-color');//"#ff0000";
    public get LevelColor3(): string {
        return this._levelcolor3;
    }
    public set LevelColor3(val: string) {
        var isOk = /^#[0-9A-F]{6}$/i.test(val);
        if (!isOk) V.Application.raiseException("'" + val + "' is not valid hex color string");
        else {
            if (val != this._levelcolor3) {
                this._levelcolor3 = val;
                this.draw(true);
            }
        }
    }


    private _humanFriendly: boolean = false;
    /*
    * convert large numbers for min, max, value to human friendly (e.g. 1234567 -> 1.23M)
    */
    public get HumanFriendly(): boolean {
        return this._humanFriendly;
    }
    public set HumanFriendly(val: boolean) {
        if (val != this._humanFriendly) {
            this._humanFriendly = val;
            this.drawDelayed(true);
        }
    }

    private _shadow: boolean = true;
    /*
    * convert large numbers for min, max, value to human friendly (e.g. 1234567 -> 1.23M)
    */
    public get Shadow(): boolean {
        return this._shadow;
    }
    public set Shadow(val: boolean) {
        if (val != this._shadow) {
            this._shadow = val;
            this.drawDelayed(true);
        }
    }


    constructor(aOwner: VXC.TComponent, renderTo?: string, text?: string) {
        super(aOwner, renderTo);
        
    }

    private justGage: any;

    public create() {
        this.jComponent.empty(); //clear all subcomponents
        this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'div', this.FitToWidth, this.FitToHeight);
        var options: any = {
            parentNode: this.jComponent[0],
            value: this.Value,
            min: this.MinValue,
            max: this.MaxValue,
            width: this.Width,
            height: this.Height,
            title: this.Title,
            label: this.Label,
            humanFriendly: this.HumanFriendly,
            gaugeColor: this.GaugeColor,
            labelFontColor: this.LabelColor,
            symbol: this.Symbol,
            levelColors: [
                this.LevelColor1,
                this.LevelColor2,
                this.LevelColor3
            ],
        }

        if (this.Shadow) {
            options.shadowOpacity = 1;
            options.shadowSize = 0;
            options.shadowVerticalOffset = 4;
        }
        this.justGage = JustGage(options); 
        super.create();
    }

    public draw(reCreate: boolean) {
        if (!this.parentInitialized()) return;
        super.draw(reCreate);
        refreshGage(this.Value, null, this.justGage);

    }
}


declare var Raphael;
declare var eve;

function  JustGage (config) {

    var obj = this;

    // configurable parameters
    obj.config =
    {
        // id : string
        // this is container element id
        id: config.id,

        // parentNode : node object
        // this is container element
        parentNode: (config.parentNode) ? config.parentNode : null,

        // width : int
        // gauge width
        width: (config.width) ? config.width : null,

        // height : int
        // gauge height
        height: (config.height) ? config.height : null,

        // title : string
        // gauge title
        title: (config.title) ? config.title : "",

        // titleFontColor : string
        // color of gauge title
        titleFontColor: (config.titleFontColor) ? config.titleFontColor : "#999999",

        // value : int
        // value gauge is showing
        value: (config.value) ? config.value : 0,

        // valueFontColor : string
        // color of label showing current value
        valueFontColor: (config.valueFontColor) ? config.valueFontColor : "#010101",

        // symbol : string
        // special symbol to show next to value
        symbol: (config.symbol) ? config.symbol : "",

        // min : int
        // min value
        min: (config.min !== undefined) ? parseFloat(config.min) : 0,

        // max : int
        // max value
        max: (config.max !== undefined) ? parseFloat(config.max) : 100,

        // humanFriendlyDecimal : int
        // number of decimal places for our human friendly number to contain
        humanFriendlyDecimal: (config.humanFriendlyDecimal) ? config.humanFriendlyDecimal : 0,

        // textRenderer: func
        // function applied before rendering text
        textRenderer: (config.textRenderer) ? config.textRenderer : null,

        // gaugeWidthScale : float
        // width of the gauge element
        gaugeWidthScale: (config.gaugeWidthScale) ? config.gaugeWidthScale : 1.0,

        // gaugeColor : string
        // background color of gauge element
        gaugeColor: (config.gaugeColor) ? config.gaugeColor : "#edebeb",

        // label : string
        // text to show below value
        label: (config.label) ? config.label : "",

        // labelFontColor : string
        // color of label showing label under value
        labelFontColor: (config.labelFontColor) ? config.labelFontColor : "#b3b3b3",

        // shadowOpacity : int
        // 0 ~ 1
        shadowOpacity: (config.shadowOpacity) ? config.shadowOpacity : 0.2,

        // shadowSize: int
        // inner shadow size
        shadowSize: (config.shadowSize) ? config.shadowSize : 5,

        // shadowVerticalOffset : int
        // how much shadow is offset from top
        shadowVerticalOffset: (config.shadowVerticalOffset) ? config.shadowVerticalOffset : 3,

        // levelColors : string[]
        // colors of indicator, from lower to upper, in RGB format
        levelColors: (config.levelColors) ? config.levelColors : [
            "#a9d70b",
            "#f9c802",
            "#ff0000"
        ],

        // startAnimationTime : int
        // length of initial animation
        startAnimationTime: (config.startAnimationTime) ? config.startAnimationTime : 700,

        // startAnimationType : string
        // type of initial animation (linear, >, <,  <>, bounce)
        startAnimationType: (config.startAnimationType) ? config.startAnimationType : ">",

        // refreshAnimationTime : int
        // length of refresh animation
        refreshAnimationTime: (config.refreshAnimationTime) ? config.refreshAnimationTime : 700,

        // refreshAnimationType : string
        // type of refresh animation (linear, >, <,  <>, bounce)
        refreshAnimationType: (config.refreshAnimationType) ? config.refreshAnimationType : ">",

        // donutStartAngle : int
        // angle to start from when in donut mode
        donutStartAngle: (config.donutStartAngle) ? config.donutStartAngle : 90,

        // valueMinFontSize : int
        // absolute minimum font size for the value
        valueMinFontSize: config.valueMinFontSize || 16,

        // titleMinFontSize
        // absolute minimum font size for the title
        titleMinFontSize: config.titleMinFontSize || 10,

        // labelMinFontSize
        // absolute minimum font size for the label
        labelMinFontSize: config.labelMinFontSize || 10,

        // minLabelMinFontSize
        // absolute minimum font size for the minimum label
        minLabelMinFontSize: config.minLabelMinFontSize || 10,

        // maxLabelMinFontSize
        // absolute minimum font size for the maximum label
        maxLabelMinFontSize: config.maxLabelMinFontSize || 10,

        // hideValue : bool
        // hide value text
        hideValue: (config.hideValue) ? config.hideValue : false,

        // hideMinMax : bool
        // hide min and max values
        hideMinMax: (config.hideMinMax) ? config.hideMinMax : false,

        // hideInnerShadow : bool
        // hide inner shadow
        hideInnerShadow: (config.hideInnerShadow) ? config.hideInnerShadow : false,

        // humanFriendly : bool
        // convert large numbers for min, max, value to human friendly (e.g. 1234567 -> 1.23M)
        humanFriendly: (config.humanFriendly) ? config.humanFriendly : false,

        // noGradient : bool
        // whether to use gradual color change for value, or sector-based
        noGradient: (config.noGradient) ? config.noGradient : false,

        // donut : bool
        // show full donut gauge
        donut: (config.donut) ? config.donut : false,

        // relativeGaugeSize : bool
        // whether gauge size should follow changes in container element size
        relativeGaugeSize: (config.relativeGaugeSize) ? config.relativeGaugeSize : false,

        // counter : bool
        // animate level number change
        counter: (config.counter) ? config.counter : true,

        // decimals : int
        // number of digits after floating point
        decimals: (config.decimals) ? config.decimals : 0,

        // customSectors : [] of objects
        // number of digits after floating point
        customSectors: (config.customSectors) ? config.customSectors : []
    };

    // variables
    var
        canvasW: number,
        canvasH: number,
        widgetW: number,
        widgetH : number,
        aspect,
        dx,
        dy,
        titleFontSize,
        titleX,
        titleY,
        valueFontSize,
        valueX,
        valueY,
        labelFontSize,
        labelX,
        labelY,
        minFontSize,
        minX,
        minY,
        maxFontSize,
        maxX,
        maxY;

    // overflow values
    if (obj.config.value > obj.config.max) obj.config.value = obj.config.max;
    if (obj.config.value < obj.config.min) obj.config.value = obj.config.min;
    obj.originalValue = config.value;

    // create canvas
    if (obj.config.id !== null && (document.getElementById(obj.config.id)) !== null) {
        obj.canvas = Raphael(obj.config.id, "100%", "100%");
    } else if (obj.config.parentNode !== null) {
        obj.canvas = Raphael(obj.config.parentNode, "100%", "100%");
    }

    if (obj.config.relativeGaugeSize === true) {
        obj.canvas.setViewBox(0, 0, 200, 150, true);
    }

    // canvas dimensions
    canvasW = obj.config.width;//200;
    canvasH = obj.config.height;//200;

    // widget dimensions
    if (obj.config.donut === true) {

        // DONUT *******************************

        // width more than height
        if (canvasW > canvasH) {
            widgetH = canvasH;
            widgetW = widgetH;
            // width less than height
        } else if (canvasW < canvasH) {
            widgetW = canvasW;
            widgetH = widgetW;
            // if height don't fit, rescale both
            if (widgetH > canvasH) {
                aspect = widgetH / canvasH;
                widgetH = widgetH / aspect;
                widgetW = widgetH / aspect;
            }
            // equal
        } else {
            widgetW = canvasW;
            widgetH = widgetW;
        }

        // delta
        dx = (canvasW - widgetW) / 2;
        dy = (canvasH - widgetH) / 2;

        // title
        titleFontSize = ((widgetH / 8) > 10) ? (widgetH / 10) : 10;
        titleX = dx + widgetW / 2;
        titleY = dy + widgetH / 11;

        // value
        valueFontSize = ((widgetH / 6.4) > 16) ? (widgetH / 5.4) : 18;
        valueX = dx + widgetW / 2;
        if (obj.config.label !== '') {
            valueY = dy + widgetH / 1.85;
        } else {
            valueY = dy + widgetH / 1.7;
        }

        // label
        labelFontSize = ((widgetH / 16) > 10) ? (widgetH / 16) : 10;
        labelX = dx + widgetW / 2;
        labelY = valueY + labelFontSize;

        // min
        minFontSize = ((widgetH / 16) > 10) ? (widgetH / 16) : 10;
        minX = dx + (widgetW / 10) + (widgetW / 6.666666666666667 * obj.config.gaugeWidthScale) / 2;
        minY = labelY;

        // max
        maxFontSize = ((widgetH / 16) > 10) ? (widgetH / 16) : 10;
        maxX = dx + widgetW - (widgetW / 10) - (widgetW / 6.666666666666667 * obj.config.gaugeWidthScale) / 2;
        maxY = labelY;

    } else {
        // HALF *******************************

        // width more than height
        if (canvasW > canvasH) {
            widgetH = canvasH;
            widgetW = widgetH * 1.25;
            //if width doesn't fit, rescale both
            if (widgetW > canvasW) {
                aspect = widgetW / canvasW;
                widgetW = widgetW / aspect;
                widgetH = widgetH / aspect;
            }
            // width less than height
        } else if (canvasW < canvasH) {
            widgetW = canvasW;
            widgetH = widgetW / 1.25;
            // if height don't fit, rescale both
            if (widgetH > canvasH) {
                aspect = widgetH / canvasH;
                widgetH = widgetH / aspect;
                widgetW = widgetH / aspect;
            }
            // equal
        } else {
            widgetW = canvasW;
            widgetH = widgetW * 0.75;
        }

        // delta
        dx = (canvasW - widgetW) / 2;
        dy = (canvasH - widgetH) / 2;

        // title
        titleFontSize = ((widgetH / 8) > obj.config.titleMinFontSize) ? (widgetH / 8) : obj.config.titleMinFontSize;
        titleX = dx + widgetW / 2;
        titleY = titleFontSize; //dy + widgetH / 6.4;

        // value
        valueFontSize = ((widgetH / 6.5) > obj.config.valueMinFontSize) ? (widgetH / 6.5) : obj.config.valueMinFontSize;
        valueX = dx + widgetW / 2;
        valueY = dy + widgetH / 1.275;

        // label
        labelFontSize = ((widgetH / 16) > obj.config.labelMinFontSize) ? (widgetH / 16) : obj.config.labelMinFontSize;
        labelX = dx + widgetW / 2;
        labelY = valueY + valueFontSize / 2 + 5;

        // min
        minFontSize = ((widgetH / 16) > obj.config.minLabelMinFontSize) ? (widgetH / 16) : obj.config.minLabelMinFontSize;
        minX = dx + (widgetW / 10) + (widgetW / 6.666666666666667 * obj.config.gaugeWidthScale) / 2;
        minY = labelY;

        // max
        maxFontSize = ((widgetH / 16) > obj.config.maxLabelMinFontSize) ? (widgetH / 16) : obj.config.maxLabelMinFontSize;
        maxX = dx + widgetW - (widgetW / 10) - (widgetW / 6.666666666666667 * obj.config.gaugeWidthScale) / 2;
        maxY = labelY;
    }

    // parameters
    obj.params = {
        canvasW: canvasW,
        canvasH: canvasH,
        widgetW: widgetW,
        widgetH: widgetH,
        dx: dx,
        dy: dy,
        titleFontSize: titleFontSize,
        titleX: titleX,
        titleY: titleY,
        valueFontSize: valueFontSize,
        valueX: valueX,
        valueY: valueY,
        labelFontSize: labelFontSize,
        labelX: labelX,
        labelY: labelY,
        minFontSize: minFontSize,
        minX: minX,
        minY: minY,
        maxFontSize: maxFontSize,
        maxX: maxX,
        maxY: maxY
    };

    // var clear
    canvasW, canvasH, widgetW, widgetH, aspect, dx, dy, titleFontSize, titleX, titleY, valueFontSize, valueX, valueY, labelFontSize, labelX, labelY, minFontSize, minX, minY, maxFontSize, maxX, maxY = null

    // pki - custom attribute for generating gauge paths
    obj.canvas.customAttributes.pki = function (value, min, max, w, h, dx, dy, gws, donut) {

        var alpha, Ro, Ri, Cx, Cy, Xo, Yo, Xi, Yi, path;

        if (donut) {
            alpha = (1 - 2 * (value - min) / (max - min)) * Math.PI;
            Ro = w / 2 - w / 7;
            Ri = Ro - w / 6.666666666666667 * gws;

            Cx = w / 2 + dx;
            Cy = h / 1.95 + dy;

            Xo = w / 2 + dx + Ro * Math.cos(alpha);
            Yo = h - (h - Cy) + 0 - Ro * Math.sin(alpha);
            Xi = w / 2 + dx + Ri * Math.cos(alpha);
            Yi = h - (h - Cy) + 0 - Ri * Math.sin(alpha);

            path += "M" + (Cx - Ri) + "," + Cy + " ";
            path += "L" + (Cx - Ro) + "," + Cy + " ";
            if (value > ((max - min) / 2)) {
                path += "A" + Ro + "," + Ro + " 0 0 1 " + (Cx + Ro) + "," + Cy + " ";
            }
            path += "A" + Ro + "," + Ro + " 0 0 1 " + Xo + "," + Yo + " ";
            path += "L" + Xi + "," + Yi + " ";
            if (value > ((max - min) / 2)) {
                path += "A" + Ri + "," + Ri + " 0 0 0 " + (Cx + Ri) + "," + Cy + " ";
            }
            path += "A" + Ri + "," + Ri + " 0 0 0 " + (Cx - Ri) + "," + Cy + " ";
            path += "Z ";

            return { path: path };

        } else {
            alpha = (1 - (value - min) / (max - min)) * Math.PI;
            Ro = w / 2 - w / 10;
            Ri = Ro - w / 6.666666666666667 * gws;

            Cx = w / 2 + dx;
            Cy = h / 1.25 + dy;

            Xo = w / 2 + dx + Ro * Math.cos(alpha);
            Yo = h - (h - Cy) + 0 - Ro * Math.sin(alpha);
            Xi = w / 2 + dx + Ri * Math.cos(alpha);
            Yi = h - (h - Cy) + 0 - Ri * Math.sin(alpha);

            path += "M" + (Cx - Ri) + "," + Cy + " ";
            path += "L" + (Cx - Ro) + "," + Cy + " ";
            path += "A" + Ro + "," + Ro + " 0 0 1 " + Xo + "," + Yo + " ";
            path += "L" + Xi + "," + Yi + " ";
            path += "A" + Ri + "," + Ri + " 0 0 0 " + (Cx - Ri) + "," + Cy + " ";
            path += "Z ";

            return { path: path };
        }

        // var clear
        alpha, Ro, Ri, Cx, Cy, Xo, Yo, Xi, Yi, path = null;
    };

    // gauge
    obj.gauge = obj.canvas.path().attr({
        "stroke": "none",
        "fill": obj.config.gaugeColor,
        pki: [
            obj.config.max,
            obj.config.min,
            obj.config.max,
            obj.params.widgetW,
            obj.params.widgetH,
            obj.params.dx,
            obj.params.dy,
            obj.config.gaugeWidthScale,
            obj.config.donut
        ]
    });

    // level
    obj.level = obj.canvas.path().attr({
        "stroke": "none",
        "fill": getColor(obj.config.value, (obj.config.value - obj.config.min) / (obj.config.max - obj.config.min), obj.config.levelColors, obj.config.noGradient, obj.config.customSectors),
        pki: [
            obj.config.min,
            obj.config.min,
            obj.config.max,
            obj.params.widgetW,
            obj.params.widgetH,
            obj.params.dx,
            obj.params.dy,
            obj.config.gaugeWidthScale,
            obj.config.donut
        ]
    });
    if (obj.config.donut) {
        obj.level.transform("r" + obj.config.donutStartAngle + ", " + (obj.params.widgetW / 2 + obj.params.dx) + ", " + (obj.params.widgetH / 1.95 + obj.params.dy));
    }

    // title
    obj.txtTitle = obj.canvas.text(obj.params.titleX, obj.params.titleY, obj.config.title);
    obj.txtTitle.attr({
        "font-size": obj.params.titleFontSize,
        "font-weight": "bold",
        "font-family": "Arial",
        "fill": obj.config.titleFontColor,
        "fill-opacity": "1"
    });
    setDy(obj.txtTitle, obj.params.titleFontSize, obj.params.titleY);

    // value
    obj.txtValue = obj.canvas.text(obj.params.valueX, obj.params.valueY, 0);
    obj.txtValue.attr({
        "font-size": obj.params.valueFontSize,
        "font-weight": "bold",
        "font-family": "Arial",
        "fill": obj.config.valueFontColor,
        "fill-opacity": "0"
    });
    setDy(obj.txtValue, obj.params.valueFontSize, obj.params.valueY);

    // label
    obj.txtLabel = obj.canvas.text(obj.params.labelX, obj.params.labelY, obj.config.label);
    obj.txtLabel.attr({
        "font-size": obj.params.labelFontSize,
        "font-weight": "normal",
        "font-family": "Arial",
        "fill": obj.config.labelFontColor,
        "fill-opacity": "0"
    });
    setDy(obj.txtLabel, obj.params.labelFontSize, obj.params.labelY);

    // min
    obj.txtMinimum = obj.config.min;
    if (obj.config.humanFriendly) obj.txtMinimum = V.Application.formatHumanFriendly(obj.config.min, obj.config.humanFriendlyDecimal);
    obj.txtMin = obj.canvas.text(obj.params.minX, obj.params.minY, obj.txtMinimum);
    obj.txtMin.attr({
        "font-size": obj.params.minFontSize,
        "font-weight": "normal",
        "font-family": "Arial",
        "fill": obj.config.labelFontColor,
        "fill-opacity": (obj.config.hideMinMax || obj.config.donut) ? "0" : "1"
    });
    setDy(obj.txtMin, obj.params.minFontSize, obj.params.minY);

    // max
    obj.txtMaximum = obj.config.max;
    if (obj.config.humanFriendly) obj.txtMaximum = V.Application.formatHumanFriendly(obj.config.max, obj.config.humanFriendlyDecimal);
    obj.txtMax = obj.canvas.text(obj.params.maxX, obj.params.maxY, obj.txtMaximum);
    obj.txtMax.attr({
        "font-size": obj.params.maxFontSize,
        "font-weight": "normal",
        "font-family": "Arial",
        "fill": obj.config.labelFontColor,
        "fill-opacity": (obj.config.hideMinMax || obj.config.donut) ? "0" : "1"
    });
    setDy(obj.txtMax, obj.params.maxFontSize, obj.params.maxY);

    var defs = obj.canvas.canvas.childNodes[1];
    var svg = "http://www.w3.org/2000/svg";

    var obj = this;
    var gaussFilter, feOffset, feGaussianBlur, feComposite1, feFlood, feComposite2, feComposite3;

    // FILTER
    gaussFilter = document.createElementNS(svg, "filter");
    gaussFilter.setAttribute("id", "inner-shadow");
    defs.appendChild(gaussFilter);

    // offset
    feOffset = document.createElementNS(svg, "feOffset");
    feOffset.setAttribute("dx", 0);
    feOffset.setAttribute("dy", obj.config.shadowVerticalOffset);
    gaussFilter.appendChild(feOffset);

    // blur
    feGaussianBlur = document.createElementNS(svg, "feGaussianBlur");
    feGaussianBlur.setAttribute("result", "offset-blur");
    feGaussianBlur.setAttribute("stdDeviation", obj.config.shadowSize);
    gaussFilter.appendChild(feGaussianBlur);

    // composite 1
    feComposite1 = document.createElementNS(svg, "feComposite");
    feComposite1.setAttribute("operator", "out");
    feComposite1.setAttribute("in", "SourceGraphic");
    feComposite1.setAttribute("in2", "offset-blur");
    feComposite1.setAttribute("result", "inverse");
    gaussFilter.appendChild(feComposite1);

    // flood
    feFlood = document.createElementNS(svg, "feFlood");
    feFlood.setAttribute("flood-color", "black");
    feFlood.setAttribute("flood-opacity", obj.config.shadowOpacity);
    feFlood.setAttribute("result", "color");
    gaussFilter.appendChild(feFlood);

    // composite 2
    feComposite2 = document.createElementNS(svg, "feComposite");
    feComposite2.setAttribute("operator", "in");
    feComposite2.setAttribute("in", "color");
    feComposite2.setAttribute("in2", "inverse");
    feComposite2.setAttribute("result", "shadow");
    gaussFilter.appendChild(feComposite2);

    // composite 3
    feComposite3 = document.createElementNS(svg, "feComposite");
    feComposite3.setAttribute("operator", "over");
    feComposite3.setAttribute("in", "shadow");
    feComposite3.setAttribute("in2", "SourceGraphic");
    gaussFilter.appendChild(feComposite3);

    // set shadow
    if (!obj.config.hideInnerShadow) {
        obj.canvas.canvas.childNodes[2].setAttribute("filter", "url(#inner-shadow)");
        obj.canvas.canvas.childNodes[3].setAttribute("filter", "url(#inner-shadow)");
    }

    // var clear
    gaussFilter, feOffset, feGaussianBlur, feComposite1, feFlood, feComposite2, feComposite3 = null;


    // var clear
    defs, svg = null;

    // set value to display
    if (obj.config.textRenderer) {
        obj.originalValue = obj.config.textRenderer(obj.originalValue);
    } else if (obj.config.humanFriendly) {
        obj.originalValue = V.Application.formatHumanFriendly(obj.originalValue, obj.config.humanFriendlyDecimal) + obj.config.symbol;
    } else {
        obj.originalValue = (obj.originalValue * 1).toFixed(obj.config.decimals) + obj.config.symbol;
    }

    if (obj.config.counter === true) {
        //on each animation frame
        eve.on("raphael.anim.frame." + (obj.level.id), function () {
            var currentValue = obj.level.attr("pki");
            if (obj.config.textRenderer) {
                obj.txtValue.attr("text", obj.config.textRenderer(Math.floor(currentValue[0])));
            } else if (obj.config.humanFriendly) {
                obj.txtValue.attr("text", V.Application.formatHumanFriendly(Math.floor(currentValue[0]), obj.config.humanFriendlyDecimal) + obj.config.symbol);
            } else {
                obj.txtValue.attr("text", (currentValue[0] * 1).toFixed(obj.config.decimals) + obj.config.symbol);
            }
            setDy(obj.txtValue, obj.params.valueFontSize, obj.params.valueY);
            currentValue = null;
        });
        //on animation end
        eve.on("raphael.anim.finish." + (obj.level.id), function () {
            obj.txtValue.attr({ "text": obj.originalValue });
            setDy(obj.txtValue, obj.params.valueFontSize, obj.params.valueY);
        });
    } else {
        //on animation start    
        eve.on("raphael.anim.start." + (obj.level.id), function () {
            obj.txtValue.attr({ "text": obj.originalValue });
            setDy(obj.txtValue, obj.params.valueFontSize, obj.params.valueY);
        });
    }

    // animate gauge level, value & label
    obj.level.animate({
        pki: [
            obj.config.value,
            obj.config.min,
            obj.config.max,
            obj.params.widgetW,
            obj.params.widgetH,
            obj.params.dx,
            obj.params.dy,
            obj.config.gaugeWidthScale,
            obj.config.donut
        ]
    }, obj.config.startAnimationTime, obj.config.startAnimationType);
    obj.txtValue.animate({ "fill-opacity": (obj.config.hideValue) ? "0" : "1" }, obj.config.startAnimationTime, obj.config.startAnimationType);
    obj.txtLabel.animate({ "fill-opacity": "1" }, obj.config.startAnimationTime, obj.config.startAnimationType);
    return this;
};

/** Refresh gauge level */
function refreshGage (val, max,obj) {
    var displayVal, color, max = max || null;

    // set new max
    if (max !== null) {
        obj.config.max = max;

        obj.txtMaximum = obj.config.max;
        if (obj.config.humanFriendly) obj.txtMaximum = V.Application.formatHumanFriendly(obj.config.max, obj.config.humanFriendlyDecimal);
        obj.txtMax.attr({ "text": obj.txtMaximum });
        setDy(obj.txtMax, obj.params.maxFontSize, obj.params.maxY);
    }

    // overflow values
    displayVal = val;
    if ((val * 1) > (obj.config.max * 1)) { val = (obj.config.max * 1); }
    if ((val * 1) < (obj.config.min * 1)) { val = (obj.config.min * 1); }

    color = getColor(val, (val - obj.config.min) / (obj.config.max - obj.config.min), obj.config.levelColors, obj.config.noGradient, obj.config.customSectors);

    if (obj.config.textRenderer) {
        displayVal = obj.config.textRenderer(displayVal);
    } else if (obj.config.humanFriendly) {
        displayVal = V.Application.formatHumanFriendly(displayVal, obj.config.humanFriendlyDecimal) + obj.config.symbol;
    } else {
        displayVal = (displayVal * 1).toFixed(obj.config.decimals) + obj.config.symbol;
    }
    obj.originalValue = displayVal;
    obj.config.value = val * 1;

    if (!obj.config.counter) {
        obj.txtValue.attr({ "text": displayVal });
        setDy(obj.txtValue, obj.params.valueFontSize, obj.params.valueY);
    }

    obj.level.animate({
        pki: [
            obj.config.value,
            obj.config.min,
            obj.config.max,
            obj.params.widgetW,
            obj.params.widgetH,
            obj.params.dx,
            obj.params.dy,
            obj.config.gaugeWidthScale,
            obj.config.donut
        ],
        "fill": color
    }, obj.config.refreshAnimationTime, obj.config.refreshAnimationType);

    // var clear
    obj, displayVal, color, max = null;
};


/** Get color for value */
function getColor(val, pct, col, noGradient, custSec) {

    var no, inc, colors, percentage, rval, gval, bval, lower, upper, range, rangePct, pctLower, pctUpper, color;
    var noGradient = noGradient || custSec.length > 0;

    if (custSec.length > 0) {
        for (var i = 0; i < custSec.length; i++) {
            if (val > custSec[i].lo && val <= custSec[i].hi) {
                return custSec[i].color;
            }
        }
    }

    no = col.length;
    if (no === 1) return col[0];
    inc = (noGradient) ? (1 / no) : (1 / (no - 1));
    colors = [];
    for (var i = 0; i < col.length; i++) {
        percentage = (noGradient) ? (inc * (i + 1)) : (inc * i);
        rval = parseInt((cutHex(col[i])).substring(0, 2), 16);
        gval = parseInt((cutHex(col[i])).substring(2, 4), 16);
        bval = parseInt((cutHex(col[i])).substring(4, 6), 16);
        colors[i] = { pct: percentage, color: { r: rval, g: gval, b: bval } };
    }

    if (pct === 0) {
        return 'rgb(' + [colors[0].color.r, colors[0].color.g, colors[0].color.b].join(',') + ')';
    }

    for (var j = 0; j < colors.length; j++) {
        if (pct <= colors[j].pct) {
            if (noGradient) {
                return 'rgb(' + [colors[j].color.r, colors[j].color.g, colors[j].color.b].join(',') + ')';
            } else {
                lower = colors[j - 1];
                upper = colors[j];
                range = upper.pct - lower.pct;
                rangePct = (pct - lower.pct) / range;
                pctLower = 1 - rangePct;
                pctUpper = rangePct;
                color = {
                    r: Math.floor(lower.color.r * pctLower + upper.color.r * pctUpper),
                    g: Math.floor(lower.color.g * pctLower + upper.color.g * pctUpper),
                    b: Math.floor(lower.color.b * pctLower + upper.color.b * pctUpper)
                };
                return 'rgb(' + [color.r, color.g, color.b].join(',') + ')';
            }
        }
    }

}

/** Fix Raphael display:none tspan dy attribute bug */
function setDy(elem, fontSize, txtYpos) {
    elem.node.firstChild.attributes.dy.value = 0;
}

/**  Cut hex  */
function cutHex(str) {
    return (str.charAt(0) == "#") ? str.substring(1, 7) : str;
}

