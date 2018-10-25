import '../scss/app.scss';
import '../pug/index.pug'

import '@babel/polyfill';
import page from 'page';

import SmoothScroll from './smooth_scroll';
import Welcome from './welcome';
import Navigation from './menu';

import IndexPage from './pages/index/index';

let documentReady = new Promise((resolve) => {
  document.addEventListener('DOMContentLoaded', function(event) {
    resolve();
  });
});

documentReady.then(controller);

function controller() {
  page('/', initIndexPage);
  page('/sign_in.html', function(){ initSignInPage() });
  page();
}

function initCommon() {
  Welcome();
  SmoothScroll();
  Navigation();
}

function initIndexPage(context, next) {
  console.log('initIndexPage!!!');
  initCommon();
  IndexPage();
}

function initSignInPage() {
  console.log('initSignIn!!!');
  initCommon();
}
