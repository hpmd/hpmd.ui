import { BCollapse as HmCollapse } from 'bootstrap-vue';
import { pluginFactory } from 'bootstrap-vue/src/utils/plugins';

const CollapsePlugin = pluginFactory({
    components: {
        HmCollapse
    }
});

/**
 * @see {@link https://bootstrap-vue.org/docs/components/collapse}
 */
export {
    CollapsePlugin,
    HmCollapse
};
