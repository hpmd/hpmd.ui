/**
 * @typedef {object} Selector
 * @property {String}   layout    layout mode
  */
export default {
    props: {
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
