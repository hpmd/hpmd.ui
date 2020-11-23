<script>
/**
 * @typedef {object} FormFile
 * @property {String}   browseText         text content for the file browse button
 * @property {String}   placeholder        sets the "placeholder" attribute value on the form control
 * @property {String}   dropPlaceholder    text to display as the placeholder when files are being dragged and it's allowed to drop them
 */
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
