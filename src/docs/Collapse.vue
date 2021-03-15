<script>
const example = `<hm-button
    variant="primary"
    @click="isOpen = !isOpen">
    Toggle!
</hm-button>
<hm-collapse v-model="isOpen">
    <hm-card>
        Производство в принципе масштабирует убывающий инвестиционный продукт. Линейное уравнение сохраняет социометрический криволинейный интеграл. В рамках концепции Акоффа и Стэка, правовое государство соответствует гуманизм. Ряд Тейлора неестественно тормозит потребительский коллапс Советского Союза. Теорема представляет собой  культ  личности. Огибающая очевидна не для всех. Ряд Тейлора неестественно тормозит.
        Ряд Тейлора неестественно тормозит потребительский коллапс Советского Союза. Теорема представляет собой культ личности. Огибающая очевидна не для всех. Ряд Тейлора неестественно тормозит.
    </hm-card>
</hm-collapse>

<hr>

<div role="tablist">
    <div>
        <div>
            <hm-button variant="link" @click="accordion.one = !accordion.one">One</hm-button>
        </div>
        <hm-collapse
            accordion="accordion-name"
            role="tabpanel"
            v-model="accordion.one">
            <div class="border border-primary p-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempus egestas nisl, feugiat aliquam tellus posuere vitae. Integer vitae tempor justo, sed ornare leo. Nam lobortis vel lectus malesuada imperdiet. Nullam convallis ac mauris eget rutrum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam elementum ex quis sem condimentum faucibus. Nam eros nisl, porta ac dolor sit amet, malesuada suscipit leo. Vivamus ut felis viverra, gravida dui id, aliquam sapien. Fusce feugiat urna sed diam placerat hendrerit. Phasellus interdum quam sed massa ultricies viverra. Pellentesque massa mi, suscipit in magna sit amet, cursus sollicitudin odio.
            </div>
        </hm-collapse>
    </div>
    <div>
        <div>
            <hm-button variant="link" @click="accordion.two = !accordion.two">Two</hm-button>
        </div>
        <hm-collapse
            accordion="accordion-name"
            role="tabpanel"
            v-model="accordion.two">
            <div class="border border-warning p-4">
                Curabitur facilisis dui et tristique hendrerit. Integer id dui imperdiet, placerat nisi et, euismod nunc. Aenean tincidunt metus tortor, ac condimentum ex rutrum at. In in metus interdum, vestibulum arcu at, viverra nibh.
            </div>
        </hm-collapse>
    </div>
    <div>
        <div>
            <hm-button variant="link" @click="accordion.three = !accordion.three">Three</hm-button>
        </div>
        <hm-collapse
            accordion="accordion-name"
            role="tabpanel"
            v-model="accordion.three">
            <div class="border border-success p-4">
                Aliquam scelerisque mi at vulputate sagittis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla id enim pretium, vehicula tortor ac, gravida diam. Phasellus ultricies iaculis rhoncus. Donec sem velit, egestas sit amet dolor vitae, semper vehicula augue.
            </div>
        </hm-collapse>
    </div>
    <div>
        <div>
            <hm-button variant="link" @click="accordion.four = !accordion.four">Four</hm-button>
        </div>
        <hm-collapse
            accordion="accordion-name"
            role="tabpanel"
            v-model="accordion.four">
            <div class="border border-danger p-4">
                Etiam aliquam nisi tincidunt augue posuere, vel scelerisque libero venenatis. Nunc commodo malesuada mauris, feugiat ullamcorper mi cursus et. Proin euismod nisi eu nisl lobortis rutrum. Vestibulum non augue interdum, pretium nisl ac, interdum dolor. Etiam facilisis est sed blandit placerat. Donec egestas sem id tortor ultrices suscipit. Praesent lacinia placerat eros, et commodo ex congue quis. Nulla ullamcorper accumsan urna, sed malesuada lacus hendrerit vitae. Aenean mauris velit, facilisis eu accumsan tempor, laoreet a odio.
            </div>
        </hm-collapse>
    </div>
</div>`;

