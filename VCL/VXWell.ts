/// <reference path="Scripts/jquery.d.ts" />
/// <reference path="Scripts/google.maps.d.ts" />
///<reference path="Scripts/jquery.d.ts" />
import VXC = require("./VXComponent");
import VXCO = require("./VXContainer");
import VXU = require("./VXUtils");
import V = require("./VCL");
import VXO = require("./VXObject");
import VXM = require("./VXMenu");

export class TCarouselPage extends VXO.TCollectionItem {
    private _carousel: TCarousel;
    private _container: V.TContainer;

    private _caption: string = null;
    public get Caption(): string {

        return this._caption;
    }
    public set Caption(val: string) {
        if (val != this._caption) {
            this._caption = val;
        }
    }

    private _text: string = null;
    public get Text(): string {

        return this._text;
    }
    public set Text(val: string) {
        if (val != this._text) {
            this._text = val;
        }
    }


    private _visible: boolean = true;
    public get Visible(): boolean {
        return this._visible;
    }
    public set Visible(val: boolean) {
        if (val != this._visible) {
            this._visible = val;
            if (this) this._carousel.drawDelayed(true);
        }
    }

    private jitem: JQuery;
    private jcaption: JQuery;
    public create(): JQuery {
        this.jitem = $("<div>");
        this.jitem.addClass('item');

        var cmp: JQuery = $('<div/>');
        cmp.appendTo(this.jitem);
        if (this._container) {
            this._container.jComponent.appendTo(cmp);
            this._container.FitToWidth = true;
        }

        var jcap = $("<div>").addClass("carousel-caption");
        jcap.appendTo(this.jitem);
        if (this.Caption) {
            this.jcaption = $("<h4>");
            this.jcaption.appendTo(jcap).html(this.Caption);
        }
        if (this.Text) {
            this.jcaption = $("<p>");
            this.jcaption.appendTo(jcap).html(this.Text);
        }

        return this.jitem;
    }

    constructor(aOwner: TCarousel, container: VXCO.TContainer) {
        super();
        if (container) this.ID = container.ID + "@@";
        this._container = container;
    }
}


export class TCarousel extends VXCO.TContainer {
    /**
    @aOwner     Indicates the component that is responsible for streaming and freeing this component.Onwer must be TContainer
    @renderTo   (Optional) the id of the html element that will be the parent node for this component
    **/
    constructor(aOwner: VXC.TComponent, renderTo?: string) {
        super(aOwner, renderTo);
        this.Height = 200;
        this.Width = 200;
    }

    public create() {
        // detach panel back before cleaning
        this.items.forEach((item) => {
            var td: V.TContainer = (<any>item)._container
           if (td) {
                td.jComponent.detach();
            }
        });


        this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'div', this.FitToWidth, this.FitToHeight);
        this.jComponent.addClass('carousel').addClass('slide');
        super.create();

        var inner = $("<div/>");
        inner.addClass('carousel-inner');//.css('width', '100%');
        this.jComponent.append(inner);

        var navleft = $("<a/>");
        navleft.addClass('left carousel-control');
        navleft.attr("href", "#" + this.ID);
        navleft.attr("data-slide", "prev");
        navleft.html('&lsaquo;');

        var navright = $("<a/>");
        navright.addClass('right carousel-control');
        navright.attr("href", "#" + this.ID);
        navright.attr("data-slide", "next");
        navright.html('&rsaquo;');
        this.jComponent.append(navright);

        var firstSlide: JQuery;
        this.jComponent.append(navleft);
        this.items.forEach((item) => {
            var cmp: JQuery = $('<div/>');

            //cmp.parent().detach('#' + this._tabdata.ID);
            //this.jTabPane.append(cmp);*/

            var slide = item.create();
            firstSlide = firstSlide ? firstSlide : slide;
            inner.append(slide);
        });
        if (firstSlide) firstSlide.addClass('active');
        this.jComponent.carousel()
    }

    public draw(reCreate: boolean) {
        if (!this.parentInitialized()) return;
        super.draw(reCreate);
    }

    public items: V.TCollection<TCarouselPage> = new V.TCollection<TCarouselPage>();
    public createCarouselPage(caption: string, text: string, container: VXCO.TContainer): TCarouselPage {
        var alreadyExists: boolean = false;

        if (container) this.items.forEach((item) => {
            if (item.ID == container.ID) {
                V.Application.raiseException("You cant enter the same container twice");
                alreadyExists = true;
            }
        });

        if (alreadyExists) return;

        var col: TCarouselPage = new TCarouselPage(this, container);
        this.items.add(col);
        col.Caption = caption;
        col.Text = text;
        this.drawDelayed(true);
        return col;
    }
}


export class TWell extends VXCO.TContainer {
    private _color: string;
    public get Color(): string {
        return this._color;
    }
    public set Color(val: string) {
        if (V.Application.checkColorString(val)) {
            if (val != this._color) {
                this._color = val;
                this.owner.drawDelayed(true);
            }
        }
    }


    public create() {
        this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'div', this.FitToWidth, this.FitToHeight);
        this.jComponent.addClass('well');
        if (this.Color) this.jComponent.css('background-color', this.Color);
        super.create();
    }

    public draw(reCreate: boolean) {
        if (!this.parentInitialized()) return;
        super.draw(reCreate);
    }
}

export class TPanelButton {

    private _textcolor: string;
    public get TextColor(): string {
        return this._textcolor;
    }
    public set TextColor(val: string) {
        if (V.Application.checkColorString(val)) {
            if (val != this._textcolor) {
                this._textcolor = val;
                this.owner.drawDelayed(true);
            }
        }
    }


    private _tag: any;

    /**
    * Stores a value as a part of a component.
    * Tag has no predefined meaning. The Tag property can store any additional value for the convenience of developers. 
    *
    */
    public get Tag(): any {
        return this._tag;
    }

    public set Tag(val: any) {
        if (val != this._tag) {
            this._tag = val;
        }
    }


    /**
    * The margin clears an area around an component . 
    * The margin does not have a background color, and is completely transparent.
    * Sets the left margin of an component
    */
    private _marginLeft: number = 0;
    private _marginRight: number = 0;
    private _marginTop: number = 0;
    private _marginBottom: number = 0;
    public get MarginLeft(): number { return this._marginBottom; }
    public set MarginLeft(pixel: number) { if (pixel != this._marginLeft) { this._marginLeft = pixel; this.owner.drawDelayed(false); } }
    /**
    * The margin clears an area around an component . 
    * The margin does not have a background color, and is completely transparent.
    *  Sets the right margin of an component
    */
    public get MarginRight(): number { return this._marginRight; }
    public set MarginRight(pixel: number) { if (pixel != this._marginRight) { this._marginRight = pixel; this.owner.drawDelayed(false); } }
    /**
    * The margin clears an area around an component . 
    * The margin does not have a background color, and is completely transparent.
    * Sets the top margin of an component
    */
    public get MarginTop(): number { return this._marginTop; }
    public set MarginTop(pixel: number) { if (pixel != this._marginTop) { this._marginTop = pixel; this.owner.drawDelayed(false); } }
    /**
    * The margin clears an area around an component . 
    * The margin does not have a background color, and is completely transparent.
    * Sets the bottom margin of an component
    */
    public get MarginBottom(): number { return this._marginBottom; }
    public set MarginBottom(pixel: number) { if (pixel != this._marginBottom) { this._marginBottom = pixel; this.owner.drawDelayed(false); } }


    private owner: TPanel;
    constructor(owner: TPanel, icon?: V.Icon) {
        this.owner = owner;
        if (icon) this._icon = icon;

    }
    private _visible: boolean = false;
    public get Visible(): boolean {
        return this._visible;
    }
    public set Visible(val: boolean) {
        if (val != this._visible) {
            this._visible = val;
            this.owner.drawDelayed(true);
        }
    }

    private _color: string;
    public get Color(): string {
        return this._color;
    }
    public set Color(val: string) {
        if (V.Application.checkColorString(val)) {
            if (val != this._color) {
                this._color = val;
                this.owner.drawDelayed(true);
            }
        }
    }


    private _tooltip: string;
    public get Tooltip(): string {
        return this._tooltip;
    }
    public set Tooltip(val: string) {
        if (val != this._tooltip) {
            this._tooltip = val;
            this.owner.drawDelayed(false);
        }
    }


    private _icon: V.Icon = V.Icon.icon_align_justify;
    public get Icon(): V.Icon {
        return this._icon;
    }
    public set Icon(val: V.Icon) {
        if (val != this._icon) {
            this._icon = val;
            this.Visible = true;
            this.owner.drawDelayed(true);
        }
    }

    private _url: string;
    public get ImageUrl(): string {
        return this._url;
    }

    public set ImageUrl(val: string) {
        if (val != this._url) {
            this._url = val;
            this.Visible = true;
            this.owner.drawDelayed(true);
        }
    }

    private _text: string = "";
    public get Text(): string {
        return this._text;
    }
    public set Text(val: string) {
        if (val != this._text) {
            this._text = val;
            this.Visible = true;
            this.owner.drawDelayed(true);
        }
    }

    public onClicked: () => void;
    public jButton: JQuery;
    public jImage: JQuery;
    public jGroupButton: JQuery;
    public jMenu: JQuery;

    public menuItems = new VXM.TMenuItemCollection<VXM.TMenuItem>();
    public createMenuItem(text: string, onClicked?: () => void): VXM.TMenuItem {
        var menuItem = new VXM.TMenuItem();
        menuItem.Text = text;
        menuItem.onClicked = onClicked;
        this.menuItems.add(menuItem);
        return menuItem;
    }
}

export class TPanel extends VXCO.TContainer implements V.iTranslatable {
    public jHeader: JQuery;
    private jHeaderText: JQuery;
    public jContent: JQuery;
    public jOverlayText: JQuery;

    public CloseButton: TPanelButton;
    public Button1: TPanelButton;
    public Button2: TPanelButton;
    public Button3: TPanelButton;
    private jButtons: JQuery;

    private _localizable: boolean = false;
    /**
    * In order to localize application each page or component of the application has to have Localizable property set true.
    */
    public get Localizable(): boolean {
        return this._localizable;
    }
    public set Localizable(val: boolean) {
        if (val != this._localizable) {
            this._localizable = val;
            this.drawDelayed(true);
        }
    }


    constructor(aOwner: VXC.TComponent, renderTo?: string, headerText?: string) {
        super(aOwner, renderTo);
        this.CloseButton = new TPanelButton(this, V.Icon.icon_remove);
        this.Button1 = new TPanelButton(this);
        this.Button2 = new TPanelButton(this);
        this.Button3 = new TPanelButton(this);

        if (headerText != null) this._headertext = headerText;
    }


    private _expanded: boolean = true;
    public get Expanded(): boolean {
        return this._expanded;
    }
    public set Expanded(val: boolean) {
        if (val != this._expanded) {
            this._expanded = val;
            this.drawDelayed(false);
        }
    }


    private _headevisible: boolean = true;
    public get HeaderVisible(): boolean {
        return this._headevisible;
    }
    public set HeaderVisible(val: boolean) {
        if (val != this._headevisible) {
            this._headevisible = val;
            this.drawDelayed(false);
        }
    }



    private _borderradius: number = 0;
    public get BorderRadius(): number {
        return this._borderradius;
    }
    public set BorderRadius(val: number) {
        if (val != this._borderradius) {
            this._borderradius = val;
            this.drawDelayed(true);
        }
    }



    private _hedderstyle: V.HeaderStyle = V.HeaderStyle.Default;
    public get HeaderStyle(): V.HeaderStyle {
        return this._hedderstyle;
    }
    public set HeaderStyle(val: V.HeaderStyle) {
        if (val != this._hedderstyle) {
            this._hedderstyle = val;
            this.drawDelayed(false);
        }
    }


    private _largeheaderbutton: boolean = false;
    /*
    * specify the size of the panel header button.
    */
    public get LargeHeaderButton(): boolean {
        return this._largeheaderbutton;
    }
    public set LargeHeaderButton(val: boolean) {
        if (val != this._largeheaderbutton) {
            this._largeheaderbutton = val;
            this.drawDelayed(false);
        }
    }



    private _buttonaligment: V.ButtonAlignment = V.ButtonAlignment.Right;
    /*
    * Text specify the panel header text string .
    */
    public get ButtonAlignment(): V.ButtonAlignment {
        return this._buttonaligment;
    }
    public set ButtonAlignment(val: V.ButtonAlignment) {
        if (val != this._buttonaligment) {
            this._buttonaligment = val;
            this.drawDelayed(false);
        }
    }

    private _headercolor: string;
    public get HeaderColor(): string {
        return this._headercolor;
    }
    public set HeaderColor(val: string) {
        if (V.Application.checkColorString(val)) {
            if (val != this._headercolor) {
                this._headercolor = val;
                this.owner.drawDelayed(true);
            }
        }
    }

    private _headertextcolor: string;
    public get HeaderTextColor(): string {
        return this._headertextcolor;
    }
    public set HeaderTextColor(val: string) {
        if (V.Application.checkColorString(val)) {
            if (val != this._headertextcolor) {
                this._headertextcolor = val;
                this.owner.drawDelayed(true);
            }
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
            this.drawDelayed(false);
        }
    }

    private _borderwidth: number = 1;
    public get BorderWidth(): number {
        return this._borderwidth;
    }
    public set BorderWidth(val: number) {
        if (val != this._borderwidth) {
            this._borderwidth = val;
            this.drawDelayed(true);
        }
    }

    private _textstyle: V.HeaderTextStyle = V.HeaderTextStyle.Default;
    public get HeaderTextStyle(): V.HeaderTextStyle {
        return this._textstyle;
    }
    public set HeaderTextStyle(val: V.HeaderTextStyle) {
        if (val != this._textstyle) {
            this._textstyle = val;
            this.drawDelayed(true);
        }
    }

    private _textheaderalign: V.HeaderTextAlignment = V.HeaderTextAlignment.Left;
    public get HeaderTextAlignment(): V.HeaderTextAlignment {
        return this._textheaderalign;
    }
    public set HeaderTextAlignment(val: V.HeaderTextAlignment) {
        if (val != this._textheaderalign) {
            this._textheaderalign = val;
            this.drawDelayed(true);
        }
    }


    public onPanelClicked: (sender: VXC.TComponent) => void;
    public onHeaderClicked: (sender: VXC.TComponent) => void;
    public onContentClicked: (sender: VXC.TComponent) => void;

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
            if (this.BorderRadius > 0) this.jContent.css("border-radius", this.BorderRadius + "px");
            this.jContent.insertBefore(this.jComponent);

            this.jHeader = $("<div>");
            this.jHeader.addClass('panel-header').css('padding-left', '3px').css('padding-right', '3px');;

            this.jHeader.appendTo(this.jContent);


            if (this.HeaderTextStyle == V.HeaderTextStyle.Strong) {
                this.jHeaderText = $("<strong>");
            } else if (this.HeaderTextStyle == V.HeaderTextStyle.Small) {
                this.jHeaderText = $("<small>");
            } else {
                this.jHeaderText = $("<div>");
            }


