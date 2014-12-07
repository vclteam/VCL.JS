var cfg = {
    baseUrl: '',
    waitSeconds: 60,
    paths: {
        'bootstrap-modal': 'VCL/Scripts/bootstrap-modal',
        'bootstrap-modalmanager': 'VCL/Scripts/bootstrap-modalmanager',
        'gridster': 'VCL/Scripts/jquery.gridster',
        'spin': 'VCL/Scripts/spin',
        "fileDownload": "VCL/Scripts/jquery.fileDownload",
        "jquery-ui": "VCL/Scripts/jquery-ui-1.10.4.custom.min",
        "jquery-uicss": "VCL/Css/jquery-ui-1.10.4.custom.min.css",
        'gridstercss': 'VCL/Css/jquery.gridster.css'
    },
    shim: {
    }
}

var islocalhost = false;
var hostname = document.location.hostname.toLowerCase();
if ((hostname == "localhost" || hostname == "127.0.0.1")) {
    islocalhost = true;
}

require.config(cfg);



//add meta tag for s3 on ie10
if ($('meta[http-equiv=X-UA-Compatible]', top.document).attr('content') != 'IE=8') {
    $('meta[http-equiv="X-UA-Compatible"]', top.document).attr('content', 'IE=8');
    $('meta[http-equiv="X-UA-Compatible"]').attr('content', 'IE=8');
    $('#FRAMEID', window.parent.document).attr('src', $('#FRAMEID', window.parent.document).attr('src'));
}

//preload all mandatory modules
require(['bootstrap-modal', 'bootstrap-modalmanager'
    , 'gridster', 'spin', 'VCL/Scripts/css.js!gridstercss'], function () {
        require([islocalhost?"VCL/VCL": 'VCL/VCL-compress'], function () {
            require(['main', "VCL/VCL"], function (app, V) {
                app.start();
                //disable caching?
                if (!V.Application.EnableApplicationCache) {
                    cfg.urlArgs =  "bust=" + (new Date()).getTime();
                    require.config(cfg)
                }
            })
        });
});