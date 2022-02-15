import { pluginFactory } from 'bootstrap-vue/src/utils/plugins';
import {
    BFormTextarea as HmTextarea
} from 'bootstrap-vue';


const TextareaPlugin = pluginFactory({
    components: {
        HmTextarea
    }
});

export {
    TextareaPlugin,
    HmTextarea
};
