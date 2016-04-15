// JavaScript Document

$(document).ready(function() {
    $('.deploy-submenu').click(function(){
        $(this).toggleClass('active-submenu');
        $(this).parent().find('.submenu').slideToggle(200);
        return false;
    });

		$('.deploy-submenu-2').click(function() {
			$(this).toggleClass('active-submenu-2');
			$(this).parent().find('.submenu-2').slideToggle(200);
			return false;
		});
});

  $('#notif').click(function(){
  if($('.mdl-layout__drawer-right').hasClass('active')){
    $('.mdl-layout__drawer-right').removeClass('active');
  }
  else{
    $('.mdl-layout__drawer-right').addClass('active');
  }
  });

  $('.mdl-layout__obfuscator-right').click(function(){
  if($('.mdl-layout__drawer-right').hasClass('active')){
    $('.mdl-layout__drawer-right').removeClass('active');
  }
  else{
    $('.mdl-layout__drawer-right').addClass('active');
  }
  });
