/// <reference path="Scripts/jquery.d.ts" />
import V = require("VCL/VCL");
import VXC = require("VCL/VXComponent");
import VXCO = require("VCL/VXContainer");
import VXD = require("VCL/VXDataset");
import VXO = require("VCL/VXObject");
import VXU = require("VCL/VXUtils");

export class TGridBase extends VXC.TComponent {
    public onRowClicked: (clickedColumn: V.TDBGridColumn) => void;
    public onChecboxClicked: (recno: number) => void;
    public onGetRowStyle: (record: any) => V.GridRowStyle;
    public onNextPageClicked: () => void;
    public onPriorPageClicked: () => void;
    private selectedRecordId: number;
    public gridDataSource: TBaseGridDataSource;

    constructor(aOwner: VXC.TComponent, renderTo?: string) {
        super(aOwner, renderTo);
        (<any>this)._fittowidth = true;
        this.columns = new TGridColumnCollection<TDBGridColumn>(this);
    }

    private _autotablelayout: boolean = false;
    /*
    * The column width is set by the widest unbreakable content in the cells
    */
    public get AutomaticTableLayout(): boolean {
        return this._autotablelayout;
    }
    public set AutomaticTableLayout(val: boolean) {
        if (val != this._autotablelayout) {
            this._autotablelayout = val;
            this.drawDelayed(true);
        }
    }


    private _showselectedrecord: boolean = true;
    /*
    * Adds zebra-striping to any tdbgridt control.
    */
    public get ShowSelectedRecord(): boolean {
        return this._showselectedrecord;
    }
    public set ShowSelectedRecord(val: boolean) {
        if (val != this._showselectedrecord) {
            this._showselectedrecord = val;
        }
    }

    private _striped: boolean = false;
    /*
    * Adds zebra-striping to any tdbgridt control.
    */
    public get Striped(): boolean {
        return this._striped;
    }
    public set Striped(val: boolean) {
        if (val != this._striped) {
            this._striped = val;
            this.drawDelayed(true);
        }
    }

    private _currentPage: number = 0;
    public get CurrentPage(): number {
        return this._currentPage;
    }
    public set CurrentPage(val: number) {
        if (val != this._currentPage) {
            this._currentPage = val;
            this.drawDelayed(false);
        }
    }

    private _pageraligment: V.PagerAlignment = V.PagerAlignment.Right;
    public get PagerAlignment(): V.PagerAlignment {
        return this._pageraligment;
    }
    public set PagerAlignment(val: V.PagerAlignment) {
        if (val != this._pageraligment) {
            this._pageraligment = val;
            this.drawDelayed(true);
        }
    }

    
    private _groupboxVisible: boolean = true;
    public get GroupBoxVisible(): boolean {
        return this._groupboxVisible;
    }
    public set GroupBoxVisible(val: boolean) {
        if (val != this._groupboxVisible) {
            this._groupboxVisible = val;
            this.drawDelayed(true);
        }
    }

    private _groupBoxGroupByCaption: string = "Group By";
    public get GroupBoxGroupByCaption(): string {
        return this._groupBoxGroupByCaption;
    }
    public set GroupBoxGroupByCaption(val: string) {
        if (val != this._groupBoxGroupByCaption) {
            this._groupBoxGroupByCaption = val;
            this.drawDelayed(true);
        }
    }



    private _pagerVisible: boolean = true;
    public get PagerVisible(): boolean {
        return this._pagerVisible;
    }
    public set PagerVisible(val: boolean) {
        if (val != this._pagerVisible) {
            this._pagerVisible = val;
            this.drawDelayed(true);
        }
    }

    private _footerVisible: boolean = true;
    public get FooterVisible(): boolean {
        return this._footerVisible;
    }
    public set FooterVisible(val: boolean) {
        if (val != this._footerVisible) {
            this._footerVisible = val;
            this.drawDelayed(true);
        }
    }

    private _showvertlines: boolean = true;
    public get ShowVertLines(): boolean {
        return this._showvertlines;
    }
    public set ShowVertLines(val: boolean) {
        if (val != this._showvertlines) {
            this._showvertlines = val;
            this.drawDelayed(true);
        }
    }

    private _showhorzlines: boolean = true;
    public get ShowHorzLines(): boolean {
        return this._showhorzlines;
    }
    public set ShowHorzLines(val: boolean) {
        if (val != this._showhorzlines) {
            this._showhorzlines = val;
            this.drawDelayed(true);
        }
    }



    private _headerVisible: boolean = true;
    public get HeaderVisible(): boolean {
        return this._headerVisible;
    }
    public set HeaderVisible(val: boolean) {
        if (val != this._headerVisible) {
            this._headerVisible = val;
            this.drawDelayed(true);
        }
    }


    private _bordered: boolean = true;
    /*
    * Add borders and rounded corners to the table.
    */
    public get Bordered(): boolean {
        return this._bordered;
    }
    public set Bordered(val: boolean) {
        if (val != this._bordered) {
            this._bordered = val;
            this.drawDelayed(true);
        }
    }

    private _condensed: boolean = true;
    /*
    * Makes grid more compact by cutting cell padding in half.
    */
    public get Condensed(): boolean {
        return this._condensed;
    }
    public set Condensed(val: boolean) {
        if (val != this._condensed) {
            this._condensed = val;
            this.drawDelayed(true);
        }
    }


    private _pagesize: number = 10;
    public get PageSize(): number {
        return this._pagesize;
    }
    public set PageSize(val: number) {
        if (val != this._pagesize) {
            this._pagesize = Math.floor(val);
            if (this._pagesize < 1) this._pagesize = 1;
            this.drawDelayed(true);
        }
    }

    public jGrid: JQuery;

    public columns: TGridColumnCollection<TDBGridColumn>;
    public createColumn(fieldname?: string, header?: string): V.TDBGridColumn {
        var col: TDBGridColumn = new TDBGridColumn();
        col.grid = this;
        this.columns.add(col);

        col.Header = header;
        col.FieldName = fieldname;
        this.drawDelayed(true);
        return col;
    }

    public actionButtons = new VXO.TCollection<V.TButton>();
    public createActionButton(text: string): V.TButton {
        var btn: V.TButton = new V.TButton(null, null);
        btn.Text = text;

        this.actionButtons.add(btn);
        this.drawDelayed(true);
        return btn;
    }


    private _selectedrecordstyle: V.SelectedRowStyle = V.SelectedRowStyle.Info;
    /*
    * Adds zebra-striping to any tdbgridt control.
    */
    public get SelectedRecordStyle(): V.SelectedRowStyle {
        return this._selectedrecordstyle;
    }
    public set SelectedRecordStyle(val: V.SelectedRowStyle) {
        if (val != this._selectedrecordstyle) {
            this._selectedrecordstyle = val;
            this.drawDelayed(true);
        }
    }

