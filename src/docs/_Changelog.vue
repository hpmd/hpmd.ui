<script>
export default {
    data() {
        return {
            changelog: [
                { text: 'Добавить возможность импорта отдельных стилей компонентов', checked: false, version: null },
                { text: 'Упорядочить стили SCSS, сделать работу с переменными удобной', checked: false, version: null },
                { text: 'Доработка текущих проблемных компонентов', checked: false, version: null },
                { text: 'HmFileInput: Общий компонент добавления файлов', checked: false, version: null },
                { text: 'HmFileUploader: Менеджер загрузки файлов', checked: false, version: null },
                { text: 'HmScrollbar: Кастомизируемый скроллбар на основе нативного', checked: false, version: null },
                { text: 'HmTabs: Компонент вкладок', checked: false, version: null },
            ]
        };
    }
};
</script>

<template>
    <section>
        <h2 class="mb-8 display-4">Changelog</h2>

        <h3>В ближайших планах:</h3>
        <hm-checkbox
            v-for="item in changelog"
            :key="item.text"
            v-model="item.checked">
            <span>{{item.text}}</span>
            <span
                class="version"
                v-if="item.checked && item.version">
                {{item.version}}
            </span>
        </hm-checkbox>
    </section>
</template>
