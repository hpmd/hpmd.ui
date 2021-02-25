import IMask from 'imask';
import * as tsx from 'vue-tsx-support';
import { HmInput as HmInputOriginal } from '.';

type InputProps = {
    // bootstrap vue
    ariaInvalid?: boolean | 'grammar' | 'spelling';
    autocomplete?: string;
    autofocus?: boolean;
    debounce?: number | string;
    disabled?: boolean;
    form?: string;
    formatter?: (rawValue?: string, event?: Event | UIEvent) => string;
    id?: string;
    lazy?: boolean;
    lazyFormatter?: boolean;
    list?: string;
    max?: number | string;
    min?: number | string;
    name?: string;
    noWheel?: boolean;
    number?: boolean;
    placeholder?: string;
    plaintext?: boolean; // todo
    readonly?: boolean;
    required?: boolean;
    size?: string;
    step?: number | string;
    trim?: boolean;
    type?: HTMLInputElement['type'];
    value?: string | number;

    // custom
    label?: string;
    mask?: IMask.AnyMaskedOptions;
    showClearBtn?: boolean;
    showPasswordBtn?: boolean;
}

type InputEvents = {
    // bootstrap-vue
    onBlur?: FocusEvent;
    onChange?: string | number;
    onInput?: string | number;
    onUpdate?: string; // on formatted

    // custom
    onAccept?: CustomEvent;
    onComplete?: CustomEvent;
    onInputRaw?: string;
}

export const HmInput = tsx.ofType<InputProps, InputEvents>().convert(HmInputOriginal);
