/// <reference path="../VCL/Scripts/require.d.ts" />
/// <reference path="../VCL/Scripts/jquery.d.ts" />
import V = require("VCL/VCL");
import VXC = require("VCL/VXComponent");
import VXDS = require("VCL/VXServer");
import VXA = require("VCL/VXApplication");
import VXCO = require("VCL/VXContainer");
import VXD = require("VCL/VXDataset");


export class VXPage extends VXCO.VXContainer {
    constructor() {
        super(null, null);
        if (!(<any>this).__HTML__) V.Application.raiseException("Error in "+this.getClassName()+" - You can't instantiate TPage directly, use V.Application.loadPage ,V.Application.createPage or V.Application.navigateToPage");
    }

    public show(aOwner?: V.TContainer) {
        var renderTo: JQuery;
        if (aOwner == null) renderTo = $("#content");
        else renderTo = aOwner.jComponent;

        if (renderTo == null)
            V.Application.raiseException("Elment was not specfied for page '" + this.getClassName()+"'");
        if (renderTo.length == 0)
            V.Application.raiseException("Cant find element '" + renderTo.attr('ID') + "' for page '" + this.getClassName() + "'");

        renderTo.empty();
        renderTo.append($(this.jComponent))
        super.draw(true);
        if (this.onShow != null) (V.tryAndCatch(() => { this.onShow(); }))
    }

    public refresh() {
        this.show();
    }

  

    public get isPage(): boolean {
        return true;
    }

} 



