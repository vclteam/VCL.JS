/// <reference path="Scripts/require.d.ts" />
/// <reference path="Scripts/jquery.d.ts" />
import V = require("./VCL");
import VXCO = require("./VXContainer");
export declare class TPage extends VXCO.TContainer {
    constructor();
    show(aOwner?: V.TContainer): void;
    refresh(): void;
    isPage: boolean;
}
