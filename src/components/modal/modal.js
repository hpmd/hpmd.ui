import { BModal } from 'bootstrap-vue';
import { uniTimes } from '../../unicons';
import { HmIcon } from '../icon';

HmIcon.add([uniTimes]);

/**
 * @extends BModal
 * @see {@link https://bootstrap-vue.org/docs/components/modal}
 */
export default {
    extends: BModal,
    computed: {
        modalStyles() {
            const sbWidth = `${this.scrollbarWidth}px`;

            return {
                paddingLeft: !this.isBodyOverflowing && this.isModalOverflowing && this.size !== 'fs' ? sbWidth : '',
                paddingRight: this.isBodyOverflowing && !this.isModalOverflowing ? sbWidth : '',
                // Needed to fix issue https://github.com/bootstrap-vue/bootstrap-vue/issues/3457
                // Even though we are using v-show, we must ensure 'none' is restored in the styles
                display: this.isBlock ? 'block' : 'none'
            };
        }
    },
    /**
     * Replaces default close button
     */
    beforeUpdate() {
        if (!this.$slots['modal-header-close']) {
            this.$slots['modal-header-close'] = [
                this.$createElement(HmIcon, { props: { name: 'uni-times' } })
            ];
        }
    },
    components: {
        HmIcon
    }
};
