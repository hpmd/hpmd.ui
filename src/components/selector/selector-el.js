export default {
    model: {
        prop: 'modelValue',
        event: 'change'
    },
    props: {
        value: {
            type: [String, Number, Object]
        },
        modelValue: {
            default: ''
        },
        selected: {
            type: Boolean,
            default: false
        },
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
        trueValue: {
            default: true
        },
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
        isChecked() {
            let mv;

            if (this.modelValue instanceof Array) {
                mv = this.modelValue.includes(this.value);
            } else {
                mv = this.modelValue === this.trueValue;
            }

            return mv;
        },
        classes() {
            const classes = ['hm-selector-el'];

            if (this.disabled) {
                classes.push('disabled');
            }

            return classes;
        },
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
    render() {
        // Might be broken in Vue3
        const parentUid = this.$parent._uid;

        return (
            <div class={this.classes}>
                <input
                    type="checkbox"
                    id={this.safeId}
                    name={`hm_sel_${parentUid}`}
                    checked={this.isChecked}
                    disabled={this.isDisabled}
                    value={this.value}
                    onChange={this.onInputChange} />
                <div class="hm-selector-el-slot">
                    { this.$slots.default }
                </div>
                <label for={this.safeId}></label>
            </div>
        );
    }
};
