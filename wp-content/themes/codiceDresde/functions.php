<?php
/*
 *  Author: Todd Motto | @toddmotto
 *  URL: html5blank.com | @html5blank
 *  Custom functions, support, custom post types and more.
 */

/*------------------------------------*\
	External Modules/Files
\*------------------------------------*/

// Load any external files you have here



 if ( is_user_logged_in() ) {
   //add_filter( 'show_admin_bar', '__return_true' , 1000 );
}



setcookie(TEST_COOKIE, 'WP Cookie check', 0, COOKIEPATH, COOKIE_DOMAIN);
if ( SITECOOKIEPATH != COOKIEPATH ) setcookie(TEST_COOKIE, 'WP Cookie check', 0, SITECOOKIEPATH, COOKIE_DOMAIN);

/*------------------------------------*\
  SHORTCODE LINK 
\*------------------------------------*/
//Shortodes en wid<span class="searchword">get</span>s de texto
add_filter('widget_text', 'do_shortcode');

function link_home( $attr ) {
    ob_start();
    get_template_part( 'contenidos/shortcodes/Link_Home' );
    return ob_get_clean();
}
add_shortcode( 'link_home_short', 'link_home' );



// disable access to wp-admin for non-administrators
 


add_action( 'admin_init', 'allow_admin_area_to_admins_only');
function allow_admin_area_to_admins_only() {

      if( defined('DOING_AJAX') && DOING_AJAX ) {
            //Allow ajax calls
            return;
      }

      $user = wp_get_current_user();

      if( empty( $user ) || !in_array( "administrator", (array) $user->roles ) ) {
           //Redirect to main page if no user or if the user has no "administrator" role assigned
           wp_redirect( get_site_url( ) );
           //exit();
      }

 }




 /*add_action( 'wp_login_failed', 'my_front_end_login_fail' );  // hook failed login
function my_front_end_login_fail( $username ) {
   $referrer = $_SERVER['HTTP_REFERER'];  // where did the post submission come from?
   // if there's a valid referrer, and it's not the default log-in screen
   if ( !empty($referrer) && !strstr($referrer,'wp-login') && !strstr($referrer,'wp-admin') ) {
      wp_redirect( $referrer . '?login=failed');  // let's append some information (login=failed) to the URL for the theme to use ?>


 
      exit;
   }
} */



//add_action('init','custom_login');

 

// add the ajax fetch js
add_action( 'wp_footer', 'ajax_fetch' );
function ajax_fetch() {
?>
<script type="text/javascript">
function fetch(){

    jQuery.ajax({
        url: '<?php echo admin_url('admin-ajax.php'); ?>',
        type: 'post',
        data: { action: 'data_fetch', keyword: jQuery('#keyword').val() },
        success: function(data) {
            jQuery('#datafetch').html( data );
        }
    });

    var value = $.trim($("#keyword").val());
    if(value.length > 0){
         $(".closei").show();
         $(".busqueda_resultados").show();
    } else{
         $(".closei").hide();
         $(".busqueda_resultados").hide();
    }

    $(".closei").click(function(){
        $("#keyword").val('');
         $(".closei").hide();
         $(".busqueda_resultados").hide();
    });

}
</script>

<?php
}

// the ajax function
add_action('wp_ajax_data_fetch' , 'data_fetch');
add_action('wp_ajax_nopriv_data_fetch','data_fetch');
function data_fetch(){
    $notas_cat  = get_cat_ID('Notas');
    $the_query = new WP_Query( array( 'posts_per_page' => -1, 'cat'=>"-$notas_cat", 's' => esc_attr( $_POST['keyword'] ) ) );
    if( $the_query->have_posts() ) :
        while( $the_query->have_posts() ): $the_query->the_post(); ?>

            <div class="BloqueSearch">

                <div class="titulo">
                    <a href="<?php echo esc_url( post_permalink() ); ?>"><?php the_title();?></a> 
                </div><!-- Titulo -->

                <div class="texto">
                    <a href="<?php echo esc_url( post_permalink() ); ?>">
                        <?php echo $excerpt_notas = NotasExtracto($post_id);  ?>
                    </a>
                </div>

            </div><!-- Bloque Search -->

        <?php endwhile;
        wp_reset_postdata();  

        else: ?>
        <div class="BloqueSearch2">
            <div class="texto">
                No se encontraron resultados
            </div>
        </div>
    <?php  endif;

    die();
}




// AJAX BUSQUEDA PARA NOTAS ==========================================================

