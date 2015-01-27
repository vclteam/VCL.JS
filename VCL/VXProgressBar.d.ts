import VXC = require("./VXComponent");
import V = require("./VCL");
export declare class TProgressBar extends VXC.TComponent {
    private jBar;
    private _value;
    /**
    * specify the value in percentage of the progress control.
    * Value accept value from 0 to 100
    */
    Value: number;
    private _striped;
    /**
    * Set Striped to true to create a striped effect. Not available in IE7-8.
    **/
    Striped: boolean;
    private _animate;
    /**
    * Set animate to true the stripes right to left. Not available in all versions of IE.
    **/
    Animate: boolean;
    private _progressbarStyle;
    PrgoressBarStyle: V.ProgressBarStyle;
    ButtonStyle: V.ProgressBarStyle;
    create(): void;
    draw(reCreate: boolean): void;
}
export declare class TRatingStart extends VXC.TComponent {
    onClicked: (sender: TRatingStart) => void;
    private _starsize;
    /**
    * specify the value from 0-5 of the rating control.
    * Value accept value from 0 to 5
    */
    StarSize: number;
    private _starcolor;
    StarColor: string;
    private _value;
    /**
    * specify the value from 0-5 of the rating control.
    * Value accept value from 0 to 5
    */
    Value: number;
    private _readonly;
    /**
    * Set Striped to true to create a striped effect. Not available in IE7-8.
    **/
    ReadOnly: boolean;
    private RateTo(to);
    create(): void;
    draw(reCreate: boolean): void;
}
export declare class TSliderBase extends VXC.TComponent {
    constructor(aOwner: VXC.TComponent, renderTo?: string, text?: string);
    private _min;
    MinValue: number;
    private _max;
    MaxValue: number;
    private _step;
    StepValue: number;
    private _showTooltip;
    ShowToolTip: boolean;
    private _showLabels;
    ShowLabels: boolean;
    private _orientation;
    SliderOrientation: V.SliderOrientation;
    private _handle;
    SliderHandle: V.SliderHandle;
    private _selection;
    private _value;
    onFormatValue: (value: string) => string;
    onFormatLabel: (value: string) => string;
    private _slider;
    create(): void;
    draw(reCreate: boolean): void;
}
export declare class TSlider extends TSliderBase {
    Value: number;
    onSlideStop: (sender: TSlider, position: number) => void;
    onSlideStart: (sender: TSlider, position: number) => void;
    onSlide: (sender: TSlider, position: number) => void;
    onChanged: (sender: TSlider) => void;
    create(): void;
}
export declare class TRangeSlider extends TSliderBase {
    FirstValue: number;
    SecondValue: number;
    onSlideStop: (sender: TRangeSlider, position1: number, position2: number) => void;
    onSlideStart: (sender: TRangeSlider, position1: number, position2: number) => void;
    onSlide: (sender: TRangeSlider, position1: number, position2: number) => void;
    onChanged: (sender: TRangeSlider) => void;
    create(): void;
}
