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
            isFocused: false,
            passwordShow: false
        };
    },
    // methods: {
    //     _modifiedOnFocus(e) {
    //         this.isFocused = true;
    //         /**
    //          * @this {BFormInput}
    //          */
    //         this.onFocus(e);
    //     },
    //     _modifiedOnBlur(e) {
    //         this.isFocused = false;
    //         /**
    //          * @this {BFormInput}
    //          */
    //         this.onBlur(e);
    //     }
    // },
    render() {
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

        if (!_bv.localValue) {
            inputClass = [..._bv.computedClass, 'empty'];
        }

        const shouldAddPrepend = !!this.$slots.prepend;
        const shouldAddAppend = !!this.$slots.append;
        const shouldAddPasswordBtn = !!(this.showPasswordBtn && _bv.type === 'password');
        const shouldAddClearBtn = !!(this.showClearBtn && _bv.localValue.length && !_bv.disabled);


        return (
            <div class={['form-control-wrap', this.isFocused ? 'focused' : '']}>
                {/* prepend slot */ }
                { shouldAddPrepend && (
                    <div class="form-control-extra-prepend">
                        {this.$slots.prepend}
                    </div>
                ) }

                {/* input itself */}
                <input
                    id={this.id}
                    ref="input"
                    class={ inputClass }
                    { ...{ attrs: inputAttrs }}
                    value={_bv.localValue}
                    { ...{
                        on:  {
                            ..._bv.computedListeners,
                            focus: () => { this.isFocused = true; },
                            blur: () => { this.isFocused = false; }
                        }
                    } } />
                
                {/* label */}
                { !!this.label && (
                    <div class="label">
                        <label for={this.id}>{this.label}</label>
                        <span class="label-bg">{this.label}</span>
                    </div>
                ) }

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
                                            _bv.localValue = _bv.vModelValue = '';
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
</script>