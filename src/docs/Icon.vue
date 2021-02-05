<script>
import * as unicons from '@/unicons';
import { HmIcon } from '../components/icon';
import variantMixin from './variantMixin';


const allIcons = [];

Object.keys(unicons).forEach((iconKey) => {
    HmIcon.add(unicons[iconKey]);

    allIcons.push(unicons[iconKey]);
});


const example = `<div
    v-for="n in 6"
    :key="\`heading-\${n}\`">
    <component :is="\`h\${n}\`">
        <span>Some text</span>
        <span :class="\`text-\${variant}\`">
            <hm-icon name="uni-thumbs-up" />
        </span>
    </component>
</div>`;

const addIconsComponent = `import { icon1, icon2 } from 'hpmd.ui/src/icons/unicons';
import { HmIcon } from 'hpmd.ui';

HmIcon.add(icon1, icon2);

// ...
// in template
<hm-icon name="uni-icon-name-1" />
<hm-icon name="uni-icon-name-2" />
`;

const addIconsGlobal = `import { icon1, icon2 } from 'hpmd.ui/src/icons/unicons';

// component
export default {
    created() {
        this.$hmIcon.add(icon1, icon2);
    }
};

// in template
<hm-icon name="uni-icon-name-1" />
<hm-icon name="uni-icon-name-2" />
`;

const iconGlobalFile = `// icons.js
import * as unicons from 'hpmd.ui/src/icons/unicons';
import { HmIcon } from 'hpmd.ui';

Object.keys(unicons).forEach(key => HmIcon.add(unicons[key]));

// main.js
import 'path/to/icons.js';
`;

const newIconFormat = `{
    // Уникальное имя иконки
    name: "unique-icon-name",
    // Содержимое тега <svg />
    content: "<g><path d="..."></g>",
    // Высота иконки
    height: 16,
    // Ширина иконки
    width: 16,

    // Название сета, пока не используется
    iconset: 'line'
}`;

export default {
    addIconsComponent,
    addIconsGlobal,
    iconGlobalFile,
    newIconFormat,

    mixins: [variantMixin],
    data() {
        return {
            allIcons,
            example,
            asDate: false,
            model: null,
            useNative: false,
            searchIcon: ''
        };
    },
    computed: {
        iconsFiltered() {
            const s = this.searchIcon.toLowerCase().trim();

            if (!s) return this.allIcons;

            return this.allIcons.filter((icon) => {
                const n = icon.name.toLowerCase();

                return n.indexOf(s) !== -1;
            });
        }
    }
};
</script>


