<script>
import {
    uniUpload,
    uniExclamationCircle
} from '../unicons';
import { HmFileInput } from './file-input';
import { HmIcon } from './icon';


HmIcon.add(
    uniUpload,
    uniExclamationCircle
);

/**
 * Drag and drop component for work with files
 * @class HmDragFile
 * @example
 * <hm-drag-file v-model="..."></hm-drag-file>
 */
export default {
    name: 'HmDragFile',
    props: {
        /**
         * placeholder
         */
        placeholder: {
            type: String,
            default: 'Перетащите файл сюда'
        },
        /**
         * placeholder tip
         */
        placeholderTip: {
            type: String,
            default: 'JPEG или PNG. Не более 50Mb'
        },
        /**
         * error placeholder
         */
        errorPlaceholder: {
            type: String,
            default: 'Загрузка невозможна'
        },
        /**
         * error placeholder tip
         */
        errorPlaceholderTip: {
            type: String,
            default: 'Файл больше 50Mb'
        },
        /**
         * sets the "disabled" attribute value on the form control
         */
        disabled: {
            type: Boolean,
            default: false
        },
        /**
         * show error message
         */
        error: {
            type: Boolean,
            default: false
        },
        /**
         * view mode (block, fill-absolute, fill-fixed)
         */
        view: {
            type: String,
            default: 'block',
            validator(val) {
                return ['block', 'fill-absolute', 'fill-fixed'].indexOf(val) !== -1;
            }
        },
        /**
         * top indent
         */
        top: {
            type: String,
            default: '0px'
        },
        /**
         * left indent
         */
        left: {
            type: String,
            default: '0px'
        },
        /**
         * right indent
         */
        right: {
            type: String,
            default: '0px'
        },
        /**
         * bottom indent
         */
        bottom: {
            type: String,
            default: '0px'
        },
        value: {
            type: Array,
            default: () => ([])
        },
        /**
         * show input
         */
        showInput: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            dragging: false
        };
    },
    computed: {
        /**
         * list classes for main container
         */
        mainClasses() {
            const classes = ['drag-file'];

            if (this.dragging) {
                classes.push('drag-file-drag');
            }

            if (this.error) {
                classes.push('drag-file-error');
            }

            if (this.view !== 'block') {
                classes.push(`drag-file-${this.view}`);
            }

            if (this.showInput) {
                classes.push('drag-file-show-input');
            }

            return classes;
        },
        /**
         * styles for main container
         */
        containerStyles() {
            const {
                top,
                left,
                right,
                bottom
            } = this;

            return {
                top,
                left,
                right,
                bottom
            };
        }
    },
    methods: {
        /**
         * stop event bubbling
         * @param {object|Event} event
         * @returns {void}
         */
        stopEvent(
            event,
            {
                preventDefault = true,
                propagation = true,
                immediatePropagation = false
            } = {}
        ) {
            if (preventDefault) {
                event.preventDefault();
            }
            if (propagation) {
                event.stopPropagation();
            }
            if (immediatePropagation) {
                event.stopImmediatePropagation();
            }
        },
        /**
         * onDragenter handler
         * @param {object|Event} event
         * @returns {void}
         */
        onDragenter(event) {
            this.stopEvent(event);
            this.dragging = true;
        },
        /**
         * onDragover handler
         * @param {object|Event} event
         * @returns {void}
         */
        onDragover(event) {
            this.stopEvent(event);
            this.dragging = true;
        },
        /**
         * onDragleave handler
         * @param {object|Event} event
         * @returns {void}
         */
        onDragleave(event) {
            this.stopEvent(event);
            this.dragging = false;
        },
        /**
         * convert method arguments to array
         * @param {array|Array} args
         * @returns {array}
         */
        arrayFrom(...args) {
            return Array.from(...args);
        },
        /**
         * onInput handler
         * @param {object|Event} event
         * @returns {void}
         */
        onInput(event) {
            this.$emit('input', event);
        },
        /**
         * onChange handler
         * @param {object|Event} event
         * @returns {void}
         */
        onChange(event) {
            const { target, dataTransfer = {} } = event;

            const files = this.arrayFrom(target.files || dataTransfer.files || []).map((file) => {
                file.$path = file.webkitRelativePath || '';
                return file;
            });

            this.onInput(files);
        },
        /**
         * onDrop handler
         * @param {object|Event} event
         * @returns {void}
         */
        onDrop(event) {
            this.stopEvent(event);
            this.dragging = false;

            this.onChange(event);
        }
    },
    render() {
        return (
            <div
                style={this.containerStyles}
                onDragenter={this.onDragenter}
                onDragover={this.onDragover}
                onDragleave={this.onDragleave}
                onDrop={this.onDrop}
                class={this.mainClasses}>
                <div class="drag-file-wrap d-flex justify-content-center align-items-center">
                    <div class="drag-file-circle-wrap mr-5">
                        <div class="drag-file-circle">
                            <HmIcon name={ this.error ? 'exclamation-circle' : 'upload'} />
                        </div>
                    </div>
                    {
                        (this.value && this.value.length && this.$slots.hasFiles) ?
                            (
                                <div class="drag-file-placeholder-wrap">
                                    {this.$slots.hasFiles}
                                </div>
                            ) :
                            (
                                <div class="drag-file-placeholder-wrap">
                                    <p class="drag-file-placeholder mb-1">{this.error ? this.errorPlaceholder : this.placeholder}</p>
                                    <span class="drag-file-placeholder-tip">{this.error ? this.errorPlaceholderTip : this.placeholderTip}</span>
                                </div>
                            )
                    }
                    <HmFileInput
                        draggable="draggable"
                        disabled={this.disabled}
                        multiple
                        value={this.value}
                        onInput={this.onInput}
                        class="drag-file-input"/>
                </div>
            </div>
        );
    },
    components: {
        HmIcon,
        HmFileInput
    }
};
</script>
