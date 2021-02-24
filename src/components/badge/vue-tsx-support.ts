import * as tsx from 'vue-tsx-support';
import { HmBadge as HmBadgeOriginal } from '.';

type HmBadgeProps = {
    active?: boolean;
    activeClass?: string;
    append?: boolean;
    disabled?: boolean;
    exact?: boolean;
    exactActiveClass?: string;
    href?: string;
    noPrefetch?: boolean;
    pill?: boolean;
    prefetch?: boolean;
    rel?: string;
    replace?: boolean;
    routerComponentName?: string;
    tag?: string;
    target?: string;
    to?: Location | string;
    variant?: string;
}

export const HmBadge = tsx.ofType<HmBadgeProps>().convert(HmBadgeOriginal);