// add the ajax fetch js
add_action( 'wp_footer', 'ajax_fetch2' );
function ajax_fetch2() {
?>
<script type="text/javascript">
function fetch2(){

    jQuery.ajax({
        url: '<?php echo admin_url('admin-ajax.php'); ?>',
        type: 'post',
        data: { action: 'data_fetch2', keyword2: jQuery('#keyword2').val() },
        success: function(data) {
            jQuery('#datafetch2').html( data );
        }
    });

    var value_n = $.trim($("#keyword2").val());
    if(value_n.length > 0){
         $(".closei_n").show();
         $(".Notas_privadas").hide();
         $(".Notas_publicas").hide();
         $("#datafetch2").show();
         //$(".Bloqueo").show();


         
    } else{
         $(".closei_n").hide();
         $("#datafetch2").hide();
         $(".Notas_privadas").fadeIn();
         $(".bnt_notas_publicas").removeClass("Notas_select");
         $(".bnt_notas_privadas").addClass("Notas_select");
         //$(".Bloqueo").hide();

    }

    $(".closei_n").click(function(){
        $("#keyword2").val('');
        $(".closei_n").hide();
        $("#datafetch2").hide();
        
        $(".Notas_privadas").fadeIn();
        $(".bnt_notas_publicas").removeClass("Notas_select");
        $(".bnt_notas_privadas").addClass("Notas_select");
        //$(".Bloqueo").hide();

    });

    $(".bnt_notas_publicas").click(function(){
        $("#keyword2").val('');
        $(".closei_n").hide();
        $("#datafetch2").hide();
        
        $(".Notas_publicas").fadeIn();
        $(".bnt_notas_publicas"). addClass("Notas_select");
        $(".bnt_notas_privadas").removeClass("Notas_select");
        //$(".Bloqueo").hide();

    });

    $(".bnt_notas_privadas").click(function(){
        $("#keyword2").val('');
        $(".closei_n").hide();
        $("#datafetch2").hide();
        
        $(".Notas_privadas").fadeIn();
        $(".bnt_notas_publicas").removeClass("Notas_select");
        $(".bnt_notas_privadas").addClass("Notas_select");
        //$(".Bloqueo").hide();

    });

}
</script>

<?php
}

// the ajax function
add_action('wp_ajax_data_fetch2' , 'data_fetch2');
add_action('wp_ajax_nopriv_data_fetch2','data_fetch2');
function data_fetch2(){
    //$notas_cat  = get_cat_ID('Notas');
    $the_query = new WP_Query( array( 'posts_per_page' => -1, 's' => esc_attr( $_POST['keyword2'] ), 'post_type' => 'notas'  )   );
    if( $the_query->have_posts() ) :
        while( $the_query->have_posts() ): $the_query->the_post(); ?>

        
                <?php 
                //  SÍ SON PRIVADAS 

                if ( get_post_status ( $ID ) == 'private' ) { ?>

               
                <div class="contendor_notas_privadas contenedor privada-<?php echo the_ID(); ?>">
                    
                    <div class="BloqueIcono">
                        <div class="icono"></div>
                    </div>
         
         
                    <div class="Bloque_txt">
                        <div class="titulo"><?php the_title(); ?></div> 
                        <div class="descripcion">
                           <?php echo $NotasExtracto = NotasExtracto ($post_id);  ?>
                        </div>  
                    </div>

                </div><!--Contendor -->
                

                <?php }// if privadas 

                // SÍ SON PUBLICAS
                else { ?>
                   
                    
                   <div class="contendor_notas_publicas contenedor publica-<?php echo the_ID(); ?>">
                     <div class="BloqueIcono">
                         <div class="icono"></div>
                    </div>
         
         
                     <div class="Bloque_txt">
                        <div class="titulo"><?php the_title(); ?></div> 
                        <div class="descripcion">
                           <?php echo $NotasExtracto = NotasExtracto ($post_id);  ?>
                        </div>  
                     </div>

                </div><!--Contendor -->


                <?php } // if publicas  ?>

                
                


        <?php endwhile; ?>


        


        <?php wp_reset_postdata();  

        else: ?>
        <div class="BloqueSearch2">
            <div class="texto">
                No se encontraron resultados
            </div>
        </div>
    <?php  endif; ?>

<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/notas/show_info_publicas.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/notas/show_info_privadas_ajax.js"></script>
          

  
<?php 
    die();
}

// AJAX BUSQUEDA PARA NOTAS HOTSPOTS ==========================================================

