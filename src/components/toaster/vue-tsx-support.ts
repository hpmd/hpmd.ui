import * as tsx from 'vue-tsx-support';
import { VNode } from 'vue/types/umd';
import {
    HmToaster as HmToasterOriginal,
    HmNotification as HmNotificationOriginal
} from '.';
import { HmIconEl } from '../icon';


type ToasterProps = {
    defaultPlacement?: 'topleft' | 'topcenter' | 'topright' | 'bottomleft' | 'bottomcenter' | 'bottomright';
}

export const HmToaster = tsx.ofType<ToasterProps>().convert(HmToasterOriginal);


type NotificationProps = {
    autoClose?: boolean;
    content?: VNode | VNode[] | string;
    headingIconName?: HmIconEl['name'];
    id: string;
    isPaused?: boolean;
    placement?: ToasterProps['defaultPlacement'];
    showProgressTimer?: boolean;
    timeShow?: number;
    title?: string;
    variant?: string;
}

type NotificationEvents = {
    onClose: { id: number, placement: ToasterProps['defaultPlacement'] }
}

export const HmNotification = tsx.ofType<NotificationProps, NotificationEvents>().convert(HmNotificationOriginal);