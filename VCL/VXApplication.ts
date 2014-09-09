///<reference path="Scripts/jquery.d.ts" />
///<reference path="Scripts/require.d.ts" />
///<reference path="Scripts/sammyjs.d.ts" />
import VXP = require("VCL/VXPage");
import VXO = require("VCL/VXObject");
import V = require("VCL/VCL");
import VXM = require("VCL/VXMenu");
import VXServer = require("VCL/VXServer");
import VXDS = require("VCL/VXServer");

declare var bootbox;
export class TApplication {
    private static _instance: TApplication;
    private sammy: any;
    private igonreaAthenticationPage: string = "";
    public navbaritems = new VXO.TCollection<TNavbarItem>();

    public initialize() {
        var self: TApplication = this;
        $('head').append('<style type = "text/css" > .no-space [class*="span"] {    margin-left: 0;}</style>');

        this.sammy = Sammy(function () {
            this.use("Session");
            this.use("Local");

            this.get('#/', function () {
                this.navigateToPage(this.buildPageURL(self.MainPage));
            });
            this.get('#show/:class/:params', function () {
                var className: string = self.hexToString(this.params["class"]);
                var args: any[] = [];
                if (self.AuthenticationRequired && !self.Authenticated &&
                    className.toUpperCase() != self.LoginPage.toUpperCase() &&
                    className.toUpperCase() != self.igonreaAthenticationPage.toUpperCase()) {
                    self.navigateToPage(self.LoginPage, ["#show/" + this.params["class"] + '/' + <string>this.params["params"]]);
                } else {
                    var className: string = self.hexToString(this.params["class"]);
                    var paramArgStr: string = self.hexToString(<string>this.params["params"]);
                    var paramArg = JSON.parse(paramArgStr, jsonCreateDateParserTemp);
                    $.each(paramArg, function (index, item) {
                        args.push(item);
                    });
                    if (self.OnPageLoad != null) {
                        var rc = self.OnPageLoad(className, args);
                        if (!rc) return true;
                    }

                    self.loadPage(className, args, (page) => {
                        page.show(); //will show on contenet - main container
                    });
                }
            })
        });
    }


    public logOff() {
        this.Authenticated = false;
        if (this.AuthenticationRequired) {
            this.navigateToPage(this.MainPage, [+Math.random()]);
        }
    }


    public serverURL: string = "backEnd";
    private createPageInstance(prototype, html, __args) {
        var instance = Object.create(prototype);
        instance.__HTML__ = html;
        instance.constructor.apply(instance, __args);
        return instance;
    }


    public loadJSLibraries(modulesName: Array<string>, callBack: () => void) {
        require(modulesName, function (modl) {
            if (callBack) callBack();
        });
    }

    private ___botstrapversion: number = -1
    public getBootstrapVersion(): number {
        if (this.___botstrapversion > -1) return this.___botstrapversion;

        this.___botstrapversion = 0;
        if ((typeof ((<any>$()).emulateTransitionEnd) == 'function')) this.___botstrapversion = 3;
        else if ((typeof $().modal == 'function')) this.___botstrapversion = 2;
        return this.___botstrapversion;
    }

    public loadJSLibrary(moduleName: string, callBack: (moduleObject: any) => void) {
        require([moduleName], function (modl) {
            if (callBack) callBack(modl);
        });
    }

    /*
    * create and load page & html file asynchronously  an return an object instance in a callback function
    */
    public loadPage(classPathName: string, __args: any[], __callback?: (page: V.TPage) => void) {
        var self = this;
        var classes: string[] = [];
        var className = classPathName.split('/')[classPathName.split('/').length - 1];
        classes.push(classPathName);
        classes.push('VCL/Scripts/text.js!' + classPathName + '.html');
        require(classes, function (page, html) {
            var classExists = true;
            try {
                typeof (page[className].prototype);
            } catch (err) {
                V.Application.raiseException("Class '" + className + "' was not found in module '" + classPathName + ".ts'");
                classExists = false;
            }
            if (classExists) {
                var instance = self.createPageInstance(page[className].prototype, html, __args)
                if (__callback) __callback(instance);
            }
        })
    }

