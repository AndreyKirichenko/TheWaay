import Delegate from 'dom-delegate'
import Validation from './validation'

let home = document.querySelector('.home');

function form() {
  blurOnFocus();
}

function blurOnFocus() {
  let delegate = new Delegate(document.querySelector('.home'));
  delegate.on('focus', '.textInput', onFocusHandler);
  delegate.on('blur', '.textInput', onUnFocusHandler);
  delegate.on('focus', '.home__submit', onFocusHandler);
  delegate.on('blur', '.home__submit', onUnFocusHandler);
}

function onFocusHandler() {
  home.classList.add('home--blurBackground');
}

function onUnFocusHandler() {
  home.classList.remove('home--blurBackground');
}

export default form;
