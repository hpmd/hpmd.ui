<script>
const example = `<hm-textarea
    v-model="text"
    :disabled="isDisabled"
    :max-rows="maxRows"
    :rows="rows"
    :no-auto-shrink="noAutoShrink"
    :no-resize="noResize"
/>`;

export default {
    data() {
        return {
            example,
            isDisabled: false,
            noAutoShrink: false,
            noResize: false,
            rows: 2,
            maxRows: 20,
            text: ''
        };
    }
};
</script>

<template>
    <div>
        <h2 class="mb-4 display-4">Textarea</h2>

        <h3 class="mt-8">Компоненты</h3>
        <ul>
            <li><span class="version">0.16.0</span> <strong>HmTextarea</strong> <hm-badge variant="primary">Bootstrap Vue</hm-badge> <hm-badge variant="success">No changes</hm-badge></li>
        </ul>

        <h3 class="mt-8">Использование</h3>

        <div class="p-5 bg-light rounded">
            <div class="row">
                <div class="col">
                        <hm-checkbox v-model="isDisabled">Disabled</hm-checkbox>
                        <hm-checkbox v-model="noAutoShrink">No auto-shrink</hm-checkbox>
                        <hm-checkbox v-model="noResize">No resize</hm-checkbox>
                </div>
                <div class="col">
                    <hm-input
                        class="mb-4"
                        type="number"
                        v-model="rows"
                        label="rows"
                    />
                    <hm-input
                        type="number"
                        v-model="maxRows"
                        label="max-rows"
                    />
                </div>
            </div>
        </div>

        <div class="mt-4">
            <hm-textarea
                v-model="text"
                :disabled="isDisabled"
                :max-rows="maxRows"
                :rows="rows"
                :no-auto-shrink="noAutoShrink"
                :no-resize="noResize"
            />
            <hr />
            <div class="code-block">
                <pre v-highlightjs="example"><code class="html"></code></pre>
            </div>
        </div>

        <h3 class="mt-8">Документация</h3>
        <p><a href="https://bootstrap-vue.org/docs/components/form-textarea">Bootstrap Vue</a></p>
    </div>
</template>
