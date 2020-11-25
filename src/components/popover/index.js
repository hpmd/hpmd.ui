import { BPopover as HmPopover } from 'bootstrap-vue';
import { pluginFactory } from 'bootstrap-vue/src/utils/plugins';

const PopoverPlugin = pluginFactory({
    components: {
        HmPopover
    }
});

/**
 * @see {@link https://bootstrap-vue.org/docs/components/popover}
 */
export {
    PopoverPlugin,
    HmPopover
};