export default {
    data() {
        return {
            example,
            isOpen: false,
            accordion: {
                one: false,
                two: false,
                three: false,
                four: false
            }
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
            <hm-button
                variant="primary"
                @click="isOpen = !isOpen">
                Toggle!
            </hm-button>
            <hm-collapse v-model="isOpen">
                <hm-card>
                    Производство в принципе масштабирует убывающий инвестиционный продукт. Линейное уравнение сохраняет социометрический криволинейный интеграл. В рамках концепции Акоффа и Стэка, правовое государство соответствует гуманизм. Ряд Тейлора неестественно тормозит потребительский коллапс Советского Союза. Теорема представляет собой  культ  личности. Огибающая очевидна не для всех. Ряд Тейлора неестественно тормозит.
                    Ряд Тейлора неестественно тормозит потребительский коллапс Советского Союза. Теорема представляет собой культ личности. Огибающая очевидна не для всех. Ряд Тейлора неестественно тормозит.
                </hm-card>
            </hm-collapse>

            <hr>

            <div role="tablist">
                <div>
                    <div>
                        <hm-button variant="link" @click="accordion.one = !accordion.one">One</hm-button>
                    </div>
                    <hm-collapse
                        accordion="accordion-name"
                        role="tabpanel"
                        v-model="accordion.one">
                        <div class="border border-primary p-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempus egestas nisl, feugiat aliquam tellus posuere vitae. Integer vitae tempor justo, sed ornare leo. Nam lobortis vel lectus malesuada imperdiet. Nullam convallis ac mauris eget rutrum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam elementum ex quis sem condimentum faucibus. Nam eros nisl, porta ac dolor sit amet, malesuada suscipit leo. Vivamus ut felis viverra, gravida dui id, aliquam sapien. Fusce feugiat urna sed diam placerat hendrerit. Phasellus interdum quam sed massa ultricies viverra. Pellentesque massa mi, suscipit in magna sit amet, cursus sollicitudin odio.
                        </div>
                    </hm-collapse>
                </div>
                <div>
                    <div>
                        <hm-button variant="link" @click="accordion.two = !accordion.two">Two</hm-button>
                    </div>
                    <hm-collapse
                        accordion="accordion-name"
                        role="tabpanel"
                        v-model="accordion.two">
                        <div class="border border-warning p-4">
                            Curabitur facilisis dui et tristique hendrerit. Integer id dui imperdiet, placerat nisi et, euismod nunc. Aenean tincidunt metus tortor, ac condimentum ex rutrum at. In in metus interdum, vestibulum arcu at, viverra nibh.
                        </div>
                    </hm-collapse>
                </div>
                <div>
                    <div>
                        <hm-button variant="link" @click="accordion.three = !accordion.three">Three</hm-button>
                    </div>
                    <hm-collapse
                        accordion="accordion-name"
                        role="tabpanel"
                        v-model="accordion.three">
                        <div class="border border-success p-4">
                            Aliquam scelerisque mi at vulputate sagittis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla id enim pretium, vehicula tortor ac, gravida diam. Phasellus ultricies iaculis rhoncus. Donec sem velit, egestas sit amet dolor vitae, semper vehicula augue.
                        </div>
                    </hm-collapse>
                </div>
                <div>
                    <div>
                        <hm-button variant="link" @click="accordion.four = !accordion.four">Four</hm-button>
                    </div>
                    <hm-collapse
                        accordion="accordion-name"
                        role="tabpanel"
                        v-model="accordion.four">
                        <div class="border border-danger p-4">
                            Etiam aliquam nisi tincidunt augue posuere, vel scelerisque libero venenatis. Nunc commodo malesuada mauris, feugiat ullamcorper mi cursus et. Proin euismod nisi eu nisl lobortis rutrum. Vestibulum non augue interdum, pretium nisl ac, interdum dolor. Etiam facilisis est sed blandit placerat. Donec egestas sem id tortor ultrices suscipit. Praesent lacinia placerat eros, et commodo ex congue quis. Nulla ullamcorper accumsan urna, sed malesuada lacus hendrerit vitae. Aenean mauris velit, facilisis eu accumsan tempor, laoreet a odio.
                        </div>
                    </hm-collapse>
                </div>
            </div>
        </div>

        <hr>

        <div class="code-block">
            <pre v-highlightjs="example"><code class="html"></code></pre>
        </div>

        <h3>Документация</h3>
        <p><a href="https://bootstrap-vue.org/docs/components/form-checkbox">Bootstrap Vue</a></p>


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
