
function msieversion() {

    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))  // If Internet Explorer, return version number
    {
        alert("Este interactivo no funciona con Microsoft Internet Explorer. Intenta con otro explorador de tu preferencia.");
    }
    else { }

    return false;
}

msieversion()