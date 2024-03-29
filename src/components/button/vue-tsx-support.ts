import * as tsx from 'vue-tsx-support';
import { RawLocation } from 'vue-router';
import {
    HmButton as HmButtonOriginal,
    HmButtonClose as HmButtonCloseOriginal
} from '.';

type ButtonProps = {
    active?: boolean;
    activeClass?: string;
    append?: boolean;
    block?: boolean;
    disabled?: boolean;
    exact?: boolean;
    exactActiveClass?: string;
    href?: string;
    noPrefetch?: boolean;
    pill?: boolean;
    prefetch?: boolean;
    pressed?: boolean;
    rel?: string;
    replace?: boolean;
    routerComponentName?: string;
    size?: string;
    squared?: boolean;
    tag?: string;
    target?: HTMLAnchorElement['target'];
    to?: RawLocation;
    type?: HTMLButtonElement['type'];
    variant?: string;
};

type ButtonEvents = {
    onClick: MouseEvent;
}

const HmBtn = tsx.ofType<ButtonProps, ButtonEvents>().convert(HmButtonOriginal);

const HmButton = HmBtn;


type ButtonCloseProps = {
    ariaLabel?: string;
    content?: string;
    disabled?: boolean;
    textVariant?: string;
}

const HmBtnClose = tsx.ofType<ButtonCloseProps, ButtonEvents>().convert(HmButtonCloseOriginal);

const HmButtonClose = HmBtnClose;


export {
    HmBtn,
    HmButton,
    HmBtnClose,
    HmButtonClose
};
