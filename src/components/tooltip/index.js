import { BTooltip as HmTooltip } from 'bootstrap-vue';
import { pluginFactory } from 'bootstrap-vue/src/utils/plugins';

const TooltipPlugin = pluginFactory({
    components: {
        HmTooltip
    }
});

/**
 * @see {@link https://bootstrap-vue.org/docs/components/tooltip}
 */
export {
    TooltipPlugin,
    HmTooltip
};
