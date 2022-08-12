$(document).ready(function () {
    // header sticky
    $(window).scroll(function(){
        var headerHeight = $('header').height();

        if ($(window).scrollTop() > headerHeight) {
            $('header').addClass('sticky');
        } else {
            $('header').removeClass('sticky');
        }
    });

    // hamburger menu 
    $('.menu-wrapper').click(function() {
        $(this).toggleClass('opened');
    });

    // best products carousel
    $('.best-products-carousel').owlCarousel({
        loop: true,
        dots: false,
        autoplay: false,
        nav: true,
        navContainer: '#best-products .custom-nav',
        navText: ['<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width="32" height="32"><g fill="none" stroke-width="2"><path d="m11.5 20.5-4.73-4.73 4.73-4.77"></path><path d="m25.23 15.77h-17" stroke-linecap="square"></path></g></svg>','<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width="32" height="32"><g fill="none" stroke-width="2"><path d="m20.5 11 4.73 4.73-4.73 4.77"></path><path d="m23.77 15.77h-17" stroke-linecap="square"></path></g></svg>'],
        margin: 4,
        responsive:{
            0:{
                items:1
            },
            768:{
              items:2
            },
            992:{
              items:3
            },
            1400:{
                items:4
            }
        }
    });

    // fav product 
    $('.heart').click(function() {
        $(this).toggleClass('fav');
    });

    // categories carousels
    $('.cat-carousel').owlCarousel({
        loop: true,
        dots: false,
        autoplay: false,
        nav: false,
        mouseDrag: false,
        touchDrag: false,
        margin: 24,
        smartSpeed: 2000,
        responsive:{
            0:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            },
            1400:{
                items:5
            }
        }
    });

    var mousewheel = $('.mouse-wheel');
    var owl1 = $('.cat-carousel1');
    var owl2 = $('.cat-carousel2');

    
    var timestamp_mousewheel = 0; //Define it not in a function should
    mousewheel.on('mousewheel', function (e) {
        var d = new Date();
        if((d.getTime() - timestamp_mousewheel) > 1000){ //minimum time difference

            timestamp_mousewheel = d.getTime();
            
            if (e.originalEvent.wheelDelta < 0) {
                owl1.trigger('next.owl');
                owl2.trigger('prev.owl');
            } else {
                owl1.trigger('prev.owl');
                owl2.trigger('next.owl');
            }
            e.preventDefault();
        }
    });


    // categories carousels
    $('.news-carousel').owlCarousel({
        loop: false,
        autoplay: false,
        mouseDrag: false,
        touchDrag: false,
        dots: true,
        dotsContainer: '#news .slide-num',
        nav: true,
        navContainer: '#news .custom-nav',
        navText: ['<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width="32" height="32"><g fill="none" stroke-width="2"><path d="m11.5 20.5-4.73-4.73 4.73-4.77"></path><path d="m25.23 15.77h-17" stroke-linecap="square"></path></g></svg>','<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width="32" height="32"><g fill="none" stroke-width="2"><path d="m20.5 11 4.73 4.73-4.73 4.77"></path><path d="m23.77 15.77h-17" stroke-linecap="square"></path></g></svg>'],
        items: 1
    });


});