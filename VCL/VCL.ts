//VCL.JS Main
import VXObjectMod = require("./VXObject");
/**TObject is the ultimate ancestor of all components.*/
export class TObject extends VXObjectMod.TObject { };
export class TTimer extends VXObjectMod.TTimer { };
export class TCollectionItem extends VXObjectMod.TCollectionItem { };

/**
    TCollection is a container for TCollectionItem objects.
**/
export class TCollection<T> extends VXObjectMod.TCollection<T>  { };
export class TList<T> extends VXObjectMod.TList<T>  { };



import VXCompMod = require("./VXComponent");
/**
* TComponent is the base class for all components that are visible at run time.
*/
export class TComponent extends VXCompMod.TComponent { };
export class TControl extends VXCompMod.TControl { };

import VXContainMod = require("./VXContainer");
export class TContainer extends VXContainMod.TContainer { };
export class TBootstrapRow extends VXContainMod.TBootstrapRow { };
export class TBootstrapRowFluid extends VXContainMod.TBootstrapRowFluid { };
export class TBootstrapSpan extends VXContainMod.TBootstrapSpan { };

/***
* Dynamically repeating controls and containers
*/
//export class TRepeater extends VXContainMod.TRepeater { };

import VXAppMod = require("./VXApplication");
export class TApplication extends VXAppMod.TApplication { };
export class TNavbarItem extends VXAppMod.TNavbarItem { };
export class TFacebookAPI extends VXAppMod.TFacebookAPI { };

import VXServerMod = require("./VXServer");
export class TServer extends VXServerMod.TServer { };

import VXPageMod = require("./VXPage");
export class TPage extends VXPageMod.TPage { };

import VXModalMod = require("./VXModal");
export class TModal extends VXModalMod.TModal { };
export class TModalBuilder extends VXModalMod.TModalBuilder { };

import VXTabMod = require("./VXTab");
export class TTabSheet extends VXTabMod.TTabSheet { };
export class TTabPage extends VXTabMod.TTabPage { };
export class TTabPanel extends VXTabMod.TTabPanel { };
export class TAccordionGroupPanel extends VXTabMod.TAccordionGroupPanel { };
export class TAccordionGroup extends VXTabMod.TAccordionGroup { };
export class TAccordion extends VXTabMod.TAccordion { };
export class TWizardButtons extends VXTabMod.TWizardButtons { };
export class TWizardButtonsStep extends VXTabMod.TWizardButtonsStep { };

//import VXPopupMod = require("./VXPopup");

import VXTextMod = require("./VXText");
export class TLabel extends VXTextMod.TLabel { };
export class TTagCloud extends VXTextMod.TTagCloud { };
export class TTagCloudItem extends VXTextMod.TTagCloudItem { };
export class TPillBox extends VXTextMod.TPillBox { };
export class TPillBoxItem extends VXTextMod.TPillBoxItem { };
export class TBreadCrumb extends VXTextMod.TBreadCrumb { };
export class TBreadCrumbItem extends VXTextMod.TBreadCrumbItem { }
export class TPagination extends VXTextMod.TPagination { };
export class TPaginationItem extends VXTextMod.TPaginationItem { }
export class TDBLabel extends VXTextMod.TDBLabel { };
export class TBadge extends VXTextMod.TBadge { };
export class TDBBadge extends VXTextMod.TDBBadge { };
export class TText extends VXTextMod.TText { };
export class TDBText extends VXTextMod.TDBText { };

import VXInputMod = require("./VXInput");
export class TDBInput extends VXInputMod.TDBInput { };
/**
Use a TInput to put a standard input control on a page. 
Input controls are used to retrieve text that users type. Input controls can also display text to the user.
**/
export class TInput extends VXInputMod.TInput { };
export class TInputTypeaHead extends VXInputMod.TInputTypeaHead { };
export class TTypeaHeadItem extends VXInputMod.TTypeaHeadItem { };
export class TTextArea extends VXInputMod.TTextArea { };
export class TDBLabeledText extends VXInputMod.TDBLabeledText { };
export class TDBTextArea extends VXInputMod.TDBTextArea { };
export class TInputNumeric extends VXInputMod.TInputNumeric { };
export class TDBInputNumeric extends VXInputMod.TDBInputNumeric { };

import VXImageMod = require("./VXImage");
export class TImage extends VXImageMod.TImage { };
export class TIcon extends VXImageMod.TIcon { };
export class TGravatarImage extends VXImageMod.TGravatarImage { };

import VXMenuMod = require("./VXMenu");
export class TMenuItem extends VXMenuMod.TMenuItem { };
export class TMenuItemCollection<TMenuItem> extends VXMenuMod.TMenuItemCollection<TMenuItem> { };


import VXQueryMod = require("./VXQuery");
/**
* TQuery represents a dataset with a result set that is based on an SQL statement.
*/
export class TQuery extends VXQueryMod.TQuery { };

/**
* TQuery represents a dataset with a result set that is based on a remoteSQL statement.
*/
export class TQueryRemote extends VXQueryMod.TQueryRemote { };
export class TQueryParam extends VXQueryMod.TQueryParam { };


import VXSSASMod = require("./VXOlapSSAS");
export class TOlapSSAS extends VXSSASMod.TOlapSSAS { };


import VXButtonMod = require("./VXButton");
/**
* Button is a push button control.
* Use TButton to put a standard push button on a page or modalform
*/
export class TButton extends VXButtonMod.TButton { };
export class TToggleSwitch extends VXButtonMod.TToggleSwitch { };
export class TFacebookButton extends VXButtonMod.TFacebookButton { };


