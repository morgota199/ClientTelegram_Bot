import { ApiRequestOptions, ApiResponse } from '../airgram';
import { ChatListInputUnion } from '../inputs';
import { OkUnion } from '../outputs';
export interface SetPinnedChatsParams {
    chatList?: ChatListInputUnion;
    chatIds?: number[];
}
/**
 * Changes the order of pinned chats
 * @param {Object} params
 * @param {ChatListInputUnion} [params.chatList] - Chat list in which to change the
 * order of pinned chats
 * @param {number[]} [params.chatIds] - The new list of pinned chats
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SetPinnedChatsParams, OkUnion>>}
 */
export declare type setPinnedChats = (params?: SetPinnedChatsParams, options?: ApiRequestOptions) => Promise<ApiResponse<SetPinnedChatsParams, OkUnion>>;
