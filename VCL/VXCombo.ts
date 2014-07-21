/// <reference path="Scripts/jquery.d.ts" />
import V = require("VCL/VCL");
import VXC = require("VCL/VXComponent");
import VXB = require("VCL/VXInputBase");
import VXO = require("VCL/VXObject");
import VXD = require("VCL/VXDataset");
import VXU = require("VCL/VXUtils");
import VXM = require("VCL/VXMenu");

export class TComboboxBase extends VXB.TEditorBase {
    private _maxvisibleLines: number = 8;
    public get MaxVisibleLines(): number {
        return this._maxvisibleLines;
    }
    public set MaxVisibleLines(val: number) {
        if (val != this._maxvisibleLines) {
            this._maxvisibleLines = val;
            this.drawDelayed(true);
        }
    }

    private _showsearch: boolean = false;
    public get ShowSearchBox(): boolean {
        return this._showsearch;
    }
    public set ShowSearchBox(val: boolean) {
        if (val != this._showsearch) {
            this._showsearch = val;
            this.drawDelayed(true);
        }
    }


    private _dropup: boolean = false;
    public get DropUp(): boolean {
        return this._dropup;
    }
    public set DropUp(val: boolean) {
        if (val != this._dropup) {
            this._dropup = val;
            this.drawDelayed(true);
        }
    }

    private _noneselectedtext: string = "Nothing selected";
    /*
    * display selected count insted of values
    * The number of minimum items that will show count insted of values
    */
    public get NoneSelectedText(): string {
        return this._noneselectedtext;
    }
    public set NoneSelectedText(val: string) {
        if (val != this._noneselectedtext) {
            this._noneselectedtext = val;
            this.drawDelayed(true);
        }
    }


    private _showselectioncount: number = 3;
    /*
    * display selected count insted of values
    * The number of minimum items that will show count insted of values
    */
    public get ShowSelectionCount(): number {
        return this._showselectioncount;
    }
    public set ShowSelectionCount(val: number) {
        if (val != this._showselectioncount) {
            this._showselectioncount = val;
            this.drawDelayed(true);
        }
    }


    private _multipleselect: boolean = false;
    public get MultipleSelect(): any {
        return this._multipleselect;
    }
    public set MultipleSelect(val: any) {
        if (val != this._multipleselect) {
            this._multipleselect = val;
            this.drawDelayed(true);
        }
    }


    private _combostyle: V.ComboStyle = V.ComboStyle.Default;
    public get ComboStyle(): V.ComboStyle {
        return this._combostyle;
    }
    public set ComboStyle(val: V.ComboStyle) {
        if (val != this._combostyle) {
            this._combostyle = val;
            this.drawDelayed(true);
        }
    }

    private _textaligment: V.TextAlignment = V.TextAlignment.Left;
    public get TextAlgnment(): V.TextAlignment {
        return this._textaligment;
    }
    public set TextAlgnment(val: V.TextAlignment) {
        if (val != this._textaligment) {
            this._textaligment = val;
            this.drawDelayed(true);
        }
    }

