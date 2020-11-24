import VueSlider from 'vue-slider-component';

/**
 * Component for displaying the calendar
 * @class HmRangeSlider
 * @extends VueSlider
 * @see {@link https://nightcatsama.github.io/vue-slider-component} Docs
 * @example
 * <hm-calendar v-model="..." />
 */
export default {
    extends: VueSlider,
    props: {
        /**
         * dot width and height
         */
        dotSize: {
            type: Number,
            default: 16
        },
        /**
         * line height
         */
        height: {
            type: Number,
            default: 2
        },
        /**
         * true means that model will be updated after action (drag / click / move is finished)
         * It's highly recommended to keep it "true" in complex interfaces
         * due to huge performance impact on updating model in each render
         */
        lazy: {
            type: Boolean,
            default: true
        }
    },
    computed: {
        /**
         * overwritten container styles
         */
        containerStyles() {
            return {};
        },
        /**
         * overwritten dot styles
         */
        dotBaseStyle() {
            let dotPos;

            if (this.isHorizontal) {
                dotPos = {
                    transform: `translate(${this.isReverse ? '50%' : '-50%'}, -50%)`,
                    WebkitTransform: `translate(${this.isReverse ? '50%' : '-50%'}, -50%)`,
                    top: '50%',
                    [this.direction === 'ltr' ? 'left' : 'right']: '0',
                };
            } else {
                dotPos = {
                    transform: `translate(-50%, ${this.isReverse ? '50%' : '-50%'})`,
                    WebkitTransform: `translate(-50%, ${this.isReverse ? '50%' : '-50%'})`,
                    left: '50%',
                    [this.direction === 'btt' ? 'bottom' : 'top']: '0',
                };
            }

            return dotPos;
        }
    }
};
