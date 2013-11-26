import V = require("VCL/VCL");
import VXU = require("VCL/VXUtils");
import VXC = require("VCL/VXComponent");
import VXD = require("VCL/VXDataset");
import VXCB = require("VCL/VXChartBase");

export class VXChartBar extends VXCB.VXChartBase {



    private _maximumbarwidth: number = 40;
    public get MaximumBarWidth(): number {
        return this._maximumbarwidth;
    }
    public set MaximumBarWidth(val: number) {
        if (val != this._maximumbarwidth) {
            this._maximumbarwidth = val;
            this.draw(true);
        }
    }


    private _titleX: string;
    public get TitleX(): string {
        return this._titleX;
    }
    public set TitleX(val: string) {     
        if (val != this._titleX) {
            this._titleX = val;
            this.draw(true);   
        }
    }

    private _titleY: string;
    public get TitleY(): string {
        return this._titleY;
    }
    public set TitleY(val: string) {     
        if (val != this._titleY) {
            this._titleY = val;
            this.draw(true);   
        }
    }

    private _series1color: string = "#0b62a4";
    public get Series1Color(): string {
        return this._series1color;
    }
    public set Series1Color(val: string) {
        var isOk = /^#[0-9A-F]{6}$/i.test(val);
        if (!isOk) V.Application.raiseException("'" + val + "' is not valid hex color string");
        else {
            if (val != this._series1color) {
                this._series1color = val;
                this.draw(true);
            }
        }
    }

    private _series2color: string = "#7A92A3";

    public get Series2Color(): string {
        return this._series2color;
    }
    public set Series2Color(val: string) {
        var isOk = /^#[0-9A-F]{6}$/i.test(val);
        if (!isOk) V.Application.raiseException("'" + val + "' is not valid hex color string");
        else {
            if (val != this._series2color) {
                this._series2color = val;
                this.draw(true);
            }
        }
    }

    private _series3color: string = "#4da74d";
    public get Series3Color(): string {
        return this._series3color;
    }
    public set Series3Color(val: string) {
        var isOk = /^#[0-9A-F]{6}$/i.test(val);
        if (!isOk) V.Application.raiseException("'" + val + "' is not valid hex color string");
        else {
            if (val != this._series3color) {
                this._series3color = val;
                this.draw(true);
            }
        }
    }

    private _series4color: string = "#afd8f8";
    public get Series4Color(): string {
        return this._series4color;
    }
    public set Series4Color(val: string) {
        var isOk = /^#[0-9A-F]{6}$/i.test(val);
        if (!isOk) V.Application.raiseException("'" + val + "' is not valid hex color string");
        else {
            if (val != this._series4color) {
                this._series4color = val;
                this.draw(true);
            }
        }
    }

    private _series5color: string = "#edc240";
    public get Series5Color(): string {
        return this._series5color;
    }
    public set Series5Color(val: string) {
        var isOk = /^#[0-9A-F]{6}$/i.test(val);
        if (!isOk) V.Application.raiseException("'" + val + "' is not valid hex color string");
        else {
            if (val != this._series5color) {
                this._series5color = val;
                this.draw(true);
            }
        }
    }

    private _series6color: string = "#cb4b4b";
    public get Series6Color(): string {
        return this._series6color;
    }
    public set Series6Color(val: string) {
        var isOk = /^#[0-9A-F]{6}$/i.test(val);
        if (!isOk) V.Application.raiseException("'" + val + "' is not valid hex color string");
        else {
            if (val != this._series6color) {
                this._series6color = val;
                this.draw(true);
            }
        }
    }


    private _series7color: string = "#727272";
    public get Series7Color(): string {
        return this._series7color;
    }
    public set Series7Color(val: string) {
        var isOk = /^#[0-9A-F]{7}$/i.test(val);
        if (!isOk) V.Application.raiseException("'" + val + "' is not valid hex color string");
        else {
            if (val != this._series7color) {
                this._series7color = val;
                this.draw(true);
            }
        }
    }
    private _series8color: string = "#f1595f";
    public get Series8Color(): string {
        return this._series8color;
    }
    public set Series8Color(val: string) {
        var isOk = /^#[0-9A-F]{8}$/i.test(val);
        if (!isOk) V.Application.raiseException("'" + val + "' is not valid hex color string");
        else {
            if (val != this._series8color) {
                this._series8color = val;
                this.draw(true);
            }
        }
    }
    private _series9color: string = "#79c36a";
    public get Series9Color(): string {
        return this._series9color;
    }
    public set Series9Color(val: string) {
        var isOk = /^#[0-9A-F]{9}$/i.test(val);
        if (!isOk) V.Application.raiseException("'" + val + "' is not valid hex color string");
        else {
            if (val != this._series9color) {
                this._series9color = val;
                this.draw(true);
            }
        }
    }
    private _series10color: string = "#599ad3";
    public get Series10Color(): string {
        return this._series10color;
    }
    public set Series10Color(val: string) {
        var isOk = /^#[0-9A-F]{10}$/i.test(val);
        if (!isOk) V.Application.raiseException("'" + val + "' is not valid hex color string");
        else {
            if (val != this._series10color) {
                this._series10color = val;
                this.draw(true);
            }
        }
    }

