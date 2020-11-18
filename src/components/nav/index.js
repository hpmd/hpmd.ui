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

export {
    HmNavPlugin,
    HmNav,
    HmNavItem,
    HmNavItemDropdown
};
