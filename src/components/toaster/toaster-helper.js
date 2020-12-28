import { pluginFactory } from 'bootstrap-vue/src/utils/plugins';
import Toaster from './toaster';

const HELPER_NAME = '$hmToaster';

const plugin = (Vue) => {
    Vue.prototype[HELPER_NAME] = {
        add: Toaster.add.bind(Toaster)
    }
};

export const HmToasterHelperPlugin = pluginFactory({
    plugins: { plugin }
});