    private _series11color: string = "#EAA83A";
    public get Series11Color(): string {
        return this._series11color;
    }
    public set Series11Color(val: string) {
        var isOk = /^#[0-9A-F]{10}$/i.test(val);
        if (!isOk) V.Application.raiseException("'" + val + "' is not valid hex color string");
        else {
            if (val != this._series11color) {
                this._series11color = val;
                this.draw(true);
            }
        }
    }


    private _series12color: string = "#f9a65a";
    public get Series12Color(): string {
        return this._series12color;
    }
    public set Series12Color(val: string) {
        var isOk = /^#[0-9A-F]{12}$/i.test(val);
        if (!isOk) V.Application.raiseException("'" + val + "' is not valid hex color string");
        else {
            if (val != this._series12color) {
                this._series12color = val;
                this.draw(true);
            }
        }
    }
    
    private _series13color: string = "#9e66ab";
    public get Series13Color(): string {
        return this._series13color;
    }
    public set Series13Color(val: string) {
        var isOk = /^#[0-9A-F]{13}$/i.test(val);
        if (!isOk) V.Application.raiseException("'" + val + "' is not valid hex color string");
        else {
            if (val != this._series13color) {
                this._series13color = val;
                this.draw(true);
            }
        }
    }


    private _series14color: string = "#cd7058";
    public get Series14Color(): string {
        return this._series14color;
    }
    public set Series14Color(val: string) {
        var isOk = /^#[0-9A-F]{14}$/i.test(val);
        if (!isOk) V.Application.raiseException("'" + val + "' is not valid hex color string");
        else {
            if (val != this._series14color) {
                this._series14color = val;
                this.draw(true);
            }
        }
    }

    
    private _series15color: string = "#d77fb3";
    public get Series15Color(): string {
        return this._series15color;
    }
    public set Series15Color(val: string) {
        var isOk = /^#[0-9A-F]{15}$/i.test(val);
        if (!isOk) V.Application.raiseException("'" + val + "' is not valid hex color string");
        else {
            if (val != this._series15color) {
                this._series15color = val;
                this.draw(true);
            }
        }
    }


    public onClicked: (value: V.TBarValue, series : number) => void;
    private _series1name: string = "Series 1";
    public get Series1Name(): string {
        return this._series1name;
    }
    public set Series1Name(val: string) {
        if (val != this._series1name) {
            this._series1name = val;
            this.draw(true);
        }
    }

    private _series2name: string = "Series 2";
    public get Series2Name(): string {
        return this._series2name;
    }
    public set Series2Name(val: string) {
        if (val != this._series2name) {
            this._series2name = val;
            this.draw(true);
        }
    }

    private _series3name: string = "Series 3";
    public get Series3Name(): string {
        return this._series3name;
    }
    public set Series3Name(val: string) {
        if (val != this._series3name) {
            this._series3name = val;
            this.draw(true);
        }
    }

    private _series4name: string = "Series 4";
    public get Series4Name(): string {
        return this._series4name;
    }
    public set Series4Name(val: string) {
        if (val != this._series4name) {
            this._series4name = val;
            this.draw(true);
        }
    }

    private _series5name: string = "Series 5";
    public get Series5Name(): string {
        return this._series5name;
    }
    public set Series5Name(val: string) {
        if (val != this._series5name) {
            this._series5name = val;
            this.draw(true);
        }
    }

    private _series6name: string = "Series 6";
    public get Series6Name(): string {
        return this._series6name;
    }
    public set Series6Name(val: string) {
        if (val != this._series6name) {
            this._series6name = val;
            this.draw(true);
        }
    }

    private _series7name: string = "Series 7";
    public get Series7Name(): string {
        return this._series7name;
    }
    public set Series7Name(val: string) {
        if (val != this._series7name) {
            this._series7name = val;
            this.draw(true);
        }
    }

    
    private _series8name: string = "Series 8";
    public get Series8Name(): string {
        return this._series8name;
    }
    public set Series8Name(val: string) {
        if (val != this._series8name) {
            this._series8name = val;
            this.draw(true);
        }
    }
    private _series9name: string = "Series 9";
    public get Series9Name(): string {
        return this._series9name;
    }
    public set Series9Name(val: string) {
        if (val != this._series9name) {
            this._series9name = val;
            this.draw(true);
        }
    }
    private _series10name: string = "Series 10";
    public get Series10Name(): string {
        return this._series10name;
    }
    public set Series10Name(val: string) {
        if (val != this._series10name) {
            this._series10name = val;
            this.draw(true);
        }
    }

    private _series11name: string = "Series 11";
    public get Series11Name(): string {
        return this._series11name;
    }
    public set Series11Name(val: string) {
        if (val != this._series11name) {
            this._series11name = val;
            this.draw(true);
        }
    }

    
    private _series12name: string = "Series 12";
    public get Series12Name(): string {
        return this._series12name;
    }
    public set Series12Name(val: string) {
        if (val != this._series12name) {
            this._series12name = val;
            this.draw(true);
        }
    }

    
    private _series13name: string = "Series 13";
    public get Series13Name(): string {
        return this._series13name;
    }
    public set Series13Name(val: string) {
        if (val != this._series13name) {
            this._series13name = val;
            this.draw(true);
        }
    }

    
    private _series14name: string = "Series 14";
    public get Series14Name(): string {
        return this._series14name;
    }
    public set Series14Name(val: string) {
        if (val != this._series14name) {
            this._series14name = val;
            this.draw(true);
        }
    }

    
    private _series15name: string = "Series 15";
    public get Series15Name(): string {
        return this._series15name;
    }
    public set Series15Name(val: string) {
        if (val != this._series15name) {
            this._series15name = val;
            this.draw(true);
        }
    }

