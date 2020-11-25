import { pluginFactory } from 'bootstrap-vue/src/utils/plugins';
import HmFileInput from './file-input';

const FileInputPlugin = pluginFactory({
    components: {
        HmFileInput
    }
});

export {
    FileInputPlugin,
    HmFileInput
};
