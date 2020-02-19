import { ApiRequestOptions, ApiResponse } from '../airgram';
import { OkUnion } from '../outputs';
export interface SetBioParams {
    bio?: string;
}
/**
 * Changes the bio of the current user
 * @param {Object} params
 * @param {string} [params.bio] - The new value of the user bio; 0-70 characters
 * without line feeds
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SetBioParams, OkUnion>>}
 */
export declare type setBio = (params?: SetBioParams, options?: ApiRequestOptions) => Promise<ApiResponse<SetBioParams, OkUnion>>;