// add the ajax fetch js
add_action( 'wp_footer', 'ajax_fetch3' );
function ajax_fetch3() {
?>
<script type="text/javascript">
function fetch3(){

  $nota_id= $(".cuadro_notas").attr('class').split(' ')[1]; 

    jQuery.ajax({
        url: '<?php echo admin_url('admin-ajax.php'); ?>',
        type: 'post',
        data: { action: 'data_fetch3', keyword: jQuery('#keyword3').val(), keyword2: $nota_id  },
        success: function(data) {
            jQuery('#datafetch3').html( data );

        }
    });

    var value3 = $.trim($("#keyword3").val());
    if(value3.length > 0){
         $(".closei_h").show();
        $(".listado_notas_h").show();
         $(".nota_contendor_h").hide();
         $(".BuscarEnNotas").fadeIn();

    } else{
         $(".closei_h").hide();
         $(".listado_notas_h").hide();
         $(".nota_contendor_h").show();
         $(".BuscarEnNotas").fadeOut();
    }

    $(".closei_h").click(function(){
        $("#keyword3").val('');
         $(".closei_h").hide();
         $(".listado_notas_h").hide();
         $(".nota_contendor_h").show();
         $(".BuscarEnNotas").fadeOut();
    });



}
</script>

<?php
}


 


// the ajax function
add_action('wp_ajax_data_fetch3' , 'data_fetch3');
add_action('wp_ajax_nopriv_data_fetch3','data_fetch3');
function data_fetch3(){
    $notas_cat  = get_cat_ID('Notas');
    $get_nota_id = esc_attr( $_POST['keyword2']);
    $nota_id = "nota-".$get_nota_id;    


    $the_query = new WP_Query( array( 'posts_per_page' => -1, 'tag'=>"$nota_id", 's' => esc_attr( $_POST['keyword'] ), 'post_type' => 'notas' ) );
    if( $the_query->have_posts() ) :
        while( $the_query->have_posts() ): $the_query->the_post(); 

    ?>

            <div class="InforacionNota info-<?php echo the_ID(); ?>">
            <div class="tituloNota">

                <?php echo the_title(); ?> 
                <br>
            </div>

            <div class="EscritoPor">
                Escrito por: <span><?php the_author(); ?></span>, <span><?php the_time( 'd-m-Y g:i A' ); ?></span> 
            </div>

            <div class="TextoNota">
                    <?php  echo $excerpt_notas = NotasExtracto($post_id);  ?>


                 <span class="completo_ajax">
                <?php echo the_content(); ?>
                     

                </span>
  
            </div>

        </div><!-- INFO NOTA -->

        <?php endwhile;
        wp_reset_postdata();  

        else: ?>
        <div class="BloqueSearch2">
            <div class="texto">
                No se encontraron resultados
            </div>
        </div>
    <?php  endif; ?>

    <script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/notas_hotspots/show_btns_hotspots_ajax.js"></script>
    <script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/notas_hotspots/show_more_ajax.js"></script>
    <script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/notas_hotspots/eventos_buscarEnNotas.js"></script>



    <?php die();
}



/*------------------------------------*\
   EXCERT
\*------------------------------------*/

function  NotasExtracto ($post_id){
    $the_post = get_post($post_id); //Gets post ID
    $the_excerpt = $the_post->post_content; //Gets post_content to be used as a basis for the excerpt
    $excerpt_length = 30; //Sets excerpt length by word count
    $the_excerpt = strip_tags(strip_shortcodes($the_excerpt)); //Strips tags and images
    $words = explode(' ', $the_excerpt, $excerpt_length + 1);

    if(count($words) > $excerpt_length) :
        array_pop($words);
        array_push($words, '…');
        $the_excerpt = implode(' ', $words);
    endif;

    $the_excerpt = '<p class="extracto">' . $the_excerpt . '</p>';

    return $the_excerpt;
}


function spi_remove_private_protected_from_titles( $format ) {
    return '%s';
}
add_filter( 'private_title_format',   'spi_remove_private_protected_from_titles' );

/*------------------------------------*\
	Theme Support
\*------------------------------------*/

if (!isset($content_width))
{
    $content_width = 900;
}

