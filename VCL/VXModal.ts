/// <reference path="Scripts/bootstrap.d.ts" />
import V = require("VCL/VCL");
import VXC = require("VCL/VXContainer");
import VXDS = require("VCL/VXServer");
import VXD = require("VCL/VXDataset");

export class TModal extends VXC.TContainer {
    public onCreate() { }

    public onClosed: () => void;
    public onCancel: () => void;
    private jBody: JQuery;
    private effect: V.ModalEffects;
    private duration: number;

    private _maxheight: number = 400;
    public get MaxHeight(): number {
        return this._maxheight;
    }
    public set MaxHeight(val: number) {
        if (val != this._maxheight) {
            this._maxheight = val;
            this.draw(false);
        }
    }


    constructor(effect?: V.ModalEffects, duration?: number) {
        super(null, null);
        if (!(<any>this).__HTML__) V.Application.raiseException("Error in " + this.getClassName() + " - You can't instantiate TPage directly, use V.Application.loadPage ,V.Application.createPage");

        this.jBody = this.jComponent.clone(true);
        this.jComponent.empty();
        this.jComponent.append(this.jBody);

        if (effect != null) {
            this.effect = effect;
            this.duration = duration;
        }
    }

    public showModal() {
        this.jComponent.addClass('modal');
        super.draw(true);
        switch (this.effect) {
            case V.ModalEffects.FadeIn: {
                this.jComponent.fadeIn(this.duration);
                break;
            }
            case V.ModalEffects.FadeOut: {
                this.jComponent.fadeOut(this.duration);
                break;
            }
            case V.ModalEffects.SlideDown: {
                this.jComponent.slideDown(this.duration);
                break;
            }
            case V.ModalEffects.SlideUp: {
                this.jComponent.slideUp(this.duration);
                break;
            }
        }
        this.jComponent.modal({
            keyboard: false, maxHeight: this.MaxHeight, backdrop: 'static', width: this.Width,
            attentionAnimation: null, resize: true
        });
        if (this.onShow != null) (V.tryAndCatch(() => { this.onShow(); }))
    }

    public close() {
        this.jComponent.modal('hide');
        if (this.onClosed != null) { (V.tryAndCatch(() => { this.onClosed(); })) }
    }
    public cancel() {
        this.jComponent.modal('hide');
        if (this.onCancel != null) { (V.tryAndCatch(() => { this.onCancel(); })) }
    }


    public get isPage(): boolean {
        return true;
    }
}