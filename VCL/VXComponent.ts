import VXCO = require("./VXContainer");
import V = require("./VCL");
import VXO = require("./VXObject");
import VXM = require("./VXMenu");

export class TComponent extends VXO.TObject {
    /**
    Indicates the component that is responsible for streaming and freeing this component.
    **/
    public owner: TComponent;

    /**
    Represent the JQuery element of the component
    **/
    public jComponent: JQuery;
    public initialized: boolean = false;

    public onCreate() { }
    public onShow() { }

    /**
    @aOwner     Indicates the component that is responsible for streaming and freeing this component.Onwer must be TContainer
    @renderTo   (Optional) the id of the html element that will be the parent node for this component
    **/
    constructor(aOwner: TComponent, renderTo?: string) {
        super();
        this.owner = aOwner;

        if (aOwner != null && !aOwner.isContainer) {
            V.Application.raiseException("only container components can own components");
            throw "only container components can own components";

        }
        if (renderTo == null) {
            this.jComponent = $("<div>"); //create and empty jComponent
            if (aOwner != null) {
                //in case of tpanel
                if ((<any>aOwner).jContent) (<any>aOwner).jContent.append(this.jComponent);
                else aOwner.jComponent.append(this.jComponent); //other type of container's
            }
            this.jComponent[0].id = this.ID;
        } else {
            var comp: JQuery;
            if (aOwner) comp = $(aOwner.jComponent).find("[id=" + renderTo + "]");
            else comp = $("body").find("[id=" + renderTo + "]");

            //check for multiple occurrence
            if (comp.length > 1) {
                V.Application.raiseException("element '" + renderTo + "' appears more than once on page " + aOwner.getClassName());
                throw "element '" + renderTo + "' appears more than once on page " + aOwner.getClassName();
            }
            if (comp.length == 0) comp = $(aOwner.jComponent).find("[id=" + aOwner.ID + renderTo + "]");
            if (comp.length != 1) {
                V.Application.raiseException("Cant find element '" + renderTo + "' on page " + aOwner.getClassName());
                throw "Cant find element '" + renderTo + "' on page " + aOwner.getClassName();
            }
            if (comp.children().length > 0 && !this.isContainer) {
                V.Application.raiseException("Error on element '" + renderTo + "'.Only container element can have child elmenet.On page " + aOwner.getClassName());
                throw "Error on element:'" + renderTo + "' only container element can have child elmenet.On page " + aOwner.getClassName();
            }
            this.jComponent = comp;
            this.jComponent[0].id = this.ID;
            this.jComponent.attr("DATA-ID", renderTo);
        }
        if (aOwner != null) {
            (<any>aOwner).addComponent(this);
        }
        this.addClass(this.getClassName().toUpperCase());
    }

    public destroy() {
        if (this.owner != null) {
            var a = (<VXCO.TContainer>this.owner).components.remove(this);
        }
        this.jComponent.remove();
    }

    public LocalizeText(sourceString: string) {
        if (!V.Application.ActiveLanguage || (!(<any>this)._localizable)) return sourceString;
        return V.Application.getLanguageTranslation(V.Application.ActiveLanguage, sourceString);
    }

    /**
    Adds the specified class(es) to the component.
    **/
    public addClass(classStr: string) {
        this.jComponent.addClass(classStr);
    }

    /**
    Remove a single class, multiple classes, or all classes from component
    **/
    public removeClass(classStr: string) {
        this.jComponent.removeClass(classStr);
    }

    private __clickovercontainer: VXCO.TContainer;
    private __clickover;
    private __clickovertimer;

    public popover(popupContainer: VXCO.TContainer, popoverplacement: V.PopoverPlacement = V.PopoverPlacement.Bottom,
        title?: string,
        autoClose: number = 0, width: number = null) {
        var self = this;
        if (!popupContainer) return;
        if (!this.__clickovercontainer || this.__clickovercontainer.ID != popupContainer.ID) {
            this.__clickovercontainer = popupContainer;
            popupContainer.Visible = false;
        }
        this.__clickover = this.jComponent.data('clickover');
        if (!this.__clickover) {
            this.jComponent.clickover({
                html: true, content: popupContainer.jComponent, title: title,
                placement: popoverplacement != null ? V.PopoverPlacement[popoverplacement].toLocaleLowerCase() : "right",
                auto_close: autoClose, width: width

            });
            this.__clickover = this.jComponent.data('clickover');
            this.__clickover['show']();
        }


        if (popupContainer.Visible) {
            self.closepopup(popupContainer);
        } else {
            popupContainer.Visible = true;
            popupContainer.draw(true);
            this.__clickover.$tip.show();

            this.__clickover.resetPosition();
            $(window).trigger('resize');
            // trigger timeout hide
            if (autoClose > 0) {
                this.__clickovertimer = setTimeout(() => {
                    self.closepopup(popupContainer);
                }, autoClose*1000);
            }

            popupContainer.jComponent.on(this.__clickover.attr.click_event_ns, (e) => {
                //e.preventDefault();
                e.stopPropagation();
            });

            //wait for the next click
            window.setTimeout(() => {
                $('body').on(this.__clickover.attr.click_event_ns, function (e) {
                    self.closepopup(popupContainer);
                });
            }, 100);
        }
    }

