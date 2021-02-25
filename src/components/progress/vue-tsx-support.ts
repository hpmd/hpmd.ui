import * as tsx from 'vue-tsx-support';
import {
    HmProgress as HmProgressOriginal,
    HmProgressBar as HmProgressBarOriginal
} from '.';


type ProgressBase = {
    animated?: boolean;
    max?: number | string;
    precision?: number | string;
    showProgress?: boolean;
    showValue?: boolean;
    striped?: boolean;
    value?: number | string;
    variant?: string;
}

type ProgressProps = ProgressBase & { height?: string; }

export const HmProgress = tsx.ofType<ProgressProps>().convert(HmProgressOriginal);


type ProgressBarProps = ProgressBase & {
    label?: string;
    labelHtml?: string;
}

export const HmProgressBar = tsx.ofType<ProgressBarProps>().convert(HmProgressBarOriginal);
