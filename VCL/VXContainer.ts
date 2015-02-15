/// <reference path="Scripts/jquery.d.ts" />
import V = require("./VCL");
import VXO = require("./VXObject");
import VXC = require("./VXComponent");
import VXD = require("./VXDataset");
import VXU = require("./VXUtils");
import VXB = require("./VXInputBase");
import VXDS = require("./VXServer");

declare function Spinner(options: any): void;

export class TContainer extends VXC.TComponent {
    private __HTML__: string;


    /**
    Lists all components owned by the component.
    Use Components to access any of the components owned by this component, such as the components owned by a page
    **/
    public components = new VXO.TCollection<VXC.TComponent>();
    /**
        Use the OnClick event handler to respond when the user clicks the control. 
    **/
    public onClicked: (sender: VXC.TComponent) => void;
    public onMouseEnter: (sender: VXC.TComponent) => void;
    public onMouseOver: (sender: VXC.TComponent) => void;
    public onMouseOut: (sender: VXC.TComponent) => void;
    public onMouseLeave: (sender: VXC.TComponent) => void;

    /**
    @aOwner     Indicates the component that is responsible for streaming and freeing this component.Onwer must be TContainer
    @renderTo   (Optional) the id of the html element that will be the parent node of the component
    **/
    constructor(aOwner: VXC.TComponent, renderTo?: string) {
        super(aOwner, renderTo);
        if (!this.__HTML__) this.__HTML__ = this.getContanierHTML();
        if (this.__HTML__) {
            $(this.jComponent).html(this.__HTML__);
            if (this.__HTML__.toUpperCase().indexOf('<V.') >= 0) {
                var VArr = $(this.jComponent).find('*').each((index, elem) => {
                    if (elem.tagName && elem.tagName.indexOf("V.") == 0) {
                        var elemId = elem.getAttribute('id');
                        if (elemId && elemId.length<1) {
                            V.Application.raiseException(elem.tagName + " component must have an ID");
                            throw elem.tagName + " component must have an ID";
                        }
                        if (elemId && this[elemId]) {
                            V.Application.raiseException("Bad id for element " + elem.tagName+"-property '" + elemId + "' already exists in " + this.getClassName());
                            throw "Bad id for element " + elem.tagName+"-property '" + elem.tagName + "' already exists in " + this.getClassName();
                        }
                        var comp = V.createComponentByElement(elem, this);
                        if (!comp) {
                            V.Application.raiseException(elem.tagName+" component was not found");
                            throw elem.tagName +" component was not found";
                        } else if (elemId) this[elemId] = comp;
                    }
                });
            }

            if (V.Application.getBootstrapVersion() == 3) {
                //check for bootstrap 2 old code
                $(this.jComponent).find('.row-fluid').each((index, elem) => {
                    $(elem).removeClass('row-fluid').addClass('row');
                })
                $(this.jComponent).find("*[class^='span'").each((index, elem) => {
                    if ($(elem).hasClass('span1')) $(elem).removeClass('span1').addClass('col-md-1');
                    else if ($(elem).hasClass('span2')) $(elem).removeClass('span2').addClass('col-md-2');
                    else if ($(elem).hasClass('span3')) $(elem).removeClass('span3').addClass('col-md-3');
                    else if ($(elem).hasClass('span4')) $(elem).removeClass('span4').addClass('col-md-4');
                    else if ($(elem).hasClass('span5')) $(elem).removeClass('span5').addClass('col-md-5');
                    else if ($(elem).hasClass('span6')) $(elem).removeClass('span6').addClass('col-md-6');
                    else if ($(elem).hasClass('span7')) $(elem).removeClass('span7').addClass('col-md-7');
                    else if ($(elem).hasClass('span8')) $(elem).removeClass('span8').addClass('col-md-8');
                    else if ($(elem).hasClass('span9')) $(elem).removeClass('span9').addClass('col-md-9');
                    else if ($(elem).hasClass('span10')) $(elem).removeClass('span10').addClass('col-md-10');
                    else if ($(elem).hasClass('span11')) $(elem).removeClass('span11').addClass('col-md-11');
                    else if ($(elem).hasClass('span12')) $(elem).removeClass('span12').addClass('col-md-12');
                })
                $(this.jComponent).find("*[class^='offset'").each((index, elem) => {
                    if ($(elem).hasClass('offset1')) $(elem).removeClass('offset1').addClass('col-md-offset-1');
                    else if ($(elem).hasClass('offset2')) $(elem).removeClass('offset2').addClass('col-md-offset-2');
                    else if ($(elem).hasClass('offset3')) $(elem).removeClass('offset3').addClass('col-md-offset-3');
                    else if ($(elem).hasClass('offset4')) $(elem).removeClass('offset4').addClass('col-md-offset-4');
                    else if ($(elem).hasClass('offset5')) $(elem).removeClass('offset5').addClass('col-md-offset-5');
                    else if ($(elem).hasClass('offset6')) $(elem).removeClass('offset6').addClass('col-md-offset-6');
                    else if ($(elem).hasClass('offset7')) $(elem).removeClass('offset7').addClass('col-md-offset-7');
                    else if ($(elem).hasClass('offset8')) $(elem).removeClass('offset8').addClass('col-md-offset-8');
                    else if ($(elem).hasClass('offset9')) $(elem).removeClass('offset9').addClass('col-md-offset-9');
                    else if ($(elem).hasClass('offset10')) $(elem).removeClass('offset10').addClass('col-md-offset-10');
                    else if ($(elem).hasClass('offset11')) $(elem).removeClass('offset11').addClass('col-md-offset-11');
                    else if ($(elem).hasClass('offset12')) $(elem).removeClass('offset12').addClass('col-md-offset-12');
                })


            }
            //translate the page
            if (V.Application.ActiveLanguage) {
                var trnsElem = $(this.jComponent).find('[data-localizable]');
                trnsElem.each((index, elem: HTMLElement) => {
                    if (!elem.childElementCount)
                        elem.innerHTML = V.Application.getLanguageTranslation(V.Application.ActiveLanguage,elem.innerHTML);
                })
            }
        }
        if (this.onCreate != null) (V.tryAndCatch(() => { this.onCreate(); }))
        this.jComponent.off("click").click((e) => {
            if (this.onClicked != null) (V.tryAndCatch(() => { this.onClicked(this); }));
        })
        this.jComponent.off("mouseover").mouseover(() => {
            if (this.onMouseOver != null) (V.tryAndCatch(() => { this.onMouseOver(this); }));
        })
        this.jComponent.off("mouseout").mouseout(() => {
            if (this.onMouseOut != null) (V.tryAndCatch(() => { this.onMouseOut(this); }));
        })
        this.jComponent.off("mouseenter").mouseenter(() => {
            if (this.onMouseEnter != null) (V.tryAndCatch(() => { this.onMouseEnter(this); }));
        })
        this.jComponent.off("mouseleave").mouseleave(() => {
            if (this.onMouseLeave != null) (V.tryAndCatch(() => { this.onMouseLeave(this); }));
        })
    }

