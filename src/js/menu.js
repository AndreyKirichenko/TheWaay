import Delegate from 'dom-delegate'

let burger = document.querySelector('.burger');
let pageMenu = document.querySelector('.page__menu');
let menuDelegate = new Delegate(document.querySelector('.page__menu'));

function menu() {
  burgerHandler();
  menuHandler();
  escHandler();
}

function escHandler (e) {
  document.addEventListener('keyup', function (e) {
    if(e.key === "Escape") {
      hide();
    }
  });
}

function burgerHandler() {
  burger.addEventListener('click', toggle);
  burger.addEventListener('blur', hide);
}

function menuHandler() {
  menuDelegate.on('focus', '.navigation__link', show);
  menuDelegate.on('blur', '.navigation__link', hide);
  menuDelegate.on('click', '.navigation__link', hide);

  menuDelegate.on('focus', '.subscribe__input', show);
  menuDelegate.on('blur', '.subscribe__input', hide);

  menuDelegate.on('focus', '.subscribe__button', show);
  menuDelegate.on('blur', '.subscribe__button', hide);
}

function show() {
  burger.classList.add('burger--active');
  pageMenu.classList.add('page__menu--active');
}

function hide() {
  burger.classList.remove('burger--active');
  pageMenu.classList.remove('page__menu--active');
}

function toggle() {
  burger.classList.toggle('burger--active');
  pageMenu.classList.toggle('page__menu--active');
}

export default menu;
