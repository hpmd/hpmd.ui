<script>
import sizeMixin from './sizeMixin';
import variantMixin from './variantMixin';

const example = `<hm-avatar
    class="mr-3 mb-2"
    :variant="variant"
    :size="size"
    src="https://placekitten.com/300/300"
    @imageLoadError="handleError" />
<hm-avatar
    class="mr-3 mb-2"
    :size="size"
    :variant="variant" />`;

export default {
    mixins: [sizeMixin, variantMixin],
    data() {
        return {
            example,
            checked: [],
            sample: 'https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg',
            samples: [
                {
                    url: 'https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg',
                    title: 'birdie'
                },
                {
                    url: 'https://f002.stockerwill.com/file/Stockerwill-preview/527697_thumb2.jpg',
                    title: 'kitten'
                },
                {
                    url: 'https://thumb.cloud.mail.ru/weblink/thumb/xw1/cdoC/d646Tf3gQ/28/91/289125225/289125225_450.jpg',
                    title: 'mushroom',
                },
                {
                    url: '',
                    title: 'broken image'
                },
                {
                    url: 'http://i.4cdn.org/lgbt/1521711096067.jpg',
                    title: '404'
                },
                {
                    url: 'https://dev.influencer.ru/api/test/getHttpError?code=403',
                    title: '403'
                }
            ]
        };
    }
};
</script>


<template>
    <div>
        <h2 class="mb-9 display-4">Avatar</h2>

        <h3>Изменения</h3>
        <p><span class="version">0.13.15</span> Добавлены размеры xl / xxl, исправлен баг с незагружаюшимся изображение, если предыдущая ссылка была битой</p>

        <div>
            Компонент для отрисовки аватаров пользователей (ну или любых других картинок в виде "превью").
            Оригинальный компонент из <strong>Bootstrap Vue</strong> показался сильно переусложненным, поэтому в нашей реализации только самый базовый функционал.
        </div>

        <h3 class="mt-8">Компоненты</h3>
        <ul>
            <li><strong>HmAvatar</strong> <hm-badge variant="info">Custom</hm-badge></li>
        </ul>


        <h3>Использование</h3>

        <div class="p-5 bg-light rounded">
            <div class="row">
                <div class="col">
                    <hm-form-group label="Size">
                        <hm-radio-group
                            :options="sizes"
                            v-model="size"
                            stacked
                        />
                        <hm-radio v-model="size" value="xl">
                            xl
                        </hm-radio>
                    </hm-form-group>
                </div>
                <div class="col">
                    <hm-form-group label="Placeholder variant">
                        <hm-radio-group
                            :options="variants"
                            v-model="variant"
                            stacked
                        />
                    </hm-form-group>
                </div>
                <div class="col">
                    <hm-form-group label="Switch image">
                        <hm-radio-group
                            :options="samples"
                            text-field="title"
                            value-field="url"
                            v-model="sample"
                            stacked
                        />
                    </hm-form-group>
                </div>
            </div>
        </div>

        <div class="mt-4">
            <hm-avatar
                class="mr-3 mb-2"
                :variant="variant"
                :size="size"
                :src="sample" />
        </div>

        <hr>

        <div class="code-block">
            <pre v-highlightjs="example"><code class="html"></code></pre>
        </div>

        <h3 class="mt-8">Документация</h3>

        <h4 class="text-danger">HmAvatar</h4>

        <h5 class="mt-6">Свойства</h5>

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
                        <td><code>size</code></td>
                        <td><code>String</code></td>
                        <td><code>'md'</code></td>
                        <td>Названия свойств из SCSS-переменной <code>$avatarSizes</code></td>
                        <td>Размер аватара</td>
                    </tr>
                    <tr>
                        <td><code>src</code></td>
                        <td><code>String</code></td>
                        <td><code>''</code></td>
                        <td></td>
                        <td>URL изображения</td>
                    </tr>
                    <tr>
                        <td><code>variant</code></td>
                        <td><code>String</code></td>
                        <td><code>'secondary'</code></td>
                        <td>Цвета из SCSS переменной <code>$theme-colors</code></td>
                        <td>Цвет фона плэйсхолдера</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h5 class="mt-6">События</h5>
        <div class="table-responsive">
            <table class="table table-sm table-code table-striped">
                <thead>
                    <tr>
                        <th>Событие</th>
                        <th>Передаваемые данные</th>
                        <th>Описание</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>imageLoadError</code></td>
                        <td>Данные из события image.onerror</td>
                        <td>Отправляется, если по указанному <code>src</code> не удалось получить изображение</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
