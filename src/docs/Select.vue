<script>
const example = `<div class="row">
    <div class="col">
        <h5>Select bar</h5>
        <hm-select
            v-model="selectBar.value"
            :options='selectBar.options'/>
    </div>
    <div class="col">
        <h5>Search bar multiple selection</h5>
        <hm-select
            track-by="name"
            label="name"
            taggable
            multiple
            v-model="searchBar.value"
            :options='searchBar.options'
            v-on:tag="addTag"/>
    </div>
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
            this.searchBar.options.push(tag);
            this.searchBar.value.push(tag);
        }
    }
};
</script>

<template>
    <section>
        <h2 class="mb-8 display-4">Select Input</h2>

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
            <div class="col">
                <h5>Select (single)</h5>
                <hm-select
                    :disabled="isDisabled"
                    v-model="single"
                    label="name"
                    :options="options" />
            </div>
            <div class="col">
                <h5>Select (multiple)</h5>
                <hm-select
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
            <div class="col">
                <h5>Search bar (multiple, taggable)</h5>
                <hm-select
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
    </section>
</template>
