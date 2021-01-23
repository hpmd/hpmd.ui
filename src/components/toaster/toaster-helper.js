import { pluginFactory } from 'bootstrap-vue/src/utils/plugins';
import Toaster from './toaster';

const HELPER_NAME = '$hmToaster';

const plugin = (Vue) => {
    if (!Object.prototype.hasOwnProperty.call(Vue.prototype, HELPER_NAME)) {
        Object.defineProperty(
            Vue.prototype,
            HELPER_NAME,
            {
                get() {
                    return {
                        add: Toaster.add.bind(Toaster)
                    };
                }
            }
        );
    }
};


export default pluginFactory({
    plugins: { plugin }
});
