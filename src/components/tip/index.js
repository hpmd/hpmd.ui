import { pluginFactory } from 'bootstrap-vue/src/utils/plugins';
import HmTip from './tip';

const TipPlugin = pluginFactory({
    components: {
        HmTip
    }
});

export {
    TipPlugin,
    HmTip
};
