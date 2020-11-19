import { Multiselect as HmSelect } from 'vue-multiselect';

export default {
    extends: HmSelect,
    computed: {
        inputStyle() {
            let result = {};

            if (
                this.searchable ||
                (this.multiple && this.value && this.value.length)
            ) {
                // Hide input by setting the width to 0 allowing it to receive focus
                if (this.isOpen) {
                    result = { width: '100%' };
                } else {
                    result = {
                        width: '0',
                        position: 'absolute',
                        padding: '0'
                    };
                }

                if (this.value && this.value.length) {
                    result['margin-top'] = '8px';
                }
            }

            return result;
        }
    }
};
