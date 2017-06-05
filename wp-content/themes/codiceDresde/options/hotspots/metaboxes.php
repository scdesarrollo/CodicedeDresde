<?php

 /*------------------------------------*\
     SINGLE FUNCTIONS TO VIDEOCOLUMNISTAS
  \*------------------------------------*/

  /*Guardar URL del video en post videocolumnistas */


  add_action( 'add_meta_boxes', 'single_pst_hotspots' );
  function single_pst_hotspots( $post ) {
    add_meta_box( 
    'em-img-meta', // atributo ID
    '<h2>Datos para los hotspots normales</h2>', // Título
    'datos_single_hotspots', // Función que muestra el HTML que aparecerá en la pantalla
    'hotspots', // Tipo de entrada. Puede ser 'post', 'page', 'link', o 'custom_post_type'
    'normal', // Parte de la pantalla donde aparecerá. Puede ser 'normal', 'advanced', o 'side'
    'default' // Prioridad u orden en el que aparecerá. Puede ser 'high', 'core', 'default' o 'low'
    );
  }


  function datos_single_hotspots( $post ) {
  $imagen_1 = (get_post_meta($post->ID, 'id_imagen_zoom_1', true));
  $imagen_2 = (get_post_meta($post->ID, 'id_imagen_zoom_2', true));


  $lamina = (get_post_meta($post->ID, 'id_lamina', true));
  $tematica = (get_post_meta($post->ID, 'id_tematica', true));
  $escriba = (get_post_meta($post->ID, 'id_escriba', true));
  $seccion = (get_post_meta($post->ID, 'id_seccion', true));

  $notas = (get_post_meta($post->ID, 'id_notas', true));

  $posicion_back = (get_post_meta($post->ID, 'id_posicion', true));

  $nombre_hp = (get_post_meta($post->ID, 'id_nombre_hp', true));

 ?>

<b><span style="color:#40403C">Nombre del hotspots</span></b> <br><br>
<input type="text" name="id_nombre_hp" id="id_nombre_hp" value="<?php echo $nombre_hp; ?>" style="width: 600px;" /><br><br>


<h3>Imagenes para el Zoom: </h3>
<b><span style="color:#40403C">Nombre de imagen Zoom 1:</span></b> <br><br>
<input type="text" name="id_imagen_zoom_1" id="id_imagen_zoom_1" value="<?php echo $imagen_1; ?>" style="width: 600px;" /><br><br>

 
 
<hr>
 <h3>Datos del hotspots: </h3><br><br>

 <b><span style="color:#40403C">Temática:</span></b> <br>
<input type="text" name="id_tematica" id="id_tematica" value="<?php echo $tematica ?>" style="width: 600px;" /><br><br>


 <b><span style="color:#40403C">Lamina:</span></b> <br>
<input type="text" name="id_lamina" id="id_lamina" value="<?php echo $lamina ?>" style="width: 600px;" /><br><br>


 <b><span style="color:#40403C">Escriba:</span></b> <br>
<input type="text" name="id_escriba" id="id_escriba" value="<?php echo $escriba ?>" style="width: 600px;" /><br><br>

 <b><span style="color:#40403C">Seccion:</span></b> <br>
<input type="text" name="id_seccion" id="id_seccion" value="<?php echo $seccion  ?>" style="width: 600px;" /><br><br>


 <b><span style="color:#40403C">Notas</span></b> <br>
<input type="text" name="id_notas" id="id_notas" value="<?php echo $notas  ?>" style="width: 600px;" /><br>


 <h3>Posición Back: </h3><br><br>

 <b><span style="color:#40403C">Posición</span></b> <br>
<input type="text" name="id_posicion" id="id_posicion" value="<?php echo $posicion_back;  ?>" style="width: 600px;" /><br><br>


<?php }


  add_action('save_post', 'imagen_zoom_1');
  function imagen_zoom_1() {
  global $wpdb, $post;
  if (!$post_id) $post_id = $_POST['post_ID'];
  $var_1 = $_POST['id_imagen_zoom_1'];
  update_post_meta($post_id, 'id_imagen_zoom_1', $var_1);
  }

  add_action('save_post', 'imagen_zoom_2');
  function imagen_zoom_2() {
  global $wpdb, $post;
  if (!$post_id) $post_id = $_POST['post_ID'];
  $var_1 = $_POST['id_imagen_zoom_2'];
  update_post_meta($post_id, 'id_imagen_zoom_2', $var_1);
  }  


  add_action('save_post', 'lamina_h');
  function lamina_h() {
  global $wpdb, $post;
  if (!$post_id) $post_id = $_POST['post_ID'];
  $var_1 = $_POST['id_lamina'];
  update_post_meta($post_id, 'id_lamina', $var_1);
  }  


  add_action('save_post', 'Escriba_h');
  function Escriba_h() {
  global $wpdb, $post;
  if (!$post_id) $post_id = $_POST['post_ID'];
  $var_1 = $_POST['id_escriba'];
  update_post_meta($post_id, 'id_escriba', $var_1);
  }  


  add_action('save_post', 'seccion_h');
  function seccion_h() {
  global $wpdb, $post;
  if (!$post_id) $post_id = $_POST['post_ID'];
  $var_1 = $_POST['id_seccion'];
  update_post_meta($post_id, 'id_seccion', $var_1);
  }  

  add_action('save_post', 'notas_h');
  function notas_h() {
  global $wpdb, $post;
  if (!$post_id) $post_id = $_POST['post_ID'];
  $var_1 = $_POST['id_notas'];
  update_post_meta($post_id, 'id_notas', $var_1);
  }  

    add_action('save_post', 'tematica_h');
  function tematica_h() {
  global $wpdb, $post;
  if (!$post_id) $post_id = $_POST['post_ID'];
  $var_1 = $_POST['id_tematica'];
  update_post_meta($post_id, 'id_tematica', $var_1);
  }  

  add_action('save_post', 'posicion_h');
  function posicion_h() {
  global $wpdb, $post;
  if (!$post_id) $post_id = $_POST['post_ID'];
  $var_1 = $_POST['id_posicion'];
  update_post_meta($post_id, 'id_posicion', $var_1);
  }  

  add_action('save_post', 'nombre_hp_funct');
  function nombre_hp_funct() {
  global $wpdb, $post;
  if (!$post_id) $post_id = $_POST['post_ID'];
  $var_1 = $_POST['id_nombre_hp'];
  update_post_meta($post_id, 'id_nombre_hp', $var_1);
  }  


 