    private _showhoverlegend: boolean = true;
    public get ShowHoverLegend(): boolean {
        return this._showhoverlegend;
    }
    public set ShowHoverLegend(val: boolean) {
        if (val != this._showhoverlegend) {
            this._showhoverlegend = val;
            this.draw(true);
        }
    }



    private _stack: boolean = true;
    public get Stacked(): boolean {
        return this._stack;
    }
    public set Stacked(val: boolean) {
        if (val != this._stack) {
            this._stack = val;
            this.draw(true);
        }
    }

    private _showgridlines: boolean = true;
    public get ShowGridLines(): boolean {
        return this._showgridlines;
    }
    public set ShowGridLines(val: boolean) {
        if (val != this._showgridlines) {
            this._showgridlines = val;
            this.draw(true);
        }
    }
    
    public values = new VXCB.VXChartValuesCollection<VXCB.VXBarValue>();
    public createValue(label: string, value1?: number, value2?: number, value3?: number, value4?: number,
        value5?: number, value6?: number, value7?: number, value8?: number, value9?: number, value10?: number,
        value11?: number, value12?: number, value13?: number, value14?: number, value15?:number): VXCB.VXBarValue {
        var col = new VXCB.VXBarValue();
        this.values.add(col);
        col.Value1 = value1;
        col.Value2 = value2;
        col.Value3 = value3;
        col.Value4 = value4;
        col.Value5 = value5;
        col.Value6 = value6;
        col.Value7 = value7;
        col.Value8 = value8;
        col.Value9 = value9;
        col.Value10 = value10;
        col.Value11 = value11;
        col.Value12 = value12;
        col.Value13 = value13;
        col.Value14 = value14;
        col.Value15 = value15;


        col.Label = label;
        return col;
    }

    public getData(): any[] {
        var dataArray = [];
        this.values.forEach((valueOfElement: VXCB.VXBarValue) => {
            dataArray.push({
                x: valueOfElement.Label, id: valueOfElement.ID,
                value1: !isFinite(valueOfElement.Value1)?null:valueOfElement.Value1,
                value2: !isFinite(valueOfElement.Value2) ? null :valueOfElement.Value2,
                value3: !isFinite(valueOfElement.Value3) ? null :valueOfElement.Value3,
                value4: !isFinite(valueOfElement.Value4) ? null :valueOfElement.Value4,
                value5: !isFinite(valueOfElement.Value5) ? null :valueOfElement.Value5,
                value6: !isFinite(valueOfElement.Value6) ? null :valueOfElement.Value6,
                value7: !isFinite(valueOfElement.Value7) ? null :valueOfElement.Value7,
                value8: !isFinite(valueOfElement.Value8) ? null :valueOfElement.Value8,
                value9: !isFinite(valueOfElement.Value9) ? null :valueOfElement.Value9,
                value10: !isFinite(valueOfElement.Value10) ? null :valueOfElement.Value10,
                value11: !isFinite(valueOfElement.Value11) ? null :valueOfElement.Value11,
                value12: !isFinite(valueOfElement.Value12) ? null :valueOfElement.Value12,
                value13: !isFinite(valueOfElement.Value13) ? null :valueOfElement.Value13,
                value14: !isFinite(valueOfElement.Value14) ? null :valueOfElement.Value14,
                value15: !isFinite(valueOfElement.Value15) ? null :valueOfElement.Value15
            });
            return true;
        });
        return dataArray;
    }

    public draw(reCreate: boolean) {
        if (!this.parentInitialized())return;super.draw(reCreate);
        if (reCreate || !this.initialized) this.create();
        this.initialized = true;

        this.bar.setData(this.getData());
    }

    private bar: Bar;
    public create() {
        this.jComponent.empty(); //clear all subcomponents
        this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'div', this.FitToWidth, this.FitToHeight);

