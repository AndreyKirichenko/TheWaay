import '../scss/app.scss';
import '../pug/index.pug'

import Welcome from './welcome'
import SmoothScroll from './smooth_scroll'
import Navigation from './menu'
import Form from './form'
import Slider from './slider'
import TopBanksAchievements from './top_banks_achievements';

document.addEventListener("DOMContentLoaded", function() {
  Welcome();
  SmoothScroll();
  Navigation();
  Form();
  Slider();
  TopBanksAchievements();
});
