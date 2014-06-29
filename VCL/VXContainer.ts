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
    public onClicked: (sender: VXC.TComponent) => void;
    public onMouseOver: (sender: VXC.TComponent) => void;
    public onMouseOut: (sender: VXC.TComponent) => void;


    constructor(aOwner: VXC.TComponent, renderTo?: string) {
        super(aOwner, renderTo);
        if (this.__HTML__) $(this.jComponent).html(this.__HTML__);
        if (this.onCreate != null) (V.tryAndCatch(() => { this.onCreate(); }))
        this.jComponent.off("click").click(() => {
            if (this.onClicked != null) (V.tryAndCatch(() => { this.onClicked(aOwner); }));
        })
        this.jComponent.off("mouseover").mouseover(() => {
            if (this.onMouseOver != null) (V.tryAndCatch(() => { this.onMouseOver(aOwner); }));
        })
        this.jComponent.off("mouseout").mouseout(() => {
            if (this.onMouseOut != null) (V.tryAndCatch(() => { this.onMouseOut(aOwner); }));
        })
    }

    private addComponent(component: VXC.TComponent): void {
        this.components.add(component);
    }


    public draw(reCreate: boolean, drawChilds: boolean = true) {
        super.draw(reCreate);
        if (drawChilds) {
            this.components.forEach((item: VXC.TComponent) => {
                item.draw(reCreate);
                return true;
            });
        }
    }

    private __popoverFrom: V.TComponent;
    public hide() {
        if (this.__popoverFrom) this.__popoverFrom.popover(this);
        super.hide();
    }

    public show() {
        super.show();
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


    public showLoadingProgressBar() {
        if (V.Global.__SPINNER__) return;
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

        var jq = $("#progresscerrncnter");
        if (jq.length == 0) {
            jq = $("<div id='progresscerrncnter'>");
            jq.css('position', 'fixed');
            jq.css('top', '50%');
            jq.css('left', '50%');
            jq.css('z-index', '9999');
            $("body").append(jq);
        }
        V.Global.__SPINNER__ = new Spinner(opts).spin(document.getElementById('progresscerrncnter'));
    }

    public hideLoadingProgressBar() {
        if (V.Global.__SPINNER__) {
            V.Global.__SPINNER__.stop();
            V.Global.__SPINNER__ = null;
            var jq = $("#progresscerrncnter");
            jq.empty();
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

    public createBootstrapSpan(spanSize: number, offset: number = 0): TBootstrapSpan {
        return new TBootstrapSpan(this, null, spanSize, offset);
    }
}

export class TBootstrapRowFluid extends TContainer {
    constructor(aOwner: VXC.TComponent, renderTo?: string) {
        super(aOwner, renderTo);
        this.jComponent.addClass('row-fluid');
    }

    public createBootstrapSpan(spanSize: number, offset: number = 0): TBootstrapSpan {
        return new TBootstrapSpan(this, null, spanSize, offset);
    }
}


export class TBootstrapSpan extends TContainer {
    constructor(aOwner: VXC.TComponent, renderTo?: string, spanSize: number = 1, offset: number = 0) {
        super(aOwner, renderTo);
        this.jComponent.addClass('span' + spanSize);
        if (offset > 0)
            this.jComponent.addClass('offset' + offset);

    }
}


export class TRepeater extends TContainer {
    public onGetItem: (index: number) => VXC.TComponent;

    private _pagesize: number = 10;
    public get PageSize(): number {
        return this._pagesize;
    }
    public set PageSize(val: number) {
        if (val != this._pagesize) {
            this._pagesize = Math.floor(val);
            if (this._pagesize < 1) this._pagesize = 1;
            this.drawDelayed(true);
        }
    }

    private _currentindex: number;
    public get CurrentIndex(): number {
        return this._currentindex;
    }
    public set CurrentIndex(val: number) {
        if (val != this._pagesize) {
            this._currentindex = val;
            this.drawDelayed(true);
        }
    }


    private _currntItem: VXC.TComponent;
    public get currentItem(): VXC.TComponent {
        return this._currntItem;
    }

    public set currentItem(val: VXC.TComponent) {
        if (val != this._currntItem) {
            this.currentItem = val;
            this.drawDelayed(true);
        }
    }

    private drawItems() {
        this.jContent.empty(); //clear all subcomponents
        this.jPagination.empty(); //clear all subcomponents
        if (!this.CurrentIndex) this.CurrentIndex = 0;
        var startPage = Math.floor(this.CurrentIndex / this.PageSize);
        for (var i = 0; i < this.PageSize; i++) {
            var idx = startPage * this.PageSize + i;
            if (this.onGetItem) {
                var ctrl = this.onGetItem(idx);
                var block = $("<div>").css("display", "block");
                block.append(ctrl.jComponent);
                this.jContent.append(block);
            } else {
                V.Application.raiseException("TRepeater must provide a component with onGetItem(index : number)")
                return;
            }
        }

        var ul: JQuery = $("<ul>");
        this.jPagination.append(ul);

        var prevBtn: JQuery = $("<li>");
        if (!startPage) prevBtn.addClass('disabled');
        ul.append(prevBtn.append($("<a>").addClass('icon-chevron-left')));
        var nextBtn: JQuery = $("<li>");
        ul.append(nextBtn.append($("<a>").addClass('icon-chevron-right')));
    }


    private _pagerVisible: boolean = true;
    public get PagerVisible(): boolean {
        return this._pagerVisible;
    }
    public set PagerVisible(val: boolean) {
        if (val != this._pagerVisible) {
            this._pagerVisible = val;
            this.drawDelayed(true);
        }
    }

    private _paginationsize: V.PaginationSize = V.PaginationSize.Default;
    public get PaginationSize(): V.PaginationSize {
        return this._paginationsize;
    }
    public set PaginationSize(val: V.PaginationSize) {
        if (val != this._paginationsize) {
            this._paginationsize = val;
            this.drawDelayed(true);
        }
    }

    private jContent: JQuery;
    private jPagination: JQuery;
    public create() {
        this.jComponent.empty(); //clear all subcomponents
        this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'div', this.FitToWidth, this.FitToHeight);
        this.jContent = $("<div>");
        this.jPagination = $("<div>").addClass('pagination').addClass('pagination-right');
        if (this.PaginationSize == V.PaginationSize.Large) {
            this.jPagination.addClass('pagination-large');
        }
        else if (this.PaginationSize == V.PaginationSize.Small) {
            this.jPagination.addClass('pagination-small');
        }
        else if (this.PaginationSize == V.PaginationSize.Mini) {
            this.jPagination.addClass('pagination-mini');
        }

        this.jComponent.append(this.jContent);
        if (this.PagerVisible) this.jComponent.append(this.jPagination);
    }

    public draw(reCreate: boolean) {
        if (!this.parentInitialized()) return;
        super.draw(reCreate);
        this.drawItems();
    }
}