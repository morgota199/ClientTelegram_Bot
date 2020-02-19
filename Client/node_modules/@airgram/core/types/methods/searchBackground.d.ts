import { ApiRequestOptions, ApiResponse } from '../airgram';
import { BackgroundUnion } from '../outputs';
export interface SearchBackgroundParams {
    name?: string;
}
/**
 * Searches for a background by its name
 * @param {Object} params
 * @param {string} [params.name] - The name of the background
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SearchBackgroundParams, BackgroundUnion>>}
 */
export declare type searchBackground = (params?: SearchBackgroundParams, options?: ApiRequestOptions) => Promise<ApiResponse<SearchBackgroundParams, BackgroundUnion>>;
