import * as tsx from 'vue-tsx-support';
import { HmSpinButton as HmSpinButtonOriginal } from '.';

type SpinButtonProps = {
    ariaControls?: string;
    ariaLabel?: string;
    disabled?: boolean;
    form?: string;
    formatterFn?: (value?: number) => string | number;
    id?: string;
    inline?: boolean;
    labelDecrement?: string;
    labelIncrement?: string;
    locale?: string | string[];
    max?: number | string;
    min?: number | string;
    name?: string;
    placeholder?: string;
    readonly?: boolean;
    repeatDelay?: number | string;
    repeatInterval?: number | string;
    repeatStepMultiplier?: number | string;
    repeatThreshold?: number | string;
    size?: string;
    state?: boolean | null;
    step?: number | string;
    value?: number | boolean; // v-model
    vertical?: boolean;
    wrap?: boolean;
}

type SpinButtonEvents = {
    onChange: SpinButtonProps['value'];
    onInput: SpinButtonProps['value'];
}

type SpinButtonScopedSlots = {
    decrement: { hasFocus: boolean };
    increment: { hasFocus: boolean };
}

export const HmSpinButton = tsx.ofType<SpinButtonProps, SpinButtonEvents, SpinButtonScopedSlots>().convert(HmSpinButtonOriginal);
