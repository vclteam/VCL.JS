import V = require("./VCL");
import VXA = require("./VXApplication");
import VXD = require("./VXDataset");
import VXDS = require("./VXServer");
import VXO = require("./VXObject");
import VXC = require("./VXComponent");
import VXCO = require("./VXContainer");


export class TQueryBase extends VXD.TClientDataset {
    public onExecuteCompleted: () => void;

    public params = new VXO.TCollection<TQueryParam>();
    public createParam(value: any): TQueryParam {
        var param = new TQueryParam();
        param.Value = value;
        this.params.add(param);
        return param;
    }

    private paramAsJSON() {
        var paramJSON = {};
        var index = 0;
        this.params.forEach((item: TQueryParam) => {
            if (item.Value != null && item.Value.getMonth) {
                paramJSON[index] = "!~@!" + item.Value.toJSON();
            } else {
                paramJSON[index] = item.Value;
            }
            index++;
            return true;

        });
        return paramJSON;
    }

    private _cachetimeout: number = -1;
    public get CacheTimeOut(): number {
        return this._cachetimeout;
    }
    public set CacheTimeOut(val: number) {
        if (val != this._cachetimeout) {
            this._cachetimeout = val;

        }
    }

    private _timeout: number;
    public get Timeout(): number {
        return this._timeout;
    }
    public set Timeout(val: number) {
        if (val != this._timeout) {
            this._timeout = val;

        }
    }



    public close() {
        this.setData(null);
        this.Active = false;
    }
}

export class TQuery extends TQueryBase {
    private _SQL: string;
    /**
    * Contains the text of the SQL statement to execute for the ADO query.
    */
    public get SQL(): string {
        return this._SQL;
    }

    public set SQL(val: string) {
        if (val != this._SQL) {
            this._SQL = val;
        }
    }

    private _servermethod: string = "Query";
    public get ServerMethod(): string {
        return this._servermethod;
    }

    public set ServerMethod(val: string) {
        if (val != this._servermethod) {
            this._servermethod = val;
        }
    }


    private _connectionname: string = "DB";
    public get ConnectionName(): string {
        return this._connectionname;
    }

    public set ConnectionName(val: string) {
        if (val != this._connectionname) {
            this._connectionname = val;
        }
    }



    constructor(aOwner: VXC.TComponent, SQL?: string, connectionName?: string) {
        super(aOwner);
        if (SQL != null) this.SQL = SQL;
        if (connectionName != null) this.ConnectionName = connectionName;
    }


    public open() {
        if (this.onBeforeOpen != null) (V.tryAndCatch(() => { this.onBeforeOpen(this); }))
        var server = new VXDS.TServer(null, this.Timeout? this.Timeout : null);
        var paramJSON = (<any>this).paramAsJSON();
        if (this.owner != null && (this.owner instanceof VXCO.TContainer)) { (<any>this.owner).addQuery(this); }
        server.send(this._servermethod, { __EXECUTE__: false, __SQL__: this.SQL, __SQLPARAM__: paramJSON, __DB__: this.ConnectionName }, (data) => {
            this.loadRemoteResults(data);
            if (this.owner != null && (this.owner instanceof VXCO.TContainer)) { (<any>this.owner).removeQuery(this); }
        },
            (errorMessage: string) => {
                if (this.owner != null && (this.owner instanceof VXCO.TContainer)) { (<any>this.owner).removeQuery(this); }

                if (this.onError != null) (V.tryAndCatch(() => { this.onError(errorMessage); }))
            else V.Application.raiseException(errorMessage);
            }
            , this.CacheTimeOut);
    }

