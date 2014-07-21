/// <reference path="Scripts/jquery.d.ts" />
import VXC = require("VCL/VXComponent");
import VXB = require("VCL/VXInputBase");
import VXD = require("VCL/VXDataset");
import VXM = require("VCL/VXMenu");
import V = require("VCL/VCL");
import VXO = require("VCL/VXObject");

export class TInput extends VXB.TInputBase {
    private _text: string;
    public get Text(): string {
        return this._text;
    }
    public set Text(val: string) {
        if (val != this._text) {
            this._text = val;
            this.draw(false);
            //if (this.onChanged) this.onChanged(this);
        }
    }

    public create() {
        var self = this;
        super.create();
        this.jEdit.on("propertychange input paste", () => {
            this.Text = this.jEdit.val()
            if (this.onChanged != null) (V.tryAndCatch(() => { this.onChanged(self); }))
        });
        this.jEdit.on("keyup", () => {
            this.Text = this.jEdit.val()
            if (this.onKeyUp != null) (V.tryAndCatch(() => { this.onKeyUp(event.keyCode); }))
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
                (<any>this._dataset).registerEventListener(VXD.TDataset.EVENT_STATE_CHANGED, this, () => { this.draw(true);});
            }
        }
    }

    private isEditable() : boolean {
        if (this.Dataset == null || this.Dataset.Readonly) return false;
        return this.Dataset.Active;
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

        this.Dataset.setFieldValue(this.DataField.toString(), val);
        this.draw(false);
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
        this.jEdit.on("change paste", () => {
            this.DataValue = this.jEdit.val();
            if (this.onChanged != null) (V.tryAndCatch(() => { this.onChanged(self); }))
        });
        this.jEdit.on("keyup", () => {
            this.DataValue = this.jEdit.val();
            if (this.onKeyUp != null) (V.tryAndCatch(() => { this.onKeyUp(event.keyCode); }))
        });


        if (this.ImmidiatePost) this.jEdit.keyup(() => {
            this.DataValue = this.jEdit.val();
            if (this.onChanged != null) (V.tryAndCatch(() => { this.onChanged(self); }))
        });
    }

    public draw(reCreate: boolean) {
        if (!this.parentInitialized()) return;

        if (reCreate || !this.initialized) {
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
            if (val > this.MaxValue) val = this.MaxValue;
            if (val < this.MinValue) val = this.MinValue;
            this._value = val;
            this.draw(false);
        }
    }

    private _maxvalue: number = 999999999999;
    public get MaxValue(): number {
        return this._maxvalue;
    }
    public set MaxValue(val: number) {
        if (val != this._maxvalue) {
            this._maxvalue = val;
            this.drawDelayed(false);
        }
    }

    private _minvalue: number = -999999999999;
    public get MinValue(): number {
        return this._minvalue;
    }
    public set MinValue(val: number) {
        if (val != this._minvalue) {
            this._minvalue = val;
            this.drawDelayed(false);
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
        var self = this;
        this.jComponent.attr('data-trigger', "spinner").addClass('spinner');

        //draw the component
        var addon = $("<div>").addClass('add-on');
        var btdown = $("<a>").css('outline','none').attr('data-spin', "down").addClass('spin-down').attr('tabindex', '-1').append('<i class="icon-sort-down"/>');
        btdown.off('click').click(() => { if (!this.Enabled) return;this.Value -= this.Step; if (this.onChanged != null) (V.tryAndCatch(() => { this.onChanged(this); })); });

        var btUp = $("<a>").css('outline', 'none').attr('data-spin', "up").addClass('spin-up').attr('tabindex', '-1').append('<i class="icon-sort-up"/>');
        btUp.off('click').click(() => { if (!this.Enabled) return; this.Value += this.Step; if (this.onChanged != null) (V.tryAndCatch(() => { this.onChanged(this); })); });
        this.jEdit.css('clear', 'none');
        this.jEdit.change(() => {
            var _value = this.jEdit.val();
            self.Value = _value;
            if (self.Value != _value) this.jEdit.val(self.Value.toString());
            if (this.onChanged != null) (V.tryAndCatch(() => { this.onChanged(this); }));
        });
        
        this.jEdit.keyup(function () {
            var val = this.value.replace(/[^0-9\.-]/g, '');
            if (val != this.value) {
                this.value = this.value.replace(/[^0-9\.-]/g, '');
                if (this.onChanged != null) (V.tryAndCatch(() => { this.onChanged(this); }));
            }
        });
        addon.css('float', 'right');
        this.jComponent.addClass('input-append');
        addon.append(btUp);
        addon.append(btdown);
        (<any>this).jinternalSpan.before(addon);

    }

    public draw(reCreate: boolean) {
        if (!this.parentInitialized()) return;
        super.draw(reCreate);
        this.jEdit.val(this.Value.toString());
    }
}



export class TDBInputNumeric extends VXB.TInputBase {
    constructor(aOwner: VXC.TComponent, renderTo?: string) {
        super(aOwner, renderTo);
        this.TextAlgnment = V.TextAlignment.Right;
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
            if (this._dataset) {
                (<any>this._dataset).removeEventListener(VXD.TDataset.EVENT_DATA_CHANGED, this);
                (<any>this._dataset).removeEventListener(VXD.TDataset.EVENT_SELECTION_CHANGED, this);
                (<any>this._dataset).removeEventListener(VXD.TDataset.EVENT_STATE_CHANGED, this);
            }
            this._dataset = val;
            if (this._dataset) {
                (<any>this._dataset).registerEventListener(VXD.TDataset.EVENT_DATA_CHANGED, this, () => { this.draw(false); });
                (<any>this._dataset).registerEventListener(VXD.TDataset.EVENT_SELECTION_CHANGED, this, () => { this.draw(false); });
                (<any>this._dataset).registerEventListener(VXD.TDataset.EVENT_STATE_CHANGED, this, () => { this.draw(true); });
            }
        }
    }

