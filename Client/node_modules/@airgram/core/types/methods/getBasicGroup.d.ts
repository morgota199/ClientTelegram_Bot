import { ApiRequestOptions, ApiResponse } from '../airgram';
import { BasicGroupUnion } from '../outputs';
export interface GetBasicGroupParams {
    basicGroupId?: number;
}
/**
 * Returns information about a basic group by its identifier. This is an offline request
 * if the current user is not a bot
 * @param {Object} params
 * @param {number} [params.basicGroupId] - Basic group identifier
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetBasicGroupParams, BasicGroupUnion>>}
 */
export declare type getBasicGroup = (params?: GetBasicGroupParams, options?: ApiRequestOptions) => Promise<ApiResponse<GetBasicGroupParams, BasicGroupUnion>>;