        this.bar = new Bar({
            element: this.jComponent[0],
            //data: dataArray,
            xkey: "x",
            ykeys: ["value1", "value2", "value3", "value4", "value5", "value6", "value7", "value8", "value9", "value10", "value11", "value12", "value13", "value14", "value15"],
            labels: [this.Series1Name, this.Series2Name, this.Series3Name, this.Series4Name, this.Series5Name, this.Series6Name
                , this.Series7Name, this.Series8Name, this.Series9Name, this.Series10Name, this.Series11Name, this.Series12Name
                , this.Series13Name, this.Series14Name, this.Series5Name
            ],
            barSizeRatio: 0.75,
            barGap: 0,
            titleX: this.TitleX,
            paddingX: this.TitleX ? 35 : 20,
            titleY: this.TitleY,
            paddingY: this.TitleY ? 25 : 5,
            hideHover: this.ShowHoverLegend ? 'auto' : 'always',
            stacked: this.Stacked,
            barColors: [this.Series1Color, this.Series2Color, this.Series3Color, this.Series4Color, this.Series5Color, this.Series6Color,
                this.Series7Color, this.Series8Color, this.Series9Color, this.Series10Color, this.Series11Color, this.Series12Color,
                this.Series13Color, this.Series14Color, this.Series15Color
            ],
            xLabelMargin: 15,
            gridTextSize: 12,
            preUnits: this.PreValueUnit,
            postUnits: this.PostValueUnit,
            gridTextFamily: 'sans-serif',
            gridTextWeight: 'normal',
            maximumbarwidth: this.MaximumBarWidth,
            grid: this.ShowGridLines
        }, this);
        
        super.create();
    }
}

export class VXDBChartBar extends VXChartBar {
    private _value1field: string;
    /**
    * Specifies the field from which the edit control displays data.
    */
    public get ValueField1(): string {
        return this._value1field;
    }
    public set ValueField1(val: string) {
        if (val != this._value1field) {
            this._value1field = val.toUpperCase();
            this.draw(false);
        }
    }

    private _value2field: string;
    /**
    * Specifies the field from which the edit control displays data.
    */
    public get ValueField2(): string {
        return this._value2field;
    }
    public set ValueField2(val: string) {
        if (val != this._value2field) {
            this._value2field = val.toUpperCase();
            this.draw(false);
        }
    }

    private _value3field: string;
    /**
    * Specifies the field from which the edit control displays data.
    */
    public get ValueField3(): string {
        return this._value3field;
    }
    public set ValueField3(val: string) {
        if (val != this._value3field) {
            this._value3field = val.toUpperCase();
            this.draw(false);
        }
    }


    private _value4field: string;
    /**
    * Specifies the field from which the edit control displays data.
    */
    public get ValueField4(): string {
        return this._value4field;
    }
    public set ValueField4(val: string) {
        if (val != this._value4field) {
            this._value4field = val.toUpperCase();
            this.draw(false);
        }
    }

    private _value5field: string;
    /**
    * Specifies the field from which the edit control displays data.
    */
    public get ValueField5(): string {
        return this._value5field;
    }
    public set ValueField5(val: string) {
        if (val != this._value5field) {
            this._value5field = val.toUpperCase();
            this.draw(false);
        }
    }

    private _value6field: string;
    /**
    * Specifies the field from which the edit control displays data.
    */
    public get ValueField6(): string {
        return this._value6field;
    }
    public set ValueField6(val: string) {
        if (val != this._value6field) {
            this._value6field = val.toUpperCase();
            this.draw(false);
        }
    }

    private _value7field: string;
    /**
    * Specifies the field from which the edit control displays data.
    */
    public get ValueField7(): string {
        return this._value7field;
    }
    public set ValueField7(val: string) {
        if (val != this._value7field) {
            this._value7field = val.toUpperCase();
            this.draw(false);
        }
    }
    private _value8field: string;
    /**
    * Specifies the field from which the edit control displays data.
    */
    public get ValueField8(): string {
        return this._value8field;
    }
    public set ValueField8(val: string) {
        if (val != this._value8field) {
            this._value8field = val.toUpperCase();
            this.draw(false);
        }
    }
    private _value9field: string;
    /**
    * Specifies the field from which the edit control displays data.
    */
    public get ValueField9(): string {
        return this._value9field;
    }
    public set ValueField9(val: string) {
        if (val != this._value9field) {
            this._value9field = val.toUpperCase();
            this.draw(false);
        }
    }
    private _value10field: string;
    /**
    * Specifies the field from which the edit control displays data.
    */
    public get ValueField10(): string {
        return this._value10field;
    }
    public set ValueField10(val: string) {
        if (val != this._value10field) {
            this._value10field = val.toUpperCase();
            this.draw(false);
        }
    }
    private _value11field: string;
    /**
    * Specifies the field from which the edit control displays data.
    */
    public get ValueField11(): string {
        return this._value11field;
    }
    public set ValueField11(val: string) {
        if (val != this._value11field) {
            this._value11field = val.toUpperCase();
            this.draw(false);
        }
    }

    private _value12field: string;
    /**
    * Specifies the field from which the edit control displays data.
    */
    public get ValueField12(): string {
        return this._value12field;
    }
    public set ValueField12(val: string) {
        if (val != this._value12field) {
            this._value12field = val.toUpperCase();
            this.draw(false);
        }
    }

    private _value13field: string;
    /**
    * Specifies the field from which the edit control displays data.
    */
    public get ValueField13(): string {
        return this._value13field;
    }
    public set ValueField13(val: string) {
        if (val != this._value13field) {
            this._value13field = val.toUpperCase();
            this.draw(false);
        }
    }

