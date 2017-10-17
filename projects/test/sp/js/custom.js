$(document).ready(function() {
    // $( '.drop-down__menu-link>a' ).click(function( event ) {
    //     event.preventDefault();
    //
    // });

	$headerNav = $('.header-nav');

    $('.link__drop-down').hover(function(){
        $('.drop-down').removeClass('hidden');
    });
    $headerNav.hover(function(){
        $('.drop-down').addClass('hidden');
    });
    $('.link__drop-down2').hover(function(){
        $('.drop-down2').removeClass('hidden');
    });
    $headerNav.hover(function(){
        $('.drop-down2').addClass('hidden');
    });

    $('.slick-slider').slick({
        autoplay:true,
        autoplaySpeed:3000,
        dots:true
    });
    $('.icn-hamburger').click(function (e) {
        e.preventDefault();
        $('.mobile-nav__list').toggleClass('hidden');
        $('.mobile-nav__search').addClass('hidden');
        $('.mobile-nav__contacts').addClass('hidden');
    });
    $('.icn-search').click(function (e) {
        e.preventDefault();
        $('.mobile-nav__search').toggleClass('hidden');
        $('.mobile-nav__list').addClass('hidden');
        $('.mobile-nav__contacts').addClass('hidden');
    });
    $('.icn-contacts').click(function (e) {
        e.preventDefault();
        $('.mobile-nav__contacts').toggleClass('hidden');
        $('.mobile-nav__list').addClass('hidden');
        $('.mobile-nav__search').addClass('hidden');
    });
    $('.mobile-nav__drop').click(function () {
        $('.mobile-drop').toggleClass('hidden');
    });
    $('.link__mobile-drop2').click(function () {
        $('.mobile-drop2').toggleClass('hidden');
    });


});

$(window).load(function(){
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
        $('body').addClass('ios');
    } else{
        $('body').addClass('web');
    };
    $('body').removeClass('loaded');
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

    $('.button-nav').click(function(){
        $(this).toggleClass('active'),
            $('.main-nav-list').slideToggle();
        return false;
    });

    /* components */

    /*

    if($('.styled').length) {
        $('.styled').styler();
    };
    if($('.fancybox').length) {
        $('.fancybox').fancybox({
            margon  : 10,
            padding  : 10
        });
    };
    if($('.slick-slider').length) {
        $('.slick-slider').slick({
            dots: true,
            infinite: false,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: "unslick"
                }
            ]
        });
    };
    if($('.scroll').length) {
        $(".scroll").mCustomScrollbar({
            axis:"x",
            theme:"dark-thin",
            autoExpandScrollbar:true,
            advanced:{autoExpandHorizontalScroll:true}
        });
    };

    */

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
$(window).bind('load', handler);
$(window).bind('resize', handler);


