import Vue from 'vue';
/* eslint-disable import/no-extraneous-dependencies */
import VueRouter from 'vue-router';
import 'highlight.js/scss/atom-one-light.scss';
import VueHighlightjs from 'vue-highlightjs';
import BootstrapVue from 'bootstrap-vue';
import '@/scss/bootstrap-custom.scss';
import '@/scss/hpmd.ui.scss';
// eslint-disable-next-line import/no-named-as-default
import HpmdUI from '..';
import App from './App';
import router from './docs/router';

Vue.config.productionTip = false;

Vue.use(HpmdUI);
Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.use(VueHighlightjs);


new Vue({
    render: (h) => h(App),
    router
}).$mount('#app');
