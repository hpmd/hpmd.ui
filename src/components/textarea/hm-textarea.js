import { BFormTextarea } from "bootstrap-vue"

export default BFormTextarea.extend({
    name: 'HmTextarea',

    methods: {
        onBlurEnh(e) {

        },

        onFocusEnh(e) {
            this.isFocused = true;

            try {
                this.onFocus(e);
            } catch (e) {
                // no fn
            }
        },
    },

    render(h, ctx) {
        const textarea = this.constructor.superOptions.render.call(this, h, ctx);
        

        console.log(textarea.data);

        return textarea;
        // return h('textarea', {
        //     class: this.computedClass,
        //     style: this.computedStyle,
        //     directives: [
        //         {
        //             name: 'b-visible',
        //             value: this.visibleCallback,
        //             // If textarea is within 640px of viewport, consider it visible
        //             modifiers: { '640': true }
        //         }
        //     ],
        //     attrs: this.computedAttrs,
        //     domProps: { value: this.localValue },
        //     on: this.computedListeners,
        //     ref: 'input'
        // })
    }
});
