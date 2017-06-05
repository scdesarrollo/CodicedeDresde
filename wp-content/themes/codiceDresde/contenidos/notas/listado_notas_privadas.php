<div class="Notas_Listas Notas_privadas">

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



	<div class="contendor_notas_privadas contenedor privada-<?php echo the_ID(); ?>">
		<div class="BloqueIcono">
			<div class="icono"></div>
		</div>
		 
		 
		 <div class="Bloque_txt">
		 		<div class="titulo"><?php the_title(); ?></div>	
		 		<div class="descripcion">
				   <?php echo $NotasExtracto = NotasExtracto ($post_id);  ?>

		 		</div>	

		 </div>

	</div><!--Contendor -->

<?php endwhile; wp_reset_query();   ?>


<!-- IF LOGGIN -->
<?php } else { ?> 
		
	
		<div class="texto_iniciar_sesion">
		Necesitas iniciar sesión para ver tus notas privadas
		</div>
	
	<?php } ?>



</div>	<!-- Notas_Listas -->

