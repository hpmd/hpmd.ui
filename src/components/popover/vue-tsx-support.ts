import { BvEvent } from 'bootstrap-vue';
import * as tsx from 'vue-tsx-support';
import { ElementBoundary, TipPlacement, TipTarget, TipTrigger } from '../../types/tsx-common';
import { HmPopover as HmPopoverOriginal } from '.';


type PopoverProps = {
    boundary?: ElementBoundary;
    boundaryPadding?: number | string;
    container?: HTMLElement | object | string;
    content?: string | null;
    customClass?: string;
    delay?: number | { show: number, hide: number };
    disabled?: boolean;
    fallbackPlacement?: 'flip' | 'clockwise' | 'counterclockwise';
    id?: string;
    noFade?: boolean;
    nonInteractive?: boolean;
    offset?: number | string;
    placement?: TipPlacement;
    show?: boolean;
    target: TipTarget;
    title?: string;
    triggers?: TipTrigger | TipTrigger[] | string;
    variant?: string;
}

type PopoverEvents = {
    // bv::popover::disabled
    // bv::popover::enabled
    // bv::popover::hidden
    // bv::popover::hide
    // bv::popover::show
    // bv::popover::shown
    onDisabled?: BvEvent;
    onEnabled?: BvEvent;
    onHidden?: BvEvent;
    onHide?: BvEvent;
    onShow?: BvEvent;
    onShown?: BvEvent;
}

export const HmPopover = tsx.ofType<PopoverProps, PopoverEvents>().convert(HmPopoverOriginal);
