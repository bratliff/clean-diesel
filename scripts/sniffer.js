// JavaScript Document
function getInternetExplorerVersion()
// Returns the version of Internet Explorer or a -1
// (indicating the use of another browser).
{
    var rv = -1; // Return value assumes failure.
    if (navigator.appName == 'Microsoft Internet Explorer')
    {
        var ua = navigator.userAgent;
        var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
        if (re.exec(ua) != null)
            rv = parseFloat( RegExp.$1 );
    }
    return rv;
}
(function()
{
    //  css file based on the device
    var scriptSrc = 'scripts/mobile.js';

    var isiPad = navigator.userAgent.match(/iPad/i) !== null;
    var isiPhone = navigator.userAgent.match(/iPhone/i) !== null;
    var isAndroid = navigator.userAgent.toLowerCase().indexOf("android")>-1;
    var isBlackberry = navigator.userAgent.toLowerCase().indexOf('blackberry')>0; 

    if (isiPad) {
     
        controlCss = "CSS/clean_diesel.css";
        scriptSrc = 'scripts/ipad.js';
    } else if (isiPhone) {
        controlCss = "CSS/iphone.css";
        scriptSrc = 'scripts/iphone.js';
    } else if (isAndroid) {
        controlCss = "CSS/mobile.css";
        scriptSrc = 'scripts/mobile.js';
    } else if (isBlackberry) {
        controlCss = "CSS/mobile.css"
    } else {
        controlCss = "CSS/clean_diesel.css"
        scriptSrc = 'scripts/main.js';
    }

    var msg = "You're not using Internet Explorer.";
    var ver = getInternetExplorerVersion();

    if ( ver > -1 )
    {
        if ( ver == 7.0 ){
            scriptSrc = 'scripts/ie7.js';
         	controlCss = "CSS/ie7-and-down.css";
         }
        else if ( ver == 8.0 ) {
            scriptSrc = 'scripts/main.js';
           }
        else if ( ver == 9.0 ) {
            scriptSrc = 'scripts/main.js'
           }
    }
  
    var script = document.createElement('script');
    script.src = scriptSrc;
    var head = document.getElementsByTagName('head')[0];
    head.appendChild(script);

}());

