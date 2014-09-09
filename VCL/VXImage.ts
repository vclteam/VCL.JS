import VXC = require("VCL/VXComponent");
import VXU = require("VCL/VXUtils");
import V = require("VCL/VCL");
import VXM = require("VCL/VXMenu");

export class TGraphic extends VXC.TPopupmenuComponent {
    public onClicked: () => void;
    public ondblclicked: () => void;
}

export class TImage extends TGraphic {
    private jImage: JQuery;

    private _labelVisible: boolean = false;
    public get LabelVisible(): boolean {
        return this._labelVisible;
    }
    public set LabelVisible(val: boolean) {
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

    private _labelposition: V.LabelPosition = V.LabelPosition.BottomCenter;
    public get LabelPosition(): V.LabelPosition {
        return this._labelposition;
    }
    public set LabelPosition(val: V.LabelPosition) {
        if (val != this._labelposition) {
            this._labelposition = val;
            this.drawDelayed(true);
        }
    }



    private _url: string;
    public get Url(): string {
        return this._url;
    }

    public set Url(val: string) {
        if (val != this._url) {
            this._url = val;
            this.drawDelayed(true);
        }
    }

    private _hoverUrl: string;
    public get HoverImageUrl(): string {
        return this._hoverUrl;
    }

    public set HoverImageUrl(val: string) {
        if (val != this._hoverUrl) {
            this._hoverUrl = val;
            this.drawDelayed(true);
        }
    }

    private _disableUrl: string;
    public get DisableUrl(): string {
        return this._disableUrl;
    }

    public set DisableUrl(val: string) {
        if (val != this._hoverUrl) {
            this._disableUrl = val;
            this.drawDelayed(true);
        }
    }



    private _labelstyle: V.TextStyle = V.TextStyle.Default;
    public get TextStyle(): V.TextStyle {
        return this._labelstyle;
    }
    public set TextStyle(val: V.TextStyle) {
        if (val != this._labelstyle) {
            this._labelstyle = val;
            this.drawDelayed(true);
        }
    }


    /*
    * The required src attribute specifies the URL of the image.
    */
    public get Src(): string {
        return this._url;
    }
    public set Src(val: string) {
        if (val != this._url) {
            this._url = val;
            this.drawDelayed(true);
        }
    }

    public jLabel: JQuery;
    public create() {
        var self = this;

        this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'div', this.FitToWidth, this.FitToHeight);
        this.jComponent.empty();
        this.jComponent.addClass('btn-group').css('text-align','center');
        this.jImage = $("<img>");
        if (this.onClicked || this.ondblclicked) this.jImage.css('cursor', 'pointer');
        this.jImage.appendTo(this.jComponent);
        

        this.jImage.off("click").click(() => { if (self.onClicked != null && self.Enabled) (V.tryAndCatch(() => { self.onClicked(); })); return false; })
        this.jImage.dblclick(() => { if (this.ondblclicked != null) (V.tryAndCatch(() => { this.ondblclicked(); })); return false; })
        
        if (this.DisableUrl && this.Enabled) this.jImage.attr('src', this.DisableUrl);
        else this.jImage.attr('src', this.Url);
        (<any>this).jDropDownTarget = this.jImage; //control the menupopup mechansim
        if (self.HoverImageUrl) {
            this.jImage.hover(
            (e) => {
                self.jImage.attr('src', self.HoverImageUrl);
            },
            (e) => {
                self.jImage.attr('src', self.Url);
            }
            );
        }

        if (this.LabelVisible) {
            if (this.TextStyle == V.TextStyle.h1)
                this.jLabel = $('<h1/>');
            else if (this.TextStyle == V.TextStyle.h2)
                this.jLabel = $('<h2/>');
            else if (this.TextStyle == V.TextStyle.h3)
                this.jLabel = $('<h3/>');
            else if (this.TextStyle == V.TextStyle.h4)
                this.jLabel = $('<h4/>');
            else if (this.TextStyle == V.TextStyle.h5)
                this.jLabel = $('<h5/>');
            else if (this.TextStyle == V.TextStyle.h6)
                this.jLabel = $('<h6/>');
            else if (this.TextStyle == V.TextStyle.strong)
                this.jLabel = $('<strong/>');
            else if (this.TextStyle == V.TextStyle.lead) {
                this.jLabel = $('<label/>');
                this.jLabel.addClass('lead');
            } else if (this.TextStyle == V.TextStyle.small) {
                this.jLabel = $('<small/>');
            } else this.jLabel = $('<label/>');
            this.jLabel.off("click").click(() => { if (self.onClicked != null && self.Enabled) (V.tryAndCatch(() => { self.onClicked(); })); return false; })
            this.jLabel.dblclick(() => { if (this.ondblclicked != null) (V.tryAndCatch(() => { this.ondblclicked(); })); return false; })

            this.jLabel.text(this.LabelText);
            if (this.LabelTextColor) this.jLabel.css('color', this.LabelTextColor);

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
                this.jComponent.prepend(this.jLabel)
            } else if (this.LabelPosition == V.LabelPosition.Left) {
                this.jLabel.addClass('pull-left');
                this.jComponent.prepend(this.jLabel)
            } else if (this.LabelPosition == V.LabelPosition.BottomCenter) {
                this.jLabel.addClass('text-center');
                this.jComponent.append(this.jLabel);
            } else if (this.LabelPosition == V.LabelPosition.BottomRight) {
                this.jLabel.addClass('text-right');
                this.jComponent.append(this.jLabel);
            }
            if (this.onClicked || this.ondblclicked) this.jLabel.css('cursor', 'pointer');
        }