    /*
    * create and load page & html file synchronously  an return an object instance 
    */
    public createPage(Class, __args: any[], htmlPath?: string) {
        var self = this;
        var instance;
        var path = (htmlPath ? htmlPath + '/' : "") + Class.getClassName() + ".html"
        new VXDS.TServer(false).getHTML(path,
            (html: any) => {
                instance = self.createPageInstance(Class.prototype, html, __args);

            },
            (errorMessage: string) => {
                V.Application.raiseException("cant find :" + path);
            }
            );
        return instance;
    }



    public downloadFile(filename: string, preparingMessage?: string, failMessage?: string, onSuccess?: () => void, onFail?: () => void) {
        this.loadJSLibraries(["jquery-ui", "fileDownload", "VCL/Scripts/css.js!jquery-uicss"], () => {
            var options = {
                failMessageHtml: failMessage,
                preparingMessageHtml: preparingMessage,
                successCallback: function (url) {
                    if (onSuccess) onSuccess();
                },
                failCallback: function (responseHtml, url) {
                    if (onFail) onFail();
                }
            };

            (<any>$).fileDownload(encodeURI(V.Application.serverURL + "?METHOD=DOWNLOAD&PARAMS={FILENAME:\"" +
                filename + "\"}"), options);
        });
    }


    /*
    *  capture page loading if the event return false page loading will not occurred
    */
    public OnPageLoad: (PageName: string, Params: any) => boolean;

    public getLocalValue(name: string, defaultValue?: any) {
        var session = this.sammy.local("VCL", function () {
            return {};
        });
        if (!session[name]) {
            session[name] = defaultValue;
        }
        return session[name];
    }

    public setLocalValue(name: string, value: any) {
        var session = this.sammy.local("VCL", function () {
            return {};
        });
        session[name] = value;
        this.sammy.local("VCL", session);
    }

    /*
    * The showMessage procedure displays a string of Text in a simple dialog with an OK button. with an optional callback
    */
    public showMessage(message: string, callback?: () => void) {
        (<any>bootbox).alert(message, callback)
    }

    /*
    * The MessageDlg function is used to display messages to the user. These messages may be informational, or warnings or whatever.  
    */
    public messageDlg(message: string, title: string, buttons: Array<string>, callback?: (results: string) => void) {
        var json: any = {};
        json.message = message;
        json.title = title;
        json.buttons = new Array<any>();
        buttons.forEach((item) => {
            var btn: any = {};
            btn["label"] = item;
            btn["callback"] = (rc: BaseJQueryEventObject) => {
                if (callback) callback((<any>rc.currentTarget).textContent);
            }
            json.buttons.push(btn);
        });
        (<any>bootbox).dialog(json);

    }

    /*
    * The MessagePrompt function is used to display messages to the user. These messages may be informational, or warnings or whatever.  
    */
    public messageDlgPrompt(message: string, callback?: (promptedText: string) => void) {
        (<any>bootbox).prompt(message, (promptedText) => {
            if (callback) callback(promptedText);
        });

    }



    public getSessionValue(name: string, defaultValue?: any) {
        var session = this.sammy.session("VCL", function () {
            return {};
        });
        if (!session[name]) {
            session[name] = defaultValue;
        }
        return session[name];
    }


    public setSessionValue(name: string, value: any) {
        var session = this.sammy.session("VCL", function () {
            return {};
        });
        session[name] = value;
        this.sammy.session("VCL", session);
    }

    public run() {
        V.Application.refreshDefaultPage();
        this.sammy.run(this.buildPageURL(this.MainPage));
    }

    /*
    * return the encoded page url as string
    */
    public buildPageURL(className: string, ConstructorArgs?: any[]) {
        return "#show/" + stringToHex(className) + '/' + (decodeURIComponent(stringToHex(
            JSON.stringify(ConstructorArgs ? ConstructorArgs : new Object(), jsonCreateDateParserTemp))));
    }


    /*
    * specify the server side method for login 
    */
    public loginServerClass: string = "LOGIN";
    public login(email: string, password: string, onSuccuess: (data?: any) => void,
        onFail?: (errorMessage: string) => void) {
        var server = new VXServer.TServer();
        server.send(this.loginServerClass, { USER: email, PASS: password }, (data) => {
            if (data.STATUS == "OK") {
                this.UserRole = data.ROLE;
                this.UserName = data.USER;
                this.UserEmail = data.EMAIL;
                onSuccuess(data);
            }
            else if (onFail) onFail(data);
        }, (error: string) => {
                if (onFail) onFail(error);
            });
    }


