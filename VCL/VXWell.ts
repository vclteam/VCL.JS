/// <reference path="Scripts/jquery.d.ts" />
/// <reference path="Scripts/google.maps.d.ts" />
import VXC = require("VCL/VXComponent");
import VXCO = require("VCL/VXContainer");
import VXU = require("VCL/VXUtils");
import V = require("VCL/VCL");
import VXO = require("VCL/VXObject");

export class VXWell extends VXCO.VXContainer {
    public create() {
        this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'div', this.FitToWidth, this.FitToHeight);
        this.jComponent.addClass('well');
        super.create();
    }

    public draw(reCreate: boolean) {
        if (!this.showed) return;
        if (reCreate || !this.initialized) this.create();
        this.initialized = true;

        super.draw(reCreate);
    }
}

export class VXPanelButton {
    private owner: VXPanel;
    constructor(owner: VXPanel) {
        this.owner = owner;
    }
    private _visible: boolean = false;
    public get Visible(): boolean {
        return this._visible;
    }
    public set Visible(val: boolean) {
        if (val != this._visible) {
            this._visible = val;
            this.owner.draw(false);
        }
    }

    private _size: number = 1;
    public get Size(): number {
        return this._size;
    }
    public set Size(val: number) {
        if (val != this._size) {
            this._size = val;
            this.owner.draw(false);
        }
    }

    private _color: string;
    public get Color(): string {
        return this._color;
    }
    public set Color(val: string) {
        if (V.Application.checkColorString(val)) {
            if (val != this._color) {
                this._color = val;
                this.owner.draw(false);
            }
        }
    }

    private _icon: V.ButtonIcon = V.ButtonIcon.icon_align_justify;
    public get Icon(): V.ButtonIcon {
        return this._icon;
    }
    public set Icon(val: V.ButtonIcon) {
        if (val != this._icon) {
            this._icon = val;
            this.owner.draw(false);
        }
    }
    public onClicked: () => void;
    public jButton: JQuery;
}

export class VXPanel extends VXCO.VXContainer {
    public jHeader: JQuery;
    private jHeaderText: JQuery;
    public jContent: JQuery;

    public CloseButton: VXPanelButton;
    public Button1: VXPanelButton;
    public Button2: VXPanelButton;
    public Button3: VXPanelButton;

    constructor(aOwner: VXC.VXComponent, renderTo?: string, headerText?: string) {
        super(aOwner, renderTo);
        this.CloseButton = new VXPanelButton(this);
        this.CloseButton.Icon = V.ButtonIcon.icon_remove;
        this.Button1 = new VXPanelButton(this);
        this.Button2 = new VXPanelButton(this);
        this.Button3 = new VXPanelButton(this);

        if (headerText != null) this.HeaderText = headerText;
    }


    private _headevisible: boolean = true;
    public get HeaderVisible(): boolean {
        return this._headevisible;
    }
    public set HeaderVisible(val: boolean) {
        if (val != this._headevisible) {
            this._headevisible = val;
            this.owner.draw(false);
        }
    }



    private _backgroundimageurl: string;
    public get BackgroundImageURL(): string {
        return this._backgroundimageurl;
    }
    public set BackgroundImageURL(val: string) {
        if (val != this._backgroundimageurl) {
            this._backgroundimageurl = val;
            this.draw(true);
        }
    }


    private _hedderstyle: V.HeaderStyle = V.HeaderStyle.Default;
    public get HeaderStyle(): V.HeaderStyle {
        return this._hedderstyle;
    }
    public set HeaderStyle(val: V.HeaderStyle) {
        if (val != this._hedderstyle) {
            this._hedderstyle = val;
            this.draw(true);
        }
    }

    

