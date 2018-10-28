// import Form from '../../form'
import $ from "jquery";
import IMask from 'imask';

const MASK_OPTIONS = {
  'tel': '+{7}(000)000-00-00'
};

class SignInForm {
  constructor() {
    $('.header__button').hide();
    $('.signIn__submit').on('click', () => {
      $('.signIn__error').fadeIn();
    });
  }
}

export default SignInForm;
