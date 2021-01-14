//
// Tabs
//
import { BvPlugin, BvComponent } from 'bootstrap-vue/src'

// Plugin
export declare const TabsPlugin: BvPlugin

// Component: hm-tabs
export declare class HmTabs extends BvComponent { }

// Component: hm-tab
export declare class HmTab extends BvComponent {
    activate: () => boolean
    deactivate: () => boolean
}