if (function_exists('add_theme_support'))
{
    // Add Menu Support
    add_theme_support('menus');

    // Add Thumbnail Theme Support
    add_theme_support('post-thumbnails');
    add_image_size('large', 700, '', true); // Large Thumbnail
    add_image_size('medium', 250, '', true); // Medium Thumbnail
    add_image_size('small', 120, '', true); // Small Thumbnail
    add_image_size('custom-size', 700, 200, true); // Custom Thumbnail Size call using the_post_thumbnail('custom-size');

    // Add Support for Custom Backgrounds - Uncomment below if you're going to use
    /*add_theme_support('custom-background', array(
	'default-color' => 'FFF',
	'default-image' => get_template_directory_uri() . '/img/bg.jpg'
    ));*/

    // Add Support for Custom Header - Uncomment below if you're going to use
    /*add_theme_support('custom-header', array(
	'default-image'			=> get_template_directory_uri() . '/img/headers/default.jpg',
	'header-text'			=> false,
	'default-text-color'		=> '000',
	'width'				=> 1000,
	'height'			=> 198,
	'random-default'		=> false,
	'wp-head-callback'		=> $wphead_cb,
	'admin-head-callback'		=> $adminhead_cb,
	'admin-preview-callback'	=> $adminpreview_cb
    ));*/

    // Enables post and comment RSS feed links to head
    add_theme_support('automatic-feed-links');

    // Localisation Support
    load_theme_textdomain('html5blank', get_template_directory() . '/languages');
}




/*------------------------------------*\
	Functions
\*------------------------------------*/

// HTML5 Blank navigation
function html5blank_nav()
{
	wp_nav_menu(
	array(
		'theme_location'  => 'header-menu',
		'menu'            => '',
		'container'       => 'div',
		'container_class' => 'menu-{menu slug}-container',
		'container_id'    => '',
		'menu_class'      => 'menu',
		'menu_id'         => '',
		'echo'            => true,
		'fallback_cb'     => 'wp_page_menu',
		'before'          => '',
		'after'           => '',
		'link_before'     => '',
		'link_after'      => '',
		'items_wrap'      => '<ul>%3$s</ul>',
		'depth'           => 0,
		'walker'          => ''
		)
	);
}

// Load HTML5 Blank scripts (header.php)
function html5blank_header_scripts()
{
    if ($GLOBALS['pagenow'] != 'wp-login.php' && !is_admin()) {

    	wp_register_script('conditionizr', get_template_directory_uri() . '/js/lib/conditionizr-4.3.0.min.js', array(), '4.3.0'); // Conditionizr
        wp_enqueue_script('conditionizr'); // Enqueue it!

        wp_register_script('modernizr', get_template_directory_uri() . '/js/lib/modernizr-2.7.1.min.js', array(), '2.7.1'); // Modernizr
        wp_enqueue_script('modernizr'); // Enqueue it!

        wp_register_script('html5blankscripts', get_template_directory_uri() . '/js/scripts.js', array('jquery'), '1.0.0'); // Custom scripts
        wp_enqueue_script('html5blankscripts'); // Enqueue it!
    }
}

// Load HTML5 Blank conditional scripts
function html5blank_conditional_scripts()
{
    if (is_page('pagenamehere')) {
        wp_register_script('scriptname', get_template_directory_uri() . '/js/scriptname.js', array('jquery'), '1.0.0'); // Conditional script(s)
        wp_enqueue_script('scriptname'); // Enqueue it!
    }
}

// Load HTML5 Blank styles
function html5blank_styles()
{
    wp_register_style('normalize', get_template_directory_uri() . '/normalize.css', array(), '1.0', 'all');
    wp_enqueue_style('normalize'); // Enqueue it!

    wp_register_style('html5blank', get_template_directory_uri() . '/style.css', array(), '1.0', 'all');
    wp_enqueue_style('html5blank'); // Enqueue it!
}

// Register HTML5 Blank Navigation
function register_html5_menu()
{
    register_nav_menus(array( // Using array to specify more menus if needed
        'header-menu' => __('Header Menu', 'html5blank'), // Main Navigation
        'sidebar-menu' => __('Sidebar Menu', 'html5blank'), // Sidebar Navigation
        'extra-menu' => __('Extra Menu', 'html5blank') // Extra Navigation if needed (duplicate as many as you need!)
    ));
}

// Remove the <div> surrounding the dynamic navigation to cleanup markup
function my_wp_nav_menu_args($args = '')
{
    $args['container'] = false;
    return $args;
}

// Remove Injected classes, ID's and Page ID's from Navigation <li> items
function my_css_attributes_filter($var)
{
    return is_array($var) ? array() : '';
}

