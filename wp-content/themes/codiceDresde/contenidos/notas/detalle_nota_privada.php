
 
			

			 <?php
// si esta loggeado
if ( is_user_logged_in() ) {

 

  global $current_user;
  get_currentuserinfo();
  $numero = $current_user->ID;

  $temp = $wp_query; 
  $wp_query = null; 

  $wp_query = new WP_Query(); 
  $wp_query->query('showposts=10&post_type=notas&post_status=private&author='.$numero.'&paged='.$paged); 

  while ($wp_query->have_posts()) : $wp_query->the_post(); 

$post_to_edit = get_post($post_id);

?>


			<div class="subcontenedor show-privada-<?php echo the_ID(); ?>">
					<div class="titulo_header">
							<div class="Titulo"><?php the_title(); ?></div>

							<div class="btn_cerrar_nota"></div>
					</div>

					
				<div class="EscritoUbicacion">
					<div class="subcontenedor">
						<div class="BloqueA">
							Escrito por: <?php the_author(); ?>, <?php the_time( 'd-m-Y g:i A' ); ?>
						</div>



						<div class="BloqueB">
						<?php 
						$ubicacion_nota = get_post_meta($post->ID, 'id_ubicacion', true);
				        if($ubicacion_nota  != '') { ?> 

							Ubicación: <?php echo $ubicacion_nota; ?>  
						
						<?php } else { ?>
							Ubicación: Notas Generales
						<?php } ?>

						</div>

					<div style="clear: both;"></div>
					</div>
				</div>





				<div class="InformacionDatos">

					

					<div class="BloqueA">
						<div class="icono_correo"></div>
					</div>
					
					<div class="BloqueB">


			<?php 
				$correo_usuario = get_post_meta($post->ID, 'id_correo', true);
				if($correo_usuario  != '') { 

					echo $correo_usuario;
				?>  


	
				<?php } else { ?>


					No Disponible

					<?php } ?>

					</div>

					<div class="BloqueC">
						<!-- Editar -->
						<div class="subBloqueA">
								<div class="icono_editar editar-<?php echo the_ID(); ?>"></div>
						</div>


						<div class="subBloqueB">

								<div class="icono_descargar descargar-<?php echo the_ID(); ?>"></div>


						</div>
						<div class="subBloqueC">
								<div class="icono_borrar borrar-<?php echo the_ID(); ?>"></div>
						</div>
					</div>


					

					<div style="clear: both;"></div>
					<div class="contenedorTexto flexcroll_txt">
						<div class="flexcroll_txt texto_nota">
							<?php 
					  		$content = wpautop( $post->post_content );
					  		$content = apply_filters('the_content', $post->post_content);
							echo strip_tags($content, '<p><a>');
					  		?> 
						</div> 
						
						
					</div><!-- ContenedorTextos -->



					<div style="clear: both;"></div>


					<div class="BloqueD">Etiquetas</div>
					<div class="BloqueE_Detalle">
						<?php
							$posttags = get_the_tags();
							if ($posttags) {
							  foreach($posttags as $tag) {
							    echo '<span><center>' .$tag->name. '</center></span>'; 
							  }
							}
						?>
					</div>
					

					<div class="BloqueG">
						<div class="tipoNota">Privada</div>
					</div>

					 



					<!-- CONFIRMAR BORRAR -->
					<div class="ConfirmarBorrar show-borrar-<?php echo the_ID(); ?>">
						<div class="BloqueTexto">
								¿Deseas eliminar definitivamente esta nota?

								<div class="contendo_btn">
								<a href="<?php echo get_delete_post_link( get_the_ID() ); ?>">
									<div class="btn_eliminar"><span>Si</span></div>
								</a>
									
									<div class="btn_eliminar cancel_eliminar_privada"><span>No</span></div>
									
								</div>
						</div>

					</div>


			


					<div style="clear: both;"></div>
					
					 
					

				</div>


				



			</div><!--subcontenedor-->
			

	<?php endwhile; ?>


<!-- IF LOGGIN -->
<?php } else { ?> 
		
		<!--Necesitas Iniciar sessión para ver tus notas privadas -->
	
	<?php } ?>
 


