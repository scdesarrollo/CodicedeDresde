<?php    
			
			if(isset($_POST['wp-submit'])){ //check if form was submitted
			  	
			include "../../../wp-load.php";

			 
			   //Nombre
			   //User Name
			   //Email
			   //Password
			 


			$nombre =  $_POST['nombre_reg'];
			$username =  $_POST['username_reg'];
			$email = $_POST['email_reg'];
			$password =  $_POST['password_reg'];


			$userdata = array(
			    'user_login'  =>  $username,
			    'nickname' => $nombre,
			    'user_email' => $email,
			    'user_pass'   =>  $password,
			);

			$user_id = wp_insert_user( $userdata ) ;


			//MENSAJE DE ACEPTACIÓN
			if ( ! is_wp_error( $user_id ) ) { ?>
			    
			<?php  echo "User created : ". $user_id; ?>
			<?php wp_update_user( array ('ID' => $user_id, 'role' => 'author') ) ; ?>

				<div class="contenedor_mensaje_addUser">
					<div class="mensaje_correct msj_crearUser"> 
						<div class="txt">El usuario se ha creado correctamente</div>
					</div>
				</div>		



				<script type="text/javascript">
					function CreateUserEvent(){
    					$(".contenedor_mensaje_addUser").show(); 
    					$(".mensaje_correct").fadeIn(); 
    					setTimeout(cerrarMensajes, 2000); 
					}

					function cerrarMensajes(){
						window.location.href = "<?php echo the_permalink(); ?>";
					}	

					CreateUserEvent();
				</script>				 

				
				

			<?php }
			
			// MENSAJE DE ERROR
			if ( is_wp_error( $user_id ) ) { ?>
					
				<div class="contenedor_mensaje_addUser">
					<div class="mensaje_error msj_crearUser"> 
						<div class="txt"><?php echo $user_id->get_error_message(); ?></div>
					</div>
				</div>	


					<script type="text/javascript">
						
						function ErrorCreateUserEvent(){
    						$(".contenedor_mensaje_addUser").show(); 
    						$(".mensaje_error").fadeIn();  
    						setTimeout(cerrarMensajes, 2000); 
						}

						function cerrarMensajes(){
    						window.location.href = "<?php echo the_permalink(); ?>";
						}

						ErrorCreateUserEvent();
					
					</script>				 

						


			<?php }




			} //isset($_POST) */  ?>