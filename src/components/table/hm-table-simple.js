import { BTableSimple } from 'bootstrap-vue';
import hmTableMixin from './hm-table-mixin';

export default BTableSimple.extend({
    mixins: [hmTableMixin]
});
