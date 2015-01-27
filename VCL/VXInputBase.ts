import VXC = require("./VXComponent");
import V = require("./VCL");
import VXU = require("./VXUtils");

export class TLabeledBase extends VXC.TComponent {
    private _labetextcolor: string;
    public get LabelTextColor(): string {
        return this._labetextcolor;
    }
    public set LabelTextColor(val: string) {
        var isOk = /^#[0-9A-F]{6}$/i.test(val);
        if (!isOk) V.Application.raiseException("'" + val + "' is not valid hex color string");
        else {

            if (val != this._labetextcolor) {
                this._labetextcolor = val;
                this.drawDelayed(true);
            }
        }
    }

    private _labelVisible: boolean = false;
    public get LabelVisible(): boolean {
        return this._labelVisible;
    }
    public set LabelVisible(val: boolean) {
        val = V.convertaAnyToBoolean(val);
        if (val != this._labelVisible) {
            this._labelVisible = val;
            this.drawDelayed(true);
        }
    }

    private _labeltext: string = "";
    public get LabelText(): string {
        return this._labeltext;
    }
    public set LabelText(val: string) {
        if (val != this._labeltext) {
            this._labeltext = val;
            this.LabelVisible = true;
            this.drawDelayed(true);
        }
    }
    private _labelposition: V.LabelPosition = V.Application.LocaleSettings.LabelPosition;
    public get LabelPosition(): V.LabelPosition {
        return this._labelposition;
    }
    public set LabelPosition(val: V.LabelPosition) {
        if (val != this._labelposition) {
            this._labelposition = val;
            this.drawDelayed(true);
        }
    }
    public jLabel: JQuery;
    public jEdit: JQuery;

    public create() {
        super.create();
        if (this.LabelVisible) {
            this.jLabel = $('<label/>');
            this.jLabel.addClass('control-label');

            if (this.jEdit) this.jLabel.attr('for', this.jEdit.attr('id'));
            this.jLabel.text(this.LocalizeText(this.LabelText));
            if (this.LabelTextColor) this.jComponent.css('color', this.LabelTextColor);
            if (this.LabelPosition == V.LabelPosition.TopLeft) {
                this.jComponent.prepend(this.jLabel)
            } else if (this.LabelPosition == V.LabelPosition.TopCenter) {
                this.jLabel.addClass('text-center');
                this.jComponent.prepend(this.jLabel)
            } else if (this.LabelPosition == V.LabelPosition.TopRight) {
                this.jLabel.addClass('text-right');
                this.jComponent.prepend(this.jLabel)
            } else if (this.LabelPosition == V.LabelPosition.BottomLeft) {
                this.jComponent.append(this.jLabel)
            } else if (this.LabelPosition == V.LabelPosition.Right) {
                this.jLabel.addClass('pull-right');
                this.jLabel.css('padding-top', '5px');
                this.jLabel.css('padding-left', '5px');
                this.jComponent.prepend(this.jLabel)
            } else if (this.LabelPosition == V.LabelPosition.Left) {
                this.jLabel.addClass('pull-left');
                this.jLabel.css('padding-top', '5px');
                this.jLabel.css('padding-right', '5px');
                this.jComponent.prepend(this.jLabel)
            } else if (this.LabelPosition == V.LabelPosition.BottomCenter) {
                this.jLabel.addClass('text-center');
                this.jComponent.append(this.jLabel);
            } else if (this.LabelPosition == V.LabelPosition.BottomRight) {
                this.jLabel.addClass('text-right');
                this.jComponent.append(this.jLabel);
            }
        }
    }

}

export class TEditorBase extends TLabeledBase implements V.iTranslatable{

    private _required: boolean = false;
    public get Required(): boolean {
        return this._required;
    }
    public set Required(val: boolean) {
        val = V.convertaAnyToBoolean(val);
        if (val != this._required) {
            this._required = val;
            this.drawDelayed(true);
        }
    }

    public onValidate: (sender: VXC.TComponent) => string;

    private _minlength: number;
    public get MinLength(): number {
        return this._minlength;
    }
    public set MinLength(val: number) {
        if (val != this._minlength) {
            this._minlength = Math.floor(val);
            if (this._minlength < 0) this._minlength = 0;
            this.drawDelayed(true);
        }
    }

