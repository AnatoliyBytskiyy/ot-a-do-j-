<?php
/**
 * The Header for our theme.
 *
 * Displays all of the <head> section and everything up until id="main-core".
 *
 * @package ThinkUpThemes
 */
?><!DOCTYPE html>

<html <?php language_attributes(); ?>>
<head>
<?php consulting_thinkup_hook_header(); ?>
<meta charset="<?php bloginfo( 'charset' ); ?>" />
<meta name="viewport" content="width=device-width" />
<meta name="yandex-verification" content="9d9bc7fc53d6b370" />
<meta name="yandex-verification" content="582f21e73011aaf2" />
<meta name="google-site-verification" content="vl9u3nB2qSUvNPlMkDNbCz-YH8LNmw7cU2W5Ci8LGn8" />
<link rel="profile" href="//gmpg.org/xfn/11" />
<link rel="pingback" href="<?php esc_url( bloginfo( 'pingback_url' ) ); ?>" />

<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="body-core" class="hfeed site">

	<header>
	<div id="site-header">

		<?php if ( get_header_image() ) : ?>
			<div class="custom-header"><img src="<?php header_image(); ?>" width="<?php echo esc_attr( get_custom_header()->width ); ?>" height="<?php echo esc_attr( get_custom_header()->height ); ?>" alt=""></div>
		<?php endif; // End header image check. ?>
	
		<div id="pre-header">
		<div class="wrap-safari">
		<div id="pre-header-core" class="main-navigation">

			<?php /* Social Media Icons */ consulting_thinkup_input_socialmediaheaderpre(); ?>

			<?php if ( has_nav_menu( 'pre_header_menu' ) ) : ?>
			<?php wp_nav_menu( array( 'container_class' => 'header-links', 'container_id' => 'pre-header-links-inner', 'theme_location' => 'pre_header_menu' ) ); ?>
			<?php endif; ?>

		</div>
		</div>
		</div>
		<!-- #pre-header -->

		<div id="header">
		<div id="header-core">

			<div id="logo">
			<?php /* Custom Logo */ echo consulting_thinkup_custom_logo(); ?>
			</div>
			<div class="header__contacts__list__wrp">
		        <ul class="header__contacts__list clearfix">
		            <li class="contacts__item"><img src="/wp-content/uploads/2018/04/icon-viber.png" class="img-viber-icon"><a href="tel:380506464786">+38 (050) 64-64-786</a> </li>
		            <li class="contacts__item"><a href="tel:380713564085">+38 (071) 356-40-85</a></li>
		            <li class="contacts__item"><img src="/wp-content/uploads/2018/04/icon-viber.png" class="img-viber-icon"><a href="tel:380507137384">+38 (050) 713-73-84</a></li>
		            <li class="contacts__item contacts__item__btn"><a href="#modalCall" class="link_nav_modal" role="button" data-toggle="modal">Заказать звонок <i class="fa fa-angle-right"></i></a></li>
		        </ul>
		    </div>
			<div id="header-links" class="main-navigation">
			<div id="header-links" class="main-navigation">
			<div id="header-links-inner" class="header-links">

				<?php $walker = new consulting_thinkup_menudescription;
				wp_nav_menu(array( 'container' => false, 'theme_location'  => 'header_menu', 'walker' => new consulting_thinkup_menudescription() ) ); ?>
				
				<?php consulting_thinkup_input_headersearch(); ?>

			</div>
			</div>
			<!-- #header-links .main-navigation -->
 	

		</div>

			<?php /* Add responsive header menu */ consulting_thinkup_input_responsivehtml1(); ?>
		</div>
		<!--        Modal -->
                <div class="modal nav_modal" id="modalCall" tabindex="-1" role="dialog"  aria-hidden="true">
                   <div class="modal__block__call modal__block col-md-4 col-sm-6 col-xs-10">
                    <div class="m_header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                        <h3 class="h3_modal">Заказать звонок</h3>
                    </div>
                    <div class="m_body">
                    <?php //if (ot_get_option( 'feedback_form' )) { ?>
                        <?php //echo do_shortcode( ot_get_option( 'feedback_form' )); ?>
                        <?php //} ?>
                    <?php echo do_shortcode('[contact-form-7 id="496" title="Заказать звонок"]');?>

                    </div>
                    </div>
                  </div>
            <!-- END MODAL -->
		<!-- #header -->

		<?php /* Add responsive header menu */ consulting_thinkup_input_responsivehtml2(); ?>

		<?php /* Add sticky header */ consulting_thinkup_input_headersticky(); ?>

		<div class="slider-container" style="position: relative;">

		<div class="slider-button-container elementor-widget-container">
			<div class="elementor-button-wrapper">
				<a id="my-button" class="my-button elementor-button-link elementor-button elementor-size-sm"
				href="http://otadoya-dn.ru/kontakty/">
						<span class="elementor-button-content-wrapper">
						<span class="elementor-align-icon-right elementor-button-icon">
						<i class="fa fa-angle-right"></i>
						</span>
						<span class="elementor-button-text">Оформить заявку</span>
						</span>
				</a>
			</div>
		</div>

			<?php /* Custom Slider */ consulting_thinkup_input_sliderhome(); ?>
		</div>

		<?php /* Custom Intro - Above */ consulting_thinkup_custom_intro(); ?>

		<script>
			var slider = document.getElementById('slider');

			if(slider != undefined){
				var button = document.getElementById('my-button');
				button.style.display = 'inline-block';
			}
		</script>

	</div>
	<?php 
        if( !is_front_page()) {?>
    <div class="path__line">
        <a href="<?php echo get_home_url(); ?>" class="main__page">Главная</a>| <span class="second__page"><?php echo get_the_title();?></span>
    </div> 
       <?php }
        ?>
	</header>
	<!-- header -->

	<?php /*  Call To Action - Intro */ consulting_thinkup_input_ctaintro(); ?>
	<?php /*  Pre-Designed HomePage Content */ consulting_thinkup_input_homepagesection(); ?>

	<div id="content">
	<div id="content-core">

		<div id="main">
		<div id="main-core">