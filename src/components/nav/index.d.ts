//
// Nav
//
import { BvPlugin, BvComponent } from 'bootstrap-vue/src'

// Plugin
export declare const NavPlugin: BvPlugin

// Component: hm-nav
export declare class HmNav extends BvComponent { }

// Component: hm-nav-item
export declare class HmNavItem extends BvComponent { }

// Component: hm-nav-item-dropdown
export declare class HmNavItemDropdown extends BvComponent {
    // Public methods
    show: () => void
    hide: (refocus?: boolean) => void
}

// Component: hm-nav-text
export declare class HmNavText extends BvComponent { }
