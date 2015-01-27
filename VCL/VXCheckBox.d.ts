import VXC = require("./VXComponent");
import V = require("./VCL");
import VXD = require("./VXDataset");
import VXO = require("./VXObject");
import VXCO = require("./VXContainer");
export declare class TCheckBoxBase extends VXC.TComponent {
    onClicked: (sender: TCheckBoxBase) => void;
    onChanged: (sender: TCheckBoxBase) => void;
    jCheckbox: JQuery;
    jText: JQuery;
    private _text;
    /**
    * Text specify the text string that labels the control.
    */
    Text: string;
    create(): void;
}
export declare class TRadioButtonBase extends VXC.TComponent implements V.iTranslatable {
    onClicked: (sender: TRadioButtonBase) => void;
    onChanged: (sender: TRadioButtonBase) => void;
    jRadioButton: JQuery;
    jText: JQuery;
    private _text;
    /**
    * Text specify the text string that labels the control.
    */
    Text: string;
    private _localizable;
    /**
    * In order to localize application each page or component of the application has to have Localizable property set true.
    */
    Localizable: boolean;
    private _group;
    /**
    * Text specify the group string grouping the radio button together.
    */
    Group: string;
    create(): void;
}
export declare class TCheckBox extends TCheckBoxBase {
    private _checked;
    Checked: boolean;
    constructor(aOwner: VXC.TComponent, renderTo?: string, text?: string);
    create(): void;
    draw(reCreate: boolean): void;
}
export declare class TRadioButton extends TRadioButtonBase {
    private _checked;
    Checked: boolean;
    constructor(aOwner: VXC.TComponent, renderTo?: string, text?: string);
    create(): void;
    draw(reCreate: boolean): void;
}
export declare class TDBCheckBox extends TCheckBoxBase {
    private _dataset;
    Dataset: VXD.TDataset;
    private _datafield;
    /**
    * Specifies the field from which the edit control displays data.
    */
    DataField: string;
    private validateEnabled();
    private DataValue;
    create(): void;
    draw(reCreate: boolean): void;
}
export declare class TVerticalCheckBoxItemCollection<T> extends VXO.TCollection<TVerticalCheckBoxItem> {
    private owner;
    constructor(aOwner: TVerticalCheckBoxList);
    add(item: TVerticalCheckBoxItem): boolean;
    refresh(): void;
    EndUpdate(): void;
}
export declare class TVerticalCheckBoxItem extends VXO.TCollectionItem {
    private _checked;
    Checked: boolean;
    private _enabled;
    Enabled: boolean;
    private _filter;
    private _visible;
    Visible: boolean;
    private _text;
    Text: string;
}
export declare class TVerticalCheckBoxList extends VXCO.TContainer {
    onChanged: (sender: TVerticalCheckBoxItem) => void;
    /**
    @aOwner     Indicates the component that is responsible for streaming and freeing this component.Onwer must be TContainer
    @renderTo   (Optional) the id of the html element that will be the parent node for this component
    **/
    constructor(aOwner: VXC.TComponent, renderTo?: string);
    items: TVerticalCheckBoxItemCollection<TVerticalCheckBoxItem>;
    createItem(text: string, checked?: boolean): TVerticalCheckBoxItem;
    create(): void;
    private _groupMarginLeft;
    GroupMarginLeft: number;
    private _groupMarginright;
    GroupMarginRight: number;
    private _maxItemsInColumn;
    MaxItemsInColumn: number;
    private _columnWidth;
    MaxColumnWidth: number;
    applyFilter(filterCallback: (item: TVerticalCheckBoxItem) => boolean): void;
    clearFilter(): void;
    draw(reCreate: boolean): void;
}
