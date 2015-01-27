/// <reference path="Scripts/jquery.d.ts" />
import V = require("./VCL");
import VXC = require("./VXComponent");
import VXO = require("./VXObject");
import VXD = require("./VXDataset");
export declare class TSparkBase extends VXC.TComponent {
    values: VXO.TCollection<TSparkValue>;
    createValue(value: number): TSparkValue;
    canvas: JQuery;
    context: CanvasRenderingContext2D;
    onClicked: (sender: TSparkBase) => void;
    private _labelVisible;
    LabelVisible: boolean;
    private _labetextcolor;
    LabelTextColor: string;
    private _labeltext;
    LabelText: string;
    private _labelposition;
    LabelPosition: V.LabelPosition;
    prepareCanvas(width: any, height: any): void;
    getData(): number[];
    jLabel: JQuery;
    create(): void;
    draw(reCreate: boolean): void;
}
export declare class TSparkPie extends TSparkBase {
    colours: string[];
    /**
    @aOwner     Indicates the component that is responsible for streaming and freeing this component.Onwer must be TContainer
    @renderTo   (Optional) the id of the html element that will be the parent node for this component
    **/
    constructor(aOwner: VXC.TComponent, renderTo?: string);
    create(): void;
}
export declare class TSparkLine extends TSparkBase {
    private _strokewidth;
    StrokeWidth: number;
    /**
    @aOwner     Indicates the component that is responsible for streaming and freeing this component.Onwer must be TContainer
    @renderTo   (Optional) the id of the html element that will be the parent node for this component
    **/
    constructor(aOwner: VXC.TComponent, renderTo?: string);
    private _strokecolor;
    StrokeColor: string;
    private _color;
    Color: string;
    create(): void;
}
export declare class TSparkBar extends TSparkBase {
    colours: string[];
    private _spacing;
    Spacing: number;
    /**
    @aOwner     Indicates the component that is responsible for streaming and freeing this component.Onwer must be TContainer
    @renderTo   (Optional) the id of the html element that will be the parent node for this component
    **/
    constructor(aOwner: VXC.TComponent, renderTo?: string);
    create(): void;
}
export declare class TDBSparkBar extends TSparkBar {
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
    getData(): number[];
    create(): void;
}
export declare class TDBSparkPie extends TSparkPie {
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
    getData(): number[];
    create(): void;
}
export declare class TDBSparkLine extends TSparkLine {
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
    getData(): number[];
    create(): void;
}
export declare class TSparkValue extends VXO.TCollectionItem {
    private _value;
    Value: number;
}
