/// <reference path="Scripts/jquery.d.ts" />
import V = require("VCL/VCL");
import VXO = require("VCL/VXObject");
import VXC = require("VCL/VXComponent");

export interface VXDatasetInt {
    ShowProgressBar: boolean;
}

export class TDataset extends VXO.TObject {
    public recordset: any[] = [];
    public onDataChanged: () => void;

    public static EVENT_SELECTION_CHANGED = "rec_select_changed";
    public static EVENT_DATA_CHANGED = "rec_data_changed";
    public static EVENT_STATE_CHANGED = "rec_stated_changed";


    public get RecordCount(): number {
        if (this.recordset == null) return -1;
        else return this.recordset.length;
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
    }

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

    private dataChanged() {
        if ((<any>this)._enabledControl) {
            if (this.onDataChanged != null) this.onDataChanged();
            (<any>this).triggerEvent(TDataset.EVENT_DATA_CHANGED);
        }
    }

    /**
    *  Iterator function, which can be used to seamlessly iterate over all records
    */
    public forEach(Callback: () => void) {
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

    public get Active(): boolean {
        return true;
    }

    public get Readonly(): boolean {
        return false;
    }
    /*
    * return an object with the content of the currnt record
    */
    public getCurrentRecord(): any {
        if (this.Recno < 0) return null;
        return this.recordset[this.Recno];
    }

    /*
    * return a unique indentifier of the record
    */
    public getRecordIndex(): number {
        if (this.Recno < 0) return -1;
        return this.recordset[this.Recno]["___RECORDID___"];
    }

    /*
    * return the record number of specfix recordIndex
    */
    public getRecordIndexRecNo(recordIndex): number {
        if (!this.recordset) return -1;
        var rc = -1;
        for (var i = 0, len = this.recordset.length; i < len; i++) {
            if (this.recordset[i].___RECORDID___ == recordIndex) {
                rc = i;
                break;
            }
        }
        return rc;
    }


    public getRecords(start: number, end: number, sortDirection: string, sortProperty: string, groupProperty?: string): any {
        return this.recordset.slice(start, end + 1);
    }

    public checkRecord(): void {
        if (this.Recno == -1) return null;
        this.recordset[this.Recno]['___CHECKED___'] = true;
    }

    public uncheckRecord(): void {
        if (this.Recno == -1) return null;
        this.recordset[this.Recno]['___CHECKED___'] = false;
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

    public first(): boolean {
        if (this.RecordCount > 0) {
            this.Recno = 0;
            return true;
        } else {
            this.Recno = -1;
            return false;
        }
    }

    /**
    * Moves to the last record in the dataset.
    **/
    public last(): boolean {
        if (this.RecordCount > 0) {
            this.Recno = this.RecordCount - 1;
            return true;
        } else {
             this.Recno = -1;
            return false;
        }
    }

}

export class TObjectDataset extends TDataset {
    bind() {
        var self = this;
        self.recordset = [];
        self.recordset.push({});
        for (var property in this) {
            if (this.hasOwnProperty(property) && typeof this[property] != 'function' && property.charAt(0) == '$') {
                var propName = (<string>property).toUpperCase();
                self.recordset[0][propName] = self[property];
                Object.defineProperty(this, property, {
                    enumerable: false
                    , configurable: true
                    , set: function (x) {
                        if (self.recordset[0][propName] == x) return;
                        self.recordset[0][propName] = x;
                        this.dataChanged();
                    }
                    , get: function () {
                        return self.recordset[0][propName];
                    }
                })
            }
        };
    }

    public get Recno(): number {
        return 0;
    }

    public set Recno(val: number) {

    }

}

export class TClientDataset extends TDataset implements VXDatasetInt {
    private tempRecordset: Object[];
    private tempGroupset: number[];

    private sourceRecordset: Object[];
    private sortProperty: string;
    private groupProperty: string;
    private sortDirection: string;

    public onBeforeOpen: (dataset: TClientDataset) => void;
    public onAfterOpen: (dataset: TClientDataset) => void;

    public owner: VXC.TComponent;
    constructor(aOwner: VXC.TComponent) {
        super();
        this.owner = aOwner;
    }

    private selectionChanged() {
        if (this.onSelectionChanged != null) this.onSelectionChanged();
        (<any>this).triggerEvent(TDataset.EVENT_SELECTION_CHANGED);
    }

    private stateChanged() {
        if (this.onStateChanged != null) this.onStateChanged();
        (<any>this).triggerEvent(TDataset.EVENT_STATE_CHANGED);
    }


    /**
    * Specifies the callback function of the current filter for a dataset.
    * Use applyFilter to specify a dataset filter. When filtering is applied to a dataset, only those records that meet a filter's conditions are available.
    */
    public applyFilter(filterCallback: () => boolean) {
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
    * Clear the filter for a dataset.
    */
    public clearFilter() {
        if (this.sourceRecordset) this.recordset = this.sourceRecordset;
        this.sourceRecordset = null;
        this.first();
        this.stateChanged();
    }

    public onStateChanged: () => void;
    public onSelectionChanged: () => void;




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


    private _showprogressbar: boolean = true;
    public get ShowProgressBar(): boolean {
        return this._showprogressbar;
    }
    public set ShowProgressBar(val: boolean) {
        if (val != this._showprogressbar) {
            this._showprogressbar = val;
        }
    }


    public get Recno(): number {
        return (<any>this)._recno;
    }

    public set Recno(val: number) {
        if (this.RecordCount < 1) val = -1
        else if (val > (this.RecordCount - 1)) val = this.RecordCount - 1;
        else if (val < 0) val = 0;
        (<any>this)._recno = val;

        if ((<any>this)._enabledControl) this.selectionChanged();
    }

    private _active: boolean = false;
    public get Active(): boolean {
        return this._active;
    }

    public set Active(val: boolean) {
        if (val != this._active) {
            this._active = val;
        }
    }

    /*
    * Adds a new records to the end of the dataset. the method return the new record number
    */
    public appendRecords(data: any[], disableEvents: boolean = false): number {
        if (!this.Active) this.setData([]);
        for (var i = 0; i < data.length; i++) {
            this.appendRecord(data[i], true);
        }
        if ((<any>this)._enabledControl && !disableEvents) (<any>this).dataChanged();
        return this.RecordCount - 1;
    }

    /*
    * Adds a new record to the end of the dataset. the method return the new record number
    */
    public appendRecord(data: any, disableEvents: boolean = false): number {
        if (!this.Active) this.setData([]);
        if (data instanceof Array) {
            this.appendRecords(data);
            return;
        }
        var maxid = 0;
        for (var i = 0; i < this.recordset.length; i++) {
            maxid = Math.max(maxid, this.recordset[i].___RECORDID___);
        }

        var obj: any = {};
        obj.___RECORDID___ = maxid + 1;
        obj.___CHECKED___ = false;
        for (var key in data) {
            obj[key.toUpperCase()] = data[key];
        }
        this.recordset.push(obj);
        this.Recno = this.RecordCount - 1;
        if ((<any>this)._enabledControl && !disableEvents) (<any>this).dataChanged();
        return this.RecordCount - 1;
    }

    /*
    * delete the current record
    */
    public deleteRecord(): number {
        if (!this.Active) return;
        if (this.Recno == -1) return;
        var rec = this.Recno;
        this.recordset.splice(this.Recno, 1);
        this.Recno = rec;
        if ((<any>this)._enabledControl) (<any>this).dataChanged();
    }

    public metadata: any[] = [];
    public setMetaData(meta: any[]) {
        this.metadata = [];
        if (meta != null) {
            for (var i = 0, len = meta.length; i < len; i++) {
                var obj: any = {};
                for (var key in meta[i]) {
                    obj[key.toUpperCase()] = meta[i][key];
                }
                obj["NAME"] = obj["NAME"].toUpperCase();
                this.metadata.push(obj);
            }
        }
    }


    public setData(data: any[]) {
        this.recordset = [];
        this.sourceRecordset = null;
        this.tempRecordset = null;
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

    private countTempGroupset(grp) {
        if (!grp || grp == "") grp = "~@!~#!@#!@#!!@#!@";
        return this.tempGroupset[grp];
    }


    public sort(columnName: string, ascending: boolean = true, groupname : string = null) {
        this.tempRecordset = this.recordset.slice(0);
        this.tempGroupset = [];

        if (groupname) this.tempRecordset.forEach((item) => {
            var grp = item[groupname];
            if (!grp || grp == "") {
                grp = "~@!~#!@#!@#!!@#!@";
            }
            if (this.tempGroupset[grp] == null) this.tempGroupset[grp] = 1;
            else this.tempGroupset[grp] = this.tempGroupset[grp] + 1;
        });

        if (ascending) {
            this.tempRecordset.sort(function (a, b) {
                var a1: string = "";
                var b1: string = "";
                if (groupname) {
                    a1 += a[groupname];
                    b1 += b[groupname];
                    if (a1 > b1) return 1;
                    else if (a1 < b1) return -1
                }
                if (columnName) {
                    a1 += "~~" + a[columnName];
                    b1 += "~~" + b[columnName];
                }

                if (a1 > b1) return 1;
                else if (a1 < b1) return -1
                else return 0;
            })
            } else {
                this.tempRecordset.sort(function (a, b) {
                    var a1: string = "";
                    var b1: string = "";
                    if (groupname) {
                        a1 += a[groupname];
                        b1 += b[groupname];
                        if (a1 > b1) return 1;
                        else if (a1 < b1) return -1
                    }
                    if (columnName) {
                        a1 += "~~" + a[columnName];
                        b1 += "~~" + b[columnName];
                    }

                if (a1 < b1) return 1;
                else if (a1 > b1) return -1
                else return 0;
            })
            }
        this.sortProperty = columnName;
        this.sortDirection = ascending ? "ASC" : "DESC";
        this.groupProperty = groupname;
        this.recordset = this.tempRecordset;
    }

    public getRecords(start: number, end: number, sortDirection: string, sortProperty: string, groupProperty? : string): any {
        if ((sortProperty == null || sortProperty == "") && (groupProperty == null || groupProperty == "")) return this.recordset.slice(start, end + 1); //not sort was mentions
        sortProperty = sortProperty.toUpperCase();
        sortDirection = sortDirection.toUpperCase();
        if (this.tempRecordset == null || sortDirection != this.sortDirection ||
            sortProperty != this.sortProperty || groupProperty != this.groupProperty) {
            this.sort(sortProperty, sortDirection == "ASC", groupProperty);
        }
        return this.recordset.slice(start, end + 1);
    }



}
