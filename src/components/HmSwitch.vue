<script>
import { BFormCheckbox } from 'bootstrap-vue';

export default {
    extends: BFormCheckbox,
    props: {
        switch: {
            type: Boolean,
            default: true
        }
    }
};
</script>
