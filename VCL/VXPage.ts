/// <reference path="Scripts/require.d.ts" />
/// <reference path="Scripts/jquery.d.ts" />
import V = require("./VCL");
import VXC = require("./VXComponent");
import VXDS = require("./VXServer");
import VXA = require("./VXApplication");
import VXCO = require("./VXContainer");
import VXD = require("./VXDataset");


export class TPage extends VXCO.TContainer {
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
        //on some components (tpanel) the content of the control cab be under jContent
        renderTo.append($((<any>this).jContent ? (<any>this).jContent : this.jComponent));
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



