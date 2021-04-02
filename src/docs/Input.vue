<script>
// eslint-disable-next-line import/no-extraneous-dependencies
import debounce from 'lodash.debounce';
import { uniPhone } from '@/unicons';
import { HmIcon } from '../components/icon';

HmIcon.add(uniPhone);


const exampleInput = `<div class="mt-4">
    <hm-input
        label="E-mail"
        type="email"
        v-model="inputs.text"
    />
</div>

<div class="mt-4">
    <hm-input
        label="Пароль"
        show-password-btn
        type="password"
        v-model="inputs.password"
    />
</div>

<div class="mt-4">
    <hm-input
        label="Число между 0 и 10"
        :max="10"
        :min="0"
        type="number"
        v-model="inputs.number">
        <template v-slot:prepend>
            <span class="lead">&#8381;</span>
        </template>
    </hm-input>
</div>

<div class="mt-4">
    <hm-input
        disabled
        label="Число"
        type="number"
        v-model="inputs.number">
        <template v-slot:append>
            <span class="lead">&#8381;</span>
        </template>
    </hm-input>
</div>

<div class="mt-4">
    <hm-input
        label="Номер телефона"
        type="tel"
        v-model="inputs.phone">
        <template v-slot:prepend>
            <hm-icon
                class="text-primary"
                name="uni-phone"
            />
        </template>
        <template v-slot:append>
            <span class="text-primary">
                <strong>RU</strong>
            </span>
        </template>
    </hm-input>
</div>`;

const exampleMasked = `<div class="mt-4">
    <hm-input
        label="Номер телефона"
        :mask="masked.phoneMask"
        type="tel"
        v-model="masked.phone"
        @inputRaw="masked.phoneRaw = $event"
    />
    <pre class="bg-light p-4"><code>Model value: {{masked.phone}}<br>Raw value: {{masked.phoneRaw}}</code></pre>
</div>

<div class="mt-4">
    <hm-input
        label="Любое число"
        v-model="masked.number"
        :mask="masked.numberMask"
        type="text"
        @inputRaw="masked.numberRaw = $event">
    </hm-input>
    <pre class="bg-light p-4"><code>Model value: {{masked.number}}<br>Raw value: {{masked.numberRaw}}</code></pre>
</div>`;


const exampleValidation = `<hm-form-group
    description="Введите пин-код"
    :invalid-feedback="inputs.inputGroup.length > 0 ? 'Введите не менее 4 символов' : 'Поле не должно быть пустым'"
    valid-feedback="Все замечательно!"
    :state="inputs.isInputGroupValid">
    <hm-input
        :state="inputs.isInputGroupValid"
        trim
        v-model="inputs.inputGroup"
        @input="validateInputGroup">
    </hm-input>
</hm-form-group>`;


export default {
    exampleInput,
    exampleMasked,
    exampleValidation,

    data() {
        return {
            inputs: {
                text: '',
                password: '',
                number: null,
                phone: '',
                error: '',
                inputGroup: '',
                time: '',
                date: null,
                isInputGroupValid: null
            },
            masked: {
                phone: '',
                phoneMask: {
                    mask: '{+7} (000) 000-00-00',
                },
                phoneRaw: '',

                number: '',
                numberMask: {
                    mask: Number,
                    thousandsSeparator: ' '
                },
                numberRaw: '',
            }
        };
    },
    methods: {
        validateInputGroup: debounce(function validateInputGroup() {
            this.inputs.isInputGroupValid = this.inputs.inputGroup.length >= 4;
        }, 500)
    }
};
</script>


