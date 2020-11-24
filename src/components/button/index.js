import { BButton, BButtonClose } from 'bootstrap-vue';
import { pluginFactory } from 'bootstrap-vue/src/utils/plugins';

const ButtonPlugin = pluginFactory({
    components: {
        HmButton: BButton,
        HmBtn: BButton,
        HmButtonClose: BButtonClose,
        HmBtnClose: BButtonClose
    }
});

/**
 * @see {@link https://bootstrap-vue.org/docs/components/button}
 */
export {
    ButtonPlugin,
    BButtonClose as HmButtonClose,
    BButton as HmButton
};
