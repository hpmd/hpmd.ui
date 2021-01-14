<script>
import variantMixin from './variantMixin';

const example = `<hm-alert
    dismissible
    v-model="showAlert"
    :variant="variant"
    @dismissed="showAlert = false">
    <p class="mb-0">
        <b>Well done!</b> You successfully read
        <b>this important alert message.</b>
    </p>
</hm-alert>`;
export default {
    mixins: [variantMixin],
    data() {
        return {
            example,
            showAlert: false
        };
    }
};
</script>

<template>
    <div>
        <h2 class="mb-4 display-4">Alert</h2>

        <h3 class="mt-8">Компоненты</h3>
        <ul>
            <li><strong>HmAlert</strong> <hm-badge variant="primary">Bootstrap Vue</hm-badge> <hm-badge variant="success">No changes</hm-badge></li>
        </ul>

        <h3 class="mt-8">Использование</h3>

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
                        :disabled="showAlert"
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
                v-model="showAlert"
                :variant="variant"
                @dismissed="showAlert = false">
                <p class="mb-0">
                    <b>Well done!</b> You successfully read
                    <b>this important alert message.</b>
                </p>
            </hm-alert>
            <hr>
            <div class="code-block">
                <pre v-highlightjs="example"><code class="html"></code></pre>
            </div>
        </div>

        <h3 class="mt-8">Документация</h3>
        <p><a href="https://bootstrap-vue.org/docs/components/alert">BootstrapVue</a></p>
    </div>
</template>
