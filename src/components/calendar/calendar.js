import { BCalendar } from 'bootstrap-vue';
import { identity } from 'bootstrap-vue/src/utils/identity';
import {
    createDate,
    datesEqual,
    formatYMD,
    parseYMD
} from 'bootstrap-vue/src/utils/date';
import { toString } from 'bootstrap-vue/src/utils/string';
import {
    BIconChevronLeft,
    BIconChevronDoubleLeft
} from 'bootstrap-vue/src/icons/icons';
import { HmIcon } from '../icon';
import { uniCalendarAlt } from '../../icons/unicons';

HmIcon.add(uniCalendarAlt);

/**
 * Component for displaying the calendar
 * @class HmCalendar
 * @extends BCalendar
 * @see {@link https://bootstrap-vue.org/docs/components/calendar} Docs
 * @example
 * <hm-calendar v-model="..." />
 */
export default {
    extends: BCalendar,
    props: {
        /**
         * calendar locale
         */
        locale: {
            type: String,
            default: 'ru'
        },
        /**
         * date range (date1 - date2) selection
         */
        isRange: {
            type: Boolean,
            default: false
        },
        /**
         * selected bootstrap theme
         */
        selectedVariant: {
            // Variant color to use for the selected date
            type: String,
            default: 'primary'
        },
        /**
         * today bootstrap theme
         */
        todayVariant: {
            // Variant color to use for today's date (defaults to `selectedVariant`)
            type: String,
            default: 'secondary'
        },
        /**
         * label without date
         */
        labelNoDateSelected: {
            type: String,
            default: 'Дата не выбрана'
        },
        /**
         * show buttons to switch year
         */
        showYearBtns: {
            type: Boolean,
            default: false
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
        /**
         * overwritten computed property returning today variant for buttons
         */
        computedTodayVariant() {
            return `btn-outline-${this.todayVariant}`;
        }
    },
    methods: {
        /**
         * emit 'selected' event
         * @param {object|Date} date
         * @returns {void}
         */
        emitSelected(date) {
            // Performed in a `$nextTick()` to (probably) ensure
            // the input event has emitted first
            if (this.isRange) {
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
         * @param {object|Date} day
         * @returns {void}
         */
        onClickDay(day) {
            const {
                activeDate,
                selectedDate,
                isRange
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

                    if (isRange && this.isSelectedStartDate && new Date(date) < new Date(this.selectedStartYMD)) {
                        this.selectedEndYMD = this.selectedStartYMD;
                        this.selectedStartYMD = date;
                        this.isSelectedStartDate = !this.isSelectedStartDate;
                    } else if (isRange && this.isSelectedStartDate) {
                        this.selectedEndYMD = date;
                        this.isSelectedStartDate = !this.isSelectedStartDate;
                    } else if (isRange && !this.isSelectedStartDate) {
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
            activeId,
            activeYMD,
            disabled,
            gridCaptionId,
            gridHelpId,
            gridId,
            isLive,
            isRange,
            isRTL,
            navId,
            noKeyNav,
            safeId,
            selectedYMD,
            selectedStartYMD,
            selectedEndYMD,
            valueId,
            widgetId
        } = this;
        const todayYMD = formatYMD(this.getToday());
        const highlightToday = !this.noHighlightToday;



        const $getHeaderOutput = (dateInput, showIcon = false) => {
            const _toDate = new Date(dateInput);

            const date = Number.isNaN(_toDate.getTime()) ?
                null :
                _toDate.toLocaleDateString();

            const $headerOutputChildren = [];

            if (showIcon) {
                $headerOutputChildren.push(h(
                    'div',
                    { class: 'd-inline-flex mr-1' },
                    [
                        h(
                            HmIcon,
                            { props: { name: 'uni-calendar-alt' } }
                        )
                    ]
                ));
            }

            $headerOutputChildren.push(h(
                'span',
                { class: 'text-nowrap' },
                date ?
                    [
                        // We use `bdi` elements here in case the label doesn't match the locale
                        // Although IE 11 does not deal with <BDI> at all (equivalent to a span)
                        h('bdi', { staticClass: 'sr-only' }, ` (${toString(this.labelSelected)}) `),
                        h('bdi', date)
                    ] :
                    this.labelNoDateSelected || '\u00a0' // '&nbsp;'
            ));

            return h(
                'output',
                {
                    attrs: {
                        id: valueId,
                        for: gridId,
                        role: 'status',
                        tabindex: disabled ? null : '-1',
                        // Mainly for testing purposes, as we do not know
                        // the exact format `Intl` will format the date string
                        'data-selected': toString(selectedYMD),
                        // We wait until after mount to enable `aria-live`
                        // to prevent initial announcement on page render
                        'aria-live': isLive ? 'polite' : 'off',
                        'aria-atomic': isLive ? 'true' : null
                    },
                    class: {
                        'text-muted': disabled,
                        readonly: this.readonly || disabled
                    },
                    staticClass: 'form-control form-control-sm text-center',
                    on: {
                        // Transfer focus/click to focus grid
                        // and focus active date (or today if no selection)
                        click: this.onHeaderClick,
                        focus: this.onHeaderClick
                    }
                },
                [
                    h(
                        'div',
                        { class: 'd-flex align-items-center' },
                        $headerOutputChildren
                    )
                ]
            );
        };

        const $header = h(
            'header',
            {
                attrs: {
                    title: this.selectedDate ? this.labelSelectedDate || null : null
                },
                class: {
                    'sr-only': this.hideHeader
                },
                staticClass: 'b-calendar-header d-flex m-0'
            },
            isRange ?
                [
                    $getHeaderOutput(this.selectedStartYMD, true),
                    $getHeaderOutput(this.selectedEndYMD)
                ] :
                [
                    $getHeaderOutput(this.selectedDate, true)
                ]
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
        const makeNavBtn = (content, label, handler, btnDisabled, shortcut) => h(
            'div',
            {
                staticClass: 'b-calendar-btn border-0',
                class: { disabled: btnDisabled },
                attrs: {
                    title: label || null,
                    tabindex: noKeyNav ? '-1' : null,
                    'aria-role': 'button',
                    'aria-label': label || null,
                    'aria-disabled': btnDisabled ? 'true' : null,
                    'aria-keyshortcuts': shortcut || null
                },
                on: btnDisabled ? {} : { click: handler }
            },
            [
                h(
                    'div',
                    {
                        attrs: { 'aria-hidden': 'true' }
                    },
                    [content]
                )
            ]
        );


        // Generate the date navigation buttons
        const $nav = h(
            'div',
            {
                staticClass: 'b-calendar-nav d-flex m-0',
                attrs: {
                    id: navId,
                    role: 'group',
                    tabindex: noKeyNav ? '-1' : null,
                    'aria-hidden': disabled ? 'true' : null,
                    'aria-label': this.labelNav || null,
                    'aria-controls': gridId
                }
            }
        );

        const $gridCaptionChildren = [];

        const $prevYearIcon = (
            this.normalizeSlot('nav-prev-year', navScope) ||
            h(BIconChevronDoubleLeft, { props: navPrevProps })
        );
        const $nextYearIcon = (
            this.normalizeSlot('nav-next-year', navScope) ||
            h(BIconChevronDoubleLeft, { props: navNextProps })
        );

        if (this.showYearBtns) {
            $gridCaptionChildren.push(
                makeNavBtn(
                    $prevYearIcon,
                    this.labelPrevYear,
                    this.gotoPrevYear,
                    this.prevYearDisabled,
                    'Alt+PageDown'
                )
            );
        }

        $gridCaptionChildren.push(
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
        );

        if (this.showYearBtns) {
            $gridCaptionChildren.push(
                makeNavBtn(
                    $nextYearIcon,
                    this.labelNextYear,
                    this.gotoNextYear,
                    this.nextYearDisabled,
                    'Alt+PageUp'
                )
            );
        }

        // Caption for calendar grid
        const $gridCaption = h(
            'header',
            {
                attrs: {
                    id: gridCaptionId,
                    'aria-live': isLive ? 'polite' : null,
                    'aria-atomic': isLive ? 'true' : null
                },
                class: {
                    'text-muted': disabled
                },
                key: 'grid-caption',
                staticClass: 'b-calendar-grid-caption text-center font-weight-bold d-flex justify-content-around align-items-center'
            },
            $gridCaptionChildren
        );

        // Calendar weekday headings
        const $gridWeekDays = h(
            'div',
            {
                staticClass: 'b-calendar-grid-weekdays row no-gutters border-bottom d-flex justify-content-center',
                attrs: { 'aria-hidden': 'true' }
            },
            this.calendarHeadings.map((d, idx) => h(
                'small',
                {
                    staticClass: 'col text-truncate',
                    class: { 'text-muted': disabled },
                    attrs: {
                        title: d.label === d.text ? null : d.label,
                        'aria-label': d.label
                    },
                    key: idx
                },
                d.text
            ))
        );

        // Calendar day grid
        let $gridBody = this.calendar.map((week) => {
            const $cells = week.map((day, dIndex) => {
                let isSelected;
                let isRangeBg = false;

                if (isRange) {
                    isSelected = day.ymd === selectedStartYMD || day.ymd === selectedEndYMD;

                    isRangeBg = new Date(day.ymd) > new Date(selectedStartYMD) && new Date(day.ymd) < new Date(selectedEndYMD);
                } else {
                    isSelected = day.ymd === selectedYMD;
                }

                const isActive = day.ymd === activeYMD;
                const isToday = day.ymd === todayYMD;
                const idCell = safeId(`_cell-${day.ymd}_`);
                // "fake" button
                const $btn = h(
                    'span',
                    {
                        class: {
                            active: isSelected,
                            disabled: day.isDisabled || disabled,
                            focus: isActive && this.gridHasFocus,
                            [this.computedVariant]: isSelected,
                            'b-calendar-selected-bg': isRangeBg,
                            'btn-light': !(isToday && highlightToday) && !isSelected && isActive,
                            'btn-outline-light': !(isToday && highlightToday) && !isSelected && !isActive,
                            'font-weight-bold': isToday && highlightToday && !isSelected && day.isThisMonth,
                            'text-dark': !(isToday && highlightToday) && !isSelected && !isActive && day.isThisMonth,
                            'text-muted': !day.isThisMonth && !isSelected
                        },
                        staticClass: 'b-calendar-date btn border-0 text-nowrap font-weight-light m-0',
                        on: {
                            click: () => this.onClickDay(day)
                        }
                    },
                    day.day
                );

                return h(
                    'div',
                    {
                        attrs: {
                            id: idCell,
                            role: 'button',
                            // Only days in the month are presented as buttons to screen readers
                            'aria-hidden': day.isThisMonth ? null : 'true',
                            'aria-disabled': day.isDisabled || disabled ? 'true' : null,
                            'aria-label': [
                                day.label,
                                isSelected ? `(${this.labelSelected})` : null,
                                isToday ? `(${this.labelToday})` : null
                            ].filter(identity).join(' '),
                            // NVDA doesn't convey `aria-selected`, but does `aria-current`,
                            // ChromeVox doesn't convey `aria-current`, but does `aria-selected`,
                            // so we set both attributes for robustness
                            'aria-selected': isSelected ? 'true' : null,
                            'aria-current': isSelected ? 'date' : null,
                            'data-date': day.ymd
                        },
                        class: day.isDisabled ? 'bg-light' : day.info.class || '',
                        key: dIndex,
                        staticClass: 'col p-0 b-calendar-grid-body-item'

                    },
                    [$btn]
                );
            });

            // Return the week "row"
            // We use the first day of the weeks YMD value as a
            // key for efficient DOM patching / element re-use
            return h(
                'div',
                {
                    staticClass: 'row no-gutters',
                    key: week[0].ymd
                },
                $cells
            );
        });

        $gridBody = h(
            'div',
            {
                // A key is only required on the body if we add in transition support
                staticClass: 'b-calendar-grid-body d-table',
                style: disabled ? { pointerEvents: 'none' } : {}
                // key: this.activeYMD.slice(0, -3)
            },
            $gridBody
        );

        const $grid = h(
            'div',
            {
                attrs: {
                    id: gridId,
                    role: 'application',
                    // eslint-disable-next-line no-nested-ternary
                    tabindex: noKeyNav ? '-1' : disabled ? null : '0',
                    'data-month': activeYMD.slice(0, -3), // `YYYY-MM`, mainly for testing
                    'aria-roledescription': this.labelCalendar || null,
                    'aria-labelledby': gridCaptionId,
                    'aria-describedby': gridHelpId,
                    // `aria-readonly` is not considered valid on `role="application"`
                    // https://www.w3.org/TR/wai-aria-1.1/#aria-readonly
                    // 'aria-readonly': this.readonly && !disabled ? 'true' : null,
                    'aria-disabled': disabled ? 'true' : null,
                    'aria-activedescendant': activeId
                },
                ref: 'grid',
                staticClass: 'b-calendar-grid form-control h-auto text-center',
                on: {
                    blur: this.setGridFocusFlag,
                    focus: this.setGridFocusFlag,
                    keydown: this.onKeydownGrid
                }
            },
            [
                $gridCaption, $gridWeekDays, $gridBody
            ]
        );

        // Optional bottom slot
        let $slot = this.normalizeSlot();
        $slot = $slot ?
            h('footer', { staticClass: 'b-calendar-footer' }, $slot) :
            h();

        const $widget = h(
            'div',
            {
                staticClass: 'b-calendar-inner',
                style: this.block ? {} : { width: `${this.width}px` },
                attrs: {
                    id: widgetId,
                    dir: isRTL ? 'rtl' : 'ltr',
                    lang: this.computedLocale || null,
                    role: 'group',
                    'aria-disabled': disabled ? 'true' : null,
                    // If datepicker controls an input, this will specify the ID of the input
                    'aria-controls': this.ariaControls || null,
                    // This should be a prop (so it can be changed to Date picker, etc, localized
                    'aria-roledescription': this.roleDescription || null,
                    'aria-describedby': [
                        // Should the attr (if present) go last?
                        // Or should this attr be a prop?
                        this.bvAttrs['aria-describedby'],
                        valueId,
                        gridHelpId
                    ]
                        .filter(identity)
                        .join(' ')
                },
                on: {
                    keydown: this.onKeydownWrapper
                }
            },
            [$header, $nav, $grid, $slot]
        );

        // Wrap in an outer div that can be styled
        return h(
            'div',
            {
                class: { 'd-block': this.block },
                staticClass: 'b-calendar'
            },
            [$widget]
        );
    },
    watch: {
        selectedYMD(newYMD, oldYMD) {
            if (newYMD !== oldYMD && !this.isRange) {
                this.$emit('input', this.valueAsDate ? parseYMD(newYMD) || null : newYMD || '');
            }
        },
        selectedStartYMD(newYMD, oldYMD) {
            const dates = [];

            if (newYMD !== oldYMD && this.isRange) {
                if (this.selectedStartYMD) {
                    dates.push(parseYMD(this.selectedStartYMD));
                }

                if (this.selectedEndYMD && this.selectedStartYMD) {
                    dates.push(parseYMD(this.selectedEndYMD));
                } else if (this.selectedEndYMD && !this.selectedStartYMD) {
                    dates.push(undefined, parseYMD(this.selectedEndYMD));
                }

                this.$emit('input', dates);
            } else if (newYMD !== oldYMD && !this.isRange) {
                this.$emit('input', this.valueAsDate ? parseYMD(newYMD) || null : newYMD || '');
            }
        },
        selectedEndYMD(newYMD, oldYMD) {
            const dates = [];

            if (newYMD !== oldYMD && this.isRange) {
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
