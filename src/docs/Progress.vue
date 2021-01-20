<script>
import variantMixin from './variantMixin';

const example = `<hm-progress
    :animated="isAnimated"
    class="mb-5"
    :height="height"
    :show-progress="isShowValue"
    :value="valueModel"
    :variant="variant" />

<hm-progress
    :height="height"
    max="100">
    <hm-progress-bar
        :animated="isAnimated"
        value="24"
        variant="primary"
        :show-progress="isShowValue">
    </hm-progress-bar>
    <hm-progress-bar
        :animated="isAnimated"
        value="13"
        variant="warning"
        :show-progress="isShowValue">
    </hm-progress-bar>
    <hm-progress-bar
        :animated="isAnimated"
        value="33"
        variant="danger"
        :show-progress="isShowValue">
    </hm-progress-bar>
</hm-progress>`;

export default {
    example,

    mixins: [variantMixin],
    data() {
        return {
            heightModel: 10,
            isAnimated: false,
            isShowValue: false,
            valueModel: 50
        }
    },
    computed: {
        height() {
            const DEFAULT = 2;

            if (!this.heightModel || isNaN(this.heightModel)) {
                return `${DEFAULT}px`;
            }

            return `${this.heightModel}px`;
        }
    }
};
</script>

<template>
    <section>
        <h2 class="mb-8 display-4">Progress bar</h2>

        <h3 class="mt-8">Компоненты</h3>
        <ul>
            <li><strong>HmProgress</strong> <hm-badge variant="primary">Bootstrap Vue</hm-badge> <hm-badge variant="success">No changes</hm-badge></li>
            <li><strong>HmProgressBar</strong> <hm-badge variant="primary">Bootstrap Vue</hm-badge> <hm-badge variant="success">No changes</hm-badge></li>
        </ul>


        <h3 class="mt-8">Использование</h3>

        <div class="p-5 mb-5 bg-light rounded">
            <div class="row">
                <div class="col">
                    <hm-form-group>
                        <hm-input
                            label="Значение"
                            number
                            type="number"
                            v-model="valueModel"
                        />
                    </hm-form-group>

                    <hm-form-group>
                        <hm-input
                            label="Высота (px)"
                            number
                            type="number"
                            v-model="heightModel"
                        />
                    </hm-form-group>

                    <hm-form-group>
                        <hm-checkbox v-model="isAnimated">Анимированный</hm-checkbox>
                    </hm-form-group>

                    <hm-form-group>
                        <hm-checkbox v-model="isShowValue">Показывать значение</hm-checkbox>
                    </hm-form-group>
                </div>
                <div class="col">
                    <hm-form-group label="variant">
                        <hm-radio-group
                            :options="variants"
                            stacked
                            v-model="variant"
                        />
                    </hm-form-group>
                </div>
            </div>
        </div>


        <hm-progress
            :animated="isAnimated"
            class="mb-5"
            :height="height"
            :show-progress="isShowValue"
            :value="valueModel"
            :variant="variant" />

        <hm-progress
            :height="height"
            max="100">
            <hm-progress-bar
                :animated="isAnimated"
                value="24"
                variant="primary"
                :show-progress="isShowValue">
            </hm-progress-bar>
            <hm-progress-bar
                :animated="isAnimated"
                value="13"
                variant="warning"
                :show-progress="isShowValue">
            </hm-progress-bar>
            <hm-progress-bar
                :animated="isAnimated"
                value="33"
                variant="danger"
                :show-progress="isShowValue">
            </hm-progress-bar>
        </hm-progress>

        <hr>

        <div class="code-block">
            <pre v-highlightjs="$options.example"><code class="html"></code></pre>
        </div>

        <h3 class="mt-8">Документация</h3>
        <p><a href="https://bootstrap-vue.org/docs/components/progress">Bootstrap Vue</a></p>
    </section>
</template>
