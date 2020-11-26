import {
    BNav as HmNav,
    BNavItem as HmNavItem,
    BNavItemDropdown as HmNavItemDropdown,
    BNavText as HmNavText
} from 'bootstrap-vue';
import { pluginFactory } from 'bootstrap-vue/src/utils/plugins';

const NavPlugin = pluginFactory({
    components: {
        HmNav,
        HmNavItem,
        HmNavItemDropdown,
        HmNavText
    }
});

/**
 * @see {@link https://bootstrap-vue.org/docs/components/nav}
 */
export {
    NavPlugin,
    HmNav,
    HmNavItem,
    HmNavItemDropdown,
    HmNavText
};
