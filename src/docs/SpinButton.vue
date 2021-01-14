<script>
export default {
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
    <div>
        <h2 class="mb-9">Spin Button</h2>

        <div class="p-5 mb-5 bg-light rounded">
            <hm-checkbox v-model="isInline">Is Inline</hm-checkbox>

            <hm-checkbox v-model="isVertical">Is vertical</hm-checkbox>

            <hm-checkbox v-model="isDisabled">Is Disabled</hm-checkbox>
        </div>

        <hm-form-spinbutton
            :inline="isInline"
            :vertical="isVertical"
            :disabled="isDisabled"
            v-model="spinButtonModel"
        />
    </div>
</template>
