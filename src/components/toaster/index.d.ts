import { BvPlugin, BvComponent } from 'bootstrap-vue/src'

// Plugin
export declare const ToasterPlugin: BvPlugin

export interface HmfToasterMessage {
    autoClose?: boolean;
    content: string;
    headingIconName?: null | string;
    placement?: string;
    showProgressTimer?: boolean;
    showTime?: number;
    title?: null | string;
    variant?: string;
}

// Component: hm-toaster
export declare class HmToaster extends BvComponent {
    add: (message: HmfToasterMessage) => void
}

// Component: hm-notification
export declare class HmNotification extends BvComponent { }


