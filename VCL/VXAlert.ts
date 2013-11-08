import VXC = require("VCL/VXComponent");
import VXU = require("VCL/VXUtils");
import V = require("VCL/VCL");

export class VXAlert extends VXC.VXComponent {
    constructor(aOwner: VXC.VXComponent, renderTo?: string, text?: string) {
        super(aOwner, renderTo);
        this.Text = text;
        this.FitToWidth = true;
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
            this.draw(false);
        }
    }

    private _alertstyle: V.AlertStyle = V.AlertStyle.Default;
    public get AlertStyle(): V.AlertStyle {
        return this._alertstyle;
    }
    public set AlertStyle(val: V.AlertStyle) {
        if (val != this._alertstyle) {
            this._alertstyle = val;
            this.draw(true);
        }
    }

    private _closebuttonvisible: boolean = true;
    public get CloseButtonVisible(): boolean {
        return this._closebuttonvisible;
    }
    public set CloseButtonVisible(val: boolean) {
        if (val != this._closebuttonvisible) {
            this._closebuttonvisible = val;
            this.draw(true);
        }
    }

    public onClicked: () => void;
    private jAlert: JQuery;
    private jBtn: JQuery;
    private jText: JQuery;

    public create() {
        this.jComponent.empty();
        this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'div', this.FitToWidth, this.FitToHeight);
        this.jComponent.addClass('control-group');

        this.jAlert = $('<div>');
        this.jAlert.addClass('alert alert-block');
        this.jAlert.appendTo(this.jComponent);

        switch (this.AlertStyle) {
            case V.AlertStyle.Default: break;
            case V.AlertStyle.Info: this.jAlert.addClass("alert-info"); break;
            case V.AlertStyle.Success: this.jAlert.addClass("alert-success"); break;
            case V.AlertStyle.Danger: this.jAlert.addClass("alert-danger"); break;
        }

        this.jBtn = $('<button />');
        if (this.CloseButtonVisible) {
            this.jBtn.addClass("close");
            this.jBtn.attr('type', 'button');
            this.jBtn.html('&times;');
            this.jBtn.click(() => {
                this.jComponent.hide();
                if (this.onClicked != null) (V.tryAndCatch(() => { this.onClicked(); }))
                return false;
            })

            this.jAlert.append(this.jBtn);
        }
        this.jText = $('<div>');
        this.jText.appendTo(this.jAlert);
        
        super.create();
    }

    public draw(reCreate: boolean) {
        if (!this.showed) return;
        if (reCreate || !this.initialized) this.create();
        this.initialized = true;
        this.jText.text(this.Text); 
    }
}