// Remove invalid rel attribute values in the categorylist
function remove_category_rel_from_category_list($thelist)
{
    return str_replace('rel="category tag"', 'rel="tag"', $thelist);
}

// Add page slug to body class, love this - Credit: Starkers Wordpress Theme
function add_slug_to_body_class($classes)
{
    global $post;
    if (is_home()) {
        $key = array_search('blog', $classes);
        if ($key > -1) {
            unset($classes[$key]);
        }
    } elseif (is_page()) {
        $classes[] = sanitize_html_class($post->post_name);
    } elseif (is_singular()) {
        $classes[] = sanitize_html_class($post->post_name);
    }

    return $classes;
}

// If Dynamic Sidebar Exists
if (function_exists('register_sidebar'))
{
    // Define Sidebar Widget Area 1
    register_sidebar(array(
        'name' => __('Widget Area 1', 'html5blank'),
        'description' => __('Description for this widget-area...', 'html5blank'),
        'id' => 'widget-area-1',
        'before_widget' => '<div id="%1$s" class="%2$s">',
        'after_widget' => '</div>',
        'before_title' => '<h3>',
        'after_title' => '</h3>'
    ));

    // Define Sidebar Widget Area 2
    register_sidebar(array(
        'name' => __('Widget Area 2', 'html5blank'),
        'description' => __('Description for this widget-area...', 'html5blank'),
        'id' => 'widget-area-2',
        'before_widget' => '<div id="%1$s" class="%2$s">',
        'after_widget' => '</div>',
        'before_title' => '<h3>',
        'after_title' => '</h3>'
    ));
}

// Remove wp_head() injected Recent Comment styles
function my_remove_recent_comments_style()
{
    global $wp_widget_factory;
    remove_action('wp_head', array(
        $wp_widget_factory->widgets['WP_Widget_Recent_Comments'],
        'recent_comments_style'
    ));
}

// Pagination for paged posts, Page 1, Page 2, Page 3, with Next and Previous Links, No plugin
function html5wp_pagination()
{
    global $wp_query;
    $big = 999999999;
    echo paginate_links(array(
        'base' => str_replace($big, '%#%', get_pagenum_link($big)),
        'format' => '?paged=%#%',
        'current' => max(1, get_query_var('paged')),
        'total' => $wp_query->max_num_pages
    ));
}

// Custom Excerpts
function html5wp_index($length) // Create 20 Word Callback for Index page Excerpts, call using html5wp_excerpt('html5wp_index');
{
    return 20;
}

// Create 40 Word Callback for Custom Post Excerpts, call using html5wp_excerpt('html5wp_custom_post');
function html5wp_custom_post($length)
{
    return 40;
}

// Create the Custom Excerpts callback
function html5wp_excerpt($length_callback = '', $more_callback = '')
{
    global $post;
    if (function_exists($length_callback)) {
        add_filter('excerpt_length', $length_callback);
    }
    if (function_exists($more_callback)) {
        add_filter('excerpt_more', $more_callback);
    }
    $output = get_the_excerpt();
    $output = apply_filters('wptexturize', $output);
    $output = apply_filters('convert_chars', $output);
    $output = '<p>' . $output . '</p>';
    echo $output;
}

// Custom View Article link to Post
function html5_blank_view_article($more)
{
    global $post;
    return '... <a class="view-article" href="' . get_permalink($post->ID) . '">' . __('View Article', 'html5blank') . '</a>';
}

// Remove Admin bar
function remove_admin_bar()
{
    return false;
}

// Remove 'text/css' from our enqueued stylesheet
function html5_style_remove($tag)
{
    return preg_replace('~\s+type=["\'][^"\']++["\']~', '', $tag);
}

// Remove thumbnail width and height dimensions that prevent fluid images in the_thumbnail
function remove_thumbnail_dimensions( $html )
{
    $html = preg_replace('/(width|height)=\"\d*\"\s/', "", $html);
    return $html;
}

// Custom Gravatar in Settings > Discussion
function html5blankgravatar ($avatar_defaults)
{
    $myavatar = get_template_directory_uri() . '/img/gravatar.jpg';
    $avatar_defaults[$myavatar] = "Custom Gravatar";
    return $avatar_defaults;
}

// Threaded Comments
function enable_threaded_comments()
{
    if (!is_admin()) {
        if (is_singular() AND comments_open() AND (get_option('thread_comments') == 1)) {
            wp_enqueue_script('comment-reply');
        }
    }
}

