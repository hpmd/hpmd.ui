<script>
import {
    uniUpload,
    uniExclamationCircle
} from '@/assets/icons/unicons';
import { BFormFile } from 'bootstrap-vue';
import { HmIcon } from './icon';


HmIcon.add(
    uniUpload,
    uniExclamationCircle
);

export default {
    name: 'HmDragFile',
    props: {
        placeholder: {
            type: String,
            default: 'Перетащите файл сюда'
        },
        placeholderTip: {
            type: String,
            default: 'JPEG или PNG. Не более 50Mb'
        },
        errorPlaceholder: {
            type: String,
            default: 'Загрузка невозможна'
        },
        errorPlaceholderTip: {
            type: String,
            default: 'Файл больше 50Mb'
        },
        disabled: {
            type: Boolean,
            default: false
        },
        error: {
            type: Boolean,
            default: false
        },
        fillContainer: {
            type: Boolean,
            default: false
        },
        value: {
            type: Array,
            default: () => ([])
        }
    },
    data() {
        return {
            dragging: false
        };
    },
    computed: {
        mainClasses() {
            const classes = ['drag-file'];

            if (this.dragging) {
                classes.push('drag-file-drag');
            }

            if (this.error) {
                classes.push('drag-file-error');
            }

            if (this.fillContainer) {
                classes.push('drag-file-fill');
            }

            return classes;
        }
    },
    methods: {
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
        onDragenter(event) {
            this.stopEvent(event);
            this.dragging = true;
        },
        onDragover(event) {
            this.stopEvent(event);
            this.dragging = true;
        },
        onDragleave(event) {
            this.stopEvent(event);
            this.dragging = false;
        },
        arrayFrom(...args) {
            return Array.from(...args);
        },
        onInput(event) {
            this.$emit('input', event);
        },
        onChange(event) {
            const { target, dataTransfer = {} } = event;

            const files = this.arrayFrom(target.files || dataTransfer.files || []).map((file) => {
                file.$path = file.webkitRelativePath || '';
                return file;
            });

            this.onInput(files);
        },
        onDrop(event) {
            this.stopEvent(event);
            this.dragging = false;

            this.onChange(event);
        }
    },
    render() {
        return (
            <div
                onDragenter={this.onDragenter}
                onDragover={this.onDragover}
                onDragleave={this.onDragleave}
                onDrop={this.onDrop}
                class={this.mainClasses}>
                <div class="drag-file-wrap d-flex justify-content-center align-items-center">
                    <div class="drag-file-circle mr-5">
                        <HmIcon name={ this.error ? 'exclamation-circle' : 'upload'} />
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
                    <BFormFile
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
        BFormFile
    }
};
</script>
