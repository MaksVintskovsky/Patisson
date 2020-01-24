$(document).ready(function(){

  let menu = $('nav')
  let bg = $('.bg-mobile')

  $('.main-slider').slick({
    prevArrow: "<img src='img/slider/slide-left_arrow.png' class='prev' alt='1'>",
    nextArrow: "<img src='img/slider/slide-right_arrow.png' class='next' alt='2'>",
    dots: true
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

    if(e.target != menu[0] && menu.has(e.target).length === 0 ) {
      menu.hide();
      bg.hide(200);
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
  });
  $('.btn_recall').on('click', function(){
    $('.popup_recall').show();
  });
  // $('.popup-close').on('click', function(){
  //   $('.popup').hide();
  // });
  
  $('.popup-close').on('click', function(){
    $('.popup').hide();
  });

  $('.main-tel').on('mouseenter', function(){
    $('.main-tel-recall').slideDown(300);
  });
  $('.main-tel').on('mouseleave', function(){
    $('.main-tel-recall').slideUp(300);
  });
  
  
})