import VXDBGridMod = require("./VXDBGrid");
/**
    TDBGrid displays and manipulates records from a dataset in a tabular grid.
**/
export class TDBGrid extends VXDBGridMod.TDBGrid { };
export class TDBGridColumn extends VXDBGridMod.TDBGridColumn { };
export class TGrid extends VXDBGridMod.TGrid { };


import VXDatasetMod = require("./VXDataset");
/**
* TDataset is the base class for all dataset components that represent data in rows and columns.
*/
export class TDataset extends VXDatasetMod.TDataset { };
export class TClientDataset extends VXDatasetMod.TClientDataset { };
export class TNestedClientDataset extends VXDatasetMod.TNestedClientDataset { };

import VXComboboxMod = require("./VXCombo");
export class TComboItem extends VXComboboxMod.TComboItem { };

/**
TComboBox combines an edit box with a scrollable list.
**/
export class TCombobox extends VXComboboxMod.TCombobox { };
export class TDBCombobox extends VXComboboxMod.TDBCombobox { };


import VXlistboxMod = require("./VXListBox");

/**
TListBox displays a collection of items in a scrollable list.
**/
export class TListBox extends VXlistboxMod.TListbox { };
export class TTree extends VXlistboxMod.TTree { };
export class TTreeNodeItem extends VXlistboxMod.TTreeNodeItem { };

import VXSideBarMod = require("./VXSideBar");
export class TSideBar extends VXSideBarMod.TSideBar { };
export class TNavBar extends VXSideBarMod.TNavBar { };


import VXWellMod = require("./VXWell");
export class TWell extends VXWellMod.TWell { };
export class TCarousel extends VXWellMod.TCarousel { };
export class TGoogleMap extends VXWellMod.TGoogleMap { };
export class TGoogleMapMarker extends VXWellMod.TGoogleMapMarker { };
export class TGoogleMapHeatmapMarker extends VXWellMod.TGoogleMapHeatmapMarker { };
export class TPanel extends VXWellMod.TPanel { }; 
export class TPanelButton extends VXWellMod.TPanelButton { };

export class TGraphEditor extends VXWellMod.TGraphEditor { };
export class GraphNode extends VXWellMod.GraphNode { };
export class GraphEdge extends VXWellMod.GraphEdge { };
export class GraphElement extends VXWellMod.GraphElement { };
export class GraphEditorArborLayout extends VXWellMod.GraphEditorArborLayout { };
export class GraphEditorCOSELayout extends VXWellMod.GraphEditorArborLayout { };
export class GraphEditorBreadthfirstLayout extends VXWellMod.GraphEditorBreadthfirstLayout { };
export class GraphEditorConcentricLayout extends VXWellMod.GraphEditorConcentricLayout { };
export class GraphEditorCircleLayout extends VXWellMod.GraphEditorCircleLayout { };
export class GraphEditorGridLayout extends VXWellMod.GraphEditorGridLayout { };
export class GraphEditorPresetLayout extends VXWellMod.GraphEditorPresetLayout { };
export class GraphEditorRandomLayout extends VXWellMod.GraphEditorRandomLayout { };
export class GraphEditorNullLayout extends VXWellMod.GraphEditorNullLayout { };

export enum GraphNodeShapeEnum {
    rectangle, roundrectangle, ellipse, triangle, pentagon, hexagon, heptagon, octagon, star
};

export enum GraphNodeLabelHorizAlignmentEnum { left, center, right };

export enum GraphNodeLabelVerticalAlignmentEnum { top, center, bottom };

export enum GraphEdgeCurveStyleEnum { bezier, haystack };

export enum GraphEdgeLineStyleEnum { solid, dotted, dashed };

export enum GraphEdgeArrowTypeEnum { tee, triangle, square, circle, diamond, none };

export enum GraphEdgeArrowFillEnum { filled, hollow };

export enum GraphTipPositionVEnum {Top,Center,Bottom};

export enum GraphTipPositionHEnum {Left,Center,Right};




import VXCheckboxMod = require("./VXCheckBox");
export class TCheckBox extends VXCheckboxMod.TCheckBox { };
export class TRadioButton extends VXCheckboxMod.TRadioButton { };
export class TDBCheckBox extends VXCheckboxMod.TDBCheckBox { };
export class TVerticalCheckBoxList extends VXCheckboxMod.TVerticalCheckBoxList { };
export class TVerticalCheckBoxItem extends VXCheckboxMod.TVerticalCheckBoxItem { };

import VXProgressMod = require("./VXProgressBar");
export class TProgressBar extends VXProgressMod.TProgressBar { };
export class TRatingStar extends VXProgressMod.TRatingStart { };
export class TSlider extends VXProgressMod.TSlider { };
export class TRangeSlider extends VXProgressMod.TRangeSlider { };





import VXAlertMod = require("./VXAlert");
/**
* Wrap any text and an optional dismiss button for a basic warning alert message.
*/
export class TAlert extends VXAlertMod.TAlert { };
export class TNotification extends VXAlertMod.TNotification { };


import VXGougeMod = require("./VXGauge");
export class TGauge extends VXGougeMod.TGauge { };



import VXVXBarMod = require("./VXChartBar");
export class TChartBar extends VXVXBarMod.TChartBar { };
export class TDBChartBar extends VXVXBarMod.TDBChartBar { };
export class TChartBullet extends VXVXBarMod.TChartBullet { };

