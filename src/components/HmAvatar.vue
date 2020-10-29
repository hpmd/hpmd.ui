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
    }
};
</script>
