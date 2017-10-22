$(document).ready(function() {
    $('.hamburger').click(function () {
        $('.mobile-nav').toggleClass('hidden');
    });


    $('a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1200, function() {

                    });
                }
            }
        });

});



$(window).on('load', function () {
    var body = $('body');
    // if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
    // 	body.addClass('ios');
    // } else{
    // 	body.addClass('web');
    // }
    body.removeClass('loaded');
});
/* viewport width */
function viewport(){
	var e = window,
		a = 'inner';
	if ( !( 'innerWidth' in window ) )
	{
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
}
/* viewport width */
$(function(){
	/* placeholder*/
	$('input, textarea').each(function(){
 		var placeholder = $(this).attr('placeholder');
 		$(this).focus(function(){ $(this).attr('placeholder', '');});
 		$(this).focusout(function(){
 			$(this).attr('placeholder', placeholder);
 		});
 	});
	/* placeholder*/

	// $('.button-nav').click(function(){
	// 	$(this).toggleClass('active'),
	// 	$('.main-nav-list').slideToggle();
	// 	return false;
	// });

	/* components */


	// if($('.styled').length) {
	// 	$('.styled').styler();
	// };
	// if($('.fancybox').length) {
	// 	$('.fancybox').fancybox({
	// 		margon  : 10,
	// 		padding  : 10
	// 	});
	// };
	// if($('.slick-slider').length) {
	// 	$('.slick-slider').slick({
	// 		dots: true,
	// 		infinite: false,
	// 		speed: 300,
	// 		slidesToShow: 4,
	// 		slidesToScroll: 4,
	// 		responsive: [
	// 			{
	// 			  breakpoint: 1024,
	// 			  settings: {
	// 				slidesToShow: 3,
	// 				slidesToScroll: 3,
	// 				infinite: true,
	// 				dots: true
	// 			  }
	// 			},
	// 			{
	// 			  breakpoint: 600,
	// 			  settings: "unslick"
	// 			}
	// 		]
	// 	});
	// };
	// if($('.scroll').length) {
	// 	$(".scroll").mCustomScrollbar({
	// 		axis:"x",
	// 		theme:"dark-thin",
	// 		autoExpandScrollbar:true,
	// 		advanced:{autoExpandHorizontalScroll:true}
	// 	});
	// };



	/* components */



});

var handler = function(){

	var height_footer = $('footer').height();
	var height_header = $('header').height();
	//$('.content').css({'padding-bottom':height_footer+40, 'padding-top':height_header+40});


	var viewport_wid = viewport().width;
	var viewport_height = viewport().height;

	if (viewport_wid <= 991) {

	}

};
// $(window).bind('load', handler);
// $(window).bind('resize', handler);