        super.create();
    }


    public draw(reCreate: boolean) {
        if (!this.parentInitialized()) return;
        super.draw(reCreate);
    }

    public showMenuDropdown() {
        this.jComponent.addClass("open");
    }

    public hideMenuDropdown() {
        this.jComponent.removeClass("open");
    }

}


export class TGravatarImage extends TGraphic {
    private jImage: JQuery;

    private _email: string;
    public get Email(): string {
        return this._email;
    }

    public set Email(val: string) {
        if (val != this._email) {
            this._email = val;
            this.drawDelayed(true);
        }
    }

    private _size: number;
    public get Size(): number {
        return this._size;
    }

    public set Size(val: number) {
        if (val != this._size) {
            this._size = val;
            this.drawDelayed(true);
        }
    }



    public create() {
        var self = this;
        this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'div', this.FitToWidth, this.FitToHeight);
        this.jComponent.empty();
        this.jComponent.addClass('btn-group');
        this.jImage = $("<img>");
        this.jImage.appendTo(this.jComponent);

        this.jImage.off("click").click(() => { if (self.onClicked != null && self.Enabled) (V.tryAndCatch(() => { self.onClicked(); })); return false; })
        this.jImage.dblclick(() => { if (this.ondblclicked != null) (V.tryAndCatch(() => { this.ondblclicked(); })); return false; })

        this.jImage.attr('src', "http://www.gravatar.com/avatar/" + this.hex_md5(this.Email) + (this.Size?'?s=' + this.Size:''));
        (<any>this).jDropDownTarget = this.jImage; //control the menupopup mechansim

