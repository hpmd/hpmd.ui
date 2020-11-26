import {
    BDropdown as HmDropdown,
    BDropdownItemButton as HmDropdownItemButton,
    BDropdownDivider as HmDropdownDivider,
    BDropdownItem as HmDropdownItem
} from 'bootstrap-vue';
import { pluginFactory } from 'bootstrap-vue/src/utils/plugins';

const DropdownPlugin = pluginFactory({
    components: {
        HmDropdown,
        HmDropdownItemButton,
        HmDropdownDivider,
        HmDropdownItem
    }
});

/**
 * @see {@link https://bootstrap-vue.org/docs/components/dropdown}
 */
export {
    DropdownPlugin,
    HmDropdown,
    HmDropdownItemButton,
    HmDropdownDivider,
    HmDropdownItem
};
