import { ApiRequestOptions, ApiResponse } from '../airgram';
import { AccountTtlInput } from '../inputs';
import { OkUnion } from '../outputs';
export interface SetAccountTtlParams {
    ttl?: AccountTtlInput;
}
/**
 * Changes the period of inactivity after which the account of the current user will
 * automatically be deleted
 * @param {Object} params
 * @param {AccountTtlInput} [params.ttl] - New account TTL
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SetAccountTtlParams, OkUnion>>}
 */
export declare type setAccountTtl = (params?: SetAccountTtlParams, options?: ApiRequestOptions) => Promise<ApiResponse<SetAccountTtlParams, OkUnion>>;