            if (this.BorderRadius > 0) {
                this.jHeader.css("border-top-left-radius", this.BorderRadius);
                this.jHeader.css("border-top-right-radius", this.BorderRadius);
            }

            this.jButtons = $("<div>").addClass("btn-toolbar").css('margin-top', '0px');;

            this.jHeaderText.appendTo(this.jHeader);
            this.jComponent.css('display', 'block');
            this.jContent.append(this.jComponent);

            this.jButtons.prependTo(this.jHeader);

            if (this.ButtonAlignment == V.ButtonAlignment.Left) {
                this.jButtons.addClass('pull-left');
                this.jButtons.removeClass('pull-right');
            } else {
                this.jButtons.addClass('pull-right');
                this.jButtons.removeClass('pull-left');
            }


            this.createButton(this.CloseButton, () => {
                if (this.CloseButton.onClicked != null) (V.tryAndCatch(() => { this.CloseButton.onClicked(); }));
                else this.destroy();
            });
            this.CloseButton.jButton.css('padding-right', '4px');
            this.createButton(this.Button1, null);
            this.createButton(this.Button2, null);
            this.createButton(this.Button3, null);

            var x = this.jComponent;
            this.jComponent = this.jContent;
            this.jContent = x;
            this.jContent.css('overflow', 'visible');
            this.jOverlayText = $("<div>");
        }

        if (this.Button1.Visible || this.Button2.Visible || this.Button3.Visible || this.CloseButton.Visible) {
            this.jButtons.show();
            this.jHeaderText.css('overflow', 'hidden').css('white-space', 'nowrap').css('width', 'auto');
            if (this.HeaderTextAlignment == V.HeaderTextAlignment.Right) {
                this.jHeaderText.addClass('pull-right').css('text-align', 'right')
                } else {
                this.jHeaderText.addClass('pull-left').css('text-align', 'left')
                }
        } else {
            this.jButtons.hide();
            this.jHeaderText.css('overflow', 'hidden').css('white-space', 'nowrap').css('width', '99%');
            if (this.HeaderTextAlignment == V.HeaderTextAlignment.Right) {
                this.jHeaderText.addClass('pull-right').css('text-align', 'right');
            } else {
                this.jHeaderText.addClass('pull-left').css('text-align', 'left');
            }
        }


        if (this.HeaderTextColor) {
            this.jHeaderText.css('color', this.HeaderTextColor);
        }

        //fix some issues with change of width and height
        if (!this.FitToWidth) {
            this.jComponent.css('display', 'inline-block');
        } else {
            this.jComponent.css('display', 'block');
            this.jComponent.css('width', '100%');
        }
        if (!this.FitToHeight);
        else {
            this.jComponent.css('position', 'absolute');
            this.jComponent.css('height', '100%');
        }

        this.jComponent.css('border-width', this.BorderWidth);

        //this.jContent.css('height', '100%');
        this.jHeader.off("click").click(() => {
            if (this.onHeaderClicked != null) (V.tryAndCatch(() => { this.onHeaderClicked(self); }));
        })
        this.jContent.off("click").click(() => {
            if (this.onContentClicked != null) (V.tryAndCatch(() => { this.onContentClicked(self); }));
        })
        this.jComponent.off("click").click(() => {
            if (this.onPanelClicked != null) (V.tryAndCatch(() => { this.onPanelClicked(self); }));
            else if (this.onClicked != null) (V.tryAndCatch(() => { this.onClicked(self); }));
        })
        super.create();
    }


    private createButton(button: TPanelButton, clickEvent: () => void) {
        if (!button.jButton) {
            button.jGroupButton = $('<div>');
            button.jGroupButton.addClass('btn-group');
            button.jButton = $('<button>');
            button.jImage = $('<img>');
            button.jButton.css('padding', '0px').css('background-color', 'transparent').css('vertical-align', 'middle');
            button.jButton.css('box-shadow', 'none');
            button.jButton.css('border', 'none');
            if (this.LargeHeaderButton) button.jButton.addClass('icon-large');
            if (clickEvent)
                button.jButton.off("click").click(clickEvent);
            else
                button.jButton.off("click").click(() => {
                    if (button.menuItems.length() > 0) button.jGroupButton.dropdown();
                    if (button.onClicked != null) (V.tryAndCatch(() => { button.onClicked(); }));
                });
            button.jGroupButton.prependTo(this.jButtons);
            button.jImage.prependTo(button.jButton);
            button.jButton.prependTo(button.jGroupButton);
        }

        if (button.MarginBottom) button.jButton.css('margin-bottom', button.MarginBottom + "px");
        if (button.MarginTop) button.jButton.css('margin-top', button.MarginTop + "px");
        if (button.MarginLeft) button.jButton.css('margin-left', button.MarginLeft + "px");
        if (button.MarginRight) button.jButton.css('margin-right', button.MarginRight + "px");
        if (button.Color) button.jButton.css('color', button.Color);

        if (button.TextColor) {
            button.jButton.css('color', button.TextColor);
        }

        if (button.Text != null && button.Text != "") {
            button.jButton.text(button.Text).addClass('btn-link');
        } else {
            if (button.ImageUrl) {
                button.jImage.attr('src', button.ImageUrl);
            }
            else {
                button.jButton.removeClass(function (index, css) {
                    return (css.match(/(^|\s)icon-\S+/g) || []).join(' ');
                });
                button.jButton.addClass('btn');
                button.jButton.addClass("icon");
                button.jButton.addClass(V.iconEnumToBootstrapStyle(<any>button.Icon)).text('');
            }
        }

        if (button.jMenu) button.jMenu.remove();
        if (button.menuItems.length() > 0) {
            button.jButton.attr('data-toggle', "dropdown");
            button.jButton.addClass('dropdown-toggle');
            button.jMenu = button.menuItems.createmenu('dropdown-menu');
            button.jMenu.data('open', false);
            button.jMenu.appendTo(button.jGroupButton);
            $('.dropdown-toggle').dropdown()
        }

        //remove the old tooltip
        button.jButton.data('tooltip', false);
        if (button.Tooltip != "" && button.Tooltip != null) {
            button.jButton.tooltip({ title: button.Tooltip });
        }

        button.jGroupButton.css('display', button.Visible ? 'inline-block' : 'none');
    }

    public draw(reCreate: boolean) {
        if (!this.parentInitialized()) return;
        super.draw(reCreate);
        this.jHeaderText.text(this.LocalizeText(this.HeaderText));
        this.HeaderVisible ? this.jHeader.show().css('border-top', '0px') : this.jHeader.hide().attr('min-height', '0px');
        this.createButton(this.Button3, null);
        this.createButton(this.Button2, null);
        this.createButton(this.Button1, null);
        this.createButton(this.CloseButton, null);


        if (this.Expanded) {
            this.jComponent.css('max-height', "");
            this.jContent.show();
        } else {
            this.jComponent.css('max-height', this.jHeader.outerHeight() + "px");
            this.jContent.hide();
        }


        this.jHeader.removeClass(function (index, css) {
            return (css.match(/\panel-header-\S+/g) || []).join(' ');
        });
        this.jHeaderText.removeClass(function (index, css) {
            return (css.match(/\panel-header-\S+/g) || []).join(' ');
        });
        this.jContent.removeClass(function (index, css) {
            return (css.match(/\panel-\S+/g) || []).join(' ');
        });

        if (this.HeaderColor) {
            this.jHeader.css('background-color', this.HeaderColor);
            this.jHeaderText.css('background-color', this.HeaderColor);
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

    }
}


export class TGoogleMap extends VXC.TComponent {
    /** Custom Format tooltip */
    public ToolTipFormat: (data: any) => string;

    /**
    @aOwner     Indicates the component that is responsible for streaming and freeing this component.Onwer must be TContainer
    @renderTo   (Optional) the id of the html element that will be the parent node for this component
    **/
    constructor(aOwner: VXC.TComponent, renderTo?: string) {
        super(aOwner, renderTo);
    }

    private _googleAPIKey: string = "";
    /*
    * Text specify the panel header text string .
    */
    public get GoogleAPIKey(): string {
        return this._googleAPIKey;
    }
    public set GoogleAPIKey(val: string) {
        if (val != this._googleAPIKey) {
            this._googleAPIKey = val;
            this.draw(false);
        }
    }

    private mapoption: google.maps.MapOptions = {};
    /*
    * Text specify the panel header text string .
    */
    public get MapOptions(): google.maps.MapOptions {
        return this.mapoption;
    }
    public set MapOptions(val: google.maps.MapOptions) {
        if (val != this.mapoption) {
            this.mapoption = val;
            this.draw(false);
        }
    }


    private map: google.maps.Map;
    public create() {
        var self = this;
        this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'div', this.FitToWidth, this.FitToHeight);
        var myLatlng = new google.maps.LatLng(0, 0);
        var mapOptions: google.maps.MapOptions = { zoom: 6, center: myLatlng, mapTypeId: google.maps.MapTypeId.ROADMAP };
        this.map = new google.maps.Map(this.jComponent[0], mapOptions);
        google.maps.event.addListenerOnce(this.map, 'idle', function () {
            // Get projection
            self.refreshMarkers();
            self.refreshHeatmap();
            self.optimizeZoomLevel1();
            self.optimizeZoomLevel2();
        });


    }

    public draw(reCreate: boolean) {
        require(["VCL/Scripts/async!http://maps.google.com/maps/api/js?v=3.exp&sensor=false&libraries=visualization&key=" + this.GoogleAPIKey], () => {
            if (!this.parentInitialized()) return;
            super.draw(reCreate);
        });
    }

    private createheatmaplayer(layername: string): Array<google.maps.LatLng> {
        var heatData: Array<google.maps.LatLng> = [];
        this.heatmapMarkerItems.forEach((item) => {
            if ((item.Lat && item.Lng) && item.Layer == layername) {
                var myLatlng = new google.maps.LatLng(item.Lat, item.Lng);
                var obj = { location: myLatlng, weight: item.Weight }
                    heatData.push(<any>obj);
            } else if (item.Address) {
                this.decodeHeatmapAddress(item.Address, item);
            }
        });
        return heatData;
    }

    private tmpMarkers: google.maps.Marker[] = [];
    private heatmapLayer: Array<google.maps.visualization.HeatmapLayer>;
    private refreshHeatmap(): string[] {
        var self = this;
        if (this.heatmapLayer) {
            this.heatmapLayer.forEach((item) => {
                item.setMap(null);
            });
        }

        this.heatmapLayer = [];
        var layrs: Array<string> = [];
        this.heatmapMarkerItems.forEach((item) => {
            if (item.Lat && item.Lng && item.Layer && layrs.indexOf(item.Layer) == -1) layrs.push(item.Layer);
        });

        if (this.heatmapMarkerItems.length) {
            layrs.forEach((layer) => {
                var heatData: Array<google.maps.LatLng> = this.createheatmaplayer(layer);
                var opt: google.maps.visualization.HeatmapLayerOptions = { data: heatData, radius: 20 };
                var heat = new google.maps.visualization.HeatmapLayer(opt);
                heat.setMap(this.map);
                this.heatmapLayer.push(heat);

                var homeControlDiv: any = document.createElement('div');
                var homeControl = new HeatControl(homeControlDiv, self.map, layer, heat);
                homeControlDiv.index = 1;
                self.map.controls[google.maps.ControlPosition.TOP_RIGHT].push(homeControlDiv);
                (<any>heat).homeControlDiv = homeControlDiv;
            })
        }
        return layrs;
    }


    private refreshMarkers() {
        //reset markers
        for (var i = 0; i < this.tmpMarkers.length; i++) { this.tmpMarkers[i].setMap(null); }

        this.tmpMarkers = [];
        this.markerItems.forEach((item: TGoogleMapMarker) => { item.marker = null });

        var self = this;
        this.markerItems.forEach((item: TGoogleMapMarker) => {
            if (item.marker) return;
            if (item.Lat) {
                var myLatlng = new google.maps.LatLng(item.Lat, item.Lng);
                item.marker = new google.maps.Marker({
                    position: myLatlng,
                    map: this.map,
                    title: item.Title
                });
                this.setMarkerClick(item);
                this.tmpMarkers.push(item.marker);
                return;
            }
            if (item.Address) this.decodeAddress(item.Address, item);
        });

        this.markerItems.forEach((item: TGoogleMapMarker) => {
            if (item.marker && item.Visible) item.marker.setMap(this.map);
            if (item.marker && !item.Visible) item.marker.setMap(null);
        });
    }


    public showHeatmap(layer: string = "heatmap") {
    }

    public hideHeatmap(layer: string = "heatmap") {
    }

    private setMarkerClick(item: TGoogleMapMarker) {
        var self = this;
        google.maps.event.addListener(item.marker, 'click', function (a) {
            var lat = -1;
            var lng = -1;
            var i = 0;
            for (var x in a.latLng) {
                if (i == 0)
                    lat = a.latLng[x];
                if (i == 1)
                    lng = a.latLng[x];
                i++
            }

            self.markerItems.forEach((item) => {
                if (item.Lat == lat && item.Lng == lng) {
                    if (self.onMarkerClicked != null) (V.tryAndCatch(() => { self.onMarkerClicked(item); }));
                }
            });
        });

        google.maps.event.addListener(item.marker, 'mouseover', function (a) {

            var lat = -1;
            var lng = -1;
            var i = 0;
            for (var x in a.latLng) {
                if (i == 0)
                    lat = a.latLng[x];
                if (i == 1)
                    lng = a.latLng[x];
                i++
            }

            self.markerItems.forEach((item) => {
                if (item.Lat == lat && item.Lng == lng) {
                    var lbl = "";
                    if (self.ToolTipFormat) {
                        lbl = self.ToolTipFormat(item);
                    }
                    else {
                        lbl = item.Title;
                    }
                    if (lbl) {
                        item.InforWindowContent = "<div id='content' style='width:150px;overflow:hidden;'>" + lbl + "</div>";
                        item.infowindow = new google.maps.InfoWindow({ content: item.InforWindowContent });
                        item.infowindow.close();
                        item.infowindow.open(self.map, item.marker);
                    }
                }
            });
        });

        google.maps.event.addListener(item.marker, 'mouseout', function (a) {
            self.markerItems.forEach((item) => {
                //if (item.Title) {
                if (item.infowindow)
                    item.infowindow.close();
                //}
            });
        });

    }
    private decodeReq: number = 0;
    public onDecodeAddress: (item: TGoogleMapMarker) => void;

    private decodeAddress(address: string, selectedItem: TGoogleMapMarker) {
        var self = this;
        this.decodeReq++;
        var myItem: TGoogleMapMarker = selectedItem;
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'address': myItem.Address }, (results: google.maps.GeocoderResult[], status: google.maps.GeocoderStatus) => {
            this.decodeReq--;
            if (status == google.maps.GeocoderStatus.OK) {
                myItem.Lat = results[0].geometry.location.lat();
                myItem.Lng = results[0].geometry.location.lng();
                myItem.marker = new google.maps.Marker({
                    map: this.map,
                    position: results[0].geometry.location,
                    title: myItem.Title
                });
                this.setMarkerClick(myItem);
                this.tmpMarkers.push(myItem.marker);
                if (self.onDecodeAddress) self.onDecodeAddress(myItem);
            }
            if (!this.decodeReq) {
                this.optimizeZoomLevel1();
                this.optimizeZoomLevel2();
            }
        });
    }

    private decodeHeatmapAddress(address: string, selectedItem: TGoogleMapHeatmapMarker) {
        var self = this;
        var myItem: TGoogleMapHeatmapMarker = selectedItem;
        var geocoder = new google.maps.Geocoder();
        this.decodeReq++;
        geocoder.geocode({ 'address': myItem.Address }, (results: google.maps.GeocoderResult[], status: google.maps.GeocoderStatus) => {
            this.decodeReq--;
            if (status == google.maps.GeocoderStatus.OK) {
                myItem.Lat = results[0].geometry.location.lat();
                myItem.Lng = results[0].geometry.location.lng();
                self.refreshHeatmap();
            }
            if (!this.decodeReq) {
                this.optimizeZoomLevel1();
                this.optimizeZoomLevel2();
            }
        });
    }

    public optimizeZoomLevel() {
        this.optimizeZoomLevel1();
        this.optimizeZoomLevel2();
    }


    /**
    * Returns the zoom level at which the given rectangular region fits in the map view. 
    * The zoom level is computed for the currently selected map type. 
    * @param {google.maps.Map} map
    * @param {google.maps.LatLngBounds} bounds 
    * @return {Number} zoom level
    **/
    private getZoomByBounds(map: google.maps.Map, bounds: google.maps.LatLngBounds) {
        var MAX_ZOOM = /*map.mapTypes.get(map.getMapTypeId()).maxZoom ||*/ 21;
        var MIN_ZOOM = /*map.mapTypes.get(map.getMapTypeId()).minZoom ||*/ 0;

        var p = map.getProjection();
        var b = bounds.getNorthEast();
        var ne = p.fromLatLngToPoint(b);
        var sw = map.getProjection().fromLatLngToPoint(bounds.getSouthWest());

        var worldCoordWidth = Math.abs(ne.x - sw.x);
        var worldCoordHeight = Math.abs(ne.y - sw.y);

        //Fit padding in pixels 
        var FIT_PAD = 40;

        for (var zoom = MAX_ZOOM; zoom >= MIN_ZOOM; --zoom) {
            if (worldCoordWidth * (1 << zoom) + 2 * FIT_PAD < $(map.getDiv()).width() &&
                worldCoordHeight * (1 << zoom) + 2 * FIT_PAD < $(map.getDiv()).height())
                return zoom;
        }
        return 0;
    }

    private optimizeZoomLevel1() {
        var bounds = new google.maps.LatLngBounds();
        var found = false;
        this.markerItems.forEach((item: TGoogleMapMarker) => {
            if (!item.Lat || !item.Lng || !item.Visible) return;
            found = true;
            var point = new google.maps.LatLng(item.Lat, item.Lng);
            bounds.extend(point);
        });

        if (!found) return;
        this.map.setZoom(this.getZoomByBounds(this.map, bounds));
        this.map.setCenter(bounds.getCenter());
    }
    private optimizeZoomLevel2() {
        var bounds = new google.maps.LatLngBounds();
        var found = false;
        this.heatmapMarkerItems.forEach((item: TGoogleMapHeatmapMarker) => {
            if (!item.Lat || !item.Lng) return;
            found = true;
            var point = new google.maps.LatLng(item.Lat, item.Lng);
            bounds.extend(point);
        });

        if (!found) return;
        this.map.setZoom(this.getZoomByBounds(this.map, bounds));
        this.map.setCenter(bounds.getCenter());
    }

    //private headmapgardiant: any;
    //public setHeatmapGradient(fromColor: string, toColor: string, layer: string = "default") {
    //    if (!this.headmapgardiant) this.headmapgardiant = {};
    //   this.headmapgardiant[layer] = { fromcolor: fromColor, tocolor: toColor };
    //}

    public heatmapMarkerItems: VXO.TCollection<TGoogleMapHeatmapMarker> = new VXO.TCollection<TGoogleMapHeatmapMarker>();
    createHeatmapMarker(lat: number, lng: number, weight: number, layer: string = "heatmap"): TGoogleMapHeatmapMarker {
        var col: TGoogleMapHeatmapMarker = new TGoogleMapHeatmapMarker();
        this.heatmapMarkerItems.add(col);
        col.Lat = lat;
        col.Lng = lng;
        col.Weight = weight;
        col.Layer = layer;
        return col;
    }

    createHeatmapMarkerFromAddress(address: string, weight: number, layer: string = "heatmap"): TGoogleMapHeatmapMarker {
        var col: TGoogleMapHeatmapMarker = new TGoogleMapHeatmapMarker();
        this.heatmapMarkerItems.add(col);
        col.Address = address;
        col.Weight = weight;
        col.Layer = layer;
        return col;
    }


    public markerItems: VXO.TCollection<TGoogleMapMarker> = new VXO.TCollection<TGoogleMapMarker>();
    createMarker(lat: number, lng: number): TGoogleMapMarker {
        var col: TGoogleMapMarker = new TGoogleMapMarker();
        this.markerItems.add(col);
        col.Lat = lat;
        col.Lng = lng;
        return col;
    }

    createMarkerFromAddress(address: string): TGoogleMapMarker {
        var col: TGoogleMapMarker = new TGoogleMapMarker();
        this.markerItems.add(col);
        col.Address = address;
        return col;
    }

    public onMarkerClicked: (item) => void;


}


