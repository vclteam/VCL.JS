import VXC = require("VCL/VXComponent");
import VXO = require("VCL/VXObject");
import VXU = require("VCL/VXUtils");
import VXM = require("VCL/VXMenu");

export class VXListbox extends VXC.VXComponent {

    public items = new VXListboxItemCollection <VXListboxItem>();
    public createItem(value: string, text?: string): VXListboxItem {
        var col: VXListboxItem = new VXListboxItem();
        this.items.add(col);

        col.Value = value;
        col.Text = text;
        return col;
    }


    public onChange: () => void;
    private jListBox: JQuery;
    public create() {
        this.jComponent.empty(); //clear all subcomponents
        this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'div', this.FitToWidth, this.FitToHeight);
        this.jComponent.addClass('control-group');

        this.jListBox = $("<select>");
        this.jListBox.css('padding-left', '0px');
        this.jListBox.css('padding-right', '0px');
        this.jListBox.css('margin-bottom', '0px');
        this.jListBox.css('width', '100%');
        this.jListBox.attr('multiple', 'multiple');
        this.items.forEach((item: VXListboxItem) => {
            var itm: JQuery = $('<option/>');
            if (!item.Enabled) itm.attr('disabled', "disabled");
            itm.val(item.ID);

            if (item.Text != null && item.Text.toString().length > 0) itm.text(item.Text);
            else itm.text(item.Value.toString());
            itm.appendTo(this.jListBox);
            return true;
        });
        this.jListBox.appendTo(this.jComponent);

        super.create();
    }

    public draw(reCreate: boolean) {
        if (!this.showed) return;
        if (reCreate || !this.initialized) this.create();
        this.initialized = true;

    }
}

export class VXListboxItem extends VXM.VXMenuItem {
    constructor() {
        super();
    }
    private _value: string;
    public get Value(): string {
        return this._value;
    }
    public set Value(val: string) {
        if (val != this._value) {
            this._value = val;
        }
    }

}

export class VXListboxItemCollection<T> extends VXO.VXCollection<VXListboxItem> {
    FindItemValue(value: string): VXListboxItem {
        var rc: VXListboxItem = null;
        this.forEach((item: VXListboxItem) => {
            if (item.Value == value) {
                rc = item;
                return false;
            }
            return true;
        });
        return rc;
    }
}
