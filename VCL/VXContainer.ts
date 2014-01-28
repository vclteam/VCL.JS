/// <reference path="../VCL/Scripts/jquery.d.ts" />
import V = require("VCL/VCL");
import VXO = require("VCL/VXObject");
import VXC = require("VCL/VXComponent");
import VXD = require("VCL/VXDataset");
import VXU = require("VCL/VXUtils");

declare function Spinner(options: any): void;

export class TContainer extends VXC.TComponent {
    private __HTML__: string;
    public components = new VXO.TCollection<VXC.TComponent>();

    constructor(aOwner: VXC.TComponent, renderTo?: string) {
        super(aOwner, renderTo);
        if (this.__HTML__) $(this.jComponent).html(this.__HTML__);
        if (this.onCreate != null) (V.tryAndCatch(() => { this.onCreate(); }))
    }

    private addComponent(component: VXC.TComponent): void {
        this.components.add(component);
    }


    public draw(reCreate: boolean,drawChilds : boolean = true) {
        super.draw(reCreate);
        if (drawChilds) {
            this.components.forEach((item: VXC.TComponent) => {
                item.draw(reCreate);
                return true;
            });
        }
    }

    public get isContainer(): boolean {
        return true;
    }

    public createBootstrapRow(): TBootstrapRow {
        return new TBootstrapRow(this);
    }

    public createBootstrapRowFluid(): TBootstrapRowFluid {
        return new TBootstrapRowFluid(this);
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
        TContainer.activeQueries.add(query);
        
        if (TContainer.activeQueries.length() == 1) this.showLoadingProgressBar();
    }

    private removeQuery(query: VXD.VXDatasetInt) {
        if (query == null) return;
        if (!query.ShowProgressBar) return;
        TContainer.activeQueries.remove(query);

        if (TContainer.activeQueries.length() == 0) this.hideLoadingProgressBar();
    }

}

export class TBootstrapRow extends TContainer {
    constructor(aOwner: VXC.TComponent, renderTo?: string) {
        super(aOwner, renderTo);
        this.jComponent.addClass('row');
    }

    public createBootstrapSpan(spanSize: number): TBootstrapSpan {
        return new TBootstrapSpan(this, null, spanSize);
    }
}

export class TBootstrapRowFluid extends TContainer {
    constructor(aOwner: VXC.TComponent, renderTo?: string) {
        super(aOwner, renderTo);
        this.jComponent.addClass('row-fluid');
    }

    public createBootstrapSpan(spanSize: number): TBootstrapSpan {
        return new TBootstrapSpan(this, null, spanSize);
    }
}


export class TBootstrapSpan extends TContainer {
    constructor(aOwner: VXC.TComponent, renderTo?: string, spanSize: number = 1 ) {
        super(aOwner, renderTo);
        this.jComponent.addClass('span' + spanSize);
    }

}