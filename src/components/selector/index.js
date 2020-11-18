import { pluginFactory } from 'bootstrap-vue/src/utils/plugins';
import HmSelector from './selector';
import HmSelectorEl from './selector-el';

const HmSelectorPlugin = pluginFactory({
    components: {
        HmSelector,
        HmSelectorEl
    }
});

export {
    HmSelectorPlugin,
    HmSelector,
    HmSelectorEl
};
