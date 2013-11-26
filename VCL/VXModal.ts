/// <reference path="Scripts/bootstrap.d.ts" />
import V = require("VCL/VCL");
import VXC = require("VCL/VXContainer");
import VXDS = require("VCL/VXServer");
import VXD = require("VCL/VXDataset");

export class VXModal extends VXC.VXContainer {
    public onCreate() { }

    public onClosed: () => void;
    private jBody: JQuery;

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


    constructor() {
        super(null, null);
        if (!(<any>this).__HTML__) V.Application.raiseException("Error in " + this.getClassName() + " - You can't instantiate TPage directly, use V.Application.loadPage ,V.Application.createPage or V.Application.navigateToPage");
        this.Width = 520; //bootstrap span5 as default

        this.jBody = this.jComponent.clone(true);
        this.jComponent.empty();
        this.jComponent.append(this.jBody);

    }


    public showModal() {
        this.jComponent.addClass('modal');
        super.draw(true);
        this.jComponent.modal({
            keyboard: false, maxHeight: this.MaxHeight, backdrop: 'static', width: this.Width,
            attentionAnimation: null, resize: true
        });
    }

    public close() {
        this.jComponent.modal('hide');
        if (this.onClosed != null) { (V.tryAndCatch(() => { this.onClosed(); })) }
    }

    public get isPage(): boolean {
        return true;
    }

} 

