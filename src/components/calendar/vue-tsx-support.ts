import * as tsx from 'vue-tsx-support';
import { BcCalendarCtxObject, HmCalendar as HmCalendarOriginal } from '.';


type CalendarWeekdayNum = 0 | 1 | 2 | 3 | 4 | 5 | 6;
type CalendarWeekdayStr = '0' | '1' | '2' | '3' | '4' | '5' | '6';

export type CalendarProps = {
    // bootstrap-vue
    ariaControls?: string;
    block?: boolean;
    dateDisabledFn?: (ymd?: string, date?: Date) => boolean;
    dateFormatOptions?: Intl.DateTimeFormatOptions;
    dateInfoFn?: (ymd?: string, date?: Date) => string | string[];
    direction?: 'rtl' | 'ltr';
    disabled?: boolean;
    hidden?: boolean;
    hideHeader?: boolean;
    id?: string;
    initialDate?: Date | string;
    labelCalendar?: string;
    labelCurrentMonth?: string;
    labelHelp?: string;
    labelNav?: string;
    labelNextDecade?: string;
    labelNextMonth?: string;
    labelNextYear?: string;
    labelNoDateSelected?: string;
    labelPrevDecade?: string;
    labelPrevMonth?: string;
    labelPrevYear?: string;
    labelSelected?: string;
    labelToday?: string;
    locale?: string[] | string;
    max?: Date | string;
    min?: Date | string;
    navButtonVariant?: string;
    noHighlightToday?: boolean;
    noKeyNav?: boolean;
    readonly?: boolean;
    roleDescription?: string;
    selectedVariant?: string;
    showDecadeNav?: boolean;
    startWeekday?: CalendarWeekdayNum | CalendarWeekdayStr;
    todayVariant?: string;
    value?: Date | Date[] | string; // modified
    valueAsDate?: boolean;
    weekdayHeaderFormat?: 'long' | 'short' | 'narrow';
    width?: string; // as '270px'

    // custom
    isRange?: boolean;
    showYearBtns?: boolean;
};


type CalendarEvents = {
    onContext?: BcCalendarCtxObject;
    onInput?: string | Date | Date[];
    onSelected?: { ymd: string, date: Date };
}

type CalendarSlotRTL = { isRTL: boolean };

export type CalendarScopedSlots = {
    'nav-next-decade': CalendarSlotRTL;
    'nav-next-month': CalendarSlotRTL;
    'nav-next-year': CalendarSlotRTL;
    'nav-prev-decade': CalendarSlotRTL;
    'nav-prev-month': CalendarSlotRTL;
    'nav-prev-year': CalendarSlotRTL;
    'nav-this-month': CalendarSlotRTL;
}


export const HmCalendar = tsx.ofType<CalendarProps, CalendarEvents, CalendarScopedSlots>().convert(HmCalendarOriginal);