    private static __classPath: string;
    private static __setClassPath(path: string) {
        if (!path) return;
        var paths = path.split('/');
        if (paths.length == 1) this.__classPath = "";
        else this.__classPath = paths.slice(0, paths.length - 1).join('/');
    }

    public static getClassPath() {
        return this.__classPath ? this.__classPath : "";
    }

    private _backgroundimageurl: string;
    public get BackgroundImageURL(): string {
        return this._backgroundimageurl;
    }
    public set BackgroundImageURL(val: string) {
        if (val != this._backgroundimageurl) {
            this._backgroundimageurl = val;
            this.drawDelayed(true);
        }
    }

    private _overflow: V.Overflow;
    /**The overflow property specifies what happens if content overflows an element's box**/
    public get Overflow(): V.Overflow {
        return this._overflow;
    }
    public set Overflow(val: V.Overflow) {
        if (val != this._overflow) {
            this._overflow = val;
            this.drawDelayed(false);
        }

    }

    private _overflow_x: V.Overflow_X;
    /**The overflow property specifies what happens if content overflows an element's box**/
    public get Overflow_X(): V.Overflow_X {
        return this._overflow_x;
    }
    public set Overflow_X(val: V.Overflow_X) {
        if (val != this._overflow_x) {
            this._overflow_x = val;
            this.drawDelayed(false);
        }

    }

    private _overflow_y: V.Overflow_Y;
    /**The overflow property specifies what happens if content overflows an element's box**/
    public get Overflow_Y(): V.Overflow_Y {
        return this._overflow_y;
    }
    public set Overflow_Y(val: V.Overflow_Y) {
        if (val != this._overflow_y) {
            this._overflow_y = val;
            this.drawDelayed(false);
        }
    }


