import { pluginFactory } from 'bootstrap-vue/src/utils/plugins';
import HmDatepicker from './datepicker';

const DatepickerPlugin = pluginFactory({
    components: {
        HmDatepicker
    }
});

export {
    DatepickerPlugin,
    HmDatepicker
};
