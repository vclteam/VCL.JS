/*!
 * Slider for Bootstrap
 *
 * Copyright 2012 Stefan Petre
 * Licensed under the Apache License v2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 */
import VXC = require("VCL/VXComponent");
import VXU = require("VCL/VXUtils");
import V = require("VCL/VCL");




export class TSliderBase extends VXC.TComponent {


    public constructor(aOwner: VXC.TComponent, renderTo?: string, text?: string) {
        super(aOwner, renderTo);
        //this.Width = 200;
        //this.Height = 200;
    }



    private _min: number = 0;
    public get MinValue(): number {
        return this._min;
    }
    public set MinValue(val: number) {
        if (val != this._min) {
            this._min = val;
            this.draw(true);
        }
    }
    private _max: number = 10;
    public get MaxValue(): number {
        return this._max;
    }
    public set MaxValue(val: number) {
        if (val != this._max) {
            this._max = val;
            this.draw(true);
        }
    }
    private _step: number = 1;
    public get StepValue(): number {
        return this._step;
    }
    public set StepValue(val: number) {
        if (val != this._step) {
            this._step = val;
            this.draw(true);
        }
    }

    private _showTooltip: boolean = true;
    public get ShowToolTip(): boolean {
        return this._showTooltip;
    }
    public set ShowToolTip(val: boolean) {
        if (val != this._showTooltip) {
            this._showTooltip = val;
            this.draw(true);
        }
    }

    private _showLabels: boolean = true;
    public get ShowLabels(): boolean {
        return this._showLabels;
    }
    public set ShowLabels(val: boolean) {
        if (val != this._showLabels) {
            this._showLabels = val;
            this.draw(true);
        }
    }

    private _orientation: V.SliderOrientation = V.SliderOrientation.horizontal;
    public get SliderOrientation(): V.SliderOrientation {
        return this._orientation;
    }
    public set SliderOrientation(val: V.SliderOrientation) {
        if (val != this._orientation) {
            this._orientation = val;
            this.draw(true);
        }
    }

    private _handle: V.SliderHandle = V.SliderHandle.round;
    public get SliderHandle(): V.SliderHandle {
        return this._handle;
    }
    public set SliderHandle(val: V.SliderHandle) {
        if (val != this._handle) {
            this._handle = val;
            this.draw(true);
        }
    }



    private _selection: V.SliderSelection = V.SliderSelection.before;
    /*public get SliderSelection(): V.SliderSelection {
        return this._selection;
    }
    public set SliderSelection(val: V.SliderSelection) {
        if (val != this._selection) {
            this._selection = val;
            this.draw(true);
        }
    }*/

    private _value: number[] = [5];




    /*

      private  arraycompare(array1: number[], array2: number[]):boolean {
          if (!array1 || !array2)
              return false;
          if (array1.length != array2.length)
              return false;

          for (var i = 0, l = array1.length; i < l; i++) {
              if (array1[i] != array2[i]) {
                  return false;
              }
          }
          return true;
      }
          */
    public onFormatValue: (value: string) => string = (value: string) => {
        return value;
    };
    public onFormatLabel: (value: string) => string = (value: string) => {
        return value;
    };
    //private _formater: (value: string) => string = function (value: string) { return value; };
    /*public get onFormatValue(): (value: string) => string {
        return value;
    }
    public set onFormatValue(val: (value: string) => string) {
        if (val != this._formater) {
            this._formater = val;
            this.draw(true);
        }
        //   this.jComponent.remove(); 
    }*/

    private _slider: any;

    public create() {
        //this.jComponent.empty(); //clear all subcomponents
        super.create();
        var me: TSliderBase = this;
        var options: any = {
            min: me._min,
            max: me._max,
            step: me._step,
            orientation: V.SliderOrientation[me._orientation],
            value: me._value,
            selection: V.SliderSelection[me._selection],
            tooltip: me._showTooltip ? "show" : "hide",
            handle: V.SliderHandle[me._handle],
            formater: me.onFormatValue,
            enabled: me.Enabled,
            formatlabel: me.onFormatLabel,
            showlabels: me.ShowLabels
        }

       this._slider = new Slider(this.jComponent, options);




    }

    public draw(reCreate: boolean) {
        if (!this.parentInitialized()) return;
        super.draw(reCreate);
        //Slider.prototype.layout.call(this._slider);

    }

}


export class TSlider extends TSliderBase {
    public get Value(): number {
        return (<any>this)._value[0];
    } 


    public set Value(val: number) {
        if (val != (<any>this)._value[0]) {
            (<any>this)._value[0] = val;
            this.draw(true);
        }
    }

