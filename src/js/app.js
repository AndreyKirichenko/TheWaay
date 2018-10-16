import '../scss/app.scss';
import '../pug/index.pug'

import Navigation from './menu'
import Form from './form'
import Slider from './slider'
import TopBanksAchievements from './top_banks_achievements'

document.addEventListener("DOMContentLoaded", function(event) {
  Navigation();
  Form();
  Slider();
  TopBanksAchievements();
});
