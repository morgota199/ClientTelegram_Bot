import { ApiRequestOptions, ApiResponse } from '../airgram';
import { MessageLinkInfoUnion } from '../outputs';
export interface GetMessageLinkInfoParams {
    url?: string;
}
/**
 * Returns information about a public or private message link
 * @param {Object} params
 * @param {string} [params.url] - The message link in the format "https://t.me/c/...",
 * or "tg://privatepost?...", or "https://t.me/username/...", or "tg://resolve?..."
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetMessageLinkInfoParams, MessageLinkInfoUnion>>}
 */
export declare type getMessageLinkInfo = (params?: GetMessageLinkInfoParams, options?: ApiRequestOptions) => Promise<ApiResponse<GetMessageLinkInfoParams, MessageLinkInfoUnion>>;
