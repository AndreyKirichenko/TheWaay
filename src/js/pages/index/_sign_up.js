import Delegate from 'dom-delegate'
import $ from 'jquery'
import IMask from "imask";

let home;

function signUp() { 
  new IMask(document.querySelector('.textInput--tel'), { mask: '+{7}(000)000-00-00'});
  home = document.querySelector('.signUp');
  blurOnFocus();
}

function blurOnFocus() {
  let delegate = new Delegate(document.querySelector('.signUp'));
  delegate.on('focus', '.textInput', onFocusHandler);
  delegate.on('blur', '.textInput', onUnFocusHandler);
  delegate.on('focus', '.signUp__submit', onFocusHandler);
  delegate.on('blur', '.signUp__submit', onUnFocusHandler);
}

function onFocusHandler() {
  home.classList.add('signUp--blurBackground');
}

function onUnFocusHandler() {
  home.classList.remove('signUp--blurBackground');
}

$('.signUp__content').submit(function (e){
  e.preventDefault();

  $.ajax({
    url: 'submit.php',
    type: 'post',
    data: $('.signUp__content').serialize(),
    success: function (result) {
      if (result == 'fields') {
        $('.signUp__content .form__error span').fadeIn();
        $('.signUp__content input.form__input').addClass('textInput--error');
        return false;
      }
      else if (result == 'ok') {
        $('.signUp__content .form__error span').fadeOut();
        $('.signUp__content input.form__input').removeClass('textInput--error');

        $('.signUp__fields').fadeOut();
        $('.signUp__footer').fadeOut();
        $('.signUp__success').fadeIn();
        return false;
      }
    }
  });
});

export default signUp;
