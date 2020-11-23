<script>
/**
 * @typedef {object} FormDatepicker
 * @property {Boolean}  useNative          native input[type="file"]
 * @property {String}   selectedVariant    selected bootstrap theme
 * @property {String}   todayVariant       today bootstrap theme
 * @property {Boolean}  range              date range selection
 */
import { BFormDatepicker } from 'bootstrap-vue';
import { BVFormBtnLabelControl } from 'bootstrap-vue/src/utils/bv-form-btn-label-control';
import { isUndefinedOrNull } from 'bootstrap-vue/src/utils/inspect';
import { parseYMD } from 'bootstrap-vue/src/utils/date';
import { pick } from 'bootstrap-vue/src/utils/object';
import HmCalendar from '@/components/HmCalendar';
import { HmInput } from './input';

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
        range: {
            type: Boolean,
            default: false
        }
    },
    methods: {

        /**
         * onInput handler for native input
         */
        onInputNative(ymd) {
            if (this.localYMD !== ymd) {
                this.localYMD = ymd;
                this.setAndClose(ymd);
            }
        }
    },
    render() {
        const {
            $scopedSlots,
            localYMD,
            disabled,
            readonly
        } = this;

        let $result;

        if (this.useNative) {
            $result = (
                <hm-input
                    value={localYMD}
                    onInput={this.onInputNative}
                    type="date" />
            );
        } else {
            const placeholder = isUndefinedOrNull(this.placeholder) ?
                this.labelNoDateSelected :
                this.placeholder;

            // Optional footer buttons
            let $footer = [];

            if (this.todayButton) {
                const label = this.labelTodayButton;
                $footer.push(
                    <BButton
                        size="sm"
                        disabled={disabled || readonly}
                        variant={this.todayButtonVariant}
                        aria-label={label || null}
                        onClick={this.onTodayButton}>
                        {label}
                    </BButton>
                );
            }

            if (this.resetButton) {
                const label = this.labelResetButton;
                $footer.push(
                    <BButton
                        size="sm"
                        disabled={disabled || readonly}
                        variant={this.resetButtonVariant}
                        aria-label={label || null}
                        onClick={this.onResetButton}>
                        {label}
                    </BButton>
                );
            }

            if (this.closeButton) {
                const label = this.labelCloseButton;
                $footer.push(
                    <BButton
                        size="sm"
                        disabled={disabled}
                        variant={this.closeButtonVariant}
                        aria-label={label || null}
                        onClick={this.onCloseButton}>
                        {label}
                    </BButton>
                );
            }

            if ($footer.length > 0) {
                $footer = [
                    <div
                        staticClass="b-form-date-controls d-flex flex-wrap"
                        class={{
                            'justify-content-between': $footer.length > 1,
                            'justify-content-end': $footer.length < 2
                        }}>
                        {$footer}
                    </div>
                ];
            }

            const $calendar = (
                <HmCalendar
                    key="calendar"
                    ref="calendar"
                    staticClass="b-form-date-calendar w-100"
                    props={this.calendarProps}
                    range={this.range}
                    onSelected={this.onSelected}
                    onInput={this.onInput}
                    onContext={this.onContext}
                    scopedSlots={pick($scopedSlots, [
                        'nav-prev-decade',
                        'nav-prev-year',
                        'nav-prev-month',
                        'nav-this-month',
                        'nav-next-month',
                        'nav-next-year',
                        'nav-next-decade'
                    ])}>
                    {$footer}
                </HmCalendar>
            );

            $result = (
                <BVFormBtnLabelControl
                    ref="control"
                    staticClass="b-form-datepicker"
                    {...this.$props}
                    // Overridden / computed props
                    id={this.safeId()}
                    rtl={this.isRTL}
                    lang={this.computedLang}
                    value={localYMD || ''}
                    formattedValue={localYMD ? this.formattedValue : ''}
                    placeholder={placeholder || ''}
                    menuClass={
                        [{ 'bg-dark': !!this.dark, 'text-light': !!this.dark }, this.menuClass]
                    }
                    onShow={this.onShow}
                    onShown={this.onShown}
                    onHidden={this.onHidden}
                    scopedSlots={{
                        'button-content': $scopedSlots['button-content'] || this.defaultButtonFn
                    }}>
                    {$calendar}
                </BVFormBtnLabelControl>
            );
        }

        return $result;
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
</script>
