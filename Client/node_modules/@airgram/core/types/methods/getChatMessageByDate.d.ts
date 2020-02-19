import { ApiRequestOptions, ApiResponse } from '../airgram';
import { MessageUnion } from '../outputs';
export interface GetChatMessageByDateParams {
    chatId?: number;
    date?: number;
}
/**
 * Returns the last message sent in a chat no later than the specified date
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {number} [params.date] - Point in time (Unix timestamp) relative to which
 * to search for messages
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetChatMessageByDateParams, MessageUnion>>}
 */
export declare type getChatMessageByDate = (params?: GetChatMessageByDateParams, options?: ApiRequestOptions) => Promise<ApiResponse<GetChatMessageByDateParams, MessageUnion>>;
