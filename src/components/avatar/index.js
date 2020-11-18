import { pluginFactory } from 'bootstrap-vue/src/utils/plugins';
import HmAvatar from './avatar';

const HmAvatarPlugin = pluginFactory({
    components: {
        HmAvatar
    }
});

export {
    HmAvatarPlugin,
    HmAvatar
};
