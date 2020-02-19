import { ApiRequestOptions, ApiResponse } from '../airgram';
import { OkUnion } from '../outputs';
export interface RemoveBackgroundParams {
    backgroundId?: string;
}
/**
 * Removes background from the list of installed backgrounds
 * @param {Object} params
 * @param {string} [params.backgroundId] - The background identifier
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<RemoveBackgroundParams, OkUnion>>}
 */
export declare type removeBackground = (params?: RemoveBackgroundParams, options?: ApiRequestOptions) => Promise<ApiResponse<RemoveBackgroundParams, OkUnion>>;
