$(document).ready(function(){

    $('.main-slider').slick({
        prevArrow: "<img src='img/slider/slide-left_arrow.png' class='prev' alt='1'>",
        nextArrow: "<img src='img/slider/slide-right_arrow.png' class='next' alt='2'>",
        dots: true
      });

    $('.mob_btn-close').on('click', function(e){
      e.preventDefault();
      $('nav').hide();
    })
    $('.mobile-menu_btn').on('click', function(e){
      e.preventDefault();
      $('nav').show();
    })



              //---------  для Дмитрия   -------------
              
    $('.menu-item-icon').on('click', function(e){
      e.preventDefault();
      
      let content = $(this).next();
      // console.log(content);
      content.slideToggle();    //   <= ошибка!!!      toggle()  работает
      $('.nav_first-level ul').not(content).hide();

    })


    



})