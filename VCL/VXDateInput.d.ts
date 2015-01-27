/// <reference path="Scripts/jquery.d.ts" />
import V = require("./VCL");
import VXC = require("./VXComponent");
import VXI = require("./VXInputBase");
import VXD = require("./VXDataset");
import VXB = require("./VXButton");
export declare class TDateButton extends VXB.TButton {
    onChanged: (date: Date) => void;
    constructor(aOwner: VXC.TComponent, renderTo?: string, text?: string);
    private _calendartype;
    CalendarType: V.CalendarType;
    private dp;
    create(): void;
}
export declare class TDateInputBase extends VXI.TEditorBase {
    private _dateformat;
    DateFormat: string;
    private _calendartype;
    CalendarType: V.CalendarType;
    private _borderradius;
    BorderRadius: number;
    private autoclose;
    AutoClose: boolean;
    jButton: JQuery;
    private jImage;
    create(): void;
}
export declare class TTimeInputBase extends VXI.TEditorBase {
    jButton: JQuery;
    private jImage;
    private _showseconds;
    ShowSeconds: boolean;
    private _showMeridian;
    ShowMeridian: boolean;
    private _minuteStep;
    MinuteStep: number;
    private tm;
    create(): void;
}
export declare class TDateInput extends TDateInputBase {
    private _date;
    Date: Date;
    create(): void;
    draw(reCreate: boolean): void;
}
export declare class TDBDateInput extends TDateInputBase {
    constructor(aOwner: VXC.TComponent, renderTo?: string, text?: string);
    Date: Date;
    private _datafield;
    /**
    * Specifies the field from which the edit control displays data.
    */
    DataField: string;
    private DateValue;
    private _dataset;
    /**
      * Specifies the dataset that contains the field it represents.
    */
    Dataset: VXD.TDataset;
    private validateEnabled();
    draw(reCreate: boolean): void;
    create(): void;
}
export declare class TInputTime extends TTimeInputBase {
    private _date;
    Time: Date;
    Hour: number;
    create(): void;
    draw(reCreate: boolean): void;
}
