import VXC = require("VCL/VXComponent");
import VXU = require("VCL/VXUtils");
import VXM = require("VCL/VXMenu");

export class VXBarBase extends VXC.VXComponent {

    public items = new VXM.VXMenuItemCollection<VXM.VXMenuItem>();
    public createItem(text: string, onClicked?: () => void ): VXM.VXMenuItem {
        var menuItem = new VXM.VXMenuItem();
        menuItem.Text = text;
        menuItem.onClicked = onClicked;
        this.items.add(menuItem);
        return menuItem;
    }
}

export class VXNavBar extends VXBarBase {
    private _piils: boolean = false;
    public get Pills(): boolean {
        return this._piils;
    }
    public set Pills(val: boolean) {
        if (val != this._piils) {
            this._piils = val;
            this.draw(true);
        }
    }

    constructor(aOwner: VXC.VXComponent, renderTo?: string) {
        super(aOwner, renderTo);
        (<any>this)._fittowidth = true;
    }


    public create() {
        this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'div', this.FitToWidth, this.FitToHeight);
        this.jComponent.addClass('navbar');

        var well: JQuery = $("<div>");
        well.addClass('navbar-inner');
        //if (!this.Transparent) well.addClass('well');


        if (this.items.length() > 0) {
            var ulClass = "nav";
            if (this.Pills) ulClass += ' nav-pills';
            var menuItems: JQuery = this.items.createmenu(ulClass);
            menuItems.appendTo(well);

           
        }
        well.appendTo(this.jComponent);
        super.create();

    }

    public draw(reCreate: boolean) {
        if (!this.parentInitialized())return;super.draw(reCreate);
        if (reCreate || !this.initialized) this.create();
        this.initialized = true;

    }
}

export class VXSideBar extends VXBarBase {
    private _transparent: boolean = false;
    public get Transparent(): boolean {
        return this._transparent;
    }
    public set Transparent(val: boolean) {
        if (val != this._transparent) {
            this._transparent = val;
            this.draw(true);
        }
    }

    private _header: string = "";
    public get Header(): string {
        return this._header;
    }
    public set Header(val: string) {
        if (val != this._header) {
            this._header = val;
            this.draw(true);
        }
    }


    public create() {
        this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'div', this.FitToWidth, this.FitToHeight);
        this.jComponent.addClass('sidebar-nav');
        var well: JQuery = $("<div>");
        well.css('padding-top', '8px');
        well.css('padding-right', '0px');
        well.css('padding-left', '0px');
        if (!this.Transparent) well.addClass('well');


        if (this.items.length() > 0) {
            var menuItems: JQuery = this.items.createmenu('nav nav-list');
            menuItems.appendTo(well);

            if (this.Header != null && this.Header.toString().length > 0) {
                var head: JQuery;
                head = $('<li>');
                head.addClass('divider');
                head.prependTo(menuItems);

                head = $('<li>');
                head.addClass("nav-header");
                head.text(this.Header);
                head.prependTo(menuItems);
            }
        }
        well.appendTo(this.jComponent);
        super.create();
    }

    public draw(reCreate: boolean) {
        if (!this.parentInitialized())return;super.draw(reCreate);
        if (reCreate || !this.initialized) this.create();
        this.initialized = true;

    }
}
