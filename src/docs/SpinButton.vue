<script>
const example = `<hm-form-spinbutton
    :disabled="isDisabled"
    :inline="isInline"
    v-model="spinButtonModel"
    :vertical="isVertical"
/>`;

export default {
    example,

    data() {
        return {
            isDisabled: false,
            isVertical: false,
            isInline: false,
            spinButtonModel: 0
        };
    }
};
</script>

<template>
    <section>
        <h2 class="mb-8 display-4">Spin Button</h2>

        <h3 class="mt-8">Компоненты</h3>
        <ul>
            <li>
                <strong>HmSpinButton</strong> <hm-badge variant="primary">Bootstrap Vue</hm-badge> <hm-badge variant="success">No changes</hm-badge>
            </li>
        </ul>

        <h3 class="mt-8">Использование</h3>
        <div class="p-5 mb-5 bg-light rounded">
            <hm-checkbox v-model="isInline">Is Inline</hm-checkbox>
            <hm-checkbox v-model="isVertical">Is vertical</hm-checkbox>
            <hm-checkbox v-model="isDisabled">Is Disabled</hm-checkbox>
        </div>

        <hm-form-spinbutton
            :disabled="isDisabled"
            :inline="isInline"
            v-model="spinButtonModel"
            :vertical="isVertical"
        />

        <hr>

        <div class="code-block">
            <pre v-highlightjs="$options.example"><code class="html"></code></pre>
        </div>

        <h3 class="mt-8">Документация</h3>
        <p><a href="https://bootstrap-vue.org/docs/components/form-spinbutton">Bootstrap Vue</a></p>
    </section>
</template>
