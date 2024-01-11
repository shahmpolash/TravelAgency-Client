
(function($) {
    'use strict';

    //===== 01. Main Menu
    function mainMenu() {
        // Variables
        var var_window = $(window),
            navContainer = $('.header-navigation'),
            navbarToggler = $('.navbar-toggler'),
            navMenu = $('.nav-menu'),
            navMenuLi = $('.nav-menu ul li ul li'),
            closeIcon = $('.navbar-close');
        // navbar toggler
        navbarToggler.on('click', function() {
            navbarToggler.toggleClass('active');
            navMenu.toggleClass('menu-on');
        });
        // close icon
        closeIcon.on('click', function() {
            navMenu.removeClass('menu-on');
            navbarToggler.removeClass('active');
        });
        // adds toggle button to li items that have children
        navMenu.find('li a').each(function() {
            if ($(this).next().length > 0) {
                $(this).parent('li').append('<span class="dd-trigger"><i class="fas fa-angle-down"></i></span>');
            }
        });
        // expands the dropdown menu on each click
        navMenu.find('li .dd-trigger').on('click', function(e) {
            e.preventDefault();
            $(this).parent('li').children('ul').stop(true, true).slideToggle(350);
            $(this).parent('li').toggleClass('active');
        });
        // check browser width in real-time
        function breakpointCheck() {
            var windoWidth = window.innerWidth;
            if (windoWidth <= 1199) {
                navContainer.addClass('breakpoint-on');
            } else {
                navContainer.removeClass('breakpoint-on');
            }
        }
        breakpointCheck();
        var_window.on('resize', function() {
            breakpointCheck();
        });
    };

    // Panel Widget
    var panelIcon = $('.off-menu'),
    panelClose = $('.panel-close'),
    panelWrap = $('.offcanvas-panel');
    panelIcon.on('click', function (e) {
        panelWrap.toggleClass('panel-on');
        e.preventDefault();
    });
    panelClose.on('click', function (e) {
        panelWrap.removeClass('panel-on');
        e.preventDefault();
    });
    $(".navbar-toggler,.navbar-close,.off-menu,.panel-close").on('click', function (e) {
        $(".panel-overlay").toggleClass("active");
    });
    // Document Ready
    $(document).ready(function() {
        mainMenu();
    });
    
    //===== Prealoder
    $(window).on('load', function(event) {
        $('.preloader').delay(500).fadeOut('500');
    })
    
    //===== Sticky
    $(window).on('scroll', function(event) {
        var scroll = $(window).scrollTop();
        if (scroll < 190) {
            $(".header-navigation").removeClass("sticky");
        } else {
            $(".header-navigation").addClass("sticky");
        }
    });

    //===== Back to top
    $(window).on('scroll', function(event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });
    
    //===== Counter js
    $('.counter').counterUp({
        delay: 100,
        time: 4000
    });

    //===== Magnific-popup js
    $('.video-popup').magnificPopup({
        type: 'iframe',
        removalDelay: 300,
        mainClass: 'mfp-fade'
    });
    $(".img-popup").magnificPopup({
        type: "image",
         gallery: { 
          enabled: true 
        }
    });
    //===== Nice select js
    $('select').niceSelect();

    //===== Nice number js
    $('input[type="number"]').niceNumber(); 

    
    //===== Slick slider js
    var sliderArrows = $('.portfolio-arrows-one');
    $('.portfolio-slider-one').slick({
		dots: false,
		arrows: true,
        infinite: true,
		autoplaySpeed: 1500,
        autoplay: true,
		slidesToShow: 3,
        slidesToScroll: 1,
        appendArrows: sliderArrows,
        prevArrow: '<div class="prev"><i class="fal fa-long-arrow-left"></i></div>',
		nextArrow: '<div class="next"><i class="fal fa-long-arrow-right"></i></div>',
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.clients-slide-one').slick({
		dots: false,
		arrows: false,
        infinite: true,
		autoplaySpeed: 1500,
        autoplay: true,
		slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    });
    $('.testimonial-slide-one').slick({
		dots: false,
		arrows: true,
        infinite: true,
		autoplaySpeed: 1500,
        autoplay: true,
		slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        prevArrow: '<div class="prev"><i class="fal fa-long-arrow-left"></i></div>',
		nextArrow: '<div class="next"><i class="fal fa-long-arrow-right"></i></div>',
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    arrows: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false
                }
            }
        ]
    });
    $('.portfolio-post-gallery-slide').slick({
		dots: false,
		arrows: false,
        infinite: true,
		autoplaySpeed: 1500,
        autoplay: true,
		slidesToShow: 3,
		slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.shop-big-slider').slick({
		dots: false,
		arrows: false,
		infinite: true,
		autoplaySpeed: 1500,
        autoplay: true,
		asNavFor: '.shop-thumb-slider',
        fade: true,
		slidesToShow: 1,
		slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false
                }
            }
        ]
    });
    $('.shop-thumb-slider').slick({
		dots: false,
		arrows: false,
		autoplaySpeed: 1500,
		focusOnSelect: true,
        vertical: true,
        autoplay: true,
		asNavFor: '.shop-big-slider',
		slidesToShow: 3,
		slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    vertical: false
                }
            }
        ]
    });
    $('.post-gallery-slider').slick({
		dots: false,
		arrows: true,
		autoplaySpeed: 1500,
        autoplay: true,
        prevArrow: '<div class="prev"><i class="far fa-arrow-left"></i></div>',
		nextArrow: '<div class="next"><i class="far fa-arrow-right"></i></div>',
		slidesToShow: 1,
		slidesToScroll: 1
    });
    //===== Isotope js
    $('#masonry-portfolio-v1').imagesLoaded( function() {
        var $grid = $('.masonry-row').isotope({
            itemSelector: '.portfolio-column',
            percentPosition: true,
            masonry: {
                columnWidth: 1
            }
        });
    });
    $('#masonry-portfolio-v2').imagesLoaded( function() {
        // items on button click
        $('.filter-btn').on('click', 'li', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });
        // menu active class
        $('.filter-btn li').on('click', function (e) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            e.preventDefault();
        });
        var $grid = $('.masonry-row').isotope({
            itemSelector: '.portfolio-column',
            percentPosition: true,
            masonry: {
                columnWidth: 1
            }
        });
    });
    $('#masonry-gallery-one').imagesLoaded( function() {
        var $grid = $('.gallery-row').isotope({
            itemSelector: '.gallery-column',
            percentPosition: true,
            masonry: {
                columnWidth: 1
            }
        });
    });
    $('#masonry-gallery-two').imagesLoaded( function() {
        var $grid = $('.gallery-row').isotope({
            itemSelector: '.gallery-column',
            percentPosition: true,
            masonry: {
                columnWidth: 0
            }
        });
    });
    // Price ranger
    $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 300,
        values: [ 10, 250 ],
        slide: function( event, ui ) {
          $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
        " - $" + $( "#slider-range" ).slider( "values", 1 ) );
    
    // easypiecahrt js
    $('.chart').easyPieChart({
        barColor: function() {
            var ctx = this.renderer.getCtx();
            var canvas = this.renderer.getCanvas();
            var gradient = ctx.createLinearGradient(0,0,canvas.width,0);
            gradient.addColorStop(0, "#fd6151");
            gradient.addColorStop(1, "#ff774a");
            return gradient;
        },
        size: 175,
        trackColor: '#eeeeee',
        easing: 'easeInOut',
        scaleColor: false,
        lineCap: 'circle',
        lineWidth: 20,
        trackWidth: 4,
        animate: 4000
    });

    // Wow js
    new WOW().init();

})(window.jQuery);