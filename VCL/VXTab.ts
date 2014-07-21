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

    constructor(aOwner: V.TTabPage, tabdata: VXCO.TContainer) {
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


        this.aItem.append(this.jText);

        if (!this.Enabled) {
            this.jItem.addClass('disabled');
        } else {
            this.aItem.attr('href', '#' + this.ID);
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
                (<any>self)._tab._activetabsheet = toitem;
                if (self._tab.onTabShow != null) {
                    var from: JQuery = $(e.relatedTarget);
                    var fromitem = from.parent().data("ID");
                    V.tryAndCatch(() => {
                        self._tab.onTabShow(fromitem, toitem);
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

    private _activetabsheet: V.TTabSheet;
    public get ActiveTabSheet(): V.TTabSheet {
        return this._activetabsheet;
    }
    public set ActiveTabSheet(val: V.TTabSheet) {
        if (val != this._activetabsheet) {
            this._activetabsheet = val;
            this.draw(true);
        }
    }


    public onTabShow: (from: TTabSheet, to: TTabSheet) => void;

    public createTabSheet(text: string, container: VXCO.TContainer): TTabSheet {
        var col = new TTabSheet(this, container);
        this.items.add(col);
        col.Text = text;
        container.FitToWidth = true;
        return col;
    }

    public create() {
        var self = this;

        // detach panel back before cleaning
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

        var picker: JQuery = $('<ul>').css('margin-bottom', '0px');
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
            if (!firstitem) { firstitem = item; }
            if (item == this.ActiveTabSheet) {
                (<any>item).jItem.addClass('active');
                (<any>item).jTabPane.addClass('active');
                foundactive = true;
            }
        });

        if (!foundactive && firstitem) {
            (<any>firstitem).jItem.addClass('active');
            (<any>firstitem).jTabPane.addClass('active');
            this._activetabsheet = firstitem;
        }

        this.created = true;
    }

    public draw(reCreate: boolean) {
        if (!this.parentInitialized()) return;
        super.draw(reCreate);
    }
}


//A Panel to hold all graphics for an inner group - the content of a group
export class TAccordionGroupPanel extends VXW.TPanel {
    constructor(aOwner: VXC.TComponent, renderTo?: string, headerText?: string) {
        super(aOwner, renderTo, headerText);
        this.BorderWidth = 0;
        this.HeaderVisible = false;
    }
}

//An accordion group - holds a reference to the parent(_acc: TAccordion) and to the inner group(_refcontainer: TContainer => TAccordionGroupPanel)
export class TAccordionGroup extends VXO.TCollectionItem {
    private _acc: V.TAccordion = null;

    private jaccordiongroup: JQuery = null;
    private jaccordionheading: JQuery = null;
    private jaccordiontoggle: JQuery = null;
    private jaccordiontoggleText: JQuery = null;
    private jaccordiontoggleCont: JQuery = null;

    private _refcontainer: VXCO.TContainer = null;

    constructor(aOwner: TAccordion, refcontainer?: VXCO.TContainer) {
        super();
        this._acc = aOwner;
        this._refcontainer = refcontainer;
        this._headerContainer = new VXCO.TContainer(this._acc);
        this.HeaderSelectionBox = new V.TCheckBox(this._acc);
        this.HeaderSelectionBox.Visible = false;
    }
    private _text: string = null;
    public get Text(): string {
        return this._text;
    }
    public set Text(val: string) {
        if (val != this._text) {
            this._text = val;
            this._acc.drawDelayed(true);
        }
    }
    private _headerContainer: V.TContainer;
    public get HeaderContainer(): V.TContainer {
        return this._headerContainer;
    }
    public set HeaderContainer(val: V.TContainer) {
        if (val != this._headerContainer) {
            this._headerContainer = val;
            this._acc.drawDelayed(true);
        }
    }
    private _headerSelectionBox: V.TCheckBox;
    public get HeaderSelectionBox(): V.TCheckBox {
        return this._headerSelectionBox;
    }
    public set HeaderSelectionBox(val: V.TCheckBox) {
        if (val != this._headerSelectionBox) {
            this._headerSelectionBox = val;
            this._acc.drawDelayed(true);
        }
    }
    private _showSelectionBox: boolean;
    public get ShowSelectionBox(): boolean {
        return this._showSelectionBox;
    }
    public set ShowSelectionBox(val: boolean) {
        if (val != this._showSelectionBox) {
            this._showSelectionBox = val;
            this._headerSelectionBox.Visible = val;
            this._acc.drawDelayed(true);
        }
    }
    private _expandFirstGroup: boolean;
    public get ExpandFirstGroup(): boolean {
        return this._expandFirstGroup;
    }
    public set ExpandFirstGroup(val: boolean) {
        if (val != this._expandFirstGroup) {
            this._expandFirstGroup = val;
            this._headerSelectionBox.Visible = val;
            this._acc.drawDelayed(true);
        }
    }
    public create() {
        var self: V.TAccordionGroup = this;
        //Creating bootstrap taks which represent an Accordion Group
        this.jaccordiongroup = $('<div>');
        this.jaccordiongroup.addClass('accordion-group row-fluid').attr('ID', this.ID);
        //Deal with checkbox
        if (this._showSelectionBox && this._headerSelectionBox) {
            //this._headerSelectionBox.addClass('span1');
            this.jaccordiongroup.append(this._headerSelectionBox.jComponent[0].innerHTML);
        }
        this.jaccordionheading = $('<div>');
        this.jaccordionheading.addClass('accordion-heading').css('display', 'inline-block');
        //if (this._showSelectionBox) this.jaccordionheading.addClass('span11');
        this.jaccordiontoggle = $('<a>');
        this.jaccordiontoggle.addClass('accordion-toggle').attr('data-toggle', 'collapse').attr('data-parent', '#' + this._acc.ID).attr('href', '#' + this._refcontainer.ID + "yk");//.text('Yos' + '#' + this._refcontainer.ID);
        this.jaccordiontoggleText = $('<span/>').text(this.Text);
        //Add the Header Container if defined else the provided text
        if (this._headerContainer)
            this.jaccordiontoggle.append(this.HeaderContainer.jComponent[0].innerHTML);//jaccordiontoggleText);
        else
            this.jaccordiontoggle.append(this.jaccordiontoggleText);
        this.jaccordionheading.append(this.jaccordiontoggle);
        this.jaccordiongroup.append(this.jaccordionheading);

        if (this._refcontainer) { //Build the refcontainer html -> The Inside of Accordion group
            var refcontbody = $('<div>');
            if (this._expandFirstGroup)
                refcontbody.addClass('accordion-body collapse in').attr('ID', this._refcontainer.ID + "yk");
            else
                refcontbody.addClass('accordion-body collapse').attr('ID', this._refcontainer.ID + "yk");
            var refcontinner: JQuery = $('<div>');
            refcontinner.addClass('accordion-inner');
            //var innerref: JQuery = this._refcontainer.jComponent;//  $('#' + this._refcontainer.ID); 
            refcontinner.append(this._refcontainer.jComponent);
            refcontbody.append(refcontinner);
            this.jaccordiongroup.append(refcontbody);
            this._refcontainer.create();
        }
    }
}

//The main Accordion element - holds an array of TAccordionGroups
export class TAccordion extends VXCO.TContainer {
    public items: V.TCollection<TAccordionGroup> = new V.TCollection<TAccordionGroup>();
    private created: boolean = false;
    private jaccordion: JQuery = null;

    public createAccordionGroup(text: string, refcontainer: VXCO.TContainer): TAccordionGroup {
        var ag = new TAccordionGroup(this, refcontainer);
        this.items.add(ag);
        ag.Text = text;
        refcontainer.FitToWidth = true;
        return ag;
    }

    public create() {
        var self = this;

        this.jComponent.empty(); //clear all subcomponents
        //Build the main Accordion bootstrap html element
        this.jaccordion = $('<div>');
        this.jaccordion.addClass('accordion').attr('ID', this.ID);
        this.items.forEach((item) => {
            item.create();
            var td: V.TComponent = (<any>item).jaccordiongroup;
            if (td) {
                this.jaccordion.append(td);
            }
        });
        //Attach the accordion element to the jComponent
        this.jComponent.append(this.jaccordion);
        this.created = true;
    }

    public draw(reCreate: boolean) {
        if (!this.parentInitialized()) return;
        super.draw(reCreate);
    }
}