/// <reference path="Scripts/jquery.d.ts" />
import V = require("VCL/VCL");
import VXC = require("VCL/VXComponent");
import VXD = require("VCL/VXDataset");
import VXO = require("VCL/VXObject");
import VXU = require("VCL/VXUtils");

export class VXDBGrid extends VXC.VXComponent {
    public needrecreate: boolean = false;
    private _dataset: VXD.VXDataset;
    private selectedRecordId: number;
    public onRowClicked: () => void;

    public onGetRowStyle: (record: any) => V.GridRowStyle;

    constructor(aOwner: VXC.VXComponent, renderTo?: string) {
        super(aOwner, renderTo);
        (<any>this)._fittowidth = true;
    }

    private _showselectedrecord: boolean = true;
    /*
    * Adds zebra-striping to any tdbgridt control.
    */
    public get ShowSelectedRecord(): boolean {
        return this._showselectedrecord;
    }
    public set ShowSelectedRecord(val: boolean) {
        if (val != this._striped) {
            this._showselectedrecord = val;
            this.needrecreate = true;
        }
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
            this.needrecreate = true;
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
            this.needrecreate = true;
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
            this.needrecreate = true;
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
            this.needrecreate = true;
        }
    }


    private _showselectcheckbox: boolean = false;
    public get ShowSelectCheckbox(): boolean {
        return this._showselectcheckbox;
    }
    public set ShowSelectCheckbox(val: boolean) {
        if (val != this._showselectcheckbox) {
            this._showselectcheckbox = val;
            this.needrecreate = true;
        }
    }

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
                (<any>this._dataset).registerEventListener(VXD.VXDataset.EVENT_DATA_CHANGED, this, () => { this.refreshRecord(); });
                (<any>this._dataset).registerEventListener(VXD.VXDataset.EVENT_STATE_CHANGED, this, () => { this.draw(false); });
            }
        
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
            this.draw(true);
        }
    }


    public create() {
        this.jComponent.empty(); //clear all subcomponents
        var dataSource = new VXDBGridDataSource(this);
        this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'table', this.FitToWidth, this.FitToHeight);
        this.jComponent.addClass("table datagrid");
        this.jComponent.css('table-layout', 'fixed').css('cursor', 'pointer');
        if (this.Condensed) this.jComponent.addClass("table-condensed");
        if (this.Striped) this.jComponent.addClass("table-striped");
        if (this.Bordered) this.jComponent.addClass("table-bordered ");



        this.jComponent.append($("<thead></thead>"));
        this.jComponent.append($('<tfoot><tr><th>' +
            '<div class="datagrid-footer-right" style="display:none;>' +
            '<div class="grid-pager"><button type="button" class="btn grid-prevpage"><i class="icon-chevron-left"></i></button>' +
            '<button type="button" class="btn grid-nextpage" style="margin-left:10px"><i class="icon-chevron-right"></i></button>' +
            '</div></th></tr></tfoot>'));
        this.jComponent.datagrid({
            dataSource: dataSource, stretchHeight: false,
            dataOptions: { pageSize: this.PageSize }
        })
        this.jComponent.css('display', 'inline-table');
        super.create();
    }

    private refreshRecord() {
        var self = this;
        if (this.Dataset == null) return;
        if (!this.Dataset.Active) return;
        this.columns.forEach((columnItem: VXDBGridColumn) => {
            var StringCellVal;
            if (columnItem.onGetValue != null) {
                StringCellVal = columnItem.formatValue(columnItem.onGetValue(self.Dataset.getCurrentRecord()));
            } else StringCellVal = columnItem.formatValue(self.Dataset.getFieldValue(columnItem.FieldName));

            $('.' + columnItem.ID).filter('*[data-record="' + self.Dataset.Recno + '"]').text(StringCellVal);
            return true;
        });
    }


    public draw(reCreate: boolean) {
        if (!this.parentInitialized())return;super.draw(reCreate);
        if (reCreate || this.needrecreate) this.create();
        if (this.Dataset != null) {
            this.selectedRecordId = this.Dataset.getRecordIndex();
        }
        this.jComponent.datagrid("reload")
        this.selectedRecordId = -1;
        this.needrecreate = false;
    }

    public columns = new VXO.VXCollection<V.TDBGridColumn>();
    public createColumn(fieldname?: string, header?: string): V.TDBGridColumn {
        var col: VXDBGridColumn = new VXDBGridColumn();
        col.grid = this;
        this.columns.add(col);

        col.Header = header;
        col.FieldName = fieldname;
        this.needrecreate = true;
        return col;
    }

}

