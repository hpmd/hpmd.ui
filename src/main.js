import Vue from 'vue';
import VueRouter from 'vue-router';
import HpmdUI from '..';
import BootstrapVue from 'bootstrap-vue';
import '@/scss/hpmd.ui.scss';
import App from './App';
import router from './docs/router';

Vue.config.productionTip = false;

Vue.use(HpmdUI);
Vue.use(BootstrapVue);
Vue.use(VueRouter);


new Vue({
    render: (h) => h(App),
    router
}).$mount('#app');