    constructor(aOwner: VXC.TComponent, renderTo?: string) {
        super(aOwner, renderTo);
        //if(!this.Width) this.Width = 200;
        this.items = new TComboItemCollection<TComboItem>(this);

        jQuery.expr[":"].icontains = jQuery.expr.createPseudo(function (arg) {
            return function (elem) {
                return jQuery(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
            };
        });
    }

    public items: TComboItemCollection<TComboItem>;
    public createItem(value: string, text?: string): TComboItem {
        var col: TComboItem = new TComboItem();
        col.Value = value;
        col.Text = text;
        this.items.add(col);

        return <TComboItem>col;
    }

    private _buttonVisible: boolean = false;
    public get ButtonVisible(): boolean {
        return this._buttonVisible;
    }
    public set ButtonVisible(val: boolean) {
        if (val != this._buttonVisible) {
            this._buttonVisible = val;
            this.drawDelayed(true);
        }
    }

    private _buttontext: string = "";
    public get ButtonText(): string {
        if (this._buttontext == null) return "";
        return this._buttontext;
    }
    public set ButtonText(val: string) {
        if (val != this._buttontext) {
            this._buttontext = val;
            this.ButtonVisible = true;
            this.drawDelayed(true);
        }
    }

    private _buttonicon: V.ButtonIcon = null;
    public get ButtonIcon(): V.ButtonIcon {
        return this._buttonicon;
    }
    public set ButtonIcon(val: V.ButtonIcon) {
        if (val != this._buttonicon) {
            this._buttonicon = val;
            this.ButtonVisible = true;
            this.drawDelayed(true);
        }
    }

    private _buttonstyle: V.ButtonStyle = V.ButtonStyle.Default;
    public get ButtonStyle(): V.ButtonStyle {
        return this._buttonstyle;
    }
    public set ButtonStyle(val: V.ButtonStyle) {
        if (val != this._buttonstyle) {
            this._buttonstyle = val;
            this.drawDelayed(true);
        }
    }

    /**
    * Occurs when the user hit the button component.
    */
    public onButtonClicked: () => void;



    private jBtn: JQuery;
    private jImage: JQuery;
    private jbtnText: JQuery;
    public create() {
        this.jComponent.empty(); //clear all subcomponents

        this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'div', this.FitToWidth, this.FitToHeight);
        this.jComponent.addClass('input-append control-group');

        this.jEdit = $('<select>');
        if (this.TabIndex) this.jEdit.attr('tabindex', this.TabIndex);

        this.jEdit.appendTo(this.jComponent);
        this.jEdit.attr('id', V.Application.genGUID());


        if (this.MultipleSelect) this.jEdit.attr('multiple', 'multiple');
        if (this.DropUp) this.jEdit.addClass('dropup');
        if (!this.Enabled) this.jEdit.attr('disabled', 'disabled');

        this.jEdit.attr('data-size', this.MaxVisibleLines);

        this.jEdit.addClass('selectpicker show-menu-arrow');
        if (this.ShowSearchBox) this.jEdit.attr('data-live-search', "true");
        var options: any = new Object();
        switch (this.ComboStyle) {
            case V.ComboStyle.Default: break;
            case V.ComboStyle.Primary: options.style = "btn-primary"; break;
            case V.ComboStyle.Info: options.style = "btn-info"; break;
            case V.ComboStyle.Success: options.style = "btn-success"; break;
            case V.ComboStyle.Warning: options.style = "btn-warning"; break;
            case V.ComboStyle.Danger: options.style = "btn-danger"; break;
        }

        var itm: JQuery = $('<option/>').css('display', 'none');
        itm.appendTo(this.jEdit);
        //loook for groups
        var groups = [];
        this.items.forEach((item: TComboItem) => {
            if (item.Group && item.Group.length > 0 && groups.indexOf(item.Group) == -1) groups.push(item.Group);
        })
        groups.sort();
        groups.push("");

        groups.forEach((group) => {
            if (groups.length > 1) {
                var gitm = $('<optgroup/>');
                gitm.attr('label', group);
                gitm.appendTo(this.jEdit);
            } else gitm = this.jEdit;
            this.items.forEach((item: TComboItem) => {
                if (item.Group == group) {
                    itm = $('<option/>');
                    if (!item.Enabled) itm.attr('disabled', "disabled");
                    itm.val(item.ID);

                    if (item.Divider) itm.attr('data-divider', "true");
                    else {
                        if (item.Text != null && item.Text.toString().length > 0) itm.text(item.Text);
                        else itm.text(item.Value.toString());
                        if (!item.SubText != null && item.SubText.toString().length > 0) {
                            itm.attr('data-subtext', item.SubText.toString());
                        }
                    }
                    itm.appendTo(gitm);
                }
                return true;
            });
        });

        options.width = 'fit';
        options.selectedTextFormat = "count>" + this.ShowSelectionCount;
        options.noneSelectedText = this.NoneSelectedText;
        options.Rtl = this.Rtl; 

        this.jEdit.selectpicker(options);

        if (this.ButtonVisible) {
            this.jImage = $('<i/>');
            this.jbtnText = $('<span/>');

            this.jBtn = $('<button/>').attr('tab-index', '-1').css('outline', 'none');
            this.jBtn.addClass('btn');
            this.jBtn.attr('type', "button");
            switch (this.ButtonStyle) {
                case V.ButtonStyle.Default: break;
                case V.ButtonStyle.Primary: this.jBtn.addClass("btn-primary"); break;
                case V.ButtonStyle.Info: this.jBtn.addClass("btn-info"); break;
                case V.ButtonStyle.Success: this.jBtn.addClass("btn-success"); break;
                case V.ButtonStyle.Warning: this.jBtn.addClass("btn-warning"); break;
                case V.ButtonStyle.Danger: this.jBtn.addClass("btn-danger"); break;
                case V.ButtonStyle.Link: this.jBtn.addClass("btn-link"); break;
            }

            if (this.ButtonIcon != null) {
                this.jImage.addClass(V.iconEnumToBootstrapStyle(this.ButtonIcon));
                this.jImage.appendTo(this.jBtn);
                if (this.ButtonText != "") this.jImage.css('margin-right', '6px');
                this.jbtnText.text(this.ButtonText);
            } else if (this.ButtonText == "") this.jbtnText.text(".");
            else this.jbtnText.text(this.ButtonText);

            if (!this.Enabled) this.jBtn.addClass("disabled");
            this.jbtnText.appendTo(this.jBtn);

            this.jBtn.off("click").click(() => { if (this.onButtonClicked != null) (V.tryAndCatch(() => { this.onButtonClicked(); })); return false; });
            this.jComponent.append(this.jBtn)
        }


        super.create();
    }

    public checkAll() {
        this.items.forEach((item) => { item.Checked = true });
        this.draw(true);
    }

    public uncheckAll() {
        this.items.forEach((item) => { item.Checked = false });
        this.draw(false);
    }

    public get SelectedItems(): V.TComboItem[] {
        var arr: V.TComboItem[] = [];
        this.items.forEach((item) => { if (item.Checked) arr.push(item) });
        return arr;
    }

    public set SelectedItems(val: V.TComboItem[]) {
        this.items.forEach((item) => { item.Checked = false });
        for (var i = 0; i < val.length; i++) {
            var rc = this.items.FindItemByID(val[i].ID);
            if (rc) {
                rc.Checked = true;
                if (!this.MultipleSelect) break;
            }
        }
        this.draw(false);
    }
}


