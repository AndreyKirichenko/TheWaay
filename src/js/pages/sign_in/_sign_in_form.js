// import Form from '../../form'
import $ from "jquery";

class SignInForm {
  constructor() {
    $('.header__button').hide();
    $('.signIn__submit').on('click', () => {
      $('.signIn__error').fadeIn();
    });
  }
}

export default SignInForm;
