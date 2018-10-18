//slick-slider carousel, jQuery plugin

$(document).ready(function(){
    $('.slick-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        focusOnSelect: true,
        arrows: true,
        prevArrow: $('.fa-chevron-left'),
        nextArrow: $('.fa-chevron-right'),
    })
});

