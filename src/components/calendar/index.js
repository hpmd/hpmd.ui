import { pluginFactory } from 'bootstrap-vue/src/utils/plugins';
import HmCalendar from './calendar';

const CalendarPlugin = pluginFactory({
    components: {
        HmCalendar
    }
});

export {
    CalendarPlugin,
    HmCalendar
};
