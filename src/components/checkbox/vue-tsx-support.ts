import * as tsx from 'vue-tsx-support';
import {
    HmCheckbox as HmCheckboxOriginal,
    HmCheckboxGroup as HmCheckboxGroupOriginal
} from '.';


type CheckboxProps = {
    ariaLabel?: string;
    ariaLabelledby?: string;
    autofocus?: boolean;
    button?: boolean;
    buttonVariant?: string;
    checked?: any | any[];
    disabled?: boolean;
    form?: string;
    id?: string;
    indeterminate?: boolean;
    inline?: boolean;
    name?: string;
    plain?: boolean;
    required?: boolean;
    size?: string;
    state?: boolean | null;
    switch?: boolean;
    uncheckedValue?: any;
    value?: any;
}


type CheckboxEvents = {
    onChange: any | any[];
    onInput: any | any[];
}

export const HmCheckbox = tsx.ofType<CheckboxProps, CheckboxEvents>().convert(HmCheckboxOriginal);



type CheckboxGroupProps = {
    ariaInvalid?: boolean | string;
    autofocus?: boolean;
    buttonVariant?: string;
    buttons?: boolean;
    checked?: any[]; // v-model
    disabled?: boolean;
    disabledField?: string;
    form?: string;
    htmlField?: string;
    id?: string;
    name?: string;
    options: any[] | object;
    plain?: boolean;
    required?: boolean;
    size?: string;
    stacked?: boolean;
    state?: boolean | null;
    switches?: boolean;
    textField?: string;
    validated?: boolean;
    valueField?: string;
}

type CheckboxGroupEvents = {
    onChange: any[];
    onInput: any[];
}

export const HmCheckboxGroup = tsx.ofType<CheckboxGroupProps, CheckboxGroupEvents>().convert(HmCheckboxGroupOriginal);
