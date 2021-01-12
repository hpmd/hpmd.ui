import { pluginFactory } from 'bootstrap-vue/src/utils/plugins';
import Icon from './icon';

const HELPER_NAME = '$hmIcon';

const plugin = (Vue) => {
    if (!Object.prototype.hasOwnProperty.call(Vue.prototype, HELPER_NAME)) {
        Object.defineProperty(
            Vue.prototype,
            HELPER_NAME,
            {
                get() {
                    return {
                        add: Icon.add.bind(Icon)
                    };
                }
            }
        );
    }
};

export default pluginFactory({
    plugins: { plugin }
});
