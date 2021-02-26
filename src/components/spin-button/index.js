import { BFormSpinbutton as HmSpinButton } from 'bootstrap-vue';
import { pluginFactory } from 'bootstrap-vue/src/utils/plugins';

const SpinButtonPlugin = pluginFactory({
    components: {
        HmSpinButton
    }
});

/**
 * @see {@link https://bootstrap-vue.org/docs/components/form-spinbutton}
 */
export {
    SpinButtonPlugin,
    HmSpinButton
};
