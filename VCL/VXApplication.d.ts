/// <reference path="Scripts/jquery.d.ts" />
/// <reference path="Scripts/require.d.ts" />
/// <reference path="Scripts/sammyjs.d.ts" />
import VXO = require("./VXObject");
import V = require("./VCL");
import VXM = require("./VXMenu");
export declare class TApplication {
    private static _instance;
    private sammy;
    private igonreaAthenticationPage;
    navbaritems: VXO.TCollection<TNavbarItem>;
    onNavigateToPage: (url: string) => void;
    onBrandClicked: () => void;
    onSessionTimeout: () => void;
    initialize(): void;
    hexColorToRGB(color: string, opacity?: number): string;
    /**
    convert color names to hex codes
    */
    colourNameToHex(colour: any): string;
    serverURL: string;
    private createPageInstance(prototype, html, __args);
    loadJSLibraries(modulesName: Array<string>, callBack: () => void): void;
    private ___botstrapversion;
    getBootstrapVersion(): number;
    loadJSLibrary(moduleName: string, callBack: (moduleObject: any) => void): void;
    /**
    * create and load page & html file asynchronously  an return an object instance in a callback function
    **/
    loadPage(classPathName: string, __args: any[], __callback?: (page: V.TPage) => void): void;
    /**
     create and load page & html file synchronously  an return an object instance
     @class : the container class
     @__args  : pass argumant as array
    **/
    createPage<T extends VXO.TObject>(Class: {
        new (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z): T;
    }, __args: any[], htmlPath?: string): T;
    downloadFile(filename: string, preparingMessage?: string, failMessage?: string, onSuccess?: () => void, onFail?: () => void): void;
    /**
    *  capture page loading if the event return false page loading will not occurred
    **/
    OnPageLoad: (PageName: string, Params: any) => boolean;
    getLocalValue(name: string, defaultValue?: any): any;
    setLocalValue(name: string, value: any): void;
    /**
    * The showMessage procedure displays a string of Text in a simple dialog with an OK button. with an optional callback
    */
    showMessage(message: string, callback?: () => void): void;
    /**
    * The MessageDlg function is used to display messages to the user. These messages may be informational, or warnings or whatever.
    **/
    messageDlg(message: string, title: string, buttons: Array<string>, callback?: (results: string) => void): void;
    /**
    * The MessagePrompt function is used to display messages to the user. These messages may be informational, or warnings or whatever.
    **/
    messageDlgPrompt(message: string, callback?: (promptedText: string) => void): void;
    getSessionValue(name: string, defaultValue?: any): any;
    setSessionValue(name: string, value: any): void;
    run(): void;
    /**
    * return the encoded page url as string
    **/
    buildPageURL(className: string, ConstructorArgs?: any[]): string;
    onLoggedIn: () => void;
    onLoggedOff: () => void;
    /**
    * specify the server side method for login
    **/
    loginServerClass: string;
    login(email: string, password: string, onSuccuess: (data?: any) => void, onFail?: (errorMessage: string) => void): void;
    logOff(): void;
    navigateToPage(className: string, ConstructorArgs?: any[], igonreaAthentication?: boolean): void;
    navigateToURL(URL: string): void;
    /**
    * The windowOpenURL() method opens a new browser window.
    **/
    windowOpenURL(URL: string, target: string): void;
    checkColorString(str: any): boolean;
    raiseException(errorMessage: string): void;
    addNavbarItem(text: string, icon: string, onClick: () => void): TNavbarItem;
    /**
    * enable a button on the bottom of the screen that scoll the screen to the top
    */
    private _showgototopicon;
    ShowGotoTopWidget: boolean;
    private _mainpage;
    /**
    * Identifies the page in the application that is the main page.
    * The main page is the first page created in the main body of the default page.
    */
    MainPage: string;
    private _sessiontimeout;
    /**
    * Identifies the page in the application that is the main page.
    * The main page is the first page created in the main body of the default page.
    */
    SessionTimeout: number;
    private _sessionevents;
    private _setsessiontimeoutHandle;
    private _lastsessiontime;
    private _setsessiontimeout();
    private _loginpage;
    /**
    * Identifies the page in the application that is the main page.
    * The main page is the first page created in the main body of the default page.
    */
    LoginPage: string;
    /**
    * Specifies the logged user name
    */
    UserName: string;
    /**
    * Specifies the logged user role
    */
    UserRole: string;
    /**
    * Specifies the logged userId
    */
    UserId: string;
    /**
    * Specifies the logged user email address
    */
    UserEmail: string;
    /**
    * Specifies the local currency symbol.
    * CurrencyString specifies the currency symbol, which can be a single character or multiple characters.
    */
    CurrencyString: string;
    getDeviceType(): V.DeviceType;
    /**
    * Specifies format in which the date is presented
    */
    DateFormat: string;
    LongDateFormat: string;
    AuthenticationRequired: boolean;
    Authenticated: boolean;
    /**
    * Specifies the maximum number of digits, after decimal point, for a currency value.
    */
    CurrencyDecimals: number;
    private _decimalseparator;
    /**
    * Specifies the character used to separate the integer part from the fractional part of a number.
    */
    DecimalSeparator: string;
    private _thousandseparator;
    /**
    * Specifies the character used to separate thousands in numbers with more than three digits to the left of the decimal separator.
    */
    ThousandSeparator: string;
    private _activeLanguage;
    /**
    * change the current selected language of the system
    */
    ActiveLanguage: string;
    private newItemIntranslationTable;
    private languageTable;
    addLanguage(languageCode: string, languageName: string): void;
    private translationTable;
    addLanguageTranslation(languageCode: string, sourceString: string, translatedString: string): void;
    getLanguageTranslation(languageCode: string, sourceString: string): string;
    private _enableapplicationcache;
    /**
    * Contains the text that appears in the browser title.
    */
    EnableApplicationCache: boolean;
    private _applicationtitle;
    /**
    * Contains the text that appears in the browser title.
    */
    ApplicationTitle: string;
    private _applicationbrandname;
    ApplicationBrandName: string;
    /**
    * Rebuild the default page
    */
    refreshDefaultPage(): void;
    getSpanSize(): number;
    onException: (errorMessage: string) => void;
    private s4();
    private h2d(h);
    private hexToString(tmp);
    /**
    *  rate password strength
    */
    PasswordStrength(password: string): V.PasswordStrength;
    /**
    * Creates a globally unique identifier.
    */
    genGUID(): string;
    formatNumberK(value: number): string;
    FormatMin(value: number, precision?: number): string;
    MB: string;
    GB: string;
    FormatGB(value: number, precision?: number, type?: string): string;
    LocaleSettings: TLocaleSettings;
    FormatPercent(value: number, precision?: number): string;
    FormatCurrency(value: number, precision?: number): string;
    formatHumanFriendly(value: number, roundfactor?: number): string;
    FormatNumber(value: number, precision?: number, removeExtraZeros?: boolean): string;
    /**
     Rich formatting of a Date variable into a string
     d	Day of the month as digits; no leading zero for single-digit days.
     dd	Day of the month as digits; leading zero for single-digit days.
     ddd	Day of the week as a three-letter abbreviation.
     dddd	Day of the week as its full name.
     m	Month as digits; no leading zero for single-digit months.
     mm	Month as digits; leading zero for single-digit months.
     mmm	Month as a three-letter abbreviation.
     mmmm	Month as its full name.
     yy	Year as last two digits; leading zero for years less than 10.
     yyyy	Year represented by four digits.
     h	Hours; no leading zero for single-digit hours (12-hour clock).
     hh	Hours; leading zero for single-digit hours (12-hour clock).
     H	Hours; no leading zero for single-digit hours (24-hour clock).
     HH	Hours; leading zero for single-digit hours (24-hour clock).
     M	Minutes; no leading zero for single-digit minutes.Uppercase M unlike CF timeFormat's m to avoid conflict with months.
     MM	Minutes; leading zero for single-digit minutes.
     Uppercase MM unlike CF timeFormat's mm to avoid conflict with months.
     s	Seconds; no leading zero for single-digit seconds.
     ss	Seconds; leading zero for single-digit seconds.
     l or L	Milliseconds. l gives 3 digits. L gives 2 digits.
     t	Lowercase, single-character time marker string: a or p.No equivalent in CF.
     tt	Lowercase, two-character time marker string: am or pm.No equivalent in CF.
     T	Uppercase, single-character time marker string: A or P.Uppercase T unlike CF's t to allow for user-specified casing.
     TT	Uppercase, two-character time marker string: AM or PM.Uppercase TT unlike CF's tt to allow for user-specified casing.
     Z	US timezone abbreviation, e.g. EST or MDT. With non-US timezones or in the Opera browser, the GMT/UTC offset is returned, e.g. GMT-0500No equivalent in CF.
     o	GMT/UTC timezone offset, e.g. -0500 or +0230.No equivalent in CF.
    */
    formatDateTime(date: Date, mask?: string, utc?: any): any;
    private dateFormat_i18n;
}
export declare class TFacebookAPI {
    onInitialized: () => void;
    private _accessToken;
    private _appid;
    /**
    * Text specify the text string that labels the control.
    **/
    ApplicationID: string;
    init(): void;
    private loginRresponseToEnum(status);
    getLoginState(callback: (state: V.FacebookLoginState) => void): void;
    UserName: string;
    UserID: string;
    login(callback?: (state: V.FacebookLoginState) => void): void;
    logout(callback?: () => void): void;
}
export declare class TLocaleSettings {
    MSG_This_value_is_required: string;
    MSG_This_value_is_not_minimum: string;
    PercentString: string;
    LabelPosition: V.LabelPosition;
}
export declare class TNavbarItem extends VXO.TCollectionItem {
    constructor(text?: string, icon?: string, onClick?: () => void);
    menuItems: VXM.TMenuItemCollection<VXM.TMenuItem>;
    addMenuItem(text: string): VXM.TMenuItem;
    private _active;
    Active: boolean;
    private _visible;
    Visible: boolean;
    private _itemaligment;
    ItemAlignment: V.ItemAlignment;
    private _imageURL;
    /**
    * Text specify the text string that labels the control.
    **/
    ImageURL: string;
    private _text;
    /**
    * Text specify the text string that labels the control.
    **/
    Text: string;
    private _icon;
    Icon: string;
    onClick: () => void;
}
