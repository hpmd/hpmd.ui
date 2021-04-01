<script>
const example = `<div class="row">
    <div class="col-12 col-sm-6 col-lg-4">
        <h5>Select (single)</h5>
        <hm-select
            :clearable="isClearable"
            :disabled="isDisabled"
            v-model="single"
            label="name"
            :options="options" />
    </div>
    <div class="col-12 col-sm-6 col-lg-4">
        <h5>Select (multiple)</h5>
        <hm-select
            :clearable="isClearable"
            :disabled="isDisabled"
            label="name"
            track-by="code"
            :max="selectLimit"
            multiple
            :options="options"
            v-model="multiple">
            <template #maxElements>
                <div>Выбрано макисмальное количество значений ({{selectLimit}})</div>
            </template>
        </hm-select>
    </div>
    <div class="col-12 col-sm-6 col-lg-4">
        <h5>Search bar (multiple, taggable)</h5>
        <hm-select
            :clearable="isClearable"
            :disabled="isDisabled"
            track-by="name"
            label="name"
            taggable
            multiple
            searchable
            v-model="search"
            :options="options"
            v-on:tag="addTag"/>
    </div>`;

export default {
    example,

    data() {
        return {
            options: [
                { name: 'Развлекательный контент', code: 'a' },
                { name: 'Авто', code: 'b' },
                { name: 'Другое', code: 'c' },
                { name: 'Здоровое питание', code: 'd' },
                { name: 'Стриминговые сервисы', code: 'e' },
                { name: 'Чертовски длинная строка со всяким разным текстом', code: 'f' }
            ],
            search: [{ name: 'Развлекательный контент', code: 'a' }],
            single: null, // { name: 'Развлекательный контент', code: 'a' },
            multiple: [],
            isClearable: true,
            isDisabled: false,
            selectLimit: 3
        };
    },
    methods: {
        addTag(newTag) {
            const tag = {
                name: newTag,
                code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
            };
            this.options.push(tag);
            this.search.push(tag);
        }
    }
};
</script>

<template>
    <section>
        <h2 class="mb-8 display-4">Select Input</h2>

        <h3 class="mt-8">Изменения</h3>
        <p><span class="version">0.13.9</span> Переписан шаблон компонента (полностью), добавлено свойство <code>clearable: boolean = true</code></p>

        <h3 class="mt-8">Компоненты</h3>
        <ul>
            <li>
                <strong>HmSelect</strong> <hm-badge variant="primary">Vue Multiselect</hm-badge> <hm-badge variant="success">No changes</hm-badge>
            </li>
        </ul>

        <h3 class="mt-8">Использование</h3>
        <div class="p-5 mb-5 bg-light rounded">
            <div class="row">
                <div class="col">
                    <hm-checkbox v-model="isDisabled">
                        Is Disabled?
                    </hm-checkbox>
                </div>
                <div class="col">
                    <hm-checkbox v-model="isClearable">
                        Is clearable?
                    </hm-checkbox>
                </div>
                <div class="col">
                    <hm-input
                        label="Limit selected"
                        type="number"
                        number
                        v-model="selectLimit"
                    />
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-12 col-sm-6 col-lg-4">
                <h5>Select (single)</h5>
                <hm-select
                    :clearable="isClearable"
                    :disabled="isDisabled"
                    v-model="single"
                    label="name"
                    :options="options" />
            </div>
            <div class="col-12 col-sm-6 col-lg-4">
                <h5>Select (multiple)</h5>
                <hm-select
                    :clearable="isClearable"
                    :disabled="isDisabled"
                    label="name"
                    track-by="code"
                    :max="selectLimit"
                    multiple
                    :options="options"
                    v-model="multiple">
                    <template #maxElements>
                        <div>Выбрано макисмальное количество значений ({{selectLimit}})</div>
                    </template>
                </hm-select>
            </div>
            <div class="col-12 col-sm-6 col-lg-4">
                <h5>Search bar (multiple, taggable)</h5>
                <hm-select
                    :clearable="isClearable"
                    :disabled="isDisabled"
                    track-by="name"
                    label="name"
                    taggable
                    multiple
                    searchable
                    v-model="search"
                    :options="options"
                    v-on:tag="addTag"/>
            </div>
        </div>

        <hr>

        <div class="code-block">
            <pre v-highlightjs="$options.example"><code class="html"></code></pre>
        </div>

        <h3 class="mt-8">Документация</h3>
        <p><a href="https://vue-multiselect.js.org/">Vue Multiselect</a></p>

        <h4 class="text-danger">HmSelect</h4>
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
                        <td><code>clearable</code></td>
                        <td><code>Boolean</code></td>
                        <td><code>true</code></td>
                        <td></td>
                        <td>Выводит контрол для очистки поля ввода (при нажатии отсылает событие <code>clear</code>: очистка преданного значения внутри самого компонента кажется излишне рискованным предприятием, в виду того, что не всегда очевидно какое пустое значение может понадобиться пользователю (null | string | [] | {})</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h5 class="mt-6">Добавленные события</h5>
        <div class="table-responsive">
            <table class="table table-sm table-code table-striped">
                <thead>
                    <tr>
                        <th>Событие</th>
                        <th>Передаваемые данные</th>
                        <th>Описание</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>clear</code></td>
                        <td><code>void</code></td>
                        <td>Отправляется при нажатии на clear-кнопку, если <code>clearable=true</code></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>
