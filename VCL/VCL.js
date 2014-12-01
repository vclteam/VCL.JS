var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "./VXObject", "./VXComponent", "./VXContainer", "./VXApplication", "./VXServer", "./VXPage", "./VXModal", "./VXTab", "./VXText", "./VXInput", "./VXImage", "./VXMenu", "./VXQuery", "./VXOlapSSAS", "./VXButton", "./VXDBGrid", "./VXDataset", "./VXCombo", "./VXListBox", "./VXSideBar", "./VXWell", "./VXCheckBox", "./VXProgressBar", "./VXAlert", "./VXGauge", "./VXChartBar", "./VXChartBarH", "./VXChartLine", "./VXChartDonut", "./VXChartBase", "./VXChartDot", "./VXConst", "./VXDateInput", "./VXSparkLine", "./VXGridSter"], function(require, exports, VXObjectMod, VXCompMod, VXContainMod, VXAppMod, VXServerMod, VXPageMod, VXModalMod, VXTabMod, VXTextMod, VXInputMod, VXImageMod, VXMenuMod, VXQueryMod, VXSSASMod, VXButtonMod, VXDBGridMod, VXDatasetMod, VXComboboxMod, VXlistboxMod, VXSideBarMod, VXWellMod, VXCheckboxMod, VXProgressMod, VXAlertMod, VXGougeMod, VXVXBarMod, VXVXBarVVMod, VXLineMod, VXDonutMod, VXChartMod, VXDotMod, VXconstMod, VXInputDateMod, VXSparkMod, VXGridSterMod) {
    /**TObject is the ultimate ancestor of all components.*/
    var TObject = (function (_super) {
        __extends(TObject, _super);
        function TObject() {
            _super.apply(this, arguments);
        }
        return TObject;
    })(VXObjectMod.TObject);
    exports.TObject = TObject;
    ;
    var TTimer = (function (_super) {
        __extends(TTimer, _super);
        function TTimer() {
            _super.apply(this, arguments);
        }
        return TTimer;
    })(VXObjectMod.TTimer);
    exports.TTimer = TTimer;
    ;
    var TCollectionItem = (function (_super) {
        __extends(TCollectionItem, _super);
        function TCollectionItem() {
            _super.apply(this, arguments);
        }
        return TCollectionItem;
    })(VXObjectMod.TCollectionItem);
    exports.TCollectionItem = TCollectionItem;
    ;

    /**
    TCollection is a container for TCollectionItem objects.
    **/
    var TCollection = (function (_super) {
        __extends(TCollection, _super);
        function TCollection() {
            _super.apply(this, arguments);
        }
        return TCollection;
    })(VXObjectMod.TCollection);
    exports.TCollection = TCollection;
    ;
    var TList = (function (_super) {
        __extends(TList, _super);
        function TList() {
            _super.apply(this, arguments);
        }
        return TList;
    })(VXObjectMod.TList);
    exports.TList = TList;
    ;

    /**
    * TComponent is the base class for all components that are visible at run time.
    */
    var TComponent = (function (_super) {
        __extends(TComponent, _super);
        function TComponent() {
            _super.apply(this, arguments);
        }
        return TComponent;
    })(VXCompMod.TComponent);
    exports.TComponent = TComponent;
    ;
    var TControl = (function (_super) {
        __extends(TControl, _super);
        function TControl() {
            _super.apply(this, arguments);
        }
        return TControl;
    })(VXCompMod.TControl);
    exports.TControl = TControl;
    ;

    var TContainer = (function (_super) {
        __extends(TContainer, _super);
        function TContainer() {
            _super.apply(this, arguments);
        }
        return TContainer;
    })(VXContainMod.TContainer);
    exports.TContainer = TContainer;
    ;
    var TBootstrapRow = (function (_super) {
        __extends(TBootstrapRow, _super);
        function TBootstrapRow() {
            _super.apply(this, arguments);
        }
        return TBootstrapRow;
    })(VXContainMod.TBootstrapRow);
    exports.TBootstrapRow = TBootstrapRow;
    ;
    var TBootstrapRowFluid = (function (_super) {
        __extends(TBootstrapRowFluid, _super);
        function TBootstrapRowFluid() {
            _super.apply(this, arguments);
        }
        return TBootstrapRowFluid;
    })(VXContainMod.TBootstrapRowFluid);
    exports.TBootstrapRowFluid = TBootstrapRowFluid;
    ;
    var TBootstrapSpan = (function (_super) {
        __extends(TBootstrapSpan, _super);
        function TBootstrapSpan() {
            _super.apply(this, arguments);
        }
        return TBootstrapSpan;
    })(VXContainMod.TBootstrapSpan);
    exports.TBootstrapSpan = TBootstrapSpan;
    ;

    var TApplication = (function (_super) {
        __extends(TApplication, _super);
        function TApplication() {
            _super.apply(this, arguments);
        }
        return TApplication;
    })(VXAppMod.TApplication);
    exports.TApplication = TApplication;
    ;
    var TNavbarItem = (function (_super) {
        __extends(TNavbarItem, _super);
        function TNavbarItem() {
            _super.apply(this, arguments);
        }
        return TNavbarItem;
    })(VXAppMod.TNavbarItem);
    exports.TNavbarItem = TNavbarItem;
    ;
    var TFacebookAPI = (function (_super) {
        __extends(TFacebookAPI, _super);
        function TFacebookAPI() {
            _super.apply(this, arguments);
        }
        return TFacebookAPI;
    })(VXAppMod.TFacebookAPI);
    exports.TFacebookAPI = TFacebookAPI;
    ;

    var TServer = (function (_super) {
        __extends(TServer, _super);
        function TServer() {
            _super.apply(this, arguments);
        }
        return TServer;
    })(VXServerMod.TServer);
    exports.TServer = TServer;
    ;

    var TPage = (function (_super) {
        __extends(TPage, _super);
        function TPage() {
            _super.apply(this, arguments);
        }
        return TPage;
    })(VXPageMod.TPage);
    exports.TPage = TPage;
    ;

    var TModal = (function (_super) {
        __extends(TModal, _super);
        function TModal() {
            _super.apply(this, arguments);
        }
        return TModal;
    })(VXModalMod.TModal);
    exports.TModal = TModal;
    ;
    var TModalBuilder = (function (_super) {
        __extends(TModalBuilder, _super);
        function TModalBuilder() {
            _super.apply(this, arguments);
        }
        return TModalBuilder;
    })(VXModalMod.TModalBuilder);
    exports.TModalBuilder = TModalBuilder;
    ;

    var TTabSheet = (function (_super) {
        __extends(TTabSheet, _super);
        function TTabSheet() {
            _super.apply(this, arguments);
        }
        return TTabSheet;
    })(VXTabMod.TTabSheet);
    exports.TTabSheet = TTabSheet;
    ;
    var TTabPage = (function (_super) {
        __extends(TTabPage, _super);
        function TTabPage() {
            _super.apply(this, arguments);
        }
        return TTabPage;
    })(VXTabMod.TTabPage);
    exports.TTabPage = TTabPage;
    ;
    var TTabPanel = (function (_super) {
        __extends(TTabPanel, _super);
        function TTabPanel() {
            _super.apply(this, arguments);
        }
        return TTabPanel;
    })(VXTabMod.TTabPanel);
    exports.TTabPanel = TTabPanel;
    ;
    var TAccordionGroupPanel = (function (_super) {
        __extends(TAccordionGroupPanel, _super);
        function TAccordionGroupPanel() {
            _super.apply(this, arguments);
        }
        return TAccordionGroupPanel;
    })(VXTabMod.TAccordionGroupPanel);
    exports.TAccordionGroupPanel = TAccordionGroupPanel;
    ;
    var TAccordionGroup = (function (_super) {
        __extends(TAccordionGroup, _super);
        function TAccordionGroup() {
            _super.apply(this, arguments);
        }
        return TAccordionGroup;
    })(VXTabMod.TAccordionGroup);
    exports.TAccordionGroup = TAccordionGroup;
    ;
    var TAccordion = (function (_super) {
        __extends(TAccordion, _super);
        function TAccordion() {
            _super.apply(this, arguments);
        }
        return TAccordion;
    })(VXTabMod.TAccordion);
    exports.TAccordion = TAccordion;
    ;
    var TWizardButtons = (function (_super) {
        __extends(TWizardButtons, _super);
        function TWizardButtons() {
            _super.apply(this, arguments);
        }
        return TWizardButtons;
    })(VXTabMod.TWizardButtons);
    exports.TWizardButtons = TWizardButtons;
    ;
    var TWizardButtonsStep = (function (_super) {
        __extends(TWizardButtonsStep, _super);
        function TWizardButtonsStep() {
            _super.apply(this, arguments);
        }
        return TWizardButtonsStep;
    })(VXTabMod.TWizardButtonsStep);
    exports.TWizardButtonsStep = TWizardButtonsStep;
    ;

    var TLabel = (function (_super) {
        __extends(TLabel, _super);
        function TLabel() {
            _super.apply(this, arguments);
        }
        return TLabel;
    })(VXTextMod.TLabel);
    exports.TLabel = TLabel;
    ;
    var TTagCloud = (function (_super) {
        __extends(TTagCloud, _super);
        function TTagCloud() {
            _super.apply(this, arguments);
        }
        return TTagCloud;
    })(VXTextMod.TTagCloud);
    exports.TTagCloud = TTagCloud;
    ;
    var TTagCloudItem = (function (_super) {
        __extends(TTagCloudItem, _super);
        function TTagCloudItem() {
            _super.apply(this, arguments);
        }
        return TTagCloudItem;
    })(VXTextMod.TTagCloudItem);
    exports.TTagCloudItem = TTagCloudItem;
    ;
    var TPillBox = (function (_super) {
        __extends(TPillBox, _super);
        function TPillBox() {
            _super.apply(this, arguments);
        }
        return TPillBox;
    })(VXTextMod.TPillBox);
    exports.TPillBox = TPillBox;
    ;
    var TPillBoxItem = (function (_super) {
        __extends(TPillBoxItem, _super);
        function TPillBoxItem() {
            _super.apply(this, arguments);
        }
        return TPillBoxItem;
    })(VXTextMod.TPillBoxItem);
    exports.TPillBoxItem = TPillBoxItem;
    ;
    var TBreadCrumb = (function (_super) {
        __extends(TBreadCrumb, _super);
        function TBreadCrumb() {
            _super.apply(this, arguments);
        }
        return TBreadCrumb;
    })(VXTextMod.TBreadCrumb);
    exports.TBreadCrumb = TBreadCrumb;
    ;
    var TBreadCrumbItem = (function (_super) {
        __extends(TBreadCrumbItem, _super);
        function TBreadCrumbItem() {
            _super.apply(this, arguments);
        }
        return TBreadCrumbItem;
    })(VXTextMod.TBreadCrumbItem);
    exports.TBreadCrumbItem = TBreadCrumbItem;
    var TPagination = (function (_super) {
        __extends(TPagination, _super);
        function TPagination() {
            _super.apply(this, arguments);
        }
        return TPagination;
    })(VXTextMod.TPagination);
    exports.TPagination = TPagination;
    ;
    var TPaginationItem = (function (_super) {
        __extends(TPaginationItem, _super);
        function TPaginationItem() {
            _super.apply(this, arguments);
        }
        return TPaginationItem;
    })(VXTextMod.TPaginationItem);
    exports.TPaginationItem = TPaginationItem;
    var TDBLabel = (function (_super) {
        __extends(TDBLabel, _super);
        function TDBLabel() {
            _super.apply(this, arguments);
        }
        return TDBLabel;
    })(VXTextMod.TDBLabel);
    exports.TDBLabel = TDBLabel;
    ;
    var TBadge = (function (_super) {
        __extends(TBadge, _super);
        function TBadge() {
            _super.apply(this, arguments);
        }
        return TBadge;
    })(VXTextMod.TBadge);
    exports.TBadge = TBadge;
    ;
    var TDBBadge = (function (_super) {
        __extends(TDBBadge, _super);
        function TDBBadge() {
            _super.apply(this, arguments);
        }
        return TDBBadge;
    })(VXTextMod.TDBBadge);
    exports.TDBBadge = TDBBadge;
    ;
    var TText = (function (_super) {
        __extends(TText, _super);
        function TText() {
            _super.apply(this, arguments);
        }
        return TText;
    })(VXTextMod.TText);
    exports.TText = TText;
    ;
    var TDBText = (function (_super) {
        __extends(TDBText, _super);
        function TDBText() {
            _super.apply(this, arguments);
        }
        return TDBText;
    })(VXTextMod.TDBText);
    exports.TDBText = TDBText;
    ;

    var TDBInput = (function (_super) {
        __extends(TDBInput, _super);
        function TDBInput() {
            _super.apply(this, arguments);
        }
        return TDBInput;
    })(VXInputMod.TDBInput);
    exports.TDBInput = TDBInput;
    ;

    /**
    Use a TInput to put a standard input control on a page.
    Input controls are used to retrieve text that users type. Input controls can also display text to the user.
    **/
    var TInput = (function (_super) {
        __extends(TInput, _super);
        function TInput() {
            _super.apply(this, arguments);
        }
        return TInput;
    })(VXInputMod.TInput);
    exports.TInput = TInput;
    ;
    var TInputTypeaHead = (function (_super) {
        __extends(TInputTypeaHead, _super);
        function TInputTypeaHead() {
            _super.apply(this, arguments);
        }
        return TInputTypeaHead;
    })(VXInputMod.TInputTypeaHead);
    exports.TInputTypeaHead = TInputTypeaHead;
    ;
    var TTypeaHeadItem = (function (_super) {
        __extends(TTypeaHeadItem, _super);
        function TTypeaHeadItem() {
            _super.apply(this, arguments);
        }
        return TTypeaHeadItem;
    })(VXInputMod.TTypeaHeadItem);
    exports.TTypeaHeadItem = TTypeaHeadItem;
    ;
    var TTextArea = (function (_super) {
        __extends(TTextArea, _super);
        function TTextArea() {
            _super.apply(this, arguments);
        }
        return TTextArea;
    })(VXInputMod.TTextArea);
    exports.TTextArea = TTextArea;
    ;
    var TDBTextArea = (function (_super) {
        __extends(TDBTextArea, _super);
        function TDBTextArea() {
            _super.apply(this, arguments);
        }
        return TDBTextArea;
    })(VXInputMod.TDBTextArea);
    exports.TDBTextArea = TDBTextArea;
    ;
    var TInputNumeric = (function (_super) {
        __extends(TInputNumeric, _super);
        function TInputNumeric() {
            _super.apply(this, arguments);
        }
        return TInputNumeric;
    })(VXInputMod.TInputNumeric);
    exports.TInputNumeric = TInputNumeric;
    ;
    var TDBInputNumeric = (function (_super) {
        __extends(TDBInputNumeric, _super);
        function TDBInputNumeric() {
            _super.apply(this, arguments);
        }
        return TDBInputNumeric;
    })(VXInputMod.TDBInputNumeric);
    exports.TDBInputNumeric = TDBInputNumeric;
    ;

    var TImage = (function (_super) {
        __extends(TImage, _super);
        function TImage() {
            _super.apply(this, arguments);
        }
        return TImage;
    })(VXImageMod.TImage);
    exports.TImage = TImage;
    ;
    var TIcon = (function (_super) {
        __extends(TIcon, _super);
        function TIcon() {
            _super.apply(this, arguments);
        }
        return TIcon;
    })(VXImageMod.TIcon);
    exports.TIcon = TIcon;
    ;
    var TGravatarImage = (function (_super) {
        __extends(TGravatarImage, _super);
        function TGravatarImage() {
            _super.apply(this, arguments);
        }
        return TGravatarImage;
    })(VXImageMod.TGravatarImage);
    exports.TGravatarImage = TGravatarImage;
    ;

    var TMenuItem = (function (_super) {
        __extends(TMenuItem, _super);
        function TMenuItem() {
            _super.apply(this, arguments);
        }
        return TMenuItem;
    })(VXMenuMod.TMenuItem);
    exports.TMenuItem = TMenuItem;
    ;
    var TMenuItemCollection = (function (_super) {
        __extends(TMenuItemCollection, _super);
        function TMenuItemCollection() {
            _super.apply(this, arguments);
        }
        return TMenuItemCollection;
    })(VXMenuMod.TMenuItemCollection);
    exports.TMenuItemCollection = TMenuItemCollection;
    ;

    /**
    * TQuery represents a dataset with a result set that is based on an SQL statement.
    */
    var TQuery = (function (_super) {
        __extends(TQuery, _super);
        function TQuery() {
            _super.apply(this, arguments);
        }
        return TQuery;
    })(VXQueryMod.TQuery);
    exports.TQuery = TQuery;
    ;

    /**
    * TQuery represents a dataset with a result set that is based on a remoteSQL statement.
    */
    var TQueryRemote = (function (_super) {
        __extends(TQueryRemote, _super);
        function TQueryRemote() {
            _super.apply(this, arguments);
        }
        return TQueryRemote;
    })(VXQueryMod.TQueryRemote);
    exports.TQueryRemote = TQueryRemote;
    ;
    var TQueryParam = (function (_super) {
        __extends(TQueryParam, _super);
        function TQueryParam() {
            _super.apply(this, arguments);
        }
        return TQueryParam;
    })(VXQueryMod.TQueryParam);
    exports.TQueryParam = TQueryParam;
    ;

    var TOlapSSAS = (function (_super) {
        __extends(TOlapSSAS, _super);
        function TOlapSSAS() {
            _super.apply(this, arguments);
        }
        return TOlapSSAS;
    })(VXSSASMod.TOlapSSAS);
    exports.TOlapSSAS = TOlapSSAS;
    ;

    /**
    * Button is a push button control.
    * Use TButton to put a standard push button on a page or modalform
    */
    var TButton = (function (_super) {
        __extends(TButton, _super);
        function TButton() {
            _super.apply(this, arguments);
        }
        return TButton;
    })(VXButtonMod.TButton);
    exports.TButton = TButton;
    ;
    var TToggleSwitch = (function (_super) {
        __extends(TToggleSwitch, _super);
        function TToggleSwitch() {
            _super.apply(this, arguments);
        }
        return TToggleSwitch;
    })(VXButtonMod.TToggleSwitch);
    exports.TToggleSwitch = TToggleSwitch;
    ;
    var TFacebookButton = (function (_super) {
        __extends(TFacebookButton, _super);
        function TFacebookButton() {
            _super.apply(this, arguments);
        }
        return TFacebookButton;
    })(VXButtonMod.TFacebookButton);
    exports.TFacebookButton = TFacebookButton;
    ;

    /**
    TDBGrid displays and manipulates records from a dataset in a tabular grid.
    **/
    var TDBGrid = (function (_super) {
        __extends(TDBGrid, _super);
        function TDBGrid() {
            _super.apply(this, arguments);
        }
        return TDBGrid;
    })(VXDBGridMod.TDBGrid);
    exports.TDBGrid = TDBGrid;
    ;
    var TDBGridColumn = (function (_super) {
        __extends(TDBGridColumn, _super);
        function TDBGridColumn() {
            _super.apply(this, arguments);
        }
        return TDBGridColumn;
    })(VXDBGridMod.TDBGridColumn);
    exports.TDBGridColumn = TDBGridColumn;
    ;
    var TGrid = (function (_super) {
        __extends(TGrid, _super);
        function TGrid() {
            _super.apply(this, arguments);
        }
        return TGrid;
    })(VXDBGridMod.TGrid);
    exports.TGrid = TGrid;
    ;

    /**
    * TDataset is the base class for all dataset components that represent data in rows and columns.
    */
    var TDataset = (function (_super) {
        __extends(TDataset, _super);
        function TDataset() {
            _super.apply(this, arguments);
        }
        return TDataset;
    })(VXDatasetMod.TDataset);
    exports.TDataset = TDataset;
    ;
    var TClientDataset = (function (_super) {
        __extends(TClientDataset, _super);
        function TClientDataset() {
            _super.apply(this, arguments);
        }
        return TClientDataset;
    })(VXDatasetMod.TClientDataset);
    exports.TClientDataset = TClientDataset;
    ;

    var TComboItem = (function (_super) {
        __extends(TComboItem, _super);
        function TComboItem() {
            _super.apply(this, arguments);
        }
        return TComboItem;
    })(VXComboboxMod.TComboItem);
    exports.TComboItem = TComboItem;
    ;

    /**
    TComboBox combines an edit box with a scrollable list.
    **/
    var TCombobox = (function (_super) {
        __extends(TCombobox, _super);
        function TCombobox() {
            _super.apply(this, arguments);
        }
        return TCombobox;
    })(VXComboboxMod.TCombobox);
    exports.TCombobox = TCombobox;
    ;
    var TDBCombobox = (function (_super) {
        __extends(TDBCombobox, _super);
        function TDBCombobox() {
            _super.apply(this, arguments);
        }
        return TDBCombobox;
    })(VXComboboxMod.TDBCombobox);
    exports.TDBCombobox = TDBCombobox;
    ;

    /**
    TListBox displays a collection of items in a scrollable list.
    **/
    var TListBox = (function (_super) {
        __extends(TListBox, _super);
        function TListBox() {
            _super.apply(this, arguments);
        }
        return TListBox;
    })(VXlistboxMod.TListbox);
    exports.TListBox = TListBox;
    ;
    var TTree = (function (_super) {
        __extends(TTree, _super);
        function TTree() {
            _super.apply(this, arguments);
        }
        return TTree;
    })(VXlistboxMod.TTree);
    exports.TTree = TTree;
    ;
    var TTreeNodeItem = (function (_super) {
        __extends(TTreeNodeItem, _super);
        function TTreeNodeItem() {
            _super.apply(this, arguments);
        }
        return TTreeNodeItem;
    })(VXlistboxMod.TTreeNodeItem);
    exports.TTreeNodeItem = TTreeNodeItem;
    ;

    var TSideBar = (function (_super) {
        __extends(TSideBar, _super);
        function TSideBar() {
            _super.apply(this, arguments);
        }
        return TSideBar;
    })(VXSideBarMod.TSideBar);
    exports.TSideBar = TSideBar;
    ;
    var TNavBar = (function (_super) {
        __extends(TNavBar, _super);
        function TNavBar() {
            _super.apply(this, arguments);
        }
        return TNavBar;
    })(VXSideBarMod.TNavBar);
    exports.TNavBar = TNavBar;
    ;

    var TWell = (function (_super) {
        __extends(TWell, _super);
        function TWell() {
            _super.apply(this, arguments);
        }
        return TWell;
    })(VXWellMod.TWell);
    exports.TWell = TWell;
    ;
    var TCarousel = (function (_super) {
        __extends(TCarousel, _super);
        function TCarousel() {
            _super.apply(this, arguments);
        }
        return TCarousel;
    })(VXWellMod.TCarousel);
    exports.TCarousel = TCarousel;
    ;
    var TGoogleMap = (function (_super) {
        __extends(TGoogleMap, _super);
        function TGoogleMap() {
            _super.apply(this, arguments);
        }
        return TGoogleMap;
    })(VXWellMod.TGoogleMap);
    exports.TGoogleMap = TGoogleMap;
    ;
    var TGoogleMapMarker = (function (_super) {
        __extends(TGoogleMapMarker, _super);
        function TGoogleMapMarker() {
            _super.apply(this, arguments);
        }
        return TGoogleMapMarker;
    })(VXWellMod.TGoogleMapMarker);
    exports.TGoogleMapMarker = TGoogleMapMarker;
    ;
    var TGoogleMapHeatmapMarker = (function (_super) {
        __extends(TGoogleMapHeatmapMarker, _super);
        function TGoogleMapHeatmapMarker() {
            _super.apply(this, arguments);
        }
        return TGoogleMapHeatmapMarker;
    })(VXWellMod.TGoogleMapHeatmapMarker);
    exports.TGoogleMapHeatmapMarker = TGoogleMapHeatmapMarker;
    ;
    var TPanel = (function (_super) {
        __extends(TPanel, _super);
        function TPanel() {
            _super.apply(this, arguments);
        }
        return TPanel;
    })(VXWellMod.TPanel);
    exports.TPanel = TPanel;
    ;
    var TPanelButton = (function (_super) {
        __extends(TPanelButton, _super);
        function TPanelButton() {
            _super.apply(this, arguments);
        }
        return TPanelButton;
    })(VXWellMod.TPanelButton);
    exports.TPanelButton = TPanelButton;
    ;

    var TGraphEditor = (function (_super) {
        __extends(TGraphEditor, _super);
        function TGraphEditor() {
            _super.apply(this, arguments);
        }
        return TGraphEditor;
    })(VXWellMod.TGraphEditor);
    exports.TGraphEditor = TGraphEditor;
    ;
    var GraphNode = (function (_super) {
        __extends(GraphNode, _super);
        function GraphNode() {
            _super.apply(this, arguments);
        }
        return GraphNode;
    })(VXWellMod.GraphNode);
    exports.GraphNode = GraphNode;
    ;
    var GraphEdge = (function (_super) {
        __extends(GraphEdge, _super);
        function GraphEdge() {
            _super.apply(this, arguments);
        }
        return GraphEdge;
    })(VXWellMod.GraphEdge);
    exports.GraphEdge = GraphEdge;
    ;
    var GraphElement = (function (_super) {
        __extends(GraphElement, _super);
        function GraphElement() {
            _super.apply(this, arguments);
        }
        return GraphElement;
    })(VXWellMod.GraphElement);
    exports.GraphElement = GraphElement;
    ;
    var GraphEditorArborLayout = (function (_super) {
        __extends(GraphEditorArborLayout, _super);
        function GraphEditorArborLayout() {
            _super.apply(this, arguments);
        }
        return GraphEditorArborLayout;
    })(VXWellMod.GraphEditorArborLayout);
    exports.GraphEditorArborLayout = GraphEditorArborLayout;
    ;
    var GraphEditorCOSELayout = (function (_super) {
        __extends(GraphEditorCOSELayout, _super);
        function GraphEditorCOSELayout() {
            _super.apply(this, arguments);
        }
        return GraphEditorCOSELayout;
    })(VXWellMod.GraphEditorArborLayout);
    exports.GraphEditorCOSELayout = GraphEditorCOSELayout;
    ;
    var GraphEditorBreadthfirstLayout = (function (_super) {
        __extends(GraphEditorBreadthfirstLayout, _super);
        function GraphEditorBreadthfirstLayout() {
            _super.apply(this, arguments);
        }
        return GraphEditorBreadthfirstLayout;
    })(VXWellMod.GraphEditorBreadthfirstLayout);
    exports.GraphEditorBreadthfirstLayout = GraphEditorBreadthfirstLayout;
    ;
    var GraphEditorConcentricLayout = (function (_super) {
        __extends(GraphEditorConcentricLayout, _super);
        function GraphEditorConcentricLayout() {
            _super.apply(this, arguments);
        }
        return GraphEditorConcentricLayout;
    })(VXWellMod.GraphEditorConcentricLayout);
    exports.GraphEditorConcentricLayout = GraphEditorConcentricLayout;
    ;
    var GraphEditorCircleLayout = (function (_super) {
        __extends(GraphEditorCircleLayout, _super);
        function GraphEditorCircleLayout() {
            _super.apply(this, arguments);
        }
        return GraphEditorCircleLayout;
    })(VXWellMod.GraphEditorCircleLayout);
    exports.GraphEditorCircleLayout = GraphEditorCircleLayout;
    ;
    var GraphEditorGridLayout = (function (_super) {
        __extends(GraphEditorGridLayout, _super);
        function GraphEditorGridLayout() {
            _super.apply(this, arguments);
        }
        return GraphEditorGridLayout;
    })(VXWellMod.GraphEditorGridLayout);
    exports.GraphEditorGridLayout = GraphEditorGridLayout;
    ;
    var GraphEditorPresetLayout = (function (_super) {
        __extends(GraphEditorPresetLayout, _super);
        function GraphEditorPresetLayout() {
            _super.apply(this, arguments);
        }
        return GraphEditorPresetLayout;
    })(VXWellMod.GraphEditorPresetLayout);
    exports.GraphEditorPresetLayout = GraphEditorPresetLayout;
    ;
    var GraphEditorRandomLayout = (function (_super) {
        __extends(GraphEditorRandomLayout, _super);
        function GraphEditorRandomLayout() {
            _super.apply(this, arguments);
        }
        return GraphEditorRandomLayout;
    })(VXWellMod.GraphEditorRandomLayout);
    exports.GraphEditorRandomLayout = GraphEditorRandomLayout;
    ;
    var GraphEditorNullLayout = (function (_super) {
        __extends(GraphEditorNullLayout, _super);
        function GraphEditorNullLayout() {
            _super.apply(this, arguments);
        }
        return GraphEditorNullLayout;
    })(VXWellMod.GraphEditorNullLayout);
    exports.GraphEditorNullLayout = GraphEditorNullLayout;
    ;

    (function (GraphNodeShapeEnum) {
        GraphNodeShapeEnum[GraphNodeShapeEnum["rectangle"] = 0] = "rectangle";
        GraphNodeShapeEnum[GraphNodeShapeEnum["roundrectangle"] = 1] = "roundrectangle";
        GraphNodeShapeEnum[GraphNodeShapeEnum["ellipse"] = 2] = "ellipse";
        GraphNodeShapeEnum[GraphNodeShapeEnum["triangle"] = 3] = "triangle";
        GraphNodeShapeEnum[GraphNodeShapeEnum["pentagon"] = 4] = "pentagon";
        GraphNodeShapeEnum[GraphNodeShapeEnum["hexagon"] = 5] = "hexagon";
        GraphNodeShapeEnum[GraphNodeShapeEnum["heptagon"] = 6] = "heptagon";
        GraphNodeShapeEnum[GraphNodeShapeEnum["octagon"] = 7] = "octagon";
        GraphNodeShapeEnum[GraphNodeShapeEnum["star"] = 8] = "star";
    })(exports.GraphNodeShapeEnum || (exports.GraphNodeShapeEnum = {}));
    var GraphNodeShapeEnum = exports.GraphNodeShapeEnum;
    ;

    (function (GraphNodeLabelHorizAlignmentEnum) {
        GraphNodeLabelHorizAlignmentEnum[GraphNodeLabelHorizAlignmentEnum["left"] = 0] = "left";
        GraphNodeLabelHorizAlignmentEnum[GraphNodeLabelHorizAlignmentEnum["center"] = 1] = "center";
        GraphNodeLabelHorizAlignmentEnum[GraphNodeLabelHorizAlignmentEnum["right"] = 2] = "right";
    })(exports.GraphNodeLabelHorizAlignmentEnum || (exports.GraphNodeLabelHorizAlignmentEnum = {}));
    var GraphNodeLabelHorizAlignmentEnum = exports.GraphNodeLabelHorizAlignmentEnum;
    ;

    (function (GraphNodeLabelVerticalAlignmentEnum) {
        GraphNodeLabelVerticalAlignmentEnum[GraphNodeLabelVerticalAlignmentEnum["top"] = 0] = "top";
        GraphNodeLabelVerticalAlignmentEnum[GraphNodeLabelVerticalAlignmentEnum["center"] = 1] = "center";
        GraphNodeLabelVerticalAlignmentEnum[GraphNodeLabelVerticalAlignmentEnum["bottom"] = 2] = "bottom";
    })(exports.GraphNodeLabelVerticalAlignmentEnum || (exports.GraphNodeLabelVerticalAlignmentEnum = {}));
    var GraphNodeLabelVerticalAlignmentEnum = exports.GraphNodeLabelVerticalAlignmentEnum;
    ;

    (function (GraphEdgeCurveStyleEnum) {
        GraphEdgeCurveStyleEnum[GraphEdgeCurveStyleEnum["bezier"] = 0] = "bezier";
        GraphEdgeCurveStyleEnum[GraphEdgeCurveStyleEnum["haystack"] = 1] = "haystack";
    })(exports.GraphEdgeCurveStyleEnum || (exports.GraphEdgeCurveStyleEnum = {}));
    var GraphEdgeCurveStyleEnum = exports.GraphEdgeCurveStyleEnum;
    ;

    (function (GraphEdgeLineStyleEnum) {
        GraphEdgeLineStyleEnum[GraphEdgeLineStyleEnum["solid"] = 0] = "solid";
        GraphEdgeLineStyleEnum[GraphEdgeLineStyleEnum["dotted"] = 1] = "dotted";
        GraphEdgeLineStyleEnum[GraphEdgeLineStyleEnum["dashed"] = 2] = "dashed";
    })(exports.GraphEdgeLineStyleEnum || (exports.GraphEdgeLineStyleEnum = {}));
    var GraphEdgeLineStyleEnum = exports.GraphEdgeLineStyleEnum;
    ;

    (function (GraphEdgeArrowTypeEnum) {
        GraphEdgeArrowTypeEnum[GraphEdgeArrowTypeEnum["tee"] = 0] = "tee";
        GraphEdgeArrowTypeEnum[GraphEdgeArrowTypeEnum["triangle"] = 1] = "triangle";
        GraphEdgeArrowTypeEnum[GraphEdgeArrowTypeEnum["square"] = 2] = "square";
        GraphEdgeArrowTypeEnum[GraphEdgeArrowTypeEnum["circle"] = 3] = "circle";
        GraphEdgeArrowTypeEnum[GraphEdgeArrowTypeEnum["diamond"] = 4] = "diamond";
        GraphEdgeArrowTypeEnum[GraphEdgeArrowTypeEnum["none"] = 5] = "none";
    })(exports.GraphEdgeArrowTypeEnum || (exports.GraphEdgeArrowTypeEnum = {}));
    var GraphEdgeArrowTypeEnum = exports.GraphEdgeArrowTypeEnum;
    ;

    (function (GraphEdgeArrowFillEnum) {
        GraphEdgeArrowFillEnum[GraphEdgeArrowFillEnum["filled"] = 0] = "filled";
        GraphEdgeArrowFillEnum[GraphEdgeArrowFillEnum["hollow"] = 1] = "hollow";
    })(exports.GraphEdgeArrowFillEnum || (exports.GraphEdgeArrowFillEnum = {}));
    var GraphEdgeArrowFillEnum = exports.GraphEdgeArrowFillEnum;
    ;

    (function (GraphTipPositionVEnum) {
        GraphTipPositionVEnum[GraphTipPositionVEnum["Top"] = 0] = "Top";
        GraphTipPositionVEnum[GraphTipPositionVEnum["Center"] = 1] = "Center";
        GraphTipPositionVEnum[GraphTipPositionVEnum["Bottom"] = 2] = "Bottom";
    })(exports.GraphTipPositionVEnum || (exports.GraphTipPositionVEnum = {}));
    var GraphTipPositionVEnum = exports.GraphTipPositionVEnum;
    ;

    (function (GraphTipPositionHEnum) {
        GraphTipPositionHEnum[GraphTipPositionHEnum["Left"] = 0] = "Left";
        GraphTipPositionHEnum[GraphTipPositionHEnum["Center"] = 1] = "Center";
        GraphTipPositionHEnum[GraphTipPositionHEnum["Right"] = 2] = "Right";
    })(exports.GraphTipPositionHEnum || (exports.GraphTipPositionHEnum = {}));
    var GraphTipPositionHEnum = exports.GraphTipPositionHEnum;
    ;

    var TCheckBox = (function (_super) {
        __extends(TCheckBox, _super);
        function TCheckBox() {
            _super.apply(this, arguments);
        }
        return TCheckBox;
    })(VXCheckboxMod.TCheckBox);
    exports.TCheckBox = TCheckBox;
    ;
    var TRadioButton = (function (_super) {
        __extends(TRadioButton, _super);
        function TRadioButton() {
            _super.apply(this, arguments);
        }
        return TRadioButton;
    })(VXCheckboxMod.TRadioButton);
    exports.TRadioButton = TRadioButton;
    ;
    var TDBCheckBox = (function (_super) {
        __extends(TDBCheckBox, _super);
        function TDBCheckBox() {
            _super.apply(this, arguments);
        }
        return TDBCheckBox;
    })(VXCheckboxMod.TDBCheckBox);
    exports.TDBCheckBox = TDBCheckBox;
    ;
    var TVerticalCheckBoxList = (function (_super) {
        __extends(TVerticalCheckBoxList, _super);
        function TVerticalCheckBoxList() {
            _super.apply(this, arguments);
        }
        return TVerticalCheckBoxList;
    })(VXCheckboxMod.TVerticalCheckBoxList);
    exports.TVerticalCheckBoxList = TVerticalCheckBoxList;
    ;
    var TVerticalCheckBoxItem = (function (_super) {
        __extends(TVerticalCheckBoxItem, _super);
        function TVerticalCheckBoxItem() {
            _super.apply(this, arguments);
        }
        return TVerticalCheckBoxItem;
    })(VXCheckboxMod.TVerticalCheckBoxItem);
    exports.TVerticalCheckBoxItem = TVerticalCheckBoxItem;
    ;

    var TProgressBar = (function (_super) {
        __extends(TProgressBar, _super);
        function TProgressBar() {
            _super.apply(this, arguments);
        }
        return TProgressBar;
    })(VXProgressMod.TProgressBar);
    exports.TProgressBar = TProgressBar;
    ;
    var TRatingStar = (function (_super) {
        __extends(TRatingStar, _super);
        function TRatingStar() {
            _super.apply(this, arguments);
        }
        return TRatingStar;
    })(VXProgressMod.TRatingStart);
    exports.TRatingStar = TRatingStar;
    ;
    var TSlider = (function (_super) {
        __extends(TSlider, _super);
        function TSlider() {
            _super.apply(this, arguments);
        }
        return TSlider;
    })(VXProgressMod.TSlider);
    exports.TSlider = TSlider;
    ;
    var TRangeSlider = (function (_super) {
        __extends(TRangeSlider, _super);
        function TRangeSlider() {
            _super.apply(this, arguments);
        }
        return TRangeSlider;
    })(VXProgressMod.TRangeSlider);
    exports.TRangeSlider = TRangeSlider;
    ;

    /**
    * Wrap any text and an optional dismiss button for a basic warning alert message.
    */
    var TAlert = (function (_super) {
        __extends(TAlert, _super);
        function TAlert() {
            _super.apply(this, arguments);
        }
        return TAlert;
    })(VXAlertMod.TAlert);
    exports.TAlert = TAlert;
    ;
    var TNotification = (function (_super) {
        __extends(TNotification, _super);
        function TNotification() {
            _super.apply(this, arguments);
        }
        return TNotification;
    })(VXAlertMod.TNotification);
    exports.TNotification = TNotification;
    ;

    var TGauge = (function (_super) {
        __extends(TGauge, _super);
        function TGauge() {
            _super.apply(this, arguments);
        }
        return TGauge;
    })(VXGougeMod.TGauge);
    exports.TGauge = TGauge;
    ;

    var TChartBar = (function (_super) {
        __extends(TChartBar, _super);
        function TChartBar() {
            _super.apply(this, arguments);
        }
        return TChartBar;
    })(VXVXBarMod.TChartBar);
    exports.TChartBar = TChartBar;
    ;
    var TDBChartBar = (function (_super) {
        __extends(TDBChartBar, _super);
        function TDBChartBar() {
            _super.apply(this, arguments);
        }
        return TDBChartBar;
    })(VXVXBarMod.TDBChartBar);
    exports.TDBChartBar = TDBChartBar;
    ;
    var TChartBullet = (function (_super) {
        __extends(TChartBullet, _super);
        function TChartBullet() {
            _super.apply(this, arguments);
        }
        return TChartBullet;
    })(VXVXBarMod.TChartBullet);
    exports.TChartBullet = TChartBullet;
    ;

    var TChartBarH = (function (_super) {
        __extends(TChartBarH, _super);
        function TChartBarH() {
            _super.apply(this, arguments);
        }
        return TChartBarH;
    })(VXVXBarVVMod.TChartBarH);
    exports.TChartBarH = TChartBarH;
    ;
    var TDBChartBarH = (function (_super) {
        __extends(TDBChartBarH, _super);
        function TDBChartBarH() {
            _super.apply(this, arguments);
        }
        return TDBChartBarH;
    })(VXVXBarVVMod.TDBChartBarH);
    exports.TDBChartBarH = TDBChartBarH;
    ;

    var TChartLine = (function (_super) {
        __extends(TChartLine, _super);
        function TChartLine() {
            _super.apply(this, arguments);
        }
        return TChartLine;
    })(VXLineMod.TChartLine);
    exports.TChartLine = TChartLine;
    ;
    var TDBChartLine = (function (_super) {
        __extends(TDBChartLine, _super);
        function TDBChartLine() {
            _super.apply(this, arguments);
        }
        return TDBChartLine;
    })(VXLineMod.TDBChartLine);
    exports.TDBChartLine = TDBChartLine;
    ;
    var TChartArea = (function (_super) {
        __extends(TChartArea, _super);
        function TChartArea() {
            _super.apply(this, arguments);
        }
        return TChartArea;
    })(VXLineMod.TChartArea);
    exports.TChartArea = TChartArea;
    ;
    var TDBChartArea = (function (_super) {
        __extends(TDBChartArea, _super);
        function TDBChartArea() {
            _super.apply(this, arguments);
        }
        return TDBChartArea;
    })(VXLineMod.TDBChartArea);
    exports.TDBChartArea = TDBChartArea;
    ;

    var TChartDonut = (function (_super) {
        __extends(TChartDonut, _super);
        function TChartDonut() {
            _super.apply(this, arguments);
        }
        return TChartDonut;
    })(VXDonutMod.TChartDonut);
    exports.TChartDonut = TChartDonut;
    ;
    var TDBChartDonut = (function (_super) {
        __extends(TDBChartDonut, _super);
        function TDBChartDonut() {
            _super.apply(this, arguments);
        }
        return TDBChartDonut;
    })(VXDonutMod.TDBChartDonut);
    exports.TDBChartDonut = TDBChartDonut;
    ;

    var TDountValue = (function (_super) {
        __extends(TDountValue, _super);
        function TDountValue() {
            _super.apply(this, arguments);
        }
        return TDountValue;
    })(VXChartMod.TDountValue);
    exports.TDountValue = TDountValue;
    ;
    var TBarValue = (function (_super) {
        __extends(TBarValue, _super);
        function TBarValue() {
            _super.apply(this, arguments);
        }
        return TBarValue;
    })(VXChartMod.TBarValue);
    exports.TBarValue = TBarValue;
    ;
    var TLineValue = (function (_super) {
        __extends(TLineValue, _super);
        function TLineValue() {
            _super.apply(this, arguments);
        }
        return TLineValue;
    })(VXChartMod.TLineValue);
    exports.TLineValue = TLineValue;
    ;
    var TDotValue = (function (_super) {
        __extends(TDotValue, _super);
        function TDotValue() {
            _super.apply(this, arguments);
        }
        return TDotValue;
    })(VXChartMod.TDotValue);
    exports.TDotValue = TDotValue;
    ;
    var TSelectedChartValue = (function (_super) {
        __extends(TSelectedChartValue, _super);
        function TSelectedChartValue() {
            _super.apply(this, arguments);
        }
        return TSelectedChartValue;
    })(VXChartMod.TSelectedChartValue);
    exports.TSelectedChartValue = TSelectedChartValue;
    ;

    var TChartDot = (function (_super) {
        __extends(TChartDot, _super);
        function TChartDot() {
            _super.apply(this, arguments);
        }
        return TChartDot;
    })(VXDotMod.TChartDot);
    exports.TChartDot = TChartDot;
    ;
    var TChartBubble = (function (_super) {
        __extends(TChartBubble, _super);
        function TChartBubble() {
            _super.apply(this, arguments);
        }
        return TChartBubble;
    })(VXDotMod.TChartBubble);
    exports.TChartBubble = TChartBubble;
    ;

    var TInputDate = (function (_super) {
        __extends(TInputDate, _super);
        function TInputDate() {
            _super.apply(this, arguments);
        }
        return TInputDate;
    })(VXInputDateMod.TDateInput);
    exports.TInputDate = TInputDate;
    ;
    var TDBInputDate = (function (_super) {
        __extends(TDBInputDate, _super);
        function TDBInputDate() {
            _super.apply(this, arguments);
        }
        return TDBInputDate;
    })(VXInputDateMod.TDBDateInput);
    exports.TDBInputDate = TDBInputDate;
    ;
    var TInputTime = (function (_super) {
        __extends(TInputTime, _super);
        function TInputTime() {
            _super.apply(this, arguments);
        }
        return TInputTime;
    })(VXInputDateMod.TInputTime);
    exports.TInputTime = TInputTime;
    ;
    var TDateButton = (function (_super) {
        __extends(TDateButton, _super);
        function TDateButton() {
            _super.apply(this, arguments);
        }
        return TDateButton;
    })(VXInputDateMod.TDateButton);
    exports.TDateButton = TDateButton;
    ;

    var TSparkBar = (function (_super) {
        __extends(TSparkBar, _super);
        function TSparkBar() {
            _super.apply(this, arguments);
        }
        return TSparkBar;
    })(VXSparkMod.TSparkBar);
    exports.TSparkBar = TSparkBar;
    ;
    var TSparkLine = (function (_super) {
        __extends(TSparkLine, _super);
        function TSparkLine() {
            _super.apply(this, arguments);
        }
        return TSparkLine;
    })(VXSparkMod.TSparkLine);
    exports.TSparkLine = TSparkLine;
    ;
    var TSparkPie = (function (_super) {
        __extends(TSparkPie, _super);
        function TSparkPie() {
            _super.apply(this, arguments);
        }
        return TSparkPie;
    })(VXSparkMod.TSparkPie);
    exports.TSparkPie = TSparkPie;
    ;
    var TDBSparkBar = (function (_super) {
        __extends(TDBSparkBar, _super);
        function TDBSparkBar() {
            _super.apply(this, arguments);
        }
        return TDBSparkBar;
    })(VXSparkMod.TDBSparkBar);
    exports.TDBSparkBar = TDBSparkBar;
    ;
    var TDBSparkLine = (function (_super) {
        __extends(TDBSparkLine, _super);
        function TDBSparkLine() {
            _super.apply(this, arguments);
        }
        return TDBSparkLine;
    })(VXSparkMod.TDBSparkLine);
    exports.TDBSparkLine = TDBSparkLine;
    ;
    var TDBSparkPie = (function (_super) {
        __extends(TDBSparkPie, _super);
        function TDBSparkPie() {
            _super.apply(this, arguments);
        }
        return TDBSparkPie;
    })(VXSparkMod.TDBSparkPie);
    exports.TDBSparkPie = TDBSparkPie;
    ;

    var TWidgetGrid = (function (_super) {
        __extends(TWidgetGrid, _super);
        function TWidgetGrid() {
            _super.apply(this, arguments);
        }
        return TWidgetGrid;
    })(VXGridSterMod.TWidgetGrid);
    exports.TWidgetGrid = TWidgetGrid;
    ;
    var TWidgetPanel = (function (_super) {
        __extends(TWidgetPanel, _super);
        function TWidgetPanel() {
            _super.apply(this, arguments);
        }
        return TWidgetPanel;
    })(VXGridSterMod.TWdgetPanel);
    exports.TWidgetPanel = TWidgetPanel;
    ;

    var TConst = (function (_super) {
        __extends(TConst, _super);
        function TConst() {
            _super.apply(this, arguments);
        }
        return TConst;
    })(VXconstMod.TConst);
    exports.TConst = TConst;
    ;

    /**
    * Represents application-level information.
    * By default, when a new project is created, VCL.JS constructs an TApplication object and assigns it to the Application variable in the VCL module.
    * Application has several properties that can be used to get information about an application while it runs.
    */
    exports.Application = new TApplication();
    exports.FacebookAPI = new TFacebookAPI();

    exports.Global = {};
    (function (CalendarType) {
        CalendarType[CalendarType["Daily"] = 0] = "Daily";
        CalendarType[CalendarType["Monthly"] = 1] = "Monthly";
    })(exports.CalendarType || (exports.CalendarType = {}));
    var CalendarType = exports.CalendarType;
    (function (PasswordStrength) {
        PasswordStrength[PasswordStrength["LOW"] = 0] = "LOW";
        PasswordStrength[PasswordStrength["MEDIUM"] = 1] = "MEDIUM";
        PasswordStrength[PasswordStrength["HIGH"] = 2] = "HIGH";
        PasswordStrength[PasswordStrength["EXTREME"] = 3] = "EXTREME";
    })(exports.PasswordStrength || (exports.PasswordStrength = {}));
    var PasswordStrength = exports.PasswordStrength;
    (function (SortColumnOrder) {
        SortColumnOrder[SortColumnOrder["Ascending"] = 0] = "Ascending";
        SortColumnOrder[SortColumnOrder["Descending"] = 1] = "Descending";
    })(exports.SortColumnOrder || (exports.SortColumnOrder = {}));
    var SortColumnOrder = exports.SortColumnOrder;
    (function (SortMode) {
        SortMode[SortMode["Default"] = 0] = "Default";
        SortMode[SortMode["Custom"] = 1] = "Custom";
    })(exports.SortMode || (exports.SortMode = {}));
    var SortMode = exports.SortMode;

    (function (SliderOrientation) {
        SliderOrientation[SliderOrientation["vertical"] = 0] = "vertical";
        SliderOrientation[SliderOrientation["horizontal"] = 1] = "horizontal";
    })(exports.SliderOrientation || (exports.SliderOrientation = {}));
    var SliderOrientation = exports.SliderOrientation;
    ;

    (function (SliderHandle) {
        SliderHandle[SliderHandle["round"] = 0] = "round";
        SliderHandle[SliderHandle["triangle"] = 1] = "triangle";
        SliderHandle[SliderHandle["square"] = 2] = "square";
    })(exports.SliderHandle || (exports.SliderHandle = {}));
    var SliderHandle = exports.SliderHandle;
    ;

    (function (SliderSelection) {
        SliderSelection[SliderSelection["before"] = 0] = "before";
        SliderSelection[SliderSelection["after"] = 1] = "after";
        SliderSelection[SliderSelection["none"] = 2] = "none";
    })(exports.SliderSelection || (exports.SliderSelection = {}));
    var SliderSelection = exports.SliderSelection;
    ;

    (function (ButtonStyle) {
        ButtonStyle[ButtonStyle["Default"] = 0] = "Default";
        ButtonStyle[ButtonStyle["Primary"] = 1] = "Primary";
        ButtonStyle[ButtonStyle["Info"] = 2] = "Info";
        ButtonStyle[ButtonStyle["Success"] = 3] = "Success";
        ButtonStyle[ButtonStyle["Warning"] = 4] = "Warning";
        ButtonStyle[ButtonStyle["Danger"] = 5] = "Danger";
        ButtonStyle[ButtonStyle["Link"] = 6] = "Link";
    })(exports.ButtonStyle || (exports.ButtonStyle = {}));
    var ButtonStyle = exports.ButtonStyle;

    (function (ColumnType) {
        ColumnType[ColumnType["Text"] = 0] = "Text";
        ColumnType[ColumnType["Icon"] = 1] = "Icon";
        ColumnType[ColumnType["Image"] = 2] = "Image";
    })(exports.ColumnType || (exports.ColumnType = {}));
    var ColumnType = exports.ColumnType;

    (function (PagerButtonStyle) {
        PagerButtonStyle[PagerButtonStyle["Default"] = 0] = "Default";
        PagerButtonStyle[PagerButtonStyle["Primary"] = 1] = "Primary";
        PagerButtonStyle[PagerButtonStyle["Info"] = 2] = "Info";
        PagerButtonStyle[PagerButtonStyle["Success"] = 3] = "Success";
        PagerButtonStyle[PagerButtonStyle["Warning"] = 4] = "Warning";
        PagerButtonStyle[PagerButtonStyle["Danger"] = 5] = "Danger";
        PagerButtonStyle[PagerButtonStyle["Link"] = 6] = "Link";
    })(exports.PagerButtonStyle || (exports.PagerButtonStyle = {}));
    var PagerButtonStyle = exports.PagerButtonStyle;

    (function (ShadowOptions) {
        ShadowOptions[ShadowOptions["None"] = 0] = "None";
        ShadowOptions[ShadowOptions["Perspective"] = 1] = "Perspective";
        ShadowOptions[ShadowOptions["Raised"] = 2] = "Raised";
        ShadowOptions[ShadowOptions["Lifted"] = 3] = "Lifted";
        ShadowOptions[ShadowOptions["Side_hz_1"] = 4] = "Side_hz_1";
        ShadowOptions[ShadowOptions["Side_hz_2"] = 5] = "Side_hz_2";
        ShadowOptions[ShadowOptions["Side_vt_1"] = 6] = "Side_vt_1";
        ShadowOptions[ShadowOptions["Side_vt_2"] = 7] = "Side_vt_2";
    })(exports.ShadowOptions || (exports.ShadowOptions = {}));
    var ShadowOptions = exports.ShadowOptions;

    (function (PagerButtonSize) {
        PagerButtonSize[PagerButtonSize["Default"] = 0] = "Default";
        PagerButtonSize[PagerButtonSize["Large"] = 1] = "Large";
        PagerButtonSize[PagerButtonSize["Small"] = 2] = "Small";
        PagerButtonSize[PagerButtonSize["Mini"] = 3] = "Mini";
    })(exports.PagerButtonSize || (exports.PagerButtonSize = {}));
    var PagerButtonSize = exports.PagerButtonSize;

    (function (InputStyle) {
        InputStyle[InputStyle["Default"] = 0] = "Default";
        InputStyle[InputStyle["Info"] = 1] = "Info";
        InputStyle[InputStyle["Success"] = 2] = "Success";
        InputStyle[InputStyle["Warning"] = 3] = "Warning";
        InputStyle[InputStyle["Error"] = 4] = "Error";
    })(exports.InputStyle || (exports.InputStyle = {}));
    var InputStyle = exports.InputStyle;

    (function (HeaderStyle) {
        HeaderStyle[HeaderStyle["Default"] = 0] = "Default";
        HeaderStyle[HeaderStyle["Primary"] = 1] = "Primary";
        HeaderStyle[HeaderStyle["Info"] = 2] = "Info";
        HeaderStyle[HeaderStyle["Success"] = 3] = "Success";
        HeaderStyle[HeaderStyle["Warning"] = 4] = "Warning";
        HeaderStyle[HeaderStyle["Danger"] = 5] = "Danger";
        HeaderStyle[HeaderStyle["Transparent"] = 6] = "Transparent";
    })(exports.HeaderStyle || (exports.HeaderStyle = {}));
    var HeaderStyle = exports.HeaderStyle;

    (function (FacebookLoginState) {
        FacebookLoginState[FacebookLoginState["Connected"] = 0] = "Connected";
        FacebookLoginState[FacebookLoginState["NotAuthorized"] = 1] = "NotAuthorized";
        FacebookLoginState[FacebookLoginState["NotConnected"] = 2] = "NotConnected";
    })(exports.FacebookLoginState || (exports.FacebookLoginState = {}));
    var FacebookLoginState = exports.FacebookLoginState;

    (function (BaseColor) {
        BaseColor[BaseColor["Default"] = 0] = "Default";
        BaseColor[BaseColor["Primary"] = 1] = "Primary";
        BaseColor[BaseColor["Info"] = 2] = "Info";
        BaseColor[BaseColor["Success"] = 3] = "Success";
        BaseColor[BaseColor["Warning"] = 4] = "Warning";
        BaseColor[BaseColor["Danger"] = 5] = "Danger";
    })(exports.BaseColor || (exports.BaseColor = {}));
    var BaseColor = exports.BaseColor;

    (function (DeviceType) {
        DeviceType[DeviceType["LargeDisplay"] = 0] = "LargeDisplay";
        DeviceType[DeviceType["Tablet"] = 1] = "Tablet";
        DeviceType[DeviceType["Phone"] = 2] = "Phone";
        DeviceType[DeviceType["Default"] = 3] = "Default";
    })(exports.DeviceType || (exports.DeviceType = {}));
    var DeviceType = exports.DeviceType;

    (function (TextStyle) {
        TextStyle[TextStyle["Default"] = 0] = "Default";
        TextStyle[TextStyle["h1"] = 1] = "h1";
        TextStyle[TextStyle["h2"] = 2] = "h2";
        TextStyle[TextStyle["h3"] = 3] = "h3";
        TextStyle[TextStyle["h4"] = 4] = "h4";
        TextStyle[TextStyle["h5"] = 5] = "h5";
        TextStyle[TextStyle["h6"] = 6] = "h6";
        TextStyle[TextStyle["lead"] = 7] = "lead";
        TextStyle[TextStyle["small"] = 8] = "small";
        TextStyle[TextStyle["strong"] = 9] = "strong";
    })(exports.TextStyle || (exports.TextStyle = {}));
    var TextStyle = exports.TextStyle;

    (function (AggergateFunction) {
        AggergateFunction[AggergateFunction["None"] = 0] = "None";
        AggergateFunction[AggergateFunction["Sum"] = 1] = "Sum";
        AggergateFunction[AggergateFunction["Max"] = 2] = "Max";
        AggergateFunction[AggergateFunction["Min"] = 3] = "Min";
        AggergateFunction[AggergateFunction["Avg"] = 4] = "Avg";
    })(exports.AggergateFunction || (exports.AggergateFunction = {}));
    var AggergateFunction = exports.AggergateFunction;

    (function (HeaderTextStyle) {
        HeaderTextStyle[HeaderTextStyle["Default"] = 0] = "Default";
        HeaderTextStyle[HeaderTextStyle["Strong"] = 1] = "Strong";
        HeaderTextStyle[HeaderTextStyle["Small"] = 2] = "Small";
    })(exports.HeaderTextStyle || (exports.HeaderTextStyle = {}));
    var HeaderTextStyle = exports.HeaderTextStyle;

    (function (HeaderTextAlignment) {
        HeaderTextAlignment[HeaderTextAlignment["Left"] = 0] = "Left";
        HeaderTextAlignment[HeaderTextAlignment["Right"] = 1] = "Right";
        HeaderTextAlignment[HeaderTextAlignment["Center"] = 2] = "Center";
    })(exports.HeaderTextAlignment || (exports.HeaderTextAlignment = {}));
    var HeaderTextAlignment = exports.HeaderTextAlignment;

    (function (Overflow) {
        Overflow[Overflow["Visible"] = 0] = "Visible";
        Overflow[Overflow["Hidden"] = 1] = "Hidden";
        Overflow[Overflow["Scroll"] = 2] = "Scroll";
        Overflow[Overflow["Auto"] = 3] = "Auto";
    })(exports.Overflow || (exports.Overflow = {}));
    var Overflow = exports.Overflow;

    /*The overflow property specifies what happens if content overflows an element's box*/
    (function (Overflow_X) {
        /*The overflow is not clipped. It renders outside the element's box. This is default*/
        Overflow_X[Overflow_X["Visible"] = 0] = "Visible";

        /*The overflow is clipped, and the rest of the content will be invisible*/
        Overflow_X[Overflow_X["Hidden"] = 1] = "Hidden";

        /*The overflow is clipped, but a scroll-bar is added to see the rest of the content*/
        Overflow_X[Overflow_X["Scroll"] = 2] = "Scroll";

        /*If overflow is clipped, a scroll-bar should be added to see the rest of the content*/
        Overflow_X[Overflow_X["Auto"] = 3] = "Auto";
    })(exports.Overflow_X || (exports.Overflow_X = {}));
    var Overflow_X = exports.Overflow_X;

    /*The overflow property specifies what happens if content overflows an element's box*/
    (function (Overflow_Y) {
        /*The overflow is not clipped. It renders outside the element's box. This is default*/
        Overflow_Y[Overflow_Y["Visible"] = 0] = "Visible";

        /*The overflow is clipped, and the rest of the content will be invisible*/
        Overflow_Y[Overflow_Y["Hidden"] = 1] = "Hidden";

        /*The overflow is clipped, but a scroll-bar is added to see the rest of the content*/
        Overflow_Y[Overflow_Y["Scroll"] = 2] = "Scroll";

        /*If overflow is clipped, a scroll-bar should be added to see the rest of the content*/
        Overflow_Y[Overflow_Y["Auto"] = 3] = "Auto";
    })(exports.Overflow_Y || (exports.Overflow_Y = {}));
    var Overflow_Y = exports.Overflow_Y;

    (function (PagerAlignment) {
        PagerAlignment[PagerAlignment["Left"] = 0] = "Left";
        PagerAlignment[PagerAlignment["Right"] = 1] = "Right";
    })(exports.PagerAlignment || (exports.PagerAlignment = {}));
    var PagerAlignment = exports.PagerAlignment;

    (function (AlertStyle) {
        AlertStyle[AlertStyle["Default"] = 0] = "Default";
        AlertStyle[AlertStyle["Info"] = 1] = "Info";
        AlertStyle[AlertStyle["Success"] = 2] = "Success";
        AlertStyle[AlertStyle["Error"] = 3] = "Error";
        AlertStyle[AlertStyle["Danger"] = 4] = "Danger";
    })(exports.AlertStyle || (exports.AlertStyle = {}));
    var AlertStyle = exports.AlertStyle;

    (function (TreeNodeStyle) {
        TreeNodeStyle[TreeNodeStyle["Default"] = 0] = "Default";
        TreeNodeStyle[TreeNodeStyle["Info"] = 1] = "Info";
        TreeNodeStyle[TreeNodeStyle["Success"] = 2] = "Success";
        TreeNodeStyle[TreeNodeStyle["Warning"] = 3] = "Warning";
        TreeNodeStyle[TreeNodeStyle["Important"] = 4] = "Important";
        TreeNodeStyle[TreeNodeStyle["Inverse"] = 5] = "Inverse";
    })(exports.TreeNodeStyle || (exports.TreeNodeStyle = {}));
    var TreeNodeStyle = exports.TreeNodeStyle;

    (function (PillBoxStyle) {
        PillBoxStyle[PillBoxStyle["Default"] = 0] = "Default";
        PillBoxStyle[PillBoxStyle["Info"] = 1] = "Info";
        PillBoxStyle[PillBoxStyle["Success"] = 2] = "Success";
        PillBoxStyle[PillBoxStyle["Warning"] = 3] = "Warning";
        PillBoxStyle[PillBoxStyle["Important"] = 4] = "Important";
    })(exports.PillBoxStyle || (exports.PillBoxStyle = {}));
    var PillBoxStyle = exports.PillBoxStyle;

    (function (ProgressBarStyle) {
        ProgressBarStyle[ProgressBarStyle["Default"] = 0] = "Default";
        ProgressBarStyle[ProgressBarStyle["Primary"] = 1] = "Primary";
        ProgressBarStyle[ProgressBarStyle["Info"] = 2] = "Info";
        ProgressBarStyle[ProgressBarStyle["Success"] = 3] = "Success";
        ProgressBarStyle[ProgressBarStyle["Warning"] = 4] = "Warning";
        ProgressBarStyle[ProgressBarStyle["Danger"] = 5] = "Danger";
    })(exports.ProgressBarStyle || (exports.ProgressBarStyle = {}));
    var ProgressBarStyle = exports.ProgressBarStyle;

    (function (ButtonSize) {
        ButtonSize[ButtonSize["Default"] = 0] = "Default";
        ButtonSize[ButtonSize["Large"] = 1] = "Large";
        ButtonSize[ButtonSize["Small"] = 2] = "Small";
        ButtonSize[ButtonSize["Mini"] = 3] = "Mini";
    })(exports.ButtonSize || (exports.ButtonSize = {}));
    var ButtonSize = exports.ButtonSize;

    (function (PaginationSize) {
        PaginationSize[PaginationSize["Default"] = 0] = "Default";
        PaginationSize[PaginationSize["Large"] = 1] = "Large";
        PaginationSize[PaginationSize["Small"] = 2] = "Small";
        PaginationSize[PaginationSize["Mini"] = 3] = "Mini";
    })(exports.PaginationSize || (exports.PaginationSize = {}));
    var PaginationSize = exports.PaginationSize;

    (function (SwitchSize) {
        SwitchSize[SwitchSize["Default"] = 0] = "Default";
        SwitchSize[SwitchSize["Large"] = 1] = "Large";
        SwitchSize[SwitchSize["Small"] = 2] = "Small";
        SwitchSize[SwitchSize["Mini"] = 3] = "Mini";
    })(exports.SwitchSize || (exports.SwitchSize = {}));
    var SwitchSize = exports.SwitchSize;

    (function (ButtonIcon) {
        ButtonIcon[ButtonIcon["icon_glass"] = 0] = "icon_glass";
        ButtonIcon[ButtonIcon["icon_music"] = 1] = "icon_music";
        ButtonIcon[ButtonIcon["icon_search"] = 2] = "icon_search";
        ButtonIcon[ButtonIcon["icon_envelope_o"] = 3] = "icon_envelope_o";
        ButtonIcon[ButtonIcon["icon_heart"] = 4] = "icon_heart";
        ButtonIcon[ButtonIcon["icon_star"] = 5] = "icon_star";
        ButtonIcon[ButtonIcon["icon_star_o"] = 6] = "icon_star_o";
        ButtonIcon[ButtonIcon["icon_user"] = 7] = "icon_user";
        ButtonIcon[ButtonIcon["icon_film"] = 8] = "icon_film";
        ButtonIcon[ButtonIcon["icon_th_large"] = 9] = "icon_th_large";
        ButtonIcon[ButtonIcon["icon_th"] = 10] = "icon_th";
        ButtonIcon[ButtonIcon["icon_th_list"] = 11] = "icon_th_list";
        ButtonIcon[ButtonIcon["icon_check"] = 12] = "icon_check";
        ButtonIcon[ButtonIcon["icon_remove"] = 13] = "icon_remove";
        ButtonIcon[ButtonIcon["icon_search_plus"] = 14] = "icon_search_plus";
        ButtonIcon[ButtonIcon["icon_search_minus"] = 15] = "icon_search_minus";
        ButtonIcon[ButtonIcon["icon_power_off"] = 16] = "icon_power_off";
        ButtonIcon[ButtonIcon["icon_signal"] = 17] = "icon_signal";
        ButtonIcon[ButtonIcon["icon_gear"] = 18] = "icon_gear";
        ButtonIcon[ButtonIcon["icon_cog"] = 19] = "icon_cog";
        ButtonIcon[ButtonIcon["icon_trash_o"] = 20] = "icon_trash_o";
        ButtonIcon[ButtonIcon["icon_home"] = 21] = "icon_home";
        ButtonIcon[ButtonIcon["icon_file_o"] = 22] = "icon_file_o";
        ButtonIcon[ButtonIcon["icon_clock_o"] = 23] = "icon_clock_o";
        ButtonIcon[ButtonIcon["icon_road"] = 24] = "icon_road";
        ButtonIcon[ButtonIcon["icon_download"] = 25] = "icon_download";
        ButtonIcon[ButtonIcon["icon_arrow_circle_o_down"] = 26] = "icon_arrow_circle_o_down";
        ButtonIcon[ButtonIcon["icon_arrow_circle_o_up"] = 27] = "icon_arrow_circle_o_up";
        ButtonIcon[ButtonIcon["icon_inbox"] = 28] = "icon_inbox";
        ButtonIcon[ButtonIcon["icon_play_circle_o"] = 29] = "icon_play_circle_o";
        ButtonIcon[ButtonIcon["icon_rotate_right"] = 30] = "icon_rotate_right";
        ButtonIcon[ButtonIcon["icon_repeat"] = 31] = "icon_repeat";
        ButtonIcon[ButtonIcon["icon_refresh"] = 32] = "icon_refresh";
        ButtonIcon[ButtonIcon["icon_list_alt"] = 33] = "icon_list_alt";
        ButtonIcon[ButtonIcon["icon_lock"] = 34] = "icon_lock";
        ButtonIcon[ButtonIcon["icon_flag"] = 35] = "icon_flag";
        ButtonIcon[ButtonIcon["icon_headphones"] = 36] = "icon_headphones";
        ButtonIcon[ButtonIcon["icon_volume_off"] = 37] = "icon_volume_off";
        ButtonIcon[ButtonIcon["icon_volume_down"] = 38] = "icon_volume_down";
        ButtonIcon[ButtonIcon["icon_volume_up"] = 39] = "icon_volume_up";
        ButtonIcon[ButtonIcon["icon_qrcode"] = 40] = "icon_qrcode";
        ButtonIcon[ButtonIcon["icon_barcode"] = 41] = "icon_barcode";
        ButtonIcon[ButtonIcon["icon_tag"] = 42] = "icon_tag";
        ButtonIcon[ButtonIcon["icon_tags"] = 43] = "icon_tags";
        ButtonIcon[ButtonIcon["icon_book"] = 44] = "icon_book";
        ButtonIcon[ButtonIcon["icon_bookmark"] = 45] = "icon_bookmark";
        ButtonIcon[ButtonIcon["icon_print"] = 46] = "icon_print";
        ButtonIcon[ButtonIcon["icon_camera"] = 47] = "icon_camera";
        ButtonIcon[ButtonIcon["icon_font"] = 48] = "icon_font";
        ButtonIcon[ButtonIcon["icon_bold"] = 49] = "icon_bold";
        ButtonIcon[ButtonIcon["icon_italic"] = 50] = "icon_italic";
        ButtonIcon[ButtonIcon["icon_text_height"] = 51] = "icon_text_height";
        ButtonIcon[ButtonIcon["icon_text_width"] = 52] = "icon_text_width";
        ButtonIcon[ButtonIcon["icon_align_left"] = 53] = "icon_align_left";
        ButtonIcon[ButtonIcon["icon_align_center"] = 54] = "icon_align_center";
        ButtonIcon[ButtonIcon["icon_align_right"] = 55] = "icon_align_right";
        ButtonIcon[ButtonIcon["icon_align_justify"] = 56] = "icon_align_justify";
        ButtonIcon[ButtonIcon["icon_list"] = 57] = "icon_list";
        ButtonIcon[ButtonIcon["icon_dedent"] = 58] = "icon_dedent";
        ButtonIcon[ButtonIcon["icon_outdent"] = 59] = "icon_outdent";
        ButtonIcon[ButtonIcon["icon_indent"] = 60] = "icon_indent";
        ButtonIcon[ButtonIcon["icon_video_camera"] = 61] = "icon_video_camera";
        ButtonIcon[ButtonIcon["icon_photo"] = 62] = "icon_photo";
        ButtonIcon[ButtonIcon["icon_image"] = 63] = "icon_image";
        ButtonIcon[ButtonIcon["icon_picture_o"] = 64] = "icon_picture_o";
        ButtonIcon[ButtonIcon["icon_pencil"] = 65] = "icon_pencil";
        ButtonIcon[ButtonIcon["icon_map_marker"] = 66] = "icon_map_marker";
        ButtonIcon[ButtonIcon["icon_adjust"] = 67] = "icon_adjust";
        ButtonIcon[ButtonIcon["icon_tint"] = 68] = "icon_tint";
        ButtonIcon[ButtonIcon["icon_edit"] = 69] = "icon_edit";
        ButtonIcon[ButtonIcon["icon_pencil_square_o"] = 70] = "icon_pencil_square_o";
        ButtonIcon[ButtonIcon["icon_share_square_o"] = 71] = "icon_share_square_o";
        ButtonIcon[ButtonIcon["icon_check_square_o"] = 72] = "icon_check_square_o";
        ButtonIcon[ButtonIcon["icon_arrows"] = 73] = "icon_arrows";
        ButtonIcon[ButtonIcon["icon_step_backward"] = 74] = "icon_step_backward";
        ButtonIcon[ButtonIcon["icon_fast_backward"] = 75] = "icon_fast_backward";
        ButtonIcon[ButtonIcon["icon_backward"] = 76] = "icon_backward";
        ButtonIcon[ButtonIcon["icon_play"] = 77] = "icon_play";
        ButtonIcon[ButtonIcon["icon_pause"] = 78] = "icon_pause";
        ButtonIcon[ButtonIcon["icon_stop"] = 79] = "icon_stop";
        ButtonIcon[ButtonIcon["icon_forward"] = 80] = "icon_forward";
        ButtonIcon[ButtonIcon["icon_fast_forward"] = 81] = "icon_fast_forward";
        ButtonIcon[ButtonIcon["icon_step_forward"] = 82] = "icon_step_forward";
        ButtonIcon[ButtonIcon["icon_eject"] = 83] = "icon_eject";
        ButtonIcon[ButtonIcon["icon_chevron_left"] = 84] = "icon_chevron_left";
        ButtonIcon[ButtonIcon["icon_chevron_right"] = 85] = "icon_chevron_right";
        ButtonIcon[ButtonIcon["icon_plus_circle"] = 86] = "icon_plus_circle";
        ButtonIcon[ButtonIcon["icon_minus_circle"] = 87] = "icon_minus_circle";
        ButtonIcon[ButtonIcon["icon_times_circle"] = 88] = "icon_times_circle";
        ButtonIcon[ButtonIcon["icon_check_circle"] = 89] = "icon_check_circle";
        ButtonIcon[ButtonIcon["icon_question_circle"] = 90] = "icon_question_circle";
        ButtonIcon[ButtonIcon["icon_info_circle"] = 91] = "icon_info_circle";
        ButtonIcon[ButtonIcon["icon_crosshairs"] = 92] = "icon_crosshairs";
        ButtonIcon[ButtonIcon["icon_times_circle_o"] = 93] = "icon_times_circle_o";
        ButtonIcon[ButtonIcon["icon_check_circle_o"] = 94] = "icon_check_circle_o";
        ButtonIcon[ButtonIcon["icon_ban"] = 95] = "icon_ban";
        ButtonIcon[ButtonIcon["icon_arrow_left"] = 96] = "icon_arrow_left";
        ButtonIcon[ButtonIcon["icon_arrow_right"] = 97] = "icon_arrow_right";
        ButtonIcon[ButtonIcon["icon_arrow_up"] = 98] = "icon_arrow_up";
        ButtonIcon[ButtonIcon["icon_arrow_down"] = 99] = "icon_arrow_down";
        ButtonIcon[ButtonIcon["icon_mail_forward"] = 100] = "icon_mail_forward";
        ButtonIcon[ButtonIcon["icon_share"] = 101] = "icon_share";
        ButtonIcon[ButtonIcon["icon_expand"] = 102] = "icon_expand";
        ButtonIcon[ButtonIcon["icon_compress"] = 103] = "icon_compress";
        ButtonIcon[ButtonIcon["icon_plus"] = 104] = "icon_plus";
        ButtonIcon[ButtonIcon["icon_minus"] = 105] = "icon_minus";
        ButtonIcon[ButtonIcon["icon_asterisk"] = 106] = "icon_asterisk";
        ButtonIcon[ButtonIcon["icon_exclamation_circle"] = 107] = "icon_exclamation_circle";
        ButtonIcon[ButtonIcon["icon_gift"] = 108] = "icon_gift";
        ButtonIcon[ButtonIcon["icon_leaf"] = 109] = "icon_leaf";
        ButtonIcon[ButtonIcon["icon_fire"] = 110] = "icon_fire";
        ButtonIcon[ButtonIcon["icon_eye"] = 111] = "icon_eye";
        ButtonIcon[ButtonIcon["icon_eye_slash"] = 112] = "icon_eye_slash";
        ButtonIcon[ButtonIcon["icon_warning"] = 113] = "icon_warning";
        ButtonIcon[ButtonIcon["icon_exclamation_triangle"] = 114] = "icon_exclamation_triangle";
        ButtonIcon[ButtonIcon["icon_plane"] = 115] = "icon_plane";
        ButtonIcon[ButtonIcon["icon_calendar"] = 116] = "icon_calendar";
        ButtonIcon[ButtonIcon["icon_random"] = 117] = "icon_random";
        ButtonIcon[ButtonIcon["icon_comment"] = 118] = "icon_comment";
        ButtonIcon[ButtonIcon["icon_magnet"] = 119] = "icon_magnet";
        ButtonIcon[ButtonIcon["icon_chevron_up"] = 120] = "icon_chevron_up";
        ButtonIcon[ButtonIcon["icon_chevron_down"] = 121] = "icon_chevron_down";
        ButtonIcon[ButtonIcon["icon_retweet"] = 122] = "icon_retweet";
        ButtonIcon[ButtonIcon["icon_shopping_cart"] = 123] = "icon_shopping_cart";
        ButtonIcon[ButtonIcon["icon_folder"] = 124] = "icon_folder";
        ButtonIcon[ButtonIcon["icon_folder_open"] = 125] = "icon_folder_open";
        ButtonIcon[ButtonIcon["icon_arrows_v"] = 126] = "icon_arrows_v";
        ButtonIcon[ButtonIcon["icon_arrows_h"] = 127] = "icon_arrows_h";
        ButtonIcon[ButtonIcon["icon_bar_chart_o"] = 128] = "icon_bar_chart_o";
        ButtonIcon[ButtonIcon["icon_twitter_square"] = 129] = "icon_twitter_square";
        ButtonIcon[ButtonIcon["icon_facebook_square"] = 130] = "icon_facebook_square";
        ButtonIcon[ButtonIcon["icon_camera_retro"] = 131] = "icon_camera_retro";
        ButtonIcon[ButtonIcon["icon_key"] = 132] = "icon_key";
        ButtonIcon[ButtonIcon["icon_gears"] = 133] = "icon_gears";
        ButtonIcon[ButtonIcon["icon_cogs"] = 134] = "icon_cogs";
        ButtonIcon[ButtonIcon["icon_comments"] = 135] = "icon_comments";
        ButtonIcon[ButtonIcon["icon_thumbs_o_up"] = 136] = "icon_thumbs_o_up";
        ButtonIcon[ButtonIcon["icon_thumbs_o_down"] = 137] = "icon_thumbs_o_down";
        ButtonIcon[ButtonIcon["icon_star_half"] = 138] = "icon_star_half";
        ButtonIcon[ButtonIcon["icon_heart_o"] = 139] = "icon_heart_o";
        ButtonIcon[ButtonIcon["icon_sign_out"] = 140] = "icon_sign_out";
        ButtonIcon[ButtonIcon["icon_linkedin_square"] = 141] = "icon_linkedin_square";
        ButtonIcon[ButtonIcon["icon_thumb_tack"] = 142] = "icon_thumb_tack";
        ButtonIcon[ButtonIcon["icon_external_link"] = 143] = "icon_external_link";
        ButtonIcon[ButtonIcon["icon_sign_in"] = 144] = "icon_sign_in";
        ButtonIcon[ButtonIcon["icon_trophy"] = 145] = "icon_trophy";
        ButtonIcon[ButtonIcon["icon_github_square"] = 146] = "icon_github_square";
        ButtonIcon[ButtonIcon["icon_upload"] = 147] = "icon_upload";
        ButtonIcon[ButtonIcon["icon_lemon_o"] = 148] = "icon_lemon_o";
        ButtonIcon[ButtonIcon["icon_phone"] = 149] = "icon_phone";
        ButtonIcon[ButtonIcon["icon_square_o"] = 150] = "icon_square_o";
        ButtonIcon[ButtonIcon["icon_bookmark_o"] = 151] = "icon_bookmark_o";
        ButtonIcon[ButtonIcon["icon_phone_square"] = 152] = "icon_phone_square";
        ButtonIcon[ButtonIcon["icon_twitter"] = 153] = "icon_twitter";
        ButtonIcon[ButtonIcon["icon_facebook"] = 154] = "icon_facebook";
        ButtonIcon[ButtonIcon["icon_github"] = 155] = "icon_github";
        ButtonIcon[ButtonIcon["icon_unlock"] = 156] = "icon_unlock";
        ButtonIcon[ButtonIcon["icon_credit_card"] = 157] = "icon_credit_card";
        ButtonIcon[ButtonIcon["icon_rss"] = 158] = "icon_rss";
        ButtonIcon[ButtonIcon["icon_hdd_o"] = 159] = "icon_hdd_o";
        ButtonIcon[ButtonIcon["icon_bullhorn"] = 160] = "icon_bullhorn";
        ButtonIcon[ButtonIcon["icon_bell"] = 161] = "icon_bell";
        ButtonIcon[ButtonIcon["icon_certificate"] = 162] = "icon_certificate";
        ButtonIcon[ButtonIcon["icon_hand_o_right"] = 163] = "icon_hand_o_right";
        ButtonIcon[ButtonIcon["icon_hand_o_left"] = 164] = "icon_hand_o_left";
        ButtonIcon[ButtonIcon["icon_hand_o_up"] = 165] = "icon_hand_o_up";
        ButtonIcon[ButtonIcon["icon_hand_o_down"] = 166] = "icon_hand_o_down";
        ButtonIcon[ButtonIcon["icon_arrow_circle_left"] = 167] = "icon_arrow_circle_left";
        ButtonIcon[ButtonIcon["icon_arrow_circle_right"] = 168] = "icon_arrow_circle_right";
        ButtonIcon[ButtonIcon["icon_arrow_circle_up"] = 169] = "icon_arrow_circle_up";
        ButtonIcon[ButtonIcon["icon_arrow_circle_down"] = 170] = "icon_arrow_circle_down";
        ButtonIcon[ButtonIcon["icon_globe"] = 171] = "icon_globe";
        ButtonIcon[ButtonIcon["icon_wrench"] = 172] = "icon_wrench";
        ButtonIcon[ButtonIcon["icon_tasks"] = 173] = "icon_tasks";
        ButtonIcon[ButtonIcon["icon_filter"] = 174] = "icon_filter";
        ButtonIcon[ButtonIcon["icon_briefcase"] = 175] = "icon_briefcase";
        ButtonIcon[ButtonIcon["icon_arrows_alt"] = 176] = "icon_arrows_alt";
        ButtonIcon[ButtonIcon["icon_group"] = 177] = "icon_group";
        ButtonIcon[ButtonIcon["icon_users"] = 178] = "icon_users";
        ButtonIcon[ButtonIcon["icon_chain"] = 179] = "icon_chain";
        ButtonIcon[ButtonIcon["icon_link"] = 180] = "icon_link";
        ButtonIcon[ButtonIcon["icon_cloud"] = 181] = "icon_cloud";
        ButtonIcon[ButtonIcon["icon_flask"] = 182] = "icon_flask";
        ButtonIcon[ButtonIcon["icon_cut"] = 183] = "icon_cut";
        ButtonIcon[ButtonIcon["icon_scissors"] = 184] = "icon_scissors";
        ButtonIcon[ButtonIcon["icon_copy"] = 185] = "icon_copy";
        ButtonIcon[ButtonIcon["icon_files_o"] = 186] = "icon_files_o";
        ButtonIcon[ButtonIcon["icon_paperclip"] = 187] = "icon_paperclip";
        ButtonIcon[ButtonIcon["icon_save"] = 188] = "icon_save";
        ButtonIcon[ButtonIcon["icon_floppy_o"] = 189] = "icon_floppy_o";
        ButtonIcon[ButtonIcon["icon_square"] = 190] = "icon_square";
        ButtonIcon[ButtonIcon["icon_naicon"] = 191] = "icon_naicon";
        ButtonIcon[ButtonIcon["icon_reorder"] = 192] = "icon_reorder";
        ButtonIcon[ButtonIcon["icon_bars"] = 193] = "icon_bars";
        ButtonIcon[ButtonIcon["icon_list_ul"] = 194] = "icon_list_ul";
        ButtonIcon[ButtonIcon["icon_list_ol"] = 195] = "icon_list_ol";
        ButtonIcon[ButtonIcon["icon_strikethrough"] = 196] = "icon_strikethrough";
        ButtonIcon[ButtonIcon["icon_underline"] = 197] = "icon_underline";
        ButtonIcon[ButtonIcon["icon_table"] = 198] = "icon_table";
        ButtonIcon[ButtonIcon["icon_magic"] = 199] = "icon_magic";
        ButtonIcon[ButtonIcon["icon_truck"] = 200] = "icon_truck";
        ButtonIcon[ButtonIcon["icon_pinterest"] = 201] = "icon_pinterest";
        ButtonIcon[ButtonIcon["icon_pinterest_square"] = 202] = "icon_pinterest_square";
        ButtonIcon[ButtonIcon["icon_google_plus_square"] = 203] = "icon_google_plus_square";
        ButtonIcon[ButtonIcon["icon_google_plus"] = 204] = "icon_google_plus";
        ButtonIcon[ButtonIcon["icon_money"] = 205] = "icon_money";
        ButtonIcon[ButtonIcon["icon_caret_down"] = 206] = "icon_caret_down";
        ButtonIcon[ButtonIcon["icon_caret_up"] = 207] = "icon_caret_up";
        ButtonIcon[ButtonIcon["icon_caret_left"] = 208] = "icon_caret_left";
        ButtonIcon[ButtonIcon["icon_caret_right"] = 209] = "icon_caret_right";
        ButtonIcon[ButtonIcon["icon_columns"] = 210] = "icon_columns";
        ButtonIcon[ButtonIcon["icon_unsorted"] = 211] = "icon_unsorted";
        ButtonIcon[ButtonIcon["icon_sort"] = 212] = "icon_sort";
        ButtonIcon[ButtonIcon["icon_sort_down"] = 213] = "icon_sort_down";
        ButtonIcon[ButtonIcon["icon_sort_desc"] = 214] = "icon_sort_desc";
        ButtonIcon[ButtonIcon["icon_sort_up"] = 215] = "icon_sort_up";
        ButtonIcon[ButtonIcon["icon_sort_asc"] = 216] = "icon_sort_asc";
        ButtonIcon[ButtonIcon["icon_envelope"] = 217] = "icon_envelope";
        ButtonIcon[ButtonIcon["icon_linkedin"] = 218] = "icon_linkedin";
        ButtonIcon[ButtonIcon["icon_rotate_left"] = 219] = "icon_rotate_left";
        ButtonIcon[ButtonIcon["icon_undo"] = 220] = "icon_undo";
        ButtonIcon[ButtonIcon["icon_legal"] = 221] = "icon_legal";
        ButtonIcon[ButtonIcon["icon_gavel"] = 222] = "icon_gavel";
        ButtonIcon[ButtonIcon["icon_dashboard"] = 223] = "icon_dashboard";
        ButtonIcon[ButtonIcon["icon_tachometer"] = 224] = "icon_tachometer";
        ButtonIcon[ButtonIcon["icon_comment_o"] = 225] = "icon_comment_o";
        ButtonIcon[ButtonIcon["icon_comments_o"] = 226] = "icon_comments_o";
        ButtonIcon[ButtonIcon["icon_flash"] = 227] = "icon_flash";
        ButtonIcon[ButtonIcon["icon_bolt"] = 228] = "icon_bolt";
        ButtonIcon[ButtonIcon["icon_sitemap"] = 229] = "icon_sitemap";
        ButtonIcon[ButtonIcon["icon_umbrella"] = 230] = "icon_umbrella";
        ButtonIcon[ButtonIcon["icon_paste"] = 231] = "icon_paste";
        ButtonIcon[ButtonIcon["icon_clipboard"] = 232] = "icon_clipboard";
        ButtonIcon[ButtonIcon["icon_lightbulb_o"] = 233] = "icon_lightbulb_o";
        ButtonIcon[ButtonIcon["icon_exchange"] = 234] = "icon_exchange";
        ButtonIcon[ButtonIcon["icon_cloud_download"] = 235] = "icon_cloud_download";
        ButtonIcon[ButtonIcon["icon_cloud_upload"] = 236] = "icon_cloud_upload";
        ButtonIcon[ButtonIcon["icon_user_md"] = 237] = "icon_user_md";
        ButtonIcon[ButtonIcon["icon_stethoscope"] = 238] = "icon_stethoscope";
        ButtonIcon[ButtonIcon["icon_suitcase"] = 239] = "icon_suitcase";
        ButtonIcon[ButtonIcon["icon_bell_o"] = 240] = "icon_bell_o";
        ButtonIcon[ButtonIcon["icon_coffee"] = 241] = "icon_coffee";
        ButtonIcon[ButtonIcon["icon_cutlery"] = 242] = "icon_cutlery";
        ButtonIcon[ButtonIcon["icon_file_text_o"] = 243] = "icon_file_text_o";
        ButtonIcon[ButtonIcon["icon_building_o"] = 244] = "icon_building_o";
        ButtonIcon[ButtonIcon["icon_hospital_o"] = 245] = "icon_hospital_o";
        ButtonIcon[ButtonIcon["icon_ambulance"] = 246] = "icon_ambulance";
        ButtonIcon[ButtonIcon["icon_medkit"] = 247] = "icon_medkit";
        ButtonIcon[ButtonIcon["icon_fighter_jet"] = 248] = "icon_fighter_jet";
        ButtonIcon[ButtonIcon["icon_beer"] = 249] = "icon_beer";
        ButtonIcon[ButtonIcon["icon_h_square"] = 250] = "icon_h_square";
        ButtonIcon[ButtonIcon["icon_plus_square"] = 251] = "icon_plus_square";
        ButtonIcon[ButtonIcon["icon_angle_double_left"] = 252] = "icon_angle_double_left";
        ButtonIcon[ButtonIcon["icon_angle_double_right"] = 253] = "icon_angle_double_right";
        ButtonIcon[ButtonIcon["icon_angle_double_up"] = 254] = "icon_angle_double_up";
        ButtonIcon[ButtonIcon["icon_angle_double_down"] = 255] = "icon_angle_double_down";
        ButtonIcon[ButtonIcon["icon_angle_left"] = 256] = "icon_angle_left";
        ButtonIcon[ButtonIcon["icon_angle_right"] = 257] = "icon_angle_right";
        ButtonIcon[ButtonIcon["icon_angle_up"] = 258] = "icon_angle_up";
        ButtonIcon[ButtonIcon["icon_angle_down"] = 259] = "icon_angle_down";
        ButtonIcon[ButtonIcon["icon_desktop"] = 260] = "icon_desktop";
        ButtonIcon[ButtonIcon["icon_laptop"] = 261] = "icon_laptop";
        ButtonIcon[ButtonIcon["icon_tablet"] = 262] = "icon_tablet";
        ButtonIcon[ButtonIcon["icon_mobile_phone"] = 263] = "icon_mobile_phone";
        ButtonIcon[ButtonIcon["icon_mobile"] = 264] = "icon_mobile";
        ButtonIcon[ButtonIcon["icon_circle_o"] = 265] = "icon_circle_o";
        ButtonIcon[ButtonIcon["icon_quote_left"] = 266] = "icon_quote_left";
        ButtonIcon[ButtonIcon["icon_quote_right"] = 267] = "icon_quote_right";
        ButtonIcon[ButtonIcon["icon_spinner"] = 268] = "icon_spinner";
        ButtonIcon[ButtonIcon["icon_circle"] = 269] = "icon_circle";
        ButtonIcon[ButtonIcon["icon_mail_reply"] = 270] = "icon_mail_reply";
        ButtonIcon[ButtonIcon["icon_reply"] = 271] = "icon_reply";
        ButtonIcon[ButtonIcon["icon_github_alt"] = 272] = "icon_github_alt";
        ButtonIcon[ButtonIcon["icon_folder_o"] = 273] = "icon_folder_o";
        ButtonIcon[ButtonIcon["icon_folder_open_o"] = 274] = "icon_folder_open_o";
        ButtonIcon[ButtonIcon["icon_smile_o"] = 275] = "icon_smile_o";
        ButtonIcon[ButtonIcon["icon_frown_o"] = 276] = "icon_frown_o";
        ButtonIcon[ButtonIcon["icon_meh_o"] = 277] = "icon_meh_o";
        ButtonIcon[ButtonIcon["icon_gamepad"] = 278] = "icon_gamepad";
        ButtonIcon[ButtonIcon["icon_keyboard_o"] = 279] = "icon_keyboard_o";
        ButtonIcon[ButtonIcon["icon_flag_o"] = 280] = "icon_flag_o";
        ButtonIcon[ButtonIcon["icon_flag_checkered"] = 281] = "icon_flag_checkered";
        ButtonIcon[ButtonIcon["icon_terminal"] = 282] = "icon_terminal";
        ButtonIcon[ButtonIcon["icon_code"] = 283] = "icon_code";
        ButtonIcon[ButtonIcon["icon_mail_reply_all"] = 284] = "icon_mail_reply_all";
        ButtonIcon[ButtonIcon["icon_reply_all"] = 285] = "icon_reply_all";
        ButtonIcon[ButtonIcon["icon_star_half_empty"] = 286] = "icon_star_half_empty";
        ButtonIcon[ButtonIcon["icon_star_half_full"] = 287] = "icon_star_half_full";
        ButtonIcon[ButtonIcon["icon_star_half_o"] = 288] = "icon_star_half_o";
        ButtonIcon[ButtonIcon["icon_location_arrow"] = 289] = "icon_location_arrow";
        ButtonIcon[ButtonIcon["icon_crop"] = 290] = "icon_crop";
        ButtonIcon[ButtonIcon["icon_code_fork"] = 291] = "icon_code_fork";
        ButtonIcon[ButtonIcon["icon_unlink"] = 292] = "icon_unlink";
        ButtonIcon[ButtonIcon["icon_chain_broken"] = 293] = "icon_chain_broken";
        ButtonIcon[ButtonIcon["icon_question"] = 294] = "icon_question";
        ButtonIcon[ButtonIcon["icon_info"] = 295] = "icon_info";
        ButtonIcon[ButtonIcon["icon_exclamation"] = 296] = "icon_exclamation";
        ButtonIcon[ButtonIcon["icon_superscript"] = 297] = "icon_superscript";
        ButtonIcon[ButtonIcon["icon_subscript"] = 298] = "icon_subscript";
        ButtonIcon[ButtonIcon["icon_eraser"] = 299] = "icon_eraser";
        ButtonIcon[ButtonIcon["icon_puzzle_piece"] = 300] = "icon_puzzle_piece";
        ButtonIcon[ButtonIcon["icon_microphone"] = 301] = "icon_microphone";
        ButtonIcon[ButtonIcon["icon_microphone_slash"] = 302] = "icon_microphone_slash";
        ButtonIcon[ButtonIcon["icon_shield"] = 303] = "icon_shield";
        ButtonIcon[ButtonIcon["icon_calendar_o"] = 304] = "icon_calendar_o";
        ButtonIcon[ButtonIcon["icon_fire_extinguisher"] = 305] = "icon_fire_extinguisher";
        ButtonIcon[ButtonIcon["icon_rocket"] = 306] = "icon_rocket";
        ButtonIcon[ButtonIcon["icon_maxcdn"] = 307] = "icon_maxcdn";
        ButtonIcon[ButtonIcon["icon_chevron_circle_left"] = 308] = "icon_chevron_circle_left";
        ButtonIcon[ButtonIcon["icon_chevron_circle_right"] = 309] = "icon_chevron_circle_right";
        ButtonIcon[ButtonIcon["icon_chevron_circle_up"] = 310] = "icon_chevron_circle_up";
        ButtonIcon[ButtonIcon["icon_chevron_circle_down"] = 311] = "icon_chevron_circle_down";
        ButtonIcon[ButtonIcon["icon_html5"] = 312] = "icon_html5";
        ButtonIcon[ButtonIcon["icon_css3"] = 313] = "icon_css3";
        ButtonIcon[ButtonIcon["icon_anchor"] = 314] = "icon_anchor";
        ButtonIcon[ButtonIcon["icon_unlock_alt"] = 315] = "icon_unlock_alt";
        ButtonIcon[ButtonIcon["icon_bullseye"] = 316] = "icon_bullseye";
        ButtonIcon[ButtonIcon["icon_ellipsis_h"] = 317] = "icon_ellipsis_h";
        ButtonIcon[ButtonIcon["icon_ellipsis_v"] = 318] = "icon_ellipsis_v";
        ButtonIcon[ButtonIcon["icon_rss_square"] = 319] = "icon_rss_square";
        ButtonIcon[ButtonIcon["icon_play_circle"] = 320] = "icon_play_circle";
        ButtonIcon[ButtonIcon["icon_ticket"] = 321] = "icon_ticket";
        ButtonIcon[ButtonIcon["icon_minus_square"] = 322] = "icon_minus_square";
        ButtonIcon[ButtonIcon["icon_minus_square_o"] = 323] = "icon_minus_square_o";
        ButtonIcon[ButtonIcon["icon_level_up"] = 324] = "icon_level_up";
        ButtonIcon[ButtonIcon["icon_level_down"] = 325] = "icon_level_down";
        ButtonIcon[ButtonIcon["icon_check_square"] = 326] = "icon_check_square";
        ButtonIcon[ButtonIcon["icon_pencil_square"] = 327] = "icon_pencil_square";
        ButtonIcon[ButtonIcon["icon_external_link_square"] = 328] = "icon_external_link_square";
        ButtonIcon[ButtonIcon["icon_share_square"] = 329] = "icon_share_square";
        ButtonIcon[ButtonIcon["icon_compass"] = 330] = "icon_compass";
        ButtonIcon[ButtonIcon["icon_toggle_down"] = 331] = "icon_toggle_down";
        ButtonIcon[ButtonIcon["icon_caret_square_o_down"] = 332] = "icon_caret_square_o_down";
        ButtonIcon[ButtonIcon["icon_toggle_up"] = 333] = "icon_toggle_up";
        ButtonIcon[ButtonIcon["icon_caret_square_o_up"] = 334] = "icon_caret_square_o_up";
        ButtonIcon[ButtonIcon["icon_toggle_right"] = 335] = "icon_toggle_right";
        ButtonIcon[ButtonIcon["icon_caret_square_o_right"] = 336] = "icon_caret_square_o_right";
        ButtonIcon[ButtonIcon["icon_euro"] = 337] = "icon_euro";
        ButtonIcon[ButtonIcon["icon_eur"] = 338] = "icon_eur";
        ButtonIcon[ButtonIcon["icon_gbp"] = 339] = "icon_gbp";
        ButtonIcon[ButtonIcon["icon_dollar"] = 340] = "icon_dollar";
        ButtonIcon[ButtonIcon["icon_usd"] = 341] = "icon_usd";
        ButtonIcon[ButtonIcon["icon_rupee"] = 342] = "icon_rupee";
        ButtonIcon[ButtonIcon["icon_inr"] = 343] = "icon_inr";
        ButtonIcon[ButtonIcon["icon_cny"] = 344] = "icon_cny";
        ButtonIcon[ButtonIcon["icon_rmb"] = 345] = "icon_rmb";
        ButtonIcon[ButtonIcon["icon_yen"] = 346] = "icon_yen";
        ButtonIcon[ButtonIcon["icon_jpy"] = 347] = "icon_jpy";
        ButtonIcon[ButtonIcon["icon_ruble"] = 348] = "icon_ruble";
        ButtonIcon[ButtonIcon["icon_rouble"] = 349] = "icon_rouble";
        ButtonIcon[ButtonIcon["icon_rub"] = 350] = "icon_rub";
        ButtonIcon[ButtonIcon["icon_won"] = 351] = "icon_won";
        ButtonIcon[ButtonIcon["icon_krw"] = 352] = "icon_krw";
        ButtonIcon[ButtonIcon["icon_bitcoin"] = 353] = "icon_bitcoin";
        ButtonIcon[ButtonIcon["icon_btc"] = 354] = "icon_btc";
        ButtonIcon[ButtonIcon["icon_file"] = 355] = "icon_file";
        ButtonIcon[ButtonIcon["icon_file_text"] = 356] = "icon_file_text";
        ButtonIcon[ButtonIcon["icon_sort_alpha_asc"] = 357] = "icon_sort_alpha_asc";
        ButtonIcon[ButtonIcon["icon_sort_alpha_desc"] = 358] = "icon_sort_alpha_desc";
        ButtonIcon[ButtonIcon["icon_sort_amount_asc"] = 359] = "icon_sort_amount_asc";
        ButtonIcon[ButtonIcon["icon_sort_amount_desc"] = 360] = "icon_sort_amount_desc";
        ButtonIcon[ButtonIcon["icon_sort_numeric_asc"] = 361] = "icon_sort_numeric_asc";
        ButtonIcon[ButtonIcon["icon_sort_numeric_desc"] = 362] = "icon_sort_numeric_desc";
        ButtonIcon[ButtonIcon["icon_thumbs_up"] = 363] = "icon_thumbs_up";
        ButtonIcon[ButtonIcon["icon_thumbs_down"] = 364] = "icon_thumbs_down";
        ButtonIcon[ButtonIcon["icon_youtube_square"] = 365] = "icon_youtube_square";
        ButtonIcon[ButtonIcon["icon_youtube"] = 366] = "icon_youtube";
        ButtonIcon[ButtonIcon["icon_xing"] = 367] = "icon_xing";
        ButtonIcon[ButtonIcon["icon_xing_square"] = 368] = "icon_xing_square";
        ButtonIcon[ButtonIcon["icon_youtube_play"] = 369] = "icon_youtube_play";
        ButtonIcon[ButtonIcon["icon_dropbox"] = 370] = "icon_dropbox";
        ButtonIcon[ButtonIcon["icon_stack_overflow"] = 371] = "icon_stack_overflow";
        ButtonIcon[ButtonIcon["icon_instagram"] = 372] = "icon_instagram";
        ButtonIcon[ButtonIcon["icon_flickr"] = 373] = "icon_flickr";
        ButtonIcon[ButtonIcon["icon_adn"] = 374] = "icon_adn";
        ButtonIcon[ButtonIcon["icon_bitbucket"] = 375] = "icon_bitbucket";
        ButtonIcon[ButtonIcon["icon_bitbucket_square"] = 376] = "icon_bitbucket_square";
        ButtonIcon[ButtonIcon["icon_tumblr"] = 377] = "icon_tumblr";
        ButtonIcon[ButtonIcon["icon_tumblr_square"] = 378] = "icon_tumblr_square";
        ButtonIcon[ButtonIcon["icon_long_arrow_down"] = 379] = "icon_long_arrow_down";
        ButtonIcon[ButtonIcon["icon_long_arrow_up"] = 380] = "icon_long_arrow_up";
        ButtonIcon[ButtonIcon["icon_long_arrow_left"] = 381] = "icon_long_arrow_left";
        ButtonIcon[ButtonIcon["icon_long_arrow_right"] = 382] = "icon_long_arrow_right";
        ButtonIcon[ButtonIcon["icon_apple"] = 383] = "icon_apple";
        ButtonIcon[ButtonIcon["icon_windows"] = 384] = "icon_windows";
        ButtonIcon[ButtonIcon["icon_android"] = 385] = "icon_android";
        ButtonIcon[ButtonIcon["icon_linux"] = 386] = "icon_linux";
        ButtonIcon[ButtonIcon["icon_dribbble"] = 387] = "icon_dribbble";
        ButtonIcon[ButtonIcon["icon_skype"] = 388] = "icon_skype";
        ButtonIcon[ButtonIcon["icon_foursquare"] = 389] = "icon_foursquare";
        ButtonIcon[ButtonIcon["icon_trello"] = 390] = "icon_trello";
        ButtonIcon[ButtonIcon["icon_female"] = 391] = "icon_female";
        ButtonIcon[ButtonIcon["icon_male"] = 392] = "icon_male";
        ButtonIcon[ButtonIcon["icon_gittip"] = 393] = "icon_gittip";
        ButtonIcon[ButtonIcon["icon_sun_o"] = 394] = "icon_sun_o";
        ButtonIcon[ButtonIcon["icon_moon_o"] = 395] = "icon_moon_o";
        ButtonIcon[ButtonIcon["icon_archive"] = 396] = "icon_archive";
        ButtonIcon[ButtonIcon["icon_bug"] = 397] = "icon_bug";
        ButtonIcon[ButtonIcon["icon_vk"] = 398] = "icon_vk";
        ButtonIcon[ButtonIcon["icon_weibo"] = 399] = "icon_weibo";
        ButtonIcon[ButtonIcon["icon_renren"] = 400] = "icon_renren";
        ButtonIcon[ButtonIcon["icon_pagelines"] = 401] = "icon_pagelines";
        ButtonIcon[ButtonIcon["icon_stack_exchange"] = 402] = "icon_stack_exchange";
        ButtonIcon[ButtonIcon["icon_arrow_circle_o_right"] = 403] = "icon_arrow_circle_o_right";
        ButtonIcon[ButtonIcon["icon_arrow_circle_o_left"] = 404] = "icon_arrow_circle_o_left";
        ButtonIcon[ButtonIcon["icon_toggle_left"] = 405] = "icon_toggle_left";
        ButtonIcon[ButtonIcon["icon_caret_square_o_left"] = 406] = "icon_caret_square_o_left";
        ButtonIcon[ButtonIcon["icon_dot_circle_o"] = 407] = "icon_dot_circle_o";
        ButtonIcon[ButtonIcon["icon_wheelchair"] = 408] = "icon_wheelchair";
        ButtonIcon[ButtonIcon["icon_vimeo_square"] = 409] = "icon_vimeo_square";
        ButtonIcon[ButtonIcon["icon_turkish_lira"] = 410] = "icon_turkish_lira";
        ButtonIcon[ButtonIcon["icon_try"] = 411] = "icon_try";
        ButtonIcon[ButtonIcon["icon_plus_square_o"] = 412] = "icon_plus_square_o";
        ButtonIcon[ButtonIcon["icon_space_shuttle"] = 413] = "icon_space_shuttle";
        ButtonIcon[ButtonIcon["icon_slack"] = 414] = "icon_slack";
        ButtonIcon[ButtonIcon["icon_envelope_square"] = 415] = "icon_envelope_square";
        ButtonIcon[ButtonIcon["icon_wordpress"] = 416] = "icon_wordpress";
        ButtonIcon[ButtonIcon["icon_openid"] = 417] = "icon_openid";
        ButtonIcon[ButtonIcon["icon_institution"] = 418] = "icon_institution";
        ButtonIcon[ButtonIcon["icon_bank"] = 419] = "icon_bank";
        ButtonIcon[ButtonIcon["icon_university"] = 420] = "icon_university";
        ButtonIcon[ButtonIcon["icon_mortar_board"] = 421] = "icon_mortar_board";
        ButtonIcon[ButtonIcon["icon_graduation_cap"] = 422] = "icon_graduation_cap";
        ButtonIcon[ButtonIcon["icon_yahoo"] = 423] = "icon_yahoo";
        ButtonIcon[ButtonIcon["icon_google"] = 424] = "icon_google";
        ButtonIcon[ButtonIcon["icon_reddit"] = 425] = "icon_reddit";
        ButtonIcon[ButtonIcon["icon_reddit_square"] = 426] = "icon_reddit_square";
        ButtonIcon[ButtonIcon["icon_stumbleupon_circle"] = 427] = "icon_stumbleupon_circle";
        ButtonIcon[ButtonIcon["icon_stumbleupon"] = 428] = "icon_stumbleupon";
        ButtonIcon[ButtonIcon["icon_delicious"] = 429] = "icon_delicious";
        ButtonIcon[ButtonIcon["icon_digg"] = 430] = "icon_digg";
        ButtonIcon[ButtonIcon["icon_pied_piper_square"] = 431] = "icon_pied_piper_square";
        ButtonIcon[ButtonIcon["icon_pied_piper"] = 432] = "icon_pied_piper";
        ButtonIcon[ButtonIcon["icon_pied_piper_alt"] = 433] = "icon_pied_piper_alt";
        ButtonIcon[ButtonIcon["icon_drupal"] = 434] = "icon_drupal";
        ButtonIcon[ButtonIcon["icon_joomla"] = 435] = "icon_joomla";
        ButtonIcon[ButtonIcon["icon_language"] = 436] = "icon_language";
        ButtonIcon[ButtonIcon["icon_fax"] = 437] = "icon_fax";
        ButtonIcon[ButtonIcon["icon_building"] = 438] = "icon_building";
        ButtonIcon[ButtonIcon["icon_child"] = 439] = "icon_child";
        ButtonIcon[ButtonIcon["icon_paw"] = 440] = "icon_paw";
        ButtonIcon[ButtonIcon["icon_spoon"] = 441] = "icon_spoon";
        ButtonIcon[ButtonIcon["icon_cube"] = 442] = "icon_cube";
        ButtonIcon[ButtonIcon["icon_cubes"] = 443] = "icon_cubes";
        ButtonIcon[ButtonIcon["icon_behance"] = 444] = "icon_behance";
        ButtonIcon[ButtonIcon["icon_behance_square"] = 445] = "icon_behance_square";
        ButtonIcon[ButtonIcon["icon_steam"] = 446] = "icon_steam";
        ButtonIcon[ButtonIcon["icon_steam_square"] = 447] = "icon_steam_square";
        ButtonIcon[ButtonIcon["icon_recycle"] = 448] = "icon_recycle";
        ButtonIcon[ButtonIcon["icon_automobile"] = 449] = "icon_automobile";
        ButtonIcon[ButtonIcon["icon_car"] = 450] = "icon_car";
        ButtonIcon[ButtonIcon["icon_cab"] = 451] = "icon_cab";
        ButtonIcon[ButtonIcon["icon_taxi"] = 452] = "icon_taxi";
        ButtonIcon[ButtonIcon["icon_tree"] = 453] = "icon_tree";
        ButtonIcon[ButtonIcon["icon_spotify"] = 454] = "icon_spotify";
        ButtonIcon[ButtonIcon["icon_deviantart"] = 455] = "icon_deviantart";
        ButtonIcon[ButtonIcon["icon_soundcloud"] = 456] = "icon_soundcloud";
        ButtonIcon[ButtonIcon["icon_database"] = 457] = "icon_database";
        ButtonIcon[ButtonIcon["icon_file_pdf_o"] = 458] = "icon_file_pdf_o";
        ButtonIcon[ButtonIcon["icon_file_word_o"] = 459] = "icon_file_word_o";
        ButtonIcon[ButtonIcon["icon_file_excel_o"] = 460] = "icon_file_excel_o";
        ButtonIcon[ButtonIcon["icon_file_powerpoint_o"] = 461] = "icon_file_powerpoint_o";
        ButtonIcon[ButtonIcon["icon_file_photo_o"] = 462] = "icon_file_photo_o";
        ButtonIcon[ButtonIcon["icon_file_picture_o"] = 463] = "icon_file_picture_o";
        ButtonIcon[ButtonIcon["icon_file_image_o"] = 464] = "icon_file_image_o";
        ButtonIcon[ButtonIcon["icon_file_zip_o"] = 465] = "icon_file_zip_o";
        ButtonIcon[ButtonIcon["icon_file_archive_o"] = 466] = "icon_file_archive_o";
        ButtonIcon[ButtonIcon["icon_file_sound_o"] = 467] = "icon_file_sound_o";
        ButtonIcon[ButtonIcon["icon_file_audio_o"] = 468] = "icon_file_audio_o";
        ButtonIcon[ButtonIcon["icon_file_movie_o"] = 469] = "icon_file_movie_o";
        ButtonIcon[ButtonIcon["icon_file_video_o"] = 470] = "icon_file_video_o";
        ButtonIcon[ButtonIcon["icon_file_code_o"] = 471] = "icon_file_code_o";
        ButtonIcon[ButtonIcon["icon_vine"] = 472] = "icon_vine";
        ButtonIcon[ButtonIcon["icon_codepen"] = 473] = "icon_codepen";
        ButtonIcon[ButtonIcon["icon_jsfiddle"] = 474] = "icon_jsfiddle";
        ButtonIcon[ButtonIcon["icon_life_bouy"] = 475] = "icon_life_bouy";
        ButtonIcon[ButtonIcon["icon_life_saver"] = 476] = "icon_life_saver";
        ButtonIcon[ButtonIcon["icon_support"] = 477] = "icon_support";
        ButtonIcon[ButtonIcon["icon_life_ring"] = 478] = "icon_life_ring";
        ButtonIcon[ButtonIcon["icon_circle_o_notch"] = 479] = "icon_circle_o_notch";
        ButtonIcon[ButtonIcon["icon_ra"] = 480] = "icon_ra";
        ButtonIcon[ButtonIcon["icon_rebel"] = 481] = "icon_rebel";
        ButtonIcon[ButtonIcon["icon_ge"] = 482] = "icon_ge";
        ButtonIcon[ButtonIcon["icon_empire"] = 483] = "icon_empire";
        ButtonIcon[ButtonIcon["icon_git_square"] = 484] = "icon_git_square";
        ButtonIcon[ButtonIcon["icon_git"] = 485] = "icon_git";
        ButtonIcon[ButtonIcon["icon_hacker_news"] = 486] = "icon_hacker_news";
        ButtonIcon[ButtonIcon["icon_tencent_weibo"] = 487] = "icon_tencent_weibo";
        ButtonIcon[ButtonIcon["icon_qq"] = 488] = "icon_qq";
        ButtonIcon[ButtonIcon["icon_wechat"] = 489] = "icon_wechat";
        ButtonIcon[ButtonIcon["icon_weixin"] = 490] = "icon_weixin";
        ButtonIcon[ButtonIcon["icon_send"] = 491] = "icon_send";
        ButtonIcon[ButtonIcon["icon_paper_plane"] = 492] = "icon_paper_plane";
        ButtonIcon[ButtonIcon["icon_send_o"] = 493] = "icon_send_o";
        ButtonIcon[ButtonIcon["icon_paper_plane_o"] = 494] = "icon_paper_plane_o";
        ButtonIcon[ButtonIcon["icon_history"] = 495] = "icon_history";
        ButtonIcon[ButtonIcon["icon_circle_thin"] = 496] = "icon_circle_thin";
        ButtonIcon[ButtonIcon["icon_header"] = 497] = "icon_header";
        ButtonIcon[ButtonIcon["icon_paragraph"] = 498] = "icon_paragraph";
        ButtonIcon[ButtonIcon["icon_sliders"] = 499] = "icon_sliders";
        ButtonIcon[ButtonIcon["icon_share_alt"] = 500] = "icon_share_alt";
        ButtonIcon[ButtonIcon["icon_share_alt_square"] = 501] = "icon_share_alt_square";
        ButtonIcon[ButtonIcon["icon_bomb"] = 502] = "icon_bomb";
        ButtonIcon[ButtonIcon["icon_remove_sign"] = 503] = "icon_remove_sign";
        ButtonIcon[ButtonIcon["icon_time"] = 504] = "icon_time";
        ButtonIcon[ButtonIcon["icon_ok"] = 505] = "icon_ok";
    })(exports.ButtonIcon || (exports.ButtonIcon = {}));
    var ButtonIcon = exports.ButtonIcon;

    (function (Icon) {
        Icon[Icon["icon_glass"] = 0] = "icon_glass";
        Icon[Icon["icon_music"] = 1] = "icon_music";
        Icon[Icon["icon_search"] = 2] = "icon_search";
        Icon[Icon["icon_envelope_o"] = 3] = "icon_envelope_o";
        Icon[Icon["icon_heart"] = 4] = "icon_heart";
        Icon[Icon["icon_star"] = 5] = "icon_star";
        Icon[Icon["icon_star_o"] = 6] = "icon_star_o";
        Icon[Icon["icon_user"] = 7] = "icon_user";
        Icon[Icon["icon_film"] = 8] = "icon_film";
        Icon[Icon["icon_th_large"] = 9] = "icon_th_large";
        Icon[Icon["icon_th"] = 10] = "icon_th";
        Icon[Icon["icon_th_list"] = 11] = "icon_th_list";
        Icon[Icon["icon_check"] = 12] = "icon_check";
        Icon[Icon["icon_remove"] = 13] = "icon_remove";
        Icon[Icon["icon_search_plus"] = 14] = "icon_search_plus";
        Icon[Icon["icon_search_minus"] = 15] = "icon_search_minus";
        Icon[Icon["icon_power_off"] = 16] = "icon_power_off";
        Icon[Icon["icon_signal"] = 17] = "icon_signal";
        Icon[Icon["icon_gear"] = 18] = "icon_gear";
        Icon[Icon["icon_cog"] = 19] = "icon_cog";
        Icon[Icon["icon_trash_o"] = 20] = "icon_trash_o";
        Icon[Icon["icon_home"] = 21] = "icon_home";
        Icon[Icon["icon_file_o"] = 22] = "icon_file_o";
        Icon[Icon["icon_clock_o"] = 23] = "icon_clock_o";
        Icon[Icon["icon_road"] = 24] = "icon_road";
        Icon[Icon["icon_download"] = 25] = "icon_download";
        Icon[Icon["icon_arrow_circle_o_down"] = 26] = "icon_arrow_circle_o_down";
        Icon[Icon["icon_arrow_circle_o_up"] = 27] = "icon_arrow_circle_o_up";
        Icon[Icon["icon_inbox"] = 28] = "icon_inbox";
        Icon[Icon["icon_play_circle_o"] = 29] = "icon_play_circle_o";
        Icon[Icon["icon_rotate_right"] = 30] = "icon_rotate_right";
        Icon[Icon["icon_repeat"] = 31] = "icon_repeat";
        Icon[Icon["icon_refresh"] = 32] = "icon_refresh";
        Icon[Icon["icon_list_alt"] = 33] = "icon_list_alt";
        Icon[Icon["icon_lock"] = 34] = "icon_lock";
        Icon[Icon["icon_flag"] = 35] = "icon_flag";
        Icon[Icon["icon_headphones"] = 36] = "icon_headphones";
        Icon[Icon["icon_volume_off"] = 37] = "icon_volume_off";
        Icon[Icon["icon_volume_down"] = 38] = "icon_volume_down";
        Icon[Icon["icon_volume_up"] = 39] = "icon_volume_up";
        Icon[Icon["icon_qrcode"] = 40] = "icon_qrcode";
        Icon[Icon["icon_barcode"] = 41] = "icon_barcode";
        Icon[Icon["icon_tag"] = 42] = "icon_tag";
        Icon[Icon["icon_tags"] = 43] = "icon_tags";
        Icon[Icon["icon_book"] = 44] = "icon_book";
        Icon[Icon["icon_bookmark"] = 45] = "icon_bookmark";
        Icon[Icon["icon_print"] = 46] = "icon_print";
        Icon[Icon["icon_camera"] = 47] = "icon_camera";
        Icon[Icon["icon_font"] = 48] = "icon_font";
        Icon[Icon["icon_bold"] = 49] = "icon_bold";
        Icon[Icon["icon_italic"] = 50] = "icon_italic";
        Icon[Icon["icon_text_height"] = 51] = "icon_text_height";
        Icon[Icon["icon_text_width"] = 52] = "icon_text_width";
        Icon[Icon["icon_align_left"] = 53] = "icon_align_left";
        Icon[Icon["icon_align_center"] = 54] = "icon_align_center";
        Icon[Icon["icon_align_right"] = 55] = "icon_align_right";
        Icon[Icon["icon_align_justify"] = 56] = "icon_align_justify";
        Icon[Icon["icon_list"] = 57] = "icon_list";
        Icon[Icon["icon_dedent"] = 58] = "icon_dedent";
        Icon[Icon["icon_outdent"] = 59] = "icon_outdent";
        Icon[Icon["icon_indent"] = 60] = "icon_indent";
        Icon[Icon["icon_video_camera"] = 61] = "icon_video_camera";
        Icon[Icon["icon_photo"] = 62] = "icon_photo";
        Icon[Icon["icon_image"] = 63] = "icon_image";
        Icon[Icon["icon_picture_o"] = 64] = "icon_picture_o";
        Icon[Icon["icon_pencil"] = 65] = "icon_pencil";
        Icon[Icon["icon_map_marker"] = 66] = "icon_map_marker";
        Icon[Icon["icon_adjust"] = 67] = "icon_adjust";
        Icon[Icon["icon_tint"] = 68] = "icon_tint";
        Icon[Icon["icon_edit"] = 69] = "icon_edit";
        Icon[Icon["icon_pencil_square_o"] = 70] = "icon_pencil_square_o";
        Icon[Icon["icon_share_square_o"] = 71] = "icon_share_square_o";
        Icon[Icon["icon_check_square_o"] = 72] = "icon_check_square_o";
        Icon[Icon["icon_arrows"] = 73] = "icon_arrows";
        Icon[Icon["icon_step_backward"] = 74] = "icon_step_backward";
        Icon[Icon["icon_fast_backward"] = 75] = "icon_fast_backward";
        Icon[Icon["icon_backward"] = 76] = "icon_backward";
        Icon[Icon["icon_play"] = 77] = "icon_play";
        Icon[Icon["icon_pause"] = 78] = "icon_pause";
        Icon[Icon["icon_stop"] = 79] = "icon_stop";
        Icon[Icon["icon_forward"] = 80] = "icon_forward";
        Icon[Icon["icon_fast_forward"] = 81] = "icon_fast_forward";
        Icon[Icon["icon_step_forward"] = 82] = "icon_step_forward";
        Icon[Icon["icon_eject"] = 83] = "icon_eject";
        Icon[Icon["icon_chevron_left"] = 84] = "icon_chevron_left";
        Icon[Icon["icon_chevron_right"] = 85] = "icon_chevron_right";
        Icon[Icon["icon_plus_circle"] = 86] = "icon_plus_circle";
        Icon[Icon["icon_minus_circle"] = 87] = "icon_minus_circle";
        Icon[Icon["icon_times_circle"] = 88] = "icon_times_circle";
        Icon[Icon["icon_check_circle"] = 89] = "icon_check_circle";
        Icon[Icon["icon_question_circle"] = 90] = "icon_question_circle";
        Icon[Icon["icon_info_circle"] = 91] = "icon_info_circle";
        Icon[Icon["icon_crosshairs"] = 92] = "icon_crosshairs";
        Icon[Icon["icon_times_circle_o"] = 93] = "icon_times_circle_o";
        Icon[Icon["icon_check_circle_o"] = 94] = "icon_check_circle_o";
        Icon[Icon["icon_ban"] = 95] = "icon_ban";
        Icon[Icon["icon_arrow_left"] = 96] = "icon_arrow_left";
        Icon[Icon["icon_arrow_right"] = 97] = "icon_arrow_right";
        Icon[Icon["icon_arrow_up"] = 98] = "icon_arrow_up";
        Icon[Icon["icon_arrow_down"] = 99] = "icon_arrow_down";
        Icon[Icon["icon_mail_forward"] = 100] = "icon_mail_forward";
        Icon[Icon["icon_share"] = 101] = "icon_share";
        Icon[Icon["icon_expand"] = 102] = "icon_expand";
        Icon[Icon["icon_compress"] = 103] = "icon_compress";
        Icon[Icon["icon_plus"] = 104] = "icon_plus";
        Icon[Icon["icon_minus"] = 105] = "icon_minus";
        Icon[Icon["icon_asterisk"] = 106] = "icon_asterisk";
        Icon[Icon["icon_exclamation_circle"] = 107] = "icon_exclamation_circle";
        Icon[Icon["icon_gift"] = 108] = "icon_gift";
        Icon[Icon["icon_leaf"] = 109] = "icon_leaf";
        Icon[Icon["icon_fire"] = 110] = "icon_fire";
        Icon[Icon["icon_eye"] = 111] = "icon_eye";
        Icon[Icon["icon_eye_slash"] = 112] = "icon_eye_slash";
        Icon[Icon["icon_warning"] = 113] = "icon_warning";
        Icon[Icon["icon_exclamation_triangle"] = 114] = "icon_exclamation_triangle";
        Icon[Icon["icon_plane"] = 115] = "icon_plane";
        Icon[Icon["icon_calendar"] = 116] = "icon_calendar";
        Icon[Icon["icon_random"] = 117] = "icon_random";
        Icon[Icon["icon_comment"] = 118] = "icon_comment";
        Icon[Icon["icon_magnet"] = 119] = "icon_magnet";
        Icon[Icon["icon_chevron_up"] = 120] = "icon_chevron_up";
        Icon[Icon["icon_chevron_down"] = 121] = "icon_chevron_down";
        Icon[Icon["icon_retweet"] = 122] = "icon_retweet";
        Icon[Icon["icon_shopping_cart"] = 123] = "icon_shopping_cart";
        Icon[Icon["icon_folder"] = 124] = "icon_folder";
        Icon[Icon["icon_folder_open"] = 125] = "icon_folder_open";
        Icon[Icon["icon_arrows_v"] = 126] = "icon_arrows_v";
        Icon[Icon["icon_arrows_h"] = 127] = "icon_arrows_h";
        Icon[Icon["icon_bar_chart_o"] = 128] = "icon_bar_chart_o";
        Icon[Icon["icon_twitter_square"] = 129] = "icon_twitter_square";
        Icon[Icon["icon_facebook_square"] = 130] = "icon_facebook_square";
        Icon[Icon["icon_camera_retro"] = 131] = "icon_camera_retro";
        Icon[Icon["icon_key"] = 132] = "icon_key";
        Icon[Icon["icon_gears"] = 133] = "icon_gears";
        Icon[Icon["icon_cogs"] = 134] = "icon_cogs";
        Icon[Icon["icon_comments"] = 135] = "icon_comments";
        Icon[Icon["icon_thumbs_o_up"] = 136] = "icon_thumbs_o_up";
        Icon[Icon["icon_thumbs_o_down"] = 137] = "icon_thumbs_o_down";
        Icon[Icon["icon_star_half"] = 138] = "icon_star_half";
        Icon[Icon["icon_heart_o"] = 139] = "icon_heart_o";
        Icon[Icon["icon_sign_out"] = 140] = "icon_sign_out";
        Icon[Icon["icon_linkedin_square"] = 141] = "icon_linkedin_square";
        Icon[Icon["icon_thumb_tack"] = 142] = "icon_thumb_tack";
        Icon[Icon["icon_external_link"] = 143] = "icon_external_link";
        Icon[Icon["icon_sign_in"] = 144] = "icon_sign_in";
        Icon[Icon["icon_trophy"] = 145] = "icon_trophy";
        Icon[Icon["icon_github_square"] = 146] = "icon_github_square";
        Icon[Icon["icon_upload"] = 147] = "icon_upload";
        Icon[Icon["icon_lemon_o"] = 148] = "icon_lemon_o";
        Icon[Icon["icon_phone"] = 149] = "icon_phone";
        Icon[Icon["icon_square_o"] = 150] = "icon_square_o";
        Icon[Icon["icon_bookmark_o"] = 151] = "icon_bookmark_o";
        Icon[Icon["icon_phone_square"] = 152] = "icon_phone_square";
        Icon[Icon["icon_twitter"] = 153] = "icon_twitter";
        Icon[Icon["icon_facebook"] = 154] = "icon_facebook";
        Icon[Icon["icon_github"] = 155] = "icon_github";
        Icon[Icon["icon_unlock"] = 156] = "icon_unlock";
        Icon[Icon["icon_credit_card"] = 157] = "icon_credit_card";
        Icon[Icon["icon_rss"] = 158] = "icon_rss";
        Icon[Icon["icon_hdd_o"] = 159] = "icon_hdd_o";
        Icon[Icon["icon_bullhorn"] = 160] = "icon_bullhorn";
        Icon[Icon["icon_bell"] = 161] = "icon_bell";
        Icon[Icon["icon_certificate"] = 162] = "icon_certificate";
        Icon[Icon["icon_hand_o_right"] = 163] = "icon_hand_o_right";
        Icon[Icon["icon_hand_o_left"] = 164] = "icon_hand_o_left";
        Icon[Icon["icon_hand_o_up"] = 165] = "icon_hand_o_up";
        Icon[Icon["icon_hand_o_down"] = 166] = "icon_hand_o_down";
        Icon[Icon["icon_arrow_circle_left"] = 167] = "icon_arrow_circle_left";
        Icon[Icon["icon_arrow_circle_right"] = 168] = "icon_arrow_circle_right";
        Icon[Icon["icon_arrow_circle_up"] = 169] = "icon_arrow_circle_up";
        Icon[Icon["icon_arrow_circle_down"] = 170] = "icon_arrow_circle_down";
        Icon[Icon["icon_globe"] = 171] = "icon_globe";
        Icon[Icon["icon_wrench"] = 172] = "icon_wrench";
        Icon[Icon["icon_tasks"] = 173] = "icon_tasks";
        Icon[Icon["icon_filter"] = 174] = "icon_filter";
        Icon[Icon["icon_briefcase"] = 175] = "icon_briefcase";
        Icon[Icon["icon_arrows_alt"] = 176] = "icon_arrows_alt";
        Icon[Icon["icon_group"] = 177] = "icon_group";
        Icon[Icon["icon_users"] = 178] = "icon_users";
        Icon[Icon["icon_chain"] = 179] = "icon_chain";
        Icon[Icon["icon_link"] = 180] = "icon_link";
        Icon[Icon["icon_cloud"] = 181] = "icon_cloud";
        Icon[Icon["icon_flask"] = 182] = "icon_flask";
        Icon[Icon["icon_cut"] = 183] = "icon_cut";
        Icon[Icon["icon_scissors"] = 184] = "icon_scissors";
        Icon[Icon["icon_copy"] = 185] = "icon_copy";
        Icon[Icon["icon_files_o"] = 186] = "icon_files_o";
        Icon[Icon["icon_paperclip"] = 187] = "icon_paperclip";
        Icon[Icon["icon_save"] = 188] = "icon_save";
        Icon[Icon["icon_floppy_o"] = 189] = "icon_floppy_o";
        Icon[Icon["icon_square"] = 190] = "icon_square";
        Icon[Icon["icon_naicon"] = 191] = "icon_naicon";
        Icon[Icon["icon_reorder"] = 192] = "icon_reorder";
        Icon[Icon["icon_bars"] = 193] = "icon_bars";
        Icon[Icon["icon_list_ul"] = 194] = "icon_list_ul";
        Icon[Icon["icon_list_ol"] = 195] = "icon_list_ol";
        Icon[Icon["icon_strikethrough"] = 196] = "icon_strikethrough";
        Icon[Icon["icon_underline"] = 197] = "icon_underline";
        Icon[Icon["icon_table"] = 198] = "icon_table";
        Icon[Icon["icon_magic"] = 199] = "icon_magic";
        Icon[Icon["icon_truck"] = 200] = "icon_truck";
        Icon[Icon["icon_pinterest"] = 201] = "icon_pinterest";
        Icon[Icon["icon_pinterest_square"] = 202] = "icon_pinterest_square";
        Icon[Icon["icon_google_plus_square"] = 203] = "icon_google_plus_square";
        Icon[Icon["icon_google_plus"] = 204] = "icon_google_plus";
        Icon[Icon["icon_money"] = 205] = "icon_money";
        Icon[Icon["icon_caret_down"] = 206] = "icon_caret_down";
        Icon[Icon["icon_caret_up"] = 207] = "icon_caret_up";
        Icon[Icon["icon_caret_left"] = 208] = "icon_caret_left";
        Icon[Icon["icon_caret_right"] = 209] = "icon_caret_right";
        Icon[Icon["icon_columns"] = 210] = "icon_columns";
        Icon[Icon["icon_unsorted"] = 211] = "icon_unsorted";
        Icon[Icon["icon_sort"] = 212] = "icon_sort";
        Icon[Icon["icon_sort_down"] = 213] = "icon_sort_down";
        Icon[Icon["icon_sort_desc"] = 214] = "icon_sort_desc";
        Icon[Icon["icon_sort_up"] = 215] = "icon_sort_up";
        Icon[Icon["icon_sort_asc"] = 216] = "icon_sort_asc";
        Icon[Icon["icon_envelope"] = 217] = "icon_envelope";
        Icon[Icon["icon_linkedin"] = 218] = "icon_linkedin";
        Icon[Icon["icon_rotate_left"] = 219] = "icon_rotate_left";
        Icon[Icon["icon_undo"] = 220] = "icon_undo";
        Icon[Icon["icon_legal"] = 221] = "icon_legal";
        Icon[Icon["icon_gavel"] = 222] = "icon_gavel";
        Icon[Icon["icon_dashboard"] = 223] = "icon_dashboard";
        Icon[Icon["icon_tachometer"] = 224] = "icon_tachometer";
        Icon[Icon["icon_comment_o"] = 225] = "icon_comment_o";
        Icon[Icon["icon_comments_o"] = 226] = "icon_comments_o";
        Icon[Icon["icon_flash"] = 227] = "icon_flash";
        Icon[Icon["icon_bolt"] = 228] = "icon_bolt";
        Icon[Icon["icon_sitemap"] = 229] = "icon_sitemap";
        Icon[Icon["icon_umbrella"] = 230] = "icon_umbrella";
        Icon[Icon["icon_paste"] = 231] = "icon_paste";
        Icon[Icon["icon_clipboard"] = 232] = "icon_clipboard";
        Icon[Icon["icon_lightbulb_o"] = 233] = "icon_lightbulb_o";
        Icon[Icon["icon_exchange"] = 234] = "icon_exchange";
        Icon[Icon["icon_cloud_download"] = 235] = "icon_cloud_download";
        Icon[Icon["icon_cloud_upload"] = 236] = "icon_cloud_upload";
        Icon[Icon["icon_user_md"] = 237] = "icon_user_md";
        Icon[Icon["icon_stethoscope"] = 238] = "icon_stethoscope";
        Icon[Icon["icon_suitcase"] = 239] = "icon_suitcase";
        Icon[Icon["icon_bell_o"] = 240] = "icon_bell_o";
        Icon[Icon["icon_coffee"] = 241] = "icon_coffee";
        Icon[Icon["icon_cutlery"] = 242] = "icon_cutlery";
        Icon[Icon["icon_file_text_o"] = 243] = "icon_file_text_o";
        Icon[Icon["icon_building_o"] = 244] = "icon_building_o";
        Icon[Icon["icon_hospital_o"] = 245] = "icon_hospital_o";
        Icon[Icon["icon_ambulance"] = 246] = "icon_ambulance";
        Icon[Icon["icon_medkit"] = 247] = "icon_medkit";
        Icon[Icon["icon_fighter_jet"] = 248] = "icon_fighter_jet";
        Icon[Icon["icon_beer"] = 249] = "icon_beer";
        Icon[Icon["icon_h_square"] = 250] = "icon_h_square";
        Icon[Icon["icon_plus_square"] = 251] = "icon_plus_square";
        Icon[Icon["icon_angle_double_left"] = 252] = "icon_angle_double_left";
        Icon[Icon["icon_angle_double_right"] = 253] = "icon_angle_double_right";
        Icon[Icon["icon_angle_double_up"] = 254] = "icon_angle_double_up";
        Icon[Icon["icon_angle_double_down"] = 255] = "icon_angle_double_down";
        Icon[Icon["icon_angle_left"] = 256] = "icon_angle_left";
        Icon[Icon["icon_angle_right"] = 257] = "icon_angle_right";
        Icon[Icon["icon_angle_up"] = 258] = "icon_angle_up";
        Icon[Icon["icon_angle_down"] = 259] = "icon_angle_down";
        Icon[Icon["icon_desktop"] = 260] = "icon_desktop";
        Icon[Icon["icon_laptop"] = 261] = "icon_laptop";
        Icon[Icon["icon_tablet"] = 262] = "icon_tablet";
        Icon[Icon["icon_mobile_phone"] = 263] = "icon_mobile_phone";
        Icon[Icon["icon_mobile"] = 264] = "icon_mobile";
        Icon[Icon["icon_circle_o"] = 265] = "icon_circle_o";
        Icon[Icon["icon_quote_left"] = 266] = "icon_quote_left";
        Icon[Icon["icon_quote_right"] = 267] = "icon_quote_right";
        Icon[Icon["icon_spinner"] = 268] = "icon_spinner";
        Icon[Icon["icon_circle"] = 269] = "icon_circle";
        Icon[Icon["icon_mail_reply"] = 270] = "icon_mail_reply";
        Icon[Icon["icon_reply"] = 271] = "icon_reply";
        Icon[Icon["icon_github_alt"] = 272] = "icon_github_alt";
        Icon[Icon["icon_folder_o"] = 273] = "icon_folder_o";
        Icon[Icon["icon_folder_open_o"] = 274] = "icon_folder_open_o";
        Icon[Icon["icon_smile_o"] = 275] = "icon_smile_o";
        Icon[Icon["icon_frown_o"] = 276] = "icon_frown_o";
        Icon[Icon["icon_meh_o"] = 277] = "icon_meh_o";
        Icon[Icon["icon_gamepad"] = 278] = "icon_gamepad";
        Icon[Icon["icon_keyboard_o"] = 279] = "icon_keyboard_o";
        Icon[Icon["icon_flag_o"] = 280] = "icon_flag_o";
        Icon[Icon["icon_flag_checkered"] = 281] = "icon_flag_checkered";
        Icon[Icon["icon_terminal"] = 282] = "icon_terminal";
        Icon[Icon["icon_code"] = 283] = "icon_code";
        Icon[Icon["icon_mail_reply_all"] = 284] = "icon_mail_reply_all";
        Icon[Icon["icon_reply_all"] = 285] = "icon_reply_all";
        Icon[Icon["icon_star_half_empty"] = 286] = "icon_star_half_empty";
        Icon[Icon["icon_star_half_full"] = 287] = "icon_star_half_full";
        Icon[Icon["icon_star_half_o"] = 288] = "icon_star_half_o";
        Icon[Icon["icon_location_arrow"] = 289] = "icon_location_arrow";
        Icon[Icon["icon_crop"] = 290] = "icon_crop";
        Icon[Icon["icon_code_fork"] = 291] = "icon_code_fork";
        Icon[Icon["icon_unlink"] = 292] = "icon_unlink";
        Icon[Icon["icon_chain_broken"] = 293] = "icon_chain_broken";
        Icon[Icon["icon_question"] = 294] = "icon_question";
        Icon[Icon["icon_info"] = 295] = "icon_info";
        Icon[Icon["icon_exclamation"] = 296] = "icon_exclamation";
        Icon[Icon["icon_superscript"] = 297] = "icon_superscript";
        Icon[Icon["icon_subscript"] = 298] = "icon_subscript";
        Icon[Icon["icon_eraser"] = 299] = "icon_eraser";
        Icon[Icon["icon_puzzle_piece"] = 300] = "icon_puzzle_piece";
        Icon[Icon["icon_microphone"] = 301] = "icon_microphone";
        Icon[Icon["icon_microphone_slash"] = 302] = "icon_microphone_slash";
        Icon[Icon["icon_shield"] = 303] = "icon_shield";
        Icon[Icon["icon_calendar_o"] = 304] = "icon_calendar_o";
        Icon[Icon["icon_fire_extinguisher"] = 305] = "icon_fire_extinguisher";
        Icon[Icon["icon_rocket"] = 306] = "icon_rocket";
        Icon[Icon["icon_maxcdn"] = 307] = "icon_maxcdn";
        Icon[Icon["icon_chevron_circle_left"] = 308] = "icon_chevron_circle_left";
        Icon[Icon["icon_chevron_circle_right"] = 309] = "icon_chevron_circle_right";
        Icon[Icon["icon_chevron_circle_up"] = 310] = "icon_chevron_circle_up";
        Icon[Icon["icon_chevron_circle_down"] = 311] = "icon_chevron_circle_down";
        Icon[Icon["icon_html5"] = 312] = "icon_html5";
        Icon[Icon["icon_css3"] = 313] = "icon_css3";
        Icon[Icon["icon_anchor"] = 314] = "icon_anchor";
        Icon[Icon["icon_unlock_alt"] = 315] = "icon_unlock_alt";
        Icon[Icon["icon_bullseye"] = 316] = "icon_bullseye";
        Icon[Icon["icon_ellipsis_h"] = 317] = "icon_ellipsis_h";
        Icon[Icon["icon_ellipsis_v"] = 318] = "icon_ellipsis_v";
        Icon[Icon["icon_rss_square"] = 319] = "icon_rss_square";
        Icon[Icon["icon_play_circle"] = 320] = "icon_play_circle";
        Icon[Icon["icon_ticket"] = 321] = "icon_ticket";
        Icon[Icon["icon_minus_square"] = 322] = "icon_minus_square";
        Icon[Icon["icon_minus_square_o"] = 323] = "icon_minus_square_o";
        Icon[Icon["icon_level_up"] = 324] = "icon_level_up";
        Icon[Icon["icon_level_down"] = 325] = "icon_level_down";
        Icon[Icon["icon_check_square"] = 326] = "icon_check_square";
        Icon[Icon["icon_pencil_square"] = 327] = "icon_pencil_square";
        Icon[Icon["icon_external_link_square"] = 328] = "icon_external_link_square";
        Icon[Icon["icon_share_square"] = 329] = "icon_share_square";
        Icon[Icon["icon_compass"] = 330] = "icon_compass";
        Icon[Icon["icon_toggle_down"] = 331] = "icon_toggle_down";
        Icon[Icon["icon_caret_square_o_down"] = 332] = "icon_caret_square_o_down";
        Icon[Icon["icon_toggle_up"] = 333] = "icon_toggle_up";
        Icon[Icon["icon_caret_square_o_up"] = 334] = "icon_caret_square_o_up";
        Icon[Icon["icon_toggle_right"] = 335] = "icon_toggle_right";
        Icon[Icon["icon_caret_square_o_right"] = 336] = "icon_caret_square_o_right";
        Icon[Icon["icon_euro"] = 337] = "icon_euro";
        Icon[Icon["icon_eur"] = 338] = "icon_eur";
        Icon[Icon["icon_gbp"] = 339] = "icon_gbp";
        Icon[Icon["icon_dollar"] = 340] = "icon_dollar";
        Icon[Icon["icon_usd"] = 341] = "icon_usd";
        Icon[Icon["icon_rupee"] = 342] = "icon_rupee";
        Icon[Icon["icon_inr"] = 343] = "icon_inr";
        Icon[Icon["icon_cny"] = 344] = "icon_cny";
        Icon[Icon["icon_rmb"] = 345] = "icon_rmb";
        Icon[Icon["icon_yen"] = 346] = "icon_yen";
        Icon[Icon["icon_jpy"] = 347] = "icon_jpy";
        Icon[Icon["icon_ruble"] = 348] = "icon_ruble";
        Icon[Icon["icon_rouble"] = 349] = "icon_rouble";
        Icon[Icon["icon_rub"] = 350] = "icon_rub";
        Icon[Icon["icon_won"] = 351] = "icon_won";
        Icon[Icon["icon_krw"] = 352] = "icon_krw";
        Icon[Icon["icon_bitcoin"] = 353] = "icon_bitcoin";
        Icon[Icon["icon_btc"] = 354] = "icon_btc";
        Icon[Icon["icon_file"] = 355] = "icon_file";
        Icon[Icon["icon_file_text"] = 356] = "icon_file_text";
        Icon[Icon["icon_sort_alpha_asc"] = 357] = "icon_sort_alpha_asc";
        Icon[Icon["icon_sort_alpha_desc"] = 358] = "icon_sort_alpha_desc";
        Icon[Icon["icon_sort_amount_asc"] = 359] = "icon_sort_amount_asc";
        Icon[Icon["icon_sort_amount_desc"] = 360] = "icon_sort_amount_desc";
        Icon[Icon["icon_sort_numeric_asc"] = 361] = "icon_sort_numeric_asc";
        Icon[Icon["icon_sort_numeric_desc"] = 362] = "icon_sort_numeric_desc";
        Icon[Icon["icon_thumbs_up"] = 363] = "icon_thumbs_up";
        Icon[Icon["icon_thumbs_down"] = 364] = "icon_thumbs_down";
        Icon[Icon["icon_youtube_square"] = 365] = "icon_youtube_square";
        Icon[Icon["icon_youtube"] = 366] = "icon_youtube";
        Icon[Icon["icon_xing"] = 367] = "icon_xing";
        Icon[Icon["icon_xing_square"] = 368] = "icon_xing_square";
        Icon[Icon["icon_youtube_play"] = 369] = "icon_youtube_play";
        Icon[Icon["icon_dropbox"] = 370] = "icon_dropbox";
        Icon[Icon["icon_stack_overflow"] = 371] = "icon_stack_overflow";
        Icon[Icon["icon_instagram"] = 372] = "icon_instagram";
        Icon[Icon["icon_flickr"] = 373] = "icon_flickr";
        Icon[Icon["icon_adn"] = 374] = "icon_adn";
        Icon[Icon["icon_bitbucket"] = 375] = "icon_bitbucket";
        Icon[Icon["icon_bitbucket_square"] = 376] = "icon_bitbucket_square";
        Icon[Icon["icon_tumblr"] = 377] = "icon_tumblr";
        Icon[Icon["icon_tumblr_square"] = 378] = "icon_tumblr_square";
        Icon[Icon["icon_long_arrow_down"] = 379] = "icon_long_arrow_down";
        Icon[Icon["icon_long_arrow_up"] = 380] = "icon_long_arrow_up";
        Icon[Icon["icon_long_arrow_left"] = 381] = "icon_long_arrow_left";
        Icon[Icon["icon_long_arrow_right"] = 382] = "icon_long_arrow_right";
        Icon[Icon["icon_apple"] = 383] = "icon_apple";
        Icon[Icon["icon_windows"] = 384] = "icon_windows";
        Icon[Icon["icon_android"] = 385] = "icon_android";
        Icon[Icon["icon_linux"] = 386] = "icon_linux";
        Icon[Icon["icon_dribbble"] = 387] = "icon_dribbble";
        Icon[Icon["icon_skype"] = 388] = "icon_skype";
        Icon[Icon["icon_foursquare"] = 389] = "icon_foursquare";
        Icon[Icon["icon_trello"] = 390] = "icon_trello";
        Icon[Icon["icon_female"] = 391] = "icon_female";
        Icon[Icon["icon_male"] = 392] = "icon_male";
        Icon[Icon["icon_gittip"] = 393] = "icon_gittip";
        Icon[Icon["icon_sun_o"] = 394] = "icon_sun_o";
        Icon[Icon["icon_moon_o"] = 395] = "icon_moon_o";
        Icon[Icon["icon_archive"] = 396] = "icon_archive";
        Icon[Icon["icon_bug"] = 397] = "icon_bug";
        Icon[Icon["icon_vk"] = 398] = "icon_vk";
        Icon[Icon["icon_weibo"] = 399] = "icon_weibo";
        Icon[Icon["icon_renren"] = 400] = "icon_renren";
        Icon[Icon["icon_pagelines"] = 401] = "icon_pagelines";
        Icon[Icon["icon_stack_exchange"] = 402] = "icon_stack_exchange";
        Icon[Icon["icon_arrow_circle_o_right"] = 403] = "icon_arrow_circle_o_right";
        Icon[Icon["icon_arrow_circle_o_left"] = 404] = "icon_arrow_circle_o_left";
        Icon[Icon["icon_toggle_left"] = 405] = "icon_toggle_left";
        Icon[Icon["icon_caret_square_o_left"] = 406] = "icon_caret_square_o_left";
        Icon[Icon["icon_dot_circle_o"] = 407] = "icon_dot_circle_o";
        Icon[Icon["icon_wheelchair"] = 408] = "icon_wheelchair";
        Icon[Icon["icon_vimeo_square"] = 409] = "icon_vimeo_square";
        Icon[Icon["icon_turkish_lira"] = 410] = "icon_turkish_lira";
        Icon[Icon["icon_try"] = 411] = "icon_try";
        Icon[Icon["icon_plus_square_o"] = 412] = "icon_plus_square_o";
        Icon[Icon["icon_space_shuttle"] = 413] = "icon_space_shuttle";
        Icon[Icon["icon_slack"] = 414] = "icon_slack";
        Icon[Icon["icon_envelope_square"] = 415] = "icon_envelope_square";
        Icon[Icon["icon_wordpress"] = 416] = "icon_wordpress";
        Icon[Icon["icon_openid"] = 417] = "icon_openid";
        Icon[Icon["icon_institution"] = 418] = "icon_institution";
        Icon[Icon["icon_bank"] = 419] = "icon_bank";
        Icon[Icon["icon_university"] = 420] = "icon_university";
        Icon[Icon["icon_mortar_board"] = 421] = "icon_mortar_board";
        Icon[Icon["icon_graduation_cap"] = 422] = "icon_graduation_cap";
        Icon[Icon["icon_yahoo"] = 423] = "icon_yahoo";
        Icon[Icon["icon_google"] = 424] = "icon_google";
        Icon[Icon["icon_reddit"] = 425] = "icon_reddit";
        Icon[Icon["icon_reddit_square"] = 426] = "icon_reddit_square";
        Icon[Icon["icon_stumbleupon_circle"] = 427] = "icon_stumbleupon_circle";
        Icon[Icon["icon_stumbleupon"] = 428] = "icon_stumbleupon";
        Icon[Icon["icon_delicious"] = 429] = "icon_delicious";
        Icon[Icon["icon_digg"] = 430] = "icon_digg";
        Icon[Icon["icon_pied_piper_square"] = 431] = "icon_pied_piper_square";
        Icon[Icon["icon_pied_piper"] = 432] = "icon_pied_piper";
        Icon[Icon["icon_pied_piper_alt"] = 433] = "icon_pied_piper_alt";
        Icon[Icon["icon_drupal"] = 434] = "icon_drupal";
        Icon[Icon["icon_joomla"] = 435] = "icon_joomla";
        Icon[Icon["icon_language"] = 436] = "icon_language";
        Icon[Icon["icon_fax"] = 437] = "icon_fax";
        Icon[Icon["icon_building"] = 438] = "icon_building";
        Icon[Icon["icon_child"] = 439] = "icon_child";
        Icon[Icon["icon_paw"] = 440] = "icon_paw";
        Icon[Icon["icon_spoon"] = 441] = "icon_spoon";
        Icon[Icon["icon_cube"] = 442] = "icon_cube";
        Icon[Icon["icon_cubes"] = 443] = "icon_cubes";
        Icon[Icon["icon_behance"] = 444] = "icon_behance";
        Icon[Icon["icon_behance_square"] = 445] = "icon_behance_square";
        Icon[Icon["icon_steam"] = 446] = "icon_steam";
        Icon[Icon["icon_steam_square"] = 447] = "icon_steam_square";
        Icon[Icon["icon_recycle"] = 448] = "icon_recycle";
        Icon[Icon["icon_automobile"] = 449] = "icon_automobile";
        Icon[Icon["icon_car"] = 450] = "icon_car";
        Icon[Icon["icon_cab"] = 451] = "icon_cab";
        Icon[Icon["icon_taxi"] = 452] = "icon_taxi";
        Icon[Icon["icon_tree"] = 453] = "icon_tree";
        Icon[Icon["icon_spotify"] = 454] = "icon_spotify";
        Icon[Icon["icon_deviantart"] = 455] = "icon_deviantart";
        Icon[Icon["icon_soundcloud"] = 456] = "icon_soundcloud";
        Icon[Icon["icon_database"] = 457] = "icon_database";
        Icon[Icon["icon_file_pdf_o"] = 458] = "icon_file_pdf_o";
        Icon[Icon["icon_file_word_o"] = 459] = "icon_file_word_o";
        Icon[Icon["icon_file_excel_o"] = 460] = "icon_file_excel_o";
        Icon[Icon["icon_file_powerpoint_o"] = 461] = "icon_file_powerpoint_o";
        Icon[Icon["icon_file_photo_o"] = 462] = "icon_file_photo_o";
        Icon[Icon["icon_file_picture_o"] = 463] = "icon_file_picture_o";
        Icon[Icon["icon_file_image_o"] = 464] = "icon_file_image_o";
        Icon[Icon["icon_file_zip_o"] = 465] = "icon_file_zip_o";
        Icon[Icon["icon_file_archive_o"] = 466] = "icon_file_archive_o";
        Icon[Icon["icon_file_sound_o"] = 467] = "icon_file_sound_o";
        Icon[Icon["icon_file_audio_o"] = 468] = "icon_file_audio_o";
        Icon[Icon["icon_file_movie_o"] = 469] = "icon_file_movie_o";
        Icon[Icon["icon_file_video_o"] = 470] = "icon_file_video_o";
        Icon[Icon["icon_file_code_o"] = 471] = "icon_file_code_o";
        Icon[Icon["icon_vine"] = 472] = "icon_vine";
        Icon[Icon["icon_codepen"] = 473] = "icon_codepen";
        Icon[Icon["icon_jsfiddle"] = 474] = "icon_jsfiddle";
        Icon[Icon["icon_life_bouy"] = 475] = "icon_life_bouy";
        Icon[Icon["icon_life_saver"] = 476] = "icon_life_saver";
        Icon[Icon["icon_support"] = 477] = "icon_support";
        Icon[Icon["icon_life_ring"] = 478] = "icon_life_ring";
        Icon[Icon["icon_circle_o_notch"] = 479] = "icon_circle_o_notch";
        Icon[Icon["icon_ra"] = 480] = "icon_ra";
        Icon[Icon["icon_rebel"] = 481] = "icon_rebel";
        Icon[Icon["icon_ge"] = 482] = "icon_ge";
        Icon[Icon["icon_empire"] = 483] = "icon_empire";
        Icon[Icon["icon_git_square"] = 484] = "icon_git_square";
        Icon[Icon["icon_git"] = 485] = "icon_git";
        Icon[Icon["icon_hacker_news"] = 486] = "icon_hacker_news";
        Icon[Icon["icon_tencent_weibo"] = 487] = "icon_tencent_weibo";
        Icon[Icon["icon_qq"] = 488] = "icon_qq";
        Icon[Icon["icon_wechat"] = 489] = "icon_wechat";
        Icon[Icon["icon_weixin"] = 490] = "icon_weixin";
        Icon[Icon["icon_send"] = 491] = "icon_send";
        Icon[Icon["icon_paper_plane"] = 492] = "icon_paper_plane";
        Icon[Icon["icon_send_o"] = 493] = "icon_send_o";
        Icon[Icon["icon_paper_plane_o"] = 494] = "icon_paper_plane_o";
        Icon[Icon["icon_history"] = 495] = "icon_history";
        Icon[Icon["icon_circle_thin"] = 496] = "icon_circle_thin";
        Icon[Icon["icon_header"] = 497] = "icon_header";
        Icon[Icon["icon_paragraph"] = 498] = "icon_paragraph";
        Icon[Icon["icon_sliders"] = 499] = "icon_sliders";
        Icon[Icon["icon_share_alt"] = 500] = "icon_share_alt";
        Icon[Icon["icon_share_alt_square"] = 501] = "icon_share_alt_square";
        Icon[Icon["icon_bomb"] = 502] = "icon_bomb";
        Icon[Icon["icon_remove_sign"] = 503] = "icon_remove_sign";
        Icon[Icon["icon_time"] = 504] = "icon_time";
        Icon[Icon["icon_ok"] = 505] = "icon_ok";
    })(exports.Icon || (exports.Icon = {}));
    var Icon = exports.Icon;

    (function (ComboStyle) {
        ComboStyle[ComboStyle["Default"] = 0] = "Default";
        ComboStyle[ComboStyle["Primary"] = 1] = "Primary";
        ComboStyle[ComboStyle["Info"] = 2] = "Info";
        ComboStyle[ComboStyle["Success"] = 3] = "Success";
        ComboStyle[ComboStyle["Warning"] = 4] = "Warning";
        ComboStyle[ComboStyle["Danger"] = 5] = "Danger";
    })(exports.ComboStyle || (exports.ComboStyle = {}));
    var ComboStyle = exports.ComboStyle;

    (function (ButtonAlignment) {
        ButtonAlignment[ButtonAlignment["Left"] = 0] = "Left";
        ButtonAlignment[ButtonAlignment["Right"] = 1] = "Right";
    })(exports.ButtonAlignment || (exports.ButtonAlignment = {}));
    var ButtonAlignment = exports.ButtonAlignment;

    (function (IconAlignment) {
        IconAlignment[IconAlignment["Left"] = 0] = "Left";
        IconAlignment[IconAlignment["Right"] = 1] = "Right";
    })(exports.IconAlignment || (exports.IconAlignment = {}));
    var IconAlignment = exports.IconAlignment;

    (function (PaginationAlignment) {
        PaginationAlignment[PaginationAlignment["Left"] = 0] = "Left";
        PaginationAlignment[PaginationAlignment["Center"] = 1] = "Center";
        PaginationAlignment[PaginationAlignment["Right"] = 2] = "Right";
    })(exports.PaginationAlignment || (exports.PaginationAlignment = {}));
    var PaginationAlignment = exports.PaginationAlignment;

    (function (TabStyle) {
        TabStyle[TabStyle["Tab"] = 0] = "Tab";
        TabStyle[TabStyle["Pill"] = 1] = "Pill";
    })(exports.TabStyle || (exports.TabStyle = {}));
    var TabStyle = exports.TabStyle;

    (function (ItemAlignment) {
        ItemAlignment[ItemAlignment["Left"] = 0] = "Left";
        ItemAlignment[ItemAlignment["Right"] = 1] = "Right";
    })(exports.ItemAlignment || (exports.ItemAlignment = {}));
    var ItemAlignment = exports.ItemAlignment;

    (function (Cursor) {
        Cursor[Cursor["Default"] = 0] = "Default";
        Cursor[Cursor["Auto"] = 1] = "Auto";
        Cursor[Cursor["Crosshair"] = 2] = "Crosshair";
        Cursor[Cursor["E_resize"] = 3] = "E_resize";
        Cursor[Cursor["Help"] = 4] = "Help";
        Cursor[Cursor["Move"] = 5] = "Move";
        Cursor[Cursor["N_resize"] = 6] = "N_resize";
        Cursor[Cursor["NE_resize"] = 7] = "NE_resize";
        Cursor[Cursor["NW_resize"] = 8] = "NW_resize";
        Cursor[Cursor["Pointer"] = 9] = "Pointer";
        Cursor[Cursor["Progress"] = 10] = "Progress";
        Cursor[Cursor["S_resize"] = 11] = "S_resize";
        Cursor[Cursor["Se_resize"] = 12] = "Se_resize";
        Cursor[Cursor["Sw_resize"] = 13] = "Sw_resize";
        Cursor[Cursor["Text"] = 14] = "Text";
        Cursor[Cursor["W_resize"] = 15] = "W_resize";
        Cursor[Cursor["Wait"] = 16] = "Wait";
        Cursor[Cursor["Inherit"] = 17] = "Inherit";
    })(exports.Cursor || (exports.Cursor = {}));
    var Cursor = exports.Cursor;

    (function (TextAlignment) {
        TextAlignment[TextAlignment["Left"] = 0] = "Left";
        TextAlignment[TextAlignment["Right"] = 1] = "Right";
        TextAlignment[TextAlignment["Center"] = 2] = "Center";
    })(exports.TextAlignment || (exports.TextAlignment = {}));
    var TextAlignment = exports.TextAlignment;

    (function (BadgeStyle) {
        BadgeStyle[BadgeStyle["Default"] = 0] = "Default";
        BadgeStyle[BadgeStyle["Success"] = 1] = "Success";
        BadgeStyle[BadgeStyle["Warning"] = 2] = "Warning";
        BadgeStyle[BadgeStyle["Important"] = 3] = "Important";
        BadgeStyle[BadgeStyle["Info"] = 4] = "Info";
    })(exports.BadgeStyle || (exports.BadgeStyle = {}));
    var BadgeStyle = exports.BadgeStyle;

    (function (LabelStyle) {
        LabelStyle[LabelStyle["Default"] = 0] = "Default";
        LabelStyle[LabelStyle["Success"] = 1] = "Success";
        LabelStyle[LabelStyle["Warning"] = 2] = "Warning";
        LabelStyle[LabelStyle["Important"] = 3] = "Important";
        LabelStyle[LabelStyle["Info"] = 4] = "Info";
    })(exports.LabelStyle || (exports.LabelStyle = {}));
    var LabelStyle = exports.LabelStyle;

    (function (LabelPosition) {
        LabelPosition[LabelPosition["Left"] = 0] = "Left";
        LabelPosition[LabelPosition["Right"] = 1] = "Right";
        LabelPosition[LabelPosition["TopCenter"] = 2] = "TopCenter";
        LabelPosition[LabelPosition["TopLeft"] = 3] = "TopLeft";
        LabelPosition[LabelPosition["TopRight"] = 4] = "TopRight";
        LabelPosition[LabelPosition["BottomCenter"] = 5] = "BottomCenter";
        LabelPosition[LabelPosition["BottomLeft"] = 6] = "BottomLeft";
        LabelPosition[LabelPosition["BottomRight"] = 7] = "BottomRight";
    })(exports.LabelPosition || (exports.LabelPosition = {}));
    var LabelPosition = exports.LabelPosition;

    (function (ComboDropMode) {
        ComboDropMode[ComboDropMode["Up"] = 0] = "Up";
        ComboDropMode[ComboDropMode["Down"] = 1] = "Down";
        ComboDropMode[ComboDropMode["Auto"] = 2] = "Auto";
    })(exports.ComboDropMode || (exports.ComboDropMode = {}));
    var ComboDropMode = exports.ComboDropMode;

    (function (NotificationPosition) {
        NotificationPosition[NotificationPosition["TopLeft"] = 0] = "TopLeft";
        NotificationPosition[NotificationPosition["TopRight"] = 1] = "TopRight";
        NotificationPosition[NotificationPosition["BottomLeft"] = 2] = "BottomLeft";
        NotificationPosition[NotificationPosition["BottomRight"] = 3] = "BottomRight";
    })(exports.NotificationPosition || (exports.NotificationPosition = {}));
    var NotificationPosition = exports.NotificationPosition;

    (function (Language) {
        Language[Language["Afar"] = 0] = "Afar";
        Language[Language["Afrikaans"] = 1] = "Afrikaans";
        Language[Language["Albanian"] = 2] = "Albanian";
        Language[Language["Amharic"] = 3] = "Amharic";
        Language[Language["Arabic"] = 4] = "Arabic";
        Language[Language["Aragonese"] = 5] = "Aragonese";
        Language[Language["Armenian"] = 6] = "Armenian";
        Language[Language["Assamese"] = 7] = "Assamese";
        Language[Language["Aymara"] = 8] = "Aymara";
        Language[Language["Azerbaijani"] = 9] = "Azerbaijani";
        Language[Language["Bashkir"] = 10] = "Bashkir";
        Language[Language["Basque"] = 11] = "Basque";
        Language[Language["Bengali"] = 12] = "Bengali";
        Language[Language["Bhutani"] = 13] = "Bhutani";
        Language[Language["Bihari"] = 14] = "Bihari";
        Language[Language["Bislama"] = 15] = "Bislama";
        Language[Language["Breton"] = 16] = "Breton";
        Language[Language["Bulgarian"] = 17] = "Bulgarian";
        Language[Language["Burmese"] = 18] = "Burmese";
        Language[Language["Byelorussian"] = 19] = "Byelorussian";
        Language[Language["Cambodian"] = 20] = "Cambodian";
        Language[Language["Catalan"] = 21] = "Catalan";
        Language[Language["Cherokee"] = 22] = "Cherokee";
        Language[Language["Chewa"] = 23] = "Chewa";
        Language[Language["Chinese"] = 24] = "Chinese";
        Language[Language["Chinese_Simplified"] = 25] = "Chinese_Simplified";
        Language[Language["Chinese_Traditional"] = 26] = "Chinese_Traditional";
        Language[Language["Corsican"] = 27] = "Corsican";
        Language[Language["Croatian"] = 28] = "Croatian";
        Language[Language["Czech"] = 29] = "Czech";
        Language[Language["Danish"] = 30] = "Danish";
        Language[Language["Divehi"] = 31] = "Divehi";
        Language[Language["Dutch"] = 32] = "Dutch";
        Language[Language["Edo"] = 33] = "Edo";
        Language[Language["English"] = 34] = "English";
        Language[Language["Esperanto"] = 35] = "Esperanto";
        Language[Language["Estonian"] = 36] = "Estonian";
        Language[Language["Faeroese"] = 37] = "Faeroese";
        Language[Language["Farsi"] = 38] = "Farsi";
        Language[Language["Fiji"] = 39] = "Fiji";
        Language[Language["Finnish"] = 40] = "Finnish";
        Language[Language["Flemish"] = 41] = "Flemish";
        Language[Language["French"] = 42] = "French";
        Language[Language["Frisian"] = 43] = "Frisian";
        Language[Language["Fulfulde"] = 44] = "Fulfulde";
        Language[Language["Galician"] = 45] = "Galician";
        Language[Language["Gaelic_Scottish"] = 46] = "Gaelic_Scottish";
        Language[Language["Gaelic_Manx"] = 47] = "Gaelic_Manx";
        Language[Language["Georgian"] = 48] = "Georgian";
        Language[Language["German"] = 49] = "German";
        Language[Language["Greek"] = 50] = "Greek";
        Language[Language["Greenlandic"] = 51] = "Greenlandic";
        Language[Language["Guarani"] = 52] = "Guarani";
        Language[Language["Gujarati"] = 53] = "Gujarati";
        Language[Language["Hausa"] = 54] = "Hausa";
        Language[Language["Hawaiian"] = 55] = "Hawaiian";
        Language[Language["Hebrew"] = 56] = "Hebrew";
        Language[Language["Hindi"] = 57] = "Hindi";
        Language[Language["Hungarian"] = 58] = "Hungarian";
        Language[Language["Ibibio"] = 59] = "Ibibio";
        Language[Language["Icelandic"] = 60] = "Icelandic";
        Language[Language["Idoio"] = 61] = "Idoio";
        Language[Language["Igbo"] = 62] = "Igbo";
        Language[Language["Indonesian"] = 63] = "Indonesian";
        Language[Language["Interlingua"] = 64] = "Interlingua";
        Language[Language["Interlingue"] = 65] = "Interlingue";
        Language[Language["Inuktitut"] = 66] = "Inuktitut";
        Language[Language["Inupiak"] = 67] = "Inupiak";
        Language[Language["Irish"] = 68] = "Irish";
        Language[Language["Italian"] = 69] = "Italian";
        Language[Language["Japanese"] = 70] = "Japanese";
        Language[Language["Javanese"] = 71] = "Javanese";
        Language[Language["Kannada"] = 72] = "Kannada";
        Language[Language["Kanuri"] = 73] = "Kanuri";
        Language[Language["Kashmiri"] = 74] = "Kashmiri";
        Language[Language["Kazakh"] = 75] = "Kazakh";
        Language[Language["Kirghiz"] = 76] = "Kirghiz";
        Language[Language["Kirundi"] = 77] = "Kirundi";
        Language[Language["Konkani"] = 78] = "Konkani";
        Language[Language["Korean"] = 79] = "Korean";
        Language[Language["Kurdish"] = 80] = "Kurdish";
        Language[Language["Laothian"] = 81] = "Laothian";
        Language[Language["Latin"] = 82] = "Latin";
        Language[Language["Latvian"] = 83] = "Latvian";
        Language[Language["Limburgish"] = 84] = "Limburgish";
        Language[Language["Lingala"] = 85] = "Lingala";
        Language[Language["Lithuanian"] = 86] = "Lithuanian";
        Language[Language["Macedonian"] = 87] = "Macedonian";
        Language[Language["Malagasy"] = 88] = "Malagasy";
        Language[Language["Malay"] = 89] = "Malay";
        Language[Language["Malayalam"] = 90] = "Malayalam";
        Language[Language["Maltese"] = 91] = "Maltese";
        Language[Language["Maori"] = 92] = "Maori";
        Language[Language["Marathi"] = 93] = "Marathi";
        Language[Language["Moldavian"] = 94] = "Moldavian";
        Language[Language["Mongolian"] = 95] = "Mongolian";
        Language[Language["Nauru"] = 96] = "Nauru";
        Language[Language["Nepali"] = 97] = "Nepali";
        Language[Language["Norwegian"] = 98] = "Norwegian";
        Language[Language["Occitan"] = 99] = "Occitan";
        Language[Language["Oriya"] = 100] = "Oriya";
        Language[Language["Oromo"] = 101] = "Oromo";
        Language[Language["Papiamentu"] = 102] = "Papiamentu";
        Language[Language["Pashto"] = 103] = "Pashto";
        Language[Language["Polish"] = 104] = "Polish";
        Language[Language["Portuguese"] = 105] = "Portuguese";
        Language[Language["Punjabi"] = 106] = "Punjabi";
        Language[Language["Quechua"] = 107] = "Quechua";
        Language[Language["Romanian"] = 108] = "Romanian";
        Language[Language["Russian"] = 109] = "Russian";
        Language[Language["Sami"] = 110] = "Sami";
        Language[Language["Samoan"] = 111] = "Samoan";
        Language[Language["Sangro"] = 112] = "Sangro";
        Language[Language["Sanskrit"] = 113] = "Sanskrit";
        Language[Language["Serbian"] = 114] = "Serbian";
        Language[Language["Serbo_Croatian"] = 115] = "Serbo_Croatian";
        Language[Language["Sesotho"] = 116] = "Sesotho";
        Language[Language["Setswana"] = 117] = "Setswana";
        Language[Language["Shona"] = 118] = "Shona";
        Language[Language["Sichuan"] = 119] = "Sichuan";
        Language[Language["Sindhi"] = 120] = "Sindhi";
        Language[Language["Sinhalese"] = 121] = "Sinhalese";
        Language[Language["Siswati"] = 122] = "Siswati";
        Language[Language["Slovak"] = 123] = "Slovak";
        Language[Language["Slovenian"] = 124] = "Slovenian";
        Language[Language["Somali"] = 125] = "Somali";
        Language[Language["Spanish"] = 126] = "Spanish";
        Language[Language["Sundanese"] = 127] = "Sundanese";
        Language[Language["Swahili"] = 128] = "Swahili";
        Language[Language["Swedish"] = 129] = "Swedish";
        Language[Language["Syriac"] = 130] = "Syriac";
        Language[Language["Tagalog"] = 131] = "Tagalog";
        Language[Language["Tajik"] = 132] = "Tajik";
        Language[Language["Tamazight"] = 133] = "Tamazight";
        Language[Language["Tamil"] = 134] = "Tamil";
        Language[Language["Tatar"] = 135] = "Tatar";
        Language[Language["Telugu"] = 136] = "Telugu";
        Language[Language["Thai"] = 137] = "Thai";
        Language[Language["Tibetan"] = 138] = "Tibetan";
        Language[Language["Tigrinya"] = 139] = "Tigrinya";
        Language[Language["Tonga"] = 140] = "Tonga";
        Language[Language["Tsonga"] = 141] = "Tsonga";
        Language[Language["Turkish"] = 142] = "Turkish";
        Language[Language["Turkmen"] = 143] = "Turkmen";
        Language[Language["Twi"] = 144] = "Twi";
        Language[Language["Uighur"] = 145] = "Uighur";
        Language[Language["Ukrainian"] = 146] = "Ukrainian";
        Language[Language["Urdu"] = 147] = "Urdu";
        Language[Language["Uzbek"] = 148] = "Uzbek";
        Language[Language["Venda"] = 149] = "Venda";
        Language[Language["Vietnamese"] = 150] = "Vietnamese";
        Language[Language["Wallon"] = 151] = "Wallon";
        Language[Language["Welsh"] = 152] = "Welsh";
        Language[Language["Wolof"] = 153] = "Wolof";
        Language[Language["Xhosa"] = 154] = "Xhosa";
        Language[Language["Yoruba"] = 155] = "Yoruba";
        Language[Language["Zulu"] = 156] = "Zulu";
    })(exports.Language || (exports.Language = {}));
    var Language = exports.Language;

    (function (PopoverPlacement) {
        PopoverPlacement[PopoverPlacement["Left"] = 0] = "Left";
        PopoverPlacement[PopoverPlacement["Right"] = 1] = "Right";
        PopoverPlacement[PopoverPlacement["Top"] = 2] = "Top";
        PopoverPlacement[PopoverPlacement["Bottom"] = 3] = "Bottom";
    })(exports.PopoverPlacement || (exports.PopoverPlacement = {}));
    var PopoverPlacement = exports.PopoverPlacement;

    /*Define the positioning of a tooltip elements.*/
    (function (TooltipPlacement) {
        TooltipPlacement[TooltipPlacement["Left"] = 0] = "Left";
        TooltipPlacement[TooltipPlacement["Right"] = 1] = "Right";
        TooltipPlacement[TooltipPlacement["Top"] = 2] = "Top";
        TooltipPlacement[TooltipPlacement["Bottom"] = 3] = "Bottom";
    })(exports.TooltipPlacement || (exports.TooltipPlacement = {}));
    var TooltipPlacement = exports.TooltipPlacement;

    (function (ModalEffects) {
        ModalEffects[ModalEffects["SlideDown"] = 0] = "SlideDown";
        ModalEffects[ModalEffects["SlideUp"] = 1] = "SlideUp";
        ModalEffects[ModalEffects["FadeIn"] = 2] = "FadeIn";
        ModalEffects[ModalEffects["FadeOut"] = 3] = "FadeOut";
    })(exports.ModalEffects || (exports.ModalEffects = {}));
    var ModalEffects = exports.ModalEffects;
    ;

    (function (GridRowStyle) {
        GridRowStyle[GridRowStyle["Default"] = 0] = "Default";
        GridRowStyle[GridRowStyle["Info"] = 1] = "Info";
        GridRowStyle[GridRowStyle["Success"] = 2] = "Success";
        GridRowStyle[GridRowStyle["Error"] = 3] = "Error";
        GridRowStyle[GridRowStyle["Warning"] = 4] = "Warning";
    })(exports.GridRowStyle || (exports.GridRowStyle = {}));
    var GridRowStyle = exports.GridRowStyle;

    (function (SelectedRowStyle) {
        SelectedRowStyle[SelectedRowStyle["Default"] = 0] = "Default";
        SelectedRowStyle[SelectedRowStyle["Info"] = 1] = "Info";
        SelectedRowStyle[SelectedRowStyle["Success"] = 2] = "Success";
        SelectedRowStyle[SelectedRowStyle["Error"] = 3] = "Error";
        SelectedRowStyle[SelectedRowStyle["Warning"] = 4] = "Warning";
    })(exports.SelectedRowStyle || (exports.SelectedRowStyle = {}));
    var SelectedRowStyle = exports.SelectedRowStyle;

    function tryAndCatch(callback) {
        try  {
            callback();
        } catch (err) {
            exports.Application.raiseException(err);
        }
    }
    exports.tryAndCatch = tryAndCatch;

    function iconEnumToBootstrapStyle(icon) {
        if (!icon)
            return "";
        return ButtonIcon[icon].replace(/_/gi, "-");
    }
    exports.iconEnumToBootstrapStyle = iconEnumToBootstrapStyle;

    function getClassStyleHexColor(selector, style) {
        var elemstr = '<a>';
        var $elem = $(elemstr).hide().appendTo($('body'));
        $elem.addClass(selector);
        var rgb = $elem.css(style).match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
        $elem.remove();
        function hex(x) {
            return ("0" + parseInt(x).toString(16)).slice(-2);
        }
        return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
        ;
    }
    exports.getClassStyleHexColor = getClassStyleHexColor;
});