    public onSlideStop: (sender: TSlider, position: number) => void;
    public onSlideStart: (sender: TSlider, position: number) => void;
    public onSlide: (sender: TSlider, position: number) => void;
    public onChanged: (sender: TSlider) => void;

    public create() {
        this.jComponent.empty();
        this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'div', this.FitToWidth, this.FitToHeight);

        var me: TSlider = this;

        (<any>this.jComponent).on("slideStop", (sender) => {
            if (this.onSlideStop != null) {
                V.tryAndCatch(() => { me.onSlideStop(me, sender.value); })
            };

            return true;
        });

        (<any>this.jComponent).on("slideStart", (sender) => {
            if (this.onSlideStart != null) {
                V.tryAndCatch(() => { this.onSlideStart(me, sender.value); })
            };
            return true;
        });

        (<any>this.jComponent).on("slide", (sender) => {
            (<any>this)._value[0] = sender.value;
            if (this.onSlide != null) {
                V.tryAndCatch(() => { this.onSlide(me, sender.value); })
            };
            return true;
        });

        (<any>this.jComponent).on("change", (sender) => {
            (<any>this)._value[0] = sender.value;
            if (this.onChanged != null) {
                V.tryAndCatch(() => { this.onChanged(me); })
            };
            return true;
        });



        super.create();
    }

}

export class TRangeSlider extends TSliderBase {

    public get FirstValue(): number {
        return (<any>this)._value[0];
    }


    public set FirstValue(val: number) {
        if (val != (<any>this)._value[0]) {
            (<any>this)._value[0] = val;
            this.draw(true);
        }
    }


    public get SecondValue(): number {
        return (<any>this)._value[1];
    }


    public set SecondValue(val: number) {
        if (val != (<any>this)._value[1]) {
            (<any>this)._value[1] = val;
            this.draw(true);
        }
    }

    public onSlideStop: (sender: TRangeSlider, position1: number, position2: number) => void;
    public onSlideStart: (sender: TRangeSlider, position1: number, position2: number) => void;
    public onSlide: (sender: TRangeSlider, position1: number, position2: number) => void;
    public onChanged: (sender: TRangeSlider) => void;


    public create() {
        this.jComponent.empty();
        this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'div', this.FitToWidth, this.FitToHeight);

        var me: TRangeSlider = this;

        (<any>this.jComponent).on("slideStop", (sender) => {
            if (this.onSlideStop != null) {
                V.tryAndCatch(() => { me.onSlideStop(me, sender.value[0], sender.value[1]); })
            };
            return true;
        });

        (<any>this.jComponent).on("slideStart", (sender) => {
            if (this.onSlideStart != null) {
                V.tryAndCatch(() => { this.onSlideStart(me, sender.value[0], sender.value[1]); })
        };
            return true;
        });

        (<any>this.jComponent).on("slide", (sender) => {

            if (sender.id == 0) {
                (<any>this)._value[0] = sender.value[0];
            }
            else {
                (<any>this)._value[1] = sender.value[1];
            }
            if (this.onSlide != null) {
                V.tryAndCatch(() => { this.onSlide(me, sender.value[0], sender.value[1]); })
            };
            return true;
        });

        (<any>this.jComponent).on("change", (sender) => {
            if (sender.id == 0) {
                (<any>this)._value[0] = sender.value[0];
            }
            else {
                (<any>this)._value[1] = sender.value[1];
            }
            if (this.onChanged != null) {
                V.tryAndCatch(() => { this.onChanged(me); })
            };
            return true;
        });




        super.create();
    }

}

function textWidth(self: JQuery) {
    var calculator = $('<span style="display: inline-block;" />'),
        width;

    self.wrap(calculator);
    width = self.parent().width(); // parent = the calculator wrapper
    self.unwrap();
    return width;
};

