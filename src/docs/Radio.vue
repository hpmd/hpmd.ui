<script>
import sizeMixin from './sizeMixin';

const example = `<div class="row">
    <div class="col">
        <h4>HmRadio</h4>

        <hm-form-group>
            <hm-radio
                name="single-el"
                :size="size"
                v-model="singleModel"
                value="first">
                Первый
            </hm-radio>
            <hm-radio
                name="single-el"
                disabled
                :size="size"
                v-model="singleModel"
                value="second">
                Второй
            </hm-radio>
            <hm-radio
                name="single-el"
                :size="size"
                v-model="singleModel"
                value="third">
                Третий
            </hm-radio>
        </hm-form-group>
    </div>
    <div class="col">
        <h4>HmRadioGroup</h4>

        <hm-form-group>
            <hm-radio-group
                :options="['first', 'second', 'third']"
                :size="size"
                stacked
                v-model="groupModel">
            </hm-radio-group>
        </hm-form-group>
    </div>
</div>`;

export default {
    example,

    mixins: [sizeMixin],
    data() {
        return {
            singleModel: 'first',
            groupModel: 'first'
        };
    }
};
</script>


<template>
    <section>
        <h2 class="mb-8 display-4">Radio</h2>

        <h3 class="mt-8">Компоненты</h3>
        <ul>
            <li><strong>HmRadio </strong> <hm-badge variant="primary">Bootstrap Vue</hm-badge> <hm-badge variant="success">No changes</hm-badge></li>
            <li><span class="version">0.9.0</span> <strong>HmRadioGroup </strong> <hm-badge variant="primary">Bootstrap Vue</hm-badge> <hm-badge variant="success">No changes</hm-badge></li>
        </ul>

        <h3 class="mt-8">Использование</h3>

        <div class="p-5 mb-5 bg-light rounded">
            <hm-form-group label="Size">
                <hm-radio-group :options="sizes.slice(1)" v-model="size"></hm-radio-group>
            </hm-form-group>
        </div>
        <div class="row">
            <div class="col">
                <h4>HmRadio</h4>

                <hm-form-group>
                    <hm-radio
                        name="single-el"
                        :size="size"
                        v-model="singleModel"
                        value="first">
                        Первый
                    </hm-radio>
                    <hm-radio
                        name="single-el"
                        disabled
                        :size="size"
                        v-model="singleModel"
                        value="second">
                        Второй
                    </hm-radio>
                    <hm-radio
                        name="single-el"
                        :size="size"
                        v-model="singleModel"
                        value="third">
                        Третий
                    </hm-radio>
                </hm-form-group>
            </div>
            <div class="col">
                <h4>HmRadioGroup</h4>

                <hm-form-group>
                    <hm-radio-group
                        :options="['first', 'second', 'third']"
                        :size="size"
                        stacked
                        v-model="groupModel">
                    </hm-radio-group>
                </hm-form-group>
            </div>
        </div>

        <hr>

        <div class="code-block">
            <pre v-highlightjs="$options.example"><code class="html"></code></pre>
        </div>

        <h3 class="mt-8">Документация</h3>
        <p><a href="https://bootstrap-vue.org/docs/components/form-radio">Bootstrap Vue</a></p>
    </section>
</template>
