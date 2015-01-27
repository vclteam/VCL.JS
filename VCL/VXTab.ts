import V = require("./VCL");
import VXC = require("./VXComponent");
import VXT = require("./VXTextBase");
import VXU = require("./VXUtils");
import VXO = require("./VXObject");
import VXCO = require("./VXContainer");
import VXW = require("./VXWell");
import VXM = require("./VXMenu");

export class TWizardButtonsStep extends VXO.TCollectionItem {
    public onClicked: (sender: TWizardButtonsStep) => void;

    private wizardButtons: TWizardButtons
    constructor(aOwner: TWizardButtons) {
        super();
        this.wizardButtons = aOwner;
    }

    private _text: string = null;
    public get Text(): string {
        return this._text;
    }
    public set Text(val: string) {
        if (val != this._text) {
            this._text = val;
            this.wizardButtons.drawDelayed(true);
        }
    }

    public create(index: number, active: boolean): JQuery {
        var self = this;
        var li = $("<li>");
        if (self.onClicked && active) li.css('cursor', 'pointer');
        if (active) li.addClass('active');

        var span = $("<span>").text(index);
        if (active) span.addClass("badge badge-info");
        else span.addClass("badge badge-default")
        span.appendTo(li);
        var txt = $("<span>").text(this.Text);
        txt.appendTo(li);
        var chv = $("<span>").addClass('chevron');
        chv.appendTo(li);
        li.off("click").click(() => {
            if (self.onClicked != null && li.hasClass('active')) (V.tryAndCatch(() => {
                li.parent().children().removeClass("complete");
                li.addClass("complete");
                self.onClicked(self);
            }));
        });

        return li;
    }

}

export class TWizardButtons extends VXC.TComponent {
    public items: V.TCollection<TWizardButtonsStep> = new V.TCollection<TWizardButtonsStep>();

    /**
    @aOwner     Indicates the component that is responsible for streaming and freeing this component.Onwer must be TContainer
    @renderTo   (Optional) the id of the html element that will be the parent node for this component
    **/
    constructor(aOwner: VXC.TComponent, renderTo?: string) {
        super(aOwner, renderTo);
    }

    public create() {
        super.create();
        this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'div', this.FitToWidth, this.FitToHeight);
        this.jComponent.addClass('wizard');
        this.jComponent.empty();

        var ul = $("<ul>");
        ul.appendTo(this.jComponent);
        var idx = 0;
        var isActive = true;
        this.items.forEach((item) => {
            idx++;
            var li = item.create(idx, isActive);
            ul.append(li);
            if (item == this.ActiveItem)
                isActive = false;
        });
        if (ul.hasClass("complete") == false)
            ul.children().first().addClass("complete");
    }

    public createStep(text: string): TWizardButtonsStep {
        var col = new TWizardButtonsStep(this);
        col.Text = text;
        this.items.add(col);
        col.Text = text;
        return col;
    }

    public draw(reCreate: boolean) {
        if (!this.parentInitialized()) return;
        super.draw(reCreate);
    }

    private _activeItem: TWizardButtonsStep = null;
    public get ActiveItem(): TWizardButtonsStep {
        return this._activeItem;
    }
    public set ActiveItem(val: TWizardButtonsStep) {
        if (val != this._activeItem) {
            this._activeItem = val;
            this.drawDelayed(true);
        }
    }

}

export class TTabPanel extends VXW.TPanel {
    /**
    @aOwner     Indicates the component that is responsible for streaming and freeing this component.Onwer must be TContainer
    @renderTo   (Optional) the id of the html element that will be the parent node for this component
    @headerText (Optional) specfity the text of the header
    **/
    constructor(aOwner: VXC.TComponent, renderTo?: string, headerText?: string) {
        super(aOwner, renderTo, headerText);
        this.BorderWidth = 0;
        this.HeaderVisible = false;
    }
    public create() {
        super.create();
        this.jContent.css('overflow', 'auto');
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
        val = V.convertaAnyToBoolean(val);
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
                $(this._tab.jComponent).trigger('resize');
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
        $('.nav-tabs a').click(function (e) {
            e.preventDefault();
            e.stopPropagation();
            $(this).tab('show');
        });
    }