function HeatControl(controlDiv, map: google.maps.Map, caption, heat: google.maps.visualization.HeatmapLayer) {
    controlDiv.style.padding = '5px';

    // Set CSS for the control border
    var controlUI = document.createElement('div');
    controlUI.style.backgroundColor = 'white';
    controlUI.style.borderStyle = 'solid';
    controlUI.style.borderWidth = '2px';
    controlUI.style.cursor = 'pointer';
    controlUI.style.textAlign = 'center';
    controlDiv.appendChild(controlUI);

    // Set CSS for the control interior
    var controlText = document.createElement('div');
    controlText.style.fontFamily = 'Arial,sans-serif';
    controlText.style.fontSize = '12px';
    controlText.style.paddingLeft = '4px';
    controlText.style.paddingRight = '4px';
    controlText.innerHTML = "<b>" + caption + "</b>";
    controlUI.appendChild(controlText);

    google.maps.event.addDomListener(controlUI, 'click', function () {
        if (heat.getMap() == null) {
            heat.setMap(map);
            controlText.innerHTML = "<b>" + caption + "</b>";
        } else {
            heat.setMap(null);
            controlText.innerHTML = caption;
        }
    });

}

export class TGoogleMapMarker extends VXO.TCollectionItem {
    public marker: any;
    public infowindow: any;
    private _lat: number = null;
    public get Lat(): number {
        return this._lat;
    }
    public set Lat(val: number) {
        if (val != this._lat) {
            this._lat = val;
        }
    }

    private _lng: number = null;
    public get Lng(): number {
        return this._lng;
    }
    public set Lng(val: number) {
        if (val != this._lng) {
            this._lng = val;
        }
    }

    private _address: string = null;
    public get Address(): string {
        return this._address;
    }
    public set Address(val: string) {
        if (val != this._address) {
            this._address = val;
        }
    }

    private _title: string = null;
    public get Title(): string {
        return this._title;
    }
    public set Title(val: string) {
        if (val != this._title) {
            this._title = val;
        }
    }

    private _visible: boolean = true;
    public get Visible(): boolean {
        return this._visible;
    }
    public set Visible(val: boolean) {
        if (val != this._visible) {
            this._visible = val;
        }
    }

    private _content: string;
    public get InforWindowContent(): string {
        return this._content;
    }
    public set InforWindowContent(val: string) {
        if (val != this._content) {
            this._content = val;
        }
    }
}

export class TGoogleMapHeatmapMarker extends VXO.TCollectionItem {
    public marker: any;
    public infowindow: any;
    private _lat: number = null;
    public get Lat(): number {
        return this._lat;
    }
    public set Lat(val: number) {
        if (val != this._lat) {
            this._lat = val;
        }
    }

    private _lng: number = null;
    public get Lng(): number {
        return this._lng;
    }
    public set Lng(val: number) {
        if (val != this._lng) {
            this._lng = val;
        }
    }

    private _address: string = null;
    public get Address(): string {
        return this._address;
    }
    public set Address(val: string) {
        if (val != this._address) {
            this._address = val;
        }
    }

    private _layer: string = null;
    public get Layer(): string {
        return this._layer;
    }
    public set Layer(val: string) {
        if (val != this._layer) {
            this._layer = val;
        }
    }


    private _weight: number = null;
    public get Weight(): number {
        return this._weight;
    }
    public set Weight(val: number) {
        if (val != this._weight) {
            this._weight = val;
        }
    }
}



/**
    Basic interface for all layouts
*/
export interface IGraphEditorLayout {

    /**
        Name of layout that serves as a key
    */
    name(): string;

    /**
        on layoutready
    */
    onReady: () => void;

    /**
        on layoutstop
    */
    onStop: () => void;

    getOptions: () => any;
}

/**
    The null layout puts all nodes at (0, 0). It's useful for debugging purposes.
*/
export class GraphEditorNullLayout implements IGraphEditorLayout {
    public name() {
        return "null";
    }
    private _fit: boolean = true;
    /**
     Whether to fit the network view after when done
    */
    public get Fit(): boolean {
        return this._fit;
    }
    public set Fit(val: boolean) {
        if (val != this._fit) {
            this._fit = val;
        }
    }
    public onReady: () => void = function () { };
    public onStop: () => void = function () { };

    public getOptions() {
        var res = {
            name: this.name(),

            ready: this.onReady, // on layoutready
            stop: this.onStop // on layoutstop
        }
        return res;
    }

}

/**
    The random layout puts nodes in random positions within the viewport.
*/
export class GraphEditorRandomLayout implements IGraphEditorLayout {
    public name() {
        return "random";
    }
    public onReady: () => void = undefined;
    public onStop: () => void = undefined;

    private _fit: boolean = true;
    /**
     Whether to fit the network view after when done
    */
    public get Fit(): boolean {
        return this._fit;
    }
    public set Fit(val: boolean) {
        if (val != this._fit) {
            this._fit = val;
        }
    }

    public getOptions() {
        var res = {
            name: this.name(),

            ready: this.onReady, // on layoutready
            stop: this.onStop, // on layoutstop

            fit: this.Fit // whether to fit to viewport
        }
        return res;
    }

}

/**
    The preset layout puts nodes in the positions you specify manually.
*/
export class GraphEditorPresetLayout implements IGraphEditorLayout {
    public name() {
        return "preset";
    }
    public onReady: () => void = undefined;
    public onStop: () => void = undefined;


    private _padding: number = 30;
    /**
        Padding on fit
    */
    public get Padding(): number {
        return this._padding;
    }
    public set Padding(val: number) {
        if (val != this._padding) {
            this._padding = val;
        }
    }

    private _fit: boolean = true;
    /**
     Whether to fit the network view after when done
    */
    public get Fit(): boolean {
        return this._fit;
    }
    public set Fit(val: boolean) {
        if (val != this._fit) {
            this._fit = val;
        }
    }


    public getOptions() {
        var res = {
            name: this.name(),

            ready: this.onReady, // on layoutready
            stop: this.onStop, // on layoutstop

            fit: this.Fit, // whether to fit to viewport

            padding: this.Padding,// Padding on fit

            positions: undefined, // map of (node id) => (position obj)
            zoom: undefined, // the zoom level to set (prob want fit = false if set)
            pan: undefined // the pan level to set (prob want fit = false if set)

        }
        return res;
    }

}

/**
    The grid layout puts nodes in a well-spaced grid.
*/
export class GraphEditorGridLayout implements IGraphEditorLayout {
    public name() {
        return "grid";
    }
    public onReady: () => void = undefined;
    public onStop: () => void = undefined;
    public onPosition: (any) => void = function (node) { } // returns { row, col } for element

    private _padding: number = 30;
    /**
        Padding on fit
    */
    public get Padding(): number {
        return this._padding;
    }
    public set Padding(val: number) {
        if (val != this._padding) {
            this._padding = val;
        }
    }

    private _fit: boolean = true;
    /**
     Whether to fit the network view after when done
    */
    public get Fit(): boolean {
        return this._fit;
    }
    public set Fit(val: boolean) {
        if (val != this._fit) {
            this._fit = val;
        }
    }


    private _rows: number = 10;
    public get Rows(): number {
        return this._rows;
    }
    public set Rows(val: number) {
        if (val != this._rows) {
            this._rows = val;
        }
    }

    private _columns: number = 10;
    public get Columns(): number {
        return this._columns;
    }
    public set Columns(val: number) {
        if (val != this._columns) {
            this._columns = val;
        }
    }

    public getOptions() {
        var res = {
            name: this.name(),

            ready: this.onReady, // on layoutready
            stop: this.onStop, // on layoutstop

            fit: this.Fit, // whether to fit to viewport

            padding: this.Padding,// Padding on fit

            position: this.onPosition, // returns { row, col } for element

            columns: this.Columns,

            rows: this.Rows

        }
        return res;
    }

}

/**
    The circle layout puts nodes in a circle.
*/
export class GraphEditorCircleLayout implements IGraphEditorLayout {
    public name() {
        return "circle";
    }
    public onReady: () => void = undefined;
    public onStop: () => void = undefined;

    private _padding: number = 30;
    /**
        Padding on fit
    */
    public get Padding(): number {
        return this._padding;
    }
    public set Padding(val: number) {
        if (val != this._padding) {
            this._padding = val;
        }
    }


    private _fit: boolean = true;
    /**
     Whether to fit the network view after when done
    */
    public get Fit(): boolean {
        return this._fit;
    }
    public set Fit(val: boolean) {
        if (val != this._fit) {
            this._fit = val;
        }
    }

    private _rStepSize: number = 10;
    /**
        the step size for increasing the radius if the nodes don't fit on screen
    */
    public get RStepSize(): number {
        return this._rStepSize;
    }
    public set RStepSize(val: number) {
        if (val != this._rStepSize) {
            this._rStepSize = val;
        }
    }



    private _startAngle: number = 3 / 2 * Math.PI;
    /**
        the position of the first node
    */
    public get StartAngle(): number {
        return this._startAngle;
    }
    public set StartAngle(val: number) {
        if (val != this._startAngle) {
            this._startAngle = val;
        }
    }

