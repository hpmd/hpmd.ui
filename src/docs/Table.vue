<script>
    export default {
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
    <div class="bg-white p-5 shadow rounded mb-8">
        <h2 class="mb-9">Tables</h2>

        <div class="mb-4">
            <hm-checkbox v-model="tableCompact">Condensed</hm-checkbox>

            <hm-checkbox v-model="isDark">Dark</hm-checkbox>
        </div>


        <hm-table
            :table-variant="isDark ? 'dark' : 'light'"
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
</template>
