import Vue from 'vue';
import { BootstrapVue } from 'bootstrap-vue';
import '@/scss/hpmd.ui.scss';
import App from './App';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);


new Vue({
    render: (h) => h(App),
}).$mount('#app');