//import VXVXGraphMod = require("./VXRGraphBase");
//export class TGraphBar extends VXVXGraphMod.TGraphBar { };

import VXVXBarVVMod = require("./VXChartBarH");
export class TChartBarH extends VXVXBarVVMod.TChartBarH { };
export class TDBChartBarH extends VXVXBarVVMod.TDBChartBarH { };

import VXLineMod = require("./VXChartLine");
export class TChartLine extends VXLineMod.TChartLine { };
export class TDBChartLine extends VXLineMod.TDBChartLine { };
export class TChartArea extends VXLineMod.TChartArea { };
export class TDBChartArea extends VXLineMod.TDBChartArea { };

import VXDonutMod = require("./VXChartDonut");
export class TChartDonut extends VXDonutMod.TChartDonut { };
export class TDBChartDonut extends VXDonutMod.TDBChartDonut { };


import VXChartMod = require("./VXChartBase");
export class TDountValue extends VXChartMod.TDountValue { };
export class TBarValue extends VXChartMod.TBarValue { };
export class TLineValue extends VXChartMod.TLineValue { };
export class TDotValue extends VXChartMod.TDotValue { };
export class TSelectedChartValue extends VXChartMod.TSelectedChartValue { };

import VXDotMod = require("./VXChartDot");
export class TChartDot extends VXDotMod.TChartDot { };
export class TChartBubble extends VXDotMod.TChartBubble { };

import VXconstMod = require("./VXConst");

import VXInputDateMod = require("./VXDateInput");
export class TInputDate extends VXInputDateMod.TDateInput { };
export class TDBInputDate extends VXInputDateMod.TDBDateInput { };
export class TInputTime extends VXInputDateMod.TInputTime { };
export class TDateButton extends VXInputDateMod.TDateButton { };


import VXSparkMod = require("./VXSparkLine");
export class TSparkBar extends VXSparkMod.TSparkBar { };
export class TSparkLine extends VXSparkMod.TSparkLine { };
export class TSparkPie extends VXSparkMod.TSparkPie { };
export class TDBSparkBar extends VXSparkMod.TDBSparkBar { };
export class TDBSparkLine extends VXSparkMod.TDBSparkLine { };
export class TDBSparkPie extends VXSparkMod.TDBSparkPie { };

import VXGridSterMod = require("./VXGridSter");
export class TWidgetGrid extends VXGridSterMod.TWidgetGrid { };
export class TWidgetPanel extends VXGridSterMod.TWdgetPanel { };

export class TConst extends VXconstMod.TConst { };

/**
* Represents application-level information.
* By default, when a new project is created, VCL.JS constructs an TApplication object and assigns it to the Application variable in the VCL module. 
* Application has several properties that can be used to get information about an application while it runs.
*/
export var  Application: TApplication = new TApplication();
export var  FacebookAPI: TFacebookAPI = new TFacebookAPI();

export var  Global: any = {};
export enum CalendarType { Daily, Monthly }
export enum PasswordStrength { LOW, MEDIUM, HIGH, EXTREME }
export enum SortColumnOrder { Ascending, Descending }
export enum SortMode { Default, Custom }

export enum SliderOrientation { vertical, horizontal };

export enum SliderHandle { round, triangle, square };

export enum SliderSelection { before, after, none };

export enum ButtonStyle {
    Default,
    Primary,
    Info,
    Success,
    Warning,
    Danger,
    Link
}

export enum ColumnType {
    Text,
    Icon,
    Image
}


export enum PagerButtonStyle {
    Default,
    Primary,
    Info,
    Success,
    Warning,
    Danger,
    Link
}


export enum ShadowOptions {
    None,
    Perspective,
    Raised,
    Lifted,
    Side_hz_1,
    Side_hz_2,
    Side_vt_1,
    Side_vt_2
}

export enum PagerButtonSize {
    Default,
    Large,
    Small,
    Mini,
}


export enum InputStyle {
    Default,
    Info,
    Success,
    Warning,
    Error
}


export enum HeaderStyle {
    Default,
    Primary,
    Info,
    Success,
    Warning,
    Danger,
    Transparent
}

export enum FacebookLoginState {
    Connected,
    NotAuthorized,
    NotConnected
}


export enum BaseColor {
    Default,
    Primary,
    Info,
    Success,
    Warning,
    Danger
}

export enum DeviceType {
    LargeDisplay,
    Tablet,
    Phone,
    Default
}


export enum TextStyle {
    Default,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    lead,
    small,
    strong,
}

export enum AggergateFunction {
    None,
    Sum,
    Max,
    Min,
    Avg,
}


export enum HeaderTextStyle {
    Default,
    Strong,
    Small
}

export enum HeaderTextAlignment {
    Left,
    Right,
    Center
}


export enum Overflow {
    Visible,
    Hidden,
    Scroll,
    Auto
}

/*The overflow property specifies what happens if content overflows an element's box*/
export enum Overflow_X {
    /*The overflow is not clipped. It renders outside the element's box. This is default*/
    Visible,
    /*The overflow is clipped, and the rest of the content will be invisible*/
    Hidden,
    /*The overflow is clipped, but a scroll-bar is added to see the rest of the content*/
    Scroll,
    /*If overflow is clipped, a scroll-bar should be added to see the rest of the content*/
    Auto
}

/*The overflow property specifies what happens if content overflows an element's box*/
export enum Overflow_Y {
    /*The overflow is not clipped. It renders outside the element's box. This is default*/
    Visible,
    /*The overflow is clipped, and the rest of the content will be invisible*/
    Hidden,
    /*The overflow is clipped, but a scroll-bar is added to see the rest of the content*/
    Scroll,
    /*If overflow is clipped, a scroll-bar should be added to see the rest of the content*/
    Auto
}


