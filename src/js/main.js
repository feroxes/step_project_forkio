let burger = document.getElementById('menu');
let dropDowm = document.getElementById('menu_drop-down');
let bar = document.getElementById('bar');
let times = document.getElementById('times');

burger.addEventListener('mouseover', show);
burger.addEventListener('mouseleave', hide);

function show() {
    dropDowm.style.display = 'block';
    bar.style.display = 'none';
    times.style.display = 'block';
}
function hide(){
    dropDowm.style.display = 'none';
    bar.style.display = 'block';
    times.style.display = 'none';
}


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