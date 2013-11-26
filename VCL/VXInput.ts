/// <reference path="Scripts/jquery.d.ts" />
import VXC = require("VCL/VXComponent");
import VXB = require("VCL/VXInputBase");
import VXD = require("VCL/VXDataset");
import V = require("VCL/VCL");

export class VXInput extends VXB.VXInputBase {
    private _text: string;
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
        super.create();
        this.jEdit.on("change keyup paste",() => {
            this.Text = this.jEdit.val()
            if (this.onChanged != null) (V.tryAndCatch(() => { this.onChanged(self); }))
        });
    }

    public draw(reCreate: boolean) {
        if (!this.parentInitialized())return;super.draw(reCreate);
        if (reCreate || !this.initialized) this.create();
        this.initialized = true;

        this.jEdit.val(this.Text);
    }

}
export class VXDBInput extends VXB.VXInputBase {
    private _dataset: VXD.VXDataset;
    /*
    * Specifies the dataset that contains the field it represents.
    */
    public get Dataset(): VXD.VXDataset {
        return this._dataset;
    }

    public set Dataset(val: VXD.VXDataset) {
        if (val != this._dataset) {
            if (this._dataset) {
                (<any>this._dataset).removeEventListener(VXD.VXDataset.EVENT_DATA_CHANGED, this);
                (<any>this._dataset).removeEventListener(VXD.VXDataset.EVENT_SELECTION_CHANGED, this);
                (<any>this._dataset).removeEventListener(VXD.VXDataset.EVENT_STATE_CHANGED, this);
            }
            this._dataset = val;
            if (this._dataset) {
                (<any>this._dataset).registerEventListener(VXD.VXDataset.EVENT_DATA_CHANGED, this, () => { this.draw(false); });
                (<any>this._dataset).registerEventListener(VXD.VXDataset.EVENT_SELECTION_CHANGED, this, () => { this.draw(false); });
                (<any>this._dataset).registerEventListener(VXD.VXDataset.EVENT_STATE_CHANGED, this, () => { this.validateEnabled(); });
            }
        }
    }

    private validateEnabled() {
        if (this.Dataset == null) this.Enabled = false;
        else if (this.Dataset.Readonly) this.Enabled = false;
        else this.Enabled = this.Dataset.Active;
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

    private get DataValue(): any {
        if (this.Dataset == null || this.Dataset.Active == false || this.Dataset.RecordCount <= 0) return null;
        if (this.DataField == null || this.DataField.toString() == "") return null;

        return this.Dataset.getFieldValue(this._datafield);
    }
    private set DataValue(val: any) {
        if (this.Dataset == null || this.Dataset.Active == false) return;
        if (this.DataField == null || this.DataField.toString() == "") return;

        if (val != this._datafield) {
            this.Dataset.setFieldValue(this.DataField.toString(), val);
            this.draw(false);
        }
    }


    private _immidiatepost: boolean;
    public get ImmidiatePost(): boolean {
        return this._immidiatepost;
    }
    public set ImmidiatePost(val: boolean) {
        if (val != this._immidiatepost) {
            this._immidiatepost = val;
            this.draw(true);
        }
    }


    public create() {
        super.create();
        var self = this;
        this.jEdit.on("change keyup paste",() => {
            this.DataValue = this.jEdit.val();
            if (this.onChanged != null) (V.tryAndCatch(() => { this.onChanged(self); }))
        });
        if (this.ImmidiatePost) this.jEdit.keyup(() => {
            this.DataValue = this.jEdit.val();
            if (this.onChanged != null) (V.tryAndCatch(() => { this.onChanged(self); }))
        });
    }

    public draw(reCreate: boolean) {
        if (!this.parentInitialized())return;super.draw(reCreate);
        if (reCreate || !this.initialized) {
            this.validateEnabled();
            this.create();
        }
        this.initialized = true;
        this.jEdit.val(this.DataValue);
    }

}
