import { PageBlockUnion } from './index';
export declare type PageBlockListItemUnion = PageBlockListItem;
/** Describes an item of a list page block */
export interface PageBlockListItem {
    _: 'pageBlockListItem';
    /** Item label */
    label: string;
    /** Item blocks */
    pageBlocks: PageBlockUnion[];
}
