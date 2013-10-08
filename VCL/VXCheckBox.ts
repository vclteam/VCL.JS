import VXC = require("VCL/VXComponent");
import VXU = require("VCL/VXUtils");
import V = require("VCL/VCL");

export class VXCheckBox extends VXC.VXComponent {
    constructor(aOwner: VXC.VXComponent, renderTo?: string, text?: string) {
        super(aOwner, renderTo);
        this.Text = text;
    }

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

    public onClicked: () => void;
    public onChanged: () => void;

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

    private jCheckbox: JQuery;
    private jText: JQuery;
    public create() {
        this.jComponent.empty(); //clear all subcomponents
        this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'label', this.FitToWidth, this.FitToHeight);
        this.jComponent.addClass('checkbox');

        this.jCheckbox = $('<input >');
        this.jCheckbox.attr('type', 'checkbox');
        this.jCheckbox.appendTo(this.jComponent);

        this.jText = $('<span>');
        this.jText.appendTo(this.jComponent);

        this.jCheckbox.click(() => { if (this.onClicked != null) (V.tryAndCatch(() => { this.onClicked(); })); return false; })
        this.jCheckbox.change(() => {
            this.Checked = this.jCheckbox.prop('checked');
            if (this.onChanged != null) (V.tryAndCatch(() => { this.onChanged(); }))
        })
        if (!this.Enabled) this.jCheckbox.attr('disabled','disabled');
        super.create();
    }

    public draw(reCreate: boolean) {
        if (!this.showed) return;
        if (reCreate || !this.initialized) this.create();
        this.initialized = true;

        this.jText.text(this.Text);
        this.jCheckbox.prop('checked', this.Checked);
    }

}