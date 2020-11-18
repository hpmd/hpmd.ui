import { BTooltip as HmTooltip } from 'bootstrap-vue';
import { pluginFactory } from 'bootstrap-vue/src/utils/plugins';

const HmTooltipPlugin = pluginFactory({
    components: {
        HmTooltip
    }
});

export {
    HmTooltipPlugin,
    HmTooltip
};
