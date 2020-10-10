/* Styles */
import "normalize.css/normalize.css";
import "@/scss/fonts.scss";
import "@/scss/vars.scss";
import "@/scss/global.scss";

/* Vue */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
