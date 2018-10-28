import IMask from 'imask';

const MASK_OPTIONS = {
  'tel': '+{7}(000)000-00-00'
};

const ERRORS = {
  REQUIRED: 'Поле не заполнено',
  EMAIL: 'Введите верный email'
};

class Form {
  constructor(className) {
    this.form = document.querySelector(className);

    if (this.form.length) {
      this.init();
    }
  }

  init() {
    // this.form.submit(() => this.onSubmit());
    this.form.addEventListener('submit', () => {console.log(666)});
    this.preparedfields = this.prepareFields();
  }

  prepareFields() {
    let fieldElements = this.form.querySelectorAll('.form__field');
    let fields = [];

    Object.keys(fieldElements).forEach((key) => {
      let field = fieldElements[key];
      let input = field.querySelector('.form__input');
      let error = field.querySelector('.form__error');

      input.setAttribute('novalidate', true);
      let mask = Form.mask(input);

      fields.push({
        field,
        input,
        error,
        mask
      });
    });

    return fields;
  }

  static mask(input) {
    let mask = null;
    if (input.dataset.mask && MASK_OPTIONS[input.dataset.mask]) {
      mask = new IMask(input, { mask: MASK_OPTIONS[input.dataset.mask]});
    }

    return mask;
  }

  validateFields() {
    let errors = 0;

    this.preparedfields.forEach((field) => {
      field.error.classList.remove('form__error--visible');

      let required = field.input.getAttribute('required');
      let type = field.input.getAttribute('type');
      let value = field.input.value;

      let errorText = Form.validate({required, type, value});

      if(!errorText) {
        field.error.innerHTML = errorText;
        field.error.classList.add('form__error--visible');
        errors += 1;
      }
    });
  }

  static validate(options) {
    if (options.required && !options.value) {
      return ERRORS.REQUIRED;
    }

    if (options.type === 'email' && !Form.parseEmail(options.value)) {
      return ERRORS.EMAIL;
    }

    return '';
  }

  onSubmit(event) {
    event.preventDefault();
    this.validateFields();
  }

  static parseEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
  }
}

export default Form;