export enum PagerAlignment {
    Left,
    Right,
}


export enum AlertStyle {
    Default,
    Info,
    Success,
    Error,
    Danger
}

export enum TreeNodeStyle {
    Default,
    Info,
    Success,
    Warning,
    Important,
    Inverse
}


export enum PillBoxStyle {
    Default,
    Info,
    Success,
    Warning,
    Important
}

export enum ProgressBarStyle {
    Default,
    Primary,
    Info,
    Success,
    Warning,
    Danger
}


export enum ButtonSize {
    Default,
    Large,
    Small,
    Mini,
}

export enum PaginationSize {
    Default,
    Large,
    Small,
    Mini,
}

export enum SwitchSize {
    Default,
    Large,
    Small,
    Mini,
}

export interface iTranslatable {
    Localizable : boolean;
}

export enum ButtonIcon {
    icon_glass, icon_music, icon_search, icon_envelope_o, icon_heart, icon_star, icon_star_o, icon_user,
    icon_film, icon_th_large, icon_th, icon_th_list, icon_check, icon_remove, icon_search_plus, icon_search_minus,
    icon_power_off, icon_signal, icon_gear,icon_cog, icon_trash_o, icon_home, icon_file_o, icon_clock_o,
    icon_road, icon_download, icon_arrow_circle_o_down, icon_arrow_circle_o_up, icon_inbox, icon_play_circle_o, icon_rotate_right,icon_repeat,
    icon_refresh, icon_list_alt, icon_lock, icon_flag, icon_headphones, icon_volume_off, icon_volume_down, icon_volume_up,
    icon_qrcode, icon_barcode, icon_tag, icon_tags, icon_book, icon_bookmark, icon_print, icon_camera,
    icon_font, icon_bold, icon_italic, icon_text_height, icon_text_width, icon_align_left, icon_align_center, icon_align_right,
    icon_align_justify, icon_list, icon_dedent,icon_outdent, icon_indent, icon_video_camera, icon_photo,icon_image,
    icon_picture_o, icon_pencil, icon_map_marker, icon_adjust, icon_tint, icon_edit,icon_pencil_square_o, icon_share_square_o,
    icon_check_square_o, icon_arrows, icon_step_backward, icon_fast_backward, icon_backward, icon_play, icon_pause, icon_stop,
    icon_forward, icon_fast_forward, icon_step_forward, icon_eject, icon_chevron_left, icon_chevron_right, icon_plus_circle, icon_minus_circle,
    icon_times_circle, icon_check_circle, icon_question_circle, icon_info_circle, icon_crosshairs, icon_times_circle_o, icon_check_circle_o, icon_ban,
    icon_arrow_left, icon_arrow_right, icon_arrow_up, icon_arrow_down, icon_mail_forward,icon_share, icon_expand, icon_compress,
    icon_plus, icon_minus, icon_asterisk, icon_exclamation_circle, icon_gift, icon_leaf, icon_fire, icon_eye,
    icon_eye_slash, icon_warning,icon_exclamation_triangle, icon_plane, icon_calendar, icon_random, icon_comment, icon_magnet,
    icon_chevron_up, icon_chevron_down, icon_retweet, icon_shopping_cart, icon_folder, icon_folder_open, icon_arrows_v, icon_arrows_h,
    icon_bar_chart_o, icon_twitter_square, icon_facebook_square, icon_camera_retro, icon_key, icon_gears,icon_cogs, icon_comments,
    icon_thumbs_o_up, icon_thumbs_o_down, icon_star_half, icon_heart_o, icon_sign_out, icon_linkedin_square, icon_thumb_tack, icon_external_link,
    icon_sign_in, icon_trophy, icon_github_square, icon_upload, icon_lemon_o, icon_phone, icon_square_o, icon_bookmark_o,
    icon_phone_square, icon_twitter, icon_facebook, icon_github, icon_unlock, icon_credit_card, icon_rss, icon_hdd_o,
    icon_bullhorn, icon_bell, icon_certificate, icon_hand_o_right, icon_hand_o_left, icon_hand_o_up, icon_hand_o_down, icon_arrow_circle_left,
    icon_arrow_circle_right, icon_arrow_circle_up, icon_arrow_circle_down, icon_globe, icon_wrench, icon_tasks, icon_filter, icon_briefcase,
    icon_arrows_alt, icon_group,icon_users, icon_chain,icon_link, icon_cloud, icon_flask, icon_cut,
    icon_scissors, icon_copy,icon_files_o, icon_paperclip, icon_save,icon_floppy_o, icon_square, icon_naicon,
    icon_reorder,icon_bars, icon_list_ul, icon_list_ol, icon_strikethrough, icon_underline, icon_table, icon_magic,
    icon_truck, icon_pinterest, icon_pinterest_square, icon_google_plus_square, icon_google_plus, icon_money, icon_caret_down, icon_caret_up,
    icon_caret_left, icon_caret_right, icon_columns, icon_unsorted,icon_sort, icon_sort_down,icon_sort_desc, icon_sort_up,
    icon_sort_asc, icon_envelope, icon_linkedin, icon_rotate_left,icon_undo, icon_legal,icon_gavel, icon_dashboard,
    icon_tachometer, icon_comment_o, icon_comments_o, icon_flash,icon_bolt, icon_sitemap, icon_umbrella, icon_paste,
    icon_clipboard, icon_lightbulb_o, icon_exchange, icon_cloud_download, icon_cloud_upload, icon_user_md, icon_stethoscope, icon_suitcase,
    icon_bell_o, icon_coffee, icon_cutlery, icon_file_text_o, icon_building_o, icon_hospital_o, icon_ambulance, icon_medkit,
    icon_fighter_jet, icon_beer, icon_h_square, icon_plus_square, icon_angle_double_left, icon_angle_double_right, icon_angle_double_up, icon_angle_double_down,
    icon_angle_left, icon_angle_right, icon_angle_up, icon_angle_down, icon_desktop, icon_laptop, icon_tablet, icon_mobile_phone,
    icon_mobile, icon_circle_o, icon_quote_left, icon_quote_right, icon_spinner, icon_circle, icon_mail_reply,icon_reply,
    icon_github_alt, icon_folder_o, icon_folder_open_o, icon_smile_o, icon_frown_o, icon_meh_o, icon_gamepad, icon_keyboard_o,
    icon_flag_o, icon_flag_checkered, icon_terminal, icon_code, icon_mail_reply_all,icon_reply_all, icon_star_half_empty,icon_star_half_full,
    icon_star_half_o, icon_location_arrow, icon_crop, icon_code_fork, icon_unlink,icon_chain_broken, icon_question, icon_info,
    icon_exclamation, icon_superscript, icon_subscript, icon_eraser, icon_puzzle_piece, icon_microphone, icon_microphone_slash, icon_shield,
    icon_calendar_o, icon_fire_extinguisher, icon_rocket, icon_maxcdn, icon_chevron_circle_left, icon_chevron_circle_right, icon_chevron_circle_up, icon_chevron_circle_down,
    icon_html5, icon_css3, icon_anchor, icon_unlock_alt, icon_bullseye, icon_ellipsis_h, icon_ellipsis_v, icon_rss_square,
    icon_play_circle, icon_ticket, icon_minus_square, icon_minus_square_o, icon_level_up, icon_level_down, icon_check_square, icon_pencil_square,
    icon_external_link_square, icon_share_square, icon_compass, icon_toggle_down,icon_caret_square_o_down, icon_toggle_up,icon_caret_square_o_up, icon_toggle_right,
    icon_caret_square_o_right, icon_euro,icon_eur, icon_gbp, icon_dollar,icon_usd, icon_rupee,icon_inr,
    icon_cny,icon_rmb,icon_yen,icon_jpy, icon_ruble,icon_rouble,icon_rub, icon_won,
    icon_krw, icon_bitcoin,icon_btc, icon_file, icon_file_text, icon_sort_alpha_asc, icon_sort_alpha_desc, icon_sort_amount_asc,
    icon_sort_amount_desc, icon_sort_numeric_asc, icon_sort_numeric_desc, icon_thumbs_up, icon_thumbs_down, icon_youtube_square, icon_youtube, icon_xing,
    icon_xing_square, icon_youtube_play, icon_dropbox, icon_stack_overflow, icon_instagram, icon_flickr, icon_adn, icon_bitbucket,
    icon_bitbucket_square, icon_tumblr, icon_tumblr_square, icon_long_arrow_down, icon_long_arrow_up, icon_long_arrow_left, icon_long_arrow_right, icon_apple,
    icon_windows, icon_android, icon_linux, icon_dribbble, icon_skype, icon_foursquare, icon_trello, icon_female,
    icon_male, icon_gittip, icon_sun_o, icon_moon_o, icon_archive, icon_bug, icon_vk, icon_weibo,
    icon_renren, icon_pagelines, icon_stack_exchange, icon_arrow_circle_o_right, icon_arrow_circle_o_left, icon_toggle_left,icon_caret_square_o_left, icon_dot_circle_o,
    icon_wheelchair, icon_vimeo_square, icon_turkish_lira,icon_try, icon_plus_square_o, icon_space_shuttle, icon_slack, icon_envelope_square,
    icon_wordpress, icon_openid, icon_institution,icon_bank,icon_university, icon_mortar_board,icon_graduation_cap, icon_yahoo,
    icon_google, icon_reddit, icon_reddit_square, icon_stumbleupon_circle, icon_stumbleupon, icon_delicious, icon_digg, icon_pied_piper_square,
    icon_pied_piper, icon_pied_piper_alt, icon_drupal, icon_joomla, icon_language, icon_fax, icon_building, icon_child,
    icon_paw, icon_spoon, icon_cube, icon_cubes, icon_behance, icon_behance_square, icon_steam, icon_steam_square,
    icon_recycle, icon_automobile,icon_car, icon_cab,icon_taxi, icon_tree, icon_spotify, icon_deviantart,
    icon_soundcloud, icon_database, icon_file_pdf_o, icon_file_word_o, icon_file_excel_o, icon_file_powerpoint_o, icon_file_photo_o,icon_file_picture_o,
    icon_file_image_o, icon_file_zip_o,icon_file_archive_o, icon_file_sound_o,icon_file_audio_o, icon_file_movie_o,icon_file_video_o, icon_file_code_o,
    icon_vine, icon_codepen, icon_jsfiddle, icon_life_bouy,icon_life_saver,icon_support,icon_life_ring, icon_circle_o_notch,
    icon_ra,icon_rebel, icon_ge,icon_empire, icon_git_square, icon_git, icon_hacker_news, icon_tencent_weibo,
    icon_qq, icon_wechat,icon_weixin, icon_send,icon_paper_plane, icon_send_o,icon_paper_plane_o, icon_history,
    icon_circle_thin, icon_header, icon_paragraph, icon_sliders, icon_share_alt, icon_share_alt_square, icon_bomb, icon_remove_sign, icon_time,
    icon_ok
}

