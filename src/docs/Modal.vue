<script>
export default {
    data() {
        return {
            showModal: false
        };
    }
};
</script>

<template>
    <div class="bg-white p-5 shadow rounded mb-8">
        <h2 class="mb-5">Modals</h2>

        <div class="mt-4">
            <hm-button
                variant="warning"
                v-on:click="showModal = !showModal">
                Показать модальное окно
            </hm-button>

            <hm-modal
                v-model="showModal"
                ok-variant="warning"
                cancel-variant="light"
                ok-title="Ясно"
                cancel-title="Понятно"
                title="Напоминалочка">
                <p class="mb-0">Производство в принципе масштабирует убывающий инвестиционный продукт. Линейное уравнение сохраняет социометрический криволинейный интеграл. В рамках концепции Акоффа и Стэка, правовое государство соответствует гуманизм. Ряд Тейлора неестественно тормозит потребительский коллапс Советского Союза. Теорема представляет собой  <hm-text-tip tip="Подсказка в тексте">культ</hm-text-tip>  личности. Огибающая очевидна не для всех. Ряд Тейлора неестественно тормозит. Ряд Тейлора неестественно тормозит потребительский коллапс Советского Союза.</p>
            </hm-modal>
        </div>
    </div>
</template>