    public navigateToPage(className: string, ConstructorArgs?: any[], igonreaAthentication: boolean = false) {
        var url: string = this.buildPageURL(className, ConstructorArgs);
        if (igonreaAthentication) {
            this.igonreaAthenticationPage = className;
        }
        this.sammy.setLocation(url);
        //this.sammy.runRoute('get', url);
    }

    public navigateToURL(URL: string) {
        this.sammy.setLocation(URL);
    }

    /*
    * The windowOpenURL() method opens a new browser window.
    */
    public windowOpenURL(URL: string, target: string) {
        window.open(URL, target)
    }


    public checkColorString(str): boolean {
        var isOk = /^#[0-9A-F]{6}$/i.test(str);
        if (!isOk) {
            V.Application.raiseException("'" + str + "' is not valid hex color string");
            return false;
        }
        return true;

    }

    public raiseException(errorMessage: string) {
        if (this.onException == null) {
            alert(errorMessage);
        }
        else this.onException(errorMessage);
    }


    public addNavbarItem(text: string, icon: string, onClick: () => void): TNavbarItem {
        var item: TNavbarItem = new TNavbarItem(text, icon, onClick);
        this.navbaritems.add(item);
        return item;
    }

    /*private _language: string = "";
    public get Language(): string {
        return this._language;
    }
    public set Language(val: string) {
        if (val != this._language) {
            this._language = val;
        }
    }

    private startPresist = false;
    private LanguageDictionary = [];
    public persistWordToLanguageDictionary(language: string, word: string) {
        if (!this.LanguageDictionary[language]) this.LanguageDictionary[language]=[];
        if (!this.LanguageDictionary[language][word]) {
            this.LanguageDictionary[language].push(word);
            if (!this.startPresist) {
                setTimeout(() => {
                    try {
                    this.startPresist = true;
                        this.saveLanguageDictionary()
                } finally {
                    }
                }, 60000);
            }
        }
    }

    public loadLanguageDictionary(language: string) {
        if (!this.LanguageDictionary[language]) return;
    }

    public getLanguageTranslation(word: string) : string{
        if (!this.Language) return word;
        if (!this.LanguageDictionary[this.Language]) return word;
        var ed = this.LanguageDictionary[this.Language][word];
        if (ed) return ed;
        return word;
    }

    public saveLanguageDictionary() {
        this.startPresist = false;
    }*/

    private _mainpage: string = "PageHome";
    /**
    * Identifies the page in the application that is the main page.
    * The main page is the first page created in the main body of the default page. 
    */
    public get MainPage(): string {
        return this._mainpage;
    }
    public set MainPage(val: string) {
        if (val != this._mainpage) {
            this._mainpage = val;
        }
    }

    private _loginpage: string = "PageLogin";
    /**
    * Identifies the page in the application that is the main page.
    * The main page is the first page created in the main body of the default page. 
    */
    public get LoginPage(): string {
        return this._loginpage;
    }
    public set LoginPage(val: string) {
        if (val != this._loginpage) {
            this._loginpage = val;
        }
    }

    /**
    * Specifies the logged user name
    */
    public get UserName(): string {
        return this.getSessionValue('_username', "");
    }
    public set UserName(val: string) {
        if (val != this.UserName) {
            this.setSessionValue('_username', val);
        }
    }

    /**
    * Specifies the logged user role
    */
    public get UserRole(): string {
        return this.getSessionValue('_userrole', "");
    }
    public set UseRole(val: string) {
        if (val != this.UserRole) {
            this.setSessionValue('_userrole', val);
        }
    }


    /**
    * Specifies the logged userId
    */
    public get UserId(): string {
        return this.getSessionValue('_userid', "");
    }
    public set UserId(val: string) {
        if (val != this.UserEmail) {
            this.setSessionValue('_userid', val);
        }
    }


    /**
    * Specifies the logged user email address
    */
    public get UserEmail(): string {
        return this.getSessionValue('_useremail', "");
    }
    public set UserEmail(val: string) {
        if (val != this.UserEmail) {
            this.setSessionValue('_useremail', val);
        }
    }



