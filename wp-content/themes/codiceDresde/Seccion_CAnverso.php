<?php /* Template Name: Códice Comp Anverso */ 

echo get_template_part("header_comp_anverso");
 ?>



<div class="Contenedor_info_codice">
	<div class="cerrar_ayuda_cod"></div>

	<img src="<?php echo get_template_directory_uri(); ?>/images/generales/ayuda_materialidad.png">
</div>


<div class="contenedorCentralCodice">
    
	<div class="mainDiv">

		<div id="dresdeViewer" class="container3_A"></div>
		 
		<div id="dresdeViewe2" class="container3_B"></div>

	</div>

 


	 

        

 

</div><!-- ContenedorCentral -->



<div class="FooterBottomCodice">

<div style="clear: both;"></div>
		<div class="BloqueNombresComparativa">
				<div class="bloqueA">Facsimilar Förstemann</div>
				<div class="bloqueB">Códice Original</div>
		</div> <!-- BloqueNombresComparativa --> 


	<!-- Barra de Navegación -->
	<div id="navigatorDiv" class="container2X"></div>

	<div class="footerCodice">


	    <div class="BloqueA select_on mitad">Anverso (1-39)</div>
		<div class="BloqueB"><a href="<?php echo site_url();?>/comparativa-reverso/">Reverso (40-78)</a></div>

	</div><!--FooterCodice -->

</div>	 
 


	 


<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/jquery.1.9.1.min.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/menuHoverCodice.js"></script>
<script type="text/javascript"> var RutaImagesCodices = '<?php echo get_template_directory_uri(); ?>/images/';  </script> 
<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/lib/openseadragon/openseadragon.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/lib/configuracion/comparativa_anverso.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/validate_form/jquery.validate.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/validate_form/form_rules.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/menuHover.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/openInfoCodices.js"></script>


<?php get_footer(); ?>
