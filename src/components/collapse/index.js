import { pluginFactory } from 'bootstrap-vue/src/utils/plugins';
import HmCollapse from './collapse';

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
