import VXCompMod = require("VCL/VXComponent");
import VXContainMod = require("VCL/VXContainer");
import VXPageMod = require("VCL/VXPage");
import VXModalMod = require("VCL/VXModal");
import VXPopupMod = require("VCL/VXPopup");
import VXTextMod = require("VCL/VXText");
import VXInputMod = require("VCL/VXInput");
import VXObjectMod = require("VCL/VXObject");
import VXImageMod = require("VCL/VXImage");
import VXMenuMod = require("VCL/VXMenu");
import VXQueryMod = require("VCL/VXQuery");
import VXSSASMod = require("VCL/VXOlapSSAS");
import VXButtonMod = require("VCL/VXButton");
import VXAppMod = require("VCL/VXApplication");
import VXDBGridMod = require("VCL/VXDBGrid");
import VXDatasetMod = require("VCL/VXDataset");
import VXComboboxMod = require("VCL/VXCombo");
import VXlistboxMod = require("VCL/VXListBox");
import VXSideBarMod = require("VCL/VXSideBar");
import VXWellMod = require("VCL/VXWell");
import VXCheckboxMod = require("VCL/VXCheckBox");
import VXProgressMod = require("VCL/VXProgressBar");
import VXAlertMod = require("VCL/VXAlert");
import VXGougeMod = require("VCL/VXGauge");
import VXVXBarMod = require("VCL/VXChartBar");
import VXLineMod = require("VCL/VXChartLine");
import VXDonutMod = require("VCL/VXChartDonut");
import VXChartMod = require("VCL/VXChartBase");
import VXDotMod = require("VCL/VXChartDot");
import VXconstMod = require("VCL/VXConst");
import VXInputDateMod = require("VCL/VXDateInput");
import VXSparkMod = require("VCL/VXSparkLine");
import VXGridSterMod = require("VCL/VXGridSter");
import VXServerMod = require("VCL/VXServer");


export class TObject extends VXObjectMod.VXObject { };
export class TTimer extends VXObjectMod.VXTimer { };
export class TCollectionItem extends VXObjectMod.VXCollectionItem { };
export class TCollection<T> extends VXObjectMod.VXCollection<T> { };
export class TList<T> extends VXObjectMod.VXList<T> { };
export class TButton extends VXButtonMod.VXButton { };
/**
* Button is a push button control.
* Use TButton to put a standard push button on a page or modalform
*/
export class TToggleSwitch extends VXButtonMod.VXToggleSwitch { };
export class TInput extends VXInputMod.VXInput { };
export class TInputDate extends VXInputDateMod.VXDateInput { };
export class TDBInputDate extends VXInputDateMod.VXDBDateInput { };
export class TComboItem extends VXComboboxMod.VXComboItem { };
export class TCombobox extends VXComboboxMod.VXCombobox { };
export class TDBCombobox extends VXComboboxMod.VXDBCombobox { };
export class TListBox extends VXlistboxMod.VXListbox { };
export class TTree extends VXlistboxMod.VXTree { };
export class TTreeNodeItem extends VXlistboxMod.VXTreeNodeItem { };

export class TSparkBar extends VXSparkMod.VXSparkBar { };
export class TSparkLine extends VXSparkMod.VXSparkLine { };
export class TSparkPie extends VXSparkMod.VXSparkPie { };
export class TDBSparkBar extends VXSparkMod.VXDBSparkBar { };
export class TDBSparkLine extends VXSparkMod.VXDBSparkLine { };
export class TDBSparkPie extends VXSparkMod.VXDBSparkPie { };
export class TWidgetGrid extends VXGridSterMod.VXWidgetGrid { };
export class TWidgetPanel extends VXGridSterMod.VXWidgetPanel { };
/**
* Wrap any text and an optional dismiss button for a basic warning alert message.
*/
export class TAlert extends VXAlertMod.VXAlert { };

export class TNotification extends VXAlertMod.VXNotification { };

export class TGauge extends VXGougeMod.VXGauge { };

