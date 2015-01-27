import V = require("./VCL");
import VXD = require("./VXDataset");
import VXO = require("./VXObject");
import VXC = require("./VXComponent");
export declare class TOlapSSAS extends VXD.TClientDataset {
    onError: (errorMessage: string) => void;
    private _connectionname;
    ConnectionName: string;
    private _databasename;
    DatabaseName: string;
    private _cubename;
    CubeName: string;
    private _mdx;
    MDX: string;
    private _where;
    Where: string;
    owner: VXC.TComponent;
    constructor(aOwner: VXC.TComponent, connectionName?: string, databaseName?: string);
    private checkRequiredParams();
    getDimensionMembers(dimensionName: string, levelName: string, callback: (items: V.TCollection<TOlapMemeber>) => void): void;
    slicers: VXO.TCollection<TSlicer>;
    createSlicer(memberUniqueName: any): TMemeberSlicer;
    addSlicers(selectedMember: string, clearOldSlicers?: boolean): void;
    createDateRangeSlicer(dimension: string, fromDate: Date, toDate: Date): TDateSlicer;
    open(): void;
}
export declare class TSlicer extends VXO.TCollectionItem {
}
export declare class TMemeberSlicer extends TSlicer {
    private _value;
    MemberUniqueName: string;
}
export declare class TDateSlicer extends TSlicer {
    private _dimension;
    Dimension: string;
    private _level;
    Level: string;
    private _fromDate;
    FromDate: Date;
    private _toDate;
    ToDate: Date;
}
export declare class TOlapMemeber extends VXO.TCollectionItem {
    private _uniquename;
    UniqueName: string;
    private _name;
    Name: string;
    private _description;
    Description: string;
}
