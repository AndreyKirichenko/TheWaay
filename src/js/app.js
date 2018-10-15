import '../scss/app.scss';
import '../pug/index.pug'

import Navigation from './menu'
import Form from './form'
import Slider from './slider'

document.addEventListener("DOMContentLoaded", function(event) {
  Navigation();
  Form();
  Slider();
});