    private _sortcolumn: TDBGridColumn = null;
    public get SortColumn(): TDBGridColumn {
        return this._sortcolumn;
    }
    public set SortColumn(val: TDBGridColumn) {
        if (val != this._sortcolumn) {
            this._sortcolumn = val;
            this.drawDelayed(true);
        }
    }



    private _sortcolumnOrder: V.SortColumnOrder = V.SortColumnOrder.Ascending;
    public get SortColumnOrder(): V.SortColumnOrder {
        return this._sortcolumnOrder;
    }
    public set SortColumnOrder(val: V.SortColumnOrder) {
        if (val != this._sortcolumnOrder) {
            this._sortcolumnOrder = val;
            this.drawDelayed(true);
        }
    }

    private _selectcheckboxHeader: string = "*";
    public get CheckboxColumnHeader(): string {
        return this._selectcheckboxHeader;
    }
    public set CheckboxColumnHeader(val: string) {
        if (val != this._selectcheckboxHeader) {
            this._selectcheckboxHeader = val;
            this.drawDelayed(true);
        }
    }

    private _firstPageButtonText: string = "";
    public get FirstPageButtonText(): string {
        return this._firstPageButtonText;
    }
    public set FirstPageButtonText(val: string) {
        if (val != this._firstPageButtonText) {
            this._firstPageButtonText = val;
            this.drawDelayed(true);
        }
    }

    private _firstPageButtonVisible: boolean = true;
    public get FirstPageButtonVisible(): boolean {
        return this._firstPageButtonVisible;
    }
    public set FirstPageButtonVisible(val: boolean) {
        if (val != this._firstPageButtonVisible) {
            this._firstPageButtonVisible = val;
            this.drawDelayed(true);
        }
    }

    private _lastPageButtonVisible: boolean = true;
    public get LastPageButtonVisible(): boolean {
        return this._lastPageButtonVisible;
    }
    public set LastPageButtonVisible(val: boolean) {
        if (val != this._lastPageButtonVisible) {
            this._lastPageButtonVisible = val;
            this.drawDelayed(true);
        }
    }


    private _lastPageButtonText: string = "";
    public get LastPageButtonText(): string {
        return this._lastPageButtonText;
    }
    public set LastPageButtonText(val: string) {
        if (val != this._lastPageButtonText) {
            this._lastPageButtonText = val;
            this.drawDelayed(true);
        }
    }

    private _nextPageButtonText: string = "";
    public get NextPageButtonText(): string {
        return this._nextPageButtonText;
    }
    public set NextPageButtonText(val: string) {
        if (val != this._nextPageButtonText) {
            this._nextPageButtonText = val;
            this.drawDelayed(true);
        }
    }

    private _prevPageButtonText: string = "";
    public get PrevPageButtonText(): string {
        return this._prevPageButtonText;
    }
    public set PrevPageButtonText(val: string) {
        if (val != this._prevPageButtonText) {
            this._prevPageButtonText = val;
            this.drawDelayed(true);
        }
    }


    private _pagerButtonStyle: V.PagerButtonStyle = V.PagerButtonStyle.Default;
    public get PagerButtonStyle(): V.PagerButtonStyle {
        return this._pagerButtonStyle;
    }
    public set PagerButtonStyle(val: V.PagerButtonStyle) {
        if (val != this._pagerButtonStyle) {
            this._pagerButtonStyle = val;
            this.drawDelayed(true);
        }
    }

    private _pagerButtonSize: V.PagerButtonSize = V.PagerButtonSize.Default;
    public get PagerButtonSize(): V.PagerButtonSize {
        return this._pagerButtonSize;
    }
    public set PagerButtonSize(val: V.PagerButtonSize) {
        if (val != this._pagerButtonSize) {
            this._pagerButtonSize = val;
            this.drawDelayed(true);
        }
    }


    private _showselectcheckbox: boolean = false;
    public get ShowSelectCheckbox(): boolean {
        return this._showselectcheckbox;
    }
    public set ShowSelectCheckbox(val: boolean) {
        if (val != this._showselectcheckbox) {
            this._showselectcheckbox = val;
            this.drawDelayed(true);
        }
    }

    private groupableCount(): number {
        if (!this.columns) return 0;
        var cnt: number = 0;
        this.columns.forEach((col) => {if (col.Groupable) cnt++;});
        return cnt;
    }

    public create() {
        //detach all actionbutton
        var self = this;
        this.actionButtons.forEach((btn) => {
            if (btn.jComponent.parent().length > 0) btn.jComponent = btn.jComponent.detach();
        });

        this.jComponent.empty(); //clear all subcomponents

        this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'table', this.FitToWidth, this.FitToHeight);
        this.jComponent.css('table-layout', this.AutomaticTableLayout ? 'auto' : 'fixed').css('cursor', 'pointer');
        this.jComponent.addClass("table datagrid");

        if (this.Condensed) this.jComponent.addClass("table-condensed");
        if (this.Striped) this.jComponent.addClass("table-striped");
        if (this.Bordered) this.jComponent.addClass("table-bordered ");

        var pagebtnstyle = "";
        switch (this.PagerButtonStyle) {
            case V.PagerButtonStyle.Default: break;
            case V.PagerButtonStyle.Primary: pagebtnstyle = "btn-primary"; break;
            case V.PagerButtonStyle.Info: pagebtnstyle = "btn-info"; break;
            case V.PagerButtonStyle.Success: pagebtnstyle = "btn-success"; break;
            case V.PagerButtonStyle.Warning: pagebtnstyle = "btn-warning"; break;
            case V.PagerButtonStyle.Danger: pagebtnstyle = "btn-danger"; break;
            case V.PagerButtonStyle.Link: pagebtnstyle = "btn-link"; break;
        }

        switch (this.PagerButtonSize) {
            case V.PagerButtonSize.Large: pagebtnstyle += " btn-large"; break;
            case V.PagerButtonSize.Small: pagebtnstyle += " btn-small"; break;
            case V.PagerButtonSize.Mini : pagebtnstyle += " btn-mini"; break;
        }


        var cnt = this.groupableCount();
        if (cnt == 0 || !this.GroupBoxVisible) {
            this.jComponent.append($("<thead></thead>"));
        } else {
            var cmb: string = '<tr><th colspan="' + this.columns.length() + '"><div class="row-fluid"><div class="span3 control-group" >'
            cmb += '<label class="control-label" style="width:100%">'+this.GroupBoxGroupByCaption+'</label >';
            cmb += '<select class="selectpicker gpislp"  style="width:100%">';
            cmb += "<option value='xxxxxxxxxxx'>*</option>";
            this.columns.forEach((col) => {
                if (col.Groupable) {
                    if (col == (<any>this).GroupColumn)
                        cmb += "<option selected value='" + col.ID + "'>" + col.FieldName + "</option>";
                    else
                        cmb += "<option value='"+col.ID+"'>" + col.FieldName + "</option>";
                }
            });
            cmb += "</select></div></div></th></tr>";
            this.jComponent.append($("<thead>" + cmb + "</thead>"));
        }