    private closepopup(popupContainer: VXCO.TContainer) {
        if (this.__clickover) {
            this.__clickover.$tip.hide();
            $('body').off(this.__clickover.attr.click_event_ns);
            popupContainer.jComponent.off(this.__clickover.attr.click_event_ns);
        }
        popupContainer.Visible = false;
        if (this.__clickovertimer) clearTimeout(this.__clickovertimer);
    }


    private _sticktotop: boolean = false;
    /**
     component that remain in view as the user scrolls the page
    **/
    public get StickToTop(): boolean {
        return this._sticktotop;
    }

    public set StickToTop(val: boolean) {
        if (val != this._sticktotop) {
            this._sticktotop = val;
            this.drawDelayed(true);
        }
    }


    private _outline: boolean = false;
    /**
     An outline is a line that is drawn around elements (outside the borders) to make the element "stand out".
    **/
    public get Outline(): boolean {
        return this._outline;
    }

    public set Outline(val: boolean) {
        if (val != this._outline) {
            this._outline = val;
            this.drawDelayed(true);
        }
    }

    
    private _fittowidth: boolean = false;
    /*The component will take fulle parent width*/
    public get FitToWidth(): boolean {
        return this._fittowidth;
    }
    public set FitToWidth(val: boolean) {
        if (val != this._fittowidth) {
            this._fittowidth = val;
            this.drawDelayed(true);
        }
    }

    private _fittoheight: boolean = false;
    public get FitToHeight(): boolean {
        return this._fittoheight;
    }
    public set FitToHeight(val: boolean) {
        if (val != this._fittoheight) {
            this._fittoheight = val;
            this.drawDelayed(true);
        }
    }

    private _tooltip: string;
    /**Tooltips can be attached to any element. When you hover the element with your mouse, the title attribute is displayed in a little box next to the element*/
    public get Tooltip(): string {
        return this._tooltip;
    }
    public set Tooltip(val: string) {
        if (val != this._tooltip) {
            this._tooltip = val;
            this.drawDelayed(true);
        }
    }

    private _tooltipplacement: V.TooltipPlacement = V.TooltipPlacement.Top;
    /**Customize the positioning, e.g., to center the tooltip top elements.**/
    public get TooltipPlacement(): V.TooltipPlacement {
        return this._tooltipplacement;
    }
    public set TooltipPlacement(val: V.TooltipPlacement) {
        if (val != this._tooltipplacement) {
            this._tooltipplacement = val;
            this.drawDelayed(true);
        }
    }


    private _visible: boolean = true;
    public get Visible(): boolean {
        return this._visible;
    }
    public set Visible(val: boolean) {
        if (val != this._visible) {
            this._visible = val;
            this.drawDelayed(true);
        }
    }

    private _enabled: boolean = true;
    public get Enabled(): boolean {
        return this._enabled;
    }
    public set Enabled(val: boolean) {
        if (val != this._enabled) {
            this._enabled = val;
            this.drawDelayed(true);
        }
    }

    /**
     refresh the control on the screen.
    **/
    public refresh() {
        this.draw(false);
    }

    /**
     Use repaint when the entire control needs to be fully repainted. 
    **/
    public repaint() {
        this.draw(true);
    }

    /**
    * Display the component by fading them to opaque
    */
    public fadeIn(duration?: number, complete?: () => void): void {
        this.jComponent.fadeIn(duration, function () {
            if (complete != null) complete();
        })
    }

    /**
    * Hide the matched elements by fading them to transparent.
    */
    public fadeOut(duration?: number, complete?: () => void): void {
        this.jComponent.fadeOut(duration, function () {
            if (complete != null) complete();
        })
    }


