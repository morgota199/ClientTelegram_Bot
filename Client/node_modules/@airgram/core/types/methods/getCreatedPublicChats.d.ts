import { ApiRequestOptions, ApiResponse } from '../airgram';
import { PublicChatTypeInputUnion } from '../inputs';
import { ChatsUnion } from '../outputs';
export interface GetCreatedPublicChatsParams {
    type?: PublicChatTypeInputUnion;
}
/**
 * Returns a list of public chats of the specified type, owned by the user
 * @param {Object} params
 * @param {PublicChatTypeInputUnion} [params.type] - Type of the public chats to
 * return
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetCreatedPublicChatsParams, ChatsUnion>>}
 */
export declare type getCreatedPublicChats = (params?: GetCreatedPublicChatsParams, options?: ApiRequestOptions) => Promise<ApiResponse<GetCreatedPublicChatsParams, ChatsUnion>>;
