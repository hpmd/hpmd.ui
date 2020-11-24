import { BModal } from 'bootstrap-vue';
import { uniTimes } from '@/assets/icons/unicons';
import { HmIcon } from '../icon';

HmIcon.add([uniTimes]);

/**
 * @extends BModal
 * @see {@link https://bootstrap-vue.org/docs/components/modal}
 */
export default {
    extends: BModal,
    /**
     * Replaces default close button
     */
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
