import { pluginFactory } from 'bootstrap-vue/src/utils/plugins';
import { HmToasterHelperPlugin } from './toaster-helper';
import HmToaster from './toaster';

const ToasterPlugin = pluginFactory({
    components: {
        HmToaster
    },
    plugins: {
        HmToasterHelperPlugin
    }
});

export {
    ToasterPlugin,
    HmToaster
};
