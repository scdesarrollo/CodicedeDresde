
//BTN AGREGAR NOTA

$bnt_editar = null;
$(".icono_editar").click(function() { 
    $(".ContenedorUpdateNotas").fadeIn();

    $bnt_editar = $(this).attr('class').split(' ')[1];
    console.log($bnt_editar);
    $showEditar = "show-"+$bnt_editar;
    $("."+$showEditar).fadeIn();




});


//CERRAR UPDATE NOTA
$(".btn_cerrar_nota_update").click(function() { 
    $(".ContenedorUpdateNotas").fadeOut();
    $(".subcontenedorUpdateNotas").fadeOut();

});


