export default {
    props: {
        horizontal: {
            type: Boolean,
            default: false
        },
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