    /**
    * The margin clears an area around an component . 
    * The margin does not have a background color, and is completely transparent.
    * Sets the left margin of an component
    */
    public get MarginLeft(): number { return parseFloat(this.jComponent.css('margin-left')); }
    public set MarginLeft(pixel: number) { this.jComponent.css('margin-left', pixel); }
    /**
    * The margin clears an area around an component . 
    * The margin does not have a background color, and is completely transparent.
    *  Sets the right margin of an component
    */
    public get MarginRight(): number { return parseFloat(this.jComponent.css('margin-right')); }
    public set MarginRight(pixel: number) { this.jComponent.css('margin-right', pixel); }
    /**
    * The margin clears an area around an component . 
    * The margin does not have a background color, and is completely transparent.
    * Sets the top margin of an component
    */
    public get MarginTop(): number { return parseFloat(this.jComponent.css('margin-top')); }
    public set MarginTop(pixel: number) { this.jComponent.css('margin-top', pixel); }
    /**
    * The margin clears an area around an component . 
    * The margin does not have a background color, and is completely transparent.
    * Sets the bottom margin of an component
    */
    public get MarginBottom(): number { return parseFloat(this.jComponent.css('margin-bottom')); }
    public set MarginBottom(pixel: number) { this.jComponent.css('margin-bottom', pixel); }


    /**
    * The padding clears an area around the content . 
    * The padding is affected by the background color of the component.
    * Sets the left padding of an component
    */
    public get PaddingLeft(): number { return parseFloat(this.jComponent.css('padding-left')); }
    public set PaddingLeft(pixel: number) { this.jComponent.css('padding-left', pixel + "px"); }

    /**
    * The padding clears an area around the content . 
    * The padding is affected by the background color of the component.
    * Sets the right padding of an component
    */
    public get PaddingRight(): number { return parseFloat(this.jComponent.css('padding-right')); }
    public set PaddingRight(pixel: number) { this.jComponent.css('padding-right', pixel + "px"); }

    /**
    * The padding clears an area around the content . 
    * The padding is affected by the background color of the component.
    * Sets the top padding of an component
    */
    public get PaddingTop(): number { return parseFloat(this.jComponent.css('padding-top')); }
    public set PaddingTop(pixel: number) { this.jComponent.css('padding-top', pixel + "px"); }

    /**
    * The padding clears an area around the content . 
    * The padding is affected by the background color of the component.
    * Sets the bottom padding of an component
    */
    public get PaddingBottom(): number { return parseFloat(this.jComponent.css('padding-bottom')); }
    public set PaddingBottom(pixel: number) { this.jComponent.css('padding-bottom', pixel + "px"); }


    /**
    * Specifies the width of the component in pixels.
    */
    public get Width(): number { return this.jComponent.width(); }
    public set Width(pixel: number) { if (pixel != this.Width) this.jComponent.width(pixel); }
    public animateResize(duration: number = 400, widthPixel?: number, heightPixel?: number, completeCallBack?: () => void) {
        if (!widthPixel && !heightPixel) return;
        if (widthPixel && heightPixel) this.jComponent.animate({ width: widthPixel, height: heightPixel }, duration, completeCallBack);
        else if (widthPixel) this.jComponent.animate({ width: widthPixel }, duration, completeCallBack);
        else if (heightPixel) this.jComponent.animate({ height: heightPixel }, duration, completeCallBack);
    }

    /**
    * Specifies the height of the component in pixels.
    */
    public get Height(): number { return parseFloat(this.jComponent.css('height')); }
    public set Height(pixel: number) { if (pixel != this.Height) this.jComponent.css('height', pixel); }

    public create() {
        if (this.Visible) this.jComponent.show();
        else this.jComponent.hide();
        if (this.Tooltip != null) {
            this.jComponent.attr('data-toggle', 'tooltip');
            this.jComponent.attr('title', this.Tooltip);
            this.jComponent.attr('data-placement', V.TooltipPlacement[this.TooltipPlacement]);
        } else {
            this.jComponent.removeAttr('data-toggle title data-placement');
        }
    }



    public setFoucs() {
        this.jComponent.focus();
    }

    private __drawdelayed = false;
    private __drawdelayedType: boolean = false;
    public drawDelayed(reCreate: boolean) {
        if (reCreate) this.__drawdelayedType = true;
        if (this.__drawdelayed) return; //alread in
        this.__drawdelayed = true;
        setTimeout(() => {
            try {
                if (this.__drawdelayed)
                    this.draw(this.__drawdelayedType);
            } finally {
                this.__drawdelayedType = false;
                this.__drawdelayed = false;
            }
        }, 50);
    }

