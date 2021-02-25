import * as tsx from 'vue-tsx-support';
import { CheckboxRadioCommonProps, CheckboxRadioGroupCommonProps } from '../../types/tsx-common';
import {
    HmCheckbox as HmCheckboxOriginal,
    HmCheckboxGroup as HmCheckboxGroupOriginal
} from '.';


type CheckboxProps = CheckboxRadioCommonProps & {
    indeterminate?: boolean;
    switch?: boolean;
    uncheckedValue?: any;
}


type CheckboxEvents = {
    onChange: any | any[];
    onInput: any | any[];
}

export const HmCheckbox = tsx.ofType<CheckboxProps, CheckboxEvents>().convert(HmCheckboxOriginal);


type CheckboxGroupProps = CheckboxRadioGroupCommonProps & {
    checked?: any;
    switches?: boolean;
}

type CheckboxGroupEvents = {
    onChange: any[];
    onInput: any[];
}

export const HmCheckboxGroup = tsx.ofType<CheckboxGroupProps, CheckboxGroupEvents>().convert(HmCheckboxGroupOriginal);
