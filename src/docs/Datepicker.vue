<script>
const example = `<hm-datepicker
    v-model="model"
    :value-as-date="asDate">
</hm-datepicker>`;

export default {
    data() {
        return {
            example,
            asDate: false,
            model: new Date(2020, 3, 10),
            useNative: false
        };
    }
};
</script>


<template>
    <section>
        <h2 class="mb-8 display-4">Datepicker</h2>

        <h3>Изменения</h3>
        <p><span class="version">0.13.7</span> Убрал свойство <code>isRange</code> &mdash; оно больше мешало чем помогало</p>

        <h3 class="mt-8">Компоненты</h3>
        <ul>
            <li><strong>HmDatepicker </strong> <hm-badge variant="primary">Bootstrap Vue</hm-badge> <hm-badge variant="danger">Modified</hm-badge></li>
        </ul>

        <h3 class="mt-8">Использование</h3>
        <div class="p-5 bg-light mb-5 rounded">
            <p><strong>Значение:</strong> <code>{{model}}</code></p>
            <hr>
            <hm-checkbox v-model="asDate">Возвращать объект Date</hm-checkbox>
            <hm-checkbox v-model="useNative">Использовать нативный ввод даты</hm-checkbox>
        </div>

        <hm-datepicker
            :use-native="useNative"
            v-model="model"
            :value-as-date="asDate">
        </hm-datepicker>

        <hr>

        <div class="code-block">
            <pre v-highlightjs="example"><code class="html"></code></pre>
        </div>

        <h3 class="mt-8">Документация</h3>
        <p><a href="https://bootstrap-vue.org/docs/components/form-datepicker">Bootstrap Vue</a></p>

        <h4 class="text-danger">HmDatepicker</h4>
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
                        <td><code>use-native</code></td>
                        <td><code>Boolean</code></td>
                        <td><code>/Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent)</code></td>
                        <td></td>
                        <td>Использовать input[type="date"]: может быть полезно для мобильных платформ</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>