export enum Icon {
    icon_glass, icon_music, icon_search, icon_envelope_o, icon_heart, icon_star, icon_star_o, icon_user,
    icon_film, icon_th_large, icon_th, icon_th_list, icon_check, icon_remove, icon_search_plus, icon_search_minus,
    icon_power_off, icon_signal, icon_gear,icon_cog, icon_trash_o, icon_home, icon_file_o, icon_clock_o,
    icon_road, icon_download, icon_arrow_circle_o_down, icon_arrow_circle_o_up, icon_inbox, icon_play_circle_o, icon_rotate_right,icon_repeat,
    icon_refresh, icon_list_alt, icon_lock, icon_flag, icon_headphones, icon_volume_off, icon_volume_down, icon_volume_up,
    icon_qrcode, icon_barcode, icon_tag, icon_tags, icon_book, icon_bookmark, icon_print, icon_camera,
    icon_font, icon_bold, icon_italic, icon_text_height, icon_text_width, icon_align_left, icon_align_center, icon_align_right,
    icon_align_justify, icon_list, icon_dedent,icon_outdent, icon_indent, icon_video_camera, icon_photo,icon_image,
    icon_picture_o, icon_pencil, icon_map_marker, icon_adjust, icon_tint, icon_edit,icon_pencil_square_o, icon_share_square_o,
    icon_check_square_o, icon_arrows, icon_step_backward, icon_fast_backward, icon_backward, icon_play, icon_pause, icon_stop,
    icon_forward, icon_fast_forward, icon_step_forward, icon_eject, icon_chevron_left, icon_chevron_right, icon_plus_circle, icon_minus_circle,
    icon_times_circle, icon_check_circle, icon_question_circle, icon_info_circle, icon_crosshairs, icon_times_circle_o, icon_check_circle_o, icon_ban,
    icon_arrow_left, icon_arrow_right, icon_arrow_up, icon_arrow_down, icon_mail_forward,icon_share, icon_expand, icon_compress,
    icon_plus, icon_minus, icon_asterisk, icon_exclamation_circle, icon_gift, icon_leaf, icon_fire, icon_eye,
    icon_eye_slash, icon_warning,icon_exclamation_triangle, icon_plane, icon_calendar, icon_random, icon_comment, icon_magnet,
    icon_chevron_up, icon_chevron_down, icon_retweet, icon_shopping_cart, icon_folder, icon_folder_open, icon_arrows_v, icon_arrows_h,
    icon_bar_chart_o, icon_twitter_square, icon_facebook_square, icon_camera_retro, icon_key, icon_gears,icon_cogs, icon_comments,
    icon_thumbs_o_up, icon_thumbs_o_down, icon_star_half, icon_heart_o, icon_sign_out, icon_linkedin_square, icon_thumb_tack, icon_external_link,
    icon_sign_in, icon_trophy, icon_github_square, icon_upload, icon_lemon_o, icon_phone, icon_square_o, icon_bookmark_o,
    icon_phone_square, icon_twitter, icon_facebook, icon_github, icon_unlock, icon_credit_card, icon_rss, icon_hdd_o,
    icon_bullhorn, icon_bell, icon_certificate, icon_hand_o_right, icon_hand_o_left, icon_hand_o_up, icon_hand_o_down, icon_arrow_circle_left,
    icon_arrow_circle_right, icon_arrow_circle_up, icon_arrow_circle_down, icon_globe, icon_wrench, icon_tasks, icon_filter, icon_briefcase,
    icon_arrows_alt, icon_group,icon_users, icon_chain,icon_link, icon_cloud, icon_flask, icon_cut,
    icon_scissors, icon_copy,icon_files_o, icon_paperclip, icon_save,icon_floppy_o, icon_square, icon_naicon,
    icon_reorder,icon_bars, icon_list_ul, icon_list_ol, icon_strikethrough, icon_underline, icon_table, icon_magic,
    icon_truck, icon_pinterest, icon_pinterest_square, icon_google_plus_square, icon_google_plus, icon_money, icon_caret_down, icon_caret_up,
    icon_caret_left, icon_caret_right, icon_columns, icon_unsorted,icon_sort, icon_sort_down,icon_sort_desc, icon_sort_up,
    icon_sort_asc, icon_envelope, icon_linkedin, icon_rotate_left,icon_undo, icon_legal,icon_gavel, icon_dashboard,
    icon_tachometer, icon_comment_o, icon_comments_o, icon_flash,icon_bolt, icon_sitemap, icon_umbrella, icon_paste,
    icon_clipboard, icon_lightbulb_o, icon_exchange, icon_cloud_download, icon_cloud_upload, icon_user_md, icon_stethoscope, icon_suitcase,
    icon_bell_o, icon_coffee, icon_cutlery, icon_file_text_o, icon_building_o, icon_hospital_o, icon_ambulance, icon_medkit,
    icon_fighter_jet, icon_beer, icon_h_square, icon_plus_square, icon_angle_double_left, icon_angle_double_right, icon_angle_double_up, icon_angle_double_down,
    icon_angle_left, icon_angle_right, icon_angle_up, icon_angle_down, icon_desktop, icon_laptop, icon_tablet, icon_mobile_phone,
    icon_mobile, icon_circle_o, icon_quote_left, icon_quote_right, icon_spinner, icon_circle, icon_mail_reply,icon_reply,
    icon_github_alt, icon_folder_o, icon_folder_open_o, icon_smile_o, icon_frown_o, icon_meh_o, icon_gamepad, icon_keyboard_o,
    icon_flag_o, icon_flag_checkered, icon_terminal, icon_code, icon_mail_reply_all,icon_reply_all, icon_star_half_empty,icon_star_half_full,
    icon_star_half_o, icon_location_arrow, icon_crop, icon_code_fork, icon_unlink,icon_chain_broken, icon_question, icon_info,
    icon_exclamation, icon_superscript, icon_subscript, icon_eraser, icon_puzzle_piece, icon_microphone, icon_microphone_slash, icon_shield,
    icon_calendar_o, icon_fire_extinguisher, icon_rocket, icon_maxcdn, icon_chevron_circle_left, icon_chevron_circle_right, icon_chevron_circle_up, icon_chevron_circle_down,
    icon_html5, icon_css3, icon_anchor, icon_unlock_alt, icon_bullseye, icon_ellipsis_h, icon_ellipsis_v, icon_rss_square,
    icon_play_circle, icon_ticket, icon_minus_square, icon_minus_square_o, icon_level_up, icon_level_down, icon_check_square, icon_pencil_square,
    icon_external_link_square, icon_share_square, icon_compass, icon_toggle_down,icon_caret_square_o_down, icon_toggle_up,icon_caret_square_o_up, icon_toggle_right,
    icon_caret_square_o_right, icon_euro,icon_eur, icon_gbp, icon_dollar,icon_usd, icon_rupee,icon_inr,
    icon_cny,icon_rmb,icon_yen,icon_jpy, icon_ruble,icon_rouble,icon_rub, icon_won,
    icon_krw, icon_bitcoin,icon_btc, icon_file, icon_file_text, icon_sort_alpha_asc, icon_sort_alpha_desc, icon_sort_amount_asc,
    icon_sort_amount_desc, icon_sort_numeric_asc, icon_sort_numeric_desc, icon_thumbs_up, icon_thumbs_down, icon_youtube_square, icon_youtube, icon_xing,
    icon_xing_square, icon_youtube_play, icon_dropbox, icon_stack_overflow, icon_instagram, icon_flickr, icon_adn, icon_bitbucket,
    icon_bitbucket_square, icon_tumblr, icon_tumblr_square, icon_long_arrow_down, icon_long_arrow_up, icon_long_arrow_left, icon_long_arrow_right, icon_apple,
    icon_windows, icon_android, icon_linux, icon_dribbble, icon_skype, icon_foursquare, icon_trello, icon_female,
    icon_male, icon_gittip, icon_sun_o, icon_moon_o, icon_archive, icon_bug, icon_vk, icon_weibo,
    icon_renren, icon_pagelines, icon_stack_exchange, icon_arrow_circle_o_right, icon_arrow_circle_o_left, icon_toggle_left,icon_caret_square_o_left, icon_dot_circle_o,
    icon_wheelchair, icon_vimeo_square, icon_turkish_lira,icon_try, icon_plus_square_o, icon_space_shuttle, icon_slack, icon_envelope_square,
    icon_wordpress, icon_openid, icon_institution,icon_bank,icon_university, icon_mortar_board,icon_graduation_cap, icon_yahoo,
    icon_google, icon_reddit, icon_reddit_square, icon_stumbleupon_circle, icon_stumbleupon, icon_delicious, icon_digg, icon_pied_piper_square,
    icon_pied_piper, icon_pied_piper_alt, icon_drupal, icon_joomla, icon_language, icon_fax, icon_building, icon_child,
    icon_paw, icon_spoon, icon_cube, icon_cubes, icon_behance, icon_behance_square, icon_steam, icon_steam_square,
    icon_recycle, icon_automobile,icon_car, icon_cab,icon_taxi, icon_tree, icon_spotify, icon_deviantart,
    icon_soundcloud, icon_database, icon_file_pdf_o, icon_file_word_o, icon_file_excel_o, icon_file_powerpoint_o, icon_file_photo_o,icon_file_picture_o,
    icon_file_image_o, icon_file_zip_o,icon_file_archive_o, icon_file_sound_o,icon_file_audio_o, icon_file_movie_o,icon_file_video_o, icon_file_code_o,
    icon_vine, icon_codepen, icon_jsfiddle, icon_life_bouy,icon_life_saver,icon_support,icon_life_ring, icon_circle_o_notch,
    icon_ra,icon_rebel, icon_ge,icon_empire, icon_git_square, icon_git, icon_hacker_news, icon_tencent_weibo,
    icon_qq, icon_wechat,icon_weixin, icon_send,icon_paper_plane, icon_send_o,icon_paper_plane_o, icon_history,
    icon_circle_thin, icon_header, icon_paragraph, icon_sliders, icon_share_alt, icon_share_alt_square, icon_bomb, icon_remove_sign, icon_time,
    icon_ok
}

