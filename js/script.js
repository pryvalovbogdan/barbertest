jQuery(document).ready(function () {

$('.login').click(function () {
   $('.popup-wrapper').fadeIn();
});

$('.close-popup').click(function () {
    $('.popup-wrapper').fadeOut();
});

    $('.mobile-menu').click(function () {
        $('.navigation ul').toggleClass('active');
    });

    //main-slider initialization
    var mySwiper = new Swiper('.main-slider', {
    speed: 500,
    spaceBetween: 0,
    autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
  loop:true,
});
    // product slider initialization
    var galleryThumbs = new Swiper('.gallery-thumbs', {
      spaceBetween: 0,
      slidesPerView: 3,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });
    var galleryTop = new Swiper('.gallery-product', {
      spaceBetween: 10,
     
      thumbs: {
        swiper: galleryThumbs
      }
    });
  
$('img').magnify();


});


	