    private _backgroundcolor: string;
    /**The background-color property sets the background color of an element.**/
    public get BackgroundColor(): string {
        return this._backgroundcolor;
    }
    public set BackgroundColor(val: string) {
        if (V.Application.checkColorString(val)) {
            if (val != this._backgroundcolor) {
                this._backgroundcolor = val;
                this.drawDelayed(false);
            }
        }
    }

    private _backgroundopacity: number = 1;
    public get BackgroundColorOpacity(): number {
        return this._backgroundopacity;
    }
    public set BackgroundColorOpacity(val: number) {
        if (val != this._backgroundopacity) {
            this._backgroundopacity = val;
            this.drawDelayed(false);
        }
    }

    private addComponent(component: VXC.TComponent): void {
        this.components.add(component);
    }

    public getContanierHTML() {
        return this.__HTML__;
    }


    /**
     Check all input for validation - return true if everything is OK
    **/
    public ValidateInputs(): boolean {
        return this.validateContainer(this.components);
    }

    private validateContainer(components: VXO.TCollection<VXC.TComponent>): boolean {
        var containerValid = true;
        components.forEach((item) => {
            if (item instanceof VXB.TEditorBase) {
                var itm: VXB.TEditorBase = <VXB.TEditorBase>item;
                var userDefMessage = null;
                if (itm.onValidate) {
                    userDefMessage = itm.onValidate(this);
                    if (userDefMessage) {
                        itm.ShowErrorMessage(userDefMessage)
                        containerValid = false;
                    }
                }
                if (!userDefMessage && itm.Required && itm.isEmpty()) {
                    itm.ShowErrorMessage(V.Application.LocaleSettings.MSG_This_value_is_required)
                    containerValid = false;
                } else if (!userDefMessage && itm.MinLength > 0 && itm.textLength() < itm.MinLength) {
                    itm.ShowErrorMessage(V.Application.LocaleSettings.MSG_This_value_is_not_minimum.replace('%s', itm.MinLength.toString()));
                    containerValid = false;
                } else if(!userDefMessage) {
                    itm.HideErrorMessage();
                }
            } else if (item instanceof TContainer) {
                if (!this.validateContainer((<TContainer>item).components)) containerValid = false;
            }
        })
        return containerValid;
    }

    private removeShadow() {
        this.jComponent.removeClass('jquery-shadow-raised jquery-perspective jquery-shadow jquery-shadow-lifted');
        this.jComponent.removeClass('jquery-shadow-sides jquery-shadow-sides-vt-2 jquery-shadow-sides-vt-1 jquery-shadow-sides-hz-1 jquery-shadow-sides-hz-2');
    }