export enum ComboStyle {
    Default,
    Primary,
    Info,
    Success,
    Warning,
    Danger
}

export enum ButtonAlignment {
    Left,
    Right
}


export enum IconAlignment {
    Left,
    Right
}


export enum PaginationAlignment {
    Left,
    Center,
    Right
}

export enum TabStyle {
    Tab,
    Pill
}

export enum ItemAlignment {
    Left,
    Right
}

export enum Cursor {
    Default,
    Auto,
    Crosshair,
    E_resize,
    Help,
    Move,
    N_resize,
    NE_resize,
    NW_resize,
    Pointer,
    Progress,
    S_resize,
    Se_resize,
    Sw_resize,
    Text,
    W_resize,
    Wait,
    Inherit
}

export enum TextAlignment {
    Left,
    Right,
    Center
}

export enum BadgeStyle {
    Default,
    Success,
    Warning,
    Important,
    Info,
}

export enum LabelStyle {
    Default,
    Success,
    Warning,
    Important,
    Info,
}

export enum LabelPosition {
    Left,
    Right,
    TopCenter,
    TopLeft,
    TopRight,
    BottomCenter,
    BottomLeft,
    BottomRight
}

export enum ComboDropMode {
    Up,
    Down,
    Auto
}



export enum NotificationPosition {
    TopLeft,
    TopRight,
    BottomLeft,
    BottomRight
}

