<?php 

  
add_action('admin_init', 'hhs_add_meta_boxes_2', 1);
function hhs_add_meta_boxes_2() {
  add_meta_box( 'repeatable-fields_2', 'Campos para los hotspots inside', 'hhs_repeatable_meta_box_display_2', 'hotspots', 'normal', 'default');
}


function hhs_repeatable_meta_box_display_2() {
  global $post;
  $repeatable_fields_2 = get_post_meta($post->ID, 'repeatable_fields_2', true);
  wp_nonce_field( 'hhs_repeatable_meta_box_nonce_2', 'hhs_repeatable_meta_box_nonce_2' );
  ?>
  <script type="text/javascript">
  jQuery(document).ready(function( $ ){
    $( '#add-row_2' ).on('click', function() {
      var row_2 = $( '.empty-row_2.screen-reader-text_2' ).clone(true);
      row_2.removeClass( 'empty-row_2 screen-reader-text_2' );
      row_2.insertBefore( '#repeatable-fieldset-one_2 tbody>tr:last' );
      return false;
    });
    
    $( '.remove-row_2' ).on('click', function() {
      $(this).parents('tr').remove();
      return false;
    });
  });
  </script>
  
  <table id="repeatable-fieldset-one_2" width="100%">
  <thead>
    <tr>
      <th width="10%">texto_maya</th>
      <th width="10%">Texto Español</th>
      <th width="10%">Imagen HP</th>
      <th width="10%">Coordenada X</th>
      <th width="10%">Coordenada Y</th>
      <th width="8%"></th>
    </tr>
  </thead>
  <tbody>
  <?php
  
  if ( $repeatable_fields_2 ) :
  
  foreach ( $repeatable_fields_2 as $field_2 ) {
  ?>
  <tr>
    <td>
    <input type="text" class="widefat" name="texto_maya[]" value="<?php if($field_2['texto_maya'] != '') echo esc_attr( $field_2['texto_maya'] ); ?>" /></td>
    
    <td>
    <input type="text" class="widefat" name="texto_espanol[]" value="<?php if($field_2['texto_espanol'] != '') echo esc_attr( $field_2['texto_espanol'] ); ?>" />
    </td>
    
    <td>
    <input type="text" class="widefat" name="img_hp[]" value="<?php if($field_2['img_hp'] != '') echo esc_attr( $field_2['img_hp'] ); ?>" />
    </td>

    <td>
      <input type="text" class="widefat" name="coordenada_x[]" value="<?php if ($field_2['coordenada_x'] != '') echo esc_attr( $field_2['coordenada_x'] ); ?>" />
    </td>

    <td>
    <input type="text" class="widefat" name="coordenada_y[]" value="<?php if ($field_2['coordenada_y'] != '') echo esc_attr( $field_2['coordenada_y'] ); ?>" />
    </td>

  
    <td><a class="button remove-row_2" href="#">Quitar</a></td>
  </tr>
  <?php
  }
  else :
  // show a blank one
  ?>
  <tr>
    <td><input type="text" class="widefat" name="texto_maya[]"/></td>
    <td><input type="text" class="widefat" name="texto_espanol[]"/></td>
    <td><input type="text" class="widefat" name="img_hp[]"/></td>
    <td><input type="text" class="widefat" name="coordenada_x[]"/></td>
    <td><input type="text" class="widefat" name="coordenada_y[]"/></td>
 
  
    <td><a class="button remove-row_2" href="#">Quitar</a></td>
  </tr>
  <?php endif; ?>
  
  <!-- empty hidden one for jQuery -->
  <tr class="empty-row_2 screen-reader-text_2">
    <td><input type="text" class="widefat" name="texto_maya[]"/></td>
    <td><input type="text" class="widefat" name="texto_espanol[]" /></td>
    <td><input type="text" class="widefat" name="img_hp[]"/></td>
    <td><input type="text" class="widefat" name="coordenada_x[]"/></td>
    <td><input type="text" class="widefat" name="coordenada_y[]"/></td>
    <td><a class="button remove-row_2" href="#">Quitar</a></td>
  </tr>
  </tbody>
  </table>
  
  <p><a id="add-row_2" class="button" href="#">Agregar</a></p>
  <?php
}

add_action('save_post', 'hhs_repeatable_meta_box_save_2');



function hhs_repeatable_meta_box_save_2($post_id) {
  
  if ( ! isset( $_POST['hhs_repeatable_meta_box_nonce_2'] ) ||
  ! wp_verify_nonce( $_POST['hhs_repeatable_meta_box_nonce_2'], 'hhs_repeatable_meta_box_nonce_2' ) )
    return;
  
  if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE)
    return;
  
  if (!current_user_can('edit_post', $post_id))
    return;
  
  $old_2 = get_post_meta($post_id, 'repeatable_fields_2', true);
  $new_2 = array();

  
  $texto_maya = $_POST['texto_maya'];
  $texto_espanol = $_POST['texto_espanol'];
  $img_hp = $_POST['img_hp'];
  $coordenada_x = $_POST['coordenada_x'];
  $coordenada_y = $_POST['coordenada_y'];
  $count_2 = count( $texto_espanol );
  
  for ( $i_2 = 0; $i_2 < $count_2; $i_2++ ) {
    
      
    if ( $texto_espanol[$i_2] != '' ) :
       $new_2[$i_2]['texto_espanol'] = $texto_espanol[$i_2];

        if ( $texto_maya[$i_2] != '' )
          $new_2[$i_2]['texto_maya'] = $texto_maya[$i_2];
        else
           $new_2[$i_2]['texto_maya'] = '';

        if ( $img_hp[$i_2] != '' ) 
           $new_2[$i_2]['img_hp'] = $img_hp[$i_2];
        else
          $new_2[$i_2]['img_hp'] = '';
    
    
        if ( $coordenada_x[$i_2] != '' )
          $new_2[$i_2]['coordenada_x'] = $coordenada_x[$i_2] ;
        else
          $new_2[$i_2]['coordenada_x'] = '';
          

        if ( $coordenada_y[$i_2] != '' )
          $new_2[$i_2]['coordenada_y'] = $coordenada_y[$i_2] ;
        else
          $new_2[$i_2]['coordenada_y'] = '';
    
    endif;
  
  }


  if ( !empty( $new_2 ) && $new_2 != $old_2 )
    update_post_meta( $post_id, 'repeatable_fields_2', $new_2 );
    
    elseif ( empty($new_2) && $old_2 )
    delete_post_meta( $post_id, 'repeatable_fields_2', $old_2 );
}

