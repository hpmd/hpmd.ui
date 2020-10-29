<script>
import { BModal } from 'bootstrap-vue';
import HmIcon from '@/components/HmIcon';
import { uniTimes } from '@/assets/icons/unicons';

HmIcon.add([uniTimes]);

export default {
    extends: BModal,
    beforeUpdate() {
        if (!this.$slots['modal-header-close']) {
            this.$slots['modal-header-close'] = [(
                <HmIcon name="times"></HmIcon>
            )];
        }
    },
    components: { HmIcon }
};
</script>
