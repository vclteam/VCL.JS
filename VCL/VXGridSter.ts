import VXC = require("VCL/VXComponent");
import VXU = require("VCL/VXUtils");
import VXO = require("VCL/VXObject");
import VXCO = require("VCL/VXContainer");
import V = require("VCL/VCL");
import VXP = require("VCL/VXWell");

export class TWidgetGrid extends VXCO.TContainer {
    private _minmum_column: number = 2;
    public get MinimumColumns(): number {
        return this._minmum_column;
    }
    public set MinimumColumns(val: number) {
        if (val != this._minmum_column) {
            this._minmum_column = val;
            this.drawDelayed(true);
        }
    }


    private _margingorizontal: number = 4;
    public get MarginHorizontal(): number {
        return this._margingorizontal;
    }
    public set MarginHorizontal(val: number) {
        if (val != this._margingorizontal) {
            this._margingorizontal = val;
            this.drawDelayed(true);
        }
    }

    private _marginvertical: number = 4;
    public get MarginVertical(): number {
        return this._marginvertical;
    }
    public set MarginVertical(val: number) {
        if (val != this._marginvertical) {
            this._marginvertical = val;
            this.drawDelayed(true);
        }
    }

    private _maxcolumns: number = null;
    public get MaxColumns(): number {
        return this._maxcolumns;
    }
    public set MaxColumns(val: number) {
        if (val != this._maxcolumns) {
            this._maxcolumns = val;
            this.drawDelayed(true);
        }
    }




    private _widgetwidth: number = 88;
    public get WidgetWidth(): number {
        return this._widgetwidth;
    }
    public set WidgetWidth(val: number) {
        if (val != this._widgetwidth) {
            this._widgetwidth = val;
            this.drawDelayed(true);
        }
    }
    private _widgetheight: number = 88;
    public get WidgetHeight(): number {
        return this._widgetheight;
    }
    public set WidgetHeight(val: number) {
        if (val != this._widgetheight) {
            this._widgetheight = val;
            this.drawDelayed(true);
        }
    }

    public jGridster: any;

    public create() {
        var self = this;
        this.jComponent.empty(); //clear all subcomponents
        this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'div', this.FitToWidth, this.FitToHeight);
        this.jComponent.addClass('gridster');

        var ul: JQuery = $('<ul>');
        this.jComponent.append(ul);

