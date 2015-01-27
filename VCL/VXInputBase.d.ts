import VXC = require("./VXComponent");
import V = require("./VCL");
export declare class TLabeledBase extends VXC.TComponent {
    private _labetextcolor;
    LabelTextColor: string;
    private _labelVisible;
    LabelVisible: boolean;
    private _labeltext;
    LabelText: string;
    private _labelposition;
    LabelPosition: V.LabelPosition;
    jLabel: JQuery;
    jEdit: JQuery;
    create(): void;
}
export declare class TEditorBase extends TLabeledBase implements V.iTranslatable {
    private _required;
    Required: boolean;
    onValidate: (sender: VXC.TComponent) => string;
    private _minlength;
    MinLength: number;
    private _localizable;
    /**
    * In order to localize application each page or component of the application has to have Localizable property set true.
    */
    Localizable: boolean;
    textLength(): number;
    isEmpty(): boolean;
    ShowErrorMessage(message: string): void;
    HideErrorMessage(): void;
    private _rtl;
    Rtl: boolean;
    private _tabindex;
    TabIndex: number;
    private _helpVisible;
    HelpVisible: boolean;
    private _errortext;
    private _helptext;
    HelpText: string;
    setFocus(): void;
    onKeyUp: (keyCode: string) => void;
    onKeyDown: (keyCode: string) => boolean;
    onChanged: (sender: TEditorBase) => void;
    jHelpLabel: JQuery;
    create(): void;
}
export declare class TInputBase extends TEditorBase {
    private _inputStyle;
    InputStyle: V.InputStyle;
    private _borderradius;
    BorderRadius: number;
    private _maxlength;
    MaxLength: number;
    private _displayastext;
    DisplayAsText: boolean;
    private _nulltext;
    /**
    * Specified text is displayed when the value of the editor is null and the editor is not focused.
    * The prompt text disappears when the editor receives focus
    */
    NullText: string;
    private _labelOverflow;
    LabelOverflow: boolean;
    canEdit(): boolean;
    /**
    * Occurs when the user hit the button component.
    */
    onButtonClicked: () => void;
    jBtn: JQuery;
    private jImage;
    private jbtnText;
    private jinternalSpan;
    create(): void;
    private _textaligment;
    TextAlignment: V.TextAlignment;
    private _placeholder;
    /**
    * The placeholder attribute specifies a short hint that describes the expected value of an input field
    * (e.g. a sample value or a short description of the expected format).
    */
    Placeholder: string;
    private _password;
    Password: boolean;
    private _buttonicon;
    ButtonIcon: V.ButtonIcon;
    private _buttonstyle;
    ButtonStyle: V.ButtonStyle;
    private _buttonVisible;
    ButtonVisible: boolean;
    private _buttontext;
    ButtonText: string;
}
