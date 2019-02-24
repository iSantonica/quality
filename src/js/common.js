(function($) {
"use strict";

$(document).ready(function () {

   // $(window).scroll(function () {
   //      if ($(this).scrollTop() > 100) {
   //          $('.header').addClass('fixed-header');
   //      } else {
   //          $('.header').removeClass('fixed-header');
   //      }
   //  });

  $('.main-banner-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    prevArrow: '.slider-arr-left1',
    nextArrow: '.slider-arr-right1'
  });
  
  $('.projects-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    prevArrow: '.slider-arr-left2',
    nextArrow: '.slider-arr-right2'
  });
  
  $('.jobs-title').on('click', function () {
    $(this).siblings('.jobs-inner').slideToggle();
  });
  
  $('.menu-caption').on('click', function () {
    $(this).siblings('ul').slideToggle();
    $(this).closest('li').toggleClass('active');
  });
  
  $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  });

  

   $('a[href^="#"], *[data-href^="#"]').on('click', function(e){
            e.preventDefault();
            var t = 1000;
            var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
            $('html,body').stop().animate({ scrollTop: $(d).offset().top }, t);
        });


  if(window.matchMedia("(max-width: 767px)").matches){
    $('.menu-btn').click(function(){;
      $('.main-menu-wrap').slideToggle();
      $(this).toggleClass('act');
    });
  
    $('.why-we-slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      prevArrow: '.slider-arr-left3',
      nextArrow: '.slider-arr-right3'
    });
  } 

  if(window.matchMedia("(max-width: 1024px)").matches){
    $('.menu-btn').click(function(){;
      $('.main-menu-wrap').addClass('active');
    });
  
    $('.close-menu').click(function(){;
      $('.main-menu-wrap').removeClass('active');
    });
  }
  
  $( window ).resize(function() {
  
  
  
  }); //end resize



});


})(jQuery);




