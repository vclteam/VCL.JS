import VXC = require("./VXComponent");
import VXU = require("./VXUtils");
import V = require("./VCL");
import VXD = require("./VXDataset");
import VXM = require("./VXMenu");
import VXO = require("./VXObject");
import VXCO = require("./VXContainer");

export class TCheckBoxBase extends VXC.TComponent {
    public onClicked: (sender: TCheckBoxBase) => void;
    public onChanged: (sender: TCheckBoxBase) => void;

    public jCheckbox: JQuery;
    public jText: JQuery;

    private _text: string;
    /*
    * Text specify the text string that labels the control.
    */
    public get Text(): string {
        return this._text;
    }
    public set Text(val: string) {
        if (val != this._text) {
            this._text = val;
            this.draw(false);
        }
    }


    public create() {
        var self = this;
        this.jComponent.empty(); //clear all subcomponents
        this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'label', this.FitToWidth, this.FitToHeight);
        this.jComponent.addClass('checkbox');

        this.jCheckbox = $('<input >');
        this.jCheckbox.attr('type', 'checkbox');
        this.jCheckbox.appendTo(this.jComponent);

        this.jText = $('<span>');
        this.jText.appendTo(this.jComponent);

        if (!this.Enabled) this.jCheckbox.attr('disabled', 'disabled');
        super.create();
    }
}

export class TRadioButtonBase extends VXC.TComponent {
    public onClicked: (sender: TRadioButtonBase) => void;
    public onChanged: (sender: TRadioButtonBase) => void;

    public jRadioButton: JQuery;
    public jText: JQuery;

    private _text: string;
    /*
    * Text specify the text string that labels the control.
    */
    public get Text(): string {
        return this._text;
    }
    public set Text(val: string) {
        if (val != this._text) {
            this._text = val;
            this.draw(false);
        }
    }

    private _group: string = "~";
    /*
    * Text specify the group string grouping the radio button together.
    */
    public get Group(): string {
        return this._group;
    }
    public set Group(val: string) {
        if (val != this._group) {
            this._group = val;
            this.draw(true);
        }
    }



    public create() {
        var self = this;
        this.jComponent.empty(); //clear all subcomponents
        this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'label', this.FitToWidth, this.FitToHeight);
        this.jComponent.addClass('radio');

        this.jRadioButton = $('<input >');
        this.jRadioButton.attr('type', 'radio');
        if (this.Group) this.jRadioButton.attr('name', this.Group);
        this.jRadioButton.appendTo(this.jComponent);

        this.jText = $('<span>');
        this.jText.appendTo(this.jComponent);

        if (!this.Enabled) this.jRadioButton.attr('disabled', 'disabled');
        super.create();
    }
}


export class TCheckBox extends TCheckBoxBase {
    private _checked: boolean;
    public get Checked(): boolean {
        return this._checked;
    }
    public set Checked(val: boolean) {
        if (val != this._checked) {
            this._checked = val;
            this.draw(false);
        }
    }


    constructor(aOwner: VXC.TComponent, renderTo?: string, text?: string) {
        super(aOwner, renderTo);
        (<any>this)._text = text;
    }

    public create() {
        super.create();
        var self = this;
        this.jCheckbox.off("click").click(() => { if (self.onClicked != null) (V.tryAndCatch(() => { self.onClicked(self); })); return true; })
        this.jCheckbox.change((event) => {
            self.Checked = this.jCheckbox.prop('checked');
            if (self.onChanged != null) (V.tryAndCatch(() => { self.onChanged(this); }));
        })
    }



    public draw(reCreate: boolean) {
        if (!this.parentInitialized()) return;
        super.draw(reCreate);

        this.jText.text(this.Text);
        this.jCheckbox.prop('checked', this.Checked);
    }
}


export class TRadioButton extends TRadioButtonBase {
    private _checked: boolean;
    public get Checked(): boolean {
        return this._checked;
    }
    public set Checked(val: boolean) {
        if (val != this._checked) {
            this._checked = val;
            this.draw(false);
        }
    }

    constructor(aOwner: VXC.TComponent, renderTo?: string, text?: string) {
        super(aOwner, renderTo);
        (<any>this)._text = text;
    }

