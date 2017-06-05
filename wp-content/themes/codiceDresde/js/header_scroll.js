// Hide .header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
         $('.header').removeClass('nav-down').addClass('nav-up');
         $(".BarraNavegacionB").hide();
         $(".BarraNavegacion").hide();
         $(".menuGeneral").hide();
         $(".btn_inicio").removeClass("btn_incio_over");
         $(".BarraBusqueda").hide();
         $(".btn_search").removeClass("btn_search_over");
         $(".seccion_Login_on").hide();
         
         detectmob();

              



         
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('.header').removeClass('nav-up').addClass('nav-down');

        }
    }
    
    lastScrollTop = st;
}


function detectmob() { 
 if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
 ){
    //$(".header").css("position","relative");
    return true;
  }
 else {
    $(".header").css("position","fixed");
    $(".seccion_Login").hide();
    return false;
  }
}