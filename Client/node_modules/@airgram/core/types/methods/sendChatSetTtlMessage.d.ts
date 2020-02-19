import { ApiRequestOptions, ApiResponse } from '../airgram';
import { MessageUnion } from '../outputs';
export interface SendChatSetTtlMessageParams {
    chatId?: number;
    ttl?: number;
}
/**
 * Changes the current TTL setting (sets a new self-destruct timer) in a secret chat
 * and sends the corresponding message
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {number} [params.ttl] - New TTL value, in seconds
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SendChatSetTtlMessageParams, MessageUnion>>}
 */
export declare type sendChatSetTtlMessage = (params?: SendChatSetTtlMessageParams, options?: ApiRequestOptions) => Promise<ApiResponse<SendChatSetTtlMessageParams, MessageUnion>>;
