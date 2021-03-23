import { BvEvent } from 'bootstrap-vue';
import Vue from 'vue';
import * as tsx from 'vue-tsx-support';
import { HmTooltip as HmTooltipOriginal } from '.';
import { ElementBoundary, TipPlacement, TipTarget, TipTrigger } from '../../types/tsx-common';


type TooltipProps = {
    boundary?: ElementBoundary;
    boundaryPadding?: number | string;
    container?: HTMLElement | Vue | string;
    customClass?: string;
    delay?: number | string | { show: number, hide: number };
    disabled?: boolean;
    fallbackPlacement?: 'flip' | 'clockwise' | 'counterclockwise';
    id?: string;
    noFade?: boolean;
    noninteractive?: boolean;
    offset?: number | string;
    placement?: TipPlacement;
    show?: boolean;
    target?: TipTarget;
    title?: string;
    triggers?: TipTrigger | TipTrigger[] | string;
    variant?: string;
}

type TooltipEvents = {
    // bv:: tooltip:: disabled	
    // bv:: tooltip:: enabled
    // bv:: tooltip:: hidden
    // bv:: tooltip:: hide
    // bv:: tooltip:: show
    // bv:: tooltip:: shown

    onDisabled: BvEvent;
    onEnabled: BvEvent;
    onHidden: BvEvent;
    onHide: BvEvent;
    onShow: BvEvent;
    onShown: BvEvent;
}

export const HmTooltip = tsx.ofType<TooltipProps, TooltipEvents>().convert(HmTooltipOriginal);
