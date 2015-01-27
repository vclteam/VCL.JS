import V = require("./VCL");
import VXD = require("./VXDataset");
import VXCB = require("./VXChartBase");
export declare class TChartLineBase extends VXCB.TGridChartBase {
    onClicked: (value: V.TLineValue, series: number, idx: number) => void;
    private _showhoverlegend;
    ShowHoverLegend: boolean;
    private _minY;
    YMin: number;
    private _maxY;
    YMax: number;
    private _series1color;
    Series1Color: string;
    private _series2color;
    Series2Color: string;
    private _series3color;
    Series3Color: string;
    private _series4color;
    Series4Color: string;
    private _series5color;
    Series5Color: string;
    private _series6color;
    Series6Color: string;
    private _series7color;
    Series7Color: string;
    private _series8color;
    Series8Color: string;
    private _series9color;
    Series9Color: string;
    private _series10color;
    Series10Color: string;
    private _series11color;
    Series11Color: string;
    private _series12color;
    Series12Color: string;
    private _series13color;
    Series13Color: string;
    private _series14color;
    Series14Color: string;
    private _series15color;
    Series15Color: string;
    private _series1name;
    Series1Name: string;
    private _series2name;
    Series2Name: string;
    private _series3name;
    Series3Name: string;
    private _series4name;
    Series4Name: string;
    private _series5name;
    Series5Name: string;
    private _series6name;
    Series6Name: string;
    private _series7name;
    Series7Name: string;
    private _series8name;
    Series8Name: string;
    private _series9name;
    Series9Name: string;
    private _series10name;
    Series10Name: string;
    private _series11name;
    Series11Name: string;
    private _series12name;
    Series12Name: string;
    private _series13name;
    Series13Name: string;
    private _series14name;
    Series14Name: string;
    private _series15name;
    Series15Name: string;
    /**
     * When set to false (the default), all null and undefined values in a data series will be ignored and lines will be drawn spanning them.
    **/
    private _continuousine;
    ContinuousLine: boolean;
    /**
     *  enable line smoothing.
    */
    private _smooth;
    Smooth: boolean;
    private _linewidth;
    LineWidth: number;
    private _defSelectionLast;
    SetLastSelected: boolean;
    values: VXCB.TChartValuesCollection<VXCB.TLineValue>;
    createValue(date: any, value1?: number, value2?: number, value3?: number, value4?: number, value5?: number, value6?: number, value7?: number, value8?: number, value9?: number, value10?: number, value11?: number, value12?: number, value13?: number, value14?: number, value15?: number): VXCB.TLineValue;
    getData(): any[];
}
export declare class TChartLine extends TChartLineBase {
    private jChart;
    selectedItem(series: number, idx: number, fireEvents: boolean): void;
    draw(reCreate: boolean): void;
    create(): void;
}
export declare class TChartArea extends TChartLineBase {
    private jChart;
    private _fillopacity;
    FillOpacity: number;
    private _series1areacolor;
    Series1AreaColor: string;
    private _series2areacolor;
    Series2AreaColor: string;
    private _series3areacolor;
    Series3AreaColor: string;
    private _series4areacolor;
    Series4AreaColor: string;
    private _series5areacolor;
    Series5AreaColor: string;
    private _series6areacolor;
    Series6AreaColor: string;
    private _series7areacolor;
    Series7AreaColor: string;
    private _series8areacolor;
    Series8AreaColor: string;
    private _series9areacolor;
    Series9AreaColor: string;
    private _series10areacolor;
    Series10AreaColor: string;
    private _series11areacolor;
    Series11AreaColor: string;
    private _series12areacolor;
    Series12AreaColor: string;
    private _series13areacolor;
    Series13AreaColor: string;
    private _series14areacolor;
    Series14AreaColor: string;
    private _series15areacolor;
    Series15AreaColor: string;
    draw(reCreate: boolean): void;
    create(): void;
}
export declare class TDBChartLine extends TChartLine {
    private _value1field;
    /**
    * Specifies the field from which the edit control displays data.
    */
    ValueField1: string;
    private _value2field;
    /**
    * Specifies the field from which the edit control displays data.
    */
    ValueField2: string;
    private _value3field;
    /**
    * Specifies the field from which the edit control displays data.
    */
    ValueField3: string;
    private _value4field;
    /**
    * Specifies the field from which the edit control displays data.
    */
    ValueField4: string;
    private _value5field;
    /**
    * Specifies the field from which the edit control displays data.
    */
    ValueField5: string;
    private _value6field;
    /**
    * Specifies the field from which the edit control displays data.
    */
    ValueField6: string;
    private _value7field;
    /**
    * Specifies the field from which the edit control displays data.
    */
    ValueField7: string;
    private _value8field;
    /**
    * Specifies the field from which the edit control displays data.
    */
    ValueField8: string;
    private _value9field;
    /**
    * Specifies the field from which the edit control displays data.
    */
    ValueField9: string;
    private _value10field;
    /**
    * Specifies the field from which the edit control displays data.
    */
    ValueField10: string;
    private _value11field;
    /**
    * Specifies the field from which the edit control displays data.
    */
    ValueField11: string;
    private _value12field;
    /**
    * Specifies the field from which the edit control displays data.
    */
    ValueField12: string;
    private _value13field;
    /**
    * Specifies the field from which the edit control displays data.
    */
    ValueField13: string;
    private _value14field;
    /**
    * Specifies the field from which the edit control displays data.
    */
    ValueField14: string;
    private _value15field;
    /**
    * Specifies the field from which the edit control displays data.
    */
    ValueField15: string;
    private _datefield;
    /**
    * Specifies the field from which the edit control displays data.
    */
    DateField: string;
    create(): void;
    private _dataset;
    Dataset: VXD.TDataset;
    getData(): any[];
}
export declare class TDBChartArea extends TChartArea {
    private _value1field;
    /**
    * Specifies the field from which the edit control displays data.
    */
    ValueField1: string;
    private _value2field;
    /**
    * Specifies the field from which the edit control displays data.
    */
    ValueField2: string;
    private _value3field;
    /**
    * Specifies the field from which the edit control displays data.
    */
    ValueField3: string;
    private _value4field;
    /**
    * Specifies the field from which the edit control displays data.
    */
    ValueField4: string;
    private _value5field;
    /**
    * Specifies the field from which the edit control displays data.
    */
    ValueField5: string;
    private _value6field;
    /**
    * Specifies the field from which the edit control displays data.
    */
    ValueField6: string;
    private _datefield;
    /**
    * Specifies the field from which the edit control displays data.
    */
    DateField: string;
    private _dataset;
    Dataset: VXD.TDataset;
    create(): void;
    getData(): any[];
}
