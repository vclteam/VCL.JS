import V = require("./VCL");
import VXC = require("./VXComponent");
import VXT = require("./VXTextBase");
import VXU = require("./VXUtils");
import VXO = require("./VXObject");
import VXM = require("./VXMenu");


export class TText extends VXT.TTextBase {
    public create() {
        var self = this;
        if (this.TextStyle == V.TextStyle.h1)
            this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'h1', this.FitToWidth, this.FitToHeight);
        else if (this.TextStyle == V.TextStyle.h2)
            this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'h2', this.FitToWidth, this.FitToHeight);
        else if (this.TextStyle == V.TextStyle.h3)
            this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'h3', this.FitToWidth, this.FitToHeight);
        else if (this.TextStyle == V.TextStyle.h4)
            this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'h4', this.FitToWidth, this.FitToHeight);
        else if (this.TextStyle == V.TextStyle.h5)
            this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'h5', this.FitToWidth, this.FitToHeight);
        else if (this.TextStyle == V.TextStyle.h6)
            this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'h6', this.FitToWidth, this.FitToHeight);
        else if (this.TextStyle == V.TextStyle.strong)
            this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'strong', this.FitToWidth, this.FitToHeight);
        else if (this.TextStyle == V.TextStyle.lead) {
            this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'p', this.FitToWidth, this.FitToHeight);
            this.jComponent.addClass('lead');
        } else if (this.TextStyle == V.TextStyle.small) {
            this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'small', this.FitToWidth, this.FitToHeight);
        } else this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'p', this.FitToWidth, this.FitToHeight);

        this.jComponent.off("click").click(() => {
            if (this.onClicked != null) { (V.tryAndCatch(() => { this.onClicked(self); })); return false; }
            else return true;
        })

        if (this.TextColor) this.jComponent.css('color', this.TextColor);
        if (this.TextAlignment == V.TextAlignment.Left) this.jComponent.css('text-align', 'left');
        if (this.TextAlignment == V.TextAlignment.Right) this.jComponent.css('text-align', 'right');
        if (this.TextAlignment == V.TextAlignment.Center) this.jComponent.css('text-align', 'center');


        super.create();
    }

    private _textstyle: V.TextStyle = V.TextStyle.Default;
    public get TextStyle(): V.TextStyle {
        return this._textstyle;
    }
    public set TextStyle(val: V.TextStyle) {
        if (val != this._textstyle) {
            this._textstyle = val;
            this.draw(true);
        }
    }


    public draw(reCreate: boolean) {
        if (!this.parentInitialized()) return;
        super.draw(reCreate);
        this.jComponent.html(this.Text)
        if (this.onClicked != null) this.jComponent.css('cursor', 'pointer');
        else this.jComponent.css('cursor', '');

    }
}

export class TDBText extends VXT.TDBTextBase {
    public create() {
        this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'span', this.FitToWidth, this.FitToHeight);
        super.create();
    }

    public draw(reCreate: boolean) {
        if (!this.parentInitialized()) return;
        super.draw(reCreate);
        this.jComponent.text(this.DataValue)
    }
}



export class TLabel extends VXT.TTextBase {
    private _labelstyle: V.LabelStyle;
    public get LabelStyle(): V.LabelStyle {
        return this._labelstyle;
    }
    public set LabelStyle(val: V.LabelStyle) {
        if (val != this._labelstyle) {
            this._labelstyle = val;
            this.draw(true);
        }
    }

    public create() {
        var self = this;
        this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'span', this.FitToWidth, this.FitToHeight);
        this.jComponent.off("click").click(() => {
            if (this.onClicked != null) { (V.tryAndCatch(() => { this.onClicked(self); })); return false; }
            else return true;
        })


        this.jComponent.addClass('label');
        if (this.LabelStyle == V.LabelStyle.Success) this.jComponent.addClass('label-success');
        else if (this.LabelStyle == V.LabelStyle.Warning) this.jComponent.addClass('label-warning');
        else if (this.LabelStyle == V.LabelStyle.Important) this.jComponent.addClass('label-important');
        else if (this.LabelStyle == V.LabelStyle.Info) this.jComponent.addClass('label-info');
        if (this.TextColor) this.jComponent.css('color', this.TextColor);

