import { Multiselect } from 'vue-multiselect';
import { HmIcon } from '../icon';
import { uniMultiply } from '../../unicons';

HmIcon.add(uniMultiply);


/**
 * @extends Multiselect
 * @see {@link https://vue-multiselect.js.org/}
 */
export default {
    extends: Multiselect,
    props: {
        clearable: {
            type: Boolean,
            default: true
        }
    },
    computed: {
        valueIsEmpty() {
            const isArray = Array.isArray(this.value);

            return (
                (isArray && !this.value.length) ||
                (!isArray && !this.value && this.value !== 0)
            );
        },
        inputStyle() {
            let result = {};

            if (
                this.searchable ||
                (this.multiple && this.value && this.value.length)
            ) {
                // Hide input by setting the width to 0 allowing it to receive focus
                if (this.isOpen) {
                    result = { width: '100%' };
                } else {
                    result = {
                        width: '0',
                        position: 'absolute',
                        padding: '0'
                    };
                }

                if (this.value && this.value.length && this.taggable) {
                    result['margin-top'] = '8px';
                }
            }

            return result;
        }
    },
    components: {
        HmIcon
    },
    /* beforeUpdate() {
        const { value } = this;

        const isArray = Array.isArray(value);

        if (
            this.clearable && (
                (isArray && value.length) ||
                (!isArray && value != null)
            )
        ) {
            const clearNode = this.$createElement(
                'div',
                {
                    class: 'multiselect__clear',
                    attrs: {
                        tabindex: '0'
                    }
                },
                [
                    this.$createElement(HmIcon, { props: { name: 'uni-multiply' } })
                ]
            );

            this.$slots.clear = [clearNode];
        } else {
            this.$slots.clear = null;
        }
    } */
    render(h) {
        const vm = this;

        const caretSlot = () => (vm.$scopedSlots.caret ?
            vm.$scopedSlots.caret({ toggle: vm.toggle }) :
            h(
                'div',
                {
                    class: 'multiselect__select',
                    on: {
                        mousedown(e) {
                            e.preventDefault();
                            e.stopPropagation();

                            vm.toggle();
                        }
                    }
                }
            ));


        const clearSlot = () => {
            if (vm.valueIsEmpty || !vm.clearable) return null;

            return vm.$scopedSlots.clear ?
                vm.$scopedSlots.clear({ search: vm.search }) :
                h(
                    'div',
                    {
                        class: 'multiselect__clear',
                        attrs: {
                            tabindex: '0',
                            role: 'button'
                        },
                        on: {
                            click() {
                                vm.$emit('clear');
                                // vm.$emit('input', vm.multiple ? [] : null);
                            }
                        }
                    },
                    [
                        h(
                            HmIcon,
                            { props: { name: 'uni-multiply' } }
                        )
                    ]
                );
        };



        const tagsWrapperSlot = () => {
            const selection = () => {
                let content;

                if (vm.$scopedSlots.selection) {
                    content = [vm.$scopedSlots.selection({
                        search: vm.search,
                        remove: vm.removeElement,
                        values: vm.visibleValues,
                        isOpen: vm.isOpen
                    })];
                } else {
                    const tagsWrapElements = () => {
                        const wrapStyle = vm.visibleValues.length > 0 ?
                            {} :
                            { display: 'none' };

                        return h(
                            'div',
                            {
                                class: 'multiselect__tags-wrap',
                                style: wrapStyle
                            },
                            vm.visibleValues.map((option, index) => {
                                if (vm.$scopedSlots.tag) {
                                    return vm.$scopedSlots.tag({
                                        option,
                                        search: vm.search,
                                        remove: vm.removeElement
                                    });
                                }

                                const tagLabel = vm.getOptionLabel(option);

                                return h(
                                    'span',
                                    {
                                        class: 'multiselect__tag',
                                        key: index,
                                        attrs: {
                                            title: tagLabel
                                        },
                                        on: {
                                            mousedown(e) {
                                                e.preventDefault();
                                            }
                                        }
                                    },
                                    [
                                        h(
                                            'span',
                                            tagLabel
                                        ),
                                        h(
                                            'i',
                                            {
                                                class: 'multiselect__tag-icon',
                                                attrs: {
                                                    'aria-hidden': true,
                                                    tabindex: 1
                                                },
                                                on: {
                                                    keypress(e) {
                                                        e.preventDefault();

                                                        if (e.keycode === 13) {
                                                            vm.removeElement(option);
                                                        }
                                                    },
                                                    mousedown(e) {
                                                        e.preventDefault();

                                                        vm.removeElement(option);
                                                    }
                                                }
                                            }
                                        )
                                    ]
                                );
                            })
                        );
                    };

                    const limitSlot = () => {
                        if (!(vm.internalValue && vm.internalValue.length > vm.limit)) {
                            return null;
                        }

                        return (
                            vm.$slots.limit ||
                            h(
                                'strong',
                                {
                                    class: 'multiselect__strong'
                                },
                                vm.limitText(vm.internalValue.length - vm.limit)
                            )
                        );
                    };

                    content = [tagsWrapElements(), limitSlot()];
                }

                return content;
            };

            const loading = () => {
                const loadingSlot = () => {
                    if (vm.$slots.loading) {
                        return vm.$slots.loading;
                    }

                    const loadingOpts = {
                        class: 'multiselect__spinner'
                    };

                    if (!vm.loading) {
                        loadingOpts.style = {
                            display: 'none'
                        };
                    }

                    return h('div', loadingOpts);
                };

                return h(
                    vm.$options.components.Transition,
                    { props: { name: 'multiselect__loading' } },
                    [
                        loadingSlot()
                    ]
                );
            };

            const searchInput = () => {
                if (!vm.searchable) return null;

                return h(
                    'input',
                    {
                        class: 'multiselect__input',
                        style: vm.inputStyle,
                        attrs: {
                            autocomplete: 'nope',
                            disabled: vm.disabled,
                            id: vm.id,
                            name: vm.name,
                            placeholder: vm.placeholder,
                            tabindex: vm.tabindex,
                            type: 'text',
                            value: vm.search
                        },
                        ref: 'search',
                        on: {
                            input(e) {
                                vm.updateSearch(e.target.value);
                            },
                            focus(e) {
                                e.preventDefault();
                                vm.activate();
                            },
                            blur(e) {
                                e.preventDefault();
                                vm.deactivate();
                            },
                            keyup(e) {
                                // esc
                                if (e.keyCode === 27) {
                                    vm.deactivate();
                                }
                            },
                            keydown(e) {
                                const { keyCode } = e;
                                // up / down
                                if (keyCode === 38 || keyCode === 40) {
                                    e.preventDefault();

                                    if (keyCode === 40) {
                                        vm.pointerForward();
                                    } else {
                                        vm.pointerBackward();
                                    }
                                } else if (e.keyCode === 46) {
                                    e.stopPropagation();

                                    vm.removeLastElement();
                                }
                            },
                            keypress(e) {
                                if (e.target === e.currentTarget && e.keyCode === 13) {
                                    e.preventDefault();
                                    e.stopPropagation();

                                    vm.addPointerElement(e);
                                }
                            }
                        }
                    }
                );
            };

            const singleOption = () => {
                if (!vm.isSingleLabelVisible) return null;

                return h(
                    'span',
                    {
                        class: 'multiselect__single',
                        on: {
                            mousedown(e) {
                                e.preventDefault();
                                vm.toggle(e);
                            }
                        }
                    },
                    [
                        vm.$scopedSlots.singleLabel ?
                            vm.$scopedSlots.singleLabel({ option: vm.singleValue }) :
                            vm.currentOptionLabel
                    ]
                );
            };

            const placeholder = () => {
                if (!vm.isPlaceholderVisible) return null;

                return h(
                    'span',
                    {
                        class: 'multiselect__placeholder',
                        on: {
                            mousedown(e) {
                                e.preventDefault();
                                vm.toggle(e);
                            }
                        }
                    },
                    [
                        vm.$slots.placeholder || vm.placeholder
                    ]
                );
            };


            return h(
                'div',
                {
                    class: 'multiselect__tags',
                    ref: 'tags'
                },
                [
                    ...selection(),
                    loading(),
                    searchInput(),
                    singleOption(),
                    placeholder()
                ]
            );
        };

        const contentWrapper = () => {
            const maxReachedSlot = () => {
                if (!(vm.multiple && vm.max === vm.internalValue.length)) {
                    return null;
                }

                const maxSlotContent = vm.$slots.maxElements ?
                    [vm.$slots.maxElements] :
                    `Выбрано максимально доступное количество значений (${vm.max}). Для добавления другого значения сначала удалите одно из добавленных.`;


                return h(
                    'li',
                    [
                        h(
                            'span',
                            { class: 'multiselect__option' },
                            maxSlotContent
                        )
                    ]
                );
            };

            const multiselectOptions = () => {
                if (!(!vm.max || vm.internalValue.length < vm.max)) {
                    return [];
                }

                const multiselectOption = (option, index) => {
                    const optionSlot = vm.$scopedSlots.option ?
                        vm.$scopedSlots.option({
                            option,
                            search: vm.search
                        }) :
                        h(
                            'span',
                            vm.getOptionLabel(option)
                        );

                    let optionWrapOptions = {};

                    if (option && (option.$isLabel || option.$isDisabled)) {
                        optionWrapOptions = {
                            staticClass: 'multiselect__option',
                            class: vm.groupHighilight(index, option),
                            attrs: {
                                dataset: {
                                    select: (vm.groupSelect && vm.selectGroupLabelText),
                                    deselect: (vm.groupSelect && vm.deselectGroupLabelText)
                                }
                            },
                            on: {
                                mouseenter(e) {
                                    if (e.target !== e.currentTarget) return;

                                    if (vm.groupSelect) {
                                        vm.pointerSet(index);
                                    }
                                },
                                mousedown(e) {
                                    e.preventDefault();

                                    vm.selectGroup(option);
                                }
                            }
                        };
                    } else {
                        optionWrapOptions = {
                            staticClass: 'multiselect__option',
                            class: vm.optionHighlight(index, option),
                            attrs: {
                                dataset: {
                                    select: option && option.isTag ? vm.tagPlaceholder : vm.selectLabelText,
                                    selected: vm.selectedLabelText,
                                    deselect: vm.deselectLabeText
                                }
                            },
                            on: {
                                click(e) {
                                    e.stopPropagation();

                                    vm.select(option);
                                },
                                mouseenter(e) {
                                    if (e.target !== e.currentTarget) return;

                                    vm.pointerSet(index);
                                }
                            }
                        };
                    }

                    return h(
                        'span',
                        optionWrapOptions,
                        [optionSlot]
                    );
                };



                return vm.filteredOptions.map((option, index) => (
                    h(
                        'li',
                        { class: 'multiselect__element', key: index },
                        [multiselectOption(option, index)]
                    )
                ));
            };

            const noResultsSlot = () => {
                const noResultSettings = {};

                if (!(vm.showNoResults && (vm.filteredOptions.length === 0 && vm.search && !vm.loading))) {
                    noResultSettings.style = {
                        display: 'none'
                    };
                }

                const noResultContent = vm.$scopedSlots.noResult ?
                    [vm.$scopedSlots.noResult({ search: vm.search })] :
                    'Нет совпадений';

                return h(
                    'li',
                    noResultSettings,
                    [
                        h(
                            'span',
                            { class: 'multiselect__option' },
                            noResultContent
                        )
                    ]
                );
            };

            const noOptionsSlot = () => {
                if (!(vm.showNoOptions && (vm.options.length === 0 && !vm.search && !vm.loading))) {
                    return null;
                }

                const noOptionsContent = vm.$slots.noOptions || 'Нет значений для выбора';

                return h(
                    'li',
                    [
                        h(
                            'span',
                            { class: 'multiselect__option' },
                            [noOptionsContent]
                        )
                    ]
                );
            };

            const listElements = [
                vm.$slots.beforeList || '',
                maxReachedSlot(),
                ...multiselectOptions(),
                noResultsSlot(),
                noOptionsSlot(),
                vm.$slots.afterList || ''
            ];

            const contentWrapperStyle = {
                maxHeight: `${vm.optimezedHeight}px`
            };

            if (!vm.isOpen) {
                contentWrapperStyle.display = 'none';
            }

            return h(
                vm.$options.components.Transition,
                { props: { name: 'multiselect' } },
                [
                    h(
                        'div',
                        {
                            class: 'multiselect__content-wrapper',
                            style: contentWrapperStyle,
                            attrs: {
                                tabindex: '-1',
                            },
                            ref: 'list',
                            on: {
                                focus: vm.activate,
                                mousedown(e) {
                                    e.preventDefault();
                                }
                            }
                        },
                        [
                            h(
                                'ul',
                                {
                                    class: 'multiselect__content',
                                    style: vm.contentStyle
                                },
                                listElements
                            )
                        ]
                    )
                ]
            );
        };

        return h(
            'div',
            {
                staticClass: 'multiselect',
                class: {
                    'multiselect--active': vm.isOpen,
                    'multiselect--disabled': vm.disabled,
                    'multiselect--above': vm.isAbove
                },
                attrs: {
                    tabindex: vm.searchable ? '-1' : vm.tabindex,
                },
                on: {
                    focus() {
                        vm.activate();
                    },
                    blur() {
                        if (vm.searchable) {
                            vm.deactivate();
                        }
                    },
                    keydown(e) {
                        if (e.target === e.currentTarget) {
                            const key = e.keyCode;

                            if (key === 38 || key === 40) {
                                e.preventDefault();

                                if (key === 40) { // down
                                    vm.pointerForward();
                                } else { // up
                                    vm.pointerBackward();
                                }
                            }
                        }
                    },
                    keypress(e) {
                        if (e.target === e.currentTarget && (e.keyCode === 13 || e.keycode === 9)) {
                            e.stopPropagation();

                            vm.addPointerElement(e);
                        }
                    },
                    keyup(e) {
                        if (e.keyCode === 27) {
                            vm.deactivate();
                        }
                    }
                }
            },
            [
                tagsWrapperSlot(),
                clearSlot(),
                caretSlot(),
                contentWrapper()
            ]
        );
    }
};
