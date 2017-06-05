
//BTN_INICIO

$(".btn_inicio").click(function() { 
    $(".menuGeneral").show();
    $(".btn_inicio").addClass("btn_incio_over");

});

 $(".menuGeneral").mouseleave(function() {
    $(".menuGeneral").hide();
    $(".btn_inicio").removeClass("btn_incio_over");

 });


$(".btn_materialidad").mouseover(function() {
    $(".btn_materialidad").addClass("btn_materialidad_hover");
 });


 //BTN SEARCH

 $(".btn_search").click(function(event){
    event.stopPropagation();
    $(".BarraBusqueda").toggle();

     console.log("toggle");

    if($('.BarraBusqueda').is(':visible')){
        $(".btn_search").addClass("btn_search_over");
    }
    else{
         $(".btn_search").removeClass("btn_search_over");
    }

     //ocultamos la barra de busqueda
     $(".seccion_Login").fadeOut();
     $(".seccion_Login_on").hide();
     
     $(".cuadro_notas").hide();
 });


// MENU 1
$(".men_1").mouseover(function() {
    $(".men1").addClass("menu_over_1");
});

$(".men_1").mouseleave(function() {
    $(".men1").removeClass("menu_over_1");
});


// MENU 2
$(".men_2").mouseover(function() {
    $(".men2").addClass("menu_over_2");
});

$(".men_2").mouseleave(function() {
    $(".men2").removeClass("menu_over_2");
});


// MENU 3
$(".men_3").mouseover(function() {
    $(".men3").addClass("menu_over_3");
});

$(".men_3").mouseleave(function() {
    $(".men3").removeClass("menu_over_3");
});

// MENU 4
$(".men_4").mouseover(function() {
    $(".men4").addClass("menu_over_4");
});

$(".men_4").mouseleave(function() {
    $(".men4").removeClass("menu_over_4");
});


// MENU 5
$(".men_5").mouseover(function() {
    $(".men5").addClass("menu_over_5");
});

$(".men_5").mouseleave(function() {
    $(".men5").removeClass("menu_over_5");
});


// MENU 6
$(".men_6").mouseover(function() {
    $(".men6").addClass("menu_over_6");
});

$(".men_6").mouseleave(function() {
    $(".men6").removeClass("menu_over_6");
});




$(".btn_login").click(function(event){
    event.stopPropagation();

    if ($(".seccion_Login").is(":visible")){
        $(".seccion_Login").hide();
    } 
    else {
        $(".seccion_Login").fadeIn();
    }

    //ocultamos el menu loggin
    $(".BarraBusqueda").hide();
    $(".btn_search").removeClass("btn_search_over");

    $(".cuadro_notas").hide();

    //Codigo para cancelar el scroll 

});



// OOCULTAMOS EL MENU AL DAR CLICK EN CUALQUIER PARTE
$(window).click(function() {
    $(".seccion_Login").hide();
    $(".seccion_Login_on").hide();
    $(".BarraBusqueda").hide();
    $(".BarraNavegacion").hide();
    $(".BarraNavegacionB").hide();
    $(".menuGeneral").hide();
    $(".btn_inicio").removeClass("btn_incio_over");
    $(".btn_search").removeClass("btn_search_over");
    $(".btn_hipermedia").removeClass("btn_hipermedia_hover");

    $(".caja_informacion_notas").fadeOut();
    $(".Btb_Info").removeClass("Btb_Info_on"); 

    
    //$(".btn_materialidad").removeClass("btn_materialidad_hover");
   

});

$(".seccion_Login").click(function(event){
    event.stopPropagation();
});

$(".seccion_Login_on").click(function(event){
    event.stopPropagation();
});

$(".BarraBusqueda").click(function(event){
    event.stopPropagation();
});

$(".btn_materialidad").click(function(event){
    event.stopPropagation();
});

$(".btn_hipermedia").click(function(event){
    event.stopPropagation();
});

$(".btn_inicio").click(function(event){
    event.stopPropagation();
});



$(document).on('click touchstart', function () { 
    $(".seccion_Login").hide();
    $(".seccion_Login_on").hide();
    $(".BarraBusqueda").hide();
    $(".BarraNavegacion").hide();
    $(".BarraNavegacionB").hide();
    $(".menuGeneral").hide();
    $(".btn_inicio").removeClass("btn_incio_over");
    $(".btn_search").removeClass("btn_search_over");
    $(".btn_hipermedia").removeClass("btn_hipermedia_hover");
    //$(".btn_materialidad").removeClass("btn_materialidad_hover");
 });


$(".seccion_Login").on('click touchstart', function (event) { 
    event.stopPropagation();
});

$(".seccion_Login_on").on('click touchstart', function (event) { 
    event.stopPropagation();
});

$(".BarraBusqueda").on('click touchstart', function (event) { 
    event.stopPropagation();
});

$(".btn_materialidad").on('click touchstart', function (event) { 
    event.stopPropagation();
});

$(".btn_hipermedia").on('click touchstart', function (event) { 
    event.stopPropagation();
});

$(".btn_inicio").on('click touchstart', function (event) { 
    event.stopPropagation();
});

$(".menuGeneral").on('click touchstart', function (event) { 
    event.stopPropagation();
});




 


$(".btn_login_on").click(function(event){
    event.stopPropagation();
    if ($(".seccion_Login_on").is(":visible")){
        $(".seccion_Login_on").hide();
    } 
    else {
        $(".seccion_Login_on").fadeIn();
    }
    
    $(".BarraBusqueda").hide();
    $(".btn_search").removeClass("btn_search_over");

    $(".cuadro_notas").hide();

});

// FUNCIONALIDAD DE MOUSE OVER PARA OCULTAR LOS MENUS
$(".btn_login").mouseover(function() {
    $(".BarraNavegacionB").hide();
    $(".BarraNavegacion").hide();
});

$(".btn_search").mouseover(function() {
    $(".BarraNavegacionB").hide();
    $(".BarraNavegacion").hide();
    $(".seccion_Login_on").hide();
});



$(".btn_registrar").click(function(){
    $(".formulario_login").hide();
    $(".formulario_registro").show();

    $(".tit_1").hide();
    $(".tit_2").show();
});


// funcionalidad para cancelar
$(".cancelar_reg").click(function(){
   $(".formulario_registro").hide();
   $(".formulario_login").show();


    $(".tit_1").show();
    $(".tit_2").hide();

    $(".seccion_Login").hide();
});   


 



 