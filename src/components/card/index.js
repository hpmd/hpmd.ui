import { BCard as HmCard } from 'bootstrap-vue';
import { pluginFactory } from 'bootstrap-vue/src/utils/plugins';

const CardPlugin = pluginFactory({
    components: {
        HmCard
    }
});

/**
 * @see {@link https://bootstrap-vue.org/docs/components/card}
 */
export {
    CardPlugin,
    HmCard
};
