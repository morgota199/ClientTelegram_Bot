import { ApiRequestOptions, ApiResponse } from '../airgram';
import { FormattedTextInput, ReplyMarkupInputUnion } from '../inputs';
import { MessageUnion } from '../outputs';
export interface EditMessageCaptionParams {
    chatId?: number;
    messageId?: number;
    replyMarkup?: ReplyMarkupInputUnion;
    caption?: FormattedTextInput;
}
/**
 * Edits the message content caption. Returns the edited message after the edit is completed
 * on the server side
 * @param {Object} params
 * @param {number} [params.chatId] - The chat the message belongs to
 * @param {number} [params.messageId] - Identifier of the message
 * @param {ReplyMarkupInputUnion} [params.replyMarkup] - The new message reply markup;
 * for bots only
 * @param {FormattedTextInput} [params.caption] - New message content caption; 0-GetOption("message_caption_length_max")
 * characters
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<EditMessageCaptionParams, MessageUnion>>}
 */
export declare type editMessageCaption = (params?: EditMessageCaptionParams, options?: ApiRequestOptions) => Promise<ApiResponse<EditMessageCaptionParams, MessageUnion>>;
