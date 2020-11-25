import Vue from 'vue';
import { HpmdUI } from '..';
import '@/scss/hpmd.ui.scss';
import App from './App';

Vue.config.productionTip = false;

Vue.use(HpmdUI);


new Vue({
    render: (h) => h(App),
}).$mount('#app');
