<script>
import VueSlider from 'vue-slider-component';

export default {
    extends: VueSlider,
    props: {
        width: {
            type: String,
            default: 'none'
        },
        height: {
            type: String,
            default: 'none'
        },
        dotSize: {
            type: String,
            default: 'none'
        },
        tooltipPlacement: {
            type: String,
            default: 'bottom'
        }
    }
}; // https://nightcatsama.github.io/vue-slider-component
</script>
