<!doctype html>
<html <?php language_attributes(); ?> class="no-js">
	<head>
		<meta charset="<?php bloginfo('charset'); ?>">
		<title><?php wp_title(''); ?><?php if(wp_title('', false)) { echo ' :'; } ?> <?php bloginfo('name'); ?></title>

		<link href="//www.google-analytics.com" rel="dns-prefetch">
         <link rel="icon" href="<?php echo get_template_directory_uri(); ?>/images/dresde_icon.png" sizes="32x32" />
        


		<link rel="stylesheet" type="text/css" media="screen" href="<?php echo get_template_directory_uri(); ?>/css/cssopensea/style.css">



		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'  name='viewport' />
		<meta name="description" content="El Instituto Nacional de Antropología e Historia pone a disposición de los interesados una novedosa edición física y digital de uno de los documentos históricos más relevantes y antiguos del México prehispánico: El Códice de Dresde. ">

		<meta property="og:image" content="<?php echo get_template_directory_uri();?>/images/generales/portada.jpg"/>



		<?php wp_head(); ?>
		 

	</head>
	<body class="flexcroll">

 

	<style type="text/css">
	body{
		background: #30302D;
	}

 
</style>


<div class="header header_codice nav-down">
		<div class="btn_info_cod"></div>

		
       <div class="btn_inicio"></div>
        <?php 
       if ( is_user_logged_in() ) { ?>
       <div class="btn_login_on"></div>

       	<?php } else {?>
        	<div class="btn_login"></div>  
        <?php } ?>
       <div class="btn_search"></div>

       <div class="btn_materialidad">
       	
       		 <div class="BarraNavegacion">
       		 <div class="triangulo"></div>

       		 	<div class="BloqueA">
       		 		<a href="<?php echo site_url(); ?>/anverso-facsimilar/">Navegación</a>
       		 	</div><!--BloqueA -->
	
       		 	<div class="BloqueB">
       		 		<a href="<?php echo site_url(); ?>/comparativa-anverso/">Comparativa</a>
       		 	</div><!-- BloqueB -->


	   		</div><!-- BarraNavegacion -->
       

       </div><!-- btn_materialidad -->

       <div class="btn_hipermedia btn_hipermedia_on">
       		<div class="BarraNavegacionB">
       		 <div class="triangulo"></div>

       		 	<div class="BloqueA menu_on_hiper relase_storage">
       		 		Dioses
       		 	</div><!--BloqueA -->
	
       		 	<div class="BloqueB relase_storage">
       		 		<a href="<?php echo site_url(); ?>/hypermedia-augurios/">Augurios</a>
       		 	</div><!-- BloqueB -->


	   		</div><!-- BarraNavegacion -->

       </div><!-- btn_hipermedia-->




   <!-- MENU GENERAL ============================== -->
       <div class="menuGeneral">
			<div class="BloqueA">
				<div class="menu1 men1"></div>	
				<div class="menu2 men2 menu_over_2_on"></div>	
				<div class="menu3 men3"></div>	
				<div class="menu4 men4"></div>	
				<div class="menu5 men5"></div>	
				<div class="menu6 men6"></div>	

			</div>

			<div class="BloqueB">
					

				<div class="menu1 menuTitulo men_1"><a href="<?php echo site_url(); ?>/bienvenida/">Bienvenida</a></div>	
				<div class="menu2 menuTitulo men_2 titulo_menu_on"><a href="<?php echo site_url(); ?>/anverso-facsimilar/">Códice</a></div>	
				<div class="menu3 menuTitulo men_3"><a href="<?php echo site_url(); ?>/sistemas-cronograficos/">Sistemas Cronográficos</a></div>
				<div class="menu4 menuTitulo men_4"><a href="<?php echo site_url(); ?>/notas/">Notas</a></div>	
				<div class="menu5 menuTitulo men_5"><a href="<?php echo site_url(); ?>/bibliotecas/">Bibliotecas</a></div>	
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

