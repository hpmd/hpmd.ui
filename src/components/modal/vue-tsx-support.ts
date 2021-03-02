import * as tsx from 'vue-tsx-support';
import { VueCssClass } from '../../types/tsx-common';
import { BvModalEvent, HmModal as HmModalOriginal } from '.';


type ModalProps = {
    ariaLabel?: string;
    autoFocusButton?: 'ok' | 'cancel' | 'close' | null;
    bodyBgVariant?: string;
    bodyClass?: VueCssClass;
    bodyTextVariant?: string;
    busy?: boolean;
    buttonSize?: string;
    cancelDisabled?: boolean;
    cancelTitle?: string;
    cancelTitleHtml?: string;
    cancelVariant?: string;
    centered?: boolean;
    contentClass?: VueCssClass;
    dialogClass?: VueCssClass;
    footerBgVariant?: string;
    footerBorderVariant?: string;
    footerClass?: VueCssClass;
    footerTextVariant?: string;
    headerBgVariant?: string;
    headerBorderVariant?: string;
    headerClass?: VueCssClass;
    headerCloseContent?: string;
    headerCloseLabel?: string;
    headerCloseVariant?: string;
    headerTextVariant?: string;
    hideBackdrop?: boolean;
    hideFooter?: boolean;
    hideHeader?: boolean;
    hideHeaderClose?: boolean;
    id?: string;
    ignoreEnforceFocusSelector?: string | string[];
    lazy?: boolean;
    modalClass: VueCssClass;
    noCloseOnBackdrop?: boolean;
    noCloseOnEsc?: boolean;
    noEnforceFocus?: boolean;
    noFade?: boolean;
    noStacking?: boolean;
    okDisabled?: boolean;
    okOnly?: boolean;
    okTitle?: string;
    okTitleHtml?: string;
    okVariant?: string;
    returnFocus?: HTMLElement | object | string;
    scrollable?: boolean;
    size?: string;
    static?: boolean;
    title?: string;
    titleClass?: VueCssClass;
    titleHtml?: string;
    titleSrOnly?: boolean;
    titleTag?: string;
    visible?: boolean; // v-model
}

type ModalEvents = {
    // bv::modal::hidden
    // bv::modal::hide
    // bv::modal::show
    // bv::modal::shown
    onCancel: BvModalEvent;
    onChange: boolean;
    onClose: BvModalEvent;
    onHidden: BvModalEvent;
    onHide: BvModalEvent;
    onOk: BvModalEvent;
    onShow: BvModalEvent;
    onShown: BvModalEvent;
}

type ModalSlotData = {
    cancel: () => void;
    close: () => void;
    hide: (trigger?: string) => void;
    ok: () => void;
    visible: boolean;
}

type ModalScopedSlots = {
    default?: ModalSlotData;
    'modal-footer'?: ModalSlotData;
    'modal-header'?: ModalSlotData;
    'modal-title'?: ModalSlotData;
}

export const HmModal = tsx.ofType<ModalProps, ModalEvents, ModalScopedSlots>().convert(HmModalOriginal);
