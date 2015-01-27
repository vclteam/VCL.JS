import V = require("./VCL");
import VXD = require("./VXDataset");
import VXCB = require("./VXChartBase");
export declare class TChartDonut extends VXCB.TChartBase {
    onClicked: (value: V.TDountValue) => void;
    private _showhoverlegend;
    ShowHoverLegend: boolean;
    private _showTextLegend;
    ShowTextLegend: boolean;
    private _humanFriendlyvalue;
    /**
    * Donut become a pie
    */
    HumanFriendlyValueFormat: boolean;
    private _behaveLikePie;
    /**
    * Donut become a pie
    */
    BehaveLikePie: boolean;
    private _showZeroSlices;
    /**
    * Donut show ZeroSlices
    */
    ShowZeroSlices: boolean;
    private _startangle;
    /**
    * Specifies the field from which the edit control displays data.
    */
    StartAngle: number;
    private _endangle;
    /**
    * Specifies the field from which the edit control displays data.
    */
    EndAngle: number;
    private _drawlabel;
    /**
    * Specifies the field from which the edit control displays data.
    */
    DrawLabel: boolean;
    private _drawvalue;
    /**
    * Specifies the field from which the edit control displays data.
    */
    DrawValue: boolean;
    private _titletextsize;
    TextSize: number;
    private _font;
    TextFont: string;
    private _titleTextWeight;
    TitleTextWeight: string;
    values: VXCB.TChartValuesCollection<VXCB.TDountValue>;
    createValue(label: string, value: number): VXCB.TDountValue;
    private _basecolor;
    BaseColor: V.BaseColor;
    private _colorPallete;
    ColorPallete: Array<string>;
    private donut;
    selectedItem(idx: number, fireEvents: boolean): void;
    getData(): any[];
    create(): void;
    private componentToHex(c);
    draw(reCreate: boolean): void;
}
export declare class TDBChartDonut extends TChartDonut {
    private _valuefield;
    /**
    * Specifies the field from which the edit control displays data.
    */
    ValueField: string;
    private _labelfield;
    /**
    * Specifies the field from which the edit control displays data.
    */
    LabelField: string;
    private _dataset;
    /**
      * Specifies the dataset that contains the field it represents.
    **/
    Dataset: VXD.TDataset;
    getData(): any[];
}
