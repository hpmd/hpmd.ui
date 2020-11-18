import { BPopover as HmPopover } from 'bootstrap-vue';
import { pluginFactory } from 'bootstrap-vue/src/utils/plugins';

const HmPopoverPlugin = pluginFactory({
    components: {
        HmPopover
    }
});

export {
    HmPopoverPlugin,
    HmPopover
};
