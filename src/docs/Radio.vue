<script>
    export default {
        data() {
            return {
                radioModels: [
                    {
                        key: 'active',
                        label: 'Аctive',
                        value: '',
                        class: '',
                        disabled: false
                    },
                    {
                        key: 'hover',
                        label: 'Hover',
                        value: '',
                        class: 'custom-radio__hover',
                        disabled: false
                    },
                    {
                        key: 'focus',
                        label: 'Focus',
                        value: '',
                        class: 'custom-radio__focus',
                        disabled: false
                    },
                    {
                        key: 'on',
                        label: 'On',
                        value: 'on',
                        class: '',
                        disabled: false
                    },
                    {
                        key: 'disabled',
                        label: 'Disabled',
                        value: '',
                        class: '',
                        disabled: true
                    },
                    {
                        key: 'choiceDisabled',
                        label: 'Choice disabled',
                        value: 'choiceDisabled',
                        class: '',
                        disabled: true
                    }
                ],
                model: null
            };
        }
    };
</script>


<template>
    <div class="mb-4">
        <h4>Radio</h4>

        <div
            v-for="radioModel in radioModels"
            :key="`radio-${radioModel.key}`"
            class="mt-4">
            <hm-form-group>
                <hm-radio
                    :class="radioModel.class"
                    :disabled="radioModel.disabled"
                    :value="radioModel.key"
                    v-model="model.value"
                    name="radio-btns">
                    {{radioModel.label}}
                </hm-radio>
            </hm-form-group>
        </div>
    </div>
</template>