        if (this.TextAlignment == V.TextAlignment.Left) this.jComponent.css('text-align', 'left');
        if (this.TextAlignment == V.TextAlignment.Right) this.jComponent.css('text-align', 'right');
        if (this.TextAlignment == V.TextAlignment.Center) this.jComponent.css('text-align', 'center');

        super.create();
    }


    public draw(reCreate: boolean) {
        if (!this.parentInitialized()) return;
        super.draw(reCreate);

        this.jComponent.text(this.LocalizeText(this.Text))
    }

}

export class TDBLabel extends VXT.TDBTextBase {
    private _labelstyle: V.LabelStyle;
    public get LabelStyle(): V.LabelStyle {
        return this._labelstyle;
    }
    public set LabelStyle(val: V.LabelStyle) {
        if (val != this._labelstyle) {
            this._labelstyle = val;
            this.drawDelayed(true);
        }
    }


    public create() {
        this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'span', this.FitToWidth, this.FitToHeight);
        this.jComponent.addClass('label');
        if (this.Rtl == true) this.jComponent.attr("dir", "RTL");
        this.jComponent.off("click").click(() => {
            if (this.onClicked != null) { (V.tryAndCatch(() => { this.onClicked(); })); return false; }
            else return true;
        })

        if (this.LabelStyle == V.LabelStyle.Success) this.jComponent.addClass('label-success');
        else if (this.LabelStyle == V.LabelStyle.Warning) this.jComponent.addClass('label-warning');
        else if (this.LabelStyle == V.LabelStyle.Important) this.jComponent.addClass('label-important');
        else if (this.LabelStyle == V.LabelStyle.Info) this.jComponent.addClass('label-info');
        if (this.TextColor) this.jComponent.css('color', this.TextColor);
        super.create();
    }

    public draw(reCreate: boolean) {
        if (!this.parentInitialized()) return;
        super.draw(reCreate);

        this.jComponent.text(this.DataValue)
    }
}

export class TBadge extends VXT.TTextBase {
    private _badgestyle: V.BadgeStyle;
    public get BadgeStyle(): V.BadgeStyle {
        return this._badgestyle;
    }
    public set BadgeStyle(val: V.BadgeStyle) {
        if (val != this._badgestyle) {
            this._badgestyle = val;
            this.draw(true);
        }
    }

    public create() {
        var self = this;
        this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'span', this.FitToWidth, this.FitToHeight);
        this.jComponent.addClass('badge');
        if (this.Rtl == true) this.jComponent.attr("dir", "RTL");
        this.jComponent.off("click").click(() => {
            if (this.onClicked != null) { (V.tryAndCatch(() => { this.onClicked(self); })); return false; }
            else return true;
        })


        if (this.BadgeStyle == V.BadgeStyle.Success) this.jComponent.addClass('badge-success');
        else if (this.BadgeStyle == V.BadgeStyle.Warning) this.jComponent.addClass('badge-warning');
        else if (this.BadgeStyle == V.BadgeStyle.Important) this.jComponent.addClass('badge-important');
        else if (this.BadgeStyle == V.BadgeStyle.Info) this.jComponent.addClass('badge-info');
        if (this.TextColor) this.jComponent.css('color', this.TextColor);
        if (this.TextAlignment == V.TextAlignment.Left) this.jComponent.css('text-align', 'left');
        if (this.TextAlignment == V.TextAlignment.Right) this.jComponent.css('text-align', 'right');
        if (this.TextAlignment == V.TextAlignment.Center) this.jComponent.css('text-align', 'center');

        super.create();
    }


    public draw(reCreate: boolean) {
        if (!this.parentInitialized()) return;
        super.draw(reCreate);


        this.jComponent.text(this.LocalizeText(this.Text))
    }

}

export class TDBBadge extends VXT.TDBTextBase {
    private _badgestyle: V.BadgeStyle;
    public get BadgeStyle(): V.BadgeStyle {
        return this._badgestyle;
    }
    public set BadgeStyle(val: V.BadgeStyle) {
        if (val != this._badgestyle) {
            this._badgestyle = val;
            this.drawDelayed(true);
        }
    }

