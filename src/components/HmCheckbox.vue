<script>
import { BFormCheckbox } from 'bootstrap-vue';

export default {
    extends: BFormCheckbox,
    /**
     * Most data inherited from
     * @see bootstrap-vue/src/components/form-input/checkbox.js
     * and related mixins in form-input:
     * @see bootstrap-vue/src/mixins/*
     */
    props: {
        value: {
            default: true
        },
        uncheckedValue: {
            default: false
        },
        indeterminate: {
            type: Boolean,
            default: false
        },
        checked: {
            default: null
        }
    },
    methods: {
        handleInput(val) {
            this.$emit('input', val);
        }
    },
    render() {
        const {
            handleInput,
            value,
            uncheckedValue,
            indeterminate,
            checked
        } = this;
        const on = {};

        on.input = handleInput;

        return (
            <BFormCheckbox
                value={value}
                { ...{ on } }
                uncheckedValue={uncheckedValue}
                indeterminate={indeterminate}
                checked={checked}
                class="hm-checkbox">
                { !!this.$slots.default && (
                    <span class="hm-checkbox__slot">{this.$slots.default}</span>
                ) }
            </BFormCheckbox>
        );
    }
};
</script>
