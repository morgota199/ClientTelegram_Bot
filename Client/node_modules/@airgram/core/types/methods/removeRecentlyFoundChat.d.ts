import { ApiRequestOptions, ApiResponse } from '../airgram';
import { OkUnion } from '../outputs';
export interface RemoveRecentlyFoundChatParams {
    chatId?: number;
}
/**
 * Removes a chat from the list of recently found chats
 * @param {Object} params
 * @param {number} [params.chatId] - Identifier of the chat to be removed
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<RemoveRecentlyFoundChatParams, OkUnion>>}
 */
export declare type removeRecentlyFoundChat = (params?: RemoveRecentlyFoundChatParams, options?: ApiRequestOptions) => Promise<ApiResponse<RemoveRecentlyFoundChatParams, OkUnion>>;
