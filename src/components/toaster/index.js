import { pluginFactory } from 'bootstrap-vue/src/utils/plugins';
import HmToaster from './toaster';

const ToasterPlugin = pluginFactory({
    components: {
        HmToaster
    }
});

export {
    ToasterPlugin,
    HmToaster
};
