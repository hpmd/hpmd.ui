import * as tsx from 'vue-tsx-support';
import { HmContentEditable as HmContentEditableOriginal } from './';



type ContentEditableProps = {
    contenteditable?: boolean;
    noHTML?: boolean;
    noNL?: boolean;
    tag?: string;
    vModel: string;
};

type ContentEditableEvents = {
    onReturned?: string;
}


export const HmContentEditable = tsx.ofType<ContentEditableProps, ContentEditableEvents>().convert(HmContentEditableOriginal);
