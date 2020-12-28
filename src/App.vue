
<script>
import debounce from 'lodash.debounce';
import Vue from 'vue';
import {
    uniFilePlusAlt,
    uniTrashAlt,
    uniEllipsisV
} from '@/assets/icons/unicons';

import { HmIcon } from '@/components/icon';
import { HmToaster } from '@/components/toaster';
import HmDragFile from '@/components/HmDragFile';


HmIcon.add(
    uniFilePlusAlt,
    uniTrashAlt,
    uniEllipsisV
);

/* eslint-disable no-param-reassign */
function getRandomIntInRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1) + min);
}
/* eslint-enable */



export default Vue.extend({
    name: 'App',
    data() {
        const tableData = new Array(10).fill(1).map((_, index) => ({
            id: getRandomIntInRange(1, 5000),
            username: 'random word',
            status: [['success', 'ok'], ['primary', 'idle'], ['danger', 'blocked']][getRandomIntInRange(0, 2)],
            date: new Date(getRandomIntInRange(0, Date.now())),
            tags: [null, 'added'][getRandomIntInRange(0, 1)],
            reach: getRandomIntInRange(0, 5000000),
            action: [true, false][getRandomIntInRange(0, 1)],
            active: (index === 4),
            disabled: (index === 7)
        }));

        return {
            inputs: {
                text: '',
                password: '',
                number: null,
                phone: '',
                error: '',
                inputGroup: '',
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
            },
            tableCompact: false,
            tableData,
            tableFields: [
                { key: 'id', label: 'id', sortable: false },
                { key: 'username', label: 'Пользователь', sortable: true },
                { key: 'status', label: 'Статус', sortable: true },
                { key: 'date', label: 'Дата', sortable: true },
                { key: 'tags', label: 'Метки', sortable: false },
                { key: 'reach', label: 'Количество', sortable: true },
                { key: 'action', label: 'Действие', sortable: false }
            ],
            checkboxModels: [
                {
                    key: 'active',
                    label: 'Аctive',
                    value: false,
                    class: '',
                    disabled: false
                },
                {
                    key: 'hover',
                    label: 'Hover',
                    value: false,
                    class: 'custom-checkbox__hover',
                    disabled: false
                },
                {
                    key: 'focus',
                    label: 'Focus',
                    value: false,
                    class: 'custom-checkbox__focus',
                    disabled: false
                },
                {
                    key: 'on',
                    label: 'On',
                    value: true,
                    class: '',
                    disabled: false
                },
                {
                    key: 'disabled',
                    label: 'Disabled',
                    value: false,
                    class: '',
                    disabled: true
                },
                {
                    key: 'choiceDisabled',
                    label: 'Choice disabled',
                    value: true,
                    class: '',
                    disabled: true
                }
            ],
            radioModels: [
                {
                    key: 'active',
                    label: 'Аctive',
                    value: '',
                    class: '',
                    disabled: false
                },
                {
                    key: 'hover',
                    label: 'Hover',
                    value: '',
                    class: 'custom-radio__hover',
                    disabled: false
                },
                {
                    key: 'focus',
                    label: 'Focus',
                    value: '',
                    class: 'custom-radio__focus',
                    disabled: false
                },
                {
                    key: 'on',
                    label: 'On',
                    value: 'on',
                    class: '',
                    disabled: false
                },
                {
                    key: 'disabled',
                    label: 'Disabled',
                    value: '',
                    class: '',
                    disabled: true
                },
                {
                    key: 'choiceDisabled',
                    label: 'Choice disabled',
                    value: 'choiceDisabled',
                    class: '',
                    disabled: true
                }
            ],
            switchModels: [
                {
                    key: 'active',
                    label: 'Аctive',
                    value: false,
                    class: '',
                    disabled: false
                },
                {
                    key: 'hover',
                    label: 'Hover',
                    value: false,
                    class: 'custom-switch__hover',
                    disabled: false
                },
                {
                    key: 'focus',
                    label: 'Focus',
                    value: false,
                    class: 'custom-switch__focus',
                    disabled: false
                },
                {
                    key: 'on',
                    label: 'On',
                    value: true,
                    class: '',
                    disabled: false
                },
                {
                    key: 'disabled',
                    label: 'Disabled',
                    value: false,
                    class: '',
                    disabled: true
                },
                {
                    key: 'choiceDisabled',
                    label: 'Choice disabled',
                    value: true,
                    class: '',
                    disabled: true
                }
            ],
            tooltip: {
                placement: 'top',
                variant: 'black',
                trigger: 'hover'
            },
            popover: {
                placement: 'top',
                variant: 'default',
                trigger: 'hover'
            },
            datepickerModel: '',
            radioModel: 'B',
            rangeSliderModel1: 20,
            rangeSliderModel2: [7, 20],
            switchModel: false,
            selectors: {
                active: {
                    text: 'Активная',
                    disabled: false
                },
                available: {
                    text: 'Доступная',
                    disabled: false
                },
                nonactive: {
                    text: 'Неактивная',
                    disabled: true
                }
            },
            selectorModel: ['active'],
            selectBar: {
                value: 'Развлекательный контент',
                options: [
                    'Развлекательный контент',
                    'Авто',
                    'Здоровое питание',
                    'Стриминговые сервисы'
                ]
            },
            searchBar: {
                value: [
                    { name: 'Развлекательный контент', code: 'a' }
                ],
                options: [
                    { name: 'Развлекательный контент', code: 'a' },
                    { name: 'Авто', code: 'b' },
                    { name: 'Другое', code: 'c' },
                    { name: 'Здоровое питание', code: 'd' },
                    { name: 'Стриминговые сервисы', code: 'e' }
                ]
            },
            showModal: false,
            dropdownModel: true,
            showAlert: true,
            spinButtonModel: 0,
            dragAndDropModel: [],
            calendar: {
                single: null,
                range: [new Date(Date.now() - 259200000), new Date(Date.now())],
                inputSingle: null,
                inputRange: []
            }
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

            this.$hmToaster.add({
                content
            });
        },
        validateInputGroup: debounce(function validateInputGroup() {
            this.inputs.isInputGroupValid = this.inputs.inputGroup.length >= 4;
        }, 500),
        tableDataTrClass(item) {
            if (item.active) {
                return 'selected';
            } else if (item.disabled) {
                return 'disabled';
            }

            return '';
        },
        addTag(newTag) {
            const tag = {
                name: newTag,
                code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
            };
            this.searchBar.options.push(tag);
            this.searchBar.value.push(tag);
        }
    },
    components: {
        HmDragFile,
        HmIcon
    }
});
</script>