    public draw(reCreate: boolean, drawChilds: boolean = true) {
        //if (!this.parentInitialized()) return;
        super.draw(reCreate);
        if (this.BackgroundColor) {
            if (!this.BackgroundColorOpacity) this.jComponent.css('background-color', this.BackgroundColor);
            else this.jComponent.css('background-color', V.Application.hexColorToRGB(this.BackgroundColor, this.BackgroundColorOpacity));

        }

        if (this.Overflow) {
            if (this.Overflow == V.Overflow.Visible) this.jComponent.css('overflow', 'visible');
            else if (this.Overflow == V.Overflow.Hidden) this.jComponent.css('overflow', 'hidden');
            else if (this.Overflow == V.Overflow.Scroll) this.jComponent.css('overflow', 'scroll');
            else if (this.Overflow == V.Overflow.Auto) this.jComponent.css('overflow', 'auto');
        }

        if (this.Overflow_X) {
            if (this.Overflow_X == V.Overflow_X.Visible) this.jComponent.css('overflow-x', 'visible');
            else if (this.Overflow_X == V.Overflow_X.Hidden) this.jComponent.css('overflow-x', 'hidden');
            else if (this.Overflow_X == V.Overflow_X.Scroll) this.jComponent.css('overflow-x', 'scroll');
            else if (this.Overflow_X == V.Overflow_X.Auto) this.jComponent.css('overflow-x', 'auto');
        }

        if (this.Overflow_Y) {
            if (this.Overflow_Y == V.Overflow_Y.Visible) this.jComponent.css('overflow-y', 'visible');
            else if (this.Overflow_Y == V.Overflow_Y.Hidden) this.jComponent.css('overflow-y', 'hidden');
            else if (this.Overflow_Y == V.Overflow_Y.Scroll) this.jComponent.css('overflow-y', 'scroll');
            else if (this.Overflow_Y == V.Overflow_Y.Auto) this.jComponent.css('overflow-y', 'auto');
        }

        this.removeShadow();
        if (this.ShadowOptions == V.ShadowOptions.Perspective) {
            this.jComponent.addClass('jquery-shadow jquery-perspective');
        } else if (this.ShadowOptions == V.ShadowOptions.Raised) {
            this.jComponent.addClass('jquery-shadow jquery-shadow-raised');
        } else if (this.ShadowOptions == V.ShadowOptions.Lifted) {
            this.jComponent.addClass('jquery-shadow jquery-shadow-lifted');
        } else if (this.ShadowOptions == V.ShadowOptions.Side_hz_1) {
            this.jComponent.addClass('jquery-shadow jquery-shadow-sides jquery-shadow-sides-hz-1');
        } else if (this.ShadowOptions == V.ShadowOptions.Side_hz_2) {
            this.jComponent.addClass('jquery-shadow jquery-shadow-sides jquery-shadow-sides-hz-2');
        } else if (this.ShadowOptions == V.ShadowOptions.Side_vt_1) {
            this.jComponent.addClass('jquery-shadow jquery-shadow-sides jquery-shadow-sides-vt-1');
        } else if (this.ShadowOptions == V.ShadowOptions.Side_vt_2) {
            this.jComponent.addClass('jquery-shadow jquery-shadow-sides jquery-shadow-sides-vt-2');
        }


        if (this.BackgroundImageURL != null && this.BackgroundImageURL.length > 0) {
            this.jComponent.css('background-image', 'url(' + this.BackgroundImageURL + ')').css('background-size', 'cover').css('background-repeat', 'no-repeat');
        }


        if (drawChilds) {
            this.components.forEach((item: VXC.TComponent) => {
                if (item instanceof VXC.TComponent)  item.draw(reCreate);
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


    /** add component with class="row" to the container
    @returns    TBootstrapRow component
    **/
    public createBootstrapRow(): TBootstrapRow {
        return new TBootstrapRow(this);
    }

    /** add component with class="row-fluid" to the container
    @returns    createBootstrapRowFluid component
    **/
    public createBootstrapRowFluid(): TBootstrapRowFluid {
        return new TBootstrapRowFluid(this);
    }


    public showLoadingProgressBar() {
        if ((<any>V.Application).Global__SPINNER__) return;
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
        (<any>V.Application).Global__SPINNER__ = new Spinner(opts).spin(document.getElementById('progresscerrncnter'));
    }

    public hideLoadingProgressBar() {
        if ((<any>V.Application).Global__SPINNER__) {
            (<any>V.Application).Global__SPINNER__.stop();
            (<any>V.Application).Global__SPINNER__ = null;
            var jq = $("#progresscerrncnter");
            jq.empty();
        }
    }


    private static activeQueries = new VXO.collections.Set<VXU.VXDatasetInt>();
    private addQuery(query: VXU.VXDatasetInt) {
        if (query == null) return;
        if (!query.ShowProgressBar) return;
        TContainer.activeQueries.add(query);
        if (TContainer.activeQueries.length() == 1) this.showLoadingProgressBar();
    }

    private removeQuery(query: VXU.VXDatasetInt) {
        if (query == null) return;
        if (!query.ShowProgressBar) return;
        TContainer.activeQueries.remove(query);
        if (TContainer.activeQueries.length() == 0) this.hideLoadingProgressBar();
    }

    private _shadow: V.ShadowOptions = V.ShadowOptions.None
    public get ShadowOptions(): V.ShadowOptions {
        return this._shadow;
    }
    public set ShadowOptions(val: V.ShadowOptions) {
        if (val != this._shadow) {
            this._shadow = val;
            this.drawDelayed(false);
        }
    }
}


export class TBootstrapRow extends TContainer {
    /**
    @aOwner     Indicates the component that is responsible for streaming and freeing this component.Onwer must be TContainer
    @renderTo   (Optional) the id of the html element that will be the parent node for this component
    **/
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
                var block = this.createBootstrapRowFluid();
                
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
        val = V.convertaAnyToBoolean(val);
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



