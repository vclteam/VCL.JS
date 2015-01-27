import V = require("./VCL");
import VXC = require("./VXComponent");
import VXO = require("./VXObject");
import VXCO = require("./VXContainer");
import VXW = require("./VXWell");
import VXM = require("./VXMenu");
export declare class TWizardButtonsStep extends VXO.TCollectionItem {
    onClicked: (sender: TWizardButtonsStep) => void;
    private wizardButtons;
    constructor(aOwner: TWizardButtons);
    private _text;
    Text: string;
    create(index: number, active: boolean): JQuery;
}
export declare class TWizardButtons extends VXC.TComponent {
    items: V.TCollection<TWizardButtonsStep>;
    /**
    @aOwner     Indicates the component that is responsible for streaming and freeing this component.Onwer must be TContainer
    @renderTo   (Optional) the id of the html element that will be the parent node for this component
    **/
    constructor(aOwner: VXC.TComponent, renderTo?: string);
    create(): void;
    createStep(text: string): TWizardButtonsStep;
    draw(reCreate: boolean): void;
    private _activeItem;
    ActiveItem: TWizardButtonsStep;
}
export declare class TTabPanel extends VXW.TPanel {
    /**
    @aOwner     Indicates the component that is responsible for streaming and freeing this component.Onwer must be TContainer
    @renderTo   (Optional) the id of the html element that will be the parent node for this component
    @headerText (Optional) specfity the text of the header
    **/
    constructor(aOwner: VXC.TComponent, renderTo?: string, headerText?: string);
    create(): void;
}
export declare class TTabSheet extends VXO.TCollectionItem {
    private _tab;
    private jItem;
    private aItem;
    private jText;
    private jTabPane;
    private _tabdata;
    constructor(aOwner: V.TTabPage, tabdata: VXCO.TContainer);
    private _text;
    Text: string;
    private _enabled;
    Enabled: boolean;
    create(): void;
}
export declare class TTabPage extends VXCO.TContainer {
    items: V.TCollection<TTabSheet>;
    private created;
    private _tabstyle;
    TabStyle: V.TabStyle;
    private _activetabsheet;
    ActiveTabSheet: V.TTabSheet;
    onTabShow: (from: TTabSheet, to: TTabSheet) => void;
    createTabSheet(text: string, container: VXCO.TContainer): TTabSheet;
    create(): void;
    draw(reCreate: boolean): void;
}
export declare class TAccordionGroupButton {
    private _tag;
    /**
    * Stores a value as a part of a component.
    * Tag has no predefined meaning. The Tag property can store any additional value for the convenience of developers.
    *
    */
    Tag: any;
    /**
    * The margin clears an area around an component .
    * The margin does not have a background color, and is completely transparent.
    * Sets the left margin of an component
    */
    private _marginLeft;
    private _marginRight;
    private _marginTop;
    private _marginBottom;
    MarginLeft: number;
    /**
    * The margin clears an area around an component .
    * The margin does not have a background color, and is completely transparent.
    *  Sets the right margin of an component
    */
    MarginRight: number;
    /**
    * The margin clears an area around an component .
    * The margin does not have a background color, and is completely transparent.
    * Sets the top margin of an component
    */
    MarginTop: number;
    /**
    * The margin clears an area around an component .
    * The margin does not have a background color, and is completely transparent.
    * Sets the bottom margin of an component
    */
    MarginBottom: number;
    private owner;
    constructor(owner: TAccordionGroup, icon?: V.Icon);
    private _visible;
    Visible: boolean;
    private _color;
    Color: string;
    private _tooltip;
    Tooltip: string;
    private _icon;
    Icon: V.Icon;
    private _url;
    ImageUrl: string;
    private _text;
    Text: string;
    onClicked: (sender: TAccordionGroup) => void;
    jButton: JQuery;
    jImage: JQuery;
    jGroupButton: JQuery;
    jMenu: JQuery;
    menuItems: VXM.TMenuItemCollection<VXM.TMenuItem>;
    createMenuItem(text: string, onClicked?: () => void): VXM.TMenuItem;
}
export declare class TAccordionGroupPanel extends VXW.TPanel {
    /**
    @aOwner     Indicates the component that is responsible for streaming and freeing this component.Onwer must be TContainer
    @renderTo   (Optional) the id of the html element that will be the parent node for this component
    **/
    constructor(aOwner: VXC.TComponent, renderTo?: string, headerText?: string);
}
export declare class TAccordionGroup extends VXO.TCollectionItem {
    private _acc;
    jComponent: JQuery;
    private jaccordionheading;
    private jaccordiontoggle;
    private jaccordiontoggleCaret;
    private jaccordiontoggleText;
    private jaccordiontoggleCont;
    Button1: TAccordionGroupButton;
    Button2: TAccordionGroupButton;
    Button3: TAccordionGroupButton;
    onChecboxClicked: (sender: TAccordionGroup) => void;
    private _showselectcheckbox;
    ShowSelectCheckbox: boolean;
    private _expanded;
    Expanded: boolean;
    InnerContainer: VXCO.TContainer;
    constructor(aOwner: TAccordion, innerContainer?: VXCO.TContainer);
    private jButtons;
    destroy(): void;
    private createButton(button, clickEvent);
    private _checked;
    Checked: boolean;
    private _text;
    Text: string;
    private jCheckbox;
    private jAccBody;
    create(): void;
    draw(recreate: boolean): void;
}
export declare class TAccordion extends VXCO.TContainer {
    items: V.TCollection<TAccordionGroup>;
    private jaccordion;
    private _multipleOpen;
    MultipleExpanded: boolean;
    createAccordionGroup(text: string, refcontainer: VXCO.TContainer): TAccordionGroup;
    create(): void;
    draw(reCreate: boolean): void;
}