        var foot: string = '<tfoot><tr><th>';

        if (this.PagerAlignment == V.PagerAlignment.Right) {
            foot += '<div class="grid-actionButton pull-left"/> ';
            foot += '<div class="datagrid-footer-right" style="display:none"><div class="grid-pager">';
        } else {
            foot += '<div class="grid-actionButton pull-right"/> ';
            foot += '<div class="datagrid-footer-left" style="display:none"><div class="grid-pager">';
        }


        if (this instanceof TDBGrid && this.FirstPageButtonVisible) {
            if (this.FirstPageButtonText == "" || this.FirstPageButtonText == null) {
                foot += '<button type="button" class="btn ' + pagebtnstyle + ' grid-firstpage"><i class="icon-backward"></i></button>';
            } else {
                foot += '<button type="button" class="btn ' + pagebtnstyle + ' grid-firstpage">' + this.FirstPageButtonText + '</i></button>';
            }
        }

        if (this.PrevPageButtonText == "" || this.PrevPageButtonText == null) {
            foot += '<button type="button" class="btn ' + pagebtnstyle +' grid-prevpage" style="margin-left:6px"><i class="icon-play icon-rotate-180"></i></button>';
        } else {
            foot += '<button type="button" class="btn ' + pagebtnstyle +' grid-prevpage" style="margin-left:6px">'+this.PrevPageButtonText+'</i></button>';
        }

        if (this.NextPageButtonText == "" || this.NextPageButtonText == null) {
            foot += '<button type="button" class="btn ' + pagebtnstyle +' grid-nextpage" style="margin-left:6px"><i class="icon-play"></i></button>';
        } else {
            foot += '<button type="button" class="btn ' + pagebtnstyle+' grid-nextpage" style="margin-left:6px">'+this.NextPageButtonText+'</i></button>';
        }

        if (this instanceof TDBGrid && this.LastPageButtonVisible) {
            if (this.LastPageButtonText == "" || this.LastPageButtonText == null) {
                foot += '<button type="button" class="btn ' + pagebtnstyle + ' grid-lastpage" style="margin-left:6px"><i class="icon-forward"></i></button>';
            } else {
                foot += '<button type="button" class="btn ' + pagebtnstyle + ' grid-lastpage" style="margin-left:6px">' + this.LastPageButtonText + '</i></button>';
            }
        }

        foot += '</div></th></tr></tfoot>';
        this.jComponent.append($(foot));

        var dataOptions =  {
            pageSize: this.PageSize,
            sortProperty: this.SortColumn ? this.SortColumn.ID : null,
            sortDirection: this.SortColumnOrder == V.SortColumnOrder.Ascending ? 'asc' : 'desc',
            groupProperty: (<any>this).GroupColumn ? (<any>this).GroupColumn.ID : null,
        }
        

        this.jGrid = this.jComponent.datagrid({
            dataSource: this.gridDataSource, stretchHeight: false,
            dataOptions: dataOptions
        });

        this.jComponent.css('display', 'inline-table');
        if (!this.FooterVisible) this.jComponent.find('tfoot').hide();
        if (!this.HeaderVisible) this.jComponent.find('thead').hide();;
        if (!this.PagerVisible) this.jComponent.find('.datagrid-footer-right').hide();
        this.actionButtons.forEach((btn) => {
            self.jComponent.find('.grid-actionButton').append(btn.jComponent);
        });
        super.create();
    }
}


export class TGrid extends TGridBase {
    public onGetPage: (pageInedx: number, pageSize: number, sortDirection: string, sortColumn: TDBGridColumn,
                       callback: (data: Array<any>) => void) => void;

    private _recordCount: number = 10;
    public get RecordCount(): number {
        return this._recordCount;
    }
    public set RecordCount(val: number) {
        if (val != this._recordCount) {
            this._recordCount = Math.floor(val);
            if (this._recordCount < 0) this._recordCount = 0;
            this.drawDelayed(true);
        }
    }

    public create() {
        this.gridDataSource = new TGridDataSource(this);
        super.create();
    }
}



export class TGridColumnCollection<T> extends VXO.TCollection<TDBGridColumn> {
    private owner: TGridBase;

    FindItemByFieldName(value: string): TDBGridColumn {
        var rc: TDBGridColumn = null;
        this.forEach((item: TDBGridColumn) => {
            if (item.FieldName.toUpperCase() == value.toUpperCase()) {
                rc = item;
                return false;
            }
            return true;
        });
        return rc;
    }

    constructor(aOwner: TGridBase) {
        super();
        this.owner = aOwner;
    }

    add(item: TDBGridColumn): boolean {
        var rc = super.add(item);
        if (!this.locked) this.owner.drawDelayed(true);
        return rc;
    }

    public refresh() {
        if (!this.locked) this.owner.drawDelayed(false);
    }

    public EndUpdate() {
        super.EndUpdate();
        this.owner.drawDelayed(true);
    }

}


export class TDBGrid extends TGridBase {
    private _dataset: VXD.TDataset;

    public get Dataset(): VXD.TDataset {
        return this._dataset;
    }


    private _groupcolumn: TDBGridColumn = null;
    public get GroupColumn(): TDBGridColumn {
        return this._groupcolumn;
    }
    public set GroupColumn(val: TDBGridColumn) {
        if (val != this._groupcolumn) {
            this._groupcolumn = val;
            this.drawDelayed(true);
        }
    }


    public set Dataset(val: VXD.TDataset) {
        if (val != this._dataset) {
            if (this._dataset) {
                (<any>this._dataset).removeEventListener(VXD.TDataset.EVENT_DATA_CHANGED, this);
                (<any>this._dataset).removeEventListener(VXD.TDataset.EVENT_STATE_CHANGED, this);
                (<any>this._dataset).removeEventListener(VXD.TDataset.EVENT_SELECTION_CHANGED, this);

            }
            this._dataset = val;
            if (this._dataset) {
                (<any>this._dataset).registerEventListener(VXD.TDataset.EVENT_DATA_CHANGED, this, () => { this.refreshRecord(); });
                (<any>this._dataset).registerEventListener(VXD.TDataset.EVENT_STATE_CHANGED, this, () => { this.draw(false); });
                (<any>this._dataset).registerEventListener(VXD.TDataset.EVENT_SELECTION_CHANGED, this, () => { this.selectionChanged(); });
            }

        }
    }

