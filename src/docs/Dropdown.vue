<script>
import variantMixin from './variantMixin';
import sizeMixin from './sizeMixin';

const example = `<div class="col">
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
</div>`;

export default {
    mixins: [sizeMixin, variantMixin],
    example,
    data() {
        return {
            directions: ['auto', 'right', 'left', 'top'],
            direction: []
        };
    }
};
</script>

<template>
    <section>
        <h2 class="mb-5 display-4">Dropdown</h2>

        <h3 class="mt-8">Компоненты</h3>
        <ul>
            <li><strong>HmDropdown </strong> <hm-badge variant="primary">Bootstrap Vue</hm-badge> <hm-badge variant="danger">No changes</hm-badge></li>
            <li><strong>HmDropdownDivider </strong> <hm-badge variant="primary">Bootstrap Vue</hm-badge> <hm-badge variant="danger">No changes</hm-badge></li>
            <li><strong>HmDropdownItem </strong> <hm-badge variant="primary">Bootstrap Vue</hm-badge> <hm-badge variant="danger">No changes</hm-badge></li>
            <li><strong>HmDropdownItemButton </strong> <hm-badge variant="primary">Bootstrap Vue</hm-badge> <hm-badge variant="danger">No changes</hm-badge></li>
        </ul>

        <h3 class="mt-8">Использование</h3>
        <div class="p-5 bg-light rounded my-5">
            <b-form-group label="Variant">
                <b-form-radio-group
                    :options="variants"
                    v-model="variant"
                />
            </b-form-group>
            <b-form-group label="Size">
                <b-form-radio-group
                    :options="sizes"
                    v-model="size"
                />
            </b-form-group>
            <b-form-group label="Direction">
                <b-form-radio-group
                    :options="directions"
                    v-model="direction"
                 />
            </b-form-group>
        </div>

        <div class="row">
            <div class="col">
                <div class="mt-4">
                    <h5>Dropdown with child elements</h5>
                    <hm-dropdown
                        :dropleft="direction === 'left'"
                        :dropright="direction === 'right'"
                        :dropup="direction === 'top'"
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
                        :dropleft="direction === 'left'"
                        :dropright="direction === 'right'"
                        :dropup="direction === 'top'"
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

        <hr>

        <div class="code-block">
            <pre v-highlightjs="$options.example"><code class="html"></code></pre>
        </div>

        <h3 class="mt-8">Документация</h3>
        <p><a href="https://bootstrap-vue.org/docs/components/dropdown">BootstrapVue</a></p>
    </section>
</template>