    private _value14field: string;
    /**
    * Specifies the field from which the edit control displays data.
    */
    public get ValueField14(): string {
        return this._value14field;
    }
    public set ValueField14(val: string) {
        if (val != this._value14field) {
            this._value14field = val.toUpperCase();
            this.draw(false);
        }
    }

    
    private _value15field: string;
    /**
    * Specifies the field from which the edit control displays data.
    */
    public get ValueField15(): string {
        return this._value15field;
    }
    public set ValueField15(val: string) {
        if (val != this._value15field) {
            this._value15field = val.toUpperCase();
            this.draw(false);
        }
    }

    private _labelfield: string;
    /**
    * Specifies the field from which the edit control displays data.
    */
    public get LabelField(): string {
        return this._labelfield;
    }
    public set LabelField(val: string) {
        if (val != this._labelfield) {
            this._labelfield = val.toUpperCase();
            this.draw(false);
        }
    }


    private _dataset: VXD.VXDataset;
    /*
      * Specifies the dataset that contains the field it represents.
      */
    public get Dataset(): VXD.VXDataset {
        return this._dataset;
    }
    public set Dataset(val: VXD.VXDataset) {
        if (val != this._dataset) {
            if (this._dataset) {
                (<any>this._dataset).removeEventListener(VXD.VXDataset.EVENT_DATA_CHANGED, this);
                (<any>this._dataset).removeEventListener(VXD.VXDataset.EVENT_STATE_CHANGED, this);
            }
            this._dataset = val;
            if (this._dataset) {
                (<any>this._dataset).registerEventListener(VXD.VXDataset.EVENT_DATA_CHANGED, this, () => { this.draw(false); });
                (<any>this._dataset).registerEventListener(VXD.VXDataset.EVENT_STATE_CHANGED, this, () => { this.draw(false); });
            }
            this.draw(false);
        }
    }

    public getData(): any[] {
        this.values.clear();
        var dataArray = [];
        if (this.Dataset == null || (this.ValueField1 == null && this.ValueField2 == null && this.ValueField3 == null && this.ValueField4 == null &&
            this.ValueField5 == null && this.ValueField6 == null && this.ValueField7 == null && this.ValueField8 == null && this.ValueField9 == null &&
            this.ValueField10 == null && this.ValueField11 == null && this.ValueField12 == null && this.ValueField13 == null &&
            this.ValueField14 == null && this.ValueField15) || this.LabelField == null) return dataArray;
        if (!this.Dataset.Active) return dataArray;
        this.Dataset.forEach(() => {
            var obj: any = {
                x: this.Dataset.getFieldValue(this.LabelField),
                value1: !isFinite(this.Dataset.getFieldValue(this.ValueField1)) ? null : this.Dataset.getFieldValue(this.ValueField1),
                value2: !isFinite(this.Dataset.getFieldValue(this.ValueField2)) ? null : this.Dataset.getFieldValue(this.ValueField2),
                value3: !isFinite(this.Dataset.getFieldValue(this.ValueField3)) ? null : this.Dataset.getFieldValue(this.ValueField3),
                value4: !isFinite(this.Dataset.getFieldValue(this.ValueField4)) ? null : this.Dataset.getFieldValue(this.ValueField4),
                value5: !isFinite(this.Dataset.getFieldValue(this.ValueField5)) ? null : this.Dataset.getFieldValue(this.ValueField5),
                value6: !isFinite(this.Dataset.getFieldValue(this.ValueField6)) ? null : this.Dataset.getFieldValue(this.ValueField6),
                value7: !isFinite(this.Dataset.getFieldValue(this.ValueField7)) ? null : this.Dataset.getFieldValue(this.ValueField7),
                value8: !isFinite(this.Dataset.getFieldValue(this.ValueField8)) ? null : this.Dataset.getFieldValue(this.ValueField8),
                value9: !isFinite(this.Dataset.getFieldValue(this.ValueField9)) ? null : this.Dataset.getFieldValue(this.ValueField9),
                value10: !isFinite(this.Dataset.getFieldValue(this.ValueField10)) ? null : this.Dataset.getFieldValue(this.ValueField10),
                value11: !isFinite(this.Dataset.getFieldValue(this.ValueField11)) ? null : this.Dataset.getFieldValue(this.ValueField11),
                value12: !isFinite(this.Dataset.getFieldValue(this.ValueField12)) ? null : this.Dataset.getFieldValue(this.ValueField12),
                value13: !isFinite(this.Dataset.getFieldValue(this.ValueField13)) ? null : this.Dataset.getFieldValue(this.ValueField13),
                value14: !isFinite(this.Dataset.getFieldValue(this.ValueField14)) ? null : this.Dataset.getFieldValue(this.ValueField14),
                value15: !isFinite(this.Dataset.getFieldValue(this.ValueField15)) ? null : this.Dataset.getFieldValue(this.ValueField15),
            };
            dataArray.push(obj);

            var col = new VXCB.VXBarValue();
            this.values.add(col);
            col.Value1 = obj.value1;
            col.Value2 = obj.value2;
            col.Value3 = obj.value3;
            col.Value4 = obj.value4;
            col.Value5 = obj.value5;
            col.Value6 = obj.value6;
            col.Value7 = obj.value7;
            col.Value8 = obj.value8;
            col.Value9 = obj.value9;
            col.Value10 = obj.value10;
            col.Value11 = obj.value11;
            col.Value12 = obj.value12;
            col.Value13 = obj.value13;
            col.Value14 = obj.value14;
            col.Value15 = obj.value15;
            col.Label = obj.x;
            col.ID = this.Dataset.Recno.toString();
        });

        return dataArray;
    }
}


