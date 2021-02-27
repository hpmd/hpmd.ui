import * as tsx from 'vue-tsx-support';
import {
    HmRadio as HmRadioOriginal,
    HmRadioGroup as HmRadioGroupOriginal
} from '.';
import { CheckboxRadioGroupCommonProps } from '../../types/tsx-common';


type RadioProps = CheckboxRadioGroupCommonProps & { checked?: any };

type RadioEvents = {
    onChange: any;
    onInput: any;
}

export const HmRadio = tsx.ofType<RadioProps, RadioEvents>().convert(HmRadioOriginal);


type RadioGroupProps = CheckboxRadioGroupCommonProps & {
    checked?: any;
}

export const HmRadioGroup = tsx.ofType<RadioGroupProps, RadioEvents>().convert(HmRadioGroupOriginal);
