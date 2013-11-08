/// <reference path="../VCL/Scripts/jquery.d.ts" />
import VXCO = require("VCL/VXContainer");
import V = require("VCL/VCL");
import VXO = require("VCL/VXObject");


export class VXComponent extends VXO.VXObject {
    private __NAME__: string;

    public owner : VXComponent;
    public jComponent: JQuery;
    public showed: boolean = false;
    public initialized: boolean = false;

    public onCreate() { }
    public onShow() { }

    constructor(aOwner: VXComponent, renderTo?: string) {
        super();
        this.owner = aOwner;

        if (aOwner == null && !this.isPage ) {
            V.Application.raiseException("Owner cannot be null");
            throw "Owner cannot be null";
        }
        if (aOwner != null && !aOwner.isContainer) {
            V.Application.raiseException("only container components can own components");
            throw "only container components can own components";

        }
        if (aOwner != null) {
            //set dataset of dbelements
            if ((<VXCO.VXContainer>aOwner).Dataset != null) {
                try {
                    (<any>this).Dataset = (<VXCO.VXContainer>aOwner).Dataset;
                } catch(err) {}
                
            }
        }


        if (renderTo == null) {
            this.jComponent = $("<div>");
            this.__NAME__ = this.ID;
            if (aOwner != null) aOwner.jComponent.append(this.jComponent);
            this.jComponent[0].id = this.__NAME__;
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
            this.__NAME__ = aOwner.ID + renderTo;
            this.jComponent[0].id = this.__NAME__;
        }
        if (aOwner != null) (<VXCO.VXContainer>aOwner).addComponent(this);
    }

    public destroy() {
        if (this.owner != null) {
            var a = (<VXCO.VXContainer>this.owner).components.remove(this);
        }
        this.jComponent.remove();
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
            this.draw(true);
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
    * Repaints the control on the screen.
    */
    public refresh() {
        this.draw(false);
    }

    /*
    * Use Invalidate when the entire control needs to be fully repainted. 
    */
    public Invalidate() {
        this.draw(true);
    }

    /**
    * Display the component by fading them to opaque
    */
    public fadeIn(duration?: number, complete?: () => void ): void {
        this.jComponent.fadeIn(duration, function () {
            if (complete != null) complete();
        })
    }

    /**
    * Hide the matched elements by fading them to transparent.
    */
    public fadeOut(duration?: number, complete?: () => void ): void {
        this.jComponent.fadeOut(duration, function () {
            if (complete != null) complete();
        })
    }


    /**
    * The margin clears an area around an component . 
    * The margin does not have a background color, and is completely transparent.
    * Sets the left margin of an component
    */
    public get MarginLeft() : number { return parseFloat(this.jComponent.css('margin-left')); }
    public set MarginLeft(pixel: number) {this.jComponent.css('margin-left', pixel);}
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
    public set Width(pixel: number) { this.jComponent.width(pixel); }
    public animateResize(duration : number = 400,widthPixel?: number, heightPixel?: number,completeCallBack?: () => void) {
        if (!widthPixel && !heightPixel) return;
        if (widthPixel && heightPixel) this.jComponent.animate({ width: widthPixel, height: heightPixel }, duration, completeCallBack);
        else if (widthPixel) this.jComponent.animate({ width: widthPixel }, duration, completeCallBack);
        else if (heightPixel) this.jComponent.animate({ height: heightPixel }, duration, completeCallBack);
    }

    /**
    * Specifies the height of the component in pixels.
    */
    public get Height(): number { return parseFloat(this.jComponent.css('height')); }
    public set Height(pixel: number) { this.jComponent.css('height', pixel); }

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


    public draw(reCreate: boolean) {
    }

    public show() {
        this.showed = true;
        this.draw(true);
    }


    public get isContainer(): boolean {
        return false;
    }

    public get isPage(): boolean {
        return false;
    }
}


export class VXControl extends VXComponent {
    public onClicked: () => void;
    public create() {
        this.jComponent.click(() => { if (this.onClicked != null) (V.tryAndCatch(() => { this.onClicked(); })); return false; })
        super.create();
    }
    public draw(reCreate: boolean) {
        if (!this.showed) return;
        if (reCreate || !this.initialized) this.create();
        this.initialized = true;
    }
}