    public create() {
        this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'span', this.FitToWidth, this.FitToHeight);

        this.jComponent.addClass('badge');
        if (this.Rtl == true) this.jComponent.attr("dir", "RTL");
        this.jComponent.off("click").click(() => {
            if (this.onClicked != null) { (V.tryAndCatch(() => { this.onClicked(); })); return false; }
            else return true;
        })


        if (this.BadgeStyle == V.BadgeStyle.Success) this.jComponent.addClass('badge-success');
        else if (this.BadgeStyle == V.BadgeStyle.Warning) this.jComponent.addClass('badge-warning');
        else if (this.BadgeStyle == V.BadgeStyle.Important) this.jComponent.addClass('badge-important');
        else if (this.BadgeStyle == V.BadgeStyle.Info) this.jComponent.addClass('badge-info');
        if (this.TextColor) this.jComponent.css('color', this.TextColor);
        super.create();
    }


    public draw(reCreate: boolean) {
        if (!this.parentInitialized()) return;
        super.draw(reCreate);

        this.jComponent.text(this.DataValue)
    }
}

export class TTagCloud extends VXC.TComponent {
    /** Custom Format tooltip */
    public ToolTipFormat: (item: TTagCloudItem) => string;

    /*
        Use the OnClick event handler to respond when the user clicks the control. 
    */
    public onClicked: (item: TTagCloudItem) => void;

    private selectedTagItem: JQuery;

    /**
    @aOwner     Indicates the component that is responsible for streaming and freeing this component.Onwer must be TContainer
    @renderTo   (Optional) the id of the html element that will be the parent node for this component
    **/
    constructor(aOwner: VXC.TComponent, renderTo?: string) {
        super(aOwner, renderTo);
    }

    private compareWeights(a: number, b: number) {
        return a - b;
    }

    // Converts hex to an RGB array
    private toRGB(code: string): number[] {
        if (code.length === 4) {
            code = code.replace(/(\w)(\w)(\w)/gi, "\$1\$1\$2\$2\$3\$3");
        }
        var hex = /(\w{2})(\w{2})(\w{2})/.exec(code);
        return [parseInt(hex[1], 16), parseInt(hex[2], 16), parseInt(hex[3], 16)];
    }

    // Converts an RGB array to hex
    private toHex(ary) {
        return "#" + jQuery.map(ary, function (i) {
            var hex = i.toString(16);
            hex = (hex.length === 1) ? "0" + hex : hex;
            return hex;
        }).join("");
    }

    private colorIncrement(range) {
        var self = this;
        return jQuery.map(self.toRGB(self.ColorEnd), function (n, i) {
            return (n - self.toRGB(self.ColorStart)[i]) / range;
        })
    }

    private tagColor(increment, weighting) {
        var rgb = jQuery.map(this.toRGB(this.ColorStart), function (n, i) {
            var ref = Math.round(n + (increment[i] * weighting));
            if (ref > 255) {
                ref = 255;
            } else {
                if (ref < 0) {
                    ref = 0;
                }
            }
            return ref;
        });
        return this.toHex(rgb);
    }

    private _fontstart: number = 10;
    public get FontStart(): number {
        return this._fontstart;
    }
    public set FontStart(val: number) {
        if (val != this._fontstart) {
            this._fontstart = val;
            this.drawDelayed(true);
        }
    }

    private _fontend: number = 18;
    public get FontEnd(): number {
        return this._fontend;
    }
    public set FontEnd(val: number) {
        if (val != this._fontend) {
            this._fontend = val;
            this.drawDelayed(true);
        }
    }

    private _brackets: boolean = false;
    public get BracketsAroundText(): boolean {
        return this._brackets;
    }
    public set BracketsAroundText(val: boolean) {
        if (val != this._brackets) {
            this._brackets = val;
            this.drawDelayed(true);
        }
    }

    private _colorstart: string = V.getClassStyleHexColor('btn-primary', 'background-color');
    public get ColorStart(): string {
        return this._colorstart;
    }
    public set ColorStart(val: string) {
        if (V.Application.checkColorString(val)) {
            if (val != this._colorstart) {
                this._colorstart = val;
                this.draw(true);
            }
        }
    }

