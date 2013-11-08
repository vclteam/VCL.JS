import V = require("VCL/VCL");
import VXC = require("VCL/VXComponent");
import VXT = require("VCL/VXTextBase");
import VXU = require("VCL/VXUtils");
import VXO = require("VCL/VXObject");

export class VXText extends VXT.VXTextBase {
    public create() {
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
            this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'p', this.FitToWidth, this.FitToHeight);
            this.jComponent.addClass('small');
        } else this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'p', this.FitToWidth, this.FitToHeight);

        this.jComponent.click(() => {
            if (this.onClicked != null) (V.tryAndCatch(() => { this.onClicked(); })); return false;
        })


        if (this.TextColor) this.jComponent.css('color', this.TextColor);

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

    private _textcolor: string;
    public get TextColor(): string {
        return this._textcolor;
    }
    public set TextColor(val: string) {
        if (V.Application.checkColorString(val)) {
            if (val != this._textcolor) {
                this._textcolor = val;
                this.draw(true);
            }
        }
    }


    public draw(reCreate: boolean) {
        if (!this.showed) return;
        if (reCreate || !this.initialized) this.create();
        this.initialized = true;

        this.jComponent.text(this.Text)
        if (this.onClicked != null) this.jComponent.css('cursor', 'pointer');
        else this.jComponent.css('cursor', '');

    }
}

export class VXDBText extends VXT.VXDBTextBase {
    public create() {
        this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'span', this.FitToWidth, this.FitToHeight);
        super.create();
    }

    public draw(reCreate: boolean) {
        if (!this.showed) return;
        if (reCreate || !this.initialized) this.create();
        this.initialized = true;

        this.jComponent.text(this.DataValue)
    }
}



export class VXLabel extends VXT.VXTextBase {
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
        this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'span', this.FitToWidth, this.FitToHeight);
        this.jComponent.click(() => { if (this.onClicked != null) (V.tryAndCatch(() => { this.onClicked(); })); return false; })

        this.jComponent.addClass('label');
        if (this.LabelStyle == V.LabelStyle.Success) this.jComponent.addClass('label-success');
        else if (this.LabelStyle == V.LabelStyle.Warning) this.jComponent.addClass('label-warning');
        else if (this.LabelStyle == V.LabelStyle.Important) this.jComponent.addClass('label-important');
        else if (this.LabelStyle == V.LabelStyle.Info) this.jComponent.addClass('label-info');
        super.create();

    }


    public draw(reCreate: boolean) {
        if (!this.showed) return;
        if (reCreate || !this.initialized) this.create();
        this.initialized = true;

        this.jComponent.text(this.Text)
    }

}

export class VXDBLabel extends VXT.VXDBTextBase {
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
        this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'span', this.FitToWidth, this.FitToHeight);
        this.jComponent.addClass('label');
        this.jComponent.click(() => { if (this.onClicked != null) (V.tryAndCatch(() => { this.onClicked(); })); return false; })
        if (this.LabelStyle == V.LabelStyle.Success) this.jComponent.addClass('label-success');
        else if (this.LabelStyle == V.LabelStyle.Warning) this.jComponent.addClass('label-warning');
        else if (this.LabelStyle == V.LabelStyle.Important) this.jComponent.addClass('label-important');
        else if (this.LabelStyle == V.LabelStyle.Info) this.jComponent.addClass('label-info');
        super.create();
    }

    public draw(reCreate: boolean) {
        if (!this.showed) return;
        if (reCreate || !this.initialized) this.create();
        this.initialized = true;

        this.jComponent.text(this.DataValue)
    }
}

export class VXBadge extends VXT.VXTextBase {
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
        this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'span', this.FitToWidth, this.FitToHeight);
        this.jComponent.addClass('badge');
        this.jComponent.click(() => { if (this.onClicked != null) (V.tryAndCatch(() => { this.onClicked(); })); return false; })

        if (this.BadgeStyle == V.BadgeStyle.Success) this.jComponent.addClass('badge-success');
        else if (this.BadgeStyle == V.BadgeStyle.Warning) this.jComponent.addClass('badge-warning');
        else if (this.BadgeStyle == V.BadgeStyle.Important) this.jComponent.addClass('badge-important');
        else if (this.BadgeStyle == V.BadgeStyle.Info) this.jComponent.addClass('badge-info');
        super.create();
    }


    public draw(reCreate: boolean) {
        if (!this.showed) return;
        if (reCreate || !this.initialized) this.create();
        this.initialized = true;

        this.jComponent.text(this.Text)
    }

}

