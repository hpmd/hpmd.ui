/**
 * @typedef {object} FormDatepicker
 * @property {Boolean}  useNative          native input[type="file"]
 * @property {String}   selectedVariant    selected bootstrap theme
 * @property {String}   todayVariant       today bootstrap theme
 * @property {Boolean}  isRange              date range selection
 */
import { BFormDatepicker } from 'bootstrap-vue';
import { BVFormBtnLabelControl } from 'bootstrap-vue/src/components/form-btn-label-control/bv-form-btn-label-control';
import { isUndefinedOrNull } from 'bootstrap-vue/src/utils/inspect';
import { parseYMD } from 'bootstrap-vue/src/utils/date';
import { pick } from 'bootstrap-vue/src/utils/object';
import { HmButton } from '../button';
import { HmCalendar } from '../calendar';
import { HmIcon } from '../icon';
import { HmInput } from '../input';
import { uniCalendar } from '../../unicons';

HmIcon.add(uniCalendar);

/**
 * Customized, cross-browser consistent,
 * file input control that supports single file,
 * multiple files, and directory upload (for browsers that support directory mode).
 * @class HmFormDatepicker
 * @extends BFormDatepicker
 * @see {@link https://bootstrap-vue.org/docs/components/form-datepicker} Docs
 * @example
 * <hm-form-datepicker
 *      hide-header
 *      v-model="..." />
 */
export default {
    extends: BFormDatepicker,
    props: {
        useNative: {
            type: Boolean,
            default: /Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent)
        },
        selectedVariant: {
            // Variant color to use for the selected date
            type: String,
            default: 'dark'
        },
        todayVariant: {
            // Variant color to use for today's date (defaults to `selectedVariant`)
            type: String,
            default: 'primary'
        },
        isRange: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        /**
         * onInput handler for native input
         * @param {object|Object} ymd
         * @returns {void}
         */
        onInputNative(ymd) {
            if (this.localYMD !== ymd) {
                this.localYMD = ymd;
                this.setAndClose(ymd);
            }
        },
        defaultButtonFn() {
            return this.$createElement(
                HmIcon,
                { props: { name: 'uni-calendar' } }
            );
        }
    },
    render(h) {
        const {
            dark,
            disabled,
            localYMD,
            readonly,
            $props,
            $scopedSlots
        } = this;

        // Prefer use regular native date input
        if (this.useNative) {
            return h(
                HmInput,
                {
                    props: {
                        type: 'date',
                        value: localYMD
                    },
                    on: {
                        input: this.onInputNative
                    }
                }
            );
        }

        const placeholder = isUndefinedOrNull(this.placeholder) ?
            this.labelNoDateSelected :
            this.placeholder;

        // Optional footer buttons
        let $footer = [];

        if (this.todayButton) {
            const label = this.labelTodayButton;
            $footer.push(
                h(
                    HmButton,
                    {
                        props: {
                            disabled: disabled || readonly,
                            size: 'sm',
                            variant: this.todayButtonVariant
                        },
                        attrs: { 'aria-label': label || null },
                        on: { click: this.onTodayButton }
                    },
                    label
                )
            );
        }

        if (this.resetButton) {
            const label = this.labelResetButton;
            $footer.push(
                h(
                    HmButton,
                    {
                        props: {
                            disabled: disabled || readonly,
                            size: 'sm',
                            variant: this.resetButtonVariant
                        },
                        attrs: { 'aria-label': label || null },
                        on: { click: this.onResetButton }
                    },
                    label
                )
            );
        }

        if (this.closeButton) {
            const label = this.labelCloseButton;
            $footer.push(
                h(
                    HmButton,
                    {
                        props: {
                            disabled,
                            size: 'sm',
                            variant: this.closeButtonVariant
                        },
                        attrs: { 'aria-label': label || null },
                        on: { click: this.onCloseButton }
                    },
                    label
                )
            );
        }

        if ($footer.length > 0) {
            $footer = [
                h(
                    'div',
                    {
                        staticClass: 'b-form-date-controls d-flex flex-wrap',
                        class: {
                            'justify-content-between': $footer.length > 1,
                            'justify-content-end': $footer.length < 2
                        }
                    },
                    $footer
                )
            ];
        }

        const $calendar = h(
            HmCalendar,
            {
                staticClass: 'b-form-date-calendar w-100',
                props: {
                    ...this.calendarProps,
                    // hidden: !this.isVisible,
                    isRange: this.isRange,
                    // value: localYMD,
                    valueAsDate: false,
                    width: this.calendarWidth
                },
                on: {
                    selected: this.onSelected,
                    input: this.onInput,
                    context: this.onContext
                },
                scopedSlots: pick($scopedSlots, [
                    'nav-prev-decade',
                    'nav-prev-year',
                    'nav-prev-month',
                    'nav-this-month',
                    'nav-next-month',
                    'nav-next-year',
                    'nav-next-decade'
                ]),
                key: 'calendar',
                ref: 'calendar'
            },
            $footer
        );

        return h(
            BVFormBtnLabelControl,
            {
                staticClass: 'b-form-datepicker',
                props: {
                    ...$props,
                    formattedValue: localYMD ? this.formattedValue : '',
                    id: this.safeId(),
                    lang: this.computedLang,
                    menuClass: [{ 'bg-dark': dark, 'text-light': dark }, this.menuClass],
                    placeholder,
                    rtl: this.isRTL,
                    value: localYMD
                },
                on: {
                    show: this.onShow,
                    shown: this.onShown,
                    hidden: this.onHidden
                },
                scopedSlots: {
                    'button-content': $scopedSlots['button-content'] || this.defaultButtonFn
                },
                ref: 'control'
            },
            [$calendar]
        );
    },
    watch: {
        localYMD(newVal) {
            if (this.isVisible || this.useNative) {
                this.$emit('input', this.valueAsDate ? parseYMD(newVal) || null : newVal || '');
            }
        }
    },
    components: {
        HmInput,
        HmCalendar,
        BVFormBtnLabelControl
    }
};
