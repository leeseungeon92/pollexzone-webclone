$(window).on('load', function (){
    $('.header_header').addClass('load');
    $('.pollexzone_txt span').addClass('gogo');
    $('.btn_more').addClass('showshow');
});

// 센터현황 hover 이벤트

$('.sec4_li1').hover(function(){
    $('#sec4_innerimg').addClass('sec4_img_wrap')
    $('#sec4_innerimg').removeClass('sec4_img_wrap2')
    $('#sec4_innerimg').removeClass('sec4_img_wrap3')
    $('#sec4_img1 p').addClass('txt_on')
    $('#sec4_img2 p').removeClass('txt_on')
    $('#sec4_img3 p').removeClass('txt_on')
    $('#mapo').css('display','block')
    $('#mapo2').css('display','block')
    $('#gongduk').css('display','none')
    $('#gongduk2').css('display','none')
    $('#seoul').css('display','none')
    $('#seoul2').css('display','none')
})

$('.sec4_li2').hover(function(){
    $('#sec4_innerimg').addClass('sec4_img_wrap2')
    $('#sec4_innerimg').removeClass('sec4_img_wrap')
    $('#sec4_innerimg').removeClass('sec4_img_wrap3')
    $('#sec4_img1 p').removeClass('txt_on')
    $('#sec4_img2 p').addClass('txt_on')
    $('#sec4_img3 p').removeClass('txt_on')
    $('#mapo').css('display','none')
    $('#mapo2').css('display','none')
    $('#gongduk').css('display','block')
    $('#gongduk2').css('display','block')
    $('#seoul').css('display','none')
    $('#seoul2').css('display','none')
})

$('.sec4_li3').hover(function(){
    $('#sec4_innerimg').removeClass('sec4_img_wrap')
    $('#sec4_innerimg').removeClass('sec4_img_wrap2')
    $('#sec4_innerimg').addClass('sec4_img_wrap3')
    $('#sec4_img3 p').addClass('txt_on')
    $('#sec4_img1 p').removeClass('txt_on')
    $('#sec4_img2 p').removeClass('txt_on')
    $('#mapo').css('display','none')
    $('#mapo2').css('display','none')
    $('#gongduk').css('display','none')
    $('#gongduk2').css('display','none')
    $('#seoul').css('display','block')
    $('#seoul2').css('display','block')
})

//핵심경쟁력 swiper section

var ww = $(window).width();
console.log(ww)

if (ww <= 768) {
    swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 20,
      simulateTouch: true,
      loop: true,
      loopedSlides: 1,
      loopAdditionalSlides: 2
    });
  } else if (ww > 768) {
    // swiper 호출 안함
  }

  $(window).on('resize', function () {
      ww = $(window).width();
      if (ww < 768) {
        swiper = new Swiper(".mySwiper", {
          slidesPerView: 1,
          spaceBetween: 30,
          simulateTouch: true,
          loop: true,
          loopedSlides: 1,
          loopAdditionalSlides: 2
        });
      }
    });