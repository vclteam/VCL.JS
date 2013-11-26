import VXC = require("VCL/VXComponent");
import VXO = require("VCL/VXObject");

export class VXTab extends VXC.VXComponent {
    public items = new VXO.VXCollection <VXTabsheetItem >();
    public createTab(text: string, renderTo: string): VXTabsheetItem {
        var tabItem = new VXTabsheetItem();
        tabItem.Text = text;
        this.items.add(tabItem);
        return tabItem
    }

    public draw(reCreate: boolean) {
        if (reCreate || !this.initialized) this.create();
        this.initialized = true;

    }
}


export class VXTabsheetItem extends VXO.VXCollectionItem {
    private _enabled: boolean = true;
    public get Enabled(): boolean {
        return this._enabled;
    }
    public set Enabled(val: boolean) {
        if (val != this._enabled) {
            this._enabled = val;
        }
    }


    private _visible: boolean = true;
    public get Visible(): boolean {
        return this._visible;
    }
    public set Visible(val: boolean) {
        if (val != this._enabled) {
            this._visible = val;
        }
    }

    private _text: string = "";
    public get Text(): string {
        return this._text;
    }
    public set Text(val: string) {
        if (val != this._text) {
            this._text = val;
        }
    }
}