    public draw(reCreate: boolean) {
        if (!this.parentInitialized()) return;
        super.draw(reCreate);
    }
}


export class TAccordionGroupButton {

    private _tag: any;

    /**
    * Stores a value as a part of a component.
    * Tag has no predefined meaning. The Tag property can store any additional value for the convenience of developers. 
    *
    */
    public get Tag(): any {
        return this._tag;
    }

    public set Tag(val: any) {
        if (val != this._tag) {
            this._tag = val;
        }
    }

    /**
    * The margin clears an area around an component . 
    * The margin does not have a background color, and is completely transparent.
    * Sets the left margin of an component
    */
    private _marginLeft: number = 0;
    private _marginRight: number = 0;
    private _marginTop: number = 0;
    private _marginBottom: number = 0;
    public get MarginLeft(): number { return this._marginBottom; }
    public set MarginLeft(pixel: number) { if (pixel != this._marginLeft) { this._marginLeft = pixel; } }
    /**
    * The margin clears an area around an component . 
    * The margin does not have a background color, and is completely transparent.
    *  Sets the right margin of an component
    */
    public get MarginRight(): number { return this._marginRight; }
    public set MarginRight(pixel: number) { if (pixel != this._marginRight) { this._marginRight = pixel; } }
    /**
    * The margin clears an area around an component . 
    * The margin does not have a background color, and is completely transparent.
    * Sets the top margin of an component
    */
    public get MarginTop(): number { return this._marginTop; }
    public set MarginTop(pixel: number) { if (pixel != this._marginTop) { this._marginTop = pixel; } }
    /**
    * The margin clears an area around an component . 
    * The margin does not have a background color, and is completely transparent.
    * Sets the bottom margin of an component
    */
    public get MarginBottom(): number { return this._marginBottom; }
    public set MarginBottom(pixel: number) { if (pixel != this._marginBottom) { this._marginBottom = pixel; } }


    private owner: TAccordionGroup;
    constructor(owner: TAccordionGroup, icon?: V.Icon) {
        this.owner = owner;
        if (icon) this._icon = icon;

    }
    private _visible: boolean = false;
    public get Visible(): boolean {
        return this._visible;
    }
    public set Visible(val: boolean) {
        val = V.convertaAnyToBoolean(val);
        if (val != this._visible) {
            this._visible = val;
        }
    }

    private _color: string;
    public get Color(): string {
        return this._color;
    }
    public set Color(val: string) {
        if (V.Application.checkColorString(val)) {
            if (val != this._color) {
                this._color = val;
            }
        }
    }


    private _tooltip: string;
    public get Tooltip(): string {
        return this._tooltip;
    }
    public set Tooltip(val: string) {
        if (val != this._tooltip) {
            this._tooltip = val;
        }
    }


    private _icon: V.Icon = V.Icon.icon_align_justify;
    public get Icon(): V.Icon {
        return this._icon;
    }
    public set Icon(val: V.Icon) {
        if (val != this._icon) {
            this._icon = val;
            this.Visible = true;
        }
    }

    private _url: string;
    public get ImageUrl(): string {
        return this._url;
    }

    public set ImageUrl(val: string) {
        if (val != this._url) {
            this._url = val;
            this.Visible = true;
        }
    }

    private _text: string = "";
    public get Text(): string {
        return this._text;
    }
    public set Text(val: string) {
        if (val != this._text) {
            this._text = val;
            this.Visible = true;
        }
    }

    public onClicked: (sender: TAccordionGroup ) => void;
    public jButton: JQuery;
    public jImage: JQuery;
    public jGroupButton: JQuery;
    public jMenu: JQuery;

