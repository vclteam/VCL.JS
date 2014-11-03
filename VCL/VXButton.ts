import V = require("./VCL");
import VXC = require("./VXComponent");
import VXO = require("./VXObject");
import VXM = require("./VXMenu");
import VXU = require("./VXUtils");

import VXB = require("./VXInputBase");

export class TButton extends VXC.TPopupmenuComponent {
    constructor(aOwner: VXC.TComponent, renderTo?: string, text?: string) {
        super(aOwner, renderTo);
        this._text = text;
    }

    private _textstyle: V.TextStyle = V.TextStyle.Default;
    public get TextStyle(): V.TextStyle {
        return this._textstyle;
    }
    public set TextStyle(val: V.TextStyle) {
        if (val != this._textstyle) {
            this._textstyle = val;
            this.drawDelayed(true);
        }
    }


    private _textcolor: string;
    public get TextColor(): string {
        return this._textcolor;
    }
    public set TextColor(val: string) {
        if (V.Application.checkColorString(val)) {
            if (val != this._textcolor) {
                this._textcolor = val;
                this.drawDelayed(true);
            }
        }
    }


    private _groupindex: number = -1;
    public get GroupIndex(): number {
        return this._groupindex;
    }
    public set GroupIndex(val: number) {
        if (val != this._groupindex) {
            this._groupindex = val;
            this.drawDelayed(true);
        }
    }

    private _text: string;
    /*
    * Text specify the text string that labels the control.
    */
    public get Text(): string {
        return this._text;
    }
    public set Text(val: string) {
        if (val != this._text) {
            this._text = val;
            this.drawDelayed(false);
        }
    }


    private _buttonsize: V.ButtonSize = V.ButtonSize.Default;
    public get ButtonSize(): V.ButtonSize {
        return this._buttonsize;
    }
    public set ButtonSize(val: V.ButtonSize) {
        if (val != this._buttonsize) {
            this._buttonsize = val;
            this.drawDelayed(true);
        }
    }

    private _buttonstyle: V.ButtonStyle = V.ButtonStyle.Default;
    public get ButtonStyle(): V.ButtonStyle {
        return this._buttonstyle;
    }
    public set ButtonStyle(val: V.ButtonStyle) {
        if (val != this._buttonstyle) {
            this._buttonstyle = val;
            this.drawDelayed(true);
        }
    }

    private _buttonimageurl: string;
    public get ButtonImageURL(): string {
        return this._buttonimageurl;
    }
    public set ButtonImageURL(val: string) {
        if (val != this.ButtonImageURL) {
            this._buttonimageurl = val;
            this.drawDelayed(true);
        }
    }


    private _buttonicon: V.ButtonIcon = null;
    public get ButtonIcon(): V.ButtonIcon {
        return this._buttonicon;
    }
    public set ButtonIcon(val: V.ButtonIcon) {
        if (val != this._buttonicon) {
            this._buttonicon= val;
            this.drawDelayed(true);
        }
    }


    private _buttoniconcolor: string;
    public get ButtonIconColor(): string {
        return this._buttoniconcolor;
    }
    public set ButtonIconColor(val: string) {
        if (V.Application.checkColorString(val)) {
            if (val != this._buttoniconcolor) {
                this._buttoniconcolor = val;
                this.drawDelayed(true);
            }
        }
    }


    private _tabindex: number;
    public get TabIndex(): number {
        return this._tabindex;
    }
    public set TabIndex(val: number) {
        if (val != this._tabindex) {
            this._tabindex = val;
            this.drawDelayed(true);
        }
    }


    private _iconalignment: V.IconAlignment = V.IconAlignment.Left;
    public get IconAlignment(): V.IconAlignment {
        return this._iconalignment;
    }
    public set IconAlignment(val: V.IconAlignment) {
        if (val != this._iconalignment) {
            this._iconalignment = val;
            this.drawDelayed(true);
        }
    }

    /*
        Use the OnClick event handler to respond when the user clicks the control. 
    */
    public onClicked: (sender: TButton) => void;

    public jText : JQuery;
    public jImage: JQuery;
    public jBtn: JQuery;
    
