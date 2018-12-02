import Vue from 'vue';
import 'reset-css';
import App from './App.vue';
import router from './router';
import store from './store/index';
import './plugins/element.js';
import './assets/scss/reset.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
