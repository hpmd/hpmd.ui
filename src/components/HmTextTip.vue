<script>
import HmTooltip from '@/components/HmTooltip';

export default {
    name: 'HmTextTip',
    props: {
        tip: {
            type: String,
            default: ''
        },
        triggers: {
            type: String,
            default: 'hover focus'
        }
    },
    render() {
        const { _uid } = this;
        const id = `hm-texttip-${_uid}`;

        return (
            <span>
                <span
                    id={id}
                    class="hm-texttip"
                    tabindex="0"
                    aria-controls={_uid}>
                    {this.$slots.default}
                </span>
                <HmTooltip
                    target={id}
                    triggers={this.triggers}>
                    {this.tip}
                </HmTooltip>
            </span>
        );
    },
    components: {
        HmTooltip
    }
};
</script>
