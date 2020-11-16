import {
    BButton,
    BFormInput
} from 'bootstrap-vue';
import { IMaskDirective } from 'vue-imask';
import {
    uniTimes,
    uniMultiply,
    uniEye,
    uniEyeSlash
} from '@/assets/icons/unicons';
import HmIcon from './HmIcon';


HmIcon.add(uniTimes, uniMultiply, uniEye, uniEyeSlash);
// import HmIcon from 'vue-awesome/components/Icon';


export default {
    extends: BFormInput,
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
        onFocusEnh() {
            this.isFocused = true;
        },
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
         * currently ignores formatter property, due to use with masks
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
         */
        onImaskComplete(e) {
            // Emit original IMask "complete" event up
            this.$emit('complete', e);
        }
    },
    directives: {
        'i-mask': IMaskDirective
    },
    render() {
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


        return (
            <div class={this.wrapperClass}>
                {/* input itself */}
                <input
                    id={this.id}
                    ref="input"
                    class={ this.computedClass }
                    value={_bv.localValue}
                    { ...{
                        attrs: inputAttrs,
                        directives: inputDirectives,
                        on: inputListeners
                    }} />

                {/* prepend slot */ }
                <div class="prepend-container">
                    { shouldAddPrepend && (
                        <div class="form-control-extra-prepend">
                            {this.$slots.prepend}
                        </div>
                    )}

                    {/* label */}
                    { !!this.label && (
                        <div class="label">
                            <label for={this.id}>{this.label}</label>
                            <span class="label-bg">{this.label}</span>
                        </div>
                    ) }
                </div>


                { /* any of extra controls / append data are presented? */ }
                { (shouldAddAppend || shouldAddPasswordBtn || shouldAddClearBtn) && (
                    <div class="form-control-extra">
                        { /* create append named slot */ }
                        { shouldAddAppend && (
                            <div class="form-control-extra-append">
                                {this.$slots.append}
                            </div>
                        ) }

                        { (shouldAddPasswordBtn || shouldAddClearBtn) && (
                            <div class="form-control-extra-buttons">
                                { shouldAddClearBtn && (
                                    <BButton
                                        class="extra-control"
                                        size="sm"
                                        variant="link"
                                        onClick={() => {
                                            _bv.localValue = '';
                                            _bv.vModelValue = '';
                                        }}>
                                        <HmIcon name="multiply" />
                                    </BButton>
                                ) }

                                { shouldAddPasswordBtn && (
                                    <BButton
                                        class="extra-control"
                                        size="sm"
                                        variant="link"
                                        onClick={() => {
                                            this.passwordShow = !this.passwordShow;
                                        }}>
                                        <HmIcon name={this.passwordShow ? 'eye-slash' : 'eye'} />
                                    </BButton>
                                ) }
                            </div>
                        ) }
                    </div>
                ) }
            </div>
        );
    }
};