    /**
    * Specifies the local currency symbol.
    * CurrencyString specifies the currency symbol, which can be a single character or multiple characters.
    */
    public get CurrencyString(): string {
        return this.getSessionValue('_currencystring', "$");
    }
    public set CurrencyString(val: string) {
        if (val != this.CurrencyString) {
            this.setSessionValue('_currencystring', val);
        }
    }

    public getDeviceType(): V.DeviceType {
        var envs = ['phone', 'tablet', 'desktop'];

        var $el = $('<div>');
        $el.appendTo($('body'));

        for (var i = envs.length - 1; i >= 0; i--) {
            var env = envs[i];

            $el.addClass('hidden-' + env);
            if ($el.is(':hidden')) {
                $el.remove();
                if (env == 'phone') return V.DeviceType.Phone;
                if (env == 'tablet') return V.DeviceType.Tablet;
                if (env == 'desktop') {
                    if ($(window).width() >= 1200) return V.DeviceType.LargeDisplay
                    return V.DeviceType.Default;
                }
            }
        };
        return V.DeviceType.Default;
    }

    /**
    * Specifies format in which the date is presented
    */
    public get DateFormat(): string {
        return this.getSessionValue('_dateformat', "mm/dd/yyyy");
    }
    public set DateFormat(val: string) {
        if (val != this.DateFormat) {
            this.setSessionValue('_dateformat', val);
        }
    }


    public get LongDateFormat(): string {
        return this.getSessionValue('_longdateformat', "mm/dd/yyyy hh:MM:ss");
    }
    public set LongDateFormat(val: string) {
        if (val != this.DateFormat) {
            this.setSessionValue('_longdateformat', val);
        }
    }

    public get AuthenticationRequired(): boolean {
        return this.getSessionValue('_authenticationrequired', false);

    }
    public set AuthenticationRequired(val: boolean) {
        if (val != this.AuthenticationRequired) {
            this.setSessionValue('_authenticationrequired', val);

        }
    }


    public get Authenticated(): boolean {
        return this.getSessionValue('_authenticated', false);
    }
    public set Authenticated(val: boolean) {
        if (val != this.Authenticated) {
            this.setSessionValue('_authenticated', val);

        }
    }



    /**
    * Specifies the maximum number of digits, after decimal point, for a currency value.
    */
    public get CurrencyDecimals(): number {
        return this.getSessionValue('_currencydecimals', 2);
    }
    public set CurrencyDecimals(val: number) {
        if (val != this.CurrencyDecimals) {
            this.setSessionValue('_currencydecimals', val);

        }
    }

    private _decimalseparator: string = '.';
    /**
    * Specifies the character used to separate the integer part from the fractional part of a number.
    */
    public get DecimalSeparator(): string {
        return this._decimalseparator;
    }
    public set DecimalSeparator(val: string) {
        if (val != this._decimalseparator) {
            this._decimalseparator = val;
        }
    }

    private _thousandseparator: string = ",";
    /**
    * Specifies the character used to separate thousands in numbers with more than three digits to the left of the decimal separator.
    */
    public get ThousandSeparator(): string {
        return this._thousandseparator;
    }
    public set ThousandSeparator(val: string) {
        if (val != this._thousandseparator) {
            this._thousandseparator = val;
        }
    }

    private _enableapplicationcache: boolean = true;
    /**
    * Contains the text that appears in the browser title.
    */
    public get EnableApplicationCache(): boolean {
        return this._enableapplicationcache;
    }
    public set EnableApplicationCache(val: boolean) {
        if (val != this._enableapplicationcache) {
            this._enableapplicationcache = val;
        }
    }


    private _applicationtitle: string = "VCL.JS Application";
    /**
    * Contains the text that appears in the browser title.
    */
    public get ApplicationTitle(): string {
        return this._applicationtitle;
    }
    public set ApplicationTitle(val: string) {
        if (val != this._applicationtitle) {
            this._applicationtitle = val;
        }
    }

    private _applicationbrandname: string;
    public get ApplicationBrandName(): string {
        return this._applicationbrandname;
    }
    public set ApplicationBrandName(val: string) {
        if (val != this._applicationbrandname) {
            this._applicationbrandname = val;
        }
    }

