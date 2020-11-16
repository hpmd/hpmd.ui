import {
    BInputGroup as HmInputGroup,
    BInputGroupAddon as HmInputGroupAddon,
    BInputGroupAppend as HmInputGroupAppend,
    BInputGroupPrepend as HmInputGroupPrepend,
    BInputGroupText as HmInputGroupText
} from 'bootstrap-vue';
import { pluginFactory } from 'bootstrap-vue/src/utils/plugins';

const HmInputGroupPlugin = pluginFactory({
    components: {
        HmInputGroup,
        HmInputGroupAddon,
        HmInputGroupAppend,
        HmInputGroupPrepend,
        HmInputGroupText
    }
});


export {
    HmInputGroupPlugin,
    HmInputGroup,
    HmInputGroupAddon,
    HmInputGroupAppend,
    HmInputGroupPrepend,
    HmInputGroupText
};