export class TCombobox extends TComboboxBase {
    public get Text(): string {
        var arr = [];
        this.items.forEach((item) => { if (item.Checked) arr.push(item.Value) });
        return arr.toString();
    }


    public isEmpty(): boolean {
        return this.Text == "";
    }

    public set Text(val: string) {
        this.items.forEach((item) => { item.Checked = false });
        if (val) {
            var arr = val.toString().split(',');
            for (var i = 0; i < arr.length; i++) {
                var rc = this.items.FindItemByValue(arr[i]);
                if (rc) {
                    rc.Checked = true;
                    if (!this.MultipleSelect) break;
                }
            }
        }
        this.draw(true);
    }

    public create() {
        super.create();
        var self = this;
        this.jEdit.change((item) => {
            var dpVal = this.jEdit.selectpicker("val").toString();
            var currVal: string[] = dpVal.split(',');
            var newVal = new Array();
            this.items.forEach((item) => { item.Checked = false; });
            for (var i = 0; i < currVal.length; i++) {
                var rc = this.items.FindItemByID(currVal[i]);
                if (rc) {
                    rc.Checked = true;
                    newVal.push((<TComboItem>rc).ID);
                }
            }

            if (self.onChanged && currVal != newVal) (V.tryAndCatch(() => { self.onChanged(self); }))
        });
    }

    public closeDropDown() {
        if (this.jEdit) this.jEdit.selectpicker('closeDropDown');
    }


    public draw(reCreate: boolean) {
        if (!this.parentInitialized()) return;
        super.draw(reCreate);

        var Value = new Array();
        if (this.Text != null && this.Text) {
            var currVal: string[] = this.Text.split(',');
            for (var i = 0; i < currVal.length; i++) {
                var localValue = this.items.FindItemByValue(<string>currVal[i]);
                if (localValue != null) Value.push(localValue.ID);
            }
        }
        if (this.jEdit.selectpicker("val").toString() != Value.toString())
            this.jEdit.selectpicker('val', Value);
    }

}

export class TDBCombobox extends TComboboxBase {
    private _dataset: VXD.TDataset;
    /*
    * Specifies the dataset that contains the field it represents.
    */
    public get Dataset(): VXD.TDataset {
        return this._dataset;
    }
    public set Dataset(val: VXD.TDataset) {
        if (val != this._dataset) {
            if (this._dataset) {
                (<any>this._dataset).removeEventListener(VXD.TDataset.EVENT_DATA_CHANGED, this);
                (<any>this._dataset).removeEventListener(VXD.TDataset.EVENT_SELECTION_CHANGED, this);
                (<any>this._dataset).removeEventListener(VXD.TDataset.EVENT_STATE_CHANGED, this);
            }
            this._dataset = val;
            if (this._dataset != null) {
                (<any>this._dataset).registerEventListener(VXD.TDataset.EVENT_DATA_CHANGED, this, () => { this.draw(false); });
                (<any>this._dataset).registerEventListener(VXD.TDataset.EVENT_SELECTION_CHANGED, this, () => { this.draw(false); });
                (<any>this._dataset).registerEventListener(VXD.TDataset.EVENT_STATE_CHANGED, this, () => {
                    if (this.Dataset == null) this.Enabled = false;
                    else if (this.Dataset.Readonly) this.Enabled = true;
                    else this.Enabled = this.Dataset.Active;
                });
            }

        }
    }

    private _datafield: string;
    /**
    * Specifies the field from which the edit control displays data.
    */
    public get DataField(): string {
        return this._datafield;
    }
    public set DataField(val: string) {
        if (val != this._datafield) {
            this._datafield = val.toUpperCase();
        }
    }


    public isEmpty(): boolean {
        return this.DataValue == "" || this.DataValue == null;
    }


    public get DataValue(): any {
        if (this.Dataset == null || this.Dataset.Active == false || this.Dataset.RecordCount <= 0) return null;
        if (this.DataField == null || this.DataField.toString() == "") return null;

        return this.Dataset.getFieldValue(this._datafield);
    }
    public set DataValue(val: any) {
        if (this.Dataset == null || this.Dataset.Active == false) return;
        if (this.DataField == null || this.DataField.toString() == "") return;

        if (val != this._datafield) {
            this.Dataset.setFieldValue(this.DataField.toString(), val);
            this.drawDelayed(false);
        }
    }

    public create() {
        super.create();
        var self = this;
        this.jEdit.change(() => {
            var currVal: string[] = this.jEdit.selectpicker("val").toString().split(',');
            var newVal = new Array();
            this.items.forEach((item) => { item.Checked = false; });
            for (var i = 0; i < currVal.length; i++) {
                var rc = this.items.FindItemByID(currVal[i]);
                if (rc) {
                    newVal.push(rc.Value);
                    rc.Checked = true;
                }
            }
            if (this.DataValue != newVal.toString() && rc) {
                this.DataValue = newVal.toString();
                if (this.onChanged != null) (V.tryAndCatch(() => { this.onChanged(self); }))
            }
        });
    }

    public closeDropDown() {
        this.jEdit.selectpicker('closeDropDown');
    }

