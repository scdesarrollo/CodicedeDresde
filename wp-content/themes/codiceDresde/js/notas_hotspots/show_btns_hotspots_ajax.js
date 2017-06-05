
//BOTONES CUADROS NOTAS 
$valor_info_nota = null;


$(".InforacionNota").click(function() { 
    
    // 1.- OBTENEMOS EL VALOR DE LA NOTA AL DAR CLICK
    $(".InforacionNota").removeClass("informacion_on");
    $(this).addClass("informacion_on");
    
    $(".MenuNotas").hide();
    
    $valor_info_nota = $(this).attr('class').split(' ')[1];
    $var_info_nota = "show-"+$valor_info_nota;
    $("."+$var_info_nota).show();


});




//BORRAR NOTA HOTSPOOTS

$Borrar_nota_privada = null;
$showBorrar = null;
$(".btn_eliminar").click(function() { 
    $Borrar_nota_privada = $(this).attr('class').split(' ')[1];
    console.log($Borrar_nota_privada);
    $showBorrar = "show-"+$Borrar_nota_privada;
    console.log($showBorrar)
     $("."+$showBorrar).fadeIn();

});

// Cancelar eliminar Nota
$(".cancel_eliminar_privada").click(function() { 
    $(".ConfirmarBorrar").fadeOut();
});





 