    private _colorend: string = V.getClassStyleHexColor('btn-danger', 'background-color');
    public get ColorEnd(): string {
        return this._colorend;
    }
    public set ColorEnd(val: string) {
        if (V.Application.checkColorString(val)) {
            if (val != this._colorend) {
                this._colorend = val;
                this.draw(true);
            }
        }
    }

    public create() {
        var self = this;
        this.jComponent.empty(); //clear all subcomponents

        this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'div', this.FitToWidth, this.FitToHeight);
        this.jComponent.css('vertical-align', 'middle');
        this.jComponent.css('text-align', 'center');
        this.jComponent.css('display', 'table-cell');
        var lowest = 11111111110;
        var highest = 0;
        this.items.forEach((item) => {
            if (item.Value < lowest) lowest = item.Value;
            if (item.Value > highest) highest = item.Value;
        });

        var range: number = highest - lowest;

        if (range === 0) { range = 1; }
        // Sizes
        var fontIncr, colorIncr;
        fontIncr = (this.FontEnd - this.FontStart) / range;
        colorIncr = this.colorIncrement(range);

        this.items.forEach((item) => {
            var tagItem = $('<p style=" cursor: pointer;display:inline-block">');
            var weighting = item.Value - lowest;
            tagItem.css({ "font-size": this.FontStart + (weighting * fontIncr) + "pt" });
            tagItem.css({ "color": this.tagColor(colorIncr, weighting) });
            var txt = item.Text;
            if (this.BracketsAroundText) txt = "[" + txt + "]";
            tagItem.text(txt);
            tagItem.css('margin', "3px");
            tagItem.attr('data-toggl', 'tooltip');
            if (this.ToolTipFormat) tagItem.attr('title', this.ToolTipFormat(item));
            else if (item.Tooltip) tagItem.attr('title', item.Tooltip);
            else tagItem.attr('title', item.Value);
            tagItem.tooltip();

            tagItem.off("click").click(() => {
                if (self.selectedTagItem)
                    self.selectedTagItem.css("background-color", "");
                self.selectedTagItem = tagItem;
                self.selectedTagItem.css("background-color", "yellow");
                if (self.onClicked != null) (V.tryAndCatch(() => { self.onClicked(item); })); return false;
            })


            tagItem.appendTo(this.jComponent);
        });


        super.create();
    }


    public items: V.TCollection<TTagCloudItem> = new V.TCollection<TTagCloudItem>();
    public createItem(text: string, value: number): TTagCloudItem {
        var col: TTagCloudItem = new TTagCloudItem();
        this.items.add(col);

        col.Value = value;
        col.Text = text;
        return col;
    }

    public draw(reCreate: boolean) {
        if (!this.parentInitialized()) return;
        super.draw(reCreate);

    }
}

export class TTagCloudItem extends VXO.TCollectionItem {
    private _text: string = null;
    public get Text(): string {
        return this._text;
    }
    public set Text(val: string) {
        if (val != this._text) {
            this._text = val;
        }
    }

    private _value: number = null;
    public get Value(): number {
        return this._value;
    }
    public set Value(val: number) {
        if (val != this._value) {
            this._value = val;
        }
    }

    private _tooltip: string = null;
    public get Tooltip(): string {
        return this._tooltip;
    }
    public set Tooltip(val: string) {
        if (val != this._tooltip) {
            this._tooltip = val;
        }
    }
}

export class TPillBoxItem extends VXO.TCollectionItem {
    public menuItems = new VXM.TMenuItemCollection<VXM.TMenuItem>();
    public createMenuItem(text: string, onClicked?: () => void): VXM.TMenuItem {
        var menuItem = new VXM.TMenuItem();
        menuItem.Text = text;
        menuItem.onClicked = onClicked;
        this.menuItems.add(menuItem);
        if (this.OwnerCollection != null) this.OwnerCollection.refresh();

        return menuItem;
    }


