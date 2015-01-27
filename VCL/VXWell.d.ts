/// <reference path="Scripts/jquery.d.ts" />
/// <reference path="Scripts/google.maps.d.ts" />
/// <reference path="Scripts/jquery.d.ts" />
import VXC = require("./VXComponent");
import VXCO = require("./VXContainer");
import V = require("./VCL");
import VXO = require("./VXObject");
import VXM = require("./VXMenu");
export declare class TCarouselPage extends VXO.TCollectionItem {
    private _carousel;
    private _container;
    private _caption;
    Caption: string;
    private _text;
    Text: string;
    private _visible;
    Visible: boolean;
    private jitem;
    private jcaption;
    create(): JQuery;
    constructor(aOwner: TCarousel, container: VXCO.TContainer);
}
export declare class TCarousel extends VXCO.TContainer {
    /**
    @aOwner     Indicates the component that is responsible for streaming and freeing this component.Onwer must be TContainer
    @renderTo   (Optional) the id of the html element that will be the parent node for this component
    **/
    constructor(aOwner: VXC.TComponent, renderTo?: string);
    create(): void;
    draw(reCreate: boolean): void;
    items: V.TCollection<TCarouselPage>;
    createCarouselPage(caption: string, text: string, container: VXCO.TContainer): TCarouselPage;
}
export declare class TWell extends VXCO.TContainer {
    private _color;
    Color: string;
    create(): void;
    draw(reCreate: boolean): void;
}
export declare class TPanelButton {
    private _textcolor;
    TextColor: string;
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
    constructor(owner: TPanel, icon?: V.Icon);
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
    onClicked: () => void;
    jButton: JQuery;
    jImage: JQuery;
    jGroupButton: JQuery;
    jMenu: JQuery;
    menuItems: VXM.TMenuItemCollection<VXM.TMenuItem>;
    createMenuItem(text: string, onClicked?: () => void): VXM.TMenuItem;
}
export declare class TPanel extends VXCO.TContainer implements V.iTranslatable {
    jHeader: JQuery;
    private jHeaderText;
    jContent: JQuery;
    jOverlayText: JQuery;
    CloseButton: TPanelButton;
    Button1: TPanelButton;
    Button2: TPanelButton;
    Button3: TPanelButton;
    private jButtons;
    private _localizable;
    /**
    * In order to localize application each page or component of the application has to have Localizable property set true.
    */
    Localizable: boolean;
    constructor(aOwner: VXC.TComponent, renderTo?: string, headerText?: string);
    private _expanded;
    Expanded: boolean;
    private _headevisible;
    HeaderVisible: boolean;
    private _borderradius;
    BorderRadius: number;
    private _hedderstyle;
    HeaderStyle: V.HeaderStyle;
    private _largeheaderbutton;
    /**
    * specify the size of the panel header button.
    */
    LargeHeaderButton: boolean;
    private _buttonaligment;
    /**
    * Text specify the panel header text string .
    */
    ButtonAlignment: V.ButtonAlignment;
    private _headercolor;
    HeaderColor: string;
    private _headertextcolor;
    HeaderTextColor: string;
    private _headertext;
    /**
    * Text specify the panel header text string .
    */
    HeaderText: string;
    private _borderwidth;
    BorderWidth: number;
    private _textstyle;
    HeaderTextStyle: V.HeaderTextStyle;
    private _textheaderalign;
    HeaderTextAlignment: V.HeaderTextAlignment;
    onPanelClicked: (sender: VXC.TComponent) => void;
    onHeaderClicked: (sender: VXC.TComponent) => void;
    onContentClicked: (sender: VXC.TComponent) => void;
    create(): void;
    private createButton(button, clickEvent);
    draw(reCreate: boolean): void;
}
export declare class TGoogleMap extends VXC.TComponent {
    /** Custom Format tooltip */
    ToolTipFormat: (data: any) => string;
    /**
    @aOwner     Indicates the component that is responsible for streaming and freeing this component.Onwer must be TContainer
    @renderTo   (Optional) the id of the html element that will be the parent node for this component
    **/
    constructor(aOwner: VXC.TComponent, renderTo?: string);
    private _googleAPIKey;
    /**
    * Text specify the panel header text string .
    */
    GoogleAPIKey: string;
    private mapoption;
    MapOptions: google.maps.MapOptions;
    private _HeatMapMarkerZoom;
    /**
    * only in HeatMap show marker on zoom 0 - 18 (google map), defualt 12, null - not used
    */
    ShowHeatMapAsMarkerOnZoom: number;
    private map;
    create(): void;
    private zoomChanged();
    draw(reCreate: boolean): void;
    private createheatmaplayer(layername);
    private tmpMarkers;
    private heatmapLayer;
    private refreshHeatmap();
    private refreshMarkers();
    showHeatmap(layer?: string): void;
    hideHeatmap(layer?: string): void;
    private setMarkerClick(item);
    private decodeReq;
    onDecodeAddress: (item: TGoogleMapMarker) => void;
    private decodeAddress(address, selectedItem);
    private decodeHeatmapAddress(address, selectedItem);
    optimizeZoomLevel(): void;
    /**
    * Returns the zoom level at which the given rectangular region fits in the map view.
    * The zoom level is computed for the currently selected map type.
    * @param {google.maps.Map} map
    * @param {google.maps.LatLngBounds} bounds
    * @return {Number} zoom level
    **/
    private getZoomByBounds(map, bounds);
    private optimizeZoomLevel1();
    private optimizeZoomLevel2();
    heatmapMarkerItems: VXO.TCollection<TGoogleMapHeatmapMarker>;
    createHeatmapMarker(lat: number, lng: number, weight: number, layer?: string): TGoogleMapHeatmapMarker;
    createHeatmapMarkerFromAddress(address: string, weight: number, layer?: string): TGoogleMapHeatmapMarker;
    markerItems: VXO.TCollection<TGoogleMapMarker>;
    createMarker(lat: number, lng: number): TGoogleMapMarker;
    createMarkerFromAddress(address: string): TGoogleMapMarker;
    onMarkerClicked: (item) => void;
    onLayerClicked: (item) => void;
    generateHeatControl(controlDiv: any, map: google.maps.Map, caption: any, heat: google.maps.visualization.HeatmapLayer): void;
}
export declare class TGoogleMapMarker extends VXO.TCollectionItem {
    marker: any;
    infowindow: any;
    private _lat;
    Lat: number;
    private _lng;
    Lng: number;
    private _address;
    Address: string;
    private _title;
    Title: string;
    private _visible;
    Visible: boolean;
    private _content;
    InforWindowContent: string;
}
export declare class TGoogleMapHeatmapMarker extends VXO.TCollectionItem {
    marker: any;
    infowindow: any;
    private _lat;
    Lat: number;
    private _lng;
    Lng: number;
    private _address;
    Address: string;
    private _layer;
    Layer: string;
    private _weight;
    Weight: number;
}
/**
    Basic interface for all layouts
*/
export interface IGraphEditorLayout {
    /**
        Name of layout that serves as a key
    */
    name(): string;
    /**
        on layoutready
    */
    onReady: () => void;
    /**
        on layoutstop
    */
    onStop: () => void;
    getOptions: () => any;
}
/**
    The null layout puts all nodes at (0, 0). It's useful for debugging purposes.
*/
export declare class GraphEditorNullLayout implements IGraphEditorLayout {
    name(): string;
    private _fit;
    /**
     Whether to fit the network view after when done
    */
    Fit: boolean;
    onReady: () => void;
    onStop: () => void;
    getOptions(): {
        name: string;
        ready: () => void;
        stop: () => void;
    };
}
/**
    The random layout puts nodes in random positions within the viewport.
*/
export declare class GraphEditorRandomLayout implements IGraphEditorLayout {
    name(): string;
    onReady: () => void;
    onStop: () => void;
    private _fit;
    /**
     Whether to fit the network view after when done
    */
    Fit: boolean;
    getOptions(): {
        name: string;
        ready: () => void;
        stop: () => void;
        fit: boolean;
    };
}
/**
    The preset layout puts nodes in the positions you specify manually.
*/
export declare class GraphEditorPresetLayout implements IGraphEditorLayout {
    name(): string;
    onReady: () => void;
    onStop: () => void;
    private _padding;
    /**
        Padding on fit
    */
    Padding: number;
    private _fit;
    /**
     Whether to fit the network view after when done
    */
    Fit: boolean;
    getOptions(): {
        name: string;
        ready: () => void;
        stop: () => void;
        fit: boolean;
        padding: number;
        positions: any;
        zoom: any;
        pan: any;
    };
}
/**
    The grid layout puts nodes in a well-spaced grid.
*/
export declare class GraphEditorGridLayout implements IGraphEditorLayout {
    name(): string;
    onReady: () => void;
    onStop: () => void;
    onPosition: (any) => void;
    private _padding;
    /**
        Padding on fit
    */
    Padding: number;
    private _fit;
    /**
     Whether to fit the network view after when done
    */
    Fit: boolean;
    private _rows;
    Rows: number;
    private _columns;
    Columns: number;
    getOptions(): {
        name: string;
        ready: () => void;
        stop: () => void;
        fit: boolean;
        padding: number;
        position: (any: any) => void;
        columns: number;
        rows: number;
    };
}
/**
    The circle layout puts nodes in a circle.
*/
export declare class GraphEditorCircleLayout implements IGraphEditorLayout {
    name(): string;
    onReady: () => void;
    onStop: () => void;
    private _padding;
    /**
        Padding on fit
    */
    Padding: number;
    private _fit;
    /**
     Whether to fit the network view after when done
    */
    Fit: boolean;
    private _rStepSize;
    /**
        the step size for increasing the radius if the nodes don't fit on screen
    */
    RStepSize: number;
    private _startAngle;
    /**
        the position of the first node
    */
    StartAngle: number;
    private _counterclockwise;
    /**
        whether the layout should go counterclockwise (true) or clockwise (false)
    */
    Counterclockwise: boolean;
    getOptions(): {
        name: string;
        ready: () => void;
        stop: () => void;
        fit: boolean;
        padding: number;
        rStepSize: number;
        startAngle: number;
        counterclockwise: boolean;
    };
}
/**
    The concentric layout positions nodes in concentric circles, based on a metric that you specify to segregate the nodes into levels.
    This layout sets the concentric layout value based on your metric, which can be used with mapLayoutData().
*/
export declare class GraphEditorConcentricLayout implements IGraphEditorLayout {
    name(): string;
    onReady: () => void;
    onStop: () => void;
    /**
        returns numeric value for each node, placing higher nodes in levels towards the centre
    */
    onConcentric: () => void;
    /**
        the variation of concentric values in each level
    */
    onLevelWidth: (nodes: any) => void;
    private _padding;
    /**
        Padding on fit
    */
    Padding: number;
    private _fit;
    /**
     Whether to fit the network view after when done
    */
    Fit: boolean;
    private _minNodeSpacing;
    /**
        min spacing between outside of nodes (used for radius adjustment)
    */
    MinNodeSpacing: number;
    private _height;
    /**
        height of layout area (overrides container height)
    */
    Height: number;
    private _width;
    /**
        width of layout area (overrides container height)
    */
    Width: number;
    private _startAngle;
    /**
        the position of the first node
    */
    StartAngle: number;
    private _counterclockwise;
    /**
        whether the layout should go counterclockwise (true) or clockwise (false)
    */
    Counterclockwise: boolean;
    getOptions(): {
        name: string;
        ready: () => void;
        stop: () => void;
        fit: boolean;
        padding: number;
        minNodeSpacing: number;
        startAngle: number;
        counterclockwise: boolean;
        height: number;
        width: number;
        concentric: () => void;
        levelWidth: (nodes: any) => void;
    };
}
/**
    The breadthfirst layout puts nodes in a hierarchy, based on a breadthfirst traversal of the graph.
*/
export declare class GraphEditorBreadthfirstLayout implements IGraphEditorLayout {
    name(): string;
    onReady: () => void;
    onStop: () => void;
    private _padding;
    /**
        Padding on fit
    */
    Padding: number;
    private _fit;
    /**
        Whether to fit the network view after when done
    */
    Fit: boolean;
    private _directed;
    /**
        whether the tree is directed downwards (or edges can point in any direction if false)
    */
    Directed: boolean;
    private _circle;
    /**
        put depths in concentric circles if true, put depths top down if false
    */
    Circle: boolean;
    private _maximalAdjustments;
    /**
        how many times to try to position the nodes in a maximal way (i.e. no backtracking)
    */
    MaximalAdjustments: number;
    getOptions(): {
        name: string;
        ready: () => void;
        stop: () => void;
        fit: boolean;
        padding: number;
        directed: boolean;
        circle: boolean;
        roots: any;
        maximalAdjustments: number;
    };
}
/**
    The cose (Compound Spring Embedder) layout uses a force-directed simulation to lay out compound graphs.
*/
export declare class GraphEditorCOSELayout implements IGraphEditorLayout {
    name(): string;
    onReady: () => void;
    onStop: () => void;
    private _refresh;
    /**
        Number of iterations between consecutive screen positions update (0 -> only updated on the end)
    */
    Refresh: number;
    private _padding;
    /**
        Padding on fit
    */
    Padding: number;
    private _fit;
    /**
     Whether to fit the network view after when done
    */
    Fit: boolean;
    private _randomize;
    /**
        Whether to randomize node positions on the beginning
    */
    Randomize: boolean;
    getOptions(): {
        name: string;
        ready: () => void;
        stop: () => void;
        fit: boolean;
        refresh: number;
        padding: number;
        randomize: boolean;
        debug: boolean;
        nodeRepulsion: number;
        nodeOverlap: number;
        idealEdgeLength: number;
        edgeElasticity: number;
        nestingFactor: number;
        gravity: number;
        numIter: number;
        initialTemp: number;
        coolingFactor: number;
        minTemp: number;
    };
}
/**
    The arbor layout uses a force-directed physics simulation
*/
export declare class GraphEditorArborLayout implements IGraphEditorLayout {
    name(): string;
    onReady: () => void;
    onStop: () => void;
    /**
        Whether to fit the network view after when done
    */
    private _fit;
    Fit: boolean;
    private _liveUpdate;
    /**
        whether to show the layout as it's running
    */
    LiveUpdate: boolean;
    private _ungrabifyWhileSimulating;
    /**
        so you can't drag nodes during layout
    */
    UngrabifyWhileSimulating: boolean;
    private _stepSize;
    /**
        size of timestep in simulation
    */
    StepSize: number;
    private _maxSimulationTime;
    /**
        size of timestep in simulation
    */
    MaxSimulationTime: number;
    getOptions(): {
        name: string;
        ready: () => void;
        stop: () => void;
        fit: boolean;
        liveUpdate: boolean;
        maxSimulationTime: number;
        padding: number[];
        simulationBounds: any;
        ungrabifyWhileSimulating: boolean;
        repulsion: any;
        stiffness: any;
        friction: any;
        gravity: boolean;
        fps: any;
        precision: any;
        nodeMass: any;
        edgeLength: any;
        stepSize: number;
        stableEnergy: (energy: any) => boolean;
    };
}
export declare enum ElementEnum {
    Node = 0,
    Edge = 1,
}
export declare class GraphElement extends VXO.TObject {
    constructor(label?: string, tiplabel?: string);
    private _group;
    ElementType: ElementEnum;
    private _label;
    /**
      Label for the element
    */
    Label: string;
    private _attached;
    /**
      For internal use to prevent douplicated attachment of things
    */
    Attached: boolean;
    private _color;
    /**
      color: The colour of the element's label.
    */
    LabelColor: string;
    private _min_zoomed_font_size;
    /**
        If zooming makes the effective font size of the label smaller than this, then no label is shown.
    */
    LabelMinZoomedFontSize: number;
    private _font_size;
    /**
        font-size : The size of the label text.
    */
    LabelFontSize: number;
    private _selected;
    /**
        whether the element is selected (default false)
    */
    Selected: boolean;
    private _selectable;
    /**
        whether the selection state is mutable (default true)
    */
    Selectable: boolean;
    private _menuRadius;
    /**
        the radius of the circular menu in pixels
    */
    MenuRadius: number;
    private _activePadding;
    /**
        additional size in pixels for the active command
    */
    MenuActivePadding: number;
    private _indicatorSize;
    /**
        the size in pixels of the pointer to the active command
    */
    MenuIndicatorSize: number;
    private _separatorWidth;
    /**
        the empty spacing in pixels between successive commands
    */
    MenuSeparatorWidth: number;
    private _spotlightPadding;
    /**
        extra spacing in pixels between the element and the spotlight
    */
    MenuSpotlightPadding: number;
    private _minSpotlightRadius;
    /**
        the minimum radius in pixels of the spotlight
    */
    MenuMinSpotlightRadius: number;
    private _maxSpotlightRadius;
    /**
        the maximum radius in pixels of the spotlight
    */
    MenuMaxSpotlightRadius: number;
    private _zIndex;
    /**
        the z-index of the ui div
    */
    MenuzIndex: number;
    private _fillColor;
    /**
      the background colour of the menu
    */
    MenuFillColor: string;
    private _activeFillColor;
    /**
      the colour used to indicate the selected command
    */
    MenuActiveFillColor: string;
    private _itemColor;
    /**
      the colour of text in the command's content
    */
    MenuItemColor: string;
    private _itemTextShadowColor;
    /**
        the text shadow colour of the command's content
    */
    MenuItemTextShadowColor: string;
    private _positionmyH;
    /**
        Which tooltip corner should be positioned see at http://qtip2.com/demos
        horizontal
    */
    TipPositionmyH: V.GraphTipPositionHEnum;
    private _positionmyV;
    /**
        Which tooltip corner should be positioned - see at http://qtip2.com/demos
        vertical
    */
    TipPositionmyV: V.GraphTipPositionVEnum;
    private _positionatH;
    /**
        Which corner of the target should I diplay at  - see at http://qtip2.com/demos
        horizontal
    */
    TipPositionatH: V.GraphTipPositionHEnum;
    private _positionatV;
    /**
        Which corner of the target should I diplay at  - see at http://qtip2.com/demos
        vertical
    */
    TipPositionatV: V.GraphTipPositionVEnum;
    private _TipHeight;
    /**
        height : The height of the tip's body.
    */
    TipHeight: number;
    private _TipWidth;
    /**
        width : The width of the tip's body.
    */
    TipWidth: number;
    private _TipLabel;
    /**
        Label for the tip
    */
    TipLabel: string;
    private _cyViewport;
    /**
        When true, updates element qTip position on zoom and pan. Note you'll need your own mechanism to hide out-of-bounds qTips,
        such as customising the parent container.
    */
    TipCyViewport: boolean;
    private _actions;
    addAction(text: string, onAction: (evt: GraphElement) => void): void;
    resetActions(): void;
    Actions: any[];
    private _father;
    private _changed;
    Changed: boolean;
    onChanged(): void;
    getObject(): void;
    getMenuObject(): {
        menuRadius: number;
        selector: string;
        commands: any[];
        fillColor: string;
        activeFillColor: string;
        activePadding: number;
        indicatorSize: number;
        separatorWidth: number;
        spotlightPadding: number;
        minSpotlightRadius: number;
        maxSpotlightRadius: number;
        itemColor: string;
        itemTextShadowColor: string;
        zIndex: number;
    };
    getTipObject(): {
        content: string;
        position: {
            my: string;
            at: string;
            adjust: {
                cyViewport: boolean;
            };
        };
        show: {};
        hide: {};
        style: {
            classes: string;
            tip: {
                width: number;
                height: number;
            };
        };
    };
}
export declare class GraphEdge extends GraphElement {
    constructor(source?: string, target?: string, label?: string, tiplabel?: string);
    private _target_arrow_fill;
    /**
        The fill state of the edge's target arrow; may be filled or hollow.
    */
    TargetArrowFill: V.GraphEdgeArrowFillEnum;
    private _source_arrow_fill;
    /**
        The fill state of the edge's source arrow; may be filled or hollow.
    */
    SourceArrowFill: V.GraphEdgeArrowFillEnum;
    private _target_arrow_shape;
    /**
        The shape of the edge's arrow on the target side; may be tee, triangle, square, circle, diamond, or none.
    */
    TargetArrowShape: V.GraphEdgeArrowTypeEnum;
    private _source_arrow_shape;
    /**
        The shape of the edge's arrow on the source side; may be tee, triangle, square, circle, diamond, or none.
    */
    SourceArrowShape: V.GraphEdgeArrowTypeEnum;
    private _line_style;
    /**
        line-style : The style of the edge's line; may be solid, dotted, or dashed.
    */
    LineStyle: V.GraphEdgeLineStyleEnum;
    private _width;
    /**
        width : The width of the line.
    */
    Width: number;
    private _source_arrow_color;
    /**
        source-arrow-color : The colour of the edge's arrow on the source side.
    */
    SourceArrowColor: string;
    private _target_arrow_color;
    /**
      target-arrow-color : The colour of the edge's arrow on the target side.
    */
    TargetArrowColor: string;
    private _line_color;
    /**
      line-color : The colour of the edge's line.
    */
    Color: string;
    private _curve_style;
    /**
        curve-style : The curving method used to separate two or more edges between two nodes; may be bezier (default) or haystack
         (for which loops are unsupported). Note that haystack edges work best with ellipse, rectangle, or similar nodes.
        Smaller node shapes, like triangle, will not be as aesthetically pleasing. Also note that edge arrows are unsupported for
        haystack edges.
    */
    CurveStyle: V.GraphEdgeCurveStyleEnum;
    private _source;
    Source: string;
    private _target;
    Target: string;
    getObject(): {
        group: string;
        data: {
            id: string;
            source: string;
            target: string;
            label: string;
        };
        selected: boolean;
        selectable: boolean;
        css: {
            'curve-style': string;
            'line-style': string;
            'line-color': string;
            'width': number;
            'source-arrow-color': string;
            'target-arrow-color': string;
            'source-arrow-shape': string;
            'target-arrow-shape': any;
            'source-arrow-fill': string;
            'target-arrow-fill': string;
            'content': string;
            'font-size': number;
            'min-zoomed-font-size': number;
        };
    };
    private getStyle();
}
export declare class GraphNode extends GraphElement {
    constructor(label?: string, background_image?: string, tiplabel?: string);
    private _background_color;
    /**
      background-color : The colour of the node's body.
    */
    BackgroundColor: string;
    private _height;
    /**
    height : The height of the node's body.
    */
    Height: number;
    private _width;
    /**
    width : The width of the node's body.
    */
    Width: number;
    private _text_valign;
    /**
        The vertical alignment of a label; may have value top, center, or bottom.
    */
    LabelTextValign: V.GraphNodeLabelVerticalAlignmentEnum;
    private _text_halign;
    /**
        The horizontal alignment of a label; may have value left, center, or right.
    */
    LabelTextHalign: V.GraphNodeLabelHorizAlignmentEnum;
    private _background_image;
    /**
      The URL that points to the image that should be used as the node's background. PNG, JPG, and SVG are supported formats.
    */
    BackgroundImage: string;
    private _background_opacity;
    /**
        The opacity level of the node's body. Opacity values are specified as numbers ranging on 0 <= opacity <= 1
    */
    BackgroundOpacity: number;
    private _shape;
    /**
        The shape of the node's body; may be rectangle, roundrectangle, ellipse, triangle, pentagon, hexagon, heptagon,
        octagon, star. Note that each shape fits within the specified width and height, and so you may have to adjust
        width and height if you desire an equilateral shape (i.e. width !== height for several equilateral shapes).
    */
    Shape: V.GraphNodeShapeEnum;
    private _parent;
    Parent: string;
    private _positionX;
    /**
        the model position of the node (optional on init, mandatory after)
    */
    PositionX: number;
    private _positionY;
    /**
        the model position of the node (optional on init, mandatory after)
    */
    PositionY: number;
    private _locked;
    /**
        when locked a node's position is immutable (default false)
    */
    Locked: boolean;
    private _grabbable;
    /**
        whether the node can be grabbed and moved by the user
    */
    Grabbable: boolean;
    private _classes;
    /**
        a space separated list of class names that the element has
    */
    Classes: string;
    getObject(): {
        group: string;
        data: {
            id: string;
            parent: string;
            label: string;
        };
        position: {
            x: number;
            y: number;
        };
        selected: boolean;
        selectable: boolean;
        locked: boolean;
        grabbable: boolean;
        classes: string;
        color: string;
        css: {
            'background-image': string;
            'background-fit': string;
            'shape': string;
            'background-opacity': number;
            'content': string;
            'font-size': number;
            'min-zoomed-font-size': number;
            'text_halign': string;
            'text-valign': string;
            'width': number;
            'height': number;
            'border-color': string;
            'background-color': string;
        };
    };
    private getStyle();
}
export declare class TGraphEditor extends VXC.TComponent {
    create(): void;
    private attachMenuTip(elObj, el);
    private getObjectsArray(els);
    draw(reCreate: boolean): void;
    private setOuterStyles();
    private synchronizeNodePositions();
    private synchronizeElements();
    private _nodesObj;
    private _edgesObj;
    private cytoscapeObj;
    getNNodes(): number;
    getNode(i: number): GraphNode;
    getNodeByID(id: string): GraphNode;
    getNEdges(): number;
    getEdge(i: number): GraphEdge;
    getEdgeByID(id: string): GraphEdge;
    createNode(label?: string, background_image?: string, tiplabel?: string): GraphNode;
    attachNode(node: GraphNode): void;
    createEdge(source?: string, target?: string, label?: string, tiplabel?: string): GraphEdge;
    createEdgeByNodes(source?: GraphNode, target?: GraphNode, label?: string, tiplabel?: string): GraphEdge;
    attachEdge(edge: GraphEdge): void;
    resetGraph(): void;
    removeNode(node: GraphNode): void;
    removeEdge(edge: GraphEdge): void;
    /**
        Get or set whether box selection is enabled.

        http://stackoverflow.com/questions/11316851/how-to-enable-implement-panning-in-cytoscape-js
        Panning is enabled by default. You can disable it via cy.panningEnabled(). There is a slight delay before panning starts such that
        you can use box selection. If you don't need box selection, you can disable it via cy.boxSelectionEnabled(false) -- eliminating the delay.
    */
    private _boxSelectionEnabled;
    BoxSelectionEnabled: boolean;
    private _layout;
    /**
        A plain object that specifies layout options. Which layout is initially run is specified by the name field.
        Refer to a layout's documentation for the options it supports. If you want to specify your node positions
        yourself in your elements JSON, you can use the preset layout — by default it does not set any positions,
        leaving your nodes in their current positions(e.g.specified in options.elements at initialisation time).
    */
    Layout: IGraphEditorLayout;
    private _panzoomDisplay;
    /**
        Panzoom: display or not the panzoom
    */
    PanzoomDisplay: boolean;
    private _navigatorDisplay;
    /**
        Navigator: display or not the panzoom
    */
    NavigatorDisplay: boolean;
    private _navigatorContainer;
    /**
        Can be a HTML or jQuery element or jQuery selector
        Used to indicate navigator HTML container.If is false then a new DOM Element is created.
    */
    NavigatorContainer: JQuery;
    private _navigatorViewLiveFramerate;
    /**
        Set false to update graph pan(position) only on navigator's view drag end. Set 0 to instantly update graph pan when navigator's view is dragged.Set a positive number(N frames per second) to update navigator's view not more than N times per second.
    */
    NavigatorViewLiveFramerate: number;
    private _navigatorThumbnailEventFramerate;
    /**
        Maximal number of thumbnail update's per second triggered by graph events.
    */
    NavigatorThumbnailEventFramerate: number;
    private _navigatorThumbnailLiveFramerate;
    /**
    Maximal number of constant thumbnail update's per second. Set false to disable.
    */
    NavigatorThumbnailLiveFramerate: boolean;
    private _navigatorDblClickDelay;
    /**
    Maximal delay (in miliseconds) between two clicks to consider them as a double click.
    */
    NavigatorDblClickDelay: number;
    private _panzoomZoomFactor;
    /**
        Panzoom: zoom factor per zoom tick
    */
    PanzoomZoomFactor: number;
    private _panzoomZoomDelay;
    /**
        Panzoom: how many ms between zoom ticks
    */
    PanzoomZoomDelay: number;
    private _panzoomMinZoom;
    /**
        Panzoom: min zoom level
    */
    PanzoomMinZoom: number;
    private _panzoomMaxZoom;
    /**
        Panzoom: max zoom level
    */
    PanzoomMaxZoom: number;
    private _panzoomFitPadding;
    /**
        Panzoom: padding when fitting
    */
    PanzoomFitPadding: number;
    private _panzoomPanSpeed;
    /**
        Panzoom: how many ms in between pan ticks
    */
    PanzoomPanSpeed: number;
    private _panzoomPanDistance;
    /**
        Panzoom: max pan distance per tick
    */
    PanzoomPanDistance: number;
    private _panzoomPanDragAreaSize;
    /**
        Panzoom: the length of the pan drag box in which the vector for panning is calculated (bigger = finer control of pan speed and direction)
    */
    PanzoomPanDragAreaSize: number;
    private _panzoomPanMinPercentSpeed;
    /**
        Panzoom: the slowest speed we can pan by (as a percent of panSpeed)
    */
    PanzoomPanMinPercentSpeed: number;
    private _panzoomPanInactiveArea;
    /**
        Panzoom: radius of inactive area in pan drag box
    */
    PanzoomPanInactiveArea: number;
    private _panzoomPanIndicatorMinOpacity;
    /**
        Panzoom: min opacity of pan indicator (the draggable nib); scales from this to 1.0
    */
    PanzoomPanIndicatorMinOpacity: number;
    private _panzoomAutodisableForMobile;
    /**
        Panzoom: disable the panzoom completely for mobile (since we don't really need it with gestures like pinch to zoom)
    */
    PanzoomAutodisableForMobile: boolean;
    private _background_color;
    /**
       Background color
    */
    BackgroundColor: string;
    private _zoom;
    /**
     zoom: The initial zoom level of the graph. Make sure to disable viewport manipulation options, such as fit, in your layout so that it is
     not overridden when the layout is applied.
    
     You can set options.minZoom and options.maxZoom to set restrictions on the zoom level.
    */
    Zoom: number;
    private _minZoom;
    /**
     zoom: The initial zoom level of the graph. Make sure to disable viewport manipulation options, such as fit, in your layout so that it is
     not overridden when the layout is applied.
    
     You can set options.minZoom and options.maxZoom to set restrictions on the zoom level.
    */
    MinZoom: number;
    private _maxZoom;
    /**
     zoom: The initial zoom level of the graph. Make sure to disable viewport manipulation options, such as fit, in your layout so that it is
     not overridden when the layout is applied.
    
     You can set options.minZoom and options.maxZoom to set restrictions on the zoom level.
    */
    MaxZoom: number;
    private _zoomingEnabled;
    /**
        Whether zooming the graph is enabled, both by user events and programmatically.
    */
    ZoomingEnabled: boolean;
    private _userZoomingEnabled;
    /**
        Whether user events (e.g. mouse wheel, pinch-to-zoom) are allowed to zoom the graph. Programmatic
        changes to zoom are unaffected by this option.
    */
    UserZoomingEnabled: boolean;
    private _panningEnabled;
    /**
        Whether panning the graph is enabled, both by user events and programmatically.
    */
    PanningEnabled: boolean;
    private _userPanningEnabled;
    /**
        Whether user events (e.g. dragging the graph background) are allowed to pan the graph.
        Programmatic changes to pan are unaffected by this option.
    */
    UserPanningEnabled: boolean;
    private _autoungrabifyNodes;
    /**
        Whether nodes should be ungrabified (not grabbable by user) by default (if true, overrides individual node state).
    */
    AutoungrabifyNodes: boolean;
    private _hideEdgesOnViewport;
    /**
        When set to true, the renderer does not render edges while the viewport is being manipulated.
        This makes panning, zooming, dragging, et cetera more responsive for large graphs.
    */
    HideEdgesOnViewport: boolean;
    private _motionBlur;
    /**
        When set to true, the renderer will use a motion blur effect to make the transition between frames seem smoother. This can significantly increase the perceived performance for a large graphs.
    */
    MotionBlur: boolean;
    private _hideLabelsOnViewport;
    /**
        When set to true, the renderer does not render labels while the viewport is being manipulated.
        This makes panning, zooming, dragging, et cetera more responsive for large graphs.
    */
    HideLabelsOnViewport: boolean;
    private _textureOnViewport;
    /**
        When set to true, the renderer uses a texture (if supported) during panning and zooming instead of
        drawing the elements, making large graphs more responsive.
    */
    TextureOnViewport: boolean;
    private _panX;
    /**
        The initial panning position of the graph. Make sure to disable viewport manipulation options,
        such as fit, in your layout so that it is not overridden when the layout is applied.
    */
    PanX: number;
    private _panY;
    /**
        The initial panning position of the graph. Make sure to disable viewport manipulation options,
        such as fit, in your layout so that it is not overridden when the layout is applied.
    */
    PanY: number;
    /**
        Empty the graph, add the specified elements, and reapply the initialisation layout.
    */
    loadGraphFromJson(json: string): void;
    /**
        Export the graph as JSON, the same format used at initialisation.
    */
    exportGraphAsJson(): string;
    /**
        Export the current graph view as a PNG image in Base64 representation.
        options The export options.
            bg The background colour of the image (transparent by default).
            full Whether to export the current viewport view (false, default) or the entire graph (true).
            scale This value specifies a positive number that scales the size of the resultant image.
    */
    exportGraphAsPNG(scale?: number, full?: boolean, bg?: string): any;
    /**
         A callback function that is called when Cytoscape.js has loaded the graph and the layout has specified initial
         positions of the nodes.After this point, rendering can happen, the user can interact with the graph, et cetera.
    */
    onReady: (evt: any) => void;
    /**
        A callback function that is called when Cytoscape.js has rendered its first frame.This is useful for
        grabbing screenshots etc after initialision, but in general you should use ready instead.
    */
    onInitrender: (evt: any) => void;
}
