jQuery(document).ready(function(){jQuery('#footer-core .widget-area:last-child').addClass("last");jQuery('#footer-core.option2 .widget-area').addClass("one_half");jQuery('#footer-core.option3 .widget-area').addClass("one_third");jQuery('#footer-core.option4 .widget-area').addClass("one_fourth");jQuery('#footer-core.option5 .widget-area').addClass("one_fifth");jQuery('#footer-core.option6 .widget-area').addClass("one_sixth");jQuery('#footer-core.option7 #footer-col1.widget-area').addClass("one_third");jQuery('#footer-core.option7 #footer-col2.widget-area').addClass("two_third");jQuery('#footer-core.option8 #footer-col1.widget-area').addClass("two_third");jQuery('#footer-core.option8 #footer-col2.widget-area').addClass("one_third");jQuery('#footer-core.option9 #footer-col1.widget-area').addClass("one_fourth");jQuery('#footer-core.option9 #footer-col2.widget-area').addClass("three_fourth");jQuery('#footer-core.option10 #footer-col1.widget-area').addClass("three_fourth");jQuery('#footer-core.option10 #footer-col2.widget-area').addClass("one_fourth");jQuery('#footer-core.option11 #footer-col1.widget-area').addClass("one_fifth");jQuery('#footer-core.option11 #footer-col2.widget-area').addClass("four_fifth");jQuery('#footer-core.option12 #footer-col1.widget-area').addClass("four_fifth");jQuery('#footer-core.option12 #footer-col2.widget-area').addClass("one_fifth");jQuery('#footer-core.option13 #footer-col1.widget-area').addClass("one_sixth");jQuery('#footer-core.option13 #footer-col2.widget-area').addClass("one_sixth");jQuery('#footer-core.option13 #footer-col3.widget-area').addClass("one_sixth");jQuery('#footer-core.option13 #footer-col4.widget-area').addClass("one_half");jQuery('#footer-core.option14 #footer-col1.widget-area').addClass("one_half");jQuery('#footer-core.option14 #footer-col2.widget-area').addClass("one_sixth");jQuery('#footer-core.option14 #footer-col3.widget-area').addClass("one_sixth");jQuery('#footer-core.option14 #footer-col4.widget-area').addClass("one_sixth");jQuery('#footer-core.option15 #footer-col1.widget-area').addClass("one_sixth");jQuery('#footer-core.option15 #footer-col2.widget-area').addClass("one_third");jQuery('#footer-core.option15 #footer-col3.widget-area').addClass("one_half");jQuery('#footer-core.option16 #footer-col1.widget-area').addClass("one_half");jQuery('#footer-core.option16 #footer-col2.widget-area').addClass("one_third");jQuery('#footer-core.option16 #footer-col3.widget-area').addClass("one_sixth");jQuery('#footer-core.option17 #footer-col1.widget-area').addClass("one_fourth");jQuery('#footer-core.option17 #footer-col2.widget-area').addClass("one_fourth");jQuery('#footer-core.option17 #footer-col3.widget-area').addClass("one_sixth");jQuery('#footer-core.option17 #footer-col4.widget-area').addClass("one_sixth");jQuery('#footer-core.option17 #footer-col5.widget-area').addClass("one_sixth");jQuery('#footer-core.option18 #footer-col1.widget-area').addClass("one_sixth");jQuery('#footer-core.option18 #footer-col2.widget-area').addClass("one_sixth");jQuery('#footer-core.option18 #footer-col3.widget-area').addClass("one_sixth");jQuery('#footer-core.option18 #footer-col4.widget-area').addClass("one_fourth");jQuery('#footer-core.option18 #footer-col5.widget-area').addClass("one_fourth");});jQuery(document).ready(function(){jQuery('#sub-footer-widgets .widget-area:last-child').addClass("last");jQuery('#sub-footer-widgets .widget-area:last-child').after('<div class="clearboth"></div>');jQuery('#sub-footer-widgets.option2 .widget-area').addClass("one_half");jQuery('#sub-footer-widgets.option3 #sub-footer-col1.widget-area').addClass("one_third");jQuery('#sub-footer-widgets.option3 #sub-footer-col2.widget-area').addClass("two_third");jQuery('#sub-footer-widgets.option4 #sub-footer-col1.widget-area').addClass("two_third");jQuery('#sub-footer-widgets.option4 #sub-footer-col2.widget-area').addClass("one_third");jQuery('#sub-footer-widgets.option5 #sub-footer-col1.widget-area').addClass("one_fourth");jQuery('#sub-footer-widgets.option5 #sub-footer-col2.widget-area').addClass("three_fourth");jQuery('#sub-footer-widgets.option6 #sub-footer-col1.widget-area').addClass("three_fourth");jQuery('#sub-footer-widgets.option6 #sub-footer-col2.widget-area').addClass("one_fourth");jQuery('#sub-footer-widgets.option7 #sub-footer-col1.widget-area').addClass("one_fifth");jQuery('#sub-footer-widgets.option7 #sub-footer-col2.widget-area').addClass("four_fifth");jQuery('#sub-footer-widgets.option8 #sub-footer-col1.widget-area').addClass("four_fifth");jQuery('#sub-footer-widgets.option8 #sub-footer-col2.widget-area').addClass("one_fifth");});jQuery(document).ready(function(){(function($){if($.isFunction($.fn.imagesLoaded)){if($('#container').hasClass('portfolio-wrapper')){var $container=$('#container-inner');}else if($('body').hasClass('woo-shop-grid')){var $container=$('#main-core > .products');}else{var $container=$('#container');}
$container.imagesLoaded(function(){if($.isFunction($.fn.masonry)){$container.masonry();}});}}(jQuery));});function mainmenu(){jQuery("header .header-links ul.menu > li").hover(function(){jQuery(this).find('ul.sub-menu:first').css({visibility:"visible",display:"none"}).parent().addClass('menu-hover');},function(){jQuery(this).find('ul.sub-menu:first').css({visibility:"hidden",display:"none"}).parent().removeClass('menu-hover');});jQuery("header .header-links ul.menu > li").each(function(){jQuery(this).find('ul.sub-menu').css({visibility:"visible",display:"none"}).parent().addClass('menu-parent');});jQuery("#pre-header").hover(function(){jQuery(this).css({'z-index':'999991'});},function(){jQuery(this).css({'z-index':'999'});});jQuery("header .header-links li").hover(function(){parentWidth=jQuery(this).width();if(jQuery(this).hasClass('header-thinkupmega')){jQuery(this).find('ul').addClass('header-thinkupmegachild');megaColumnCount=jQuery(this).children("ul").children("li").length;megaColumnWidth=100/megaColumnCount;jQuery(this).children("ul").children("li").outerWidth(megaColumnWidth+"%");megaColumnHeight=jQuery(this).children("ul").height();jQuery(this).children("ul").children("li").outerHeight(megaColumnHeight);}
if(!jQuery(this).parent().hasClass('header-thinkupmegachild')){jQuery(this).find('ul:first').css({visibility:"visible",display:"none","min-width":parentWidth}).slideToggle(400);}},function(){jQuery(this).find('ul:first').css({visibility:"hidden"});});if(jQuery('body').hasClass('header-below')){jQuery('#header').waypoint(function(direction){if(direction==='down'){jQuery('body').addClass('header-below2');jQuery('body').removeClass('header-below1');}
else{jQuery('body').removeClass('header-below2');jQuery('body').addClass('header-below1');}},{offset:'50%'});}}
jQuery(document).ready(function(){mainmenu();});jQuery(document).ready(function(){jQuery('#header-responsive .menu-item-has-children > a').after('<span class="sub-menu-toggle"></span>');jQuery('#header-responsive .menu-item-has-children .sub-menu-toggle').click(function(e){var parentmenu=jQuery(this).closest('.menu-item-has-children');if(parentmenu.hasClass('sub-menu-show')){jQuery(parentmenu).removeClass('sub-menu-show');}else{jQuery(parentmenu).addClass('sub-menu-show');}});});jQuery(window).load(function(){if(jQuery(window).width()>768&&jQuery('body').hasClass('header-sticky')){jQuery(window).scroll(function(){var siteheader_height=jQuery('#site-header').height();var preheader_height=jQuery('#pre-header').height();var header_height=jQuery('#header').height();var header_sticky_offset=jQuery('#header-sticky').offset();if(!jQuery('body').hasClass('header-below')){if(header_sticky_offset.top>preheader_height+header_height+100){jQuery('body').addClass('header-sticky-active');}else{jQuery('body').removeClass('header-sticky-active');}}else{if(header_sticky_offset.top>siteheader_height+100){jQuery('body').addClass('header-sticky-active');}else{jQuery('body').removeClass('header-sticky-active');}}});}});jQuery(document).ready(function(){var all_videos=jQuery('iframe[src*="//player.vimeo.com"], iframe[src*="//www.youtube.com"], iframe[src*="//blip.tv"], iframe[src*="//www.slideshare.net"], iframe[src*="//www.scribd.com"], iframe[src*="//revision3.com"], iframe[src*="//www.hulu.com"], iframe[src*="//www.funnyordie.com"], iframe[src*="//www.dailymotion.com"], iframe[src*="//maps.google.com"], embed[src*="//v.wordpress.com"], object, embed');all_videos.each(function(){var el=jQuery(this);el.attr('data-aspectRatio',360/640).attr('data-oldWidth',el.width());});jQuery(document).ready(function(){all_videos.each(function(){var el=jQuery(this),newWidth=el.parents().width(),oldWidth=el.attr('data-oldWidth');el.removeAttr('height').removeAttr('width').width(newWidth).height(newWidth*el.attr('data-aspectRatio'));});}).resize();jQuery(window).resize(function(){all_videos.each(function(){var el=jQuery(this),newWidth=el.parents().width(),oldWidth=el.attr('data-oldWidth');el.removeAttr('height').removeAttr('width').width(newWidth).height(newWidth*el.attr('data-aspectRatio'));});}).resize();});jQuery(document).ready(function(){var all_sounds=jQuery('iframe[src^="http://w.soundcloud.com"]');all_sounds.each(function(){var el=jQuery(this);el.attr('data-aspectRatio',el.attr('height')/el.attr('width')).attr('data-oldWidth',el.width());});jQuery(document).ready(function(){all_sounds.each(function(){var el=jQuery(this),newWidth=el.parents().width(),oldWidth=el.attr('data-oldWidth');el.removeAttr('width').width(newWidth)});}).resize();jQuery(window).resize(function(){all_sounds.each(function(){var el=jQuery(this),newWidth=el.parents().width(),oldWidth=el.attr('data-oldWidth');el.removeAttr('width').width(newWidth)});}).resize();});jQuery(document).ready(function(){jQuery('#container.portfolio-wrapper a').has('img.hover-zoom').addClass('prettyPhoto');jQuery('#container.portfolio-wrapper a').has('img.hover-zoom').attr('rel','portfolio[gallery]');jQuery('a.prettyPhoto').has('img').attr('rel','portfolio[gallery]');jQuery('a.prettyPhoto').prettyPhoto();});jQuery(document).ready(function(){jQuery('body.attachment .entry-attachment .attachment a').has('img').addClass('prettyPhoto');jQuery('a.prettyPhoto').prettyPhoto();});jQuery(document).ready(function(){jQuery('.thinkup_widget_flickr a[href^="http://"], .thinkup_widget_flickr a[href^="https://"]').attr('target','_blank');jQuery('.thinkup_widget_socialshare a[href^="http://"], .thinkup_widget_socialshare a[href^="https://"]').attr('target','_blank');jQuery('.thinkup_widget_socialprofiles a[href^="http://"], .thinkup_widget_socialprofiles a[href^="https://"]').attr('target','_blank');jQuery('#pre-header-social a[href^="http://"], #pre-header-social a[href^="https://"]').attr('target','_blank');jQuery('#shareicons a[href^="http://"], #shareicons a[href^="https://"]').attr('target','_blank');});jQuery(window).load(function(){jQuery('.accordion-toggle').click(function(){if(jQuery(this).hasClass('collapsed')){jQuery(this).closest('.accordion').find('.accordion-toggle').not(this).addClass('collapsed');jQuery(this).closest('.accordion').find('.accordion-toggle').closest('.accordion-group').removeClass('accordion-open');jQuery(this).closest('.accordion-group').addClass('accordion-open');}else{jQuery(this).closest('.accordion').find('.accordion-toggle').closest('.accordion-group').removeClass('accordion-open');}});jQuery('.backtotop').click(function(){jQuery('html, body').animate({scrollTop:0},'slow');});jQuery('[data-tip]').each(function(){jQuery(this).tooltip({placement:jQuery(this).data('tip')});});function isNumber(n){return!isNaN(parseFloat(n))&&isFinite(n);}
jQuery(window).bind('load resize',function(){jQuery('.sc-carousel').each(function(i){if(jQuery(this).hasClass('sc-postitem')||jQuery(this).hasClass('sc-featured')||jQuery(this).hasClass('sc-image')){return;};var instanceID='sc-carousel-'+i;jQuery(this).attr('id',instanceID);jQuery(this).children('ul').attr('id',instanceID+'-inner');var show=jQuery('#'+instanceID+'.sc-carousel').data('show');var scroll=jQuery('#'+instanceID+'.sc-carousel').data('scroll');var speed=jQuery('#'+instanceID+'.sc-carousel').data('speed');var effect=jQuery('#'+instanceID+'.sc-carousel').data('effect');if(show==0||isNaN(show)==true)show='3';if(scroll==0||isNaN(scroll)==true)scroll='1';if(speed==0)speed='500';if(effect==0){effect='"scroll"';}else{effect='"'+effect+'"';}
var showItems=show;var scrollItems=scroll;var speedItems=speed;var fxItems=effect;var width=jQuery(window).width();if(jQuery('body').hasClass('layout-responsive')){if(width<=685){showItems=2;if(scrollItems>=2){scrollItems=2;}}
if(width<=480){showItems=1;scrollItems=1;}}
if(jQuery(this).find('#'+instanceID+'-inner').length){jQuery(this).find('#'+instanceID+'-inner').carouFredSel({width:'100%',items:{visible:showItems,minimum:3,minimum:3,start:0},scroll:{items:scrollItems,fx:fxItems,easing:"swing",duration:speedItems,},responsive:true,circular:true,infinite:false,auto:false,prev:{button:'#'+instanceID+' .prev',key:'left'},next:{button:'#'+instanceID+' .next',key:'right'},pagination:'#'+instanceID+' .pagination',onCreate:function(){jQuery(window).bind("load resize",function(){parentWidthTestimonial=jQuery('#'+instanceID+'.carousel-testimonial li').outerHeight();jQuery('#'+instanceID+'.carousel-testimonial').height('auto');jQuery('#'+instanceID+'.carousel-testimonial .caroufredsel_wrapper').css({'height':parentWidthTestimonial});parentWidthTestimonial_1=jQuery('#'+instanceID+'.carousel-testimonial.style1 .caroufredsel_wrapper').outerHeight();parentWidthTestimonial_2=jQuery('#'+instanceID+'.carousel-testimonial.style1 .sc-carousel-thumbs').outerHeight();jQuery('#'+instanceID+'.carousel-testimonial.style1').height(parentWidthTestimonial_1+parentWidthTestimonial_2);jQuery('#'+instanceID+'.carousel-testimonial.style1 .sc-carousel-thumbs').parent().height(parentWidthTestimonial_2);});}});}
if(jQuery(this).find('.sc-carousel-thumbs').length){jQuery(this).find('.sc-carousel-thumbs').carouFredSel({responsive:true,circular:false,infinite:false,auto:false,prev:'#prev',next:'#next',items:{visible:{min:2,max:6},width:150,height:70}});}
jQuery(this).find('.sc-carousel-thumbs a').click(function(){jQuery('#'+instanceID+'-inner').trigger('slideTo','#'+this.href.split('#').pop());jQuery('.sc-carousel-thumbs a').removeClass('selected');jQuery(this).addClass('selected');return false;});parentHeight=jQuery('#'+instanceID+' li').outerHeight();jQuery('#'+instanceID+' li').each(function(){var elementHeight=jQuery(this).height();parentHeight=elementHeight>parentHeight?elementHeight:parentHeight;});if(jQuery('#'+instanceID).closest('.sc-carousel').find('.sc-carousel-thumbs').length>0){parentHeightThumb=parentHeight+jQuery('#'+instanceID).closest('.sc-carousel').find('.sc-carousel-thumbs').outerHeight();}else{parentHeightThumb=parentHeight;}
jQuery('#'+instanceID).height(Math.max(parentHeight,parentHeightThumb));jQuery('#'+instanceID+'-inner').height(parentHeight);jQuery('#'+instanceID+'-inner').parent().height(parentHeight);if(jQuery('#'+instanceID+' iframe').length>0){jQuery('#'+instanceID).addClass('carousel-iframe');}});}).resize();jQuery('.progress').waypoint(function(event,direction){var width=jQuery(this).children().attr('data-width');var delay=jQuery(this).children().attr('data-delay');jQuery(this).delay(delay).queue(function(next){jQuery(this).children().css('width',width+'%');});},{offset:'bottom-in-view'});});jQuery(document).ready(function(){jQuery('.rslides-sc').each(function(index,element){jQuery(element).attr('id','thinkupbuilder-sliderimage-'+index);var wide=jQuery(element).data('wide');if(wide=='on'){jQuery(element).closest('.panel-grid').css('padding',0);jQuery(element).closest('.panel-grid-core').css('margin',0).css('maxWidth','100%');jQuery(element).closest('.panel-grid-cell').css('padding',0);}});jQuery('.thinkupslider-sc').each(function(index,element){jQuery(element).attr('id','thinkupbuilder-thinkupsliderimage-'+index);var wide=jQuery(element).data('wide');if(wide=='on'){jQuery(element).closest('.panel-grid').css('padding',0);jQuery(element).closest('.panel-grid-core').css('margin',0).css('maxWidth','100%');jQuery(element).closest('.panel-grid-cell').css('padding',0);}});jQuery('.sc-grid ul').each(function(index,element){var wide=jQuery(element).data('wide');if(wide=='on'){jQuery(element).closest('.panel-grid').css('padding',0);jQuery(element).closest('.panel-grid-core').css('margin',0).css('maxWidth','100%');jQuery(element).closest('.panel-grid-cell').css('padding',0);}});});jQuery(document).ready(function(){jQuery('.anim-start-ltr').waypoint(function(event,direction){var time=jQuery(this).parent().attr('title');jQuery(this).delay(time).queue(function(next){jQuery(this).removeClass('anim-start-ltr').addClass('anim-end-ltr');jQuery(this).parent().removeAttr('title');});},{offset:'bottom-in-view'});jQuery('.anim-start-rtl').waypoint(function(event,direction){var time=jQuery(this).parent().attr('title');jQuery(this).delay(time).queue(function(next){jQuery(this).removeClass('anim-start-rtl').addClass('anim-end-rtl');jQuery(this).parent().removeAttr('title');});},{offset:'bottom-in-view'});jQuery('.anim-start-btt').waypoint(function(event,direction){var time=jQuery(this).parent().attr('title');jQuery(this).delay(time).queue(function(next){jQuery(this).removeClass('anim-start-btt').addClass('anim-end-btt');jQuery(this).parent().removeAttr('title');});},{offset:'bottom-in-view'});jQuery('.anim-start-ttb').waypoint(function(event,direction){var time=jQuery(this).parent().attr('title');jQuery(this).delay(time).queue(function(next){jQuery(this).removeClass('anim-start-ttb').addClass('anim-end-ttb');jQuery(this).parent().removeAttr('title');});},{offset:'bottom-in-view'});jQuery('.anim-start-stb').waypoint(function(event,direction){var time=jQuery(this).parent().attr('title');jQuery(this).delay(time).queue(function(next){jQuery(this).removeClass('anim-start-stb').addClass('anim-end-stb '+time);jQuery(this).parent().removeAttr('title');});},{offset:'bottom-in-view'});});jQuery(document).ready(function(){jQuery('#header-search a').click(function(){if(!jQuery('#header-search').hasClass('active')){jQuery('#header-search').addClass('active');}else{jQuery('#header-search').removeClass('active');}});});jQuery(document).ready(function(){if(jQuery('body').hasClass('scrollup-on')){(function($){$(function(){$.scrollUp({scrollName:'scrollUp',scrollText:'',});});}(jQuery));}});jQuery('#sub-footer-close-core').click(function(){if(jQuery(this).hasClass('collapsed')){jQuery(this).removeClass('collapsed');jQuery('#sub-footer-widgets').removeClass('collapsed');}else{jQuery(this).addClass('collapsed');jQuery('#sub-footer-widgets').addClass('collapsed');}});jQuery(document).ready(function(){if(jQuery('.featured-icon')){jQuery('#slider').after('<div id="thinkupslider-after"></div>');}
jQuery('.featured-icon a').click(function(e){e.preventDefault();jQuery('html, body').animate({scrollTop:jQuery('#thinkupslider-after').offset().top},1000);});});jQuery(document).ready(function(){jQuery('.woo-share').click(function(e){if(jQuery(this).hasClass('active')){jQuery(this).removeClass('active');jQuery(this).closest('.woo-meta').find('.woo-meta-social').removeClass('active');}else{jQuery(this).addClass('active');jQuery(this).closest('.woo-meta').find('.woo-meta-social').addClass('active');}});});