    /**
    * Rebuild the default page
    */
    public refreshDefaultPage(): void {
        $('#AppNavBar').find('.brand').text(this.ApplicationBrandName);
        var navLeft: JQuery = $('#NavLeft');
        var navRight: JQuery = $('#NavRight');
        navLeft.empty();
        navRight.empty();
        this.navbaritems.forEach((item: TNavbarItem) => {
            var baritem: JQuery = $('<a/>');
            baritem.attr('href', '#');
            baritem.off("click").click(() => { if (item.onClick != null) V.tryAndCatch(() => { item.onClick(); }); return false; });
            if (item.Icon) {
                $('<i/>').addClass(item.Icon).appendTo(baritem)
            } else if (item.ImageURL && item.ImageURL != "") {
                $('<img/>').attr('src', item.ImageURL).appendTo(baritem);
            }

            if (item.Text) $("<span/>").text(item.Text).appendTo(baritem);
            var lineItem: JQuery = $('<li>/');
            baritem.appendTo(lineItem);
            if (item.menuItems.length() > 0) {

                item.menuItems.createmenu('dropdown-menu').appendTo(lineItem);
                baritem.addClass('dropdown-toggle');
                baritem.attr('data-toggle', "dropdown");
                lineItem.addClass('dropdown');
                $('<b class="caret">').appendTo(baritem);
            }
            $('.dropdown-toggle').dropdown()
            if (item.ItemAlignment == V.ItemAlignment.Left) lineItem.appendTo(navLeft)
            else lineItem.appendTo(navRight);
            return true;
        });
        document.title = this.ApplicationTitle;
    }


    public getSpanSize(): number {
        var span = $("<div class='span1'/>");
        $('body').append(span);
        var ret = span.width();
        span.remove();
        return ret;
    }

    public onException: (errorMessage: string) => void;