    /**
    * Call ExecSQL to execute the SQL statement currently assigned to the SQL property. Use ExecSQL to execute queries that do not return a cursor to data (such as INSERT, UPDATE, DELETE, and CREATE TABLE).
    */
    public ExecSQL(onComplete?: (data) => void) {
        var server = new VXDS.TServer(null, this.Timeout ? this.Timeout : null);
        var paramJSON = (<any>this).paramAsJSON();
        if (this.owner != null && (this.owner instanceof VXCO.TContainer)) { (<any>this.owner).addQuery(this); }
        server.send("Query", { __EXECUTE__: true, __SQL__: this.SQL, __SQLPARAM__: paramJSON, __DB__: this.ConnectionName }, (data) => {
            if (this.onExecuteCompleted != null) (V.tryAndCatch(() => { this.onExecuteCompleted(); }))
            if (onComplete != null) (V.tryAndCatch(() => { onComplete(data); }));
            if (this.owner != null && (this.owner instanceof VXCO.TContainer)) { (<any>this.owner).removeQuery(this); }
        },
            (errorMessage: string) => {
                if (this.owner != null && (this.owner instanceof VXCO.TContainer)) { (<any>this.owner).removeQuery(this); }

                if (this.onError != null) (V.tryAndCatch(() => { this.onError(errorMessage); }))
            else V.Application.raiseException(errorMessage);
            }
            , this.CacheTimeOut);

    }
}

export class TQueryRemote extends TQueryBase {
    private _queryid: string;
    public get QueryID(): string {
        return this._queryid;
    }

    public set QueryID(val: string) {
        if (val != this._queryid) {
            this._queryid = val;
        }
    }

    constructor(aOwner: VXC.TComponent, queryID?: string) {
        super(aOwner);
        this.QueryID = queryID;
    }

    public open() {
        if (this.onBeforeOpen != null) (V.tryAndCatch(() => { this.onBeforeOpen(this); }))
        var server = new VXDS.TServer(null, this.Timeout ? this.Timeout : null);
        var paramJSON = (<any>this).paramAsJSON();

        if (this.owner != null && (this.owner instanceof VXCO.TContainer)) { (<any>this.owner).addQuery(this); }
        server.send("RemoteQuery", { __QUERYID__: this.QueryID, __SQLPARAM__: paramJSON }, (data) => {
            if (this.owner != null && (this.owner instanceof VXCO.TContainer)) { (<any>this.owner).removeQuery(this); }
            this.loadRemoteResults(data);
        },
            (errorMessage: string) => {
                if (this.owner != null && (this.owner instanceof VXCO.TContainer)) { (<any>this.owner).removeQuery(this); }

                if (this.onError != null) (V.tryAndCatch(() => { this.onError(errorMessage); }))
           else V.Application.raiseException(errorMessage);
            }, this.CacheTimeOut
            );
    }

    /**
    * Call ExecSQL to execute the SQL statement currently assigned to the SQL property. Use ExecSQL to execute queries that do not return a cursor to data (such as INSERT, UPDATE, DELETE, and CREATE TABLE).
    */
    public ExecSQL(onComplete?: (data) => void) {
        var server = new VXDS.TServer(null, this.Timeout ? this.Timeout : null);
        var paramJSON = (<any>this).paramAsJSON();
        if (this.owner != null && (this.owner instanceof VXCO.TContainer)) { (<any>this.owner).addQuery(this); }
        server.send("RemoteQuery", { __EXECUTE__: true, __QUERYID__: this.QueryID, __SQLPARAM__: paramJSON }, (data) => {
            if (this.onExecuteCompleted != null) (V.tryAndCatch(() => { this.onExecuteCompleted(); }));
            if (onComplete != null) (V.tryAndCatch(() => { onComplete(data); }));
            if (this.owner != null && (this.owner instanceof VXCO.TContainer)) { (<any>this.owner).removeQuery(this); }
        },
            (errorMessage: string) => {
                if (this.owner != null && (this.owner instanceof VXCO.TContainer)) { (<any>this.owner).removeQuery(this); }

                if (this.onError != null) (V.tryAndCatch(() => { this.onError(errorMessage); }))
            else V.Application.raiseException(errorMessage);
            }
            );
    }
}

export class TQueryParam extends VXO.TCollectionItem {
    private _value: any = null;
    public get Value(): any {
        return this._value;
    }

    public set Value(val: any) {
        if (val != this._value) {
            this._value = val;
        }
    }
}