    public menuItems = new VXM.TMenuItemCollection<VXM.TMenuItem>();
    public createMenuItem(text: string, onClicked?: () => void): VXM.TMenuItem {
        var menuItem = new VXM.TMenuItem();
        menuItem.Text = text;
        menuItem.onClicked = onClicked;
        this.menuItems.add(menuItem);
        return menuItem;
    }
}



//A Panel to hold all graphics for an inner group - the content of a group
export class TAccordionGroupPanel extends VXW.TPanel {
    /**
    @aOwner     Indicates the component that is responsible for streaming and freeing this component.Onwer must be TContainer
    @renderTo   (Optional) the id of the html element that will be the parent node for this component
    **/
    constructor(aOwner: VXC.TComponent, renderTo?: string, headerText?: string) {
        super(aOwner, renderTo, headerText);
        this.BorderWidth = 0;
        this.HeaderVisible = false;
    }
}

//An accordion group - holds a reference to the parent(_acc: TAccordion) and to the inner group(_refcontainer: TContainer => TAccordionGroupPanel)
export class TAccordionGroup extends VXO.TCollectionItem {
    private _acc: V.TAccordion = null;

    public jComponent: JQuery = null;
    private jaccordionheading: JQuery = null;
    private jaccordiontoggle: JQuery = null;
    private jaccordiontoggleCaret: JQuery = null;
    private jaccordiontoggleText: JQuery = null;
    private jaccordiontoggleCont: JQuery = null;

    public Button1: TAccordionGroupButton;
    public Button2: TAccordionGroupButton;
    public Button3: TAccordionGroupButton;
    public onChecboxClicked: (sender: TAccordionGroup) => void;

    private _showselectcheckbox: boolean = false;
    public get ShowSelectCheckbox(): boolean {
        return this._showselectcheckbox;
    }
    public set ShowSelectCheckbox(val: boolean) {
        val = V.convertaAnyToBoolean(val);
        if (val != this._showselectcheckbox) {
            this._showselectcheckbox = val;
            this.draw(true);
        }
    }

    private _expanded: boolean = false;
    public get Expanded(): boolean {
        return this._expanded;
    }
    public set Expanded(val: boolean) {
        if (val != this._expanded) {
            this._expanded = val;
            this.draw(false);
        }
    }


    public InnerContainer: VXCO.TContainer = null;

    constructor(aOwner: TAccordion, innerContainer?: VXCO.TContainer) {
        super();
        this._acc = aOwner;
        this.InnerContainer = innerContainer;
        this.Button1 = new TAccordionGroupButton(this);
        this.Button2 = new TAccordionGroupButton(this);
        this.Button3 = new TAccordionGroupButton(this);
    }

    private jButtons: JQuery;

    public destroy() {
        if (this._acc != null) {
            var a = this._acc.items.remove(this);
        }
        this.jComponent.remove();
    }


    private createButton(button: TAccordionGroupButton, clickEvent: () => void) {
        var self = this;
        button.jGroupButton = $('<div>');
        button.jGroupButton.addClass('btn-group');
        button.jButton = $('<button>');
        button.jImage = $('<img>');
        button.jButton.css('padding', '0px').css('background-color', 'transparent').css('vertical-align', 'middle');
        button.jButton.css('box-shadow', 'none');
        button.jButton.css('border', 'none');
        if (clickEvent)
            button.jButton.off("click").click(clickEvent);
        else
            button.jButton.off("click").click(() => {
                if (button.menuItems.length() > 0) button.jGroupButton.dropdown();
                if (button.onClicked != null) (V.tryAndCatch(() => { button.onClicked(self); }));
            });
        button.jGroupButton.prependTo(this.jButtons);
        button.jImage.prependTo(button.jButton);
        button.jButton.prependTo(button.jGroupButton);

        if (button.MarginBottom) button.jButton.css('margin-bottom', button.MarginBottom + "px");
        if (button.MarginTop) button.jButton.css('margin-top', button.MarginTop + "px");
        if (button.MarginLeft) button.jButton.css('margin-left', button.MarginLeft + "px");
        if (button.MarginRight) button.jButton.css('margin-right', button.MarginRight + "px");
        if (button.Color) button.jButton.css('color', button.Color);

        if (button.Text != null && button.Text != "") {
            button.jButton.text(button.Text).addClass('btn-link');
        } else {
            if (button.ImageUrl) {
                button.jImage.attr('src', button.ImageUrl);
            }
            else {
                button.jButton.addClass('btn');
                button.jButton.addClass("icon");
                button.jButton.addClass(V.iconEnumToBootstrapStyle(<any>button.Icon)).text('');
            }
        }

        if (button.jMenu) button.jMenu.remove();
        if (button.menuItems.length() > 0) {
            button.jButton.attr('data-toggle', "dropdown");
            button.jButton.addClass('dropdown-toggle');
            button.jMenu = button.menuItems.createmenu('dropdown-menu');
            button.jMenu.data('open', false);
            button.jMenu.appendTo(button.jGroupButton);
            $('.dropdown-toggle').dropdown()
        }

        //remove the old tooltip
        button.jButton.data('tooltip', false);
        if (button.Tooltip != "" && button.Tooltip != null) {
            button.jButton.tooltip({ title: button.Tooltip });
        }

        button.jGroupButton.css('display', button.Visible ? 'inline-block' : 'none');
    }

