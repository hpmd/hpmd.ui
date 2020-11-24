import {
    BDropdown as HmDropdown,
    BDropdownItem as HmDropdownItem
} from 'bootstrap-vue';
import { pluginFactory } from 'bootstrap-vue/src/utils/plugins';

const DropdownPlugin = pluginFactory({
    components: {
        HmDropdown,
        HmDropdownItem
    }
});

/**
 * @see {@link https://bootstrap-vue.org/docs/components/dropdown}
 */
export {
    DropdownPlugin,
    HmDropdown,
    HmDropdownItem
};
