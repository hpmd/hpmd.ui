<script>
import { BFormFile } from 'bootstrap-vue';

export default {
    extends: BFormFile,
    props: {
        browseText: {
            type: String,
            default: 'Выберите файл'
        },
        placeholder: {
            type: String,
            default: 'Файл не выбран'
        },
        dropPlaceholder: {
            type: String,
            default: 'Файл не выбран'
        }
    },
    watch: {
        value(val) {
            this.handleFiles(val);
        }
    }
};
</script>
