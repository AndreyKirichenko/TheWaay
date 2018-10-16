import Delegate from 'dom-delegate'

const SELECTORS = {
  POPUP: '.popup',
  CLOSE: '.popup__close',
  CONTENT: '.popup__content'
};

const CLASS_NAMES = {
  POPUP_VISIBLE: 'popup--visible'
};

let content = document.querySelector('.popup__content');

class Popup {
  constructor() {
    this.popup = document.querySelector(SELECTORS.POPUP);
    this.content = this.popup.querySelector(SELECTORS.CONTENT);
    this.close = document.querySelector(SELECTORS.CLOSE);

    this.delegate = new Delegate(this.popup);
    this.delegate.on('click', this.close, this.hide);
  }

  show(content) {
    this.popup.classList.add(CLASS_NAMES.POPUP_VISIBLE);
    this.renderContent(content)
  }

  hide() {
    this.popup.classList.remove(CLASS_NAMES.POPUP_VISIBLE);
    this.clearContent();
  }

  renderContent(content) {
    this.content.innerHTML = content;
  }

  clearContent() {
    this.content.innerHTML = '';
  }
}

export default Popup();