    public draw(reCreate: boolean) {
        if (!this.parentInitialized()) return;
        super.draw(reCreate);

        var Value = new Array();
        var rc = this.DataValue;
        if (rc != null && rc != "") {
            var currVal = rc.split(',');
            for (var i = 0; i < currVal.length; i++) {
                var localValue = this.items.FindItemByValue(currVal[i]);
                if (localValue != null) Value.push(localValue.ID);
            }
        }
        if (this.jEdit.selectpicker("val").toString() != Value.toString())
            this.jEdit.selectpicker('val', Value);
    }
}



export class TComboItem extends VXM.TMenuItem {

    private _value: string;
    public get Value(): string {
        return this._value;
    }
    public set Value(val: string) {
        if (val != this._value) {
            this._value = val;
            if (this.OwnerCollection) this.OwnerCollection.refresh();
        }
    }

    private _subtext: string = "";
    public get SubText(): string {
        return this._subtext;
    }
    public set SubText(val: string) {
        if (val != this._subtext) {
            this._subtext = val;
            if (this.OwnerCollection) this.OwnerCollection.refresh();
        }
    }

    private _group: string = "";
    public get Group(): string {
        return this._group;
    }
    public set Group(val: string) {
        if (val != this._subtext) {
            this._group = val;
            if (this.OwnerCollection) this.OwnerCollection.refresh();
        }
    }


    private _checked: boolean = false;
    public get Checked(): boolean {
        return this._checked;
    }
    public set Checked(val: boolean) {
        if (val != this._checked) {
            this._checked = val;
            if (this.OwnerCollection) this.OwnerCollection.refresh();
        }
    }

}

export class TComboItemCollection<T> extends VXO.TCollection<TComboItem> {
    private owner: TComboboxBase;

    FindItemByValue(value: string): TComboItem {
        var rc: TComboItem = null;
        this.forEach((item: TComboItem) => {
            if (item.Value == value) {
                rc = item;
                return false;
            }
            return true;
        });
        return rc;
    }

    constructor(aOwner: TComboboxBase) {
        super();
        this.owner = aOwner;
    }

