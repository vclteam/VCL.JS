import V = require("./VCL");
import VXC = require("./VXComponent");
import VXT = require("./VXTextBase");
import VXO = require("./VXObject");
import VXM = require("./VXMenu");
export declare class TText extends VXT.TTextBase {
    constructor(aOwner: VXC.TComponent, renderTo?: string, text?: string);
    private _href;
    Href: string;
    create(): void;
    private _textstyle;
    TextStyle: V.TextStyle;
    draw(reCreate: boolean): void;
}
export declare class TDBText extends VXT.TDBTextBase {
    create(): void;
    draw(reCreate: boolean): void;
}
export declare class TLabel extends VXT.TTextBase {
    private _labelstyle;
    LabelStyle: V.LabelStyle;
    create(): void;
    draw(reCreate: boolean): void;
}
export declare class TDBLabel extends VXT.TDBTextBase {
    private _labelstyle;
    LabelStyle: V.LabelStyle;
    create(): void;
    draw(reCreate: boolean): void;
}
export declare class TBadge extends VXT.TTextBase {
    private _badgestyle;
    BadgeStyle: V.BadgeStyle;
    create(): void;
    draw(reCreate: boolean): void;
}
export declare class TDBBadge extends VXT.TDBTextBase {
    private _badgestyle;
    BadgeStyle: V.BadgeStyle;
    create(): void;
    draw(reCreate: boolean): void;
}
export declare class TTagCloud extends VXC.TComponent {
    /** Custom Format tooltip */
    ToolTipFormat: (item: TTagCloudItem) => string;
    /**
        Use the OnClick event handler to respond when the user clicks the control.
    */
    onClicked: (item: TTagCloudItem) => void;
    private selectedTagItem;
    /**
    @aOwner     Indicates the component that is responsible for streaming and freeing this component.Onwer must be TContainer
    @renderTo   (Optional) the id of the html element that will be the parent node for this component
    **/
    constructor(aOwner: VXC.TComponent, renderTo?: string);
    private compareWeights(a, b);
    private toRGB(code);
    private toHex(ary);
    private colorIncrement(range);
    private tagColor(increment, weighting);
    private _fontstart;
    FontStart: number;
    private _fontend;
    FontEnd: number;
    private _brackets;
    BracketsAroundText: boolean;
    private _colorstart;
    ColorStart: string;
    private _colorend;
    ColorEnd: string;
    create(): void;
    items: V.TCollection<TTagCloudItem>;
    createItem(text: string, value: number): TTagCloudItem;
    draw(reCreate: boolean): void;
}
export declare class TTagCloudItem extends VXO.TCollectionItem {
    private _text;
    Text: string;
    private _value;
    Value: number;
    private _tooltip;
    Tooltip: string;
}
export declare class TPillBoxItem extends VXO.TCollectionItem {
    menuItems: VXM.TMenuItemCollection<VXM.TMenuItem>;
    createMenuItem(text: string, onClicked?: () => void): VXM.TMenuItem;
    private _value;
    Value: string;
    private _text;
    Text: string;
    private _width;
    Width: number;
    private _pillboxstyle;
    PillBoxItemStyle: V.PillBoxStyle;
    private _enableremove;
    EnableRemove: boolean;
    private _tooltip;
    Tooltip: string;
}
export declare class TPillBox extends VXC.TComponent {
    onClicked: (item: TPillBoxItem) => void;
    onRemoved: (item: TPillBoxItem) => void;
    onRemove: (item: TPillBoxItem) => boolean;
    items: V.TCollection<TPillBoxItem>;
    createItem(text: string, style?: V.PillBoxStyle): TPillBoxItem;
    removeItem(item: TPillBoxItem): void;
    create(): void;
    draw(reCreate: boolean): void;
}
export declare class TBreadCrumbItem extends VXO.TCollectionItem {
    private _value;
    Value: string;
    private _textcolor;
    TextColor: string;
    private _text;
    Text: string;
    private _enabled;
    Enabled: boolean;
}
export declare class TBreadCrumb extends VXC.TComponent {
    onClicked: (item: TBreadCrumbItem) => void;
    items: V.TCollection<TBreadCrumbItem>;
    createItem(text: string): TBreadCrumbItem;
    create(): void;
    draw(reCreate: boolean): void;
}
export declare class TPaginationItem extends VXO.TCollectionItem {
    private _pagination;
    private jImage;
    private jItem;
    private jText;
    constructor(aOwner: V.TPagination);
    private _text;
    Text: string;
    private _enabled;
    Enabled: boolean;
    private _buttonicon;
    ButtonIcon: V.ButtonIcon;
    private _iconalignment;
    IconAlignment: V.IconAlignment;
    create(): void;
}
export declare class TPagination extends VXC.TComponent {
    items: V.TCollection<TPaginationItem>;
    onClicked: (item: TPaginationItem) => void;
    createItem(text: string): TPaginationItem;
    private _alignment;
    PaginationAlignment: V.PaginationAlignment;
    private _paginationsize;
    PaginationSize: V.PaginationSize;
    create(): void;
    draw(reCreate: boolean): void;
}
