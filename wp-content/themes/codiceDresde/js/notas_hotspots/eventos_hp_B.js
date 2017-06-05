
$(".hotspot_over").mouseover(function() { 
 $(".hotspot_over").removeClass("hotspot_on");
 $("span").removeClass("select_augurio");
});

$select_hp = null;
$(".hotspot_over").click(function() { 
     $(".hotspot_over").removeClass("hotspot_on");
     $(this).addClass("hotspot_on");
     $("span").removeClass("select_augurio");

     $select_hp = $(this).attr('class').split(' ')[1];
     console.log($select_hp);

     $(".augurio-"+$select_hp + " span").addClass("select_augurio");

});




 
// Para los hotspots SECCION A
$('#id-1').click(function() {
    $('html, body').animate({
        scrollTop: $('#to-1').offset().top
    }, 1000);
});

$('#id-2').click(function() {
    $('html, body').animate({
        scrollTop: $('#to-2').offset().top
    }, 1000);
});

$('#id-3').click(function() {
    $('html, body').animate({
        scrollTop: $('#to-3').offset().top
    }, 1000);
});


$('#id-4').click(function() {
    $('html, body').animate({
        scrollTop: $('#to-4').offset().top
    }, 1000);
});

$('#id-5').click(function() {
    $('html, body').animate({
        scrollTop: $('#to-5').offset().top
    }, 1000);
});


$('#id-6').click(function() {
    $('html, body').animate({
        scrollTop: $('#to-6').offset().top
    }, 1000);
});


$('#id-7').click(function() {
    $('html, body').animate({
        scrollTop: $('#to-7').offset().top
    }, 1000);
});

$('#id-8').click(function() {
    $('html, body').animate({
        scrollTop: $('#to-8').offset().top
    }, 1000);
});

$('#id-9').click(function() {
    $('html, body').animate({
        scrollTop: $('#to-9').offset().top
    }, 1000);
});

$('#id-10').click(function() {
    $('html, body').animate({
        scrollTop: $('#to-10').offset().top
    }, 1000);
});

$('#id-11').click(function() {
    $('html, body').animate({
        scrollTop: $('#to-11').offset().top
    }, 1000);
});

$('#id-12').click(function() {
    $('html, body').animate({
        scrollTop: $('#to-12').offset().top
    }, 1000);
});

$('#id-13').click(function() {
    $('html, body').animate({
        scrollTop: $('#to-13').offset().top
    }, 1000);
});

$('#id-14').click(function() {
    $('html, body').animate({
        scrollTop: $('#to-14').offset().top
    }, 1000);
});


$('#id-15').click(function() {
    $('html, body').animate({
        scrollTop: $('#to-15').offset().top
    }, 1000);
});

$('#id-16').click(function() {
    $('html, body').animate({
        scrollTop: $('#to-16').offset().top
    }, 1000);
});

$('#id-17').click(function() {
    $('html, body').animate({
        scrollTop: $('#to-17').offset().top
    }, 1000);
});

$('#id-18').click(function() {
    $('html, body').animate({
        scrollTop: $('#to-18').offset().top
    }, 1000);
});

$('#id-19').click(function() {
    $('html, body').animate({
        scrollTop: $('#to-19').offset().top
    }, 1000);
});

$('#id-20').click(function() {
    $('html, body').animate({
        scrollTop: $('#to-20').offset().top
    }, 1000);
});

$('#id-21').click(function() {
    $('html, body').animate({
        scrollTop: $('#to-21').offset().top
    }, 1000);
});

$('#id-22').click(function() {
    $('html, body').animate({
        scrollTop: $('#to-22').offset().top
    }, 1000);
});

$('#id-23').click(function() {
    $('html, body').animate({
        scrollTop: $('#to-23').offset().top
    }, 1000);
});

$('#id-24').click(function() {
    $('html, body').animate({
        scrollTop: $('#to-24').offset().top
    }, 1000);
});

$('#id-25').click(function() {
    $('html, body').animate({
        scrollTop: $('#to-25').offset().top
    }, 1000);
});

$('#id-26').click(function() {
    $('html, body').animate({
        scrollTop: $('#to-26').offset().top
    }, 1000);
});

$('#id-27').click(function() {
    $('html, body').animate({
        scrollTop: $('#to-27').offset().top
    }, 1000);
});

$('#id-28').click(function() {
    $('html, body').animate({
        scrollTop: $('#to-28').offset().top
    }, 1000);
});

$('#id-29').click(function() {
    $('html, body').animate({
        scrollTop: $('#to-29').offset().top
    }, 1000);
});

$('#id-30').click(function() {
    $('html, body').animate({
        scrollTop: $('#to-30').offset().top
    }, 1000);
});


function scrolling(){
    $('html, body').animate({
        scrollTop: $('#to-'+id_hotspots).offset().top
    }, 1000);
}// Scrolling 



//oculta nota 
$( "span:contains('nota-')" ).remove();
