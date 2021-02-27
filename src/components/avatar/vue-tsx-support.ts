import * as tsx from 'vue-tsx-support';
import { HmAvatar as HmAvatarOriginal } from '.';

type HmAvatarProps = {
    size?: string;
    src?: string;
    variant?: string;
}

type HmAvatarEvents = {
    onImageLoadError: Event;
}

export const HmAvatar = tsx.ofType<HmAvatarProps, HmAvatarEvents>().convert(HmAvatarOriginal);
