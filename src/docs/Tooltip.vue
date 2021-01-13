<script>
    export default {
        data() {
            return {
                placement: 'top',
                variant: 'black',
                trigger: 'hover'
            };
        }
    };
</script>

<template>
    <div class="bg-white p-5 shadow rounded mb-8">
        <h2 class="mb-4">Tooltips</h2>

        <div class="bg-light p-5 rounded mb-6">
            <div class="row">
                <div class="col-4">
                    <hm-form-group stacked label="Placement">
                        <hm-radio v-model="placement" name="tt-placement" value="left">Left</hm-radio>
                        <hm-radio v-model="placement" name="tt-placement" value="top">Top</hm-radio>
                        <hm-radio v-model="placement" name="tt-placement" value="right">Right</hm-radio>
                        <hm-radio v-model="placement" name="tt-placement" value="bottom">Bottom</hm-radio>
                    </hm-form-group>
                </div>
                <div class="col-4">
                    <hm-form-group label="Variant">
                        <hm-radio v-model="variant" name="tt-variant" value="black">Default</hm-radio>
                        <hm-radio v-model="variant" name="tt-variant" value="primary">Primary</hm-radio>
                        <hm-radio v-model="variant" name="tt-variant" value="warning">Warning</hm-radio>
                        <hm-radio v-model="variant" name="tt-variant" value="danger">Danger</hm-radio>
                        <hm-radio v-model="variant" name="tt-variant" value="light">Light</hm-radio>
                    </hm-form-group>
                </div>
                <div class="col-4">
                    <hm-form-group label="Trigger">
                        <hm-radio v-model="trigger" value="click">Click</hm-radio>
                        <hm-radio v-model="trigger" value="hover">Hover</hm-radio>
                        <hm-radio v-model="trigger" value="focus">Focus</hm-radio>
                    </hm-form-group>
                </div>
            </div>
        </div>

        <div>
            <hm-button id="tooltip-target">Interact me</hm-button>

            <hm-tooltip
                target="tooltip-target"
                :variant="variant"
                :placement="placement"
                :triggers="trigger">
                Yay! Tooltip!
            </hm-tooltip>
        </div>
    </div>
</template>
