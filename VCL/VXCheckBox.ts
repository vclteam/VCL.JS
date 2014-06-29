import VXC = require("VCL/VXComponent");
import VXU = require("VCL/VXUtils");
import V = require("VCL/VCL");
import VXD = require("VCL/VXDataset");

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
        if (val == 0 || val == false ||!val) return false;
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