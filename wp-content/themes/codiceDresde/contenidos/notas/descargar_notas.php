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



<!-- DESCARGAR NOTA ==================== -->
					<section id="nota-descargar-<?php echo the_ID(); ?>" style="display: none;" class="descargar-nota-stilo">
					  <p><b style="color:#000; margin-bottom: 60px;"><?php the_title();?></b></p>
					  <p style="color:#000; margin-bottom: 20px;"><i><?php the_author(); ?>, <?php the_time( 'd-m-Y g:i a' ); ?></i></p>
					  <p><?php echo $correo_usuario = get_post_meta($post->ID, 'id_correo', true); ?></p>

					  <p style="color:#000 !important; margin-bottom: 20px;">
					  	<?php 
					  	 $content = wpautop( $post->post_content );
						 echo $content;
					  	?> 
					  </p>
					   <p style="color:#000 !important; margin-bottom: 20px;"><b>Palabras Claves: </b>
					   <?php 

					   		$posttags = get_the_tags();
							if ($posttags) {
							  foreach($posttags as $tag) {
							    echo $tag->name. ', '; 
							  }
							}

					   ?>
					   </p>
					</section>



<?php endwhile; wp_reset_query(); ?>

<!-- IF LOGGIN -->
<?php } else { ?> 
		
		<!--Necesitas Iniciar sessión para ver tus notas privadas -->
	
<?php } ?>




<?php
  global $current_user;
  get_currentuserinfo();
  $numero = $current_user->ID;

  $temp = $wp_query; 
  $wp_query = null; 

  $wp_query = new WP_Query(); 
  $wp_query->query('showposts=-1&post_type=notas&post_status=publish'.'&paged='.$paged); 

  while ($wp_query->have_posts()) : $wp_query->the_post(); 

 $post_to_edit = get_post($post_id);

?>


	<!-- DESCARGAR NOTA ==================== -->
	<section id="nota-descargar-<?php echo the_ID(); ?>" style="display: none;" class="descargar-nota-stilo">
	  <p><b style="color:#000; margin-bottom: 60px;"><?php the_title();?></b></p>
	  <p style="color:#000; margin-bottom: 20px;"><i><?php the_author(); ?>, <?php the_time( 'd-m-Y g:i a' ); ?></i></p>
	  <p><?php echo $correo_usuario = get_post_meta($post->ID, 'id_correo', true); ?></p>

	  <p style="color:#000 !important; margin-bottom: 20px;">
	  	<?php 
	  	//$content = wpautop( $post->post_content );
	  	//$content = apply_filters('the_content', $post->post_content);
		//echo strip_tags($content, '<p><a>');

		 $content = wpautop( $post->post_content );
		echo $content;

	  	?> 
	  </p>
	   <p style="color:#000 !important; margin-bottom: 20px;"><b>Palabras Claves: </b>
	   <?php 
	   		$posttags = get_the_tags();
			if ($posttags) {
			  foreach($posttags as $tag) {?>
			    <span class="nota_d"><?php echo $tag->name ?> </span>
			  <?php }
			}

	   ?>
	   </p>
	</section>


<?php endwhile; wp_reset_query(); ?>