    public create() {
        super.create();
        var self = this;
        this.jRadioButton.off("click").click(() => { if (self.onClicked != null) (V.tryAndCatch(() => { self.onClicked(self); })); return true; })
        this.jRadioButton.change((event) => {
            self.Checked = this.jRadioButton.prop('checked');
            if (self.onChanged != null) (V.tryAndCatch(() => { self.onChanged(this); }));
        })
    }

    public draw(reCreate: boolean) {
        if (!this.parentInitialized()) return;
        super.draw(reCreate);

        this.jText.text(this.Text);
        this.jRadioButton.prop('checked', this.Checked);
    }
}


export class TDBCheckBox extends TCheckBoxBase {
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
            if (this._dataset) {
                (<any>this._dataset).registerEventListener(VXD.TDataset.EVENT_DATA_CHANGED, this, () => { this.draw(false); });
                (<any>this._dataset).registerEventListener(VXD.TDataset.EVENT_SELECTION_CHANGED, this, () => { this.draw(false); });
                (<any>this._dataset).registerEventListener(VXD.TDataset.EVENT_STATE_CHANGED, this, () => { this.validateEnabled(); });
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

    private validateEnabled() {
        if (this.Dataset == null) this.Enabled = false;
        else if (this.Dataset.Readonly) this.Enabled = false;
        else this.Enabled = this.Dataset.Active;
    }

    private get DataValue(): boolean {
        if (this.Dataset == null || this.Dataset.Active == false || this.Dataset.RecordCount <= 0) return null;
        if (this.DataField == null || this.DataField.toString() == "") return null;

        var val: any = this.Dataset.getFieldValue(this._datafield);
        if (val == 0 || val == false || !val) return false;
        return true;
    }

    private set DataValue(val: boolean) {
        if (this.Dataset == null || this.Dataset.Active == false) return;
        if (this.DataField == null || this.DataField.toString() == "") return;

        this.Dataset.setFieldValue(this.DataField.toString(), val);
        this.draw(false);
    }

    public create() {
        super.create();
        var self = this;
        this.jCheckbox.on("click change", () => {
            self.DataValue = this.jCheckbox.prop('checked');
            if (this.onChanged != null) (V.tryAndCatch(() => { this.onChanged(self); }))
        });
    }

    public draw(reCreate: boolean) {
        if (!this.parentInitialized()) return;

        if (reCreate || !this.initialized) {
            this.validateEnabled();
            super.draw(reCreate);
        }

        this.jText.text(this.Text);
        this.jCheckbox.prop('checked', this.DataValue);
    }
}



export class TVerticalCheckBoxItemCollection<T> extends VXO.TCollection<TVerticalCheckBoxItem> {
    private owner: TVerticalCheckBoxList;

    constructor(aOwner: TVerticalCheckBoxList) {
        super();
        this.owner = aOwner;
    }