    public createAllColumns(beautifyHeader: boolean) {
        if (!this.Dataset || this.Dataset.RecordCount == 0) return;
        for (var key in this.Dataset.recordset[0]) {
            if (key.toUpperCase() == "___RECORDID___") continue;
            if (key.toUpperCase() == "___CHECKED___") continue;
            var header = key;
            if (beautifyHeader) header = this.butifyStr(key);
            this.createColumn(key, header);
        }
    }

    private butifyStr(str: string) {
        if (!str) return "";

        str = str.replace('_', ' ').toLowerCase();
        str = str[0].toUpperCase() + str.substr(1, 1000);
        return str;
    }

    public create() {
        this.gridDataSource = new TDBGridDataSource(this);

        super.create();
    }

    private selectionChanged() {
        if (!this.Dataset) return;
        if (!this.Dataset.Active) return;
        if (this.Dataset.Recno == -1) return;
        if ((<any>this).selectedRecordId != this.Dataset.recordset[this.Dataset.Recno].___RECORDID___) {
            (<any>this).selectedRecordId = this.Dataset.recordset[this.Dataset.Recno].___RECORDID___;
            this.jComponent.datagrid("renderData")
        }
    }


    private refreshRecord() {
        this.jComponent.datagrid("renderData")
    }


    public draw(reCreate: boolean) {
        if (!this.parentInitialized()) return;
        super.draw(reCreate);
        if (this.Dataset != null) {
            (<any>this).selectedRecordId = this.Dataset.getRecordIndex();
        }

        (<any>this.jComponent).datagrid("reload", this.CurrentPage);
        //(<any>this).selectedRecordId = -1;
    }
}

xport class TDBGridColumn extends VXO.TCollectionItem {
    public grid: TGridBase;
    public onClicked: () => void;
    public onGetValue: (record: any) => any;
    public onGetCellClass: (record: any) => string;
    public onGetIcon: (record: any) => V.Icon;
    public onGetTooltip: (record: any) => string;
    public onGetImageURL: (record: any) => string;

    private _rtl: boolean = false;
    public get Rtl(): boolean {
        return this._rtl;
    }
    public set Rtl(val: boolean) {
        if (val != this._rtl) {
            this._rtl = val;
            this.grid.drawDelayed(true);
        }
    }


    private _dateformat: string = "";
    public get DateFormat(): string {
        return this._dateformat;
    }
    public set DateFormat(val: string) {
        if (val != this._fieldname) {
            this._dateformat = val;
            this.grid.drawDelayed(true);
        }
    }

    private getTextWidth(str: string, wrap: boolean): number {
        var f = '12px arial';
        var o = $('<div>' + str + '</div>')
            .css({ 'position': 'absolute', 'float': 'left', 'visibility': 'hidden', 'font': f })
            .appendTo($('body'));
        if (!wrap) o.css('white-space', 'nowrap');
        var rc: number = o.width();
        o.remove();
        return rc;
    }

    private _currency: boolean = false;
    public get Currency(): boolean {
        return this._currency;
    }
    public set Currency(val: boolean) {
        if (val != this._currency) {
            this._currency = val;
            this.grid.drawDelayed(true);
        }
    }


    private _width: number = -1;
    public get Width(): number {
        return this._width;
    }
    public set Width(val: number) {
        if (val != this._width) {
            this._width = val;
            this.grid.drawDelayed(true);
        }
    }


    private _fieldname: string = null;
    public get FieldName(): string {
        return this._fieldname;
    }
    public set FieldName(val: string) {
        if (val == null || val.toUpperCase() != this._fieldname) {
            if (val == null) this._fieldname = '';
            else this._fieldname = val.toUpperCase();
            this.grid.drawDelayed(true);
        }
    }

    private _textaligment: V.TextAlignment = V.TextAlignment.Left;
    public get TextAlgnment(): V.TextAlignment {
        return this._textaligment;
    }
    public set TextAlgnment(val: V.TextAlignment) {
        if (val != this._textaligment) {
            this._textaligment = val;
            this.grid.drawDelayed(true);
        }
    }

    private _headeraligment: V.HeaderTextAlignment = V.HeaderTextAlignment.Left;
    public get HeaderTextAlignment(): V.HeaderTextAlignment {
        return this._headeraligment;
    }
    public set HeaderTextAlignment(val: V.HeaderTextAlignment) {
        if (val != this._headeraligment) {
            this._headeraligment = val;
            this.grid.drawDelayed(true);
        }
    }


    private _header: string = "";
    public get Header(): string {
        return this._header;
    }
    public set Header(val: string) {
        if (val != this._header) {
            this._header = val;
            this.grid.drawDelayed(true);
        }
    }

    private _sortable: boolean = false;
    public get Sortable(): boolean {
        return this._sortable;
    }
    public set Sortable(val: boolean) {
        this._sortable = val;
    }

    private _groupable: boolean = false;
    public get Groupable(): boolean {
        return this._groupable;
    }
    public set Groupable(val: boolean) {
        this._groupable = val;
    }

    public formatValue(value: any) {
        if (value == null) return "";

        if (value.getMonth) {
            if (this.DateFormat != "" && this.DateFormat != null) return V.Application.formatDateTime(value, this.DateFormat);
            if (V.Application.DateFormat != "" && V.Application.DateFormat != null) return V.Application.formatDateTime(value, V.Application.DateFormat);
            return value;
        }
        else if (!isNaN(parseFloat(value)) && isFinite(value)) { //number
            if (this.Currency) {
                return V.Application.FormatCurrency(value);
            } {return value }
        } else return value;
    }
}

export class TBaseGridDataSource {
    public _data = new Array();
    public grid: TGridBase;

    refreshSelection(_grid: TGridBase) {
        _grid.jComponent.find('tr').removeClass('info success error warning Default');
        this._data.forEach((item) => {
            var recid: string = item.___RECORDID___;
            var color: string;
            if (recid == (<any>_grid).selectedRecordId && _grid.ShowSelectedRecord) color = V.GridRowStyle[_grid.SelectedRecordStyle]
            else if (!item.___CLASSS___) return;
            if (!color) color = V.GridRowStyle[item.___CLASSS___];

            _grid.jComponent.find('tr').filter('*[data-record="' + recid + '"]').addClass(color.toLowerCase());
        });
    }

