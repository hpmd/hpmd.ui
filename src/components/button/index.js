import { BButton } from 'bootstrap-vue';
import { pluginFactory } from 'bootstrap-vue/src/utils/plugins';

const HmButtonPlugin = pluginFactory({
    components: {
        HmButton: BButton,
        HmBtn: BButton
    }
});

export {
    HmButtonPlugin,
    HmButton: BButton,
    HmBtn: BButton
};

