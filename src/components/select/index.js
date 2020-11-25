
import { pluginFactory } from 'bootstrap-vue/src/utils/plugins';
import HmSelect from './select';

const SelectPlugin = pluginFactory({
    components: {
        HmSelect
    }
});

export {
    SelectPlugin,
    HmSelect
};
