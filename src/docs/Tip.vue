<script>
import variantMixin from './variantMixin';

const example = `<h4>Подсказка в тексте</h4>
<p>
    Производство в принципе масштабирует убывающий инвестиционный продукт.
    Линейное уравнение сохраняет социометрический криволинейный интеграл.
    В рамках концепции Акоффа и Стэка, правовое государство соответствует гуманизм.
    Ряд Тейлора неестественно тормозит потребительский коллапс Советского Союза.
    Теорема представляет собой <hm-tip in-text tip="Подсказка в тексте">культ</hm-tip> личности.
    Огибающая очевидна не для всех. Ряд Тейлора неестественно тормозит.
    Ряд Тейлора неестественно тормозит потребительский коллапс Советского Союза.
    Теорема представляет собой <hm-tip in-text tip="Подсказка в тексте">АБ</hm-tip> личности.
    Огибающая очевидна не для всех. Ряд Тейлора неестественно тормозит.
</p>

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
</div>`;

export default {
    mixins: [variantMixin],
    example
};
</script>


<template>
    <section>
        <h2 class="mb-9 display-4">Tip</h2>

        <p>Компонент для вывода подсказок в тексте или у блока</p>

        <h3 class="mt-8">Компоненты:</h3>
        <ul>
            <li><strong>HmTip</strong> <hm-badge variant="info">Custom</hm-badge></li>
        </ul>

        <h3 class="mt-8">Использование:</h3>
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

        <hr>

        <div class="code-block">
            <pre v-highlightjs="$options.example"><code class="html"></code></pre>
        </div>

        <h3 class="mt-8">Документация</h3>
        <h4 class="text-danger">HmTip</h4>

        <h5>Свойства</h5>
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
                        <td><code>icon-name</code></td>
                        <td><code>HmfIconEl.name</code></td>
                        <td><code>'info-circle'</code></td>
                        <td>Значение <code>$theme-colors</code></td>
                        <td>Имя иконки (только для <code>in-text = false</code>)</td>
                    </tr>
                    <tr>
                        <td><code>icon-position</code></td>
                        <td><code>String</code></td>
                        <td><code>'center'</code></td>
                        <td></td>
                        <td>
                            Значение flex-класса <code>align-items-${iconPosition}</code>.
                            <a href="https://getbootstrap.com/docs/4.0/utilities/flex/#align-items">Подробнее тут</a>.
                            (только для <code>in-text = false</code>)
                        </td>
                    </tr>
                    <tr>
                        <td><code>icon-variant</code></td>
                        <td><code>String</code></td>
                        <td><code>'primary'</code></td>
                        <td>Значение <code>$theme-colors</code></td>
                        <td>Цвет иконки (только для <code>in-text = false</code>)</td>
                    </tr>
                    <tr>
                        <td><code>in-text</code></td>
                        <td><code>Boolean</code></td>
                        <td><code>false</code></td>
                        <td></td>
                        <td>Отображать как inline-элемент?</td>
                    </tr>
                    <tr>
                        <td><code>tip</code></td>
                        <td><code>String</code></td>
                        <td><code>''</code></td>
                        <td></td>
                        <td>Текст подсказки. Для лучшего контроля над содержимым подсказки рекомендуется использовать слот <code>tip</code></td>
                    </tr>
                    <tr>
                        <td><code>tooltip-placement</code></td>
                        <td><code>String</code></td>
                        <td><code>'bottom'</code></td>
                        <td>Значения из <code>HmTooltip.props.placement</code></td>
                        <td>Расположение всплывающей подсказки относительно элемента (см. <a href="https://bootstrap-vue.org/docs/components/tooltip#comp-ref-b-tooltip-props">по ссылке</a>)</td>
                    </tr>
                    <tr>
                        <td><code>tooltip-variant</code></td>
                        <td><code>String</code></td>
                        <td><code>'black'</code></td>
                        <td>Значение <code>$theme-colors</code></td>
                        <td>Цветовое оформление всплывающей подсказки</td>
                    </tr>
                    <tr>
                        <td><code>triggers</code></td>
                        <td><code>String | String[]</code></td>
                        <td><code>'hover focus'</code></td>
                        <td>Значения из <code>HmTooltip.props.triggers</code></td>
                        <td>Дейтсвие вызывающее отбражение/скрытие подсказки</td>
                    </tr>
                </tbody>
            </table>
        </div>


        <h4>Слоты</h4>
        <div class="table-responsive">
            <table class="table table-sm table-code table-striped">
                <thead>
                    <tr>
                        <th>Слот</th>
                        <th>Описание</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>tip</code></td>
                        <td>содержимое всплывающей подсказки</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>
