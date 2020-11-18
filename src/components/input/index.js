import { pluginFactory } from 'bootstrap-vue/src/utils/plugins';
import HmInput from './hm-input';

const HmInputPlugin = pluginFactory({
    components: {
        HmInput
    }
});

export {
    HmInputPlugin,
    HmInput
};
