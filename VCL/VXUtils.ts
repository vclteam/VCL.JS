/// <reference path="Scripts/jquery.d.ts" />
import V = require("./VCL");

export class VXUtils {
    public static changeJComponentType(element: JQuery, newType: string, fit2Width: boolean, fit2Height: boolean) :JQuery {
        var attrs = {};

        for (var i = 0, len = $(element)[0].attributes.length; i < len; i++) {
            attrs[$(element)[0].attributes[i].nodeName] = $(element)[0].attributes[i].value;
        }       
        var rep: JQuery = $("<" + newType + "/>", attrs).append($(element).contents());
        element.after(rep).remove();

        if (!fit2Width) rep.css('display', 'inline-block');
        else {
            rep.css('display', 'block');
            rep.css('width', '100%');
        }
        if (!fit2Height);
        else {
            rep.css('position', 'absolute');
            rep.css('height', '100%');
        }
        return rep;
    }
    //finx bootstrap issue with input button & span size
    public static inputWithButton(jedit : JQuery,jbtn : JQuery) : JQuery {
        var prnt: JQuery = $("<div>").css('display', 'table').css('position', 'relative').addClass('input-append').css('margin-bottom','0px').css('height','100%');
        jedit.css('display', 'table-cell').css('width', '100%').css('box-sizing', 'border-box').css('float', 'left').
            css('z-index', '2').css('height', '100%').css('border-right', '0px');
        jbtn.css('display', 'table-cell').css('width', '1%').css('vertical-align', 'middle').css('box-sizing', 'border-box');
        jedit.appendTo(prnt);
        jbtn.appendTo(prnt);
        return prnt;
    }

}



export interface VXDatasetInt {
    ShowProgressBar: boolean;
}