    public create() {
        this.jComponent.empty(); //clear all subcomponents
        this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'div', this.FitToWidth, this.FitToHeight);
        this.jComponent.addClass('btn-group');

        this.jImage = $('<i/>');

        if (this.TextStyle == V.TextStyle.h1)
            this.jText = $('<h1/>'); 
        else if (this.TextStyle == V.TextStyle.h2)
            this.jText = $('<h2/>'); 
        else if (this.TextStyle == V.TextStyle.h3)
            this.jText = $('<h3/>'); 
        else if (this.TextStyle == V.TextStyle.h4)
            this.jText = $('<h4/>'); 
        else if (this.TextStyle == V.TextStyle.h5)
            this.jText = $('<h5/>'); 
        else if (this.TextStyle == V.TextStyle.h6)
            this.jText = $('<h6/>'); 
        else if (this.TextStyle == V.TextStyle.strong)
            this.jText = $('<strong/>'); 
        else if (this.TextStyle == V.TextStyle.lead) {
            this.jText = $('<span/>').addClass('lead');; 
        } else if (this.TextStyle == V.TextStyle.small) {
            this.jText = $('<small/>'); 
        } else this.jText = $('<span/>'); 

        if (this.TextColor) {
            this.jText.css('color', this.TextColor);
        }

        this.jBtn = $('<button/>');
        if (this.TabIndex) this.jBtn.attr('tabindex', this.TabIndex);
        this.jBtn.css('height', '100%').css('width','100%').addClass("btn");
        this.jBtn.css('display', this.jComponent.css('display'));
        this.jBtn.appendTo(this.jComponent);

        if (this.ButtonIcon) {
            $(this.jImage).addClass(V.iconEnumToBootstrapStyle(this.ButtonIcon));
            if (this.ButtonIconColor) {
                this.jImage.css('color', this.ButtonIconColor);
            }

            if (this.ButtonIcon == V.ButtonIcon.icon_spinner) $(this.jImage).addClass('icon-spin');
            this.jBtn.append(this.jImage);
            if (this.ButtonSize == V.ButtonSize.Large) {
                this.jImage.addClass('icon-large');
                this.jImage.css('margin-top', '1px');
                if (this.IconAlignment == V.IconAlignment.Left) this.jText.css('padding-left', '8px');
                else this.jText.css('padding-right', '8px');
            }
            if (this.ButtonSize == V.ButtonSize.Default) {
                this.jImage.css('margin-top', '3px');
            }
            if (this.ButtonSize == V.ButtonSize.Small) {
                this.jImage.css('margin-top', '2px');
            }
            if (this.ButtonSize == V.ButtonSize.Mini) {
                this.jImage.css('margin-top', '3px');
            }
            if (this.IconAlignment == V.IconAlignment.Left) this.jImage.addClass('pull-left');
            else this.jImage.addClass('pull-right');
        } else if (this.ButtonImageURL) {
            this.jImage = $('<img/>');
            this.jImage.attr('src', this.ButtonImageURL);
            this.jBtn.append(this.jImage);
            if (this.IconAlignment == V.IconAlignment.Left) this.jImage.addClass('pull-left');
            else this.jImage.addClass('pull-right');
        }

        //handle popupmenu
        if (this.menuItems.length() > 0)
            if(this.ShowMenuCaret) this.jBtn.append($('<span class="caret"/>'));
        (<any>this).jDropDownTarget = this.jBtn; //control the menupopup mechansim

        this.jBtn.append(this.jText);

        switch (this.ButtonStyle) {
            case V.ButtonStyle.Default: break; 
            case V.ButtonStyle.Primary: this.jBtn.addClass("btn-primary"); break;
            case V.ButtonStyle.Info: this.jBtn.addClass("btn-info"); break;
            case V.ButtonStyle.Success: this.jBtn.addClass("btn-success"); break;
            case V.ButtonStyle.Warning: this.jBtn.addClass("btn-warning"); break;
            case V.ButtonStyle.Danger: this.jBtn.addClass("btn-danger"); break;
            case V.ButtonStyle.Link: this.jBtn.addClass("btn-link"); break;
        }
        switch (this.ButtonSize) {
            case V.ButtonSize.Large: this.jBtn.addClass("btn-large"); break;
            case V.ButtonSize.Small: this.jBtn.addClass("btn-small"); break;
            case V.ButtonSize.Mini: this.jBtn.addClass("btn-mini"); break;
       }