export class VXDBGridColumn extends VXO.VXCollectionItem {
    public grid: VXDBGrid;
    public onClicked: () => void;
    public onGetValue: (record: any) => any;

    private _dateformat: string = "";
    public get DateFormat(): string {
        return this._dateformat;
    }
    public set DateFormat(val: string) {
        if (val != this._fieldname) {
            this._dateformat = val;
            this.grid.needrecreate = true;
        }
    }

    private _currency: boolean = false;
    public get Currency(): boolean {
        return this._currency;
    }
    public set Currency(val: boolean) {
        if (val != this._currency) {
            this._currency = val;
            this.grid.needrecreate = true;
        }
    }


    private _width: number = -1;
    public get Width(): number {
        return this._width;
    }
    public set Width(val: number) {
        if (val != this._width) {
            this._width = val;
            this.grid.needrecreate = true;
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
            this.grid.needrecreate = true;
        }
    }

    private _textaligment: V.TextAlignment = V.TextAlignment.Left;
    public get TextAlgnment(): V.TextAlignment {
        return this._textaligment;
    }
    public set TextAlgnment(val: V.TextAlignment) {
        if (val != this._textaligment) {
            this._textaligment = val;
            this.grid.needrecreate = true;
        }
    }

    private _header: string = "";
    public get Header(): string {
        return this._header;
    }
    public set Header(val: string) {
        if (val != this._header) {
            this._header = val;
            this.grid.needrecreate = true;
        }
    }

    private _sortable: boolean = false;
    public get Sortable(): boolean {
        return this._sortable;
    }
    public set Sortable(val: boolean) {
        this._sortable = val;
    }

    public formatValue(value: any) {
        if (value == null) return "";

        if (value.getMonth) {
            if (this.DateFormat != "" && this.DateFormat != null) return V.Application.FormatDateTime(value, this.DateFormat);
            if (V.Application.DateFormat != "" && V.Application.DateFormat != null) return V.Application.FormatDateTime(value, V.Application.DateFormat);
            return value;
        }
        else if (!isNaN(parseFloat(value)) && isFinite(value)) { //number
            if (this.Currency) {
                return V.Application.FormatCurrency(value);
            } {return value }
        } else return value;
    }
}

class VXDBGridDataSource {
    grid: VXDBGrid;
    self: VXDBGridDataSource;
     _data = new Array();
    constructor(grid: VXDBGrid) {
        this.grid = grid;
        this.self = this;
    }

    refreshSelection() {
        var _grid = this.grid;
        _grid.jComponent.find('tr').removeClass('info success error warning Default');
        this._data.forEach((item) => {
            var recid: string = item.___RECORDID___;
            var color: string ;
            if (recid == (<any>_grid).selectedRecordId) color = V.GridRowStyle[_grid.SelectedRecordStyle]
            else if (!item.___CLASSS___) return;
            if (!color) color = V.GridRowStyle[item.___CLASSS___];

            this.grid.jComponent.find('tr').filter('*[data-record="' + recid + '"]').addClass(color.toLowerCase());
        });
    }

