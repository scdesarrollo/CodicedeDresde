
//BTN AGREGAR NOTA

$valor_nota_privada = null;
$info_nota_privada = null;

$(".contendor_notas_publicas").click(function() { 

    //PREVENT SCROLL
    preventScroll();
    
     // 1.- OBTENEMOS EL VALOR DE LA NOTA AL DAR CLICK
     $valor_nota_privada = $(this).attr('class').split(' ')[2];
     console.log($valor_nota_privada);


     // 2- PASAMOS EL VALOR A UNA VARIABLE
     $info_nota_privada = "show-"+$valor_nota_privada;
     console.log($info_nota_privada);

     //3.- UTILIZAMOS LA VARIABLE PARA MOSTRAR EL CONTENIDO

     $(".ContenedorDetalleNotas").fadeIn();
     $("."+$info_nota_privada).fadeIn();



});


//BORRAR NOTA
$Borrar_nota_privada = null;
$showBorrar = null;
$(".icono_borrar").click(function() { 
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

// CERRAR NOTA PRIVADA
$(".btn_cerrar_nota").click(function() { 
     $(".ContenedorDetalleNotas").fadeOut();
     $("."+$info_nota_privada).fadeOut();

     //PREVENT SCROLL
     EnableScroll();
});


//BTN DESCARGAR

var doc = new jsPDF();
var specialElementHandlers = {
    '#editor': function (element, renderer) {
        return true;
    }
};







 


