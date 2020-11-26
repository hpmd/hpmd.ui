import { BFormSpinbutton as HmFormSpinbutton } from 'bootstrap-vue';
import { pluginFactory } from 'bootstrap-vue/src/utils/plugins';

const HmSpinButtonPlugin = pluginFactory({
    components: {
        HmFormSpinbutton
    }
});

/**
 * @see {@link https://bootstrap-vue.org/docs/components/form-spinbutton}
 */
export {
    HmSpinButtonPlugin,
    HmFormSpinbutton
};