    private _counterclockwise: boolean = false;
    /**
        whether the layout should go counterclockwise (true) or clockwise (false)
    */
    public get Counterclockwise(): boolean {
        return this._counterclockwise;
    }
    public set Counterclockwise(val: boolean) {
        if (val != this._counterclockwise) {
            this._counterclockwise = val;
        }
    }
    public getOptions() {
        var res = {
            name: this.name(),

            ready: this.onReady, // on layoutready
            stop: this.onStop, // on layoutstop

            fit: this.Fit, // whether to fit to viewport

            padding: this.Padding,// Padding on fit

            rStepSize: this.RStepSize, // the step size for increasing the radius if the nodes don't fit on screen

            startAngle: this.StartAngle, // the position of the first node

            counterclockwise: this.Counterclockwise   // whether the layout should go counterclockwise (true) or clockwise (false)

        }
        return res;
    }

}

/**
    The concentric layout positions nodes in concentric circles, based on a metric that you specify to segregate the nodes into levels.
    This layout sets the concentric layout value based on your metric, which can be used with mapLayoutData().
*/
export class GraphEditorConcentricLayout implements IGraphEditorLayout {
    public name() {
        return "concentric";
    }
    public onReady: () => void = undefined;
    public onStop: () => void = undefined;

    /**
        returns numeric value for each node, placing higher nodes in levels towards the centre
    */
    public onConcentric: () => void = function () {
        return this.degree();
    };

    /**
        the variation of concentric values in each level
    */
    public onLevelWidth: (nodes: any) => void = function (nodes) {
        return nodes.maxDegree() / 4;
    };



    private _padding: number = 30;
    /**
        Padding on fit
    */
    public get Padding(): number {
        return this._padding;
    }
    public set Padding(val: number) {
        if (val != this._padding) {
            this._padding = val;
        }
    }

    private _fit: boolean = true;
    /**
     Whether to fit the network view after when done
    */
    public get Fit(): boolean {
        return this._fit;
    }
    public set Fit(val: boolean) {
        if (val != this._fit) {
            this._fit = val;
        }
    }


    private _minNodeSpacing: number = 10;
    /**
        min spacing between outside of nodes (used for radius adjustment)
    */
    public get MinNodeSpacing(): number {
        return this._minNodeSpacing;
    }
    public set MinNodeSpacing(val: number) {
        if (val != this._minNodeSpacing) {
            this._minNodeSpacing = val;
        }
    }




    private _height: number = undefined;
    /**
        height of layout area (overrides container height)
    */
    public get Height(): number {
        return this._height;
    }
    public set Height(val: number) {
        if (val != this._height) {
            this._height = val;
        }
    }


    private _width: number = undefined;
    /**
        width of layout area (overrides container height)
    */
    public get Width(): number {
        return this._width;
    }
    public set Width(val: number) {
        if (val != this._width) {
            this._width = val;
        }
    }


    private _startAngle: number = 3 / 2 * Math.PI;
    /**
        the position of the first node
    */
    public get StartAngle(): number {
        return this._startAngle;
    }
    public set StartAngle(val: number) {
        if (val != this._startAngle) {
            this._startAngle = val;
        }
    }


    private _counterclockwise: boolean = false;
    /**
        whether the layout should go counterclockwise (true) or clockwise (false)
    */
    public get Counterclockwise(): boolean {
        return this._counterclockwise;
    }
    public set Counterclockwise(val: boolean) {
        if (val != this._counterclockwise) {
            this._counterclockwise = val;
        }
    }
    public getOptions() {
        var res = {
            name: this.name(),

            ready: this.onReady, // on layoutready
            stop: this.onStop, // on layoutstop

            fit: this.Fit, // whether to fit to viewport

            padding: this.Padding,// Padding on fit

            minNodeSpacing: this.MinNodeSpacing,     // min spacing between outside of nodes (used for radius adjustment)

            startAngle: this.StartAngle, // the position of the first node

            counterclockwise: this.Counterclockwise,   // whether the layout should go counterclockwise (true) or clockwise (false)

            height: this.Height, // height of layout area (overrides container height)

            width: this.Width, // width of layout area (overrides container width)

            concentric: this.onConcentric,// returns numeric value for each node, placing higher nodes in levels towards the centre

            levelWidth: this.onLevelWidth // the variation of concentric values in each level

        }
        return res;
    }

}

/**
    The breadthfirst layout puts nodes in a hierarchy, based on a breadthfirst traversal of the graph.
*/
export class GraphEditorBreadthfirstLayout implements IGraphEditorLayout {
    public name() {
        return "breadthfirst";
    }
    public onReady: () => void = undefined;
    public onStop: () => void = undefined;



    private _padding: number = 30;
    /**
        Padding on fit
    */
    public get Padding(): number {
        return this._padding;
    }
    public set Padding(val: number) {
        if (val != this._padding) {
            this._padding = val;
        }
    }

    private _fit: boolean = true;
    /**
        Whether to fit the network view after when done
    */
    public get Fit(): boolean {
        return this._fit;
    }
    public set Fit(val: boolean) {
        if (val != this._fit) {
            this._fit = val;
        }
    }


    private _directed: boolean = false;
    /**
        whether the tree is directed downwards (or edges can point in any direction if false)
    */
    public get Directed(): boolean {
        return this._directed;
    }
    public set Directed(val: boolean) {
        if (val != this._directed) {
            this._directed = val;
        }
    }


    private _circle: boolean = false;
    /**
        put depths in concentric circles if true, put depths top down if false
    */
    public get Circle(): boolean {
        return this._circle;
    }
    public set Circle(val: boolean) {
        if (val != this._directed) {
            this._circle = val;
        }
    }


    private _maximalAdjustments: number = 0;
    /**
        how many times to try to position the nodes in a maximal way (i.e. no backtracking)
    */
    public get MaximalAdjustments(): number {
        return this._maximalAdjustments;
    }
    public set MaximalAdjustments(val: number) {
        if (val != this._maximalAdjustments) {
            this._maximalAdjustments = val;
        }
    }



    public getOptions() {
        var res = {
            name: this.name(),

            ready: this.onReady, // on layoutready
            stop: this.onStop, // on layoutstop

            fit: this.Fit, // whether to fit to viewport

            padding: this.Padding,// Padding on fit

            directed: this.Directed, // whether the tree is directed downwards (or edges can point in any direction if false)

            circle: this.Circle, // put depths in concentric circles if true, put depths top down if false

            roots: undefined, // the roots of the trees

            maximalAdjustments: this.MaximalAdjustments // how many times to try to position the nodes in a maximal way (i.e. no backtracking)

        }
        return res;
    }

}

/**
    The cose (Compound Spring Embedder) layout uses a force-directed simulation to lay out compound graphs.
*/
export class GraphEditorCOSELayout implements IGraphEditorLayout {
    public name() {
        return "cose";
    }
    public onReady: () => void = function () { };
    public onStop: () => void = function () { };


    private _refresh: number = 0;
    /**
        Number of iterations between consecutive screen positions update (0 -> only updated on the end)
    */
    public get Refresh(): number {
        return this._refresh;
    }
    public set Refresh(val: number) {
        if (val != this._refresh) {
            this._refresh = val;
        }
    }

    private _padding: number = 30;
    /**
        Padding on fit
    */
    public get Padding(): number {
        return this._padding;
    }
    public set Padding(val: number) {
        if (val != this._padding) {
            this._padding = val;
        }
    }


    private _fit: boolean = true;
    /**
     Whether to fit the network view after when done
    */
    public get Fit(): boolean {
        return this._fit;
    }
    public set Fit(val: boolean) {
        if (val != this._fit) {
            this._fit = val;
        }
    }


    private _randomize: boolean = true;
    /** 
        Whether to randomize node positions on the beginning
    */
    public get Randomize(): boolean {
        return this._randomize;
    }


    public set Randomize(val: boolean) {
        if (val != this._randomize) {
            this._randomize = val;
        }
    }


    public getOptions() {
        var res = {
            name: this.name(),

            ready: this.onReady, // on layoutready
            stop: this.onStop, // on layoutstop

            fit: this.Fit, // whether to fit to viewport

            refresh: this.Refresh, // Number of iterations between consecutive screen positions update (0 -> only updated on the end)

            // Padding on fit
            padding: this.Padding,

            // Whether to randomize node positions on the beginning
            randomize: this.Randomize,

            // Whether to use the JS console to print debug messages
            debug: false,

            // Node repulsion (non overlapping) multiplier
            nodeRepulsion: 10000,

            // Node repulsion (overlapping) multiplier
            nodeOverlap: 10,

            // Ideal edge (non nested) length
            idealEdgeLength: 10,

            // Divisor to compute edge forces
            edgeElasticity: 100,

            // Nesting factor (multiplier) to compute ideal edge length for nested edges
            nestingFactor: 5,

            // Gravity force (constant)
            gravity: 250,

            // Maximum number of iterations to perform
            numIter: 100,

            // Initial temperature (maximum node displacement)
            initialTemp: 200,

            // Cooling factor (how the temperature is reduced between consecutive iterations
            coolingFactor: 0.95,

            // Lower temperature threshold (below this point the layout will end)
            minTemp: 1

        }
        return res;
    }

}

/**
    The arbor layout uses a force-directed physics simulation
*/
export class GraphEditorArborLayout implements IGraphEditorLayout {
    public name() {
        return "arbor";
    }
    public onReady: () => void = undefined;
    public onStop: () => void = undefined;

    /**
        Whether to fit the network view after when done
    */
    private _fit: boolean = false;
    public get Fit(): boolean {
        return this._fit;
    }
    public set Fit(val: boolean) {
        if (val != this._fit) {
            this._fit = val;
        }
    }


    private _liveUpdate: boolean = true;
    /**
        whether to show the layout as it's running 
    */
    public get LiveUpdate(): boolean {
        return this._liveUpdate;
    }
    public set LiveUpdate(val: boolean) {
        if (val != this._liveUpdate) {
            this._liveUpdate = val;
        }
    }

    private _ungrabifyWhileSimulating: boolean = false;
    /**
        so you can't drag nodes during layout
    */
    public get UngrabifyWhileSimulating(): boolean {
        return this._ungrabifyWhileSimulating;
    }
    public set UngrabifyWhileSimulating(val: boolean) {
        if (val != this._ungrabifyWhileSimulating) {
            this._ungrabifyWhileSimulating = val;
        }
    }

    private _stepSize: number = 1;
    /**
        size of timestep in simulation
    */
    public get StepSize(): number {
        return this._stepSize;
    }
    public set StepSize(val: number) {
        if (val != this._stepSize) {
            this._stepSize = val;
        }
    }

    private _maxSimulationTime: number = 4000;
    /**
        size of timestep in simulation
    */
    public get MaxSimulationTime(): number {
        return this._maxSimulationTime;
    }
    public set MaxSimulationTime(val: number) {
        if (val != this._maxSimulationTime) {
            this._maxSimulationTime = val;
        }
    }

    public getOptions() {
        var res = {
            name: this.name(),

            ready: this.onReady, // on layoutready
            stop: this.onStop, // on layoutstop

            fit: this.Fit, // whether to fit to viewport


            liveUpdate: this.LiveUpdate, // whether to show the layout as it's running   
            maxSimulationTime: this.MaxSimulationTime, // max length in ms to run the layout
            padding: [50, 50, 50, 50], // top, right, bottom, left
            simulationBounds: undefined, // [x1, y1, x2, y2]; [0, 0, width, height] by default
            ungrabifyWhileSimulating: this.UngrabifyWhileSimulating, // so you can't drag nodes during layout

            // forces used by arbor (use arbor default on undefined)
            repulsion: undefined,
            stiffness: undefined,
            friction: undefined,
            gravity: true,
            fps: undefined,
            precision: undefined,

            // static numbers or functions that dynamically return what these
            // values should be for each element
            nodeMass: undefined,
            edgeLength: undefined,

            stepSize: this.StepSize, // size of timestep in simulation

            // function that returns true if the system is stable to indicate
            // that the layout can be stopped
            stableEnergy: function (energy) {
                var e = energy;
                return (e.max <= 0.5) || (e.mean <= 0.3);
            }
        };
        return res;
    }
};

export enum ElementEnum { Node, Edge };

export class GraphElement extends VXO.TObject {


    constructor(label?: string, tiplabel?: string) {
        super();
        if (label != undefined) {
            this._label = label;
        }
        if (tiplabel != undefined) {
            this.TipLabel = tiplabel;
        }
    }


    // 'nodes' for a node, 'edges' for an edge
    private _group: ElementEnum = ElementEnum.Node;
    public get ElementType(): ElementEnum {
        return this._group;
    }
    public set ElementType(val: ElementEnum) {
        if (val != this._group) {
            this._group = val;
        }
    }

    private _label: string = '';
    /**
      Label for the element
    */
    public get Label(): string {
        return this._label;
    }
    public set Label(val: string) {
        if (val != this._label) {
            this._label = val;
            this.onChanged();
        }
    }


    private _attached: boolean = false;
    /**
      For internal use to prevent douplicated attachment of things
    */
    public get Attached(): boolean {
        return this._attached;
    }
    public set Attached(val: boolean) {
        if (val != this._attached) {
            this._attached = val;
            //this.OnChanged();
        }
    }


    private _color: string = 'black';
    /**
      color: The colour of the element's label.
    */
    public get LabelColor(): string {
        return this._color;
    }
    public set LabelColor(val: string) {
        if (val != this._color) {
            this._color = val;
            this.onChanged();
        }
    }
    private _min_zoomed_font_size: number = 4;
    /**
        If zooming makes the effective font size of the label smaller than this, then no label is shown.
    */
    public get LabelMinZoomedFontSize(): number {
        return this._min_zoomed_font_size;
    }
    public set LabelMinZoomedFontSize(val: number) {
        if (val != this._min_zoomed_font_size) {
            this._min_zoomed_font_size = val;
            this.onChanged();
        }
    }

    private _font_size: number = 10;
    /**
        font-size : The size of the label text.
    */
    public get LabelFontSize(): number {
        return this._font_size;
    }
    public set LabelFontSize(val: number) {
        if (val != this._font_size) {
            this._font_size = val;
            this.onChanged();
        }
    }

    private _selected: boolean = false;
    /**
        whether the element is selected (default false)
    */
    public get Selected(): boolean {
        return this._selected;
    }

    public set Selected(val: boolean) {
        // if (val != this._selected) {
        // I am not dealing with selected notifications....
        this._selected = val;
        this.onChanged();
        // }
    }


    private _selectable: boolean = true;
    /**
        whether the selection state is mutable (default true)
    */
    public get Selectable(): boolean {
        return this._selectable;
    }

    public set Selectable(val: boolean) {
        if (val != this._selectable) {
            this._selectable = val;
            this.onChanged();
        }
    }


    private _menuRadius: number = 100;
    /**
        the radius of the circular menu in pixels
    */
    public get MenuRadius(): number {
        return this._menuRadius;
    }
    public set MenuRadius(val: number) {
        if (val != this._menuRadius) {
            this._menuRadius = val;
            //this.OnChanged();
        }
    }


