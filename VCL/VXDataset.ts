/// <reference path="Scripts/jquery.d.ts" />
import V = require("VCL/VCL");
import VXO = require("VCL/VXObject");
import VXC = require("VCL/VXComponent");

export interface VXDatasetInt {
    ShowProgressBar: boolean;
}

export class VXDataset extends VXO.VXObject implements VXDatasetInt {
    public recordset: any[] = [];
    private tempRecordset: Object[];
    private sourceRecordset: Object[];
    private sortProperty: string;
    private sortDirection: string;


    public onBeforeOpen: (dataset: VXDataset) => void;
    public onAfterOpen: (dataset: VXDataset) => void;

    public owner: VXC.VXComponent;
    constructor(aOwner: VXC.VXComponent) {
        super();
        this.owner = aOwner;
    }

    private selectionChanged() {
        if (this.onSelectionChanged != null) this.onSelectionChanged();
        (<any>this).triggerEvent(VXDataset.EVENT_SELECTION_CHANGED);
    }

    private stateChanged() {
        if (this.onStateChanged != null) this.onStateChanged();
        (<any>this).triggerEvent(VXDataset.EVENT_STATE_CHANGED);
    }

    private dataChanged() {
        if (this.onDataChanged != null) this.onDataChanged();
        (<any>this).triggerEvent(VXDataset.EVENT_DATA_CHANGED);
    }

    public static EVENT_SELECTION_CHANGED = "rec_select_changed";
    public static EVENT_DATA_CHANGED = "rec_data_changed";
    public static EVENT_STATE_CHANGED = "rec_stated_changed";

    /**
    * Specifies the callback function of the current filter for a dataset.
    * Use applyFilter to specify a dataset filter. When filtering is applied to a dataset, only those records that meet a filter's conditions are available.
    */
    public applyFilter(filterCallback: (record?: V.TRecord) => boolean) {
        this.tempRecordset = null;
        if (this.sourceRecordset == null) this.sourceRecordset = this.recordset;
        else this.recordset = this.sourceRecordset;

        var tempRecordset = [];
        this.DisableControls();
        var recIndex = 0;
        for (var i = 0, len = this.recordset.length; i < len; i++) {
            this.Recno = i;

            if (filterCallback()) {
                var item = jQuery.extend(true, {}, this.recordset[i]);
                tempRecordset.push(item);
                item["___RECORDID___"] = recIndex;
                recIndex++;
            }
        }
        this.recordset = tempRecordset;
        this.EnableControls(); 
        this.first();
        this.stateChanged();
    }

    /**
    *  Iterator function, which can be used to seamlessly iterate over all records
    */
    public forEach(Callback: () => void ) {
        this.DisableControls();
        var recIndex = this.Recno;
        for (var i = 0, len = this.recordset.length; i < len; i++) {
            this.Recno = i;
            Callback();
        }
        this.Recno = recIndex;
        this.EnableControls(); 
    }

    /**
    * Clear the filter for a dataset.
    */
    public clearFilter() {
        this.tempRecordset = null;
        this.recordset = this.sourceRecordset;
        this.first();
        this.stateChanged();
    }

    public onStateChanged: () => void;
    public onSelectionChanged: () => void;
    public onDataChanged: () => void;

    public getFieldValue(fieldname: string): any {
        if (fieldname == null) return null;
        if (this.Recno == -1) return null;
        var a = this.recordset[this.Recno];
        return a[fieldname.toUpperCase()];
    }

    public setFieldValue(fieldname: string, value: any): void {
        if (this.Recno == -1) return null;
        var a = this.recordset[this.Recno];
        a[fieldname.toUpperCase()] = value;
        this.dataChanged();
    }

    public checkRecord(): void {
        if (this.Recno == -1) return null;
        var a = this.recordset[this.Recno];
        a['___CHECKED___'] = true;
    }

    public uncheckRecord(): void {
        if (this.Recno == -1) return null;
        var a = this.recordset[this.Recno];
        a['___CHECKED___'] = false;
    }


    private _readonly: boolean = false;
    public get Readonly(): boolean {
        return this._readonly;
    }
    public set Readonly(val: boolean) {
        if (val != this._readonly) {
            this._readonly = val;
            this.stateChanged();
        }
    }

