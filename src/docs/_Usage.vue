<script>
const codeAddAllGlobal = `// main.js
import Vue from 'vue';
import HpmdUI from 'hpmd.ui';
import 'hpmd.ui/src/scss/hpmd.ui.scss';

// ...

Vue.use(HpmdUI);`;

const codeAddSingleGlobal = `// main.js
import Vue from 'vue';
import {
    ButtonPlugin
    TablePlugin
} from 'hpmd.ui';
// import global scss
import 'hpmd.ui/src/scss/hpmd.ui.scss';

Vue.use(ButtonPlugin);
Vue.use(TablePlugin);`;

const codeAddSingleLocal = `// MyComponent.js
import {
    HmButton,
    HmTable
} from 'hpmd.ui';

export default {
    components: {
        HmButton,
        HmTable
    }
};`;

const codeCustomizeBootstrap = `// your-variables.scss
@import '~hpmd.ui/src/scss/base.scss';

// changes goes here
$font-size-base: 16px; // for example
`;

const codeCustomizeBootstrap2 = `// your-global-styles.scss
@import 'path/to/your-variables.scss';
@import '~hpmd.ui/src/scss/all.scss';

// You can optionally add your overrides and custom styles here`;

const connectTsxComponents = `// MyComponent.vue
\u003cscript lang="tsx"\u003e
import { Component, Vue } from 'vue-property-decorator';
import {
    HmButton,
    HmAlert
} from 'hpmd.ui/tsx-ready';

@Component({
    components: {
        HmButton,
        HmAlert
    }
})
export default class MyComponent extends Vue {
    showAlert = false;
    buttonVariant = 'secondary';

    clickHandler(btnText: string): void {
        alert('1')
    }

    render(): VNode {
        return (
            <div>
                <HmAlert
                    fade="true" // ERROR, 'fade' type is boolean
                    show={this.showAlert} // OK, property type is boolean
                    variant="secondary"> // OK, property type is string
                    Some text
                </HmAlert>

                <HmButton
                    variant={this.buttonVariant} // OK, property type is string
                    onClick={this.clickHandler}> // ERROR: HmButton click emits Event object, not string
                    Button text
                </HmButton>
            </div>
        )
    }
}
\u003c/script\u003e`;

export default {
    codeAddAllGlobal,
    codeAddSingleGlobal,
    codeAddSingleLocal,
    codeCustomizeBootstrap,
    codeCustomizeBootstrap2,
    connectTsxComponents,

    data() {
        return {
            protocol: 'ssh',
            protocols: ['ssh', 'https'],
            install: {
                https: 'npm install --save git+https://github.com/hpmd/hpmd.ui.git',
                ssh: 'npm install --save git+ssh://git@github.com/hpmd/hpmd.ui.git'
            }
        };
    }
};
</script>


<template>
    <section>
        <h2 class="mb-8 display-4">Установка и настройка</h2>

        <h3 class="mt-8">Установка</h3>

        <hm-radio-group :options="protocols" v-model="protocol"/>
        <div class="code-block">
            <pre class="bg-dark text-light p-3"><code class="shell-command">{{install[protocol]}}</code></pre>
        </div>

        <h3 class="mt-8">Обновление</h3>
        <div class="code-block">
            <pre class="bg-dark text-light p-3"><code>npm update hpmd.ui</code></pre>
        </div>
        <p>При необходимости можно указывать версию - <code>hpmd.ui@"&lt;next-major.0.0"</code></p>

        <h3 class="mt-8">Подключение</h3>
        <hm-alert variant="warning" show>Пока что не реализовано отдельное подключение SCSS-файлов (чтобы не грузить всю библиотеку) &mdash; этот функционал обязательно появится в будущем</hm-alert>
        <h4>Подключение всей библиотеки для глобального использования</h4>
        <div class="code-block">
            <pre v-highlightjs="$options.codeAddAllGlobal"><code class="javascript"></code></pre>
        </div>

        <h4>Подключение отдельных компонентов для глобального использования</h4>
        <div class="code-block">
            <pre v-highlightjs="$options.codeAddSingleGlobal"><code class="javascript"></code></pre>
        </div>

        <h4>Импорт отдельных компонентов</h4>
        <div class="code-block">
            <pre v-highlightjs="$options.codeAddSingleLocal"><code class="javascript"></code></pre>
        </div>

        <hr>

        <h3 class="mt-8">Поддержка Typescript</h3>
        <h4>В обычных шаблонах и нативной render-функции</h4>
        <p>При использовании компонентов внутри тега <code>template</code> single-file компонента весь процесс подключения идентичен описанному выше</p>

        <h4>В render-функции TSX (общие настройки)</h4>
        <p>
            Для использования TSX в рендер-функции файл компонента должен быть либо в формате <code>.tsx</code>
            (подходит, если не надо описывать стили в теге style), или, аттрибут <code>lang</code> тега <code>script</code>
            должен иметь значение <code>tsx</code>.
        </p>

        <h5>Проверка типов компонентов в шаблонах</h5>
        <p>
            В UI-ките реализована поддержка плагина <a href="https://github.com/wonderful-panda/vue-tsx-support">vue-tsx-support</a> &mdash;
            с его помощью можно типизировать свойства, слоты и данные событий компонентов с проверкой внутри TSX-шаблона.
        </p>
        <h5>Подключение и использование</h5>
        <p>
            При использовании компонентов с поддержкой <code>vue-tsx-support</code> нет смысла
            подключать их глобально: все равно придется явно импортировать компонент (или, возможно,
            я просто не нашел способа описать это в declaration-файле). Поэтому все "аугментированные" компоненты вынесены
            в отдельный файл в корне библиотеке &mdash; `hpmd.ui/tsx-ready.ts`
        </p>
        <div class="code-block">
            <pre v-highlightjs="$options.connectTsxComponents"><code class="typescript"></code></pre>
        </div>


        <hr>

        <h3 class="mt-8">Настройка SCSS</h3>
        <p>Поскольку библиотека собрана на основе Bootstrap, в ней так же есть возможность кастомизации стилей.</p>
        <p>
            В основном, для работы с UI-китом, вам понадобится определить только свои цвета, шрифт, базовый размер текста и, возможно, брейкпоинты для media queries.
            При необходимости изменить базовые настройки SCSS, вам нужно будет:
        </p>
        <ol>
            <li>Сделать свой SCSS-файл (например <code>custom-vars.scss</code>)</li>
            <li>
                <div>
                    <p>
                        Переопределить в нем нужные переменные (референс можно посмотреть в <code>hpmd.ui/src/scss/variables/</code> &mdash; тут три файла:
                        измененные переменные Bootstrap, измененные переменные Bootstrap Vue и кастомные переменные этой библиотеки)
                    </p>
                    <div class="code-block">
                        <pre v-highlightjs="$options.codeCustomizeBootstrap"><code class="scss"></code></pre>
                    </div>
                </div>
            </li>
            <li>
                <p>
                    Сделать еще один файл &mdash; например <code>my-global-styles.scss</code> и импортировать в него (в таком же порядке) следующие файлы:
                </p>
                <div class="code-block">
                    <pre v-highlightjs="$options.codeCustomizeBootstrap2"><code class="scss"></code></pre>
                </div>
            </li>
            <li>
                <p>Импортируйте свой файл вместо <code>hpmd.ui.scss</code></p>
                <div class="code-block">
                    <pre v-highlightjs><code class="javascript">// main js<br>import 'path/to/my-global-styles.scss';</code></pre>
                </div>
            </li>
        </ol>
    </section>
</template>
