import { BBadge as HmBadge } from 'bootstrap-vue';
import { pluginFactory } from 'bootstrap-vue/src/utils/plugins';

const BadgePlugin = pluginFactory({
    components: {
        HmBadge
    }
});

/**
 * @see {@link https://bootstrap-vue.org/docs/components/badge}
 */
export {
    BadgePlugin,
    HmBadge
};