    bindColumnClickEvent(_grid: TGridBase): void {
        var self = this;
        //bind the clicked eventes
        _grid.jComponent.find("." + _grid.ID + "-row").click(function (item) {
            var colName = (<any>item.target).className.split(' ')[0];

            var selectedCol: V.TDBGridColumn;
            _grid.columns.forEach((item) => { if (item.ID == colName) selectedCol = item; });

            var recId: number = parseInt($(this).attr('data-record'));
            (<any>_grid).selectedRecordId = recId;
            if ((<TDBGrid>_grid).Dataset) (<any>_grid).Dataset.Recno = (<any>_grid).Dataset.getRecordIndexRecNo(recId);
            if (_grid.ShowSelectedRecord) self.refreshSelection(_grid);
            if (_grid.onRowClicked && (<TDBGrid>_grid).Dataset) _grid.onRowClicked((<TDBGrid>_grid).Dataset.getCurrentRecord());
        });

        _grid.columns.forEach((columnItem: TDBGridColumn) => {
            if (columnItem.onClicked != null) {
                columnItem.grid.jComponent.find("." + columnItem.ID).click(function (item) {
                    if (columnItem.onClicked) {
                        var recId: number = parseInt($(this).attr('data-record'));
                        (<TDBGrid>columnItem.grid).Dataset.Recno = (<TDBGrid>_grid).Dataset.getRecordIndexRecNo(recId);;
                        (<any>_grid).selectedRecordId = (<any>_grid).Dataset.getRecordIndex()
                        columnItem.onClicked();
                    }
                });
            }
            return true;
        });
    }

    renderdata(_data: Array<any>, _grid: TGridBase): Array<any> {
        var mappedData: Array<any> = new Array<any>();

        $.each(_data, function (rowIndex, item) {
            mappedData.push({ ___CHECKED___: _data[rowIndex].___CHECKED___, ___RECORDID___: _data[rowIndex].___RECORDID___});

            if (_grid.onGetRowStyle != null) {
                var colorClass = _grid.onGetRowStyle(item);
                if (colorClass != null && colorClass != V.GridRowStyle.Default) {
                    _data[rowIndex]["___CLASSS___"] = colorClass;
                }
            }
        });
        _grid.columns.forEach((columnItem: V.TDBGridColumn) => {
            var a = columnItem;
            var group: boolean = false;
            if ((<any>_grid).GroupColumn == columnItem) {
                group = true;
            } 
            var prevGroup = null;
            var emptygroup: boolean = false;
            var firstemptygroup: boolean = false;


            $.each(_data, function (rowIndex, item) {
                var StringCellVal;

                var icon: V.Icon = null;
                if (columnItem.onGetValue != null) {
                    StringCellVal = columnItem.formatValue(columnItem.onGetValue(item));
                } else StringCellVal = columnItem.formatValue(_data[rowIndex][columnItem.FieldName]);

                if (rowIndex > 0 && group && StringCellVal == prevGroup) {
                    StringCellVal = "";
                    firstemptygroup = (!emptygroup);
                    emptygroup = true;
                } else {
                    prevGroup = StringCellVal;
                    emptygroup = false;
                }

                var cellClass = columnItem.ID;
                var imageflag = "";
                var tooltopflag = "";
                var rtl = "";
                if (columnItem.onGetIcon != null) {
                    var icon = columnItem.onGetIcon(item);
                    if (icon) { cellClass = cellClass + " " + V.iconEnumToBootstrapStyle(<any>icon) };
                } else if (columnItem.onGetImageURL != null) {
                    imageflag = columnItem.onGetImageURL(item);
                    if (imageflag) imageflag = "<img src='" + imageflag + "' ></img>"
                }
                if (columnItem.onGetCellClass) {
                    cellClass = cellClass + " " + columnItem.onGetCellClass(item);
                }

                if (columnItem.Rtl == true) {
                    rtl = "dir='rtl'";
                }

                if (columnItem.onGetTooltip != null) {
                    var tooltip = columnItem.onGetTooltip(item);
                    if (tooltip != null)
                        tooltopflag = 'data-toggle="tooltip" title="' + tooltip + '"';
                }

                if (emptygroup) {
                    var cnt = "";
                    var emclass = "__emptygroupclass__";
                    if (firstemptygroup && (<any>_grid).Dataset && (<any>_grid).Dataset.tempGroupset) {
                        var num: number = (<any>_grid).Dataset.countTempGroupset(prevGroup);
                        if (num > 2) {
                            cnt = "Count=" + num;
                            var emclass = "__emptygroupclass__ __emptygroupclassfirst__";
                        }
                    }

                    mappedData[rowIndex][columnItem.ID] =
                        "<small data-record='" + _data[rowIndex]["___RECORDID___"]+"'" + rtl +
                        " class='"+emclass+" muted " + cellClass + "' " + tooltopflag + " style='white-space:nowrap;'>" + cnt+"</small>";;
                } else if (columnItem.onClicked != null) {
                    var cellStr = "<a style='cursor: pointer;white-space:nowrap' data-record='" + _data[rowIndex]["___RECORDID___"] +"'"+ rtl +" class='" + cellClass + "'" + tooltopflag + ">" + imageflag + StringCellVal + "</a>";
                    mappedData[rowIndex][columnItem.ID] = cellStr;
                } else {
                    mappedData[rowIndex][columnItem.ID] = "<div data-record='" + _data[rowIndex]["___RECORDID___"] + "' " + rtl +" class='" + cellClass + "'" + tooltopflag + " style='white-space:nowrap'>" + imageflag + StringCellVal + "</div>";;
                }
            })
            return true;
        });
        return mappedData;
    }

    columns() {
        var _columns = new Array();
        if (this.grid.ShowSelectCheckbox) {
            _columns.push({
                property: "___CHECKED___", label: this.grid.CheckboxColumnHeader, sortable: false, width: 18, align: "c"
            });
        }

        if ((<any>this.grid).GroupColumn) {
            var item: TDBGridColumn = (<any>this.grid).GroupColumn;
            var label: string = item.Header;
            if (label == null) label = item.FieldName;
            var align: string;
            var halign: string;
            if (item.TextAlgnment == V.TextAlignment.Left) align = "l";
            else if (item.TextAlgnment == V.TextAlignment.Right) align = "r";
            else if (item.TextAlgnment == V.TextAlignment.Center) align = "c";

            if (item.HeaderTextAlignment == V.HeaderTextAlignment.Left) halign = "l";
            else if (item.HeaderTextAlignment == V.HeaderTextAlignment.Right) halign = "r";


            _columns.push({
                property: item.ID, label: label, sortable: false, width: item.Width,
                align: align,
                halign: halign,
                grouped:true
            });
        }

        this.grid.columns.forEach((item: TDBGridColumn) => {
            if (item != (<any>this.grid).GroupColumn) {
                var label: string = item.Header;
                if (label == null) label = item.FieldName;
                var align: string;
                var halign: string;
                if (item.TextAlgnment == V.TextAlignment.Left) align = "l";
                else if (item.TextAlgnment == V.TextAlignment.Right) align = "r";
                else if (item.TextAlgnment == V.TextAlignment.Center) align = "c";

                if (item.HeaderTextAlignment == V.HeaderTextAlignment.Left) halign = "l";
                else if (item.HeaderTextAlignment == V.HeaderTextAlignment.Right) halign = "r";


                _columns.push({
                    property: item.ID, label: label, sortable: item.Sortable, width: item.Width,
                    align: align,
                    halign: halign
                });
            }
            return true;
        });
        return _columns;
    }

}