    data(options, callback) {
        var self = this;
        this._data = new Array();
        if (this.self.grid.Dataset == null || !this.self.grid.Dataset.Active) {
            callback({ data: this._data, count: this.self.grid.PageSize, page: 1, pages: 1 });
            return;
        }

        this._data = this.self.grid.Dataset.getRecords(options.pageIndex * options.pageSize,
            (options.pageIndex + 1) * options.pageSize - 1,
            options.sortDirection, options.sortProperty);

        var mappedData: any[] = new Array();
        var _grid = this.grid;
        $.each(this._data, function (rowIndex, item) {
            mappedData.push({ ___CHECKED___: self._data[rowIndex].___CHECKED___, ___RECORDID___: self._data[rowIndex].___RECORDID___ });

            if (_grid.onGetRowStyle != null) {
                var colorClass = _grid.onGetRowStyle(item);
                if (colorClass != null && colorClass != V.GridRowStyle.Default) {
                    self._data[rowIndex]["___CLASSS___"] = colorClass;
                }
            }
        });
        this.self.grid.columns.forEach((columnItem: V.TDBGridColumn) => {
            $.each(this._data, function (rowIndex, item) {
                var StringCellVal;
                if (columnItem.onGetValue != null) {                   
                    StringCellVal = columnItem.formatValue(columnItem.onGetValue(item));
                } else StringCellVal = columnItem.formatValue(self._data[rowIndex][columnItem.FieldName]);
                var cellClass = columnItem.ID;
                if (columnItem.onClicked != null) {
                    var cellStr = "<a style='cursor: pointer;white-space:nowrap' data-record='" + self._data[rowIndex]["___RECORDID___"] + "'class='" + cellClass + "'>" + StringCellVal + "</a>";
                    mappedData[rowIndex][columnItem.ID] = cellStr;
                } else {
                    mappedData[rowIndex][columnItem.ID] = "<div data-record='" + self._data[rowIndex]["___RECORDID___"] + "'class='" + cellClass + "' style='white-space:nowrap'>" + StringCellVal + "</div>";;
                }
            })
            return true;
        });

        var pages: number = (this.self.grid.Dataset.RecordCount - 1) / this.grid.PageSize;
        pages = Math.floor(pages) + 1;

        //draw the html
        callback({ data: mappedData, count: this.grid.PageSize, page: options.pageIndex + 1, pages: pages });

        this.refreshSelection();

        var _grid = this.grid;

        //bind the clicked eventes
        _grid.jComponent.find("." + _grid.ID + "-row").click(function (item) {
            var recNum: number = parseInt($(this).attr('data-record'));
            _grid.Dataset.Recno = recNum;
            var recId = _grid.Dataset.getRecordIndex();
        
            (<any>_grid).selectedRecordId = recId;
            if (_grid.ShowSelectedRecord) self.refreshSelection();
            if (_grid.onRowClicked) _grid.onRowClicked();
        });
        _grid.columns.forEach((columnItem: VXDBGridColumn) => {
            if (columnItem.onClicked != null) {
                columnItem.grid.jComponent.find("." + columnItem.ID).click(function (item) {
                    if (columnItem.onClicked()) {
                        var recNum: number = parseInt($(this).attr('data-record'));
                        columnItem.grid.Dataset.Recno = recNum;
                        (<any>_grid).selectedRecordId = (<any>_grid).Dataset.getRecordIndex()
                        columnItem.onClicked();
                    }
                });
            }
            return true;
        });
        _grid.jComponent.find(".___CHECKED___").change(function (item) {
            if (_grid.Dataset != null) {
                var recNum: number = parseInt($(this).attr('data-record'));

                _grid.Dataset.Recno = recNum;
                if ($(this).is(':checked')) {
                    _grid.Dataset.checkRecord();
                } else {
                    _grid.Dataset.uncheckRecord();
                }
            }
        });

    }

    columns() {
        var _columns = new Array();
        if (this.grid.ShowSelectCheckbox) {
            _columns.push({
                property: "___CHECKED___", label: "*", sortable: false, width: 15, align: "c"
            });
        }
        this.grid.columns.forEach((item: VXDBGridColumn) => {
            var label: string = item.Header;
            if (label == "" || label == null) label = item.FieldName;
            var align: string;
            if (item.TextAlgnment == V.TextAlignment.Left) align = "l";
            else if (item.TextAlgnment == V.TextAlignment.Right) align = "r";
            else if (item.TextAlgnment == V.TextAlignment.Center) align = "c";

            _columns.push({
                property: item.ID, label: label, sortable: item.Sortable, width: item.Width,
                align: align
            });
            return true;
        });
        return _columns;
    }
}



