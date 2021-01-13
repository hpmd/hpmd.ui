<script>
    export default {
        data() {
            return {
                selectors: {
                    active: {
                        text: 'Активная',
                        disabled: false
                    },
                    available: {
                        text: 'Доступная',
                        disabled: false
                    },
                    nonactive: {
                        text: 'Неактивная',
                        disabled: true
                    }
                },
                selectorModel: ['active']
            };
        }
    };
</script>


<template>
    <div class="bg-white p-5 shadow rounded mb-8">
        <h2 class="mb-9">Selector</h2>

        <div class="mt-4">
            <hm-selector layout="inline-block">
                <hm-selector-el
                    v-for="(selector, key) in selectors"
                    v-model="selectorModel"
                    :key="`selector-${key}`"
                    :value="key"
                    :disabled="selector.disabled"
                    :checkbox-limit="3">
                    {{selector.text}}
                </hm-selector-el>
            </hm-selector>
        </div>
    </div>
</template>
