import { pluginFactory } from 'bootstrap-vue/src/utils/plugins';
import HmNotify from './toaster';

const NotificationPlugin = pluginFactory({
    components: {
        HmNotify
    }
});

export {
    NotificationPlugin,
    HmNotify
};