    private s4(): string { return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1); }


    private h2d(h) {
        return parseInt(h, 16);
    }

    private hexToString(tmp: string): string {
        var str = '', i = 0, c;
        for (; i < tmp.length; i += 2) {
            var c: any = tmp.substring(i, i + 2);
            c = String.fromCharCode(this.h2d(c));
            str += c;
        }
        return str;
    }
    /*
    *  rate password strength
    */
    public PasswordStrength(password: string): V.PasswordStrength {
        return new passwordStrength().analyze(password);
    }

    /**
    * Creates a globally unique identifier.
    */
    public genGUID(): string {
        return this.s4() + this.s4() + this.s4() + this.s4() +
            this.s4() + this.s4() + this.s4() + this.s4();
    }

    public formatNumberK(value: number): string {
        value = (value / 1000);
        return this.FormatNumber(value, 0) + "K";
    }

    public FormatMin(value: number, precision: number = 0): string {
        return this.FormatNumber(value, precision) + " Min";
    }

    public MB: string = "MB";
    public GB: string = "GB";
    public FormatGB(value: number, precision: number = 0, type: string = this.GB): string {
        return this.FormatNumber(value, precision) + type;
    }


    public LocaleSettings: TLocaleSettings = new TLocaleSettings();

    public FormatPercent(value: number, precision: number = 0): string {
        return this.FormatNumber(value, precision) + this.LocaleSettings.PercentString;
    }

    public FormatCurrency(value: number, precision: number = 2): string {
        return this.CurrencyString + this.FormatNumber(value, precision);
    }

    public formatHumanFriendly(value: number, roundfactor): string {
        var p, d2, i, s;
        var isNegative = value < 0;
        value = Math.abs(value);
        var res = "0";
        p = Math.pow;
        d2 = p(10, roundfactor);
        i = 7;
        var found = false;
        while (i) {
            s = p(10, i-- * 3);
            if (s <= value) {
                res = Math.round(value * d2 / s) / d2 + "KMGTPE"[i];
                found = true;
                break;
            }
        }
        if (!found)
            res = this.FormatNumber(value, roundfactor);
        if (isNegative)
            res = "-" + res;
        return res;
    }




    public FormatNumber(value: number, precision: number = 2, removeExtraZeros: boolean = false): string {
        var isNegative = value < 0;
        value = Math.abs(value);
        var intp: string = (Math.floor(value).toString());
        var decp: string = (value - Math.floor(value)).toString();
        decp = (decp.substr(2, 1000) + '000000000').substr(0, precision);
        var res: string = "";
        if (precision == 0)
            res = intp.replace(/\B(?=(\d{3})+(?!\d))/g, this.ThousandSeparator)
        else {
            res = intp.replace(/\B(?=(\d{3})+(?!\d))/g, this.ThousandSeparator) + this.DecimalSeparator + decp;
            //remove extra zeros
            if (removeExtraZeros) {
                while (res.charAt(res.length - 1) == "0") {
                    //res = res.replace(new RegExp("0+$"), ""); - also working
                    res = res.substring(0, res.length - 1);
                }
                if (res.charAt(res.length - 1) == this.DecimalSeparator) {
                    res = res.substring(0, res.length - 1);
                }
            }
        }
        if (isNegative)
            res = "-" + res;
        return res;
    }



    /**
    // Rich formatting of a Date variable into a string
    // d	Day of the month as digits; no leading zero for single-digit days.
    // dd	Day of the month as digits; leading zero for single-digit days.
    // ddd	Day of the week as a three-letter abbreviation.
    // dddd	Day of the week as its full name.
    // m	Month as digits; no leading zero for single-digit months.
    // mm	Month as digits; leading zero for single-digit months.
    // mmm	Month as a three-letter abbreviation.
    // mmmm	Month as its full name.
    // yy	Year as last two digits; leading zero for years less than 10.
    // yyyy	Year represented by four digits.
    // h	Hours; no leading zero for single-digit hours (12-hour clock).
    // hh	Hours; leading zero for single-digit hours (12-hour clock).
    // H	Hours; no leading zero for single-digit hours (24-hour clock).
    // HH	Hours; leading zero for single-digit hours (24-hour clock).
    // M	Minutes; no leading zero for single-digit minutes.Uppercase M unlike CF timeFormat's m to avoid conflict with months.
    // MM	Minutes; leading zero for single-digit minutes.
    // Uppercase MM unlike CF timeFormat's mm to avoid conflict with months.
    // s	Seconds; no leading zero for single-digit seconds.
    // ss	Seconds; leading zero for single-digit seconds.
    // l or L	Milliseconds. l gives 3 digits. L gives 2 digits.
    // t	Lowercase, single-character time marker string: a or p.No equivalent in CF.
    // tt	Lowercase, two-character time marker string: am or pm.No equivalent in CF.
    // T	Uppercase, single-character time marker string: A or P.Uppercase T unlike CF's t to allow for user-specified casing.
    // TT	Uppercase, two-character time marker string: AM or PM.Uppercase TT unlike CF's tt to allow for user-specified casing.
    // Z	US timezone abbreviation, e.g. EST or MDT. With non-US timezones or in the Opera browser, the GMT/UTC offset is returned, e.g. GMT-0500No equivalent in CF.
    // o	GMT/UTC timezone offset, e.g. -0500 or +0230.No equivalent in CF.
    */
    public formatDateTime(date: Date, mask?: string, utc?: any): any {
        var token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
            timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
            timezoneClip = /[^-+\dA-Z]/g,
            pad = function (val: string, len) {
                //val = string(val);
                len = len || 2;
                while (val.toString().length < len) val = "0" + val;
                return val;
            };

        // Regexes and supporting functions are cached through closure

        // Allow setting the utc argument via the mask
        if (mask.slice(0, 4) == "UTC:") {
            mask = mask.slice(4);
            utc = true;
        }

        var _ = utc ? "getUTC" : "get",
            d: any = date[_ + "Date"](),
            D = date[_ + "Day"](),
            m = date[_ + "Month"](),
            y = date[_ + "FullYear"](),
            H = date[_ + "Hours"](),
            M = date[_ + "Minutes"](),
            s = date[_ + "Seconds"](),
            L = date[_ + "Milliseconds"](),
            o = utc ? 0 : date.getTimezoneOffset(),
            flags = {
                d: d,
                dd: pad(d, 2),
                ddd: this.dateFormat_i18n.dayNames[D],
                dddd: this.dateFormat_i18n.dayNames[D + 7],
                m: m + 1,
                mm: pad(m + 1, 2),
                mmm: this.dateFormat_i18n.monthNames[m],
                mmmm: this.dateFormat_i18n.monthNames[m + 12],
                yy: String(y).slice(2),
                yyyy: y,
                h: H % 12 || 12,
                hh: pad((H % 12 || 12).toString(), 2),
                H: H,
                HH: pad(H, 2),
                M: M,
                MM: pad(M, 2),
                s: s,
                ss: pad(s, 2),
                l: pad(L, 3),
                L: pad(L > 99 ? Math.round(L / 10) : L, 2),
                t: H < 12 ? "a" : "p",
                tt: H < 12 ? "am" : "pm",
                T: H < 12 ? "A" : "P",
                TT: H < 12 ? "AM" : "PM",
                Z: utc ? "UTC" : (String(date).match(timezone) || [""]).pop().replace(timezoneClip, ""),
                o: (o > 0 ? "-" : "+") + pad((Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60).toString(), 4),
            };

        return mask.replace(token, function ($0) {
            return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
        });

    }

    // Internationalization strings
    private dateFormat_i18n = {
        dayNames: [
            "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
            "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
        ],
        monthNames: [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
            "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
        ]
    }
}


