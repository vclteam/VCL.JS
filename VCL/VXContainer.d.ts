/// <reference path="Scripts/jquery.d.ts" />
import V = require("./VCL");
import VXO = require("./VXObject");
import VXC = require("./VXComponent");
export declare class TContainer extends VXC.TComponent {
    private __HTML__;
    /**
    Lists all components owned by the component.
    Use Components to access any of the components owned by this component, such as the components owned by a page
    **/
    components: VXO.TCollection<VXC.TComponent>;
    /**
        Use the OnClick event handler to respond when the user clicks the control.
    **/
    onClicked: (sender: VXC.TComponent) => void;
    onMouseEnter: (sender: VXC.TComponent) => void;
    onMouseOver: (sender: VXC.TComponent) => void;
    onMouseOut: (sender: VXC.TComponent) => void;
    onMouseLeave: (sender: VXC.TComponent) => void;
    /**
    @aOwner     Indicates the component that is responsible for streaming and freeing this component.Onwer must be TContainer
    @renderTo   (Optional) the id of the html element that will be the parent node of the component
    **/
    constructor(aOwner: VXC.TComponent, renderTo?: string);
    private static __classPath;
    private static __setClassPath(path);
    static getClassPath(): string;
    private _backgroundimageurl;
    BackgroundImageURL: string;
    private _overflow;
    /**The overflow property specifies what happens if content overflows an element's box**/
    Overflow: V.Overflow;
    private _overflow_x;
    /**The overflow property specifies what happens if content overflows an element's box**/
    Overflow_X: V.Overflow_X;
    private _overflow_y;
    /**The overflow property specifies what happens if content overflows an element's box**/
    Overflow_Y: V.Overflow_Y;
    private _backgroundcolor;
    /**The background-color property sets the background color of an element.**/
    BackgroundColor: string;
    private _backgroundopacity;
    BackgroundColorOpacity: number;
    private addComponent(component);
    getContanierHTML(): string;
    /**
     Check all input for validation - return true if everything is OK
    **/
    ValidateInputs(): boolean;
    private validateContainer(components);
    private removeShadow();
    draw(reCreate: boolean, drawChilds?: boolean): void;
    private __popoverFrom;
    hide(): void;
    show(): void;
    isContainer: boolean;
    /** add component with class="row" to the container
    @returns    TBootstrapRow component
    **/
    createBootstrapRow(): TBootstrapRow;
    /** add component with class="row-fluid" to the container
    @returns    createBootstrapRowFluid component
    **/
    createBootstrapRowFluid(): TBootstrapRowFluid;
    showLoadingProgressBar(): void;
    hideLoadingProgressBar(): void;
    private static activeQueries;
    private addQuery(query);
    private removeQuery(query);
    private _shadow;
    ShadowOptions: V.ShadowOptions;
}
export declare class TBootstrapRow extends TContainer {
    /**
    @aOwner     Indicates the component that is responsible for streaming and freeing this component.Onwer must be TContainer
    @renderTo   (Optional) the id of the html element that will be the parent node for this component
    **/
    constructor(aOwner: VXC.TComponent, renderTo?: string);
    createBootstrapSpan(spanSize: number, offset?: number): TBootstrapSpan;
}
export declare class TBootstrapRowFluid extends TContainer {
    constructor(aOwner: VXC.TComponent, renderTo?: string);
    createBootstrapSpan(spanSize: number, offset?: number): TBootstrapSpan;
}
export declare class TBootstrapSpan extends TContainer {
    constructor(aOwner: VXC.TComponent, renderTo?: string, spanSize?: number, offset?: number);
}
export declare class TRepeater extends TContainer {
    onGetItem: (index: number) => VXC.TComponent;
    private _pagesize;
    PageSize: number;
    private _currentindex;
    CurrentIndex: number;
    private _currntItem;
    currentItem: VXC.TComponent;
    private drawItems();
    private _pagerVisible;
    PagerVisible: boolean;
    private _paginationsize;
    PaginationSize: V.PaginationSize;
    private jContent;
    private jPagination;
    create(): void;
    draw(reCreate: boolean): void;
}
