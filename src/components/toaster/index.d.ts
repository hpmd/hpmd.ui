import { VNode } from 'vue';
import { BvPlugin, BvComponent } from 'bootstrap-vue/src';

// Plugin
export declare const ToasterPlugin: BvPlugin

export interface HmfToasterMessage {
    autoClose?: boolean;
    content: VNode | VNode[] | string;
    headingIconName?: null | string;
    placement?: string;
    showProgressTimer?: boolean;
    showTime?: number;
    title?: null | string;
    variant?: string;
}

type addFn = (message: HmfToasterMessage) => void;

// Component: hm-toaster
export declare class HmToaster extends BvComponent {
    static add: addFn
}

// Component: hm-notification
export declare class HmNotification extends BvComponent { }

declare module 'vue/types/vue' {
    interface Vue {
        $hmToaster: {
            add: addFn
        }
    }
}
