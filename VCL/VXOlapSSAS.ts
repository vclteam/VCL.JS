import V = require("VCL/VCL");
import VXA = require("VCL/VXApplication");
import VXD = require("VCL/VXDataset");
import VXDS = require("VCL/VXServer");
import VXO = require("VCL/VXObject");
import VXC = require("VCL/VXComponent");
import VXCO = require("VCL/VXContainer");

export class VXOlapSSAS extends VXD.VXClientDataset {
    public onError: (errorMessage: string) => void;
    private _connectionname: string = "SSAS";
    public get ConnectionName(): string {
        return this._connectionname;
    }

    public set ConnectionName(val: string) {
        if (val != this._connectionname) {
            this._connectionname = val;
        }
    }

    private _databasename: string = "SSAS";
    public get DatabaseName(): string {
        return this._databasename;
    }

    public set DatabaseName(val: string) {
        if (val != this._databasename) {
            this._databasename = val;
        }
    }

    private _cubename: string = "";
    public get CubeName(): string {
        return this._cubename;
    }

    public set CubeName(val: string) {
        if (val != this._cubename) {
            this._cubename = val;
        }
    }

    private _mdx: string = "";
    public get MDX(): string {
        return this._mdx;
    }

    public set MDX(val: string) {
        if (val != this._mdx) {
            this._mdx = val;
        }
    }

    public owner: VXC.VXComponent;
    constructor(aOwner: VXC.VXComponent, connectionName?: string, databaseName?: string) {
        super(aOwner);
        this.owner = aOwner;
        if (connectionName != null) this.ConnectionName = connectionName;
        if (databaseName != null) this.DatabaseName = databaseName;
    }

    private checkRequiredParams() {
        if (this.ConnectionName == null || this.ConnectionName == "") {
            V.Application.raiseException("Connectname cannot contain empty value");
        }
        if (this.DatabaseName == null || this.ConnectionName == "") {
            V.Application.raiseException("DatabaseName cannot contain empty value")
        }
        if (this.CubeName == null || this.CubeName == "") {
            V.Application.raiseException("CubeName cannot contain empty value")
        }
    }

    public getDimensionMembers(dimensionName: string, levelName: string,
        callback: (items: V.TCollection<VXOlapMemeber>) => void ) {
        this.checkRequiredParams();
            new V.TServer().callServerMethod("SSAS", {
                __FUNCTION__: "MEMBERS",
                __DIMNAME__: dimensionName,
                __HIERARCHNAME__: levelName,
                __LEVELNAME__: levelName,
                __CUBENAME__: this.CubeName,
                __DATABASENAME__: this.DatabaseName,
                __DB__: this.ConnectionName

        }, (data: any) => {
                var results = new V.TCollection<VXOlapMemeber>();
                if (results != null) {
                    (<any[]>data).sort((a, b) => {
                        if (a.Name > b.Name) return 1;
                        if (a.Name < b.Name) return -1;
                        return 0;
                    });
                    for (var i = 0; i < data.length; i++) {
                        var item = new VXOlapMemeber();
                        item.Name = data[i].Name;
                        item.UniqueName = data[i].ID;
                        item.Description = data[i].Description == null ? "" : data[i].Description;
                        results.add(item);
                    }
                }

                if (callback != null) callback(results);


            });
    }

    public slicers = new VXO.VXCollection<VXSlicer>();
    public createSlicer(memberUniqueName: any): VXMemeberSlicer {
        var param = new VXMemeberSlicer();
        param.MemberUniqueName = memberUniqueName;
        this.slicers.add(param);
        return param;
    }

    public createDateRangeSlicer(dimension : string,fromDate: Date, toDate: Date): VXDateSlicer {
        var param = new VXDateSlicer();
        param.FromDate = fromDate;
        param.ToDate = toDate;
        param.Dimension = dimension;
        this.slicers.add(param);
        return param;
    }