    private __tmpShowDuration: number = 0;
    private __tmpHideDuration: number = 0;
    public draw(reCreate: boolean) {
        var self = this;
        if (!this.jComponent) return;
        if (reCreate) this.__drawdelayed = false;

        if (this.Visible) {
            this.jComponent.show(self.__tmpShowDuration, () => {
                this.__tmpShowDuration = 0;
            });
        } else {
            this.jComponent.hide(self.__tmpHideDuration, () => {
                self.__tmpHideDuration = 0;
            });
        }

        if (this.StickToTop) this.jComponent.addClass("affix");
        else this.jComponent.removeClass("affix");

        if (reCreate || !this.initialized) this.create();
        this.initialized = true;
    }


    /**
    * Makes the control invisible.
    * Call Hide to hide a control. Hide sets the Visible property of the control to false.
    * Although a control that is hidden is not visible, its properties and methods are still available.
    */
    public hide() {
        this.Visible = false;
    }

    public HideWithAnimation(duration?: number) {
        this.__tmpHideDuration = duration?duration:400;
        this.Visible = false;
    }



    public show() {
        this.Visible = true;
    }

    public showWithAnimation(duration: number) {
        this.__tmpShowDuration = duration ? duration : 400;
        this.Visible = true;
    }


    public get isContainer(): boolean {
        return false;
    }

    public get isPage(): boolean {
        return false;
    }

    public parentInitialized() {
        if (!this.owner) return true;
        return (this.owner).initialized;
    }
}

export class TPopupmenuComponent extends TComponent {
    private jDropDownTarget: JQuery;

    constructor(aOwner: TComponent, renderTo?: string) {
        super(aOwner, renderTo);
        this.menuItems.onChanged = () => {
            this.drawDelayed(true);
        }
    }

    public menuItems = new VXM.TMenuItemCollection<VXM.TMenuItem>();
    public createMenuItem(text: string, onClicked?: () => void): VXM.TMenuItem {
        var menuItem = new VXM.TMenuItem();
        menuItem.Text = text;
        menuItem.onClicked = onClicked;
        this.menuItems.add(menuItem);
        return menuItem;
    }

    public create() {
        super.create();
        this.reBuildMenu();
    }

    public showMenuDropdown() {
        this.jComponent.addClass("open");
    }

    public hideMenuDropdown() {
        this.jComponent.removeClass("open");
    }

    private _showmenucaret: boolean = true;
    /**
     Component that remain in view as the user scrolls the page
    **/
    public get ShowMenuCaret(): boolean {
        return this._showmenucaret;
    }

    public set ShowMenuCaret(val: boolean) {
        if (val != this._showmenucaret) {
            this._showmenucaret = val;
            this.drawDelayed(true);
        }
    }


    private reBuildMenu() {
        this.jComponent.find(".dropdown-menu").empty();
        if (!this.menuItems.length() || !this.Enabled) return;
        if (!this.jDropDownTarget) return;

        this.jComponent.addClass('dropdown');
        this.jDropDownTarget.attr('data-toggle', "dropdown");
        this.jDropDownTarget.addClass("dropdown-toggle");

        this.menuItems.createmenu('dropdown-menu').appendTo(this.jComponent);
        $('.dropdown-toggle').dropdown()
    }
}


export class TControl extends TComponent {
    /**
        Use the OnClick event handler to respond when the user clicks the control. 
    **/
    public onClicked: () => void;
    public create() {
        this.jComponent.off("click").click(() => { if (this.onClicked != null) (V.tryAndCatch(() => { this.onClicked(); })); return false; })
        super.create();
    }
    public draw(reCreate: boolean) {
        if (!this.parentInitialized()) return;
        super.draw(reCreate);
    }
}


var Clickover = function (element, options) {
    // local init
    this.cinit('clickover', element, options);
    //this.clickery();
}