    private _value: string = null;
    public get Value(): string {
        return this._value;
    }
    public set Value(val: string) {
        if (val != this._value) {
            this._value = val;
            if (this.OwnerCollection != null)
                this.OwnerCollection.refresh();
        }
    }

    private _text: string = null;
    public get Text(): string {
        return this._text;
    }
    public set Text(val: string) {
        if (val != this._text) {
            this._text = val;
            if (this.OwnerCollection != null)
                this.OwnerCollection.refresh();
        }
    }

    private _width: number = null;
    public get Width(): number {
        return this._width;
    }
    public set Width(val: number) {
        if (val != this._width) {
            this._width = val;
        }
    }


    private _pillboxstyle: V.PillBoxStyle = V.PillBoxStyle.Default;
    public get PillBoxItemStyle(): V.PillBoxStyle {
        return this._pillboxstyle;
    }
    public set PillBoxItemStyle(val: V.PillBoxStyle) {
        if (val != this._pillboxstyle) {
            this._pillboxstyle = val;
        }
    }

    private _enableremove: boolean = true;
    public get EnableRemove(): boolean {
        return this._enableremove;
    }
    public set EnableRemove(val: boolean) {
        if (val != this._enableremove) {
            this._enableremove = val;
        }
    }

    private _tooltip: string = "";
    public get Tooltip(): string {
        return this._tooltip;
    }
    public set Tooltip(val: string) {
        this._tooltip = val;
    }



}


export class TPillBox extends VXC.TComponent {
    public onClicked: (item: TPillBoxItem) => void;
    public onRemoved: (item: TPillBoxItem) => void;
    public onRemove : (item: TPillBoxItem) => boolean;
    public items: V.TCollection<TPillBoxItem> = new V.TCollection<TPillBoxItem>();
    public createItem(text: string, style: V.PillBoxStyle= V.PillBoxStyle.Default): TPillBoxItem {
        var col = new TPillBoxItem();
        this.items.add(col);
        col.PillBoxItemStyle = style;
        col.Text = text;
        this.drawDelayed(true);
        return col;
    }

    public removeItem(item: TPillBoxItem) {
        this.items.remove(item);
        if (this.onRemoved) this.onRemoved(item);

        this.drawDelayed(true);
    }

    public create() {
        var self = this;
        this.jComponent.empty(); //clear all subcomponents

        this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'div', this.FitToWidth, this.FitToHeight);
        this.jComponent.addClass('pillbox');
        this.items.forEach((item) => {
            var jItem = $('<li>').addClass('pillboxitem dropdown');
            if (item.Tooltip) jItem.attr("title", item.Tooltip);
            var jtext = $('<span>').html(item.Text);
            jtext.appendTo(jItem);
            if (item.Width) jItem.css('width', item.Width + "px");
            if (item.EnableRemove) jItem.attr('data-content', String.fromCharCode(215));
            
            jItem.data("ID", item);
            jItem.addClass('status-' + V.PillBoxStyle[item.PillBoxItemStyle].toLowerCase());
            if (item.menuItems.length() > 0) {
                jtext.append($('<span class="caret"/>'));
                jtext.addClass("dropdown-toggle");
                jtext.attr('data-toggle', "dropdown");
                item.menuItems.createmenu('dropdown-menu').appendTo(jItem);
                $('.dropdown-toggle').dropdown()
            }

            jItem.off("click").click(function (e) {
                var $li = $(e.currentTarget);
                var item: TPillBoxItem = $li.data("ID");
                if (item.EnableRemove && $li.width() + $li.offset().left - e.pageX < 16)  {
                    var rc: any;
                    if (self.onRemove) rc = self.onRemove(item);
                    if (rc != false) {
                        $li.remove();
                        self.removeItem(item);

                    }
                } else {
                    if (self.onClicked) self.onClicked(item);
                }
                e.preventDefault();
            });
            this.jComponent.append(jItem);
        });
    }

    public draw(reCreate: boolean) {
        if (!this.parentInitialized()) return;
        super.draw(reCreate);
    }

}


export class TBreadCrumbItem extends VXO.TCollectionItem {
    private _value: string = null;
    public get Value(): string {
        return this._value;
    }
    public set Value(val: string) {
        if (val != this._value) {
            this._value = val;
            if (this.OwnerCollection != null)
                this.OwnerCollection.refresh();
        }
    }