    private _activePadding: number = 20;
    /**
        additional size in pixels for the active command
    */
    public get MenuActivePadding(): number {
        return this._activePadding;
    }
    public set MenuActivePadding(val: number) {
        if (val != this._activePadding) {
            this._activePadding = val;
            //this.OnChanged();
        }
    }

    private _indicatorSize: number = 24;
    /**
        the size in pixels of the pointer to the active command
    */
    public get MenuIndicatorSize(): number {
        return this._indicatorSize;
    }
    public set MenuIndicatorSize(val: number) {
        if (val != this._indicatorSize) {
            this._indicatorSize = val;
            //this.OnChanged();
        }
    }

    private _separatorWidth: number = 3;
    /**
        the empty spacing in pixels between successive commands
    */
    public get MenuSeparatorWidth(): number {
        return this._separatorWidth;
    }
    public set MenuSeparatorWidth(val: number) {
        if (val != this._separatorWidth) {
            this._separatorWidth = val;
            //this.OnChanged();
        }
    }

    private _spotlightPadding: number = 4;
    /**
        extra spacing in pixels between the element and the spotlight
    */
    public get MenuSpotlightPadding(): number {
        return this._spotlightPadding;
    }
    public set MenuSpotlightPadding(val: number) {
        if (val != this._spotlightPadding) {
            this._spotlightPadding = val;
            //this.OnChanged();
        }
    }


    private _minSpotlightRadius: number = 24;
    /**
        the minimum radius in pixels of the spotlight
    */
    public get MenuMinSpotlightRadius(): number {
        return this._minSpotlightRadius;
    }
    public set MenuMinSpotlightRadius(val: number) {
        if (val != this._minSpotlightRadius) {
            this._minSpotlightRadius = val;
            //this.OnChanged();
        }
    }

    private _maxSpotlightRadius: number = 38;
    /**
        the maximum radius in pixels of the spotlight
    */
    public get MenuMaxSpotlightRadius(): number {
        return this._maxSpotlightRadius;
    }
    public set MenuMaxSpotlightRadius(val: number) {
        if (val != this._maxSpotlightRadius) {
            this._maxSpotlightRadius = val;
            //this.OnChanged();
        }
    }

    private _zIndex: number = 9999;
    /**
        the z-index of the ui div
    */
    public get MenuzIndex(): number {
        return this._zIndex;
    }
    public set MenuzIndex(val: number) {
        if (val != this._zIndex) {
            this._zIndex = val;
            //this.OnChanged();
        }
    }


    private _fillColor: string = 'rgba(0, 0, 0, 0.75)';
    /**
      the background colour of the menu
    */
    public get MenuFillColor(): string {
        return this._fillColor;
    }
    public set MenuFillColor(val: string) {
        if (val != this._fillColor) {
            this._fillColor = val;
            //this.OnChanged();
        }
    }

    private _activeFillColor: string = 'rgba(92, 194, 237, 0.75)';
    /**
      the colour used to indicate the selected command
    */
    public get MenuActiveFillColor(): string {
        return this._activeFillColor;
    }
    public set MenuActiveFillColor(val: string) {
        if (val != this._activeFillColor) {
            this._activeFillColor = val;
            //this.OnChanged();
        }
    }


    private _itemColor: string = 'white';
    /**
      the colour of text in the command's content
    */
    public get MenuItemColor(): string {
        return this._itemColor;
    }
    public set MenuItemColor(val: string) {
        if (val != this._itemColor) {
            this._itemColor = val;
            //this.OnChanged();
        }
    }

    private _itemTextShadowColor: string = 'black';
    /**
        the text shadow colour of the command's content
    */
    public get MenuItemTextShadowColor(): string {
        return this._itemTextShadowColor;
    }
    public set MenuItemTextShadowColor(val: string) {
        if (val != this._itemTextShadowColor) {
            this._itemTextShadowColor = val;
            //this.OnChanged();
        }
    }


    private _positionmyH: V.GraphTipPositionHEnum = V.GraphTipPositionHEnum.Center;
    /**
        Which tooltip corner should be positioned see at http://qtip2.com/demos
        horizontal
    */
    public get TipPositionmyH(): V.GraphTipPositionHEnum {
        return this._positionmyH;
    }
    public set TipPositionmyH(val: V.GraphTipPositionHEnum) {
        if (val != this._positionmyH) {
            this._positionmyH = val;
            this.onChanged();
        }
    }


    private _positionmyV: V.GraphTipPositionVEnum = V.GraphTipPositionVEnum.Top;
    /**
        Which tooltip corner should be positioned - see at http://qtip2.com/demos
        vertical
    */
    public get TipPositionmyV(): V.GraphTipPositionVEnum {
        return this._positionmyV;
    }
    public set TipPositionmyV(val: V.GraphTipPositionVEnum) {
        if (val != this._positionmyV) {
            this._positionmyV = val;
            this.onChanged();
        }
    }


    private _positionatH: V.GraphTipPositionHEnum = V.GraphTipPositionHEnum.Center;
    /**
        Which corner of the target should I diplay at  - see at http://qtip2.com/demos
        horizontal
    */
    public get TipPositionatH(): V.GraphTipPositionHEnum {
        return this._positionatH;
    }
    public set TipPositionatH(val: V.GraphTipPositionHEnum) {
        if (val != this._positionatH) {
            this._positionatH = val;
            this.onChanged();
        }
    }

    private _positionatV: V.GraphTipPositionVEnum = V.GraphTipPositionVEnum.Bottom;
    /**
        Which corner of the target should I diplay at  - see at http://qtip2.com/demos
        vertical
    */
    public get TipPositionatV(): V.GraphTipPositionVEnum {
        return this._positionatV;
    }
    public set TipPositionatV(val: V.GraphTipPositionVEnum) {
        if (val != this._positionatV) {
            this._positionatV = val;
            this.onChanged();
        }
    }



    private _TipHeight: number = 8;
    /**
        height : The height of the tip's body.
    */
    public get TipHeight(): number {
        return this._TipHeight;
    }
    public set TipHeight(val: number) {
        if (val != this._TipHeight) {
            this._TipHeight = val;
            this.onChanged();
        }
    }

    private _TipWidth: number = 16;
    /**
        width : The width of the tip's body.
    */
    public get TipWidth(): number {
        return this._TipWidth;
    }
    public set TipWidth(val: number) {
        if (val != this._TipWidth) {
            this._TipWidth = val;
            this.onChanged();
        }
    }

    private _TipLabel: string = null;
    /**
        Label for the tip
    */
    public get TipLabel(): string {
        return this._TipLabel;
    }
    public set TipLabel(val: string) {
        if (val != this._TipLabel) {
            this._TipLabel = val;
            this.onChanged();
        }
    }

    private _cyViewport: boolean = true;
    /**
        When true, updates element qTip position on zoom and pan. Note you'll need your own mechanism to hide out-of-bounds qTips,
        such as customising the parent container.
    */
    public get TipCyViewport(): boolean {
        return this._cyViewport;
    }
    public set TipCyViewport(val: boolean) {
        if (val != this._cyViewport) {
            this._cyViewport = val;
        }
    }

    private _actions = [];

    public addAction(text: string, onAction: (evt: GraphElement) => void) {
        var self = this;
        this._actions.push(
            {
                content: text,
                select: function () {
                    onAction(self);
                }
            }
            );
        this.onChanged();
    }

    public resetActions() {
        this._actions = [];
        this.onChanged();
    }

    public get Actions() {
        return this._actions;
    }

    private _father: TGraphEditor = null;

    private _changed: boolean = false;

    public get Changed(): boolean {
        return this._changed;
    }
    public set Changed(val: boolean) {
        if (val != this._changed) {
            this._changed = val;
        }
    }
    public onChanged() {
        this.Changed = true;
        if (this._father != null) {
            this._father.drawDelayed(false);
        }
    }
    public getObject() { }

    public getMenuObject() {
        var res =
            {
                menuRadius: this.MenuRadius,
                selector: '#' + this.ID,
                commands: this.Actions,
                fillColor: this.MenuFillColor, // the background colour of the menu
                activeFillColor: this.MenuActiveFillColor, // the colour used to indicate the selected command
                activePadding: this.MenuActivePadding, // additional size in pixels for the active command
                indicatorSize: this.MenuIndicatorSize, // the size in pixels of the pointer to the active command
                separatorWidth: this.MenuSeparatorWidth, // the empty spacing in pixels between successive commands
                spotlightPadding: this.MenuSpotlightPadding, // extra spacing in pixels between the element and the spotlight
                minSpotlightRadius: this.MenuMinSpotlightRadius, // the minimum radius in pixels of the spotlight
                maxSpotlightRadius: this.MenuMaxSpotlightRadius, // the maximum radius in pixels of the spotlight
                itemColor: this.MenuItemColor, // the colour of text in the command's content
                itemTextShadowColor: this.MenuItemTextShadowColor, // the text shadow colour of the command's content
                zIndex: this.MenuzIndex // the z-index of the ui div
            };
        return res;
    }

    public getTipObject() {
        var res = {
            content: this.TipLabel,
            position: {
                my: V.GraphTipPositionVEnum[this.TipPositionmyV] + ' ' + V.GraphTipPositionVEnum[this.TipPositionmyH],
                at: V.GraphTipPositionVEnum[this.TipPositionatV] + ' ' + V.GraphTipPositionVEnum[this.TipPositionatH],
                adjust:
                {
                    cyViewport: this.TipCyViewport //When true, updates element qTip position on zoom and pan. Note you'll need your own mechanism
                    //to hide out-of-bounds qTips, such as customising the parent container.
                }
            },
            show: {
                //cyBgOnly: false //When true, shows core qTips only for events originated on the core (not bubbled). Useful for "background" events
                //delay: 0,
                //event: false,
                //ready: true,
                //effect: false
            },
            hide: {
                //fixed: true,
                //event: false,
                //inactive: 2000
                //cyBgOnly: false //When true, hides core qTips only for events originated on the core (not bubbled). Useful for "background" events
            },
            style: {
                classes: 'qtip-bootstrap',
                tip: {
                    width: this.TipWidth,
                    height: this.TipHeight
                }
            }
        };
        return res;
    }


}




export class GraphEdge extends GraphElement {
    constructor(source?: string, target?: string, label?: string, tiplabel?: string) {
        super(label, tiplabel);
        this.ElementType = ElementEnum.Edge;
        if (source != undefined) {
            this.Source = source;
        }
        if (target != undefined) {
            this.Target = target;
        }
    }

    private _target_arrow_fill: V.GraphEdgeArrowFillEnum = V.GraphEdgeArrowFillEnum.filled;
    /**
        The fill state of the edge's target arrow; may be filled or hollow.
    */
    public get TargetArrowFill(): V.GraphEdgeArrowFillEnum {
        return this._target_arrow_fill;
    }
    public set TargetArrowFill(val: V.GraphEdgeArrowFillEnum) {
        if (val != this._target_arrow_fill) {
            this._target_arrow_fill = val;
            this.onChanged();
        }
    }

    private _source_arrow_fill: V.GraphEdgeArrowFillEnum = V.GraphEdgeArrowFillEnum.filled;
    /**
        The fill state of the edge's source arrow; may be filled or hollow.
    */
    public get SourceArrowFill(): V.GraphEdgeArrowFillEnum {
        return this._source_arrow_fill;
    }
    public set SourceArrowFill(val: V.GraphEdgeArrowFillEnum) {
        if (val != this._source_arrow_fill) {
            this._source_arrow_fill = val;
            this.onChanged();
        }
    }



    private _target_arrow_shape: V.GraphEdgeArrowTypeEnum = V.GraphEdgeArrowTypeEnum.triangle;
    /**
        The shape of the edge's arrow on the target side; may be tee, triangle, square, circle, diamond, or none.
    */
    public get TargetArrowShape(): V.GraphEdgeArrowTypeEnum {
        return this._target_arrow_shape;
    }
    public set TargetArrowShape(val: V.GraphEdgeArrowTypeEnum) {
        if (val != this._target_arrow_shape) {
            this._target_arrow_shape = val;
            this.onChanged();
        }
    }

    private _source_arrow_shape: V.GraphEdgeArrowTypeEnum = V.GraphEdgeArrowTypeEnum.triangle;
    /**
        The shape of the edge's arrow on the source side; may be tee, triangle, square, circle, diamond, or none.
    */
    public get SourceArrowShape(): V.GraphEdgeArrowTypeEnum {
        return this._source_arrow_shape;
    }
    public set SourceArrowShape(val: V.GraphEdgeArrowTypeEnum) {
        if (val != this._source_arrow_shape) {
            this._source_arrow_shape = val;
            this.onChanged();
        }
    }


    private _line_style: V.GraphEdgeLineStyleEnum = V.GraphEdgeLineStyleEnum.solid;
    /**
        line-style : The style of the edge's line; may be solid, dotted, or dashed.
    */
    public get LineStyle(): V.GraphEdgeLineStyleEnum {
        return this._line_style;
    }
    public set LineStyle(val: V.GraphEdgeLineStyleEnum) {
        if (val != this._line_style) {
            this._line_style = val;
            this.onChanged();
        }
    }


    private _width: number = 1;
    /**
        width : The width of the line.
    */
    public get Width(): number {
        return this._width;
    }
    public set Width(val: number) {
        if (val != this._width) {
            this._width = val;
            this.onChanged();
        }
    }


    private _source_arrow_color: string = 'black';
    /**
        source-arrow-color : The colour of the edge's arrow on the source side.
    */
    public get SourceArrowColor(): string {
        return this._source_arrow_color;
    }
    public set SourceArrowColor(val: string) {
        if (val != this._source_arrow_color) {
            this._source_arrow_color = val;
            this.onChanged();
        }
    }

    private _target_arrow_color: string = 'black';
    /**
      target-arrow-color : The colour of the edge's arrow on the target side.
    */
    public get TargetArrowColor(): string {
        return this._target_arrow_color;
    }
    public set TargetArrowColor(val: string) {
        if (val != this._target_arrow_color) {
            this._target_arrow_color = val;
            this.onChanged();
        }
    }


    private _line_color: string = 'black';
    /**
      line-color : The colour of the edge's line.
    */
    public get Color(): string {
        return this._line_color;
    }
    public set Color(val: string) {
        if (val != this._line_color) {
            this._line_color = val;
            this.onChanged();
        }
    }


    private _curve_style: V.GraphEdgeCurveStyleEnum = V.GraphEdgeCurveStyleEnum.bezier;
    /**
        curve-style : The curving method used to separate two or more edges between two nodes; may be bezier (default) or haystack
         (for which loops are unsupported). Note that haystack edges work best with ellipse, rectangle, or similar nodes. 
        Smaller node shapes, like triangle, will not be as aesthetically pleasing. Also note that edge arrows are unsupported for 
        haystack edges.
    */

    public get CurveStyle(): V.GraphEdgeCurveStyleEnum {
        return this._curve_style;
    }
    public set CurveStyle(val: V.GraphEdgeCurveStyleEnum) {
        if (val != this._curve_style) {
            this._curve_style = val;
            this.onChanged();
        }
    }


