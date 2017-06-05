<?php 
	echo get_template_part("header_hotspots");
 ?>

 
 <!-- Mensajes notas -->
<div class="contenedor_mensaje_nota">
		<div class="mensaje msj5"> 
			<div class="txt">La nota se ha insertado correctamente</div>
		</div>

		<div class="mensaje msj4"> 
			<div class="txt">La nota se ha actualizado correctamente</div>
		</div>

		<div class="mensaje msj3"> 
			<div class="txt_cerrar_caja"></div>
			<div class="txt">¡Para agregar una nota es necesario iniciar sesión!</div>
		</div>
</div>

 





<div class="contenedor_hotspots">
	
<div class="btn_back"></div>
<div class="btn_show_notas"></div>

<?php echo get_template_part("contenidos/notas_hotspots/contenedor_notas")?>





	<div class="Contenedor_interior">

			 
			
						<div class="imagen_hotspot">
							 


				<?php 
				$imagen_zoom1 = get_post_meta($post->ID, 'id_imagen_zoom_1', true);
				$imagen_zoom2 = get_post_meta($post->ID, 'id_imagen_zoom_2', true);
				if($imagen_zoom1  != '') {?> 

				<img id="zoom_01" src="<?php echo get_template_directory_uri();?>/images/zoom/<?php echo $imagen_zoom1; ?>"
				data-zoom-image="<?php echo get_template_directory_uri(); ?>/images/zoom/<?php echo $imagen_zoom2; ?>"/>
				<?php } else { ?> Imagen No Disponible <?php } ?>



						</div>
			
						<div class="Titulo">
							<?php echo the_title(); ?>
						</div>
			
						<div class="contenido">
							<?php  the_content(); ?>
						</div>



			
			 


	</div><!--Contenedor_interior-->


</div><!-- contenedor_hotspots -->


	 


<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/jquery.1.9.1.min.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/menuHoverCodice.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/validate_form/jquery.validate.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/validate_form/form_rules.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/menuHover.js"></script>
 <script src="//code.jquery.com/ui/1.12.0/jquery-ui.js"></script>


<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/notas_hotspots/eventos_notas_hotspots.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/ajax/jquery.form.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/ajax/ajaxForm.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/notas/libreria_pdf.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/notas_hotspots/show_btns_hotspots.js"></script>


<script src='<?php echo get_template_directory_uri();?>/js/zoom/jquery.elevatezoom.js'></script>
<script src='<?php echo get_template_directory_uri();?>/js/zoom/configuracion.js'></script>

 


<?php get_footer(); ?>
