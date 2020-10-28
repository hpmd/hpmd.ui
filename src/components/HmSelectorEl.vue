<script>
export default {
    name: 'HmSelectorEl',
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
        // checkbox specific
        checkboxLimit: {
            type: Number,
            default: 0 // 0 - no limitation, 1 = [checked], 2 = [checked1, checked2] etc.
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
            const classes = [];

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
    }
};
</script>


<template>
    <div class="hm-selector-el"
        :class="classes">
        <input
            type="checkbox"
            :id="safeId"
            :name="`hm_sel_${$parent._uid}`"
            :checked="isChecked"
            :disabled="isDisabled"
            :value="value"
            v-on:change="onInputChange">
        <div class="hm-selector-el-slot">
            <slot></slot>
        </div>
        <label :for="safeId"></label>
    </div>
</template>
