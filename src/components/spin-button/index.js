import { BFormSpinbutton as HmFormSpinbutton } from 'bootstrap-vue';
import { pluginFactory } from 'bootstrap-vue/src/utils/plugins';

const SpinButtonPlugin = pluginFactory({
    components: {
        HmFormSpinbutton
    }
});

/**
 * @see {@link https://bootstrap-vue.org/docs/components/form-spinbutton}
 */
export {
    SpinButtonPlugin,
    HmFormSpinbutton
};
