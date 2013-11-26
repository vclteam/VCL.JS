/// <reference path="../VCL/Scripts/jquery.d.ts" />
import V = require("VCL/VCL");
import VXO = require("VCL/VXObject");
import VXC = require("VCL/VXComponent");
import VXD = require("VCL/VXDataset");

declare function Spinner(options: any): void;

export class VXContainer extends VXC.VXComponent {
    private __HTML__: string;
    public components = new VXO.VXCollection<VXC.VXComponent>();

    constructor(aOwner: VXC.VXComponent, renderTo?: string) {
        super(aOwner, renderTo);
        if (this.__HTML__) $(this.jComponent).html(this.__HTML__);
        if (this.onCreate != null) (V.tryAndCatch(() => { this.onCreate(); }))
    }

    public addComponent(component: VXC.VXComponent): void {
        this.components.add(component);
    }


    public draw(reCreate: boolean) {
        this.initialized = true;
        super.draw(reCreate);
        if (this.jComponent) {
            if (this.Visible) this.jComponent.show();//css('visibility', this.Visible ? 'visible' : 'hidden');
            else this.jComponent.hide();
        }
        this.components.forEach((item: VXC.VXComponent) => {
            item.draw(reCreate);
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

    private spinner : any;
    private showLoadingProgressBar() {
        if (this.spinner) return;
        var opts = {
            lines: 13, // The number of lines to draw
            length: 20, // The length of each line
            width: 10, // The line thickness
            radius: 30, // The radius of the inner circle
            corners: 1, // Corner roundness (0..1)
            rotate: 0, // The rotation offset
            direction: 1, // 1: clockwise, -1: counterclockwise
            color: '#000', // #rgb or #rrggbb or array of colors
            speed: 1, // Rounds per second
            trail: 60, // Afterglow percentage
            shadow: false, // Whether to render a shadow
            hwaccel: false, // Whether to use hardware acceleration
            className: 'spinner', // The CSS class to assign to the spinner
            zIndex: 2e9, // The z-index (defaults to 2000000000)
            top: 'auto', // Top position relative to parent in px
            left: 'auto' // Left position relative to parent in px
        };
        this.spinner = new Spinner(opts).spin(document.getElementById('content'));
    }

    private hideLoadingProgressBar() {
        if (this.spinner) {
            this.spinner.stop();
            this.spinner = null;
        }
    }


    private static activeQueries = new VXO.collections.Set<VXD.VXDatasetInt>();
    private addQuery(query: VXD.VXDatasetInt) {
        if (query == null) return;
        if (!query.ShowProgressBar) return;
        VXContainer.activeQueries.add(query);
        
        if (VXContainer.activeQueries.length() == 1) this.showLoadingProgressBar();
    }

    private removeQuery(query: VXD.VXDatasetInt) {
        if (query == null) return;
        if (!query.ShowProgressBar) return;
        VXContainer.activeQueries.remove(query);

        if (VXContainer.activeQueries.length() == 0) this.hideLoadingProgressBar();
    }

}