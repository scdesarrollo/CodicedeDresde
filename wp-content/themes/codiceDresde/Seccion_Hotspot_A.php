<?php /*  WP Post Template: Hostspot A */ 
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
	<!-- 0.36055000000000004,  0.39055000000000006 , 0.6305500000000003 -->
 

<?php echo get_template_part("contenidos/notas_hotspots/contenedor_notas")?>

<?php $posicion_back = (get_post_meta($post->ID, 'id_posicion', true)); ?>

	<?php
       $category_array = wp_get_post_categories($post->ID);
       $category_list = array();
       foreach ( $category_array as $categories ) {
           $category_list[] = get_cat_name( $categories );
       }
       $lister = implode(' • ', $category_list);
       $list_categories = $lister;
      
      	if ($lister=="deidades_encuadres") { ?>
      		<?php $posicion_back = (get_post_meta($post->ID, 'id_posicion', true)); ?>
      		<div class="btn_back back_to_hipermedia_Deidades <?php if($posicion_back  != '') { echo $posicion_back; } else { echo "0.03055"; } ?>"></div>
 			<div class="btn_show_notas"></div>

      			<?php } else { ?>
      		<?php $posicion_back = (get_post_meta($post->ID, 'id_posicion', true)); ?>
 			<div class="btn_back back_to_hipermedia <?php if($posicion_back  != '') { echo $posicion_back; } else { echo "0.03055"; } ?>"></div>
 			<div class="btn_show_notas"></div>
			
 	<?php } ?>


 

 
	

	<div class="Contenedor_interior">

			 
			
						<div class="imagen_hotspot">
						
							<?php $var_hp = 0; ?>
							<?php $repeatable_fields_2 = get_post_meta($post->ID, 'repeatable_fields_2', true);  if ( $repeatable_fields_2 ) : ?>
							<?php foreach ( $repeatable_fields_2 as $field_2  ) { ?>
   						   	<?php $var_hp++?>

   						   	 <?php if($field_2['img_hp'] != ''){ ?>

   							<div id="id-<?php echo $var_hp; ?>" class="hotspot_over hp-<?php echo $var_hp; ?>" style="left: <?php echo $field_2['coordenada_x']; ?>px; top: <?php echo $field_2['coordenada_y']; ?>px;  ">
						<img src="<?php echo get_template_directory_uri();?>/images/zoom/augurios_encuadres_hotspots/<?php echo $field_2['img_hp']; ?>">
						</div>


   						<?php } else { } ?>


						<?php } ?> 
						<?php endif; ?>



						<?php 
						$imagen_zoom1 = get_post_meta($post->ID, 'id_imagen_zoom_1', true);
						if($imagen_zoom1  != '') {?> 
		
						<img id="zoom_01" src="<?php echo get_template_directory_uri();?>/images/zoom/<?php echo $imagen_zoom1; ?>"/>
						<?php } else { ?> Imagen No Disponible <?php } ?>





						</div> <!-- imagen_hotspot -->
			
						<div class="Titulo">
						<?php echo $nombre_hp = (get_post_meta($post->ID, 'id_nombre_hp', true)); ?>
						</div>
			
						<div class="contenido">
							<?php 
								$tematica = (get_post_meta($post->ID, 'id_tematica', true)); 
					 			$lamina = (get_post_meta($post->ID, 'id_lamina', true));
					 			$escriba = (get_post_meta($post->ID, 'id_escriba', true));
					 			$seccion = (get_post_meta($post->ID, 'id_seccion', true));
					 			$notas = (get_post_meta($post->ID, 'id_notas', true));

							?>

							<div class="Bloque_datos_hotspots">
								<?php if($tematica != '') {?> 
								<div class="lamina"> <b>Temática:</b> <?php echo $tematica; ?></div>
								<?php } ?>

								<?php if($lamina != '') {?> 
								<div class="lamina"> <b>Lámina:</b> <?php echo $lamina; ?></div>
								<?php } ?>

								<?php if($escriba != '') {?> 
									<div class="Escriba"><b>Escriba:</b> <?php echo $escriba; ?></div>
								<?php } ?>

								<?php if($seccion != '') {?> 
									<div class="Seccion"> <b>Sección:</b> <?php echo $seccion; ?></div>
								<?php } ?>

							</div><!-- Bloque_datos_hotspots -->
	
							
							<div class="contenedro_textos_augurios">

								<?php $var_i = 0; ?>
								<?php $repeatable_fields_2 = get_post_meta($post->ID, 'repeatable_fields_2', true);  if ( $repeatable_fields_2 ) : ?>
								<?php foreach ( $repeatable_fields_2 as $field_2  ) { ?>
   						   		<?php $var_i++?>	 
   						   			  
   						   			 <div id="to-<?php echo $var_i; ?>" class="textos_augurios augurio-hp-<?php echo $var_i; ?>">
   						   			  	<span><?php if($field_2['texto_maya'] != '') echo $field_2['texto_maya']; ?></span><br>
   						   			  	<span><?php if($field_2['texto_espanol'] != '') echo $field_2['texto_espanol']; ?></span> 
   						   			  </div><!--Textos augurios -->
		
   						    	<?php } ?> 
	
	
								<?php endif; ?>

	
							</div><!-- textos_augurios -->


							<div class="contenedor_notas_hots">
									<?php if($notas  != '') {?> 
										<b>Notas:</b><br><br>
										<?php echo $notas; ?>
									<?php } ?>



							</div>



 

						</div><!-- contenido -->



			
			 


	</div><!--Contenedor_interior-->


</div><!-- contenedor_hotspots -->


<!-- DESCARGAR NOTA PUBLICA -->
<?php echo get_template_part("contenidos/notas_hotspots/Descargar_notas_hotspots_publica") ?>	 



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
<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/notas_hotspots/eventos_hp.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/header_scroll.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/menuHoverMaterialidad.js"></script>

<script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/efecto_yoyo.js"></script>




 


<?php get_footer(); ?>