    private _textcolor: string;
    public get TextColor(): string {
        return this._textcolor;
    }
    public set TextColor(val: string) {
        if (V.Application.checkColorString(val)) {
            if (val != this._textcolor) {
                this._textcolor = val;
            }
        }
    }


    private _text: string = null;
    public get Text(): string {
        return this._text;
    }
    public set Text(val: string) {
        if (val != this._text) {
            this._text = val;
        }
    }

    private _enabled: boolean = true;
    public get Enabled(): boolean {
        return this._enabled;
    }
    public set Enabled(val: boolean) {
        if (val != this._enabled) {
            this._enabled = val;
        }
    }
}



export class TBreadCrumb extends VXC.TComponent {
    public onClicked: (item: TBreadCrumbItem) => void;

    public items: V.TCollection<TBreadCrumbItem> = new V.TCollection<TBreadCrumbItem>();
    public createItem(text: string): TBreadCrumbItem {
        var col = new TBreadCrumbItem();
        this.items.add(col);
        col.Text = text;
        return col;
    }

    public create() {
        var self = this;
        this.jComponent.empty(); //clear all subcomponents

        this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'ul', this.FitToWidth, this.FitToHeight);
        this.jComponent.addClass('breadcrumb');

        var jItem: JQuery;
        var sepItem: JQuery;
        this.items.forEach((item) => {
            jItem = $('<li>');
            var aItem;
            jItem.data("ID", item);
            if (!item.Enabled) {
                jItem.addClass('active');
                jItem.text(item.Text);
                if (item.TextColor) jItem.css('color', item.TextColor);
                jItem.css('cursor', 'text');
            } else {
                aItem = $('<a>');
                aItem.text(item.Text);
                //aItem.attr('href', '#');
                aItem.appendTo(jItem);
                if (item.TextColor) aItem.css('color', item.TextColor);
                aItem.css('cursor', 'pointer');
            }

            sepItem = $('<span >').addClass('divider');
            sepItem.text(' > ');
            sepItem.appendTo(jItem);

            jItem.off("click").click(function (e) {
                var $li = $(e.currentTarget);
                var item = $li.data("ID");
                if (self.onClicked) self.onClicked(item);
                e.preventDefault();
            });
            this.jComponent.append(jItem);
        });

        if (sepItem) sepItem.remove(); //remove seperator from last item
    }

    public draw(reCreate: boolean) {
        if (!this.parentInitialized()) return;
        super.draw(reCreate);
    }

}



export class TPaginationItem extends VXO.TCollectionItem {
    private _pagination: V.TPagination = null;
    private jImage: JQuery = null;
    private jItem: JQuery = null;
    private jText: JQuery = null;


    constructor(aOwner: V.TPagination) {
        super();
        this._pagination = aOwner;
    }


    private _text: string = null;
    public get Text(): string {
        return this._text;
    }
    public set Text(val: string) {
        if (val != this._text) {
            this._text = val;
        }
    }

    private _enabled: boolean = true;
    public get Enabled(): boolean {
        return this._enabled;
    }
    public set Enabled(val: boolean) {
        if (val != this._enabled) {
            this._enabled = val;
        }
    }

    private _buttonicon: V.ButtonIcon = null;
    public get ButtonIcon(): V.ButtonIcon {
        return this._buttonicon;
    }
    public set ButtonIcon(val: V.ButtonIcon) {
        if (val != this._buttonicon) {
            this._buttonicon = val;
            this._pagination.drawDelayed(true);
        }
    }

    private _iconalignment: V.IconAlignment = V.IconAlignment.Left;
    public get IconAlignment(): V.IconAlignment {
        return this._iconalignment;
    }
    public set IconAlignment(val: V.IconAlignment) {
        if (val != this._iconalignment) {
            this._iconalignment = val;
            this._pagination.drawDelayed(true);
        }
    }

