import * as tsx from 'vue-tsx-support';
import { HTMLAttributes } from 'vue-tsx-support/types/dom';
import {
    HmForm as HmFormOriginal,
    HmFormDatalist as HmFormDatalistOriginal,
    HmFormGroup as HmFormGroupOriginal,
    HmFormInvalidFeedback as HmFormInvalidFeedbackOriginal,
    HmFormText as HmFormTextOriginal,
    HmFormValidFeedback as HmFormValidFeedbackOriginal
} from '.';
import { SubmitEvent, TextAlign, VueCssClass } from '../../types/tsx-common';


type FormProps = {
    id?: string;
    inline?: boolean;
    novalidate?: boolean;
    validated?: boolean;
}

type FormEvents = {
    onSubmit: SubmitEvent;
}

export const HmForm = tsx.ofType<FormProps, FormEvents>().convert(HmFormOriginal);


type FormDatalistProps = {
    disabledField?: string;
    htmlField?: string;
    id: string;
    options?: any[] | { [key: string]: any };
    textField?: string;
    valueField?: string;
}

export const HmFormDatalist = tsx.ofType<FormDatalistProps>().convert(HmFormDatalistOriginal);

type ColsNumber = boolean | string | number;

type FormGroupProps = {
    contentCols?: ColsNumber;
    contentColsLg?: ColsNumber;
    contentColsMd?: ColsNumber;
    contentColsSm?: ColsNumber;
    contentColsXl?: ColsNumber;
    description?: string;
    disabled?: boolean;
    feedbackAriaLive?: string;
    id?: string;
    invalidFeedback?: string;
    label?: string;
    labelAlign?: TextAlign;
    labelAlignLg?: TextAlign;
    labelAlignMd?: TextAlign;
    labelAlignSm?: TextAlign;
    labelAlignXl?: TextAlign;
    labelClass?: VueCssClass;
    labelCols?: ColsNumber;
    labelColsLg?: ColsNumber;
    labelColsMd?: ColsNumber;
    labelColsSm?: ColsNumber;
    labelColsXl?: ColsNumber;
    labelFor?: string;
    labelSize?: string;
    labelSrOnly?: boolean;
    state?: boolean | null;
    tooltip?: boolean;
    validFeedback?: string;
    validated?: boolean;
}

type FormGroupScopedSlots = {
    default: {
        ariaDescribedby: string;
        id: string;
        descriptionId: string;
        labelId: string;
    }
}

export const HmFormGroup = tsx.ofType<FormGroupProps, {}, FormGroupScopedSlots>().convert(HmFormGroupOriginal);


type FormFeedbackProps = {
    ariaLive?: string;
    forceShow?: boolean;
    id?: string;
    role?: string;
    state?: boolean | null;
    tag?: string;
    tooltip?: boolean;
}

export const HmFormInvalidFeedback = tsx.ofType<FormFeedbackProps>().convert(HmFormInvalidFeedbackOriginal);
export const HmFormValidFeedback = tsx.ofType<FormFeedbackProps>().convert(HmFormValidFeedbackOriginal);


type FormTextProps = {
    id?: string;
    inline?: boolean;
    tag?: string;
    textVariant?: string;
}

export const HmFormText = tsx.ofType<FormTextProps>().convert(HmFormTextOriginal);
