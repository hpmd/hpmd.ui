/**
 * Component for easy work with checkbox and radio
 * @class HmSelectorEl
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
    model: {
        prop: 'modelValue',
        event: 'change'
    },
    props: {
        /**
         * selector value
         */
        value: {
            type: [String, Number, Object]
        },
        modelValue: {
            default: ''
        },
        /**
         * sets the "disabled" attribute value on the form control
         */
        disabled: {
            type: Boolean,
            default: false
        },
        /**
         * How many elements could be selected
         * Checkbox mode specific
         * @example
         * // 0 - no limitation, 1 = [checked], 2 = [checked1, checked2] etc.
         */
        checkboxLimit: {
            type: Number,
            default: 0,
            validator(val) {
                return val >= 0;
            }
        },
        reselect: {
            type: Boolean,
            default: false
        },
        /**
         * true value
         */
        trueValue: {
            default: true
        },
        /**
         * false value
         */
        falseValue: {
            default: false
        }
    },
    data() {
        return {
            safeId: `hm_sel_${this.$parent._uid}_${this._uid}`
        };
    },
    computed: {
        /**
         * selector-el is checked
         */
        isChecked() {
            let mv;

            if (this.modelValue instanceof Array) {
                mv = this.modelValue.includes(this.value);
            } else {
                mv = this.modelValue === this.trueValue;
            }

            return mv;
        },
        /**
         * list of classes for the main container
         */
        classes() {
            const classes = ['hm-selector-el'];

            if (this.disabled) {
                classes.push('disabled');
            }

            return classes;
        },
        /**
         * selector-el is disabled
         */
        isDisabled() {
            return (
                this.disabled || (
                    !this.isChecked &&
                    !!this.checkboxLimit &&
                    !!this.modelValue.length >= this.checkboxLimit &&
                    !this.reselect
                )
            );
        }
    },
    methods: {
        /**
         * onInput handler
         * @param {object|Event} event
         * @returns {void}
         */
        onInputChange(e) {
            const isChecked = e.target.checked;

            if (this.modelValue instanceof Array) {
                const newValue = [...this.modelValue];

                if (isChecked) {
                    if (!this.checkboxLimit || (newValue.length < this.checkboxLimit)) {
                        newValue.push(this.value);
                    } else if ((newValue.length === this.checkboxLimit) && this.reselect) {
                        newValue.splice(newValue.indexOf(this.value), 1, this.value);
                    }
                } else {
                    newValue.splice(newValue.indexOf(this.value), 1);
                }

                this.$emit('change', newValue);
            } else {
                this.$emit('change', isChecked ? this.trueValue : this.falseValue);
            }
        }
    },
    render(h) {
        // Might be broken in Vue3
        const parentUid = this.$parent._uid;

        return h(
            'div',
            { class: this.classes },
            [
                h(
                    'input',
                    {
                        attrs: {
                            checked: this.isChecked,
                            disabled: this.isDisabled,
                            id: this.safeId,
                            name: `hm_sel_${parentUid}`,
                            type: 'checkbox'
                        },
                        domProps: {
                            value: this.value
                        },
                        on: {
                            change: this.onInputChange
                        }
                    }
                ),
                h(
                    'div',
                    { staticClass: 'hm-selector-el-slot' },
                    this.$slots.default
                ),
                h(
                    'label',
                    { attrs: { for: this.safeId } }
                )
            ]
        );
    }
};
