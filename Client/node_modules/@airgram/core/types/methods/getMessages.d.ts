import { ApiRequestOptions, ApiResponse } from '../airgram';
import { MessagesUnion } from '../outputs';
export interface GetMessagesParams {
    chatId?: number;
    messageIds?: number[];
}
/**
 * Returns information about messages. If a message is not found, returns null on the
 * corresponding position of the result
 * @param {Object} params
 * @param {number} [params.chatId] - Identifier of the chat the messages belong to
 * @param {number[]} [params.messageIds] - Identifiers of the messages to get
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetMessagesParams, MessagesUnion>>}
 */
export declare type getMessages = (params?: GetMessagesParams, options?: ApiRequestOptions) => Promise<ApiResponse<GetMessagesParams, MessagesUnion>>;
