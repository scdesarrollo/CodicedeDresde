$(".btn_intro").click(function(){
	$(".btn_pres").removeClass("intON");
	$(".btn_intro").addClass("intON");

	$(".Presentacion_bloque").hide();
	$(".Introduccion_bloque").fadeIn();
	

});


$(".btn_pres").click(function(){
	$(".btn_intro").removeClass("intON");
	$(".btn_pres").addClass("intON");

	$(".Introduccion_bloque").hide();
	$(".Presentacion_bloque").fadeIn();

	

});