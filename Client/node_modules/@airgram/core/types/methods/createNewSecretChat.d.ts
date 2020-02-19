import { ApiRequestOptions, ApiResponse } from '../airgram';
import { ChatUnion } from '../outputs';
export interface CreateNewSecretChatParams {
    userId?: number;
}
/**
 * Creates a new secret chat. Returns the newly created chat
 * @param {Object} params
 * @param {number} [params.userId] - Identifier of the target user
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<CreateNewSecretChatParams, ChatUnion>>}
 */
export declare type createNewSecretChat = (params?: CreateNewSecretChatParams, options?: ApiRequestOptions) => Promise<ApiResponse<CreateNewSecretChatParams, ChatUnion>>;
