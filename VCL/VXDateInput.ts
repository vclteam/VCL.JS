/// <reference path="Scripts/jquery.d.ts" />
import V = require("./VCL");
import VXC = require("./VXComponent");
import VXU = require("./VXUtils");
import VXI = require("./VXInputBase");
import VXD = require("./VXDataset");
import VXB = require("./VXButton");

export class TDateButton extends VXB.TButton {
    public onChanged: (date: Date) => void;
    constructor(aOwner: VXC.TComponent, renderTo?: string, text?: string) {
        super(aOwner, renderTo);
        (<any>this)._buttonicon = V.ButtonIcon.icon_calendar;
    }

    private _calendartype: V.CalendarType = V.CalendarType.Daily;
    public get CalendarType(): V.CalendarType {
        return this._calendartype;
    }
    public set CalendarType(val: V.CalendarType) {
        if (val != this._calendartype) {
            this._calendartype = val;
            this.drawDelayed(true);
        }
    }

    private dp;

    public create() {
        super.create();
        var self = this;
        this.dp = this.jBtn.datepicker({
            minViewMode: this.CalendarType == V.CalendarType.Daily ? 0 : 1, inline: true
        }).on('changeDate', function (ev: any) {
                var startDate = new Date(ev.date);
                if (self.onChanged) self.onChanged(startDate);
                self.dp.datepicker("hide");
            });
    }
}


export class TDateInputBase extends VXI.TEditorBase {
    private _dateformat: string;
    public get DateFormat(): string {
        return this._dateformat;
    }
    public set DateFormat(val: string) {
        if (val != this._dateformat) {
            this._dateformat = val;
            this.drawDelayed(true);
        }
    }

    private _calendartype: V.CalendarType = V.CalendarType.Daily;
    public get CalendarType(): V.CalendarType {
        return this._calendartype;
    }
    public set CalendarType(val: V.CalendarType) {
        if (val != this._calendartype) {
            this._calendartype = val;
            this.drawDelayed(true);
        }
    }


    private autoclose: boolean = true;
    public get AutoClose(): boolean {
        return this.autoclose;
    }
    public set AutoClose(val: boolean) {
        if (val != this.autoclose) {
            this.autoclose = val;
            this.draw(true);
        }
    }

    public jButton: JQuery;
    private jImage: JQuery;
    public create() {
        this.jComponent.empty();
        this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'div', this.FitToWidth, this.FitToHeight);
        this.jComponent.addClass('control-group date');

        this.jEdit = $('<input/>').css('width', '100%').css('box-sizing', 'border-box').css('height', '100%');
        this.jEdit.attr('type', 'text');
        this.jEdit.attr('id', V.Application.genGUID());

        this.jButton = $('<span />')
        this.jButton.addClass('add-on');

        this.jImage = $('<i/>').css('box-sizing', 'border-box')
        this.jImage.addClass('icon-calendar');
        this.jImage.appendTo(this.jButton);

        VXU.VXUtils.inputWithButton(this.jEdit, this.jButton).appendTo(this.jComponent);


        if (!this.Enabled) {
            this.jImage.attr("disabled", "readonly");
            this.jEdit.attr("disabled", "disabled");
            this.jButton.attr("disabled", "disabled");
        }
        var df = this.DateFormat == null ? V.Application.DateFormat : this.DateFormat;
        this.jComponent.datepicker({ format: df, autoclose: this.AutoClose, minViewMode: this.CalendarType == V.CalendarType.Daily ? 0 : 1 });

        super.create();
    }
}

export class TTimeInputBase extends VXI.TEditorBase {
    public jButton: JQuery;
    private jImage: JQuery;

    private _showseconds: boolean = false;
    public get ShowSeconds(): boolean {
        return this._showseconds;
    }
    public set ShowSeconds(val: boolean) {
        if (val != this._showseconds) {
            this._showseconds = val;
            this.drawDelayed(true);
        }
    }

    private _showMeridian: boolean = false;
    //show 12hr mode
    public get ShowMeridian(): boolean {
        return this._showMeridian;
    }
    public set ShowMeridian(val: boolean) {
        if (val != this._showMeridian) {
            this._showMeridian = val;
            this.drawDelayed(true);
        }
    }

    private _minuteStep: number = 15;
    public get MinuteStep(): number {
        return this._minuteStep;
    }
    public set MinuteStep(val: number) {
        this._minuteStep = val;
        this.drawDelayed(false);
    }

    private tm: JQuery;


    public create() {
        this.jComponent.empty();
        this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'div', this.FitToWidth, this.FitToHeight);
        this.jComponent.addClass('control-group date bootstrap-timepicker');

        this.jEdit = $('<input/>').css('width', '100%').css('box-sizing', 'border-box').css('height', '100%');
        this.jEdit.attr('type', 'text');
        this.jEdit.attr('id', V.Application.genGUID());

        this.jButton = $('<span />')
        this.jButton.addClass('add-on');

        VXU.VXUtils.inputWithButton(this.jEdit, this.jButton).appendTo(this.jComponent);
        //this.jEdit.appendTo(this.jComponent);
        //this.jButton.appendTo(this.jComponent);

        this.jImage = $('<i/>')
        this.jImage.addClass('icon-time');
        this.jImage.appendTo(this.jButton);


        if (!this.Enabled) {
            this.jImage.attr("disabled", "readonly");
            this.jEdit.attr("disabled", "disabled");
            this.jButton.attr("disabled", "disabled");
        }
        this.tm = this.jEdit.timepicker({ showSeconds: this.ShowSeconds, disableFocus: true, showMeridian: this.ShowMeridian, minuteStep: this.MinuteStep });

        super.create();
    }
}


export class TDateInput extends TDateInputBase {
    private _date: Date = new Date();
    public get Date(): Date {
        return this._date;
    }
    public set Date(val: Date) {
        //if (val != this._date) {
        this._date = val;
        this.drawDelayed(false);
        //}
    }

    public create() {
        super.create();
        var self: any = this;
        self.DateFormat = V.Application.DateFormat
        this.jComponent.on('changeDate', function (ev: any) {
            var dt: any = ev.date;
            self.Date = new Date(dt.getTime() + (dt.getTimezoneOffset() * 60000));
            if (self.onChanged != null) (V.tryAndCatch(() => { self.onChanged(self); }))
        });
    }


    public draw(reCreate: boolean) {
        if (!this.parentInitialized()) return;
        super.draw(reCreate);
        var self: any = this;

        this.jComponent.datepicker("setDate", this.Date);
        // display blank if invalid date or date is 0 (01/01/1970)
        if (self.jComponent.find('input')[0].value == 'NaN/NaN/NaN' || V.Application.formatDateTime(this.Date, "dd/mm/yyyy") == "01/01/1970")
            self.jComponent.find('input')[0].value = '';

        //this.setEditorWidth();
    }
}

export class TDBDateInput extends TDateInputBase {

    public get Date(): Date {
        return this.DateValue;
    }
    public set Date(val: Date) {
        if (val != this.DateValue) {
            this.DateValue = val;
            this.drawDelayed(false);
        }
    }

    private _datafield: string;
    /**
    * Specifies the field from which the edit control displays data.
    */
    public get DataField(): string {
        return this._datafield;
    }
    public set DataField(val: string) {
        if (val != this._datafield) {
            this._datafield = val.toUpperCase();
        }
    }

    private get DateValue(): Date {
        if (this.Dataset == null || this.Dataset.Active == false || this.Dataset.RecordCount <= 0) return null;
        if (this.DataField == null || this.DataField.toString() == "") return null;

        return this.Dataset.getFieldValue(this._datafield);
    }
    private set DateValue(val: Date) {
        if (this.Dataset == null || this.Dataset.Active == false) return;
        if (this.DataField == null || this.DataField.toString() == "") return;

        this.Dataset.setFieldValue(this.DataField.toString(), val);
        this.draw(false);
    }



    private _dataset: VXD.TDataset;
    /*
      * Specifies the dataset that contains the field it represents.
      */
    public get Dataset(): VXD.TDataset {
        return this._dataset;
    }
    public set Dataset(val: VXD.TDataset) {
        if (val != this._dataset) {
            if (this._dataset != null) {
                (<any>this._dataset).removeEventListener(VXD.TDataset.EVENT_DATA_CHANGED, this);
                (<any>this._dataset).removeEventListener(VXD.TDataset.EVENT_SELECTION_CHANGED, this);
                (<any>this._dataset).removeEventListener(VXD.TDataset.EVENT_STATE_CHANGED, this);
            }
            this._dataset = val;
            if (this._dataset != null) {
                (<any>this._dataset).registerEventListener(VXD.TDataset.EVENT_DATA_CHANGED, this, () => { this.draw(false); });
                (<any>this._dataset).registerEventListener(VXD.TDataset.EVENT_SELECTION_CHANGED, this, () => { this.draw(false); });
                (<any>this._dataset).registerEventListener(VXD.TDataset.EVENT_STATE_CHANGED, this, () => { this.validateEnabled(); });
            }

        }
    }

    private validateEnabled() {
        if (this.Dataset == null) this.Enabled = false;
        else if (this.Dataset.Readonly) this.Enabled = false;
        else this.Enabled = this.Dataset.Active;
    }

