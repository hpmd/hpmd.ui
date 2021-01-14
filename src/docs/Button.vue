<script>
import sizeMixin from './sizeMixin';
import variantMixin from './variantMixin';

const example = `<div class="mb-4 mt-5">
    <hm-button
        :disabled="isDisabled"
        :variant="curVariant"
        :size="size"
        :class="type === 'link' ? \`text-\${variant}\` : ''">
        Fancy button
    </hm-button>
</div>
<hm-button-group>
    <hm-button :disabled="isDisabled"
        :variant="curVariant"
        :size="size"
        :class="type === 'link' ? \`text-\${variant}\` : ''">
        some action
    </hm-button>
    <hm-button
        variant="primary"
        :size="size">
        second action
    </hm-button>
</hm-button-group>`;

export default {
    mixins: [sizeMixin, variantMixin],
    data() {
        return {
            example,
            isDisabled: false,
            types: ['solid', 'outline', 'link'],
            type: 'solid'
        };
    },
    computed: {
        curVariant() {
            const { type, variant } = this;

            if (type === 'link') {
                return type;
            } else if (type === 'solid') {
                return variant;
            } else if (type === 'outline') {
                return `outline-${variant}`;
            }

            return variant;
        }
    }
};
</script>

<template>
    <div>
        <h2 class="mb-8 display-4">Button</h2>

        <h3 class="mt-8">Компоненты</h3>
        <ul>
            <li><strong>HmButton (HmBtn) </strong> <hm-badge variant="primary">Bootstrap Vue</hm-badge> <hm-badge variant="success">No changes</hm-badge></li>
            <li><strong>HmButtonClose (HmBtnClose)</strong> <hm-badge variant="primary">Bootstrap Vue</hm-badge> <hm-badge variant="success">No changes</hm-badge></li>
        </ul>

        <h3 class="mt-8">Использование</h3>
        <div class="p-5 bg-light rounded">
            <div class="row">
                <div class="col">
                    <hm-form-group label="Size">
                        <hm-radio-group
                            :options="sizes"
                            v-model="size"
                            stacked
                        />
                    </hm-form-group>
                </div>
                <div class="col">
                    <hm-form-group label="Variant">
                        <hm-radio-group
                            :options="variants"
                            v-model="variant"
                            stacked
                        />
                    </hm-form-group>
                </div>
                <div class="col">
                    <hm-form-group label="Style">
                        <hm-radio-group
                            :options="types"
                            v-model="type"
                            stacked
                        />
                    </hm-form-group>

                    <hm-checkbox v-model="isDisabled">Is Disabled?</hm-checkbox>
                </div>
            </div>
        </div>

        <div class="mb-4 mt-5">
            <hm-button
                :disabled="isDisabled"
                :variant="curVariant"
                :size="size"
                :class="type === 'link' ? `text-${variant}` : ''">
                Fancy button
            </hm-button>
        </div>
        <hm-button-group>
            <hm-button :disabled="isDisabled"
                :variant="curVariant"
                :size="size"
                :class="type === 'link' ? `text-${variant}` : ''">
                some action
            </hm-button>
            <hm-button
                variant="primary"
                :size="size">
                second action
            </hm-button>
        </hm-button-group>

        <hr>

        <div class="code-block">
            <pre v-highlightjs="example"><code class="html"></code></pre>
        </div>

        <h3 class="mt-8">Документация</h3>
        <p><a href="https://bootstrap-vue.org/docs/components/button">BootstrapVue</a></p>
    </div>
</template>
