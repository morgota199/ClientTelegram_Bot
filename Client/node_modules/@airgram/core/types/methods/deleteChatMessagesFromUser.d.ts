import { ApiRequestOptions, ApiResponse } from '../airgram';
import { OkUnion } from '../outputs';
export interface DeleteChatMessagesFromUserParams {
    chatId?: number;
    userId?: number;
}
/**
 * Deletes all messages sent by the specified user to a chat. Supported only for supergroups;
 * requires can_delete_messages administrator privileges
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {number} [params.userId] - User identifier
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<DeleteChatMessagesFromUserParams, OkUnion>>}
 */
export declare type deleteChatMessagesFromUser = (params?: DeleteChatMessagesFromUserParams, options?: ApiRequestOptions) => Promise<ApiResponse<DeleteChatMessagesFromUserParams, OkUnion>>;