        super.create();
    }

    private hexcase = 0;   
    private hex_md5(s) { return this.rstr2hex(this.rstr_md5(this.str2rstr_utf8(s))); }
    private  rstr2hex(input)
    {
        try { 
            this.hexcase
        } catch (e) {
            this.hexcase = 0;
        }
        var hex_tab = this.hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
        var output = "";
        var x;
        for (var i = 0; i < input.length; i++) {
            x = input.charCodeAt(i);
            output += hex_tab.charAt((x >>> 4) & 0x0F)+ hex_tab.charAt(x & 0x0F);
        }
        return output;
    }

    private rstr_md5(s)
    {
        return this.binl2rstr(this.binl_md5(this.rstr2binl(s), s.length * 8));
    }

    private rstr2binl(input) {
        var output = Array(input.length >> 2);
        for (var i = 0; i < output.length; i++)
            output[i] = 0;
        for (var i = 0; i < input.length * 8; i += 8)
            output[i >> 5] |= (input.charCodeAt(i / 8) & 0xFF) << (i % 32);
        return output;
    }

    private binl_md5(x, len) {
        /* append padding */
        x[len >> 5] |= 0x80 << ((len) % 32);
        x[(((len + 64) >>> 9) << 4) + 14] = len;

        var a = 1732584193;
        var b = -271733879;
        var c = -1732584194;
        var d = 271733878;

        for (var i = 0; i < x.length; i += 16) {
            var olda = a;
            var oldb = b;
            var oldc = c;
            var oldd = d;

            a = this.md5_ff(a, b, c, d, x[i + 0], 7, -680876936);
            d = this.md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
            c = this.md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
            b = this.md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
            a = this.md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
            d = this.md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
            c = this.md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
            b = this.md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
            a = this.md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
            d = this.md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
            c = this.md5_ff(c, d, a, b, x[i + 10], 17, -42063);
            b = this.md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
            a = this.md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
            d = this.md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
            c = this.md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
            b = this.md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);

            a = this.md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
            d = this.md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
            c = this.md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
            b = this.md5_gg(b, c, d, a, x[i + 0], 20, -373897302);
            a = this.md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
            d = this.md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
            c = this.md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
            b = this.md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
            a = this.md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
            d = this.md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
            c = this.md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
            b = this.md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
            a = this.md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
            d = this.md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
            c = this.md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
            b = this.md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);

            a = this.md5_hh(a, b, c, d, x[i + 5], 4, -378558);
            d = this.md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
            c = this.md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
            b = this.md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
            a = this.md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
            d = this.md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
            c = this.md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
            b = this.md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
            a = this.md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
            d = this.md5_hh(d, a, b, c, x[i + 0], 11, -358537222);
            c = this.md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
            b = this.md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
            a = this.md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
            d = this.md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
            c = this.md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
            b = this.md5_hh(b, c, d, a, x[i + 2], 23, -995338651);

            a = this.md5_ii(a, b, c, d, x[i + 0], 6, -198630844);
            d = this.md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
            c = this.md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
            b = this.md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
            a = this.md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
            d = this.md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
            c = this.md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
            b = this.md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
            a = this.md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
            d = this.md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
            c = this.md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
            b = this.md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
            a = this.md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
            d = this.md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
            c = this.md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
            b = this.md5_ii(b, c, d, a, x[i + 9], 21, -343485551);

            a = this.safe_add(a, olda);
            b = this.safe_add(b, oldb);
            c = this.safe_add(c, oldc);
            d = this.safe_add(d, oldd);
        }
        return Array(a, b, c, d);
    }

    private safe_add(x, y) {
        var lsw = (x & 0xFFFF) + (y & 0xFFFF);
        var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
        return (msw << 16) | (lsw & 0xFFFF);
    }
    private bit_rol(num, cnt) {
        return (num << cnt) | (num >>> (32 - cnt));
    }

    private md5_cmn(q, a, b, x, s, t) {
        return this.safe_add(this.bit_rol(this.safe_add(this.safe_add(a, q), this.safe_add(x, t)), s), b);
    }
    private md5_ff(a, b, c, d, x, s, t) {
        return this.md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
    }
    private md5_gg(a, b, c, d, x, s, t) {
        return this.md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
    }
    private md5_hh(a, b, c, d, x, s, t) {
        return this.md5_cmn(b ^ c ^ d, a, b, x, s, t);
    }
    private md5_ii(a, b, c, d, x, s, t) {
        return this.md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
    }

    private binl2rstr(input) {
        var output = "";
        for (var i = 0; i < input.length * 32; i += 8)
            output += String.fromCharCode((input[i >> 5] >>> (i % 32)) & 0xFF);
        return output;
    }

    private str2rstr_utf8(input) {
        var output = "";
        var i = -1;
        var x, y;

        while (++i < input.length) {
            /* Decode utf-16 surrogate pairs */
            x = input.charCodeAt(i);
            y = i + 1 < input.length ? input.charCodeAt(i + 1) : 0;
            if (0xD800 <= x && x <= 0xDBFF && 0xDC00 <= y && y <= 0xDFFF) {
                x = 0x10000 + ((x & 0x03FF) << 10) + (y & 0x03FF);
                i++;
            }

            /* Encode output as utf-8 */
            if (x <= 0x7F)
                output += String.fromCharCode(x);
            else if (x <= 0x7FF)
                output += String.fromCharCode(0xC0 | ((x >>> 6) & 0x1F),
                    0x80 | (x & 0x3F));
            else if (x <= 0xFFFF)
                output += String.fromCharCode(0xE0 | ((x >>> 12) & 0x0F),
                    0x80 | ((x >>> 6) & 0x3F),
                    0x80 | (x & 0x3F));
            else if (x <= 0x1FFFFF)
                output += String.fromCharCode(0xF0 | ((x >>> 18) & 0x07),
                    0x80 | ((x >>> 12) & 0x3F),
                    0x80 | ((x >>> 6) & 0x3F),
                    0x80 | (x & 0x3F));
        }
        return output;
    }

    public draw(reCreate: boolean) {
        if (!this.parentInitialized()) return;
        super.draw(reCreate);
    }

    public showMenuDropdown() {
        this.jComponent.addClass("open");
    }

    public hideMenuDropdown() {
        this.jComponent.removeClass("open");
    }

}


export class TIcon extends TGraphic {
    private _icon: V.Icon = null;
    public get Icon(): V.Icon {
        return this._icon;
    }
    public set Icon(val: V.Icon) {
        if (val != this._icon) {
            this._icon = val;
            this.drawDelayed(true);
        }
    }

    private _size: number = 1;
    public get Size(): number {
        return this._size;
    }
    public set Size(val: number) {
        if (val != this._size) {
            this._size = val;
            this.drawDelayed(true);
        }
    }


    public create() {
        var self = this;
        this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'i', this.FitToWidth, this.FitToHeight);
        this.jComponent.off("click").click(() => { if (self.onClicked != null && self.Enabled) (V.tryAndCatch(() => { self.onClicked(); })); return false; })
        this.jComponent.dblclick(() => { if (this.ondblclicked != null) (V.tryAndCatch(() => { this.ondblclicked(); })); return false; })

        if (this.jComponent.attr("class")) {
            var classes = this.jComponent.attr("class").split(" ").filter(function (c) {
                return c.lastIndexOf("icon_", 0) !== 0;
            });
            this.jComponent.removeClass(classes.join(" "));
        }

        this.jComponent.addClass(V.iconEnumToBootstrapStyle(<any>this.Icon));
        if (this.Color) this.jComponent.css('color', this.Color);
        this.jComponent.css('font-size', this.Size + "em");

        super.create();
    }

    private _color: string;
    public get Color(): string {
        return this._color;
    }
    public set Color(val: string) {
        if (V.Application.checkColorString(val)) {
            if (val != this._color) {
                this._color = val;
                this.drawDelayed(true);
            }
        }
    }



    public draw(reCreate: boolean) {
        if (!this.parentInitialized()) return;
        super.draw(reCreate);
    }
}