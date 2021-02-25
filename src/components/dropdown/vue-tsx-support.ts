import * as tsx from 'vue-tsx-support';
import { BvEvent } from 'bootstrap-vue';
import { PopperOptions } from 'popper.js';
import { RawLocation } from 'vue-router';
import { ElementBoundary, VueCssClass } from '../../types/tsx-common';
import {
    HmDropdown as HmDropdownOriginal,
    HmDropdownItem as HmDropdownItemOriginal,
    HmDropdownItemButton as HmDropdownItemButtonOriginal,
    HmDropdownItemDivider as HmDropdownItemDividerOriginal
} from '.';



type DropdownProps = {
    block?: boolean;
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
    size?: string;
    split?: boolean;
    splitButtonType?: HTMLButtonElement['type'];
    splitClass?: VueCssClass;
    splitHref?: string;
    splitTo?: RawLocation;
    splitVariant?: string;
    text?: string;
    toggleClass?: VueCssClass;
    toggleTag?: string;
    toggleText?: string;
    variant?: string;
}

type DropdownEvents = {
    // bv::dropdown::hide
    // bv::dropdown::show
    onClick?: Event;
    onHidden?: void;
    onHide?: BvEvent;
    onShow?: BvEvent;
    onShown?: void;
    onToggle?: void; // rly? todo
}

type DropdownScopedSlots = {
    default: {
        hide: (refocus?: boolean) => void
    }
}

export const HmDropdown = tsx.ofType<DropdownProps, DropdownEvents, DropdownScopedSlots>().convert(HmDropdownOriginal);


type HmDropdownItemProps = {
    active?: boolean;
    activeClass?: string;
    append?: boolean;
    disabled?: boolean;
    exact?: boolean;
    exactActiveClass?: string;
    href?: string;
    linkClass?: VueCssClass;
    noPrefetch?: boolean;
    prefetch?: boolean | null;
    rel?: string | null;
    replace?: boolean;
    routerComponentName?: string;
    target?: HTMLAnchorElement['target'];
    to?: RawLocation;
    variant?: string;
}

type HmDropdownItemEvents = {
    onClick?: MouseEvent;
}

export const HmDropdownItem = tsx.ofType<HmDropdownItemProps, HmDropdownItemEvents>().convert(HmDropdownItemOriginal);


type HmDropdownItemButtonProps = {
    active?: boolean;
    activeClass?: string;
    buttonClass?: VueCssClass;
    disabled?: boolean;
    variant?: string;
}

export const HmDropdownItemButton = tsx.ofType<HmDropdownItemButtonProps, HmDropdownItemEvents>().convert(HmDropdownItemButtonOriginal);


type HmDropdownItemDividerProps = {
    tag?: string;
}

export const HmDropdownItemDivider = tsx.ofType<HmDropdownItemDividerProps>().convert(HmDropdownItemDividerOriginal);
