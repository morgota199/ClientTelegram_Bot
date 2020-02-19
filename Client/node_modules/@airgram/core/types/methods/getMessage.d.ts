import { ApiRequestOptions, ApiResponse } from '../airgram';
import { MessageUnion } from '../outputs';
export interface GetMessageParams {
    chatId?: number;
    messageId?: number;
}
/**
 * Returns information about a message
 * @param {Object} params
 * @param {number} [params.chatId] - Identifier of the chat the message belongs to
 * @param {number} [params.messageId] - Identifier of the message to get
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetMessageParams, MessageUnion>>}
 */
export declare type getMessage = (params?: GetMessageParams, options?: ApiRequestOptions) => Promise<ApiResponse<GetMessageParams, MessageUnion>>;