    public draw(reCreate: boolean) {
        if (!this.parentInitialized()) return;
        var self: any = this;

        if (reCreate || !this.initialized) {
            this.validateEnabled();
            super.draw(reCreate);
        }
        this.jComponent.datepicker("setDate", this.Date);
        // display blank if invalid date or date is 0 (01/01/1970)
        if (self.jComponent.find('input')[0].value == 'NaN/NaN/NaN' || V.Application.formatDateTime(this.Date, "dd/mm/yyyy") == "01/01/1970")
            self.jComponent.find('input')[0].value = '';
        //this.setEditorWidth();
    }

    public create() {
        super.create();
        var self = this;
        this.jComponent.on('changeDate', function (ev: any) {
            var dt: any = ev.date;
            self.DateValue = new Date(dt.getTime() + (dt.getTimezoneOffset() * 60000));
            if (self.onChanged != null) (V.tryAndCatch(() => { self.onChanged(self); }))
        });
    }
}


function UTCDate(...numbers: number[]) {
    return new Date(Date.UTC.apply(Date, numbers));
}
function UTCToday() {
    var today = new Date();
    return UTCDate(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate());
}


export class TInputTime extends TTimeInputBase {
    private _date: Date = new Date();
    public get Time(): Date {
        return this._date;
    }
    public set Time(val: Date) {
        //if (val != this._date) {
        this._date = val;
        this.drawDelayed(false);
        //}
    }

    public get Hour(): number {
        return this._date.getHours();
    }
    public set Hour(val: number) {
        this._date.setHours(val);
        this.drawDelayed(false);
    }

    public create() {
        super.create();
        var self = this;
        this.jComponent.on('changeTime.timepicker', function (ev: any) {
            var dt: any = ev.time;
            var newdt = self.Time ? self.Time : new Date();
            newdt.setHours(dt.hours);
            newdt.setMinutes(dt.minutes);
            newdt.setSeconds(dt.seconds);
            self.Time = newdt;//new Date(newdt.getTime() + (newdt.getTimezoneOffset() * 60000));
            if (self.onChanged != null) (V.tryAndCatch(() => { self.onChanged(self); }))
        });
    }


    public draw(reCreate: boolean) {
        if (!this.parentInitialized()) return;
        super.draw(reCreate);
        var self: any = this;

        (<any>this).tm.timepicker("setTime", this.Time);
        //this.setEditorWidth();
    }
}



// Picker object

var Datepicker = function (element, options) {
    var that = this;

    this.element = $(element);
    this.language = options.language || this.element.data('date-language') || "en";
    this.language = this.language in dates ? this.language : this.language.split('-')[0]; //Check if "de-DE" style date is available, if not language should fallback to 2 letter code eg "de"
    this.language = this.language in dates ? this.language : "en";
    this.isRTL = dates[this.language].rtl || false;
    this.format = DPGlobal.parseFormat(options.format || this.element.data('date-format') || dates[this.language].format || 'mm/dd/yyyy');
    this.isInline = false;
    this.isInput = this.element.is('input');
    this.component = this.element.is('.date') ? this.element.find('.add-on, .btn') : false;
    this.hasInput = this.component && this.element.find('input').length;
    if (this.component && this.component.length === 0)
        this.component = false;

    this._attachEvents();

    this.forceParse = true;
    if ('forceParse' in options) {
        this.forceParse = options.forceParse;
    } else if ('dateForceParse' in this.element.data()) {
        this.forceParse = this.element.data('date-force-parse');
    }


    this.picker = $(DPGlobal.template)
        .appendTo(this.isInline ? this.element : 'body')
        .on({
            click: $.proxy(this.click, this),
            mousedown: $.proxy(this.mousedown, this)
        });

    if (this.isInline) {
        this.picker.addClass('datepicker-inline');
    } else {
        this.picker.addClass('datepicker-dropdown dropdown-menu');
    }
    if (this.isRTL) {
        this.picker.addClass('datepicker-rtl');
        this.picker.find('.prev i, .next i')
            .toggleClass('icon-arrow-left icon-arrow-right');
    }
    $(document).on('mousedown', function (e) {
        // Clicked outside the datepicker, hide it
        if ($(e.target).closest('.datepicker.datepicker-inline, .datepicker.datepicker-dropdown').length === 0) {
            that.hide();
        }
    });

    this.autoclose = false;
    if ('autoclose' in options) {
        this.autoclose = options.autoclose;
    } else if ('dateAutoclose' in this.element.data()) {
        this.autoclose = this.element.data('date-autoclose');
    }

    this.keyboardNavigation = true;
    if ('keyboardNavigation' in options) {
        this.keyboardNavigation = options.keyboardNavigation;
    } else if ('dateKeyboardNavigation' in this.element.data()) {
        this.keyboardNavigation = this.element.data('date-keyboard-navigation');
    }

    this.viewMode = this.startViewMode = 0;
    switch (options.startView || this.element.data('date-start-view')) {
        case 2:
        case 'decade':
            this.viewMode = this.startViewMode = 2;
            break;
        case 1:
        case 'year':
            this.viewMode = this.startViewMode = 1;
            break;
    }

    this.minViewMode = options.minViewMode || this.element.data('date-min-view-mode') || 0;
    if (typeof this.minViewMode === 'string') {
        switch (this.minViewMode) {
            case 'months':
                this.minViewMode = 1;
                break;
            case 'years':
                this.minViewMode = 2;
                break;
            default:
                this.minViewMode = 0;
                break;
        }
    }

    this.viewMode = this.startViewMode = Math.max(this.startViewMode, this.minViewMode);

    this.todayBtn = (options.todayBtn || this.element.data('date-today-btn') || false);
    this.todayHighlight = (options.todayHighlight || this.element.data('date-today-highlight') || false);

    this.calendarWeeks = false;
    if ('calendarWeeks' in options) {
        this.calendarWeeks = options.calendarWeeks;
    } else if ('dateCalendarWeeks' in this.element.data()) {
        this.calendarWeeks = this.element.data('date-calendar-weeks');
    }
    if (this.calendarWeeks)
        this.picker.find('tfoot th.today')
            .attr('colspan', function (i, val) {
                return parseInt(val) + 1;
            });

    this.weekStart = ((options.weekStart || this.element.data('date-weekstart') || dates[this.language].weekStart || 0) % 7);
    this.weekEnd = ((this.weekStart + 6) % 7);
    this.startDate = -Infinity;
    this.endDate = Infinity;
    this.daysOfWeekDisabled = [];
    this.setStartDate(options.startDate || this.element.data('date-startdate'));
    this.setEndDate(options.endDate || this.element.data('date-enddate'));
    this.setDaysOfWeekDisabled(options.daysOfWeekDisabled || this.element.data('date-days-of-week-disabled'));
    this.fillDow();
    this.fillMonths();
    this.update();
    this.showMode();

    if (this.isInline) {
        this.show();
    }
};

