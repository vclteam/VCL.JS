/// <reference path="../VCL/Scripts/jquery.d.ts" />
import V = require("VCL/VCL");
import VO = require("VCL/VXObject");
export class TServer {
    private async: boolean;
    private timeout: number = 20000;
    public  CallType: string = "POST";

    public 
    constructor(async?: boolean) {
        this.async = true;
        if (async != null) this.async = async;

    }

    getHTML(filename: string, callback?: (data) => any, errorCallback?: (textStatus: string) => any) {
        var key = "getHTML~" + filename + "~E31dfdf~";
        var _data = cache.getItem(key);
        if (_data != null) {
            callback(_data.data);
            return;
        }

        var ajxParam: JQueryAjaxSettings = {
            async: this.async, timeout: this.timeout,
            url: filename, dataType: "html",
            cache: false,
            success: (data: any, textStatus: string, jqXHR: JQueryXHR) => {
                var myData: ServerCacheItem = new ServerCacheItem();
                myData.data = data;
                cache.setItem(key, myData, { expirationSliding: 3600 });
                if (callback != null) callback(data);
            },
            error: (jqXHR: JQueryXHR, textStatus: string, errorThrow: string) => {
                if (errorCallback != null) {
                    var responseText = jqXHR.responseText;
                    errorCallback(responseText)
                }
            }
        };
        $.ajax(ajxParam);
    }

    ping(okCallback? : ()=>void,errorCallback?: (textStatus: string) => any) {
        var ajxParam: JQueryAjaxSettings = {
            async: this.async, timeout: 1000, cache: false,
            url: V.Application.serverURL, dataType: "json",
            success: (data: any) => {
                if (okCallback) okCallback();
            },
            error: (jqXHR: JQueryXHR, textStatus: string, errorThrow: string) => {
                if (errorCallback != null) {
                    var responseText = jqXHR.responseText;
                    errorCallback(responseText)
               }
            }
        }
    }

    send(method: string, param, callback?: (data) => any, errorCallback?: (textStatus: string) => any, cacheTimeOut: number = -1): JQueryXHR {
        var data: string = encodeURIComponent(JSON.stringify(param));

        if (cacheTimeOut > 0) {
            var key = crc32(method + "~" + data + "~");
            var _data = cache.getItem(key);
            if (_data != null && _data.method == method) {
                callback(_data.data);
                return;
            }
        }

        var ajxParam: JQueryAjaxSettings = {
            async: this.async, timeout: this.timeout, cache: false,
            url: V.Application.serverURL, dataType: "json",
            data: { PARAMS: data, METHOD: method }, 
            success: (data: any) => {
                if (cacheTimeOut > 0) {
                    var myData: ServerCacheItem = new ServerCacheItem();

                    myData.data = data;
                    myData.method = method;
                    cache.setItem(key, myData, { expirationSliding: cacheTimeOut });
                }
                if (callback != null) callback(data);
            },
            error: (jqXHR: JQueryXHR, textStatus: string, errorThrow: string) => {
                if (errorCallback != null) {
                    var responseText = jqXHR.responseText;
                    errorCallback(responseText)
               }
            }
        };
        return $.ajax(ajxParam);
    }

    callServerMethod(method: string, param, callback?: (data) => any, errorCallback?: (textStatus: string) => any) {
        var data: string = encodeURIComponent(JSON.stringify(param, function (key, value) {
            if (key === "__ownerCollection") return undefined;
            return value;
        }));

        var ajxParam: JQueryAjaxSettings = {
            async: this.async, timeout: this.timeout, cache: false,
            url: V.Application.serverURL, dataType: "json", type: this.CallType,
            data: { PARAMS: data, METHOD: method },
            success: (data: any) => {
                if (callback != null) callback(data);
            },
            error: (jqXHR: JQueryXHR, textStatus: string, errorThrow: string) => {
                var responseText = jqXHR.responseText;
                if (errorCallback != null) {
                    errorCallback(responseText)
               } else {
                    V.Application.raiseException(responseText);
                }
            }
        };
        $.ajax(ajxParam);
    }

