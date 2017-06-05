 
			

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

			<div class="subcontenedor subcontenedorUpdateNotas show-editar-<?php echo the_ID(); ?>">
					<div class="titulo_header">
							<div class="imagenTitulo"></div>

							<div class="btn_cerrar_nota_update"></div>
					</div>

					
				
				<div class="InformacionDatos">
					<form id="update_post" name="update_post" class="update_post" method="post" action="<?php echo get_template_directory_uri(); ?>/formulario_actualizar_privada.php"> 
					
					<div class="BloqueA">Título</div>
					<div class="BloqueB"><input required  type="text" name="titulo_nota" id="titulo_nota" size="45" id="input-title" value="<?php the_title(); ?>" /></div>


					<div class="BloqueC">Ubicación: Notas generales</div>

					<div class="Btb_Info"></div>

					<div class="caja_informacion_notas">
						<div class="triangulo_info_notas"></div>

						<div class="txt">
							<div class="btn_cerrar_info"></div>
							Al crear una nota con texto copiado de algún sitio web, considera que es probable que éste no se represente adecuadamente al descargar tu nota en formato pdf. Por ello es recomendable que antes de copiar texto elimines el formato preexistente del mismo.
						</div>
					</div>


					<div style="clear: both;"></div>
					<div class="contenedorTexto">

						<textarea required class="flexcroll_txt" name="contenido_nota" id="contenido_nota"><?php echo get_the_content(); ?></textarea>
						
					</div><!-- ContenedorTextos -->



					<div style="clear: both;"></div>

					<div class="Contenedor_Etiquetas">
					<div class="BloqueD">Etiquetas</div>
					<div class="BloqueEUpdate span-Form-update-<?php echo the_ID(); ?> flexcroll_ETI tags">
						
						<input type="text" class="addEtiquetas Etiquetas_Form_update Form-update-<?php echo the_ID(); ?>" name="etiquetas" id="etiquetas" size="45"/>

						<?php
							$posttags = get_the_tags();
							if ($posttags) {
							  foreach($posttags as $tag) {
							    echo '<span>' .$tag->name. '</span>'; 
							  }
							}
						?>

						 <input type="hidden" name="texto_nuevo_input_update"  id="texto_nuevo_input_update" class="texto_nuevo_input_update texto-Form-update-<?php echo the_ID(); ?>" value="
						 <?php
							$posttags = get_the_tags();
							if ($posttags) {
							  foreach($posttags as $tag) {
							    echo $tag->name. ','; 
							  }
							}
						?>
						 ">

						 <?php $value_id_hotspots = (get_post_meta($post->ID, 'id_IDhotspots', true)); ?>	
						<input type="hidden" name="id_valor_hp"  id="id_valor_hp" value="<?php echo $value_id_hotspots; ?>">

					</div>
					
					

					<div class="BloqueG">
						 <input type="hidden" name="id_nota" id="id_nota" size="45" value="<?php  echo the_ID();  ?>"/>
						 <input type="hidden" name="action" value="update_post">
						 <input class="" type="submit" name="submit" value="Aceptar"/>
					</div>


					<div class="BloqueF">

						<?php
						if ( get_post_status ( $ID ) == 'private' ) { ?>
							 
							<select name="tipo_nota"  id="tipo_nota">
  								<option value="private">Privada</option>
 								<option value="publish">Pública</option>
							</select>

						<?php }

						else { ?>
							<select name="tipo_nota"  id="tipo_nota">
 								<option value="publish">Pública</option>
  								<option value="private">Privada</option>
							</select>
						<?php } ?>


					</div>

					</div><!-- Contenedor_Etiquetas -->


					<div style="clear: both;"></div>
					
					<div class="habilitarContacto">
						
						<div class="texto">¿Habilitar contacto?</div>

							<div class="btn_check">
							
						<?php 
						$correo_usuario = get_post_meta($post->ID, 'id_correo', true);
						if($correo_usuario  != '') { ?>
						

							<input class="checkbox_add" type="checkbox" id="checkbox_nota" name="checkbox_nota" value="<?php global $current_user; echo $current_user->user_email; ?>" checked>Si

							<input class="checkbox_add" type="checkbox" name="no" value="no"> No
							 
						<?php } else { ?>


					 	<input class="checkbox_add" type="checkbox" id="checkbox_nota" name="checkbox_nota" value="<?php global $current_user; echo $current_user->user_email; ?>">Si

					 	<input class="checkbox_add" type="checkbox" name="no" value="no" checked> No

						<?php } ?>

							
  					</div>

					</div><!--habilitarContacto-->





					</form>
				</div>



			</div><!--subcontenedor-->


			<?php endwhile; ?>


<!-- IF LOGGIN -->
<?php } else { ?> 
		
		Necesitas Iniciar sesión para ver tus notas privadas
	
	<?php } ?>

			
 
