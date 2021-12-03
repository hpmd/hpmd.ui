import { BFormFile } from 'bootstrap-vue';

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
        acceptOrdered() {
            if (!this.accept || typeof this.accept !== 'string') return [];

            return this.accept.split(',')
                .map((acceptType) => {
                    const type = acceptType.trim();

                    let acceptFormat = '';

                    if (type[0] === '.') {
                        acceptFormat = 'extension';
                    } else if (type.slice(-2) === '/*') {
                        acceptFormat = 'wildcard';
                    } else if (type.indexOf('/') > 0) {
                        acceptFormat = 'mime';
                    }

                    return acceptFormat ?
                        {
                            acceptFormat,
                            value: type
                        } :
                        null;
                })
                .filter((accept) => !!accept);
        }
    },

    methods: {
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
            event.preventDefault();

            const filesNotMatchAccept = this.getFilesNotMatchAccept(event);
            const hasInvalidFiles = filesNotMatchAccept.length;

            if (hasInvalidFiles) {
                this.$emit('filesNotMatchAccept', filesNotMatchAccept);
            }

            if (!this.disableInvalidDropNotification) {
                this.invalidDropWarn = hasInvalidFiles;

                if (this.invalidDropWarn) {
                    this.dragging = false;
                    this.dragCounter = 0;

                    clearTimeout(this.invalidDropWarnTimer);

                    this.invalidDropWarnTimer = setTimeout(() => {
                        this.invalidDropWarn = false;
                    }, this.invalidDropTimerMs || 1000);

                    return;
                }
            }

            this.onDrop(event);

            this.$nextTick(() => {
                this.dragCounter = 0;
            });
        },
        getFilesNotMatchAccept(dropEvent) {
            // No files or no accept format requirements, no problems
            if (
                !this.acceptOrdered ||
                !this.acceptOrdered.length ||
                !(dropEvent instanceof DragEvent) ||
                !dropEvent.dataTransfer.files.length
            ) {
                return [];
            }

            const files = Array.prototype.slice.call(dropEvent.dataTransfer.files);

            return files.filter((file) => (
                !this.acceptOrdered.some((acceptType) => {
                    if (acceptType.acceptFormat === 'wildcard') {
                        return file.type.indexOf(acceptType.value.slice(0, -2)) === 0;
                    } else if (acceptType.acceptFormat === 'extension') {
                        return acceptType.value === file.name.slice(-acceptType.type.length);
                    }

                    return acceptType.value === file.type;
                })
            ));
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
