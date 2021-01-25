$(document).ready(function () {
    //lightbox
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
      })
    //swiper
    var swiper = new Swiper(".swiper-container", {
        loop: true,
        speed: 1000,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        pagination: {
          el: ".swiper-pagination"
        },
        effect:'cube',
        autoplay: {
          delay: 3000,
        },
      });
    //droplist
    $('.menu>li>a').click(function (e) { 
      e.preventDefault();
      $(this).parent().find('ul').slideToggle();
      $(this).parent().siblings().find('ul').slideUp()
      $(this).toggleClass('active').parent().siblings().find('a').removeClass('active');
    });
    //top
    $('.top>a').click(function (e) { 
      e.preventDefault();
      $('html,body').animate({
        scrollTop:0
      },500); 
    });
    function showBtnCondition() {
      if ($(this).scrollTop() > 200) {
        $('#gotop').fadeIn();
          } else {
           $('#gotop').fadeOut();
         }
       }
   $(window).scroll(showBtnCondition);
});