export class VXDBBadge extends VXT.VXDBTextBase {
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
        this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'span', this.FitToWidth, this.FitToHeight);

        this.jComponent.addClass('badge');
        this.jComponent.click(() => { if (this.onClicked != null) (V.tryAndCatch(() => { this.onClicked(); })); return false; })

        if (this.BadgeStyle == V.BadgeStyle.Success) this.jComponent.addClass('badge-success');
        else if (this.BadgeStyle == V.BadgeStyle.Warning) this.jComponent.addClass('badge-warning');
        else if (this.BadgeStyle == V.BadgeStyle.Important) this.jComponent.addClass('badge-important');
        else if (this.BadgeStyle == V.BadgeStyle.Info) this.jComponent.addClass('badge-info');
        super.create();
    }


    public draw(reCreate: boolean) {
        if (!this.showed) return;
        if (reCreate || !this.initialized) this.create();
        this.initialized = true;

        this.jComponent.text(this.DataValue)
    }
}

export class VXTagCloud extends VXC.VXComponent {
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

    constructor(aOwner: VXC.VXComponent, renderTo?: string) {
        super(aOwner, renderTo);
    }


    private _fontstart: number = 10;
    public get FontStart(): number {
        return this._fontstart;
    }
    public set FontStart(val: number) {
        if (val != this._fontstart) {
            this._fontstart = val;
            this.draw(true);
        }
    }

    private _fontend: number = 18;
    public get FontEnd(): number {
        return this._fontend;
    }
    public set FontEnd(val: number) {
        if (val != this._fontend) {
            this._fontend = val;
            this.draw(true);
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
            tagItem.text(item.Text);
            tagItem.css('margin', "3px");
            tagItem.attr('data-toggl', 'tooltip');
            if (item.Tooltip) tagItem.attr('title',item.Tooltip);
            else tagItem.attr('title', item.Value);
            tagItem.tooltip();

            tagItem.click(() => {
                if (item.onClicked != null) (V.tryAndCatch(() => { item.onClicked(); })); return false;
            })
            

            tagItem.appendTo(this.jComponent);
        });


        super.create();
    }


    public items: V.TCollection<VXTagCloudItem> = new V.TCollection<VXTagCloudItem>();
    public createItem(text: string, value: number): VXTagCloudItem {
        var col: VXTagCloudItem = new VXTagCloudItem();
        this.items.add(col);

        col.Value = value;
        col.Text = text;
        return col;
    }

    public draw(reCreate: boolean) {
        if (!this.showed) return;
        if (reCreate || !this.initialized) this.create();
        this.initialized = true;
    }
}

export class VXTagCloudItem extends VXO.VXCollectionItem {
    public onClicked: () => void;

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

export class VXPillBoxItem extends VXO.VXCollectionItem {
    public onClicked: () => void;

    private _value: string = null;
    public get Value(): string {
        return this._value;
    }
    public set Value(val: string) {
        if (val != this._value) {
            this._value = val;
            if (this.ownerCollection != null)
                this.ownerCollection.refresh();
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

    private _pillboxstyle: V.PillBoxStyle = V.PillBoxStyle.Default;
    public get PillBoxItemStyle(): V.PillBoxStyle {
        return this._pillboxstyle;
    }
    public set PillBoxItemStyle(val: V.PillBoxStyle) {
        if (val != this._pillboxstyle) {
            this._pillboxstyle = val;
        }
    }
}


export class VXPillBox extends VXC.VXComponent {
    public onClicked: (item: VXPillBoxItem) => void;
    public onRemoved: (item: VXPillBoxItem) => void;
    public items: V.TCollection<VXPillBoxItem> = new V.TCollection<VXPillBoxItem>();
    public createItem(text: string, style: V.PillBoxStyle= V.PillBoxStyle.Default): VXPillBoxItem {
        var col = new VXPillBoxItem();
        this.items.add(col);
        col.PillBoxItemStyle = style;
        col.Text = text;
        return col;
    }
    public create() {
        var self = this;
        this.jComponent.empty(); //clear all subcomponents

        this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'div', this.FitToWidth, this.FitToHeight);
        this.jComponent.addClass('pillbox');
        this.items.forEach((item) => {
            var jItem = $('<li>');
            jItem.text(item.Text);
            jItem.data(item);
            jItem.addClass('status-' + V.PillBoxStyle[item.PillBoxItemStyle].toLowerCase());
            jItem.click(function (e) {
                var $li = $(e.currentTarget);
                var item = $li.data();
                if ($li.width() - e.offsetX < 16) {
                    if (self.onRemoved) self.onRemoved(item);
                    $li.remove();
                    self.items.remove(item);
                } else {
                    if (self.onClicked) self.onClicked(item);
                }
                e.preventDefault();
            });
            this.jComponent.append(jItem);
        });
    }

    public draw(reCreate: boolean) {
        if (!this.showed) return;
        if (reCreate || !this.initialized) this.create();
        this.initialized = true;
    }

}