import {
    BTbody as HmTbody,
    BThead as HmThead,
    BTfoot as HmTfoot,
    BTr as HmTr,
    BTd as HmTd,
    BTh as HmTh
} from 'bootstrap-vue';
import { pluginFactory } from 'bootstrap-vue/src/utils/plugins';
import HmTable from './hm-table'; // modified
import HmTableLite from './hm-table-lite'; // modified
import HmTableSimple from './hm-table-simple'; // modified

const TableLitePlugin = pluginFactory({
    components: {
        HmTableLite
    }
});

const TableSimplePlugin = pluginFactory({
    components: {
        HmTableSimple,
        HmTbody,
        HmThead,
        HmTfoot,
        HmTr,
        HmTd,
        HmTh
    }
});

const TablePlugin = pluginFactory({
    components: {
        HmTable
    },
    plugins: {
        TableLitePlugin,
        TableSimplePlugin
    }
});

/**
 * @see {@link https://bootstrap-vue.org/docs/components/table}
 */
export {
    TablePlugin,
    TableLitePlugin,
    TableSimplePlugin,

    HmTable,
    HmTableLite,
    HmTableSimple,
    HmTbody,
    HmThead,
    HmTfoot,
    HmTr,
    HmTd,
    HmTh
};
