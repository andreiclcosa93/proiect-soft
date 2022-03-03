$(document).ready(function(){
	var nav = $('.nav-bar');
	$('.mobile-nav').click(function(){
			nav.slideToggle();
	});
	
	$(window).resize(function(){
		if($(window).width() >= 688){
			nav.show();
		}
		else
		{
			nav.hide();
		}
	});
});