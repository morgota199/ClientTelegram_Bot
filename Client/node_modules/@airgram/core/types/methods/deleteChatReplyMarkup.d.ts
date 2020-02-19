import { ApiRequestOptions, ApiResponse } from '../airgram';
import { OkUnion } from '../outputs';
export interface DeleteChatReplyMarkupParams {
    chatId?: number;
    messageId?: number;
}
/**
 * Deletes the default reply markup from a chat. Must be called after a one-time keyboard
 * or a ForceReply reply markup has been used. UpdateChatReplyMarkup will be sent if
 * the reply markup will be changed
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {number} [params.messageId] - The message identifier of the used keyboard
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<DeleteChatReplyMarkupParams, OkUnion>>}
 */
export declare type deleteChatReplyMarkup = (params?: DeleteChatReplyMarkupParams, options?: ApiRequestOptions) => Promise<ApiResponse<DeleteChatReplyMarkupParams, OkUnion>>;
