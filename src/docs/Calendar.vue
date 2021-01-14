<script>
const example = `<div class="row align-items-end">
    <div class="col">
        <hm-calendar
            show-year-btns
            is-range
            v-model="rangeModel"
        />
    </div>
    <div class="col">
        <hm-calendar
            hide-header
            v-model="singleModel"
        />
    </div>
</div>`;

export default {
    data() {
        return {
            example,
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
        <h2 class="mb-4 display-4">Calendar</h2>

        <hm-alert show variant="warning" class="mb-8">
            <strong>WARN:</strong> Компонент будет дорабатываться
        </hm-alert>

        <h3 class="mt-8">Компоненты</h3>
        <ul>
            <li><strong>HmCalendar </strong> <hm-badge variant="primary">Bootstrap Vue</hm-badge> <hm-badge variant="danger">Modified</hm-badge></li>
        </ul>

        <h3 class="mt-8">Использование</h3>

        <div class="p-5 bg-light rounded mb-5">
            <div class="row">
                <div class="col col-md-4"><strong>Range</strong></div>
                <div class="col col-md-8"><pre>{{rangeModel}}</pre></div>
            </div>
            <div class="row">
                <div class="col col-md-4"><strong>Single</strong></div>
                <div class="col col-md-8"><pre>{{singleModel}}</pre></div>
            </div>
        </div>

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
                <!-- <div class="col">
                    <hm-datepicker
                        range
                        hide-header
                        v-model="datepickerModel" />
                </div> -->
            </div>
        </div>

        <hr>

        <div class="code-block">
            <pre v-highlightjs="example"><code class="html"></code></pre>
        </div>

        <h3 class="mt-8">Документация</h3>
        <p><a href="https://bootstrap-vue.org/docs/components/calendar">BootstrapVue</a></p>

        <h4 class="text-danger">HmCalendar</h4>
        <h5>Добавленные свойства</h5>
        <div class="table-responsive">
            <table class="table table-sm table-code table-striped">
                <thead>
                    <tr>
                        <th>Свойство</th>
                        <th>Тип</th>
                        <th>По-умолчанию</th>
                        <th>Допустимые значения</th>
                        <th>Описание</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>is-range</code></td>
                        <td><code>Boolean</code></td>
                        <td><code>false</code></td>
                        <td></td>
                        <td>Выбрать диапазон дат</td>
                    </tr>
                    <tr>
                        <td><code>show-year-btns</code></td>
                        <td><code>Boolean</code></td>
                        <td><code>false</code></td>
                        <td></td>
                        <td>Цвет подложки аватара</td>
                    </tr>
                    <tr>
                        <td><code>value</code></td>
                        <td><code>String, Date, Date[]</code></td>
                        <td></td>
                        <td>строка в формате `YYYY-MM-DD`, объект даты или массив из двух дат</td>
                        <td>Изменяемое значение даты</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
