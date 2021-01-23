<script>
const example = `<div class="my-5">
    <hm-range-slider
        tooltip="always"
        :marks="true"
        lazy
        :min="0"
        :max="30"
        v-model="rangeSliderModel1"
    />
</div>
<div class="my-5">
    <hm-range-slider
        lazy
        tooltip-placement="bottom"
        :min="0"
        :max="30"
        v-model="rangeSliderModel2"
    />
</div>`;

export default {
    example,

    data() {
        return {
            rangeSliderModel1: 20,
            rangeSliderModel2: [7, 20]
        };
    }
};
</script>


<template>
    <section>
        <h2 class="mb-8 display-4">Range Slider</h2>

        <h3 class="mt-8">Компоненты</h3>
        <ul>
            <li>
                <strong>HmRangeSlider</strong> <hm-badge variant="primary">Vue Slider Component</hm-badge> <hm-badge variant="danger">Modifed</hm-badge>
            </li>
        </ul>

        <h3 class="mt-8">Использование</h3>
        <div class="my-5">
            <hm-range-slider
                tooltip="always"
                :marks="true"
                lazy
                :min="0"
                :max="30"
                v-model="rangeSliderModel1"
            />
        </div>
        <div class="my-5">
            <hm-range-slider
                lazy
                tooltip-placement="bottom"
                :min="0"
                :max="30"
                v-model="rangeSliderModel2"
            />
        </div>

        <hr>

        <div class="code-block">
            <pre v-highlightjs="$options.example"><code class="html"></code></pre>
        </div>

        <h3 class="mt-8">Документация</h3>
        <p><a href="https://github.com/NightCatSama/vue-slider-component">Vue Slider Component</a></p>
    </section>
</template>
