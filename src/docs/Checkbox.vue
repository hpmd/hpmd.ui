<script>
    export default {
        data() {
            return {
                checkboxModels: [
                    {
                        key: 'active',
                        label: 'Аctive',
                        value: false,
                        class: '',
                        disabled: false
                    },
                    {
                        key: 'hover',
                        label: 'Hover',
                        value: false,
                        class: 'custom-checkbox__hover',
                        disabled: false
                    },
                    {
                        key: 'focus',
                        label: 'Focus',
                        value: false,
                        class: 'custom-checkbox__focus',
                        disabled: false
                    },
                    {
                        key: 'on',
                        label: 'On',
                        value: true,
                        class: '',
                        disabled: false
                    },
                    {
                        key: 'disabled',
                        label: 'Disabled',
                        value: false,
                        class: '',
                        disabled: true
                    },
                    {
                        key: 'choiceDisabled',
                        label: 'Choice disabled',
                        value: true,
                        class: '',
                        disabled: true
                    }
                ],
                switchModels: [
                    {
                        key: 'active',
                        label: 'Аctive',
                        value: false,
                        class: '',
                        disabled: false
                    },
                    {
                        key: 'hover',
                        label: 'Hover',
                        value: false,
                        class: 'custom-switch__hover',
                        disabled: false
                    },
                    {
                        key: 'focus',
                        label: 'Focus',
                        value: false,
                        class: 'custom-switch__focus',
                        disabled: false
                    },
                    {
                        key: 'on',
                        label: 'On',
                        value: true,
                        class: '',
                        disabled: false
                    },
                    {
                        key: 'disabled',
                        label: 'Disabled',
                        value: false,
                        class: '',
                        disabled: true
                    },
                    {
                        key: 'choiceDisabled',
                        label: 'Choice disabled',
                        value: true,
                        class: '',
                        disabled: true
                    }
                ]
            };
        }
    };
</script>


<template>
    <div class="row">
        <div class="col-6">
            <div class="mb-4">
                <h4>Checkbox</h4>

                <div
                    class="mt-4"
                    v-for="checkboxModel in checkboxModels"
                    :key="`checkbox-${checkboxModel.key}`">
                    <hm-checkbox
                        :class="checkboxModel.class"
                        :disabled="checkboxModel.disabled"
                        v-model="checkboxModel.value">
                        {{checkboxModel.label}}
                    </hm-checkbox>
                </div>
            </div>
        </div>
        <div class="col-6">
            <div class="mb-4">
                <h4>Toggles</h4>

                <div
                    class="mt-4"
                    v-for="switchModel in switchModels"
                    :key="`checkbox-${switchModel.key}`">
                    <hm-checkbox
                        switch
                        :class="switchModel.class"
                        :disabled="switchModel.disabled"
                        v-model="switchModel.value">
                        {{switchModel.label}}
                    </hm-checkbox>
                </div>
            </div>
        </div>
    </div>
</template>
