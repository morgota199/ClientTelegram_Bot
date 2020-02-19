import { ApiRequestOptions, ApiResponse } from '../airgram';
import { CustomRequestResultUnion } from '../outputs';
export interface SendCustomRequestParams {
    method?: string;
    parameters?: string;
}
/**
 * Sends a custom request; for bots only
 * @param {Object} params
 * @param {string} [params.method] - The method name
 * @param {string} [params.parameters] - JSON-serialized method parameters
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SendCustomRequestParams, CustomRequestResultUnion>>}
 */
export declare type sendCustomRequest = (params?: SendCustomRequestParams, options?: ApiRequestOptions) => Promise<ApiResponse<SendCustomRequestParams, CustomRequestResultUnion>>;