    private _localizable: boolean = false;
    /**
    * In order to localize application each page or component of the application has to have Localizable property set true.
    */
    public get Localizable(): boolean {
        return this._localizable;
    }
    public set Localizable(val: boolean) {
        val = V.convertaAnyToBoolean(val);
        if (val != this._localizable) {
            this._localizable = val;
            this.drawDelayed(true);
        }
    }

    public textLength(): number {
        var c: String = this.jEdit.val();
        if (!c) return 0;
        if (c) c = c.trim();
        return c.length;
    }


    public isEmpty(): boolean {
        var c: String = this.jEdit.val();
        if (!c) return true;
        if (c) c = c.trim();
        return c == "";
    }

    public ShowErrorMessage(message : string): void {
        this._errortext = message
        this.HelpVisible = true;
        this.addClass("error");
        this.drawDelayed(true);
    }

    public HideErrorMessage(): void {
        this.removeClass("error");
        this._errortext = null;
        this.drawDelayed(true);
    }

    private _rtl: boolean = false;
    public get Rtl(): boolean {
        return this._rtl;
    }
    public set Rtl(val: boolean) {
        val = V.convertaAnyToBoolean(val);
        if (val != this._rtl) {
            this._rtl = val;
            this.drawDelayed(true);
        }
    }

    private _tabindex: number;
    public get TabIndex(): number {
        return this._tabindex;
    }
    public set TabIndex(val: number) {
        if (val != this._tabindex) {
            this._tabindex = val;
            this.drawDelayed(true);
        }
    }


    private _helpVisible: boolean = false;
    public get HelpVisible(): boolean {
        return this._helpVisible;
    }
    public set HelpVisible(val: boolean) {
        val = V.convertaAnyToBoolean(val);
        if (val != this._helpVisible) {
            this._helpVisible = val;
            this.drawDelayed(true);
        }
    }

    private _errortext: string = "";
    private _helptext: string = "";
    public get HelpText(): string {
        return this._helptext;
    }
    public set HelpText(val: string) {
        if (val != this._helptext) {
            this._helptext = val;
            this.HelpVisible = true;
            this.drawDelayed(true);
        }
    }

    public setFocus() {
        if (this.jEdit) this.jEdit.focus();
    }

    public onKeyUp: (keyCode: string) => void; 
    public onKeyDown: (keyCode: string) => boolean; 
    public onChanged: (sender: TEditorBase) => void;


    public jHelpLabel: JQuery;
    public create() {
        if (this.HelpVisible || this._errortext) {
            this.jHelpLabel = $('<small/>');
            this.jHelpLabel.addClass('help-inline text-center');
            this.jHelpLabel.css('font-size', '12px');
            this.jHelpLabel.css('width', '100%');
            this.jComponent.append(this.jHelpLabel);
            this.jHelpLabel.text(this._errortext? this._errortext:this.HelpText);
        }

        super.create();
    }
}

export class TInputBase extends TEditorBase {

    private _inputStyle: V.InputStyle = V.InputStyle.Default;
    public get InputStyle(): V.InputStyle {
        return this._inputStyle;
    }
    public set InputStyle(val: V.InputStyle) {
        if (val != this._inputStyle) {
            this._inputStyle = val;
            this.drawDelayed(true);
        }
    }

    private _borderradius: number = null;
    public get BorderRadius(): number {
        return this._borderradius;
    }
    public set BorderRadius(val: number) {
        if (val != this._borderradius) {
            this._borderradius = val;
            this.drawDelayed(true);
        }
    }

    private _maxlength: number;
    public get MaxLength(): number {
        return this._maxlength;
    }
    public set MaxLength(val: number) {
        if (val != this._maxlength) {
            this._maxlength = Math.floor(val);
            if (this._maxlength < 0) this._maxlength = 0;
            this.drawDelayed(true);
        }
    }

    private _displayastext: boolean = false;
    public get DisplayAsText(): boolean {
        return this._displayastext;
    }
    public set DisplayAsText(val: boolean) {
        val = V.convertaAnyToBoolean(val);
        if (val != this._displayastext) {
            this._displayastext = val;
            this.drawDelayed(true);
        }
    }


    private _nulltext: string = "\xa0";
    /**
    * Specified text is displayed when the value of the editor is null and the editor is not focused. 
    * The prompt text disappears when the editor receives focus
    */
    public get NullText(): string {
        return this._nulltext;
    }
    public set NullText(val: string) {
        if (val != this._nulltext) {
            this._nulltext = val;
            this.drawDelayed(true);
        }
    }


