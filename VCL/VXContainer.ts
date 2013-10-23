/// <reference path="../VCL/Scripts/jquery.d.ts" />
import V = require("VCL/VCL");
import VXO = require("VCL/VXObject");
import VXC = require("VCL/VXComponent");
import VXD = require("VCL/VXDataset");

export class VXContainer extends VXC.VXComponent {
    public components = new VXO.VXCollection < VXC.VXComponent>();
    constructor(aOwner: VXC.VXComponent, renderTo?: string) {
        super(aOwner, renderTo);
        if (this.onCreate != null) (V.tryAndCatch(() => { this.onCreate(); }))
    }

    public addComponent(component: VXC.VXComponent): void {
        this.components.add(component);
    }

    public draw(reCreate: boolean) {
        if (this.jComponent) {
            if (this.Visible) this.jComponent.show();//css('visibility', this.Visible ? 'visible' : 'hidden');
            else this.jComponent.hide();
        }
        this.components.forEach((item: VXC.VXComponent) => {
            item.showed = true;
            item.draw(false);
            return true;
        });
    }

    public get isContainer(): boolean {
        return true;
    }

    private _dataset: VXD.VXDataset;
    /*
      * Specifies the dataset thfor the container,all sub component will bind to this dataset by default.
      */
    public get Dataset(): VXD.VXDataset {
        return this._dataset;
    }
    public set Dataset(val: VXD.VXDataset) {
        if (val != this._dataset) {  
            this._dataset = val;
        }
    }

    private getProgressElement() :string {
        return "PROFRESS__" + this.ID;
    }

    private  showLoadingProgressBar() {
       if ($("#" + this.getProgressElement()).length > 0) return; //alreay there
        var loadingHTML = '<div id="' + this.getProgressElement() +
            '" class="progress progress-striped active" style="top:50%;left:50%;z-index:9999;' +
            'position: absolute;width:120px;margin-left:-60px"><div class="bar" style="width:100%;"></div></div>';
        $(loadingHTML).appendTo($(this.jComponent));
    }

    private hideLoadingProgressBar() {
        $("#" + this.getProgressElement()).remove();
    }


    private activeQueries = new VXO.collections.Set<VXD.VXDatasetInt>();
    private addQuery(query: VXD.VXDatasetInt) {
        if (query == null) return;
        if (!query.ShowProgressBar) return;
        this.activeQueries.add(query);
        
        if (this.activeQueries.length() > 0) this.showLoadingProgressBar();
    }

    private removeQuery(query: VXD.VXDatasetInt) {
        if (query == null) return;
        if (!query.ShowProgressBar) return;
        this.activeQueries.remove(query);

        if (this.activeQueries.length() == 0) this.hideLoadingProgressBar();
    }

}