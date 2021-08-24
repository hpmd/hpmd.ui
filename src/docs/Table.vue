<script>
import variantMixin from './variantMixin';

const example = `<h4>Table</h4>
<hm-table
    :table-variant="isDark ? 'dark' : 'light'"
    primary-key="id"
    hover
    :small="isCompact"
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
        <span :class="\`text-\${data.value[0]}\`">{{data.value[1]}}</span>
    </template>

    <template v-slot:cell(tags)="data">
        <template v-if="data.value">
            <hm-badge variant="dark">{{data.value}}</hm-badge>
        </template>
    </template>

    <template v-slot:cell(date)="data">{{data.value.toLocaleDateString()}}</template>

    <template v-slot:cell(reach)="data">{{data.value.toLocaleString()}}</template>

    <template v-slot:cell(action)="data">
        <hm-button
            size="xs"
            variant="warning"
            v-if="data.value">
            action
        </hm-button>
    </template>
</hm-table>

<h4>Table Simple</h4>
<hm-table-simple>
    <hm-thead>
        <hm-tr>
            <th rowspan="2">Название</th>
            <th colspan="3">Характеристики</th>
        </hm-tr>
        <hm-tr>
            <th>Объем</th>
            <th>Длина</th>
            <th>Ширина</th>
        </hm-tr>
    </hm-thead>
    <hm-tbody>
        <hm-tr>
            <hm-td>User 1</hm-td>
            <hm-td>12 345</hm-td>
            <hm-td>45 678,00</hm-td>
            <hm-td>123 000</hm-td>
        </hm-tr>
    </hm-tbody>
</hm-table-simple>`;

/* eslint-disable no-param-reassign */
function getRandomIntInRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1) + min);
}
/* eslint-enable */

export default {
    example,

    mixins: [variantMixin],
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
            isDark: false,
            isCompact: false,
            isResponsive: false,
            tableData,
            tableFields: [
                { key: 'id', label: 'id', sortable: false },
                { key: 'username', label: 'Пользователь', sortable: true },
                { key: 'status', label: 'Статус', sortable: true },
                { key: 'date', label: 'Дата', sortable: true },
                { key: 'tags', label: 'Метки', sortable: false },
                { key: 'reach', label: 'Количество', sortable: true },
                { key: 'action', label: 'Действие', sortable: false }
            ]
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
        }
    }
};
</script>


<template>
    <section>
        <h2 class="mb-8 display-4">Table</h2>

        <h3>Изменения</h3>
        <p><span class="version">0.14.0</span> Добавлено свойство <code>showScrollGuides</code> (для компонентов <code>HmTable</code> и <code>HmTableLite</code>) для удобства ориентировки в таблице с горизонтальной прокруткой (<code>responsive=true</code>)</p>

        <hm-alert show variant="warning">
            <strong>WARN:</strong> Не полная поддержка <code>variant</code> и некоторых стилей, компонент будет дорабатываться
        </hm-alert>

        <h3 class="mt-8">Компоненты</h3>
        <ul>
            <li><strong>HmTable </strong> <hm-badge variant="primary">Bootstrap Vue</hm-badge> <hm-badge variant="success">No changes</hm-badge></li>
            <li><strong>HmTableLite </strong> <hm-badge variant="primary">Bootstrap Vue</hm-badge> <hm-badge variant="success">No changes</hm-badge></li>
            <li><strong>HmTableSimple </strong> <hm-badge variant="primary">Bootstrap Vue</hm-badge> <hm-badge variant="success">No changes</hm-badge></li>
            <li><strong>HmTbody </strong> <hm-badge variant="primary">Bootstrap Vue</hm-badge> <hm-badge variant="success">No changes</hm-badge></li>
            <li><strong>HmThead </strong> <hm-badge variant="primary">Bootstrap Vue</hm-badge> <hm-badge variant="success">No changes</hm-badge></li>
            <li><strong>HmTfoot </strong> <hm-badge variant="primary">Bootstrap Vue</hm-badge> <hm-badge variant="success">No changes</hm-badge></li>
            <li><strong>HmTr </strong> <hm-badge variant="primary">Bootstrap Vue</hm-badge> <hm-badge variant="success">No changes</hm-badge></li>
            <li><strong>HmTh </strong> <hm-badge variant="primary">Bootstrap Vue</hm-badge> <hm-badge variant="success">No changes</hm-badge></li>
            <li><strong>HmTd </strong> <hm-badge variant="primary">Bootstrap Vue</hm-badge> <hm-badge variant="success">No changes</hm-badge></li>
        </ul>

        <h3 class="mt-8">Использование</h3>
        <div class="p-5 bg-light rounded mb-5">
            <div class="row">
                <div class="col">
                    <hm-checkbox v-model="isCompact">Condensed</hm-checkbox>

                    <hm-checkbox v-model="isDark">Dark</hm-checkbox>

                    <hm-checkbox v-model="isResponsive">Responsive</hm-checkbox>
                </div>
                <div class="col">
                    <hm-radio-group :options="variants" v-model="variant"></hm-radio-group>
                </div>
            </div>

        </div>

        <h4>Table</h4>
        <hm-table
            :table-variant="isDark ? 'dark' : 'light'"
            primary-key="id"
            hover
            :small="isCompact"
            :fields="tableFields"
            :items="tableData"
            :tbody-tr-class="tableDataTrClass"
            :responsive="isResponsive"
            showScrollGuides
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
                <hm-button
                    size="xs"
                    variant="warning"
                    v-if="data.value">
                    action
                </hm-button>
            </template>
        </hm-table>

        <h4>Table Simple</h4>
        <hm-table-simple>
            <hm-thead>
                <hm-tr>
                    <th rowspan="2">Название</th>
                    <th colspan="3">Характеристики</th>
                </hm-tr>
                <hm-tr>
                    <th>Объем</th>
                    <th>Длина</th>
                    <th>Ширина</th>
                </hm-tr>
            </hm-thead>
            <hm-tbody>
                <hm-tr>
                    <hm-td>User 1</hm-td>
                    <hm-td>12 345</hm-td>
                    <hm-td>45 678,00</hm-td>
                    <hm-td>123 000</hm-td>
                </hm-tr>
            </hm-tbody>
        </hm-table-simple>

        <hr>

        <div class="code-block">
            <pre v-highlightjs="$options.example"><code class="html"></code></pre>
        </div>

        <h3 class="mt-8">Документация</h3>
        <p><a href="https://bootstrap-vue.org/docs/components/table">Bootstrap Vue</a></p>

        <h4>Добавленные свойства</h4>
        <h5>(HmTable, HmTableLite, HmTableSimple)</h5>
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
                        <td><code>showScrollGuides</code></td>
                        <td><code>Boolean</code></td>
                        <td><code>false</code></td>
                        <td></td>
                        <td>В случае <code>responsive=true</code> и если значение <code>showScrollGuides=true</code> добавляет по краям таблицы тени, указывающие на доступный за границей видимости контент</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>
