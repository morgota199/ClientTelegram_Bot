import { ApiRequestOptions, ApiResponse } from '../airgram';
import { UserFullInfoUnion } from '../outputs';
export interface GetUserFullInfoParams {
    userId?: number;
}
/**
 * Returns full information about a user by their identifier
 * @param {Object} params
 * @param {number} [params.userId] - User identifier
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetUserFullInfoParams, UserFullInfoUnion>>}
 */
export declare type getUserFullInfo = (params?: GetUserFullInfoParams, options?: ApiRequestOptions) => Promise<ApiResponse<GetUserFullInfoParams, UserFullInfoUnion>>;
