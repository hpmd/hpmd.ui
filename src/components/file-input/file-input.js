import { BFormFile } from 'bootstrap-vue';

/**
 * Customized, cross-browser consistent,
 * file input control that supports single file,
 * multiple files, and directory upload (for browsers that support directory mode).
 * @class HmFormFile
 * @extends BFormFile
 * @see {@link https://bootstrap-vue.org/docs/components/form-file} Docs
 * @example
 * <hm-form-file></hm-form-file>
 */
export default {
    extends: BFormFile,
    props: {
        /**
         * text content for the file browse button
         */
        browseText: {
            type: String,
            default: 'Выберите файл'
        },
        /**
         * sets the "placeholder" attribute value on the form control
         */
        placeholder: {
            type: String,
            default: 'Файл не выбран'
        },
        /**
         * text to display as the placeholder when files are being dragged and it's allowed to drop them
         */
        dropPlaceholder: {
            type: String,
            default: 'Файл не выбран'
        }
    }
    // Todo: why this watcher was used?
    // watch: {
    //     /**
    //      * @this {BFormFile}
    //      */
    //     value(val) {
    //         debugger;
    //         this.handleFiles(val);
    //     }
    // }
};
