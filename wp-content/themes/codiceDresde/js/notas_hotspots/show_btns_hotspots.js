
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

    //PREVENT SCROLL
    preventScroll();
    

});

// Cancelar eliminar Nota
$(".cancel_eliminar_privada").click(function() { 
    $(".ConfirmarBorrar").fadeOut();

     //PREVENT SCROLL
     EnableScroll();
});



// DESCARGAR NOTA
var descargar_nota = null;
$(".btn_descargar").click(function() { 
    
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
        color: "#bc4b4b" 
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
    pdf.save('Test.pdf');
    }, margins);

}



 


