<script>
    export default {
        data() {
            return {
                placement: 'top',
                variant: 'default',
                trigger: 'hover'
            };
        }
    };
</script>


<template>
    <div class="bg-white p-5 shadow rounded mb-8">
        <h2 class="mb-9">Popovers</h2>

        <div class="mb-6 bg-light rounded p-5">
            <div class="row">
                <div class="col-4">
                    <hm-form-group>
                        <hm-radio v-model="placement" value="left" name="po-placement">Left</hm-radio>
                        <hm-radio v-model="placement" value="top" name="po-placement">Top</hm-radio>
                        <hm-radio v-model="placement" value="right" name="po-placement">Right</hm-radio>
                        <hm-radio v-model="placement" value="bottom" name="po-placement">Bottom</hm-radio>
                    </hm-form-group>
                </div>
                <div class="col-4">
                    <hm-form-group label="Variant">
                        <hm-radio v-model="variant" name="po-variant" value="default">Default</hm-radio>
                        <hm-radio v-model="variant" name="po-variant" value="primary">Primary</hm-radio>
                        <hm-radio v-model="variant" name="po-variant" value="warning">Warning</hm-radio>
                        <hm-radio v-model="variant" name="po-variant" value="danger">Danger</hm-radio>
                        <hm-radio v-model="variant" name="po-variant" value="light">Light</hm-radio>
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
            <hm-button id="popover-target" variant="primary">Interact me!</hm-button>

            <hm-popover
                target="popover-target"
                :variant="variant"
                :placement="placement"
                :triggers="trigger">
                <template #title>Popover title</template>
                <div>
                    Some amazing <hm-badge variant="primary">content</hm-badge>!
                </div>
            </hm-popover>
        </div>
    </div>
</template>
