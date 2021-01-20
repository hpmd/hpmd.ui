<script>
const example = `<hm-input-group class="mb-5">
    <hm-input
        label="Append slot"
        v-model="model1"
    />

    <template v-slot:append>
        <hm-button variant="primary">test</hm-button>
    </template>
</hm-input-group>

<hm-input-group class="mb-5">
    <hm-input-group-prepend>
        <hm-button variant="warning">Left action</hm-button>
    </hm-input-group-prepend>
    <hm-input
        label="Prepend component"
        v-model="model2"
    />
</hm-input-group>

<hm-input-group class="mb-5">
    <hm-input-group-prepend is-text>
        Just any text
    </hm-input-group-prepend>

    <hm-input
        label="Text prepend"
        v-model="model3"
    />
</hm-input-group>

<hm-input-group>
    <hm-input-group-prepend>
        <hm-dropdown
            text="Choose"
            variant="warning">
            <hm-dropdown-item>Option 1</hm-dropdown-item>
            <hm-dropdown-item>Option 2</hm-dropdown-item>
        </hm-dropdown>
    </hm-input-group-prepend>

    <hm-input
        label="Both sides"
        v-model="model4"
    />

    <hm-input-group-append>
        <hm-button variant="primary">Action!</hm-button>
    </hm-input-group-append>
</hm-input-group>`;

export default {
    example,

    data() {
        return {
            model1: '',
            model2: '',
            model3: '',
            model4: ''
        };
    }
};
</script>


<template>
    <section>
        <h2 class="mb-8 display-4">Input Group</h2>

        <h3 class="mt-8">Компоненты</h3>
        <ul>
            <li>
                <strong>HmInputGroup</strong> <hm-badge variant="primary">Bootstrap Vue</hm-badge> <hm-badge variant="success">No changes</hm-badge>
            </li>
            <li>
                <strong>HmInputGroupAddon</strong> <hm-badge variant="primary">Bootstrap Vue</hm-badge> <hm-badge variant="success">No changes</hm-badge>
            </li>
            <li>
                <strong>HmInputGroupAppend</strong> <hm-badge variant="primary">Bootstrap Vue</hm-badge> <hm-badge variant="success">No changes</hm-badge>
            </li>
            <li>
                <strong>HmInputGroupPrepend</strong> <hm-badge variant="primary">Bootstrap Vue</hm-badge> <hm-badge variant="success">No changes</hm-badge>
            </li>
            <li>
                <strong>HmInputGroupText</strong> <hm-badge variant="primary">Bootstrap Vue</hm-badge> <hm-badge variant="success">No changes</hm-badge>
            </li>
        </ul>

        <h3 class="mt-8">Использование</h3>
        <hm-input-group class="mb-5">
            <hm-input
                label="Append slot"
                v-model="model1"
            />

            <template v-slot:append>
                <hm-button variant="primary">test</hm-button>
            </template>
        </hm-input-group>

        <hm-input-group class="mb-5">
            <hm-input-group-prepend>
                <hm-button variant="warning">Left action</hm-button>
            </hm-input-group-prepend>
            <hm-input
                label="Prepend component"
                v-model="model2"
            />
        </hm-input-group>

        <hm-input-group class="mb-5">
            <hm-input-group-prepend is-text>
                Just any text
            </hm-input-group-prepend>

            <hm-input
                label="Text prepend"
                v-model="model3"
            />
        </hm-input-group>

        <hm-input-group>
            <hm-input-group-prepend>
                <hm-dropdown
                    text="Choose"
                    variant="warning">
                    <hm-dropdown-item>Option 1</hm-dropdown-item>
                    <hm-dropdown-item>Option 2</hm-dropdown-item>
                </hm-dropdown>
            </hm-input-group-prepend>

            <hm-input
                label="Both sides"
                v-model="model4"
            />

            <hm-input-group-append>
                <hm-button variant="primary">Action!</hm-button>
            </hm-input-group-append>
        </hm-input-group>

        <hr>

        <div class="code-block">
            <pre v-highlightjs="$options.example"><code class="html"></code></pre>
        </div>

        <h3 class="mt-8">Документация</h3>
        <p><a href="https://bootstrap-vue.org/docs/components/input-group">Bootstrap Vue</a></p>
    </section>
</template>