    /**
    * Disables data display in data bounded components associated with the dataset.
    **/
    private _enabledControl: boolean = true;
    public DisableControls() {
        this._enabledControl = false;
    }
    
    /**
    * Enable data display in data bounded components associated with the dataset.
    **/

    public EnableControls() {
        this._enabledControl = true;
    }
    

    private _showprogressbar: boolean = true;
    public get ShowProgressBar(): boolean {
        return this._showprogressbar;
    }
    public set ShowProgressBar(val: boolean) {
        if (val != this._showprogressbar) {
            this._showprogressbar = val;
        }
    }


    private _recno: number = -1;
    public get Recno(): number {
        return this._recno;
    }
    public set Recno(val: number) {
        if (this.RecordCount < 1) val = -1
        else if (val > (this.RecordCount - 1)) val = this.RecordCount - 1;
        else if (val < 0) val = 0;
        this._recno = val;

        if (this._enabledControl) this.selectionChanged();
    }

    private _active: boolean = false;
    public get Active(): boolean {
        return this._active;
    }

    public getRecordIndex(): number {
        if (this.Recno < 0) return -1;
        return this.recordset[this.Recno]["___RECORDID___"];
    }

    public setData(data: any[]) {
        this.recordset = [];
        this.sourceRecordset = null;
        if (data == null) {
            this._active = false;
            this.Recno = -1;
        } else {
            for (var i = 0, len = data.length; i < len; i++) {
                var obj: any = {};
                obj.___RECORDID___ = i;
                obj.___CHECKED___ = false;
                for (var key in data[i]) {
                    obj[key.toUpperCase()] = data[i][key];
                }
                this.recordset.push(obj);
            }
            this._active = true;
            var newrec: number = this.RecordCount > 0 ? 0 : -1;
            this.Recno = newrec;
        }
        this.stateChanged();
    }

    public getCurrentRecord(): V.TRecord {
        var rec = new V.TRecord(null);
        rec.recordset = [this.recordset[this.Recno]];
        rec.Recno = 1;
        return rec;

    }

    public getRecords(start: number, end: number, sortDirection: string, sortProperty: string): any {
        if (sortDirection == null) return this.recordset.slice(start, end + 1); //not sort was mentions
        sortProperty = sortProperty.toUpperCase();
        sortDirection = sortDirection.toUpperCase();
        if (this.tempRecordset == null || sortDirection != this.sortDirection || sortProperty != this.sortProperty) {
            this.tempRecordset = this.recordset.slice(0);
            if (sortDirection == "ASC") {
                this.tempRecordset.sort(function (a, b) {
                    if (a[sortProperty] > b[sortProperty]) return 1;
                    else if (a[sortProperty] < b[sortProperty]) return -1
                    else return 0;
                })
            } else {
                this.tempRecordset.sort(function (a, b) {
                    if (a[sortProperty] < b[sortProperty]) return 1;
                    else if (a[sortProperty] > b[sortProperty]) return -1
                    else return 0;
                })
            }
            this.sortProperty = sortProperty;
            this.sortDirection = sortDirection;
        }
        return this.tempRecordset.slice(start, end + 1);
    }



    public get RecordCount(): number {
        if (this.recordset == null) return -1;
        else return this.recordset.length;
    }

    /**
    * Moves to the next record in the dataset.
    **/

    public next(): boolean {
        if ((this.RecordCount - 1) > this.Recno) {
            this.Recno++;
            return true;
        } else return false;
    }


    /**
    * Moves to the previous record in the dataset.
    **/
    public prior(): boolean {
        if (this.RecordCount > 0) {
            this.Recno--;
            return true
        } else return false;
    }

    /**
    * Moves to the first record in the dataset.
    **/

    public first(): void {
        this.Recno = 0;
    }

    /**
    * Moves to the last record in the dataset.
    **/
    public last(): void {
        this.Recno = this.RecordCount;
    }


}


export class VXRecord extends VXDataset {
    constructor(aOwner: VXC.VXComponent) { super(aOwner); }
}

interface IVXFeild {
    [name: string]: any;
}

class VXField implements IVXFeild {

}


