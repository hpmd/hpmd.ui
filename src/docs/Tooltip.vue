<script>
import variantMixin from './variantMixin';

const example = `<hm-button id="tooltip-target">Interact me</hm-button>

<hm-tooltip
    target="tooltip-target"
    :variant="variant"
    :placement="placement"
    :triggers="trigger">
    Yay! Tooltip!
</hm-tooltip>`;

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
        <h2 class="mb-8 display-4">Tooltip</h2>

        <h3 class="mt-8">Компоненты</h3>
        <ul>
            <li>
                <strong>HmTooltip</strong> <hm-badge variant="primary">Bootstrap Vue</hm-badge> <hm-badge variant="success">No changes</hm-badge>
            </li>
        </ul>

        <h3 class="mt-8">Использование</h3>

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
            <hm-button id="tooltip-target">Interact me</hm-button>

            <hm-tooltip
                target="tooltip-target"
                :variant="variant"
                :placement="placement"
                :triggers="trigger">
                Yay! Tooltip!
            </hm-tooltip>
        </div>

        <hr>

        <div class="code-block">
            <pre v-highlightjs="$options.example"><code class="html"></code></pre>
        </div>

        <h3 class="mt-8">Документация</h3>
        <p><a href="https://bootstrap-vue.org/docs/components/tooltip">Bootstrap Vue</a></p>
    </section>
</template>
