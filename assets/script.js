$(document).ready(function () {
  $('.burger').click(function () {
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

//Работа с формой:

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form');
  form.addEventListener('submit', formSend);

  async function formSend(e) {
    e.preventDefault();

    let error = formValidate(form);
    let formData = new FormData(form);

    if (error === 0) {
      let response = await fetch('notification.html', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        let result = await response.json();
        alert(result.message);
        form.reset();
      } else {
        alert('Ошибка!');
      }
    } else {
      alert('Заполните обязательные поля!');
    }
  }

  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll('._req');
  
    for(let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);
      
      if (input.classList.contains('_email')) {
        if (emailTest(input)) {
          formAddError(input);
          error++;
        }
      } else if (input.getAttribute('type') === 'checkbox' && input.checked === false) {
        formAddError(input);
        error++;
      } else {
        if (input.value === '') {
          formAddError(input);
          error++;
        }
      }
    }
    return error;
  }

  function formAddError(input) {
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
  }

  function formRemoveError(input) {
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
  }

  function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  }

}); 