declare var Raphael;

function __bind(fn, me) { return function () { return fn.apply(me, arguments); }; }


class Bar extends VXCB.Grid {
    private bars;

    constructor(options, owner) {
        super($.extend({}, options, { parseTime: true }));
        this.owner = owner;

        this.onHoverOut = __bind(this.onHoverOut, this);
        this.onHoverMove = __bind(this.onHoverMove, this);
    }

    init() {
        this.cumulative = this.options.stacked;
        if (this.options.hideHover !== 'always') {
            this.hover = new VXCB.Hover({
                parent: this.el
            });

            this.on('hovermove', this.onHoverMove);
            this.on('hoverout', this.onHoverOut);
        }
    }

    calc() {
        var _ref;
        this.calcBars();
        if (this.options.hideHover === false) {
            return (_ref = this.hover).update.apply(_ref, this.hoverContentForRow(this.data.length - 1, -1));
        }
    }

    calcBars() {
        var row, y, _i, _len, _ref, _results;
        _ref = this.data;
        _results = [];
        for (var idx = _i = 0, _len = _ref.length; _i < _len; idx = ++_i) {
            row = _ref[idx];
            row._x = this.left + this.width * (idx + 0.5) / this.data.length;
            _results.push(row._y = (function () {
                var _j, _len1, _ref1, _results1;
                _ref1 = row.y;
                _results1 = [];
                for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
                    y = _ref1[_j];
                    if (y != null) {
                        _results1.push(this.transY(y));
                    } else {
                        _results1.push(null);
                    }
                }
                return _results1;
            }).call(this));
        }
        return _results;
    }

    draw() {
        if (this.options.axes) {
            this.drawXAxis();
        }
        return this.drawSeries();
    }

    drawXAxis() {
        var label, labelBox, margin, offset, prevAngleMargin, prevLabelMargin, row, textBox, ypos, _i, _ref, _results;
        prevLabelMargin = null;
        prevAngleMargin = null;
        _results = [];
        //draw x title
        ypos = this.bottom + 3;

        
        if (this.options.titleX) {
            var b = this.measureText(this.options.titleX);
            var center = (this.elementWidth / 2);
            this.raphael.text(center, this.bottom + this.options.paddingX - this.options.gridTextSize / 2, this.options.titleX).
                attr('font-size', this.options.gridTextSize + 1).attr('font-family', this.options.gridTextFamily-1).
                attr('font-weight', "normal").attr('fill', this.options.gridTextColor);
        } 
       
        for (var i = _i = 0, _ref = this.data.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
            row = this.data[this.data.length - 1 - i];
            label = this.drawXAxisLabel(row._x, ypos, row.label);
            textBox = label.getBBox();
            label.transform("r" + (-this.options.xLabelAngle));
            labelBox = label.getBBox();
            label.transform("t0," + (labelBox.height / 2) + "...");
            if (this.options.xLabelAngle !== 0) {
                offset = -0.5 * textBox.width * Math.cos(this.options.xLabelAngle * Math.PI / 180.0);
                label.transform("t" + offset + ",0...");
            }
            if ((!(prevLabelMargin != null) || prevLabelMargin >= labelBox.x + labelBox.width || (prevAngleMargin != null) && prevAngleMargin >= labelBox.x) && labelBox.x >= 0 && (labelBox.x + labelBox.width) < this.el.width()) {
                if (this.options.xLabelAngle !== 0) {
                    margin = 1.25 * this.options.gridTextSize / Math.sin(this.options.xLabelAngle * Math.PI / 180.0);
                    prevAngleMargin = labelBox.x - margin;
                }
                _results.push(prevLabelMargin = labelBox.x - this.options.xLabelMargin);
            } else {
                _results.push(label.remove());
            }
        }
        
        return _results;
    }

    private barNodes = [];

    drawSeries() {
        var barWidth, bottom, groupWidth, idx, lastTop, left, leftPadding, numBars, row, rowold, sidx, size, top, ypos, zeroPos, _refold;
        groupWidth = this.width / this.options.data.length;
        this.barNodes = [];
        numBars = 0;
        if (this.options.stacked == false) {
            for (var i = 0; i < 15; i++) {
                for (var j = 0; j< this.data.length ; j++) {
                    if (this.data[j].y && this.data[j].y[i]) {
                        numBars++;
                        break;
                    }
                }
            }
        }
        this.options.numBars = Math.max(1,numBars);
        barWidth = (groupWidth * this.options.barSizeRatio - this.options.barGap * (this.options.numBars - 1)) / this.options.numBars;
        this.options.barWidth = Math.min(this.options.maximumbarwidth, barWidth);
        leftPadding = groupWidth * (1 - this.options.barSizeRatio) / 2;
        zeroPos = this.ymin <= 0 && this.ymax >= 0 ? this.transY(0) : null;
        return this.bars = (function () {
            var _i, _len, _ref, _results;
            _ref = this.data;
            _refold = this.olddata;
            _results = [];
            for (var idx = _i = 0, _len = _ref.length; _i < _len; idx = ++_i) {
                row = _ref[idx];
                if (_refold && _refold.length > idx)
                    rowold = _refold[idx];
                else rowold = null;
                lastTop = 0;
                _results.push((function () {
                    var _j, _len1, _ref1, _results1;
                    _ref1 = row._y;
                    row._size = [];
                    row._top = [];
                    _results1 = [];
                    for (sidx = _j = 0, _len1 = _ref1.length; _j < _len1; sidx = ++_j) {
                        ypos = _ref1[sidx];
                        if (ypos !== null) {
                            if (zeroPos) {
                                top = Math.min(ypos, zeroPos);
                                bottom = Math.max(ypos, zeroPos);
                            } else {
                                top = ypos;
                                bottom = this.bottom;
                            }
                            left = this.left + idx * groupWidth + leftPadding;
                            if (!this.options.stacked) {
                                left += sidx * (barWidth + this.options.barGap);
                            }
                            size = bottom - top;
                            
                            if (this.options.stacked) {
                                top -= lastTop;
                            }
                            row._size.push(size);
                            row._top.push(top);
                            if (!this.barNodes[idx]) this.barNodes[idx] = [];

                            if (rowold && rowold._size && rowold._size.length >= sidx)
                                this.barNodes[idx].push(this.drawBar(left, top, barWidth, size, this.colorFor(row, sidx, 'bar'), rowold._size[sidx], rowold._top[sidx], sidx));
                            else
                                this.barNodes[idx].push(this.drawBar(left, top, barWidth, size, this.colorFor(row, sidx, 'bar'), 0, 0, sidx));

                            _results1.push(lastTop += size);
                        } else {
                            _results1.push(null);
                        }
                    }
                    return _results1;
                }).call(this));
            }
            return _results;
        }).call(this);
    }

    colorFor(row, sidx, type) {
        var r, s;
        if (typeof this.options.barColors === 'function') {
            r = {
                x: row.x,
                y: row.y[sidx],
                label: row.label
            };
            s = {
                index: sidx,
                key: this.options.ykeys[sidx],
                label: this.options.labels[sidx]
            };
            return this.options.barColors.call(this, r, s, type);
        } else {
            return this.options.barColors[sidx % this.options.barColors.length];
        }
    }

    hitTest(x, y) {
        /*if (this.data.length === 0) {
            return null;
        }
        x = Math.max(Math.min(x, this.right), this.left);
        return Math.min(this.data.length - 1, Math.floor((x - this.left) / (this.width / this.data.length)));*/
        var r, _i, _len, _ref, wid = this.options.barWidth / 2 * this.options.numBars;
        if (this.data.length === 0) {
            return null;
        }
        _ref = this.data.slice(1);
        for (var index = _i = 0, _len = _ref.length; _i <= _len; index = ++_i) {
            r = _ref[index];
            if (Math.abs(x - (this.data[index]._x)) < wid) {
                return index;
            }
        }
        return -1;
    }

    hitSeries(x, y) {
        var r, _i, _len, _ref;
        if (this.data.length === 0) {
            return null;
        }

        var indexX = this.hitTest(x, y);
        _ref = this.data.slice(indexX);
        _ref = _ref[0];
        _ref = _ref._top;
        for (var index = _i = 0, _len = _ref.length; _i <= _len; index = ++_i) {
            r = _ref[index];
            if (r < y) {
                return index;
            }
        }
        return -1;
    }

    clickItem(idx: number, series: number) {
        var owner = <VXChartBar>this.owner;
        if (!this.owner) return;
        this.barNodes.forEach((item) => {
            item.forEach((node) => {
                node.attr('opacity', 0.6);
            });
        });
        this.barNodes[idx].forEach((node) => { node.attr('opacity', 1); });
        if (!owner.onClicked) return;
        if (idx >= 0 && idx <= owner.values.length()) {
            if ((owner instanceof VXDBChartBar) && (<VXDBChartBar>owner).Dataset != null) {
                (<VXDBChartBar>owner).Dataset.Recno = parseInt(owner.values.toArray()[idx].ID);
            }
            (V.tryAndCatch(() => { owner.onClicked(owner.values.toArray()[idx], series) }));
        }
    }
 
    onGridClick(x, y, evt) {
        var idx = this.hitTest(x, y);
        this.clickItem(idx, evt.target.series);
    }

    onHoverMove(x, y, evt) {
        var indexX, inxY, _ref;
        indexX = this.hitTest(x, y);
        
        if (indexX == -1)
            return;
        if (!this.hover || this.barNodes.length == 0 || this.barNodes.length <= indexX || this.barNodes[indexX] == null)
            return;
        var bar = this.barNodes[indexX][0];
        var width: number = bar.attr('width');
        if (indexX < this.barNodes.length / 2)
            this.hover.offset = width;
        else
            this.hover.offset = -width;
        var series = evt.target.series;
        var indexY = this.hitSeries(x, y);
        return (_ref = this.hover).update.apply(_ref, this.hoverContentForRow(indexX, series));
    }

    onHoverOut() {
        if (!this.hover) return;
        if (this.options.hideHover !== false) {
            return this.hover.hide();
        }
    }

    hoverContentForRow(index, series) {
        var content, j, row, x, y, _i, _len, _ref;
        row = this.data[index];
        if (row == null) return null;
        content = "<div style='pointer-events: none;' class='morris-hover-row-label'>" + row.label + "</div>";
        _ref = row.y;
        for (j = _i = 0, _len = _ref.length; _i < _len; j = ++_i) {
            if (series == j) {
                y = _ref[j];
                var lbl: string = this.options.labels[j];
                lbl = lbl.substring(0, 14);
                if (y != null) content += "<div class='morris-hover-point' style='pointer-events: none;color: " + (this.colorFor(row, j, 'label')) + "'>\n  " + lbl + ":\n  " + (this.yLabelFormat(y, false)) + "\n</div>";
            }
        }
        if (typeof this.options.hoverCallback === 'function') {
            content = this.options.hoverCallback(index, this.options, content);
        }
        x = this.left + (index + 0.5) * this.width / this.data.length;
        return [content, x];
    }

    drawXAxisLabel(xPos, yPos, text) {
        var label;
        return label = this.raphael.text(xPos, yPos, text).attr('font-size', this.options.gridTextSize).attr('font-family', this.options.gridTextFamily).attr('font-weight', this.options.gridTextWeight).attr('fill', this.options.gridTextColor);
    }

    drawBar(xPos, yPos, width, height, barColor, oldheight, oldy,series) {
        var self = this;
        var bar;
        var maxWidth: number = Math.min(this.options.maximumbarwidth,width);
        var newXpos = xPos + ((width - maxWidth) / 2) ;
        if (oldheight > 0) {
            bar = this.raphael.rect(newXpos, oldy, maxWidth, oldheight).attr('fill', barColor).attr('opacity',  0.7).attr('stroke-width', 0);
            bar.animate({ height: height, y: yPos }, 500, '>');
        } else {
            bar = this.raphael.rect(newXpos, yPos, maxWidth, height).attr('fill', barColor).attr('opacity',  0.7).attr('stroke-width', 0);
        }

        bar.node.series = series;
        bar.node.onclick = function (evt,x,y) {
            var offset = $(self.el).offset();
            self.onGridClick(evt.pageX - offset.left, evt.pageY - offset.top, evt);
        };

        bar.node.hovermove = function (evt, x, y) {
            self.onHoverMove(x, y, evt);
        }

        bar.node.hoverout = function (evt, x, y) {
            self.onHoverOut();
        }
        
        return bar;
    }

}



