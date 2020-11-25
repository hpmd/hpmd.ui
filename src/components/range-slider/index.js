import { pluginFactory } from 'bootstrap-vue/src/utils/plugins';
import HmRangeSlider from './range-slider';

const RangeSliderPlugin = pluginFactory({
    components: {
        HmRangeSlider
    }
});

export {
    RangeSliderPlugin,
    HmRangeSlider
};
