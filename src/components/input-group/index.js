import {
    BInputGroup as HmInputGroup,
    BInputGroupAddon as HmInputGroupAddon,
    BInputGroupAppend as HmInputGroupAppend,
    BInputGroupPrepend as HmInputGroupPrepend,
    BInputGroupText as HmInputGroupText
} from 'bootstrap-vue';
import { pluginFactory } from 'bootstrap-vue/src/utils/plugins';

const InputGroupPlugin = pluginFactory({
    components: {
        HmInputGroup,
        HmInputGroupAddon,
        HmInputGroupAppend,
        HmInputGroupPrepend,
        HmInputGroupText
    }
});

/**
 * @see {@link https://bootstrap-vue.org/docs/components/input-group}
 */
export {
    InputGroupPlugin,
    HmInputGroup,
    HmInputGroupAddon,
    HmInputGroupAppend,
    HmInputGroupPrepend,
    HmInputGroupText
};
