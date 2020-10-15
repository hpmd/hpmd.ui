<script>
import Vue from 'vue';
import HmInput from '@/components/HmInput.vue';
import HmCheckbox from '@/components/HmCheckbox.vue';
import HmRadio from '@/components/HmRadio.vue';
import HmIcon from '@/components/HmIcon';

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
                phoneFormatter(val) {
                    return `+${val}`;
                }
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
            checkboxModel: true,
            radioInputs: [
                { key: 'A', text: 'Active'},
                { key: 'B', text: 'On'},
            ],
            radioModel: 'B'
        };
    },
    methods: {
        tableDataTrClass(item) {
            if (item.active) {
                return 'selected';
            } else if (item.disabled) {
                return 'disabled';
            }

            return '';
        },
        logchange(e) {
            console.log(e);
        }
    },
    components: {
        HmRadio,
        HmCheckbox,
        HmIcon,
        HmInput
    }
});
</script>

<template>
    <div id="app">
        <b-container>
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
                    <b-row>
                        <b-col>
                            <p><strong>Numbered list</strong></p>
                            <ol>
                                <li>Element 1</li>
                                <li>Element 2</li>
                                <li>Element 3</li>
                                <li>Element 4</li>
                            </ol>
                        </b-col>
                        <b-col>
                            <p><strong>Bullet list</strong></p>
                            <ul>
                                <li>Element 1</li>
                                <li>Element 2</li>
                                <li>Oriental loach torrent catfish gunnel, electric <strong>catfish</strong> Blobfish dogteeth tetra. Warmouth eagle ray arapaima banjo catfish wels catfish</li>
                                <li>Element 3</li>
                                <li>Element 4</li>
                            </ul>
                        </b-col>
                    </b-row>
                </div>
            </div>

            <div class="bg-white p-5 shadow rounded mb-8">
                <h2 class="mb-9">Buttons</h2>
                <div class="mb-6">
                    <h4>Styles</h4>
                    <div class="mb-5">
                        <p class="mb-0"><strong>Solid</strong></p>
                        <div>
                            <b-btn variant="warning" class="mr-2">Yellow</b-btn>
                            <b-btn variant="light" class="mr-2">Light</b-btn>
                            <b-btn variant="primary" class="mr-2">Blue</b-btn>
                            <b-btn variant="danger" class="mr-2">Red</b-btn>
                            <b-btn variant="warning" class="mr-2" disabled="disabled">Disabled</b-btn>
                        </div>
                    </div>

                    <div class="mb-5">
                        <p class="mb-0"><strong>Outline</strong></p>
                        <div>
                            <b-btn variant="outline-warning" class="mr-2">Yellow</b-btn>
                            <b-btn variant="outline-light" class="mr-2">Light</b-btn>
                            <b-btn variant="outline-primary" class="mr-2">Blue</b-btn>
                            <b-btn variant="outline-danger" class="mr-2">Red</b-btn>
                            <b-btn variant="warning" class="mr-2" disabled="disabled">Disabled</b-btn>
                        </div>
                    </div>

                    <div>
                        <p class="mb-0"><strong>Secondary actions</strong></p>
                        <div>
                            <b-btn variant="link" class="mr-2 text-dark">Regular</b-btn>
                            <b-btn variant="link" class="mr-2 text-blue">Blue</b-btn>
                            <b-btn variant="link" class="mr-2 text-danger">Dangerous</b-btn>
                            <b-btn variant="link" class="mr-2" disabled="disabled">Disabled</b-btn>
                        </div>
                    </div>
                </div>

                <div class="mb-6">
                    <h4>Sizes</h4>
                    <div>
                        <b-btn variant="warning" class="mr-2" size="xs">Condensed (xs)</b-btn>
                        <b-btn variant="warning" size="sm" class="mr-2">small (sm)</b-btn>
                        <b-btn variant="warning" size="md" class="mr-2">regular (md)</b-btn>
                        <b-btn variant="warning" size="lg" class="mr-2">large (lg)</b-btn>
                    </div>
                </div>

                <h3>Grouping</h3>
                <b-btn-group>
                    <b-btn variant="warning" active>some action</b-btn>
                    <b-btn variant="warning">second action</b-btn>
                </b-btn-group>
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
                            label="Число">
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
                            :formatter="inputs.phoneFormatter"
                            v-model="inputs.phone"
                            type="text"
                            label="Номер телефона">
                            <template v-slot:append>
                                <span><strong>123</strong></span>
                                <hm-icon name="eye-slash"></hm-icon>
                            </template>
                        </hm-input>
                    </div>
                </div>
            </div>

            <div class="bg-white p-5 shadow rounded mb-8">
                <h2 class="mb-9">Form elements</h2>
                
                <b-row>
                    <b-col>
                        <div class="mb-4">
                            <h4>Checkbox</h4>

                            <div class="mt-4">
                                <hm-checkbox v-model="checkboxModel">
                                    Аctive
                                </hm-checkbox>
                            </div>
                        </div>
                    </b-col>
                    <b-col>
                        <div class="mb-4">
                            <h4>Radio</h4>

                            <div
                                v-for="radioInput in radioInputs"
                                :key="`radio-${radioInput.key}`"
                                class="mt-4">
                                <hm-radio
                                    :value="radioInput.key"
                                    v-model="radioModel">
                                    {{radioInput.text}}
                                </hm-radio>
                            </div>
                        </div>
                    </b-col>
                </b-row>
            </div>

            <div class="bg-white p-5 shadow rounded mb-8">
                <h2 class="mb-9">Tables</h2>

                <div class="mb-4">
                    <b-form-checkbox v-model="tableCompact">Condensed</b-form-checkbox>
                </div>

                <div
                    class="mb-5"
                    v-for="tableStyle in ['light', 'dark']"
                    :key="`table-${tableStyle}`">
                    <h4>{{tableStyle}}</h4>
                    <b-table
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
                            <b-form-checkbox></b-form-checkbox>
                        </template>

                        <template v-slot:cell(id)="data">
                            <b-form-checkbox v-model="data.item.active"></b-form-checkbox>
                        </template>

                        <template v-slot:cell(status)="data">
                            <span :class="`text-${data.value[0]}`">{{data.value[1]}}</span>
                        </template>

                        <template v-slot:cell(tags)="data">
                            <template v-if="data.value">
                                <b-badge variant="dark">{{data.value}}</b-badge>
                            </template>
                        </template>

                        <template v-slot:cell(date)="data">{{data.value.toLocaleDateString()}}</template>

                        <template v-slot:cell(reach)="data">{{data.value.toLocaleString()}}</template>

                        <template v-slot:cell(action)="data">
                            <b-btn variant="warning" size="xs" v-if="data.value">
                                action
                            </b-btn>
                        </template>
                    </b-table>
                </div>
                
            </div>
        </b-container>
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
