import { BModal } from 'bootstrap-vue';
import { uniTimes } from '@/assets/icons/unicons';
import { HmIcon } from '../icon';

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
    components: {
        HmIcon
    }
};
