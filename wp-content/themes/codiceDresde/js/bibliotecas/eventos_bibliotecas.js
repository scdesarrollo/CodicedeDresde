
//BTN ENTREVISTAS
$(".EntrevistasM").click(function() { 
    
    //Menu entrevistas
    $(".EntrevistasM").addClass("BibliotecasON");
    $(".EnsayosM").removeClass("BibliotecasON");
    $(".ReferenciasM").removeClass("BibliotecasON");
    
    // mostramos los bloques

    $(".Seccion-Entrevistas").fadeIn();
    $(".Seccion-Ensayos").hide();
    $(".Seccion-Referencias").hide();


});


//BTN ENTREVISTAS
$(".EnsayosM").click(function() { 
    
    //Menu entrevistas
    $(".EntrevistasM").removeClass("BibliotecasON");
    $(".EnsayosM").addClass("BibliotecasON");
    $(".ReferenciasM").removeClass("BibliotecasON");
    
    // mostramos los bloques

    $(".Seccion-Entrevistas").hide();
    $(".Seccion-Ensayos").fadeIn();
    $(".Seccion-Referencias").hide();


});


//BTN ENTREVISTAS
$(".ReferenciasM").click(function() { 
    
    //Menu entrevistas
    $(".EntrevistasM").removeClass("BibliotecasON");
    $(".EnsayosM").removeClass("BibliotecasON");
    $(".ReferenciasM").addClass("BibliotecasON");
    
    // mostramos los bloques

    $(".Seccion-Entrevistas").hide();
    $(".Seccion-Ensayos").hide();
    $(".Seccion-Referencias").fadeIn();


});



//MOSTRAR VIDEOS
$(".show_video_1").click(function() { 
    $(".ContenedorVideos").fadeIn();
    $(".video1").show();

    //PREVENT SCROLL
    preventScroll();


});

$(".show_video_2").click(function() { 
    $(".ContenedorVideos").fadeIn();
    $(".video2").show();

    //PREVENT SCROLL
    preventScroll();
});

$(".show_video_3").click(function() { 
    $(".ContenedorVideos").fadeIn();
    $(".video3").show();

    //PREVENT SCROLL
    preventScroll();
});

$(".show_video_4").click(function() { 
    $(".ContenedorVideos").fadeIn();
    $(".video4").show();

    //PREVENT SCROLL
    preventScroll();
});


$(".show_video_5").click(function() { 
    $(".ContenedorVideos").fadeIn();
    $(".video5").show();

    //PREVENT SCROLL
    preventScroll();
});


//CERRAR VIDEOS
$(".cerrar_videos").click(function() { 
    $(".ContenedorVideos").fadeOut();


    $("#play_1").removeClass("pause_btn_off");
    $("#play_2").removeClass("pause_btn_off");
    $("#play_3").removeClass("pause_btn_off");
    $("#play_4").removeClass("pause_btn_off");
    $("#play_5").removeClass("pause_btn_off");

    $("#play_1").addClass("play_btn_off");
    $("#play_2").addClass("play_btn_off");
    $("#play_3").addClass("play_btn_off");
    $("#play_4").addClass("play_btn_off");
    $("#play_5").addClass("play_btn_off");



    // PAUSAMOS LOS VIDEOS Y LOS REINICIAMOS.
    $("video").each(function () { this.pause(); this.currentTime = 0; });
    
    // OCULTAMOS LOS VIDEOS
    $(".video1").hide();
    $(".video2").hide();
    $(".video3").hide();
    $(".video4").hide();
    $(".video5").hide();

     //PREVENT SCROLL
     EnableScroll();

});


 

