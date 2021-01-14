<script>
import variantMixin from './variantMixin';
import sizeMixin from './sizeMixin';

export default {
    mixins: [sizeMixin, variantMixin]
};
</script>

<template>
    <div>
        <h2 class="mb-5">Dropdown</h2>

        <div class="p-5 bg-light rounded">
            <div class="row">
                <div class="col">
                    <b-form-group label="Variant">
                        <b-form-radio-group
                            :options="variants"
                            stacked
                            v-model="variant"
                        />
                    </b-form-group>
                </div>
                <div class="col">
                    <b-form-group label="Size">
                        <b-form-radio-group
                            :options="sizes"
                            stacked
                            v-model="size"
                        />
                    </b-form-group>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col">
                <div class="mt-4">
                    <h5>Dropdown with child elements</h5>
                    <hm-dropdown
                        :variant="variant"
                        :size="size">
                        <template v-slot:button-content>Dropdown</template>
                        <hm-dropdown-item>Текстовый текст</hm-dropdown-item>
                        <hm-dropdown-item>Информационный текст</hm-dropdown-item>
                        <hm-dropdown-item>Карусельный текст</hm-dropdown-item>
                        <hm-dropdown-item>Текстовый текст</hm-dropdown-item>
                        <hm-dropdown-divider></hm-dropdown-divider>
                        <hm-dropdown-item-button>Button</hm-dropdown-item-button>
                    </hm-dropdown>
                </div>
            </div>
            <div class="col">
                <div class="mt-4">
                    <h5>Split dropdown + template</h5>
                    <hm-dropdown
                        split
                        :variant="variant"
                        :size="size">
                        <template v-slot:button-content>Split Dropdown</template>
                        <div class="p-3">
                            Some random content with custom <hm-badge :variant="variant">template</hm-badge>
                        </div>
                    </hm-dropdown>
                </div>
            </div>
        </div>
    </div>
</template>
