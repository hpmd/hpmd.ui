import * as tsx from 'vue-tsx-support';
import {
    HmTable as HmTableOriginal,
    HmTableLite as HmTableLiteOriginal,
    HmTableSimple as HmTableSimpleOriginal,
    HmTbody as HmTbodyOriginal,
    HmThead as HmTheadOriginal,
    HmTfoot as HmTfootOriginal,
    HmTr as HmTrOriginal,
    HmTd as HmTdOriginal,
    HmTh as HmThOriginal,
    BvTableFieldArray,
    BvTableProviderCallback,
    BvTableTbodyTrAttrCallback,
    BvTableTbodyTrClassCallback,
    BvTableTbodyTransitionHandlers,
    BvTableTbodyTransitionProps,
    BvTableFilterCallback,
    BvTableSortCompareCallback,
    BvTableLocaleCompareOptions,
    BvTableSortDirection,
    BvTableField
} from '.';
import { VueCssClass } from '../../types/tsx-common';

export type TableField = { key: string } & BvTableField;

type TableSimpleProps = {
    bordered?: boolean;
    borderless?: boolean;
    captionTop?: boolean;
    dark?: boolean;
    fixed?: boolean;
    hover?: boolean;
    id?: string;
    noBorderCollapse?: boolean;
    outlined?: boolean;
    responsive?: boolean | 'sm' | 'md' | 'lg' | 'xl';
    small?: boolean;
    stacked?: boolean;
    stickyHeader?: boolean | string;
    striped?: boolean;
    tableClass?: VueCssClass;
    tableVariant?: string;
}

type TableLiteProps = TableSimpleProps & {
    caption?: string;
    captionHtml?: string;
    detailsTdClass?: VueCssClass;
    fields?: BvTableFieldArray;
    footClone?: boolean;
    footRowVariant?: string;
    footVariant?: string;
    headRowVariant?: string;
    headVariant?: string;
    items?: any[] | BvTableProviderCallback;
    primaryKey?: string;
    tbodyClass?: VueCssClass;
    tbodyTrAttr?: object | BvTableTbodyTrAttrCallback;
    tbodyTrClass?: VueCssClass | BvTableTbodyTrClassCallback;
    tbodyTransitionHandlers?: BvTableTbodyTransitionHandlers;
    tbodyTransitionProps?: BvTableTbodyTransitionProps;
    tfootClass?: VueCssClass;
    tfootTrClass?: VueCssClass;
    theadClass?: VueCssClass;
    theadTrClass?: VueCssClass;
    // readonly value?: any[]; readonly, just to mention here
}

type TableProps = TableLiteProps & {
    apiUrl?: string;
    busy?: boolean;
    currentPage?: number | string;
    emptyFilteredHtml?: string;
    emptyFilteredText?: string;
    emptyHtml?: string;
    emptyText?: string;
    filter?: string | any[] | RegExp | object | any;
    filterDebounce?: number | string;
    filterFunction?: BvTableFilterCallback;
    filterIgnoredFields?: string[];
    filterIncludedFields?: string[];
    labelSortAsc?: string;
    labelSortClear?: string;
    labelSortDesc?: string;
    noFooterSorting?: boolean;
    noLocalSorting?: boolean;
    noProviderFiltering?: boolean;
    noProviderPaging?: boolean;
    noProviderSorting?: boolean;
    noSelectOnClick?: boolean;
    noSortReset?: boolean;
    perPage?: number | string;
    selectMode?: 'single' | 'multi' | 'range';
    selectable?: boolean;
    selectedVariant?: string;
    showEmpty?: boolean;
    sortBy?: string;
    sortCompare?: BvTableSortCompareCallback;
    sortCompareLocale?: string | string[];
    sortCompareOptions?: BvTableLocaleCompareOptions;
    sortDesc?: boolean;
    sortDirection?: BvTableSortDirection;
    sortIconLeft?: boolean;
    sortNullLast?: boolean;
}

type TableLiteCellSlotScope = {
    detailsShowing: boolean;
    field: TableField;
    index: number;
    item: object;
    toggleDetails: () => void;
    unformatted: any;
    value: any;
}

type TableLiteScopedSlots = {
    'cell()': TableLiteCellSlotScope;

    // cell({key}): https://medium.com/shyftplan-techblog/typescript-advanced-types-199ff1f3e3e8
}