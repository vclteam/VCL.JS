/// <reference path="../VCL/Scripts/jquery.d.ts" />
import V = require("VCL/VCL");

export class VXUtils {
    public static changeJComponentType(element: JQuery, newType: string, fit2Width: boolean, fit2Height: boolean) :JQuery {
        var attrs = {};

        for (var i = 0, len = $(element)[0].attributes.length; i < len; i++) {
            attrs[$(element)[0].attributes[i].nodeName] = $(element)[0].attributes[i].nodeValue;
        }       
        var rep: JQuery = $("<" + newType + "/>", attrs).append($(element).contents());
        element.after(rep).remove();

        if (!fit2Width) rep.css('display', 'inline-block');
        else {
            rep.css('display', 'block');
            //rep.css('width', '100%');
        }
        if (!fit2Height);
        else {
            rep.css('position', 'absolute');
            rep.css('height', '100%');
        }
        return rep;
    }


}