    public open() {
        if (this.owner != null && (this.owner instanceof VXCO.VXContainer)) { (<any>this.owner).addQuery(this); }
        new V.TServer().callServerMethod("SSAS", {
            __FUNCTION__: "SELECT",
            __MDX__: this.MDX,
            __CUBENAME__: this.CubeName,
            __DATABASENAME__: this.DatabaseName,
            __SLICER__: this.slicers.toArray(),
            __DB__: this.ConnectionName

        }, (data: any) => {
            if (this.owner != null && (this.owner instanceof VXCO.VXContainer)) { (<any>this.owner).removeQuery(this); }
                var recordSet: any[] = [];

                var members: any[] = data.dictionary;
                for (var i = 0, len: number = members.length; i < len; i++) {
                    var memeberName: string = members[i];
                    if (memeberName.indexOf("~#S") > 0) members[i] = memeberName.split("~#S");
                    else {
                        //date member
                        members[i] = memeberName.split("~#T");
                        var milli = parseFloat(members[i][1]);
                        members[i][1] = new Date(milli);
                    }
                }

                var rowCount: number = data.row_headers;
                var colCount: number = data.column_headers;

                for (var i = 0, len: number = data.table.length; i < len; i++) {

                    var raw = data.table[i];
                    var row = {};
                    var key = "";
                    for (var j = 0; j < colCount; j++) key = key + raw.a[j] + ",";

                    row = recordSet[key];
                    if (row == null) {
                        row = {}
                        for (var j = 0; j < colCount; j++) row["COL_" + j] = members[raw.a[j]][1];
                        recordSet[key] = row;
                    }

                    if (rowCount == 0) row["VALUE"] = raw.v;
                    for (var j = 0; j < rowCount; j++) {
                        row[(<string>members[raw.a[j + colCount]][1]).toUpperCase()] = raw.v;
                    }
                }
                var data: any[] = [];
                for (var item in recordSet)
                    if (recordSet.hasOwnProperty(item))
                        data.push(recordSet[item]);

                this.setData(data);
                if (this.onAfterOpen != null) (V.tryAndCatch(() => { this.onAfterOpen(this); }))
            }
            

            , (errorMessage: string) => {
                if (this.owner != null && (this.owner instanceof VXCO.VXContainer)) { (<any>this.owner).removeQuery(this); }

                if (this.onError != null) (V.tryAndCatch(() => { this.onError(errorMessage); }))
           else V.Application.raiseException(errorMessage);
            });
    

    }
}

export class VXSlicer extends VXO.VXCollectionItem {
}

export class VXMemeberSlicer extends VXSlicer {
    private _value: string = null;
    public get MemberUniqueName(): string {
        return this._value;
    }

    public set MemberUniqueName(val: string) {
        if (val != this._value) {
            this._value = val;
        }
    }
}

export class VXDateSlicer extends VXSlicer {
    private _dimension: string = null;
    public get Dimension(): string {
        return this._dimension;
    }

    public set Dimension(val: string) {
        if (val != this._dimension) {
            this._dimension = val;
        }
    }


    private _fromDate: Date = null;
    public get FromDate(): Date {
        return this._fromDate;
    }

    public set FromDate(val: Date) {
        if (val != this._fromDate) {
            this._fromDate = val;
        }
    }

    private _toDate: Date = null;
    public get ToDate(): Date {
        return this._toDate;
    }

    public set ToDate(val: Date) {
        if (val != this._toDate) {
            this._toDate = val;
        }
    }

}


export class VXOlapMemeber extends VXO.VXCollectionItem {
    private _uniquename: string = null;
    public get UniqueName(): string {
        return this._uniquename;
    }

    public set UniqueName(val: string) {
        if (val != this._uniquename) {
            this._uniquename = val;
        }
    }

    private _name: string = null;
    public get Name(): string {
        return this._name;
    }

    public set Name(val: string) {
        if (val != this._name) {
            this._name = val;
        }
    }


    private _description: string = null;
    public get Description(): string {
        return this._description;
    }

    public set Description(val: string) {
        if (val != this._name) {
            this._description = val;
        }
    }

}