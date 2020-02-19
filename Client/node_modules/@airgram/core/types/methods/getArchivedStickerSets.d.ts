import { ApiRequestOptions, ApiResponse } from '../airgram';
import { StickerSetsUnion } from '../outputs';
export interface GetArchivedStickerSetsParams {
    isMasks?: boolean;
    offsetStickerSetId?: string;
    limit?: number;
}
/**
 * Returns a list of archived sticker sets
 * @param {Object} params
 * @param {boolean} [params.isMasks] - Pass true to return mask stickers sets; pass
 * false to return ordinary sticker sets
 * @param {string} [params.offsetStickerSetId] - Identifier of the sticker set from
 * which to return the result
 * @param {number} [params.limit] - The maximum number of sticker sets to return
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetArchivedStickerSetsParams, StickerSetsUnion>>}
 */
export declare type getArchivedStickerSets = (params?: GetArchivedStickerSetsParams, options?: ApiRequestOptions) => Promise<ApiResponse<GetArchivedStickerSetsParams, StickerSetsUnion>>;
