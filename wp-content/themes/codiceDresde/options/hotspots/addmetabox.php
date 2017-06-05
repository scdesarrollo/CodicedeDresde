<?php 
add_action('admin_init', 'hhs_add_meta_boxes', 1);
function hhs_add_meta_boxes() {
  add_meta_box( 'repeatable-fields', 'Campos para los hotspots con galeria', 'hhs_repeatable_meta_box_display', 'hotspots', 'normal', 'default');
}


function hhs_repeatable_meta_box_display() {
  global $post;
  $repeatable_fields = get_post_meta($post->ID, 'repeatable_fields', true);
  wp_nonce_field( 'hhs_repeatable_meta_box_nonce', 'hhs_repeatable_meta_box_nonce' );
  ?>
  <script type="text/javascript">
  jQuery(document).ready(function( $ ){
    $( '#add-row' ).on('click', function() {
      var row = $( '.empty-row.screen-reader-text' ).clone(true);
      row.removeClass( 'empty-row screen-reader-text' );
      row.insertBefore( '#repeatable-fieldset-one tbody>tr:last' );
      return false;
    });
    
    $( '.remove-row' ).on('click', function() {
      $(this).parents('tr').remove();
      return false;
    });
  });
  </script>
  
  <table id="repeatable-fieldset-one" width="100%">
  <thead>
    <tr>
      <th width="1%">Lamina</th>
      <th width="1%">Escriba</th>
      <th width="5%">Notas</th>
      <th width="5%">Temática</th>
      <th width="5%">Sección</th>
      <th width="5%">txt augurios</th>
      <th width="5%">img augurios</th>
      <th width="3%">Imagen</th>
      <th width="8%"></th>
    </tr>
  </thead>
  <tbody>
  <?php
  
  if ( $repeatable_fields ) :

  foreach ( $repeatable_fields as $field ) {
  ?>
  <tr>
    <td><input type="text" class="widefat" name="lamina[]" value="<?php if($field['lamina'] != '') echo $field['lamina'];  ?>" /></td>
    <td><input type="text" class="widefat" name="escriba[]" value="<?php if($field['escriba'] != '') echo $field['escriba'];  ?>" /></td>
    <td><input type="text" class="widefat" name="notas[]" value="<?php if($field['notas'] != '') echo $field['notas'];  ?>" /></td>
    <td><input type="text" class="widefat" name="tematica[]" value="<?php if($field['tematica'] != '') echo $field['tematica'];  ?>" /></td>
    <td><input type="text" class="widefat" name="seccion[]" value="<?php if($field['seccion'] != '') echo $field['seccion'];  ?>" /></td>
    <td><input type="text" class="widefat" name="texto_au[]" value="<?php if($field['texto_au'] != '') echo $field['texto_au'];  ?>" /></td>
    <td><input type="text" class="widefat" name="img_au[]" value="<?php if($field['img_au'] != '') echo $field['img_au'];  ?>" /></td>
    <td><input type="text" class="widefat" name="imagen_1[]" value="<?php if ($field['imagen_1'] != '') echo $field['imagen_1']; ?>" /></td>
  
    <td><a class="button remove-row" href="#">Quitar</a></td>
  </tr>
  <?php
  }
  else :
  // show a blank one
  ?>
  <tr>
    <td><input type="text" class="widefat" name="lamina[]" /></td>
    <td><input type="text" class="widefat" name="escriba[]" /></td>
    <td><input type="text" class="widefat" name="notas[]" /></td>
    <td><input type="text" class="widefat" name="tematica[]" /></td>
    <td><input type="text" class="widefat" name="seccion[]" /></td>
    <td><input type="text" class="widefat" name="texto_au[]" /></td>
    <td><input type="text" class="widefat" name="img_au[]" /></td>
    <td><input type="text" class="widefat" name="imagen_1[]"/></td>
  
    <td><a class="button remove-row" href="#">Quitar</a></td>
  </tr>
  <?php endif; ?>
  
  <!-- empty hidden one for jQuery -->
  <tr class="empty-row screen-reader-text">
    <td><input type="text" class="widefat" name="lamina[]" /></td>
    <td><input type="text" class="widefat" name="escriba[]" /></td>
    <td><input type="text" class="widefat" name="notas[]" /></td>
    <td><input type="text" class="widefat" name="tematica[]" /></td>
    <td><input type="text" class="widefat" name="seccion[]" /></td>
    <td><input type="text" class="widefat" name="texto_au[]" /></td>
    <td><input type="text" class="widefat" name="img_au[]" /></td>
    <td><input type="text" class="widefat" name="imagen_1[]"/></td>
    <td><a class="button remove-row" href="#">Quitar</a></td>
  </tr>
  </tbody>
  </table>
  
  <p><a id="add-row" class="button" href="#">Agregar</a></p>
  <?php
}

add_action('save_post', 'hhs_repeatable_meta_box_save');



function hhs_repeatable_meta_box_save($post_id) {
  
  if ( ! isset( $_POST['hhs_repeatable_meta_box_nonce'] ) ||
  ! wp_verify_nonce( $_POST['hhs_repeatable_meta_box_nonce'], 'hhs_repeatable_meta_box_nonce' ) )
    return;
  
  if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE)
    return;
  
  if (!current_user_can('edit_post', $post_id))
    return;
  
  $old = get_post_meta($post_id, 'repeatable_fields', true);
  $new = array();

  $notas = $_POST['notas'];
  $escriba = $_POST['escriba'];
  $lamina = $_POST['lamina'];
  $tematica = $_POST['tematica'];
  $seccion = $_POST['seccion'];
  $texto_au = $_POST['texto_au'];
  $img_au = $_POST['img_au'];
  $imagen_1 = $_POST['imagen_1'];
  
  $count = count( $lamina);

  for ( $i = 0; $i < $count; $i++ ) {
    
    if ( $lamina[$i] != '' ):
         $new[$i]['lamina'] = $lamina[$i];


        if ( $notas[$i] != '' ) 
          $new[$i]['notas'] = $notas[$i] ;
        else
          $notas[$i]['notas'] = '';


        if ( $imagen_1[$i]  != '' ) 
          $new[$i]['imagen_1'] = $imagen_1[$i];
        else
          $imagen_1[$i] ['imagen_1'] = '';


        if ( $escriba[$i]  != '' ) 
          $new[$i]['escriba'] = $escriba[$i];
        else
          $escriba[$i]['escriba'] = '';


        if ( $tematica[$i]  != '' ) 
          $new[$i]['tematica'] = $tematica[$i]  ;
        else
          $tematica[$i]['tematica'] = '';

        if ( $texto_au[$i]  != '' ) 
          $new[$i]['texto_au'] = $texto_au[$i]  ;
        else
          $texto_au[$i]['texto_au'] = '';

        

        if ( $seccion[$i]  != '' ) 
          $new[$i]['seccion'] = $seccion[$i];
        else
          $seccion[$i]['seccion'] = '';


    endif;


       if ( $img_au[$i]  != '' ):
          $new[$i]['img_au'] = $img_au[$i];
        endif;

  }


  if ( !empty( $new ) && $new != $old )
    update_post_meta( $post_id, 'repeatable_fields', $new );
  elseif ( empty($new) && $old )
    delete_post_meta( $post_id, 'repeatable_fields', $old );
}

