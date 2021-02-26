import * as tsx from 'vue-tsx-support';
import {
    HmInputGroup as HmInputGroupOriginal,
    HmInputGroupAddon as HmInputGroupAddonOriginal,
    HmInputGroupAppend as HmInputGroupAppendOriginal,
    HmInputGroupPrepend as HmInputGroupPrependOriginal,
    HmInputGroupText as HmInputGroupTextOriginal
} from '.';


type InputGroupProps = {
    append?: string;
    appendHtml?: string;
    id?: string;
    prepend?: string;
    prependHtml?: string;
    size?: string;
    tag?: string;
}

export const HmInputGroup = tsx.ofType<InputGroupProps>().convert(HmInputGroupOriginal);


type InputGroupAddonProps = {
    append?: boolean;
    id?: string;
    isText?: boolean;
    tag?: string;
}

export const HmInputGroupAddon = tsx.ofType<InputGroupAddonProps>().convert(HmInputGroupAddonOriginal);


type InputGroupAppendProps = {
    id?: string;
    isText?: boolean;
    tag?: string;
}

export const HmInputGroupAppend = tsx.ofType<InputGroupAppendProps>().convert(HmInputGroupAppendOriginal);
export const HmInputGroupPrepend= tsx.ofType<InputGroupAppendProps>().convert(HmInputGroupPrependOriginal);


type InputGroupTextProps = {
    tag?: string;
}

export const HmInputGroupText = tsx.ofType<InputGroupTextProps>().convert(HmInputGroupTextOriginal);
