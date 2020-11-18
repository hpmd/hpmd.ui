import { pluginFactory } from 'bootstrap-vue/src/utils/plugins';
import HmRangeSlider from './range-slider';

const HmRangeSliderPlugin = pluginFactory({
    components: {
        HmRangeSlider
    }
});

export {
    HmRangeSliderPlugin,
    HmRangeSlider
};