    add(item: TComboItem): boolean {
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

var Selectpicker = function (element, options, e) {
    if (e) {
        e.stopPropagation();
        e.preventDefault();
    }
    this.$element = $(element);
    this.$newElement = null;
    this.button = null;
    this.$menu = null;

    //Merge defaults, options and data-attributes to make our options
    this.options = $.extend({}, $.fn.selectpicker.defaults, this.$element.data(), typeof options == 'object' && options);

    //If we have no title yet, check the attribute 'title' (this is missed by jq as its not a data-attribute
    if (this.options.title == null) {
        this.options.title = this.$element.attr('title');
    }

    //Expose public methods
    this.val = Selectpicker.prototype.val;
    this.render = Selectpicker.prototype.render;
    this.refresh = Selectpicker.prototype.refresh;
    this.setStyle = Selectpicker.prototype.setStyle;
    this.selectAll = Selectpicker.prototype.selectAll;
    this.deselectAll = Selectpicker.prototype.deselectAll;
    this.init();
};

Selectpicker.prototype = {

    constructor: Selectpicker,

    init: function (e) {
        this.$element.hide();
        this.multiple = this.$element.prop('multiple');
        var id = this.$element.attr('id');
        this.$newElement = this.createView(this.options.Rtl);
        this.$element.after(this.$newElement);
        this.$menu = this.$newElement.find('> .dropdown-menu');
        this.$button = this.$newElement.find('> button');
        this.$searchbox = this.$newElement.find('input');

        if (id !== undefined) {
            var that = this;
            this.$button.attr('data-id', id);
            $('label[for="' + id + '"]').click(function (e) {
                e.preventDefault();
                that.$button.focus();
            });
        }

        this.checkDisabled();
        this.checkTabIndex();
        this.clickListener();
        this.liveSearchListener();
        this.render();
        this.liHeight();
        this.setStyle();
        this.setWidth();
        if (this.options.container) {
            this.selectPosition();
        }
        this.$menu.data('this', this);
        this.$newElement.data('this', this);
    },

    createDropdown: function (rtl : boolean) {
        //If we are multiple, then add the show-tick class by default
        var multiple = this.multiple ? ' show-tick' : '';
        var header = this.options.header ? '<h3 class="popover-title">' + this.options.header + '<button type="button" class="close" aria-hidden="true">&times;</button></h3>' : '';

        if (rtl) {
            var searchbox = this.options.liveSearch ? '<div class="bootstrap-select-searchbox" dir="rtl"><input type="text" class="input-block-level form-control" /></div>' : '';
            var drop =
                "<div style='width:100%;display:block' class='btn-group bootstrap-select" + multiple + "'>" +
                "<button type='button' class='btn dropdown-toggle' data-toggle='dropdown'>" +
                "<div class='filter-option pull-left' style='text-align:right'></div>&nbsp;" +
                "<div class='caret'></div>" +
                "</button>" +
                "<div class='dropdown-menu open'>" +
                header +
                searchbox +
                "<ul class='dropdown-menu inner' dir='rtl' role='menu'>" +
                "</ul>" +
                "</div>" +
                "</div>";

            return $(drop);

        } else {
            var searchbox = this.options.liveSearch ? '<div class="bootstrap-select-searchbox"><input type="text" class="input-block-level form-control" /></div>' : '';
            var drop =
                "<div style='width:100%;display:block' class='btn-group bootstrap-select" + multiple + "'>" +
                "<button type='button' class='btn dropdown-toggle' data-toggle='dropdown'>" +
                "<div class='filter-option pull-left'></div>&nbsp;" +
                "<div class='caret'></div>" +
                "</button>" +
                "<div class='dropdown-menu open'>" +
                header +
                searchbox +
                "<ul class='dropdown-menu inner' role='menu'>" +
                "</ul>" +
                "</div>" +
                "</div>";

            return $(drop);
        }
    },

    createView: function (rtl : boolean) {
        var $drop = this.createDropdown(rtl);
        var $li = this.createLi();
        $drop.find('ul').append($li);
        return $drop;
    },

    reloadLi: function () {
        //Remove all children.
        this.destroyLi();
        //Re build
        var $li = this.createLi();
        this.$menu.find('ul').append($li);
    },

    destroyLi: function () {
        this.$menu.find('li').remove();
    },

    createLi: function () {
        var that = this,
            _liA = [],
            _liHtml = '';

        this.$element.find('option').each(function (index) {
            var $this = $(this);

            //Get the class and text for the option
            var optionClass = $this.attr("class") || '';
            var inline = $this.attr("style") || '';
            var text = $this.data('content') ? $this.data('content') : $this.html();
            var subtext = $this.data('subtext') !== undefined ? '<small class="muted">' + $this.data('subtext') + '</small>' : '';
            var icon = $this.data('icon') !== undefined ? '<i class="glyphicon ' + $this.data('icon') + '"></i> ' : '';
            if (icon !== '' && ($this.is(':disabled') || $this.parent().is(':disabled'))) {
                icon = '<span>' + icon + '</span>';
            }

            if (!$this.data('content')) {
                //Prepend any icon and append any subtext to the main text.
                text = icon + '<span class="text">' + text + subtext + '</span>';
            }

            if (that.options.hideDisabled && ($this.is(':disabled') || $this.parent().is(':disabled'))) {
                _liA.push('<a style="min-height: 0; padding: 0"></a>');
            } else if ($this.parent().is('optgroup') && $this.data('divider') != true) {
                if ($this.index() == 0) {
                    //Get the opt group label
                    var label = $this.parent().attr('label');
                    var labelSubtext = $this.parent().data('subtext') !== undefined ? '<small class="muted">' + $this.parent().data('subtext') + '</small>' : '';
                    var labelIcon = $this.parent().data('icon') ? '<i class="' + $this.parent().data('icon') + '"></i> ' : '';
                    label = labelIcon + '<span class="text">' + label + labelSubtext + '</span>';

                    if ($this[0]["index"] >1) {
                        _liA.push(
                            '<div class="div-contain"><div class="divider"></div></div>' +
                            '<dt>' + label + '</dt>' +
                            that.createA(text, "opt " + optionClass, inline)
                            );
                    } else {
                        _liA.push(
                            '<dt>' + label + '</dt>' +
                            that.createA(text, "opt " + optionClass, inline));
                    }
                } else {
                    _liA.push(that.createA(text, "opt " + optionClass, inline));
                }
            } else if ($this.data('divider') == true) {
                _liA.push('<div class="div-contain"><div class="divider"></div></div>');
            } else if ($(this).data('hidden') == true) {
                _liA.push('');
            } else {
                _liA.push(that.createA(text, optionClass, inline));
            }
        });

        $.each(_liA, function (i, item) {
            _liHtml += "<li rel=" + i + ">" + item + "</li>";
        });

        //If we are not multiple, and we dont have a selected item, and we dont have a title, select the first element so something is set in the button
        if (!this.multiple && this.$element.find('option:selected').length == 0 && !this.options.title) {
            this.$element.find('option').eq(0).prop('selected', true).attr('selected', 'selected');
        }

        return $(_liHtml);
    },

    createA: function (text, classes, inline) {
        return '<a tabindex="0" class="' + classes + '" style="' + inline + '">' +
            text +
            '<i class="glyphicon glyphicon-ok icon-ok check-mark"></i>' +
            '</a>';
    },

    render: function () {
        var that = this;

        //Update the LI to match the SELECT
        this.$element.find('option').each(function (index) {
            that.setDisabled(index, $(this).is(':disabled') || $(this).parent().is(':disabled'));
            that.setSelected(index, $(this).is(':selected'));
        });

        var selectedItems = this.$element.find('option:selected').map(function (index, value) {
            var $this = $(this);
            var icon = $this.data('icon') && that.options.showIcon ? '<i class="glyphicon ' + $this.data('icon') + '"></i> ' : '';
            var subtext;
            if (that.options.showSubtext && $this.attr('data-subtext') && !that.multiple) {
                subtext = ' <small class="muted">' + $this.data('subtext') + '</small>';
            } else {
                subtext = '';
            }
            if ($this.data('content') && that.options.showContent) {
                return $this.data('content');
            } else if ($this.attr('title') != undefined) {
                return $this.attr('title');
            } else {
                return icon + $this.html() + subtext;
            }
        }).toArray();

        //Fixes issue in IE10 occurring when no default option is selected and at least one option is disabled
        //Convert all the values into a comma delimited string
        var title = !this.multiple ? selectedItems[0] : selectedItems.join(", ");

        //If this is multi select, and the selectText type is count, the show 1 of 2 selected etc..
        if (this.multiple && this.options.selectedTextFormat.indexOf('count') > -1) {
            var max = this.options.selectedTextFormat.split(">");
            var notDisabled = this.options.hideDisabled ? ':not([disabled])' : '';
            if ((max.length > 1 && selectedItems.length > max[1]) || (max.length == 1 && selectedItems.length >= 2)) {
                title = this.options.countSelectedText.replace('{0}', selectedItems.length).replace('{1}', this.$element.find('option:not([data-divider="true"]):not([data-hidden="true"])' + notDisabled).length-1);
            }
        }

        //If we dont have a title, then use the default, or if nothing is set at all, use the not selected text
        if (!title) {
            title = this.options.title != undefined ? this.options.title : this.options.noneSelectedText;
        }

        this.$newElement.find('.filter-option').html(title);
    },

    setStyle: function (style, status) {
        if (this.$element.attr('class')) {
            this.$newElement.addClass(this.$element.attr('class').replace(/selectpicker|mobile-device/gi, ''));
        }

        var buttonClass = style ? style : this.options.style;

        if (status == 'add') {
            this.$button.addClass(buttonClass);
        } else if (status == 'remove') {
            this.$button.removeClass(buttonClass);
        } else {
            this.$button.removeClass(this.options.style);
            this.$button.addClass(buttonClass);
        }
    },

    liHeight: function () {
        var selectClone = this.$newElement.clone();
        selectClone.appendTo('body');
        var $menuClone = selectClone.addClass('open').find('> .dropdown-menu');
        var as: JQuery = $menuClone.find('li > a');
        if (as.length) as.text("A");
        var liHeight = as.outerHeight();
        var headerHeight = this.options.header ? $menuClone.find('.popover-title').outerHeight() : 0;
        selectClone.remove();
        this.$newElement.data('liHeight', liHeight).data('headerHeight', headerHeight);
    },

    setSize: function () {
        var that = this,
            menu = this.$menu,
            menuInner = menu.find('.inner'),
            menuA = menuInner.find('li > a'),
            selectHeight = this.$newElement.outerHeight(),
            liHeight = this.$newElement.data('liHeight'),
            headerHeight = this.$newElement.data('headerHeight'),
            divHeight = menu.find('li .divider').outerHeight(true),
            menuPadding = parseInt(menu.css('padding-top')) +
            parseInt(menu.css('padding-bottom')) +
            parseInt(menu.css('border-top-width')) +
            parseInt(menu.css('border-bottom-width')),
            notDisabled = this.options.hideDisabled ? ':not(.disabled)' : '',
            $window = $(window),
            menuExtras = menuPadding + parseInt(menu.css('margin-top')) + parseInt(menu.css('margin-bottom')) + 2,
            menuHeight,
            selectOffsetTop,
            selectOffsetBot,
            posVert = function () {
                selectOffsetTop = that.$newElement.offset().top - $window.scrollTop();
                selectOffsetBot = $window.height() - selectOffsetTop - selectHeight;
            };
        posVert();
        if (this.options.header) menu.css('padding-top', 0);

        if (this.options.size == 'auto') {
            var getSize = function () {
                var minHeight;
                posVert();
                menuHeight = selectOffsetBot - menuExtras;
                that.$newElement.toggleClass('dropup', (selectOffsetTop > selectOffsetBot) && (menuHeight - menuExtras) < menu.height() && that.options.dropupAuto);
                if (that.$newElement.hasClass('dropup')) {
                    menuHeight = selectOffsetTop - menuExtras;
                }
                if ((menu.find('li').length + menu.find('dt').length) > 3) {
                    minHeight = liHeight * 3 + menuExtras - 2;
                } else {
                    minHeight = 0;
                }
                menu.css({ 'max-height': menuHeight + 'px', 'overflow': 'hidden', 'min-height': minHeight + 'px' });
                menuInner.css({ 'max-height': menuHeight - headerHeight - menuPadding + 'px', 'overflow-y': 'auto', 'min-height': minHeight - menuPadding + 'px' });
            }
                getSize();
            $(window).resize(getSize);
            $(window).scroll(getSize);
        } else if (this.options.size && this.options.size != 'auto' && menu.find('li' + notDisabled).length > this.options.size) {
            var optIndex = menu.find("li" + notDisabled + " > *").filter(':not(.div-contain)').slice(0, this.options.size).last().parent().index();
            var divLength = menu.find("li").slice(0, optIndex + 1).find('.div-contain').length;
            menuHeight = liHeight * this.options.size + divLength * divHeight + menuPadding;
            this.$newElement.toggleClass('dropup', (selectOffsetTop > selectOffsetBot) && menuHeight < menu.height() && this.options.dropupAuto);
            menu.css({ 'max-height': menuHeight + headerHeight + 'px', 'overflow': 'hidden' });
            menuInner.css({ 'max-height': menuHeight - menuPadding + 'px', 'overflow-y': 'auto' });
        }
    },

    setWidth: function () {
        if (this.options.width == 'auto') {
            this.$menu.css('min-width', '0');

            // Get correct width if element hidden
            var selectClone = this.$newElement.clone().appendTo('body');
            var ulWidth = selectClone.find('> .dropdown-menu').css('width');
            selectClone.remove();

            this.$newElement.css('width', ulWidth);
        } else if (this.options.width == 'fit') {
            // Remove inline min-width so width can be changed from 'auto'
            this.$menu.css('min-width', '');
            //this.$newElement.css('width', '').addClass('fit-width'); NATI K
            this.$newElement.css('width', '100%');
        } else if (this.options.width) {
            // Remove inline min-width so width can be changed from 'auto'
            this.$menu.css('min-width', '');
            this.$newElement.css('width', this.options.width);
        } else {
            // Remove inline min-width/width so width can be changed
            this.$menu.css('min-width', '');
            this.$newElement.css('width', '');
        }
        // Remove fit-width class if width is changed programmatically
        if (this.$newElement.hasClass('fit-width') && this.options.width !== 'fit') {
            this.$newElement.removeClass('fit-width');
        }
    },

    selectPosition: function () {
        var that = this,
            drop = "<div />",
            $drop = $(drop),
            pos,
            actualHeight,
            getPlacement = function ($element) {
                $drop.addClass($element.attr('class')).toggleClass('dropup', $element.hasClass('dropup'));
                pos = $element.offset();
                actualHeight = $element.hasClass('dropup') ? 0 : $element[0].offsetHeight;
                $drop.css({ 'top': pos.top + actualHeight, 'left': pos.left, 'width': $element[0].offsetWidth, 'position': 'absolute' });
            };
        this.$newElement.on('click', function (e) {
            getPlacement($(this));
            $drop.appendTo(that.options.container);
            $drop.toggleClass('open', !$(this).hasClass('open'));
            $drop.append(that.$menu);
        });
        $(window).resize(function () {
            getPlacement(that.$newElement);
        });
        $(window).on('scroll', function (e) {
            getPlacement(that.$newElement);
        });
        $('html').on('click', function (e) {
            if ($(e.target).closest(that.$newElement).length < 1) {
                $drop.removeClass('open');
            }
        });
    },
    closeDropDown: function () {
        this.$newElement.removeClass('open');
    },

    mobile: function () {
        this.$element.addClass('mobile-device').appendTo(this.$newElement);
        if (this.options.container) this.$menu.hide();
    },

    refresh: function () {
        this.reloadLi();
        this.render();
        this.setWidth();
        this.setStyle();
        this.checkDisabled();
        this.liHeight();
    },

    setSelected: function (index, selected) {
        this.$menu.find('li').eq(index).toggleClass('selected', selected);
    },

    setDisabled: function (index, disabled) {
        if (disabled) {
            this.$menu.find('li').eq(index).addClass('disabled').find('a').attr('href', '#').attr('tabindex', -1);
        } else {
            this.$menu.find('li').eq(index).removeClass('disabled').find('a').removeAttr('href').attr('tabindex', 0);
        }
    },

    isDisabled: function () {
        return this.$element.is(':disabled');
    },

    checkDisabled: function () {
        var that = this;
        if (this.isDisabled()) {
            this.$button.addClass('disabled');
            this.$button.attr('tabindex', '-1');
        } else if (this.$button.hasClass('disabled')) {
            this.$button.removeClass('disabled');
            this.$button.removeAttr('tabindex');
        }
        this.$button.click(function () {
            return !that.isDisabled();
        });
    },

    checkTabIndex: function () {
        if (this.$element.is('[tabindex]')) {
            var tabindex = this.$element.attr("tabindex");
            this.$button.attr('tabindex', tabindex);
        }
    },

    clickListener: function () {
        var that = this;

        $('body').on('touchstart.dropdown', '.dropdown-menu', function (e) {
            e.stopPropagation();
        });

        this.$newElement.on('click', function () {
            that.setSize();
        });

        this.$menu.on('click', 'li a', function (e) {
            var clickedIndex = $(this).parent().index(),
                $this = $(this).parent(),
                prevValue = that.$element.val();

            //Dont close on multi choice menu
            if (that.multiple) {
                e.stopPropagation();
            }

            e.preventDefault();

            //Dont run if we have been disabled
            if (!that.isDisabled() && !$(this).parent().hasClass('disabled')) {
                var $options = that.$element.find('option');
                var $option = $options.eq(clickedIndex);

                //Deselect all others if not multi select box
                if (!that.multiple) {
                    $options.prop('selected', false);
                    $option.prop('selected', true);
                }
                //Else toggle the one we have chosen if we are multi select.
                else {
                    var state = $option.prop('selected');

                    $option.prop('selected', !state);
                }

                that.$button.focus();

                // Trigger select 'change'
                if (prevValue != that.$element.val()) {
                    that.$element.change();
                }
            }
        });

        this.$menu.on('click', 'li.disabled a, li dt, li .div-contain, h3.popover-title', function (e) {
            if (e.target == this) {
                e.preventDefault();
                e.stopPropagation();
                that.$button.focus();
            }
        });

        this.$searchbox.on('click', function (e) {
            e.stopPropagation();
        });

        this.$element.change(function () {
            that.render()
            });
    },

    liveSearchListener: function () {
        var that = this;

        this.$newElement.on('click.dropdown.data-api', function (e) {
            if (that.options.liveSearch) {
                setTimeout(function () {
                    that.$searchbox.focus();
                }, 10);
            }
        });

        this.$searchbox.on('input', function () {
            that.$newElement.find('li').show().not(':icontains(' + that.$searchbox.val() + ')').hide();
        });
    },

    val: function (value) {

        if (value != undefined) {
            this.$element.val(value);

            this.$element.change();
            return this.$element;
        } else {
            return this.$element.val();
        }
    },

    selectAll: function () {
        this.$element.find('option').prop('selected', true).attr('selected', 'selected');
        this.render();
    },

    deselectAll: function () {
        this.$element.find('option').prop('selected', false).removeAttr('selected');
        this.render();
    },

    keydown: function (e) {
        var $this,
            $items,
            $parent,
            index,
            next,
            first,
            last,
            prev,
            nextPrev,
            that;

        $this = $(this);

        $parent = $this.parent();

        that = $parent.data('this');

        if (that.options.container) $parent = that.$menu;

        $items = $('[role=menu] li:not(.divider):visible a', $parent);

        if (!$items.length) return;

        if (/(38|40)/.test(e.keyCode)) {

            index = $items.index($items.filter(':focus'));
            first = $items.parent(':not(.disabled)').first().index();
            last = $items.parent(':not(.disabled)').last().index();
            next = $items.eq(index).parent().nextAll(':not(.disabled)').eq(0).index();
            prev = $items.eq(index).parent().prevAll(':not(.disabled)').eq(0).index();
            nextPrev = $items.eq(next).parent().prevAll(':not(.disabled)').eq(0).index();

            if (e.keyCode == 38) {
                if (index != nextPrev && index > prev) index = prev;
                if (index < first) index = first;
            }

            if (e.keyCode == 40) {
                if (index != nextPrev && index < next) index = next;
                if (index > last) index = last;
                if (index == -1) index = 0;
            }

            $items.eq(index).focus();
        } else {
            var keyCodeMap = {
                48: "0", 49: "1", 50: "2", 51: "3", 52: "4", 53: "5", 54: "6", 55: "7", 56: "8", 57: "9", 59: ";",
                65: "a", 66: "b", 67: "c", 68: "d", 69: "e", 70: "f", 71: "g", 72: "h", 73: "i", 74: "j", 75: "k", 76: "l",
                77: "m", 78: "n", 79: "o", 80: "p", 81: "q", 82: "r", 83: "s", 84: "t", 85: "u", 86: "v", 87: "w", 88: "x", 89: "y", 90: "z",
                96: "0", 97: "1", 98: "2", 99: "3", 100: "4", 101: "5", 102: "6", 103: "7", 104: "8", 105: "9"
            }

                var keyIndex = [];

            $items.each(function () {
                if ($(this).parent().is(':not(.disabled)')) {
                    if ($.trim($(this).text().toLowerCase()).substring(0, 1) == keyCodeMap[e.keyCode]) {
                        keyIndex.push($(this).parent().index());
                    }
                }
            });

            var count = $(document).data('keycount');
            count++;
            $(document).data('keycount', count);

            var prevKey = $.trim($(':focus').text().toLowerCase()).substring(0, 1);

            if (prevKey != keyCodeMap[e.keyCode]) {
                count = 1;
                $(document).data('keycount', count);
            } else if (count >= keyIndex.length) {
                $(document).data('keycount', 0);
            }

            $items.eq(keyIndex[count - 1]).focus();
        }

        // select focused option if "Enter" or "Spacebar" are pressed
        if (/(13|32)/.test(e.keyCode)) {
            e.preventDefault();
            $(':focus').click();
            $(document).data('keycount', 0);
        }
    },

    hide: function () {
        this.$newElement.hide();
    },

    show: function () {
        this.$newElement.show();
    },

    destroy: function () {
        this.$newElement.remove();
        this.$element.remove();
    }
};

$.fn.selectpicker = function (option, event) {
    //get the args of the outer function..
    var args = arguments;
    var value;
    var chain = this.each(function () {
        if ($(this).is('select')) {
            var $this = $(this),
                data = $this.data('selectpicker'),
                options = typeof option == 'object' && option;

            if (!data) {
                $this.data('selectpicker', (data = new Selectpicker(this, options, event)));
            } else if (options) {
                for (var i in options) {
                    data.options[i] = options[i];
                }
            }

            if (typeof option == 'string') {
                //Copy the value of option, as once we shift the arguments
                //it also shifts the value of option.
                var property = option;
                if (data[property] instanceof Function) {
                    [].shift.apply(args);
                    value = data[property].apply(data, args);
                } else {
                    value = data.options[property];
                }
            }
        }
    });

    if (value != undefined) {
        return value;
    } else {
        return chain;
    }
};
$.fn.selectpicker.defaults = {
    style: null,
    size: 'auto',
    title: null,
    selectedTextFormat: 'values',
    noneSelectedText: 'Nothing selected',
    countSelectedText: '{0} of {1} selected',
    width: null,
    container: false,
    hideDisabled: false,
    showSubtext: false,
    showIcon: true
}
