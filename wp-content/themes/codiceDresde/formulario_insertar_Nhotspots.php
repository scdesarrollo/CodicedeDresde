<?php 

include "../../../wp-load.php";
/*---------------------------------------------------------------------------------------------*\
   AJAX INSERTAR AUDIO
\*---------------------------------------------------------------------------------------------*/


if( 'POST' == $_SERVER['REQUEST_METHOD'] && !empty( $_POST['action'] ) &&  $_POST['action'] == "new_post") {
 
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

    if (isset ($_POST['texto_nuevo_input'])) {
        $tags_txt  =  $_POST['texto_nuevo_input'];
    } 

     if (isset ($_POST['id_usuario'])) {
        $id_usuario  =  $_POST['id_usuario'];
    } 

    if (isset ($_POST['id_nota'])) {
        $id_nota  =  $_POST['id_nota'];
    } 

    if (isset ($_POST['id_ubicacion_nota'])) {
        $id_ubicacion  =  $_POST['id_ubicacion_nota'];
    } 


    
    //$tags = $_POST['post_tags'];


 
    // ADD THE FORM INPUT TO $new_post ARRAY
     $category = get_category_by_slug( "Notas" );
    $new_post = array(
    'post_title'    =>   $titulo_nota,
    'post_status'   =>   $tipo_nota,           // Choose: publish, preview, future, draft, etc.
    'post_type' =>   'notas',  //'post',page' or use a custom post type if you want to
    'tags_input' => $id_nota . "," . $tags_txt, 
    'post_category' =>  array( $category->term_id ),
    'post_content' => $contenido_nota
    );
 
    //SAVE THE POST
    $pid = wp_insert_post($new_post);

    
    require_once(ABSPATH . "wp-admin" . '/includes/image.php');
    require_once(ABSPATH . "wp-admin" . '/includes/file.php');
    require_once(ABSPATH . "wp-admin" . '/includes/media.php');
    
    if ($_FILES['thumbnail']['tmp_name']!="") {
        foreach ($_FILES as $file => $array) {
            if ($_FILES[$file]['error'] !== UPLOAD_ERR_OK) {
                return "upload error : " . $_FILES[$file]['error'];
            }
            $attach_id = media_handle_upload( $file, $new_post );
        }   
    }
     
    if ($attach_id > 0){
        //and if you want to set that image as Post  then use:
        update_post_meta($pid,'_thumbnail_id',$attach_id);

    } 

 
    add_post_meta( $pid , "id_correo", "$correo_nota");
    add_post_meta( $pid , "id_usuario", "$id_usuario");
    add_post_meta( $pid , "id_IDhotspots", "$id_nota");
    add_post_meta( $pid , "id_ubicacion", "$id_ubicacion");

    /*add_post_meta( $pid , "id_nombre", "$nombre");
    add_post_meta( $pid , "id_ciudad", "$ciudad");
    add_post_meta( $pid , "id_correo", "$correo");
    add_post_meta( $pid , "id_telefono", "$telefono");
    add_post_meta( $pid , "id_descripcion", "$descripcion");*/

  if ( $pid ) {
    $correo_nota = NULL; 
    $id_usuario = NULL;
    $id_nota = NULL;
    $id_ubicacion = NULL;
    //wp_redirect( home_url() );
        /*$nombre = NULL;
        $correo = NULL;
        $ciudad = NULL;
        $tema = NULL;
        $titulo = NULL;
        $descripcion = NULL;*/


     ?>
    


    <?php
    echo "Los datos se enviaron correctamente...";
    exit;
    }
    
     
 
} // END THE IF STATEMENT THAT STARTED THE WHOLE FORM


 
//POST THE POST YO
do_action('wp_insert_post', 'wp_insert_post');

?>