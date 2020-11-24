import { BFormRadio as HmRadio } from 'bootstrap-vue';
import { pluginFactory } from 'bootstrap-vue/src/utils/plugins';

const HmRadioPlugin = pluginFactory({
    components: {
        HmRadio
    }
});

/**
 * @see {@link https://bootstrap-vue.org/docs/components/form-radio}
 */
export {
    HmRadioPlugin,
    HmRadio
};
