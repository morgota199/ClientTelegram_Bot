import { ApiRequestOptions, ApiResponse } from '../airgram';
import { OkUnion } from '../outputs';
export interface ToggleSupergroupSignMessagesParams {
    supergroupId?: number;
    signMessages?: boolean;
}
/**
 * Toggles sender signatures messages sent in a channel; requires can_change_info rights
 * @param {Object} params
 * @param {number} [params.supergroupId] - Identifier of the channel
 * @param {boolean} [params.signMessages] - New value of sign_messages
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<ToggleSupergroupSignMessagesParams, OkUnion>>}
 */
export declare type toggleSupergroupSignMessages = (params?: ToggleSupergroupSignMessagesParams, options?: ApiRequestOptions) => Promise<ApiResponse<ToggleSupergroupSignMessagesParams, OkUnion>>;
