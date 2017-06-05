// OOCULTAMOS EL MENU AL DAR CLICK EN CUALQUIER PARTE
$(window).click(function() {
   
    $(".btn_materialidad").removeClass("btn_materialidad_hover");

});

$(document).on('click touchstart', function () { 
    $(".btn_materialidad").removeClass("btn_materialidad_hover");
 });