function Slider(element: JQuery, options) {
    /* meanwhile
        if (typeof Modernizr !== 'undefined' && Modernizr.touch) {
     this.touchCapable = true;
    }*/
    this.touchCapable = false;

    this.element = $(element);

    this.enabled = options.enabled;

    this.showlabels = options.showlabels;

    this.orientation = this.element.data('slider-orientation') || options.orientation;

    this.picker = $(
        ' <div> ' +
        (this.showlabels?
        '<div class="slider-label"  ' + ((this.orientation != 'vertical') ? ' style = "float: left; margin-right: 8px;" ' : ' style = "margin-bottom: 8px;" ') + ' > '
        + options.formatlabel(options.min) + ' </div >':'') +
        '<div class="slider" > ' +
        '<div class="slider-track">' +
        '<div class="slider-selection"></div>' +
        '<div class="slider-handle"></div>' +
        '<div class="slider-handle"></div>' +
        '</div>' +
        '<div class="tooltip">' +
        '<div class="tooltip-arrow"></div>' +
        '<div class="tooltip-inner"></div>' +
        '</div>' +
        '</div>' +
        (this.showlabels?
        '<div class="slider-label" '
        + ((this.orientation != 'vertical') ? 'style = "float: right; margin-left: 8px;" ' : ' style = "margin-top: 8px;" ') + '>'
        + options.formatlabel(options.max) + '</div>' : '') +
        + '</div>');
    element.append(this.picker);

    var tooltip = this.element.data('slider-tooltip') || options.tooltip;
    this.tooltip = this.picker.find('.tooltip');
    this.tooltipInner = this.tooltip.find('div.tooltip-inner');
    this.slider = this.picker.find('.slider');
    this.sliderlabel = this.picker.find('.slider-label');

    var firstlabel: JQuery = $(' ');
    var secondlabel: JQuery = $(' ');

    if (this.showlabels) { 
        firstlabel = this.picker.find('.slider-label:first');
        secondlabel = this.picker.find('.slider-label:last');
    }

    firstlabel.css('width', textWidth(firstlabel));
    secondlabel.css('width', textWidth(secondlabel));


    var sliderHeight: number = Math.max(firstlabel.height(), secondlabel.height());
    var sliderHeightV: number = this.element.outerHeight() - firstlabel.outerHeight(true) - secondlabel.outerHeight(true);
    var sliderWidth: number = this.element.outerWidth() - firstlabel.outerWidth(true) - secondlabel.outerWidth(true);
    var sliderWidthV: number = Math.max(firstlabel.width(), secondlabel.width());

    switch (this.orientation) {
        case 'vertical':
            this.slider.addClass('slider-vertical').css('height', sliderHeightV).css('width', sliderWidthV);
            this.sliderlabel.addClass('slider-vertical')
            this.stylePos = 'top';
            this.mousePos = 'pageY';
            this.size = sliderHeightV;
            this.sizePos = 'offsetHeight';
            this.tooltip.addClass('right')[0].style.left = '100%';
            break;
        default:
            this.slider.addClass('slider-horizontal').css('width', sliderWidth).css('height', sliderHeight);
            this.sliderlabel.addClass('slider-horizontal');
            this.orientation = 'horizontal';
            this.stylePos = 'left';
            this.mousePos = 'pageX';
            this.size = sliderWidth;
            this.sizePos = 'offsetWidth';
            this.tooltip.addClass('top')[0].style.top = -this.tooltip.outerHeight() - 14 + 'px';
            break;
    }

    this.min = this.element.data('slider-min') || options.min;
    this.max = this.element.data('slider-max') || options.max;
    this.step = this.element.data('slider-step') || options.step;
    this.value = this.element.data('slider-value') || options.value;

    if (this.value[1]) {
        this.range = true;
    }

    this.selection = this.element.data('slider-selection') || options.selection;
    this.selectionEl = this.picker.find('.slider-selection');
    if (this.selection === 'none') {
        this.selectionEl.addClass('hide');
    }
    this.selectionElStyle = this.selectionEl[0].style;


    this.handle1 = this.picker.find('.slider-handle:first');
    this.handle1Stype = this.handle1[0].style;
    this.handle2 = this.picker.find('.slider-handle:last');
    this.handle2Stype = this.handle2[0].style;

    var handle = this.element.data('slider-handle') || options.handle;
    switch (handle) {
        case 'round':
            this.handle1.addClass('round');
            this.handle2.addClass('round');
                           break
        case 'triangle':
            this.handle1.addClass('triangle');
            this.handle2.addClass('triangle');
                           break
    }

    if (this.range) {
        this.value[0] = Math.max(this.min, Math.min(this.max, this.value[0]));
        this.value[1] = Math.max(this.min, Math.min(this.max, this.value[1]));
    } else {
        this.value = [Math.max(this.min, Math.min(this.max, this.value))];
        this.handle2.addClass('hide');
        if (this.selection == 'after') {
            this.value[1] = this.max;
        } else {
            this.value[1] = this.min;
        }
    }
    this.diff = this.max - this.min;
    this.percentage = [
        (this.value[0] - this.min) * 100 / this.diff,
        (this.value[1] - this.min) * 100 / this.diff,
        this.step * 100 / this.diff
    ];

    this.offset = this.slider.offset();
    this.size = this.slider[0][this.sizePos];

    this.formater = options.formater;

    Slider.prototype.layout.call(this);

    if (this.touchCapable) {
        // Touch: Bind touch events:
        this.picker.on({
            touchstart: $.proxy(Slider.prototype.mousedown, this)
        });
    } else {
        this.picker.on({
            mousedown: $.proxy(Slider.prototype.mousedown, this)
        });
    }

    if (tooltip === 'show') {
        this.picker.on({
            mouseenter: $.proxy(Slider.prototype.showTooltip, this),
            mouseleave: $.proxy(Slider.prototype.hideTooltip, this)
        });
    } else {
        this.tooltip.addClass('hide');
    }
};

