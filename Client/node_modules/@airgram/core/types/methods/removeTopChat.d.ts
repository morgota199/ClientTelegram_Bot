import { ApiRequestOptions, ApiResponse } from '../airgram';
import { TopChatCategoryInputUnion } from '../inputs';
import { OkUnion } from '../outputs';
export interface RemoveTopChatParams {
    category?: TopChatCategoryInputUnion;
    chatId?: number;
}
/**
 * Removes a chat from the list of frequently used chats. Supported only if the chat
 * info database is enabled
 * @param {Object} params
 * @param {TopChatCategoryInputUnion} [params.category] - Category of frequently
 * used chats
 * @param {number} [params.chatId] - Chat identifier
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<RemoveTopChatParams, OkUnion>>}
 */
export declare type removeTopChat = (params?: RemoveTopChatParams, options?: ApiRequestOptions) => Promise<ApiResponse<RemoveTopChatParams, OkUnion>>;
