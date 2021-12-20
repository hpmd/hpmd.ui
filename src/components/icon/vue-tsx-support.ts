import * as tsx from 'vue-tsx-support';
import { HmIcon as HmIconOriginal } from '.';

type IconProps = {
    fill?: string;
    name: string;
}

export const HmIcon = tsx.ofType<IconProps>().extendFrom(HmIconOriginal);
