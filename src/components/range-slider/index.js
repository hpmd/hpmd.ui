import { pluginFactory } from 'bootstrap-vue/src/utils/plugins';
import HmRangeSliderOld from './range-slider-old';

const HmRangeSliderPlugin = pluginFactory({
    components: {
        HmRangeSliderOld
    }
});

export {
    HmRangeSliderPlugin,
    HmRangeSliderOld
};
