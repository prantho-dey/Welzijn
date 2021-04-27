(function ($) {

    'use strict';

	/*------------------------------------
		Mobile Menu
	--------------------------------------*/
	$('.icon').on('click', function(){
		$(this).toggleClass('active');
		$(".mobile-menu").toggleClass("menu-show","10").slideToggle(".menu-show");
		$('a').click(function(){
			$('.icon').removeClass('active');
			$(".mobile-menu").removeClass("menu-show").slideUp(".menu-show");
		});
	});
	/*-------------------------------------------
	    Sticky Header
	--------------------------------------------- */

	let win = $(window);
	let sticky_id = $(".main-header");
	win.on('scroll', function () {
		let scroll = win.scrollTop();
		if (scroll < 245) {
			sticky_id.removeClass("sticky-header");
		} else {
			sticky_id.addClass("sticky-header");
		}
	});


	// One Page Nav
	var top_offset = $('.main-header').height() - 10;
	$('.main-menu nav ul').onePageNav({
		currentClass: 'active',
		scrollOffset: top_offset,
	});	

	/*------------------------------------
        scrollUp
	--------------------------------------*/
	$(window).scroll(function () {
		if ($(this).scrollTop() !== 0) {
			$('#scrollUp').fadeIn();
		} else {
			$('#scrollUp').fadeOut();
		}
    });
    
	$('#scrollUp').on('click', function () {
		$("html, body").animate({scrollTop: 0}, 600);
		return false;
	});




})(jQuery);