<template>
    <section>
        <h2 class="mb-8 display-4">Icon</h2>

        <p>Компонент для отрисовки SVG-иконок в тексте или любых блоках. Основной случай использования &mdash; монохромные иконки для элементов интерфейса.</p>

        <h3 class="mt-8">Компоненты</h3>
        <ul>
            <li><strong>HmIcon</strong> <hm-badge variant="info">Custom</hm-badge></li>
        </ul>

        <h3 class="mt-8">Использование</h3>
        <div class="p-5 bg-light rounded">
            <hm-form-group label="variant">
                <hm-radio-group
                    :options="variants"
                    v-model="variant" />
            </hm-form-group>
        </div>

        <div class="mt-5">
            <div
                v-for="n in 6"
                :key="`heading-${n}`">
                <component :is="`h${n}`">
                    <span>Some text</span>
                    <span :class="`text-${variant}`">
                        <hm-icon name="uni-thumbs-up" />
                    </span>
                </component>
            </div>

            <hr>

            <div class="code-block">
                <pre v-highlightjs="example"><code class="html"></code></pre>
            </div>
        </div>

        <h3 class="mt-8">Набор иконок</h3>
        <hm-input placeholder="Поиск по имени" v-model="searchIcon" />
        <div class="d-flex flex-row flex-wrap">
            <div
                class="icon-example"
                v-for="icon in iconsFiltered"
                :key="icon.style + icon.name"
                :title="icon.name">
                <hm-icon :name="icon.name" />
            </div>
        </div>

        <h3 class="mt-8">Документация</h3>
        <h4 class="mt-5">Регистрация / добавление иконок</h4>

        <p>Для того чтобы использовать иконку в своем проекте ее сначала надо добавить. К UI-киту изначально приложен набор иконок
            <strong><a href="https://iconscout.com/unicons/explore/line">Unicons</a></strong>, но при необходимости можно добавлять и свои собственные иконки
            (о формате добавления <a href="#create-custom-icon">ниже</a>)</p>

        <h5>Существует два способа добавления иконок:</h5>
        <h6>При импорте HmIcon как отдельного компонента:</h6>
        <div class="code-block">
            <pre v-highlightjs="$options.addIconsComponent"><code class="javascript"></code></pre>
        </div>

        <h6><span class="version">0.10.0</span> При использовании плагина (Vue.use(HpmdUI) / Vue.use(HmIcon))</h6>
        <div class="code-block">
            <pre v-highlightjs="$options.addIconsGlobal"><code class="javascript"></code></pre>
        </div>

        <p>В обоих случаях добавленные иконки будут доступны для всего приложения: разница в том,
            что <code>this.$hmIcon.add</code> вызывается из хука/метода компонента (поскольку завязан на контекст приложения),
            а <code>HmIcon.add</code> можно вызывать в любом JS-коде
            &mdash; в отдельных случаях это может повлиять на порядок выполнения кода или доступность иконки,
            добавляемой в <strong>компоненте A</strong>, в <strong>компоненте Б</strong>.</p>

        <p>Альтернативным вариантом будет создание отдельного JS-файла с глобальной регистрацией иконок</p>
        <div class="code-block">
            <pre v-highlightjs="$options.iconGlobalFile"><code class="javascript"></code></pre>
        </div>

        <h4 class="mt-5" id="create-custom-icon">Создание иконок</h4>

        <p>Новые иконки нужно создавать в следующем формате:</p>
        <div class="code-block">
            <pre v-highlightjs="$options.newIconFormat"><code class="javascript"></code></pre>
        </div>

        <p>* Для TypeScript есть интерфейс HmfIconEl</p>

        <h4 class="mt-5">Размеры и оформление</h4>
        <p>Размер иконки равен размеру текста блока-родителя (<code>1em</code>). Для установки отличного от текста размера заверните иконку в контейнер и проставьте <code>font-size</code>.</p>

        <p>Цвет иконки по-умолчанию равен цвету текста &mdash; это довольно удобно для мягких переходов при hover-эффектах, например, кнопок.
            При желании можно указать свой собственный цвет через свойство <code>fill</code>.</p>

        <h4 class="text-danger mt-5">HmIcon</h4>
        <h5>Методы класса</h5>
        <div class="table-responsive">
            <table class="table table-sm table-striped">
                <thead>
                    <tr>
                        <th>Метод</th>
                        <th>Аргументы</th>
                        <th>Описание</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>add(...icons)</code></td>
                        <td>
                            <div><strong>...icons:</strong> HmfIconEl[, ...[, HmIconEl]]</div>
                        </td>
                        <td>Глобальный метод регистрации иконок</td>
                    </tr>
                </tbody>
            </table>
        </div>

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
                        <td><code>fill</code></td>
                        <td><code>String</code></td>
                        <td><code>'currentColor'</code></td>
                        <td>Допустимое значение атрибута SVG <code>fill</code></td>
                        <td>Цвет иконки</td>
                    </tr>
                    <tr>
                        <td><code>name</code></td>
                        <td><code>String</code></td>
                        <td><code>''</code></td>
                        <td></td>
                        <td>Имя иконки, определенное в HmfIconEl.name</td>
                    </tr>
                </tbody>
            </table>
        </div>

    </section>
</template>


<style scoped lang="scss">
    .icon-example {
        flex-grow: 0;
        flex-shrink: 0;
        font-size: 20px;
        width: 48px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
