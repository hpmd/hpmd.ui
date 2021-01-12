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
        <h2 class="mb-4">Alert / Toast</h2>

        <h3>Пример использования</h3>

        <div class="row">
            <div class="col-6">
                <div class="bg-secondary p-3">
                    <div class="mt-4">
                        <hm-alert
                            dismissible
                            :show="showAlert"
                            variant="success">
                            <p class="mb-0">
                                <b>Well done!</b> You successfully read
                                <b>this important alert message.</b>
                            </p>
                        </hm-alert>
                    </div>
                    <div class="mt-4">
                        <hm-alert
                            dismissible
                            :show="showAlert"
                            variant="info">
                            <p class="mb-0">
                                <b>Heads up!</b> This <b>alert needs your attention,</b>
                                but it's not super important.
                            </p>
                        </hm-alert>
                    </div>
                    <div class="mt-4">
                        <hm-alert
                            dismissible
                            :show="showAlert"
                            variant="warning">
                            <p class="mb-0">
                                <b>Warning!</b> Better check yourself,
                                you're <b>not looking too good.</b>
                            </p>
                        </hm-alert>
                    </div>
                    <div class="mt-4">
                        <hm-alert
                            dismissible
                            :show="showAlert"
                            variant="danger">
                            <p class="mb-0">
                                <b>Oh snap! Change a few things up</b>
                                and try submitting again.
                            </p>
                        </hm-alert>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>