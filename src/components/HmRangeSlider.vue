<script>
import VueSlider from 'vue-slider-component';

export default {
    extends: VueSlider,
    props: {
        dotSize: {
            type: Number,
            default: 20
        },
        tooltipPlacement: {
            type: String,
            default: 'bottom'
        }
    },
    computed: {
        containerStyles() {
            return {};
        },
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
}; // https://nightcatsama.github.io/vue-slider-component
</script>
