$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        responsiveClass: true,
        nav: false,
        dots: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1,

            },
            600: {
                items: 3,

            },
            1000: {
                items: 4,

                loop: false
            }
        }
    })
    $('.menu-toggle').click(function(){
$('.main-menu').fadeToggle();
    });
});