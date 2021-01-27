import {
    BFormInput
} from 'bootstrap-vue';
import { IMaskDirective } from 'vue-imask';
import {
    uniTimes,
    uniMultiply,
    uniEye,
    uniEyeSlash
} from '../../icons/unicons';
import { HmButton } from '../button';
import { HmIcon } from '../icon';


HmIcon.add(uniTimes, uniMultiply, uniEye, uniEyeSlash);
// import HmIcon from 'vue-awesome/components/Icon';


/**
 * Bootstrap input on steroids (more or less with material UI functionality)
 * Currently supports:
 * - any text-like input (text, email, password, tel)
 * - number
 * - native date / time
 * @class HmInput
 * @extends BFormInput
 * @see {@link https://bootstrap-vue.org/docs/components/form-input} Original docs
 * @see {@link bootstrap-vue/src/componetns/form-input/form-input.js}
 *      {@link bootstrap-vue/src/mixins/*}
 */
export default {
    extends: BFormInput,
    props: {
        /**
         * Label to replace placeholder attribute
         * Don't use together with placeholder
         */
        label: {
            type: String,
            default: ''
        },
        /**
         * IMask value. vue-imask used as directive to avoid logical collisions
         * between BFormInput options and IMask options
         * @see {@link https://imask.js.org/guide.html} documentation here
         * @see {@link https://github.com/uNmAnNeR/imaskjs/tree/master/packages/vue-imask} and here
         */
        mask: {
            default: null
        },
        /**
         * Shoud clear button be rendered
         */
        showClearBtn: {
            type: Boolean,
            default: true
        },
        /**
         * Should password visibility toggle be rendered
         * if type === 'password'
         */
        showPasswordBtn: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            /**
             * Determines current input focused state
             */
            isFocused: false,
            /**
             * Should password input be in a "text" type
             */
            passwordShow: false
        };
    },
    computed: {
        /**
         * CSS classes for outer div, which is necessary to control it and its child states
         * when, for example, input is focused or input value is invalid
         */
        wrapperClass() {
            const _bv = this;

            return [
                'form-control-wrap',
                {
                    focused: this.isFocused,
                    disabled: this.disabled
                },
                _bv.stateClass
            ];
        },
        /**
         * Override: removed state class and range styling
         * @see bootstrap-vue/src/mixins/form-text.js
         */
        computedClass() {
            const _bv = this;

            const classes = [];

            if (_bv.plaintext && _bv.type !== 'range' && _bv.type !== 'color') {
                classes.push('form-control-plaintext');
            }

            if ((!_bv.plaintext && _bv.type !== 'range') || _bv.type === 'color') {
                classes.push('form-control');
            }

            if (!_bv.localValue) {
                classes.push('empty');
            }

            classes.push(_bv.sizeFormClass);

            return classes;
        }
    },
    methods: {
        clearModel() {
            this.hijackOriginalOnInput('');
        },
        /**
         * Set focus enabled
         * @todo Watch for possible updates: focus listener could be added
         */
        onFocusEnh() {
            this.isFocused = true;
        },
        /**
         * Set focus disabled, triggers BFormInput.onBlur
         * @override BFormInput.onBlur
         * @param {FocusEvent} e
         */
        onBlurEnh(e) {
            this.isFocused = false;
            /**
             * Pass event to BFormInput original method
             * @this {BFormInput}
             */
            this.onBlur(e);
        },
        /**
         * Use it when its necessary to bypass BFormInput onInput method
         * currently ignores formatter property, due to possible conflict with masks
         * @emits InputEvent
         */
        hijackOriginalOnInput(value) {
            const _bv = this;

            _bv.localValue = value;
            _bv.updateValue(value);
            this.$emit('input', value);
        },
        /**
         * Handler for IMask directive "accept" event
         * which fires on every user input
         * @emits IMask.accept
         * @emits HmInput.inputRaw
         */
        onImaskInput(e) {
            const { value, unmaskedValue } = e.detail;

            this.hijackOriginalOnInput(value);
            // Emit original IMask "accept" event up
            this.$emit('accept', e);
            // Emit unmaskedValue due to impossibility to use it in a model
            this.$emit('inputRaw', unmaskedValue);
        },
        /**
         * Handler for IMask directive "complete" event
         * which fires when mask is fullfilled
         * @emits IMask.complete
         */
        onImaskComplete(e) {
            // Emit original IMask "complete" event up
            this.$emit('complete', e);
        },
        togglePasswordShow() {
            this.passwordShow = !this.passwordShow;
        }
    },
    directives: {
        'i-mask': IMaskDirective
    },
    render(h) {
        /**
         * Let's refer BFormInput properties with "special" this
         */
        const _bv = this;

        let inputAttrs = _bv.computedAttrs;

        // catch Bootstrap form input attributes and replace if needed
        if (_bv.type === 'password' && this.passwordShow) {
            inputAttrs = { ..._bv.computedAttrs, ...{ type: 'text' } };
        }

        const inputDirectives = [];

        const inputListeners = {
            ..._bv.computedListeners,
            focus: this.onFocusEnh,
            blur: this.onBlurEnh
        };

        if (this.mask) {
            inputDirectives.push({
                name: 'i-mask',
                value: this.mask
            });

            // if it's masked input we'd like to "remove" original "input" listener
            // to make IMask "accept" event handle this behavior
            inputListeners.input = () => {};

            inputListeners.accept = this.onImaskInput;
            inputListeners.complete = this.onImaskComplete;
        }


        const shouldAddPrepend = !!this.$slots.prepend;
        const shouldAddAppend = !!this.$slots.append;
        const shouldAddPasswordBtn = !!(this.showPasswordBtn && _bv.type === 'password');
        const shouldAddClearBtn = !!(this.showClearBtn && _bv.localValue.length && !_bv.disabled);

        const $input = h(
            'input',
            {
                attrs: {
                    id: this.id,
                    ...inputAttrs
                },
                class: this.computedClass,
                directives: inputDirectives,
                domProps: {
                    value: _bv.value
                },
                ref: 'input',
                on: inputListeners
            }
        );

        const $inputEls = [$input];

        const $prependChildren = [];
        const $appendChildren = [];

        if (shouldAddPrepend) {
            $prependChildren.push(h(
                'div',
                {
                    staticClass: 'form-control-extra-prepend'
                },
                this.$slots.prepend
            ));
        }

        if (this.label) {
            $prependChildren.push(h(
                'div',
                { staticClass: 'label' },
                [
                    h(
                        'label',
                        { attrs: { for: this.id } },
                        this.label
                    ),
                    h(
                        'span',
                        { staticClass: 'label-bg' },
                        this.label
                    )
                ]
            ));
        }

        if ($prependChildren.length) {
            $inputEls.push(h(
                'div',
                { staticClass: 'prepend-container' },
                $prependChildren
            ));
        }

        if (shouldAddAppend) {
            $appendChildren.push(h(
                'div',
                { staticClass: 'form-control-extra-append' },
                this.$slots.append
            ));
        }

        if (shouldAddClearBtn || shouldAddPasswordBtn) {
            const $extraButtons = [];

            if (shouldAddClearBtn) {
                $extraButtons.push(h(
                    HmButton,
                    {
                        props: {
                            size: 'sm',
                            variant: 'link'
                        },
                        staticClass: 'extra-control',
                        on: {
                            click: this.clearModel
                        }
                    },
                    [
                        h(
                            HmIcon,
                            { props: { name: 'uni-multiply' } }
                        )
                    ]
                ));
            }

            if (shouldAddPasswordBtn) {
                $extraButtons.push(h(
                    HmButton,
                    {
                        props: {
                            size: 'sm',
                            variant: 'link'
                        },
                        staticClass: 'extra-control',
                        on: {
                            click: this.togglePasswordShow
                        }
                    },
                    [
                        h(
                            HmIcon,
                            { props: { name: this.passwordShow ? 'uni-eye-slash' : 'uni-eye' } }
                        )
                    ]
                ));
            }

            $appendChildren.push(h(
                'div',
                { staticClass: 'form-control-extra-buttons' },
                $extraButtons
            ));
        }

        if ($appendChildren.length) {
            $inputEls.push(h(
                'div',
                { staticClass: 'form-control-extra' },
                $appendChildren
            ));
        }


        return h(
            'div',
            { class: this.wrapperClass },
            $inputEls
        );
    },
    components: {
        HmButton,
        HmIcon
    }
};
