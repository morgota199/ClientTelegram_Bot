import { ApiRequestOptions, ApiResponse } from '../airgram';
import { ProxyTypeInputUnion } from '../inputs';
import { ProxyUnion } from '../outputs';
export interface EditProxyParams {
    proxyId?: number;
    server?: string;
    port?: number;
    enable?: boolean;
    type?: ProxyTypeInputUnion;
}
/**
 * Edits an existing proxy server for network requests. Can be called before authorization
 * @param {Object} params
 * @param {number} [params.proxyId] - Proxy identifier
 * @param {string} [params.server] - Proxy server IP address
 * @param {number} [params.port] - Proxy server port
 * @param {boolean} [params.enable] - True, if the proxy should be enabled
 * @param {ProxyTypeInputUnion} [params.type] - Proxy type
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<EditProxyParams, ProxyUnion>>}
 */
export declare type editProxy = (params?: EditProxyParams, options?: ApiRequestOptions) => Promise<ApiResponse<EditProxyParams, ProxyUnion>>;
