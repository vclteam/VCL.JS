import VXC = require("VCL/VXComponent");
import VXU = require("VCL/VXUtils");
import V = require("VCL/VCL");
import VXM = require("VCL/VXMenu");

export class TGraphic extends VXC.TPopupmenuComponent {
    public onClicked: () => void;
    public ondblclicked: () => void;
}

export class TImage extends TGraphic {
    private jImage: JQuery;

    private _url: string;
    public get Url(): string {
        return this._url;
    }

    public set Url(val: string) {
        if (val != this._url) {
            this._url = val;
            this.drawDelayed(true);
        }
    }

    /*
    * The required src attribute specifies the URL of the image.
    */
    public get Src(): string {
        return this._url;
    }
    public set Src(val: string) {
        if (val != this._url) {
            this._url = val;
            this.drawDelayed(true);
        }
    }

    public create() {
        this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'div', this.FitToWidth, this.FitToHeight);
        this.jComponent.empty();
        this.jComponent.addClass('btn-group');
        this.jImage = $("<img>");
        this.jImage.appendTo(this.jComponent);

        this.jImage.off("click").click(() => { if (this.onClicked != null) (V.tryAndCatch(() => { this.onClicked(); })); return false; })
        this.jImage.dblclick(() => { if (this.ondblclicked != null) (V.tryAndCatch(() => { this.ondblclicked(); })); return false; })
        
        this.jImage.attr('src', this.Url);
        (<any>this).jDropDownTarget = this.jImage; //control the menupopup mechansim

        super.create();
    }


    public draw(reCreate: boolean) {
        if (!this.parentInitialized()) return;
        super.draw(reCreate);
    }

    public showMenuDropdown() {
        this.jComponent.addClass("open");
    }

    public hideMenuDropdown() {
        this.jComponent.removeClass("open");
    }

}


export class TIcon extends TGraphic {
    private _icon: V.Icon = null;
    public get Icon(): V.Icon {
        return this._icon;
    }
    public set Icon(val: V.Icon) {
        if (val != this._icon) {
            this._icon = val;
            this.drawDelayed(true);
        }
    }

    private _size: number = 1;
    public get Size(): number {
        return this._size;
    }
    public set Size(val: number) {
        if (val != this._size) {
            this._size = val;
            this.drawDelayed(true);
        }
    }


    public create() {
        this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'i', this.FitToWidth, this.FitToHeight);
        this.jComponent.off("click").click(() => { if (this.onClicked != null) (V.tryAndCatch(() => { this.onClicked(); })); return false; })
        this.jComponent.dblclick(() => { if (this.ondblclicked != null) (V.tryAndCatch(() => { this.ondblclicked(); })); return false; })

        if (this.jComponent.attr("class")) {
            var classes = this.jComponent.attr("class").split(" ").filter(function (c) {
                return c.lastIndexOf("icon_", 0) !== 0;
            });
            this.jComponent.removeClass(classes.join(" "));
        }

        this.jComponent.addClass(V.iconEnumToBootstrapStyle(<any>this.Icon));
        if (this.Color) this.jComponent.css('color', this.Color);
        this.jComponent.css('font-size', this.Size + "em");

        super.create();
    }

    private _color: string;
    public get Color(): string {
        return this._color;
    }
    public set Color(val: string) {
        if (V.Application.checkColorString(val)) {
            if (val != this._color) {
                this._color = val;
                this.drawDelayed(true);
            }
        }
    }



    public draw(reCreate: boolean) {
        if (!this.parentInitialized()) return;
        super.draw(reCreate);
    }
}