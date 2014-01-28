import V = require("VCL/VCL");
import VXC = require("VCL/VXComponent");
import VXT = require("VCL/VXTextBase");
import VXU = require("VCL/VXUtils");
import VXO = require("VCL/VXObject"); 
import VXCO = require("VCL/VXContainer");
import VXW = require("VCL/VXWell");

export class TTabPanel extends VXW.TPanel {
    constructor(aOwner: VXC.TComponent, renderTo?: string, headerText?: string) {
        super(aOwner, renderTo, headerText);
        this.BorderWidth = 0;
        this.HeaderVisible = false;
    }
}

export class TTabSheet extends VXO.TCollectionItem {
    private _tab: V.TTabPage = null;
    private jItem: JQuery = null;
    private aItem: JQuery = null;
    private jText: JQuery = null;
    private jTabPane: JQuery = null;

    private _tabdata: VXCO.TContainer = null;
    
    constructor(aOwner: V.TTabPage, tabdata:VXCO.TContainer ) {
        super();
        this._tab = aOwner;
        if (tabdata) this.ID = tabdata.ID + "@@";
        this._tabdata = tabdata;
    }


    private _text: string = null;
    public get Text(): string {
        return this._text;
    }
    public set Text(val: string) {
        if (val != this._text) {
            this._text = val;
            this._tab.drawDelayed(true);
        }
    }

    private _enabled: boolean = true;
    public get Enabled(): boolean {
        return this._enabled;
    }
    public set Enabled(val: boolean) {
        if (val != this._enabled) {
            this._enabled = val;
            this._tab.drawDelayed(true);
        }
    }
    
    public create() {
        var self: V.TTabSheet = this;

        this.jTabPane = $('<div>');
        this.jItem = $('<li>');
        this.jText = $('<span/>').text(this.Text);
        this.aItem = $('<a>');
        this.jTabPane.addClass("tab-pane").attr('ID', this.ID);

        switch (this._tab.TabStyle) {
            case V.TabStyle.Pill: this.aItem.attr('data-toggle', 'pill'); break;
            default: this.aItem.attr('data-toggle', 'tab'); break;
        }

        if (this._tabdata) {
            var cmp: JQuery = $('#' + this._tabdata.ID);
            cmp.parent().detach('#' + this._tabdata.ID);
            this.jTabPane.append(cmp);
            this._tabdata.create();
        }


       this. aItem.append(this.jText);

        if (!this.Enabled) {
            this.jItem.addClass('disabled');
        } else {
            this.aItem.attr('href', '#'+this.ID);
            this.aItem.on("show", (e) => {
                //e.target // activated tab
                //e.relatedTarget // previous tab
                e.preventDefault();                             
                    var to: JQuery = $(e.target);
                    var toitem = to.parent().data("ID")

                    toitem._tab.items.forEach((item) => {
                        item.jItem.removeClass('active');
                        item.jTabPane.removeClass('active');
                    })
                    toitem.jItem.addClass('active');
                    toitem.jTabPane.addClass('active');
                    if (this._tab.onTabShow != null) {
                        var from: JQuery = $(e.relatedTarget);
                        var fromitem = from.parent().data("ID");
                        V.tryAndCatch(() => {
                            this._tab.onTabShow(fromitem,toitem);
                        });
                    };             
                   
                return true;
            });
        }
        this.jItem.append(this.aItem);
    }
}


export class TTabPage extends VXCO.TContainer {
    public items: V.TCollection<TTabSheet> = new V.TCollection<TTabSheet>();
    private created: boolean = false;

    private _tabstyle: V.TabStyle = V.TabStyle.Tab;
    public get TabStyle(): V.TabStyle {
        return this._tabstyle;
    }
    public set TabStyle(val: V.TabStyle) {
        if (val != this._tabstyle) {
            this._tabstyle = val;
            this.drawDelayed(true);
        }
    }

    public onTabShow:  (from: TTabSheet, to: TTabSheet) => void;
 
    public createTabSheet(text: string, container: VXCO.TContainer): TTabSheet {
        var col = new TTabSheet(this, container);
        this.items.add(col);
        col.Text = text;
        container.FitToWidth = true;
        return col;
    }

    public create() {
        var self = this;

        // detach tab data before cleaning
        if (this.created) {
            this.items.forEach((item) => {
                var td: V.TComponent = (<any>item)._tabdata
                if (td) {
                        td.jComponent.parent().detach('#' + td.ID);
                        this.jComponent.parent().append(td.jComponent);
                    }
                });
        }

        this.jComponent.empty(); //clear all subcomponents
        this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'ul', this.FitToWidth, this.FitToHeight);

        var picker: JQuery = $('<ul>').css('margin-bottom','0px');
        picker.addClass('nav');
        switch (this.TabStyle) {
            case V.TabStyle.Pill:
                picker.addClass("nav-pills");
                break;
            default:
                picker.addClass("nav-tabs");
                break;
        }
        picker.attr('data-tabs', 'tabs');
        var picker2: JQuery = $('<div>');
        picker2.addClass('tab-content');
        this.items.forEach((item) => {
            item.create();
            (<any>item).jItem.data("ID", item);
            picker.append((<any>item).jItem);
            (<any>item).jTabPane.data("ID", item);
            picker2.append((<any>item).jTabPane);


        });
        this.jComponent.append(picker);
        this.jComponent.append(picker2);


        var foundactive: boolean = false;
        var firstitem: TTabSheet = null;
        this.items.forEach((item) => {
            if (!firstitem) {firstitem = item;}
            if ((<any>item).jItem.hasClass('active')) {
                foundactive = true;
            }
        });
        if (!foundactive && firstitem) {
            (<any>firstitem).jItem.addClass('active');
            (<any>firstitem).jTabPane.addClass('active');
        }

        this.created = true;
    }

    public draw(reCreate: boolean) {
        if (!this.parentInitialized()) return;
        super.draw(reCreate);
    }
}