import { pluginFactory } from 'bootstrap-vue/src/utils/plugins';
import HmTip from './tip';

const HmTextTipPlugin = pluginFactory({
    components: {
        HmTip
    }
});

export {
    HmTextTipPlugin,
    HmTip
};