declare var FB;
export class TFacebookAPI {
    public onInitialized: () => void;

    private _accessToken: string = null;

    private _appid: string = null;
    /*
    * Text specify the text string that labels the control.
    */
    public get ApplicationID(): string {
        return this._appid;
    }
    public set ApplicationID(val: string) {
        if (val != this._appid) {
            this._appid = val;
            this.init();
        }
    }

    public init() {
        if (!this.ApplicationID) return;
        var self = this;
        var d = document;
        var s = 'script'
        var id = 'facebook-jssdk';

        (<any>window).fbAsyncInit = function () {
            (FB).init({
                appId: self.ApplicationID,
                xfbml: true,
                version: 'v2.0'
            })
            if (self.onInitialized) self.onInitialized();
        };

        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
            return;
        }
        js = d.createElement(s);
        js.id = id;
        js.src = "http://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }


    private loginRresponseToEnum(status: any): V.FacebookLoginState {
        if (status === 'connected') return V.FacebookLoginState.Connected;
        else if (status === 'not_authorized') return V.FacebookLoginState.NotAuthorized;
        else return V.FacebookLoginState.NotConnected;
    }

    public getLoginState(callback: (state: V.FacebookLoginState) => void) {
        var self = this;
        FB.getLoginStatus(function (response) {
            var rc: V.FacebookLoginState = self.loginRresponseToEnum(response.status);
            if (rc == V.FacebookLoginState.Connected) {
                FB.api('/me', function (response) {
                    self.UserName = response.name;
                    self.UserID = response.id;
                    if (callback) callback(rc);
                })
            } else if (callback) callback(rc);
        });
    }

    public UserName: string;
    public UserID: string;
    public login(callback?: (state: V.FacebookLoginState) => void) {
        var self = this;
        FB.login(function (response) {
            this._accessToken = response.authResponse.accessToken;
            var rc: V.FacebookLoginState = self.loginRresponseToEnum(response.status);

            if (rc == V.FacebookLoginState.Connected) {
                FB.api('/me', function (response) {
                    self.UserName = response.name;
                    self.UserID = response.id;
                    if (callback) callback(rc);
                })
            } else if (callback) callback(rc);
        })
    }



    public logout(callback?: () => void) {
        FB.logout(function (response) {
            if (callback) callback();
        })
    }
}


export class TLocaleSettings {
    public MSG_This_value_is_required: string = "This value is required.";
    public PercentString: string = "%";
    public LabelPosition: V.LabelPosition = V.LabelPosition.TopLeft;
}


export class TNavbarItem extends VXO.TCollectionItem {
    constructor(text?: string, icon?: string, onClick?: () => void) {
        super();
        this._text = text;
        this._icon = icon;
        this.onClick = onClick;
    }

    public menuItems = new VXM.TMenuItemCollection<VXM.TMenuItem>();
    public addMenuItem(text: string): VXM.TMenuItem {
        var menuItem = new VXM.TMenuItem();
        menuItem.Text = text;
        this.menuItems.add(menuItem);
        return menuItem;
    }


