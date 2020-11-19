import { HmTooltip } from '@/components/tooltip';
import { HmIcon } from '@/components/icon';
import { uniInfoCircle } from '@/assets/icons/unicons';

HmIcon.add(uniInfoCircle);

export default {
    name: 'HmTip',
    props: {
        triggers: {
            type: String,
            default: 'hover focus click'
        },
        tipText: {
            type: String,
            default: ''
        },
        tooltipText: {
            type: String,
            default: ''
        }
    },
    render() {
        const { _uid } = this;
        const id = `hm-tip-${_uid}`;

        return (
            <span>
                <span
                    id={id}
                    tabindex="0"
                    class="hm-tip">
                    <span class="hm-tip-text">
                        {
                            this.$slots.default ?
                                this.$slots.default :
                                this.tipText
                        }
                        <slot></slot>
                    </span>
                    <span class="hm-tip-icon text-primary">
                        <HmIcon name="info-circle" />
                    </span>
                </span>
                <HmTooltip
                    target={id}
                    triggers={this.triggers}>
                    <div class="hm-tip-tooltip">
                        {
                            this.$slots.tooltip ?
                                this.$slots.tooltip :
                                this.tooltipText
                        }
                    </div>
                </HmTooltip>
            </span>
        );
    }
};
