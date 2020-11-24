import {
    BFormCheckbox as HmCheckbox,
    BFormCheckboxGroup as HmCheckboxGroup
} from 'bootstrap-vue';
import { pluginFactory } from 'bootstrap-vue/src/utils/plugins';

const CheckboxPlugin = pluginFactory({
    components: {
        HmCheckbox,
        HmCheckboxGroup
    }
});

/**
 * @see {@link https://bootstrap-vue.org/docs/components/form-checkbox}
 */
export {
    CheckboxPlugin,
    HmCheckbox,
    HmCheckboxGroup
};
