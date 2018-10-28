// import Form from '../../form'
import $ from "jquery";

class SignInForm {
  constructor() {

    $('.signIn__submit').on('click', () => {
      $('.signIn__error').fadeIn();
    });
  }
}

export default SignInForm;
