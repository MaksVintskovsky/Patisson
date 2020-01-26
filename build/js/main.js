$(document).ready(function(){

  let menu = $('nav')
  let bg = $('.bg-popup')
  let popup = $('.popup')

  $('.main-slider').slick({
    prevArrow: "<img src='img/slider/slide-left_arrow.png' class='prev' alt='1'>",
    nextArrow: "<img src='img/slider/slide-right_arrow.png' class='next' alt='2'>",
    dots: true
  });
  $('.product-slider').slick({
    prevArrow: "<img src='img/slider/arr-violet_left.png' class='product-slider-prev' alt='1'>",
    nextArrow: "<img src='img/slider/arr-violet_right.png' class='product-slider-next' alt='2'>",
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 940,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
  $('.views-slider').slick({
    prevArrow: "<img src='img/slider/arr-violet_left.png' class='product-slider-prev' alt='1'>",
    nextArrow: "<img src='img/slider/arr-violet_right.png' class='product-slider-next' alt='2'>",
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1130,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
  $('.card-slider-top').slick({
    prevArrow: "<img src='img/slider/arr-violet_left.png' class='prev' alt='1'>",
    nextArrow: "<img src='img/slider/arr-violet_right.png' class='next' alt='2'>",
    slidesToShow: 1,
    fade: true,
    asNavFor: '.card-slider-bottom',
    focusOnSelect: true,
    initialSlide: 3,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          dots: false,
        }
      },
      {
        breakpoint: 992,
        settings: {
          dots: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          dots: true,
          // arrow: false
        }
      }
    ]
  });
  $('.card-slider-bottom').slick({
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.card-slider-top',
    focusOnSelect: true

  });


  $('.mobile-menu_btn').on('click', function(e){
    e.preventDefault();
    menu.show();
    bg.show(100);
    
  });
  $('.mob_btn-close').on('click', function(e){
    e.preventDefault();
    menu.hide();
    bg.hide(200);
  });
  $(document).on('mouseup', function(e){
    if(e.target != menu[0] && menu.has(e.target).length === 0 && e.target != popup && popup.has(e.target).length === 0) {
      menu.hide();
      bg.hide(200);
      popup.hide(200);
    }
  });
      
  $('.menu-item').on('click', function(e){
    e.preventDefault();
    // Add the correct active class
    if($(this).closest('.nav_first-level').hasClass('active')) {
      // Remove active classes
      $('.nav_first-level').removeClass('active');
    } else {
      // Remove active classes
      $('.nav_first-level').removeClass('active');

      // Add the active class
      $(this).closest('.nav_first-level').addClass('active');
    }
    let $content = $(this).next();
    $content.slideToggle(300); 
    $('.nav_first-level ul').not($content).slideUp(300);

  });
  $('.pers-cab').on('click', function(){
    $('.popup_enter').show();
    bg.show()
  });
  $('.btn_recall').on('click', function(){
    $('.popup_recall').show();
    bg.show()
  });
  $('.recall').on('click', function(){
    $('.popup_recall').show();
    bg.show()
  });
  $('.basket_btn').on('click', function(){
    $('.basket').toggle();
  })
  
  $('.popup-close').on('click', function(){
    popup.hide();
    bg.hide(200)
  });

  $('.main-tel').on('mouseenter', function(){
    $('.main-tel-recall').slideDown(300);
  });
  $('.main-tel').on('mouseleave', function(){
    $('.main-tel-recall').slideUp(300);
  });

  $('.brands-btn').on('click', function(){
    $('#row-hide').css('display', 'flex');
    $(this).hide()
  });
  
  $(".tab-content").not(":first").hide();
  $(".card-tab").click(function() {
    $(".card-tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".tab-content").hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass("active");
  
})