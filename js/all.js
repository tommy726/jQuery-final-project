$(document).ready(function () {
    //list
    $('.list>li>a').click(function (e) { 
        e.preventDefault();
        $(this).parent().find('.listDetail').slideToggle();
        $(this).parent().siblings().find('.listDetail').slideUp();
    });
    
    //swiper
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        autoplay: {
            delay: 2000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
        },
        effect : 'fade',
        fadeEffect: {
            crossFade: true,
        },
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    });

    //lightBox
    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true,
      'positionFromTop': 200,
    })

    //goTop
    function showBtnCondition() {
        if ($(this).scrollTop() > 250) {
            $('.goTop').fadeIn();
            }else{
                $('.goTop').fadeOut();
            }
        }
    $(window).scroll(showBtnCondition);
    $('.goTop').click(function (e) { 
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 500); 
    });
});