<?php /* Template Name: Códice hipermedia: Augurios */ 

echo get_template_part("header_hipermedia_augurios");
 ?>


<div class="Contenedor_info_codice">
	<div class="cerrar_ayuda_cod"></div>

	<img src="<?php echo get_template_directory_uri(); ?>/images/generales/ayuda_hypermedia.png">
</div>


<?php
if ( wp_is_mobile() ) { ?>

<style type="text/css">
	.highlight{
		background: rgba(20,187,177,.4);	 
	}
	
	.highlight:hover{
		background: rgba(20,187,177,0.3);
	    -webkit-transition: background-color .5s ease-out;
	    -moz-transition: background-color .5s ease-out;
	    -o-transition: background-color .5s ease-out;
	    transition: background-color .5s ease-out;
	    border: solid 2px rgba(20,187,177,0.4);
	}
</style>


<?php } else{ ?>

<style type="text/css">
	.highlight{
	}
	
	.highlight:hover{
		background: rgba(20,187,177,0.3);
	    -webkit-transition: background-color .5s ease-out;
	    -moz-transition: background-color .5s ease-out;
	    -o-transition: background-color .5s ease-out;
	    transition: background-color .5s ease-out;
	    border: solid 2px rgba(20,187,177,0.4);
	}
</style>


<?php } ?>

<div class="contenedorCentralCodice">
    
	<div class="mainDiv">

		<div id="dresdeViewer" class="container1"></div>
	</div>

	 
</div><!-- ContenedorCentral -->
 

 <div class="FooterBottomCodice">
	<!-- Barra de Navegación -->
		<div id="navigatorDiv" class="container_hipermedia container2"></div>
	


 <div class="contenedor_nav_hipermedia">
 	<div class="BloqueA disableSelection" onclick="pageBackward()">Anterior</div>
 	<div class="BloqueB disableSelection" onclick="pageForward()">Siguiente</div>
 </div> <!-- contenedor_nav_hipermedia -->

</div>


	 
<script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/greensock-js/src/minified/TweenMax.min.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/main_Tween.js"></script>

<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/jquery.1.9.1.min.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/menuHoverCodice.js"></script>
<script type="text/javascript"> var RutaImagesCodices = '<?php echo get_template_directory_uri(); ?>/images/';  </script> 
<script type="text/javascript"> var RutahypermediaAugurios = '<?php echo site_url(); ?>/Hotspots/augurios-';  </script> 
<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/lib/openseadragon/openseadragon.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/lib/configuracion/hipermedia_augurios.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/validate_form/jquery.validate.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/validate_form/form_rules.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/menuHover.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/Selector_hover.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/menuHoverMaterialidad.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/openInfoCodices.js"></script>





<?php get_footer(); ?>
