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
        if (!this.parentInitialized())return;super.draw(reCreate);
        if (reCreate || !this.initialized) this.create();
        this.initialized = true;

        this.jBar.css('width', this.Value + "%");
    }
}


export class VXRatingStart extends VXC.VXComponent {
    public onClicked: (sender: VXRatingStart) => void;
    private _starsize: number = 1.5;
    /*
    * specify the value from 0-5 of the rating control.
    * Value accept value from 0 to 5
    */
    public get StarSize(): number {
        return this._starsize;
    }
    public set StarSize(val: number) {
        if (val != this._starsize) {
            this._starsize = val;
            this.draw(true);
        }
    }

    private _starcolor: string = '#E3CF7A';
    public get StarColor(): string {
        return this._starcolor;
    }
    public set StarColor(val: string) {
        var isOk = /^#[0-9A-F]{6}$/i.test(val);
        if (!isOk) V.Application.raiseException("'" + val + "' is not valid hex color string");
        else {

            if (val != this._starcolor) {
                this._starcolor = val;
                this.draw(true);
            }
        }
    }


    private _value: number = 0;
    /*
    * specify the value from 0-5 of the rating control.
    * Value accept value from 0 to 5
    */
    public get Value(): number {
        return this._value;
    }
    public set Value(val: number) {
        if (val != this._value) {
            if (val > 5) val = 5;
            if (val < 0) val = 0;
            this._value = val;
            this.draw(false);
        }
    }


    private _readonly: boolean = true;
    /**
    * Set Striped to true to create a striped effect. Not available in IE7-8.
    **/
    public get ReadOnly(): boolean {
        return this._readonly;
    }
    public set ReadOnly(val: boolean) {
        if (val != this._readonly) {
            this._readonly = val;
            this.draw(true);
        }
    }

    private RateTo(to: number) {
        for (var i: number = 1; i <= 5; i++) {
            if (i <= to)
                $("#" + this.ID + '-' + i).addClass("icon-star").removeClass('icon-star-empty');
            else
                $("#" + this.ID + '-' + i).removeClass("icon-star").addClass('icon-star-empty');
        }
    }

    public create() {
        var self = this;
        this.jComponent.empty();
        this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'div', this.FitToWidth, this.FitToHeight);
        for (var i = 1; i <= 5; i++) {
            var star: JQuery = $('<span>');
            star.addClass('icon-star-empty ' + this.ID).attr('ID', this.ID + '-' + i).attr('data-position', i).css('cursor', 'pointer');
            star.css('font-size', this.StarSize + "em");
            if (this.StarColor) star.css('color', this.StarColor);

            this.jComponent.append(star);
        }
        //fire event on mouse enter
        $('.' + this.ID).on('mouseenter', function (e) {
            var stars = $(this);
            var star_position = parseInt(stars.attr("data-position"));
            self.RateTo(star_position);
        });
        //mouse leave
        $('.' + this.ID).on('mouseleave', function (e) {
            self.RateTo(self.Value);
        });
        //mouse click
        $('.' + this.ID).on('click', function (e) {
            var stars = $(this);
            var star_position = parseInt(stars.attr("data-position"));
            self.Value = star_position;
            if (self.onClicked != null) V.tryAndCatch(() => { self.onClicked(self); }); 
        });

        if (!this.ReadOnly) {
            this.RateTo(this.Value);
        }
        super.create();
    }
    public draw(reCreate: boolean) {
        if (!this.parentInitialized())return;super.draw(reCreate);
        if (reCreate || !this.initialized) this.create();
        this.initialized = true;
        this.RateTo(this.Value);
    }


}