export class TChartDonut extends VXDonutMod.VXChartDonut { };
export class TDBChartDonut extends VXDonutMod.VXDBChartDonut { };
export class TChartDot extends VXDotMod.VXChartDot { };
export class TChartBubble extends VXDotMod.VXChartBubble { };
export class TChartBar extends VXVXBarMod.VXChartBar { };
export class TDBChartBar extends VXVXBarMod.VXDBChartBar { };
export class TChartBullet extends VXVXBarMod.VXChartBullet { };
export class TChartLine extends VXLineMod.VXChartLine { };
export class TDBChartLine extends VXLineMod.VXDBChartLine { };
export class TChartArea extends VXLineMod.VXChartArea { };
export class TDBChartArea extends VXLineMod.VXDBChartArea { };


export class TDountValue extends VXChartMod.VXDountValue { };
export class TBarValue extends VXChartMod.VXBarValue { };
export class TLineValue extends VXChartMod.VXLineValue { };
export class TDotValue extends VXChartMod.VXDotValue { };

export class TDBInput extends VXInputMod.VXDBInput { };
export class TDBGrid extends VXDBGridMod.VXDBGrid { };
export class TDBGridColumn extends VXDBGridMod.VXDBGridColumn { };
export class TLabel extends VXTextMod.VXLabel { };
export class TTagCloud extends VXTextMod.VXTagCloud { };
export class TPillBox extends VXTextMod.VXPillBox { };
export class TDBLabel extends VXTextMod.VXDBLabel { };
export class TBadge extends VXTextMod.VXBadge { };
export class TDBBadge extends VXTextMod.VXDBBadge { };
export class TSideBar extends VXSideBarMod.VXSideBar { };
export class TNavBar extends VXSideBarMod.VXNavBar { };
export class TImage extends VXImageMod.VXImage { };
export class TIcon extends VXImageMod.VXIcon { };

export class TWell extends VXWellMod.VXWell { };
export class TGoogleMap extends VXWellMod.VXGoogleMap { };
export class TPanel extends VXWellMod.VXPanel { };
export class TCheckBox extends VXCheckboxMod.VXCheckBox { };
export class TProgressBar extends VXProgressMod.VXProgressBar { };
export class TRatingStar extends VXProgressMod.VXRatingStart { };
export class TConst extends VXconstMod.VXConst { };

export class TText extends VXTextMod.VXText { };
export class TDBText extends VXTextMod.VXDBText { };
export class TMenuItem extends VXMenuMod.VXMenuItem { };

/**
* TQuery represents a dataset with a result set that is based on an SQL statement.
*/
export class TQuery extends VXQueryMod.VXQuery { };

/**
* TQuery represents a dataset with a result set that is based on an SQL statement.
*/
export class TOlapSSAS extends VXSSASMod.VXOlapSSAS { };



export class TServer extends VXServerMod.VXServer { };

/**
* TQuery represents a dataset with a result set that is based on a remoteSQL statement.
*/
export class TQueryRemote extends VXQueryMod.VXQueryRemote { };

/**
* TDataset is the base class for all dataset components that represent data in rows and columns.
*/
export class TDataset extends VXDatasetMod.VXDataset { };

export class TObjectDataset extends VXDatasetMod.VXObjectDataset { };

/**
* TComponent is the base class for all components that are visible at run time.
*/
export class TComponent extends VXCompMod.VXComponent { };
export class TControl extends VXCompMod.VXControl { };
export class TContainer extends VXContainMod.VXContainer { };
export class TPage extends VXPageMod.VXPage { };
export class TModal extends VXModalMod.VXModal { };
export class TPopup extends VXPopupMod.VXPopup { };
export class TApplication extends VXAppMod.VXApplication { };
export class TNavbarItem extends VXAppMod.VXNavbarItem { };


/**
* Represents application-level information.
* By default, when a new project is created, VCL.JS constructs an TApplication object and assigns it to the Application variable in the VCL module. 
* Application has several properties that can be used to get information about an application while it runs.
*/
export var Application: VXAppMod.VXApplication = new VXAppMod.VXApplication();
export var Global: any = {};
export enum CalendarType { Daily, Monthly }
export enum PasswordStrength { LOW, MEDIUM, HIGH, EXTREME }


