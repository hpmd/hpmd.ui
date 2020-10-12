<script>
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
        labelBg: {
            type: String,
            default: '#fff'
        },
        showClearBtn: {
            type: Boolean,
            default: true
        },
        showPasswordBtn: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            passwordShow: false
        };
    },
    mounted() {
        console.log(this.$refs.input, this.$refs.input.value);

        setTimeout(() => {
            
        })

        const unwatchInitial = this.$watch('value', (val) => {
            console.log(val);

            // if ()
        }, { immediate: true });
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

        let inputAttrs = _bv.computedAttrs;

        let inputClass = _bv.computedClass;

        // catch Bootstrap form input attributes and replace if needed
        if (_bv.type === 'password' && this.passwordShow) {
            inputAttrs = { ..._bv.computedAttrs, ...{ type: 'text' } };
        }

        if (_bv.localValue) {
            inputClass = [..._bv.computedClass, 'not-empty'];
        }

        /**
         * @see bootstrap-vue/src/components/form-input/form-input.js
         */
        const input = h(
            'input',
            {
                ref: 'input',
                class: inputClass,
                attrs: inputAttrs,
                domProps: {
                    value: _bv.localValue
                },
                on: _bv.computedListeners
            }
        );

        const wrapChildren = [
            input
        ];

        if (!this.placeholder && this.label.length) {
            wrapChildren.push(
                h('label', this.label),
                h('div', { class: 'test-border-overlay' })
            );
        }

        // Block that could contain additional controls to manipulate input
        const extraControls = [];

        const btnProps = {
            size: 'sm',
            variant: 'link'
        };

        if (this.showClearBtn && _bv.localValue.length) {
            const clearBtn = h(
                BButton,
                {
                    class: 'extra-control',
                    props: btnProps,
                    on: {
                        click: (e) => {
                            _bv.localValue = _bv.vModelValue = '';
                        }
                    }
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

        if (this.type === 'password' && this.showPasswordBtn) {
            const showBtn = h(
                BButton,
                {
                    class: 'extra-control',
                    props: btnProps,
                    on: {
                        click: () => {
                            this.passwordShow = !this.passwordShow;
                        }
                    }
                },
                [
                    h(HmIcon, {
                        props: {
                            name: this.passwordShow ? 'eye-slash' : 'eye'
                        }
                    })
                ]
            );

            extraControls.push(showBtn);
        }


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
