import * as tsx from 'vue-tsx-support';
import { HmFileInput as HmFileInputOriginal } from '.';

type FileInputProps = {
    accept?: HTMLInputElement['accept'];
    autofocus?: boolean;
    browseText?: string;
    capture?: boolean;
    directory?: boolean;
    disabled?: boolean;
    disableInvalidDropNotification?: boolean;
    dndAcceptFormatText?: string;
    dndBrowseText?: string;
    dndGlobal?: boolean;
    dndGlobalStyles?: Partial<CSSStyleDeclaration>;
    dndGlobalTriggerSelector?: string;
    dropPlaceholder?: string;
    fileNameFormatter?: (files?: File[], filesTraversed?: File[][], names?: string[]) => string;
    form?: string;
    id?: string;
    invalidAcceptFormatText?: string;
    invalidDropTimerMs?: number;
    multiple?: boolean;
    name?: string;
    noDrop?: boolean;
    noDropPlaceholder?: string;
    noTraverse?: boolean;
    placeholder?: string;
    plain?: boolean;
    required?: boolean;
    size?: string;
    state?: boolean | null;
    value?: File | File[] | null;
}

type FileInputEvents = {
    onChange: Event;
    onFilesNotMatchAccept: File[];
    onInput: File | File[]; // null?
}

type FileInputScopedSlots = {
    'drop-placeholder'?: { allowed: boolean };
    'file-name'?: {
        files: File[],
        filesTraversed: File[][];
        names: string[];
    }
}

export const HmFileInput = tsx.ofType<FileInputProps, FileInputEvents, FileInputScopedSlots>().convert(HmFileInputOriginal);
