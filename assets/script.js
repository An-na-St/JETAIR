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