        //setup the click event
        this.jBtn.off("click").click(() => {
            if (this.onClicked != null) (V.tryAndCatch(() => { this.onClicked(this); }));
            return true; //hadeling the menu
        })
        if (!this.Enabled) this.jBtn.attr('disabled', 'disabled');
        else this.jBtn.removeAttr('disabled');
        super.create();

    }

    public draw(reCreate : boolean) {
        if (!this.parentInitialized()) return;
        super.draw(reCreate);

        $(this.jText).text(this.Text);
    
    }
}

declare var FB;
export class TFacebookButton extends VXC.TComponent {
    public onLoggedin: () => void;
    private _showfirendface: boolean = true;
    public get ShowFriendFace(): boolean {
        return this._showfirendface;
    }
    public set ShowFriendFace(val: boolean) {
        if (val != this._showfirendface) {
            this._showfirendface = val;
            this.drawDelayed(true);
        }
    }


    private _buttonsize: V.ButtonSize = V.ButtonSize.Small;
    public get ButtonSize(): V.ButtonSize {
        return this._buttonsize;
    }
    public set ButtonSize(val: V.ButtonSize) {
        if (val != this._buttonsize) {
            this._buttonsize = val;
            this.drawDelayed(true);
        }
    }


    public create() {
        var self = this;

        if (this.jComponent.children().length==0) {
            super.create();

            this.jComponent.empty(); //clear all subcomponents
            this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'div', this.FitToWidth, this.FitToHeight);
            this.jComponent.addClass('fb-login-button');

            if (this.ShowFriendFace) this.jComponent.attr('data-show_faces', 'true');
            this.jComponent.attr('data-auto-logout-link', 'false');
            if (this.ButtonSize == V.ButtonSize.Large) {
                this.jComponent.attr('data-size', 'xlarge');
            }
            else if (this.ButtonSize == V.ButtonSize.Default) {
                this.jComponent.attr('data-size', 'large');
            }
            else if (this.ButtonSize == V.ButtonSize.Small) {
                this.jComponent.attr('data-size', 'medium');
            }
            else if (this.ButtonSize == V.ButtonSize.Mini) {
                this.jComponent.attr('data-size', 'small');
            }

            FB.XFBML.parse();
            this.jComponent.on('login', () => {
                if (self.onLoggedin) self.onLoggedin();
            });
        }

    }

    public draw(reCreate: boolean) {
        if (!this.parentInitialized()) return;
        super.draw(reCreate);

    }
}

export class TToggleSwitch extends VXB.TEditorBase {
    private _value: boolean = false;
    public get Value(): boolean {
        return this._value;
    }
    public set Value(val: boolean) {
        if (val != this._value) {
            this._value = val;
            this.drawDelayed(false);
        }
    }

    private _textTrue: string;
    public get TextTrue(): string {
        return this._textTrue;
    }
    public set TextTrue(val: string) {
        if (val != this._textTrue) {
            this._textTrue = val;
            this.drawDelayed(true);
        }
    }

    private _textfalse : string;
    public get TextFalse(): string {
        return this._textfalse;
    }
    public set TextFalse(val: string) {
        if (val != this._textfalse) {
            this._textfalse = val;
            this.drawDelayed(true);
        }
    }


    private _switchsize: V.SwitchSize = V.SwitchSize.Default;
    public get SwitchSize(): V.SwitchSize {
        return this._switchsize;
    }
    public set SwitchSize(val: V.SwitchSize) {
        if (val != this._switchsize) {
            this._switchsize = val;
            this.drawDelayed(true);
        }
    }

    public onChanged: () => void;
    private jInput: JQuery; 

    public create() {
        this.jComponent.empty();
        this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'div', this.FitToWidth, this.FitToHeight);
        this.jComponent.addClass('input-append control-group');
        
