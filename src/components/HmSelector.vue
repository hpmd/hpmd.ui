<script>
export default {
    name: 'HmSelector',
    props: {
        horizontal: {
            type: Boolean,
            default: false
        },
        layout: {
            type: String,
            default: 'flex-column'
        }
    }
};
</script>


<template>
    <div class="hm-selector"
        :class="`hm-selector-${layout}`">
        <slot></slot>
    </div>
</template>
