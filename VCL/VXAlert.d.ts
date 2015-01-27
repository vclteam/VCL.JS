import VXC = require("./VXComponent");
import V = require("./VCL");
export declare class TAlert extends VXC.TComponent implements V.iTranslatable {
    constructor(aOwner: VXC.TComponent, renderTo?: string, text?: string);
    private _rtl;
    Rtl: boolean;
    private _localizable;
    /**
    * In order to localize application each page or component of the application has to have Localizable property set true.
    */
    Localizable: boolean;
    private _text;
    Text: string;
    private _alertstyle;
    AlertStyle: V.AlertStyle;
    private _closebuttonvisible;
    CloseButtonVisible: boolean;
    onClicked: (sender: TAlert) => void;
    private jAlert;
    private jBtn;
    private jText;
    create(): void;
    draw(reCreate: boolean): void;
    show(): void;
}
export declare class TNotification extends VXC.TComponent implements V.iTranslatable {
    onClosed: () => void;
    constructor(aOwner: VXC.TComponent, text?: string);
    private _alertstyle;
    AlertStyle: V.AlertStyle;
    private _localizable;
    /**
    * In order to localize application each page or component of the application has to have Localizable property set true.
    */
    Localizable: boolean;
    private _timeout;
    /**
    * Fade alert out after a certain delay (in ms)
    */
    Timeout: number;
    private _text;
    /**
    * Text specify the text string that labels the control.
    */
    Text: string;
    private _notifposition;
    NotificationPosition: V.NotificationPosition;
    show(): void;
    hide(): void;
    private _closebuttonvisible;
    CloseButtonVisible: boolean;
    private close();
    private jTopLeft;
    private jTopRight;
    private jBottomLeft;
    private jBottomRight;
    create(): void;
    draw(reCreate: boolean): void;
}