    private _buttonaligment: V.ButtonAlignment = V.ButtonAlignment.Right;
    /*
    * Text specify the panel header text string .
    */
    public get ButtonAlignment(): V.ButtonAlignment {
        return this._buttonaligment;
    }
    public set ButtonAlignment(val: V.ButtonAlignment) {
        if (val != this._buttonaligment) {
            this._buttonaligment = val;
            this.draw(false);
        }
    }


    private _headertext: string;
    /*
    * Text specify the panel header text string .
    */
    public get HeaderText(): string {
        return this._headertext;
    }
    public set HeaderText(val: string) {
        if (val != this._headertext) {
            this._headertext = val;
            this.draw(false);
        }
    }

    private _borderwidth: number = 1;
    public get BorderWidth(): number {
        return this._borderwidth;
    }
    public set BorderWidth(val: number) {
        if (val != this._borderwidth) {
            this._borderwidth = val;
            this.draw(true);
        }
    }

    private _textstyle: V.HeaderTextStyle = V.HeaderTextStyle.default;
    public get HeaderTextStyle(): V.HeaderTextStyle {
        return this._textstyle;
    }
    public set HeaderTextStyle(val: V.HeaderTextStyle) {
        if (val != this._textstyle) {
            this._textstyle = val;
            this.draw(true);
        }
    }


    public onHeaderClicked: (sender: VXC.VXComponent) => void;

    public create() {
        var self = this;
        if (this.jContent == null) {

            this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'div', this.FitToWidth, this.FitToHeight);
            var attrs = {};
            $.each($(this.jComponent)[0].attributes, function (idx, attr) {
                if (attr != null) {
                    attrs[attr.nodeName] = attr.nodeValue;
                    attr.nodeValue = "";
                }
            });

            this.jComponent.addClass('collapse in');

            this.jContent = $("<div>", attrs);
            this.jContent.addClass('panel');
            this.jContent.insertBefore(this.jComponent);

            this.jHeader = $("<div>");
            this.jHeader.addClass('panel-header');
            this.jHeader.click(() => {
                if (this.onHeaderClicked != null) (V.tryAndCatch(() => { this.onHeaderClicked(self); }));

            })
            this.jHeader.appendTo(this.jContent);

            if (this.HeaderTextStyle == V.HeaderTextStyle.h4)
                this.jHeaderText = $("<h4>").css('margin', '0px');
            else if (this.HeaderTextStyle == V.HeaderTextStyle.h5)
                this.jHeaderText = $("<h5>").css('margin', '0px');
            else if (this.HeaderTextStyle == V.HeaderTextStyle.h6)
                this.jHeaderText = $("<h6>").css('margin', '0px');
            else if (this.HeaderTextStyle == V.HeaderTextStyle.lead) {
                this.jHeaderText = $("<div>");
                this.jComponent.addClass('lead');
            } else if (this.HeaderTextStyle == V.HeaderTextStyle.small) {
                this.jHeaderText = $("<div>");
                this.jHeaderText.addClass('small');
            } else {
                this.jHeaderText = $("<div>");
                this.jHeaderText.addClass('muted');
            }
            this.jHeaderText.addClass('pull-left').css('overflow', 'hidden').css('white-space', 'nowrap').css('width', '90%');
            this.jHeaderText.appendTo(this.jHeader);
            this.jComponent.css('display', 'block');
            this.jContent.append(this.jComponent);
            if (this.Width > 0) this.jContent.width(this.Width - this.BorderWidth * 2);

            this.createButton(this.Button3, null);
            this.createButton(this.Button2, null);
            this.createButton(this.Button1, null);
            this.createButton(this.CloseButton, () => {
                if (this.CloseButton.onClicked != null) (V.tryAndCatch(() => { this.CloseButton.onClicked(); }));
                else this.destroy();
            });
            var x = this.jComponent;
            this.jComponent = this.jContent;
            this.jContent = x;
            this.jContent.css('overflow', 'visible');
        }

        this.jComponent.css('border-width', this.BorderWidth);
        this.jHeader.css('border-top-width', this.BorderWidth);


