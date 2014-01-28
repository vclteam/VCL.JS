import VXC = require("VCL/VXComponent");
import VXU = require("VCL/VXUtils");
import V = require("VCL/VCL");

export class TCheckBox extends VXC.TComponent {
    constructor(aOwner: VXC.TComponent, renderTo?: string, text?: string) {
        super(aOwner, renderTo);
        this._text = text;
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

    public onClicked: (sender: TCheckBox) => void;
    public onChanged: (sender: TCheckBox) => void;

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
        var self = this;
        this.jComponent.empty(); //clear all subcomponents
        this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'label', this.FitToWidth, this.FitToHeight);
        this.jComponent.addClass('checkbox');

        this.jCheckbox = $('<input >');
        this.jCheckbox.attr('type', 'checkbox');
        this.jCheckbox.appendTo(this.jComponent);

        this.jText = $('<span>');
        this.jText.appendTo(this.jComponent);

        this.jCheckbox.off("click").click(() => { if (self.onClicked != null) (V.tryAndCatch(() => { self.onClicked(self); })); return true; })
        this.jCheckbox.change((event) => {
            self.Checked = this.jCheckbox.prop('checked');
            if (self.onChanged != null) (V.tryAndCatch(() => { self.onChanged(this); }));
        })
        if (!this.Enabled) this.jCheckbox.attr('disabled','disabled');
        super.create();
    }

    public draw(reCreate: boolean) {
        if (!this.parentInitialized()) return;
        super.draw(reCreate);

        this.jText.text(this.Text);
        this.jCheckbox.prop('checked', this.Checked);
    }

}