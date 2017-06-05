<?php echo get_template_part("contenidos/notas_hotspots/eliminar_notas_hotspots_publica") ?>
<?php echo get_template_part("contenidos/notas_hotspots/eliminar_notas_hotspots_privada") ?>



<div class="cuadro_notas <?php echo the_ID(); ?>">
		

	<!-- Contenedor botones -->	
	<div class="contenedorBotones">
		<div class="encabezado">Notas</div>
		<div class="btn_close close_nota_hotspots"></div>
	</div>

	<!-- Contenedor Buscar-->	
	<div class="contenedorBuscar">
		<div class="closei_h"></div>
		 <div class="buscarIcon"></div>

		 <input class="inputBuscarNota" type="text" name="keyword3" id="keyword3"  onkeyup="fetch3()"  placeholder="Buscar Notas...">
	</div>



<!-- BUSQUEDA NOTAS PRIVADAS -->
<div id="datafetch3" class="listado_notas_h flexcroll"></div>



<div class="nota_contendor_h">

<?php
$thePostID = "nota-".$post->ID;
  global $current_user;
  get_currentuserinfo();
  $numero = $current_user->ID;
  $temp = $wp_query; 
  $wp_query = null; 
  $wp_query = new WP_Query(); 
  $wp_query->query('showposts=-1&post_type=notas&tag='.$thePostID.'&paged='.$paged); 

if ( have_posts() ) :

  while ($wp_query->have_posts()) : $wp_query->the_post(); 
 
  	$post_to_edit = get_post($post_id);


?>
 
		<div class="InforacionNota info-<?php echo the_ID(); ?>">
			<div class="tituloNota">

				<?php echo the_title();  ?>
			</div>

			<div class="EscritoPor">
				Escrito por: <span><?php the_author(); ?></span>, <span><?php the_time( 'd-m-Y g:i A' ); ?></span> 
			</div>

			<div class="TextoNota">


					
     			 	<?php  echo $excerpt_notas = NotasExtracto($post_id);  ?>


    			 <span class="completo">

    				<?php 
    			 	$content = wpautop( $post->post_content );
    			 	$content = apply_filters('the_content', $post->post_content);
    			 	echo strip_tags($content, '<p>');    			    
	    			?>

    			</span>
  
			</div>

		</div><!-- INFO NOTA -->

 


	<?php endwhile; wp_reset_query();   ?>

	 <?php else :?>
		<div class="BloqueNopost">
            <div class="texto">
                Aún no hay notas publicadas
            </div>
        </div>
	<?php endif; ?>
	 

</div><!-- Nota contenedor h -->



		 

			<!-- ============================= -->
			<div style="clear: both; width: 100%; height: 50px;"></div>
			
			<div class="BuscarEnNotas">
				<a href="<?php echo site_url();?>/notas/">
					<div class="texto_buscar"></div>
				</a>
			</div>

<?php 
$wp_query = null; 
  $wp_query = new WP_Query(); 
  $wp_query->query('showposts=-1&post_type=notas&order=ASC&tag='.$thePostID.'&paged='.$paged); 
	if ( have_posts() ) {
  		while ($wp_query->have_posts()) : $wp_query->the_post(); 
  		$post_to_edit = get_post($post_id);
  		?>

  
	
	


			<div class="MenuNotas show-info-<?php echo the_ID(); ?>">
				

				<?php  
				if ( is_user_logged_in() ) {
						$id_usuario_val = get_post_meta($post->ID, 'id_usuario', true);
						$usuario_activo = $current_user->ID; 
						// Comparamos para poder Eliminar y Actualizar
								if($id_usuario_val == $usuario_activo ){?>
									<div class="btn_editar editar-<?php echo the_ID(); ?>"></div>
								<?php 
								}else{?>
									<div class="btn_editar_off"></div>
								<?php } // IF $id_usuario_val  

				} else {?>
						 	<div class="btn_editar_off"></div>
				<?php } //  is_user_logged_in  ?>


				 
				<div class="btn_descargar descargar-<?php echo the_ID(); ?>"></div>


				<?php  
				if ( is_user_logged_in() ) {
						$id_usuario_val = get_post_meta($post->ID, 'id_usuario', true);
						$usuario_activo = $current_user->ID; 
						// Comparamos para poder Eliminar y Actualizar
								if($id_usuario_val == $usuario_activo ){?>
									<div class="btn_eliminar borrar-<?php echo the_ID(); ?>"></div>
								<?php 
								}else{?>
									<div class="btn_eliminar_off"></div>
								<?php } // IF $id_usuario_val  

				} else {?>
						 	<div class="btn_eliminar_off"></div>
				<?php } //  is_user_logged_in  ?>


				<?php  
				if ( is_user_logged_in() ) {
						$id_usuario_val = get_post_meta($post->ID, 'id_usuario', true);
						$usuario_activo = $current_user->ID; 
						// Comparamos para poder Eliminar y Actualizar
								if($id_usuario_val == $usuario_activo ){?>
									<div class="btn_agregar"></div>
								<?php 
								}else{?>
									<div class="btn_agregar"></div>
								<?php } // IF $id_usuario_val  

				} else {?>
							<div class="btn_agregar_off"></div>
				<?php } //  is_user_logged_in  ?>

				

			</div><!-- MenuNotas -->



	<?php endwhile; wp_reset_query(); } 

	else { ?>
		

			<div class="MenuNotas">
				<div class="btn_editar_off"></div>
				<div class="btn_descargar_off"></div>
				<div class="btn_eliminar_off"></div>
				<?php if ( is_user_logged_in() ) { ?>
				<div class="btn_agregar"></div>
					<?php } else { ?>
						<div class="btn_agregar_off"></div>
					<?php } ?>

			</div><!-- MenuNotas -->


	<?php }   ?>








	</div><!-- cuadro Notas -->