Datepicker.prototype = {
    constructor: Datepicker,

    _events: [],
    _attachEvents: function () {
        this._detachEvents();
        if (this.isInput) { // single input
            this._events = [
                [this.element, {
                    focus: $.proxy(this.show, this),
                    keyup: $.proxy(this.update, this),
                    keydown: $.proxy(this.keydown, this)
                }]
            ];
        }
        else if (this.component && this.hasInput) { // component: input + button
            this._events = [
                // For components that are not readonly, allow keyboard nav
                [this.element.find('input'), {
                    //focus: $.proxy(this.show, this),
                    //keyup: $.proxy(this.update, this),
                    focusout: $.proxy(this.focuslost, this)
                }],
                [this.component, {
                    click: $.proxy(this.show, this)
                }]
            ];
        }
        else if (this.element.is('div')) {  // inline datepicker
            this.isInline = true;
        }
        else {
            this._events = [
                [this.element, {
                    click: $.proxy(this.show, this)
                }]
            ];
        }
        for (var i = 0, el, ev; i < this._events.length; i++) {
            el = this._events[i][0];
            ev = this._events[i][1];
            el.on(ev);
        }
    },
    _detachEvents: function () {
        for (var i = 0, el, ev; i < this._events.length; i++) {
            el = this._events[i][0];
            ev = this._events[i][1];
            el.off(ev);
        }
        this._events = [];
    },

    show: function (e) {
        if ($(e.target).attr("disabled")) return;
        this.picker.show();
        this.height = this.component ? this.component.outerHeight() : this.element.outerHeight();
        this.update();
        this.place();
        $(window).on('resize', $.proxy(this.place, this));
        if (e) {
            e.preventDefault();
        }
        this.element.trigger({
            type: 'show',
            date: this.date
        });
    },

    hide: function (e) {
        if (this.isInline) return;
        if (!this.picker.is(':visible')) return;
        this.picker.hide();
        $(window).off('resize', this.place);
        this.viewMode = this.startViewMode;
        this.showMode();
        if (!this.isInput) {
            $(document).off('mousedown', this.hide);
        }

        if (
            this.forceParse &&
            (
            this.isInput && this.element.val() ||
            this.hasInput && this.element.find('input').val()
            )
            )
            this.setValue();
        this.element.trigger({
            type: 'hide',
            date: this.date
        });
    },

    remove: function () {
        this._detachEvents();
        this.picker.remove();
        delete this.element.data().datepicker;
        if (!this.isInput) {
            delete this.element.data().date;
        }
    },

    getDate: function () {
        var d = this.getUTCDate();
        return new Date(d.getTime() + (d.getTimezoneOffset() * 60000));
    },

    getUTCDate: function () {
        return this.date;
    },

    setDate: function (d) {
        if (d && d.getTime) {
            this.setUTCDate(new Date(d.getTime() - (d.getTimezoneOffset() * 60000)));
        }
    },

    setUTCDate: function (d) {
        this.date = d;
        this.setValue();
    },

    setValue: function () {
        var formatted = this.getFormattedDate();
        if (!this.isInput) {
            if (this.component) {
                this.element.find('input').val(formatted);
            }
            this.element.data('date', formatted);
        } else {
            this.element.val(formatted);
        }
    },

    getFormattedDate: function (format) {
        if (format === undefined) format = this.format;
        return DPGlobal.formatDate(this.date, format, this.language);
    },

    setStartDate: function (startDate) {
        this.startDate = startDate || -Infinity;
        if (this.startDate !== -Infinity) {
            this.startDate = DPGlobal.parseDate(this.startDate, this.format, this.language);
        }
        this.update();
        this.updateNavArrows();
    },

    setEndDate: function (endDate) {
        this.endDate = endDate || Infinity;
        if (this.endDate !== Infinity) {
            this.endDate = DPGlobal.parseDate(this.endDate, this.format, this.language);
        }
        this.update();
        this.updateNavArrows();
    },

    setDaysOfWeekDisabled: function (daysOfWeekDisabled) {
        this.daysOfWeekDisabled = daysOfWeekDisabled || [];
        if (!$.isArray(this.daysOfWeekDisabled)) {
            this.daysOfWeekDisabled = this.daysOfWeekDisabled.split(/,\s*/);
        }
        this.daysOfWeekDisabled = $.map(this.daysOfWeekDisabled, function (d) {
            return parseInt(d, 10);
        });
        this.update();
        this.updateNavArrows();
    },

    place: function () {
        if (this.isInline) return;
        var zIndex = parseInt(this.element.parents().filter(function () {
            return $(this).css('z-index') != 'auto';
        }).first().css('z-index')) + 10;
        var parentOffset = this.component ? this.component.parent().offset() : this.element.offset();
        var offset = this.component ? this.component.offset() : this.element.offset();
        var height = this.component ? this.component.outerHeight(true) : this.element.outerHeight(true);
        this.picker.css({
            top: offset.top + height,
            left: parentOffset.left,
            zIndex: 999999//zIndex fixed some background issue
        });
    },

    focuslost: function () {
        //        this._setDate(DPGlobal.parseDate(this.element.find('input').val(), this.format, this.language, true))
        var origDate = V.Application.formatDateTime(this.date, V.Application.DateFormat);
        var tDate = DPGlobal.parseDate(this.element.find('input').val(), this.format, this.language, true);
        if (tDate != null)
            this._setDate(tDate);
        else
            this.element.find('input')[0].value = origDate;
    },

    update: function () {
        var date, fromArgs = false;
        if (arguments && arguments.length && (typeof arguments[0] === 'string' || arguments[0] instanceof Date)) {
            date = arguments[0];
            fromArgs = true;
        } else {
            date = this.isInput ? this.element.val() : this.element.data('date') || this.element.find('input').val();
        }

        this.date = DPGlobal.parseDate(date, this.format, this.language);

        if (fromArgs) this.setValue();

        if (this.date < this.startDate) {
            this.viewDate = new Date(this.startDate);
        } else if (this.date > this.endDate) {
            this.viewDate = new Date(this.endDate);
        } else {
            this.viewDate = new Date(this.date);
        }
        this.fill();
    },

    fillDow: function () {
        var dowCnt = this.weekStart,
            html = '<tr>';
        if (this.calendarWeeks) {
            var cell = '<th class="cw">&nbsp;</th>';
            html += cell;
            this.picker.find('.datepicker-days thead tr:first-child').prepend(cell);
        }
        while (dowCnt < this.weekStart + 7) {
            html += '<th class="dow">' + dates[this.language].daysMin[(dowCnt++) % 7] + '</th>';
        }
        html += '</tr>';
        this.picker.find('.datepicker-days thead').append(html);
    },

    fillMonths: function () {
        var html: string = '';
        var i: number = 0;
        while (i < 12) {
            html += '<span class="month">' + dates[this.language].monthsShort[i++] + '</span>';
        }
        this.picker.find('.datepicker-months td').html(html);
    },

    fill: function () {
        var d = new Date(this.viewDate),
            year = d.getUTCFullYear(),
            month = d.getUTCMonth(),
            startYear = this.startDate !== -Infinity ? this.startDate.getUTCFullYear() : -Infinity,
            startMonth = this.startDate !== -Infinity ? this.startDate.getUTCMonth() : -Infinity,
            endYear = this.endDate !== Infinity ? this.endDate.getUTCFullYear() : Infinity,
            endMonth = this.endDate !== Infinity ? this.endDate.getUTCMonth() : Infinity,
            currentDate = this.date && this.date.valueOf(),
            today = new Date();
        this.picker.find('.datepicker-days thead th.switch')
            .text(dates[this.language].months[month] + ' ' + year);
        this.picker.find('tfoot th.today')
            .text(dates[this.language].today)
            .toggle(this.todayBtn !== false);
        this.updateNavArrows();
        this.fillMonths();
        var prevMonth = UTCDate(year, month - 1, 28, 0, 0, 0, 0);
        var day = DPGlobal.getDaysInMonth(prevMonth.getUTCFullYear(), prevMonth.getUTCMonth());
        prevMonth.setUTCDate(day);
        prevMonth.setUTCDate(day - (prevMonth.getUTCDay() - this.weekStart + 7) % 7);
        var nextMonth = new Date(prevMonth.toString());
        nextMonth.setUTCDate(nextMonth.getUTCDate() + 42);
        var html = [];
        var clsName;
        while (prevMonth.valueOf() < nextMonth.valueOf()) {
            if (prevMonth.getUTCDay() == this.weekStart) {
                html.push('<tr>');
                if (this.calendarWeeks) {
                    // ISO 8601: First week contains first thursday.
                    // ISO also states week starts on Monday, but we can be more abstract here.

                    // Start of current week: based on weekstart/current date
                    var ws = new Date(+prevMonth + (this.weekStart - prevMonth.getUTCDay() - 7) % 7 * 864e5);
                    // Thursday of this week
                    var th: any = new Date(+ws + (7 + 4 - ws.getUTCDay()) % 7 * 864e5);
                    // First Thursday of year, year from thursday
                    var yth: any = new Date(+(yth = UTCDate(th.getUTCFullYear(), 0, 1)) + (7 + 4 - yth.getUTCDay()) % 7 * 864e5);
                    // Calendar week: ms between thursdays, div ms per day, div 7 days
                    var calWeek: number = (th - yth) / 864e5 / 7 + 1;
                    html.push('<td class="cw">' + calWeek + '</td>');
                }
            }
            clsName = '';
            if (prevMonth.getUTCFullYear() < year || (prevMonth.getUTCFullYear() == year && prevMonth.getUTCMonth() < month)) {
                clsName += ' old';
            } else if (prevMonth.getUTCFullYear() > year || (prevMonth.getUTCFullYear() == year && prevMonth.getUTCMonth() > month)) {
                clsName += ' new';
            }
            // Compare internal UTC date with local today, not UTC today
            if (this.todayHighlight &&
                prevMonth.getUTCFullYear() == today.getFullYear() &&
                prevMonth.getUTCMonth() == today.getMonth() &&
                prevMonth.getUTCDate() == today.getDate()) {
                clsName += ' today';
            }
            if (currentDate && prevMonth.valueOf() == currentDate) {
                clsName += ' active';
            }
            if (prevMonth.valueOf() < this.startDate || prevMonth.valueOf() > this.endDate ||
                $.inArray(prevMonth.getUTCDay(), this.daysOfWeekDisabled) !== -1) {
                clsName += ' disabled';
            }
            html.push('<td class="day' + clsName + '">' + prevMonth.getUTCDate() + '</td>');
            if (prevMonth.getUTCDay() == this.weekEnd) {
                html.push('</tr>');
            }
            prevMonth.setUTCDate(prevMonth.getUTCDate() + 1);
        }
        this.picker.find('.datepicker-days tbody').empty().append(html.join(''));
        var currentYear = this.date && this.date.getUTCFullYear();

        var months = this.picker.find('.datepicker-months')
            .find('th:eq(1)')
            .text(year)
            .end()
            .find('span').removeClass('active');
        if (currentYear && currentYear == year) {
            months.eq(this.date.getUTCMonth()).addClass('active');
        }
        if (year < startYear || year > endYear) {
            months.addClass('disabled');
        }
        if (year == startYear) {
            months.slice(0, startMonth).addClass('disabled');
        }
        if (year == endYear) {
            months.slice(endMonth + 1).addClass('disabled');
        }

        var html2 = '';
        year = parseInt((year / 10).toString(), 10) * 10;
        var yearCont = this.picker.find('.datepicker-years')
            .find('th:eq(1)')
            .text(year + '-' + (year + 9))
            .end()
            .find('td');
        year -= 1;
        for (var i = -1; i < 11; i++) {
            html2 += '<span class="year' + (i == -1 || i == 10 ? ' old' : '') + (currentYear == year ? ' active' : '') + (year < startYear || year > endYear ? ' disabled' : '') + '">' + year + '</span>';
            year += 1;
        }
        yearCont.html(html);
    },

    updateNavArrows: function () {
        var d = new Date(this.viewDate),
            year = d.getUTCFullYear(),
            month = d.getUTCMonth();
        switch (this.viewMode) {
            case 0:
                if (this.startDate !== -Infinity && year <= this.startDate.getUTCFullYear() && month <= this.startDate.getUTCMonth()) {
                    this.picker.find('.prev').css({ visibility: 'hidden' });
                } else {
                    this.picker.find('.prev').css({ visibility: 'visible' });
                }
                if (this.endDate !== Infinity && year >= this.endDate.getUTCFullYear() && month >= this.endDate.getUTCMonth()) {
                    this.picker.find('.next').css({ visibility: 'hidden' });
                } else {
                    this.picker.find('.next').css({ visibility: 'visible' });
                }
                break;
            case 1:
            case 2:
                if (this.startDate !== -Infinity && year <= this.startDate.getUTCFullYear()) {
                    this.picker.find('.prev').css({ visibility: 'hidden' });
                } else {
                    this.picker.find('.prev').css({ visibility: 'visible' });
                }
                if (this.endDate !== Infinity && year >= this.endDate.getUTCFullYear()) {
                    this.picker.find('.next').css({ visibility: 'hidden' });
                } else {
                    this.picker.find('.next').css({ visibility: 'visible' });
                }
                break;
        }
    },

    click: function (e) {
        e.preventDefault();
        var target = $(e.target).closest('span, td, th');
        if (target.length == 1) {
            switch (target[0].nodeName.toLowerCase()) {
                case 'th':
                    switch (target[0].className) {
                        case 'switch':
                            this.showMode(1);
                            break;
                        case 'prev':
                        case 'next':
                            var dir = DPGlobal.modes[this.viewMode].navStep * (target[0].className == 'prev' ? -1 : 1);
                            switch (this.viewMode) {
                                case 0:
                                    this.viewDate = this.moveMonth(this.viewDate, dir);
                                    break;
                                case 1:
                                case 2:
                                    this.viewDate = this.moveYear(this.viewDate, dir);
                                    break;
                            }
                            this.fill();
                            break;
                        case 'today':
                            var date = new Date();
                            date = UTCDate(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);

                            this.showMode(-2);
                            var which = this.todayBtn == 'linked' ? null : 'view';
                            this._setDate(date, which);
                            break;
                    }
                    break;
                case 'span':
                    if (!target.is('.disabled')) {
                        this.viewDate.setUTCDate(1);
                        if (target.is('.month')) {
                            var day = 1;
                            var month = target.parent().find('span').index(target);
                            var year = this.viewDate.getUTCFullYear();
                            this.viewDate.setUTCMonth(month);
                            this.element.trigger({
                                type: 'changeMonth',
                                date: this.viewDate
                            });
                            if (this.minViewMode == 1) {
                                this._setDate(UTCDate(year, month, day, 0, 0, 0, 0));
                            }
                        } else {
                            var year2 = parseInt(target.text(), 10) || 0;
                            var day = 1;
                            var _month = 0;
                            this.viewDate.setUTCFullYear(year2);
                            this.element.trigger({
                                type: 'changeYear',
                                date: this.viewDate
                            });
                            if (this.minViewMode == 2) {
                                this._setDate(UTCDate(year, _month, day, 0, 0, 0, 0));
                            }
                        }
                        this.showMode(-1);
                        this.fill();
                    }
                    break;
                case 'td':
                    if (target.is('.day') && !target.is('.disabled')) {
                        var day = parseInt(target.text(), 10) || 1;
                        var year = this.viewDate.getUTCFullYear();
                        var month: number = this.viewDate.getUTCMonth();
                        if (target.is('.old')) {
                            if (month === 0) {
                                month = 11;
                                year -= 1;
                            } else {
                                month -= 1;
                            }
                        } else if (target.is('.new')) {
                            if (month == 11) {
                                month = 0;
                                year += 1;
                            } else {
                                month += 1;
                            }
                        }
                        this._setDate(UTCDate(year, month, day, 0, 0, 0, 0));
                    }
                    break;
            }
        }
    },

    _setDate: function (date, which) {
        if (!which || which == 'date')
            this.date = date;
        if (!which || which == 'view')
            this.viewDate = date;
        this.fill();
        this.setValue();
        this.element.trigger({
            type: 'changeDate',
            date: this.date
        });
        var element;
        if (this.isInput) {
            element = this.element;
        } else if (this.component) {
            element = this.element.find('input');
        }
        if (element) {
            element.change();
            if (this.autoclose && (!which || which == 'date')) {
                this.hide();
            }
        }
    },

    moveMonth: function (date, dir) {
        if (!dir) return date;
        var new_date = new Date(date.valueOf()),
            day = new_date.getUTCDate(),
            month = new_date.getUTCMonth(),
            mag = Math.abs(dir),
            new_month, test;
        dir = dir > 0 ? 1 : -1;
        if (mag == 1) {
            test = dir == -1
            // If going back one month, make sure month is not current month
            // (eg, Mar 31 -> Feb 31 == Feb 28, not Mar 02)
            ? function () { return new_date.getUTCMonth() == month; }
            // If going forward one month, make sure month is as expected
            // (eg, Jan 31 -> Feb 31 == Feb 28, not Mar 02)
            : function () { return new_date.getUTCMonth() != new_month; };
            new_month = month + dir;
            new_date.setUTCMonth(new_month);
            // Dec -> Jan (12) or Jan -> Dec (-1) -- limit expected date to 0-11
            if (new_month < 0 || new_month > 11)
                new_month = (new_month + 12) % 12;
        } else {
            // For magnitudes >1, move one month at a time...
            for (var i = 0; i < mag; i++)
                // ...which might decrease the day (eg, Jan 31 to Feb 28, etc)...
                new_date = this.moveMonth(new_date, dir);
            // ...then reset the day, keeping it in the new month
            new_month = new_date.getUTCMonth();
            new_date.setUTCDate(day);
            test = function () { return new_month != new_date.getUTCMonth(); };
        }
        // Common date-resetting loop -- if date is beyond end of month, make it
        // end of month
        while (test()) {
            new_date.setUTCDate(--day);
            new_date.setUTCMonth(new_month);
        }
        return new_date;
    },

    moveYear: function (date, dir) {
        return this.moveMonth(date, dir * 12);
    },

    dateWithinRange: function (date) {
        return date >= this.startDate && date <= this.endDate;
    },

    keydown: function (e) {
        if (this.picker.is(':not(:visible)')) {
            if (e.keyCode == 27) // allow escape to hide and re-show picker
                this.show();
            return;
        }
        var dateChanged = false,
            dir, day, month,
            newDate, newViewDate;
        switch (e.keyCode) {
            case 27: // escape
                this.hide();
                e.preventDefault();
                break;
            case 37: // left
            case 39: // right
                if (!this.keyboardNavigation) break;
                dir = e.keyCode == 37 ? -1 : 1;
                if (e.ctrlKey) {
                    newDate = this.moveYear(this.date, dir);
                    newViewDate = this.moveYear(this.viewDate, dir);
                } else if (e.shiftKey) {
                    newDate = this.moveMonth(this.date, dir);
                    newViewDate = this.moveMonth(this.viewDate, dir);
                } else {
                    newDate = new Date(this.date);
                    newDate.setUTCDate(this.date.getUTCDate() + dir);
                    newViewDate = new Date(this.viewDate);
                    newViewDate.setUTCDate(this.viewDate.getUTCDate() + dir);
                }
                if (this.dateWithinRange(newDate)) {
                    this.date = newDate;
                    this.viewDate = newViewDate;
                    this.setValue();
                    this.update();
                    e.preventDefault();
                    dateChanged = true;
                }
                break;
            case 38: // up
            case 40: // down
                if (!this.keyboardNavigation) break;
                dir = e.keyCode == 38 ? -1 : 1;
                if (e.ctrlKey) {
                    newDate = this.moveYear(this.date, dir);
                    newViewDate = this.moveYear(this.viewDate, dir);
                } else if (e.shiftKey) {
                    newDate = this.moveMonth(this.date, dir);
                    newViewDate = this.moveMonth(this.viewDate, dir);
                } else {
                    newDate = new Date(this.date);
                    newDate.setUTCDate(this.date.getUTCDate() + dir * 7);
                    newViewDate = new Date(this.viewDate);
                    newViewDate.setUTCDate(this.viewDate.getUTCDate() + dir * 7);
                }
                if (this.dateWithinRange(newDate)) {
                    this.date = newDate;
                    this.viewDate = newViewDate;
                    this.setValue();
                    this.update();
                    e.preventDefault();
                    dateChanged = true;
                }
                break;
            case 13: // enter
                this.hide();
                e.preventDefault();
                break;
            case 9: // tab
                this.hide();
                break;
        }
        if (dateChanged) {
            this.element.trigger({
                type: 'changeDate',
                date: this.date
            });
            var element;
            if (this.isInput) {
                element = this.element;
            } else if (this.component) {
                element = this.element.find('input');
            }
            if (element) {
                element.change();
            }
        }
    },

    showMode: function (dir) {
        if (dir) {
            this.viewMode = Math.max(this.minViewMode, Math.min(2, this.viewMode + dir));
        }
        /*
            vitalets: fixing bug of very special conditions:
            jquery 1.7.1 + webkit + show inline datepicker in bootstrap popover.
            Method show() does not set display css correctly and datepicker is not shown.
            Changed to .css('display', 'block') solve the problem.
            See https://github.com/vitalets/x-editable/issues/37

            In jquery 1.7.2+ everything works fine.
        */
        this.picker.find('>div').hide().filter('.datepicker-' + DPGlobal.modes[this.viewMode].clsName).css('display', 'block');
        this.updateNavArrows();
    }
};

