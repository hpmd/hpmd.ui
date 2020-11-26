import { pluginFactory } from 'bootstrap-vue/src/utils/plugins';
import HmSelector from './selector';
import HmSelectorEl from './selector-el';

const SelectorPlugin = pluginFactory({
    components: {
        HmSelector,
        HmSelectorEl
    }
});

export {
    SelectorPlugin,
    HmSelector,
    HmSelectorEl
};