        ul.gridster({
            widget_margins: [this.MarginHorizontal, this.MarginVertical],
            widget_base_dimensions: [this.WidgetWidth, this.WidgetHeight],
            //max_cols: this.MaxColumns,
            min_cols: this.MinimumColumns,
            //max_size_x: 1,
            draggable: {
                stop: function (event, ui) {
                    self.updateWidgetsPositions(true);
                }
            },
            serialize_params: function ($w, wgd) {
                return {
                    col: wgd.col,
                    row: wgd.row,
                    size_x: wgd.size_x,
                    size_y: wgd.size_y,
                    widgetID: $($w).data('widgetID'),
                    componentID: $($w).data('componentID')
                };
            },

        });
        this.jGridster = ul.gridster().data('gridster');
        this.jGridster.init();
        this.jGridster.generate_stylesheet();
        this.widgets.forEach((item: TWdgetPanel) => {
            this._addWidget(item, true);
        })
        this.updateWidgetsPositions(false);
        if (!this.Enabled) this.jGridster.disable()

    }

    constructor(aOwner: VXC.TComponent, renderTo?: string) {
        super(aOwner, renderTo);
        (<any>this)._fittowidth = true;
    }


    public draw(reCreate: boolean) {
        if (!this.parentInitialized()) return;
        super.draw(reCreate);
    }

    public widgets = new VXO.TCollection<TWdgetPanel>();
    public createWidget(renderTo: string, headerText: string, sizeX?: number, sizeY?: number, X?: number, Y?: number): TWdgetPanel {
        var item = new TWdgetPanel(this, renderTo);
        item.parentGrid = this;
        if (sizeX != null) item.SizeX = sizeX;
        if (sizeY != null) item.SizeY = sizeY;
        if (X != null) item.X = X;
        if (Y != null) item.Y = Y;
        item.HeaderText = headerText;
        this.widgets.add(item);
        if (sizeX != null) if (this.jGridster != null) this._addWidget(item);
        this.drawDelayed(true);
        return item;
    }

    public addWidget(widget: TWdgetPanel) {
        if (this.widgets.FindItemByID(widget.ID)) {
            V.Application.raiseException("You c'ant enter the same widget twice");
        } else {
            widget.parentGrid = this;
            this.widgets.add(widget);
            if (this.jGridster != null) this._addWidget(widget);
        }
    }


    private _addWidget(item: TWdgetPanel, fast = false) {
        item.create();
        item.Width = this.WidgetWidth * item.SizeX + (item.SizeX - 1) * this.MarginVertical * 2;
        item.Height = this.WidgetHeight * item.SizeY + (item.SizeY - 1) * this.MarginHorizontal * 2;
        item.widgetElment = this.jGridster.add_widget(item.jComponent, item.SizeX, item.SizeY, item.X >= 0 ? item.X : null, item.Y >= 0 ? item.Y : null);

        var paddingTop: number = parseInt(item.jContent.css("margin-top").replace("px", ""));
        var paddingBottom: number = parseInt(item.jContent.css("margin-bottom").replace("px", ""));
        var height = item.jComponent.innerHeight() - item.jHeader.outerHeight() - paddingBottom - paddingTop;
        item.jContent.css('min-height', height + "px");
        item.jContent.css('max-height', height + "px");
        item.widgetElment.data('widgetID', item.WidgetID);
        item.widgetElment.data('componentID', item.ID);
        if (!fast) this.updateWidgetsPositions(fast);
    }

    public get WidgetsLayout(): string {
        var widgetsSet = this.jGridster.serialize();
        var widgetsPos: any[] = [];
        widgetsSet.forEach((item) => {
            widgetsPos.push({ X: item.col, Y: item.row, widgetID: item.widgetID, componentID: item.componentID });
            return true;
        })
        return JSON.stringify(widgetsPos);
    }

    public set WidgetsLayout(val: string) {
        var widgets: any[] = JSON.parse(val);
        widgets.sort((a, b) => {
            if (a.Y > b.Y) return 1;
            if (a.Y < b.Y) return -1;
            if (a.X > b.X) return 1;
            if (a.X < b.X) return -1;

            return 0;
        });
        this.widgets.forEach((item) => { item.Tag = 0; });
        for (var i = 0; i < widgets.length; i++) {
            var widgetID: TWdgetPanel;
            var WidgetComp: TWdgetPanel;
            this.widgets.forEach((item: TWdgetPanel) => {
                if (item.ID == widgets[i].componentID) WidgetComp = item;
                if (item.WidgetID == widgets[i].widgetID) widgetID = item;
                return true;
            });
            if (widgetID == null) widgetID = WidgetComp;
            if (widgetID == null) continue;
            widgetID.Tag = 1;
            widgetID.X = widgets[i].X;
            widgetID.Y = widgets[i].Y;
            widgetID.jComponent.attr('data-row', widgets[i].Y);
            widgetID.jComponent.attr('data-col', widgets[i].X);
        }
        //handle all new wigets
        this.widgets.forEach((item: TWdgetPanel) => {
            if (item.Tag == 0) {
                var obj = this.jGridster.next_position(item.SizeX, item.SizeY);

                item.X = obj.col;
                item.Y = obj.row;

                item.jComponent.attr('data-row', item.Y);
                item.jComponent.attr('data-col', item.X);
            }
        });

    }

    public onLayoutChanged: () => void;
    private updateWidgetsPositions(notifyEvent: boolean) {
        //update widgets structure
        var widgets: any[] = this.jGridster.serialize();
        for (var i = 0; i < widgets.length; i++) {
            var widget = this.widgets.FindItemByID(widgets[i].componentID);
            if (widget != null) {
                widget.X = widgets[i].col;
                widget.Y = widgets[i].row;
            }
        }
        if (this.onLayoutChanged != null && notifyEvent) (V.tryAndCatch(() => { this.onLayoutChanged(); }));
    }

}

export class TWdgetPanel extends VXP.TPanel {
    public widgetElment: JQuery;
    public parentGrid: TWidgetGrid;

    private _widgetID: string;
    public get WidgetID(): string {
        return this._widgetID;
    }
    public set WidgetID(val: string) {
        if (val != this._widgetID) {
            this._widgetID = val;
            if (this.widgetElment != null) this.widgetElment.data('widgetID', this.WidgetID);
        }
    }

    private _sizeY: number = 1;
    public get SizeY(): number {
        return this._sizeY;
    }

    public set SizeY(val: number) {
        if (val != this._sizeY) {
            this._sizeY = Math.floor(val);
        }
    }

    private _sizeX: number = 1;
    public get SizeX(): number {
        return this._sizeX;
    }

    public set SizeX(val: number) {
        if (val != this._sizeX) {
            this._sizeX = Math.floor(val);
        }
    }

    private _Y: number = -1;
    public get Y(): number {
        return this._Y;
    }
    public set Y(val: number) {
        if (val != this._Y) {
            this._Y = Math.floor(val);
        }
    }

    private _X: number = -1;
    public get X(): number {
        return this._X;
    }
    public set X(val: number) {
        if (val != this._X) {
            this._X = Math.floor(val);
        }
    }

    constructor(aOwner: VXC.TComponent, renderTo?: string, sizeX?: number, sizeY?: number, headerText?: string) {
        super(aOwner, renderTo, headerText);
        if (sizeX != null) this.SizeX = sizeX;
        if (sizeY != null) this.SizeY = sizeY;
    }


    public create() {
        super.create();
        var self = this;
        this.jHeader.hover(function () {
            if (self.parentGrid != null && self.parentGrid.Enabled) $(this).css('cursor', 'pointer');
        }, function () {
                $(this).css('cursor', 'auto');
            });

        this.jContent.mousedown((eventObject: JQueryMouseEventObject) => {
            eventObject.stopPropagation();
        });
    }

    public draw(reCreate: boolean) {
        if (!this.parentInitialized()) return;
        super.draw(reCreate);

    }

    public destroy() {
        if (this.parentGrid != null) {
            this.parentGrid.widgets.remove(this);
            (<TWidgetGrid>this.parentGrid).jGridster.remove_widget(this.widgetElment, false);
        }

    }
}