        this.jHeader.removeClass(function (index, css) {
            return (css.match(/\panel-header-\S+/g) || []).join(' ');
        });
        this.jHeaderText.removeClass(function (index, css) {
            return (css.match(/\panel-header-\S+/g) || []).join(' ');
        });
        this.jContent.removeClass(function (index, css) {
            return (css.match(/\panel-\S+/g) || []).join(' ');
        });

        if (this.BackgroundImageURL != null && this.BackgroundImageURL.length > 0) {
            this.jComponent.css('background-image', 'url(' + this.BackgroundImageURL + ')').css('background-size', 'contain').css('background-repeat', 'no-repeat');
        }

        switch (this.HeaderStyle) {
            case V.HeaderStyle.Default:
                this.jHeader.addClass("panel-header-default");
                this.jHeaderText.addClass('panel-header-default');
                this.jContent.addClass('panel-default panel-content'); break;
            case V.HeaderStyle.Primary:
                this.jHeader.addClass("panel-header-primary");
                this.jHeaderText.addClass('panel-header-primary');
                this.jContent.addClass('panel-primary panel-content'); break;
            case V.HeaderStyle.Info:
                this.jHeader.addClass("panel-header-info");
                this.jHeaderText.addClass('panel-header-info');
                this.jContent.addClass('panel-info panel-content '); break;
            case V.HeaderStyle.Success:
                this.jHeader.addClass("panel-header-success");
                this.jHeaderText.addClass('panel-header-success');
                this.jContent.addClass('panel-success'); break;
            case V.HeaderStyle.Warning:
                this.jHeader.addClass("panel-header-warning");
                this.jHeaderText.addClass('panel-header-warning');
                this.jContent.addClass('panel-warning panel-content '); break;
            case V.HeaderStyle.Danger:
                this.jHeader.addClass("panel-header-danger");
                this.jHeaderText.addClass('panel-header-danger');
                this.jContent.addClass('panel-danger panel-content '); break;
            case V.HeaderStyle.Transparent:
                this.jHeader.addClass("panel-header-transparent");
                this.jHeaderText.addClass('panel-header-transparent');
                this.jContent.addClass('panel-transparent panel-content '); break;
        }

        super.create();
    }

    private createButton(button: VXPanelButton, clickEvent: () => void ) {
        if (!button.jButton) {
            button.jButton = $('<div>');
            button.jButton.addClass('panel-button');
            if (clickEvent) button.jButton.click(clickEvent)
            else button.jButton.click(() => {
                if (button.onClicked != null) (V.tryAndCatch(() => { button.onClicked(); }));
            })
            button.jButton.prependTo(this.jHeader);
        }
        if (this.ButtonAlignment == V.ButtonAlignment.Left) {
            button.jButton.addClass('pull-left');
            button.jButton.removeClass('pull-right');
        } else {
            button.jButton.addClass('pull-right');
            button.jButton.removeClass('pull-left');

        }
        if (button.Color) button.jButton.css('color', button.Color);
        button.jButton.css('font-size', button.Size + "em");
        button.jButton.addClass(V.iconEnumToBootstrapStyle(button.Icon));
        button.Visible ? button.jButton.show() : button.jButton.hide();
    }

    public draw(reCreate: boolean) {
        if (!this.showed) return;
        if (reCreate || !this.initialized) this.create();
        this.initialized = true;

        super.draw(reCreate);
        this.jHeaderText.text(this.HeaderText);
        this.HeaderVisible ? this.jHeader.show() : this.jHeader.hide();
        this.createButton(this.Button3, null);
        this.createButton(this.Button2, null);
        this.createButton(this.Button1, null);
        this.createButton(this.CloseButton, null);
    }
}



export class VXGoogleMap extends VXC.VXComponent {
    constructor(aOwner: VXC.VXComponent, renderTo?: string) {
        super(aOwner, renderTo);
    }

