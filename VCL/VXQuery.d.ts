import VXD = require("./VXDataset");
import VXO = require("./VXObject");
import VXC = require("./VXComponent");
export declare class TQueryBase extends VXD.TClientDataset {
    onExecuteCompleted: () => void;
    params: VXO.TCollection<TQueryParam>;
    createParam(value: any): TQueryParam;
    private paramAsJSON();
    private _cachetimeout;
    CacheTimeOut: number;
    private _timeout;
    Timeout: number;
    close(): void;
}
export declare class TQuery extends TQueryBase {
    private _SQL;
    /**
    * Contains the text of the SQL statement to execute for the ADO query.
    */
    SQL: string;
    private _servermethod;
    ServerMethod: string;
    private _connectionname;
    ConnectionName: string;
    constructor(aOwner: VXC.TComponent, SQL?: string, connectionName?: string);
    open(): void;
    /**
    * Call ExecSQL to execute the SQL statement currently assigned to the SQL property. Use ExecSQL to execute queries that do not return a cursor to data (such as INSERT, UPDATE, DELETE, and CREATE TABLE).
    */
    ExecSQL(onComplete?: (data) => void): void;
}
export declare class TQueryRemote extends TQueryBase {
    private _queryid;
    QueryID: string;
    constructor(aOwner: VXC.TComponent, queryID?: string);
    open(): void;
    /**
    * Call ExecSQL to execute the SQL statement currently assigned to the SQL property. Use ExecSQL to execute queries that do not return a cursor to data (such as INSERT, UPDATE, DELETE, and CREATE TABLE).
    */
    ExecSQL(onComplete?: (data) => void): void;
}
export declare class TQueryParam extends VXO.TCollectionItem {
    private _value;
    Value: any;
}
