import * as tsx from 'vue-tsx-support';
import { HmAlert as HmAlertOriginal } from '.';

type HmAlertProps = {
    dismissLabel?: string;
    dismissible?: boolean;
    fade?: boolean;
    show?: boolean | number | string;
    variant?: string;
}

type HmAlertEvents = {
    onDismissCountDown: number;
    onDismissed: void;
    onInput: boolean | number;
}

export const HmAlert = tsx.ofType<HmAlertProps, HmAlertEvents>().convert(HmAlertOriginal);
