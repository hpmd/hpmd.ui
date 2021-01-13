<script>
    export default {
        data() {
            return {
                rangeSliderModel1: 20,
                rangeSliderModel2: [7, 20]
            };
        }
    };
</script>


<template>
    <div class="bg-white p-5 shadow rounded mb-8">
        <h2 class="mb-5">Слайдер</h2>

        <div class="my-5">
            <hm-range-slider
                tooltip="always"
                :marks="true"
                lazy
                :min="0"
                :max="30"
                v-model="rangeSliderModel1"></hm-range-slider>
        </div>
        <div class="my-5">
            <hm-range-slider
                lazy
                tooltip-placement="bottom"
                :min="0"
                :max="30"
                v-model="rangeSliderModel2"></hm-range-slider>
        </div>
    </div>
</template>
