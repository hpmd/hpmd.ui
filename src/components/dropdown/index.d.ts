//
// Dropdown
//
import { BvPlugin, BvComponent } from 'bootstrap-vue/src'

// Plugin
export declare const DropdownPlugin: BvPlugin

// Component: hm-dropdown
export declare class HmDropdown extends BvComponent {
    // Public methods
    show: () => void
    hide: (refocus?: boolean) => void
}

// Component: hm-dropdown-item
export declare class HmDropdownItem extends BvComponent {}
// Component: hm-dropdown-item-button
export declare class HmDropdownItemButton extends BvComponent { }
// Component: hm-dropdown-divider
export declare class HmDropdownDivider extends BvComponent {}
