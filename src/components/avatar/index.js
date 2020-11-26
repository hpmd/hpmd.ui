import { pluginFactory } from 'bootstrap-vue/src/utils/plugins';
import HmAvatar from './avatar';

const AvatarPlugin = pluginFactory({
    components: {
        HmAvatar
    }
});

export {
    AvatarPlugin,
    HmAvatar
};