    private _checked: boolean = null;
    public get Checked(): boolean {
        return this._checked;
    }
    public set Checked(val: boolean) {
        if (val != this._checked) {
            this._checked = val;
            this.draw(false);
        }
    }


    private _text: string = null;
    public get Text(): string {
        return this._text;
    }
    public set Text(val: string) {
        if (val != this._text) {
            this._text = val;
            this.draw(false);
        }
    }

    private jCheckbox: JQuery;
    private jAccBody: JQuery;

    public create() {
        var self: V.TAccordionGroup = this;
        //Creating bootstrap taks which represent an Accordion Group
        this.jComponent = $('<div>');
        this.jComponent.addClass('accordion-group row-fluid').attr('ID', this.ID);
        this.jaccordionheading = $('<div>');
        this.jaccordionheading.addClass('accordion-heading');//.css('display', 'inline-block');
        this.jaccordiontoggle = $('<a>');
        this.jaccordiontoggleCaret = $('<span class="icon-caret-right cvidya">');
        this.jaccordiontoggleText = $('<span style="margin-left: 5px;">' + this.Text + "</span >");

        this.jaccordiontoggle.addClass('accordion-toggle').attr('data-toggle', 'collapse');//.addClass('icon-caret-right').addClass("cvidya");
        this.jaccordiontoggle.click((e) => {
            if (this._acc.MultipleExpanded) {
                self.jaccordiontoggleCaret.toggleClass("icon-caret-down icon-caret-right");
            } else {
                //Remove all Caret down from groups 
                this._acc.items.forEach((item) => {
                    if (item && item.jComponent) {
                        if (self.jaccordiontoggleCaret != item.jaccordiontoggleCaret) {
                            item.jComponent.find('span.cvidya').removeClass("icon-caret-down").addClass("icon-caret-right");
                        }
                    }
                });
                //toggle caret correctly
                self.jaccordiontoggleCaret.toggleClass("icon-caret-down icon-caret-right");
            }
        });
        if (!this._acc.MultipleExpanded) this.jaccordiontoggle.attr('data-parent', '#' + this._acc.ID);
        if (this.InnerContainer) this.jaccordiontoggle.attr('href', '#' + this.InnerContainer.ID + "yk");
        //Add the Header Container if defined else the provided text

        if (this.ShowSelectCheckbox) {
            this.jCheckbox = $('<input >');
            this.jCheckbox.attr('type', 'checkbox').css('float', 'left').addClass('accordion-checkbox');
            this.jaccordionheading.append(this.jCheckbox);

            this.jCheckbox.change((event) => {
                self.Checked = this.jCheckbox.prop('checked');
                if (self.onChecboxClicked != null) (V.tryAndCatch(() => { self.onChecboxClicked(this); }));
            })
        }

        this.jaccordionheading.append(this.jaccordiontoggle);
        this.jComponent.append(this.jaccordionheading);

        if (this.InnerContainer) { //Build the refcontainer html -> The Inside of Accordion group
            this.jAccBody = $('<div>');
            this.jAccBody.addClass('accordion-body collapse').attr('ID', this.InnerContainer.ID + "yk");
            var refcontinner: JQuery = $('<div>');
            refcontinner.addClass('accordion-inner');
            //var innerref: JQuery = this._refcontainer.jComponent;//  $('#' + this._refcontainer.ID); 
            refcontinner.append(this.InnerContainer.jComponent);
            this.jAccBody.append(refcontinner);
            this.jComponent.append(this.jAccBody);
            this.InnerContainer.create();
        }
        this.jButtons = $("<div>").addClass("accordion-button").css('float', 'right');
        this.createButton(this.Button1, null);
        this.createButton(this.Button2, null);
        this.createButton(this.Button3, null);

        this.jButtons.prependTo(this.jaccordionheading);
    }

