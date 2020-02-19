import { StickerSetInfo } from './index';
export declare type StickerSetsUnion = StickerSets;
/** Represents a list of sticker sets */
export interface StickerSets {
    _: 'stickerSets';
    /** Approximate total number of sticker sets found */
    totalCount: number;
    /** List of sticker sets */
    sets: StickerSetInfo[];
}
