import { uniInfoCircle } from '@/assets/icons/unicons';
import { HmTooltip } from '../tooltip';
import { HmIcon } from '../icon';

HmIcon.add(uniInfoCircle);

/**
 * Component to wrap any text/element to show tooltip on it or next to it
 * Could be used both with "tip" property or tip slot
 * @example
 * // <hm-tip>
 * //    <input v-model="cpu" />
 * //    <template v-slot:tip><strong>CPU</strong> - cost per unit</template>
 * // </hm-tip>
 */
export default {
    props: {
        /**
         * Defines whether to show as tip text inside paragraph (true)
         * or add icon to the right of text (which is useful to wrap any other elements)
         */
        inText: {
            type: Boolean,
            default: false
        },
        /**
         * Tip text
         * For formatting and better control use "tip" slot
         */
        tip: {
            type: String,
            default: ''
        },
        /**
         * Set color variant
         * @see $theme-colors scss variable (or tooltip-specific color map)
         */
        tooltipVariant: {
            type: String,
            default: 'black'
        },
        /**
         * Placement of the tooltip
         * @see {@link https://bootstrap-vue.org/docs/components/tooltip#comp-ref-b-tooltip-props} available options
         */
        tooltipPlacemenet: {
            type: String,
            default: 'bottom'
        },
        /**
         * Specify which triggers will show the tooltip.
         * @see {@link https://bootstrap-vue.org/docs/components/tooltip#comp-ref-b-tooltip-props} available options
         */
        triggers: {
            type: [String, Array],
            default: 'hover focus'
        },
        /**
         * Icon vertical position in block mode
         */
        iconPosition: {
            type: String,
            default: 'center'
        },
        /**
         * Icon to use
         * Be sure to add it before HmIcon.add(yourIcon)
         */
        iconName: {
            type: String,
            default: 'info-circle'
        },
        /**
         * Bootstrap .text-{variant} to color icon
         */
        iconVariant: {
            type: String,
            default: 'primary'
        }
    },
    computed: {
        containerClass() {
            const c = ['hm-tip'];

            if (this.inText) {
                c.push('hm-tip-inline');
            } else {
                c.push('hm-tip-block', `align-items-${this.iconPosition}`);
            }

            return c.join(' ');
        }
    },
    render() {
        const { _uid } = this;
        const id = `hm-tip-${_uid}`;

        const tooltipElement = () => (
            <HmTooltip
                target={id}
                variant={this.tooltipVariant}
                triggers={this.triggers}>
                {this.$slots.tip || this.tip}
            </HmTooltip>
        );

        const triggerElAttrs = {
            attrs: {
                id,
                tabindex: '0',
                ariaControls: _uid
            }
        };

        if (this.inText) {
            return (
                <span class={this.containerClass} {...triggerElAttrs}>
                    {this.$slots.default}
                    {tooltipElement()}
                </span>
            );
        }

        const iconClass = `hm-tip-icon text-${this.iconVariant}`;

        return (
            <div class={this.containerClass}>
                {this.$slots.default}
                <span class={iconClass} {...triggerElAttrs}>
                    <HmIcon name={this.iconName} />
                </span>
                {tooltipElement()}
            </div>
        );
    },
    components: {
        HmIcon,
        HmTooltip
    }
};