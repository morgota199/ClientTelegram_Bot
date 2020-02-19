import { ApiRequestOptions, ApiResponse } from '../airgram';
import { ProxyTypeInputUnion } from '../inputs';
import { ProxyUnion } from '../outputs';
export interface AddProxyParams {
    server?: string;
    port?: number;
    enable?: boolean;
    type?: ProxyTypeInputUnion;
}
/**
 * Adds a proxy server for network requests. Can be called before authorization
 * @param {Object} params
 * @param {string} [params.server] - Proxy server IP address
 * @param {number} [params.port] - Proxy server port
 * @param {boolean} [params.enable] - True, if the proxy should be enabled
 * @param {ProxyTypeInputUnion} [params.type] - Proxy type
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<AddProxyParams, ProxyUnion>>}
 */
export declare type addProxy = (params?: AddProxyParams, options?: ApiRequestOptions) => Promise<ApiResponse<AddProxyParams, ProxyUnion>>;