export class VXChartBullet extends VXC.VXComponent {
    constructor(aOwner: VXC.VXComponent, renderTo?: string) {
        super(aOwner, renderTo);
        this.Width = 200;
    }

    private _title: string = "Title";
    public get Title(): string {
        return this._title;
    }
    public set Title(val: string) {
        if (val != this._title) {
            this._title = val;
            this.draw(true);
        }
    }

    private _titlecolor: string;
    public get TitleColor(): string {
        return this._titlecolor;
    }
    public set TitleColor(val: string) {
        var isOk = /^#[0-9A-F]{6}$/i.test(val);
        if (!isOk) V.Application.raiseException("'" + val + "' is not valid hex color string");
        else {

            if (val != this._titlecolor) {
                this._titlecolor = val;
                this.draw(true);
            }
        }
    }


    private _value: number = 0;
    public get Value(): number {
        return this._value;
    }
    public set Value(val: number) {
        if (val != this._value) {
            this._value = val;
            this.draw(true);
        }
    }

    private _maximum: number = 100;
    public get Maximum(): number {
        return this._maximum;
    }
    public set Maximum(val: number) {
        if (val != this._maximum) {
            this._maximum = val;
            this.draw(true);
        }
    }

    private _showsubtitle: boolean = true;
    public get ShowSubTitle(): boolean {
        return this._showsubtitle;
    }
    public set ShowSubTitle(val: boolean) {
        if (val != this._showsubtitle) {
            this._showsubtitle = val;
            this.draw(true);
        }
    }

    private _showvalue: boolean = true;
    public get ShowValue(): boolean {
        return this._showvalue;
    }
    public set ShowValue(val: boolean) {
        if (val != this._showvalue) {
            this._showvalue = val;
            this.draw(true);
        }
    }


    private _valuefontsize: number = 24;
    public get ValueFontSize(): number {
        return this._valuefontsize;
    }
    public set ValueFontSize(val: number) {
        if (val != this._value) {
            this._valuefontsize = val;
            this.draw(true);
        }
    }

    public draw(reCreate: boolean) {
        require(["VCL/Scripts/jquery.bulletchart.js"], () => {
            if (!this.parentInitialized())return;super.draw(reCreate);
            this.create();
        });
   
    }
    public create() {
        this.jComponent.empty(); //clear all subcomponents
        this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'div', this.FitToWidth, this.FitToHeight);
        this.jComponent.bulletChart({
            title: this.Title,
            titlecolor : this.TitleColor,
            current: this.Value,
            total: this.Maximum,
            tititlefontsize: this.ValueFontSize,
            showsubtitle: this.ShowSubTitle,
            showvalue: this.ShowValue
        });
    }
}