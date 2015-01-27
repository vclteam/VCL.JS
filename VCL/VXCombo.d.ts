/// <reference path="Scripts/jquery.d.ts" />
import V = require("./VCL");
import VXC = require("./VXComponent");
import VXB = require("./VXInputBase");
import VXO = require("./VXObject");
import VXD = require("./VXDataset");
import VXM = require("./VXMenu");
export declare class TComboboxBase extends VXB.TEditorBase {
    private _maxvisibleLines;
    MaxVisibleLines: number;
    private _showsearch;
    ShowSearchBox: boolean;
    private _dropup;
    DropUp: boolean;
    private _borderradius;
    BorderRadius: number;
    private _noneselectedtext;
    /**
    * display selected count insted of values
    * The number of minimum items that will show count insted of values
    */
    NoneSelectedText: string;
    private _showselectioncount;
    /**
    * display selected count insted of values
    * The number of minimum items that will show count insted of values
    */
    ShowSelectionCount: number;
    private _multipleselect;
    MultipleSelect: any;
    private _combostyle;
    ComboStyle: V.ComboStyle;
    private _textaligment;
    TextAlignment: V.TextAlignment;
    /**
    @aOwner     Indicates the component that is responsible for streaming and freeing this component.Onwer must be TContainer
    @renderTo   (Optional) the id of the html element that will be the parent node for this component
    **/
    constructor(aOwner: VXC.TComponent, renderTo?: string);
    items: TComboItemCollection<TComboItem>;
    createItem(value: string, text?: string): TComboItem;
    private _buttonVisible;
    ButtonVisible: boolean;
    private _buttontext;
    ButtonText: string;
    private _buttonicon;
    ButtonIcon: V.ButtonIcon;
    private _buttonstyle;
    ButtonStyle: V.ButtonStyle;
    /**
    * Occurs when the user hit the button component.
    */
    onButtonClicked: () => void;
    private jBtn;
    private jImage;
    private jbtnText;
    create(): void;
    checkAll(): void;
    uncheckAll(): void;
    SelectedItems: V.TComboItem[];
}
export declare class TCombobox extends TComboboxBase {
    Text: string;
    isEmpty(): boolean;
    create(): void;
    closeDropDown(): void;
    draw(reCreate: boolean): void;
}
export declare class TDBCombobox extends TComboboxBase {
    private _dataset;
    /**
    * Specifies the dataset that contains the field it represents.
    */
    Dataset: VXD.TDataset;
    private _datafield;
    /**
    * Specifies the field from which the edit control displays data.
    */
    DataField: string;
    isEmpty(): boolean;
    DataValue: any;
    create(): void;
    closeDropDown(): void;
    draw(reCreate: boolean): void;
}
export declare class TComboItem extends VXM.TMenuItem {
    private _value;
    Value: string;
    private _subtext;
    SubText: string;
    private _group;
    Group: string;
    private _checked;
    Checked: boolean;
}
export declare class TComboItemCollection<T> extends VXO.TCollection<TComboItem> {
    private owner;
    FindItemByValue(value: string): TComboItem;
    constructor(aOwner: TComboboxBase);
    add(item: TComboItem): boolean;
    refresh(): void;
    EndUpdate(): void;
}