        this.jEdit = $("<div>");
        this.jEdit.addClass('make-switch');
        if (this.SwitchSize == V.SwitchSize.Large) this.jEdit.addClass('switch-mini');
        else if (this.SwitchSize == V.SwitchSize.Mini) this.jEdit.addClass('switch-mini');
        else if (this.SwitchSize == V.SwitchSize.Small) this.jEdit.addClass('switch-small');
        this.jInput = $('<input>');
        this.jInput.attr('type', 'checkbox');
        this.jInput.appendTo(this.jEdit);

        if (this.TextTrue) this.jInput.attr('data-on-label', this.TextTrue);
        else if (this.TextFalse) this.jInput.attr('data-off-label', this.TextFalse);
        else if (this.LabelText) this.jInput.attr('data-text-label', this.LabelText);
        
        this.jEdit.bootstrapSwitch();
        this.jEdit.bootstrapSwitch('setAnimated', true);
        if (!this.Enabled) this.jEdit.bootstrapSwitch('setActive', false);

        
        var self = this;
        this.jEdit.on('switch-change', function (e) {
            self.Value = e.data.value;  //change for 0.95
            if (self.onChanged != null) (V.tryAndCatch(() => { self.onChanged(); })); 
        });
        this.jComponent.append(this.jEdit);
        super.create();
        
    }
    public draw(reCreate: boolean) {
        if (!this.parentInitialized()) return;
        super.draw(reCreate);

        this.jEdit.bootstrapSwitch('setState', this.Value);
    }
}


/*! ============================================================
 * bootstrapSwitch v1.8 by Larentis Mattia @SpiritualGuru
 * http://www.larentis.eu/
 * 
 * Enhanced for radiobuttons by Stein, Peter @BdMdesigN
 * http://www.bdmdesign.org/
 *
 * Project site:
 * http://www.larentis.eu/switch/
 * ============================================================
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 * ============================================================ */

