///<reference path="Scripts/jquery.d.ts" />
///<reference path="Scripts/require.d.ts" />
///<reference path="Scripts/sammyjs.d.ts" />
import VXP = require("VCL/VXPage");
import VXO = require("VCL/VXObject");
import V = require("VCL/VCL");
import VXM = require("VCL/VXMenu");
import VXServer = require("VCL/VXServer");


export class VXApplication {
    private static _instance: VXApplication;
    private sammy: any;
    public navbaritems = new VXO.VXCollection<VXNavbarItem>();

    public initialize() {
        var self: VXApplication = this;
        $('head').append('<style type = "text/css" > .no-space [class*="span"] {    margin-left: 0;}</style>');

        this.sammy = Sammy(function () {
            this.use("Session");
            this.use("Local");

            this.get('#/', function () {
                this.navigateToPage(buildPageURL(self.MainPage));
            });
            this.get('#show/:class/:params', function () {
                var args: any[] = [];
                if (self.AuthenticationRequired && !self.Authenticated && this.params["class"].toUpperCase() != self.LoginPage.toUpperCase()) {
                    self.navigateToPage(self.LoginPage, ["#show/" + this.params["class"] + '/' + <string>this.params["params"]]);
                } else {
                    var className: string = this.params["class"];
                    var paramArgStr: string = self.hexToString(<string>this.params["params"]);
                    var paramArg = JSON.parse(paramArgStr);
                    $.each(paramArg, function (index, item) {
                        if (typeof item == "string" && item.slice(0, 4) == "!~@!") {
                            var itemS: string = <string> item;
                            args.push(new Date(parseInt(itemS.substring(4))));
                        } else args.push(item);
                    });
                    var paramArg = JSON.parse(paramArgStr);
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

    /*
    * load page asynchronously create an return an instance as a callback
    */
    public loadPage(classPathName: string, __args: any[], __callback: (page: V.TPage) => void ) {
        var classes: string[] = [];
        var className = classPathName.split('/')[classPathName.split('/').length - 1];
        classes.push(classPathName);
        require(classes, function (page) {
            var classExists = true;
            try {
                typeof (page[className].prototype);
            } catch (err) {
                V.Application.raiseException("Class '" + className + "' was not found in module '" + classPathName + ".ts'");
                classExists = false;
            }
            if (classExists) {
                var instance = Object.create(page[className].prototype);
                instance.HTMLfileName = classPathName + ".html";
                instance.constructor.apply(instance, __args);
                __callback(instance);
            }
        })
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
        this.sammy.run(buildPageURL(this.MainPage));
    }

    public login(email: string, password: string, onSuccuess: () => void ,
        onFail?: (errorMessage: string) => void ) {
        var server = new VXServer.VXServer();
        server.send("LOGIN", { USER: email, PASS: password }, (data) => {
            if (data.STATUS == "OK") {
                this.UserRole = data.ROLE;
                this.UserName = data.USER;
                this.UserEmail = data.EMAIL;
                onSuccuess();
            }
            else if (onFail) onFail(data);
        }, (error: string) => {
                if (onFail) onFail(error);
            });
    }



    public navigateToPage(className: String, ConstructorArgs?: any[]) {
        var url: string = buildPageURL(className, ConstructorArgs);
        this.navigateToURL(url);
    }

    public navigateToURL(URL: string) {
        this.sammy.setLocation(URL);
    }

    public raiseException(errorMessage: string) {
        if (this.onException == null) {
            alert(errorMessage);
        }
        else this.onException(errorMessage);
    }


    public addNavbarItem(text: string, icon: string, onClick: () => void ): VXNavbarItem {
        var item: VXNavbarItem = new VXNavbarItem(text, icon, onClick);
        this.navbaritems.add(item);
        return item;
    }

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
        this.navbaritems.forEach((item: VXNavbarItem) => {
            var baritem: JQuery = $('<a/>');
            baritem.attr('href', '#');
            baritem.click(() => { if (item.onClick != null) V.tryAndCatch(() => { item.onClick(); }); return false; });
            if (item.Icon) {
                $('<i/>').addClass(item.Icon).appendTo(baritem)
            }

            $("<span/>").text(item.Text).appendTo(baritem);
            var lineItem: JQuery = $('<li>/');
            baritem.appendTo(lineItem);
            if (item.menu.length() > 0) {

                item.menu.createmenu('dropdown-menu').appendTo(lineItem);
                baritem.addClass('dropdown-toggle');
                baritem.attr('data-toggle', "dropdown");
                lineItem.addClass('dropdown');
                $('<b class="caret">').appendTo(baritem);
            }
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


    /**
    * Creates a globally unique identifier.
    */
    public genGUID(): string {
        return this.s4() + this.s4() + this.s4() + this.s4() +
            this.s4() + this.s4() + this.s4() + this.s4();
    }

    public FormatCurrency(value: number): string {
        var intp: string = (Math.floor(value).toString());
        var decp: string = (value - Math.floor(value)).toString();
        decp = (decp.substr(2, 1000) + '000000000').substr(0, this.CurrencyDecimals);
        return this.CurrencyString + intp.replace(/\B(?=(\d{3})+(?!\d))/g, this.ThousandSeparator)
            + this.DecimalSeparator + decp;
    }

    public FormatNumber(value: number): string {
        var intp: string = (Math.floor(value).toString());
        var decp: string = (value - Math.floor(value)).toString();
        decp = (decp.substr(2, 1000) + '000000000').substr(0, this.CurrencyDecimals);
        return intp.replace(/\B(?=(\d{3})+(?!\d))/g, this.ThousandSeparator)
            + this.DecimalSeparator + decp;
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
    public FormatDateTime(date: Date, mask?: string, utc?: any): any {
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
    };


}

export class VXNavbarItem extends VXO.VXCollectionItem {
    constructor(text?: string, icon?: string, onClick?: () => void ) {
        super();
        this._text = text;
        this._icon = icon;
        this.onClick = onClick;
    }

    public menu = new VXM.VXMenuItemCollection<VXM.VXMenuItem>();
    public addMenuItem(text: string): VXM.VXMenuItem {
        var menuItem = new VXM.VXMenuItem();
        menuItem.Text = text;
        this.menu.add(menuItem);
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

class BrowserHistory {
    public navigateToPage(className: String, ConstructorArgs?: any[]) {
        var url: string = buildPageURL(className, ConstructorArgs);
    }
}

function buildPageURL(className: String, ConstructorArgs?: any[]) {
    var paramObj = new Object();
    if (ConstructorArgs != null) {
        $.each(ConstructorArgs, function (index, item) {
            if (item instanceof Date) {
                paramObj[index] = '!~@!' + (<Date>item).getTime();
            } else paramObj[index] = item;
        });
    }
    return "#show/" + className + '/' + (decodeURIComponent(stringToHex(JSON.stringify(paramObj))));
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
