<script>
    export default {
        data() {
            return {
                showAlert: true,
                variant: 'success',
                variants: [
                    'success',
                    'info',
                    'danger',
                    'warning',
                    'primary'
                ]
            };
        }
    };
</script>

<template>
    <div>
        <h2 class="mb-4">Alert</h2>

        <div class="p-5 bg-light rounded">
            <div class="row">
                <div class="col">
                    <hm-radio-group
                        v-model="variant"
                        :options="variants"
                        stacked>
                    </hm-radio-group>
                </div>
                <div class="col">
                    <hm-button
                        variant="primary"
                        size="md"
                        @click="showAlert = true">
                        Show alert
                    </hm-button>
                </div>
            </div>
        </div>

        <div class="mt-4">
            <hm-alert
                dismissible
                :show="showAlert"
                :variant="variant"
                @dismissed="showAlert = false">
                <p class="mb-0">
                    <b>Well done!</b> You successfully read
                    <b>this important alert message.</b>
                </p>
            </hm-alert>
        </div>
    </div>
</template>
