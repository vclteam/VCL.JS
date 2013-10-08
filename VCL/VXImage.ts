import VXC = require("VCL/VXComponent");
import VXU = require("VCL/VXUtils");

export class VXImage extends VXC.VXComponent {
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

    public create() {
        this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'image', this.FitToWidth, this.FitToHeight);
        
        this.jComponent.attr('src', this.Url);
        super.create();
    }


    public draw(reCreate: boolean) {
        if (!this.showed) return;
        if (reCreate || !this.initialized) this.create();
        this.initialized = true;


    }


}