<!-- HEADER NOTAS ============================== -->
	<div class="ContenedorAddNotas">
			
			<div class="subcontenedor">
					<div class="titulo_header">
							<div class="imagenTitulo"></div>

							<div class="btn_cerrar_nota"></div>
					</div>

					
				
				<div class="InformacionDatos">
					<form id="new_post" name="new_post" class="new_post_nota" method="post" action="<?php echo get_template_directory_uri(); ?>/formulario_insertar.php"> 
					
					<div class="BloqueA">Título</div>
					<div class="BloqueB"><input required type="text" name="titulo_nota" id="titulo_nota" size="45" id="input-title"/></div>


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

						<textarea required class="flexcroll_txt" name="contenido_nota" id="contenido_nota"></textarea>
						
					</div><!-- ContenedorTextos -->



					<div style="clear: both;"></div>

					<div class="Contenedor_Etiquetas">

					<div class="BloqueD">Etiquetas</div>
					<div class="BloqueE flexcroll_ETI tags">
						

						<input type="text" class="addEtiquetas Etiquetas_Form_add" name="etiquetas" id="etiquetas" size="45"/>
						 <input type="hidden" name="texto_nuevo_input"  id="texto_nuevo_input" class="texto_nuevo_input">
						 <input type="hidden" name="id_usuario"  id="id_usuario" value="
						 <?php if ( is_user_logged_in() ) { global $current_user;  echo  $current_user->ID; } ?>">

					</div>
					

					<div class="BloqueG">
						 <input type="hidden" name="action" value="new_post">
						 <input class="" type="submit" name="submit" value="Aceptar"/>
					</div>


					<div class="BloqueF">
						<select name="tipo_nota"  id="tipo_nota">
 							<option value="publish">Pública</option>
  							<option value="private">Privada</option>
						</select>

					</div>

					</div><!-- Contenedor_Etiquetas -->


					<div style="clear: both;"></div>
					
					<div class="habilitarContacto">
						
						<div class="texto">¿Habilitar contacto?</div>

						<div class="btn_check">
							<input class="checkbox_add" type="checkbox" id="checkbox_nota" name="checkbox_nota" value="<?php global $current_user; echo $current_user->user_email; ?>" checked>Si
  							<input class="checkbox_add" type="checkbox" name="no" value="no"> No
  						</div>

					</div><!--habilitarContacto-->





					</form>
				</div>


				



			</div><!--subcontenedor-->
			

	</div><!-- ContenedorAddNotas -->
