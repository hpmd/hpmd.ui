import { BFormCheckbox as HmCheckbox } from 'bootstrap-vue';
import { pluginFactory } from 'bootstrap-vue/src/utils/plugins';

const HmCheckboxPlugin = pluginFactory({
    components: {
        HmCheckbox
    }
});

/**
 * @see {@link https://bootstrap-vue.org/docs/components/form-checkbox}
 */
export {
    HmCheckboxPlugin,
    HmCheckbox
};
