/// <reference path="../VCL/Scripts/jquery.d.ts" />
import V = require("VCL/VCL");
import VXO = require("VCL/VXObject");
import VXC = require("VCL/VXComponent");
import VXD = require("VCL/VXDataset");

export class VXContainer extends VXC.VXComponent {
    public components = new VXO.VXCollection < VXC.VXComponent>();
    constructor(aOwner: VXC.VXComponent, renderTo?: string) {
        super(aOwner, renderTo);
        this.FitToWidth = true;
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

    private getProgressElement() :string {
        return "PROFRESS__" + this.ID;
    }
    public showLoadingProgressBar() {
        var width = this.Width / 10;
        var left = (this.Width + this.jComponent.outerWidth()) / 2 - width;
        if ($("#" + this.getProgressElement()).length > 0 || left < width) return; //alreay there
        var top = this.Height / 2;
        var loadingHTML = '<div id="' + this.getProgressElement() +
            '" class="progress progress-striped active" style="width:' + width*2+'px;z-index:9999;' +
            'position: absolute;top:'+top+'px;left:'+left+'px;"><div class="bar" style="width:100%;"></div></div>';
        $(loadingHTML).appendTo($(this.jComponent));
    }

    public hideLoadingProgressBar() {
        $("#" + this.getProgressElement()).remove();
    }


    private activeQueries = new VXO.collections.Set<VXD.VXDatasetInt>();
    public addQuery(query: VXD.VXDatasetInt) {
        if (query == null) return;
        if (!query.ShowProgressBar) return;
        this.activeQueries.add(query);
        
        if (this.activeQueries.size() > 0) this.showLoadingProgressBar();
    }

    public removeQuery(query: VXD.VXDatasetInt) {
        if (query == null) return;
        if (!query.ShowProgressBar) return;
        this.activeQueries.remove(query);

        if (this.activeQueries.size() == 0) this.hideLoadingProgressBar();
    }

}