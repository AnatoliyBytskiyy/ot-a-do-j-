jQuery(document).ready(function(){jQuery('.rslides-inner .slides').each(function(i){slideAuto=true;if(!jQuery(this).closest('.rslides-container').attr('data-speed')){slideSpeed=6000;}else{slideSpeed=jQuery(this).closest('.rslides-container').attr('data-speed')
if(slideSpeed=='off'){slideSpeed=null;slideAuto=false;}}
jQuery(this).responsiveSlides({auto:slideAuto,speed:500,timeout:slideSpeed,pager:true,nav:true,random:false,pause:true,pauseControls:true,prevText:" ",nextText:" ",maxwidth:"",navContainer:"",manualControls:"",namespace:"rslides",before:function(){},after:function(){}});});});jQuery(document).ready(function(){var slider=jQuery('#slider .rslides-inner .slides');slider.each(function(){var el=jQuery(this);el.attr('data-aspectRatio',slider.height()/1140).attr('data-oldWidth',el.width());});jQuery(document).ready(function(){slider.each(function(){var el=jQuery(this),newWidth=el.parents().width(),oldWidth=el.attr('data-oldWidth');el.removeAttr('height').removeAttr('width').width(newWidth).height(newWidth*el.attr('data-aspectRatio'));});}).resize();jQuery(window).resize(function(){slider.each(function(){var el=jQuery(this),newWidth=el.parents().width(),oldWidth=el.attr('data-oldWidth');el.removeAttr('height').removeAttr('width').width(newWidth).height(newWidth*el.attr('data-aspectRatio'));});}).resize();});jQuery(document).ready(function(){var slider_li=jQuery('#slider .rslides-inner .slides li');slider_li.each(function(){var el=jQuery(this);el.attr('data-aspectRatio',slider_li.height()/1140).attr('data-oldWidth',el.width());});jQuery(document).ready(function(){slider_li.each(function(){var el=jQuery(this),newWidth=el.parents().width(),oldWidth=el.attr('data-oldWidth');el.removeAttr('height').removeAttr('width').width(newWidth).height(newWidth*el.attr('data-aspectRatio'));});}).resize();jQuery(window).resize(function(){slider_li.each(function(){var el=jQuery(this),newWidth=el.parents().width(),oldWidth=el.attr('data-oldWidth');el.removeAttr('height').removeAttr('width').width(newWidth).height(newWidth*el.attr('data-aspectRatio'));});}).resize();});jQuery(document).ready(function(){jQuery('.rslides-sc').each(function(i,element){var instanceID='rslides-sc-'+i;jQuery(element).attr('id',instanceID);var slider=jQuery(element).find('.rslides-inner .slides');var width=jQuery(window).width();if(width>=1140||jQuery('body').hasClass('layout-fixed')){var slider_height=jQuery(element).data('height');}else{var slider_height=jQuery(element).data('height')*(width/1140);}
jQuery(element).find('.rslides').css({'height':slider_height,'max-height':slider_height});jQuery(element).find('.rslides li').css({'height':slider_height,'max-height':slider_height});jQuery(element).find('.rslides img').css({'max-height':slider_height});slider.each(function(){var el=jQuery(this);el.attr('data-aspectRatio',slider.height()/slider.width()).attr('data-oldWidth',el.width());});jQuery(document).ready(function(){slider.each(function(){var el=jQuery(this),newWidth=el.parents().width(),oldWidth=el.attr('data-oldWidth');el.removeAttr('height').removeAttr('width').width(newWidth).height(newWidth*el.attr('data-aspectRatio'));});}).resize();jQuery(window).resize(function(){slider.each(function(){var el=jQuery(this),newWidth=el.parents().width(),oldWidth=el.attr('data-oldWidth');el.removeAttr('height').removeAttr('width').width(newWidth).height(newWidth*el.attr('data-aspectRatio'));});}).resize();});});jQuery(document).ready(function(){jQuery('.rslides-sc').each(function(i,element){var instanceID='rslides-sc-'+i;jQuery(element).attr('id',instanceID);var slider_li=jQuery(element).find('.rslides-inner .slides li');slider_li.each(function(){var el=jQuery(this);el.attr('data-aspectRatio',slider_li.height()/slider_li.width()).attr('data-oldWidth',el.width());});jQuery(document).ready(function(){slider_li.each(function(){var el=jQuery(this),newWidth=el.parents().width(),oldWidth=el.attr('data-oldWidth');el.removeAttr('height').removeAttr('width').width(newWidth).height(newWidth*el.attr('data-aspectRatio'));});}).resize();jQuery(window).resize(function(){slider_li.each(function(){var el=jQuery(this),newWidth=el.parents().width(),oldWidth=el.attr('data-oldWidth');el.removeAttr('height').removeAttr('width').width(newWidth).height(newWidth*el.attr('data-aspectRatio'));});}).resize();});});jQuery(document).ready(function(){jQuery('.thinkupslider-sc').each(function(i,element){var instanceID='thinkupslider-sc-'+i;jQuery(element).attr('id',instanceID);var slider=jQuery(element).find('.rslides-inner .slides');var width=jQuery(window).width();if(width>=1140||jQuery('body').hasClass('layout-fixed')){var slider_height=jQuery(element).data('height');}else{var slider_height=jQuery(element).data('height')*(width/1140);}
jQuery(element).find('.rslides').css({'height':slider_height,'max-height':slider_height});jQuery(element).find('.rslides li').css({'height':slider_height,'max-height':slider_height});jQuery(element).find('.rslides img').css({'max-height':slider_height});slider.each(function(){var el=jQuery(this);el.attr('data-aspectRatio',slider.height()/slider.width()).attr('data-oldWidth',el.width());});jQuery(document).ready(function(){slider.each(function(){var el=jQuery(this),newWidth=el.parents().width(),oldWidth=el.attr('data-oldWidth');el.removeAttr('height').removeAttr('width').width(newWidth).height(newWidth*el.attr('data-aspectRatio'));});}).resize();jQuery(window).resize(function(){slider.each(function(){var el=jQuery(this),newWidth=el.parents().width(),oldWidth=el.attr('data-oldWidth');el.removeAttr('height').removeAttr('width').width(newWidth).height(newWidth*el.attr('data-aspectRatio'));});}).resize();});});jQuery(document).ready(function(){jQuery('.thinkupslider-sc').each(function(i,element){var instanceID='thinkupslider-sc-'+i;jQuery(element).attr('id',instanceID);var slider_li=jQuery(element).find('.rslides-inner .slides li');slider_li.each(function(){var el=jQuery(this);el.attr('data-aspectRatio',slider_li.height()/slider_li.width()).attr('data-oldWidth',el.width());});jQuery(document).ready(function(){slider_li.each(function(){var el=jQuery(this),newWidth=el.parents().width(),oldWidth=el.attr('data-oldWidth');el.removeAttr('height').removeAttr('width').width(newWidth).height(newWidth*el.attr('data-aspectRatio'));});}).resize();jQuery(window).resize(function(){slider_li.each(function(){var el=jQuery(this),newWidth=el.parents().width(),oldWidth=el.attr('data-oldWidth');el.removeAttr('height').removeAttr('width').width(newWidth).height(newWidth*el.attr('data-aspectRatio'));});}).resize();});});