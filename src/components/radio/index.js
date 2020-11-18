import { BFormRadio as HmRadio } from 'bootstrap-vue';
import { pluginFactory } from 'bootstrap-vue/src/utils/plugins';

const HmRadioPlugin = pluginFactory({
    components: {
        HmRadio
    }
});

export {
    HmRadioPlugin,
    HmRadio
};
