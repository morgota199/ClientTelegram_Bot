import { ApiRequestOptions, ApiResponse } from '../airgram';
import { ChatMembersFilterInputUnion } from '../inputs';
import { ChatMembersUnion } from '../outputs';
export interface SearchChatMembersParams {
    chatId?: number;
    query?: string;
    limit?: number;
    filter?: ChatMembersFilterInputUnion;
}
/**
 * Searches for a specified query in the first name, last name and username of the members
 * of a specified chat. Requires administrator rights in channels
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {string} [params.query] - Query to search for
 * @param {number} [params.limit] - The maximum number of users to be returned
 * @param {ChatMembersFilterInputUnion} [params.filter] - The type of users to return.
 * By default, chatMembersFilterMembers
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SearchChatMembersParams, ChatMembersUnion>>}
 */
export declare type searchChatMembers = (params?: SearchChatMembersParams, options?: ApiRequestOptions) => Promise<ApiResponse<SearchChatMembersParams, ChatMembersUnion>>;
