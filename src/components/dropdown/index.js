import {
    BDropdown as HmDropdown,
    BDropdownItem as HmDropdownItem
} from 'bootstrap-vue';
import { pluginFactory } from 'bootstrap-vue/src/utils/plugins';

const HmDropdownPlugin = pluginFactory({
    components: {
        HmDropdown,
        HmDropdownItem
    }
});

export {
    HmDropdownPlugin,
    HmDropdown,
    HmDropdownItem
};
