<?php

 /*------------------------------------*\
     SINGLE FUNCTIONS TO VIDEOCOLUMNISTAS
  \*------------------------------------*/

  /*Guardar URL del video en post videocolumnistas */


  add_action( 'add_meta_boxes', 'single_pst_notas' );
  function single_pst_notas( $post ) {
  add_meta_box( 
  'em-img-meta', // atributo ID
  '<h2>Datos del Usuario</h2>', // Título
  'datos_single_notas', // Función que muestra el HTML que aparecerá en la pantalla
  'notas', // Tipo de entrada. Puede ser 'post', 'page', 'link', o 'custom_post_type'
  'normal', // Parte de la pantalla donde aparecerá. Puede ser 'normal', 'advanced', o 'side'
  'default' // Prioridad u orden en el que aparecerá. Puede ser 'high', 'core', 'default' o 'low'
  );
  }



  function datos_single_notas( $post ) {
  //   <!-- --------------Crear la caja de texto para URL del video-------------------------------  -->

  $value_correo = (get_post_meta($post->ID, 'id_correo', true));
  $value_id_usuario = (get_post_meta($post->ID, 'id_usuario', true));
  $value_id_hotspots = (get_post_meta($post->ID, 'id_IDhotspots', true));

  $value_tipoNota = (get_post_meta($post->ID, 'id_tipoNota', true));
 
  $value_ubicacion = (get_post_meta($post->ID, 'id_ubicacion', true));
  


  ?>


<b><span style="color:#EC3839">Correo:</span></b> <br><br>

<input type="text" name="id_correo" id="id_correo" value="<?php echo  $value_correo; ?>" style="width: 600px;" /><br><br>


<b><span style="color:#EC3839">ID Usuario:</span></b> <br><br>

<input type="text" name="id_usuario" id="id_usuario" value="<?php echo  $value_id_usuario; ?>" style="width: 600px;" /><br><br>


 
<b><span style="color:#EC3839">ID Hotspots:</span></b> <br><br>

<input type="text" name="id_IDhotspots" id="id_IDhotspots" value="<?php echo  $value_id_hotspots; ?>" style="width: 600px;" /><br><br>

<b><span style="color:#EC3839">Tipo de Nota:</span></b> <br><br>

<input type="text" name="id_tipoNota" id="id_tipoNota" value="<?php echo $value_tipoNota; ?>" style="width: 600px;" /><br><br>


<b><span style="color:#EC3839">Ubicación:</span></b> <br><br>

<input type="text" name="id_ubicacion" id="id_ubicacion" value="<?php echo $value_ubicacion; ?>" style="width: 600px;" />

 
 



<?php }


  add_action('save_post', 'post_notas_correo');
  function post_notas_correo() {
  global $wpdb, $post;
  if (!$post_id) $post_id = $_POST['post_ID'];
  $var_1= $_POST['id_correo'];
  update_post_meta($post_id, 'id_correo', $var_1);
  }

  add_action('save_post', 'post_notas_idUsuario');
  function post_notas_idUsuario() {
  global $wpdb, $post;
  if (!$post_id) $post_id = $_POST['post_ID'];
  $var_1= $_POST['id_usuario'];
  update_post_meta($post_id, 'id_usuario', $var_1);
  }

  add_action('save_post', 'post_notas_idHotspots');
  function post_notas_idHotspots() {
  global $wpdb, $post;
  if (!$post_id) $post_id = $_POST['post_ID'];
  $var_1= $_POST['id_IDhotspots'];
  update_post_meta($post_id, 'id_IDhotspots', $var_1);
  }


  add_action('save_post', 'post_tipo_nota');
  function post_tipo_nota() {
  global $wpdb, $post;
  if (!$post_id) $post_id = $_POST['post_ID'];
  $var_1= $_POST['id_tipoNota'];
  update_post_meta($post_id, 'id_tipoNota', $var_1);
  }

  add_action('save_post', 'post_ubicacion');
  function post_ubicacion() {
  global $wpdb, $post;
  if (!$post_id) $post_id = $_POST['post_ID'];
  $var_1= $_POST['id_ubicacion'];
  update_post_meta($post_id, 'id_ubicacion', $var_1);
  }
