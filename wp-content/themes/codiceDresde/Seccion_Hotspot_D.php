<?php /*  WP Post Template: Hostspot D */ 
	echo get_template_part("header_hotspots");
 ?>

<?php echo get_template_part("contenidos/estilo_yoyo"); ?>
 

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
	


<?php echo get_template_part("contenidos/notas_hotspots/contenedor_notas")?>

<?php $posicion_back = (get_post_meta($post->ID, 'id_posicion', true)); ?>
<div class="btn_back back_to_hipermedia <?php if($posicion_back  != '') { echo $posicion_back; } else { echo "0.03055"; } ?>"></div>
<div class="btn_show_notas"></div>



	<div class="Contenedor_interior">

			 
	
				<!-- Mostrar los datos de Galerias -->
					<?php $repeatable_fields = get_post_meta($post->ID, 'repeatable_fields', true);  if ( $repeatable_fields ) : ?>
   					

						<div class="contenedor_flechas_D">
							<div class="next_C"></div>
   		 					<div class="prev_C"></div>
						</div><!-- Contenedor_flechas -->
   						

   						<div id="count_hp" class="imagen_hotspot_D">

   							


   							<?php $var_img = 0; ?>
   						    <?php foreach ( $repeatable_fields as $field ) { ?>
   						    <?php $var_img++ ?>


   						    <!-- IMAGENES MINI AUGURIOS -->
   						    <span id="imagen_hotspot_D" class="img-slider-<?php echo $var_img; ?> hostspotsContainer">
   							<?php if($field['img_au'] != '') echo  $field['img_au'];  ?>
   							</span>
   						    
   						    <div class="imagen_hotspot img-bullet-<?php echo $var_img; ?>">
   						    	<img class="zoom_01" src="<?php echo get_template_directory_uri(); ?>/images/zoom/augurios_encuadres/<?php if($field['imagen_1'] != '') echo  esc_attr( $field['imagen_1'] ) ?>"/>  
   						    </div>
	
   						    <?php } ?> 



   						</div>
					
					<?php endif; ?>


					<!-- BULLETS ***********************  -->
					<div id="bullets" class="BloqueBullets BloqueBullets_D" style="width: 300px !important;">
						<center>
					  		<?php $var_i = 0; ?>
   						      <?php foreach ( $repeatable_fields as $field ) { ?>
   						      	    <?php $var_i++?>
   						    		<span class="bullets bullet-<?php echo $var_i; ?> <?php echo $var_i; ?>"></span>
   						   	  <?php } ?> 
   						</center>
   					</div> 


   						

							<?php $var_contenido = 0; ?>
   						    <?php foreach ( $repeatable_fields as $field ) { ?>
   						   		 <?php $var_contenido++?>


   						    <div class="contenido_D contenido-bullet-<?php echo $var_contenido; ?>">
   						      	   
   						     <!-- Datos del hotspot -->
							<div class="Bloque_datos_hotspots">
								<div class="lamina"><?php if($field['tematica'] != '') { ?> <b>Temática:</b> <?php echo  $field['tematica'];  } ?></div>
								<div class="lamina"><?php if($field['lamina'] != '') { ?> <b>Lámina:</b>  <?php echo  $field['lamina'];  } ?></div>
								<div class="Escriba"><?php if($field['escriba'] != '')  { ?> <b>Escriba:</b>   <?php echo  $field['escriba']; } ?></div>
								<div class="Seccion"><?php if($field['seccion'] != '') { ?> <b>Sección:</b> <?php echo  $field['seccion']; }   ?></div>
							</div><!-- Bloque_datos_hotspots -->



   						    




							<!-- TEXTOS AUGURIOS MINI AUGURIOS -->
   							<?php if($field['texto_au'] != '') echo  $field['texto_au'];  ?>



   							<div class="contenedor_notas_hots">
								
									 <?php if($field['notas'] != '') { ?> <br><br><b>Notas:</b><br>  <?php  echo  $field['notas']; } ?>
							</div>
   						      	   
   						   	</div>

   						   	<?php } ?> 


				<div style="clear: both;"></div>	
		 
	</div><!--Contenedor_interior-->


</div><!-- contenedor_hotspots -->

	 
<?php echo get_template_part("contenidos/notas_hotspots/Descargar_notas_hotspots_publica")?>	 



<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/jquery.1.9.1.min.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/menuHoverCodice.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/validate_form/jquery.validate.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/validate_form/form_rules.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/menuHover.js"></script>
 <script src="//code.jquery.com/ui/1.12.0/jquery-ui.js"></script>

<script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/greensock-js/src/minified/TweenMax.min.js"></script>


<script type="text/javascript"> var RutaRegresarAugurios = '<?php echo site_url(); ?>/hypermedia-augurios/';  </script> 
<script type="text/javascript"> var RutaRegresarDeidades = '<?php echo site_url(); ?>/hypermedia-dioses/';  </script> 

<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/notas_hotspots/eventos_notas_hotspots.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/ajax/jquery.form.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/ajax/ajaxForm.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/notas/libreria_pdf.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/notas_hotspots/show_btns_hotspots.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/notas_hotspots/eventos_hp_C.js"></script>
<script src='<?php echo get_template_directory_uri();?>/js/zoom/slider_manual.js'></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/header_scroll.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/menuHoverMaterialidad.js"></script>

<script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/efecto_yoyo.js"></script>



 

 


<?php get_footer(); ?>
