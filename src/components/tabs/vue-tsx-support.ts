import { BvEvent } from 'bootstrap-vue';
import * as tsx from 'vue-tsx-support';
import { TextAlign, VueCssClass } from '../../types/tsx-common';
import {
    HmTabs as HmTabsOriginal,
    HmTab as HmTabOriginal
} from '.';
import { LinkHTMLAttributes } from 'vue-tsx-support/types/dom';


type TabsProps = {
    activeNavItemClass?: VueCssClass;
    activeTabClass?: VueCssClass;
    align?: TextAlign | 'start' | 'end';
    card?: boolean; // deprecated
    contentClass?: VueCssClass;
    end?: boolean;
    fill?: boolean;
    id?: string;
    justified?: boolean;
    lazy?: boolean;
    navClass?: VueCssClass;
    navWrapperClass?: VueCssClass;
    noFade?: boolean;
    noKeyNav?: boolean;
    noNavStyle?: boolean;
    pills?: boolean;
    small?: boolean;
    tag?: string;
    value?: number;
    vertical?: boolean;
}

type TabsEvents = {
    'onActivate-tab': {
        newTabIndex: number;
        prevTabIndex: number;
        bvEvent: BvEvent;
    }

    onChanged: {
        currentTabs: typeof HmTab[];
        previousTabs: typeof HmTab[];
    }

    onInput: number;
}

export const HmTabs = tsx.ofType<TabsProps, TabsEvents>().convert(HmTabsOriginal);


type TabProps = {
    active?: boolean;
    buttonId?: string;
    disabled?: boolean;
    id?: string;
    lazy?: boolean;
    noBody?: boolean;
    tag?: string;
    title?: string;
    titleItemClass?: VueCssClass;
    titleLinkAttributes?: { [key in keyof LinkHTMLAttributes]: string | number | boolean };
    titleLinkClass?: VueCssClass;
}

type TabEvents = {
    onClick: UIEvent | Event;
}

export const HmTab = tsx.ofType<TabProps, TabEvents>().convert(HmTabOriginal);
