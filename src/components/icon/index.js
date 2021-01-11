import { pluginFactory } from 'bootstrap-vue/src/utils/plugins';
import HmIcon from './icon';
import HmToasterHelperPlugin from './icon-helper';

const IconPlugin = pluginFactory({
    components: {
        HmIcon
    },
    plugins: {
        HmToasterHelperPlugin
    }
});

export {
    IconPlugin,
    HmIcon
};
