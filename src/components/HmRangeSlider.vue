<script>
import VueRangeSlider from 'vue-range-component';

export default {
    extends: VueRangeSlider,
    props: {
        height: {
            type: Number,
            default: 2
        },
        tooltipDir: {
            type: String,
            default: 'bottom'
        }
    },
    computed: {
        wrapStyles() {
            return {};
        },
        tooltipStyles() {
            return {};
        }
    }
}; // https://github.com/xwpongithub/vue-range-slider
</script>
