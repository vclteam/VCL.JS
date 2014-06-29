//VCL.JS Main
import VXObjectMod = require("VCL/VXObject");
export class TObject extends VXObjectMod.TObject { };
export class TTimer extends VXObjectMod.TTimer { };
export class TCollectionItem extends VXObjectMod.TCollectionItem { };
export class TCollection<T> extends VXObjectMod.TCollection<T>  { };
export class TList<T> extends VXObjectMod.TList<T>  { };



import VXCompMod = require("VCL/VXComponent");
/**
* TComponent is the base class for all components that are visible at run time.
*/
export class TComponent extends VXCompMod.TComponent { };
export class TControl extends VXCompMod.TControl { };

import VXContainMod = require("VCL/VXContainer");
export class TContainer extends VXContainMod.TContainer { };
export class TBootstrapRow extends VXContainMod.TBootstrapRow { };
export class TBootstrapRowFluid extends VXContainMod.TBootstrapRowFluid { };
export class TBootstrapSpan extends VXContainMod.TBootstrapSpan { };

/***
* Dynamically repeating controls and containers
*/
//export class TRepeater extends VXContainMod.TRepeater { };

import VXAppMod = require("VCL/VXApplication");
export class TApplication extends VXAppMod.TApplication { };
export class TNavbarItem extends VXAppMod.TNavbarItem { };
export class TFacebookAPI extends VXAppMod.TFacebookAPI { };

import VXServerMod = require("VCL/VXServer");
export class TServer extends VXServerMod.TServer { };

import VXPageMod = require("VCL/VXPage");
export class TPage extends VXPageMod.TPage { };

import VXModalMod = require("VCL/VXModal");
export class TModal extends VXModalMod.TModal { };

import VXTabMod = require("VCL/VXTab");
export class TTabSheet extends VXTabMod.TTabSheet { };
export class TTabPage extends VXTabMod.TTabPage { };
export class TTabPanel extends VXTabMod.TTabPanel { };
export class TAccordionGroupPanel extends VXTabMod.TAccordionGroupPanel { };
export class TAccordionGroup extends VXTabMod.TAccordionGroup { };
export class TAccordion extends VXTabMod.TAccordion { };

//import VXPopupMod = require("VCL/VXPopup");

import VXTextMod = require("VCL/VXText");
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

import VXInputMod = require("VCL/VXInput");
export class TDBInput extends VXInputMod.TDBInput { };
export class TInput extends VXInputMod.TInput { };
export class TInputTypeaHead extends VXInputMod.TInputTypeaHead { };
export class TTypeaHeadItem extends VXInputMod.TTypeaHeadItem { };
export class TTextArea extends VXInputMod.TTextArea { };
export class TDBTextArea extends VXInputMod.TDBTextArea { };
export class TInputNumeric extends VXInputMod.TInputNumeric { };
export class TDBInputNumeric extends VXInputMod.TDBInputNumeric { };

import VXImageMod = require("VCL/VXImage");
export class TImage extends VXImageMod.TImage { };
export class TIcon extends VXImageMod.TIcon { };

import VXMenuMod = require("VCL/VXMenu");
export class TMenuItem extends VXMenuMod.TMenuItem { };
export class TMenuItemCollection<TMenuItem> extends VXMenuMod.TMenuItemCollection<TMenuItem> { };


import VXQueryMod = require("VCL/VXQuery");
/**
* TQuery represents a dataset with a result set that is based on an SQL statement.
*/
export class TQuery extends VXQueryMod.TQuery { };

/**
* TQuery represents a dataset with a result set that is based on a remoteSQL statement.
*/
export class TQueryRemote extends VXQueryMod.TQueryRemote { };
export class TQueryParam extends VXQueryMod.TQueryParam { };


import VXSSASMod = require("VCL/VXOlapSSAS");
export class TOlapSSAS extends VXSSASMod.TOlapSSAS { };


import VXButtonMod = require("VCL/VXButton");
/**
* Button is a push button control.
* Use TButton to put a standard push button on a page or modalform
*/
export class TButton extends VXButtonMod.TButton { };
export class TToggleSwitch extends VXButtonMod.TToggleSwitch { };
export class TFacebookButton extends VXButtonMod.TFacebookButton { };


import VXDBGridMod = require("VCL/VXDBGrid");
export class TDBGrid extends VXDBGridMod.TDBGrid { };
export class TDBGridColumn extends VXDBGridMod.TDBGridColumn { };
export class TGrid extends VXDBGridMod.TGrid { };


import VXDatasetMod = require("VCL/VXDataset");
/**
* TDataset is the base class for all dataset components that represent data in rows and columns.
*/
export class TDataset extends VXDatasetMod.TDataset { };
export class TClientDataset extends VXDatasetMod.TClientDataset { };
//export class TObjectDataset extends VXDatasetMod.TObjectDataset { }; not read yet


import VXComboboxMod = require("VCL/VXCombo");
export class TComboItem extends VXComboboxMod.TComboItem { };
export class TCombobox extends VXComboboxMod.TCombobox { };
export class TDBCombobox extends VXComboboxMod.TDBCombobox { };


import VXlistboxMod = require("VCL/VXListBox");
export class TListBox extends VXlistboxMod.TListbox { };
export class TTree extends VXlistboxMod.TTree { };
export class TTreeNodeItem extends VXlistboxMod.TTreeNodeItem { };

import VXSideBarMod = require("VCL/VXSideBar");
export class TSideBar extends VXSideBarMod.TSideBar { };
export class TNavBar extends VXSideBarMod.TNavBar { };