<template>
    <div id="app">
        <div class="container">
            <h1 class="mb-10">HPMD UI</h1>

            <div class="bg-white rounded shadow p-5 mb-8">
                <h2 class="mb-9">Typography</h2>
                <div>
                    <h4>Font</h4>
                    <div class="big h2">
                        <p>Typeface: Source Sans Pro</p>
                        <p>
                            <strong>Ligatures:</strong><br>
                            <span style="font-weight: 400">Regular</span><br>
                            <span style="font-weight: 600">Semi-bold</span><br>
                            <span style="font-weight: 700">Bold</span>
                        </p>
                    </div>
                </div>
                <div>
                    <h4>Paragraphs</h4>
                    <p>Oriental loach torrent catfish gunnel, electric <strong>catfish</strong> Blobfish dogteeth tetra. Warmouth eagle ray arapaima banjo catfish wels catfish, bango jewelfish, staghorn sculpin, Redfin perch ghoul pomfret sand eel unicorn fish, <i>aruana</i>. Black swallower Atlantic trout. Man-of-war fish Kafue pike betta sawtooth eel frilled shark minnow graveldiver kingfish cherry salmon pricklefish.</p>
                    <p>Проснувшись однажды утром после <strong>беспокойного</strong> сна, Грегор Замза обнаружил, что он у себя в постели превратился в страшное насекомое. Лежа на <i>панцирнотвердой</i> спине, он видел, стоило ему приподнять голову, свой коричневый, выпуклый, разделенный дугообразными чешуйками живот, на верхушке которого еле держалось готовое вот-вот окончательно <strong>сползти</strong> одеяло. Его многочисленные, убого тонкие по сравнению с остальным телом ножки беспомощно копошились <i>у него перед</i> глазами. «Что со мной случилось?» – подумал он. Это не было сном. Его комната, настоящая, разве что слишком маленькая, но обычная комната, мирно покоилась в своих четырех хорошо знакомых стенах. Над столом, где были разложены распакованные образцы сукон –</p>
                </div>

                <div>
                    <h4>Headings</h4>
                    <h1>H1 heading</h1>
                    <h2>H2 heading</h2>
                    <h3>H3 heading</h3>
                    <h4>H4 heading</h4>
                    <h5>H5 heading</h5>
                    <h6>H6 heading</h6>
                </div>

                <div>
                    <h4>Lists</h4>
                    <div class="row">
                        <div class="col">
                            <p><strong>Numbered list</strong></p>
                            <ol>
                                <li>Element 1</li>
                                <li>Element 2</li>
                                <li>Element 3</li>
                                <li>Element 4</li>
                            </ol>
                        </div>
                        <div class="col">
                            <p><strong>Bullet list</strong></p>
                            <ul>
                                <li>Element 1</li>
                                <li>Element 2</li>
                                <li>Oriental loach torrent catfish gunnel, electric <strong>catfish</strong> Blobfish dogteeth tetra. Warmouth eagle ray arapaima banjo catfish wels catfish</li>
                                <li>Element 3</li>
                                <li>Element 4</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-white p-5 shadow rounded mb-8">
                <h2 class="mb-9">Avatars</h2>

                <div class="mt-4 d-flex justify-content-start">
                    <hm-avatar
                        class="mr-3 mb-2"
                        variant="light"
                        size="xs"
                        src="https://placekitten.com/300/300" />
                    <hm-avatar
                        class="mr-3 mb-2"
                        size="xs"
                        variant="light" />
                </div>
                <div class="mt-4 d-flex justify-content-start">
                    <hm-avatar
                        class="mr-3 mb-2"
                        variant="light"
                        size="sm"
                        src="https://placekitten.com/300/300" />
                    <hm-avatar
                        class="mr-3 mb-2"
                        size="sm"
                        variant="light" />
                </div>
                <div class="mt-4 d-flex justify-content-start">
                    <hm-avatar
                        class="mr-3 mb-2"
                        variant="light"
                        size="md"
                        src="https://placekitten.com/300/300" />
                    <hm-avatar
                        class="mr-3 mb-2"
                        size="md"
                        variant="light" />
                </div>
                <div class="mt-4 d-flex justify-content-start">
                    <hm-avatar
                        class="mr-3 mb-2"
                        variant="light"
                        size="lg"
                        src="https://placekitten.com/300/300" />
                    <hm-avatar
                        class="mr-3 mb-2"
                        size="lg"
                        variant="light" />
                </div>
            </div>

            <div class="bg-white p-5 shadow rounded mb-8">
                <h2 class="mb-9">Buttons</h2>
                <div class="mb-6">
                    <h4>Styles</h4>
                    <div class="mb-5">
                        <p class="mb-0"><strong>Solid</strong></p>
                        <div>
                            <hm-button variant="warning" class="mr-2">Yellow</hm-button>
                            <hm-button variant="light" class="mr-2">Light</hm-button>
                            <hm-button variant="primary" class="mr-2">Blue</hm-button>
                            <hm-button variant="danger" class="mr-2">Red</hm-button>
                            <hm-button variant="warning" class="mr-2" disabled="disabled">Disabled</hm-button>
                        </div>
                    </div>

                    <div class="mb-5">
                        <p class="mb-0"><strong>Outline</strong></p>
                        <div>
                            <hm-button variant="outline-warning" class="mr-2">Yellow</hm-button>
                            <hm-button variant="outline-light" class="mr-2">Light</hm-button>
                            <hm-button variant="outline-primary" class="mr-2">Blue</hm-button>
                            <hm-button variant="outline-danger" class="mr-2">Red</hm-button>
                            <hm-button variant="warning" class="mr-2" disabled="disabled">Disabled</hm-button>
                        </div>
                    </div>

                    <div>
                        <p class="mb-0"><strong>Secondary actions</strong></p>
                        <div>
                            <hm-button variant="link" class="mr-2 text-dark">Regular</hm-button>
                            <hm-button variant="link" class="mr-2 text-blue">Blue</hm-button>
                            <hm-button variant="link" class="mr-2 text-danger">Dangerous</hm-button>
                            <hm-button variant="link" class="mr-2" disabled="disabled">Disabled</hm-button>
                        </div>
                    </div>
                </div>

                <div class="mb-6">
                    <h4>Sizes</h4>
                    <div>
                        <hm-button variant="warning" class="mr-2" size="xs">Condensed (xs)</hm-button>
                        <hm-button variant="warning" size="sm" class="mr-2">small (sm)</hm-button>
                        <hm-button variant="warning" size="md" class="mr-2">regular (md)</hm-button>
                        <hm-button variant="warning" size="lg" class="mr-2">large (lg)</hm-button>
                    </div>
                </div>

                <h3>Grouping</h3>
                <hm-button-group>
                    <hm-button variant="warning" active>some action</hm-button>
                    <hm-button variant="warning">second action</hm-button>
                </hm-button-group>
            </div>

            <div class="bg-white p-5 shadow rounded mb-8">
                <h2 class="mb-5">Labels</h2>

                <div class="row">
                    <div class="col">
                        <div class="mt-4">
                            <hm-badge>
                                Default
                            </hm-badge>
                        </div>
                        <div class="mt-4">
                            <hm-badge variant="primary">
                                Primary
                            </hm-badge>
                        </div>
                        <div class="mt-4">
                            <hm-badge variant="success">
                                Success
                            </hm-badge>
                        </div>
                        <div class="mt-4">
                            <hm-badge variant="info">
                                Info
                            </hm-badge>
                        </div>
                        <div class="mt-4">
                            <hm-badge variant="warning">
                                Extra
                            </hm-badge>
                        </div>
                        <div class="mt-4">
                            <hm-badge variant="danger">
                                Danger
                            </hm-badge>
                        </div>
                    </div>
                    <div class="col">
                        <div class="mt-4">
                            <hm-badge pill>
                                Default
                            </hm-badge>
                        </div>
                        <div class="mt-4">
                            <hm-badge
                                pill
                                variant="primary">
                                Primary
                            </hm-badge>
                        </div>
                        <div class="mt-4">
                            <hm-badge
                                pill
                                variant="success">
                                Success
                            </hm-badge>
                        </div>
                        <div class="mt-4">
                            <hm-badge
                                pill
                                variant="info">
                                Info
                            </hm-badge>
                        </div>
                        <div class="mt-4">
                            <hm-badge
                                pill
                                variant="warning">
                                Extra
                            </hm-badge>
                        </div>
                        <div class="mt-4">
                            <hm-badge
                                pill
                                variant="danger">
                                Danger
                            </hm-badge>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-white p-5 shadow rounded mb-8">
                <h2 class="mb-9">Spin Button</h2>

                <div class="mt-4">
                    <h5>Spin Button</h5>
                    <hm-form-spinbutton v-model="spinButtonModel" />
                </div>
                <div class="mt-4">
                    <h5>Spin Button disabled</h5>
                    <hm-form-spinbutton
                        disabled
                        v-model="spinButtonModel" />
                </div>
                <div class="mt-4">
                    <h5>Spin Button inline</h5>
                    <hm-form-spinbutton
                        inline
                        v-model="spinButtonModel" />
                </div>
                <div class="mt-4">
                    <h5>Spin Button vertical</h5>
                    <hm-form-spinbutton
                        vertical
                        v-model="spinButtonModel" />
                </div>
            </div>

            <div class="bg-white p-5 shadow rounded mb-8">
                <h2 class="mb-5">Select Input</h2>

                <div class="mt-4">
                    <div class="row">
                        <div class="col">
                            <h5>Select bar</h5>
                            <hm-select
                                v-model="selectBar.value"
                                :options='selectBar.options'/>
                        </div>
                        <div class="col">
                            <h5>Search bar multiple selection</h5>
                            <hm-select
                                track-by="name"
                                label="name"
                                taggable
                                multiple
                                v-model="searchBar.value"
                                :options='searchBar.options'
                                v-on:tag="addTag"/>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-white p-5 shadow rounded mb-8">
                <h2 class="mb-5">Collapse</h2>

                <div class="mt-4">
                    <hm-collapse button-text="Статистика по блогерам">
                        <hm-card>
                            Производство в принципе масштабирует убывающий инвестиционный продукт. Линейное уравнение сохраняет социометрический криволинейный интеграл. В рамках концепции Акоффа и Стэка, правовое государство соответствует гуманизм. Ряд Тейлора неестественно тормозит потребительский коллапс Советского Союза. Теорема представляет собой  культ  личности. Огибающая очевидна не для всех. Ряд Тейлора неестественно тормозит.
                            Ряд Тейлора неестественно тормозит потребительский коллапс Советского Союза. Теорема представляет собой культ личности. Огибающая очевидна не для всех. Ряд Тейлора неестественно тормозит.
                        </hm-card>
                    </hm-collapse>
                </div>
            </div>

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

            <div class="bg-white p-5 shadow rounded mb-8">
                <h2 class="mb-5">Toast (Notification)</h2>

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
            </div>

            <div class="bg-white p-5 shadow rounded mb-8">
                <h2 class="mb-5">Progress bar</h2>

                <div class="row">
                    <div class="col">
                        <div class="mt-4">
                            <h4>Empty</h4>
                            <hm-progress>
                                <hm-progress-bar label="empty"></hm-progress-bar>
                            </hm-progress>
                        </div>

                        <div class="mt-5">
                            <h4>Solid</h4>
                            <hm-progress
                                class="mt-4"
                                height="2px"
                                :value="55"
                                variant="primary" />
                            <hm-progress
                                class="mt-4"
                                height="4px"
                                :value="23"
                                variant="warning" />
                            <hm-progress
                                class="mt-4"
                                height="8px"
                                :value="94"
                                variant="danger" />
                            <hm-progress
                                class="mt-4"
                                height="16px"
                                :value="44"
                                variant="dark" />
                        </div>

                        <div class="mt-5">
                            <h4>Animated</h4>
                            <hm-progress
                                class="mt-4"
                                height="2px"
                                :value="55"
                                variant="primary"
                                animated />
                            <hm-progress
                                class="mt-4"
                                height="4px"
                                :value="23"
                                variant="warning"
                                animated />
                            <hm-progress
                                class="mt-4"
                                height="8px"
                                :value="94"
                                variant="danger"
                                animated />
                            <hm-progress
                                class="mt-4"
                                height="16px"
                                :value="44"
                                variant="dark"
                                animated />
                        </div>

                        <div class="mt-5">
                            <h4>Multiple bars</h4>
                            <hm-progress max="100">
                                <hm-progress-bar value="24" variant="primary" show-progress></hm-progress-bar>
                                <hm-progress-bar value="13" variant="warning" show-progress></hm-progress-bar>
                                <hm-progress-bar value="33" variant="danger" show-progress></hm-progress-bar>
                            </hm-progress>
                        </div>
                    </div>
                </div>
            </div>

             <div class="bg-white p-5 shadow rounded mb-8">
                <h2 class="mb-9">Calendar</h2>

                <div class="mb-4">
                    <div class="row align-items-end">
                        <div class="col">
                            <hm-calendar
                                show-year-btns
                                is-range
                                v-model="calendar.range" />
                        </div>
                        <div class="col">
                            <hm-calendar
                                hide-header
                                v-model="calendar.single" />
                        </div>
                        <div class="col">
                            <hm-datepicker
                                range
                                hide-header
                                v-model="datepickerModel" />
                        </div>
                    </div>
                </div>
             </div>

            <div class="bg-white p-5 shadow rounded mb-8">
                <h2 class="mb-9">File Input</h2>

                <div class="row">
                    <div class="col">
                        <h4>Drag n drop</h4>

                        <div class="mt-4">
                            <hm-drag-file
                                show-input
                                v-model="dragAndDropModel">
                            </hm-drag-file>
                        </div>
                    </div>
                    <div class="col">
                        <h4>Drag n drop fill absolute</h4>

                        <div class="mt-4">
                            <div style="position: relative; height: 300px;">
                                <hm-drag-file
                                    view="fill-absolute"
                                    v-model="dragAndDropModel">
                                </hm-drag-file>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <h4>Upload/input</h4>

                        <div class="mt-4">
                            <hm-file-input />
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-white p-5 shadow rounded mb-8">
                <h2 class="mb-9">Form Inputs</h2>

                <div class="mb-4">
                    <h4>Input</h4>

                    <div class="mt-4">
                        <hm-input v-model="inputs.text" type="email" label="E-mail" />
                    </div>

                    <div class="mt-4">
                        <hm-input v-model="inputs.password" type="password" label="Пароль" show-password-btn />
                    </div>

                    <div class="mt-4">
                        <hm-input
                            v-model="inputs.number"
                            type="number"
                            :min="0"
                            :max="10"
                            label="Число между 0 и 10">
                            <template v-slot:prepend>
                                <span class="lead">&#8381;</span>
                            </template>
                        </hm-input>
                    </div>

                    <div class="mt-4">
                        <hm-input
                            v-model="inputs.number"
                            type="number"
                            label="Число"
                            disabled>
                            <template v-slot:append>
                                <span class="lead">&#8381;</span>
                            </template>
                        </hm-input>
                    </div>

                    <div class="mt-4">
                        <hm-input
                            v-model="inputs.phone"
                            type="tel"
                            label="Номер телефона">
                            <template v-slot:append>
                                <span class="text-primary"><strong>123</strong></span>
                                <hm-icon class="text-primary" name="eye-slash"></hm-icon>
                            </template>
                        </hm-input>
                    </div>

                    <div class="mt-4">
                        <hm-input
                            v-model="inputs.error"
                            type="text"
                            :state="false"
                            label="Ошибка ввода">
                        </hm-input>
                    </div>

                    <div class="mt-4">
                        <hm-input
                            v-model="inputs.text"
                            :state="true"
                            label="Ввод без проблем">
                        </hm-input>
                    </div>

                    <div class="mt-4">
                        <hm-input
                            disabled
                            v-model="inputs.error"
                            type="text"
                            :state="false"
                            label="Номер телефона">
                        </hm-input>
                    </div>
                </div>

                <div class="mb-4">
                    <h4>Masked input</h4>

                    <div class="mt-4">
                        <hm-input
                            label="Номер телефона"
                            v-model="masked.phone"
                            :mask="masked.phoneMask"
                            type="tel"
                            @inputRaw="masked.phoneRaw = $event">
                        </hm-input>
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
                </div>

                <div class="mb-4">
                    <h4>Input message</h4>

                    <hm-form-group
                        description="Введите пин-код"
                        :state="inputs.isInputGroupValid"
                        :invalid-feedback="inputs.inputGroup.length > 0 ? 'Введите не менее 4 символов' : 'Поле не должно быть пустым'">
                        <hm-input
                            v-model="inputs.inputGroup"
                            :state="inputs.isInputGroupValid"
                            trim
                            @input="validateInputGroup">
                        </hm-input>
                    </hm-form-group>
                </div>

                <div>
                    <h4>Input group</h4>

                    <hm-input-group class="mb-5">
                        <hm-input
                            v-model="inputs.text"
                            label="Append slot" />

                        <template v-slot:append>
                            <hm-button variant="primary">test</hm-button>
                        </template>
                    </hm-input-group>

                    <hm-input-group class="mb-5">
                        <hm-input-group-prepend>
                            <hm-button variant="warning">Left action</hm-button>
                        </hm-input-group-prepend>
                        <hm-input v-model="inputs.text" label="Prepend component" />
                    </hm-input-group>

                    <hm-input-group class="mb-5">
                        <hm-input-group-prepend is-text>
                            Just any text
                        </hm-input-group-prepend>

                        <hm-input v-model="inputs.text" label="Text prepend"></hm-input>
                    </hm-input-group>

                    <hm-input-group>
                        <hm-input-group-prepend>
                            <hm-dropdown text="Choose" variant="warning">
                                <hm-dropdown-item>Option 1</hm-dropdown-item>
                                <hm-dropdown-item>Option 2</hm-dropdown-item>
                            </hm-dropdown>
                        </hm-input-group-prepend>

                        <hm-input v-model="inputs.text" label="Both sides" />

                        <hm-input-group-append>
                            <hm-button variant="primary">Action!</hm-button>
                        </hm-input-group-append>
                    </hm-input-group>
                </div>
            </div>

            <div class="bg-white p-5 shadow rounded mb-8">
                <h2 class="mb-5">Слайдер</h2>

                <div class="my-5">
                    <hm-range-slider
                        tooltip="always"
                        :marks="true"
                        lazy
                        :min="0"
                        :max="30"
                        v-model="rangeSliderModel1"></hm-range-slider>
                </div>
                <div class="my-5">
                    <hm-range-slider
                        lazy
                        tooltip-placement="bottom"
                        :min="0"
                        :max="30"
                        v-model="rangeSliderModel2"></hm-range-slider>
                </div>
            </div>

            <div class="bg-white p-5 shadow rounded mb-8">
                <h2 class="mb-5">Dropdown</h2>

                <div class="row">
                    <div class="col">
                        <div class="mt-4">
                            <h5>Solid Dropdown</h5>
                            <hm-dropdown
                                variant="warning">
                                <template v-slot:button-content>small dropdown</template>
                                <hm-dropdown-item>Текстовый текст</hm-dropdown-item>
                                <hm-dropdown-divider />
                                <hm-dropdown-item>Информационный текст</hm-dropdown-item>
                                <hm-dropdown-divider />
                                <hm-dropdown-item>Карусельный текст</hm-dropdown-item>
                                <hm-dropdown-divider />
                                <hm-dropdown-item>Текстовый текст</hm-dropdown-item>
                            </hm-dropdown>
                        </div>
                    </div>
                    <div class="col">
                        <div class="mt-4">
                            <h5>Solid Split Dropdowns</h5>
                            <hm-dropdown
                                split
                                variant="warning">
                                <template v-slot:button-content>small dropdown</template>
                                <hm-dropdown-item>Текстовый текст</hm-dropdown-item>
                                <hm-dropdown-divider />
                                <hm-dropdown-item>Информационный текст</hm-dropdown-item>
                                <hm-dropdown-divider />
                                <hm-dropdown-item>Карусельный текст</hm-dropdown-item>
                                <hm-dropdown-divider />
                                <hm-dropdown-item>Текстовый текст</hm-dropdown-item>
                            </hm-dropdown>
                        </div>
                    </div>
                </div>

                <div class="mt-5">
                    <h5>Sizing</h5>

                    <hm-dropdown
                        class="mr-3"
                        v-for="sizekey in ['xs', 'sm', 'md', 'lg']"
                        :size="sizekey"
                        :key="`dropdown-size-${sizekey}`"
                        :text="`Size ${sizekey}`">
                        <hm-dropdown-item>123</hm-dropdown-item>
                    </hm-dropdown>
                </div>
            </div>

            <div class="bg-white p-5 shadow rounded mb-8">
                <h2 class="mb-5">Navigation and Tabs</h2>

                <div class="mt-4">
                    <div class="row">
                        <div class="col-6 mb-5">
                            <h5>Tabs</h5>
                            <hm-nav tabs>
                                <hm-nav-item active>Выбранная</hm-nav-item>
                                <hm-nav-item>Доступная</hm-nav-item>
                                <hm-nav-item class="hover">Ховер</hm-nav-item>
                                <hm-nav-item disabled>Недоступная</hm-nav-item>
                            </hm-nav>
                        </div>
                        <div class="col-6 mb-5">
                            <h5>Tabs with dropdowns</h5>
                            <hm-nav tabs>
                                <hm-nav-item active>Выбранная</hm-nav-item>
                                <hm-nav-item-dropdown
                                    variant="light"
                                    text="Доступная">
                                    <hm-dropdown-item>One</hm-dropdown-item>
                                    <hm-dropdown-divider></hm-dropdown-divider>
                                    <hm-dropdown-item>Two</hm-dropdown-item>
                                    <hm-dropdown-divider></hm-dropdown-divider>
                                    <hm-dropdown-item>Three</hm-dropdown-item>
                                </hm-nav-item-dropdown>
                                <hm-nav-item>Доступная</hm-nav-item>
                                <hm-nav-item disabled>Недоступная</hm-nav-item>
                            </hm-nav>
                        </div>
                        <div class="col-6 mb-5">
                            <h5>Pills</h5>
                            <hm-nav pills>
                                <hm-nav-item active>Выбранная</hm-nav-item>
                                <hm-nav-item>Доступная</hm-nav-item>
                            </hm-nav>
                        </div>
                        <div class="col-6 mb-5">
                            <h5>Pills with dropdowns</h5>
                            <hm-nav pills>
                                <hm-nav-item active>Выбранная</hm-nav-item>
                                <hm-nav-item-dropdown
                                    variant="light"
                                    text="Доступная">
                                    <hm-dropdown-item>One</hm-dropdown-item>
                                    <hm-dropdown-divider></hm-dropdown-divider>
                                    <hm-dropdown-item>Two</hm-dropdown-item>
                                    <hm-dropdown-divider></hm-dropdown-divider>
                                    <hm-dropdown-item>Three</hm-dropdown-item>
                                </hm-nav-item-dropdown>
                                <hm-nav-item title-link-class="hover">Доступная</hm-nav-item>
                                <hm-nav-item disabled>Недоступная</hm-nav-item>
                            </hm-nav>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-white p-5 shadow rounded mb-8">
                <h2 class="mb-9">Selector</h2>

                <div class="mt-4">
                    <hm-selector layout="inline-block">
                        <hm-selector-el
                            v-for="(selector, key) in selectors"
                            v-model="selectorModel"
                            :key="`selector-${key}`"
                            :value="key"
                            :disabled="selector.disabled"
                            :checkbox-limit="3">
                            {{selector.text}}
                        </hm-selector-el>
                    </hm-selector>
                </div>
            </div>

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

            <div class="bg-white p-5 shadow rounded mb-8">
                <h2 class="mb-4">Tooltips</h2>

                <div class="bg-light p-5 rounded mb-6">
                    <div class="row">
                        <div class="col-4">
                            <hm-form-group stacked label="Placement">
                                <hm-radio v-model="tooltip.placement" name="tt-placement" value="left">Left</hm-radio>
                                <hm-radio v-model="tooltip.placement" name="tt-placement" value="top">Top</hm-radio>
                                <hm-radio v-model="tooltip.placement" name="tt-placement" value="right">Right</hm-radio>
                                <hm-radio v-model="tooltip.placement" name="tt-placement" value="bottom">Bottom</hm-radio>
                            </hm-form-group>
                        </div>
                        <div class="col-4">
                            <hm-form-group label="Variant">
                                <hm-radio v-model="tooltip.variant" name="tt-variant" value="black">Default</hm-radio>
                                <hm-radio v-model="tooltip.variant" name="tt-variant" value="primary">Primary</hm-radio>
                                <hm-radio v-model="tooltip.variant" name="tt-variant" value="warning">Warning</hm-radio>
                                <hm-radio v-model="tooltip.variant" name="tt-variant" value="danger">Danger</hm-radio>
                                <hm-radio v-model="tooltip.variant" name="tt-variant" value="light">Light</hm-radio>
                            </hm-form-group>
                        </div>
                        <div class="col-4">
                            <hm-form-group label="Trigger">
                                <hm-radio v-model="tooltip.trigger" value="click">Click</hm-radio>
                                <hm-radio v-model="tooltip.trigger" value="hover">Hover</hm-radio>
                                <hm-radio v-model="tooltip.trigger" value="focus">Focus</hm-radio>
                            </hm-form-group>
                        </div>
                    </div>
                </div>

                <div>
                    <hm-button id="tooltip-target">Interact me</hm-button>

                    <hm-tooltip
                        target="tooltip-target"
                        :variant="tooltip.variant"
                        :placement="tooltip.placement"
                        :triggers="tooltip.trigger">
                        Yay! Tooltip!
                    </hm-tooltip>
                </div>
            </div>

            <div class="bg-white p-5 shadow rounded mb-8">
                <h2 class="mb-9">Popovers</h2>

                <div class="mb-6 bg-light rounded p-5">
                    <div class="row">
                        <div class="col-4">
                            <hm-form-group>
                                <hm-radio v-model="popover.placement" value="left" name="po-placement">Left</hm-radio>
                                <hm-radio v-model="popover.placement" value="top" name="po-placement">Top</hm-radio>
                                <hm-radio v-model="popover.placement" value="right" name="po-placement">Right</hm-radio>
                                <hm-radio v-model="popover.placement" value="bottom" name="po-placement">Bottom</hm-radio>
                            </hm-form-group>
                        </div>
                        <div class="col-4">
                            <hm-form-group label="Variant">
                                <hm-radio v-model="popover.variant" name="po-variant" value="default">Default</hm-radio>
                                <hm-radio v-model="popover.variant" name="po-variant" value="primary">Primary</hm-radio>
                                <hm-radio v-model="popover.variant" name="po-variant" value="warning">Warning</hm-radio>
                                <hm-radio v-model="popover.variant" name="po-variant" value="danger">Danger</hm-radio>
                                <hm-radio v-model="popover.variant" name="po-variant" value="light">Light</hm-radio>
                            </hm-form-group>
                        </div>
                        <div class="col-4">
                            <hm-form-group label="Trigger">
                                <hm-radio v-model="popover.trigger" value="click">Click</hm-radio>
                                <hm-radio v-model="popover.trigger" value="hover">Hover</hm-radio>
                                <hm-radio v-model="popover.trigger" value="focus">Focus</hm-radio>
                            </hm-form-group>
                        </div>
                    </div>
                </div>

                <div>
                    <hm-button id="popover-target" variant="primary">Interact me!</hm-button>

                    <hm-popover
                        target="popover-target"
                        :variant="popover.variant"
                        :placement="popover.placement"
                        :triggers="popover.trigger">
                        <template #title>Popover title</template>
                        <div>
                            Some amazing <hm-badge variant="primary">content</hm-badge>!
                        </div>
                    </hm-popover>
                </div>
            </div>

            <div class="bg-white p-5 shadow rounded mb-8">
                <h2 class="mb-9">Form elements</h2>

                <div class="row">
                    <div class="col-4">
                        <div class="mb-4">
                            <h4>Checkbox</h4>

                            <div
                                class="mt-4"
                                v-for="checkboxModel in checkboxModels"
                                :key="`checkbox-${checkboxModel.key}`">
                                <hm-checkbox
                                    :class="checkboxModel.class"
                                    :disabled="checkboxModel.disabled"
                                    v-model="checkboxModel.value">
                                    {{checkboxModel.label}}
                                </hm-checkbox>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="mb-4">
                            <h4>Radio</h4>

                            <div
                                v-for="radioModel in radioModels"
                                :key="`radio-${radioModel.key}`"
                                class="mt-4">
                                <hm-form-group>
                                    <hm-radio
                                        :class="radioModel.class"
                                        :disabled="radioModel.disabled"
                                        :value="radioModel.key"
                                        v-model="radioModel.value"
                                        name="radio-btns">
                                        {{radioModel.label}}
                                    </hm-radio>
                                </hm-form-group>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="mb-4">
                            <h4>Toggles</h4>

                            <div
                                class="mt-4"
                                v-for="switchModel in switchModels"
                                :key="`checkbox-${switchModel.key}`">
                                <hm-checkbox
                                    switch
                                    :class="switchModel.class"
                                    :disabled="switchModel.disabled"
                                    v-model="switchModel.value">
                                    {{switchModel.label}}
                                </hm-checkbox>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-white p-5 shadow rounded mb-8">
                <h2 class="mb-4">Alert / Toast</h2>

                <div class="row">
                    <div class="col-6">
                        <div class="bg-secondary p-3">
                            <div class="mt-4">
                                <hm-alert
                                    dismissible
                                    :show="showAlert"
                                    variant="success">
                                    <p class="mb-0">
                                        <b>Well done!</b> You successfully read
                                        <b>this important alert message.</b>
                                    </p>
                                </hm-alert>
                            </div>
                            <div class="mt-4">
                                <hm-alert
                                    dismissible
                                    :show="showAlert"
                                    variant="info">
                                    <p class="mb-0">
                                        <b>Heads up!</b> This <b>alert needs your attention,</b>
                                        but it's not super important.
                                    </p>
                                </hm-alert>
                            </div>
                            <div class="mt-4">
                                <hm-alert
                                    dismissible
                                    :show="showAlert"
                                    variant="warning">
                                    <p class="mb-0">
                                        <b>Warning!</b> Better check yourself,
                                        you're <b>not looking too good.</b>
                                    </p>
                                </hm-alert>
                            </div>
                            <div class="mt-4">
                                <hm-alert
                                    dismissible
                                    :show="showAlert"
                                    variant="danger">
                                    <p class="mb-0">
                                        <b>Oh snap! Change a few things up</b>
                                        and try submitting again.
                                    </p>
                                </hm-alert>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-white p-5 shadow rounded mb-8">
                <h2 class="mb-9">Tables</h2>

                <div class="mb-4">
                    <hm-checkbox v-model="tableCompact">Condensed</hm-checkbox>
                </div>

                <div
                    class="mb-5"
                    v-for="tableStyle in ['light', 'dark']"
                    :key="`table-${tableStyle}`">
                    <h4>{{tableStyle}}</h4>
                    <hm-table
                        :table-variant="tableStyle"
                        primary-key="id"
                        hover
                        :small="tableCompact"
                        :fields="tableFields"
                        :items="tableData"
                        :tbody-tr-class="tableDataTrClass"
                        responsive
                        selectable
                        select-mode="range">
                        <template v-slot:head(id)>
                            <hm-checkbox></hm-checkbox>
                        </template>

                        <template v-slot:cell(id)="data">
                            <hm-checkbox v-model="data.item.active"></hm-checkbox>
                        </template>

                        <template v-slot:cell(status)="data">
                            <span :class="`text-${data.value[0]}`">{{data.value[1]}}</span>
                        </template>

                        <template v-slot:cell(tags)="data">
                            <template v-if="data.value">
                                <hm-badge variant="dark">{{data.value}}</hm-badge>
                            </template>
                        </template>

                        <template v-slot:cell(date)="data">{{data.value.toLocaleDateString()}}</template>

                        <template v-slot:cell(reach)="data">{{data.value.toLocaleString()}}</template>

                        <template v-slot:cell(action)="data">
                            <hm-button variant="warning" size="xs" v-if="data.value">
                                action
                            </hm-button>
                        </template>
                    </hm-table>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
#app {
    // font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin-top: 60px;
}
</style>