    // the source node id (edge comes from this node)
    private _source: string = undefined;
    public get Source(): string {
        return this._source;
    }
    public set Source(val: string) {
        if (val != this._source) {
            this._source = val;
            this.onChanged();
        }
    }

    // the target node id (edge goes to this node)
    private _target: string = undefined;
    public get Target(): string {
        return this._target;
    }
    public set Target(val: string) {
        if (val != this._target) {
            this._target = val;
            this.onChanged();
        }
    }



    public getObject() {
        var res =
            {
                group: ((this.ElementType == ElementEnum.Node) ? 'nodes' : 'edges'), // 'nodes' for a node, 'edges' for an edge

                // NB: id fields must be strings
                data: { // element data (put dev data here)
                    id: this.ID, // mandatory for each element, assigned automatically on undefined
                    source: this.Source, // the source node id (edge comes from this node)
                    target: this.Target,  // the target node id (edge goes to this node)
                    label: this.Label
                },

                selected: this.Selected, // whether the element is selected (default false)

                selectable: this.Selectable, // whether the selection state is mutable (default true)

                css: this.getStyle()
            };
        return res;
    }

    private getStyle() {
        var res =
            {
                //The curving method used to separate two or more edges between two nodes; may be bezier (default) or haystack 
                // (for which loops are unsupported). Note that haystack edges work best with ellipse, rectangle, or similar nodes. Smaller 
                // node shapes, like triangle, will not be as aesthetically pleasing.Also note that edge arrows are unsupported for 
                // haystack edges.
                'curve-style': V.GraphEdgeCurveStyleEnum[this.CurveStyle],

                //line-style : The style of the edge's line; may be solid, dotted, or dashed.
                'line-style': V.GraphEdgeLineStyleEnum[this.LineStyle],

                //The colour of the edge's line.
                'line-color': this.Color,

                'width': this.Width,// "mapData(weight, 0, 100, 1, 4)",

                //The colour of the edge's arrow on the source side.
                'source-arrow-color': this.SourceArrowColor,

                //The colour of the edge's arrow on the target side.
                'target-arrow-color': this.TargetArrowColor,

                //The shape of the edge's arrow on the source side; may be tee, triangle, square, circle, diamond, or none.
                'source-arrow-shape': V.GraphEdgeArrowTypeEnum[this.SourceArrowShape],

                //The shape of the edge's arrow on the target side; may be tee, triangle, square, circle, diamond, or none.
                'target-arrow-shape': V.GraphEdgeArrowTypeEnum[this.TargetArrowColor],

                'source-arrow-fill': V.GraphEdgeArrowFillEnum[this.SourceArrowFill],

                'target-arrow-fill': V.GraphEdgeArrowFillEnum[this.TargetArrowFill],

                'content': 'data(label)',
                'font-size': this.LabelFontSize,
                'min-zoomed-font-size': this.LabelMinZoomedFontSize
            }
        return res;
    }
}




export class GraphNode extends GraphElement {


    constructor(label?: string, background_image?: string, tiplabel?: string) {
        super(label, tiplabel);
        if (background_image != undefined) {
            this._background_image = background_image;
        }

        this.ElementType = ElementEnum.Node;
    }



    private _background_color: string = 'black';
    /**
      background-color : The colour of the node's body.
    */
    public get BackgroundColor(): string {
        return this._background_color;
    }
    public set BackgroundColor(val: string) {
        if (val != this._background_color) {
            this._background_color = val;
            this.onChanged();
        }
    }



    private _height: number = 130;
    /**
    height : The height of the node's body.
    */
    public get Height(): number {
        return this._height;
    }
    public set Height(val: number) {
        if (val != this._height) {
            this._height = val;
            this.onChanged();
        }
    }

    private _width: number = 100;
    /**
    width : The width of the node's body.
    */
    public get Width(): number {
        return this._width;
    }
    public set Width(val: number) {
        if (val != this._width) {
            this._width = val;
            this.onChanged();
        }
    }


    private _text_valign: V.GraphNodeLabelVerticalAlignmentEnum = V.GraphNodeLabelVerticalAlignmentEnum.bottom;
    /**
        The vertical alignment of a label; may have value top, center, or bottom.
    */
    public get LabelTextValign(): V.GraphNodeLabelVerticalAlignmentEnum {
        return this._text_valign;
    }
    public set LabelTextValign(val: V.GraphNodeLabelVerticalAlignmentEnum) {
        if (val != this._text_valign) {
            this._text_valign = val;
            this.onChanged();
        }
    }

    private _text_halign: V.GraphNodeLabelHorizAlignmentEnum = V.GraphNodeLabelHorizAlignmentEnum.center;
    /**
        The horizontal alignment of a label; may have value left, center, or right.
    */
    public get LabelTextHalign(): V.GraphNodeLabelHorizAlignmentEnum {
        return this._text_halign;
    }
    public set LabelTextHalign(val: V.GraphNodeLabelHorizAlignmentEnum) {
        if (val != this._text_halign) {
            this._text_halign = val;
            this.onChanged();
        }
    }




    private _background_image: string = undefined;
    /**
      The URL that points to the image that should be used as the node's background. PNG, JPG, and SVG are supported formats.
    */
    public get BackgroundImage(): string {
        return this._background_image;
    }
    public set BackgroundImage(val: string) {
        if (val != this._background_image) {
            this._background_image = val;
            this.onChanged();
        }
    }

    private _background_opacity: number = 0;
    /**
        The opacity level of the node's body. Opacity values are specified as numbers ranging on 0 <= opacity <= 1
    */
    public get BackgroundOpacity(): number {
        return this._background_opacity;
    }
    public set BackgroundOpacity(val: number) {
        if (val != this._background_opacity) {
            this._background_opacity = val;
            this.onChanged();
        }
    }


    private _shape: V.GraphNodeShapeEnum = V.GraphNodeShapeEnum.roundrectangle;
    /**
        The shape of the node's body; may be rectangle, roundrectangle, ellipse, triangle, pentagon, hexagon, heptagon, 
        octagon, star. Note that each shape fits within the specified width and height, and so you may have to adjust 
        width and height if you desire an equilateral shape (i.e. width !== height for several equilateral shapes).
    */
    public get Shape(): V.GraphNodeShapeEnum {
        return this._shape;
    }
    public set Shape(val: V.GraphNodeShapeEnum) {
        if (val != this._shape) {
            this._shape = val;
            this.onChanged();
        }
    }


    private _parent: string = undefined;
    public get Parent(): string {
        return this._parent;
    }
    public set Parent(val: string) {
        if (val != this._parent) {
            this._parent = val;
            this.onChanged();
        }
    }


    private _positionX: number = 100;
    /**
        the model position of the node (optional on init, mandatory after)
    */
    public get PositionX(): number {
        return this._positionX;
    }
    public set PositionX(val: number) {
        if (val != this._positionX) {
            this._positionX = val;
            this.onChanged();
        }
    }
    private _positionY: number = 100;
    /**
        the model position of the node (optional on init, mandatory after)
    */
    public get PositionY(): number {
        return this._positionY;
    }
    public set PositionY(val: number) {
        if (val != this._positionY) {
            this._positionY = val;
            this.onChanged();
        }
    }






    private _locked: boolean = false;
    /**
        when locked a node's position is immutable (default false)
    */
    public get Locked(): boolean {
        return this._locked;
    }

    public set Locked(val: boolean) {
        if (val != this._locked) {
            this._locked = val;
            this.onChanged();
        }
    }


    private _grabbable: boolean = true;
    /**
        whether the node can be grabbed and moved by the user
    */
    public get Grabbable(): boolean {
        return this._grabbable;
    }

    public set Grabbable(val: boolean) {
        if (val != this._grabbable) {
            this._grabbable = val;
            this.onChanged();
        }
    }


    private _classes: string = "";
    /**
        a space separated list of class names that the element has
    */
    public get Classes(): string {
        return this._classes;
    }
    public set Classes(val: string) {
        if (val != this._classes) {
            this._classes = val;
            this.onChanged();
        }
    }


    public getObject() {
        var res =
            { // node n1
                group: ((this.ElementType == ElementEnum.Node) ? 'nodes' : 'edges'), // 'nodes' for a node, 'edges' for an edge

                // NB: id fields must be strings
                data: { // element data (put dev data here)
                    id: this.ID, // mandatory for each element, assigned automatically on undefined
                    parent: this.Parent, // indicates the compound node parent id; not defined => no parent
                    label: this.Label
                },

                position: { // the model position of the node (optional on init, mandatory after)
                    x: this.PositionX,
                    y: this.PositionY
                },

                // renderedPosition: { x: 200, y: 200 } // can alternatively specify position in rendered on-screen pixels

                selected: this.Selected, // whether the element is selected (default false)

                selectable: this.Selectable, // whether the selection state is mutable (default true)

                locked: this.Locked, // when locked a node's position is immutable (default false)

                grabbable: this.Grabbable, // whether the node can be grabbed and moved by the user

                classes: this.Classes, // a space separated list of class names that the element has

                color: this.LabelColor,


                // NB: you should only use `css` for very special cases; use classes instead
                css: this.getStyle()
            };
        return res;
    }

    private getStyle() {
        var res =
            {
                'background-image': this.BackgroundImage,
                'background-fit': 'cover',
                'shape': V.GraphNodeShapeEnum[this.Shape],
                'background-opacity': this.BackgroundOpacity,
                'content': 'data(label)',
                'font-size': this.LabelFontSize,
                'min-zoomed-font-size': this.LabelMinZoomedFontSize,
                //'text-outline-width': 1,
                //'text-outline-color': ' ',
                'text_halign': V.GraphNodeLabelHorizAlignmentEnum[this.LabelTextHalign],
                'text-valign': V.GraphNodeLabelVerticalAlignmentEnum[this.LabelTextValign],

                'width': this.Width,//'mapData(weight, 30, 80, 20, 50)',
                'height': this.Height,//'mapData(height, 0, 200, 10, 45)',
                'border-color': '#fff',
                'background-color': this.BackgroundColor //The colour of the node's body.
            }
        return res;
    }
}



export class TGraphEditor extends VXC.TComponent {
    public create() {
        var self = this;
        super.create();
        if (!this.parentInitialized()) return;
        require(["VCL/Scripts/cytoscape/arbor"], (arbor) => { });

        require(["VCL/Scripts/css.js!VCL/Scripts/cytoscape/jquery.qtip.css"], (qtipcss) => { });

        require(["VCL/Scripts/css.js!VCL/Scripts/cytoscape/cytoscape.js-navigator.css"], (navcss) => { });

        require(["VCL/Scripts/css.js!VCL/Scripts/cytoscape/cytoscape.js-panzoom.css"], (navcss) => { });

        require(["VCL/Scripts/cytoscape/cytoscape.min"], (cyt) => {
            if (!this.parentInitialized()) return;

            //this.updateElements();
            if (self.cytoscapeObj == null) {
                // 
                self.cytoscapeObj = (<any>(self.jComponent)).cytoscape(
                    {
                        //A HTML DOM element in which the graph should be rendered. This is optional if Cytoscape.js 
                        // is run headlessly or if you initialise using jQuery (in which case your jQuery object 
                        // already has an associated DOM element).
                        //container: self.jComponent,

                        //A string indicating the selection behaviour from user input. By default, this is set automatically 
                        // for you based on the type of input device detected.On touch devices, 'additive' is default — 
                        // a new selection made by the user adds to the set of currenly selected elements.On mouse - 
                        // input devices, 'single' is default — a new selection made by the user becomes the entire set 
                        //of currently selected elements(i.e.the previous elements are unselected).
                        //selectionType: (isTouchDevice ? 'additive' : 'single'),
                        layout: self._layout.getOptions(),
                        zoom: self.Zoom,
                        minZoom: self.MinZoom,
                        maxZoom: self.MaxZoom,
                        zoomingEnabled: self.ZoomingEnabled,
                        userZoomingEnabled: self.UserZoomingEnabled,
                        pan: { x: self.PanX, y: self.PanY },
                        panningEnabled: self.PanningEnabled,
                        userPanningEnabled: self.UserPanningEnabled,
                        autoungrabifyNodes: self.AutoungrabifyNodes,
                        hideEdgesOnViewport: self.HideEdgesOnViewport,
                        hideLabelsOnViewport: self.HideLabelsOnViewport,
                        textureOnViewport: self.TextureOnViewport,

                        // A plain object containing options for the renderer to be used. The options.renderer.name 
                        // field specifies which renderer is used.You need not specify anything for the renderer option, 
                        // unless you want to specify one of the rendering options below:
                        //    renderer.name : The name of the renderer to use. By default, the 'canvas' renderer is used.
                        //    If you build and register your own renderer, then you can specify its name here.
                        // renderer: { /* ... */ },
                        style: [
                            {
                                selector: '.faded',
                                css:
                                {
                                    'opacity': 0.25,
                                    'text-opacity': 0.85
                                }
                            }
                            , {
                                selector: ':selected',
                                css: {
                                    'background-color': '#000',
                                    'line-color': '#000',
                                    'target-arrow-color': '#000',
                                    'text-outline-color': '#000',
                                    'opacity': 1,
                                    'text-opacity': 1
                                }
                            }
                        ],
                        ready: this.onReady,
                        initrender: this.onInitrender,
                        elements: {
                            nodes: [],//this.GetObjectsArray(this._nodesObj),
                            edges: []//this.GetObjectsArray(this._edgesObj)
                        }
                    }
                    );


                require(["VCL/Scripts/cytoscape/jquery.qtip"], (qtip) => {
                    require(["VCL/Scripts/cytoscape/cytoscape.js-qtip"], function (cmenu) {
                        require(["VCL/Scripts/cytoscape/cytoscape.js-cxtmenu"], function (cmenu) {
                            require(["VCL/Scripts/cytoscape/cytoscape.js-navigator.js"], function (cmenu) {
                                require(["VCL/Scripts/cytoscape/cytoscape.js-panzoom.js"], function (cmenu) {
                                    if (!($('.cytoscape-navigator').length)) {
                                        // if not yet has been created
                                        (<any>(self.jComponent)).cytoscapeNavigator({
                                            container: null,// ((self._navigatorContainer == null) ? <any>false : <any>self._navigatorContainer),
                                            viewLiveFramerate: self.NavigatorViewLiveFramerate,
                                            thumbnailEventFramerate: self.NavigatorThumbnailEventFramerate,
                                            thumbnailLiveFramerate: self.NavigatorThumbnailLiveFramerate,
                                            dblClickDelay: self.NavigatorDblClickDelay
                                        });
                                    }
                                    self.NavigatorDisplay = false;

                                    var defaults = {
                                        zoomFactor: self.PanzoomZoomFactor, // zoom factor per zoom tick
                                        zoomDelay: self.PanzoomZoomDelay, // how many ms between zoom ticks
                                        minZoom: self.PanzoomMinZoom, // min zoom level
                                        maxZoom: self.PanzoomMaxZoom, // max zoom level
                                        fitPadding: self.PanzoomFitPadding, // padding when fitting
                                        panSpeed: self.PanzoomPanSpeed, // how many ms in between pan ticks
                                        panDistance: self.PanzoomPanDistance, // max pan distance per tick
                                        panDragAreaSize: self.PanzoomPanDragAreaSize, // the length of the pan drag box in which the vector for panning is calculated (bigger = finer control of pan speed and direction)
                                        panMinPercentSpeed: self.PanzoomPanMinPercentSpeed, // the slowest speed we can pan by (as a percent of panSpeed)
                                        panInactiveArea: self.PanzoomPanInactiveArea, // radius of inactive area in pan drag box
                                        panIndicatorMinOpacity: self.PanzoomPanIndicatorMinOpacity, // min opacity of pan indicator (the draggable nib); scales from this to 1.0
                                        autodisableForMobile: self.PanzoomAutodisableForMobile, // disable the panzoom completely for mobile (since we don't really need it with gestures like pinch to zoom)

                                        // icon class names
                                        sliderHandleIcon: 'icon icon-minus',
                                        zoomInIcon: 'icon icon-plus',
                                        zoomOutIcon: 'icon icon-minus',
                                        resetIcon: 'icon icon-expand'
                                    };

                                    (<any>(self.jComponent)).cytoscapePanzoom(defaults);
                                    /*
                                    self.cytoscapeObj.on('tap', 'node', function (e) {
                                        var node = e.cyTarget;
                                        var nodeObj: GraphNode = self.getNodeByID(node._private.data.id);

                                        self.AttachMenuTip(nodeObj, node,'tap');
                                    });


                                    self.cytoscapeObj.on('cxttap', 'node', function (e) {
                                        var node = e.cyTarget;
                                        var nodeObj: GraphNode = self.getNodeByID(node._private.data.id);

                                        self.AttachMenuTip(nodeObj, node, 'cxttap');
                                    });
                                    
                                    self.cytoscapeObj.on('tap', 'edge', function (e) {
                                        var edge = e.cyTarget;
                                        var edgeObj: GraphEdge = self.getEdgeByID(edge._private.data.id);

                                        self.AttachMenuTip(edgeObj, edge,'tap');
                                    });

                                    self.cytoscapeObj.on('cxttap', 'edge', function (e) {
                                        var edge = e.cyTarget;
                                        var edgeObj: GraphEdge = self.getEdgeByID(edge._private.data.id);

                                        self.AttachMenuTip(edgeObj, edge, 'cxttap');
                                    });
                                    */
                                    self.drawDelayed(true);
                                });
                            });
                        });

                    });
                });




            }
        });



        this.onReady = function (evt: any) {
            self.cytoscapeObj = evt.cy;

            self.cytoscapeObj.boxSelectionEnabled(self._boxSelectionEnabled);

            self.cytoscapeObj.elements().unselectify();

            self.cytoscapeObj.resize();

            self.setOuterStyles();




            //http://stackoverflow.com/questions/21019184/how-to-use-tooltip-javascript-libraryqtip-js-together-with-cytoscape-js
            self.cytoscapeObj.on('tap', 'node', function (e) {
                var node = e.cyTarget;

                //node.qtip(self.getNodeByID(node._private.data.id).getTipObject());

                var neighborhood = node.neighborhood().add(node);

                evt.cy.elements().addClass('faded');
                neighborhood.removeClass('faded');
            });

            self.cytoscapeObj.on('tap', function (e) {
                if (e.cyTarget == self.cytoscapeObj) {
                    evt.cy.elements().removeClass('faded');
                }
            })
        }


    }



