import { pluginFactory } from 'bootstrap-vue/src/utils/plugins';
import HmInput from './hm-input';

const InputPlugin = pluginFactory({
    components: {
        HmInput
    }
});

export {
    InputPlugin,
    HmInput
};
