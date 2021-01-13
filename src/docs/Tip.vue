<template>
    <div class="bg-white p-5 shadow rounded mb-8">
        <h2 class="mb-9">Tip</h2>

        <h4>Подсказка в тексте</h4>
        <p>Производство в принципе масштабирует убывающий инвестиционный продукт.
            Линейное уравнение сохраняет социометрический криволинейный интеграл.
            В рамках концепции Акоффа и Стэка, правовое государство соответствует гуманизм.
            Ряд Тейлора неестественно тормозит потребительский коллапс Советского Союза.
            Теорема представляет собой <hm-tip in-text tip="Подсказка в тексте">культ</hm-tip> личности.
            Огибающая очевидна не для всех. Ряд Тейлора неестественно тормозит.
            Ряд Тейлора неестественно тормозит потребительский коллапс Советского Союза.
            Теорема представляет собой <hm-tip in-text tip="Подсказка в тексте">АБ</hm-tip> личности.
            Огибающая очевидна не для всех. Ряд Тейлора неестественно тормозит.</p>

        <h4>Блок с подсказкой</h4>
            <hm-tip class="mb-4">
                <span>Как считаются показатели</span>
                <template v-slot:tip>
                    <div class="text-left">
                        <b class="">Коэффициент вовлеченности:</b>
                        <span class="d-table mb-4">((лайки + комментарии) / охват) * 100%</span>

                        <b>Среднее кол-во лайков:</b>
                        <span class="d-table mb-4">общее количество лайков / количество постов</span>

                        <b>Среднее кол-во комментариев:</b>
                        <span class="d-table mb-4">общее количество комментариев / количество постов</span>
                    </div>
                </template>
            </hm-tip>
        <div>
            <hm-tip tooltip-variant="primary" icon-position="start">
                <input type="text" class="form-control" placeholder="Скидка">
                <template v-slot:tip>
                    Скидка дается на клиентские расходы
                </template>
            </hm-tip>

            <hm-tip
                class="mt-5"
                tooltip-variant="danger"
                icon-position="center"
                icon-name="exclamation-triangle"
                icon-variant="danger">
                <input type="text" class="form-control" placeholder="Скидка" value="Some invalid text">
                <template v-slot:tip>
                    Скидка дается на клиентские расходы
                </template>
            </hm-tip>
        </div>
    </div>
</template>
