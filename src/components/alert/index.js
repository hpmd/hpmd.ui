import { pluginFactory } from 'bootstrap-vue/src/utils/plugins';
import HmAlert from './alert';

const HmAlertPlugin = pluginFactory({
    components: {
        HmAlert
    }
});

export {
    HmAlertPlugin,
    HmAlert
};
