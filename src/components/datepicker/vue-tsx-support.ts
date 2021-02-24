import * as tsx from 'vue-tsx-support';
import { PopperOptions } from 'popper.js';
import { CalendarProps, CalendarScopedSlots } from '../calendar/vue-tsx-support';
import { HmDatepicker as HmDatepickerOriginal } from '.';


type DatepickerProps = {
    // bootstrap-vue
    ariaControls?: string;
    boundary?: 'scrollParent' | 'window' | 'viewport' | HTMLElement;
    buttonOnly?: boolean;
    buttonVariant?: string;
    calendarWidth?: CalendarProps['width'];
    closeButton?: boolean;
    closeButtonVariant?: string;
    dark?: boolean;
    dateDisabledFn?: CalendarProps['dateDisabledFn'];
    dateFormatOptions?: CalendarProps['dateFormatOptions'];
    direction?: CalendarProps['direction'];
    disabled?: CalendarProps['disabled'];
    dropleft?: boolean;
    dropright?: boolean;
    dropup?: boolean;
    form?: string;
    hideHeader?: boolean;
    id?: string;
    initialDate?: CalendarProps['initialDate'];
    labelCalendar?: CalendarProps['labelCalendar'];
    labelCloseButton?: string;
    labelCurrentMonth?: CalendarProps['labelCurrentMonth'];
    labelHelp?: CalendarProps['labelHelp'];
    labelNav?: CalendarProps['labelNav'];
    labelNextDecade?: CalendarProps['labelNextDecade'];
    labelNextMonth?: CalendarProps['labelNextMonth'];
    labelNextYear?: CalendarProps['labelNextYear'];
    labelNoDateSelected?: CalendarProps['labelNoDateSelected'];
    labelPrevDecade?: CalendarProps['labelPrevDecade'];
    labelPrevMonth?: CalendarProps['labelPrevMonth'];
    labelPrevYear?: CalendarProps['labelPrevYear'];
    labelResetButton?: string;
    labelSelected?: CalendarProps['labelSelected'];
    labelToday?: CalendarProps['labelToday'];
    labelTodatButton?: string;
    locale?: CalendarProps['locale'];
    max?: CalendarProps['max'];
    menuClass?: string | string[] | object | object[];
    min?: CalendarProps['min'];
    name?: string;
    navButtonVariant?: string;
    noCloseOnSelect?: boolean;
    noFlip?: boolean;
    noHighlightToday?: CalendarProps['noHighlightToday'];
    offset?: number | string;
    placeholder?: string;
    popperOpts?: PopperOptions;
    readonly?: CalendarProps['readonly'];
    required?: boolean;
    resetButton?: boolean;
    resetButtonVariant?: string;
    resetValue?: Date | string;
    right?: boolean;
    selectedVariant?: string;
    showDecadeNav?: CalendarProps['showDecadeNav'];
    size?: string;
    startWeekday?: CalendarProps['startWeekday'];
    state?: boolean | null;
    todayButton?: boolean;
    todayButtonVariant?: string;
    todayVariant?: string;
    value?: Date | Date[] | string; // v-model, todo
    valueAsDate?: CalendarProps['valueAsDate'];
    weekdayHeaderFormat?: CalendarProps['weekdayHeaderFormat'];
}

interface DatepickerScopedSlots extends CalendarScopedSlots {
    'button-content': {
        isHovered: boolean;
        hasFocus: boolean;
        state: boolean | null;
        open: boolean;
    }
}


