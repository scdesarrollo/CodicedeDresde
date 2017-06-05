(function( $ ) {
			  $("#registro_form").validate({
			    rules: {
			      nombre_reg: { required: true, minlength: 2},
			      username_reg: { required: true, minlength: 2},
			      email_reg: { required:true, email: true},
			      password_reg:{ required: true, minlength: 2},
			      cofirmar_p_reg: { equalTo: "#password_reg"},
			    },
			    messages: {
			      nombre_reg: "Este campo es obligatorio.",
			      username_reg: "Este campo es obligatorio.",
			      email_reg: "Este campo es obligatorio y debe tener formato de email correcto.",
			      password_reg: "Este campo es obligatorio",
			      cofirmar_p_reg: "El password no coincide",
			      
			    }

			   


			  });

})( jQuery );

(function( $ ) {


	

			  // FORMULARIO INICIAR SESIÓN
			  $("#loginform").validate({
			    rules: {
			      log: { required: true, minlength: 2},
			      pwd: { required: true, minlength: 2} 
			    },
			    messages: {
			      log: "Este campo es obligatorio.",
			      pwd: "Este campo es obligatorio."
			     	
			    } 

			   

			  });


			  

})( jQuery );












 