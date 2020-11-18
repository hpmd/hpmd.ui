import { BFormCheckbox as HmCheckbox } from 'bootstrap-vue';
import { pluginFactory } from 'bootstrap-vue/src/utils/plugins';

const HmCheckboxPlugin = pluginFactory({
    components: {
        HmCheckbox
    }
});

export {
    HmCheckboxPlugin,
    HmCheckbox
};
