import VXObjectMod = require("./VXObject");
/**TObject is the ultimate ancestor of all components.*/
export declare class TObject extends VXObjectMod.TObject {
}
export declare class TTimer extends VXObjectMod.TTimer {
}
export declare class TCollectionItem extends VXObjectMod.TCollectionItem {
}
/**
    TCollection is a container for TCollectionItem objects.
**/
export declare class TCollection<T> extends VXObjectMod.TCollection<T> {
}
export declare class TList<T> extends VXObjectMod.TList<T> {
}
import VXCompMod = require("./VXComponent");
/**
* TComponent is the base class for all components that are visible at run time.
*/
export declare class TComponent extends VXCompMod.TComponent {
}
export declare class TControl extends VXCompMod.TControl {
}
import VXContainMod = require("./VXContainer");
export declare class TContainer extends VXContainMod.TContainer {
}
export declare class TBootstrapRow extends VXContainMod.TBootstrapRow {
}
export declare class TBootstrapRowFluid extends VXContainMod.TBootstrapRowFluid {
}
export declare class TBootstrapSpan extends VXContainMod.TBootstrapSpan {
}
/***
* Dynamically repeating controls and containers
*/
import VXAppMod = require("./VXApplication");
export declare class TApplication extends VXAppMod.TApplication {
}
export declare class TNavbarItem extends VXAppMod.TNavbarItem {
}
export declare class TFacebookAPI extends VXAppMod.TFacebookAPI {
}
import VXServerMod = require("./VXServer");
export declare class TServer extends VXServerMod.TServer {
}
import VXPageMod = require("./VXPage");
export declare class TPage extends VXPageMod.TPage {
}
import VXModalMod = require("./VXModal");
export declare class TModal extends VXModalMod.TModal {
}
export declare class TModalBuilder extends VXModalMod.TModalBuilder {
}
import VXTabMod = require("./VXTab");
export declare class TTabSheet extends VXTabMod.TTabSheet {
}
export declare class TTabPage extends VXTabMod.TTabPage {
}
export declare class TTabPanel extends VXTabMod.TTabPanel {
}
export declare class TAccordionGroupPanel extends VXTabMod.TAccordionGroupPanel {
}
export declare class TAccordionGroup extends VXTabMod.TAccordionGroup {
}
export declare class TAccordion extends VXTabMod.TAccordion {
}
export declare class TWizardButtons extends VXTabMod.TWizardButtons {
}
export declare class TWizardButtonsStep extends VXTabMod.TWizardButtonsStep {
}
import VXTextMod = require("./VXText");
export declare class TLabel extends VXTextMod.TLabel {
}
export declare class TTagCloud extends VXTextMod.TTagCloud {
}
export declare class TTagCloudItem extends VXTextMod.TTagCloudItem {
}
export declare class TPillBox extends VXTextMod.TPillBox {
}
export declare class TPillBoxItem extends VXTextMod.TPillBoxItem {
}
export declare class TBreadCrumb extends VXTextMod.TBreadCrumb {
}
export declare class TBreadCrumbItem extends VXTextMod.TBreadCrumbItem {
}
export declare class TPagination extends VXTextMod.TPagination {
}
export declare class TPaginationItem extends VXTextMod.TPaginationItem {
}
export declare class TDBLabel extends VXTextMod.TDBLabel {
}
export declare class TBadge extends VXTextMod.TBadge {
}
export declare class TDBBadge extends VXTextMod.TDBBadge {
}
export declare class TText extends VXTextMod.TText {
}
export declare class TDBText extends VXTextMod.TDBText {
}
import VXInputMod = require("./VXInput");
export declare class TDBInput extends VXInputMod.TDBInput {
}
/**
Use a TInput to put a standard input control on a page.
Input controls are used to retrieve text that users type. Input controls can also display text to the user.
**/
export declare class TInput extends VXInputMod.TInput {
}
export declare class TInputTypeaHead extends VXInputMod.TInputTypeaHead {
}
export declare class TTypeaHeadItem extends VXInputMod.TTypeaHeadItem {
}
export declare class TTextArea extends VXInputMod.TTextArea {
}
export declare class TDBLabeledText extends VXInputMod.TDBLabeledText {
}
export declare class TDBTextArea extends VXInputMod.TDBTextArea {
}
export declare class TInputNumeric extends VXInputMod.TInputNumeric {
}
export declare class TDBInputNumeric extends VXInputMod.TDBInputNumeric {
}
import VXImageMod = require("./VXImage");
export declare class TImage extends VXImageMod.TImage {
}
export declare class TIcon extends VXImageMod.TIcon {
}
export declare class TGravatarImage extends VXImageMod.TGravatarImage {
}
import VXMenuMod = require("./VXMenu");
export declare class TMenuItem extends VXMenuMod.TMenuItem {
}
export declare class TMenuItemCollection<TMenuItem> extends VXMenuMod.TMenuItemCollection<TMenuItem> {
}
import VXQueryMod = require("./VXQuery");
/**
* TQuery represents a dataset with a result set that is based on an SQL statement.
*/
export declare class TQuery extends VXQueryMod.TQuery {
}
/**
* TQuery represents a dataset with a result set that is based on a remoteSQL statement.
*/
export declare class TQueryRemote extends VXQueryMod.TQueryRemote {
}
export declare class TQueryParam extends VXQueryMod.TQueryParam {
}
import VXSSASMod = require("./VXOlapSSAS");
export declare class TOlapSSAS extends VXSSASMod.TOlapSSAS {
}
import VXButtonMod = require("./VXButton");
/**
* Button is a push button control.
* Use TButton to put a standard push button on a page or modalform
*/
export declare class TButton extends VXButtonMod.TButton {
}
export declare class TToggleSwitch extends VXButtonMod.TToggleSwitch {
}
export declare class TFacebookButton extends VXButtonMod.TFacebookButton {
}
import VXDBGridMod = require("./VXDBGrid");
/**
    TDBGrid displays and manipulates records from a dataset in a tabular grid.
**/
export declare class TDBGrid extends VXDBGridMod.TDBGrid {
}
export declare class TDBGridColumn extends VXDBGridMod.TDBGridColumn {
}
export declare class TGrid extends VXDBGridMod.TGrid {
}
import VXDatasetMod = require("./VXDataset");
/**
* TDataset is the base class for all dataset components that represent data in rows and columns.
*/
export declare class TDataset extends VXDatasetMod.TDataset {
}
export declare class TClientDataset extends VXDatasetMod.TClientDataset {
}
export declare class TNestedClientDataset extends VXDatasetMod.TNestedClientDataset {
}
import VXComboboxMod = require("./VXCombo");
export declare class TComboItem extends VXComboboxMod.TComboItem {
}
/**
TComboBox combines an edit box with a scrollable list.
**/
export declare class TCombobox extends VXComboboxMod.TCombobox {
}
export declare class TDBCombobox extends VXComboboxMod.TDBCombobox {
}
import VXlistboxMod = require("./VXListBox");
/**
TListBox displays a collection of items in a scrollable list.
**/
export declare class TListBox extends VXlistboxMod.TListbox {
}
export declare class TTree extends VXlistboxMod.TTree {
}
export declare class TTreeNodeItem extends VXlistboxMod.TTreeNodeItem {
}
import VXSideBarMod = require("./VXSideBar");
export declare class TSideBar extends VXSideBarMod.TSideBar {
}
export declare class TNavBar extends VXSideBarMod.TNavBar {
}
import VXWellMod = require("./VXWell");
export declare class TWell extends VXWellMod.TWell {
}
export declare class TCarousel extends VXWellMod.TCarousel {
}
export declare class TGoogleMap extends VXWellMod.TGoogleMap {
}
export declare class TGoogleMapMarker extends VXWellMod.TGoogleMapMarker {
}
export declare class TGoogleMapHeatmapMarker extends VXWellMod.TGoogleMapHeatmapMarker {
}
export declare class TPanel extends VXWellMod.TPanel {
}
export declare class TPanelButton extends VXWellMod.TPanelButton {
}
export declare class TGraphEditor extends VXWellMod.TGraphEditor {
}
export declare class GraphNode extends VXWellMod.GraphNode {
}
export declare class GraphEdge extends VXWellMod.GraphEdge {
}
export declare class GraphElement extends VXWellMod.GraphElement {
}
export declare class GraphEditorArborLayout extends VXWellMod.GraphEditorArborLayout {
}
export declare class GraphEditorCOSELayout extends VXWellMod.GraphEditorArborLayout {
}
export declare class GraphEditorBreadthfirstLayout extends VXWellMod.GraphEditorBreadthfirstLayout {
}
export declare class GraphEditorConcentricLayout extends VXWellMod.GraphEditorConcentricLayout {
}
export declare class GraphEditorCircleLayout extends VXWellMod.GraphEditorCircleLayout {
}
export declare class GraphEditorGridLayout extends VXWellMod.GraphEditorGridLayout {
}
export declare class GraphEditorPresetLayout extends VXWellMod.GraphEditorPresetLayout {
}
export declare class GraphEditorRandomLayout extends VXWellMod.GraphEditorRandomLayout {
}
export declare class GraphEditorNullLayout extends VXWellMod.GraphEditorNullLayout {
}
export declare enum GraphNodeShapeEnum {
    rectangle = 0,
    roundrectangle = 1,
    ellipse = 2,
    triangle = 3,
    pentagon = 4,
    hexagon = 5,
    heptagon = 6,
    octagon = 7,
    star = 8,
}
export declare enum GraphNodeLabelHorizAlignmentEnum {
    left = 0,
    center = 1,
    right = 2,
}
export declare enum GraphNodeLabelVerticalAlignmentEnum {
    top = 0,
    center = 1,
    bottom = 2,
}
export declare enum GraphEdgeCurveStyleEnum {
    bezier = 0,
    haystack = 1,
}
export declare enum GraphEdgeLineStyleEnum {
    solid = 0,
    dotted = 1,
    dashed = 2,
}
export declare enum GraphEdgeArrowTypeEnum {
    tee = 0,
    triangle = 1,
    square = 2,
    circle = 3,
    diamond = 4,
    none = 5,
}
export declare enum GraphEdgeArrowFillEnum {
    filled = 0,
    hollow = 1,
}
export declare enum GraphTipPositionVEnum {
    Top = 0,
    Center = 1,
    Bottom = 2,
}
export declare enum GraphTipPositionHEnum {
    Left = 0,
    Center = 1,
    Right = 2,
}
import VXCheckboxMod = require("./VXCheckBox");
export declare class TCheckBox extends VXCheckboxMod.TCheckBox {
}
export declare class TRadioButton extends VXCheckboxMod.TRadioButton {
}
export declare class TDBCheckBox extends VXCheckboxMod.TDBCheckBox {
}
export declare class TVerticalCheckBoxList extends VXCheckboxMod.TVerticalCheckBoxList {
}
export declare class TVerticalCheckBoxItem extends VXCheckboxMod.TVerticalCheckBoxItem {
}
import VXProgressMod = require("./VXProgressBar");
export declare class TProgressBar extends VXProgressMod.TProgressBar {
}
export declare class TRatingStar extends VXProgressMod.TRatingStart {
}
export declare class TSlider extends VXProgressMod.TSlider {
}
export declare class TRangeSlider extends VXProgressMod.TRangeSlider {
}
import VXAlertMod = require("./VXAlert");
/**
* Wrap any text and an optional dismiss button for a basic warning alert message.
*/
export declare class TAlert extends VXAlertMod.TAlert {
}
export declare class TNotification extends VXAlertMod.TNotification {
}
import VXGougeMod = require("./VXGauge");
export declare class TGauge extends VXGougeMod.TGauge {
}
import VXVXBarMod = require("./VXChartBar");
export declare class TChartBar extends VXVXBarMod.TChartBar {
}
export declare class TDBChartBar extends VXVXBarMod.TDBChartBar {
}
export declare class TChartBullet extends VXVXBarMod.TChartBullet {
}
import VXVXBarVVMod = require("./VXChartBarH");
export declare class TChartBarH extends VXVXBarVVMod.TChartBarH {
}
export declare class TDBChartBarH extends VXVXBarVVMod.TDBChartBarH {
}
import VXLineMod = require("./VXChartLine");
export declare class TChartLine extends VXLineMod.TChartLine {
}
export declare class TDBChartLine extends VXLineMod.TDBChartLine {
}
export declare class TChartArea extends VXLineMod.TChartArea {
}
export declare class TDBChartArea extends VXLineMod.TDBChartArea {
}
import VXDonutMod = require("./VXChartDonut");
export declare class TChartDonut extends VXDonutMod.TChartDonut {
}
export declare class TDBChartDonut extends VXDonutMod.TDBChartDonut {
}
import VXChartMod = require("./VXChartBase");
export declare class TDountValue extends VXChartMod.TDountValue {
}
export declare class TBarValue extends VXChartMod.TBarValue {
}
export declare class TLineValue extends VXChartMod.TLineValue {
}
export declare class TDotValue extends VXChartMod.TDotValue {
}
export declare class TSelectedChartValue extends VXChartMod.TSelectedChartValue {
}
import VXDotMod = require("./VXChartDot");
export declare class TChartDot extends VXDotMod.TChartDot {
}
export declare class TChartBubble extends VXDotMod.TChartBubble {
}
import VXconstMod = require("./VXConst");
import VXInputDateMod = require("./VXDateInput");
export declare class TInputDate extends VXInputDateMod.TDateInput {
}
export declare class TDBInputDate extends VXInputDateMod.TDBDateInput {
}
export declare class TInputTime extends VXInputDateMod.TInputTime {
}
export declare class TDateButton extends VXInputDateMod.TDateButton {
}
import VXSparkMod = require("./VXSparkLine");
export declare class TSparkBar extends VXSparkMod.TSparkBar {
}
export declare class TSparkLine extends VXSparkMod.TSparkLine {
}
export declare class TSparkPie extends VXSparkMod.TSparkPie {
}
export declare class TDBSparkBar extends VXSparkMod.TDBSparkBar {
}
export declare class TDBSparkLine extends VXSparkMod.TDBSparkLine {
}
export declare class TDBSparkPie extends VXSparkMod.TDBSparkPie {
}
import VXGridSterMod = require("./VXGridSter");
export declare class TWidgetGrid extends VXGridSterMod.TWidgetGrid {
}
export declare class TWidgetPanel extends VXGridSterMod.TWdgetPanel {
}
export declare class TConst extends VXconstMod.TConst {
}
/**
* Represents application-level information.
* By default, when a new project is created, VCL.JS constructs an TApplication object and assigns it to the Application variable in the VCL module.
* Application has several properties that can be used to get information about an application while it runs.
*/
export declare var Application: TApplication;
export declare var FacebookAPI: TFacebookAPI;
export declare var Global: any;
export declare enum CalendarType {
    Daily = 0,
    Monthly = 1,
}
export declare enum PasswordStrength {
    LOW = 0,
    MEDIUM = 1,
    HIGH = 2,
    EXTREME = 3,
}
export declare enum SortColumnOrder {
    Ascending = 0,
    Descending = 1,
}
export declare enum SortMode {
    Default = 0,
    Custom = 1,
}
export declare enum SliderOrientation {
    vertical = 0,
    horizontal = 1,
}
export declare enum SliderHandle {
    round = 0,
    triangle = 1,
    square = 2,
}
export declare enum SliderSelection {
    before = 0,
    after = 1,
    none = 2,
}
export declare enum ButtonStyle {
    Default = 0,
    Primary = 1,
    Info = 2,
    Success = 3,
    Warning = 4,
    Danger = 5,
    Link = 6,
}
export declare enum ColumnType {
    Text = 0,
    Icon = 1,
    Image = 2,
}
export declare enum PagerButtonStyle {
    Default = 0,
    Primary = 1,
    Info = 2,
    Success = 3,
    Warning = 4,
    Danger = 5,
    Link = 6,
}
export declare enum ShadowOptions {
    None = 0,
    Perspective = 1,
    Raised = 2,
    Lifted = 3,
    Side_hz_1 = 4,
    Side_hz_2 = 5,
    Side_vt_1 = 6,
    Side_vt_2 = 7,
}
export declare enum PagerButtonSize {
    Default = 0,
    Large = 1,
    Small = 2,
    Mini = 3,
}
export declare enum InputStyle {
    Default = 0,
    Info = 1,
    Success = 2,
    Warning = 3,
    Error = 4,
}
export declare enum HeaderStyle {
    Default = 0,
    Primary = 1,
    Info = 2,
    Success = 3,
    Warning = 4,
    Danger = 5,
    Transparent = 6,
}
export declare enum FacebookLoginState {
    Connected = 0,
    NotAuthorized = 1,
    NotConnected = 2,
}
export declare enum BaseColor {
    Default = 0,
    Primary = 1,
    Info = 2,
    Success = 3,
    Warning = 4,
    Danger = 5,
}
export declare enum DeviceType {
    LargeDisplay = 0,
    Tablet = 1,
    Phone = 2,
    Default = 3,
}
export declare enum TextStyle {
    Default = 0,
    h1 = 1,
    h2 = 2,
    h3 = 3,
    h4 = 4,
    h5 = 5,
    h6 = 6,
    lead = 7,
    small = 8,
    strong = 9,
}
export declare enum AggergateFunction {
    None = 0,
    Sum = 1,
    Max = 2,
    Min = 3,
    Avg = 4,
}
export declare enum HeaderTextStyle {
    Default = 0,
    Strong = 1,
    Small = 2,
}
export declare enum HeaderTextAlignment {
    Left = 0,
    Right = 1,
    Center = 2,
}
export declare enum Overflow {
    Visible = 0,
    Hidden = 1,
    Scroll = 2,
    Auto = 3,
}
export declare enum Overflow_X {
    Visible = 0,
    Hidden = 1,
    Scroll = 2,
    Auto = 3,
}
export declare enum Overflow_Y {
    Visible = 0,
    Hidden = 1,
    Scroll = 2,
    Auto = 3,
}
export declare enum PagerAlignment {
    Left = 0,
    Right = 1,
}
export declare enum AlertStyle {
    Default = 0,
    Info = 1,
    Success = 2,
    Error = 3,
    Danger = 4,
}
export declare enum TreeNodeStyle {
    Default = 0,
    Info = 1,
    Success = 2,
    Warning = 3,
    Important = 4,
    Inverse = 5,
}
export declare enum PillBoxStyle {
    Default = 0,
    Info = 1,
    Success = 2,
    Warning = 3,
    Important = 4,
}
export declare enum ProgressBarStyle {
    Default = 0,
    Primary = 1,
    Info = 2,
    Success = 3,
    Warning = 4,
    Danger = 5,
}
export declare enum ButtonSize {
    Default = 0,
    Large = 1,
    Small = 2,
    Mini = 3,
}
export declare enum PaginationSize {
    Default = 0,
    Large = 1,
    Small = 2,
    Mini = 3,
}
export declare enum SwitchSize {
    Default = 0,
    Large = 1,
    Small = 2,
    Mini = 3,
}
export interface iTranslatable {
    Localizable: boolean;
}
export declare enum ButtonIcon {
    icon_glass = 0,
    icon_music = 1,
    icon_search = 2,
    icon_envelope_o = 3,
    icon_heart = 4,
    icon_star = 5,
    icon_star_o = 6,
    icon_user = 7,
    icon_film = 8,
    icon_th_large = 9,
    icon_th = 10,
    icon_th_list = 11,
    icon_check = 12,
    icon_remove = 13,
    icon_search_plus = 14,
    icon_search_minus = 15,
    icon_power_off = 16,
    icon_signal = 17,
    icon_gear = 18,
    icon_cog = 19,
    icon_trash_o = 20,
    icon_home = 21,
    icon_file_o = 22,
    icon_clock_o = 23,
    icon_road = 24,
    icon_download = 25,
    icon_arrow_circle_o_down = 26,
    icon_arrow_circle_o_up = 27,
    icon_inbox = 28,
    icon_play_circle_o = 29,
    icon_rotate_right = 30,
    icon_repeat = 31,
    icon_refresh = 32,
    icon_list_alt = 33,
    icon_lock = 34,
    icon_flag = 35,
    icon_headphones = 36,
    icon_volume_off = 37,
    icon_volume_down = 38,
    icon_volume_up = 39,
    icon_qrcode = 40,
    icon_barcode = 41,
    icon_tag = 42,
    icon_tags = 43,
    icon_book = 44,
    icon_bookmark = 45,
    icon_print = 46,
    icon_camera = 47,
    icon_font = 48,
    icon_bold = 49,
    icon_italic = 50,
    icon_text_height = 51,
    icon_text_width = 52,
    icon_align_left = 53,
    icon_align_center = 54,
    icon_align_right = 55,
    icon_align_justify = 56,
    icon_list = 57,
    icon_dedent = 58,
    icon_outdent = 59,
    icon_indent = 60,
    icon_video_camera = 61,
    icon_photo = 62,
    icon_image = 63,
    icon_picture_o = 64,
    icon_pencil = 65,
    icon_map_marker = 66,
    icon_adjust = 67,
    icon_tint = 68,
    icon_edit = 69,
    icon_pencil_square_o = 70,
    icon_share_square_o = 71,
    icon_check_square_o = 72,
    icon_arrows = 73,
    icon_step_backward = 74,
    icon_fast_backward = 75,
    icon_backward = 76,
    icon_play = 77,
    icon_pause = 78,
    icon_stop = 79,
    icon_forward = 80,
    icon_fast_forward = 81,
    icon_step_forward = 82,
    icon_eject = 83,
    icon_chevron_left = 84,
    icon_chevron_right = 85,
    icon_plus_circle = 86,
    icon_minus_circle = 87,
    icon_times_circle = 88,
    icon_check_circle = 89,
    icon_question_circle = 90,
    icon_info_circle = 91,
    icon_crosshairs = 92,
    icon_times_circle_o = 93,
    icon_check_circle_o = 94,
    icon_ban = 95,
    icon_arrow_left = 96,
    icon_arrow_right = 97,
    icon_arrow_up = 98,
    icon_arrow_down = 99,
    icon_mail_forward = 100,
    icon_share = 101,
    icon_expand = 102,
    icon_compress = 103,
    icon_plus = 104,
    icon_minus = 105,
    icon_asterisk = 106,
    icon_exclamation_circle = 107,
    icon_gift = 108,
    icon_leaf = 109,
    icon_fire = 110,
    icon_eye = 111,
    icon_eye_slash = 112,
    icon_warning = 113,
    icon_exclamation_triangle = 114,
    icon_plane = 115,
    icon_calendar = 116,
    icon_random = 117,
    icon_comment = 118,
    icon_magnet = 119,
    icon_chevron_up = 120,
    icon_chevron_down = 121,
    icon_retweet = 122,
    icon_shopping_cart = 123,
    icon_folder = 124,
    icon_folder_open = 125,
    icon_arrows_v = 126,
    icon_arrows_h = 127,
    icon_bar_chart_o = 128,
    icon_twitter_square = 129,
    icon_facebook_square = 130,
    icon_camera_retro = 131,
    icon_key = 132,
    icon_gears = 133,
    icon_cogs = 134,
    icon_comments = 135,
    icon_thumbs_o_up = 136,
    icon_thumbs_o_down = 137,
    icon_star_half = 138,
    icon_heart_o = 139,
    icon_sign_out = 140,
    icon_linkedin_square = 141,
    icon_thumb_tack = 142,
    icon_external_link = 143,
    icon_sign_in = 144,
    icon_trophy = 145,
    icon_github_square = 146,
    icon_upload = 147,
    icon_lemon_o = 148,
    icon_phone = 149,
    icon_square_o = 150,
    icon_bookmark_o = 151,
    icon_phone_square = 152,
    icon_twitter = 153,
    icon_facebook = 154,
    icon_github = 155,
    icon_unlock = 156,
    icon_credit_card = 157,
    icon_rss = 158,
    icon_hdd_o = 159,
    icon_bullhorn = 160,
    icon_bell = 161,
    icon_certificate = 162,
    icon_hand_o_right = 163,
    icon_hand_o_left = 164,
    icon_hand_o_up = 165,
    icon_hand_o_down = 166,
    icon_arrow_circle_left = 167,
    icon_arrow_circle_right = 168,
    icon_arrow_circle_up = 169,
    icon_arrow_circle_down = 170,
    icon_globe = 171,
    icon_wrench = 172,
    icon_tasks = 173,
    icon_filter = 174,
    icon_briefcase = 175,
    icon_arrows_alt = 176,
    icon_group = 177,
    icon_users = 178,
    icon_chain = 179,
    icon_link = 180,
    icon_cloud = 181,
    icon_flask = 182,
    icon_cut = 183,
    icon_scissors = 184,
    icon_copy = 185,
    icon_files_o = 186,
    icon_paperclip = 187,
    icon_save = 188,
    icon_floppy_o = 189,
    icon_square = 190,
    icon_naicon = 191,
    icon_reorder = 192,
    icon_bars = 193,
    icon_list_ul = 194,
    icon_list_ol = 195,
    icon_strikethrough = 196,
    icon_underline = 197,
    icon_table = 198,
    icon_magic = 199,
    icon_truck = 200,
    icon_pinterest = 201,
    icon_pinterest_square = 202,
    icon_google_plus_square = 203,
    icon_google_plus = 204,
    icon_money = 205,
    icon_caret_down = 206,
    icon_caret_up = 207,
    icon_caret_left = 208,
    icon_caret_right = 209,
    icon_columns = 210,
    icon_unsorted = 211,
    icon_sort = 212,
    icon_sort_down = 213,
    icon_sort_desc = 214,
    icon_sort_up = 215,
    icon_sort_asc = 216,
    icon_envelope = 217,
    icon_linkedin = 218,
    icon_rotate_left = 219,
    icon_undo = 220,
    icon_legal = 221,
    icon_gavel = 222,
    icon_dashboard = 223,
    icon_tachometer = 224,
    icon_comment_o = 225,
    icon_comments_o = 226,
    icon_flash = 227,
    icon_bolt = 228,
    icon_sitemap = 229,
    icon_umbrella = 230,
    icon_paste = 231,
    icon_clipboard = 232,
    icon_lightbulb_o = 233,
    icon_exchange = 234,
    icon_cloud_download = 235,
    icon_cloud_upload = 236,
    icon_user_md = 237,
    icon_stethoscope = 238,
    icon_suitcase = 239,
    icon_bell_o = 240,
    icon_coffee = 241,
    icon_cutlery = 242,
    icon_file_text_o = 243,
    icon_building_o = 244,
    icon_hospital_o = 245,
    icon_ambulance = 246,
    icon_medkit = 247,
    icon_fighter_jet = 248,
    icon_beer = 249,
    icon_h_square = 250,
    icon_plus_square = 251,
    icon_angle_double_left = 252,
    icon_angle_double_right = 253,
    icon_angle_double_up = 254,
    icon_angle_double_down = 255,
    icon_angle_left = 256,
    icon_angle_right = 257,
    icon_angle_up = 258,
    icon_angle_down = 259,
    icon_desktop = 260,
    icon_laptop = 261,
    icon_tablet = 262,
    icon_mobile_phone = 263,
    icon_mobile = 264,
    icon_circle_o = 265,
    icon_quote_left = 266,
    icon_quote_right = 267,
    icon_spinner = 268,
    icon_circle = 269,
    icon_mail_reply = 270,
    icon_reply = 271,
    icon_github_alt = 272,
    icon_folder_o = 273,
    icon_folder_open_o = 274,
    icon_smile_o = 275,
    icon_frown_o = 276,
    icon_meh_o = 277,
    icon_gamepad = 278,
    icon_keyboard_o = 279,
    icon_flag_o = 280,
    icon_flag_checkered = 281,
    icon_terminal = 282,
    icon_code = 283,
    icon_mail_reply_all = 284,
    icon_reply_all = 285,
    icon_star_half_empty = 286,
    icon_star_half_full = 287,
    icon_star_half_o = 288,
    icon_location_arrow = 289,
    icon_crop = 290,
    icon_code_fork = 291,
    icon_unlink = 292,
    icon_chain_broken = 293,
    icon_question = 294,
    icon_info = 295,
    icon_exclamation = 296,
    icon_superscript = 297,
    icon_subscript = 298,
    icon_eraser = 299,
    icon_puzzle_piece = 300,
    icon_microphone = 301,
    icon_microphone_slash = 302,
    icon_shield = 303,
    icon_calendar_o = 304,
    icon_fire_extinguisher = 305,
    icon_rocket = 306,
    icon_maxcdn = 307,
    icon_chevron_circle_left = 308,
    icon_chevron_circle_right = 309,
    icon_chevron_circle_up = 310,
    icon_chevron_circle_down = 311,
    icon_html5 = 312,
    icon_css3 = 313,
    icon_anchor = 314,
    icon_unlock_alt = 315,
    icon_bullseye = 316,
    icon_ellipsis_h = 317,
    icon_ellipsis_v = 318,
    icon_rss_square = 319,
    icon_play_circle = 320,
    icon_ticket = 321,
    icon_minus_square = 322,
    icon_minus_square_o = 323,
    icon_level_up = 324,
    icon_level_down = 325,
    icon_check_square = 326,
    icon_pencil_square = 327,
    icon_external_link_square = 328,
    icon_share_square = 329,
    icon_compass = 330,
    icon_toggle_down = 331,
    icon_caret_square_o_down = 332,
    icon_toggle_up = 333,
    icon_caret_square_o_up = 334,
    icon_toggle_right = 335,
    icon_caret_square_o_right = 336,
    icon_euro = 337,
    icon_eur = 338,
    icon_gbp = 339,
    icon_dollar = 340,
    icon_usd = 341,
    icon_rupee = 342,
    icon_inr = 343,
    icon_cny = 344,
    icon_rmb = 345,
    icon_yen = 346,
    icon_jpy = 347,
    icon_ruble = 348,
    icon_rouble = 349,
    icon_rub = 350,
    icon_won = 351,
    icon_krw = 352,
    icon_bitcoin = 353,
    icon_btc = 354,
    icon_file = 355,
    icon_file_text = 356,
    icon_sort_alpha_asc = 357,
    icon_sort_alpha_desc = 358,
    icon_sort_amount_asc = 359,
    icon_sort_amount_desc = 360,
    icon_sort_numeric_asc = 361,
    icon_sort_numeric_desc = 362,
    icon_thumbs_up = 363,
    icon_thumbs_down = 364,
    icon_youtube_square = 365,
    icon_youtube = 366,
    icon_xing = 367,
    icon_xing_square = 368,
    icon_youtube_play = 369,
    icon_dropbox = 370,
    icon_stack_overflow = 371,
    icon_instagram = 372,
    icon_flickr = 373,
    icon_adn = 374,
    icon_bitbucket = 375,
    icon_bitbucket_square = 376,
    icon_tumblr = 377,
    icon_tumblr_square = 378,
    icon_long_arrow_down = 379,
    icon_long_arrow_up = 380,
    icon_long_arrow_left = 381,
    icon_long_arrow_right = 382,
    icon_apple = 383,
    icon_windows = 384,
    icon_android = 385,
    icon_linux = 386,
    icon_dribbble = 387,
    icon_skype = 388,
    icon_foursquare = 389,
    icon_trello = 390,
    icon_female = 391,
    icon_male = 392,
    icon_gittip = 393,
    icon_sun_o = 394,
    icon_moon_o = 395,
    icon_archive = 396,
    icon_bug = 397,
    icon_vk = 398,
    icon_weibo = 399,
    icon_renren = 400,
    icon_pagelines = 401,
    icon_stack_exchange = 402,
    icon_arrow_circle_o_right = 403,
    icon_arrow_circle_o_left = 404,
    icon_toggle_left = 405,
    icon_caret_square_o_left = 406,
    icon_dot_circle_o = 407,
    icon_wheelchair = 408,
    icon_vimeo_square = 409,
    icon_turkish_lira = 410,
    icon_try = 411,
    icon_plus_square_o = 412,
    icon_space_shuttle = 413,
    icon_slack = 414,
    icon_envelope_square = 415,
    icon_wordpress = 416,
    icon_openid = 417,
    icon_institution = 418,
    icon_bank = 419,
    icon_university = 420,
    icon_mortar_board = 421,
    icon_graduation_cap = 422,
    icon_yahoo = 423,
    icon_google = 424,
    icon_reddit = 425,
    icon_reddit_square = 426,
    icon_stumbleupon_circle = 427,
    icon_stumbleupon = 428,
    icon_delicious = 429,
    icon_digg = 430,
    icon_pied_piper_square = 431,
    icon_pied_piper = 432,
    icon_pied_piper_alt = 433,
    icon_drupal = 434,
    icon_joomla = 435,
    icon_language = 436,
    icon_fax = 437,
    icon_building = 438,
    icon_child = 439,
    icon_paw = 440,
    icon_spoon = 441,
    icon_cube = 442,
    icon_cubes = 443,
    icon_behance = 444,
    icon_behance_square = 445,
    icon_steam = 446,
    icon_steam_square = 447,
    icon_recycle = 448,
    icon_automobile = 449,
    icon_car = 450,
    icon_cab = 451,
    icon_taxi = 452,
    icon_tree = 453,
    icon_spotify = 454,
    icon_deviantart = 455,
    icon_soundcloud = 456,
    icon_database = 457,
    icon_file_pdf_o = 458,
    icon_file_word_o = 459,
    icon_file_excel_o = 460,
    icon_file_powerpoint_o = 461,
    icon_file_photo_o = 462,
    icon_file_picture_o = 463,
    icon_file_image_o = 464,
    icon_file_zip_o = 465,
    icon_file_archive_o = 466,
    icon_file_sound_o = 467,
    icon_file_audio_o = 468,
    icon_file_movie_o = 469,
    icon_file_video_o = 470,
    icon_file_code_o = 471,
    icon_vine = 472,
    icon_codepen = 473,
    icon_jsfiddle = 474,
    icon_life_bouy = 475,
    icon_life_saver = 476,
    icon_support = 477,
    icon_life_ring = 478,
    icon_circle_o_notch = 479,
    icon_ra = 480,
    icon_rebel = 481,
    icon_ge = 482,
    icon_empire = 483,
    icon_git_square = 484,
    icon_git = 485,
    icon_hacker_news = 486,
    icon_tencent_weibo = 487,
    icon_qq = 488,
    icon_wechat = 489,
    icon_weixin = 490,
    icon_send = 491,
    icon_paper_plane = 492,
    icon_send_o = 493,
    icon_paper_plane_o = 494,
    icon_history = 495,
    icon_circle_thin = 496,
    icon_header = 497,
    icon_paragraph = 498,
    icon_sliders = 499,
    icon_share_alt = 500,
    icon_share_alt_square = 501,
    icon_bomb = 502,
    icon_remove_sign = 503,
    icon_time = 504,
    icon_ok = 505,
}
export declare enum Icon {
    icon_glass = 0,
    icon_music = 1,
    icon_search = 2,
    icon_envelope_o = 3,
    icon_heart = 4,
    icon_star = 5,
    icon_star_o = 6,
    icon_user = 7,
    icon_film = 8,
    icon_th_large = 9,
    icon_th = 10,
    icon_th_list = 11,
    icon_check = 12,
    icon_remove = 13,
    icon_search_plus = 14,
    icon_search_minus = 15,
    icon_power_off = 16,
    icon_signal = 17,
    icon_gear = 18,
    icon_cog = 19,
    icon_trash_o = 20,
    icon_home = 21,
    icon_file_o = 22,
    icon_clock_o = 23,
    icon_road = 24,
    icon_download = 25,
    icon_arrow_circle_o_down = 26,
    icon_arrow_circle_o_up = 27,
    icon_inbox = 28,
    icon_play_circle_o = 29,
    icon_rotate_right = 30,
    icon_repeat = 31,
    icon_refresh = 32,
    icon_list_alt = 33,
    icon_lock = 34,
    icon_flag = 35,
    icon_headphones = 36,
    icon_volume_off = 37,
    icon_volume_down = 38,
    icon_volume_up = 39,
    icon_qrcode = 40,
    icon_barcode = 41,
    icon_tag = 42,
    icon_tags = 43,
    icon_book = 44,
    icon_bookmark = 45,
    icon_print = 46,
    icon_camera = 47,
    icon_font = 48,
    icon_bold = 49,
    icon_italic = 50,
    icon_text_height = 51,
    icon_text_width = 52,
    icon_align_left = 53,
    icon_align_center = 54,
    icon_align_right = 55,
    icon_align_justify = 56,
    icon_list = 57,
    icon_dedent = 58,
    icon_outdent = 59,
    icon_indent = 60,
    icon_video_camera = 61,
    icon_photo = 62,
    icon_image = 63,
    icon_picture_o = 64,
    icon_pencil = 65,
    icon_map_marker = 66,
    icon_adjust = 67,
    icon_tint = 68,
    icon_edit = 69,
    icon_pencil_square_o = 70,
    icon_share_square_o = 71,
    icon_check_square_o = 72,
    icon_arrows = 73,
    icon_step_backward = 74,
    icon_fast_backward = 75,
    icon_backward = 76,
    icon_play = 77,
    icon_pause = 78,
    icon_stop = 79,
    icon_forward = 80,
    icon_fast_forward = 81,
    icon_step_forward = 82,
    icon_eject = 83,
    icon_chevron_left = 84,
    icon_chevron_right = 85,
    icon_plus_circle = 86,
    icon_minus_circle = 87,
    icon_times_circle = 88,
    icon_check_circle = 89,
    icon_question_circle = 90,
    icon_info_circle = 91,
    icon_crosshairs = 92,
    icon_times_circle_o = 93,
    icon_check_circle_o = 94,
    icon_ban = 95,
    icon_arrow_left = 96,
    icon_arrow_right = 97,
    icon_arrow_up = 98,
    icon_arrow_down = 99,
    icon_mail_forward = 100,
    icon_share = 101,
    icon_expand = 102,
    icon_compress = 103,
    icon_plus = 104,
    icon_minus = 105,
    icon_asterisk = 106,
    icon_exclamation_circle = 107,
    icon_gift = 108,
    icon_leaf = 109,
    icon_fire = 110,
    icon_eye = 111,
    icon_eye_slash = 112,
    icon_warning = 113,
    icon_exclamation_triangle = 114,
    icon_plane = 115,
    icon_calendar = 116,
    icon_random = 117,
    icon_comment = 118,
    icon_magnet = 119,
    icon_chevron_up = 120,
    icon_chevron_down = 121,
    icon_retweet = 122,
    icon_shopping_cart = 123,
    icon_folder = 124,
    icon_folder_open = 125,
    icon_arrows_v = 126,
    icon_arrows_h = 127,
    icon_bar_chart_o = 128,
    icon_twitter_square = 129,
    icon_facebook_square = 130,
    icon_camera_retro = 131,
    icon_key = 132,
    icon_gears = 133,
    icon_cogs = 134,
    icon_comments = 135,
    icon_thumbs_o_up = 136,
    icon_thumbs_o_down = 137,
    icon_star_half = 138,
    icon_heart_o = 139,
    icon_sign_out = 140,
    icon_linkedin_square = 141,
    icon_thumb_tack = 142,
    icon_external_link = 143,
    icon_sign_in = 144,
    icon_trophy = 145,
    icon_github_square = 146,
    icon_upload = 147,
    icon_lemon_o = 148,
    icon_phone = 149,
    icon_square_o = 150,
    icon_bookmark_o = 151,
    icon_phone_square = 152,
    icon_twitter = 153,
    icon_facebook = 154,
    icon_github = 155,
    icon_unlock = 156,
    icon_credit_card = 157,
    icon_rss = 158,
    icon_hdd_o = 159,
    icon_bullhorn = 160,
    icon_bell = 161,
    icon_certificate = 162,
    icon_hand_o_right = 163,
    icon_hand_o_left = 164,
    icon_hand_o_up = 165,
    icon_hand_o_down = 166,
    icon_arrow_circle_left = 167,
    icon_arrow_circle_right = 168,
    icon_arrow_circle_up = 169,
    icon_arrow_circle_down = 170,
    icon_globe = 171,
    icon_wrench = 172,
    icon_tasks = 173,
    icon_filter = 174,
    icon_briefcase = 175,
    icon_arrows_alt = 176,
    icon_group = 177,
    icon_users = 178,
    icon_chain = 179,
    icon_link = 180,
    icon_cloud = 181,
    icon_flask = 182,
    icon_cut = 183,
    icon_scissors = 184,
    icon_copy = 185,
    icon_files_o = 186,
    icon_paperclip = 187,
    icon_save = 188,
    icon_floppy_o = 189,
    icon_square = 190,
    icon_naicon = 191,
    icon_reorder = 192,
    icon_bars = 193,
    icon_list_ul = 194,
    icon_list_ol = 195,
    icon_strikethrough = 196,
    icon_underline = 197,
    icon_table = 198,
    icon_magic = 199,
    icon_truck = 200,
    icon_pinterest = 201,
    icon_pinterest_square = 202,
    icon_google_plus_square = 203,
    icon_google_plus = 204,
    icon_money = 205,
    icon_caret_down = 206,
    icon_caret_up = 207,
    icon_caret_left = 208,
    icon_caret_right = 209,
    icon_columns = 210,
    icon_unsorted = 211,
    icon_sort = 212,
    icon_sort_down = 213,
    icon_sort_desc = 214,
    icon_sort_up = 215,
    icon_sort_asc = 216,
    icon_envelope = 217,
    icon_linkedin = 218,
    icon_rotate_left = 219,
    icon_undo = 220,
    icon_legal = 221,
    icon_gavel = 222,
    icon_dashboard = 223,
    icon_tachometer = 224,
    icon_comment_o = 225,
    icon_comments_o = 226,
    icon_flash = 227,
    icon_bolt = 228,
    icon_sitemap = 229,
    icon_umbrella = 230,
    icon_paste = 231,
    icon_clipboard = 232,
    icon_lightbulb_o = 233,
    icon_exchange = 234,
    icon_cloud_download = 235,
    icon_cloud_upload = 236,
    icon_user_md = 237,
    icon_stethoscope = 238,
    icon_suitcase = 239,
    icon_bell_o = 240,
    icon_coffee = 241,
    icon_cutlery = 242,
    icon_file_text_o = 243,
    icon_building_o = 244,
    icon_hospital_o = 245,
    icon_ambulance = 246,
    icon_medkit = 247,
    icon_fighter_jet = 248,
    icon_beer = 249,
    icon_h_square = 250,
    icon_plus_square = 251,
    icon_angle_double_left = 252,
    icon_angle_double_right = 253,
    icon_angle_double_up = 254,
    icon_angle_double_down = 255,
    icon_angle_left = 256,
    icon_angle_right = 257,
    icon_angle_up = 258,
    icon_angle_down = 259,
    icon_desktop = 260,
    icon_laptop = 261,
    icon_tablet = 262,
    icon_mobile_phone = 263,
    icon_mobile = 264,
    icon_circle_o = 265,
    icon_quote_left = 266,
    icon_quote_right = 267,
    icon_spinner = 268,
    icon_circle = 269,
    icon_mail_reply = 270,
    icon_reply = 271,
    icon_github_alt = 272,
    icon_folder_o = 273,
    icon_folder_open_o = 274,
    icon_smile_o = 275,
    icon_frown_o = 276,
    icon_meh_o = 277,
    icon_gamepad = 278,
    icon_keyboard_o = 279,
    icon_flag_o = 280,
    icon_flag_checkered = 281,
    icon_terminal = 282,
    icon_code = 283,
    icon_mail_reply_all = 284,
    icon_reply_all = 285,
    icon_star_half_empty = 286,
    icon_star_half_full = 287,
    icon_star_half_o = 288,
    icon_location_arrow = 289,
    icon_crop = 290,
    icon_code_fork = 291,
    icon_unlink = 292,
    icon_chain_broken = 293,
    icon_question = 294,
    icon_info = 295,
    icon_exclamation = 296,
    icon_superscript = 297,
    icon_subscript = 298,
    icon_eraser = 299,
    icon_puzzle_piece = 300,
    icon_microphone = 301,
    icon_microphone_slash = 302,
    icon_shield = 303,
    icon_calendar_o = 304,
    icon_fire_extinguisher = 305,
    icon_rocket = 306,
    icon_maxcdn = 307,
    icon_chevron_circle_left = 308,
    icon_chevron_circle_right = 309,
    icon_chevron_circle_up = 310,
    icon_chevron_circle_down = 311,
    icon_html5 = 312,
    icon_css3 = 313,
    icon_anchor = 314,
    icon_unlock_alt = 315,
    icon_bullseye = 316,
    icon_ellipsis_h = 317,
    icon_ellipsis_v = 318,
    icon_rss_square = 319,
    icon_play_circle = 320,
    icon_ticket = 321,
    icon_minus_square = 322,
    icon_minus_square_o = 323,
    icon_level_up = 324,
    icon_level_down = 325,
    icon_check_square = 326,
    icon_pencil_square = 327,
    icon_external_link_square = 328,
    icon_share_square = 329,
    icon_compass = 330,
    icon_toggle_down = 331,
    icon_caret_square_o_down = 332,
    icon_toggle_up = 333,
    icon_caret_square_o_up = 334,
    icon_toggle_right = 335,
    icon_caret_square_o_right = 336,
    icon_euro = 337,
    icon_eur = 338,
    icon_gbp = 339,
    icon_dollar = 340,
    icon_usd = 341,
    icon_rupee = 342,
    icon_inr = 343,
    icon_cny = 344,
    icon_rmb = 345,
    icon_yen = 346,
    icon_jpy = 347,
    icon_ruble = 348,
    icon_rouble = 349,
    icon_rub = 350,
    icon_won = 351,
    icon_krw = 352,
    icon_bitcoin = 353,
    icon_btc = 354,
    icon_file = 355,
    icon_file_text = 356,
    icon_sort_alpha_asc = 357,
    icon_sort_alpha_desc = 358,
    icon_sort_amount_asc = 359,
    icon_sort_amount_desc = 360,
    icon_sort_numeric_asc = 361,
    icon_sort_numeric_desc = 362,
    icon_thumbs_up = 363,
    icon_thumbs_down = 364,
    icon_youtube_square = 365,
    icon_youtube = 366,
    icon_xing = 367,
    icon_xing_square = 368,
    icon_youtube_play = 369,
    icon_dropbox = 370,
    icon_stack_overflow = 371,
    icon_instagram = 372,
    icon_flickr = 373,
    icon_adn = 374,
    icon_bitbucket = 375,
    icon_bitbucket_square = 376,
    icon_tumblr = 377,
    icon_tumblr_square = 378,
    icon_long_arrow_down = 379,
    icon_long_arrow_up = 380,
    icon_long_arrow_left = 381,
    icon_long_arrow_right = 382,
    icon_apple = 383,
    icon_windows = 384,
    icon_android = 385,
    icon_linux = 386,
    icon_dribbble = 387,
    icon_skype = 388,
    icon_foursquare = 389,
    icon_trello = 390,
    icon_female = 391,
    icon_male = 392,
    icon_gittip = 393,
    icon_sun_o = 394,
    icon_moon_o = 395,
    icon_archive = 396,
    icon_bug = 397,
    icon_vk = 398,
    icon_weibo = 399,
    icon_renren = 400,
    icon_pagelines = 401,
    icon_stack_exchange = 402,
    icon_arrow_circle_o_right = 403,
    icon_arrow_circle_o_left = 404,
    icon_toggle_left = 405,
    icon_caret_square_o_left = 406,
    icon_dot_circle_o = 407,
    icon_wheelchair = 408,
    icon_vimeo_square = 409,
    icon_turkish_lira = 410,
    icon_try = 411,
    icon_plus_square_o = 412,
    icon_space_shuttle = 413,
    icon_slack = 414,
    icon_envelope_square = 415,
    icon_wordpress = 416,
    icon_openid = 417,
    icon_institution = 418,
    icon_bank = 419,
    icon_university = 420,
    icon_mortar_board = 421,
    icon_graduation_cap = 422,
    icon_yahoo = 423,
    icon_google = 424,
    icon_reddit = 425,
    icon_reddit_square = 426,
    icon_stumbleupon_circle = 427,
    icon_stumbleupon = 428,
    icon_delicious = 429,
    icon_digg = 430,
    icon_pied_piper_square = 431,
    icon_pied_piper = 432,
    icon_pied_piper_alt = 433,
    icon_drupal = 434,
    icon_joomla = 435,
    icon_language = 436,
    icon_fax = 437,
    icon_building = 438,
    icon_child = 439,
    icon_paw = 440,
    icon_spoon = 441,
    icon_cube = 442,
    icon_cubes = 443,
    icon_behance = 444,
    icon_behance_square = 445,
    icon_steam = 446,
    icon_steam_square = 447,
    icon_recycle = 448,
    icon_automobile = 449,
    icon_car = 450,
    icon_cab = 451,
    icon_taxi = 452,
    icon_tree = 453,
    icon_spotify = 454,
    icon_deviantart = 455,
    icon_soundcloud = 456,
    icon_database = 457,
    icon_file_pdf_o = 458,
    icon_file_word_o = 459,
    icon_file_excel_o = 460,
    icon_file_powerpoint_o = 461,
    icon_file_photo_o = 462,
    icon_file_picture_o = 463,
    icon_file_image_o = 464,
    icon_file_zip_o = 465,
    icon_file_archive_o = 466,
    icon_file_sound_o = 467,
    icon_file_audio_o = 468,
    icon_file_movie_o = 469,
    icon_file_video_o = 470,
    icon_file_code_o = 471,
    icon_vine = 472,
    icon_codepen = 473,
    icon_jsfiddle = 474,
    icon_life_bouy = 475,
    icon_life_saver = 476,
    icon_support = 477,
    icon_life_ring = 478,
    icon_circle_o_notch = 479,
    icon_ra = 480,
    icon_rebel = 481,
    icon_ge = 482,
    icon_empire = 483,
    icon_git_square = 484,
    icon_git = 485,
    icon_hacker_news = 486,
    icon_tencent_weibo = 487,
    icon_qq = 488,
    icon_wechat = 489,
    icon_weixin = 490,
    icon_send = 491,
    icon_paper_plane = 492,
    icon_send_o = 493,
    icon_paper_plane_o = 494,
    icon_history = 495,
    icon_circle_thin = 496,
    icon_header = 497,
    icon_paragraph = 498,
    icon_sliders = 499,
    icon_share_alt = 500,
    icon_share_alt_square = 501,
    icon_bomb = 502,
    icon_remove_sign = 503,
    icon_time = 504,
    icon_ok = 505,
}
export declare enum ComboStyle {
    Default = 0,
    Primary = 1,
    Info = 2,
    Success = 3,
    Warning = 4,
    Danger = 5,
}
export declare enum ButtonAlignment {
    Left = 0,
    Right = 1,
}
export declare enum IconAlignment {
    Left = 0,
    Right = 1,
}
export declare enum PaginationAlignment {
    Left = 0,
    Center = 1,
    Right = 2,
}
export declare enum TabStyle {
    Tab = 0,
    Pill = 1,
}
export declare enum ItemAlignment {
    Left = 0,
    Right = 1,
}
export declare enum Cursor {
    Default = 0,
    Auto = 1,
    Crosshair = 2,
    E_resize = 3,
    Help = 4,
    Move = 5,
    N_resize = 6,
    NE_resize = 7,
    NW_resize = 8,
    Pointer = 9,
    Progress = 10,
    S_resize = 11,
    Se_resize = 12,
    Sw_resize = 13,
    Text = 14,
    W_resize = 15,
    Wait = 16,
    Inherit = 17,
}
export declare enum TextAlignment {
    Left = 0,
    Right = 1,
    Center = 2,
}
export declare enum BadgeStyle {
    Default = 0,
    Success = 1,
    Warning = 2,
    Important = 3,
    Info = 4,
}
export declare enum LabelStyle {
    Default = 0,
    Success = 1,
    Warning = 2,
    Important = 3,
    Info = 4,
}
export declare enum LabelPosition {
    Left = 0,
    Right = 1,
    TopCenter = 2,
    TopLeft = 3,
    TopRight = 4,
    BottomCenter = 5,
    BottomLeft = 6,
    BottomRight = 7,
}
export declare enum ComboDropMode {
    Up = 0,
    Down = 1,
    Auto = 2,
}
export declare enum NotificationPosition {
    TopLeft = 0,
    TopRight = 1,
    BottomLeft = 2,
    BottomRight = 3,
}
export declare enum Language {
    Afar = 0,
    Afrikaans = 1,
    Albanian = 2,
    Amharic = 3,
    Arabic = 4,
    Aragonese = 5,
    Armenian = 6,
    Assamese = 7,
    Aymara = 8,
    Azerbaijani = 9,
    Bashkir = 10,
    Basque = 11,
    Bengali = 12,
    Bhutani = 13,
    Bihari = 14,
    Bislama = 15,
    Breton = 16,
    Bulgarian = 17,
    Burmese = 18,
    Byelorussian = 19,
    Cambodian = 20,
    Catalan = 21,
    Cherokee = 22,
    Chewa = 23,
    Chinese = 24,
    Chinese_Simplified = 25,
    Chinese_Traditional = 26,
    Corsican = 27,
    Croatian = 28,
    Czech = 29,
    Danish = 30,
    Divehi = 31,
    Dutch = 32,
    Edo = 33,
    English = 34,
    Esperanto = 35,
    Estonian = 36,
    Faeroese = 37,
    Farsi = 38,
    Fiji = 39,
    Finnish = 40,
    Flemish = 41,
    French = 42,
    Frisian = 43,
    Fulfulde = 44,
    Galician = 45,
    Gaelic_Scottish = 46,
    Gaelic_Manx = 47,
    Georgian = 48,
    German = 49,
    Greek = 50,
    Greenlandic = 51,
    Guarani = 52,
    Gujarati = 53,
    Hausa = 54,
    Hawaiian = 55,
    Hebrew = 56,
    Hindi = 57,
    Hungarian = 58,
    Ibibio = 59,
    Icelandic = 60,
    Idoio = 61,
    Igbo = 62,
    Indonesian = 63,
    Interlingua = 64,
    Interlingue = 65,
    Inuktitut = 66,
    Inupiak = 67,
    Irish = 68,
    Italian = 69,
    Japanese = 70,
    Javanese = 71,
    Kannada = 72,
    Kanuri = 73,
    Kashmiri = 74,
    Kazakh = 75,
    Kirghiz = 76,
    Kirundi = 77,
    Konkani = 78,
    Korean = 79,
    Kurdish = 80,
    Laothian = 81,
    Latin = 82,
    Latvian = 83,
    Limburgish = 84,
    Lingala = 85,
    Lithuanian = 86,
    Macedonian = 87,
    Malagasy = 88,
    Malay = 89,
    Malayalam = 90,
    Maltese = 91,
    Maori = 92,
    Marathi = 93,
    Moldavian = 94,
    Mongolian = 95,
    Nauru = 96,
    Nepali = 97,
    Norwegian = 98,
    Occitan = 99,
    Oriya = 100,
    Oromo = 101,
    Papiamentu = 102,
    Pashto = 103,
    Polish = 104,
    Portuguese = 105,
    Punjabi = 106,
    Quechua = 107,
    Romanian = 108,
    Russian = 109,
    Sami = 110,
    Samoan = 111,
    Sangro = 112,
    Sanskrit = 113,
    Serbian = 114,
    Serbo_Croatian = 115,
    Sesotho = 116,
    Setswana = 117,
    Shona = 118,
    Sichuan = 119,
    Sindhi = 120,
    Sinhalese = 121,
    Siswati = 122,
    Slovak = 123,
    Slovenian = 124,
    Somali = 125,
    Spanish = 126,
    Sundanese = 127,
    Swahili = 128,
    Swedish = 129,
    Syriac = 130,
    Tagalog = 131,
    Tajik = 132,
    Tamazight = 133,
    Tamil = 134,
    Tatar = 135,
    Telugu = 136,
    Thai = 137,
    Tibetan = 138,
    Tigrinya = 139,
    Tonga = 140,
    Tsonga = 141,
    Turkish = 142,
    Turkmen = 143,
    Twi = 144,
    Uighur = 145,
    Ukrainian = 146,
    Urdu = 147,
    Uzbek = 148,
    Venda = 149,
    Vietnamese = 150,
    Wallon = 151,
    Welsh = 152,
    Wolof = 153,
    Xhosa = 154,
    Yoruba = 155,
    Zulu = 156,
}
export declare enum PopoverPlacement {
    Left = 0,
    Right = 1,
    Top = 2,
    Bottom = 3,
}
export declare enum TooltipPlacement {
    Left = 0,
    Right = 1,
    Top = 2,
    Bottom = 3,
}
export declare enum ModalEffects {
    SlideDown = 0,
    SlideUp = 1,
    FadeIn = 2,
    FadeOut = 3,
}
export declare enum GridRowStyle {
    Default = 0,
    Info = 1,
    Success = 2,
    Error = 3,
    Warning = 4,
}
export declare enum SelectedRowStyle {
    Default = 0,
    Info = 1,
    Success = 2,
    Error = 3,
    Warning = 4,
}
export declare function tryAndCatch(callback: () => void): void;
export declare function iconEnumToBootstrapStyle(icon: ButtonIcon): string;
export declare function getClassStyleHexColor(selector: any, style: string): string;
export declare function createComponentByElement(elem: Element, parent: VXContainMod.TContainer): TComponent;
export declare function convertaAnyToBoolean(val: any): any;
