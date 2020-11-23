<script>
/**
 * @typedef {object} Calendar
 * @property {String}   locale             calendar locale
 * @property {String}   range              date range selection
 * @property {String}   selectedVariant    selected bootstrap theme
 * @property {String}   todayVariant       today bootstrap theme
 */
import { BCalendar } from 'bootstrap-vue';
import { uniCalendarAlt } from '@/assets/icons/unicons';
import identity from 'bootstrap-vue/src/utils/identity';
import {
    createDate,
    datesEqual,
    formatYMD,
    parseYMD
} from 'bootstrap-vue/src/utils/date';
import { toString } from 'bootstrap-vue/src/utils/string';
import { BIconChevronLeft } from 'bootstrap-vue/src/icons/icons';
import { HmIcon } from './icon';

HmIcon.add(uniCalendarAlt);

export default {
    extends: BCalendar,
    props: {
        locale: {
            type: String,
            default: 'ru'
        },
        range: {
            type: Boolean,
            default: false
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
        labelNoDateSelected: {
            type: String,
            default: 'Дата не выбрана'
        },
        value: {
            type: [String, Date, Array]
        }
    },
    data() {
        return {
            selectedStartYMD: '',
            selectedEndYMD: '',
            isSelectedStartDate: false,
        };
    },
    computed: {
        computedTodayVariant() {
            return `btn-outline-${this.todayVariant}`;
        }
    },
    methods: {
        /**
         * emit 'selected' event
         */
        emitSelected(date) {
            // Performed in a `$nextTick()` to (probably) ensure
            // the input event has emitted first
            if (this.range) {
                this.$nextTick(() => {
                    this.$emit('selected', [
                        parseYMD(this.selectedStartYMD),
                        parseYMD(this.selectedEndYMD)
                    ]);
                });
            } else {
                this.$nextTick(() => {
                    this.$emit('selected', formatYMD(date) || '', parseYMD(date) || null);
                });
            }
        },
        /**
         * day selection at click event
         */
        onClickDay(day) {
            const {
                activeDate,
                selectedDate
            } = this;
            const clickedDate = parseYMD(day.ymd);
            let date;

            if (!this.disabled && !day.isDisabled && !this.dateDisabled(clickedDate)) {
                if (!this.readonly) {
                    // If readonly mode, we don't set the selected date, just the active date
                    // If the clicked date is equal to the already selected date, we don't update the model
                    date = formatYMD(
                        datesEqual(clickedDate, selectedDate) ? selectedDate : clickedDate
                    );

                    if (this.range && this.isSelectedStartDate && new Date(date) < new Date(this.selectedStartYMD)) {
                        this.selectedEndYMD = this.selectedStartYMD;
                        this.selectedStartYMD = date;
                        this.isSelectedStartDate = !this.isSelectedStartDate;
                    } else if (this.range && this.isSelectedStartDate) {
                        this.selectedEndYMD = date;
                        this.isSelectedStartDate = !this.isSelectedStartDate;
                    } else if (this.range && !this.isSelectedStartDate) {
                        this.selectedStartYMD = date;
                        this.selectedEndYMD = '';
                        this.isSelectedStartDate = !this.isSelectedStartDate;
                    } else {
                        this.selectedYMD = date;
                    }

                    this.emitSelected(clickedDate);
                }
                this.activeYMD = formatYMD(
                    datesEqual(clickedDate, activeDate) ? activeDate : createDate(clickedDate)
                );
                // Ensure grid is focused
                this.focus();
            }
        }
    },
    render(h) {
        if (this.hidden) {
            return h();
        }

        const {
            valueId,
            widgetId,
            navId,
            gridId,
            gridCaptionId,
            gridHelpId,
            activeId,
            isLive,
            isRTL,
            activeYMD,
            selectedYMD,
            selectedStartYMD,
            selectedEndYMD,
            safeId
        } = this;
        const todayYMD = formatYMD(this.getToday());
        const highlightToday = !this.noHighlightToday;

        // Header showing current selected date
        const headerClasses = [];

        if (this.disabled) {
            headerClasses.push('text-muted');
        }

        if (this.readonly || this.disabled) {
            headerClasses.push('readonly');
        }

        const getHeaderOutput = (date, showIcon = false) => (
            <output
                staticClass="form-control form-control-sm text-center"
                class={headerClasses}
                id={valueId}
                for={gridId}
                role="status"
                tabindex={this.disabled ? null : '-1'}
                data-selected={toString(selectedStartYMD)}
                aria-live={isLive ? 'polite' : 'off'}
                aria-atomic={isLive ? 'true' : null}
                onClick={this.onHeaderClick}
                onFocus={this.onHeaderClick}>
                <div class="d-flex align-items-center">
                    {
                        showIcon && (
                            <div class="d-inline-flex mr-1">
                                <HmIcon name="calendar-alt" />
                            </div>
                        )
                    }
                    <span class="text-nowrap">
                        {
                            date ?
                                [
                                    <bdi staticClass="sr-only">{` (${toString(this.labelSelected)}) `}</bdi>,
                                    <bdi>{date}</bdi>
                                ] :
                                this.labelNoDateSelected || '\u00a0' // '&nbsp;'
                        }
                    </span>
                </div>
            </output>
        );
        const toLocaleDateString = (date) => (date ? date.toLocaleDateString() : null);
        const $header = (
            <header
                staticClass="b-calendar-header d-flex m-0"
                class={this.hideHeader ? 'sr-only' : ''}
                title={this.selectedDate ? this.labelSelectedDate || null : null}>
                {
                    this.range ?
                        [
                            getHeaderOutput(toLocaleDateString(this.selectedStartYMD ? new Date(this.selectedStartYMD) : null), true),
                            getHeaderOutput(toLocaleDateString(this.selectedEndYMD ? new Date(this.selectedEndYMD) : null))
                        ] :
                        [getHeaderOutput(toLocaleDateString(this.selectedDate), true)]
                }
            </header>
        );

        // Content for the date navigation buttons
        const navScope = { isRTL };
        const navProps = { shiftV: 0.5 };
        const navPrevProps = { ...navProps, flipH: isRTL };
        const navNextProps = { ...navProps, flipH: !isRTL };
        const $prevMonthIcon = (
            this.normalizeSlot('nav-prev-month', navScope) ||
            h(BIconChevronLeft, { props: navPrevProps })
        );
        const $nextMonthIcon = (
            this.normalizeSlot('nav-next-month', navScope) ||
            h(BIconChevronLeft, { props: navNextProps })
        );

        // Utility to create the date navigation buttons
        const makeNavBtn = (content, label, handler, btnDisabled, shortcut) => (
            <button
                staticClass="btn btn-sm border-0"
                class={[this.computedNavButtonVariant, { disabled: btnDisabled }]}
                title={label || null}
                type="button"
                aria-label={label || null}
                aria-disabled={btnDisabled ? 'true' : null}
                aria-keyshortcuts={shortcut || null}
                onClick={btnDisabled ? () => {} : handler}>
                <div aria-hidde={true}>
                    {content}
                </div>
            </button>
        );

        // Generate the date navigation buttons
        const $nav = (
            <div
                staticClass="b-calendar-nav d-flex m-0"
                id={navId}
                role="group"
                aria-hidden={this.disabled ? 'true' : null}
                aria-label={this.labelNav || null}
                aria-controls={gridId}></div>
        );

        // Caption for calendar grid
        const $gridCaption = (
            <header
                key="grid-caption"
                staticClass="b-calendar-grid-caption text-center font-weight-bold d-flex justify-content-between align-items-center"
                class={this.disabled ? 'text-muted' : ''}
                id={gridCaptionId}
                aria-live={isLive ? 'polite' : null}
                aria-atomic={isLive ? 'true' : null}>
                {[
                    makeNavBtn(
                        $prevMonthIcon,
                        this.labelPrevMonth,
                        this.gotoPrevMonth,
                        this.prevMonthDisabled,
                        'PageDown'
                    ),
                    this.formatYearMonth(this.calendarFirstDay),
                    makeNavBtn(
                        $nextMonthIcon,
                        this.labelNextMonth,
                        this.gotoNextMonth,
                        this.nextMonthDisabled,
                        'PageUp'
                    )
                ]}
            </header>
        );

        // Calendar weekday headings
        const $gridWeekDays = (
            <div
                staticClass="b-calendar-grid-weekdays row no-gutters border-bottom"
                aria-hidden="true">
                {
                    this.calendarHeadings.map((d, idx) => (
                        <small
                            key={idx}
                            staticClass="col text-truncate"
                            class={this.disabled ? 'text-muted' : ''}
                            title={d.label === d.text ? null : d.label}
                            aria-label={d.label}>
                            {d.text}
                        </small>
                    ))
                }
            </div>
        );

        // Calendar day grid
        let $gridBody = this.calendar.map((week) => {
            const $cells = week.map((day, dIndex) => {
                let isSelected;
                let isRangeBg = false;

                if (this.range) {
                    isSelected = day.ymd === selectedStartYMD || day.ymd === selectedEndYMD;

                    isRangeBg = new Date(day.ymd) > new Date(selectedStartYMD) && new Date(day.ymd) < new Date(selectedEndYMD);
                } else {
                    isSelected = day.ymd === selectedYMD;
                }
                const isActive = day.ymd === activeYMD;
                const isToday = day.ymd === todayYMD;
                const idCell = safeId(`_cell-${day.ymd}_`);
                // "fake" button
                const $btn = (
                    <span
                        staticClass="btn border-0 text-nowrap rounded-0 font-weight-light m-0"
                        class={{
                            // Give the fake button a focus ring
                            focus: isActive && this.gridHasFocus,
                            // Styling
                            disabled: day.isDisabled || this.disabled,
                            active: isSelected, // makes the button look "pressed"
                            // Selected date style (need to computed from variant)
                            [this.computedVariant]: isSelected,
                            // Today day style (if not selected), same variant color as selected date
                            'font-weight-bold': isToday && highlightToday && !isSelected && day.isThisMonth,
                            // Non selected/today styling
                            'btn-outline-light': !(isToday && highlightToday) && !isSelected && !isActive,
                            'btn-light': !(isToday && highlightToday) && !isSelected && isActive,
                            // Text styling
                            'text-muted': !day.isThisMonth && !isSelected,
                            'text-dark': !(isToday && highlightToday) && !isSelected && !isActive && day.isThisMonth,
                            'b-calendar-selected-bg': isRangeBg
                        }}
                        onClick={() => this.onClickDay(day)}>
                        {day.day}
                    </span>
                );
                return (
                    <div
                        key={dIndex}
                        staticClass="col p-0 b-calendar-grid-body-item"
                        class={day.isDisabled ? 'bg-light' : day.info.class || ''}
                        id={idCell}
                        role="button"
                        data-date={day.ymd} // Primarily for testing purposes
                        // Only days in the month are presented as buttons to screen readers
                        aria-hidden={day.isThisMonth ? null : 'true'}
                        aria-disabled={day.isDisabled || this.disabled ? 'true' : null}
                        aria-label={
                            [
                                day.label,
                                isSelected ? `(${this.labelSelected})` : null,
                                isToday ? `(${this.labelToday})` : null
                            ].filter(identity).join(' ')
                        }
                        // NVDA doesn't convey `aria-selected`, but does `aria-current`,
                        // ChromeVox doesn't convey `aria-current`, but does `aria-selected`,
                        // so we set both attributes for robustness
                        aria-selected={isSelected ? 'true' : null}
                        aria-current={isSelected ? 'date' : null}>
                        {$btn}
                    </div>
                );
            });
            // Return the week "row"
            // We use the first day of the weeks YMD value as a
            // key for efficient DOM patching / element re-use
            return (
                <div
                    key={week[0].ymd}
                    staticClass="row no-gutters">
                    {$cells}
                </div>
            );
        });
        $gridBody = (
            <div
                staticClass="b-calendar-grid-body"
                style={this.disabled ? 'pointer-events: none;' : ''}>
                {$gridBody}
            </div>
        );

        const $grid = (
            <div
                ref="grid"
                staticClass="b-calendar-grid form-control h-auto text-center"
                id={gridId}
                role="application"
                tabindex={this.disabled ? null : '0'}
                data-month={activeYMD.slice(0, -3)}
                aria-roledescription={this.labelCalendar || null}
                aria-labelledby={gridCaptionId}
                aria-describedby={gridHelpId}
                // `aria-readonly` is not considered valid on `role="application"`
                // https://www.w3.org/TR/wai-aria-1.1/#aria-readonly
                // 'aria-readonly': this.readonly && !this.disabled ? 'true' : null,
                aria-disabled={this.disabled ? 'true' : null}
                aria-activedescendant={activeId}
                onKeydown={this.onKeydownGrid}
                onFocus={this.setGridFocusFlag}
                onBlur={this.setGridFocusFlag}>
                {[$gridCaption, $gridWeekDays, $gridBody]}
            </div>
        );

        // Optional bottom slot
        let $slot = this.normalizeSlot();
        $slot = $slot ? h('footer', { staticClass: 'b-calendar-footer' }, $slot) : h();

        const $widget = (
            <div
                staticClass="b-calendar-inner"
                style={this.block ? '' : `width: ${this.width}px`}
                id={widgetId}
                dir={isRTL ? 'rtl' : 'ltr'}
                lang={this.computedLocale || null}
                role="group"
                aria-disabled={this.disabled ? 'true' : null}
                // If datepicker controls an input, this will specify the ID of the input
                aria-controls={this.ariaControls || null}
                // This should be a prop (so it can be changed to Date picker, etc, localized
                aria-roledescription={this.roleDescription || null}
                aria-describedby={
                    [
                        // Should the attr (if present) go last?
                        // Or should this attr be a prop?
                        this.bvAttrs['aria-describedby'],
                        valueId,
                        gridHelpId
                    ].filter(identity).join(' ')
                }
                onKeydown={this.onKeydownWrapper}>
                {[$header, $nav, $grid, $slot]}
            </div>
        );

        // Wrap in an outer div that can be styled
        return (
            <div
                staticClass="b-calendar"
                class={this.block ? 'd-block' : ''}>
                {$widget}
            </div>
        );
    },
    watch: {
        selectedYMD(newYMD, oldYMD) {
            if (newYMD !== oldYMD && !this.range) {
                this.$emit('input', this.valueAsDate ? parseYMD(newYMD) || null : newYMD || '');
            }
        },
        selectedStartYMD(newYMD, oldYMD) {
            const dates = [];

            if (newYMD !== oldYMD && this.range) {
                if (this.selectedStartYMD) {
                    dates.push(parseYMD(this.selectedStartYMD));
                }

                if (this.selectedEndYMD && this.selectedStartYMD) {
                    dates.push(parseYMD(this.selectedEndYMD));
                } else if (this.selectedEndYMD && !this.selectedStartYMD) {
                    dates.push(undefined, parseYMD(this.selectedEndYMD));
                }

                this.$emit('input', dates);
            } else if (newYMD !== oldYMD && !this.range) {
                this.$emit('input', this.valueAsDate ? parseYMD(newYMD) || null : newYMD || '');
            }
        },
        selectedEndYMD(newYMD, oldYMD) {
            const dates = [];

            if (newYMD !== oldYMD && this.range) {
                if (this.selectedStartYMD) {
                    dates.push(parseYMD(this.selectedStartYMD));
                }

                if (this.selectedEndYMD && this.selectedStartYMD) {
                    dates.push(parseYMD(this.selectedEndYMD));
                } else if (this.selectedEndYMD && !this.selectedStartYMD) {
                    dates.push(undefined, parseYMD(this.selectedEndYMD));
                }

                this.$emit('input', dates);
            }
        }
    },
    components: {
        HmIcon
    }
};
</script>