    private isEditable(): boolean {
        if (this.Dataset == null || this.Dataset.Readonly) return false;
        return this.Dataset.Active;
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

    private get DataValue(): number {
        if (this.Dataset == null || this.Dataset.Active == false || this.Dataset.RecordCount <= 0) return null;
        if (this.DataField == null || this.DataField.toString() == "") return null;


        var rc: number = parseFloat(this.Dataset.getFieldValue(this._datafield));
        if (rc) return rc;
        else return 0;
    }
    private set DataValue(val: number) {
        var val1 : number = parseFloat(val.toString());
        if (this.Dataset == null || this.Dataset.Active == false) return;
        if (this.DataField == null || this.DataField.toString() == "") return;

        this.Dataset.setFieldValue(this.DataField.toString(), val1);
        this.draw(false);
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
        var btdown = $("<a>").css('outline', 'none').attr('data-spin', "down").addClass('spin-down').attr('tabindex', '-1').append('<i class="icon-sort-down"/>');
        btdown.off('click').click(() => { this.DataValue -= this.Step; if (this.onChanged != null) (V.tryAndCatch(() => { this.onChanged(this); })); });

        var btUp = $("<a>").css('outline', 'none').attr('data-spin', "up").addClass('spin-up').attr('tabindex', '-1').append('<i class="icon-sort-up"/>');
        btUp.off('click').click(() => { this.DataValue += this.Step; if (this.onChanged != null) (V.tryAndCatch(() => { this.onChanged(this); })); });
        this.jEdit.css('clear', 'none');
        this.jEdit.change(() => {
            this.DataValue = this.jEdit.val();
            if (this.onChanged != null) (V.tryAndCatch(() => { this.onChanged(this); }));
        });

        this.jEdit.keyup(function () {
            var val = this.value.replace(/[^0-9\.]/g, '');
            if (val != this.value) {
                this.value = this.value.replace(/[^0-9\.]/g, '');
                if (this.onChanged != null) (V.tryAndCatch(() => { this.onChanged(this); }));
            }
        });
        addon.css('float', 'right');
        addon.append(btUp);
        addon.append(btdown);
        (<any>this).jinternalSpan.before(addon);
    }

    public draw(reCreate: boolean) {
        if (!this.parentInitialized()) return;
        super.draw(reCreate);
        this.jEdit.val(this.DataValue.toString());
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
        this.jEdit.on("change paste", () => {
            this.Text = this.jEdit.val()
            if (this.onChanged != null) (V.tryAndCatch(() => { this.onChanged(self); }))
        });

        this.jEdit.on("keyup", () => {
            this.Text = this.jEdit.val()
            if (this.onKeyUp != null) (V.tryAndCatch(() => { this.onKeyUp(event.keyCode); }))
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
        this.jEdit.on("change paste", () => {
            this.DataValue = this.jEdit.val();
            if (this.onChanged != null) (V.tryAndCatch(() => { this.onChanged(self); }))
        });

        this.jEdit.on("keyup", () => {
            this.DataValue = this.jEdit.val();
            if (this.onKeyUp != null) (V.tryAndCatch(() => { this.onKeyUp(event.keyCode); }))
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


export class TTypeaHeadItem extends VXM.TMenuItem {

    private _foreColorValue: string;
    public get ForeColorValue(): string {
        return this._foreColorValue;
    }
    public set ForeColorValue(val: string) {
        if (val != this._foreColorValue) {
            if (val && val.trim().length > 0) {
                var isOk = /^#[0-9A-F]{6}$/i.test(val);
                if (!isOk) {
                    V.Application.raiseException("'" + val + "' is not valid hex color string")
                } else {
                    this._foreColorValue = val;
                }
            } else {
                this._foreColorValue = "";
            }
            if (this.OwnerCollection != null)
                this.OwnerCollection.refresh();
        }
    }
    private _backgroundColorValue: string;
    public get BackgroundColorValue(): string {
        return this._backgroundColorValue;
    }
    public set BackgroundColorValue(val: string) {
        if (val != this._backgroundColorValue) {
            if (val && val.trim().length > 0) {
                var isOk = /^#[0-9A-F]{6}$/i.test(val);
                if (!isOk) {
                    V.Application.raiseException("'" + val + "' is not valid hex color string")
                } else {
                    this._backgroundColorValue = val;
                }
            } else {
                this._backgroundColorValue = "";
            }
            if (this.OwnerCollection != null)
                this.OwnerCollection.refresh();
        }
    }
}


export class TInputTypeaHead extends VXB.TInputBase {
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
    private _highlightMatchedText: boolean = true;
    public get HighlightMatchedText(): boolean {
        return this._highlightMatchedText;
    }
    public set HighlightMatchedText(val: boolean) {
        if (val != this._highlightMatchedText) {
            this._highlightMatchedText = val;
            this.draw(true);
        }
    }
    public Items: VXO.TCollection<TTypeaHeadItem> = new VXO.TCollection<TTypeaHeadItem>();
    public createItem(text: string, foreColorValue?: string, backgroundColorValue?: string) {
        var item: TTypeaHeadItem = new TTypeaHeadItem();
        item.ForeColorValue = foreColorValue;
        item.BackgroundColorValue = backgroundColorValue;
        item.Text = text;

        this.Items.add(item);
    }

    public create() {
        var self = this;
        super.create();

        if (this.Items.length() > 0) {
            var strArr: Array<String> = new Array<String>();
            this.Items.forEach((item: TTypeaHeadItem) => {
                if (item && item.Text.trim().length > 0) {
                    strArr.push(item.Text.trim());
                }
            });
            //Add the final string elements and the data-source attribute
            var x: any = {
                minLength: 1,
                source: (query, process) => {
                    return strArr;
                },
                highlighter: function (item) {
                    /*if (allLink != undefined) {
                        if (item == allLink.text) return '<strong>' + item + '</strong>';
                    }*/
                    var query = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
                    return item.replace(new RegExp('(' + query + ')', 'ig'),
                        function ($1, match) {
                                    return '<strong>' + match + '</strong>'
                        });
                },
                updater: function (item) {
                    return item;
                }
            }
            if (strArr.length > 0) {
                this.jEdit.typeahead(x).data('typeahead').render = function (items) {
                    var that = this;
                    items = $(items).map(function (i, item) {
                        i = $(that.options.item).attr('data-value', <any>item);
                        var xhtml = i.find('a').html(that.highlighter(item));
                        xhtml = self.addColorToItem(xhtml, item);
                        return i[0];
                    })

                    items.first().addClass('active')
                    this.$menu.html(items)
                    return this;
                };
            }
        }
        this.jEdit.on("change keyup paste", () => {
            this.Text = this.jEdit.val()
            if (this.onChanged != null) (V.tryAndCatch(() => { this.onChanged(self); }))
        });
    }

    private addColorToItem(xhtml: any, item: any): any {
        this.Items.forEach((itm: TTypeaHeadItem) => {
            if (itm && itm.Text == item) {
                if (itm.ForeColorValue && itm.ForeColorValue.trim().length > 0) {
                    xhtml = xhtml.css("color", itm.ForeColorValue);
                }
                if (itm.BackgroundColorValue && itm.BackgroundColorValue.trim().length > 0) {
                    xhtml = xhtml.css("background-color", itm.BackgroundColorValue);
                }
            }
        });
        return xhtml;
    }

    public draw(reCreate: boolean) {
        if (!this.parentInitialized()) return;
        super.draw(reCreate);

        if (this.jEdit.val() != this.Text)
            this.jEdit.val(this.Text);
    }
}