var SORTED_HEADER_OFFSET = 22;
var Datagrid = function (element, options) {
    this.$element = $(element);
    this.$thead = this.$element.find('thead');
    this.$tfoot = this.$element.find('tfoot');
    this.$footer = this.$element.find('tfoot th');
    this.$footerchildren = this.$footer.children().show().css('visibility', 'hidden');
    this.$searchcontrol = this.$element.find('.datagrid-search');
    this.$filtercontrol = this.$element.find('.filter');
    this.$pagesize = this.$element.find('.grid-pagesize');
    this.$pageinput = this.$element.find('.grid-pager input');
    this.$pagedropdown = this.$element.find('.grid-pager .dropdown-menu');
    this.$prevpagebtn = this.$element.find('.grid-prevpage');
    this.$nextpagebtn = this.$element.find('.grid-nextpage');
    this.$pageslabel = this.$element.find('.grid-pages');
    this.$countlabel = this.$element.find('.grid-count');
    this.$startlabel = this.$element.find('.grid-start');
    this.$endlabel = this.$element.find('.grid-end');

    this.$tbody = $('<tbody>').insertAfter(this.$thead);
    this.$colheader = $('<tr>').appendTo(this.$thead);

    this.options = $.extend(true, {}, $.fn.datagrid.defaults, options);

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
        if (data.page === 1) {
            this.$prevpagebtn.attr('disabled', 'disabled');
        } else {
            this.$prevpagebtn.removeAttr('disabled');
        }

        if (data.page === data.pages) {
            this.$nextpagebtn.attr('disabled', 'disabled');
        } else {
            this.$nextpagebtn.removeAttr('disabled');
        }
    },

    renderData: function () {
        var self = this;
        var _grid : VXDBGrid = this.options.dataSource.grid;

        this.$tbody.html(this.placeholderRowHTML(this.options.loadingHTML));

        this.options.dataSource.data(this.options.dataOptions, function (data) {
            var itemdesc = (data.count === 1) ? self.options.itemText : self.options.itemsText;
            var rowHTML = '';

            self.$footerchildren.css('visibility', function () {
                return (data.count > 0) ? 'visible' : 'hidden';
            });

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
                    if (column.property == '___CHECKED___') {
                        LineHTML += '<td style="text-align:center;overflow:hidden">  <input type="checkbox" class="___CHECKED___" ';
                        if (row.___CHECKED___) LineHTML += 'checked';
                        LineHTML += " data-record=" + row.___RECORDID___ + '"/></td>';
                    } else {
                        if (column.align == 'l') LineHTML += '<td style="text-align: left;overflow:hidden">' + row[column.property] + '</td>';
                        else if (column.align == 'r') LineHTML += '<td style="text-align:right;overflow:hidden">' + row[column.property] + '</td>';
                        else if (column.align == 'c') LineHTML += '<td style="text-align:center;overflow:hidden">' + row[column.property] + '</td>';
                    }
                });
                //color class
                var rowClass = "";
                if (_grid) rowClass = _grid.ID + "-row";
                //if (row.___CLASSS___ != null)
                //    rowHTML += '<tr data-record=' + row.___RECORDID___ + ' class="'+rowClass +" "+ V.GridRowStyle[row.___CLASSS___].toLowerCase() + '">' + LineHTML + '</tr>';
                //else
                    rowHTML += '<tr data-record=' + row.___RECORDID___ + ' class="' + rowClass+'">' + LineHTML + '</tr>';
                rowCnt--;
            });

            //add emptry rows - nati k
            var row = 0;
            while (rowCnt > 0) {
                rowHTML += '<tr>';
                $.each(self.columns, function (index, column) {
                    var style: string = "border-right:0px;";
                    if (row > 0) style = "border-top-color:transparent;";
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

    previous: function () {
        this.options.dataOptions.pageIndex--;
        this.renderData();
    },

    next: function () {
        this.options.dataOptions.pageIndex++;
        this.renderData();
    },

    reload: function () {
        this.options.dataOptions.pageIndex = 0;
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

$.fn.datagrid = function (option) {
    return this.each(function () {
        var $this = $(this);
        var data = $this.data('datagrid');
        var options = typeof option === 'object' && option;

        if (!data) $this.data('datagrid', (data = new Datagrid(this, options)));
        if (typeof option === 'string') data[option]();
    });
};

$.fn.datagrid.defaults = {
    dataOptions: { pageIndex: 0, pageSize: 10 },
    loadingHTML: '<div class="progress progress-striped active" style="width:50%;margin:auto;"><div class="bar" style="width:100%;"></div></div>',
    itemsText: 'items',
    itemText: 'item'
};

$.fn.datagrid.Constructor = Datagrid;
