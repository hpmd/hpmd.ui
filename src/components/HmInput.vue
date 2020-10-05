<script>
import Vue, { VNode } from 'vue';
import { BButton, BFormInput } from 'bootstrap-vue';
import { uniTimes, uniMultiply, uniEye, uniEyeSlash } from 'vue-unicons/src/icons';
import HmIcon from 'vue-unicons/src/components/Unicon';

HmIcon.add([
    uniTimes,
    uniMultiply,
    uniEye,
    uniEyeSlash
]);
//import HmIcon from 'vue-awesome/components/Icon';

let _id = 0;

/**
 * @see available options at:
 * https://bootstrap-vue.org/docs/components/form-input
 */
export default BFormInput.extend({
    /**
     * Most data inherited from
     * @see bootstrap-vue/src/componetns/form-input/form-input.js
     * and related mixins in form-input:
     * @see bootstrap-vue/src/mixins/*
     */
    props: {
        /**
         * Label to replace placeholder attribute
         * Don't use together with placeholder
         */
        label: {
            type: String,
            default: ''
        },
        showClearBtn: {
            type: Boolean,
            default: true
        }
    },
    components: {
        HmIcon
    },
    /**
     * In this case we forced to use render function
     * due to override it in original component
     */
    render(h) {
        /**
         * Let's refer BFormInput properties with "special" this
         */
        const _bv = this;

        /**
         * @see bootstrap-vue/src/components/form-input/form-input.js
         */
        const input = h(
            'input',
            {
                ref: 'input',
                class: _bv.computedClass,
                attrs: _bv.computedAttrs,
                domProps: {
                    value: _bv.localValue
                },
                on: _bv.computedListeners
            }
        );

        const wrapChildren = [
            input
        ];

        if (this.label.length) {
            wrapChildren.push(
                h('label', this.label)
            );
        }

        // Block that could contain 
        const extraControls = [];

        const btnProps = {
            size: 'sm',
            variant: 'link'
        };

        if (this.showClearBtn && _bv.localValue.length) {
            const clearBtn = h(
                BButton,
                {
                    props: btnProps
                },
                [
                    h(HmIcon, {
                        props: {
                            name: 'multiply'
                        }
                    })
                ]
            );

            extraControls.push(clearBtn);
        }

        if (this.type === 'password') {}


        const extraBlock = h(
            'div',
            {
                class: 'form-controls-extra',
            },
            extraControls
        );

        if (extraControls.length) {
            wrapChildren.push(extraBlock);
        }

        return h(
            'div',
            {
                class: 'hm-input form-control-wrap'
            },
            wrapChildren
        );
    }
});
</script>