    private _labelOverflow: boolean = false;
    public get LabelOverflow(): boolean {
        return this._labelOverflow;
    }
    public set LabelOverflow(val: boolean) {
        val = V.convertaAnyToBoolean(val);
        if (val != this._labelOverflow) {
            this._labelOverflow = val;
            this.drawDelayed(true);
        }
    }

    public canEdit() {
        return true;
    }

    /**
    * Occurs when the user hit the button component.
    */
    public onButtonClicked: () => void;

    public jBtn: JQuery;
    private jImage: JQuery;
    private jbtnText: JQuery;
    private jinternalSpan: JQuery;

    public create() {
        this.jComponent.empty();
        this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'div', this.FitToWidth, this.FitToHeight);
        this.jComponent.addClass('control-group');
        if (this.InputStyle == V.InputStyle.Error) this.jComponent.addClass("error");
        else if (this.InputStyle == V.InputStyle.Warning) this.jComponent.addClass("warning");
        if (this.InputStyle == V.InputStyle.Success) this.jComponent.addClass("success");
        if (this.InputStyle == V.InputStyle.Info) this.jComponent.addClass("info");
        if(!this.LabelOverflow) this.jComponent.css('overflow', 'hidden');

        this.jinternalSpan = $("<span>").css('display', 'block').css('overflow', 'hidden');
        if (!this._displayastext) this.jinternalSpan.css('padding-right', '15px')
        if (this._displayastext) {
            if ((<any>this).TextStyle == V.TextStyle.h1) this.jEdit = $('<h1/>').addClass('Label-Input');
            else if ((<any>this).TextStyle == V.TextStyle.h2) this.jEdit = $('<h2/>').addClass('Label-Input');
            else if ((<any>this).TextStyle == V.TextStyle.h3) this.jEdit = $('<h3/>').addClass('Label-Input');
            else if ((<any>this).TextStyle == V.TextStyle.h4) this.jEdit = $('<h4/>').addClass('Label-Input');
            else if ((<any>this).TextStyle == V.TextStyle.h5) this.jEdit = $('<h5/>').addClass('Label-Input');
            else if ((<any>this).TextStyle == V.TextStyle.h6) this.jEdit = $('<h6/>').addClass('Label-Input');
            else if ((<any>this).TextStyle == V.TextStyle.strong) this.jEdit = $('<strong/>').addClass('Label-Input');
            else if ((<any>this).TextStyle == V.TextStyle.lead) {
                this.jEdit = $('<label/>').addClass('Label-Input');
                this.jEdit.addClass('lead');
            } else if ((<any>this).TextStyle == V.TextStyle.small) this.jEdit = $('<small/>').addClass('Label-Input');
            else this.jEdit = $('<label/>').addClass('Label-Input');
            
        } else if ((<any>this).textarea) {
            this.jEdit = $('<textarea/>').attr('rows', (<V.TTextArea>this).Rows).css('resize', 'none');
            this.jEdit.attr("type", 'text');
            if ((<V.TTextArea>this).Wrap) this.jEdit.attr('Wrap', 'Wrap');
        } else {
            this.jEdit = $('<input/>').css('margin-bottom', '0px');
            this.jEdit.attr("type", 'text');
            if (this.TabIndex) this.jEdit.attr('tabindex', this.TabIndex);
        }

        if (this.BorderRadius) this.jEdit.css('border-radius', this.BorderRadius + 'px').css('-webkit-border-radius', this.BorderRadius + 'px');

        this.jEdit.attr('id', V.Application.genGUID()).css('width', '100%');
        if ((<any>this)._readonly) this.jEdit.attr("readonly", "readonly");

        this.jImage = $('<i/>');
        this.jbtnText = $('<span/>');

        if (!this.Enabled || ((<any>this).isEditable && !(<any>this).isEditable())) this.jEdit.attr("disabled", "disabled");
        if (this.Password) this.jEdit.attr("type", "Password");
        if (this.TextAlignment == V.TextAlignment.Left) this.jEdit.css('text-align', 'left');
        if (this.TextAlignment == V.TextAlignment.Right) this.jEdit.css('text-align', 'right');
        if (this.TextAlignment == V.TextAlignment.Center) this.jEdit.css('text-align', 'center');
        if (this.MaxLength > 0) this.jEdit.attr("maxlength", this.MaxLength);
        if (this.Placeholder != null && !this._displayastext) this.jEdit.attr("placeholder", this.Placeholder);
        if (this.Rtl == true) this.jEdit.attr("dir", "RTL");
        this.jinternalSpan.append(this.jEdit);
       
