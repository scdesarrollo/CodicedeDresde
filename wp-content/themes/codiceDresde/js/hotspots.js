$(".hostpot_1").click(function() { 
 
	$(".ContendordeDatos").fadeIn();



  /*$.getJSON( "../js/json/test.json", function( data ) {
  var items = [];
  $.each( data, function( key, val ) {
    items.push( "<li id='" + key + "'>" + val + "</li>" );
  });
 
  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( ".ContendordeDatos" );
});*/





});


$(".btn_back_notas").click(function(){

	$(".ContendordeDatos").fadeOut();


 
    if ( $(".cuadro_notas").css('display') == 'block' ){
         $( ".cuadro_notas" ).toggle( "slide", {direction: 'right'});
    }

    $(".morecontent span").hide();
    $(".readmoreC").removeClass("less");
	
});




/* --------------------------------------------------------
/* ---- FUNCIONALODAD NOTAS BOTONES
-------------------------------------------------------- */

$(".btn_open_nota").click(function(){
	 $( ".cuadro_notas" ).toggle( "slide", {direction: 'right'});
});

$(".btn_close").click(function(){
	 $( ".cuadro_notas" ).toggle( "slide", {direction: 'right'});
});


