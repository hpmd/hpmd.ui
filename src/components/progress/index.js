import { BProgress as HmProgress } from 'bootstrap-vue';
import { pluginFactory } from 'bootstrap-vue/src/utils/plugins';

const HmProgressPlugin = pluginFactory({
    components: {
        HmProgress
    }
});

/**
 * @see {@link https://bootstrap-vue.org/docs/components/progress}
 */
export {
    HmProgressPlugin,
    HmProgress
};
