<script>
import VueSlider from 'vue-slider-component';

export default {
    extends: VueSlider,
    props: {
        height: {
            type: Number,
            default: 2
        },
        dotSize: {
            type: Number,
            default: 20
        },
        tooltipPlacement: {
            type: String,
            default: 'bottom'
        }
    }
}; // https://nightcatsama.github.io/vue-slider-component
</script>
