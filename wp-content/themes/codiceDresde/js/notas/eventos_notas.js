
//oculta nota 
$( "span:contains('nota-')" ).remove();

 
 

//BTN AGREGAR NOTA
$(".btn_agregar").click(function() { 
    $(".ContenedorAddNotas").fadeIn();

    //PREVENT SCROLL
    preventScroll();
    

});


//BTN CERRAR NOTA
$(".btn_cerrar_nota").click(function() { 
    $(".ContenedorAddNotas").fadeOut();
    document.getElementById("new_post").reset();
});
 


//BTN NOTAS PRIVADAS
$(".bnt_notas_privadas").click(function() { 
    $(".Notas_privadas").fadeIn();
    $(".Notas_publicas").hide();
    $(".bnt_notas_privadas").addClass("Notas_select");
    $(".bnt_notas_publicas").removeClass("Notas_select");
});
 

//BTN NOTAS PUBLICAS
 $(".bnt_notas_publicas").click(function() { 
    $(".Notas_publicas").fadeIn();
    $(".Notas_privadas").hide();

    $(".bnt_notas_publicas").addClass("Notas_select");
    $(".bnt_notas_privadas").removeClass("Notas_select");
});
 

$('input[type="checkbox"]').on('change', function() {
   $(this).siblings('input[type="checkbox"]').not(this).prop('checked', false);
});

 var show = null;
$(function(){ // DOM ready

  // ::: TAGS BOX
 
  $(".Etiquetas_Form_add").on({
    focusout : function() {
      var txt = this.value.replace(/[^a-z0-9\+\-\.\#]/ig,''); // allowed characters
      if(txt) $("<span/>", {text:txt.toLowerCase(), insertAfter:this });
    
      insertarValor();

      this.value = "";
    },
    keyup : function(ev) {
      // if: comma|enter (delimit more keyCodes with | pipe)
      if(/(188|13)/.test(ev.which)) $(this).focusout(); 
    }
  });
  $('.tags').on('click', 'span', function() {
     $(this).remove(); 
  });

});


function insertarValor(){
    var arr = [];
    $(".BloqueE span").each(function(index, elem){
        arr.push($(this).text());
    });
    arr.join("|");

    $(".texto_nuevo_input").val(arr);

    console.log(arr)
    
}


// ::: TAGS BOX UPDATE
    var nombre_cat_input = null;
     $(".Etiquetas_Form_update").click(function() { 
        nombre_cat_input = $(this).attr('class').split(' ')[2];
        console.log(nombre_cat_input);

    

        $("."+nombre_cat_input).on({
    
            focusout : function() {
              var txt = this.value.replace(/[^a-z0-9\+\-\.\#]/ig,''); // allowed characters
              if(txt) $("<span/>", {text:txt.toLowerCase(), insertAfter:this });
            
              insertarValor_update();
    
              this.value = "";
            },
    
            keyup : function(ev) {
              // if: comma|enter (delimit more keyCodes with | pipe)
              if(/(188|13)/.test(ev.which)) $(this).focusout(); 
            }
    
        });

    
    });

    

    //texto-Form_update-
    //Form-update-81
    //span-Form-update-81


  $('.tags').on('click', 'span', function() {
     $(this).remove(); 
     $(".Etiquetas_Form_update").select();
  });


function insertarValor_update(){
    var arr = [];
    $(".span-"+nombre_cat_input+ " span").each(function(index, elem){
        arr.push($(this).text());
    });
    arr.join("|");

    $(".texto-"+nombre_cat_input).val(arr);

    console.log(arr)
    
}
 


 // EVENTOS NOTAS

 $(".btn_agregar_off").click(function(){
   $(".contenedor_mensaje_nota").fadeIn();
    $(".msj3").fadeIn();
   
   preventScroll();
   

    // Prevents preventDefault from being called on document if it sees a scrollable div
    /*$('body').on('touchmove','.scrollable',function(e) {
      e.stopPropagation();
    });*/
        

 });

 $(".txt_cerrar_caja").click(function(){
   $(".contenedor_mensaje_nota").fadeOut();
    $(".msj3").fadeOut();

    EnableScroll();

 });



 // BOTON INFORMACIÓN NOTAS
 $(".Btb_Info").click(function(event){
   $(".caja_informacion_notas").fadeIn();
   $(".Btb_Info").addClass("Btb_Info_on");

   event.stopPropagation();
 });

 $(".btn_cerrar_info").click(function(){
   $(".caja_informacion_notas").fadeOut();
   $(".Btb_Info").removeClass("Btb_Info_on");

 });

 


 $('input').on('keydown', function(event) {
   var x = event.which;
   if (x === 13) {
       event.preventDefault();
   }
});

