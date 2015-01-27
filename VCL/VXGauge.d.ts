import VXC = require("./VXComponent");
export declare class TGauge extends VXC.TComponent {
    private _value;
    Value: number;
    private _maxvalue;
    MaxValue: number;
    private _minvalue;
    MinValue: number;
    private _title;
    Title: string;
    private _label;
    /**
    * the that appers below the value
    */
    Label: string;
    private _symbol;
    /**
    * Special symbol to show next to value
    */
    Symbol: string;
    private _gaugecolor;
    GaugeColor: string;
    private _labelcolor;
    LabelColor: string;
    private _levelcolor1;
    LevelColor1: string;
    private _levelcolor2;
    LevelColor2: string;
    private _levelcolor3;
    LevelColor3: string;
    private _humanFriendly;
    /**
    * convert large numbers for min, max, value to human friendly (e.g. 1234567 -> 1.23M)
    */
    HumanFriendly: boolean;
    private _shadow;
    /**
    * convert large numbers for min, max, value to human friendly (e.g. 1234567 -> 1.23M)
    */
    Shadow: boolean;
    constructor(aOwner: VXC.TComponent, renderTo?: string, text?: string);
    private justGage;
    create(): void;
    draw(reCreate: boolean): void;
}