    private attachMenuTip(elObj: GraphElement, el: any) {

        // causes to failure of cytoscape
        //$('.cxtmenu', self.jComponent).remove();

        if (!elObj.Attached) {
            if (elObj.Actions.length > 0) {
                (<any>(this.jComponent)).cytoscapeCxtmenu(elObj.getMenuObject());
            }
            if (elObj.getTipObject().content != null) {
                el.qtip(elObj.getTipObject());
            }

        }
    }

    private getObjectsArray(els: GraphElement[]) {
        var elements: any = [];
        for (var i = 0; i < els.length; i++) {
            elements.push(els[i].getObject());
        }
        return elements;
    }

    /*  private GetUpdatedObjectsArray() {

          var firstTime: boolean = true;
          var str: string='';

          for (var i = 0; i < this._nodesObj.length; i++) {
              if (this._nodesObj[i].Changed) {
                  if (firstTime) {
                      firstTime = false;
                  }
                  else {
                      str += ',';
                  }
                  str += '"' + this._nodesObj[i].Id + '":' + JSON.stringify(this._nodesObj[i].getObject());
                  this._nodesObj[i].Changed = false;
              }
          }

          for (var i = 0; i < this._edgesObj.length; i++) {
              if (this._edgesObj[i].Changed) {
                  if (firstTime) {
                      firstTime = false;
                  }
                  else {
                      str += ',';
                  }
                  str += '"' + this._edgesObj[i].Id + '":' + JSON.stringify(this._edgesObj[i].getObject());
                  this._edgesObj[i].Changed = false;
              }
          }

          if (firstTime) {
              return null;
          }
          else {
              return JSON.parse('{' + str + '}');
          }
      }*/

    public draw(reCreate: boolean) {
        var self = this;
        super.draw(reCreate);
        if (this.cytoscapeObj != undefined && this.cytoscapeObj != null) {

            // var updateObj = this.GetUpdatedObjectsArray();
            // if (updateObj != null) {
            //     self.cytoscape.batchData(updateObj);
            // }


            this.setOuterStyles();

            if (this.synchronizeElements() || reCreate) {
                this.cytoscapeObj.layout(this._layout.getOptions());
                this.synchronizeNodePositions();
            }

            var div: any = $('.cytoscape-navigator');
            if (this._navigatorDisplay) {
                div[0].style.display = "block";
            }
            else {
                div[0].style.display = "none";
            }


            //this.cytoscape.resize();
        }
    }

    private setOuterStyles() {
        this.jComponent.css('background', this.BackgroundColor);

    }

    private synchronizeNodePositions() {
        for (var i = 0; i < this._nodesObj.length; i++) {
            var el = this.cytoscapeObj.nodes('#' + this._nodesObj[i].ID)[0];
            this._nodesObj[i].PositionX = el._private.position.x;
            this._nodesObj[i].PositionY = el._private.position.y;
            this._nodesObj[i].Changed = false;
        }
    }

    private synchronizeElements(): boolean {
        var self = this;
        var changelayout: boolean = false;

        if (this.cytoscapeObj != undefined && this.cytoscapeObj != null) {

            // remove old
            var nodes = this.cytoscapeObj.$('node');
            for (var i = 0; i < nodes.length; i++) {
                if (this.getNodeByID(nodes[i]._private.data.id) == null) {
                    self.cytoscapeObj.remove(nodes[i]);
                    changelayout = true;
                }
            }

            var edges = this.cytoscapeObj.$('edge');
            for (var i = 0; i < edges.length; i++) {
                if (this.getEdgeByID(edges[i]._private.data.id) == null) {
                    self.cytoscapeObj.remove(edges[i]);
                    changelayout = true;
                }
            }


            // add new
            for (var i = 0; i < this._nodesObj.length; i++) {
                var elar = this.cytoscapeObj.getElementById(this._nodesObj[i].ID);
                if (elar.length == 0) {
                    this.cytoscapeObj.add(this._nodesObj[i].getObject());
                    self.attachMenuTip(this._nodesObj[i], this.cytoscapeObj.getElementById(this._nodesObj[i].ID));
                    changelayout = true;
                } else {
                    if (this._nodesObj[i].Changed) {
                        this._nodesObj[i].Changed = false;
                        self.cytoscapeObj.remove(elar);
                        this.cytoscapeObj.add(this._nodesObj[i].getObject());
                    }
                }
            }

            for (var i = 0; i < this._edgesObj.length; i++) {
                var elar = this.cytoscapeObj.getElementById(this._edgesObj[i].ID);
                if (elar.length == 0) {
                    this.cytoscapeObj.add(this._edgesObj[i].getObject());
                    self.attachMenuTip(this._edgesObj[i], this.cytoscapeObj.getElementById(this._edgesObj[i].ID));
                } else {
                    if (this._edgesObj[i].Changed) {
                        this._edgesObj[i].Changed = false;
                        self.cytoscapeObj.remove(elar);
                        this.cytoscapeObj.add(this._edgesObj[i].getObject());
                    }
                }
            }


        }
        return changelayout;
    }

    private _nodesObj = new Array<GraphNode>();

    private _edgesObj = new Array<GraphEdge>();



    private cytoscapeObj: any = null;

    public getNNodes(): number {
        return this._nodesObj.length;
    }

    public getNode(i: number): GraphNode {
        return this._nodesObj[i];
    }

    public getNodeByID(id: string): GraphNode {
        for (var i = 0; i < this._nodesObj.length; i++) {
            if (this._nodesObj[i].ID == id) {
                return this._nodesObj[i];
            }
        }
        return null;

    }


    public getNEdges(): number {
        return this._edgesObj.length;
    }

    public getEdge(i: number): GraphEdge {
        return this._edgesObj[i];
    }

    public getEdgeByID(id: string): GraphEdge {
        for (var i = 0; i < this._edgesObj.length; i++) {
            if (this._edgesObj[i].ID == id) {
                return this._edgesObj[i];
            }
        }
        return null;

    }


    public createNode(label?: string, background_image?: string, tiplabel?: string): GraphNode {
        var node: GraphNode = new GraphNode(label, background_image, tiplabel);
        this.attachNode(node);
        return node;
    }
    public attachNode(node: GraphNode) {
        this._nodesObj.push(node);
        (<any>node)._father = this;
        this.drawDelayed(false);
    }

    public createEdge(source?: string, target?: string, label?: string, tiplabel?: string): GraphEdge {
        var edge: GraphEdge = new GraphEdge(source, target, label, tiplabel);
        this.attachEdge(edge);
        return edge;
    }

    public createEdgeByNodes(source?: GraphNode, target?: GraphNode, label?: string, tiplabel?: string): GraphEdge {
        return this.createEdge(source.ID, target.ID, label, tiplabel);
    }
    public attachEdge(edge: GraphEdge) {
        this._edgesObj.push(edge);
        (<any>edge)._father = this;
        this.drawDelayed(false);
    }

    public resetGraph() {
        this._nodesObj = new Array<GraphNode>();
        this._edgesObj = new Array<GraphEdge>();
        this.Zoom = 1;

        this.drawDelayed(false);
    }

    public removeNode(node: GraphNode) {
        var nodesObj = new Array<GraphNode>();
        var bchangemade: boolean = false;
        for (var i: number = 0; i < this._nodesObj.length; i++) {
            if (node.ID != this._nodesObj[i].ID) {
                nodesObj.push(this._nodesObj[i]);
            }
            else {
                bchangemade = true;
            }
        }
        if (bchangemade) {
            this._nodesObj = nodesObj;

            // remove edges to/from removed node
            var edgeObj = new Array<GraphEdge>();
            for (var i: number = 0; i < this._edgesObj.length; i++) {
                if (node.ID != this._edgesObj[i].Source && node.ID != this._edgesObj[i].Target) {
                    edgeObj.push(this._edgesObj[i]);
                }
                else {
                    bchangemade = true;
                }
            }
            this._edgesObj = edgeObj;

            this.drawDelayed(false);
        }
    }

    public removeEdge(edge: GraphEdge) {
        var edgesObj = new Array<GraphEdge>();
        var bchangemade: boolean = false;
        for (var i: number = 0; i < this._edgesObj.length; i++) {
            if (edge.ID != this._edgesObj[i].ID) {
                edgesObj.push(this._edgesObj[i]);
            }
            else {
                bchangemade = true;
            }
        }
        if (bchangemade) {
            this._edgesObj = edgesObj;
            this.drawDelayed(false);
        }
    }


    /**
        Get or set whether box selection is enabled.

        http://stackoverflow.com/questions/11316851/how-to-enable-implement-panning-in-cytoscape-js
        Panning is enabled by default. You can disable it via cy.panningEnabled(). There is a slight delay before panning starts such that 
        you can use box selection. If you don't need box selection, you can disable it via cy.boxSelectionEnabled(false) -- eliminating the delay.
    */
    private _boxSelectionEnabled: boolean = false;

    public get BoxSelectionEnabled(): boolean {
        return this._boxSelectionEnabled;
    }
    public set BoxSelectionEnabled(val: boolean) {
        if (val != this._boxSelectionEnabled) {
            this._boxSelectionEnabled = val;
            this.drawDelayed(false);
        }
    }



    private _layout: IGraphEditorLayout = new GraphEditorCOSELayout();
    /**
        A plain object that specifies layout options. Which layout is initially run is specified by the name field. 
        Refer to a layout's documentation for the options it supports. If you want to specify your node positions 
        yourself in your elements JSON, you can use the preset layout — by default it does not set any positions, 
        leaving your nodes in their current positions(e.g.specified in options.elements at initialisation time).
    */
    public get Layout(): IGraphEditorLayout {
        return this._layout;
    }
    public set Layout(val: IGraphEditorLayout) {
        if (val != this._layout) {
            this._layout = val;
            this.drawDelayed(true);
        }
    }

    private _panzoomDisplay: boolean = true;
    /**
        Panzoom: display or not the panzoom
    */
    public get PanzoomDisplay(): boolean {
        return this._panzoomDisplay;
    }
    public set PanzoomDisplay(val: boolean) {
        if (val != this._panzoomDisplay) {
            this._panzoomDisplay = val;
            var div: any = $('.ui-cytoscape-panzoom', this.jComponent);
            if (this._panzoomDisplay) {
                div[0].style.display = "block";
            }
            else {
                div[0].style.display = "none";
            }
        }
    }


    private _navigatorDisplay: boolean = true;
    /**
        Navigator: display or not the panzoom
    */
    public get NavigatorDisplay(): boolean {
        return this._navigatorDisplay;
    }
    public set NavigatorDisplay(val: boolean) {
        if (val != this._navigatorDisplay) {
            this._navigatorDisplay = val;

            this.drawDelayed(true);
        }
    }


    private _navigatorContainer: JQuery = null;
    /**
        Can be a HTML or jQuery element or jQuery selector
        Used to indicate navigator HTML container.If is false then a new DOM Element is created.
    */
    public get NavigatorContainer(): JQuery {
        return this._navigatorContainer;
    }
    public set NavigatorContainer(val: JQuery) {
        if (val != this._navigatorContainer) {
            this._navigatorContainer = val;
            this.drawDelayed(true);
        }
    }

    private _navigatorViewLiveFramerate: number = 0;
    /**
        Set false to update graph pan(position) only on navigator's view drag end. Set 0 to instantly update graph pan when navigator's view is dragged.Set a positive number(N frames per second) to update navigator's view not more than N times per second.
    */
    public get NavigatorViewLiveFramerate(): number {
        return this._navigatorViewLiveFramerate;
    }
    public set NavigatorViewLiveFramerate(val: number) {
        if (val != this._navigatorViewLiveFramerate) {
            this._navigatorViewLiveFramerate = val;
            this.drawDelayed(true);
        }
    }




