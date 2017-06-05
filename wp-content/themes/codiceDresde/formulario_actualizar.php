<?php 

include "../../../wp-load.php";
/*---------------------------------------------------------------------------------------------*\
   AJAX INSERTAR AUDIO
\*---------------------------------------------------------------------------------------------*/
if( 'POST' == $_SERVER['REQUEST_METHOD'] && !empty( $_POST['action'] ) &&  $_POST['action'] == "update_post") {


// Do some minor form validation to make sure there is content
    if (isset ($_POST['titulo_nota'])) {
        $titulo_nota =  $_POST['titulo_nota'];
    } 

    if (isset ($_POST['contenido_nota'])) {
        $contenido_nota =  $_POST['contenido_nota'];
    } 

    if (isset ($_POST['tipo_nota'])) {
        $tipo_nota =  $_POST['tipo_nota'];
    } 

    if (isset ($_POST['checkbox_nota'])) {
        $correo_nota =  $_POST['checkbox_nota'];
    } 

     if (isset ($_POST['id_nota'])) {
        $nota_id =  $_POST['id_nota'];
    } 

    if (isset ($_POST['texto_nuevo_input_update'])) {
        $tags_txt  =  $_POST['texto_nuevo_input_update'];
    } 

    


// Update post 37
  $my_post = array(
      'ID'           => $nota_id,
      'post_title'   => $titulo_nota,
      'post_content' => $contenido_nota,
      'tags_input'    => $tags_txt,
      'post_status'   =>  $tipo_nota, 
  );

  $pid = wp_update_post($my_post);


	if ( $pid ) {
		echo "Los datos se actualizaron correctamente...";
    }

 update_post_meta( $pid , "id_correo", "$correo_nota");
   

 

    
    


} // END THE IF STATEMENT THAT STARTED THE WHOLE FORM


// Update the post into the database
  //wp_update_post( $my_post );

  do_action('wp_update_post', 'wp_update_post');



?>