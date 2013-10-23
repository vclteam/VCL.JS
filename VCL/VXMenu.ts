import V = require("VCL/VCL");
import VXO = require("VCL/VXObject");
import VXU = require("VCL/VXUtils");

export class VXMenuItem extends VXO.VXCollectionItem {
    public jComponent: JQuery;
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
            var itemRef: JQuery = $('<a/>');
            itemRef.click(() => {
                if (this.Enabled && this.onClicked != null) {
                    (V.tryAndCatch(() => { this.onClicked(self); }))
                }
            })
            itemRef.text(this.Text);
            itemRef.appendTo(this.jComponent);
            if (this.ButtonIcon != null) {
                var imageRef: JQuery = $('<i/>');
                imageRef.addClass(V.iconEnumToBootstrapStyle(this.ButtonIcon));
                imageRef.prependTo(itemRef);
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


    private _buttonicon: V.ButtonIcon = null;
    public get ButtonIcon(): V.ButtonIcon {
        return this._buttonicon;
    }
    public set ButtonIcon(val: V.ButtonIcon) {
        if (val != this._buttonicon) {
            this._buttonicon = val;
            this.create();
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


export class VXMenuItemCollection<T> extends VXO.VXCollection<VXMenuItem> {
    public createmenu(headerClass : string): JQuery {
        var menu: JQuery = $('<ul>');
        menu.addClass(headerClass);
        this.forEach((menuItem: VXMenuItem) => {
            menuItem.create();
            menuItem.jComponent.appendTo(menu);
            return true;
        })
        return menu;
    }

}