export enum Language {
    Afar, Afrikaans, Albanian, Amharic, Arabic, Aragonese, Armenian, Assamese, Aymara, Azerbaijani, Bashkir, Basque, Bengali,
    Bhutani, Bihari, Bislama, Breton, Bulgarian, Burmese, Byelorussian, Cambodian, Catalan, Cherokee, Chewa, Chinese,
    Chinese_Simplified, Chinese_Traditional, Corsican, Croatian, Czech, Danish, Divehi, Dutch, Edo, English, Esperanto,
    Estonian, Faeroese, Farsi, Fiji, Finnish, Flemish, French, Frisian, Fulfulde, Galician, Gaelic_Scottish, Gaelic_Manx,
    Georgian, German, Greek, Greenlandic, Guarani, Gujarati, Hausa, Hawaiian, Hebrew, Hindi, Hungarian, Ibibio, Icelandic,
    Idoio, Igbo, Indonesian, Interlingua, Interlingue, Inuktitut, Inupiak, Irish, Italian, Japanese, Javanese, Kannada,
    Kanuri, Kashmiri, Kazakh, Kirghiz, Kirundi, Konkani, Korean, Kurdish, Laothian, Latin, Latvian, Limburgish, Lingala,
    Lithuanian, Macedonian, Malagasy, Malay, Malayalam, Maltese, Maori, Marathi, Moldavian, Mongolian, Nauru, Nepali, Norwegian,
    Occitan, Oriya, Oromo, Papiamentu, Pashto, Polish, Portuguese, Punjabi, Quechua, Romanian, Russian, Sami, Samoan, Sangro,
    Sanskrit, Serbian, Serbo_Croatian, Sesotho, Setswana, Shona, Sichuan, Sindhi, Sinhalese, Siswati, Slovak, Slovenian, Somali,
    Spanish, Sundanese, Swahili, Swedish, Syriac, Tagalog, Tajik, Tamazight, Tamil, Tatar, Telugu, Thai, Tibetan, Tigrinya, Tonga,
    Tsonga, Turkish, Turkmen, Twi, Uighur, Ukrainian, Urdu, Uzbek, Venda, Vietnamese, Wallon, Welsh, Wolof, Xhosa, Yoruba, Zulu
}

