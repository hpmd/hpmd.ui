<script>
const example = `<hm-collapse button-text="Статистика по блогерам">
    <hm-card>
        Производство в принципе масштабирует убывающий инвестиционный продукт. Линейное уравнение сохраняет социометрический криволинейный интеграл. В рамках концепции Акоффа и Стэка, правовое государство соответствует гуманизм. Ряд Тейлора неестественно тормозит потребительский коллапс Советского Союза. Теорема представляет собой  культ  личности. Огибающая очевидна не для всех. Ряд Тейлора неестественно тормозит.
        Ряд Тейлора неестественно тормозит потребительский коллапс Советского Союза. Теорема представляет собой культ личности. Огибающая очевидна не для всех. Ряд Тейлора неестественно тормозит.
    </hm-card>
</hm-collapse>`;

export default {
    data() {
        return {
            example
        };
    }
};
</script>

<template>
    <section>
        <h2 class="mb-5 display-4">Collapse</h2>

        <hm-alert variant="warning" show>
            <strong>WARN:</strong> возможны изменения
        </hm-alert>

        <h3 class="mt-8">Компоненты</h3>
        <ul>
            <li><strong>HmCollapse</strong> <hm-badge variant="primary">Bootstrap Vue</hm-badge> <hm-badge variant="danger">Modified</hm-badge></li>
        </ul>

        <h3 class="mt-8">Использование</h3>
        <div class="mt-4">
            <hm-collapse button-text="Статистика по блогерам">
                <hm-card>
                    Производство в принципе масштабирует убывающий инвестиционный продукт. Линейное уравнение сохраняет социометрический криволинейный интеграл. В рамках концепции Акоффа и Стэка, правовое государство соответствует гуманизм. Ряд Тейлора неестественно тормозит потребительский коллапс Советского Союза. Теорема представляет собой  культ  личности. Огибающая очевидна не для всех. Ряд Тейлора неестественно тормозит.
                    Ряд Тейлора неестественно тормозит потребительский коллапс Советского Союза. Теорема представляет собой культ личности. Огибающая очевидна не для всех. Ряд Тейлора неестественно тормозит.
                </hm-card>
            </hm-collapse>
        </div>

        <hr>

        <div class="code-block">
            <pre v-highlightjs="example"><code class="html"></code></pre>
        </div>

        <h3>Документация</h3>
        <p><a href="https://bootstrap-vue.org/docs/components/form-checkbox">BootstrapVue</a></p>


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
                        <td><code>button-text</code></td>
                        <td><code>String</code></td>
                        <td><code>''</code></td>
                        <td></td>
                        <td>Текст кнопки разворачивающей блок</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>
