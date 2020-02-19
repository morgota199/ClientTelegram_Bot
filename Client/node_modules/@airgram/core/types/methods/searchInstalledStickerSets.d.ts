import { ApiRequestOptions, ApiResponse } from '../airgram';
import { StickerSetsUnion } from '../outputs';
export interface SearchInstalledStickerSetsParams {
    isMasks?: boolean;
    query?: string;
    limit?: number;
}
/**
 * Searches for installed sticker sets by looking for specified query in their title
 * and name
 * @param {Object} params
 * @param {boolean} [params.isMasks] - Pass true to return mask sticker sets; pass
 * false to return ordinary sticker sets
 * @param {string} [params.query] - Query to search for
 * @param {number} [params.limit] - The maximum number of sticker sets to return
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SearchInstalledStickerSetsParams, StickerSetsUnion>>}
 */
export declare type searchInstalledStickerSets = (params?: SearchInstalledStickerSetsParams, options?: ApiRequestOptions) => Promise<ApiResponse<SearchInstalledStickerSetsParams, StickerSetsUnion>>;
