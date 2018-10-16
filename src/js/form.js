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

$('form.request__content').submit(function (e){
  e.preventDefault();

  $.ajax({
    url: 'submit.php',
    type: 'post',
    data: $('form.request__content').serialize(),
    success: function (result) {
      if (result == 'fields') {
        $('form.request__content .form__error span').fadeOut();
        $('form.request__content input.form__textInput').removeClass('textInput--error');
        return false;
      }
      else if (result == 'ok') {
        $('form.request__content .form__error span').fadeOut();
        $('form.request__content input.form__textInput').removeClass('textInput--error');
        return false;
      }
    },
    error: function (result) {
      $('form.request__content .form__error span').fadeIn();
      $('form.request__content input.form__textInput').addClass('textInput--error');
      return false;
    }
  });
});

export default form;
