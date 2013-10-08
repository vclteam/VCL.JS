/// <reference path="Scripts/jquery.d.ts" />
import VXC = require("VCL/VXComponent");
import VXCO = require("VCL/VXContainer");
import VXU = require("VCL/VXUtils");
import V = require("VCL/VCL");

export class VXWell extends VXCO.VXContainer {
    public create() {
        this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'div', this.FitToWidth, this.FitToHeight);
        this.jComponent.addClass('well');
        super.create();
    }

    public draw(reCreate: boolean) {
        if (!this.showed) return;
        if (reCreate || !this.initialized) this.create();
        this.initialized = true;

        super.draw(reCreate);
    }
}

export class VXPanel extends VXCO.VXContainer {
    public jHeader: JQuery;
    private jHeaderText: JQuery;
    public jContent: JQuery;
    public jImage: JQuery;
    private jButton: JQuery;

    constructor(aOwner: VXC.VXComponent, renderTo?: string,headerText? : string) {
        super(aOwner, renderTo);
        if (headerText != null) this.HeaderText = headerText;
    }

    private _backgroundimageurl: string;
    public get BackgroundImageURL(): string {
        return this._backgroundimageurl;
    }
    public set BackgroundImageURL(val: string) {
        if (val != this._backgroundimageurl) {
            this._backgroundimageurl = val;
            this.draw(true);
        }
    }
    /*
    * Set the opacity level of the background image
    * valid values 0 - 100
    */ 

    private _backgroundimageopacity: number = 10;
    public get BackgroundImageOpacity(): number {
        return this._backgroundimageopacity;
    }
    public set BackgroundImageOpacity(val: number) {
        if (val != this._backgroundimageopacity) {
            if (val < 0) val = 0;
            else if (val > 100) val = 100;
            this._backgroundimageopacity = val;
            this.draw(true);
        }
    }



    private _hedderstyle: V.HeaderStyle = V.HeaderStyle.Default;
    public get HeaderStyle(): V.HeaderStyle {
        return this._hedderstyle;
    }
    public set HeaderStyle(val: V.HeaderStyle) {
        if (val != this._hedderstyle) {
            this._hedderstyle = val;
            this.draw(true);
        }
    }

    private _closebuttonvisible: boolean = true;
    public get CloseButtonVisible(): boolean {
        return this._closebuttonvisible;
    }
    public set CloseButtonVisible(val: boolean) {
        if (val != this._closebuttonvisible) {
            this._closebuttonvisible = val;
            this.draw(true);
        }
    }



    private _buttonicon: V.ButtonIcon;
    public get ButtonIcon(): V.ButtonIcon {
        return this._buttonicon;
    }
    public set ButtonIcon(val: V.ButtonIcon) {
        if (val != this._buttonicon) {
            this._buttonicon = val;
            this.draw(true);
        }
    }


    
    private _headertext: string;
    /*
    * Text specify the panel header text string .
    */
    public get HeaderText(): string {
        return this._headertext;
    }
    public set HeaderText(val: string) {
        if (val != this._headertext) {
            this._headertext = val;
            this.draw(false);
        }
    }

    private _borderwidth: number = 1;
    public get BorderWidth(): number {
        return this._borderwidth;
    }
    public set BorderWidth(val: number) {
        if (val != this._borderwidth) {
            this._borderwidth = val;
            this.draw(true);
        }
    }

    private _textstyle: V.HeaderTextStyle = V.HeaderTextStyle.default;
    public get HeaderTextStyle(): V.HeaderTextStyle {
        return this._textstyle;
    }
    public set HeaderTextStyle(val: V.HeaderTextStyle) {
        if (val != this._textstyle) {
            this._textstyle = val;
            this.draw(true);
        }
    }
    public onCloseButtonClicked: (sender : VXC.VXComponent) => void;
    public onHeaderClicked: (sender: VXC.VXComponent) => void;

