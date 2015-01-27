/// <reference path="Scripts/bootstrap.d.ts" />
import V = require("./VCL");
import VXC = require("./VXContainer");
export declare class TModal extends VXC.TContainer {
    onCreate(): void;
    onClosed: () => void;
    onCancel: () => void;
    private jBody;
    private effect;
    private duration;
    private _maxheight;
    MaxHeight: number;
    constructor(effect?: V.ModalEffects, duration?: number);
    showModal(): void;
    close(): void;
    cancel(): void;
    isPage: boolean;
}
export declare class TModalBuilder extends TModal {
    private colCount;
    private body;
    private header;
    private currentRow;
    constructor(effect?: V.ModalEffects, duration?: number);
    createInput(text?: string, labelText?: string, sizeInSpan?: number): V.TInput;
    createTextArea(text?: string, labelText?: string, sizeInSpan?: number): V.TTextArea;
    createText(text?: string, sizeInSpan?: number): V.TText;
    createInputTime(time?: Date, labelText?: string, sizeInSpan?: number): V.TInputTime;
    createInputDate(date?: Date, labelText?: string, sizeInSpan?: number): V.TInputDate;
    createCheckbox(checked?: boolean, labelText?: string, sizeInSpan?: number): V.TCheckBox;
    createRow(): void;
    getContanierHTML(): string;
    /**
    * Text specify the modal header text.
    */
    HeaderText: string;
    private _okbtntext;
    OKBtnText: string;
    private _cancelbtntext;
    CancelBtnText: string;
    private _showcancelbtn;
    ShowCancelBtn: boolean;
}