$.fn.datepicker = function (option) {
    var args = Array.apply(null, arguments);
    args.shift();
    return this.each(function () {
        var $this = $(this),
            data = $this.data('datepicker'),
            options = typeof option == 'object' && option;
        if (!data) {
            $this.data('datepicker', (data = new Datepicker(this, $.extend({}, $.fn.datepicker.defaults, options))));
        }
        if (typeof option == 'string' && typeof data[option] == 'function') {
            data[option].apply(data, args);
        }
    });
};

var dates = $.fn.datepicker.dates = {
    en: {
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        today: "Today"
    }
};

var DPGlobal: any = {
    modes: [
        {
            clsName: 'days',
            navFnc: 'Month',
            navStep: 1
        },
        {
            clsName: 'months',
            navFnc: 'FullYear',
            navStep: 1
        },
        {
            clsName: 'years',
            navFnc: 'FullYear',
            navStep: 10
        }],
    isLeapYear: function (year) {
        return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0));
    },
    getDaysInMonth: function (year, month) {
        return [31, (DPGlobal.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
    },
    validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
    nonpunctuation: /[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,
    parseFormat: function (format) {
        // IE treats \0 as a string end in inputs (truncating the value),
        // so it's a bad format delimiter, anyway
        var separators = format.replace(this.validParts, '\0').split('\0'),
            parts = format.match(this.validParts);
        if (!separators || !separators.length || !parts || parts.length === 0) {
            throw new Error("Invalid date format.");
        }
        return { separators: separators, parts: parts };
    },
    parseDate: function (date, format, language, validate: boolean = false) {
        if (date instanceof Date) return date;
        if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(date)) {
            var part_re = /([\-+]\d+)([dmwy])/,
                parts = date.match(/([\-+]\d+)([dmwy])/g),
                part, dir;
            date = new Date();
            for (var i = 0; i < parts.length; i++) {
                part = part_re.exec(parts[i]);
                dir = parseInt(part[1]);
                switch (part[2]) {
                    case 'd':
                        date.setUTCDate(date.getUTCDate() + dir);
                        break;
                    case 'm':
                        date = Datepicker.prototype.moveMonth.call(Datepicker.prototype, date, dir);
                        break;
                    case 'w':
                        date.setUTCDate(date.getUTCDate() + dir * 7);
                        break;
                    case 'y':
                        date = Datepicker.prototype.moveYear.call(Datepicker.prototype, date, dir);
                        break;
                }
            }
            return UTCDate(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), 0, 0, 0);
        }
        var parts = date && date.match(this.nonpunctuation) || [],
            date: any = new Date(),
            parsed = {},
            setters_order = ['yyyy', 'yy', 'M', 'MM', 'm', 'mm', 'd', 'dd'],
            setters_map = {
                yyyy: function (d, v) { return d.setUTCFullYear(v); },
                yy: function (d, v) { return d.setUTCFullYear(2000 + v); },
                m: function (d, v) {
                    v -= 1;
                    while (v < 0) v += 12;
                    v %= 12;
                    d.setUTCMonth(v);
                    while (d.getUTCMonth() != v)
                        d.setUTCDate(d.getUTCDate() - 1);
                    return d;
                },
                d: function (d, v) { return d.setUTCDate(v); }
            },
            val, filtered, part;
        setters_map['M'] = setters_map['MM'] = setters_map['mm'] = setters_map['m'];
        setters_map['dd'] = setters_map['d'];
        date = UTCDate(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
        var fparts = format.parts.slice();
        // Remove noop parts
        if (parts.length != fparts.length) {
            fparts = $(fparts).filter(function (i, p) {
                return $.inArray(p, setters_order) !== -1;
            }).toArray();
        }
        // Process remainder
        if (parts.length == fparts.length) {
            for (var i = 0, cnt = fparts.length; i < cnt; i++) {
                val = parseInt(parts[i], 10);
                part = fparts[i];
                if (isNaN(val)) {
                    switch (part) {
                        case 'MM':
                            filtered = $(dates[language].months).filter(function () {
                                var m = this.slice(0, parts[i].length),
                                    p = parts[i].slice(0, m.length);
                                return m == p;
                            });
                            val = $.inArray(filtered[0], dates[language].months) + 1;
                            break;
                        case 'M':
                            filtered = $(dates[language].monthsShort).filter(function () {
                                var m = this.slice(0, parts[i].length),
                                    p = parts[i].slice(0, m.length);
                                return m == p;
                            });
                            val = $.inArray(filtered[0], dates[language].monthsShort) + 1;
                            break;
                    }
                }
                parsed[part] = val;
            }

            // only valid days and months - if not valid return original date
            var days_part = ['d', 'dd'];
            var months_part = ['M', 'MM', 'm', 'mm'];
            var years_part = ['yyyy', 'yy'];
            var tMonth, tYear;

            if (validate) {
                for (var i = 0, s; i < setters_order.length; i++) {
                    s = setters_order[i];
                    if (years_part.indexOf(s) != -1 && s in parsed && !isNaN(parsed[s]))
                        tYear = parsed[s];
                }
                for (var i = 0, s; i < setters_order.length; i++) {
                    s = setters_order[i];
                    if (months_part.indexOf(s) != -1 && s in parsed && !isNaN(parsed[s])) {
                        if (parsed[s] < 1 || parsed[s] > 12)
                            return null;
                        else
                            tMonth = parsed[s];
                    }
                }
                for (var i = 0, s; i < setters_order.length; i++) {
                    s = setters_order[i];
                    if (days_part.indexOf(s) != -1 && s in parsed && !isNaN(parsed[s]))
                        if (parsed[s] < 1 || parsed[s] > DPGlobal.getDaysInMonth(tYear, tMonth - 1))
                            return null;
                }

            }
            // end validate
            for (var i = 0, s; i < setters_order.length; i++) {
                s = setters_order[i];
                if (s in parsed && !isNaN(parsed[s]))
                    setters_map[s](date, parsed[s]);
            }
        }
        return date;
    },
    formatDate: function (date, format, language) {
        var val: any = {
            d: date.getUTCDate(),
            D: dates[language].daysShort[date.getUTCDay()],
            DD: dates[language].days[date.getUTCDay()],
            m: date.getUTCMonth() + 1,
            M: dates[language].monthsShort[date.getUTCMonth()],
            MM: dates[language].months[date.getUTCMonth()],
            yy: date.getUTCFullYear().toString().substring(2),
            yyyy: date.getUTCFullYear()
        };
        val.dd = (val.d < 10 ? '0' : '') + val.d;
        val.mm = (val.m < 10 ? '0' : '') + val.m;
        var date1 = [];
        var seps: any = $.extend([], format.separators);
        for (var i = 0, cnt = format.parts.length; i < cnt; i++) {
            if (seps.length)
                date1.push(seps.shift());
            date1.push(val[format.parts[i]]);
        }
        return date1.join('');
    },
    headTemplate: '<thead>' + '<tr>' + '<th class="prev"><i class="icon-arrow-left"/></th>' + '<th colspan="5" class="switch"></th>' +
    '<th class="next"><i class="icon-arrow-right"/></th>' + '</tr>' + '</thead>',
    contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
    footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr></tfoot>'
};
DPGlobal.template = '<div class="datepicker">' +
'<div class="datepicker-days">' + '<table class=" table-condensed">' + DPGlobal.headTemplate + '<tbody></tbody>'
+ DPGlobal.footTemplate + '</table>' + '</div>' + '<div class="datepicker-months">' + '<table class="table-condensed">' + DPGlobal.headTemplate +
DPGlobal.contTemplate + DPGlobal.footTemplate + '</table>' + '</div>' + '<div class="datepicker-years">' + '<table class="table-condensed">' +
DPGlobal.headTemplate + DPGlobal.contTemplate + DPGlobal.footTemplate + '</table>' + '</div>' + '</div>';


// TIMEPICKER PUBLIC CLASS DEFINITION
var Timepicker = function (element, options) {
    this.widget = '';
    this.$element = $(element);
    this.defaultTime = options.defaultTime;
    this.disableFocus = options.disableFocus;
    this.disableMousewheel = options.disableMousewheel;
    this.isOpen = options.isOpen;
    this.minuteStep = options.minuteStep;
    this.modalBackdrop = options.modalBackdrop;
    this.orientation = options.orientation;
    this.secondStep = options.secondStep;
    this.showInputs = options.showInputs;
    this.showMeridian = options.showMeridian;
    this.showSeconds = options.showSeconds;
    this.template = options.template;
    this.appendWidgetTo = options.appendWidgetTo;
    this.showWidgetOnAddonClick = options.showWidgetOnAddonClick;

    this._init();
};

Timepicker.prototype = {

    constructor: Timepicker,
    _init: function () {
        var self = this;

        if (this.showWidgetOnAddonClick && (this.$element.parent().hasClass('input-append') || this.$element.parent().hasClass('input-prepend'))) {
            this.$element.parent('.input-append, .input-prepend').find('.add-on').on({
                'click.timepicker': $.proxy(this.showWidget, this)
            });
            this.$element.on({
                'focus.timepicker': $.proxy(this.highlightUnit, this),
                'click.timepicker': $.proxy(this.highlightUnit, this),
                'keydown.timepicker': $.proxy(this.elementKeydown, this),
                'blur.timepicker': $.proxy(this.blurElement, this),
                'mousewheel.timepicker DOMMouseScroll.timepicker': $.proxy(this.mousewheel, this)
            });
        } else {
            if (this.template) {
                this.$element.on({
                    'focus.timepicker': $.proxy(this.showWidget, this),
                    'click.timepicker': $.proxy(this.showWidget, this),
                    'blur.timepicker': $.proxy(this.blurElement, this),
                    'mousewheel.timepicker DOMMouseScroll.timepicker': $.proxy(this.mousewheel, this)
                });
            } else {
                this.$element.on({
                    'focus.timepicker': $.proxy(this.highlightUnit, this),
                    'click.timepicker': $.proxy(this.highlightUnit, this),
                    'keydown.timepicker': $.proxy(this.elementKeydown, this),
                    'blur.timepicker': $.proxy(this.blurElement, this),
                    'mousewheel.timepicker DOMMouseScroll.timepicker': $.proxy(this.mousewheel, this)
                });
            }
        }

        if (this.template !== false) {
            this.$widget = $(this.getTemplate()).on('click', $.proxy(this.widgetClick, this));
        } else {
            this.$widget = false;
        }

        if (this.showInputs && this.$widget !== false) {
            this.$widget.find('input').each(function () {
                $(this).on({
                    'click.timepicker': function () { $(this).select(); },
                    'keydown.timepicker': $.proxy(self.widgetKeydown, self),
                    'keyup.timepicker': $.proxy(self.widgetKeyup, self)
                });
            });
        }

        this.setDefaultTime(this.defaultTime);
    },

    blurElement: function () {
        this.highlightedUnit = null;
        this.updateFromElementVal();
    },

    clear: function () {
        this.hour = '';
        this.minute = '';
        this.second = '';
        this.meridian = '';

        this.$element.val('');
    },

    decrementHour: function () {
        if (this.showMeridian) {
            if (this.hour === 1) {
                this.hour = 12;
            } else if (this.hour === 12) {
                this.hour--;

                return this.toggleMeridian();
            } else if (this.hour === 0) {
                this.hour = 11;

                return this.toggleMeridian();
            } else {
                this.hour--;
            }
        } else {
            if (this.hour <= 0) {
                this.hour = 23;
            } else {
                this.hour--;
            }
        }
    },

    decrementMinute: function (step) {
        var newVal;

        if (step) {
            newVal = this.minute - step;
        } else {
            newVal = this.minute - this.minuteStep;
        }

        if (newVal < 0) {
            this.decrementHour();
            this.minute = newVal + 60;
        } else {
            this.minute = newVal;
        }
    },

    decrementSecond: function () {
        var newVal = this.second - this.secondStep;

        if (newVal < 0) {
            this.decrementMinute(true);
            this.second = newVal + 60;
        } else {
            this.second = newVal;
        }
    },

    elementKeydown: function (e) {
        switch (e.keyCode) {
            case 9: //tab
            case 27: // escape
                this.updateFromElementVal();
                break;
            case 37: // left arrow
                e.preventDefault();
                this.highlightPrevUnit();
                break;
            case 38: // up arrow
                e.preventDefault();
                switch (this.highlightedUnit) {
                    case 'hour':
                        this.incrementHour();
                        this.highlightHour();
                        break;
                    case 'minute':
                        this.incrementMinute();
                        this.highlightMinute();
                        break;
                    case 'second':
                        this.incrementSecond();
                        this.highlightSecond();
                        break;
                    case 'meridian':
                        this.toggleMeridian();
                        this.highlightMeridian();
                        break;
                }
                this.update();
                break;
            case 39: // right arrow
                e.preventDefault();
                this.highlightNextUnit();
                break;
            case 40: // down arrow
                e.preventDefault();
                switch (this.highlightedUnit) {
                    case 'hour':
                        this.decrementHour();
                        this.highlightHour();
                        break;
                    case 'minute':
                        this.decrementMinute();
                        this.highlightMinute();
                        break;
                    case 'second':
                        this.decrementSecond();
                        this.highlightSecond();
                        break;
                    case 'meridian':
                        this.toggleMeridian();
                        this.highlightMeridian();
                        break;
                }

                this.update();
                break;
        }
    },

    getCursorPosition: function () {
        var input = this.$element.get(0);

        if ('selectionStart' in input) {// Standard-compliant browsers

            return input.selectionStart;
        } else if (document.selection) {// IE fix
            input.focus();
            var sel = document.selection.createRange(),
                selLen = document.selection.createRange().text.length;

            sel.moveStart('character', - input.value.length);

            return sel.text.length - selLen;
        }
    },

    getTemplate: function () {
        var template,
            hourTemplate,
            minuteTemplate,
            secondTemplate,
            meridianTemplate,
            templateContent;

        if (this.showInputs) {
            hourTemplate = '<input type="text" class="bootstrap-timepicker-hour" maxlength="2"/>';
            minuteTemplate = '<input type="text" class="bootstrap-timepicker-minute" maxlength="2"/>';
            secondTemplate = '<input type="text" class="bootstrap-timepicker-second" maxlength="2"/>';
            meridianTemplate = '<input type="text" class="bootstrap-timepicker-meridian" maxlength="2"/>';
        } else {
            hourTemplate = '<span class="bootstrap-timepicker-hour"></span>';
            minuteTemplate = '<span class="bootstrap-timepicker-minute"></span>';
            secondTemplate = '<span class="bootstrap-timepicker-second"></span>';
            meridianTemplate = '<span class="bootstrap-timepicker-meridian"></span>';
        }

        templateContent = '<table>' +
        '<tr>' +
        '<td><a href="#" data-action="incrementHour"><i class="icon-chevron-up"></i></a></td>' +
        '<td class="separator">&nbsp;</td>' +
        '<td><a href="#" data-action="incrementMinute"><i class="icon-chevron-up"></i></a></td>' +
        (this.showSeconds ?
        '<td class="separator">&nbsp;</td>' +
        '<td><a href="#" data-action="incrementSecond"><i class="icon-chevron-up"></i></a></td>'
        : '') +
        (this.showMeridian ?
        '<td class="separator">&nbsp;</td>' +
        '<td class="meridian-column"><a href="#" data-action="toggleMeridian"><i class="icon-chevron-up"></i></a></td>'
        : '') +
        '</tr>' +
        '<tr>' +
        '<td>' + hourTemplate + '</td> ' +
        '<td class="separator">:</td>' +
        '<td>' + minuteTemplate + '</td> ' +
        (this.showSeconds ?
        '<td class="separator">:</td>' +
        '<td>' + secondTemplate + '</td>'
        : '') +
        (this.showMeridian ?
        '<td class="separator">&nbsp;</td>' +
        '<td>' + meridianTemplate + '</td>'
        : '') +
        '</tr>' +
        '<tr>' +
        '<td><a href="#" data-action="decrementHour"><i class="icon-chevron-down"></i></a></td>' +
        '<td class="separator"></td>' +
        '<td><a href="#" data-action="decrementMinute"><i class="icon-chevron-down"></i></a></td>' +
        (this.showSeconds ?
        '<td class="separator">&nbsp;</td>' +
        '<td><a href="#" data-action="decrementSecond"><i class="icon-chevron-down"></i></a></td>'
        : '') +
        (this.showMeridian ?
        '<td class="separator">&nbsp;</td>' +
        '<td><a href="#" data-action="toggleMeridian"><i class="icon-chevron-down"></i></a></td>'
        : '') +
        '</tr>' +
        '</table>';

        switch (this.template) {
            case 'modal':
                template = '<div class="bootstrap-timepicker-widget modal hide fade in" data-backdrop="' + (this.modalBackdrop ? 'true' : 'false') + '">' +
                '<div class="modal-header">' +
                '<a href="#" class="close" data-dismiss="modal">?/a>' +
                '<h3>Pick a Time</h3>' +
                '</div>' +
                '<div class="modal-content">' +
                templateContent +
                '</div>' +
                '<div class="modal-footer">' +
                '<a href="#" class="btn btn-primary" data-dismiss="modal">OK</a>' +
                '</div>' +
                '</div>';
                break;
            case 'dropdown':
                template = '<div class="bootstrap-timepicker-widget dropdown-menu">' + templateContent + '</div>';
                break;
        }

        return template;
    },

    getTime: function () {
        if (this.hour === '') {
            return '';
        }


        return (this.hour.toString().length === 1 ? '0' + this.hour : this.hour) + ':' +
            (this.minute.toString().length === 1 ? '0' + this.minute : this.minute) +
            (this.showSeconds ? ':' + (this.second.toString().length === 1 ? '0' + this.second : this.second) : '') + (this.showMeridian ? ' ' + this.meridian : '');
    },

    hideWidget: function () {
        if (this.isOpen === false) {
            return;
        }

        this.$element.trigger({
            'type': 'hide.timepicker',
            'time': {
                'value': this.getTime(),
                'hours': this.hour,
                'minutes': this.minute,
                'seconds': this.second,
                'meridian': this.meridian
            }
        });

        if (this.template === 'modal' && this.$widget.modal) {
            this.$widget.modal('hide');
        } else {
            this.$widget.removeClass('open');
        }

        $(document).off('mousedown.timepicker, touchend.timepicker');

        this.isOpen = false;
        // show/hide approach taken by datepicker
        this.$widget.detach();
    },

    highlightUnit: function () {
        this.position = this.getCursorPosition();
        if (this.position >= 0 && this.position <= 2) {
            this.highlightHour();
        } else if (this.position >= 3 && this.position <= 5) {
            this.highlightMinute();
        } else if (this.position >= 6 && this.position <= 8) {
            if (this.showSeconds) {
                this.highlightSecond();
            } else {
                this.highlightMeridian();
            }
        } else if (this.position >= 9 && this.position <= 11) {
            this.highlightMeridian();
        }
    },

    highlightNextUnit: function () {
        switch (this.highlightedUnit) {
            case 'hour':
                this.highlightMinute();
                break;
            case 'minute':
                if (this.showSeconds) {
                    this.highlightSecond();
                } else if (this.showMeridian) {
                    this.highlightMeridian();
                } else {
                    this.highlightHour();
                }
                break;
            case 'second':
                if (this.showMeridian) {
                    this.highlightMeridian();
                } else {
                    this.highlightHour();
                }
                break;
            case 'meridian':
                this.highlightHour();
                break;
        }
    },

    highlightPrevUnit: function () {
        switch (this.highlightedUnit) {
            case 'hour':
                if (this.showMeridian) {
                    this.highlightMeridian();
                } else if (this.showSeconds) {
                    this.highlightSecond();
                } else {
                    this.highlightMinute();
                }
                break;
            case 'minute':
                this.highlightHour();
                break;
            case 'second':
                this.highlightMinute();
                break;
            case 'meridian':
                if (this.showSeconds) {
                    this.highlightSecond();
                } else {
                    this.highlightMinute();
                }
                break;
        }
    },

    highlightHour: function () {
        var $element = this.$element.get(0),
            self = this;

        this.highlightedUnit = 'hour';

        if ($element.setSelectionRange) {
            setTimeout(function () {
                if (self.hour < 10) {
                    $element.setSelectionRange(0, 1);
                } else {
                    $element.setSelectionRange(0, 2);
                }
            }, 0);
        }
    },

    highlightMinute: function () {
        var $element = this.$element.get(0),
            self = this;

        this.highlightedUnit = 'minute';

        if ($element.setSelectionRange) {
            setTimeout(function () {
                if (self.hour < 10) {
                    $element.setSelectionRange(2, 4);
                } else {
                    $element.setSelectionRange(3, 5);
                }
            }, 0);
        }
    },

    highlightSecond: function () {
        var $element = this.$element.get(0),
            self = this;

        this.highlightedUnit = 'second';

        if ($element.setSelectionRange) {
            setTimeout(function () {
                if (self.hour < 10) {
                    $element.setSelectionRange(5, 7);
                } else {
                    $element.setSelectionRange(6, 8);
                }
            }, 0);
        }
    },

    highlightMeridian: function () {
        var $element = this.$element.get(0),
            self = this;

        this.highlightedUnit = 'meridian';

        if ($element.setSelectionRange) {
            if (this.showSeconds) {
                setTimeout(function () {
                    if (self.hour < 10) {
                        $element.setSelectionRange(8, 10);
                    } else {
                        $element.setSelectionRange(9, 11);
                    }
                }, 0);
            } else {
                setTimeout(function () {
                    if (self.hour < 10) {
                        $element.setSelectionRange(5, 7);
                    } else {
                        $element.setSelectionRange(6, 8);
                    }
                }, 0);
            }
        }
    },

    incrementHour: function () {
        if (this.showMeridian) {
            if (this.hour === 11) {
                this.hour++;
                return this.toggleMeridian();
            } else if (this.hour === 12) {
                this.hour = 0;
            }
        }
        if (this.hour === 23) {
            this.hour = 0;

            return;
        }
        this.hour++;
    },

    incrementMinute: function (step) {
        var newVal;

        if (step) {
            newVal = this.minute + step;
        } else {
            newVal = this.minute + this.minuteStep - (this.minute % this.minuteStep);
        }

        if (newVal > 59) {
            this.incrementHour();
            this.minute = newVal - 60;
        } else {
            this.minute = newVal;
        }
    },

    incrementSecond: function () {
        var newVal = this.second + this.secondStep - (this.second % this.secondStep);

        if (newVal > 59) {
            this.incrementMinute(true);
            this.second = newVal - 60;
        } else {
            this.second = newVal;
        }
    },

    mousewheel: function (e) {
        if (this.disableMousewheel) {
            return;
        }

        e.preventDefault();
        e.stopPropagation();

        var delta = e.originalEvent.wheelDelta || -e.originalEvent.detail,
            scrollTo = null;

        if (e.type === 'mousewheel') {
            scrollTo = (e.originalEvent.wheelDelta * -1);
        }
        else if (e.type === 'DOMMouseScroll') {
            scrollTo = 40 * e.originalEvent.detail;
        }

        if (scrollTo) {
            e.preventDefault();
            $(this).scrollTop(scrollTo + $(this).scrollTop());
        }

        switch (this.highlightedUnit) {
            case 'minute':
                if (delta > 0) {
                    this.incrementMinute();
                } else {
                    this.decrementMinute();
                }
                this.highlightMinute();
                break;
            case 'second':
                if (delta > 0) {
                    this.incrementSecond();
                } else {
                    this.decrementSecond();
                }
                this.highlightSecond();
                break;
            case 'meridian':
                this.toggleMeridian();
                this.highlightMeridian();
                break;
            default:
                if (delta > 0) {
                    this.incrementHour();
                } else {
                    this.decrementHour();
                }
                this.highlightHour();
                break;
        }

        return false;
    },

    // This method was adapted from bootstrap-datepicker.
    place: function () {
        if (this.isInline) {
            return;
        }
        var widgetWidth = this.$widget.outerWidth(), widgetHeight = this.$widget.outerHeight(), visualPadding = 10, windowWidth =
            $(window).width(), windowHeight = $(window).height(), scrollTop = $(window).scrollTop();

        var zIndex = parseInt(this.$element.parents().filter(function () { }).first().css('z-index'), 10) + 10;
        var offset = this.component ? this.component.parent().offset() : this.$element.offset();
        var height = this.component ? this.component.outerHeight(true) : this.$element.outerHeight(false);
        var width = this.component ? this.component.outerWidth(true) : this.$element.outerWidth(false);
        var left = offset.left, top = offset.top;

        this.$widget.removeClass('timepicker-orient-top timepicker-orient-bottom timepicker-orient-right timepicker-orient-left');

        if (this.orientation.x !== 'auto') {
            this.picker.addClass('datepicker-orient-' + this.orientation.x);
            if (this.orientation.x === 'right') {
                left -= widgetWidth - width;
            }
        } else {
            // auto x orientation is best-placement: if it crosses a window edge, fudge it sideways
            // Default to left
            this.$widget.addClass('timepicker-orient-left');
            if (offset.left < 0) {
                left -= offset.left - visualPadding;
            } else if (offset.left + widgetWidth > windowWidth) {
                left = windowWidth - widgetWidth - visualPadding;
            }
        }
        // auto y orientation is best-situation: top or bottom, no fudging, decision based on which shows more of the widget
        var yorient = this.orientation.y, topOverflow, bottomOverflow;
        if (yorient === 'auto') {
            topOverflow = -scrollTop + offset.top - widgetHeight;
            bottomOverflow = scrollTop + windowHeight - (offset.top + height + widgetHeight);
            if (Math.max(topOverflow, bottomOverflow) === bottomOverflow) {
                yorient = 'top';
            } else {
                yorient = 'bottom';
            }
        }
        this.$widget.addClass('timepicker-orient-' + yorient);
        if (yorient === 'top') {
            top += height;
        } else {
            top -= widgetHeight + parseInt(this.$widget.css('padding-top'), 10);
        }

        this.$widget.css({
            top: top,
            left: left,
            zIndex: 999999//zIndex fixed some background issue
        });
    },

    remove: function () {
        $('document').off('.timepicker');
        if (this.$widget) {
            this.$widget.remove();
        }
        delete this.$element.data().timepicker;
    },

    setDefaultTime: function (defaultTime) {
        if (!this.$element.val()) {
            if (defaultTime === 'current') {
                var dTime = new Date(),
                    hours = dTime.getHours(),
                    minutes = dTime.getMinutes(),
                    seconds = dTime.getSeconds(),
                    meridian = 'AM';

                if (seconds !== 0) {
                    seconds = Math.ceil(dTime.getSeconds() / this.secondStep) * this.secondStep;
                    if (seconds === 60) {
                        minutes += 1;
                        seconds = 0;
                    }
                }

                if (minutes !== 0) {
                    minutes = Math.ceil(dTime.getMinutes() / this.minuteStep) * this.minuteStep;
                    if (minutes === 60) {
                        hours += 1;
                        minutes = 0;
                    }
                }

                if (this.showMeridian) {
                    if (hours === 0) {
                        hours = 12;
                    } else if (hours >= 12) {
                        if (hours > 12) {
                            hours = hours - 12;
                        }
                        meridian = 'PM';
                    } else {
                        meridian = 'AM';
                    }
                }

                this.hour = hours;
                this.minute = minutes;
                this.second = seconds;
                this.meridian = meridian;

                this.update();

            } else if (defaultTime === false) {
                this.hour = 0;
                this.minute = 0;
                this.second = 0;
                this.meridian = 'AM';
            } else {
                this.setTime(defaultTime);
            }
        } else {
            this.updateFromElementVal();
        }
    },

    setTime: function (time, ignoreWidget) {
        if (!time) {
            this.clear();
            return;
        }

        var timeArray,
            hour,
            minute,
            second,
            meridian;

        if (typeof time === 'object' && time.getMonth) {
            // this is a date object
            hour = time.getHours();
            minute = time.getMinutes();
            second = time.getSeconds();

            if (this.showMeridian) {
                meridian = 'AM';
                if (hour > 12) {
                    meridian = 'PM';
                    hour = hour % 12;
                }

                if (hour === 12) {
                    meridian = 'PM';
                }
            }
        } else {
            if (time.match(/p/i) !== null) {
                meridian = 'PM';
            } else {
                meridian = 'AM';
            }

            time = time.replace(/[^0-9\:]/g, '');

            timeArray = time.split(':');

            hour = timeArray[0] ? timeArray[0].toString() : timeArray.toString();
            minute = timeArray[1] ? timeArray[1].toString() : '';
            second = timeArray[2] ? timeArray[2].toString() : '';

            // idiot proofing
            if (hour.length > 4) {
                second = hour.substr(4, 2);
            }
            if (hour.length > 2) {
                minute = hour.substr(2, 2);
                hour = hour.substr(0, 2);
            }
            if (minute.length > 2) {
                second = minute.substr(2, 2);
                minute = minute.substr(0, 2);
            }
            if (second.length > 2) {
                second = second.substr(2, 2);
            }

            hour = parseInt(hour, 10);
            minute = parseInt(minute, 10);
            second = parseInt(second, 10);

            if (isNaN(hour)) {
                hour = 0;
            }
            if (isNaN(minute)) {
                minute = 0;
            }
            if (isNaN(second)) {
                second = 0;
            }

            if (this.showMeridian) {
                if (hour < 1) {
                    hour = 1;
                } else if (hour > 12) {
                    hour = 12;
                }
            } else {
                if (hour >= 24) {
                    hour = 23;
                } else if (hour < 0) {
                    hour = 0;
                }
                if (hour < 13 && meridian === 'PM') {
                    hour = hour + 12;
                }
            }

            if (minute < 0) {
                minute = 0;
            } else if (minute >= 60) {
                minute = 59;
            }

            if (this.showSeconds) {
                if (isNaN(second)) {
                    second = 0;
                } else if (second < 0) {
                    second = 0;
                } else if (second >= 60) {
                    second = 59;
                }
            }
        }

        this.hour = hour;
        this.minute = minute;
        this.second = second;
        this.meridian = meridian;

        this.update(ignoreWidget);
    },

    showWidget: function () {
        if (this.isOpen) {
            return;
        }

        if (this.$element.is(':disabled')) {
            return;
        }

        // show/hide approach taken by datepicker
        this.$widget.appendTo(this.appendWidgetTo);
        var self = this;
        $(document).on('mousedown.timepicker, touchend.timepicker', function (e) {
            // This condition was inspired by bootstrap-datepicker.
            // The element the timepicker is invoked on is the input but it has a sibling for addon/button.
            if (!(self.$element.parent().find(e.target).length ||
                self.$widget.is(e.target) ||
                self.$widget.find(e.target).length)) {
                self.hideWidget();
            }
        });

        this.$element.trigger({
            'type': 'show.timepicker',
            'time': {
                'value': this.getTime(),
                'hours': this.hour,
                'minutes': this.minute,
                'seconds': this.second,
                'meridian': this.meridian
            }
        });

        this.place();
        if (this.disableFocus) {
            this.$element.blur();
        }

        // widget shouldn't be empty on open
        if (this.hour === '') {
            if (this.defaultTime) {
                this.setDefaultTime(this.defaultTime);
            } else {
                this.setTime('0:0:0');
            }
        }

        if (this.template === 'modal' && this.$widget.modal) {
            this.$widget.modal('show').on('hidden', $.proxy(this.hideWidget, this));
        } else {
            if (this.isOpen === false) {
                this.$widget.addClass('open');
            }
        }

        this.isOpen = true;
    },

    toggleMeridian: function () {
        this.meridian = this.meridian === 'AM' ? 'PM' : 'AM';
    },

    update: function (ignoreWidget) {
        this.updateElement();
        if (!ignoreWidget) {
            this.updateWidget();
        }

        this.$element.trigger({
            'type': 'changeTime.timepicker',
            'time': {
                'value': this.getTime(),
                'hours': this.hour,
                'minutes': this.minute,
                'seconds': this.second,
                'meridian': this.meridian
            }
        });
    },

    updateElement: function () {
        var vl = this.getTime();
        var el = this.$element;
        el.val(vl);
        vl = el.val();;
        el.change();
        vl = el.val();
    },

    updateFromElementVal: function () {
        this.setTime(this.$element.val());
    },

    updateWidget: function () {
        if (this.$widget === false) {
            return;
        }

        var hour = this.hour.toString().length === 1 ? '0' + this.hour : this.hour,
            minute = this.minute.toString().length === 1 ? '0' + this.minute : this.minute,
            second = this.second.toString().length === 1 ? '0' + this.second : this.second;

        if (this.showInputs) {
            this.$widget.find('input.bootstrap-timepicker-hour').val(hour);
            this.$widget.find('input.bootstrap-timepicker-minute').val(minute);

            if (this.showSeconds) {
                this.$widget.find('input.bootstrap-timepicker-second').val(second);
            }
            if (this.showMeridian) {
                this.$widget.find('input.bootstrap-timepicker-meridian').val(this.meridian);
            }
        } else {
            this.$widget.find('span.bootstrap-timepicker-hour').text(hour);
            this.$widget.find('span.bootstrap-timepicker-minute').text(minute);

            if (this.showSeconds) {
                this.$widget.find('span.bootstrap-timepicker-second').text(second);
            }
            if (this.showMeridian) {
                this.$widget.find('span.bootstrap-timepicker-meridian').text(this.meridian);
            }
        }
    },

    updateFromWidgetInputs: function () {
        if (this.$widget === false) {
            return;
        }

        var t = this.$widget.find('input.bootstrap-timepicker-hour').val() + ':' +
            this.$widget.find('input.bootstrap-timepicker-minute').val() +
            (this.showSeconds ? ':' + this.$widget.find('input.bootstrap-timepicker-second').val() : '') +
            (this.showMeridian ? this.$widget.find('input.bootstrap-timepicker-meridian').val() : '')
        ;

        this.setTime(t, true);
    },

    widgetClick: function (e) {
        e.stopPropagation();
        e.preventDefault();

        var $input = $(e.target),
            action = $input.closest('a').data('action');

        if (action) {
            this[action]();
        }
        this.update();

        if ($input.is('input')) {
            $input.get(0).setSelectionRange(0, 2);
        }
    },

    widgetKeydown: function (e) {
        var $input = $(e.target),
            name = $input.attr('class').replace('bootstrap-timepicker-', '');

        switch (e.keyCode) {
            case 9: //tab
                if ((this.showMeridian && name === 'meridian') || (this.showSeconds && name === 'second') || (!this.showMeridian && !this.showSeconds && name === 'minute')) {
                    return this.hideWidget();
                }
                break;
            case 27: // escape
                this.hideWidget();
                break;
            case 38: // up arrow
                e.preventDefault();
                switch (name) {
                    case 'hour':
                        this.incrementHour();
                        break;
                    case 'minute':
                        this.incrementMinute();
                        break;
                    case 'second':
                        this.incrementSecond();
                        break;
                    case 'meridian':
                        this.toggleMeridian();
                        break;
                }
                this.setTime(this.getTime());
                $input.get(0).setSelectionRange(0, 2);
                break;
            case 40: // down arrow
                e.preventDefault();
                switch (name) {
                    case 'hour':
                        this.decrementHour();
                        break;
                    case 'minute':
                        this.decrementMinute();
                        break;
                    case 'second':
                        this.decrementSecond();
                        break;
                    case 'meridian':
                        this.toggleMeridian();
                        break;
                }
                this.setTime(this.getTime());
                $input.get(0).setSelectionRange(0, 2);
                break;
        }
    },

    widgetKeyup: function (e) {
        if ((e.keyCode === 65) || (e.keyCode === 77) || (e.keyCode === 80) || (e.keyCode === 46) || (e.keyCode === 8) || (e.keyCode >= 46 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105)) {
            this.updateFromWidgetInputs();
        }
    }
};

//TIMEPICKER PLUGIN DEFINITION
$.fn.timepicker = function (option) {
    var args = Array.apply(null, arguments);
    args.shift();
    return this.each(function () {
        var $this = $(this),
            data = $this.data('timepicker'),
            options = typeof option === 'object' && option;

        if (!data) {
            $this.data('timepicker', (data = new Timepicker(this, $.extend({}, $.fn.timepicker.defaults, options, $(this).data()))));
        }

        if (typeof option === 'string') {
            data[option].apply(data, args);
        }
    });
};

$.fn.timepicker.defaults = {
    defaultTime: 'current',
    disableFocus: false,
    disableMousewheel: false,
    isOpen: false,
    minuteStep: 15,
    modalBackdrop: false,
    orientation: { x: 'auto', y: 'auto' },
    secondStep: 15,
    showSeconds: false,
    showInputs: true,
    showMeridian: true,
    template: 'dropdown',
    appendWidgetTo: 'body',
    showWidgetOnAddonClick: true
};

$.fn.timepicker.Constructor = Timepicker;
