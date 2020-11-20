
import { pluginFactory } from 'bootstrap-vue/src/utils/plugins';
import HmSelect from './select';

const HmSelectPlugin = pluginFactory({
    components: {
        HmSelect
    }
});

export {
    HmSelectPlugin,
    HmSelect
};