export enum PopoverPlacement {
    Left,
    Right,
    Top,
    Bottom,
}


/*Define the positioning of a tooltip elements.*/
export enum TooltipPlacement {
    Left,
    Right,
    Top,
    Bottom,
}


export enum ModalEffects {
    SlideDown,
    SlideUp,
    FadeIn,
    FadeOut
};


export enum GridRowStyle {
    Default,
    Info,
    Success,
    Error,
    Warning
}

export enum SelectedRowStyle {
    Default,
    Info,
    Success,
    Error,
    Warning
}



export function tryAndCatch(callback: () => void) {
    try { callback() } catch (err) { Application.raiseException(err) }
}


export function iconEnumToBootstrapStyle(icon: ButtonIcon): string {
    if (!icon) return "";
    return ButtonIcon[icon].replace(/_/gi, "-");
}

export function getClassStyleHexColor(selector, style: string): string {
    var elemstr = '<a>';
    var $elem = $(elemstr).hide().appendTo($('body'));
    $elem.addClass(selector);
    var rgb = $elem.css(style).match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    $elem.remove();
    function hex(x) { return ("0" + parseInt(x).toString(16)).slice(-2); }
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);;
}


export function createComponentByElement(elem: Element, parent: VXContainMod.TContainer): TComponent {
    var rc: TComponent;
    for (var property in this) {
        var componentClass = elem.tagName;
        if (this.hasOwnProperty(property) && "V." + (<string>property).toUpperCase() == componentClass.toUpperCase()) {
            if (!elem.getAttribute('id')) elem.setAttribute('id', TObject.genGUID());
            rc = new this[property](parent, elem.getAttribute('id'));
            for (var item in rc) {
                if ((<string>item).indexOf('_') == 0) continue;
                var a = elem.getAttribute ("v." + item);
                if (a != null) {
                    rc[item] = a;
                }
            }
            break;
        }
    }
    return rc;
}


export function convertaAnyToBoolean(val: any) : boolean {
    if (!val) return false;
    if (typeof val == "boolean") return val;
    switch (val.toLowerCase()) {
        case "true": case "yes": case "1": return true;
        case "false": case "no": case "0": case null: return false;
        default: return Boolean(val);
    }
}

export function convertaAnyToNumber(val: any)  : number{
    if (!val) return null;
    if (typeof val == "number") return val;
    else return parseFloat(val);
}