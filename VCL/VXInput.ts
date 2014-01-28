/// <reference path="Scripts/jquery.d.ts" />
import VXC = require("VCL/VXComponent");
import VXB = require("VCL/VXInputBase");
import VXD = require("VCL/VXDataset");
import V = require("VCL/VCL");

export class TInput extends VXB.TInputBase {
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
        this.jEdit.on("change keyup paste", () => {
            this.Text = this.jEdit.val()
            if (this.onChanged != null) (V.tryAndCatch(() => { this.onChanged(self); }))
        });
    }

    public draw(reCreate: boolean) {
        if (!this.parentInitialized()) return;
        super.draw(reCreate);

        if (this.jEdit.val() != this.Text)
            this.jEdit.val(this.Text);
    }

}
export class TDBInput extends VXB.TInputBase {
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
        this.jEdit.on("change keyup paste", () => {
            this.DataValue = this.jEdit.val();
            if (this.onChanged != null) (V.tryAndCatch(() => { this.onChanged(self); }))
        });
        if (this.ImmidiatePost) this.jEdit.keyup(() => {
            this.DataValue = this.jEdit.val();
            if (this.onChanged != null) (V.tryAndCatch(() => { this.onChanged(self); }))
        });
    }

    public draw(reCreate: boolean) {
        if (!this.parentInitialized()) return;

        if (reCreate || !this.initialized) {
            this.validateEnabled();
            super.draw(reCreate);
        }

        if (this.jEdit.val() != this.DataValue)
            this.jEdit.val(this.DataValue);
    }

}

export class TInputNumeric extends VXB.TInputBase {
    constructor(aOwner: VXC.TComponent, renderTo?: string) {
        super(aOwner,renderTo);
        this.TextAlgnment = V.TextAlignment.Right;
    }

    private _value: number = 0;
    public get Value(): number {
        if (!this._value) return 0;
        return parseFloat((parseFloat(this._value.toString())).toFixed(this.Precision));
    }

    public set Value(val: number) {
        if (val != this._value) {
            this._value = val;
            this.draw(false);
        }
    }

    private _step: number = 1;
    public get Step(): number {
        return this._step;
    }
    public set Step(val: number) {
        if (val != this._step) {
            this._step = val;
        }
    }


    private _precision: number = 0;
    public get Precision(): number {
        return this._precision;
    }
    public set Precision(val: number) {
        if (val != this._precision) {
            this._precision = val;
            this.drawDelayed(false);
        }
    }

    public create() {
        super.create();
        this.jComponent.attr('data-trigger', "spinner").addClass('spinner');

        //draw the component
        var addon = $("<div>").addClass('add-on');
        var btdown = $("<a>").css('outline','none').attr('data-spin', "down").addClass('spin-down').attr('tabindex', '-1').attr('href', '#').append('<i class="icon-sort-down"/>');
        btdown.off('click').click(() => { this.Value -= this.Step; if (this.onChanged != null) (V.tryAndCatch(() => { this.onChanged(this); })); });

        var btUp = $("<a>").css('outline', 'none').attr('data-spin', "up").addClass('spin-up').attr('tabindex', '-1').attr('href', '#').append('<i class="icon-sort-up"/>');
        btUp.off('click').click(() => { this.Value += this.Step; if (this.onChanged != null) (V.tryAndCatch(() => { this.onChanged(this); })); });
        this.jEdit.css('clear', 'none');
        this.jEdit.change(() => {
            this._value = this.jEdit.val();
            this.Value = this.Value;
            if (this.onChanged != null) (V.tryAndCatch(() => { this.onChanged(this); }));
        });
        
        this.jEdit.keyup(function () {
            var val = this.value.replace(/[^0-9\.]/g, '');
            if (val != this.value) {
                this.value = this.value.replace(/[^0-9\.]/g, '');
            }
        });
        addon.css('float','right');
        addon.append(btUp);
        addon.append(btdown);
        (<any>this).jinternalSpan.before(addon);

    }

    public draw(reCreate: boolean) {
        if (!this.parentInitialized()) return;
        super.draw(reCreate);
        this.jEdit.val(this.Value);
    }
}



export class TTextArea extends VXB.TInputBase {

    private textarea: boolean = true;

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

    private _wrap: boolean = false;
    public get Wrap(): boolean {
        return this._wrap;
    }
    public set Wrap(val: boolean) {
        if (val != this._wrap) {
            this._wrap = val;
            this.drawDelayed(true);
        }
    }

    private _readonly :  boolean = false;
    public get Readonly(): boolean {
        return this._readonly;
    }
    public set Readonly(val: boolean) {
        if (val != this._readonly) {
            this._readonly = val;
            this.drawDelayed(true);
        }
    }


    private _rows: number = 2;
    public get Rows(): number {
        return this._rows;
    }
    public set Rows(val: number) {
        if (val != this._rows) {
            this._rows = val;
            this.drawDelayed(true);
        }
    }



    public create() {
        var self = this;
        super.create();
        this.jEdit.on("change keyup paste", () => {
            this.Text = this.jEdit.val()
            if (this.onChanged != null) (V.tryAndCatch(() => { this.onChanged(self); }))
        });
    }

    public draw(reCreate: boolean) {
        if (!this.parentInitialized()) return;
        super.draw(reCreate);

        if (this.jEdit.val() != this.Text)
            this.jEdit.val(this.Text);
    }

}




export class TDBTextArea extends VXB.TInputBase {
    private textarea: boolean = true;

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

    private _wrap: boolean = false;
    public get Wrap(): boolean {
        return this._wrap;
    }
    public set Wrap(val: boolean) {
        if (val != this._wrap) {
            this._wrap = val;
            this.drawDelayed(true);
        }
    }

    private _rows: number = 2;
    public get Rows(): number {
        return this._rows;
    }
    public set Rows(val: number) {
        if (val != this._rows) {
            this._rows = val;
            this.drawDelayed(true);
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
        this.jEdit.on("change keyup paste", () => {
            this.DataValue = this.jEdit.val();
            if (this.onChanged != null) (V.tryAndCatch(() => { this.onChanged(self); }))
        });
        if (this.ImmidiatePost) this.jEdit.keyup(() => {
            this.DataValue = this.jEdit.val();
            if (this.onChanged != null) (V.tryAndCatch(() => { this.onChanged(self); }))
        });
    }

    public draw(reCreate: boolean) {
        if (!this.parentInitialized()) return;

        if (reCreate || !this.initialized) {
            this.validateEnabled();
            super.draw(reCreate);
        }

        if (this.jEdit.val() != this.DataValue)
            this.jEdit.val(this.DataValue);
    }

}
