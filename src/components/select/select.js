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
            default: false
        }
    },
    computed: {
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
        const caretSlot = () => {
            return this.$scopedSlots.caret ?
                this.$scopedSlots.caret({ toggle: this.toggle }) :
                h(
                    'div',
                    {
                        class: 'multiselect__select',
                        on: {
                            mousedown: (e) => {
                                e.preventDefault();
                                e.stopPropagation();

                                this.toggle();
                            }
                        }
                    }
                );
        };


        const clearSlot = () => {
            return this.$scopedSlots.clear ?
                this.$scopedSlots.clear({ search: this.search }) :
                h(
                    'div',
                    {
                        class: 'multiselect__clear',
                        attrs: {
                            tabindex: '0',
                            role: 'button'
                        },
                        on: {
                            click: function() {
                                this.$emit('clear');
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
            let content;

            if (this.$scopedSlots.selection) {
                content = this.$scopedSlots.selection({
                    search: this.search,
                    remove: this.removeElement,
                    values: this.visibleValues,
                    isOpen: this.isOpen
                });
            } else {
                const tagsWrapElements = () => {
                    const wrapStyle = this.visibleValues.length > 0 ?
                        {} :
                        { display: 'none' };

                    const tags = h(
                        'div',
                        {
                            class: 'multiselect__tags-wrap',
                            style: wrapStyle
                        },
                        this.visibleValues.map((option, index) => {
                            if (this.$scopedSlots.tag) {
                                return this.$scopedSlots.tag({
                                    option,
                                    search: this.search,
                                    remove: this.removeElement
                                });
                            }

                            return h(
                                'span',
                                {
                                    class: 'multiselect__tag',
                                    key: index,
                                    on: {
                                        mousedown: (e) => {
                                            e.preventDefault();
                                        }
                                    }
                                },
                                [
                                    h(
                                        'span',
                                        this.getOptionLabel(option)
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
                                                keypress: function(e) {
                                                    e.preventDefault();

                                                    if (e.keycode === 13) {
                                                        this.removeElement(option);
                                                    }
                                                },
                                                mousedown: function(e) {
                                                    e.preventDefault();

                                                    this.removeElement(option);
                                                }
                                            }
                                        }
                                    )
                                ]
                            )
                        })
                };
                

                
            }
        }
    }
};
