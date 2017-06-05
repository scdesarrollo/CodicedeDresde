<?php echo get_template_part("header_notFound"); ?> 


	<div class="contenedorNotFound">

			<div class="subcontenedor">
				<div class="logo">
					<img src="<?php echo get_template_directory_uri(); ?>/images/not_found/Codex_Dresde.png"/>
				</div>

				<div class="titulo">Página no encontrada </div>

				<div class="descripcion">La página solicitada puede no estar disponible, <br>haber cambiado de dirección (URL) o no existir</div>

				<a href="<?php echo site_url(); ?>">
					<div class="btn_regresar"></div>
				</a>

			</div> <!-- subcontenedor -->
		

	</div>



<?php get_footer(); ?>