    public draw(recreate: boolean) {
        if (recreate) this.create();

        if (this.jCheckbox) this.jCheckbox.prop('checked', this.Checked);
        if (this.jaccordiontoggle) this.jaccordiontoggle.append(this.jaccordiontoggleCaret).append(this.jaccordiontoggleText);//html('<span class="icon-caret-right cvidya"></span> <span style="margin-left: 5px;">' + this.Text + "</span>");
        //if (this.jaccordiontoggle) this.jaccordiontoggle.html(this.Text);
        if (this.Expanded) {
            if (this.jaccordiontoggle) {
                this.jaccordiontoggle.removeClass('collapsed');
                this.jaccordiontoggleCaret.removeClass('icon-caret-right');
                this.jaccordiontoggleCaret.addClass('icon-caret-down');
            }
            if (this.jAccBody) this.jAccBody.addClass('in');
        } else {
            if (this.jaccordiontoggle) {
                this.jaccordiontoggle.addClass('collapsed');
                this.jaccordiontoggleCaret.removeClass('icon-caret-down');
                this.jaccordiontoggleCaret.addClass('icon-caret-right');
            }
            if (this.jAccBody) this.jAccBody.removeClass('in');
        }
    }
}

//The main Accordion element - holds an array of TAccordionGroups
export class TAccordion extends VXCO.TContainer {
    public items: V.TCollection<TAccordionGroup> = new V.TCollection<TAccordionGroup>();
    private jaccordion: JQuery = null;

    private _multipleOpen: boolean = false;
    public get MultipleExpanded(): boolean {
        return this._multipleOpen;
    }
    public set MultipleExpanded(val: boolean) {
        if (val != this._multipleOpen) {
            this._multipleOpen = val;
            this.draw(true);
        }
    }

    public createAccordionGroup(text: string, refcontainer: VXCO.TContainer): TAccordionGroup {
        var ag = new TAccordionGroup(this, refcontainer);
        ag.Text = text;
        this.items.add(ag);
        if (refcontainer) refcontainer.FitToWidth = true;
        this.drawDelayed(true);
        return ag;
    }

    public create() {
        var self = this;

        this.jComponent.empty(); //clear all subcomponents
        //Build the main Accordion bootstrap html element
        this.jaccordion = $('<div>');
        this.jaccordion.addClass('accordion').attr('ID', this.ID);
        this.items.forEach((item) => {
            item.draw(true);
            if (item && item.jComponent) {
                this.jaccordion.append(item.jComponent);
            }
        });
        //Attach the accordion element to the jComponent
        this.jComponent.append(this.jaccordion);
        //this.jaccordion.on("show", (e) => {
        //   $(e.target).siblings(".accordion-heading").find(".accordion-toggle i").toggleClass("icon-caret-down icon-caret-right");
        //})
    }

    public draw(reCreate: boolean) {
        if (!this.parentInitialized()) return;
        super.draw(reCreate);
    }
}