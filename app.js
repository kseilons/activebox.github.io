$(function(){
    'use strict';

    // Fixed Header
    let header= $('#header');
    let intro= $('#intro');
    let introH = intro.innerHeight();
    let navToggle = $('#navToggle');
    let main_nav = $('#main_nav');

    $(window).on('resize', function() {
        introH = intro.innerHeight();
    });

    $(window).on('scroll resize', function(){
        let scrollPos = $(this).scrollTop();
        if (scrollPos > introH) {
            header.addClass('fixion');
        } else {
            header.removeClass('fixion');
        }
    });

    
    // navigation 
    $('[data-scroll]').on('click', function(event){
        event.preventDefault();
        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;
        navToggle.removeClass('active');
        main_nav.removeClass('active');
        $('html, body').animate({
            scrollTop: elementOffset - 58
        }, 700);
    });

    navToggle.on('click', function(event) {
        event.preventDefault();
        navToggle.toggleClass('active');
        main_nav.toggleClass('active');
    })

    let slider = $('#reviewsSlider')
    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll:1,
        fade:true,
        arrows:false, 
        dots: true,
    })

});