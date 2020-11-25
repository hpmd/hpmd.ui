import {
    BProgress as HmProgress,
    BProgressBar as HmProgressBar
} from 'bootstrap-vue';
import { pluginFactory } from 'bootstrap-vue/src/utils/plugins';

const ProgressPlugin = pluginFactory({
    components: {
        HmProgress,
        HmProgressBar
    }
});

/**
 * @see {@link https://bootstrap-vue.org/docs/components/progress}
 */
export {
    ProgressPlugin,
    HmProgress,
    HmProgressBar
};
