import VXC = require("./VXComponent");
import VXM = require("./VXMenu");
export declare class TBarBase extends VXC.TComponent {
    items: VXM.TMenuItemCollection<VXM.TMenuItem>;
    createItem(text: string, onClicked?: () => void): VXM.TMenuItem;
}
export declare class TNavBar extends TBarBase {
    private _piils;
    Pills: boolean;
    /**
    @aOwner     Indicates the component that is responsible for streaming and freeing this component.Onwer must be TContainer
    @renderTo   (Optional) the id of the html element that will be the parent node for this component
    **/
    constructor(aOwner: VXC.TComponent, renderTo?: string);
    create(): void;
    draw(reCreate: boolean): void;
}
export declare class TSideBar extends TBarBase {
    private _transparent;
    Transparent: boolean;
    private _header;
    Header: string;
    create(): void;
    draw(reCreate: boolean): void;
}
