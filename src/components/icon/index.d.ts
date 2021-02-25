//
// Icon
//
import { BvPlugin, BvComponent } from 'bootstrap-vue/src'

// Plugin
export declare const IconPlugin: BvPlugin

// Icon class
export declare interface HmIconEl {
    content: string;
    height: number;
    name: string;
    width: number;

    // reserved
    iconset?: string;
}

type addFn = (...icons: HmIconEl[]) => void;

// Component: hm-icon
export declare class HmIcon extends BvComponent {
    static add: addFn;
}

declare module 'vue/types/vue' {
    interface Vue {
        readonly $hmIcon: {
            add: addFn;
        }
    }
}
