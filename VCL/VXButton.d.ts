import V = require("./VCL");
import VXC = require("./VXComponent");
import VXB = require("./VXInputBase");
export declare class TButton extends VXC.TPopupmenuComponent implements V.iTranslatable {
    constructor(aOwner: VXC.TComponent, renderTo?: string, text?: string, onClicked?: (sender: TButton) => void);
    private _textstyle;
    TextStyle: V.TextStyle;
    private _localizable;
    /**
    * In order to localize application each page or component of the application has to have Localizable property set true.
    */
    Localizable: boolean;
    private _textcolor;
    TextColor: string;
    private _groupindex;
    GroupIndex: number;
    private _text;
    /**
    * Text specify the text string that labels the control.
    */
    Text: string;
    private _buttonsize;
    ButtonSize: V.ButtonSize;
    private _buttonstyle;
    ButtonStyle: V.ButtonStyle;
    private _buttonimageurl;
    ButtonImageURL: string;
    private _buttonicon;
    ButtonIcon: V.ButtonIcon;
    private _buttoniconcolor;
    ButtonIconColor: string;
    private _tabindex;
    TabIndex: number;
    private _iconalignment;
    IconAlignment: V.IconAlignment;
    /**
        Use the OnClick event handler to respond when the user clicks the control.
    */
    onClicked: (sender: TButton) => void;
    jText: JQuery;
    jImage: JQuery;
    jBtn: JQuery;
    create(): void;
    draw(reCreate: boolean): void;
}
export declare class TFacebookButton extends VXC.TComponent {
    onLoggedin: () => void;
    private _showfirendface;
    ShowFriendFace: boolean;
    private _buttonsize;
    ButtonSize: V.ButtonSize;
    create(): void;
    draw(reCreate: boolean): void;
}
export declare class TToggleSwitch extends VXB.TEditorBase {
    private _value;
    Value: boolean;
    private _textTrue;
    TextTrue: string;
    private _textfalse;
    TextFalse: string;
    private _switchsize;
    SwitchSize: V.SwitchSize;
    onChanged: () => void;
    private jInput;
    create(): void;
    draw(reCreate: boolean): void;
}
