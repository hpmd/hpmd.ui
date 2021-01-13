<script>
    export default {
        data() {
            return {
                datepickerModel: '',
                singleModel: null,
                rangeModel: [new Date(Date.now() - 259200000), new Date(Date.now())],
                // inputSingle: null,
                // inputRange: []
            };
        }
    };
</script>


<template>
    <div>
        <h2 class="mb-9">Calendar</h2>

        <div class="mb-4">
            <div class="row align-items-end">
                <div class="col">
                    <hm-calendar
                        show-year-btns
                        is-range
                        v-model="rangeModel" />
                </div>
                <div class="col">
                    <hm-calendar
                        hide-header
                        v-model="singleModel" />
                </div>
                <div class="col">
                    <hm-datepicker
                        range
                        hide-header
                        v-model="datepickerModel" />
                </div>
            </div>
        </div>
    </div>
</template>