Slider.prototype = {
    constructor: Slider,

    over: false,
    inDrag: false,
    enabled: true,
    showlabels:true,

    showTooltip: function () {
        this.tooltip.addClass('in');
        //var left = Math.round(this.percent*this.width);
        //this.tooltip.css('left', left - this.tooltip.outerWidth()/2);
        this.over = true;
    },

    hideTooltip: function () {
        if (this.inDrag === false) {
            this.tooltip.removeClass('in');
        }
        this.over = false;
    },

    layout: function () {
        this.handle1Stype[this.stylePos] = this.percentage[0] + '%';
        this.handle2Stype[this.stylePos] = this.percentage[1] + '%';
        if (this.orientation == 'vertical') {
            this.selectionElStyle.top = Math.min(this.percentage[0], this.percentage[1]) + '%';
            this.selectionElStyle.height = Math.abs(this.percentage[0] - this.percentage[1]) + '%';
        } else {
            this.selectionElStyle.left = Math.min(this.percentage[0], this.percentage[1]) + '%';
            this.selectionElStyle.width = Math.abs(this.percentage[0] - this.percentage[1]) + '%';
        }
        if (this.range) {
            this.tooltipInner.text(
                this.formater(this.value[0]) +
                ' : ' +
                this.formater(this.value[1])
                );
            this.tooltip[0].style[this.stylePos] = this.size * (this.percentage[0] + (this.percentage[1] - this.percentage[0]) / 2) / 100 - (this.orientation === 'vertical' ? this.tooltip.outerHeight() / 2 : this.tooltip.outerWidth() / 2) + 'px';
        } else {
            this.tooltipInner.text(
                this.formater(this.value[0])
                );
            this.tooltip[0].style[this.stylePos] = this.size * this.percentage[0] / 100 - (this.orientation === 'vertical' ? this.tooltip.outerHeight() / 2 : this.tooltip.outerWidth() / 2) + 'px';
        }
    },

    mousedown: function (ev) {
        if (!this.enabled) return false;
        // Touch: Get the original event:
        if (this.touchCapable && ev.type === 'touchstart') {
            ev = ev.originalEvent;
        }

        this.offset = this.slider.offset();
        this.size = this.slider[0][this.sizePos];

        var percentage = Slider.prototype.getPercentage.call(this, ev);

        if (this.range) {
            var diff1 = Math.abs(this.percentage[0] - percentage);
            var diff2 = Math.abs(this.percentage[1] - percentage);
            this.dragged = (diff1 < diff2) ? 0 : 1;
        } else {
            this.dragged = 0;
        }
        var previous: number = this.value[0];

        this.percentage[this.dragged] = percentage;


        if (this.touchCapable) {
            // Touch: Bind touch events:
            $(document).on({
                touchmove: $.proxy(Slider.prototype.mousemove, this),
                touchend: $.proxy(Slider.prototype.mouseup, this)
            });
        } else {
            $(document).on({
                mousemove: $.proxy(Slider.prototype.mousemove, this),
                mouseup: $.proxy(Slider.prototype.mouseup, this)
            });
        }

        this.inDrag = true;
        var val = Slider.prototype.calculateValue.call(this);

        if (this.range) {
            if (this.value[this.dragged] != previous) {
                this.element
                    .trigger({
                        type: 'change',
                        value: val,
                        id: this.dragged
                    })
                }
            this.element.trigger({
                type: 'slideStart',
                value: val,
                id: this.dragged
            }).trigger({
                    type: 'slide',
                    value: val,
                    id: this.dragged
                }).data('value', val)
                .prop('value', val);
        }
        else {
            if (this.value[0] != previous) {
                this.element
                    .trigger({
                        type: 'change',
                        value: val
                    })
                }
            this.element.trigger({
                type: 'slideStart',
                value: val
            }).trigger({
                    type: 'slide',
                    value: val
                }).data('value', val)
                .prop('value', val);

        }
        Slider.prototype.layout.call(this);
        return false;
    },

    mousemove: function (ev) {
        if (!this.enabled) return false;
        // Touch: Get the original event:
        if (this.touchCapable && ev.type === 'touchmove') {
            ev = ev.originalEvent;
        }

        var percentage = Slider.prototype.getPercentage.call(this, ev);

        var previous: number = this.value[0];
        if (this.range) {
            if (this.dragged === 0 && this.percentage[1] < percentage) {
                this.percentage[0] = this.percentage[1];
                this.dragged = 1;
            } else if (this.dragged === 1 && this.percentage[0] > percentage) {
                this.percentage[1] = this.percentage[0];
                this.dragged = 0;
            }
            previous = this.value[this.dragged];
        }

        this.percentage[this.dragged] = percentage;


        var val = Slider.prototype.calculateValue.call(this);
        if (this.range) {
            if (this.value[this.dragged] != previous) {
                this.element
                    .trigger({
                        type: 'change',
                        value: val,
                        id: this.dragged
                    })
                }
            this.element
                .trigger({
                    type: 'slide',
                    value: val,
                    id: this.dragged
                })
                .data('value', val)
                .prop('value', val);
        }
        else {
            //console.log("Debug " + val);
            if (this.value[0] != previous) {
                this.element
                    .trigger({
                        type: 'change',
                        value: val
                    })
                }
            this.element
                .trigger({
                    type: 'slide',
                    value: val
                })
                .data('value', val)
                .prop('value', val);
        }
        Slider.prototype.layout.call(this);
        return false;
    },

    mouseup: function (ev) {
        if (!this.enabled) return false;
        if (this.touchCapable) {
            // Touch: Bind touch events:
            $(document).off({
                touchmove: Slider.prototype.mousemove,
                touchend: Slider.prototype.mouseup
            });
        } else {
            $(document).off({
                mousemove: Slider.prototype.mousemove,
                mouseup: Slider.prototype.mouseup
            });
        }

        this.inDrag = false;
        if (this.over == false) {
            Slider.prototype.hideTooltip.call(this);
        }
        this.element;
        var val = Slider.prototype.calculateValue.call(this);
        this.element
            .trigger({
                type: 'slideStop',
                value: val
            })
            .data('value', val)
            .prop('value', val);
        return false;
    },

    calculateValue: function () {
        var val;
        if (this.range) {
            val = [
                (this.min + Math.round((this.diff * this.percentage[0] / 100) / this.step) * this.step),
                (this.min + Math.round((this.diff * this.percentage[1] / 100) / this.step) * this.step)
            ];
            this.value = val;
        } else {
            val = (this.min + Math.round((this.diff * this.percentage[0] / 100) / this.step) * this.step);
            this.value = [val, this.value[1]];
        }
        return val;
    },

    getPercentage: function (ev) {
        if (this.touchCapable) {
            ev = ev.touches[0];
        }
        var percentage = (ev[this.mousePos] - this.offset[this.stylePos]) * 100 / this.size;
        percentage = Math.round(percentage / this.percentage[2]) * this.percentage[2];
        return Math.max(0, Math.min(100, percentage));
    },

    getValue: function () {
        if (this.range) {
            return this.value;
        }
        return this.value[0];
    },

    setValue: function (val) {
        this.value = val;

        if (this.range) {
            this.value[0] = Math.max(this.min, Math.min(this.max, this.value[0]));
            this.value[1] = Math.max(this.min, Math.min(this.max, this.value[1]));
        } else {
            this.value = [Math.max(this.min, Math.min(this.max, this.value))];
            this.handle2.addClass('hide');
            if (this.selection == 'after') {
                this.value[1] = this.max;
            } else {
                this.value[1] = this.min;
            }
        }
        this.diff = this.max - this.min;
        this.percentage = [
            (this.value[0] - this.min) * 100 / this.diff,
            (this.value[1] - this.min) * 100 / this.diff,
            this.step * 100 / this.diff
        ];
        Slider.prototype.layout.call(this);
    }
};

$.fn.slider = function (option, val) {
              return this.each(function () {
        var $this = $(this),
            data = $this.data('slider'),
            options = typeof option === 'object' && option;
        if (!data) {
            $this.data('slider', (data = new Slider(this, $.extend({}, $.fn.slider.defaults, options))));
        }
        if (typeof option == 'string') {
            data[option](val);
        }
    })
       };

$.fn.slider.defaults = {
    min: 0,
    max: 10,
    step: 1,
    orientation: 'horizontal',
    value: 5,
    selection: 'before',
    tooltip: 'show',
    handle: 'round',
    enabled: true,
    formater: function (value) {
        return value;
    },
    formatlabel: function (value) {
        return value;
    },
    showlabels: true
};

$.fn.slider.Constructor = Slider;


