
//BTN_INICIO

$(".SelectorCodice").click(function() { 

    if ($(".tituloActivoOn").is(":visible")){
        $(".tituloActivoOn").fadeOut();
        $(".Selector").removeClass("Selector_on");
    } else {
         $(".tituloActivoOn").fadeIn();
         $(".Selector").addClass("Selector_on");
    }


   

});

  


 