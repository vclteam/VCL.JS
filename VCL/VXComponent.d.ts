import V = require("./VCL");
import VXCO = require("./VXContainer");
import VXO = require("./VXObject");
import VXM = require("./VXMenu");
export declare class TComponent extends VXO.TObject {
    /**
    Indicates the component that is responsible for streaming and freeing this component.
    **/
    owner: TComponent;
    /**
    Represent the JQuery element of the component
    **/
    jComponent: JQuery;
    initialized: boolean;
    onCreate(): void;
    onShow(): void;
    /**
    @aOwner     Indicates the component that is responsible for streaming and freeing this component.Onwer must be TContainer
    @renderTo   (Optional) the id of the html element that will be the parent node for this component
    **/
    constructor(aOwner: TComponent, renderTo?: string);
    private checkDataset(name);
    private guessDataset();
    destroy(): void;
    LocalizeText(sourceString: string): string;
    /**
    Adds the specified class(es) to the component.
    **/
    addClass(classStr: string): void;
    /**
    Remove a single class, multiple classes, or all classes from component
    **/
    removeClass(classStr: string): void;
    private __clickovercontainer;
    private __clickover;
    private __clickovertimer;
    popover(popupContainer: VXCO.TContainer, popoverplacement?: V.PopoverPlacement, title?: string, autoClose?: number, width?: number): void;
    private closepopup(popupContainer);
    private _sticktotop;
    /**
     component that remain in view as the user scrolls the page
    **/
    StickToTop: boolean;
    private _outline;
    /**
     An outline is a line that is drawn around elements (outside the borders) to make the element "stand out".
    **/
    Outline: boolean;
    private _fittowidth;
    FitToWidth: boolean;
    private _fittoheight;
    FitToHeight: boolean;
    private _tooltip;
    /**Tooltips can be attached to any element. When you hover the element with your mouse, the title attribute is displayed in a little box next to the element*/
    Tooltip: string;
    private _tooltipplacement;
    /**Customize the positioning, e.g., to center the tooltip top elements.**/
    TooltipPlacement: V.TooltipPlacement;
    private _visible;
    Visible: boolean;
    private _enabled;
    Enabled: boolean;
    /**
     refresh the control on the screen.
    **/
    refresh(): void;
    /**
     Use repaint when the entire control needs to be fully repainted.
    **/
    repaint(): void;
    /**
    * Display the component by fading them to opaque
    */
    fadeIn(duration?: number, complete?: () => void): void;
    /**
    * Hide the matched elements by fading them to transparent.
    */
    fadeOut(duration?: number, complete?: () => void): void;
    /**
    * The margin clears an area around an component .
    * The margin does not have a background color, and is completely transparent.
    * Sets the left margin of an component
    */
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
    /**
    * The padding clears an area around the content .
    * The padding is affected by the background color of the component.
    * Sets the left padding of an component
    */
    PaddingLeft: number;
    /**
    * The padding clears an area around the content .
    * The padding is affected by the background color of the component.
    * Sets the right padding of an component
    */
    PaddingRight: number;
    /**
    * The padding clears an area around the content .
    * The padding is affected by the background color of the component.
    * Sets the top padding of an component
    */
    PaddingTop: number;
    /**
    * The padding clears an area around the content .
    * The padding is affected by the background color of the component.
    * Sets the bottom padding of an component
    */
    PaddingBottom: number;
    /**
    * Specifies the width of the component in pixels.
    */
    Width: number;
    animateResize(duration?: number, widthPixel?: number, heightPixel?: number, completeCallBack?: () => void): void;
    /**
    * Specifies the height of the component in pixels.
    */
    Height: number;
    create(): void;
    setFoucs(): void;
    private __drawdelayed;
    private __drawdelayedType;
    drawDelayed(reCreate: boolean): void;
    private __tmpShowDuration;
    private __tmpHideDuration;
    draw(reCreate: boolean): void;
    /**
    * Makes the control invisible.
    * Call Hide to hide a control. Hide sets the Visible property of the control to false.
    * Although a control that is hidden is not visible, its properties and methods are still available.
    */
    hide(): void;
    HideWithAnimation(duration?: number): void;
    show(): void;
    showWithAnimation(duration: number): void;
    isContainer: boolean;
    isPage: boolean;
    parentInitialized(): boolean;
}
export declare class TPopupmenuComponent extends TComponent {
    private jDropDownTarget;
    constructor(aOwner: TComponent, renderTo?: string);
    menuItems: VXM.TMenuItemCollection<VXM.TMenuItem>;
    createMenuItem(text: string, onClicked?: () => void): VXM.TMenuItem;
    create(): void;
    showMenuDropdown(): void;
    hideMenuDropdown(): void;
    private _showmenucaret;
    /**
     Component that remain in view as the user scrolls the page
    **/
    ShowMenuCaret: boolean;
    private reBuildMenu();
}
export declare class TControl extends TComponent {
    /**
        Use the OnClick event handler to respond when the user clicks the control.
    **/
    onClicked: () => void;
    create(): void;
    draw(reCreate: boolean): void;
}