    add(item: TVerticalCheckBoxItem): boolean {
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

export class TVerticalCheckBoxItem extends VXO.TCollectionItem {
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
    private _enabled: boolean = true;
    public get Enabled(): boolean {
        return this._enabled;
    }
    public set Enabled(val: boolean) {
        if (val != this._enabled) {
            this._enabled = val;
            if (this.OwnerCollection) this.OwnerCollection.refresh();
        }
    }
    private _filter: boolean = false;

    private _visible: boolean = true;
    public get Visible(): boolean {
        return this._visible;
    }
    public set Visible(val: boolean) {
        if (val != this._enabled) {
            this._visible = val;
            if (this.OwnerCollection) this.OwnerCollection.refresh();
        }
    }

    private _text: string = "";
    public get Text(): string {
        return this._text;
    }
    public set Text(val: string) {
        if (val != this._text) {
            this._text = val;
            if (this.OwnerCollection) this.OwnerCollection.refresh();
        }
    }
}


export class TVerticalCheckBoxList extends VXCO.TContainer {
    public onChanged: (sender: TVerticalCheckBoxItem) => void;

    /**
    @aOwner     Indicates the component that is responsible for streaming and freeing this component.Onwer must be TContainer
    @renderTo   (Optional) the id of the html element that will be the parent node for this component
    **/
    constructor(aOwner: VXC.TComponent, renderTo?: string) {
        super(aOwner, renderTo);
        this.items = new TVerticalCheckBoxItemCollection<TVerticalCheckBoxItem>(this);
    }

    public items: TVerticalCheckBoxItemCollection<TVerticalCheckBoxItem>;
    public createItem(text: string, checked?: boolean): TVerticalCheckBoxItem {
        var col: TVerticalCheckBoxItem = new TVerticalCheckBoxItem();
        col.OwnerCollection = this.items;
        col.Checked = checked;
        col.Text = text;
        this.items.add(col);
        return <TVerticalCheckBoxItem>col;
    }

    public create() {
        var self = this;
        this.jComponent.empty();
        this.jComponent.css("overflow", "auto");


        var content: JQuery = $("<div>");
        this.jComponent.append(content);

        var itemsLength = this.items.length();
        var vCnt = 0;
        var grp: JQuery;
        for (var i = 0; i < this.items.length(); i++) {
            var item = this.items.get(i);
            if (!item.Visible || (<any>item)._filter) continue;

            if (vCnt % this.MaxItemsInColumn == 0) {
                grp = $("<div>");
                grp.css("display", "inline-block").css("vertical-align", "top").css("margin-left", this.GroupMarginLeft + "px").
                    css("margin-right", this.GroupMarginRight + "px").css('width', this.MaxColumnWidth + "px");
                content.append(grp);
            }

            var cbl: JQuery = $('<Label class="checkbox">');
            cbl.text(item.Text);
            grp.append(cbl);

            var cbi: JQuery = $('<input type="checkbox">');
            cbi.attr('id', item.ID);
            cbi.prependTo(cbl);
            if (!item.Enabled || !this.Enabled) cbi.attr('disabled', 'disabled');
            cbi.prop('checked', item.Checked);
            cbi.change((ev : JQueryEventObject) => {
                var id: string = $(ev.target).attr("id");
                var itm;
                if (id) itm = self.items.FindItemByID(id);
                if (itm) {
                    itm.Checked = $(ev.target).is(":checked");
                    if (self.onChanged != null) (V.tryAndCatch(() => { self.onChanged(itm); }));
                }
            })
            vCnt++;
        }
        var wd = ((vCnt / this.MaxItemsInColumn) + 1) * (this.MaxColumnWidth + this.GroupMarginLeft + this.GroupMarginRight);;
        content.css("width", wd + "px");

        super.create();
    }

    private _groupMarginLeft: number = 10;
    public get GroupMarginLeft(): number {
        return this._groupMarginLeft;
    }
    public set GroupMarginLeft(val: number) {
        if (val != this._groupMarginLeft) {
            this._groupMarginLeft = val;
            this.drawDelayed(true);
        }
    }

    private _groupMarginright: number = 10;
    public get GroupMarginRight(): number {
        return this._groupMarginright;
    }
    public set GroupMarginRight(val: number) {
        if (val != this._groupMarginright) {
            this._groupMarginright = val;
            this.drawDelayed(true);
        }
    }

    private _maxItemsInColumn: number = 5;
    public get MaxItemsInColumn(): number {
        return this._maxItemsInColumn;
    }
    public set MaxItemsInColumn(val: number) {
        if (val != this._maxItemsInColumn) {
            this._maxItemsInColumn = val;
            this.drawDelayed(true);
        }
    }

    private _columnWidth: number = 200;
    public get MaxColumnWidth(): number {
        return this._columnWidth;
    }
    public set MaxColumnWidth(val: number) {
        if (val != this._columnWidth) {
            this._columnWidth = val;
            this.drawDelayed(true);
        }
    }

    public applyFilter(filterCallback: (item: TVerticalCheckBoxItem) => boolean) {
        this.items.forEach((item) => {
            (<any>item)._filter = !filterCallback(item);
        })
        this.drawDelayed(true);
    }

    public clearFilter() {
        this.items.forEach((item) => {
            (<any>item)._filter = false
        })
        this.drawDelayed(true);
    }

    public draw(reCreate: boolean) {
        if (!this.parentInitialized()) return;

        if (reCreate || !this.initialized) {
            super.draw(reCreate);
        }
    }
}