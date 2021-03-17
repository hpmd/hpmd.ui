<script>
import sizeMixin from './sizeMixin';

const example = `<hm-button
    variant="warning"
    v-on:click="showModal = !showModal">
    Показать модальное окно
</hm-button>

<hm-modal
    cancel-title="Понятно"
    cancel-variant="light"
    ok-variant="warning"
    ok-title="Ясно"
    :size="size"
    title="Напоминалочка"
    v-model="showModal">
    <p class="mb-0">Производство в принципе масштабирует убывающий инвестиционный продукт. Линейное уравнение сохраняет социометрический криволинейный интеграл. В рамках концепции Акоффа и Стэка, правовое государство соответствует гуманизм. Ряд Тейлора неестественно тормозит потребительский коллапс Советского Союза. Теорема представляет собой  <hm-text-tip tip="Подсказка в тексте">культ</hm-text-tip>  личности. Огибающая очевидна не для всех. Ряд Тейлора неестественно тормозит. Ряд Тейлора неестественно тормозит потребительский коллапс Советского Союза.</p>
</hm-modal>`;

export default {
    example,

    mixins: [sizeMixin],
    data() {
        return {
            showModal: false
        };
    },
    computed: {
        _sizes() {
            return this.sizes.slice(1).concat(['fs']);
        }
    }
};
</script>

<template>
    <section>
        <h2 class="mb-5 display-4">Modal</h2>

        <h3 class="mt-8">Изменения</h3>
        <p><span class="version">0.13.4</span> Добавлено значение <code>fs</code> свойства <code>size</code>, делающее модальное окно полноэкранным</p>

        <h3 class="mt-8">Компоненты</h3>
        <ul>
            <li>
                <strong>HmModal</strong> <hm-badge variant="primary">Bootstrap Vue</hm-badge> <hm-badge variant="success">No changes</hm-badge>
            </li>
        </ul>

        <h3 class="mt-8">Использование</h3>
        <div class="p-5 bg-light rounded mb-5">
            <hm-form-group label="Size">
                <hm-radio-group
                    :options="_sizes"
                    v-model="size"
                />
            </hm-form-group>
        </div>
        <hm-button
            variant="warning"
            v-on:click="showModal = !showModal">
            Показать модальное окно
        </hm-button>

        <hm-modal
            cancel-title="Понятно"
            cancel-variant="light"
            ok-variant="warning"
            ok-title="Ясно"
            :size="size"
            title="Напоминалочка"
            v-model="showModal">
            <p class="mb-0">Производство в принципе масштабирует убывающий инвестиционный продукт. Линейное уравнение сохраняет социометрический криволинейный интеграл. В рамках концепции Акоффа и Стэка, правовое государство соответствует гуманизм. Ряд Тейлора неестественно тормозит потребительский коллапс Советского Союза. Теорема представляет собой  <hm-tip in-text tip="Подсказка в тексте">культ</hm-tip>  личности. Огибающая очевидна не для всех. Ряд Тейлора неестественно тормозит. Ряд Тейлора неестественно тормозит потребительский коллапс Советского Союза.</p>
        </hm-modal>

        <hr>

        <div class="code-block">
            <pre v-highlightjs="$options.example"><code class="html"></code></pre>
        </div>

        <h3 class="mt-8">Документация</h3>
        <p><a href="https://bootstrap-vue.org/docs/components/modal">Bootstrap Vue</a></p>
    </section>
</template>
