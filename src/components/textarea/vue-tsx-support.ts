import * as tsx from 'vue-tsx-support';
import { HmTextarea as HmTextareaOriginal } from './';



type TextareaProps = {
    ariaInvalid?: boolean | string;
    autocomplete?: string;
    autofocus?: boolean;
    debounce?: number | string;
    disabled?: boolean;
    form?: string;
    formatter?: (value: string) => string;
    id?: string;
    lazy?: boolean;
    maxRows?: number | string;
    name?: string;
    noAutoShrink?: boolean;
    noResize?: boolean;
    number?: boolean;
    placeholder?: string;
    plaintext?: boolean;
    readonly?: boolean;
    required?: boolean;
    rows?: number | string;
    size?: 'sm' | 'md' | 'lg' | string;
    state?: boolean | null;
    trim?: boolean;
    wrap?: string;
};

type TextareaEvents = {
    onBlur: FocusEvent;
    onChange: string | number;
    onInput: string | number;
    onUpdate: string;
}


export const HmTextarea = tsx.ofType<TextareaProps, TextareaEvents>().convert(HmTextareaOriginal);
