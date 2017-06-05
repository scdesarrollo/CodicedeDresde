<?php /* Template Name: Códice Anverso */ 

echo get_template_part("header_anverso");
 ?>



<div class="contenedorCentralCodice">
    
	<div class="mainDiv">

		<div id="dresdeViewer" class="container1"></div>
		<div id="navigatorDiv" class="container2"></div>

	</div>

 


	 

        



	<div class="footerCodice">
		<li class="anverso">Anverso (1-39)</li>
		<li class="reverso"><a href="../codice/reverso.html">Reverso (40-78)</a></li>


	</div><!--FooterCodice -->


</div><!-- ContenedorCentral -->
 


	 


<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/jquery.1.9.1.min.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/menuHoverCodice.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/lib/openseadragon/openseadragon.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/lib/configuracion/anverso_normal.js"></script>



<?php get_footer(); ?>