// Custom Comments Callback
function html5blankcomments($comment, $args, $depth)
{
	$GLOBALS['comment'] = $comment;
	extract($args, EXTR_SKIP);

	if ( 'div' == $args['style'] ) {
		$tag = 'div';
		$add_below = 'comment';
	} else {
		$tag = 'li';
		$add_below = 'div-comment';
	}
?>
    <!-- heads up: starting < for the html tag (li or div) in the next line: -->
    <<?php echo $tag ?> <?php comment_class(empty( $args['has_children'] ) ? '' : 'parent') ?> id="comment-<?php comment_ID() ?>">
	<?php if ( 'div' != $args['style'] ) : ?>
	<div id="div-comment-<?php comment_ID() ?>" class="comment-body">
	<?php endif; ?>
	<div class="comment-author vcard">
	<?php if ($args['avatar_size'] != 0) echo get_avatar( $comment, $args['180'] ); ?>
	<?php printf(__('<cite class="fn">%s</cite> <span class="says">says:</span>'), get_comment_author_link()) ?>
	</div>
<?php if ($comment->comment_approved == '0') : ?>
	<em class="comment-awaiting-moderation"><?php _e('Your comment is awaiting moderation.') ?></em>
	<br />
<?php endif; ?>

	<div class="comment-meta commentmetadata"><a href="<?php echo htmlspecialchars( get_comment_link( $comment->comment_ID ) ) ?>">
		<?php
			printf( __('%1$s at %2$s'), get_comment_date(),  get_comment_time()) ?></a><?php edit_comment_link(__('(Edit)'),'  ','' );
		?>
	</div>

	<?php comment_text() ?>

	<div class="reply">
	<?php comment_reply_link(array_merge( $args, array('add_below' => $add_below, 'depth' => $depth, 'max_depth' => $args['max_depth']))) ?>
	</div>
	<?php if ( 'div' != $args['style'] ) : ?>
	</div>
	<?php endif; ?>
<?php }

/*------------------------------------*\
	Actions + Filters + ShortCodes
\*------------------------------------*/

// Add Actions
add_action('init', 'html5blank_header_scripts'); // Add Custom Scripts to wp_head
add_action('wp_print_scripts', 'html5blank_conditional_scripts'); // Add Conditional Page Scripts
add_action('get_header', 'enable_threaded_comments'); // Enable Threaded Comments
add_action('wp_enqueue_scripts', 'html5blank_styles'); // Add Theme Stylesheet
add_action('init', 'register_html5_menu'); // Add HTML5 Blank Menu
add_action('init', 'create_post_type_html5'); // Add our HTML5 Blank Custom Post Type
add_action('widgets_init', 'my_remove_recent_comments_style'); // Remove inline Recent Comment Styles from wp_head()
add_action('init', 'html5wp_pagination'); // Add our HTML5 Pagination

// Remove Actions
remove_action('wp_head', 'feed_links_extra', 3); // Display the links to the extra feeds such as category feeds
remove_action('wp_head', 'feed_links', 2); // Display the links to the general feeds: Post and Comment Feed
remove_action('wp_head', 'rsd_link'); // Display the link to the Really Simple Discovery service endpoint, EditURI link
remove_action('wp_head', 'wlwmanifest_link'); // Display the link to the Windows Live Writer manifest file.
remove_action('wp_head', 'index_rel_link'); // Index link
remove_action('wp_head', 'parent_post_rel_link', 10, 0); // Prev link
remove_action('wp_head', 'start_post_rel_link', 10, 0); // Start link
remove_action('wp_head', 'adjacent_posts_rel_link', 10, 0); // Display relational links for the posts adjacent to the current post.
remove_action('wp_head', 'wp_generator'); // Display the XHTML generator that is generated on the wp_head hook, WP version
remove_action('wp_head', 'adjacent_posts_rel_link_wp_head', 10, 0);
remove_action('wp_head', 'rel_canonical');
remove_action('wp_head', 'wp_shortlink_wp_head', 10, 0);

