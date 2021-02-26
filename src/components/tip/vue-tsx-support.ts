import * as tsx from 'vue-tsx-support';
import { HmIconEl } from '../icon';
import { HmTip as HmTipOriginal } from '.';
import { TipPlacement, TipTrigger } from '../../types/tsx-common';


type TipProps = {
    iconName?: HmIconEl['name'];
    iconPosition?: 'start'| 'end' | 'center';
    iconVariant?: string;
    inText?: boolean;
    tip?: string;
    tooltipPlacement?: TipPlacement;
    tooltipVariant?: string;
    triggers?: TipTrigger | TipTrigger[] | string;
}

export const HmTip = tsx.ofType<TipProps>().convert(HmTipOriginal);
