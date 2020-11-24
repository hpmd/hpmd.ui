import {
    BNav as HmNav,
    BNavItem as HmNavItem,
    BNavItemDropdown as HmNavItemDropdown
} from 'bootstrap-vue';
import { pluginFactory } from 'bootstrap-vue/src/utils/plugins';

const HmNavPlugin = pluginFactory({
    components: {
        HmNav,
        HmNavItem,
        HmNavItemDropdown
    }
});

/**
 * @see {@link https://bootstrap-vue.org/docs/components/nav}
 */
export {
    HmNavPlugin,
    HmNav,
    HmNavItem,
    HmNavItemDropdown
};
