import { BTableLite } from 'bootstrap-vue';
import hmTableMixin from './hm-table-mixin';

export default BTableLite.extend({
    mixins: [hmTableMixin]
});
