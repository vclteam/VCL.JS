/// <reference path="Scripts/bootstrap.d.ts" />
import V = require("VCL/VCL");
import VXC = require("VCL/VXContainer");
import VXDS = require("VCL/VXServer");
import VXD = require("VCL/VXDataset");

export class TModal extends VXC.TContainer {
    public onCreate() { }

    public onClosed: () => void;
    public onCancel: () => void;
    private jBody: JQuery;
    private effect: V.ModalEffects;
    private duration: number;

    private _maxheight: number = 400;
    public get MaxHeight(): number {
        return this._maxheight;
    }
    public set MaxHeight(val: number) {
        if (val != this._maxheight) {
            this._maxheight = val;
            this.draw(false);
        }
    }


    constructor(effect?: V.ModalEffects, duration?: number) {
        super(null, null);
        if (!(<any>this).__HTML__) V.Application.raiseException("Error in " + this.getClassName() + " - You can't instantiate TPage directly, use V.Application.loadPage ,V.Application.createPage");

        this.jBody = this.jComponent.clone(true);
        this.jComponent.empty();
        this.jComponent.append(this.jBody);

        if (effect != null) {
            this.effect = effect;
            this.duration = duration;
        }
    }

    public showModal() {
        this.jComponent.addClass('modal');
        super.draw(true);
        switch (this.effect) {
            case V.ModalEffects.FadeIn: {
                this.jComponent.fadeIn(this.duration);
                break;
            }
            case V.ModalEffects.FadeOut: {
                this.jComponent.fadeOut(this.duration);
                break;
            }
            case V.ModalEffects.SlideDown: {
                this.jComponent.slideDown(this.duration);
                break;
            }
            case V.ModalEffects.SlideUp: {
                this.jComponent.slideUp(this.duration);
                break;
            }
        }
        this.jComponent.modal({
            keyboard: false, maxHeight: this.MaxHeight, backdrop: 'static', width: this.Width,
            attentionAnimation: null, resize: true
        });
        if (this.onShow != null) (V.tryAndCatch(() => { this.onShow(); }))
    }

    public close() {
        this.jComponent.modal('hide');
        if (this.onClosed != null) { (V.tryAndCatch(() => { this.onClosed(); })) }
    }
    public cancel() {
        this.jComponent.modal('hide');
        if (this.onCancel != null) { (V.tryAndCatch(() => { this.onCancel(); })) }
    }


    public get isPage(): boolean {
        return true;
    }
}



export class TModalBuilder extends TModal {
    private colCount = 0;
    private body: V.TContainer;
    private header: V.TText;
    private currentRow: V.TBootstrapRowFluid;
    constructor(effect?: V.ModalEffects, duration?: number) {
        super(effect, duration);
        this.body = new V.TContainer(this, "__boddy__");
        this.header = new V.TText(this, "captionText");
        var btn: V.TButton = new V.TButton(this, "okBtn", this.OKBtnText);
        btn.ButtonStyle = V.ButtonStyle.Primary;
        btn.onClicked = () => {
            this.close();
        }

        if (this.ShowCancelBtn) {
            var btn: V.TButton = new V.TButton(this, "closeBtn", this.CancelBtnText);
            btn.onClicked = () => {
                this.cancel();
            }
         }

        this.header.TextStyle = V.TextStyle.h3;
        this.createRow();
    }

    public createInput(text? : string,labelText?: string, sizeInSpan: number = 2): V.TInput{
        this.colCount += sizeInSpan;
        if (this.colCount > 12) {
            this.colCount = 0;
            this.createRow();
        }
        var inp: V.TInput = new V.TInput(this.currentRow, null);
        inp.Text = text;
        inp.LabelText = labelText;
        inp.jComponent.addClass("span" + sizeInSpan);
        return inp;
    }

    public createTextArea(text?: string, labelText?: string, sizeInSpan: number = 2): V.TTextArea {
        this.colCount += sizeInSpan;
        if (this.colCount > 12) {
            this.colCount = 0;
            this.createRow();
        }
        var inp: V.TTextArea = new V.TTextArea(this.currentRow, null);
        inp.Text = text;
        inp.LabelText = labelText;
        inp.jComponent.addClass("span" + sizeInSpan);
        return inp;
    }

    public createInputTime(time?: Date, labelText?: string, sizeInSpan: number = 2): V.TInputTime {
        this.colCount += sizeInSpan;
        if (this.colCount > 12) {
            this.colCount = 0;
            this.createRow();
        }
        var inp: V.TInputTime = new V.TInputTime(this.currentRow, null);
        inp.Time = time;
        inp.LabelText = labelText;
        inp.jComponent.addClass("span" + sizeInSpan);
        return inp;
    }


    public createInputDate(date?: Date, labelText?: string, sizeInSpan: number = 2): V.TInputDate {
        this.colCount += sizeInSpan;
        if (this.colCount > 12) {
            this.colCount = 0;
            this.createRow();
        }
        var inp: V.TInputDate = new V.TInputDate(this.currentRow, null);
        inp.Date = date;
        inp.LabelText = labelText;
        inp.jComponent.addClass("span" + sizeInSpan);
        return inp;
    }

    public createCheckbox(checked?: boolean, labelText?: string, sizeInSpan: number = 2): V.TCheckBox{
        this.colCount += sizeInSpan;
        if (this.colCount > 12) {
            this.colCount = 0;
            this.createRow();
        }
        var inp: V.TCheckBox = new V.TCheckBox(this.currentRow, null, labelText);
        inp.Checked = checked;
        inp.jComponent.addClass("span" + sizeInSpan);
        return inp;
    }

    public createRow() {
        this.currentRow = this.body.createBootstrapRowFluid();
    }

    public getContanierHTML() {
        return '<div class="modal-header"><div id="captionText" /></div><div id="__boddy__" class="modal-body"></div><div class="modal-footer"><div id="closeBtn" /><div id="okBtn" /></div>';
    }

    /*
    * Text specify the modal header text.
    */
    public get HeaderText(): string {
        return this.header.Text;
    }
    public set HeaderText(val: string) {
        this.header.Text = val;
    }


    private _okbtntext: string = "OK";
    public get OKBtnText(): string {
        return this._okbtntext;
    }
    public set OKBtnText(val: string) {
        this._okbtntext = val;
    }


    private _cancelbtntext :string = "Cancel";
    public get CancelBtnText(): string {
        return this._cancelbtntext;
    }
    public set CancelBtnText(val: string) {
        this._cancelbtntext = val;
    }


    private _showcancelbtn :boolean = true;
    public get ShowCancelBtn(): boolean {
        return this._showcancelbtn;
    }
    public set ShowCancelBtn(val: boolean) {
        this._showcancelbtn = val;
    }

}