import VXWellMod = require("VCL/VXWell");
export class TWell extends VXWellMod.TWell { };
export class TGoogleMap extends VXWellMod.TGoogleMap { };
export class TGoogleMapMarker extends VXWellMod.TGoogleMapMarker { };
export class TPanel extends VXWellMod.TPanel { }; 
export class TPanelButton extends VXWellMod.TPanelButton { };

import VXCheckboxMod = require("VCL/VXCheckBox");
export class TCheckBox extends VXCheckboxMod.TCheckBox { };
export class TDBCheckBox extends VXCheckboxMod.TDBCheckBox { };

import VXProgressMod = require("VCL/VXProgressBar");
export class TProgressBar extends VXProgressMod.TProgressBar { };
export class TRatingStar extends VXProgressMod.TRatingStart { };
export class TSlider extends VXProgressMod.TSlider { };
export class TRangeSlider extends VXProgressMod.TRangeSlider { };





import VXAlertMod = require("VCL/VXAlert");
/**
* Wrap any text and an optional dismiss button for a basic warning alert message.
*/
export class TAlert extends VXAlertMod.TAlert { };
export class TNotification extends VXAlertMod.TNotification { };


import VXGougeMod = require("VCL/VXGauge");
export class TGauge extends VXGougeMod.TGauge { };



import VXVXBarMod = require("VCL/VXChartBar");
export class TChartBar extends VXVXBarMod.TChartBar { };
export class TDBChartBar extends VXVXBarMod.TDBChartBar { };
export class TChartBullet extends VXVXBarMod.TChartBullet { };

//import VXVXGraphMod = require("VCL/VXRGraphBase");
//export class TGraphBar extends VXVXGraphMod.TGraphBar { };

import VXVXBarVVMod = require("VCL/VXChartBarH");
export class TChartBarH extends VXVXBarVVMod.TChartBarH { };
export class TDBChartBarH extends VXVXBarVVMod.TDBChartBarH { };

import VXLineMod = require("VCL/VXChartLine");
export class TChartLine extends VXLineMod.TChartLine { };
export class TDBChartLine extends VXLineMod.TDBChartLine { };
export class TChartArea extends VXLineMod.TChartArea { };
export class TDBChartArea extends VXLineMod.TDBChartArea { };

import VXDonutMod = require("VCL/VXChartDonut");
export class TChartDonut extends VXDonutMod.TChartDonut { };
export class TDBChartDonut extends VXDonutMod.TDBChartDonut { };


import VXChartMod = require("VCL/VXChartBase");
export class TDountValue extends VXChartMod.TDountValue { };
export class TBarValue extends VXChartMod.TBarValue { };
export class TLineValue extends VXChartMod.TLineValue { };
export class TDotValue extends VXChartMod.TDotValue { };


import VXDotMod = require("VCL/VXChartDot");
export class TChartDot extends VXDotMod.TChartDot { };
export class TChartBubble extends VXDotMod.TChartBubble { };

import VXconstMod = require("VCL/VXConst");

import VXInputDateMod = require("VCL/VXDateInput");
export class TInputDate extends VXInputDateMod.TDateInput { };
export class TDBInputDate extends VXInputDateMod.TDBDateInput { };
export class TInputTime extends VXInputDateMod.TInputTime { };


import VXSparkMod = require("VCL/VXSparkLine");
export class TSparkBar extends VXSparkMod.TSparkBar { };
export class TSparkLine extends VXSparkMod.TSparkLine { };
export class TSparkPie extends VXSparkMod.TSparkPie { };
export class TDBSparkBar extends VXSparkMod.TDBSparkBar { };
export class TDBSparkLine extends VXSparkMod.TDBSparkLine { };
export class TDBSparkPie extends VXSparkMod.TDBSparkPie { };

import VXGridSterMod = require("VCL/VXGridSter");
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

export enum HeaderTextStyle {
    Default,
    Strong,
    Small,
}

export enum HeaderTextAlignment {
    Left,
    Right,
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



function dummy() {
    new VXCompMod.TComponent(null);
    new VXObjectMod.TObject();
    new VXContainMod.TContainer(null);
    new VXAppMod.TApplication();
    new VXServerMod.TServer();
    new VXButtonMod.TButton(null);
    new VXTextMod.TDBText(null)
    new VXSparkMod.TSparkBar(null);
    new VXInputMod.TDBInput(null);
    new VXImageMod.TImage(null);
    new VXQueryMod.TQuery(null);
    new VXGridSterMod.TWidgetGrid(null);
    new VXComboboxMod.TCombobox(null);
    new VXWellMod.TPanel(null);
    new VXVXBarVVMod.TChartBarH(null);
    new VXDBGridMod.TDBGridColumn();
    new VXLineMod.TChartLine(null);
    new VXChartMod.TDountValue();
    new VXlistboxMod.TTreeNodeItem();
    new VXProgressMod.TRatingStart(null);
    new VXAlertMod.TNotification(null);
    new VXGougeMod.TGauge(null);
    new VXSSASMod.TOlapSSAS(null);
    new VXInputDateMod.TDBDateInput(null);
    new VXPageMod.TPage();
    new VXDatasetMod.TObjectDataset();
    new VXSideBarMod.TSideBar(null);
    new VXCheckboxMod.TCheckBox(null);
    new VXDonutMod.TChartDonut(null);
    new VXMenuMod.TMenuItem();
    new VXModalMod.TModal();
    new VXDotMod.TChartBubble(null);
    new VXVXBarMod.TChartBar(null);
}