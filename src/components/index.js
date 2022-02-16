import { pluginFactory } from 'bootstrap-vue/src/utils/plugins';

import { AlertPlugin } from './alert';
import { AvatarPlugin } from './avatar';
import { BadgePlugin } from './badge';
import { ButtonPlugin } from './button';
import { ButtonGroupPlugin } from './button-group';
import { CalendarPlugin } from './calendar';
import { CardPlugin } from './card';
import { CheckboxPlugin } from './checkbox';
import { CollapsePlugin } from './collapse';
import { DatepickerPlugin } from './datepicker';
import { DropdownPlugin } from './dropdown';
import { FileInputPlugin } from './file-input';
import { FormPlugin } from './form';
import { IconPlugin } from './icon';
import { InputPlugin } from './input';
import { InputGroupPlugin } from './input-group';
import { ModalPlugin } from './modal';
import { NavPlugin } from './nav';
import { PopoverPlugin } from './popover';
import { ProgressPlugin } from './progress';
import { RadioPlugin } from './radio';
import { RangeSliderPlugin } from './range-slider';
import { SelectPlugin } from './select';
import { SpinButtonPlugin } from './spin-button';
import { SelectorPlugin } from './selector';
import { TablePlugin } from './table';
import { TabsPlugin } from './tabs';
import { TextareaPlugin } from './textarea';
import { TipPlugin } from './tip';
import { ToasterPlugin } from './toaster';
import { TooltipPlugin } from './tooltip';



const componentsPlugin = pluginFactory({
    plugins: {
        AlertPlugin,
        AvatarPlugin,
        BadgePlugin,
        ButtonPlugin,
        ButtonGroupPlugin,
        CalendarPlugin,
        CardPlugin,
        CheckboxPlugin,
        CollapsePlugin,
        DatepickerPlugin,
        DropdownPlugin,
        FileInputPlugin,
        FormPlugin,
        IconPlugin,
        InputPlugin,
        InputGroupPlugin,
        SpinButtonPlugin,
        ModalPlugin,
        NavPlugin,
        PopoverPlugin,
        ProgressPlugin,
        RadioPlugin,
        RangeSliderPlugin,
        SelectPlugin,
        SelectorPlugin,
        TablePlugin,
        TabsPlugin,
        TextareaPlugin,
        TipPlugin,
        ToasterPlugin,
        TooltipPlugin
    }
});

export default componentsPlugin;
