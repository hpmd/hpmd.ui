import { pluginFactory } from 'bootstrap-vue/src/utils/plugins';
import HmIcon from './icon';

const IconPlugin = pluginFactory({
    components: {
        HmIcon
    }
});

export {
    IconPlugin,
    HmIcon
};
