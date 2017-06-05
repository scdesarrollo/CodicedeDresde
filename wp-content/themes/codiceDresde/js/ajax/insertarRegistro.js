$(document).ready(function() {
  $('.agregar').click(function(){

        
        //Creamos la Variable que recibira el "Value" de todos los Input que esten dentro del Form
        var obtener = $("#registro_form").serialize();

        $.ajax({
            type: "POST",
            url: "../web_servicios/registrar_usuario.php",
            data: obtener,
            success: function() {
                alert('Tus datos han sido insertados correctamente!'); //Mensaje de Datos Correctamente Insertado
            }
        }); //Terminamos la Funcion Ajax
        return false; //Agregamos el Return para que no Recargue la Pagina al Enviar el Formulario
    



    }); //Terminamos la Funcion Click



}); //Terminamos la Funcion Ready