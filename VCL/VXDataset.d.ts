/// <reference path="Scripts/jquery.d.ts" />
import VXO = require("./VXObject");
import VXC = require("./VXComponent");
import VXU = require("./VXUtils");
export declare class TGenericDataset<T> extends VXO.TObject {
    recordset: T[];
    onDataChanged: () => void;
    static EVENT_SELECTION_CHANGED: string;
    static EVENT_DATA_CHANGED: string;
    static EVENT_STATE_CHANGED: string;
    RecordCount: number;
    private _recno;
    Recno: number;
    getFieldValue(fieldname: string): any;
    aggregateFieldSum(fieldname: string): number;
    aggregateFieldAvg(fieldname: string): number;
    aggregateFieldMax(fieldname: string): number;
    aggregateFieldMin(fieldname: string): number;
    setFieldValue(fieldname: string, value: any): void;
    private indataChanged;
    private dataChanged();
    /**
    *  Iterator function, which can be used to seamlessly iterate over all records
    */
    forEach(Callback: () => void): void;
    /**
    * Disables data display in data bounded components associated with the dataset.
    **/
    private _enabledControl;
    DisableControls(): void;
    /**
    * Enable data display in data bounded components associated with the dataset.
    **/
    EnableControls(): void;
    Active: boolean;
    Readonly: boolean;
    /**
    * return an object with the content of the currnt record
    */
    getCurrentRecord(): T;
    /**
    * return a unique indentifier of the record
    */
    getRecordIndex(): number;
    /**
    * return the record number of specfix recordIndex
    */
    getRecordIndexRecNo(recordIndex: any): number;
    getRecords(start: number, end: number, sortDirection: string, sortProperty: string, groupProperty?: string): any;
    getCheckCount(): number;
    checkRecord(): void;
    uncheckRecord(): void;
    isChecked(): boolean;
    /**
    * Moves to the next record in the dataset.
    **/
    next(): boolean;
    /**
    * Moves to the previous record in the dataset.
    **/
    prior(): boolean;
    /**
    * Moves to the first record in the dataset.
    **/
    first(): boolean;
    /**
    * Moves to the last record in the dataset.
    **/
    last(): boolean;
}
export declare class TDataset extends TGenericDataset<any> {
}
export declare class TClientDataset extends TDataset implements VXU.VXDatasetInt {
    onError: (errorMessage: string) => void;
    private tempRecordset;
    private tempGroupset;
    private sourceRecordset;
    private sortProperty;
    private groupProperty;
    private sortDirection;
    onBeforeOpen: (dataset: TClientDataset) => void;
    onAfterOpen: (dataset: TClientDataset) => void;
    owner: VXC.TComponent;
    constructor(aOwner: VXC.TComponent);
    loadRemoteResults(data: any): void;
    openRemoteMethod(methodname: string, param: Object): void;
    private selectionChanged();
    private stateChanged();
    /**
    * Specifies the callback function of the current filter for a dataset.
    * Use applyFilter to specify a dataset filter. When filtering is applied to a dataset, only those records that meet a filter's conditions are available.
    */
    applyFilter(filterCallback: () => boolean): void;
    /**
    * Clear the filter for a dataset.
    */
    clearFilter(): void;
    onStateChanged: () => void;
    onSelectionChanged: () => void;
    private _readonly;
    Readonly: boolean;
    private _showprogressbar;
    ShowProgressBar: boolean;
    Recno: number;
    private _active;
    Active: boolean;
    /**
    * Adds a new records to the end of the dataset. the method return the new record number
    * example x.appendRecords([{fileid : 1},{fileid : 2}]);
    */
    appendRecords(recordsArray: Object[], disableEvents?: boolean): number;
    /**
    * delete the current record
    */
    deleteRecord(): number;
    /**
    * Adds a new record to the end of the dataset. the method return the new record number
    */
    appendRecord(record: Object, disableEvents?: boolean): number;
    metadata: any[];
    setMetaData(meta: any[]): void;
    /**
    * Data represents the client dataset's local, in-memory copy of its data, encoded as a array of any
    */
    private static reISO;
    setData(data: any[]): any;
    private countTempGroupset(grp);
    sort(columnName: string, ascending?: boolean, groupname?: string): void;
    getRecords(start: number, end: number, sortDirection: string, sortProperty: string, groupProperty?: string): any;
}
export declare class TNestedClientDataset extends TClientDataset {
    private ownerColumn;
    constructor(aOwner: VXC.TComponent, ownerDataset: TClientDataset, ownerColumn: string);
    private _parentdataset;
    /**
   * Specifies the dataset that contains the field it represents.
   */
    private parentDataset;
    private setNestedData(data);
}
