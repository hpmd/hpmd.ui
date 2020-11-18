import { pluginFactory } from 'bootstrap-vue/src/utils/plugins';
import HmModal from './modal';

const HmModalPlugin = pluginFactory({
    components: {
        HmModal
    }
});

export {
    HmModalPlugin,
    HmModal
};
