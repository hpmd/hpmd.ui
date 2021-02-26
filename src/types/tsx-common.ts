export type CheckboxRadioCommonProps = {
    ariaLabel?: string;
    ariaLabelledby?: string;
    autofocus?: boolean;
    button?: boolean;
    buttonVariant?: string;
    checked?: any | any[] | null;
    disabled?: boolean;
    form?: string;
    id?: string;
    inline?: boolean;
    name?: string;
    plain?: boolean;
    required?: boolean;
    size?: string;
    state?: boolean | null;
    value?: any;
}
export type CheckboxRadioGroupCommonProps = {
    ariaInvalid?: boolean | string;
    autofocus?: boolean;
    buttonVariant?: string;
    buttons?: boolean;
    disabled?: boolean;
    disabledField?: string;
    form?: string;
    htmlField?: string;
    id?: string;
    name?: string;
    options: any[] | object;
    plain?: boolean;
    required?: boolean;
    size?: string;
    stacked?: boolean;
    state?: boolean | null;
    textField?: string;
    validated?: boolean;
    valueField?: string;
}
export type ElementBoundary = 'scrollParent' | 'window' | 'viewport' | HTMLElement;
export type SubmitEvent = Event & { submitter: HTMLElement };
export type TextAlign = 'left' | 'center' | 'right';
export type TipPlacement = 'top' |
    'left' |
    'bottom' |
    'right' |
    'topleft' |
    'topright' |
    'lefttop' |
    'leftbottom' |
    'bottomleft' |
    'bottomright' |
    'righttop' |
    'rightbottom';
export type TipTarget = string |
    HTMLElement |
    SVGElement |
    object |
    (() => HTMLElement | SVGElement);
export type TipTrigger = 'click' | 'focus' | 'hover' | 'blur' | 'manual';
export type VueCssClassObject = { [key: string]: boolean };
export type VueCssClass = string | VueCssClassObject | Array<string | VueCssClassObject>;
