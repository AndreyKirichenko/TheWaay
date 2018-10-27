import Delegate from 'dom-delegate'

class Menu {
  constructor() {
    this.burger = document.querySelector('.burger');
    this.pageMenu = document.querySelector('.page__menu');
    this.delegate = new Delegate(document.querySelector('.page'));

    this.initEscHandler();
    this.initBurgerHandlers();
    this.initMenuHandler();
  }

  initEscHandler () {
    document.addEventListener('keyup', (e) => {
      if(e.key === "Escape") {
        this.hide();
      }
    });
  }

  initBurgerHandlers() {
    this.delegate.on('click', '.burger', ()=> this.toggle());
    this.delegate.on('blur', '.burger', () => this.hide());
  }

  initMenuHandler() {
    this.delegate.on('focus', '.navigation__link', ()=> this.show());
    this.delegate.on('blur', '.navigation__link', ()=> this.hide());
    this.delegate.on('click', '.navigation__link', ()=> this.hide());

    this.delegate.on('focus', '.subscribe__input', ()=> this.show());
    this.delegate.on('blur', '.subscribe__input', ()=> this.hide());

    this.delegate.on('focus', '.subscribe__button', ()=> this.show());
    this.delegate.on('blur', '.subscribe__button', ()=> this.hide());
  }

  show() {
    this.burger.classList.add('burger--active');
    this.pageMenu.classList.add('page__menu--active');
  }
  
  hide() {
    this.burger.classList.remove('burger--active');
    this.pageMenu.classList.remove('page__menu--active');
  }
  
  toggle() {
    this.burger.classList.toggle('burger--active');
    this.pageMenu.classList.toggle('page__menu--active');
  }
}

export default Menu;
