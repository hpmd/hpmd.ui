<script>
import sizeMixin from './sizeMixin';

const example = `<h4>Single Checkboxes</h4>
<div class="row">
    <div class="col">
        <hm-checkbox
            :disabled="isDisabled"
            :size="size"
            :switch="isToggle"
            v-model="checkboxSingle">
            Single checkbox
        </hm-checkbox>
    </div>
</div>

<h4 class="mt-5">Checkbox group</h4>
<div class="row">
    <div class="col">
        <hm-form-group label="Inline Group">
            <hm-checkbox-group
                :disabled="isDisabled"
                :options="checkboxGroup"
                :size="size"
                :switches="isToggle"
                v-model="checkboxGroupSelected"
            />
        </hm-form-group>
    </div>
    <div class="col">
        <hm-form-group label="Stacked Group">
            <hm-checkbox-group
                :disabled="isDisabled"
                :options="checkboxGroup"
                :size="size"
                stacked
                :switches="isToggle"
                v-model="checkboxGroupSelected"
            />
        </hm-form-group>
    </div>
</div>

<h4>No label</h4>
<hm-checkbox
    inline
    :disabled="isDisabled"
    :size="size"
    :switch="isToggle"
    v-model="checkboxEmpty">
</hm-checkbox>`;

export default {
    mixins: [sizeMixin],
    data() {
        return {
            checkboxSingle: false,
            checkboxGroup: new Array(5).fill(5).map((_, i) => `Checkbox El ${i + 1}`),
            checkboxGroupSelected: [],
            example,
            isDisabled: false,
            isToggle: false,
            checkboxEmpty: false
        };
    },
    computed: {
        _sizes() {
            return this.sizes.slice(1);
        }
    }
};
</script>


<template>
    <section>
        <h2 class="display-4 mb-8"> Checkbox</h2>

        <h3 class="mt-8">Компоненты</h3>
        <ul>
            <li><strong>HmCheckbox</strong> <hm-badge variant="primary">Bootstrap Vue</hm-badge> <hm-badge variant="success">No changes</hm-badge></li>
            <li><strong>HmCheckboxGroup</strong> <hm-badge variant="primary">Bootstrap Vue</hm-badge> <hm-badge variant="success">No changes</hm-badge></li>
        </ul>

        <h3 class="mt-8">Использование</h3>

        <div class="p-5 bg-light rounded">

            <hm-form-group label="Size">
                <hm-radio-group
                    :options="_sizes"
                    v-model="size"
                />
            </hm-form-group>

            <hm-checkbox v-model="isDisabled">Is Disabled?</hm-checkbox>
            <hm-checkbox v-model="isToggle">Toggle-style checkbox</hm-checkbox>
        </div>

        <div class="mt-5">
            <h4>Single Checkboxes</h4>
            <div class="row">
                <div class="col">
                    <hm-checkbox
                        :disabled="isDisabled"
                        :size="size"
                        :switch="isToggle"
                        v-model="checkboxSingle">
                        Single checkbox
                    </hm-checkbox>
                </div>
            </div>

            <h4 class="mt-5">Checkbox group</h4>
            <div class="row">
                <div class="col">
                    <hm-form-group label="Inline Group">
                        <hm-checkbox-group
                            :disabled="isDisabled"
                            :options="checkboxGroup"
                            :size="size"
                            :switches="isToggle"
                            v-model="checkboxGroupSelected"
                        />
                    </hm-form-group>
                </div>
                <div class="col">
                    <hm-form-group label="Stacked Group">
                        <hm-checkbox-group
                            :disabled="isDisabled"
                            :options="checkboxGroup"
                            :size="size"
                            stacked
                            :switches="isToggle"
                            v-model="checkboxGroupSelected"
                        />
                    </hm-form-group>
                </div>
            </div>

            <h4>No label</h4>
            <hm-checkbox
                inline
                :disabled="isDisabled"
                :size="size"
                :switch="isToggle"
                v-model="checkboxEmpty">
            </hm-checkbox>
        </div>

        <hr>

        <div class="code-block">
            <pre v-highlightjs="example"><code class="html"></code></pre>
        </div>

        <h3 class="mt-8">Документация</h3>
        <p><a href="https://bootstrap-vue.org/docs/components/form-checkbox">Bootstrap Vue</a></p>
    </section>
</template>
