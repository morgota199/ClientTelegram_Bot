import { ApiRequestOptions, ApiResponse } from '../airgram';
import { OkUnion } from '../outputs';
export interface CloseSecretChatParams {
    secretChatId?: number;
}
/**
 * Closes a secret chat, effectively transferring its state to secretChatStateClosed
 * @param {Object} params
 * @param {number} [params.secretChatId] - Secret chat identifier
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<CloseSecretChatParams, OkUnion>>}
 */
export declare type closeSecretChat = (params?: CloseSecretChatParams, options?: ApiRequestOptions) => Promise<ApiResponse<CloseSecretChatParams, OkUnion>>;
