


$(function() {


// CURSOR



var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if(st>150){
        $('.navbar').addClass('show')
    }
  if(st>150){
      $('.navbar').addClass('scrolled')
  }else{
    $('.navbar').removeClass('scrolled')
    
  }
   if (st > lastScrollTop){
    $('.navbar').removeClass('show')
   } else {
    $('.navbar').addClass('show')
   }
   lastScrollTop = st;
});



$('.portfolio-title').paroller()

//CATEGORY IAMGES 
$('.category-image').paroller({
    factorXs: 0.1,
    factorSm: 0.1,
    factorMd: 0.1,
    factorLg: -0.1,
    factorXl: -0.1,
    factor: 0.1,
    type: 'foreground',
    direction: 'horizontal'
    });

//CATEGORIES AROOW
$('.categories-arrow').paroller({
    factorXs: 0.1,
    factorSm: 0.1,
    factorMd: -0.1,
    factorLg: -0.1,
    factorXl: -0.1,
    factor: 0.1,
    type: 'foreground',
    direction: 'vertical'
    });
//ABOUT AROOW
$('.arrow').paroller({
    factorXs: 0.1,
    factorSm: 0.1,
    factorMd: -0.4,
    factorLg: -0.5,
    factorXl: 0.1,
    factor: -0.4,
    type: 'foreground',
    direction: 'vertical',
    transition: 'translate 0.1s ease' 
    });

//CTEGORIES AROOW
$('.line').paroller({
    factorXs: 0.1,
    factorSm: 0.1,
    factorMd: -0.1,
    factorLg: -0.1,
    factorXl: -0.1,
    factor: 0.1,
    type: 'foreground',
    direction: 'vertical',
    transition: 'translate 0.1s ease' 
    });

// SECTION TITLE

$('.section-title').paroller({
    factorXs: 0.1,
    factorSm: 0.1,
    factorMd: -0.4,
    factorLg: -0.5,
    factorXl: 0.1,
    factor: -0.4,
    type: 'foreground',
    direction: 'vertical'
    });



// PAROLLER JS FOOTER
$('.footer').paroller();
$('.building').paroller();



});