<!doctype html>
<html <?php language_attributes(); ?> class="no-js">
	<head>
		<meta charset="<?php bloginfo('charset'); ?>">
		<title><?php wp_title(''); ?><?php if(wp_title('', false)) { echo ' :'; } ?> <?php bloginfo('name'); ?></title>

		<link href="//www.google-analytics.com" rel="dns-prefetch">
         <link rel="icon" href="<?php echo get_template_directory_uri(); ?>/images/dresde_icon.png" sizes="32x32" />
       	

		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'  name='viewport' />

		<meta name="description" content="El Instituto Nacional de Antropología e Historia pone a disposición de los interesados una novedosa edición física y digital de uno de los documentos históricos más relevantes y antiguos del México prehispánico: El Códice de Dresde. ">

		<meta property="og:image" content="<?php echo get_template_directory_uri();?>/images/generales/portada.jpg"/>

		<?php wp_head(); ?>
		



	</head>
	<body  class="flexcroll">

 	



	


	<div class="header nav-down">
       <div class="btn_inicio"></div>
        <?php 
       if ( is_user_logged_in() ) { ?>
       <div class="btn_login_on"></div>

       	<?php } else {?>
        	<div class="btn_login"></div>  
        <?php } ?>
       <div class="btn_search"></div>


       <!-- MENU GENERAL ============================== -->
       <div class="menuGeneral">
			<div class="BloqueA">
				<div class="menu1 men1"></div>	
				<div class="menu2 men2"></div>	
				<div class="menu3 men3"></div>	
				<div class="menu4 men4"></div>	
				<div class="menu5 men5 menu_over_5_on"></div>	
				<div class="menu6 men6"></div>	

			</div>

			<div class="BloqueB">
					

				<div class="menu1 menuTitulo men_1"><a href="<?php echo site_url(); ?>/bienvenida/">Bienvenida</a></div>	
				<div class="menu2 menuTitulo men_2"><a href="<?php echo site_url(); ?>/anverso-facsimilar/">Códice</a></div>	
				<div class="menu3 menuTitulo men_3"><a href="<?php echo site_url(); ?>/sistemas-cronograficos/">Sistemas Cronográficos</a></div>
				<div class="menu4 menuTitulo men_4"><a href="<?php echo site_url(); ?>/notas/">Notas</a></div>	
				<div class="menu5 menuTitulo men_5 titulo_menu_on"><a href="<?php echo site_url(); ?>/bibliotecas/">Bibliotecas</a></div>	
				<div class="menu6 menuTitulo men_6"><a href="<?php echo site_url(); ?>/acerca-de/">Acerca de</a></div>
  
			</div>

	   </div><!-- MenuGeneral -->


	  <div class="BarraBusqueda">
	   		<div class="closei"></div>
	   		<input type="text"  name="keyword" id="keyword"  onkeyup="fetch()"  placeholder="Busca un texto, nota, etc...">
	   		<div id="datafetch" class="busqueda_resultados flexcroll"></div>
	   </div>


	   	<?php echo get_template_part("contenidos/login/formularios")?>



		</div>

</div><!-- HEADER -->
