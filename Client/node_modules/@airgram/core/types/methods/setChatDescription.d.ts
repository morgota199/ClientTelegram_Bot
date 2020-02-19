import { ApiRequestOptions, ApiResponse } from '../airgram';
import { OkUnion } from '../outputs';
export interface SetChatDescriptionParams {
    chatId?: number;
    description?: string;
}
/**
 * Changes information about a chat. Available for basic groups, supergroups, and channels.
 * Requires can_change_info rights
 * @param {Object} params
 * @param {number} [params.chatId] - Identifier of the chat
 * @param {string} [params.description] - New chat description; 0-255 characters
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SetChatDescriptionParams, OkUnion>>}
 */
export declare type setChatDescription = (params?: SetChatDescriptionParams, options?: ApiRequestOptions) => Promise<ApiResponse<SetChatDescriptionParams, OkUnion>>;
