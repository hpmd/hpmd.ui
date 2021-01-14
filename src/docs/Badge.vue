<script>
import variantMixin from './variantMixin';

const example = `<div
    v-for="n in 6"
    :key="\`h-\${n}\`">
    <component :is="\`h\${n}\`" class="text-dark">
        {{\`H\${n}: \`}}
        <hm-badge
            :variant="variant"
            :pill="isPill">
            {{variant}}
        </hm-badge>
    </component>
</div>`;

export default {
    mixins: [variantMixin],
    data() {
        return {
            example,
            isPill: false
        };
    }
};
</script>

<template>
    <section>
        <h2 class="mb-4 display-4">Badge</h2>

        <h3 class="mt-8">Компоненты</h3>
        <ul>
            <li><strong>HmBadge</strong> <hm-badge variant="primary">Bootstrap Vue</hm-badge> <hm-badge variant="success">No changes</hm-badge></li>
        </ul>

        <h3 class="mt-8">Использование</h3>

        <div class="p-5 bg-light rounded">
            <div class="row">
                <div class="col">
                    <hm-form-group label="Variant">
                        <hm-radio-group
                            :options="variants"
                            v-model="variant"
                        />
                    </hm-form-group>
                </div>
            </div>

            <div class="mt-3">
                <b-form-checkbox v-model="isPill">Is pill</b-form-checkbox>
            </div>
        </div>


        <div class="mt-5">
            <div
                v-for="n in 6"
                :key="`h-${n}`">
                <component :is="`h${n}`" class="text-dark">
                    {{`H${n}: `}}
                    <hm-badge
                        :variant="variant"
                        :pill="isPill">
                        {{variant}}
                    </hm-badge>
                </component>
            </div>
        </div>

        <hr>

        <div class="code-block">
            <pre v-highlightjs="example"><code class="html"></code></pre>
        </div>

        <h3 class="mt-8">Документация</h3>
        <p><a href="https://bootstrap-vue.org/docs/components/badge">BootstrapVue</a></p>
    </section>
</template>
