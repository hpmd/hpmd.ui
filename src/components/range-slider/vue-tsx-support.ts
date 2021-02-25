import * as tsx from 'vue-tsx-support';
import {
    Direction,
    DotOption,
    DotStyle,
    MarksProp,
    Position,
    ProcessProp,
    TooltipFormatterFunc,
    TooltipProp,
    TooltipStyle
} from 'vue-slider-component/typings/typings';
import { HmRangeSlider as HmRangeSliderOriginal } from '.';

type Value = number | string | number[] | string[];
// @Param {index} Index of the active slider
// @Return New index
type HandleFunction = (index: number) => number;

type RangeSliderProps = {
    absorb?: boolean;
    clickable?: boolean;
    contained?: boolean;
    data?: number[] | string[] | object[] | object;
    dataLabel?: string;
    dataValue?: string;
    direction?: Direction;
    disabled?: boolean;
    dotAttrs?: object;
    dotOptions?: DotOption | DotOption[];
    dotSize?: number | [number, number];
    dotStyle?: DotStyle | null;
    dragOnClick?: boolean;
    duration?: number;
    enableCross?: boolean;
    fixed?: boolean;
    height?: number | string;
    included?: boolean;
    interval?: number;
    keydownHook?: (e: KeyboardEvent) => HandleFunction | boolean;
    labelActiveStyle?: object | null;
    labelStyle?: object | null;
    lazy?: boolean;
    marks?: MarksProp;
    max?: number;
    maxRange?: number;
    min?: number;
    minRange?: number;
    order?: boolean;
    process?: ProcessProp;
    processStyle?: object | null;
    railStyle?: object | null;
    silent?: boolean;
    stepActiveStyle?: object | null;
    stepStyle?: object | null;
    tooltip?: TooltipProp;
    tooltipPlacement?: Position | Position[];
    tooltipFormatter?: TooltipFormatterFunc | TooltipFormatterFunc[];
    tooltipStyle?: TooltipStyle | null;
    useKeyboard?: boolean;
    value?: Value; // string is dependant on data prop value
    width?: number | string;
    zoom?: number;
}


enum SLIDER_ERROR_TYPE {
    VALUE = 1, // Value is illegal
    INTERVAL = 2, // `interval` cannot be divisible by `(max - min)`
    MIN, // Value is less than min
    MAX, // Value is greater than max
    ORDER, // When `order` is false, `minRange/maxRange/enableCross/fixed` is still set
}

type ChangeCallback = (value: Value, index: number) => void;

type RangeSliderEvents = {
    onChange?: ChangeCallback;
    onDragging?: ChangeCallback;
    onDragEnd?: number;
    onDragStart?: number;
    onError?: (type: SLIDER_ERROR_TYPE, message: string) => void;
}

type DotTooltipScope = {
    disabled: boolean;
    focus: boolean;
    index: number;
    pos: number;
    value: number | string;
};
type LabelStepMarkScope = {
    active: boolean;
    label: number | string;
    pos: number;
    value: number | string;
}

type RangeSliderScopedSlots = {
    default: { value: Value };
    dot: DotTooltipScope;
    label: LabelStepMarkScope;
    mark: LabelStepMarkScope;
    process: {
        end: number;
        index: number;
        start: number;
        style: object;
    };
    step: LabelStepMarkScope;
    tooltip: DotTooltipScope;
}

export const HmRangeSlider = tsx.ofType<RangeSliderProps, RangeSliderEvents, RangeSliderScopedSlots>().convert(HmRangeSliderOriginal);
