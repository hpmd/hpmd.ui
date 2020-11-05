<script>
import { BAvatar } from 'bootstrap-vue';
import HmIcon from '@/components/HmIcon';
import { uniUser } from '@/assets/icons/unicons';

HmIcon.add(uniUser);

export default {
    extends: BAvatar,
    created() {
        if (!this.$slots.default && !this.src) {
            this.$slots.default = [(
                <HmIcon name="user"></HmIcon>
            )];
        }
    },
    mounted() {
        if (this.size === 'xs' && this.$el && this.$el.className.indexOf('b-avatar-xs') === -1) {
            this.$el.classList.add('b-avatar-xs');
        }
    }
};
</script>
