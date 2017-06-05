<div class="Notas_Listas Notas_publicas"> 

		
<?php
  $temp = $wp_query; 
  $wp_query = null; 
  $wp_query = new WP_Query(); 
  $wp_query->query('showposts=-1&post_type=notas&post_status=publish'.'&paged='.$paged); 

  while ($wp_query->have_posts()) : $wp_query->the_post(); 


?>


	<div class="contendor_notas_publicas contenedor publica-<?php echo the_ID(); ?>">
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
</div><!-- Notas_Listas -->