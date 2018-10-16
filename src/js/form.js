import Delegate from 'dom-delegate'
import $ from 'jquery'

let home = document.querySelector('.request');

function form() {
  blurOnFocus();
}

function blurOnFocus() {
  let delegate = new Delegate(document.querySelector('.request'));
  delegate.on('focus', '.textInput', onFocusHandler);
  delegate.on('blur', '.textInput', onUnFocusHandler);
  delegate.on('focus', '.request__submit', onFocusHandler);
  delegate.on('blur', '.request__submit', onUnFocusHandler);
}

function onFocusHandler() {
  home.classList.add('request--blurBackground');
}

function onUnFocusHandler() {
  home.classList.remove('request--blurBackground');
}

$('.request__content').submit(function (e){
  e.preventDefault();

  $.ajax({
    url: 'submit.php',
    type: 'post',
    data: $('.request__content').serialize(),
    success: function (result) {
      if (result == 'fields') {
        $('.request__content .form__error span').fadeOut();
        $('.request__content input.form__textInput').removeClass('textInput--error');
        return false;
      }
      else if (result == 'ok') {
        $('.request__content .form__error span').fadeOut();
        $('.request__content input.form__textInput').removeClass('textInput--error');
        return false;
      }
    },
    error: function (result) {
      $('.request__content .form__error span').fadeIn();
      $('.request__content input.form__textInput').addClass('textInput--error');
      return false;
    }
  });
});

export default form;
