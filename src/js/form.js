import Delegate from 'dom-delegate'
import Validation from './validation'

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

export default form;
