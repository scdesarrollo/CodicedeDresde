 

<?php 
  $wp_query = null; 
  $wp_query = new WP_Query(); 
  $wp_query->query('showposts=-1&post_type=notas&post_status=publish&tag='.$thePostID.'&paged='.$paged); 

  while ($wp_query->have_posts()) : $wp_query->the_post(); 
  $post_to_edit = get_post($post_id);

?>

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



	
	<?php endwhile; wp_reset_query(); ?>
