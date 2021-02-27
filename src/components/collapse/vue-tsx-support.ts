import * as tsx from 'vue-tsx-support';
import { HmCollapse as HmCollapseOriginal } from '.';

type CollapseProps = {
    // bootstrap-vue
    accordion?: string;
    appear?: boolean;
    id?: string;
    isNav?: boolean;
    tag?: string;
    visible?: boolean; // v-model
    // custom
    buttonText?: string;
}

type CollapseEvents = {
    // bv::collapse::state
    onHidden: void;
    onHide: void;
    onInput: boolean;
    onShow: void;
    onShown: void;
}

type CollapseScopedSlots = {
    default: {
        close: () => void,
        visible: boolean
    };
}

export const HmCollapse = tsx.ofType<CollapseProps, CollapseEvents, CollapseScopedSlots>().convert(HmCollapseOriginal);
