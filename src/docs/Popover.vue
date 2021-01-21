<script>
import variantMixin from './variantMixin';
const example = `<hm-button
    id="popover-target"
    variant="primary">
    Interact me!
</hm-button>

<hm-popover
    :placement="placement"
    target="popover-target"
    :triggers="trigger"
    :variant="variant">
    <template v-slot:title>Popover title</template>
    <div>
        Some amazing <hm-badge variant="primary">content</hm-badge>!
    </div>
</hm-popover>`;

export default {
    example,

    mixins: [variantMixin],
    data() {
        return {
            placement: 'top',
            trigger: 'hover'
        };
    }
};
</script>


<template>
    <section>
        <h2 class="mb-8 display-4">Popover</h2>

        <h3 class="mt-8">Компоненты</h3>
        <ul>
            <li><strong>HmPopover</strong> <hm-badge variant="primary">Bootstrap Vue</hm-badge> <hm-badge variant="success">No changes</hm-badge></li>
        </ul>

        <h3 class="mt-8">Использование</h3>
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
                        <hm-radio-group
                            :options="variants"
                            stacked
                            v-model="variant"
                        />
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
            <hm-button
                id="popover-target"
                variant="primary">
                Interact me!
            </hm-button>

            <hm-popover
                :placement="placement"
                target="popover-target"
                :triggers="trigger"
                :variant="variant">
                <template v-slot:title>Popover title</template>
                <div>
                    Some amazing <hm-badge variant="primary">content</hm-badge>!
                </div>
            </hm-popover>
        </div>

        <hr>

        <div class="code-block">
            <pre v-highlightjs="$options.example"><code class="html"></code></pre>
        </div>

        <h3 class="mt-8">Документация</h3>
        <p><a href="https://bootstrap-vue.org/docs/components/popover">Bootstrap Vue</a></p>
    </section>
</template>
