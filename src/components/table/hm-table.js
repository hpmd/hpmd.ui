import { BTable } from 'bootstrap-vue';
import hmTableMixin from './hm-table-mixin';

export default BTable.extend({
    mixins: [hmTableMixin]
});
