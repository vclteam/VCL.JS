import V = require("./VCL");
import VXO = require("./VXObject");
export declare class TMenuItem extends VXO.TCollectionItem {
    jComponent: JQuery;
    jIcon: JQuery;
    create(): void;
    constructor();
    private _enabled;
    Enabled: boolean;
    private _iconclass;
    IconClass: String;
    private _visible;
    Visible: boolean;
    /**
    * Display the component by fading them to opaque
    */
    fadeIn(duration?: number, complete?: () => void): void;
    /**
    * Hide the matched elements by fading them to transparent.
    */
    fadeOut(duration?: number, complete?: () => void): void;
    private _imageurl;
    ImageURL: string;
    private _icon;
    Icon: V.Icon;
    private _iconcolor;
    IconColor: string;
    private _text;
    Text: string;
    private _divider;
    Divider: boolean;
    onClicked: (item: V.TMenuItem) => void;
}
export declare class TMenuItemCollection<T> extends VXO.TCollection<TMenuItem> {
    createmenu(headerClass: string): JQuery;
    remove(element: TMenuItem): boolean;
    add(element: TMenuItem): boolean;
}
