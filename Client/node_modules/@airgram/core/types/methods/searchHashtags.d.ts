import { ApiRequestOptions, ApiResponse } from '../airgram';
import { HashtagsUnion } from '../outputs';
export interface SearchHashtagsParams {
    prefix?: string;
    limit?: number;
}
/**
 * Searches for recently used hashtags by their prefix
 * @param {Object} params
 * @param {string} [params.prefix] - Hashtag prefix to search for
 * @param {number} [params.limit] - The maximum number of hashtags to be returned
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SearchHashtagsParams, HashtagsUnion>>}
 */
export declare type searchHashtags = (params?: SearchHashtagsParams, options?: ApiRequestOptions) => Promise<ApiResponse<SearchHashtagsParams, HashtagsUnion>>;
