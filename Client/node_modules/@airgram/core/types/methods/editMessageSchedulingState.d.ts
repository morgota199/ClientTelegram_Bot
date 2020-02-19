import { ApiRequestOptions, ApiResponse } from '../airgram';
import { MessageSchedulingStateInputUnion } from '../inputs';
import { OkUnion } from '../outputs';
export interface EditMessageSchedulingStateParams {
    chatId?: number;
    messageId?: number;
    schedulingState?: MessageSchedulingStateInputUnion;
}
/**
 * Edits the time when a scheduled message will be sent. Scheduling state of all messages
 * in the same album or forwarded together with the message will be also changed
 * @param {Object} params
 * @param {number} [params.chatId] - The chat the message belongs to
 * @param {number} [params.messageId] - Identifier of the message
 * @param {MessageSchedulingStateInputUnion} [params.schedulingState] - The new message
 * scheduling state. Pass null to send the message immediately
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<EditMessageSchedulingStateParams, OkUnion>>}
 */
export declare type editMessageSchedulingState = (params?: EditMessageSchedulingStateParams, options?: ApiRequestOptions) => Promise<ApiResponse<EditMessageSchedulingStateParams, OkUnion>>;
