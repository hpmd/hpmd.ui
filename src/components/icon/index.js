import { pluginFactory } from 'bootstrap-vue/src/utils/plugins';
import HmIcon from './icon';
import HmIconHelperPlugin from './icon-helper';

const IconPlugin = pluginFactory({
    components: {
        HmIcon
    },
    plugins: {
        HmIconHelperPlugin
    }
});

export {
    IconPlugin,
    HmIcon
};