    private _navigatorThumbnailEventFramerate: number = 30;
    /**
        Maximal number of thumbnail update's per second triggered by graph events.
    */
    public get NavigatorThumbnailEventFramerate(): number {
        return this._navigatorThumbnailEventFramerate;
    }
    public set NavigatorThumbnailEventFramerate(val: number) {
        if (val != this._navigatorThumbnailEventFramerate) {
            this._navigatorThumbnailEventFramerate = val;
            this.drawDelayed(true);
        }
    }


    private _navigatorThumbnailLiveFramerate: boolean = false;
    /**
    Maximal number of constant thumbnail update's per second. Set false to disable.
    */
    public get NavigatorThumbnailLiveFramerate(): boolean {
        return this._navigatorThumbnailLiveFramerate;
    }
    public set NavigatorThumbnailLiveFramerate(val: boolean) {
        if (val != this._navigatorThumbnailLiveFramerate) {
            this._navigatorThumbnailLiveFramerate = val;
            this.drawDelayed(true);
        }
    }


    private _navigatorDblClickDelay: number = 200;
    /**
    Maximal delay (in miliseconds) between two clicks to consider them as a double click.
    */
    public get NavigatorDblClickDelay(): number {
        return this._navigatorDblClickDelay;
    }
    public set NavigatorDblClickDelay(val: number) {
        if (val != this._navigatorDblClickDelay) {
            this._navigatorDblClickDelay = val;
            this.drawDelayed(true);
        }
    }


    private _panzoomZoomFactor: number = 0.05;
    /**
        Panzoom: zoom factor per zoom tick
    */
    public get PanzoomZoomFactor(): number {
        return this._panzoomZoomFactor;
    }
    public set PanzoomZoomFactor(val: number) {
        if (val != this._panzoomZoomFactor) {
            this._panzoomZoomFactor = val;
            this.drawDelayed(true);
        }
    }

    private _panzoomZoomDelay: number = 45;
    /**
        Panzoom: how many ms between zoom ticks
    */
    public get PanzoomZoomDelay(): number {
        return this._panzoomZoomDelay;
    }
    public set PanzoomZoomDelay(val: number) {
        if (val != this._panzoomZoomDelay) {
            this._panzoomZoomDelay = val;
            this.drawDelayed(true);
        }
    }

    private _panzoomMinZoom: number = 0.1;
    /**
        Panzoom: min zoom level
    */
    public get PanzoomMinZoom(): number {
        return this._panzoomMinZoom;
    }
    public set PanzoomMinZoom(val: number) {
        if (val != this._panzoomMinZoom) {
            this._panzoomMinZoom = val;
            this.drawDelayed(true);
        }
    }

    private _panzoomMaxZoom: number = 10;
    /**
        Panzoom: max zoom level
    */
    public get PanzoomMaxZoom(): number {
        return this._panzoomMaxZoom;
    }
    public set PanzoomMaxZoom(val: number) {
        if (val != this._panzoomMaxZoom) {
            this._panzoomMaxZoom = val;
            this.drawDelayed(true);
        }
    }

    private _panzoomFitPadding: number = 50;
    /**
        Panzoom: padding when fitting
    */
    public get PanzoomFitPadding(): number {
        return this._panzoomFitPadding;
    }
    public set PanzoomFitPadding(val: number) {
        if (val != this._panzoomFitPadding) {
            this._panzoomFitPadding = val;
            this.drawDelayed(true);
        }
    }

    private _panzoomPanSpeed: number = 10;
    /**
        Panzoom: how many ms in between pan ticks
    */
    public get PanzoomPanSpeed(): number {
        return this._panzoomPanSpeed;
    }
    public set PanzoomPanSpeed(val: number) {
        if (val != this._panzoomPanSpeed) {
            this._panzoomPanSpeed = val;
            this.drawDelayed(true);
        }
    }

    private _panzoomPanDistance: number = 10;
    /**
        Panzoom: max pan distance per tick
    */
    public get PanzoomPanDistance(): number {
        return this._panzoomPanDistance;
    }
    public set PanzoomPanDistance(val: number) {
        if (val != this._panzoomPanDistance) {
            this._panzoomPanDistance = val;
            this.drawDelayed(true);
        }
    }


    private _panzoomPanDragAreaSize: number = 75;
    /**
        Panzoom: the length of the pan drag box in which the vector for panning is calculated (bigger = finer control of pan speed and direction)
    */
    public get PanzoomPanDragAreaSize(): number {
        return this._panzoomPanDragAreaSize;
    }
    public set PanzoomPanDragAreaSize(val: number) {
        if (val != this._panzoomPanDragAreaSize) {
            this._panzoomPanDragAreaSize = val;
            this.drawDelayed(true);
        }
    }

    private _panzoomPanMinPercentSpeed: number = 0.25;
    /**
        Panzoom: the slowest speed we can pan by (as a percent of panSpeed)
    */
    public get PanzoomPanMinPercentSpeed(): number {
        return this._panzoomPanMinPercentSpeed;
    }
    public set PanzoomPanMinPercentSpeed(val: number) {
        if (val != this._panzoomPanMinPercentSpeed) {
            this._panzoomPanMinPercentSpeed = val;
            this.drawDelayed(true);
        }
    }


    private _panzoomPanInactiveArea: number = 8;
    /**
        Panzoom: radius of inactive area in pan drag box
    */
    public get PanzoomPanInactiveArea(): number {
        return this._panzoomPanInactiveArea;
    }
    public set PanzoomPanInactiveArea(val: number) {
        if (val != this._panzoomPanInactiveArea) {
            this._panzoomPanInactiveArea = val;
            this.drawDelayed(true);
        }
    }

    private _panzoomPanIndicatorMinOpacity: number = 0.5;
    /**
        Panzoom: min opacity of pan indicator (the draggable nib); scales from this to 1.0
    */
    public get PanzoomPanIndicatorMinOpacity(): number {
        return this._panzoomPanIndicatorMinOpacity;
    }
    public set PanzoomPanIndicatorMinOpacity(val: number) {
        if (val != this._panzoomPanIndicatorMinOpacity) {
            this._panzoomPanIndicatorMinOpacity = val;
            this.drawDelayed(true);
        }
    }

    private _panzoomAutodisableForMobile: boolean = true;
    /**
        Panzoom: disable the panzoom completely for mobile (since we don't really need it with gestures like pinch to zoom)
    */
    public get PanzoomAutodisableForMobile(): boolean {
        return this._panzoomAutodisableForMobile;
    }
    public set PanzoomAutodisableForMobile(val: boolean) {
        if (val != this._panzoomAutodisableForMobile) {
            this._panzoomAutodisableForMobile = val;
            this.drawDelayed(true);
        }
    }


    private _background_color: string = 'white';
    /**
       Background color
    */
    public get BackgroundColor(): string {
        return this._background_color;
    }
    public set BackgroundColor(val: string) {
        if (val != this._background_color) {
            this._background_color = val;
            this.drawDelayed(false);
        }
    }

    private _zoom: number = 1;
    /**
     zoom: The initial zoom level of the graph. Make sure to disable viewport manipulation options, such as fit, in your layout so that it is 
     not overridden when the layout is applied. 
    
     You can set options.minZoom and options.maxZoom to set restrictions on the zoom level.
    */
    public get Zoom(): number {
        return this._zoom;
    }
    public set Zoom(val: number) {
        if (val != this._zoom) {
            this._zoom = val;
            this.cytoscapeObj.zoom = this._zoom;
            this.drawDelayed(false);
        }
    }

    private _minZoom: number = 1e-50;
    /**
     zoom: The initial zoom level of the graph. Make sure to disable viewport manipulation options, such as fit, in your layout so that it is 
     not overridden when the layout is applied. 
    
     You can set options.minZoom and options.maxZoom to set restrictions on the zoom level.
    */
    public get MinZoom(): number {
        return this._minZoom;
    }
    public set MinZoom(val: number) {
        if (val != this._minZoom) {
            this._minZoom = val;
            this.drawDelayed(false);
        }
    }

    private _maxZoom: number = 1e50;
    /**
     zoom: The initial zoom level of the graph. Make sure to disable viewport manipulation options, such as fit, in your layout so that it is 
     not overridden when the layout is applied. 
    
     You can set options.minZoom and options.maxZoom to set restrictions on the zoom level.
    */
    public get MaxZoom(): number {
        return this._maxZoom;
    }
    public set MaxZoom(val: number) {
        if (val != this._maxZoom) {
            this._maxZoom = val;
            this.drawDelayed(true);
        }
    }


    private _zoomingEnabled: boolean = true;
    /**
        Whether zooming the graph is enabled, both by user events and programmatically.
    */
    public get ZoomingEnabled(): boolean {
        return this._zoomingEnabled;
    }
    public set ZoomingEnabled(val: boolean) {
        if (val != this._zoomingEnabled) {
            this._zoomingEnabled = val;
            this.drawDelayed(false);
        }
    }


    private _userZoomingEnabled: boolean = true;
    /**
        Whether user events (e.g. mouse wheel, pinch-to-zoom) are allowed to zoom the graph. Programmatic 
        changes to zoom are unaffected by this option.
    */
    public get UserZoomingEnabled(): boolean {
        return this._userZoomingEnabled;
    }
    public set UserZoomingEnabled(val: boolean) {
        if (val != this._userZoomingEnabled) {
            this._userZoomingEnabled = val;
            this.drawDelayed(false);
        }
    }


    private _panningEnabled: boolean = true;
    /**
        Whether panning the graph is enabled, both by user events and programmatically.
    */
    public get PanningEnabled(): boolean {
        return this._panningEnabled;
    }
    public set PanningEnabled(val: boolean) {
        if (val != this._panningEnabled) {
            this._panningEnabled = val;
            this.drawDelayed(false);
        }
    }

    private _userPanningEnabled: boolean = true;
    /**
        Whether user events (e.g. dragging the graph background) are allowed to pan the graph. 
        Programmatic changes to pan are unaffected by this option.
    */
    public get UserPanningEnabled(): boolean {
        return this._userPanningEnabled;
    }
    public set UserPanningEnabled(val: boolean) {
        if (val != this._userPanningEnabled) {
            this._userPanningEnabled = val;
            this.drawDelayed(false);
        }
    }

    private _autoungrabifyNodes: boolean = false;
    /**
        Whether nodes should be ungrabified (not grabbable by user) by default (if true, overrides individual node state).
    */
    public get AutoungrabifyNodes(): boolean {
        return this._autoungrabifyNodes;
    }
    public set AutoungrabifyNodes(val: boolean) {
        if (val != this._autoungrabifyNodes) {
            this._autoungrabifyNodes = val;
            this.drawDelayed(false);
        }
    }

    private _hideEdgesOnViewport: boolean = false;
    /**
        When set to true, the renderer does not render edges while the viewport is being manipulated. 
        This makes panning, zooming, dragging, et cetera more responsive for large graphs.
    */
    public get HideEdgesOnViewport(): boolean {
        return this._hideEdgesOnViewport;
    }
    public set HideEdgesOnViewport(val: boolean) {
        if (val != this._hideEdgesOnViewport) {
            this._hideEdgesOnViewport = val;
            this.drawDelayed(false);
        }
    }


    private _motionBlur: boolean = true;
    /**
        When set to true, the renderer will use a motion blur effect to make the transition between frames seem smoother. This can significantly increase the perceived performance for a large graphs.
    */
    public get MotionBlur(): boolean {
        return this._motionBlur;
    }
    public set MotionBlur(val: boolean) {
        if (val != this._motionBlur) {
            this._motionBlur = val;
            this.drawDelayed(false);
        }
    }

    private _hideLabelsOnViewport: boolean = false;
    /**
        When set to true, the renderer does not render labels while the viewport is being manipulated. 
        This makes panning, zooming, dragging, et cetera more responsive for large graphs.
    */
    public get HideLabelsOnViewport(): boolean {
        return this._hideLabelsOnViewport;
    }
    public set HideLabelsOnViewport(val: boolean) {
        if (val != this._hideLabelsOnViewport) {
            this._hideLabelsOnViewport = val;
            this.drawDelayed(false);
        }
    }


    private _textureOnViewport: boolean = true;
    /**
        When set to true, the renderer uses a texture (if supported) during panning and zooming instead of 
        drawing the elements, making large graphs more responsive.
    */
    public get TextureOnViewport(): boolean {
        return this._textureOnViewport;
    }
    public set TextureOnViewport(val: boolean) {
        if (val != this._textureOnViewport) {
            this._textureOnViewport = val;
            this.drawDelayed(false);
        }
    }

    private _panX: number = 0;
    /**
        The initial panning position of the graph. Make sure to disable viewport manipulation options, 
        such as fit, in your layout so that it is not overridden when the layout is applied.
    */
    public get PanX(): number {
        return this._panX;
    }
    public set PanX(val: number) {
        if (val != this._panX) {
            this._panX = val;
            this.drawDelayed(false);
        }
    }

    private _panY: number = 0;
    /**
        The initial panning position of the graph. Make sure to disable viewport manipulation options, 
        such as fit, in your layout so that it is not overridden when the layout is applied.
    */
    public get PanY(): number {
        return this._panY;
    }
    public set PanY(val: number) {
        if (val != this._panY) {
            this._panY = val;
            this.drawDelayed(false);
        }
    }


    /**
        Empty the graph, add the specified elements, and reapply the initialisation layout.
    */
    public loadGraphFromJson(json: string) {
        this.cytoscapeObj.load(json);
    }

    /**
        Export the graph as JSON, the same format used at initialisation.
    */
    public exportGraphAsJson(): string {
        return this.cytoscapeObj.json()
    }

    /**
        Export the current graph view as a PNG image in Base64 representation.
        options The export options.
            bg The background colour of the image (transparent by default).
            full Whether to export the current viewport view (false, default) or the entire graph (true).
            scale This value specifies a positive number that scales the size of the resultant image.
    */
    public exportGraphAsPNG(scale?: number, full?: boolean, bg?: string): any {
        if (scale || full || bg) {
            var options = new Object();
            (<any>options).scale = scale;
            (<any>options).full = full;
            (<any>options).bg = bg;
            return this.cytoscapeObj.png(options);
        }
        else {
            return this.cytoscapeObj.png()
        }
    }


    /**
         A callback function that is called when Cytoscape.js has loaded the graph and the layout has specified initial
         positions of the nodes.After this point, rendering can happen, the user can interact with the graph, et cetera.
    */
    public onReady: (evt: any) => void = undefined;

    /**
        A callback function that is called when Cytoscape.js has rendered its first frame.This is useful for
        grabbing screenshots etc after initialision, but in general you should use ready instead.
    */
    public onInitrender: (evt: any) => void = function () { };

}