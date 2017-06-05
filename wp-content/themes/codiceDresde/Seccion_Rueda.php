<?php /* Template Name:  Sistemas Cronográficos */ 

echo get_template_part("header_rueda"); ?>

<!-- Mensajes notas -->

<!-- CODIGO PARA CREAR USUARIOS ===============  -->
			
			


<?php
if ( wp_is_mobile() ) { ?>

<div class="contenedorMovilSistemas">
<!-- Mensajes notas -->
		<div class="mensaje"> 
			<div class="txt">Para una mejor experiencia, te sugerimos explorar esta sección en tableta u ordenador.</div>
		</div>
</div>

 

<?php } else { }?>




<div class="contenedorCentralRueda">
 
<iframe scrolling="no" src="<?php echo get_template_directory_uri();?>/contenidos/codice_rueda/index.html"></iframe>

</div><!-- ContenedorCentral -->
 


	 


	
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/jquery.1.9.1.min.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/validate_form/jquery.validate.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/validate_form/form_rules.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/ajax/jquery.form.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/ajax/ajaxForm.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/menuHover.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/mensajeExplorer.js"></script>



 

 




<?php get_footer(); ?>