// Add Filters
add_filter('avatar_defaults', 'html5blankgravatar'); // Custom Gravatar in Settings > Discussion
add_filter('body_class', 'add_slug_to_body_class'); // Add slug to body class (Starkers build)
add_filter('widget_text', 'do_shortcode'); // Allow shortcodes in Dynamic Sidebar
add_filter('widget_text', 'shortcode_unautop'); // Remove <p> tags in Dynamic Sidebars (better!)
add_filter('wp_nav_menu_args', 'my_wp_nav_menu_args'); // Remove surrounding <div> from WP Navigation
// add_filter('nav_menu_css_class', 'my_css_attributes_filter', 100, 1); // Remove Navigation <li> injected classes (Commented out by default)
// add_filter('nav_menu_item_id', 'my_css_attributes_filter', 100, 1); // Remove Navigation <li> injected ID (Commented out by default)
// add_filter('page_css_class', 'my_css_attributes_filter', 100, 1); // Remove Navigation <li> Page ID's (Commented out by default)
add_filter('the_category', 'remove_category_rel_from_category_list'); // Remove invalid rel attribute
add_filter('the_excerpt', 'shortcode_unautop'); // Remove auto <p> tags in Excerpt (Manual Excerpts only)
add_filter('the_excerpt', 'do_shortcode'); // Allows Shortcodes to be executed in Excerpt (Manual Excerpts only)
add_filter('excerpt_more', 'html5_blank_view_article'); // Add 'View Article' button instead of [...] for Excerpts
add_filter('show_admin_bar', 'remove_admin_bar'); // Remove Admin bar
add_filter('style_loader_tag', 'html5_style_remove'); // Remove 'text/css' from enqueued stylesheet
add_filter('post_thumbnail_html', 'remove_thumbnail_dimensions', 10); // Remove width and height dynamic attributes to thumbnails
add_filter('image_send_to_editor', 'remove_thumbnail_dimensions', 10); // Remove width and height dynamic attributes to post images

// Remove Filters
remove_filter('the_excerpt', 'wpautop'); // Remove <p> tags from Excerpt altogether

// Shortcodes
add_shortcode('html5_shortcode_demo', 'html5_shortcode_demo'); // You can place [html5_shortcode_demo] in Pages, Posts now.
add_shortcode('html5_shortcode_demo_2', 'html5_shortcode_demo_2'); // Place [html5_shortcode_demo_2] in Pages, Posts now.

// Shortcodes above would be nested like this -
// [html5_shortcode_demo] [html5_shortcode_demo_2] Here's the page title! [/html5_shortcode_demo_2] [/html5_shortcode_demo]




/*------------------------------------*\
   CUSTOM POST TYPES NOTAS
\*------------------------------------*/
function custom_post_type_Notas() {
$labels = array(
  'name'               => _x( 'Notas', 'Post Type General Name', 'text_domain' ),
  'singular_name'      => _x( 'Notas', 'Post Type Singular Name', 'text_domain' ),
  'menu_name'          => __( 'Notas', 'text_domain' ),
  'parent_item_colon'  => __( 'Notas padre', 'text_domain' ),
  'all_items'          => __( 'Notas', 'text_domain' ),
  'view_item'          => __( 'Ver Notas', 'text_domain' ),
  'add_new_item'       => __( 'Añadir Notas Nuevo', 'text_domain' ),
  'add_new'            => __( 'Añadir', 'text_domain' ),
  'edit_item'          => __( 'Editar Notas', 'text_domain' ),
  'update_item'        => __( 'Actualizar', 'text_domain' ),
  'search_items'       => __( 'Buscar Notas', 'text_domain' ),
  'not_found'          => __( 'Notas no encontradas', 'text_domain' ),
  'not_found_in_trash' => __( 'Notas no encontradas en Papelera', 'text_domain' ),
  );

$rewrite = array(
  'slug'                => 'Notas',
  'with_front'          => true,
  'pages'               => true,
  'feeds'               => true,
  );

$args = array(
  'label'               => __( 'Notas', 'text_domain' ),
  'description'         => __( 'Información de Notas', 'text_domain' ),
  'labels'              => $labels,
  'supports'            => array( 'title', 'editor', 'thumbnail', 'author', 'editor'),
  'taxonomies'          => array( 'category', 'post_tag' ),
  'hierarchical'        => false,
  'public'              => true,
  'show_ui'             => true,
  'show_in_menu'        => true,
  'show_in_nav_menus'   => true,
  'show_in_admin_bar'   => true,
  'menu_position'       => 4,
  'menu_icon'           => 'dashicons-welcome-write-blog',/*site_url().'/wp-content/plugins/my_plugin/images/logo.png',*/
  'can_export'          => true,
  'has_archive'         => 'Notas',
  'exclude_from_search' => false,
  'query_var'           => 'Notas',
  'rewrite'             => $rewrite,
  'capability_type'     => 'post',
  );

register_post_type('Notas', $args);
}

add_action('init', 'custom_post_type_Notas', 0);


