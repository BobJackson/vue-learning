import Vue from 'vue';
import App from './app_3/App.vue';
import store from './app_3/store';
import router from "./app_3/router";

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