      private static jspCount : number = 0;
    callJSONP(serverURL, param, callback?: (data) => any, errorCallback?: (textStatus: string) => any) {
        var data: string = encodeURIComponent(JSON.stringify(param, function (key, value) {
            if (key === "__ownerCollection") return undefined;
            return value;
        }));
        var jspName = "jsonCallback" + (TServer.jspCount++);

        var ajxParam: JQueryAjaxSettings = {
            type: 'GET',
            url: serverURL,
            async: true,
            jsonpCallback: jspName,
            contentType: "application/json",
            dataType: 'jsonp',
            data: { PARAMS: data, JSP: jspName},
            success: (data: any) => {
                if (callback != null) callback(data);
            },
            error: (jqXHR: JQueryXHR, textStatus: string, errorThrow: string) => {
                var responseText = jqXHR.responseText;
                if (errorCallback != null) {
                    errorCallback(responseText)
               } else {
                    V.Application.raiseException(responseText);
                }
            }
        };
        $.ajax(ajxParam);
    }
}



class ServerCacheItem {
    public data;
    public method: string;
}

var cache = new Cache(1000);
var CachePriority = {
    Low: 1,
    Normal: 2,
    High: 4
};

// ****************************************************************************
// Cache constructor
// Creates a new cache object
// INPUT: maxSize (optional) - indicates how many items the cache can hold.
//                             default is -1, which means no limit on the 
//                             number of items.
function Cache(maxSize) {
    this.items = {};
    this.count = 0;
    if (maxSize == null)
        maxSize = -1;
    this.maxSize = maxSize;
    this.fillFactor = .75;
    this.purgeSize = Math.round(this.maxSize * this.fillFactor);

    this.stats = {};
    this.stats.hits = 0;
    this.stats.misses = 0;
}

// ****************************************************************************
// Cache.getItem
// retrieves an item from the cache, returns null if the item doesn't exist
// or it is expired.
// INPUT: key - the key to load from the cache
Cache.prototype.getItem = function (key) {

    // retrieve the item from the cache
    var item = this.items[key];

    if (item != null) {
        if (!this._isExpired(item)) {
            // if the item is not expired
            // update its last accessed date
            item.lastAccessed = new Date().getTime();
        } else {
            // if the item is expired, remove it from the cache
            this._removeItem(key);
            item = null;
        }
    }

    // return the item value (if it exists), or null
    var returnVal = null;
    if (item != null) {
        returnVal = item.value;
        this.stats.hits++;
    } else {
        this.stats.misses++;
    }
    return returnVal;
};

// ****************************************************************************
// Cache.setItem
// sets an item in the cache
// parameters: key - the key to refer to the object
//             value - the object to cache
//             options - an optional parameter described below
// the last parameter accepts an object which controls various caching options:
//      expirationAbsolute: the datetime when the item should expire
//      expirationSliding: an integer representing the seconds since
//                         the last cache access after which the item
//                         should expire
//      priority: How important it is to leave this item in the cache.
//                You can use the values CachePriority.Low, .Normal, or 
//                .High, or you can just use an integer.  Note that 
//                placing a priority on an item does not guarantee 
//                it will remain in cache.  It can still be purged if 
//                an expiration is hit, or if the cache is full.
//      callback: A function that gets called when the item is purged
//                from cache.  The key and value of the removed item
//                are passed as parameters to the callback function.
Cache.prototype.setItem = function (key, value, options) {

    function CacheItem(k, v, o) {
        if ((k == null) || (k == ''))
            throw new Error("key cannot be null or empty");
        this.key = k;
        this.value = v;
        if (o == null)
            o = {};
        if (o.expirationAbsolute != null)
            o.expirationAbsolute = o.expirationAbsolute.getTime();
        if (o.priority == null)
            o.priority = CachePriority.Normal;
        this.options = o;
        this.lastAccessed = new Date().getTime();
    }

    // add a new cache item to the cache
    if (this.items[key] != null)
        this._removeItem(key);
    this._addItem(new CacheItem(key, value, options));

    // if the cache is full, purge it
    if ((this.maxSize > 0) && (this.count > this.maxSize)) {
        this._purge();
    }
};