/*------------------------------------*\
   METABOX 
\*------------------------------------*/
include 'options/notas/metaboxes.php';








/*------------------------------------*\
   CUSTOM POST TYPES HOTSPOTS
\*------------------------------------*/
function custom_post_type_Hotspots() {
$labels = array(
  'name'               => _x( 'Hotspots', 'Post Type General Name', 'text_domain' ),
  'singular_name'      => _x( 'Hotspots', 'Post Type Singular Name', 'text_domain' ),
  'menu_name'          => __( 'Hotspots', 'text_domain' ),
  'parent_item_colon'  => __( 'Hotspots padre', 'text_domain' ),
  'all_items'          => __( 'Hotspots', 'text_domain' ),
  'view_item'          => __( 'Ver Hotspots', 'text_domain' ),
  'add_new_item'       => __( 'Añadir Hotspot Nuevo', 'text_domain' ),
  'add_new'            => __( 'Añadir', 'text_domain' ),
  'edit_item'          => __( 'Editar Hotspot', 'text_domain' ),
  'update_item'        => __( 'Actualizar', 'text_domain' ),
  'search_items'       => __( 'Buscar Hotspots', 'text_domain' ),
  'not_found'          => __( 'Hotspots no encontradas', 'text_domain' ),
  'not_found_in_trash' => __( 'Hotspots no encontradas en Papelera', 'text_domain' ),
  );

$rewrite = array(
  'slug'                => 'Hotspots',
  'with_front'          => true,
  'pages'               => true,
  'feeds'               => true,
  );

$args = array(
  'label'               => __( 'Hotspots', 'text_domain' ),
  'description'         => __( 'Información de Hotspots', 'text_domain' ),
  'labels'              => $labels,
  'supports'            => array( 'title', 'editor', 'thumbnail', 'author', 'editor'),
  'taxonomies'          => array( 'category', 'post_tag' ),
  'hierarchical'        => false,
  'public'              => true,
  'show_ui'             => true,
  'show_in_menu'        => true,
  'show_in_nav_menus'   => true,
  'show_in_admin_bar'   => true,
  'menu_position'       => 4,
  'menu_icon'           => 'dashicons-image-rotate-left',/*site_url().'/wp-content/plugins/my_plugin/images/logo.png',*/
  'can_export'          => true,
  'has_archive'         => 'Hotspots',
  'exclude_from_search' => false,
  'query_var'           => 'Hotspotss',
  'rewrite'             => $rewrite,
  'capability_type'     => 'post',
  );

register_post_type('Hotspots', $args);
}

add_action('init', 'custom_post_type_Hotspots', 0);


/*------------------------------------*\
   METABOX 
\*------------------------------------*/
include 'options/hotspots/metaboxes.php';
include 'options/hotspots/addmetabox.php';
include 'options/hotspots/addmetabox_Hotspots.php';

/*------------------------------------*\
	Custom Post Types
\*------------------------------------*/

// Create 1 Custom Post type for a Demo, called HTML5-Blank
function create_post_type_html5()
{
    
}

/*------------------------------------*\
	ShortCode Functions
\*------------------------------------*/

// Shortcode Demo with Nested Capability
function html5_shortcode_demo($atts, $content = null)
{
    return '<div class="shortcode-demo">' . do_shortcode($content) . '</div>'; // do_shortcode allows for nested Shortcodes
}

// Shortcode Demo with simple <h2> tag
function html5_shortcode_demo_2($atts, $content = null) // Demo Heading H2 shortcode, allows for nesting within above element. Fully expandable.
{
    return '<h2>' . $content . '</h2>';
}


/*------------------------------------*\
    WP LOGIN
\*------------------------------------*/

function login_logo() { ?>
 <style type="text/css">
 body.login div#login h1 a {
 background-image: url(<?php echo get_stylesheet_directory_uri(); ?>/images/wp-login-images/codice_dresde.png);
 }
 </style>
<?php }
add_action( 'login_enqueue_scripts', 'login_logo' );

function login_logo_url() {
 return get_bloginfo( 'url' );
}
add_filter( 'login_headerurl', 'login_logo_url' );



function login_custom_stylesheet() { ?>
 <link rel="stylesheet" id="custom_wp_admin_css" href="<?php echo get_bloginfo( 'stylesheet_directory' ) . '/css/custom-login-styles.css'; ?>" type="text/css" media="all" />
<?php }
add_action( 'login_enqueue_scripts', 'login_custom_stylesheet' );


 
?>