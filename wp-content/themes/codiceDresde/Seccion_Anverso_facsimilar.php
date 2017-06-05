<?php /* Template Name: Códice Anverso Facsimilar */ 

echo get_template_part("header_anverso");
 ?>

<div class="Contenedor_info_codice">
	<div class="cerrar_ayuda_cod"></div>

	<img src="<?php echo get_template_directory_uri(); ?>/images/generales/ayuda_materialidad.png">
</div>


<div class="contenedorCentralCodice">
    
	<div class="mainDiv">

		<div id="dresdeViewer" class="container1"></div>
	

	 



		
	</div>

 
	


</div><!-- ContenedorCentral -->
 


<div class="FooterBottomCodice">
	<!-- Barra de Navegación -->
	<div id="navigatorDiv" class="container2"></div>


<div class="footerCodice">


	<div class="bloques footer_on">Facsimilar</div>
	<div class="bloques mitad "><a href="<?php echo site_url();?>/anverso-original/">Original</a></div>
	<div class="bloques footer_on">Anverso</div>
	<div class="bloques"><a href="<?php echo site_url();?>/reverso-facsimilar/">Reverso</a></div>


	</div><!--FooterCodice -->

</div>
	 


<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/jquery.1.9.1.min.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/menuHoverCodice.js"></script>
<script type="text/javascript"> var RutaImagesCodices = '<?php echo get_template_directory_uri(); ?>/images/';  </script> 

<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/lib/openseadragon/openseadragon.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/lib/configuracion/anverso_facsimilar.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/validate_form/jquery.validate.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/validate_form/form_rules.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/menuHover.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/Selector_hover.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/openInfoCodices.js"></script>





<?php get_footer(); ?>
