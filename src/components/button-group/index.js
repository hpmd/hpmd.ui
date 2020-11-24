import { BButtonGroup as HmButtonGroup } from 'bootstrap-vue';
import { pluginFactory } from 'bootstrap-vue/src/utils/plugins';

const ButtonGroupPlugin = pluginFactory({
    components: {
        HmButtonGroup
    }
});

/**
 * @see {@link https://bootstrap-vue.org/docs/components/button-group}
 */
export {
    ButtonGroupPlugin,
    HmButtonGroup
};
