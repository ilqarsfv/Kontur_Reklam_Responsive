let cards = document.querySelectorAll(".custom_card")
let main = document.querySelector("main")
let footer = document.querySelector("footer")
let arr = ['slider3.jpeg', 'slider3.jpeg', 'slider3.jpeg', 'slider3.jpeg', 'slider3.jpeg', 'slider3.jpeg', 'slider3.jpeg', 'slider3.jpeg']
let icon = document.getElementById("burger_icon")
let burger = document.getElementById("burger_box")
let burgerIcon = document.querySelector(".fa-angle-down")
icon.addEventListener("click", function() {
    burgerIcon.classList.toggle("fa-angle-up")
    burger.classList.toggle("click")
    main.classList.toggle("none")
    footer.classList.toggle("none")
})
for(let i=0; i<arr.length; i++) {
    cards[i].style.backgroundImage = `url('img/${arr[i]}')` 
    cards[i].style.transition = ".5s"
}


    // active page 
    // let navLinks = document.querySelectorAll('.nav-item .nav-link');

    
    // navLinks.forEach(link=>{
    //     let location = window.location.href
    //     let link = link.href
        
    //     if(link===location) {
    //         item.parentElement.classList.add('active')
    //     }
    // });







    // // active langs 
    // document.querySelector('.change-lang-wrap').addEventListener('click', function(e) {
    //     e.currentTarget.classList.toggle('active');
    //     e.stopPropagation();
    // });


    // //click outside
    // let body = document.querySelector('body');

    // body.addEventListener('click',function(e){
    //     document.querySelector('.change-lang-wrap').classList.remove('active');
    // });


    // // projects  
    // $('.projects-carousel').owlCarousel({
    //     center: true,
    //     loop: true,
    //     margin: 20,
    //     items: 1.5,
    //     dots: true,
    //     nav: true,
    //     responsive:{
    //           0:{
    //               items:1
    //           },
    //           600:{
    //               items:2
    //           },
    //           1000:{
    //               items:1.5
    //       }
    //     }
    //   });

    // //  Main Carousel
    // var myCarousel = document.querySelector('#carouselExampleControls')
    // var carousel = new bootstrap.Carousel(myCarousel, {
    //     interval: 2000,
    //     wrap: false
    // });















    // $('.main-carousel').owlCarousel({
    //     items: 1,
    //     loop: true,
    //     dots: true,
    //     autoplay: true,
    //     nav: true,
    //     autoplayTimeout: 5000,
    //     dotsContainer: '.carousel-dots',
    //     animateOut: 'fadeOut',
    //     navText : ["<img src='/img/main-left-arrow.svg'>","<img src='/img/main-right-arrow.svg'>"]
    // });
   
    // var owl = $('.main-carousel');

    // $('.owl-prev').on('click', function() {
    //     owl.trigger('stop.owl.autoplay'); 
    // });

    // $('.owl-prev').on('mouseleave', function() {
    //     owl.trigger('play.owl.autoplay'); 
    // });
    
    // $('.owl-next').on('click', function() {
    //     owl.trigger('stop.owl.autoplay'); 
    // });

    // $('.owl-next').on('mouseleave', function() {
    //     owl.trigger('play.owl.autoplay'); 
    // });


    // // when click change lang
    // document.getElementsByClassName('change-lang')[1].addEventListener("click", function myFunction() {
    //     console.log('1');
    //     let langList = document.querySelector('footer .change-lang-wrap .lang-list');
    //     let compStyles = window.getComputedStyle(langList).getPropertyValue('right');
    //     document.getElementsByClassName('change-lang')[1].classList.toggle('active');
    //     if (compStyles === "0px") {
    //         langList.style.opacity = "1";
    //         langList.style.right = "117px";
    //     } else {
    //         langList.style.opacity = "0";
    //         langList.style.right = "0px";
    //     }
    // });


    // // active page 
    // $('.myMenu .nav-link').each(function () {
    //     var location = window.location.href; 
    //     var link = this.href; 
    //     if(location == link) {              
    //     $(this).addClass('active');  
    //     }
    // });
    
    // $('footer .footer-list a').each(function () {
    //     var location = window.location.href; 
    //     var link = this.href; 
    //     if(location == link) {              
    //     $(this).parent().addClass('active');  
    //     }
    // });


    // // fancybox
    // $('.highslide').fancybox({
    //     loop : true
    // });

    // $('.highslide').attr('data-fancybox','gallery');
        

    // // hamburger menu 
    // $('.menu-wrapper').click(function(e) {
    //     e.stopPropagation();
    //     if(!($(this).hasClass('open'))) {
    //         $(this).addClass('open');
    //         $('header').addClass('open');
    //         $('header #myMenu').show();
    //         $('header #myMenu .navbar-nav').animate({right: '0'}, 300, 'linear');
    //         $('body').css('overflow-y', 'hidden');
    //     } else {
    //         $('body').css('overflow-y', 'visible');
    //         $('header #myMenu .navbar-nav').animate({right: '-100%'}, 300, 'linear');
    //         $(this).removeClass('open');
    //         $('header').removeClass('open');
    //         setTimeout(function() {
    //             $('header #myMenu').hide();
    //         }, 200); 
    //     }
    // });

    // $('header .close-menu').click(function(e) {
    //     e.stopPropagation();
    //     $('body').css('overflow-y', 'visible');
    //     $('.menu-wrapper').removeClass('open');
    //     $('header').removeClass('open');
    //     $('header #myMenu .navbar-nav').animate({right: '-100%'}, 300, 'linear');
    //     setTimeout(function() {
    //         $('header #myMenu').hide();
    //     }, 200);
    // });

    // $('header #myMenu .navbar-nav').click(function(e) {
    //     e.stopPropagation();
    // });


    // // when click outside
    // $('body').click(function() {
    //     $('body').css('overflow-y', 'visible');
    //     $('.menu-wrapper').removeClass('open');
    //     $('header').removeClass('open');
    //     $('header #myMenu .navbar-nav').animate({right: '-100%'}, 300, 'linear');
    //     setTimeout(function() {
    //         $('header #myMenu').hide();
    //     }, 200);
    // });   


