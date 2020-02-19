import { ApiRequestOptions, ApiResponse } from '../airgram';
import { ChatLocationInput } from '../inputs';
import { ChatUnion } from '../outputs';
export interface CreateNewSupergroupChatParams {
    title?: string;
    isChannel?: boolean;
    description?: string;
    location?: ChatLocationInput;
}
/**
 * Creates a new supergroup or channel and sends a corresponding messageSupergroupChatCreate.
 * Returns the newly created chat
 * @param {Object} params
 * @param {string} [params.title] - Title of the new chat; 1-128 characters
 * @param {boolean} [params.isChannel] - True, if a channel chat should be created
 * @param {string} [params.description] - Chat description; 0-255 characters
 * @param {ChatLocationInput} [params.location] - Chat location if a location-based
 * supergroup is being created
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<CreateNewSupergroupChatParams, ChatUnion>>}
 */
export declare type createNewSupergroupChat = (params?: CreateNewSupergroupChatParams, options?: ApiRequestOptions) => Promise<ApiResponse<CreateNewSupergroupChatParams, ChatUnion>>;
