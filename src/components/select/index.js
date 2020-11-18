import { Multiselect as HmSelect } from 'vue-multiselect';
import { pluginFactory } from 'bootstrap-vue/src/utils/plugins';

const HmSelectPlugin = pluginFactory({
    components: {
        HmSelect
    }
});

export {
    HmSelectPlugin,
    HmSelect
};
