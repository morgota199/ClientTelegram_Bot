import { ApiRequestOptions, ApiResponse } from '../airgram';
import { StickerSetsUnion } from '../outputs';
export interface SearchStickerSetsParams {
    query?: string;
}
/**
 * Searches for ordinary sticker sets by looking for specified query in their title
 * and name. Excludes installed sticker sets from the results
 * @param {Object} params
 * @param {string} [params.query] - Query to search for
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SearchStickerSetsParams, StickerSetsUnion>>}
 */
export declare type searchStickerSets = (params?: SearchStickerSetsParams, options?: ApiRequestOptions) => Promise<ApiResponse<SearchStickerSetsParams, StickerSetsUnion>>;
