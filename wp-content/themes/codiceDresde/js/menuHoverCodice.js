
//BTN_INICIO

$(".btn_inicio").click(function() { 
    $(".menuGeneral").show();
    $(".btn_inicio").addClass("btn_incio_over");

});

 $(".menuGeneral").mouseleave(function() {
    $(".menuGeneral").hide();
    $(".btn_inicio").removeClass("btn_incio_over");

 });


$(".relase_storage").click(function() { 
    localStorage.removeItem('coordenada');
    localStorage.removeItem('coordenada_deidades');
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


//BARRA DE NAVEGACION MATERIALIDAD

$(".btn_materialidad").mouseover(function() {
     $(".BarraNavegacion").show();
      $(".BarraNavegacionB").hide();
       $(".btn_hipermedia").removeClass("btn_hipermedia_hover");
       $(".btn_hipermedia").removeClass("btn_hipermedia_hover");


    //ocultamos la barra de busquefa
    $(".BarraBusqueda").hide();
    $(".btn_search").removeClass("btn_search_over");

    //ocultamos la barra de busqueda
    $(".seccion_Login").fadeOut();




});

$(".BarraNavegacion").mouseleave(function() {
     $(".BarraNavegacion").hide();
      $(".btn_hipermedia").removeClass("btn_hipermedia_hover");
      $(".btn_materialidad").removeClass("btn_materialidad_hover");

});


//BARRA DE NAVEGACION HYPERMEDIA

$(".btn_hipermedia").mouseover(function() {
     $(".BarraNavegacionB").show();
     $(".btn_hipermedia").addClass("btn_hipermedia_hover");
      $(".BarraNavegacion").hide();

       $(".btn_materialidad").removeClass("btn_materialidad_hover");

    //ocultamos la barra de busquefa
    $(".BarraBusqueda").hide();
    $(".btn_search").removeClass("btn_search_over");

    //ocultamos la barra de busqueda
    $(".seccion_Login").fadeOut();
        
});

$(".BarraNavegacionB").mouseleave(function() {
     $(".BarraNavegacionB").hide();
     $(".btn_hipermedia").removeClass("btn_hipermedia_hover");

    


});



 