import VXC = require("VCL/VXComponent");
import VXU = require("VCL/VXUtils");
import V = require("VCL/VCL");

export class VXGraphic extends VXC.VXComponent {
    public onClicked: () => void;
    public ondblclicked: () => void;
}

export class VXImage extends VXGraphic {
    private _url: string;
    public get Url(): string {
        return this._url;
    }

    public set Url(val: string) {
        if (val != this._url) {
            this._url = val;
            this.draw(true);
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
            this.draw(true);
        }
    }

    public create() {
        this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'image', this.FitToWidth, this.FitToHeight);
        this.jComponent.off("click").click(() => { if (this.onClicked != null) (V.tryAndCatch(() => { this.onClicked(); })); return false; })
        this.jComponent.dblclick(() => { if (this.ondblclicked != null) (V.tryAndCatch(() => { this.ondblclicked(); })); return false; })
        
        this.jComponent.attr('src', this.Url);
        super.create();
    }


    public draw(reCreate: boolean) {
        if (!this.parentInitialized())return;super.draw(reCreate);
        if (reCreate || !this.initialized) this.create();
        this.initialized = true;
    }
}


export class VXIcon extends VXGraphic {
    private _icon: V.Icon = null;
    public get Icon(): V.Icon {
        return this._icon;
    }
    public set Icon(val: V.Icon) {
        if (val != this._icon) {
            this._icon = val;
            this.draw(true);
        }
    }

    private _size: number = 1;
    public get Size(): number {
        return this._size;
    }
    public set Size(val: number) {
        if (val != this._size) {
            this._size = val;
            this.draw(false);
        }
    }


    public create() {
        this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'i', this.FitToWidth, this.FitToHeight);
        this.jComponent.off("click").click(() => { if (this.onClicked != null) (V.tryAndCatch(() => { this.onClicked(); })); return false; })
        this.jComponent.dblclick(() => { if (this.ondblclicked != null) (V.tryAndCatch(() => { this.ondblclicked(); })); return false; })

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
                this.draw(false);
            }
        }
    }



    public draw(reCreate: boolean) {
        if (!this.parentInitialized())return;super.draw(reCreate);
        if (reCreate || !this.initialized) this.create();
        this.initialized = true;
    }
}