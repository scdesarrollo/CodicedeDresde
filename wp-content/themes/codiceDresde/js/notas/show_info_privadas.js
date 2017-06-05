
//BTN AGREGAR NOTA

$valor_nota_privada = null;
$info_nota_privada = null;

$(".contendor_notas_privadas").click(function() { 
    

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



var descargar_nota = null;
$(".icono_descargar").click(function() { 
    
    descargar_nota = $(this).attr('class').split(' ')[1];
    console.log(descargar_nota);
    $(".descargar-nota-stilo p").css( "color", "#000000" );
    $(".descargar-nota-stilo p").css( "margin-bottom", "10px" );

    demoFromHTML();



});




    // **********************

    function demoFromHTML() {
    var pdf = new jsPDF('p', 'pt', 'letter');
    // source can be HTML-formatted string, or a reference
    // to an actual DOM element from which the text will be scraped.
    //#nota-descargar-50
    source = $("#nota-"+descargar_nota)[0];



    // we support special element handlers. Register them with jQuery-style 
    // ID selector for either ID or node name. ("#iAmID", "div", "span" etc.)
    // There is no support for any other type of selectors 
    // (class, of compound) at this time.
    specialElementHandlers = {
        // element with id of "bypass" - jQuery style selector
        '#bypassme': function (element, renderer) {
            // true = "handled elsewhere, bypass text extraction"
            return true
        }
    };
    margins = {
        top: 50,
        bottom: 60,
        left: 40,
        width: 522,
        color: "#000000" 
    };
    // all coords and widths are in jsPDF instance's declared units
    // 'inches' in this case
    pdf.fromHTML(
    source, // HTML string or DOM elem ref.
    margins.left, // x coord
    margins.top, { // y coord
        'width': margins.width, // max width of content on PDF
        'elementHandlers': specialElementHandlers
    },


    function (dispose) {
        // dispose: object with X, Y of the last line add to the PDF 
        //          this allow the insertion of new lines after html
    pdf.save('Nota.pdf');
    }, margins);

}




 


