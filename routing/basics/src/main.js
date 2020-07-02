import Vue from 'vue';
import App from './app_complete/app';
import {router} from "./app_complete/app";

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');