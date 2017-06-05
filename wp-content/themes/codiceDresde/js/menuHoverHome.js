
//BTN_INICIO

$(".btn_inicio").click(function(event) { 
    event.stopPropagation();
    $(".menuGeneral").show();

    $(".btn_inicio").addClass("menu_inicio_on");
});





 $(".menuGeneral").mouseleave(function() {
    $(".menuGeneral").hide();
     $(".btn_inicio").removeClass("menu_inicio_on");
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



// OOCULTAMOS EL MENU AL DAR CLICK EN CUALQUIER PARTE
$(window).click(function() {
    $(".menuGeneral").hide();
    $(".btn_inicio").removeClass("menu_inicio_on");
});

$(".menuGeneral").on('click touchstart', function (event) { 
    event.stopPropagation();
});

 



 