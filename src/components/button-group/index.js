import { BButtonGroup as HmButtonGroup } from 'bootstrap-vue';
import { pluginFactory } from 'bootstrap-vue/src/utils/plugins';

const HmButtonGroupPlugin = pluginFactory({
    components: {
        HmButtonGroup
    }
});

export {
    HmButtonGroup,
    HmButtonGroupPlugin
};