<template>
    <section>
        <h2 class="mb-8 display-4">Input</h2>

        <h3 class="mt-8">Компоненты</h3>
        <ul>
            <li>
                <strong>HmInput</strong> <hm-badge variant="primary">Bootstrap Vue</hm-badge> <hm-badge variant="danger">Modified</hm-badge>
            </li>
        </ul>


        <h3 class="mt-8">Использование</h3>

        <div class="mb-4">
            <h4>Input</h4>

            <div class="mt-4">
                <hm-input
                    label="E-mail"
                    type="email"
                    v-model="inputs.text"
                />
            </div>

            <div class="mt-4">
                <hm-input
                    label="Пароль"
                    show-password-btn
                    type="password"
                    v-model="inputs.password"
                />
            </div>

            <div class="mt-4">
                <hm-input
                    label="Число между 0 и 10"
                    :max="10"
                    :min="0"
                    type="number"
                    v-model="inputs.number">
                    <template v-slot:prepend>
                        <span class="lead">&#8381;</span>
                    </template>
                </hm-input>
            </div>

            <div class="mt-4">
                <hm-input
                    disabled
                    label="Число"
                    type="number"
                    v-model="inputs.number">
                    <template v-slot:append>
                        <span class="lead">&#8381;</span>
                    </template>
                </hm-input>
            </div>

            <div class="mt-4">
                <hm-input
                    label="Номер телефона"
                    type="tel"
                    v-model="inputs.phone">
                    <template v-slot:prepend>
                        <hm-icon
                            class="text-primary"
                            name="uni-phone"
                        />
                    </template>
                    <template v-slot:append>
                        <span class="text-primary">
                            <strong>RU</strong>
                        </span>
                    </template>
                </hm-input>
            </div>

            <div class="mt-4">
                <hm-input
                    label="Время"
                    type="time"
                    v-model="inputs.time" />
            </div>

            <div class="mt-4">
                <hm-input
                    label="Дата"
                    type="date"
                    v-model="inputs.date" />
            </div>

            <hr>

            <div class="code-block">
                <pre v-highlightjs="$options.exampleInput"><code class="html"></code></pre>
            </div>
        </div>

        <div class="mb-4">
            <h4>Masked input</h4>

            <div class="mt-4">
                <hm-input
                    label="Номер телефона"
                    :mask="masked.phoneMask"
                    type="tel"
                    v-model="masked.phone"
                    @inputRaw="masked.phoneRaw = $event"
                />
                <pre class="bg-light p-4"><code>Model value: {{masked.phone}}<br>Raw value: {{masked.phoneRaw}}</code></pre>
            </div>

            <div class="mt-4">
                <hm-input
                    label="Любое число"
                    v-model="masked.number"
                    :mask="masked.numberMask"
                    type="text"
                    @inputRaw="masked.numberRaw = $event">
                </hm-input>
                <pre class="bg-light p-4"><code>Model value: {{masked.number}}<br>Raw value: {{masked.numberRaw}}</code></pre>
            </div>

            <hr>

            <div class="code-block">
                <pre v-highlightjs="$options.exampleMasked"><code class="html"></code></pre>
            </div>
        </div>

        <div class="mb-4">
            <h4>Validation</h4>

            <hm-form-group
                description="Введите пин-код"
                :invalid-feedback="inputs.inputGroup.length > 0 ? 'Введите не менее 4 символов' : 'Поле не должно быть пустым'"
                valid-feedback="Все замечательно!"
                :state="inputs.isInputGroupValid">
                <hm-input
                    :state="inputs.isInputGroupValid"
                    trim
                    v-model="inputs.inputGroup"
                    @input="validateInputGroup">
                </hm-input>
            </hm-form-group>

            <hr>

            <div class="code-block">
                <pre v-highlightjs="$options.exampleValidation"><code class="html"></code></pre>
            </div>
        </div>

        <h3 class="mt-8">Документация</h3>

        <p><a href="https://bootstrap-vue.org/docs/components/form-input">Bootstrap Vue</a></p>
        <p><a href="https://github.com/uNmAnNeR/imaskjs">imaskjs</a></p>
        <p><a href="https://github.com/uNmAnNeR/imaskjs/tree/master/packages/vue-imask">Vue IMask</a></p>

        <h4>Основные изменения</h4>
        <ol>
            <li>Компонент завернут в контейнер для того, чтобы сопутствующие вводу элементы интерфейса можно было выводить прямо в нем (кнопки, лэйбл)</li>
            <li>Добавлен ввод по маске (с помощью директивы <a href="https://github.com/uNmAnNeR/imaskjs/tree/master/packages/vue-imask">vue-imask</a>)</li>
        </ol>

        <h4>Добавленные свойства</h4>
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
                        <td><code>label</code></td>
                        <td><code>String</code></td>
                        <td><code>''</code></td>
                        <td></td>
                        <td>Текст лэйбла над полем ввода: рекомендуется использовать отдельно от placeholder, либо описать свои стили для placeholder, чтобы избежать визуального наложения</td>
                    </tr>
                    <tr>
                        <td><code>mask</code></td>
                        <td><code>IMask</code></td>
                        <td><code>undefined</code></td>
                        <td>IMask instance</td>
                        <td>Маска ввода для текстовых полей</td>
                    </tr>
                    <tr>
                        <td><code>show-clear-btn</code></td>
                        <td><code>Boolean</code></td>
                        <td><code>true</code></td>
                        <td></td>
                        <td>Показывать ли кнопку очистки поля ввода</td>
                    </tr>
                    <tr>
                        <td><code>show-passowrd-btn</code></td>
                        <td><code>Boolean</code></td>
                        <td><code>false</code></td>
                        <td></td>
                        <td>Показывать ли кнопку "Показать пароль" (актуально для <code>input[type="password"]</code>)</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h4>Добавленные события</h4>
        <div class="table-responsive">
            <table class="table table-sm table-striped table-code">
                <thead>
                    <tr>
                        <th>Событие</th>
                        <th>Передаваемые данные</th>
                        <th>Описание</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>accept</code></td>
                        <td><code>IMask Accept event data</code></td>
                        <td>Событие отправляется каждый раз когда меняется значение маски при вводе. Практической ценности не имеет, добавлено в большей степени для дебага</td>
                    </tr>
                    <tr>
                        <td><code>complete</code></td>
                        <td><code>IMask Complete event data</code></td>
                        <td>Событие отправляется когда маска ввода заполнена</td>
                    </tr>
                    <tr>
                        <td><code>inputRaw</code></td>
                        <td><code>Imask.AcceptEvent.detail.unmaskedValue</code></td>
                        <td>Сырой ввод пользователя в поле с маской - может быть нужно для получения неформатированного значения (например, номера телефона в виде `+79998887766`, а не `+7 (999) 888-77-66`)</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h4>Добавленные слоты</h4>
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
                        <td><code>append</code></td>
                        <td>Слот для вывода элементов после (справа от) поля ввода</td>
                    </tr>
                    <tr>
                        <td><code>prepend</code></td>
                        <td>Слот для вывода элементов перед (слева от) полем ввода</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>
