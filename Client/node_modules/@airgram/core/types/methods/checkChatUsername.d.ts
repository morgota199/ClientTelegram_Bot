import { ApiRequestOptions, ApiResponse } from '../airgram';
import { CheckChatUsernameResultUnion } from '../outputs';
export interface CheckChatUsernameParams {
    chatId?: number;
    username?: string;
}
/**
 * Checks whether a username can be set for a chat
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier; should be identifier of a supergroup
 * chat, or a channel chat, or a private chat with self, or zero if chat is being created
 * @param {string} [params.username] - Username to be checked
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<CheckChatUsernameParams, CheckChatUsernameResultUnion>>}
 */
export declare type checkChatUsername = (params?: CheckChatUsernameParams, options?: ApiRequestOptions) => Promise<ApiResponse<CheckChatUsernameParams, CheckChatUsernameResultUnion>>;
