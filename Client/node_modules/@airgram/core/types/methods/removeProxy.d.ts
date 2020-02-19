import { ApiRequestOptions, ApiResponse } from '../airgram';
import { OkUnion } from '../outputs';
export interface RemoveProxyParams {
    proxyId?: number;
}
/**
 * Removes a proxy server. Can be called before authorization
 * @param {Object} params
 * @param {number} [params.proxyId] - Proxy identifier
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<RemoveProxyParams, OkUnion>>}
 */
export declare type removeProxy = (params?: RemoveProxyParams, options?: ApiRequestOptions) => Promise<ApiResponse<RemoveProxyParams, OkUnion>>;
