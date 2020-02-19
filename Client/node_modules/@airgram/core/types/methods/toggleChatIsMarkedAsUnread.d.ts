import { ApiRequestOptions, ApiResponse } from '../airgram';
import { OkUnion } from '../outputs';
export interface ToggleChatIsMarkedAsUnreadParams {
    chatId?: number;
    isMarkedAsUnread?: boolean;
}
/**
 * Changes the marked as unread state of a chat
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {boolean} [params.isMarkedAsUnread] - New value of is_marked_as_unread
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<ToggleChatIsMarkedAsUnreadParams, OkUnion>>}
 */
export declare type toggleChatIsMarkedAsUnread = (params?: ToggleChatIsMarkedAsUnreadParams, options?: ApiRequestOptions) => Promise<ApiResponse<ToggleChatIsMarkedAsUnreadParams, OkUnion>>;
