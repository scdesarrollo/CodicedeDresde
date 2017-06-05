var slider_bullet = null;
var n_slider = 1;

$(".bullet-1").addClass("bullet-on");



$(".bullets").click(function(){
       slider_bullet = $(this).attr('class').split(' ')[1];
       
       
       //removemos el on de los bullets;
       $(".bullets").removeClass("bullet-on");
       $(this).addClass("bullet-on");

       console.log(slider_bullet);
       $(".imagen_hotspot").hide();
       $(".contenido").hide();
       $(".contenido_D").hide();
       $(".img-"+slider_bullet).fadeIn();
       $(".contenido-"+slider_bullet).fadeIn();
       $(".contenido_D-"+slider_bullet).fadeIn();

       $(".hotspot_over").removeClass("hotspot_on");
 	   $("span").removeClass("select_augurio");


 

	   //obtnemos el valor del current slider

	   n_slider = $(this).attr('class').split(' ')[2];
	   console.log("Estoy en el bullet " + n_slider);
});	


// Contamos la cantidad de Slider, esto es contando los span de los bullets
var lista_bullets = document.getElementById("bullets").getElementsByTagName("span");
var cantidad_sliders = lista_bullets.length;

// FUNCIONALIDAD DE NEXT
$(".next_C").click(function(){
	n_slider++;
	if (n_slider > cantidad_sliders ){
		n_slider = 1; 
	}

	SliderNext();

	$(".hotspot_over").removeClass("hotspot_on");
 	$("span").removeClass("select_augurio");


});

$(".prev_C").click(function(){
	n_slider--;
	if (n_slider < 1 ){
		n_slider = cantidad_sliders; 
	}
	
	SliderPrev();

	$(".hotspot_over").removeClass("hotspot_on");
 	$("span").removeClass("select_augurio");
});



function SliderNext(){
	console.log(n_slider);
	 

	  $(".imagen_hotspot").hide();
    $(".contenido").hide();
    $(".contenido_D").hide();
    $(".hostspotsContainer").hide();

    $(".img-bullet-"+n_slider).fadeIn();
    $(".contenido-bullet-"+n_slider).fadeIn();


    $(".bullets").removeClass("bullet-on");
    $(".bullet-"+n_slider).addClass("bullet-on");

    console.log("img-slider-"+n_slider);
    $(".img-slider-"+n_slider).fadeIn();
   
}


function SliderPrev(){
	console.log(n_slider);
	 

	$(".imagen_hotspot").hide();
    $(".contenido").hide();
    $(".contenido_D").hide();
    $(".hostspotsContainer").hide();

    $(".img-bullet-"+n_slider).fadeIn();
    $(".contenido-bullet-"+n_slider).fadeIn();


    $(".bullets").removeClass("bullet-on");
    $(".bullet-"+n_slider).addClass("bullet-on");
    $(".img-slider-"+n_slider).fadeIn();


}


