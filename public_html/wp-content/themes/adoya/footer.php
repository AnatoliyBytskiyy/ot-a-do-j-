<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the id="main-core".
 *
 * @package ThinkUpThemes
 */
?>

		</div><!-- #main-core -->
		</div><!-- #main -->
		<?php /* Sidebar */ consulting_thinkup_sidebar_html(); ?>
	</div>
	</div><!-- #content -->

	<footer>
		<?php /* Custom Footer Layout */ consulting_thinkup_input_footerlayout();
		echo	'<!-- #footer -->';  ?>
		
		<div id="sub-footer">
			<div id="sub-footer-core">	
				<div class="copyright">
				<!--<?php /* === Add custom footer === */ consulting_thinkup_input_copyright(); ?>-->
					Developed by <!--noindex--><a href="http://parallels-dn.ru/" target="_blank" rel="nofollow">Parallels</a><!--/noindex-->.<br>
					Продвижение <!--noindex--><a href="https://nebo.dn.ua/" target="_blank" rel="nofollow">Nebo.dn.ua</a><!--/noindex-->.
					<div class="footer__adress">г. Донецк, бул. Шевченко, 109</div>
				</div>
				<!-- .copyright -->
				<div class="footer_right_block">			
					<?php if ( has_nav_menu( 'sub_footer_menu' ) ) : ?>
					<?php wp_nav_menu( array( 'depth' => 1, 'container_class' => 'sub-footer-links', 'container_id' => 'footer-menu', 'theme_location' => 'sub_footer_menu' ) ); 				?>
					<?php endif; ?>
					<!-- #footer-menu -->
				
					<div class="header__contacts__list__wrp">
				        <ul class="header__contacts__list clearfix" id="footer_contact">
				            <li class="contacts__item"><img src="/wp-content/uploads/2018/04/icon-viber.png" class="img-viber-icon"><a href="tel:380506464786">+38 (050) 64-64-786</a> </li>
				            <li class="contacts__item"><a href="tel:380713564085">+38 (071) 356-40-85</a></li>
				            <li class="contacts__item"><img src="/wp-content/uploads/2018/04/icon-viber.png" class="img-viber-icon"><a href="tel:380507137384">+38 (050) 713-73-84</a></li>
				            <li class="contacts__item contacts__item__btn"><a href="#modalCall" class="link_nav_modal" role="button" data-toggle="modal">Заказать звонок <i class="fa fa-angle-right"></i></a></li>
				        </ul>
				    </div>
				</div>
			</div>
		</div>
	</footer><!-- footer -->

</div><!-- #body-core -->
<!-- Yandex.Metrika counter -->
<script type="text/javascript" >
    (function (d, w, c) {
        (w[c] = w[c] || []).push(function() {
            try {
                w.yaCounter46160817 = new Ya.Metrika({
                    id:46160817,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    webvisor:true
                });
            } catch(e) { }
        });

        var n = d.getElementsByTagName("script")[0],
            s = d.createElement("script"),
            f = function () { n.parentNode.insertBefore(s, n); };
        s.type = "text/javascript";
        s.async = true;
        s.src = "https://mc.yandex.ru/metrika/watch.js";

        if (w.opera == "[object Opera]") {
            d.addEventListener("DOMContentLoaded", f, false);
        } else { f(); }
    })(document, window, "yandex_metrika_callbacks");
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/46160817" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->
<!-- Global Site Tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-85090440-2"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)};
  gtag('js', new Date());

  gtag('config', 'UA-85090440-2');
</script>
<?php wp_footer(); ?>

</body>
</html>