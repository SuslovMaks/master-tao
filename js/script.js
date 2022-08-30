$('.first-screen-container').slick({
    dots: true,
    prevArrow: $('.left-arrow-slider'),
    nextArrow: $('.right-arrow-slider'),
});


$('.slick-dots li').html('<a class="dot-slider" href="#"></a>');
$('.slick-dots li.slick-active').html('<a class="dot-active-slider" href="#"></a>');