// ****************************************************************************
// Cache.clear
// Remove all items from the cache
Cache.prototype.clear = function () {

    // loop through each item in the cache and remove it
    for (var key in this.items) {
        this._removeItem(key);
    }
};

// ****************************************************************************
// Cache._purge (PRIVATE FUNCTION)
// remove old elements from the cache
Cache.prototype._purge = function () {

    var tmparray = new Array();

    // loop through the cache, expire items that should be expired
    // otherwise, add the item to an array
    for (var key in this.items) {
        var item = this.items[key];
        if (this._isExpired(item)) {
            this._removeItem(key);
        } else {
            tmparray.push(item);
        }
    }

    if (tmparray.length > this.purgeSize) {

        // sort this array based on cache priority and the last accessed date
        tmparray = tmparray.sort(function (a, b) {
            if (a.options.priority != b.options.priority) {
                return b.options.priority - a.options.priority;
            } else {
                return b.lastAccessed - a.lastAccessed;
            }
        });

        // remove items from the end of the array
        while (tmparray.length > this.purgeSize) {
            var ritem = tmparray.pop();
            this._removeItem(ritem.key);
        }
    }
};

// ****************************************************************************
// Cache._addItem (PRIVATE FUNCTION)
// add an item to the cache
Cache.prototype._addItem = function (item) {
    this.items[item.key] = item;
    this.count++;
};

// ****************************************************************************
// Cache._removeItem (PRIVATE FUNCTION)
// Remove an item from the cache, call the callback function (if necessary)
Cache.prototype._removeItem = function (key) {
    var item = this.items[key];
    delete this.items[key];
    this.count--;

    // if there is a callback function, call it at the end of execution
    if (item.options.callback != null) {
        var callback = function () {
            item.options.callback(item.key, item.value);
        };
        setTimeout(callback, 0);
    }
};

Cache.prototype._isExpired = function (item) {
    var now = new Date().getTime();
    var expired = false;
    if ((item.options.expirationAbsolute) && (item.options.expirationAbsolute < now)) {
        // if the absolute expiration has passed, expire the item
        expired = true;
    }
    if (!expired && (item.options.expirationSliding)) {
        // if the sliding expiration has passed, expire the item
        var lastAccess = item.lastAccessed + (item.options.expirationSliding * 1000);
        if (lastAccess < now) {
            expired = true;
        }
    }
    return expired;
};

Cache.prototype.toHtmlString = function () {
    var returnStr = this.count + " item(s) in cache<br /><ul>";
    for (var key in this.items) {
        var item = this.items[key];
        returnStr = returnStr + "<li>" + item.key.toString() + " = " + item.value.toString() + "</li>";
    }
    returnStr = returnStr + "</ul>";
    return returnStr;
};


function crc32(s/*, polynomial = 0x04C11DB7, initialValue = 0xFFFFFFFF, finalXORValue = 0xFFFFFFFF*/) {
    s = String(s);
    var polynomial = arguments.length < 2 ? 0x04C11DB7 : arguments[1],
        initialValue = arguments.length < 3 ? 0xFFFFFFFF : arguments[2],
        finalXORValue = arguments.length < 4 ? 0xFFFFFFFF : arguments[3],
        crc = initialValue,
        table = [], j, c;

    function reverse(x, n) {
        var b = 0;
        while (n) {
            b = b * 2 + x % 2;
            x /= 2;
            x -= x % 1;
            n--;
        }
        return b;
    }

    for (var i = 255; i >= 0; i--) {
        c = reverse(i, 32);

        for (j = 0; j < 8; j++) {
            c = ((c * 2) ^ (((c >>> 31) % 2) * polynomial)) >>> 0;
        }

        table[i] = reverse(c, 32);
    }

    for (var i = 0, len = s.length; i < len; i++) {
        c = s.charCodeAt(i);
        if (c > 255) {
            throw new RangeError();
        }
        j = (crc % 256) ^ c;
        crc = ((crc / 256) ^ table[j]) >>> 0;
    }

    return (crc ^ finalXORValue) >>> 0;
}
