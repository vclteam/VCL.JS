/// <reference path="Scripts/jquery.d.ts" />
import V = require("./VCL");
import VXC = require("./VXComponent");
import VXD = require("./VXDataset");
import VXO = require("./VXObject");
export declare class TGridBase extends VXC.TComponent implements V.iTranslatable {
    onRowClicked: (record: any, clickedColumn: V.TDBGridColumn) => void;
    onSortClicked: (column: V.TDBGridColumn, order: V.SortColumnOrder) => void;
    onChecboxClicked: (recno: number) => void;
    onGetRowStyle: (record: any) => V.GridRowStyle;
    onGetPageCounterText: (TotalPagesCount: number, currentPage: number) => string;
    onNextPageClicked: () => void;
    onPriorPageClicked: () => void;
    private selectedRecordId;
    gridDataSource: TBaseGridDataSource;
    /**
    @aOwner     Indicates the component that is responsible for streaming and freeing this component.Onwer must be TContainer
    @renderTo   (Optional) the id of the html element that will be the parent node for this component
    **/
    constructor(aOwner: VXC.TComponent, renderTo?: string);
    private _autotablelayout;
    /**
    * The column width is set by the widest unbreakable content in the cells
    */
    AutomaticTableLayout: boolean;
    private _localizable;
    /**
    * In order to localize application each page or component of the application has to have Localizable property set true.
    */
    Localizable: boolean;
    private _showselectedrecord;
    /**
    * Adds zebra-striping to any tdbgridt control.
    */
    ShowSelectedRecord: boolean;
    private _striped;
    /**
    * Adds zebra-striping to any tdbgridt control.
    */
    Striped: boolean;
    private _currentPage;
    CurrentPage: number;
    private _pageraligment;
    PagerAlignment: V.PagerAlignment;
    private _summeryboxVisible;
    SummaryBoxVisible: boolean;
    private _groupboxMaxVisibleLines;
    GroupBoxMaxVisibleLines: number;
    private _groupboxVisible;
    GroupBoxVisible: boolean;
    private _groupBoxGroupByCaption;
    GroupBoxGroupByCaption: string;
    private _pagerVisible;
    PagerVisible: boolean;
    private _footerVisible;
    FooterVisible: boolean;
    private _showvertlines;
    ShowVertLines: boolean;
    private _showhorzlines;
    ShowHorzLines: boolean;
    private _headerVisible;
    HeaderVisible: boolean;
    private _bordered;
    /**
    * Add borders and rounded corners to the table.
    */
    Bordered: boolean;
    private _condensed;
    /**
    * Makes grid more compact by cutting cell padding in half.
    */
    Condensed: boolean;
    private _pagesize;
    PageSize: number;
    private visbleColumnCount();
    jGrid: JQuery;
    private getLastIndex();
    private indexExists(index);
    private pushIndex(index);
    private compressIndex();
    columns: TGridColumnCollection<TDBGridColumn>;
    createColumn(fieldname?: string, header?: string): V.TDBGridColumn;
    actionButtons: VXO.TCollection<V.TButton>;
    createActionButton(text: string): V.TButton;
    private _selectedrecordstyle;
    /**
    * Adds zebra-striping to any tdbgridt control.
    */
    SelectedRecordStyle: V.SelectedRowStyle;
    private _sortcolumn;
    SortColumn: TDBGridColumn;
    private _sortmode;
    SortMode: V.SortMode;
    private _sortcolumnOrder;
    SortColumnOrder: V.SortColumnOrder;
    private _selectcheckboxHeader;
    CheckboxColumnHeader: string;
    private _firstPageButtonText;
    FirstPageButtonText: string;
    private _firstPageButtonVisible;
    FirstPageButtonVisible: boolean;
    private _pagecountVisible;
    PageCounterVisible: boolean;
    private _lastPageButtonVisible;
    LastPageButtonVisible: boolean;
    private _lastPageButtonText;
    LastPageButtonText: string;
    private _nextPageButtonText;
    NextPageButtonText: string;
    private _prevPageButtonText;
    PrevPageButtonText: string;
    private _pagerButtonStyle;
    PagerButtonStyle: V.PagerButtonStyle;
    private _pagerButtonSize;
    PagerButtonSize: V.PagerButtonSize;
    private _showselectcheckbox;
    ShowSelectCheckbox: boolean;
    private groupableCount();
    create(): void;
}
export declare class TGrid extends TGridBase {
    onGetPage: (pageInedx: number, pageSize: number, sortDirection: string, sortColumn: TDBGridColumn, callback: (data: Array<any>) => void) => void;
    private _recordCount;
    RecordCount: number;
    create(): void;
}
export declare class TGridColumnCollection<T> extends VXO.TCollection<TDBGridColumn> {
    private owner;
    FindItemByFieldName(value: string): TDBGridColumn;
    constructor(aOwner: TGridBase);
    add(item: TDBGridColumn): boolean;
    refresh(): void;
    EndUpdate(): void;
}
export declare class TDBGrid extends TGridBase {
    private _dataset;
    /**Identifies the the dataset where the data-aware grid finds its data*/
    Dataset: VXD.TDataset;
    private _groupcolumn;
    GroupColumn: TDBGridColumn;
    createAllColumns(beautifyHeader: boolean): void;
    private butifyStr(str);
    private recalcAggergation();
    create(): void;
    private selectionChanged();
    private refreshRecord();
    draw(reCreate: boolean): void;
}
export declare class TDBGridColumn extends VXO.TCollectionItem {
    grid: TGridBase;
    onClicked: () => void;
    onGetValue: (record: any, sender: TDBGridColumn) => any;
    onGetCellClass: (record: any) => string;
    onGetIcon: (record: any) => V.Icon;
    onGetTooltip: (record: any) => string;
    onGetImageURL: (record: any) => string;
    private _rtl;
    Rtl: boolean;
    private _aggergateable;
    Aggregatable: boolean;
    private _aggergateFunction;
    AggergateFunction: V.AggergateFunction;
    private _aggregateValue;
    private calculateAggregateValue();
    private _wordwrap;
    WordWrap: boolean;
    private _visible;
    Visible: boolean;
    private _dateformat;
    DateFormat: string;
    private getTextWidth(str, wrap);
    private _currency;
    Currency: boolean;
    private _decimaldigits;
    DecimalDigits: number;
    private _width;
    Width: number;
    private _fieldname;
    FieldName: string;
    private _textaligment;
    TextAlignment: V.TextAlignment;
    private _headeraligment;
    HeaderTextAlignment: V.HeaderTextAlignment;
    private _index;
    Index: number;
    private _header;
    Header: string;
    private _sortable;
    Sortable: boolean;
    private _groupable;
    Groupable: boolean;
    formatValue(value: any): any;
}
export declare class TBaseGridDataSource {
    _data: any[];
    grid: TGridBase;
    refreshSelection(_grid: TGridBase): void;
    bindColumnClickEvent(_grid: TGridBase): void;
    rendersummarydata(dataset: V.TDataset, _grid: TGridBase): any;
    renderdata(_data: Array<any>, _grid: TGridBase): Array<any>;
    columns(): any[];
}
