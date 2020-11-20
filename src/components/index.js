import { pluginFactory } from 'bootstrap-vue/src/utils/plugins';

import { HmAlertPlugin } from './alert';
import { HmAvatarPlugn } from './avatar';
import { HmBadgePlugin } from './badge';
import { HmButtonPlugin } from './button';
import { HmButtonGroupPlugin } from './button-group';
import { HmDropdownPlugin } from './dropdown';
import { HmIconPlugin } from './icon';
import { HmInputPlugin } from './input';
import { HmInputGroupPlugin } from './input-group';
import { HmModalPlugin } from './modal';
import { HmNavPlugin } from './nav';
import { HmPopoverPlugin } from './popover';
import { HmProgressPlugin } from './progress';
import { HmRadioPlugin } from './radio';
import { HmRangeSliderPlugin } from './range-slider';
import { HmSelectPlugin } from './select';
import { HmSelectorPlugin } from './selector';
import { HmTablePlugin } from './table';
import { HmTextTipPlugin } from './tip';



const componentsPlugin = pluginFactory({
    plugins: {
        HmAlertPlugin,
        HmAvatarPlugn,
        HmBadgePlugin,
        HmButtonPlugin,
        HmButtonGroupPlugin,
        HmDropdownPlugin,
        HmIconPlugin,
        HmInputPlugin,
        HmInputGroupPlugin,
        HmModalPlugin,
        HmNavPlugin,
        HmPopoverPlugin,
        HmProgressPlugin,
        HmRadioPlugin,
        HmRangeSliderPlugin,
        HmSelectPlugin,
        HmSelectorPlugin,
        HmTablePlugin
    }
});

export default componentsPlugin;