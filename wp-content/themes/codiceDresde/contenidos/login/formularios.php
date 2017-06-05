 <?php
			if ( is_user_logged_in() ) { ?>

			<span class="seccion_Login_on">
				<?php
					 global $current_user;
					 get_currentuserinfo();?>
					
					<span class="usuario">
				      <?php echo '' . $current_user->user_login . "\n"; ?>
				     </span>


				     <div class="cerrar_sesion"> 
				      <a href="<?php echo wp_logout_url( home_url() );?>" title="Cerrar sesión"><div class="icono_cerrar_sesion"></div></a>
				     </div>

			</span>

		<?php } else { ?>


	   <div class="seccion_Login">

	   <div class="tituloForm tit_1">Iniciar Sesión</div>
	   <div class="tituloForm tit_2">Registro de usuario</div>


			<div class="formulario_login">
				
		
		<?php
		$redirect_to = home_url(add_query_arg(array(),$wp->request));
		?>
		


			
		 


				 

				<form name="loginform" id="loginform" action="<?php echo site_url( '/wp-login.php' ); ?>" method="post">

				<div class="texto"><span style="color:#D3584E">*</span>Nombre de usuario:</div>
				<input type="text" name="log" id="log"><br><br>
	
				<div class="texto"><span style="color:#D3584E">*</span> Contraseña:</div>

				<input type="password" name="pwd" id="pwd"><br>
				<div class="texto_olvidado"><a href="<?php echo site_url();?>/wp-login.php?action=lostpassword">¿Has olvidado la contraseña?</a></div><br>
	

				<input class="btn_login_form_Iniciar" id="wp-submit" type="submit" value="Iniciar sesión" name="wp-submit">
				<input type="hidden" value="<?php echo esc_attr( $redirect_to ); ?>" name="redirect_to">
				<input type="hidden" value="1" name="testcookie">
				<input type="hidden" value="<?php echo esc_attr( $redirect_to ); ?>" name="redirect_to">
				<div class="btn_login_form_Registrarse btn_registrar">Registrarse</div>
				
				 
				


				</form>


				<?php 
				
					}
				?>

			</div><!-- Formulario Login -->

 
 			<?php
			if ( is_user_logged_in() ) { } 

			else { ?>

			<div class="formulario_registro">
			
			

			<form id="registro_form" class="registro_usuarioX" action="#" method="post" >
			<p class="txt_obligatorios"> Los campos marcados con <span style="color:#D3584E">*</span> son obligatorios </p><br>
			<div class="texto"><span style="color:#D3584E">*</span> Nombre:</div>
			<input type="text"  name="nombre_reg" id="nombre_reg"><br><br>

			<div class="texto"><span style="color:#D3584E">*</span> Nombre de usuario:</div>
			<input type="text" name="username_reg" id="username_reg" ><br><br>

			<div class="texto"><span style="color:#D3584E">*</span> Correo:</div>
			<input type="text" name="email_reg" id="email_reg" ><br><br>

			<div class="texto"><span style="color:#D3584E">*</span> Contraseña:</div>
			<input type="password" name="password_reg" id="password_reg"><br><br>

			<div class="texto"><span style="color:#D3584E">*</span> Confirmar contraseña:</div>
			<input type="password" name="cofirmar_p_reg" id="Confirmar_p_reg"><br><br>

			<div class="btn_login_form_cancelar cancelar_reg">Cancelar</div>
			<input class="btn_login_form" id="wp-submit" type="submit" value="Registrar" name="wp-submit">
			</form>

			

			
			</div>

		 
			

			<?php } ?>