    public create() {
        var self = this;
        if (this.jContent == null) {

            this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'div', this.FitToWidth, this.FitToHeight);
            var attrs = {};
            $.each($(this.jComponent)[0].attributes, function (idx, attr) {
                if (attr != null) {
                    attrs[attr.nodeName] = attr.nodeValue;
                    attr.nodeValue = "";
                }
            });

            this.jComponent.addClass('collapse in');

            this.jContent = $("<div>", attrs);
            this.jContent.addClass('panel');
            this.jContent.insertBefore(this.jComponent);

            this.jHeader = $("<div>");
            this.jHeader.addClass('panel-header');
            this.jHeader.click(() => {
                if (this.onHeaderClicked != null) (V.tryAndCatch(() => { this.onHeaderClicked(self); }));
    
            })
            this.jHeader.appendTo(this.jContent);
            
            if (this.HeaderTextStyle == V.HeaderTextStyle.h4)
                this.jHeaderText = $("<h4>").css('margin', '0px');
            else if (this.HeaderTextStyle == V.HeaderTextStyle.h5)
                this.jHeaderText = $("<h5>").css('margin', '0px');
            else if (this.HeaderTextStyle == V.HeaderTextStyle.h6)
                this.jHeaderText = $("<h6>").css('margin','0px');
            else if (this.HeaderTextStyle == V.HeaderTextStyle.lead) {
                this.jHeaderText = $("<div>");
                this.jComponent.addClass('lead');
            } else if (this.HeaderTextStyle == V.HeaderTextStyle.small) {
                this.jHeaderText = $("<div>");
                this.jHeaderText.addClass('small');
            } else {
                this.jHeaderText = $("<div>");
                this.jHeaderText.addClass('muted');
            }
            this.jHeaderText.addClass('pull-left').css('width', '90%').css('overflow', 'hidden').css('white-space', 'nowrap');
            this.jHeaderText.appendTo(this.jHeader);
            this.jComponent.css('display', 'block');
            this.jContent.append(this.jComponent);        
            if (this.Width  > 0) this.jContent.width(this.Width - this.BorderWidth*2);
            
            this.jButton = $('<div>');
            this.jButton.addClass('pull-right panel-button');//.css('position','absolute');
            this.jButton.addClass(V.iconEnumToBootstrapStyle(this.ButtonIcon == null ? V.ButtonIcon.icon_remove:this.ButtonIcon));

            this.jButton.appendTo(this.jHeader);
            this.jButton.click(() => {
                if (this.onCloseButtonClicked != null) (V.tryAndCatch(() => { this.onCloseButtonClicked(self); }));
                else this.destroy();
            })

           
            var x = this.jComponent;
            this.jComponent = this.jContent;
            this.jContent = x;
        }
        if (this.CloseButtonVisible) this.jButton.show()
        else this.jButton.hide();
        this.jComponent.css('border-width', this.BorderWidth);

        this.jHeader.removeClass(function (index, css) {
            return (css.match(/\panel-header-\S+/g) || []).join(' ');
        });
        this.jHeaderText.removeClass(function (index, css) {
            return (css.match(/\panel-header-\S+/g) || []).join(' ');
        });
        this.jContent.removeClass(function (index, css) {
            return (css.match(/\panel-\S+/g) || []).join(' ');
        });

        if (this.BackgroundImageURL != null && this.BackgroundImageURL.length > 0) {
            if (this.jImage == null) {
                this.jImage = $('<div>');
                this.jImage.prependTo(this.jComponent);
                //this.jImage.click((event) => {
                //    event.stopPropagation();
                //});
            }
            this.jImage.css('background-image', 'url(' + this.BackgroundImageURL + ')').css('background-size', 'cover').css('opacity', this.BackgroundImageOpacity / 100).css('filter', ' alpha(opacity = ' + this.BackgroundImageOpacity + ')').css('position', 'absolute').css('width', '100%').css('height', '100%');
        }

        switch (this.HeaderStyle) {
            case V.HeaderStyle.Default:
                this.jHeader.addClass("panel-header-default");
                this.jHeaderText.addClass('panel-header-default');
                this.jContent.addClass('panel-default panel-content'); break;
            case V.HeaderStyle.Primary:
                this.jHeader.addClass("panel-header-primary");
                this.jHeaderText.addClass('panel-header-primary');
                this.jContent.addClass('panel-primary panel-content'); break;
            case V.HeaderStyle.Info:
                this.jHeader.addClass("panel-header-info");
                this.jHeaderText.addClass('panel-header-info');
                this.jContent.addClass('panel-info panel-content '); break;
            case V.HeaderStyle.Success:
                this.jHeader.addClass("panel-header-success");
                this.jHeaderText.addClass('panel-header-success');
                this.jContent.addClass('panel-success'); break;
            case V.HeaderStyle.Warning:
                this.jHeader.addClass("panel-header-warning");
                this.jHeaderText.addClass('panel-header-warning');
                this.jContent.addClass('panel-warning panel-content '); break;
            case V.HeaderStyle.Danger:
                this.jHeader.addClass("panel-header-danger");
                this.jHeaderText.addClass('panel-header-danger');
                this.jContent.addClass('panel-danger panel-content '); break;
            case V.HeaderStyle.Transparent:
                this.jHeader.addClass("panel-header-transparent");
                this.jHeaderText.addClass('panel-header-transparent');
                this.jContent.addClass('panel-transparent panel-content '); break;
        }

        super.create();
    }

    public draw(reCreate: boolean) {
        if (!this.showed) return;
        if (reCreate || !this.initialized) this.create();
        this.initialized = true;

        super.draw(reCreate);
        this.jHeaderText.text(this.HeaderText);
    }
}