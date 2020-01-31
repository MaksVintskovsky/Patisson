// let range = document.querySelectorAll('.ui-state-default')
// let rangeNum = document.querySelector('.range-num')
// let rangeVal = document.getElementById('slider-max')
// for(let i = 0 ; i < range.length ; i++){
//   range[i].addEventListener('click', function(){
//     console.log(rangeVal.value);
//     rangeNum.innerHTML = rangeVal.value;
//   }) ;
  
// };


$(document).ready(function(){

  let menu = $('nav'),
    bg = $('.bg-popup'),
    popup = $('.popup'),
    filter = $('.filter');


  $( "#slider-range" ).slider({
    range: true,
    min: 0,
    max: 20000,
    values: [ 0, 20000 ],
    slide: function( event, ui ) {
      $( "#slider-min" ).val( ui.values[ 0 ] );
      $( "#slider-max" ).val( ui.values[ 1 ] );
    }
  });

  // $( ".ui-slider-handle" ).on('mousemove', function(e){
  //   console.log($( "#slider-max" ).val())
  //   $( ".ui-slider-handle::after" ).css( content , $( "#slider-max" ).val())
  // });
  // $( ".range-num" ).

  $( "#slider-min" ).val( $( "#slider-range" ).slider( "values", 0 ) );
  $( "#slider-max" ).val( $( "#slider-range" ).slider( "values", 1 ) );



  $('.main-slider').slick({
    prevArrow: "<img src='img/slider/slide-left_arrow.png' class='prev' alt='1'>",
    nextArrow: "<img src='img/slider/slide-right_arrow.png' class='next' alt='2'>",
    dots: true,
    // infinite: false,
    draggable: true
    // fade: true
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
  // $('.views-slider').slick({
  //   prevArrow: "<img src='img/slider/arr-violet_left.png' class='product-slider-prev' alt='1'>",
  //   nextArrow: "<img src='img/slider/arr-violet_right.png' class='product-slider-next' alt='2'>",
  //   slidesToShow: 3,
  //   infinite: true,
  //   draggable: true,
  //   responsive: [
  //     {
  //       breakpoint: 1200,
  //       settings: {
  //         slidesToShow: 3
  //       }
  //     },
  //     {
  //       breakpoint: 1130,
  //       settings: {
  //         slidesToShow: 2
  //       }
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 1
  //       }
  //     }
  //   ]
  // });
  $('.card-slider-top').slick({
    prevArrow: "<img src='img/slider/arr-violet_left.png' class='prev' alt='1'>",
    nextArrow: "<img src='img/slider/arr-violet_right.png' class='next' alt='2'>",
    slidesToShow: 1,
    fade: true,
    infinite: true,
    draggable: true,
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
        }
      }
    ]
  });
  $('.card-slider-bottom').slick({
    dots: false,
    infinite: true,
    draggable: true,
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
    if(e.target != menu[0] && menu.has(e.target).length === 0 && e.target != popup && popup.has(e.target).length === 0 && e.target != filter && filter.has(e.target).length === 0) {
      menu.hide();
      bg.hide(200);
      popup.hide(200);
      filter.hide(200);
    }
  });

      // :::::::::::: Menu :::::::::::::
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

    // :::::::::::: Popup :::::::::::::
  $('.pers-cab').on('click', function(){
    $('.popup_enter').show();
    bg.show();
  });
  $('.btn_recall').on('click', function(){
    $('.popup_recall').show();
    bg.show();
  });
  $('.recall').on('click', function(){
    $('.popup_recall').show();
    bg.show();
  });
  $('.basket_btn').on('click', function(){
    $('.basket').toggle();
  });
  
  $('.popup-close').on('click', function(){
    popup.hide();
    bg.hide(200);
  });

  $('.main-tel').on('click', function(){
    $('.main-tel-recall').toggle(300);
  });
  $('.main-tel-recall').on('mouseleave', function(){
    $('.main-tel-recall').slideUp(300);
  });

  $('.brands-btn').on('click', function(){
    $('#row-hide').css('display', 'flex');
    $(this).hide();
  });
  
  $(".tab-content").not(":first").hide();
  $(".card-tab").click(function() {
    $(".card-tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".tab-content").hide().eq($(this).index()).fadeIn();
  }).eq(0).addClass("active");
  
    // :::::::::::: Filter :::::::::::::
  $('.btn-filtr').on('click', function(e){
    e.preventDefault();
    $('.filter-title').addClass('active');
    filter.show();
    bg.show(100);
  });
  $('.filter-title').on('click', function(e){
    e.preventDefault();
    $(this).toggleClass('active');
    $(this).next('.filter-section').slideToggle(200); 
  });
  $('.mob_btn-close').on('click', function(e){
    e.preventDefault();
    menu.hide();
    filter.hide();
    bg.hide(200);
  });
  
});