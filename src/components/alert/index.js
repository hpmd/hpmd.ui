import { pluginFactory } from 'bootstrap-vue/src/utils/plugins';
import HmAlert from './alert';

const AlertPlugin = pluginFactory({
    components: {
        HmAlert
    }
});

export {
    AlertPlugin,
    HmAlert
};
