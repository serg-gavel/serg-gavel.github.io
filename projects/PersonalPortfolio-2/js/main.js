$("#menu-close").click(function(e){e.preventDefault();$("#sidebar-wrapper").toggleClass("active");});$("#menu-toggle").click(function(e){e.preventDefault();$("#sidebar-wrapper").toggleClass("active");});$(function(){$('a[href*=#]:not([href=#],[data-toggle],[data-target],[data-slide])').click(function(){if(location.pathname.replace(/^//,'')==this.pathname.replace(/^//,'')||location.hostname==this.hostname){var target=$(this.hash);target=target.length?target:$('[name='+this.hash.slice(1)+']');if(target.length){$('html,body').animate({scrollTop:target.offset().top},1000);return false;}}});});var fixed=false;$(document).scroll(function(){if($(this).scrollTop()>250){if(!fixed){fixed=true;$('#go-top').show("slow",function(){$('#go-top').css({position:'fixed',display:'block'});});}}else{if(fixed){fixed=false;$('#go-top').hide("slow",function(){$('#go-top').css({display:'none'});});}}});var onMapMouseleaveHandler=function(event){var that=$(this);that.on('click',onMapClickHandler);that.off('mouseleave',onMapMouseleaveHandler);that.find('iframe').css("pointer-events","none");};var onMapClickHandler=function(event){var that=$(this);that.off('click',onMapClickHandler);that.find('iframe').css("pointer-events","auto");that.on('mouseleave',onMapMouseleaveHandler);};$('.map').on('click',onMapClickHandler);