    private _googleAPIKey: string = "";
    /*
    * Text specify the panel header text string .
    */
    public get GoogleAPIKey(): string {
        return this._googleAPIKey;
    }
    public set GoogleAPIKey(val: string) {
        if (val != this._googleAPIKey) {
            this._googleAPIKey = val;
            this.draw(false);
        }
    }

    private mapoption: google.maps.MapOptions = {};
    /*
    * Text specify the panel header text string .
    */
    public get MapOptions(): google.maps.MapOptions {
        return this.mapoption;
    }
    public set MapOptions(val: google.maps.MapOptions) {
        if (val != this.mapoption) {
            this.mapoption = val;
            this.draw(false);
        }
    }


    private map: google.maps.Map;
    public create() {
        this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'div', this.FitToWidth, this.FitToHeight);
        var myLatlng = new google.maps.LatLng(0, 0);
        var mapOptions: google.maps.MapOptions = { zoom: 6, center: myLatlng, mapTypeId: google.maps.MapTypeId.ROADMAP };
        this.map = new google.maps.Map(this.jComponent[0], mapOptions);

        super.create();
    }

    public draw(reCreate: boolean) {
        if (!this.showed) return;
        require(["VCL/Scripts/async!http://maps.google.com/maps/api/js?sensor=false&key=" + this.GoogleAPIKey], () => {
            if (reCreate || !this.initialized) this.create();
            this.initialized = true;
            super.draw(reCreate);
            this.refreshMarkers();
        });
    }

    private tmpMarkers: google.maps.Marker[] = [];
    private refreshMarkers() {
        //reset markers
        for (var i = 0; i < this.tmpMarkers.length; i++) {
            this.tmpMarkers[i].setMap(null);
        }
        this.tmpMarkers = [];
        this.markerItems.forEach((item: VXGoogleMapMarker) => { item.marker = null });

        var self = this;
        this.markerItems.forEach((item: VXGoogleMapMarker) => {
            if (item.marker) return;
            if (item.Lat) {
                var myLatlng = new google.maps.LatLng(item.Lat, item.Lng);
                item.marker = new google.maps.Marker({
                    position: myLatlng,
                    map: this.map,
                    title: item.Title
                });
                this.setMarkerClick(item);
                this.tmpMarkers.push(item.marker);
                return;
            }
            if (item.Address) this.decodeAddress(item.Address, item);
        });

        this.markerItems.forEach((item: VXGoogleMapMarker) => {
            if (item.marker && item.Visible) item.marker.setMap(this.map);
            if (item.marker && !item.Visible) item.marker.setMap(null);
        });
        this.optimizeZoomLevel();
    }

    private setMarkerClick(item: VXGoogleMapMarker) {
        var self = this;
        google.maps.event.addListener(item.marker, 'click', function (a) {
            self.markerItems.forEach((item) => {
                if (item.Lat == a.latLng.lb && item.Lng == a.latLng.mb) {
                    if (item.InforWindowContent) {
                        var infowindow = new google.maps.InfoWindow({
                            content: item.InforWindowContent
                        });
                        infowindow.open(this.map, item.marker);
                    }
                    if (this.onClicked != null) (V.tryAndCatch(() => { this.onClicked(); }));
                }
            });
        });
    }


    private decodeAddress(address: string, selectedItem: VXGoogleMapMarker) {
        var myItem: VXGoogleMapMarker = selectedItem;
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'address': myItem.Address }, (results: google.maps.GeocoderResult[], status: google.maps.GeocoderStatus) => {
            if (status == google.maps.GeocoderStatus.OK) {
                myItem.Lat = results[0].geometry.location.lat();
                myItem.Lng = results[0].geometry.location.lng();
                myItem.marker = new google.maps.Marker({
                    map: this.map,
                    position: results[0].geometry.location,
                    title: myItem.Title
                });
                this.setMarkerClick(myItem);
                this.tmpMarkers.push(myItem.marker);
            }
            this.optimizeZoomLevel();
        });
    }

    /**
    * Returns the zoom level at which the given rectangular region fits in the map view. 
    * The zoom level is computed for the currently selected map type. 
    * @param {google.maps.Map} map
    * @param {google.maps.LatLngBounds} bounds 
    * @return {Number} zoom level
    **/
    private getZoomByBounds(map: google.maps.Map, bounds: google.maps.LatLngBounds) {
        var MAX_ZOOM = /*map.mapTypes.get(map.getMapTypeId()).maxZoom ||*/ 21;
        var MIN_ZOOM = /*map.mapTypes.get(map.getMapTypeId()).minZoom ||*/ 0;

        var ne = map.getProjection().fromLatLngToPoint(bounds.getNorthEast());
        var sw = map.getProjection().fromLatLngToPoint(bounds.getSouthWest());

        var worldCoordWidth = Math.abs(ne.x - sw.x);
        var worldCoordHeight = Math.abs(ne.y - sw.y);

        //Fit padding in pixels 
        var FIT_PAD = 40;

        for (var zoom = MAX_ZOOM; zoom >= MIN_ZOOM; --zoom) {
            if (worldCoordWidth * (1 << zoom) + 2 * FIT_PAD < $(map.getDiv()).width() &&
                worldCoordHeight * (1 << zoom) + 2 * FIT_PAD < $(map.getDiv()).height())
                return zoom;
        }
        return 0;
    }

    private optimizeZoomLevel() {
        var bounds = new google.maps.LatLngBounds();
        var found = false;
        this.markerItems.forEach((item: VXGoogleMapMarker) => {
            if (!item.Lat || !item.Lng || !item.Visible) return;
            found = true;
            var point = new google.maps.LatLng(item.Lat, item.Lng);
            bounds.extend(point);
        });
        if (!found) return;
        this.map.setZoom(this.getZoomByBounds(this.map, bounds));
        this.map.setCenter(bounds.getCenter());
    }

    public markerItems: VXO.VXCollection<VXGoogleMapMarker> = new VXO.VXCollection<VXGoogleMapMarker>();
    createMarker(lat: number, lng: number): VXGoogleMapMarker {
        var col: VXGoogleMapMarker = new VXGoogleMapMarker();
        this.markerItems.add(col);
        col.Lat = lat;
        col.Lng = lng;
        return col;
    }

    createMarkerFromAddress(address: string): VXGoogleMapMarker {
        var col: VXGoogleMapMarker = new VXGoogleMapMarker();
        this.markerItems.add(col);
        col.Address = address;
        return col;
    }

    public onLabelClicked: () => void;


}

export class VXGoogleMapMarker extends VXO.VXCollectionItem {
    public marker: any;
    private _lat: number = null;
    public get Lat(): number {
        return this._lat;
    }
    public set Lat(val: number) {
        if (val != this._lat) {
            this._lat = val;
        }
    }

    private _lng: number = null;
    public get Lng(): number {
        return this._lng;
    }
    public set Lng(val: number) {
        if (val != this._lng) {
            this._lng = val;
        }
    }

    private _address: string = null;
    public get Address(): string {
        return this._address;
    }
    public set Address(val: string) {
        if (val != this._address) {
            this._address = val;
        }
    }

    private _title: string = null;
    public get Title(): string {
        return this._title;
    }
    public set Title(val: string) {
        if (val != this._title) {
            this._title = val;
        }
    }

    private _visible: boolean = true;
    public get Visible(): boolean {
        return this._visible;
    }
    public set Visible(val: boolean) {
        if (val != this._visible) {
            this._visible = val;
        }
    }

    private _content: string;
    public get InforWindowContent(): string {
        return this._content;
    }
    public set InforWindowContent(val: string) {
        if (val != this._content) {
            this._content = val;
        }
    }
}