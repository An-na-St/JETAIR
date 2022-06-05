$(document).ready(function() {
  $('.burger').click(function() {
    $('.burger, .navigation').toggleClass('active')
  });
});

new Swiper('.service_options_container', {

  autoHeight: false,

  slidesPerView: 1,

  autoplay: {
    delay: 5000,
  },

  loop: true,

});

new Swiper('.clients_slider_container', {

  autoHeight: false,

  slidesPerView: 1,

  loop: true,

  thumbs: {
    swiper: {
      el: '.mini_container',
      slidesPerView: 6,
    }
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },

});