export enum ButtonStyle {
    Default,
    Primary,
    Info,
    Success,
    Warning,
    Danger,
    Link
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

export enum HeaderTextStyle {
    default,
    h4,
    h5,
    h6,
    lead,
    small,
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

export enum SwitchSize {
    Default,
    Large,
    Small,
    Mini,
}

export enum ButtonIcon {
    icon_adjust, icon_adn, icon_align_center, icon_align_justify, icon_align_left, icon_align_right,
    icon_ambulance, icon_anchor, icon_android, icon_angle_down, icon_angle_left, icon_angle_right,
    icon_angle_up, icon_apple, icon_archive, icon_arrow_down, icon_arrow_left, icon_arrow_right,
    icon_arrow_up, icon_asterisk, icon_backward, icon_ban_circle, icon_bar_chart, icon_barcode,
    icon_beaker, icon_beer, icon_bell, icon_bell_alt, icon_bitbucket, icon_bitbucket_sign,
    icon_bitcoin, icon_bold, icon_bolt, icon_book, icon_bookmark, icon_bookmark_empty,
    icon_briefcase, icon_btc, icon_bug, icon_building, icon_bullhorn, icon_bullseye,
    icon_calendar, icon_calendar_empty, icon_camera, icon_camera_retro, icon_caret_down, icon_caret_left,
    icon_caret_right, icon_caret_up, icon_certificate, icon_check, icon_check_empty, icon_check_minus,
    icon_check_sign, icon_chevron_down, icon_chevron_left, icon_chevron_right, icon_chevron_sign_down, icon_chevron_sign_left,
    icon_chevron_sign_right, icon_chevron_sign_up, icon_chevron_up, icon_circle, icon_circle_arrow_down, icon_circle_arrow_left,
    icon_circle_arrow_right, icon_circle_arrow_up, icon_circle_blank, icon_cloud, icon_cloud_download, icon_cloud_upload,
    icon_cny, icon_code, icon_code_fork, icon_coffee, icon_cog, icon_cogs,
    icon_collapse, icon_collapse_alt, icon_collapse_top, icon_columns, icon_comment, icon_comment_alt,
    icon_comments, icon_comments_alt, icon_compass, icon_copy, icon_credit_card, icon_crop,
    icon_css3, icon_cut, icon_dashboard, icon_desktop, icon_dollar, icon_double_angle_down,
    icon_double_angle_left, icon_double_angle_right, icon_double_angle_up, icon_download, icon_download_alt, icon_dribbble,
    icon_dropbox, icon_edit, icon_edit_sign, icon_eject, icon_ellipsis_horizontal, icon_ellipsis_vertical,
    icon_envelope, icon_envelope_alt, icon_eraser, icon_eur, icon_euro, icon_exchange,
    icon_exclamation, icon_exclamation_sign, icon_expand, icon_expand_alt, icon_external_link, icon_external_link_sign,
    icon_eye_close, icon_eye_open, icon_facebook, icon_facebook_sign, icon_facetime_video, icon_fast_backward,
    icon_fast_forward, icon_female, icon_fighter_jet, icon_file, icon_file_alt, icon_file_text,
    icon_file_text_alt, icon_film, icon_filter, icon_fire, icon_fire_extinguisher, icon_flag,
    icon_flag_alt, icon_flag_checkered, icon_flickr, icon_folder_close, icon_folder_close_alt, icon_folder_open,
    icon_folder_open_alt, icon_font, icon_food, icon_forward, icon_foursquare, icon_frown,
    icon_fullscreen, icon_gamepad, icon_gbp, icon_gear, icon_gears, icon_gift,
    icon_github, icon_github_alt, icon_github_sign, icon_gittip, icon_glass, icon_globe,
    icon_google_plus, icon_google_plus_sign, icon_group, icon_h_sign, icon_hand_down, icon_hand_left,
    icon_hand_right, icon_hand_up, icon_hdd, icon_headphones, icon_heart, icon_heart_empty,
    icon_home, icon_hospital, icon_html5, icon_inbox, icon_indent_left, icon_indent_right,
    icon_info, icon_info_sign, icon_inr, icon_instagram, icon_italic, icon_jpy,
    icon_key, icon_keyboard, icon_krw, icon_laptop, icon_leaf, icon_legal,
    icon_lemon, icon_level_down, icon_level_up, icon_lightbulb, icon_link, icon_linkedin,
    icon_linkedin_sign, icon_linux, icon_list, icon_list_alt, icon_list_ol, icon_list_ul,
    icon_location_arrow, icon_lock, icon_long_arrow_down, icon_long_arrow_left, icon_long_arrow_right, icon_long_arrow_up,
    icon_magic, icon_magnet, icon_mail_forward, icon_mail_reply, icon_mail_reply_all, icon_male,
    icon_map_marker, icon_maxcdn, icon_medkit, icon_meh, icon_microphone, icon_microphone_off,
    icon_minus, icon_minus_sign, icon_minus_sign_alt, icon_mobile_phone, icon_money, icon_moon,
    icon_move, icon_music, icon_off, icon_ok, icon_ok_circle, icon_ok_sign,
    icon_paper_clip, icon_paperclip, icon_paste, icon_pause, icon_pencil, icon_phone,
    icon_phone_sign, icon_picture, icon_pinterest, icon_pinterest_sign, icon_plane, icon_play,
    icon_play_circle, icon_play_sign, icon_plus, icon_plus_sign, icon_plus_sign_alt, icon_power_off,
    icon_print, icon_pushpin, icon_puzzle_piece, icon_qrcode, icon_question, icon_question_sign,
    icon_quote_left, icon_quote_right, icon_random, icon_refresh, icon_remove, icon_remove_circle,
    icon_remove_sign, icon_renminbi, icon_renren, icon_reorder, icon_repeat, icon_reply,
    icon_reply_all, icon_resize_full, icon_resize_horizontal, icon_resize_small, icon_resize_vertical, icon_retweet,
    icon_road, icon_rocket, icon_rotate_left, icon_rotate_right, icon_rss, icon_rss_sign,
    icon_rupee, icon_save, icon_screenshot, icon_search, icon_share, icon_share_alt,
    icon_share_sign, icon_shield, icon_shopping_cart, icon_sign_blank, icon_signal, icon_signin,
    icon_signout, icon_sitemap, icon_skype, icon_smile, icon_sort, icon_sort_by_alphabet,
    icon_sort_by_alphabet_alt, icon_sort_by_attributes, icon_sort_by_attributes_alt, icon_sort_by_order, icon_sort_by_order_alt, icon_sort_down,
    icon_sort_up, icon_spinner, icon_stackexchange, icon_star, icon_star_empty, icon_star_half,
    icon_star_half_empty, icon_star_half_full, icon_step_backward, icon_step_forward, icon_stethoscope, icon_stop,
    icon_strikethrough, icon_subscript, icon_suitcase, icon_sun, icon_superscript, icon_table,
    icon_tablet, icon_tag, icon_tags, icon_tasks, icon_terminal, icon_text_height,
    icon_text_width, icon_th, icon_th_large, icon_th_list, icon_thumbs_down, icon_thumbs_down_alt,
    icon_thumbs_up, icon_thumbs_up_alt, icon_ticket, icon_time, icon_tint, icon_trash,
    icon_trello, icon_trophy, icon_truck, icon_tumblr, icon_tumblr_sign, icon_twitter,
    icon_twitter_sign, icon_umbrella, icon_unchecked, icon_underline, icon_undo, icon_unlink,
    icon_unlock, icon_unlock_alt, icon_upload, icon_upload_alt, icon_usd, icon_user,
    icon_user_mdicon_vk, icon_volume_down, icon_volume_off, icon_volume_up, icon_warning_sign,
    icon_weibo, icon_windows, icon_won, icon_wrench, icon_xing, icon_xing_sign,
    icon_yen, icon_youtube, icon_youtube_play, icon_youtube_sign, icon_zoom_in, icon_zoom_out,
}

export enum Icon {
    icon_adjust, icon_adn, icon_align_center, icon_align_justify, icon_align_left, icon_align_right,
    icon_ambulance, icon_anchor, icon_android, icon_angle_down, icon_angle_left, icon_angle_right,
    icon_angle_up, icon_apple, icon_archive, icon_arrow_down, icon_arrow_left, icon_arrow_right,
    icon_arrow_up, icon_asterisk, icon_backward, icon_ban_circle, icon_bar_chart, icon_barcode,
    icon_beaker, icon_beer, icon_bell, icon_bell_alt, icon_bitbucket, icon_bitbucket_sign,
    icon_bitcoin, icon_bold, icon_bolt, icon_book, icon_bookmark, icon_bookmark_empty,
    icon_briefcase, icon_btc, icon_bug, icon_building, icon_bullhorn, icon_bullseye,
    icon_calendar, icon_calendar_empty, icon_camera, icon_camera_retro, icon_caret_down, icon_caret_left,
    icon_caret_right, icon_caret_up, icon_certificate, icon_check, icon_check_empty, icon_check_minus,
    icon_check_sign, icon_chevron_down, icon_chevron_left, icon_chevron_right, icon_chevron_sign_down, icon_chevron_sign_left,
    icon_chevron_sign_right, icon_chevron_sign_up, icon_chevron_up, icon_circle, icon_circle_arrow_down, icon_circle_arrow_left,
    icon_circle_arrow_right, icon_circle_arrow_up, icon_circle_blank, icon_cloud, icon_cloud_download, icon_cloud_upload,
    icon_cny, icon_code, icon_code_fork, icon_coffee, icon_cog, icon_cogs,
    icon_collapse, icon_collapse_alt, icon_collapse_top, icon_columns, icon_comment, icon_comment_alt,
    icon_comments, icon_comments_alt, icon_compass, icon_copy, icon_credit_card, icon_crop,
    icon_css3, icon_cut, icon_dashboard, icon_desktop, icon_dollar, icon_double_angle_down,
    icon_double_angle_left, icon_double_angle_right, icon_double_angle_up, icon_download, icon_download_alt, icon_dribbble,
    icon_dropbox, icon_edit, icon_edit_sign, icon_eject, icon_ellipsis_horizontal, icon_ellipsis_vertical,
    icon_envelope, icon_envelope_alt, icon_eraser, icon_eur, icon_euro, icon_exchange,
    icon_exclamation, icon_exclamation_sign, icon_expand, icon_expand_alt, icon_external_link, icon_external_link_sign,
    icon_eye_close, icon_eye_open, icon_facebook, icon_facebook_sign, icon_facetime_video, icon_fast_backward,
    icon_fast_forward, icon_female, icon_fighter_jet, icon_file, icon_file_alt, icon_file_text,
    icon_file_text_alt, icon_film, icon_filter, icon_fire, icon_fire_extinguisher, icon_flag,
    icon_flag_alt, icon_flag_checkered, icon_flickr, icon_folder_close, icon_folder_close_alt, icon_folder_open,
    icon_folder_open_alt, icon_font, icon_food, icon_forward, icon_foursquare, icon_frown,
    icon_fullscreen, icon_gamepad, icon_gbp, icon_gear, icon_gears, icon_gift,
    icon_github, icon_github_alt, icon_github_sign, icon_gittip, icon_glass, icon_globe,
    icon_google_plus, icon_google_plus_sign, icon_group, icon_h_sign, icon_hand_down, icon_hand_left,
    icon_hand_right, icon_hand_up, icon_hdd, icon_headphones, icon_heart, icon_heart_empty,
    icon_home, icon_hospital, icon_html5, icon_inbox, icon_indent_left, icon_indent_right,
    icon_info, icon_info_sign, icon_inr, icon_instagram, icon_italic, icon_jpy,
    icon_key, icon_keyboard, icon_krw, icon_laptop, icon_leaf, icon_legal,
    icon_lemon, icon_level_down, icon_level_up, icon_lightbulb, icon_link, icon_linkedin,
    icon_linkedin_sign, icon_linux, icon_list, icon_list_alt, icon_list_ol, icon_list_ul,
    icon_location_arrow, icon_lock, icon_long_arrow_down, icon_long_arrow_left, icon_long_arrow_right, icon_long_arrow_up,
    icon_magic, icon_magnet, icon_mail_forward, icon_mail_reply, icon_mail_reply_all, icon_male,
    icon_map_marker, icon_maxcdn, icon_medkit, icon_meh, icon_microphone, icon_microphone_off,
    icon_minus, icon_minus_sign, icon_minus_sign_alt, icon_mobile_phone, icon_money, icon_moon,
    icon_move, icon_music, icon_off, icon_ok, icon_ok_circle, icon_ok_sign,
    icon_paper_clip, icon_paperclip, icon_paste, icon_pause, icon_pencil, icon_phone,
    icon_phone_sign, icon_picture, icon_pinterest, icon_pinterest_sign, icon_plane, icon_play,
    icon_play_circle, icon_play_sign, icon_plus, icon_plus_sign, icon_plus_sign_alt, icon_power_off,
    icon_print, icon_pushpin, icon_puzzle_piece, icon_qrcode, icon_question, icon_question_sign,
    icon_quote_left, icon_quote_right, icon_random, icon_refresh, icon_remove, icon_remove_circle,
    icon_remove_sign, icon_renminbi, icon_renren, icon_reorder, icon_repeat, icon_reply,
    icon_reply_all, icon_resize_full, icon_resize_horizontal, icon_resize_small, icon_resize_vertical, icon_retweet,
    icon_road, icon_rocket, icon_rotate_left, icon_rotate_right, icon_rss, icon_rss_sign,
    icon_rupee, icon_save, icon_screenshot, icon_search, icon_share, icon_share_alt,
    icon_share_sign, icon_shield, icon_shopping_cart, icon_sign_blank, icon_signal, icon_signin,
    icon_signout, icon_sitemap, icon_skype, icon_smile, icon_sort, icon_sort_by_alphabet,
    icon_sort_by_alphabet_alt, icon_sort_by_attributes, icon_sort_by_attributes_alt, icon_sort_by_order, icon_sort_by_order_alt, icon_sort_down,
    icon_sort_up, icon_spinner, icon_stackexchange, icon_star, icon_star_empty, icon_star_half,
    icon_star_half_empty, icon_star_half_full, icon_step_backward, icon_step_forward, icon_stethoscope, icon_stop,
    icon_strikethrough, icon_subscript, icon_suitcase, icon_sun, icon_superscript, icon_table,
    icon_tablet, icon_tag, icon_tags, icon_tasks, icon_terminal, icon_text_height,
    icon_text_width, icon_th, icon_th_large, icon_th_list, icon_thumbs_down, icon_thumbs_down_alt,
    icon_thumbs_up, icon_thumbs_up_alt, icon_ticket, icon_time, icon_tint, icon_trash,
    icon_trello, icon_trophy, icon_truck, icon_tumblr, icon_tumblr_sign, icon_twitter,
    icon_twitter_sign, icon_umbrella, icon_unchecked, icon_underline, icon_undo, icon_unlink,
    icon_unlock, icon_unlock_alt, icon_upload, icon_upload_alt, icon_usd, icon_user,
    icon_user_mdicon_vk, icon_volume_down, icon_volume_off, icon_volume_up, icon_warning_sign,
    icon_weibo, icon_windows, icon_won, icon_wrench, icon_xing, icon_xing_sign,
    icon_yen, icon_youtube, icon_youtube_play, icon_youtube_sign, icon_zoom_in, icon_zoom_out,
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

export enum NotificationPosition {
    TopLeft,
    TopRight,
    BottomLeft,
    BottomRight
}


export enum PopupPlacement {
    Left,
    Right,
    Top,
    Bottom,
}



export enum TooltipPlacement {
    Left,
    Right,
    Top,
    Bottom,
}

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


export function humanFriendlyNumber(value, roundfactor): string {
    var p, d2, i, s;

    p = Math.pow;
    d2 = p(10, roundfactor);
    i = 7;
    while (i) {
        s = p(10, i-- * 3);
        if (s <= value) {
            value = Math.round(value * d2 / s) / d2 + "KMGTPE"[i];
        }
    }
    return value;
}

export function commaNumber(value: number, roundfactor=2): string {
    var absnum, intnum, ret, strabsnum;
    if (value != null) {
        ret = value < 0 ? "-" : "";
        absnum = Math.abs(value);
        intnum = Math.floor(absnum).toFixed(0);
        ret += intnum.replace(/(?=(?:\d{3})+$)(?!^)/g, ',');
        strabsnum = absnum.toString();
        if (strabsnum.length > intnum.length) {
            ret += "."+strabsnum.substring(0, roundfactor);
        }
        return ret;
    } else {
        return '-';
    }
}