        this.jComponent.addClass('input-append');
        if (this.ButtonVisible && !this._displayastext) {
            this.jBtn = $('<button/>').attr('tab-index','-1').css('outline','none');
            this.jBtn.addClass('btn');
            this.jBtn.attr('type', "button").css('float', 'right');
            switch (this.ButtonStyle) {
                case V.ButtonStyle.Default: break;
                case V.ButtonStyle.Primary: this.jBtn.addClass("btn-primary"); break;
                case V.ButtonStyle.Info: this.jBtn.addClass("btn-info"); break;
                case V.ButtonStyle.Success: this.jBtn.addClass("btn-success"); break;
                case V.ButtonStyle.Warning: this.jBtn.addClass("btn-warning"); break;
                case V.ButtonStyle.Danger: this.jBtn.addClass("btn-danger"); break;
                case V.ButtonStyle.Link: this.jBtn.addClass("btn-link"); break;
            }

            if (this.ButtonIcon != null) {
                this.jImage.addClass(V.iconEnumToBootstrapStyle(this.ButtonIcon));
                this.jImage.appendTo(this.jBtn);
                if (this.ButtonText != "") this.jImage.css('margin-right', '6px');
                this.jbtnText.text(this.ButtonText);
            } else if (this.ButtonText == "") this.jbtnText.text(".");
            else this.jbtnText.text(this.ButtonText);

            if (!this.Enabled) this.jBtn.addClass("disabled");
            this.jbtnText.appendTo(this.jBtn);

            this.jBtn.off("click").click(() => { if (this.onButtonClicked != null) (V.tryAndCatch(() => { this.onButtonClicked(); })); return false; });
            this.jComponent.append(this.jBtn)
        }
        this.jComponent.append(this.jinternalSpan)

        super.create();
    }

    private _textaligment: V.TextAlignment = V.TextAlignment.Left;
    public get TextAlignment(): V.TextAlignment {
        return this._textaligment;
    }
    public set TextAlignment(val: V.TextAlignment) {
        if (val != this._textaligment) {
            this._textaligment = val;
            this.drawDelayed(true);
        }
    }


    private _placeholder: string;
    /**
    * The placeholder attribute specifies a short hint that describes the expected value of an input field 
    * (e.g. a sample value or a short description of the expected format).
    */
    public get Placeholder(): string {
        return this._placeholder;
    }
    public set Placeholder(val: string) {
        if (val != this._placeholder) {
            this._placeholder = val;
            this.drawDelayed(true);
        }
    }


    private _password: boolean;
    public get Password(): boolean {
        return this._password;
    }
    public set Password(val: boolean) {
        val = V.convertaAnyToBoolean(val);
        if (val != this._password) {
            this._password = val;
            this.drawDelayed(true);
        }
    }


    private _buttonicon: V.ButtonIcon = null;
    public get ButtonIcon(): V.ButtonIcon {
        return this._buttonicon;
    }
    public set ButtonIcon(val: V.ButtonIcon) {
        if (val != this._buttonicon) {
            this._buttonicon = val;
            this.ButtonVisible = true;
            this.drawDelayed(true);
        }
    }

    private _buttonstyle: V.ButtonStyle = V.ButtonStyle.Default;
    public get ButtonStyle(): V.ButtonStyle {
        return this._buttonstyle;
    }
    public set ButtonStyle(val: V.ButtonStyle) {
        if (val != this._buttonstyle) {
            this._buttonstyle = val;
            this.drawDelayed(true);
        }
    }

    private _buttonVisible: boolean = false;
    public get ButtonVisible(): boolean {
        return this._buttonVisible;
    }
    public set ButtonVisible(val: boolean) {
        val = V.convertaAnyToBoolean(val);
        if (val != this._buttonVisible) {
            this._buttonVisible = val;
            this.drawDelayed(true);
        }
    }

    private _buttontext: string = "";
    public get ButtonText(): string {
        if (this._buttontext == null) return "";
        return this._buttontext;
    }
    public set ButtonText(val: string) {
        if (val != this._buttontext) {
            this._buttontext = val;
            this.ButtonVisible = true;
            this.drawDelayed(true);
        }
    }


}