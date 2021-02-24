import * as tsx from 'vue-tsx-support';
import { HmButtonGroup as HmButtonGroupOriginal } from '.';

type ButtonGroupProps = {
    ariaRole?: string;
    size?: string;
    tag?: string;
    vertical?: boolean;
}

export const HmButtonGroup = tsx.ofType<ButtonGroupProps>().convert(HmButtonGroupOriginal);
