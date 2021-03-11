import * as tsx from 'vue-tsx-support';
import { HmSelect as HmSelectOriginal } from '.';

type SelectProps = {
    // multiselect mixin
    allowEmpty?: boolean;
    blockKeys?: string[];
    clearOnSelect?: boolean;
    closeOnSelect?: boolean;
    customLabel?: (value?: object | string | number) => string;
    groupLabel?: string;
    groupSelect?: boolean;
    groupValues?: string;
    hideSelected?: boolean;
    id?: number | string;
    internalSearch?: boolean;
    label?: string;
    max?: number;
    multiple?: boolean;
    options?: object[] | string[] | number[];
    optionsLimit?: number;
    placeholder?: string;
    preselectFirst?: boolean;
    preserveSearch?: boolean;
    resetAfter?: boolean;
    searchable?: boolean;
    taggable?: boolean;
    tagPlaceholder?: string;
    tagPosition?: 'top' | 'bottom';
    trackBy?: string;
    value?: object | string | number;

    // Multiselect
    deselectGroupLabel?: string;
    deselectLabel?: string;
    disabled?: boolean;
    limit?: number;
    limitText?: (count: number) => string;
    loading?: boolean;
    maxHeight?: number;
    name?: string;
    openDirection?: 'above' | 'top' | 'below' | 'bottom';
    selectGroupLabel?: string;
    selectLabel?: string;
    selectedLabel?: string;
    showLabels?: boolean;
    showNoResults?: boolean;
    tabindex?: number;

    // pointerMixin
    optionHeight?: number;
    showPointer?: boolean;
}

type SelectEvents = {
    onClose: (value?: SelectProps['value'], id?: SelectProps['id']) => void;
    onInput: (value?: SelectProps['value'], id?: SelectProps['id']) => void;
    onOpen: SelectProps['id'];
    onRemove: (removedOption?: object | string | number, id?: SelectProps['id']) => void;
    'onSearch-change': (searchQuery?: string, id?: SelectProps['id']) => void;
    onSelect: (selectedOption?: object | string | number, id?: SelectProps['id']) => void;
    onTag: (searchQuery?: string, id?: SelectProps['id']) => void;
}

type SelectScopedSlots = {
    caret?: {
        toggle: () => void;
    };
    clear?: {
        search: string;
    };
    option?: {
        option: object | string | number;
        search: string;
    };
    tag?: {
        option: object | string | number;
        remove: () => void;
        search: string;
    }
}

export const HmSelect = tsx.ofType<SelectProps, SelectEvents, SelectScopedSlots>().convert(HmSelectOriginal);
