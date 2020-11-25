import {
    BFormRadio as HmRadio,
    BFormRadioGroup as HmRadioGroup
} from 'bootstrap-vue';
import { pluginFactory } from 'bootstrap-vue/src/utils/plugins';

const RadioPlugin = pluginFactory({
    components: {
        HmRadio,
        HmRadioGroup
    }
});

/**
 * @see {@link https://bootstrap-vue.org/docs/components/form-radio}
 */
export {
    RadioPlugin,
    HmRadio,
    HmRadioGroup
};
