import * as tsx from 'vue-tsx-support';
import { BvEvent } from 'bootstrap-vue';
import { RawLocation } from 'vue-router';
import { PopperOptions } from 'popper.js';
import { ElementBoundary, TextAlign, VueCssClass } from '../../types/tsx-common';
import {
    HmNav as HmNavOriginal,
    HmNavItem as HmNavItemOriginal,
    HmNavItemDropdown as HmNavItemDropdownOriginal,
    HmNavText as HmNavTextOriginal
} from '.';


type NavAlign = 'start' | 'center'| 'end';

type NavProps = {
    align?: TextAlign & NavAlign;
    cardHeader?: boolean;
    fill?: boolean;
    justified?: boolean;
    pills?: boolean;
    small?: boolean;
    tabs?: boolean;
    tag?: string;
    vertical?: boolean;
}

export const HmNav = tsx.ofType<NavProps>().convert(HmNavOriginal);


type NavItemProps = {
    active?: boolean;
    activeClass?: string;
    append?: boolean;
    disabled?: boolean;
    exact?: boolean;
    exactActiveClass?: string;
    href?: string;
    linkAttrs?: object;
    linkClasses?: VueCssClass;
    noPrefetch?: boolean;
    prefetch?: boolean | null;
    rel?: string | null;
    replace?: boolean;
    routerComponentName?: string;
    target?: HTMLAnchorElement['target'];
    to?: RawLocation;
}

export const HmNavItem = tsx.ofType<NavItemProps>().convert(HmNavItemOriginal);


type NavItemDropdownProps = {
    boundary?: ElementBoundary;
    disabled?: boolean;
    dropleft?: boolean;
    dropright?: boolean;
    dropup?: boolean;
    html?: string;
    id?: string;
    lazy?: boolean;
    menuClass?: VueCssClass;
    noCaret?: boolean;
    noFlip?: boolean;
    offset?: number | string;
    popperOpts?: PopperOptions;
    right?: boolean;
    role?: string;
    text?: string;
    toggleClass?: VueCssClass;
}

type NavItemDropdownEvents = {
    onHidden?: void;
    onHide?: BvEvent;
    onShow?: BvEvent;
    onShown?: void;
    onToggle?: void;
}

type NavItemDropdownScopedSlots = {
    default: {
        hide: () => void;
    }
}

export const HmNavItemDropdown = tsx.ofType<NavItemDropdownProps, NavItemDropdownProps, NavItemDropdownScopedSlots>().convert(HmNavItemDropdownOriginal);


export const HmNavText = tsx.ofType<{}>().convert(HmNavTextOriginal);
