import { installFactory } from 'bootstrap-vue/src/utils/plugins';
import componentsPlugin from './components';

const install = installFactory({
    plugins: {
        componentsPlugin
    }
});


const HpmdUI = {
    install,
    NAME: 'HPMD.ui'
};

export {
    install,
    HpmdUI
};

export default HpmdUI;
