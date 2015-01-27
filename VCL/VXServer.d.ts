/// <reference path="Scripts/jquery.d.ts" />
export declare class TServer {
    private async;
    private timeout;
    CallType: string;
    constructor(async?: boolean, atimeout?: number);
    getHTML(filename: string, callback?: (data) => any, errorCallback?: (textStatus: string) => any): void;
    ping(okCallback?: () => void, errorCallback?: (textStatus: string) => any): void;
    send(method: string, param: any, callback?: (data) => any, errorCallback?: (textStatus: string) => any, cacheTimeOut?: number): JQueryXHR;
    callServerMethod(method: string, param: any, callback?: (data) => any, errorCallback?: (textStatus: string) => any): void;
    private static jspCount;
    callJSONP(serverURL: any, param: any, callback?: (data) => any, errorCallback?: (textStatus: string) => any): void;
}
