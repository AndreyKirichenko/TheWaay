import '../scss/app.scss';
import '../pug/index.pug'

import Welcome from './welcome'
import About from './about'
import SmoothScroll from './smooth_scroll'
import Navigation from './menu'
import Form from './form'
import Slider from './slider'
import TopBanksAchievements from './top_banks_achievements';

document.addEventListener("DOMContentLoaded", function() {
  Welcome();
  About();
  SmoothScroll();
  Navigation();
  Form();
  Slider();
  TopBanksAchievements();
});
