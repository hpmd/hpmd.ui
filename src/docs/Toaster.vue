<script>
import variantMixin from './variantMixin';

const example = `<div>
    <hm-button
        variant="warning"
        @click="showToast(false)">
        Обычное сообщение
    </hm-button>

    <hm-button
        variant="primary"
        @click="showToast(true)">
        HTML-шаблон
    </hm-button>
</div>

<hm-toaster />`;

const addExample = `import { HmToaster } from 'hpmd.ui';

// component 
{
    methods: {
        loadStuff() {
            getUsers()
                .then((response) => {
                    // do something
                })
                .catch((e) => {
                    const pushMessage = {
                        autoClose: true,
                        content: 'Текст сообщения',
                        title: e.message,
                        placement: 'topright',
                        showTime: 5,
                        showProgressTimer: true,
                        variant: 'primary'
                    };

                    HmToaster.add(pushMessage);
                    // или
                    this.$hmToaster.add(pushMessage);
                });
        }
    }
}`;

const messageObjectExample = `{
    autoClose: true,
    content: '',
    headingIconName: null,
    placement: 'topleft',
    showProgressTimer: false,
    showTime: 5,
    title: null,
    variant: 'default'
}`;

export default {
    example,
    addExample,
    messageObjectExample,

    mixins: [variantMixin],
    data() {
        return {
            autoClose: true,
            showTime: 5,
            placement: 'topright',
            showProgressTimer: false
        };
    },
    methods: {
        showToast(isVnode) {
            const content = isVnode ?
                [
                    this.$createElement('div', { class: 'text-danger' }, 'Кастомный контент'),
                    this.$createElement('div', [
                        this.$createElement('a', { className: 'link', attrs: { href: '#' } }, 'ссылочка')
                    ])
                ] :
                'Просто текст сообщения';

            const {
                autoClose,
                showTime,
                placement,
                showProgressTimer,
                variant
            } = this;

            this.$hmToaster.add({
                autoClose,
                content,
                title: 'Новое_сообщение',
                placement,
                showTime,
                showProgressTimer,
                variant
            });
        }
    }
};
</script>


<template>
    <section>
        <h2 class="mb-8 display-4">Toaster (Notifications)</h2>

        <p class="lead">Компонент для централизованного вывода "push"-уведомлений пользователям</p>

        <h3 class="mt-8">Компоненты</h3>
        <ul>
            <li><span class="version">0.10.0</span> <strong>HmToaster</strong> <hm-badge variant="info">Custom</hm-badge></li>
            <li><span class="version">0.10.0</span> <strong>HmNotification</strong> <hm-badge variant="info">Custom</hm-badge> <hm-badge variant="dark">Internal usage</hm-badge></li>
        </ul>

        <h3 class="mt-8">Использование</h3>
        <div class="bg-light p-5 rounded mb-6">
            <div class="row">
                <div class="col-4">
                    <hm-form-group
                        stacked
                        label="Placement">
                        <hm-radio
                            v-model="placement"
                            name="toast-placement"
                            value="topleft">
                            Top Left
                        </hm-radio>
                        <hm-radio
                            v-model="placement"
                            name="toast-placement"
                            value="topcenter">
                            Top Center
                        </hm-radio>
                        <hm-radio
                            v-model="placement"
                            name="toast-placement"
                            value="topright">
                            Top Right
                        </hm-radio>
                        <hm-radio
                            v-model="placement"
                            name="toast-placement"
                            value="bottomleft">
                            Bottom Left
                        </hm-radio>
                        <hm-radio
                            v-model="placement"
                            name="toast-placement"
                            value="bottomcenter">
                            Bottom Center
                        </hm-radio>
                        <hm-radio
                            v-model="placement"
                            name="toast-placement"
                            value="bottomright">
                            Bottom Right
                        </hm-radio>
                    </hm-form-group>
                </div>
                <div class="col-4">
                    <hm-form-group label="Placement">
                        <hm-radio-group
                            :options="variants"
                            v-model="variant"
                            stacked
                        />
                    </hm-form-group>
                </div>
                <div class="col-4">
                    <hm-form-group label="Delay / Auto-close">
                        <hm-checkbox
                            class="mb-4"
                            v-model="autoClose">
                            Автозакрытие
                        </hm-checkbox>

                        <hm-input
                            number
                            class="mb-4"
                            type="number"
                            v-model="showTime"
                            label="Время отображения (в секундах)" />

                        <hm-checkbox v-model="showProgressTimer">
                            Показывать прогресс-бар до закрытия
                        </hm-checkbox>
                    </hm-form-group>
                </div>
            </div>
        </div>

        <div>
            <hm-button
                variant="warning"
                @click="showToast(false)">
                Обычное сообщение
            </hm-button>

            <hm-button
                variant="primary"
                @click="showToast(true)">
                HTML-шаблон
            </hm-button>
        </div>

        <hm-toaster />

        <hr>

        <div class="code-block">
            <pre v-highlightjs="$options.example"><code class="html"></code></pre>
        </div>

        <h3 class="mt-8">Документация</h3>

        <h4 class="mt-5">Вывод сообщения</h4>
        <p>Для добавления (вывода) сообщения используется метод класса <code>HmToaster.add()</code>
        или (при подключении как плагин) &mdash; метод прототипа <code>this.$hmToaster.add()</code></p>
        <div class="code-block">
            <pre v-highlightjs="$options.addExample"><code class="javascript"></code></pre>
        </div>

        <h4 class="mt-5">Объект сообщения</h4>
        <div class="code-block">
            <pre v-highlightjs="$options.messageObjectExample"><code class="javascript"></code></pre>
        </div>
        <p>Для Typescript есть интерфейс <code>HmfToasterMessage</code></p>

        <h4 class="mt-5 text-danger">HmToaster</h4>
        <hm-alert variant="warning" show>Рекомендуется создавать один экземпляр этого компонента если планируется использовать вывод сообщений
            во всем приложении глобально. Чем ближе к закрывающему body &mdash; тем проще будет контролировать <code>z-index</code>.</hm-alert>
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
                        <td><code>default-placement</code></td>
                        <td><code>String</code></td>
                        <td><code>'topright'</code></td>
                        <td>Одно из: <code>'topleft', 'topcenter', 'topright', 'bottomleft', 'bottomcenter', 'bottomright'</code></td>
                        <td>Позиционирование сообщений по-умолчанию (если не передан параметр <code>placement</code> при добавлении сообщения)</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h4 class="mt-5 text-danger">HmNotification</h4>
        <hm-alert variant="warning" show>Компонент стоит рассматривать как внутренний компонент <code>HmToaster</code>:
        использовать его отдельно скорее всего не будет необходимости</hm-alert>
    </section>
</template>
