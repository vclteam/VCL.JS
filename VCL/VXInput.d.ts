/// <reference path="Scripts/jquery.d.ts" />
import VXC = require("./VXComponent");
import VXB = require("./VXInputBase");
import VXD = require("./VXDataset");
import VXM = require("./VXMenu");
import V = require("./VCL");
import VXO = require("./VXObject");
export declare class TInput extends VXB.TInputBase {
    private _text;
    Text: string;
    private _buttonclickonenter;
    ButtonClickOnEnter: boolean;
    create(): void;
    draw(reCreate: boolean): void;
}
export declare class TDBInput extends VXB.TInputBase {
    private _dataset;
    /**
    * Specifies the dataset that contains the field it represents.
    */
    Dataset: VXD.TDataset;
    /**
        @aOwner     Indicates the component that is responsible for streaming and freeing this component.Onwer must be TContainer
        @renderTo   (Optional) the id of the html element that will be the parent node for this component
        @dataset
        @datafield
    **/
    constructor(aOwner: VXC.TComponent, renderTo?: string, dataset?: V.TDataset, dataField?: string);
    private isEditable();
    /**
    * Specifies the field from which the edit control displays data.(same as DataField)
    */
    Field: string;
    private _datafield;
    /**
    * Specifies the field from which the edit control displays data.(same as Field)
    */
    DataField: string;
    private DataValue;
    private _immidiatepost;
    ImmidiatePost: boolean;
    private _buttonclickonenter;
    ButtonClickOnEnter: boolean;
    create(): void;
    draw(reCreate: boolean): void;
}
export declare class TDBLabeledText extends TDBInput {
    /**
        @aOwner     Indicates the component that is responsible for streaming and freeing this component.Onwer must be TContainer
        @renderTo   (Optional) the id of the html element that will be the parent node for this component
        @dataset
        @datafield
    **/
    constructor(aOwner: VXC.TComponent, renderTo?: string, dataset?: V.TDataset, dataField?: string);
    private _textstyle;
    TextStyle: V.TextStyle;
}
export declare class TInputNumeric extends VXB.TInputBase {
    /**
    @aOwner     Indicates the component that is responsible for streaming and freeing this component.Onwer must be TContainer
    @renderTo   (Optional) the id of the html element that will be the parent node for this component
    **/
    constructor(aOwner: VXC.TComponent, renderTo?: string);
    private _value;
    Value: number;
    private _maxvalue;
    MaxValue: number;
    private _minvalue;
    MinValue: number;
    private _step;
    Step: number;
    private _precision;
    Precision: number;
    create(): void;
    draw(reCreate: boolean): void;
}
export declare class TDBInputNumeric extends VXB.TInputBase {
    /**
    @aOwner     Indicates the component that is responsible for streaming and freeing this component.Onwer must be TContainer
    @renderTo   (Optional) the id of the html element that will be the parent node for this component
    **/
    constructor(aOwner: VXC.TComponent, renderTo?: string);
    private _dataset;
    /**
    * Specifies the dataset that contains the field it represents.
    */
    Dataset: VXD.TDataset;
    private isEditable();
    private _datafield;
    /**
    * Specifies the field from which the edit control displays data.
    */
    DataField: string;
    private DataValue;
    private _step;
    Step: number;
    private _precision;
    Precision: number;
    create(): void;
    draw(reCreate: boolean): void;
}
export declare class TTextArea extends VXB.TInputBase {
    private textarea;
    private _text;
    Text: string;
    private _wrap;
    Wrap: boolean;
    private _readonly;
    Readonly: boolean;
    private _rows;
    Rows: number;
    create(): void;
    draw(reCreate: boolean): void;
}
export declare class TDBTextArea extends VXB.TInputBase {
    private textarea;
    private _dataset;
    /**
    * Specifies the dataset that contains the field it represents.
    */
    Dataset: VXD.TDataset;
    private _wrap;
    Wrap: boolean;
    private _rows;
    Rows: number;
    private validateEnabled();
    private _datafield;
    /**
    * Specifies the field from which the edit control displays data.
    */
    DataField: string;
    private DataValue;
    private _immidiatepost;
    ImmidiatePost: boolean;
    create(): void;
    draw(reCreate: boolean): void;
}
export declare class TTypeaHeadItem extends VXM.TMenuItem {
    private _foreColorValue;
    ForeColorValue: string;
    private _backgroundColorValue;
    BackgroundColorValue: string;
}
export declare class TInputTypeaHead extends VXB.TInputBase {
    private _text;
    Text: string;
    private _highlightMatchedText;
    HighlightMatchedText: boolean;
    Items: VXO.TCollection<TTypeaHeadItem>;
    createItem(text: string, foreColorValue?: string, backgroundColorValue?: string): void;
    create(): void;
    private addColorToItem(xhtml, item);
    draw(reCreate: boolean): void;
}
