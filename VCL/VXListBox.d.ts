import VXC = require("./VXComponent");
import VXO = require("./VXObject");
import VXM = require("./VXMenu");
import V = require("./VCL");
export declare class TListbox extends VXC.TComponent {
    items: VXO.TCollection<TListboxItem>;
    createItem(value: string, text?: string): TListboxItem;
    onChanged: (sender: TListbox) => void;
    private jListBox;
    create(): void;
    draw(reCreate: boolean): void;
}
export declare class TListboxItem extends VXM.TMenuItem {
    constructor();
    private _value;
    Value: string;
}
export declare class TTreeNodeItem extends VXM.TMenuItem {
    constructor();
    onClicked: (item: V.TTreeNodeItem) => void;
    private showChilds();
    private hideChilds();
    private select(select);
    create(): void;
    private _expanded;
    Expanded: boolean;
    private _selectable;
    Selectable: boolean;
    private parentNode;
    ParentNode: TTreeNodeItem;
    private _value;
    Value: string;
    private jItemLI;
    private jItemUL;
    private jItemI;
    private jItemSPAN;
    private jItemTEXT;
    private tree;
}
export declare class TTree extends VXC.TComponent {
    items: VXO.TCollection<TTreeNodeItem>;
    createNode(parentNode: TTreeNodeItem, value: string, text?: string): V.TTreeNodeItem;
    private _selectednNode;
    SelectedNode: TTreeNodeItem;
    onChanged: (sender: TTree) => void;
    collapseAll(): void;
    expandAll(): void;
    private createChilds(prnt);
    create(): void;
    draw(reCreate: boolean): void;
}