    public create() {
        var self: V.TPaginationItem = this;
        this.jImage = $('<i/>');
        this.jItem = $('<li>');
        this.jText = $('<span/>');
        this.jText.text(this.Text);

        var aItem: JQuery = $('<a>');

        if (this.ButtonIcon) {
            $(this.jImage).addClass(V.iconEnumToBootstrapStyle(this.ButtonIcon));
            if (this.ButtonIcon == V.ButtonIcon.icon_spinner)
                $(this.jImage).addClass('icon-spin');
            aItem.append(this.jImage);
            if (this._pagination.PaginationSize == V.PaginationSize.Large) {
                this.jImage.addClass('icon-large');
                this.jImage.css('margin-top', '1px');
                if (this.IconAlignment == V.IconAlignment.Left) this.jText.css('padding-left', '8px');
                else this.jText.css('padding-right', '8px');
            }
            if (this._pagination.PaginationSize == V.PaginationSize.Default) {
                this.jImage.css('margin-top', '3px');
            }
            if (this._pagination.PaginationSize == V.PaginationSize.Small) {
                this.jImage.css('margin-top', '2px');
            }
            if (this._pagination.PaginationSize == V.PaginationSize.Mini) {
                this.jImage.css('margin-top', '3px');
            }
            if (this.IconAlignment == V.IconAlignment.Left) this.jImage.addClass('pull-left');
            else this.jImage.addClass('pull-right');
        }
        aItem.append(this.jText);

        if (!this.Enabled) {
            this.jItem.addClass('disabled');
        } else {
            //aItem.attr('href', '#');
            this.jItem.off("click").click(function (e) {
                var li: JQuery = $(this);
                var item = li.data("ID");
                item._pagination.items.forEach((item) => {
                    (<any>item).jItem.removeClass('active');
                })
                li.addClass('active');
                if (item._pagination.onClicked) item._pagination.onClicked(item);
                e.preventDefault();
            });
        }
        this.jItem.append(aItem);
    }



}


export class TPagination extends VXC.TComponent {


    public items: V.TCollection<TPaginationItem> = new V.TCollection<TPaginationItem>();


    public onClicked: (item: TPaginationItem) => void;

    public createItem(text: string): TPaginationItem {
        var col = new TPaginationItem(this);
        this.items.add(col);
        col.Text = text;
        this.drawDelayed(true);
        return col;
    }

    private _alignment: V.PaginationAlignment = V.PaginationAlignment.Left;
    public get PaginationAlignment(): V.PaginationAlignment {
        return this._alignment;
    }
    public set PaginationAlignment(val: V.PaginationAlignment) {
        if (val != this._alignment) {
            this._alignment = val;
            this.drawDelayed(true);
        }
    }

    private _paginationsize: V.PaginationSize = V.PaginationSize.Default;
    public get PaginationSize(): V.PaginationSize {
        return this._paginationsize;
    }
    public set PaginationSize(val: V.PaginationSize) {
        if (val != this._paginationsize) {
            this._paginationsize = val;
            this.drawDelayed(true);
        }
    }

    public create() {
        var self = this;

        this.jComponent.empty(); //clear all subcomponents
        this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'ul', this.FitToWidth, this.FitToHeight);
        this.jComponent.addClass('pagination');
        switch (this._paginationsize) {
            case V.PaginationSize.Large: this.jComponent.addClass("pagination-large"); break;
            case V.PaginationSize.Small: this.jComponent.addClass("pagination-small"); break;
            case V.PaginationSize.Mini: this.jComponent.addClass("pagination-mini"); break;
        }
        switch (this._alignment) {
            case V.PaginationAlignment.Right: this.jComponent.addClass("pagination-right"); break;
            case V.PaginationAlignment.Center: this.jComponent.addClass("pagination-centered"); break;
            default:
                this.jComponent.removeClass("pagination-right");
                this.jComponent.removeClass("pagination-centered");
                break;
        }

        var picker: JQuery = $('<ul>');

        this.items.forEach((item) => {
            item.create();
            (<any>item).jItem.data("ID", item);
            picker.append((<any>item).jItem);
        });


        this.jComponent.append(picker);

    }

    public draw(reCreate: boolean) {
        if (!this.parentInitialized()) return;
        super.draw(reCreate);
    }

}
