

$(".InforacionNota").click(function() { 
  $(".completo_ajax").hide();
  $(".extracto").show();
  $(".tituloNota").removeClass("tituloNotaRed");
  $(this).find(".extracto").hide();
  $(this).find(".completo_ajax").fadeIn(); 
  $(this).find(".tituloNota").addClass("tituloNotaRed");
});