    private _itemaligment: V.ItemAlignment = V.ItemAlignment.Left;
    public get ItemAlignment(): V.ItemAlignment {
        return this._itemaligment;
    }
    public set ItemAlignment(val: V.ItemAlignment) {
        if (val != this._itemaligment) {
            this._itemaligment = val;
        }
    }

    private _imageURL: string = null;
    /*
    * Text specify the text string that labels the control.
    */
    public get ImageURL(): string {
        return this._imageURL;
    }
    public set ImageURL(val: string) {
        if (val != this._imageURL) {
            this._imageURL = val;
        }
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
        }
    }

    private _icon: string;
    public get Icon(): string {
        return this._icon;
    }
    public set Icon(val: string) {
        if (val != this._icon) {
            this._icon = val;
        }
    }

    public onClick: () => void;
}



var __reISOdeffordate__ = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.{0,1}\d*))(?:Z|(\+|-)([\d|:]*))?$/;
function jsonCreateDateParserTemp(key, value) {
    if (typeof value === 'undefined') return null
    if (typeof value === 'string') {
        if ((<string>value).substring(0, 4) == "~@~!")
            return new Date((<string>value).substring(4));
        var a = __reISOdeffordate__.exec(value);
        if (a) return "~@~!" + (new Date(value));
    }
    return value;
}

function stringToHex(tmp: string): string {
    var str = '', i = 0, tmp_len = tmp.length, c;
    for (; i < tmp_len; i += 1) {
        c = tmp.charCodeAt(i);
        str += d2h(c);
    }
    return str;
}

function d2h(d) {
    return d.toString(16);
}


class passwordStrength {
    private patterns = [
        '0123456789',
        'abcdefghijklmnopqrstuvwxyz',
        'qwertyuiopasdfghjklzxcvbnm',
        'azertyuiopqsdfghjklmwxcvbn',
        '!#$*+-.:?@^'
    ];
    private character = { DIGIT: 1, LOWERCASE: 2, UPPERCASE: 4, PUNCTUATION: 8 };
    private threshold = { medium: 16, high: 22, extreme: 36 };
    private dictionary = [];

    constructor() {
    }

    analyze(password: string): V.PasswordStrength {
        var score = Math.floor(password.length * 2);
        var i: number = password.length;

        score += this.analizePatterns(password);
        score += this.analizeDictionary(password);

        while (i--) score += this.analizeCharacter(password.charAt(i));

        return this.analizeScore(score);
    }

    private analizeScore(score): V.PasswordStrength {
        if (score >= this.threshold.extreme) return V.PasswordStrength.EXTREME;
        if (score >= this.threshold.high) return V.PasswordStrength.HIGH;
        if (score >= this.threshold.medium) return V.PasswordStrength.MEDIUM;

        return V.PasswordStrength.LOW;
    }

    private analizePatterns(password: string) {
        var chars = password.toLowerCase();
        var score = 0;

        for (var i in this.patterns) {
            var pattern = this.patterns[i].toLowerCase();
            score += this.analizePattern(chars, pattern);
        }

        // patterns are bad man!
        return score * -5;
    }

    private analizePattern(password: string, pattern: string) {
        var lastmatch = -1;
        var score = -2;

        for (var i = 0; i < password.length; i++) {
            var match = pattern.indexOf(password.charAt(i));

            if (lastmatch === match - 1) {
                lastmatch = match;
                score++;
            }
        }

        return Math.max(0, score);
    }

    private analizeCharacter(character) {
        var code = character.charCodeAt(0);

        if (code >= 97 && code <= 122) return 1;   // lower case
        if (code >= 48 && code <= 57) return 2;    // numeric
        if (code >= 65 && code <= 90) return 3;    // capital
        if (code <= 126) return 4;                 // punctuation
        return 5;                                 // foreign characters etc
    }

    private analizeDictionary(password: string) {
        var chars = password.toLowerCase();
        var score = 0;

        for (var i in this.dictionary) {
            var word = this.dictionary[i].toLowerCase();

            if (password.indexOf(word) >= 0) score++;
        }

        // using words are bad too!
        return score * -5;
    }
}

