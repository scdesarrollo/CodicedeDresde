
        
							
  	// INSERCION NOTA
	function redireccionarPagina() {
 		window.location.reload();
	}

	// INSERCION NOTA
	function redireccionSamePage() {
 		window.location.reload();
	}

    // bind 'myForm' and provide a simple callback function 
    $('.new_post_nota').ajaxForm(function() { 
		$(".contenedor_mensaje_nota").fadeIn();
		$(".msj2").fadeIn();
		setTimeout("redireccionarPagina()", 1000);
	}); 


	  // bind 'myForm' and provide a simple callback function 
    $('.new_post_nota_hotspots').ajaxForm(function() { 
		$(".contenedor_mensaje_nota").fadeIn();
		$(".msj5").fadeIn();
		setTimeout("redireccionSamePage()", 1000);
	});
 

	 
  	// bind 'myForm' and provide a simple callback function 
    $('.update_post_publica').ajaxForm(function() { 
		$(".contenedor_mensaje_nota").fadeIn();
		$(".msj1").fadeIn();

		setTimeout("redireccionarPagina()", 1000);
	}); 
 
  	// bind 'myForm' and provide a simple callback function 
    $('.update_post').ajaxForm(function() { 
		$(".contenedor_mensaje_nota").fadeIn();
		$(".msj1").fadeIn();
		setTimeout("redireccionarPagina()", 1000);
	}); 

    // ACTUALIZAR NOTA PUBLICA HOTSPOTS
	
	 $('.update_post_publica_hotspots').ajaxForm(function() { 
		$(".contenedor_mensaje_nota").fadeIn();
		$(".msj4").fadeIn();
		setTimeout("window.location.reload();", 1000);
	});

	$('.update_post_privada_hotspots').ajaxForm(function() { 
		$(".contenedor_mensaje_nota").fadeIn();
		$(".msj4").fadeIn();
		setTimeout("window.location.reload();", 1000);
	}); 


	// bind 'myForm' and provide a simple callback function 
    $('.registro_usuario').ajaxForm(function() { 
		 $(".contenedor_mensaje_nota").fadeIn();
		 $(".msj_crearUser").fadeIn();
		 setTimeout("window.location.reload();", 1000);
		 
	}); 


	 
 