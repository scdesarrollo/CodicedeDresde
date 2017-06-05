<?php 
/* Template Name: Crear Usuario */ 

function wp_create_user($nombre_reg, $password_reg, $email_reg = '') {
    $user_login = esc_sql( $nombre_reg );
    $user_email = esc_sql( $email_reg    );
    $user_pass = $password_reg;

    $userdata = compact('user_login', 'user_email', 'user_pass');
    return wp_insert_user($userdata);
}

?>