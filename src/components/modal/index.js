import { pluginFactory } from 'bootstrap-vue/src/utils/plugins';
import HmModal from './modal';

const ModalPlugin = pluginFactory({
    components: {
        HmModal
    }
});

export {
    ModalPlugin,
    HmModal
};
