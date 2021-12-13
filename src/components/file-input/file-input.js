import { BFormFile } from 'bootstrap-vue';
import { identity } from 'bootstrap-vue/src/utils/identity';
import { escapeRegExp } from 'bootstrap-vue/src/utils/string';
import { RX_EXTENSION, RX_STAR } from 'bootstrap-vue/src/constants/regex';
import mime from 'mime.json';

/**
 * Customized, cross-browser consistent,
 * file input control that supports single file,
 * multiple files, and directory upload (for browsers that support directory mode).
 * @class HmFileInput
 * @extends BFormFile
 * @see {@link https://bootstrap-vue.org/docs/components/form-file} Docs
 * @example
 * <hm-file-input></hm-file-input>
 */
export default BFormFile.extend({
    name: 'HmFileInput',
    props: {
        browseText: {
            type: String,
            default: 'Выберите файл'
        },
        dndGlobal: {
            type: Boolean,
            default: false
        },
        /**
         * Query-selector to append global drag-n-drop block to
         * defaults to document.body
         */
        dndGlobalTriggerSelector: {
            type: String,
            default: 'body'
        },
        /**
         * Drag'n'drop global container styles
         * Could be useful to set custom offset (top/left/right/bottom)
         * or change position (from fixed to absolute)
         * @type {Object|CSSStyleDeclaration}
         */
        dndGlobalStyles: {
            type: Object
        },
        dndBrowseText: {
            type: String,
            default: 'Выберите файл или перетащите его сюда'
        },
        dndAcceptFormatText: {
            type: String,
            default: ''
        },
        disableInvalidDropNotification: {
            type: Boolean,
            default: false
        },
        invalidAcceptFormatText: {
            type: String,
            default: 'Один или несколько файлов не соответствуют условию'
        },
        invalidDropTimerMs: {
            type: Number,
            default: 2500
        },
        placeholder: {
            type: String,
            default: 'Выберите файл'
        }
    },

    data() {
        return {
            /**
             * @type {null|HTMLElement} Should be HTMLElement if dndGlobal prop is true
             */
            dndGlobalEl: null,
            dragCounter: 0,
            invalidDropWarn: false,
            invalidDropWarnTimer: null
        };
    },

    computed: {
        dndGlobalContStyles() {
            if (this.dndGlobalStyles) {
                return this.dndGlobalStyles;
            }

            return {};
        },
        // Re-define BFormFile.computedAccept getter
        // to force it always be lowercase
        computedAccept() {
            let { accept } = this;

            accept = (accept || '')
                .toLowerCase()
                .trim()
                .split(/[,\s]+/)
                .filter(identity);

            // Allow any file type/extension
            if (accept.length === 0) {
                return null;
            }

            return accept.map((extOrType) => {
                let prop = 'name';
                let startMatch = '^';
                let endMatch = '$';

                if (RX_EXTENSION.test(extOrType)) {
                    // File extension /\.ext$/
                    startMatch = '';
                } else {
                    // MIME type /^mime\/.+$/ or /^mime\/type$/
                    prop = 'type';
                    if (RX_STAR.test(extOrType)) {
                        endMatch = '.+$';
                        // Remove trailing `*`
                        // eslint-disable-next-line no-param-reassign
                        extOrType = extOrType.slice(0, -1);
                    }
                }
                // Escape all RegExp special chars
                // eslint-disable-next-line no-param-reassign
                extOrType = escapeRegExp(extOrType);
                const rx = new RegExp(`${startMatch}${extOrType}${endMatch}`);
                return { rx, prop };
            });
        }
    },

    methods: {
        /**
         * Re-define BFormFile.isFileValid check function to extend it by checking MIME-type
         * by file extension in case if File.type is empty
         */
        isFileValid(file) {
            if (!file) {
                return false;
            }

            const accept = this.computedAccept;

            return accept ?
                accept.some((a) => {
                    if (a.prop === 'type' && !file.type) {
                        const fileExt = file.name.slice(file.name.lastIndexOf('.') + 1).toLowerCase();

                        // in case there is no reference in "mime.json"
                        // it should be OK to test undefined, but anyway
                        return mime[fileExt] ? a.rx.test(mime[fileExt]) : false;
                    }

                    return a.rx.test(file[a.prop]);
                }) :
                true;
        },
        /**
         * Re-define BFormFile.handleFiles
         * to add support for invalid files
         * for both - regular input and drop event
         */
        handleFiles(files, isDrop = false) {
            const valid = [];
            const invalid = [];

            files.forEach((file) => {
                const isValid = this.isFilesArrayValid(file);

                if (isValid) {
                    valid.push(file);
                } else {
                    invalid.push(file);
                }
            });

            if (invalid.length) {
                this.$emit('filesNotMatchAccept', invalid);

                if (!this.disableInvalidDropNotification) {
                    this.invalidDropWarn = true;
                    this.dragging = false;
                    this.dragCounter = 0;

                    clearTimeout(this.invalidDropWarnTimer);

                    this.invalidDropWarnTimer = setTimeout(() => {
                        this.invalidDropWarn = false;
                    }, this.invalidDropTimerMs || 1000);
                }
            }

            if (isDrop) {
                // When dropped, make sure to filter files with the internal `accept` logic
                // const filteredFiles = files.filter(this.isFilesArrayValid) - ^ done above
                // Only update files when we have any after filtering
                if (valid.length > 0) {
                    this.setFiles(valid);
                    // Try an set the file input's files array so that `required`
                    // constraint works for dropped files (will fail in IE 11 though)
                    this.setInputFiles(valid);
                }
            } else {
                // We always update the files from the `change` event
                this.setFiles(files);
            }
        },
        _onDragenter(event) {
            if (this.disabled || this.noDrop) return;

            this.dragCounter++;

            if (this.dragCounter > 1) {
                return;
            }

            this.onDragenter(event);
        },
        _onDragleave(event) {
            if (this.disabled || this.noDrop) {
                this.dragCounter = 0;
                return;
            }

            this.dragCounter--;

            if (this.dragCounter <= 0) {
                this.onDragleave(event);
                this.dragCounter = 0;
            }
        },
        _onDrop(event) {
            this.onDrop(event);

            this.$nextTick(() => {
                this.dragCounter = 0;
            });
        },
        setGlobalListeners() {
            this.dndGlobalEl = document.querySelector(this.dndGlobalTriggerSelector);

            if (!this.dndGlobalEl) {
                console.error(`Could not set global dnd listener: invalid query selector "${this.dndGlobalTriggerSelector}"`);
                return;
            }

            this.dndGlobalEl.addEventListener('dragenter', this._onDragenter, false);
            this.dndGlobalEl.addEventListener('dragleave', this._onDragleave, false);
        },
        removeGlobalListeners() {
            try {
                this.dndGlobalEl.removeEventListener('dragenter', this._onDragenter, false);
                this.dndGlobalEl.removeEventListener('dragleave', this._onDragleave, false);
            } catch (e) {
                // silent catch, listener could be removed
            }
        },
        onTriggerSelectorChange() {
            this.removeGlobalListeners();

            this.setGlobalListeners();
        }
    },

    mounted() {
        this.$watch('dndGlobal', (val) => {
            if (val) {
                this.setGlobalListeners();
            } else {
                this.removeGlobalListeners();
            }
        }, { immediate: true });
    },

    watch: {
        dndGlobalTriggerSelector(val, oldVal) {
            if (!val && !oldVal) return;

            this.onTriggerSelectorChange();
        },
    },

    beforeDestroy() {
        this.removeGlobalListeners();

        clearTimeout(this.invalidDropTimerMs);
    },

    render(h, ctx) {
        /**
         * BFormFile context
         * @this BFormFile
         */
        const _bv = this;

        // If its plain file input or drag'n'drop disabled - use original render fn
        if (_bv.noDrop || _bv.plain) {
            return this.constructor.superOptions.render.call(this, h, ctx);
        }

        const defaultBlockTexts = [
            h(
                'div',
                { class: 'hm-file-input-dnd-text-browse' },
                this.invalidDropWarn ? this.invalidAcceptFormatText : this.dndBrowseText
            )
        ];

        if (typeof this.dndAcceptFormatText === 'string' && this.dndAcceptFormatText.trim()) {
            defaultBlockTexts.push(h(
                'div',
                { class: 'hm-file-input-dnd-text-accept-format' },
                this.dndAcceptFormatText
            ));
        }

        const renderDragNDropContents = () => {
            const dndOpts = {
                class: {},
                staticClass: 'hm-file-input-drag-drop'
            };

            dndOpts.class.disabled = !!_bv.disabled;

            dndOpts.class['invalid-drop'] = this.invalidDropWarn;

            if (!this.dndGlobal) {
                dndOpts.class.dragover = this.dragCounter > 0;

                dndOpts.on = {
                    dragenter: this._onDragenter,
                    dragleave: this._onDragleave,
                    dragover: _bv.onDragover,
                    drop: this._onDrop
                };
            }

            const defaultBlock = h(
                'div',
                {
                    staticClass: 'hm-file-input-dnd-container'
                },
                [
                    h(
                        'div',
                        { staticClass: 'hm-file-input-dnd-icon' }
                    ),
                    h(
                        'div',
                        { staticClass: 'hm-file-input-dnd-text' },
                        defaultBlockTexts
                    )
                ]
            );

            return h(
                'div',
                dndOpts,
                [this.$slots.dndFileInputContent || defaultBlock]
            );
        };

        const renderDndGlobalContent = () => (h(
            'div',
            { staticClass: 'hm-file-input-dnd-global-default-wrap' },
            [
                h(
                    'div',
                    { staticClass: 'hm-file-input-dnd-global-default' },
                    [
                        // icon
                        h(
                            'div',
                            { staticClass: 'hm-file-input-dnd-global-img' }
                        ),
                        // text block
                        h(
                            'div',
                            { staticClass: 'mt-4' },
                            defaultBlockTexts
                        )
                    ]
                )
            ]
        ));

        const renderDragNDropGlobalArea = () => {
            if (!this.dndGlobal) return null;

            return h(
                'transition',
                {
                    props: {
                        name: 'hm-file-input-dnd-fade'
                    }
                },
                [
                    this.dragging ?
                        h(
                            'div',
                            {
                                class: 'hm-file-input-dnd-global-container',
                                style: this.dndGlobalContStyles,
                                on: {
                                    dragleave: (e) => { e.preventDefault(); },
                                    dragenter: (e) => { e.preventDefault(); },
                                    dragover: _bv.onDragover,
                                    drop: _bv._onDrop
                                }
                            },
                            [
                                // default or slot, todo
                                this.$slots.dndGlobalContent || renderDndGlobalContent()
                            ]
                        ) :
                        null
                ]
            );
        };

        const $input = h(
            'input',
            {
                class: [
                    {
                        'form-control-file': _bv.plain,
                        'custom-input': _bv.custom,
                        focus: _bv.custom && _bv.hasFocus
                    },
                    _bv.stateClass
                ],
                // With IE 11, the input gets in the "way" of the drop events,
                // so we move it out of the way by putting it behind the label
                // Bootstrap v4 has it in front
                style: _bv.custom ? { zIndex: -5 } : {},
                attrs: _bv.computedAttrs,
                on: {
                    change: _bv.onChange,
                    focusin: _bv.focusHandler,
                    focusout: _bv.focusHandler,
                    reset: _bv.reset
                },
                ref: 'input'
            }
        );


        return h(
            'div',
            {
                staticClass: 'hm-file-input'
            },
            [
                h(
                    'label',
                    {
                        class: 'hm-file-input-label',
                        attrs: {
                            for: _bv.safeId()
                        }
                    },
                    [
                        $input,
                        renderDragNDropContents(),
                        renderDragNDropGlobalArea()
                    ]
                )
            ]
        );
    }
});
