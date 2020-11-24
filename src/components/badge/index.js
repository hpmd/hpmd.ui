import { BBadge as HmBadge } from 'bootstrap-vue';
import { pluginFactory } from 'bootstrap-vue/src/utils/plugins';

const HmBadgePlugin = pluginFactory({
    components: {
        HmBadge
    }
});

/**
 * @see {@link https://bootstrap-vue.org/docs/components/badge}
 */
export {
    HmBadgePlugin,
    HmBadge
};
