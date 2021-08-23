import { BTable } from 'bootstrap-vue';

export default BTable.extend({
    extends: BTable,
    props: {
        showScrollGuides: {
            type: Boolean,
            default: false
        }
    },
    render(h, ctx) {
        if (this.responsive) {
            const tableWrap = h('div', { class: 'b-table-responsive-wrap' }, [
                this.constructor.superOptions.render.call(this, h, ctx)
            ]);

            return tableWrap;
        }

        return this.constructor.superOptions.render.call(this, h, ctx);
    }
});
