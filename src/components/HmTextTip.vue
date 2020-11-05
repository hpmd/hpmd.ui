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
            default: 'hover'
        }
    },
    render() {
        const rndId = Math.round(Math.random() * 9999);

        return (
            <span>
                <span
                    id={`hm-texttip-${rndId}`}
                    class="hm-texttip"
                    title={this.tip}>
                    {this.$slots.default}
                </span>
                <HmTooltip
                    target={`hm-texttip-${rndId}`}
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
