import {
    BTabs as HmTabs,
    BTab as HmTab
} from 'bootstrap-vue';
import { pluginFactory } from 'bootstrap-vue/src/utils/plugins';

const TabsPlugin = pluginFactory({
    components: {
        HmTabs,
        HmTab
    }
});

export {
    HmTabs,
    HmTab,
    TabsPlugin
};
