<script>
import { BBadge } from 'bootstrap-vue';

export default {
    extends: BBadge,
    functional: false,
    props: {
        tag: {
            type: String,
            default: 'span'
        },
        variant: {
            type: String,
            default: 'default'
        },
        pill: {
            type: Boolean,
            default: false
        }
    },
    render() {
        const {
            variant,
            pill,
            tag
        } = this;

        return (
            <BBadge
                class="hm-badge"
                variant={variant}
                pill={pill}
                tag={tag}>
                { !!this.$slots.default && (
                    <span class="hm-badge__slot">{this.$slots.default}</span>
                ) }
            </BBadge>
        );
    }
};
</script>
