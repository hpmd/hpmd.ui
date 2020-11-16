import {
    BTable as HmTable,
    BTableLite as HmTableLite,
    BTableSimple as HmTableSimple,
    BTbody as HmTbody,
    BThead as HmThead,
    BTfoot as HmTfoot,
    BTr as HmTr,
    BTd as HmTd,
    BTh as HmTh
} from 'bootstrap-vue';
import { pluginFactory } from 'bootstrap-vue/src/utils/plugins';

const HmTablePlugin = pluginFactory({
    components: {
        HmTable,
        HmTableLite,
        HmTableSimple,
        HmTbody,
        HmThead,
        HmTfoot,
        HmTr,
        HmTd,
        HmTh
    }
});

export {
    HmTablePlugin,
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
