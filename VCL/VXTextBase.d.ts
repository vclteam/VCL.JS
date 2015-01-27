import V = require("./VCL");
import VXC = require("./VXComponent");
import VXD = require("./VXDataset");
export declare class TTextBase extends VXC.TComponent implements V.iTranslatable {
    onClicked: (sender: TTextBase) => void;
    private _rtl;
    Rtl: boolean;
    private _localizable;
    /**
    * In order to localize application each page or component of the application has to have Localizable property set true.
    */
    Localizable: boolean;
    private _textcolor;
    TextColor: string;
    private _textaliggment;
    TextAlignment: V.TextAlignment;
    private _text;
    /**
    * Text specify the text string that labels the control.
    */
    Text: string;
    /**
    @aOwner     Indicates the component that is responsible for streaming and freeing this component.Onwer must be TContainer
    @renderTo   (Optional) the id of the html element that will be the parent node for this component
    @text       (Optional) the initial text value of the component
    **/
    constructor(aOwner: VXC.TComponent, renderTo?: string, text?: string);
    draw(reCreate: boolean): void;
    create(): void;
}
export declare class TDBTextBase extends VXC.TComponent {
    onClicked: () => void;
    private _rtl;
    Rtl: boolean;
    private _textcolor;
    TextColor: string;
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
    private _datafield;
    /**
    * Specifies the field from which the edit control displays data.
    */
    DataField: string;
    DataValue: any;
}
