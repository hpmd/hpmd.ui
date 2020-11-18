import { pluginFactory } from 'bootstrap-vue/src/utils/plugins';
import HmTextTip from './text-tip';

const HmTextTipPlugin = pluginFactory({
    components: {
        HmTextTip
    }
});

export {
    HmTextTipPlugin,
    HmTextTip
};
