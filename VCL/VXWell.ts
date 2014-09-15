/// <reference path="Scripts/jquery.d.ts" />
/// <reference path="Scripts/google.maps.d.ts" />
import VXC = require("VCL/VXComponent");
import VXCO = require("VCL/VXContainer");
import VXU = require("VCL/VXUtils");
import V = require("VCL/VCL");
import VXO = require("VCL/VXObject");
import VXM = require("VCL/VXMenu");


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
    public createCarouselPage(caption: string, text: string,container: VXCO.TContainer): TCarouselPage {
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

export class TPanel extends VXCO.TContainer {
    public jHeader: JQuery;
    private jHeaderText: JQuery;
    public jContent: JQuery;
    public jOverlayText: JQuery;

    public CloseButton: TPanelButton;
    public Button1: TPanelButton;
    public Button2: TPanelButton;
    public Button3: TPanelButton;
    private jButtons: JQuery;

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



    private _backgroundimageurl: string;
    public get BackgroundImageURL(): string {
        return this._backgroundimageurl;
    }
    public set BackgroundImageURL(val: string) {
        if (val != this._backgroundimageurl) {
            this._backgroundimageurl = val;
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

        if (this.BackgroundImageURL != null && this.BackgroundImageURL.length > 0) {
            this.jComponent.css('background-image', 'url(' + this.BackgroundImageURL + ')').css('background-size', 'cover').css('background-repeat', 'no-repeat');
        }

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
        this.jHeaderText.text(this.HeaderText);
        this.HeaderVisible ? this.jHeader.show().css('border-top', '0px') : this.jHeader.hide().attr('min-height', '0px');
        this.createButton(this.Button3, null);
        this.createButton(this.Button2, null);
        this.createButton(this.Button1, null);
        this.createButton(this.CloseButton, null);

        
        if (this.Expanded) {
            this.jComponent.css('max-height',"");
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

    private createheatmaplayer(layername: string): Array<google.maps.LatLng>{
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
    private refreshHeatmap(): string[]{
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
                var opt: google.maps.visualization.HeatmapLayerOptions = { data: heatData,radius : 20 };
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
                if (item.Title) {
                    if (item.infowindow)
                        item.infowindow.close();
                }
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
    createHeatmapMarker(lat: number, lng: number, weight: number, layer : string = "heatmap"): TGoogleMapHeatmapMarker {
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

export class TGraphEditor extends VXC.TComponent {
    public create() {
        super.create();
    }

    public draw(reCreate: boolean) {
        require(["VCL/Scripts/cytoscape/cytoscape.min"], (cyt) => {
            if (!this.parentInitialized()) return;

            super.draw(reCreate);
        });
    }
}