Clickover.prototype = $.extend({}, $.fn.popover.Constructor.prototype, {

    constructor: Clickover

    , cinit: function (type, element, options) {
        this.attr = {};

        // choose random attrs instead of timestamp ones
        this.attr.me = ((Math.random() * 10) + "").replace(/\D/g, '');
        this.attr.click_event_ns = "click." + this.attr.me + " touchstart." + this.attr.me;

        if (!options) options = {};

        options.trigger = 'manual';

        // call parent
        this.init(type, element, options);

        // setup our own handlers
        //this.$element.on('click', this.options.selector, $.proxy(this.clickery, this));

        // soon add click hanlder to body to close this element
        // will need custom handler inside here

    }
    , clickery: function (e) {
        // clickery isn't only run by event handlers can be called by timeout or manually
        // only run our click handler and  
        // need to stop progration or body click handler would fire right away
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }

        // set popover's tip 'id' for greater control of rendering or css rules
        this.options.tip_id && this.tip().attr('id', this.options.tip_id);

        // add a custom class
        this.options.class_name && this.tip().addClass(this.options.class_name);

        // we could override this to provide show and hide hooks 
        //this[this.isShown() ? 'hide' : 'show']();

        // if shown add global click closer
        if (this.isShown()) {
            this.$element.css('dispaly', 'block').addClass('in');
            var that = this;

            // close on global request, exclude clicks inside clickover
            this.options.global_close &&
            $('body').on(this.attr.click_event_ns, function (e) {
                if (!that.tip().has(e.target).length) { that.clickery(); }
            });

            this.options.esc_close && $(document).bind('keyup.clickery', function (e) {
                if (e.keyCode == 27) { that.clickery(); }
                return;
            });

            // first check for others that might be open
            // wanted to use 'click' but might accidently trigger other custom click handlers
            // on clickover elements 
            !this.options.allow_multiple &&
            $('[data-clickover-open=1]').each(function () {
                $(this).data('clickover') && $(this).data('clickover').clickery();
            });

            // help us track elements w/ open clickovers using html5
            this.$element.attr('data-clickover-open', 1);

            // if element has close button then make that work, like to
            // add option close_selector
            this.tip().on('click', '[data-dismiss="clickover"]', $.proxy(this.clickery, this));

            // trigger timeout hide
            if (this.options.auto_close && this.options.auto_close > 0) {
                this.attr.tid = setTimeout($.proxy(this.clickery, this), this.options.auto_close);
            }

            // provide callback hooks for post shown event
            typeof this.options.onShown == 'function' && this.options.onShown.call(this);
            this.$element.trigger('shown');
        }
        else {
            this.$element.css('dispaly', 'none').removeClass('in');
            this.$element.removeAttr('data-clickover-open');
            this.options.esc_close && $(document).unbind('keyup.clickery');
            $('body').off(this.attr.click_event_ns);

            if (typeof this.attr.tid == "number") {
                clearTimeout(this.attr.tid);
                delete this.attr.tid;
            }

            this.$element.trigger('hidden');
        }
    }
    , isShown: function () {
        return this.tip().hasClass('in');
    }, resetPosition: function () {
        var $tip
            , inside
            , pos
            , actualWidth
            , actualHeight
            , placement
            , tp

      if (this.hasContent() && this.enabled) {
            $tip = this.tip()

        placement = typeof this.options.placement == 'function' ?
            this.options.placement.call(this, $tip[0], this.$element[0]) :
            this.options.placement

        inside = /in/.test(placement);

        pos = this.getPosition(inside);
        pos = this.getPosition(inside)
        pos.top = this.$element[0].offsetTop;
        pos.left = this.$element[0].offsetLeft;



       actualWidth = this.options.width ? this.options.width : $tip[0].offsetWidth;
       actualHeight = $tip[0].offsetHeight
       var maxleft: number = $(window).width() - pos.width;

       var lft = Math.min(maxleft, pos.left + pos.width / 2 - actualWidth / 2);
       //lft = Math.max(lft, 0);
       switch (inside ? placement.split(' ')[1] : placement) {
          case 'bottom':
              tp = { top: pos.top + pos.height, left: lft }
              break
          case 'top':
              tp = { top: pos.top - actualHeight, left: lft }
              break
          case 'left':
              tp = { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth }
              break
          case 'right':
              tp = { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width }
              break
        }

          $tip.css(tp)
      }
    }
})



  /* plugin definition */
  /* stolen from bootstrap tooltip.js */
  $.fn.clickover = function (option) {
    return this.each(function () {
        var $this = $(this)
            , data = $this.data('clickover')
            , options = typeof option == 'object' && option

      if (!data) $this.data('clickover', (data = new Clickover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.clickover.Constructor = Clickover

  // these defaults are passed directly to parent classes
  $.fn.clickover.defaults = $.extend({}, $.fn.popover.defaults, {
    trigger: 'manual',
    auto_close: 0, /* ms to auto close clickover, 0 means none */
    global_close: 1, /* allow close when clicked away from clickover */
    esc_close: 1, /* allow clickover to close when esc key is pressed */
    onShown: null,  /* function to be run once clickover has been shown */
    onHidden: null,  /* function to be run once clickover has been hidden */
    width: null, /* number is px (don't add px), null or 0 - don't set anything */
    height: null, /* number is px (don't add px), null or 0 - don't set anything */
    tip_id: null,  /* id of popover container */
    class_name: 'clickover', /* default class name in addition to other classes */
    allow_multiple: 0 /* enable to allow for multiple clickovers to be open at the same time */
})