class TDBGridDataSource extends TBaseGridDataSource {
    constructor(grid: TDBGrid) {
        super();
        this.grid = grid;
    }

    data(options, callback) {
        var self = this;
        this._data = new Array();
        if ((<TDBGrid>self.grid).Dataset == null || !(<TDBGrid>self.grid).Dataset.Active) {
            callback({ data: this._data, count: self.grid.PageSize, page: 1, pages: 1 });
            return;
        }

        var columnname = "";
        var groupname = "";
        if (options.sortProperty) {
            columnname = self.grid.columns.FindItemByID(options.sortProperty).FieldName;
        }
        if (options.groupProperty) {
            groupname = self.grid.columns.FindItemByID(options.groupProperty).FieldName;
        }

        this._data = (<TDBGrid>self.grid).Dataset.getRecords(options.pageIndex * options.pageSize,
            (options.pageIndex + 1) * options.pageSize - 1,
            options.sortDirection, columnname, groupname);

        var mappedData: any[] = this.renderdata(this._data, self.grid);
        var pages: number = ((<TDBGrid>self.grid).Dataset.RecordCount - 1) / self.grid.PageSize;
        pages = Math.floor(pages) + 1;

        //draw the html
        callback({ data: mappedData, count: self.grid.PageSize, page: options.pageIndex + 1, pages: pages });

        this.refreshSelection(self.grid);
        this.bindColumnClickEvent(self.grid);


        //setup the checkbox
        self.grid.jComponent.find(".___CHECKED___").change(function (item) {
            if ((<TDBGrid>self.grid).Dataset != null) {
                if ($(this).attr('data-record')) {
                    var recNum: number = (<TDBGrid>self.grid).Dataset.getRecordIndexRecNo(parseInt($(this).attr('data-record')));

                    (<TDBGrid>self.grid).Dataset.recordset[recNum]['___CHECKED___'] = $(this).is(':checked');
                    if (self.grid.onChecboxClicked) self.grid.onChecboxClicked(recNum);
                }
            }
        });

    }
}


class TGridDataSource extends TBaseGridDataSource {
    constructor(grid: TGrid) {
        super();
        this.grid = grid;
    }

    data(options, callback) {
        var self = this;
        if ((<TGrid> self.grid).onGetPage) {
            var column: TDBGridColumn;
            if (options.sortProperty) column = self.grid.columns.FindItemByID(options.sortProperty);
            (<TGrid> self.grid).onGetPage(options.pageIndex, options.pageSize, options.sortDirection, column, (data) => {
                self._data = data;

                //upper case properties (ci for field names) and setup the values
                for (var i = 0; i < self._data.length; i++) {
                    var a = self._data[i];
                    a.___RECORDID___ = options.pageIndex * options.pageSize + i;
                    if (!a.___CHECKED___) a.___CHECKED___ = false;
                    for (var key in a) {
                        var temp;
                        if (a.hasOwnProperty(key)) {
                            temp = a[key];
                            delete a[key];
                            a[key.toUpperCase()] = temp;
                        }
                    }
                    self._data[i] = a;
                }

                var mappedData: any[] = this.renderdata(self._data, self.grid);
                var pages: number = ((<TGrid> self.grid).RecordCount - 1) / self.grid.PageSize;
                pages = Math.floor(pages) + 1;

                //draw the html
                callback({ data: mappedData, count: self.grid.PageSize, page: options.pageIndex + 1, pages: pages });

                self.refreshSelection(self.grid);
                self.bindColumnClickEvent(self.grid);

                self.grid.jComponent.find(".___CHECKED___").change(function (item) {
                    if ($(this).attr('data-record')) {
                        var recNum: number = parseInt($(this).attr('data-record'));
                        self._data.forEach((item) => {
                            if (item.___RECORDID___ == recNum) {
                                item['___CHECKED___'] = $(this).is(':checked');
                                if (self.grid.onChecboxClicked) self.grid.onChecboxClicked(recNum);
                            }
                        })
                    }
                });

            })
        } else {
            callback({ data: [], count: self.grid.PageSize, page: options.pageIndex + 1, pages: null });  //nati k
        }
    }

}


var SORTED_HEADER_OFFSET = 22;
var Datagrid = function (element, options) {
    this.$element = $(element);
    this.$thead = this.$element.find('thead');
    this.$groupby = this.$element.find('.gpislp');
    this.$tfoot = this.$element.find('tfoot');
    this.$footer = this.$element.find('tfoot th');
    this.$footerchildren = this.$footer.children().show().css('visibility', 'hidden');
    this.$searchcontrol = this.$element.find('.datagrid-search');
    this.$filtercontrol = this.$element.find('.filter');
    this.$pagesize = this.$element.find('.grid-pagesize');
    this.$pageinput = this.$element.find('.grid-pager input');
    this.$pagedropdown = this.$element.find('.grid-pager .dropdown-menu');
    this.$firstpagebtn = this.$element.find('.grid-firstpage');
    this.$lastpagebtn = this.$element.find('.grid-lastpage');
    this.$prevpagebtn = this.$element.find('.grid-prevpage');
    this.$nextpagebtn = this.$element.find('.grid-nextpage');
    this.$pageslabel = this.$element.find('.grid-pages');
    this.$countlabel = this.$element.find('.grid-count');
    this.$startlabel = this.$element.find('.grid-start');
    this.$endlabel = this.$element.find('.grid-end');

    this.$tbody = $('<tbody>').insertAfter(this.$thead);
    this.$colheader = $('<tr>').appendTo(this.$thead);

    this.options = $.extend(true, {}, $.fn.datagrid.defaults, options);

    this.$groupby.selectpicker();
    this.$groupby.on('change', $.proxy(this.groupChanged, this));

    //nati k - i want to control the page size
    // Shim until v3 -- account for FuelUX select or native select for page size:
    //if (this.$pagesize.hasClass('select')) {
    //    this.options.dataOptions.pageSize = parseInt(this.$pagesize.select('selectedItem').value, 10);
    //} else {
    //    this.options.dataOptions.pageSize = parseInt(this.$pagesize.val(), 10);
    //}

    // Shim until v3 -- account for older search class:
    if (this.$searchcontrol.length <= 0) {
        this.$searchcontrol = this.$element.find('.search');
    }

    this.columns = this.options.dataSource.columns();

    this.$nextpagebtn.on('click', $.proxy(this.next, this));
    this.$prevpagebtn.on('click', $.proxy(this.previous, this));
    this.$firstpagebtn.on('click', $.proxy(this.first, this));
    this.$lastpagebtn.on('click', $.proxy(this.last, this));
    this.$searchcontrol.on('searched cleared', $.proxy(this.searchChanged, this));
    this.$filtercontrol.on('changed', $.proxy(this.filterChanged, this));
    this.$colheader.on('click', 'th', $.proxy(this.headerClicked, this));

    if (this.$pagesize.hasClass('select')) {
        this.$pagesize.on('changed', $.proxy(this.pagesizeChanged, this));
    } else {
        this.$pagesize.on('change', $.proxy(this.pagesizeChanged, this));
    }

    this.$pageinput.on('change', $.proxy(this.pageChanged, this));

    this.renderColumns();

    if (this.options.stretchHeight) this.initStretchHeight();

    this.renderData();
};

