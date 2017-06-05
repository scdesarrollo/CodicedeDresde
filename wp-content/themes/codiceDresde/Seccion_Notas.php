

<?php /* Template Name: Notas */ 



echo get_template_part("header_notas")?>




<!-- Mensajes notas -->
<div class="contenedor_mensaje_nota">
		<div class="mensaje msj1"> 
			<div class="txt">La nota se ha actualizado correctamente</div>
		</div>

		<div class="mensaje msj2"> 
			<div class="txt">Se ha creado la nota correctamente</div>
		</div>

		<div class="mensaje msj3"> 
			<div class="txt_cerrar_caja"></div>
			<div class="txt">¡Para agregar una nota es necesario iniciar sesión!</div>
		</div>

		 

</div>





<div class="contenedorCentral">
    


	<div class="TitulosTextos">
		Notas
	</div>

	<div class="bolita"></div>


	<div class="Seccion_notas">
	
		<div class="menu">
				<div class="Bloqueo"></div>

				<div class="BloqueA bnt_notas_privadas Notas_select">Privadas</div>
				<div class="BloqueB bnt_notas_publicas">Públicas</div>
				

				<div class="BloqueC">
					<div class="closei_n"></div>
					<div class="lupa"></div>
					<input type="text" class="buscarNota" name="keyword2" id="keyword2"  onkeyup="fetch2()"  placeholder="Buscar notas">
				</div>
				



				<div class="BloqueD">
				    <?php
					 if ( is_user_logged_in() ) { ?>
						<div class="btn_agregar"></div>
					<?php 
				   }

					else { ?>
						
						<div class="btn_agregar_off"></div>
						
						<?php } ?>
				</div>

		<div style="clear:both"></div>
		</div>		

 

		<!-- BUSQUEDA NOTAS PRIVADAS -->
		<div id="datafetch2" class="Notas_Listas  flexcroll"></div>



		<!-- NOTAS PRIVADAS -->

		<?php echo get_template_part("contenidos/notas/listado_notas_privadas");?>
		
		

		<!-- NOTAS PUBLICAS -->
		<?php echo get_template_part("contenidos/notas/listado_notas_publicas");?>

		





	</div><!-- Seccion Notas-->

</div><!-- ContenedorCentral -->
 

<div style="clear:both;"></div>
	
	<!-- NOTAS PUBLICAS -->
	<?php echo get_template_part("contenidos/notas/descargar_notas");?>	 


	
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/jquery.1.9.1.min.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/validate_form/jquery.validate.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/validate_form/form_rules.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/menuHover.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/notas/eventos_notas.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/notas/update_notas.js"></script>

<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/ajax/jquery.form.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/ajax/ajaxForm.js"></script>


<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/notas/libreria_pdf.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/notas/show_info_privadas.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/notas/show_info_publicas.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/header_scroll.js"></script>






<?php get_footer(); ?>
