import V = require("VCL/VCL");
import VXO = require("VCL/VXObject");
import VXU = require("VCL/VXUtils");

export class TMenuItem extends VXO.TCollectionItem {
    public jComponent: JQuery;
    public jIcon: JQuery;

    public create() {
        var self = this;
        if (this.jComponent == null) this.jComponent = $('<li/>');
        if (!this.Enabled) this.jComponent.addClass('disabled');
        else this.jComponent.removeClass('disabled');
        if (this.Visible) this.jComponent.show();
        else this.jComponent.hide();
        if (this.Divider) this.jComponent.addClass('divider');
        else {
            this.jComponent.empty();
            //var itemRef: JQuery = $('<a href="#"/>');
            var itemRef: JQuery = $('<a style="cursor:pointer;text-align:left"/>');
            itemRef.off("click").click(() => {
                if (this.Enabled && this.onClicked != null) {
                    (V.tryAndCatch(() => { this.onClicked(self); }))
                }
            })
            itemRef.text(this.Text);
            itemRef.appendTo(this.jComponent);
            if (this.Icon != null) {
                var imageRef: JQuery = $('<i/>');
                this.jIcon = imageRef;
                imageRef.addClass(V.iconEnumToBootstrapStyle(<any>this.Icon) + " "  + this.IconClass);
                imageRef.prependTo(itemRef);
                if (this.IconColor) imageRef.css('color', this.IconColor);
            }
        }
    }
    constructor() {
        super();
    }
    private _enabled: boolean = true;
    public get Enabled(): boolean {
        return this._enabled;
    }
    public set Enabled(val: boolean) {
        if (val != this._enabled) {
            this._enabled = val;
            this.create();
        }
    }

    private _iconclass: String = "";
    public get IconClass(): String {
        return this._iconclass;
    }
    public set IconClass(val: String) {
        if (val != this._iconclass) {
            this._iconclass = val;
            this.create();
        }
    }


    private _visible: boolean = true;
    public get Visible(): boolean {
        return this._visible;
    }
    public set Visible(val: boolean) {
        if (val != this._enabled) {
            this._visible = val;
            this.create();
        }
    }

    /**
    * Display the component by fading them to opaque
    */
    public fadeIn(duration?: number, complete?: () => void ): void {
        this.jComponent.fadeIn(duration, function () {
            if (complete != null) complete();
        })
    }

    /**
    * Hide the matched elements by fading them to transparent.
    */
    public fadeOut(duration?: number, complete?: () => void ): void {
        this.jComponent.fadeOut(duration, function () {
            if (complete != null) complete();
        })
    }


    private _icon: V.Icon = null;
    public get Icon(): V.Icon {
        return this._icon;
    }
    public set Icon(val: V.Icon) {
        if (val != this._icon) {
            this._icon = val;
            this.create();
        }
    }

    private _iconcolor: string = null;
    public get IconColor(): string {
        return this._iconcolor;
    }
    public set IconColor(val: string) {
        if (V.Application.checkColorString(val)) {
            if (val != this._iconcolor) {
                this._iconcolor = val;
                this.create();
            }
        }
    }

    private _text: string = "";
    public get Text(): string {
        return this._text;
    }
    public set Text(val: string) {
        if (val != this._text) {
            this._text = val;
            this.create();
        }
    }

    private _divider: boolean = false;
    public get Divider(): boolean {
        return this._divider;
    }
    public set Divider(val: boolean) {
        if (val != this._divider) {
            this._divider = val;
            this.create();
        }
    }

    public onClicked: (item: V.TMenuItem) => void;
}


export class TMenuItemCollection<T> extends VXO.TCollection<TMenuItem> {
    public createmenu(headerClass : string): JQuery {
        var menu: JQuery = $('<ul>');
        menu.addClass(headerClass);
        this.forEach((menuItem: TMenuItem) => {
            menuItem.create();
            menuItem.jComponent.appendTo(menu);
            return true;
        })
        return menu;
    }

    remove(element: TMenuItem): boolean {
        var rc = super.remove(element);
        return rc;
    }

    add(element: TMenuItem): boolean {
        var rc = super.add(element);
        return rc;
    }


}