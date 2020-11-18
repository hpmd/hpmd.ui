import { BProgress as HmProgress } from 'bootstrap-vue';
import { pluginFactory } from 'bootstrap-vue/src/utils/plugins';

const HmProgressPlugin = pluginFactory({
    components: {
        HmProgress
    }
});

export {
    HmProgressPlugin,
    HmProgress
};
