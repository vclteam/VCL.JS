import VXC = require("./VXComponent");
import V = require("./VCL");
export declare class TGraphic extends VXC.TPopupmenuComponent {
    onClicked: (sender: TGraphic) => void;
    ondblclicked: (sender: TGraphic) => void;
}
export declare class TImage extends TGraphic {
    private jImage;
    private _labelVisible;
    LabelVisible: boolean;
    private _labeltext;
    LabelText: string;
    private _labetextcolor;
    LabelTextColor: string;
    private _labelposition;
    LabelPosition: V.LabelPosition;
    private _url;
    Url: string;
    private _hoverUrl;
    HoverImageUrl: string;
    private _disableUrl;
    DisableUrl: string;
    private _labelstyle;
    TextStyle: V.TextStyle;
    /**
    * The required src attribute specifies the URL of the image.
    */
    Src: string;
    jLabel: JQuery;
    create(): void;
    draw(reCreate: boolean): void;
    showMenuDropdown(): void;
    hideMenuDropdown(): void;
}
export declare class TGravatarImage extends TGraphic {
    private jImage;
    private _email;
    Email: string;
    private _size;
    Size: number;
    create(): void;
    private hexcase;
    private hex_md5(s);
    private rstr2hex(input);
    private rstr_md5(s);
    private rstr2binl(input);
    private binl_md5(x, len);
    private safe_add(x, y);
    private bit_rol(num, cnt);
    private md5_cmn(q, a, b, x, s, t);
    private md5_ff(a, b, c, d, x, s, t);
    private md5_gg(a, b, c, d, x, s, t);
    private md5_hh(a, b, c, d, x, s, t);
    private md5_ii(a, b, c, d, x, s, t);
    private binl2rstr(input);
    private str2rstr_utf8(input);
    draw(reCreate: boolean): void;
    showMenuDropdown(): void;
    hideMenuDropdown(): void;
}
export declare class TIcon extends TGraphic {
    private _icon;
    Icon: V.Icon;
    private _size;
    Size: number;
    create(): void;
    private _color;
    Color: string;
    draw(reCreate: boolean): void;
}
