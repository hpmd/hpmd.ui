import { BBadge as HmBadge } from 'bootstrap-vue';
import { pluginFactory } from 'bootstrap-vue/src/utils/plugins';

const HmBadgePlugin = pluginFactory({
    components: {
        HmBadge
    }
});

export {
    HmBadgePlugin,
    HmBadge
};
