
<?php
include "../../../wp-load.php";

 /*
    Nombre
    User Name
    Email
    Password
 */


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


//On success
if ( ! is_wp_error( $user_id ) ) {
    echo "User created : ". $user_id;
    wp_update_user( array ('ID' => $user_id, 'role' => 'author') ) ;
}

if ( is_wp_error( $user_id ) ) {
    echo $user_id->get_error_message();
}




?>