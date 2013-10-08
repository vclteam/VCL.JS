import VXC = require("VCL/VXComponent");
import VXU = require("VCL/VXUtils");
import V = require("VCL/VCL");

export class VXProgressBar extends VXC.VXComponent {
    private jBar: JQuery;

    private _value: number = 0;
    /*
    * specify the value in percentage of the progress control.
    * Value accept value from 0 to 100
    */
    public get Value(): number {
        return this._value;
    }
    public set Value(val: number) {
        if (val != this._value) {
            if (val > 100) val = 100;
            if (val < 0) val = 0;
            this._value = val;
            this.draw(false);
        }
    }


    private _striped: boolean = true;
    /**
    * Set Striped to true to create a striped effect. Not available in IE7-8.
    **/
    public get Striped(): boolean {
        return this._striped;
    }
    public set Striped(val: boolean) {
        if (val != this._striped) {
            this._striped = val;
            this.draw(true);
        }
    }

    private _animate: boolean = false;
    /**
    * Set animate to true the stripes right to left. Not available in all versions of IE.
    **/
    public get Animate(): boolean {
        return this._animate;
    }
    public set Animate(val: boolean) {
        if (val != this._animate) {
            this._animate = val;
            this.draw(true);
        }
    }



    private _progressbarStyle: V.ProgressBarStyle = V.ProgressBarStyle.Default;
    public get PrgoressBarStyle(): V.ProgressBarStyle {
        return this._progressbarStyle;
    }
    public set ButtonStyle(val: V.ProgressBarStyle) {
        if (val != this._progressbarStyle) {
            this._progressbarStyle = val;
            this.draw(true);
        }
    }


    public create() {
        this.jComponent.empty();
        this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'div', this.FitToWidth, this.FitToHeight);
        this.jComponent.addClass("progress");
        if (this.Striped) this.jComponent.addClass('progress-striped');
        if (this.Animate) this.jComponent.addClass('active');
        this.jBar = $("<div>");
        this.jBar.addClass("bar");
        switch (this.PrgoressBarStyle) {
            case V.ProgressBarStyle.Default: break;
            case V.ProgressBarStyle.Primary: this.jBar.addClass("bar-primary"); break;
            case V.ProgressBarStyle.Info: this.jBar.addClass("bar-info"); break;
            case V.ProgressBarStyle.Success: this.jBar.addClass("bar-success"); break;
            case V.ProgressBarStyle.Warning: this.jBar.addClass("bar-warning"); break;
            case V.ProgressBarStyle.Danger: this.jBar.addClass("bar-danger"); break;
        }

        this.jBar.appendTo(this.jComponent);
        super.create();
    }
    public draw(reCreate: boolean) {
        if (!this.showed) return;
        if (reCreate || !this.initialized) this.create();
        this.initialized = true;

        this.jBar.css('width', this.Value + "%");
    }
}