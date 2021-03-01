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
    BvTableField,
    BvTableCtxObject
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

type TableSelectRowScopes = {
    rowSelected: boolean;
    selectRow: () => void;
    unselectRow: () => void;
}

type TableCellSlotScope = TableSelectRowScopes & TableLiteCellSlotScope;

type TableLiteCustomFootSlotScope = {
    columns: number;
    fields: TableField[];
    items: any[];
}

type TableLiteFootSlotScope = {
    column: TableField['key'];
    field: TableField;
    label: TableField['label'];
}

type TableClearSelectRowsScopes = {
    clearSelected: () => void;
    selectAllRows: () => void;
}

type TableFootSlotScope = TableLiteFootSlotScope & TableClearSelectRowsScopes;

type TableLiteHeadSlotScope = { isFoot: boolean; } & TableLiteFootSlotScope;

type TableHeadSlotScope = TableLiteHeadSlotScope & TableClearSelectRowsScopes;

type TableLiteRowDetailsSlotScope = {
    fields: TableField[];
    index: number;
    item: object;
    toggleDetails: () => void;
}

type TableRowDetailsSlotScope = TableSelectRowScopes & TableLiteRowDetailsSlotScope;

type TableLiteColgroupSlotScope = {
    columns: number;
    fields: TableField[];
}

type TableLiteTheadSlotScope = TableLiteColgroupSlotScope & TableClearSelectRowsScopes;

type TableEmptySlotScope = {
    emptyFilteredHtml: string;
    emptyFilteredText: string;
    emptyHtml: string;
    emptyText: string;
    fields: TableField[];
    items: any[];
}

export type TableLiteScopedSlots = {
    'cell()'?: TableLiteCellSlotScope;
    'custom-foot'?: TableLiteCustomFootSlotScope;
    'foot()'?: TableLiteFootSlotScope;
    'head()'?: TableLiteHeadSlotScope;
    'row-details'?: TableLiteRowDetailsSlotScope;
    'table-colgroup'?: TableLiteColgroupSlotScope;
    'thead-top'?: TableLiteTheadSlotScope;

    [key: string]: any;
}

export type TableScopedSlots = {
    'bottom-row'?: TableLiteColgroupSlotScope;
    'cell()'?: TableCellSlotScope;
    'custom-foot'?: TableLiteCustomFootSlotScope;
    'empty'?: TableEmptySlotScope;
    'empty-filtered'?: TableEmptySlotScope;
    'foot()'?: TableFootSlotScope;
    'head()'?: TableHeadSlotScope;
    'row-details'?: TableRowDetailsSlotScope;
    'table-colgroup'?: TableLiteColgroupSlotScope;
    'thead-top'?: TableLiteTheadSlotScope;
    'top-row'?: TableLiteColgroupSlotScope;

    [key: string]: any;
}

type TableRowClickedEvent = {
    item: any;
    index: number;
    event: CustomEvent | UIEvent | Event;
}

type TableLiteEvents = {
    onHeadClicked: {
        key: TableField['key'];
        field: TableField;
        event: CustomEvent | UIEvent | Event;
        isFooter: boolean;
    }

    onRowClicked: TableRowClickedEvent;
    onRowContextmenu: TableRowClickedEvent;
    onRowDblclicked: TableRowClickedEvent;
    onRowHovered: TableRowClickedEvent;
    onRowMiddleClicked: TableRowClickedEvent;
    onRowUnhovered: TableRowClickedEvent;
}

type TableEvents = {
    onContextChanged: BvTableCtxObject;
    onFiltered: any[];
    onRefreshed: void;
    onRowSelected: any[];
    onSortChanged: BvTableCtxObject;
} & TableLiteEvents;

export const HmTable = tsx.ofType<TableProps, TableEvents, TableScopedSlots>().convert(HmTableOriginal);

export const HmTableLite = tsx.ofType<TableLiteProps, TableLiteEvents, TableLiteScopedSlots>().convert(HmTableLiteOriginal);

export const HmTableSimple = tsx.ofType<TableSimpleProps>().convert(HmTableSimpleOriginal);



type TbodyProps = {
    tbodyTransitionHandlers?: BvTableTbodyTransitionHandlers;
    tbodyTransitionProps?: BvTableTbodyTransitionProps;
}

export const HmTbody = tsx.ofType<TbodyProps>().convert(HmTbodyOriginal);


type TheadProps = {
    headVariant?: string;
}

export const HmThead = tsx.ofType<TheadProps>().convert(HmTheadOriginal);


type TfootProps = {
    footVariant?: string;
}

export const HmTfood = tsx.ofType<TfootProps>().convert(HmTfootOriginal);


type TrProps = {
    variant?: string;
}

export const HmTr = tsx.ofType<TrProps>().convert(HmTrOriginal);


type CellProps = {
    colspan?: number | string | null;
    rowspan?: number | string | null;
    stackedHeading?: string;
    stickyColumn?: boolean;
    variant?: string;
}

export const HmTd = tsx.ofType<CellProps>().convert(HmTdOriginal);

export const HmTh = tsx.ofType<CellProps>().convert(HmThOriginal);
