import VXCO = require("VCL/VXContainer");
import V = require("VCL/VCL");
import VXO = require("VCL/VXObject");


export class TComponent extends VXO.TObject {
    public owner: TComponent;
    public jComponent: JQuery;
    public initialized: boolean = false;

    public onCreate() { }
    public onShow() { }

    constructor(aOwner: TComponent, renderTo?: string) {
        super();
        this.owner = aOwner;

        if (aOwner == null && !this.isPage) {
            V.Application.raiseException("Owner cannot be null");
            throw "Owner cannot be null";
        }
        if (aOwner != null && !aOwner.isContainer) {
            V.Application.raiseException("only container components can own components");
            throw "only container components can own components";

        }
        if (renderTo == null) {
            this.jComponent = $("<div>");
            if (aOwner != null) {
                if ((<any>aOwner).jContent) (<any>aOwner).jContent.append(this.jComponent);
                else aOwner.jComponent.append(this.jComponent);
            }
            this.jComponent[0].id = this.ID;
        } else {
            var comp: JQuery;
            comp = $(aOwner.jComponent).find("[id=" + renderTo + "]");

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
        if (aOwner != null) (<any>aOwner).addComponent(this);
    }

    public destroy() {
        if (this.owner != null) {
            var a = (<VXCO.TContainer>this.owner).components.remove(this);
        }
        this.jComponent.remove();
    }

    private __clickover;
    public popover(popupContainer: VXCO.TContainer, popoverplacement: V.PopoverPlacement = V.PopoverPlacement.Bottom, title?: string, 
        autoClose: number = 0) {
            this.__clickover = this.jComponent.data('clickover');
            if (!this.__clickover) {
                this.jComponent.clickover({
                    html: true, content: popupContainer.jComponent, title: title,
                    placement: popoverplacement != null ? V.PopoverPlacement[popoverplacement].toLocaleLowerCase() : "right",
                    auto_close: autoClose
                    
                });
                this.__clickover = this.jComponent.data('clickover');
                this.__clickover['show']();
            }
            if (popupContainer.Visible) {
                popupContainer.Visible = false;
                this.__clickover.$tip.hide();
                this.__clickover.$element.trigger('hidden');
            } else {
                popupContainer.Visible = true;
                this.__clickover.$tip.show();
                this.__clickover.$element.trigger('shown');
                this.__clickover.resetPosition();

            } 
    }

    private _fittowidth: boolean = false;
    public get FitToWidth(): boolean {
        return this._fittowidth;
    }
    public set FitToWidth(val: boolean) {
        if (val != this._fittowidth) {
            this._fittowidth = val;
            this.draw(true);
        }
    }

    private _fittoheight: boolean = false;
    public get FitToHeight(): boolean {
        return this._fittoheight;
    }
    public set FitToHeight(val: boolean) {
        if (val != this._fittoheight) {
            this._fittoheight = val;
            this.draw(true);
        }
    }

    private _tooltip: string;
    public get Tooltip(): string {
        return this._tooltip;
    }
    public set Tooltip(val: string) {
        if (val != this._tooltip) {
            this._tooltip = val;
            this.draw(true);
        }
    }

    private _tooltipplacement: V.TooltipPlacement = V.TooltipPlacement.Top;
    public get TooltipPlacement(): V.TooltipPlacement {
        return this._tooltipplacement;
    }
    public set TooltipPlacement(val: V.TooltipPlacement) {
        if (val != this._tooltipplacement) {
            this._tooltipplacement = val;
            this.draw(true);
        }
    }


    private _visible: boolean = true;
    public get Visible(): boolean {
        return this._visible;
    }
    public set Visible(val: boolean) {
        if (val != this._visible) {
            this._visible = val;
            this.draw(false);
        }
    }

    private _enabled: boolean = true;
    public get Enabled(): boolean {
        return this._enabled;
    }
    public set Enabled(val: boolean) {
        if (val != this._enabled) {
            this._enabled = val;
            this.draw(true);
        }
    }

    /*
    * refresh the control on the screen.
    */
    public refresh() {
        this.draw(false);
    }

    /*
    * Use repaint when the entire control needs to be fully repainted. 
    */
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

    /**
    * Makes the control invisible.
    * Call Hide to hide a control. Hide sets the Visible property of the control to false.
    * Although a control that is hidden is not visible, its properties and methods are still available.
    */
    public hide() {
        this.Visible = false;
    }

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

    public draw(reCreate: boolean) {
        if (!this.jComponent) return;
        if (reCreate) this.__drawdelayed = false;

        if (this.Visible) this.jComponent.show();
        else this.jComponent.hide();

        if (reCreate || !this.initialized) this.create();
        this.initialized = true;
    }

    public show() {
        this.draw(true);
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


export class TControl extends TComponent {
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

        inside = /in/.test(placement)

        pos = this.getPosition(inside)

        actualWidth = $tip[0].offsetWidth
        actualHeight = $tip[0].offsetHeight

        switch (inside ? placement.split(' ')[1] : placement) {
                case 'bottom':
                    tp = { top: pos.top + pos.height, left: pos.left + pos.width / 2 - actualWidth / 2 }
            break
          case 'top':
                    tp = { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 }
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