Datagrid.prototype = {

    constructor: Datagrid,

    renderColumns: function () {
        var self = this;

        this.$footer.attr('colspan', this.columns.length);

        var colHTML = '';

        $.each(this.columns, function (index, column) {
            colHTML += '<th data-property="' + column.property + '"';
            if (column.sortable) colHTML += ' class="sortable"';
            if (column.halign=="r") colHTML += ' style="text-align:right" ';
            if (column.width > 0) colHTML += ' width=' + column.width + "px";
            colHTML += '>' + column.label + '</th>';
        });

        self.$colheader.append(colHTML);
    },

    updateColumns: function ($target, direction) {
        this._updateColumns(this.$colheader, $target, direction);

        if (this.$sizingHeader) {
            this._updateColumns(this.$sizingHeader, this.$sizingHeader.find('th').eq($target.index()), direction);
        }
    },

    _updateColumns: function ($header, $target, direction) {
        var className = (direction === 'asc') ? 'icon-chevron-up' : 'icon-chevron-down';
        $header.find('i.datagrid-sort').remove();
        $header.find('th').removeClass('sorted');
        $('<i>').addClass(className + ' datagrid-sort').appendTo($target);
        $target.addClass('sorted');
    },

    updatePageDropdown: function (data) {
        var pageHTML = '';

        for (var i = 1; i <= data.pages; i++) {
            pageHTML += '<li><a>' + i + '</a></li>';
        }

        this.$pagedropdown.html(pageHTML);
    },

    updatePageButtons: function (data) {
        if (data.page === 1 || data.pages == 0) {
            this.$prevpagebtn.attr('disabled', 'disabled');
            this.$firstpagebtn.attr('disabled', 'disabled');
        } else {
            this.$prevpagebtn.removeAttr('disabled');
            this.$firstpagebtn.removeAttr('disabled');
        }

        if (data.page >= data.pages || data.pages == 0) {
            this.$nextpagebtn.attr('disabled', 'disabled');
            this.$lastpagebtn.attr('disabled', 'disabled');
        } else {
            this.$nextpagebtn.removeAttr('disabled');
            this.$lastpagebtn.removeAttr('disabled');
        }
    },

    renderData: function () {
        var self = this;
        var _grid: TDBGrid = this.options.dataSource.grid;

        this.$tbody.html(this.placeholderRowHTML(this.options.loadingHTML));

        var trg: JQuery = this.$thead.find("th[data-property='" + this.options.dataOptions.sortProperty + "']");
        if (trg.length > 0) this.updateColumns(trg, this.options.dataOptions.sortDirection);
        this.options.dataSource.data(this.options.dataOptions, function (data) {
            var itemdesc = (data.count === 1) ? self.options.itemText : self.options.itemsText;
            var rowHTML = '';

            self.$footerchildren.css('visibility', function () {
                return (data.count > 0) ? 'visible' : 'hidden';
            });

            self.pagecount = data.pages;
            self.$pageinput.val(data.page);
            self.$pageslabel.text(data.pages);
            self.$countlabel.text(data.count + ' ' + itemdesc);
            self.$startlabel.text(data.start);
            self.$endlabel.text(data.end);

            self.updatePageDropdown(data);
            self.updatePageButtons(data);


            //build up the current grid
            var rowCnt = self.options.dataOptions.pageSize;
            $.each(data.data, function (index, row) {
                var LineHTML: string = "";
                //checked
                $.each(self.columns, function (index, column) {
                    var cls = _grid.ShowVertLines || index == 0 ? "" : "border-left :  none;";
                    if (column.property == '___CHECKED___') {
                        cls += _grid.ShowHorzLines ? "" : "border-top: none;";
                        cls += "overflow:hidden;";
                        if (column.width > 0) cls += ' width:' + column.width + "px;";
                        cls += "text-align:center;";
                        LineHTML += '<td style="' + cls + '">  <input type="checkbox" class="___CHECKED___" ';
                        if (row.___CHECKED___) { LineHTML += 'checked'; }
                        LineHTML += " data-record=" + row.___RECORDID___ + '"/></td>';
                    } else {
                        var showtop: boolean = _grid.ShowHorzLines;
                        if (showtop && column.grouped && (<string>row[column.property]).indexOf('__emptygroupclass__') > 0) showtop = false;
                        if ((<string>row[column.property]).indexOf('__emptygroupclassfirst') > 0) cls +="padding-top: 0px;"

                        cls += showtop ? "" : "border-top: none;";
                        cls += "overflow:hidden;";
                        if (column.align == 'l') cls += "text-align: left;";
                        else if (column.align == 'r') cls += "text-align:right;";
                        else if (column.align == 'c') cls += "text-align:center;";
                        LineHTML += '<td style="' + cls;
                        if (column.width > 0) LineHTML += ' width:' + column.width + "px;";
                        LineHTML += '">' + row[column.property] + '</td>';
                    }
                });
                //color class
                var rowClass = "";
                if (_grid) rowClass = _grid.ID + "-row";
                //if (row.___CLASSS___ != null)
                //    rowHTML += '<tr data-record=' + row.___RECORDID___ + ' class="'+rowClass +" "+ V.GridRowStyle[row.___CLASSS___].toLowerCase() + '">' + LineHTML + '</tr>';
                //else
                rowHTML += '<tr data-record=' + row.___RECORDID___ + ' class="' + rowClass + '">' + LineHTML + '</tr>';
                rowCnt--;
            });

            //add emptry rows - nati k
            var row = 0;
            while (rowCnt > 0) {
                rowHTML += '<tr>';
                $.each(self.columns, function (index, column) {
                    var style: string = "border-right:0px;";
                    if (row > 0) style = "border-top-color:transparent;";
                    style += _grid.ShowVertLines || index == 0 ? "" : "border-left :  none;";
                    rowHTML += '<td style="' + style + '">&nbsp;</td>';
                });
                rowHTML += '</tr>';
                row++;
                rowCnt--;

            }

            if (!rowHTML) rowHTML = self.placeholderRowHTML('0 ' + self.options.itemsText);

            self.$tbody.html(rowHTML);
            self.stretchHeight();

            self.$element.trigger('loaded');
        });

    },

    placeholderRowHTML: function (content) {
        return '<tr><td style="text-align:center;padding:20px;border-bottom:none;" colspan="' +
            this.columns.length + '">' + content + '</td></tr>';
    },

    headerClicked: function (e) {
        var $target = $(e.target);
        if (!$target.hasClass('sortable')) return;

        var direction = this.options.dataOptions.sortDirection;
        var sort = this.options.dataOptions.sortProperty;
        var property = $target.data('property');

        if (sort === property) {
            this.options.dataOptions.sortDirection = (direction === 'asc') ? 'desc' : 'asc';
        } else {
            this.options.dataOptions.sortDirection = 'asc';
            this.options.dataOptions.sortProperty = property;
        }

        var _grid: TDBGrid = this.options.dataSource.grid;
        if (_grid) {
            if (this.options.dataOptions.sortDirection == "asc") _grid.SortColumnOrder = V.SortColumnOrder.Ascending;
            else _grid.SortColumnOrder = V.SortColumnOrder.Descending;
            _grid.columns.forEach((column) => {
                if (column.ID == this.options.dataOptions.sortProperty) {
                    _grid.SortColumn = column;
                }
            })

        }

        this.options.dataOptions.pageIndex = 0;
        this.updateColumns($target, this.options.dataOptions.sortDirection);
        this.renderData();
    },

    pagesizeChanged: function (e, pageSize) {
        if (pageSize) {
            this.options.dataOptions.pageSize = parseInt(pageSize.value, 10);
        } else {
            this.options.dataOptions.pageSize = parseInt($(e.target).val(), 10);
        }

        this.options.dataOptions.pageIndex = 0;
        this.renderData();
    },

    pageChanged: function (e) {
        var pageRequested = parseInt($(e.target).val(), 10);
        pageRequested = (isNaN(pageRequested)) ? 1 : pageRequested;
        var maxPages = this.$pageslabel.text();

        this.options.dataOptions.pageIndex =
        (pageRequested > maxPages) ? maxPages - 1 : pageRequested - 1;

        this.renderData();
    },

    groupChanged: function (e) {
        var val = this.$groupby.selectpicker("val").toString();
        console.log(val);
        var _grid: TGridBase = this.options.dataSource.grid;
        if (!_grid) return;
        (<any>_grid).GroupColumn = _grid.columns.FindItemByID(val);
        this.renderData();
    },


    searchChanged: function (e, search) {
        this.options.dataOptions.search = search;
        this.options.dataOptions.pageIndex = 0;
        this.renderData();
    },

    filterChanged: function (e, filter) {
        this.options.dataOptions.filter = filter;
        this.options.dataOptions.pageIndex = 0;
        this.renderData();
    },

    first: function () {
        this.options.dataOptions.pageIndex = 0;
        this.renderData();

        var _grid: TGridBase = this.options.dataSource.grid;
        (<any>_grid)._currentPage = this.options.dataOptions.pageIndex;
        if (_grid && _grid.onPriorPageClicked) _grid.onPriorPageClicked();
    },

    last: function () {
        this.options.dataOptions.pageIndex = this.pagecount-1;
        this.renderData();

        var _grid: TGridBase = this.options.dataSource.grid;
        (<any>_grid)._currentPage = this.options.dataOptions.pageIndex;
        if (_grid && _grid.onPriorPageClicked) _grid.onPriorPageClicked();
    },



    previous: function () {
        this.options.dataOptions.pageIndex--;
        this.renderData();

        var _grid: TGridBase = this.options.dataSource.grid;
        (<any>_grid)._currentPage = this.options.dataOptions.pageIndex;
        if (_grid && _grid.onPriorPageClicked) _grid.onPriorPageClicked();
    },

    next: function () {
        this.options.dataOptions.pageIndex++;
        this.renderData();

        var _grid: TGridBase = this.options.dataSource.grid;
        (<any>_grid)._currentPage = this.options.dataOptions.pageIndex;
        if (_grid && _grid.onNextPageClicked) _grid.onNextPageClicked();

    },

    reload: function (pageIndex) {
        this.options.dataOptions.pageIndex = pageIndex;
        this.renderData();
    },

    initStretchHeight: function () {
        this.$gridContainer = this.$element.parent();

        this.$element.wrap('<div class="datagrid-stretch-wrapper">');
        this.$stretchWrapper = this.$element.parent();

        this.$headerTable = $('<table>').attr('class', this.$element.attr('class'));
        this.$footerTable = this.$headerTable.clone();

        this.$headerTable.prependTo(this.$gridContainer).addClass('datagrid-stretch-header');
        this.$thead.detach().appendTo(this.$headerTable);

        this.$sizingHeader = this.$thead.clone();
        this.$sizingHeader.find('tr:first').remove();

        this.$footerTable.appendTo(this.$gridContainer).addClass('datagrid-stretch-footer');
        this.$tfoot.detach().appendTo(this.$footerTable);
    },

    stretchHeight: function () {
        if (!this.$gridContainer) return;

        this.setColumnWidths();

        var targetHeight = this.$gridContainer.height();
        var headerHeight = this.$headerTable.outerHeight();
        var footerHeight = this.$footerTable.outerHeight();
        var overhead = headerHeight + footerHeight;

        this.$stretchWrapper.height(targetHeight - overhead);
    },

    setColumnWidths: function () {
        if (!this.$sizingHeader) return;

        this.$element.prepend(this.$sizingHeader);

        var $sizingCells = this.$sizingHeader.find('th');
        var columnCount = $sizingCells.length;

        function matchSizingCellWidth(i, el) {
            if (i === columnCount - 1) return;

            var $el = $(el);
            var $sourceCell = $sizingCells.eq(i);
            var width = $sourceCell.width();

            // TD needs extra width to match sorted column header
            if ($sourceCell.hasClass('sorted') && $el.prop('tagName') === 'TD') width = width + SORTED_HEADER_OFFSET;

            $el.width(width);
        }

        this.$colheader.find('th').each(matchSizingCellWidth);
        this.$tbody.find('tr:first > td').each(matchSizingCellWidth);

        this.$sizingHeader.detach();
    }
};


// DATAGRID PLUGIN DEFINITION

$.fn.datagrid = function (option, param) {
    return this.each(function () {
        var $this = $(this);
        var data = $this.data('datagrid');
        var options = typeof option === 'object' && option;

        if (!data) $this.data('datagrid', (data = new Datagrid(this, options)));
        if (typeof option === 'string') data[option](param);
    });
};

$.fn.datagrid.defaults = {
    dataOptions: { pageIndex: 0, pageSize: 10 },
    loadingHTML: '<div class="progress progress-striped active" style="width:50%;margin:auto;"><div class="bar" style="width:100%;"></div></div>',
    itemsText: 'items',
    itemText: 'item'
};

$.fn.datagrid.Constructor = Datagrid;

