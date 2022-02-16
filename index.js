import { installFactory } from 'bootstrap-vue/src/utils/plugins';
import componentsPlugin from './src/components';

const install = installFactory({
    plugins: {
        componentsPlugin
    }
});


const HpmdUI = {
    install,
    NAME: 'HPMD.ui'
};

export {
    install,
    HpmdUI
};

export {
    HmAlert,
    AlertPlugin
} from './src/components/alert';

export {
    HmAvatar,
    AvatarPlugin
} from './src/components/avatar';

export {
    HmBadge,
    BadgePlugin
} from './src/components/badge';

export {
    HmButton,
    HmButtonClose,
    ButtonPlugin
} from './src/components/button';

export {
    HmButtonGroup,
    ButtonGroupPlugin
} from './src/components/button-group';

export {
    HmCalendar,
    CalendarPlugin
} from './src/components/calendar';

export {
    HmCard,
    CardPlugin
} from './src/components/card';

export {
    HmCheckbox,
    HmCheckboxGroup,
    CheckboxPlugin
} from './src/components/checkbox';

export {
    HmCollapse,
    CollapsePlugin
} from './src/components/collapse';

export {
    HmDatepicker,
    DatepickerPlugin
} from './src/components/datepicker';

export {
    HmDropdown,
    HmDropdownItemButton,
    HmDropdownDivider,
    HmDropdownItem,
    DropdownPlugin
} from './src/components/dropdown';

export {
    HmFileInput,
    FileInputPlugin
} from './src/components/file-input';

export {
    FormPlugin,
    HmForm,
    HmFormDatalist,
    HmFormGroup,
    HmFormInvalidFeedback,
    HmFormText,
    HmFormValidFeedback
} from './src/components/form';

export {
    HmIcon,
    IconPlugin
} from './src/components/icon';

export {
    InputPlugin,
    HmInput
} from './src/components/input';

export {
    InputGroupPlugin,
    HmInputGroup,
    HmInputGroupAddon,
    HmInputGroupAppend,
    HmInputGroupPrepend,
    HmInputGroupText
} from './src/components/input-group';

export {
    ModalPlugin,
    HmModal
} from './src/components/modal';

export {
    NavPlugin,
    HmNav,
    HmNavItem,
    HmNavItemDropdown,
    HmNavText
} from './src/components/nav';

export {
    PopoverPlugin,
    HmPopover
} from './src/components/popover';

export {
    ProgressPlugin,
    HmProgress,
    HmProgressBar
} from './src/components/progress';

export {
    RadioPlugin,
    HmRadio,
    HmRadioGroup
} from './src/components/radio';

export {
    RangeSliderPlugin,
    HmRangeSlider
} from './src/components/range-slider';

export {
    SelectPlugin,
    HmSelect
} from './src/components/select';

export {
    SelectorPlugin,
    HmSelector,
    HmSelectorEl
} from './src/components/selector';

export {
    SpinButtonPlugin,
    HmSpinButton
} from './src/components/spin-button';

export {
    TablePlugin,
    TableLitePlugin,
    TableSimplePlugin,
    HmTable,
    HmTableLite,
    HmTableSimple,
    HmTbody,
    HmThead,
    HmTfoot,
    HmTr,
    HmTd,
    HmTh
} from './src/components/table';

export {
    TabsPlugin,
    HmTabs,
    HmTab
} from './src/components/tabs';

export {
    HmTextarea,
    TextareaPlugin
} from './src/components/textarea';

export {
    TipPlugin,
    HmTip
} from './src/components/tip';

export {
    ToasterPlugin,
    HmToaster
} from './src/components/toaster';

export {
    TooltipPlugin,
    HmTooltip
} from './src/components/tooltip';


export default HpmdUI;
