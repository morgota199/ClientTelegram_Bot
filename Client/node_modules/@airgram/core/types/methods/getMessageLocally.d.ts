import { ApiRequestOptions, ApiResponse } from '../airgram';
import { MessageUnion } from '../outputs';
export interface GetMessageLocallyParams {
    chatId?: number;
    messageId?: number;
}
/**
 * Returns information about a message, if it is available locally without sending network
 * request. This is an offline request
 * @param {Object} params
 * @param {number} [params.chatId] - Identifier of the chat the message belongs to
 * @param {number} [params.messageId] - Identifier of the message to get
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetMessageLocallyParams, MessageUnion>>}
 */
export declare type getMessageLocally = (params?: GetMessageLocallyParams, options?: ApiRequestOptions) => Promise<ApiResponse<GetMessageLocallyParams, MessageUnion>>;
