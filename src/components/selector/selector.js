/**
 * Component for easy work with checkbox and radio
 * @class HmSelector
 * @example
 * <hm-selector layout="inline-block">
 *      <hm-selector-el
 *          v-for="(selector, key) in selectors"
 *          v-model="..."
 *          :key="..."
 *          :value="key"
 *          :disabled="selector.disabled"
 *          :checkbox-limit="3">
 *          {{selector.text}}
 *      </hm-selector-el>
 * </hm-selector>
 */
export default {
    props: {
        /**
         * layout mode
         */
        layout: {
            type: String,
            default: 'flex-column'
        }
    },
    render() {
        const classes = [
            'hm-selector',
            `hm-selector-${this.layout}`
        ];

        return (
            <div class={classes}>
                { this.$slots.default }
            </div>
        );
    }
};
