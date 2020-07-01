import Vue from 'vue';
import App from './app_complete/App.vue';
import store from './app_complete/store';


new Vue({
  store,
  render: h => h(App)
}).$mount('#app');