$.fn['bootstrapSwitch'] = function (method) {
    var inputSelector = 'input[type!="hidden"]';
    var methods = {
        init: function () {
            return this.each(function () {
                var $element = $(this)
                    , $div
                    , $switchLeft
                    , $switchRight
                    , $label
                    , $form = $element.closest('form')
                    , myClasses = ""
                    , classes = $element.attr('class')
                    , color
                    , moving
                    , onLabel = "ON"
                    , offLabel = "OFF"
                    , icon = false
                    , textLabel = false;

                $.each(['switch-mini', 'switch-small', 'switch-large'], function (i, el) {
                    if (classes.indexOf(el) >= 0)
                        myClasses = el;
                });

                $element.addClass('has-switch');

                if ($element.data('on') !== undefined)
                    color = "switch-" + $element.data('on');

                if ($element.data('on-label') !== undefined)
                    onLabel = $element.data('on-label');

                if ($element.data('off-label') !== undefined)
                    offLabel = $element.data('off-label');

                if ($element.data('label-icon') !== undefined)
                    icon = $element.data('label-icon');

                if ($element.data('text-label') !== undefined)
                    textLabel = $element.data('text-label');

                $switchLeft = $('<span>')
                    .addClass("switch-left")
                    .addClass(myClasses)
                    .addClass(color)
                    .html(onLabel);

                color = '';
                if ($element.data('off') !== undefined)
                    color = "switch-" + $element.data('off');

                $switchRight = $('<span>')
                    .addClass("switch-right")
                    .addClass(myClasses)
                    .addClass(color)
                    .html(offLabel);

                $label = $('<label>')
                    .html("&nbsp;")
                    .addClass(myClasses)
                    .attr('for', $element.find(inputSelector).attr('id'));

                if (icon) {
                    $label.html('<i class="icon ' + icon + '"></i>');
                }

                if (textLabel) {
                    $label.html('' + textLabel + '');
                }

                $div = $element.find(inputSelector).wrap($('<div>')).parent().data('animated', false);

                if ($element.data('animated') !== false)
                    $div.addClass('switch-animate').data('animated', true);

                $div
                    .append($switchLeft)
                    .append($label)
                    .append($switchRight);

                $element.find('>div').addClass(
                    $element.find(inputSelector).is(':checked') ? 'switch-on' : 'switch-off'
                    );

                if ($element.find(inputSelector).is(':disabled'))
                    $(this).addClass('deactivate');

                var changeStatus = function ($this) {
                    if ($element.parent('label').is('.label-change-switch')) {

                    } else {
                        $this.siblings('label').trigger('mousedown').trigger('mouseup').trigger('click');
                    }
                };

                $element.on('keydown', function (e) {
                    if (e.keyCode === 32) {
                        e.stopImmediatePropagation();
                        e.preventDefault();
                        changeStatus($(e.target).find('span:first'));
                    }
                });

                $switchLeft.on('click', function (e) {
                    changeStatus($(this));
                });

                $switchRight.on('click', function (e) {
                    changeStatus($(this));
                });

                $element.find(inputSelector).change(function (e, skipOnChange) { //0.95
                    var $this = $(this)
                        , $element = $this.parent()
                        , thisState = $this.is(':checked')
                        , state = $element.is('.switch-off');

                    e.preventDefault();
                   

                    $element.css('left', '');

                    if (state === thisState) {

                        if (thisState)
                            $element.removeClass('switch-off').addClass('switch-on');
                        else $element.removeClass('switch-on').addClass('switch-off');

                        if ($element.data('animated') !== false)
                            $element.addClass("switch-animate");

                        if (typeof skipOnChange === 'boolean' && skipOnChange)
                            return;

                        $element.parent().trigger('switch-change', { 'el': $this, 'value': thisState })
              }
                });

                $element.find('label').on('mousedown touchstart', function (e) {
                    var $this = $(this);
                    moving = false;

                    e.preventDefault();
                    e.stopImmediatePropagation();

                    $this.closest('div').removeClass('switch-animate');

                    if ($this.closest('.has-switch').is('.deactivate')) {
                        $this.unbind('click');
                    } else if ($this.closest('.switch-on').parent().is('.radio-no-uncheck')) {
                        $this.unbind('click');
                    } else {
                        $this.on('mousemove touchmove', function (e) {
                            var $element = $(this).closest('.make-switch')
                                , relativeX = (e.pageX /*|| e.originalEvent.targetTouches[0].pageX*/) - $element.offset().left  //0.95
                                , percent = (relativeX / $element.width()) * 100
                                , left = 25
                                , right = 75;

                            moving = true;

                            if (percent < left)
                                percent = left;
                            else if (percent > right)
                                percent = right;

                            $element.find('>div').css('left', (percent - right) + "%")
                });

                        $this.on('click touchend', function (e) {
                            var $this = $(this)
                                , $target = $(e.target)
                                , $myRadioCheckBox = $target.siblings('input');

                            e.stopImmediatePropagation();
                            e.preventDefault();

                            $this.unbind('mouseleave');

                            if (moving)
                                $myRadioCheckBox.prop('checked', !(parseInt($this.parent().css('left')) < -25));
                            else
                                $myRadioCheckBox.prop("checked", !$myRadioCheckBox.is(":checked"));

                            moving = false;
                            $myRadioCheckBox.trigger('change');
                        });

                        $this.on('mouseleave', function (e) {
                            var $this = $(this)
                                , $myInputBox = $this.siblings('input');

                            e.preventDefault();
                            e.stopImmediatePropagation();

                            $this.unbind('mouseleave');
                            $this.trigger('mouseup');

                            $myInputBox.prop('checked', !(parseInt($this.parent().css('left')) < -25)).trigger('change');
                        });

                        $this.on('mouseup', function (e) {
                            e.stopImmediatePropagation();
                            e.preventDefault();

                            $(this).unbind('mousemove');
                        });
                    }
                });

                if ($form.data('bootstrapSwitch') !== 'injected') {
                    $form.bind('reset', function () {
                        setTimeout(function () {
                            $form.find('.make-switch').each(function () {
                                var $input = $(this).find(inputSelector);

                                $input.prop('checked', $input.is(':checked')).trigger('change');
                            });
                        }, 1);
                    });
                    $form.data('bootstrapSwitch', 'injected');
                }
            }
                );
        },
        toggleActivation: function () {
            var $this = $(this);

            $this.toggleClass('deactivate');
            $this.find(inputSelector).prop('disabled', $this.is('.deactivate'));
        },
        isActive: function () {
            return !$(this).hasClass('deactivate');
        },
        setActive: function (active) {
            var $this = $(this);

            if (active) {
                $this.removeClass('deactivate');
                $this.find(inputSelector).removeAttr('disabled');
            }
            else {
                $this.addClass('deactivate');
                $this.find(inputSelector).attr('disabled', 'disabled');
            }
        },
        toggleState: function (skipOnChange) {
            var $input = $(this).find(':checkbox');
            $input.prop('checked', !$input.is(':checked')).trigger('change', skipOnChange);
        },
        toggleRadioState: function (skipOnChange) {
            var $radioinput = $(this).find(':radio');
            $radioinput.not(':checked').prop('checked', !$radioinput.is(':checked')).trigger('change', skipOnChange);
        },
        toggleRadioStateAllowUncheck: function (uncheck, skipOnChange) {
            var $radioinput = $(this).find(':radio');
            if (uncheck) {
                $radioinput.not(':checked').trigger('change', skipOnChange);
            }
            else {
                $radioinput.not(':checked').prop('checked', !$radioinput.is(':checked')).trigger('change', skipOnChange);
            }
        },
        setState: function (value, skipOnChange) {
            $(this).find(inputSelector).prop('checked', value).trigger('change', skipOnChange);
        },
        setOnLabel: function (value) {
            var $switchLeft = $(this).find(".switch-left");
            $switchLeft.html(value);
        },
        setOffLabel: function (value) {
            var $switchRight = $(this).find(".switch-right");
            $switchRight.html(value);
        },
        setOnClass: function (value) {
            var $switchLeft = $(this).find(".switch-left");
            var color = '';
            if (value !== undefined) {
                if ($(this).attr('data-on') !== undefined) {
                    color = "switch-" + $(this).attr('data-on')
          }
                $switchLeft.removeClass(color);
                color = "switch-" + value;
                $switchLeft.addClass(color);
            }
        },
        setOffClass: function (value) {
            var $switchRight = $(this).find(".switch-right");
            var color = '';
            if (value !== undefined) {
                if ($(this).attr('data-off') !== undefined) {
                    color = "switch-" + $(this).attr('data-off')
          }
                $switchRight.removeClass(color);
                color = "switch-" + value;
                $switchRight.addClass(color);
            }
        },
        setAnimated: function (value) {
            var $element = $(this).find(inputSelector).parent();
            if (value === undefined) value = false;
            $element.data('animated', value);
            $element.attr('data-animated', value);

            if ($element.data('animated') !== false) {
                $element.addClass("switch-animate");
            } else {
                $element.removeClass("switch-animate");
            }
        },
        setSizeClass: function (value) {
            var $element = $(this);
            var $switchLeft = $element.find(".switch-left");
            var $switchRight = $element.find(".switch-right");
            var $label = $element.find("label");
            $.each(['switch-mini', 'switch-small', 'switch-large'], function (i, el) {
                if (el !== value) {
                    $switchLeft.removeClass(el);
                    $switchRight.removeClass(el);
                    $label.removeClass(el);
                } else {
                    $switchLeft.addClass(el);
                    $switchRight.addClass(el);
                    $label.addClass(el);
                }
            });
        },
        status: function () {
            return $(this).find(inputSelector).is(':checked');
        },
        destroy: function () {
            var $element = $(this)
                , $div = $element.find('div')
                , $form = $element.closest('form')
                , $inputbox;

            $div.find(':not(input)').remove();

            $inputbox = $div.children();
            $inputbox.unwrap().unwrap();

            $inputbox.unbind('change');

            if ($form) {
                $form.unbind('reset');
                $form.removeData('bootstrapSwitch');
            }

            return $inputbox;
        }
    };

    if (methods[method])
        return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    else if (typeof method === 'object' || !method)
        return methods.init.apply(this, arguments);
    else
        $.error('Method ' + method + ' does not exist!');
};


