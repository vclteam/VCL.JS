import VXC = require("VCL/VXComponent");
import VXD = require("VCL/VXDataset");

export class TTextBase extends VXC.TComponent {
    public onClicked: (sender: TTextBase) => void;

    private _rtl: boolean = false;
    public get Rtl(): boolean {
        return this._rtl;
    }
    public set Rtl(val: boolean) {
        if (val != this._rtl) {
            this._rtl = val;
            this.drawDelayed(true);
        }
    }

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
            this.drawDelayed(false);
        }
    }

    constructor(aOwner: VXC.TComponent, renderTo?: string, text?: string) {
        super(aOwner, renderTo);
        this.Text = text;
    }

    public draw(reCreate: boolean) {
        super.draw(reCreate);
    }

    public create() {
        super.create();
    }
}

export class TDBTextBase extends VXC.TComponent {
    public onClicked: () => void;

    private _rtl: boolean = false;
    public get Rtl(): boolean {
        return this._rtl;
    }
    public set Rtl(val: boolean) {
        if (val != this._rtl) {
            this._rtl = val;
            this.drawDelayed(true);
        }
    }

    constructor(aOwner: VXC.TComponent, renderTo?: string) {
        super(aOwner, renderTo);
    }

    private _dataset: VXD.TDataset;
    /*
    * Specifies the dataset that contains the field it represents.
    */
    public get Dataset(): VXD.TDataset {
        return this._dataset;
    }
    public set Dataset(val: VXD.TDataset) {
        if (val != this._dataset) {
            if (this._dataset != null) {
                (<any>this._dataset).removeEventListener(VXD.TDataset.EVENT_DATA_CHANGED, this);
                (<any>this._dataset).removeEventListener(VXD.TDataset.EVENT_SELECTION_CHANGED, this);
                (<any>this._dataset).removeEventListener(VXD.TDataset.EVENT_STATE_CHANGED, this);
            }
            this._dataset = val;
            if (this._dataset != null) {
                (<any>this._dataset).registerEventListener(VXD.TDataset.EVENT_DATA_CHANGED, this, () => { this.draw(false); });
                (<any>this._dataset).registerEventListener(VXD.TDataset.EVENT_SELECTION_CHANGED, this, () => { this.draw(false); });
                (<any>this._dataset).registerEventListener(VXD.TDataset.EVENT_STATE_CHANGED, this, () => { this.draw(false); });
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
            this.draw(false);
        }
    }
}
