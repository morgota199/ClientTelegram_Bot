import { ApiRequestOptions, ApiResponse } from '../airgram';
import { OkUnion } from '../outputs';
export interface SetPollAnswerParams {
    chatId?: number;
    messageId?: number;
    optionIds?: number[];
}
/**
 * Changes the user answer to a poll. A poll in quiz mode can be answered only once
 * @param {Object} params
 * @param {number} [params.chatId] - Identifier of the chat to which the poll belongs
 * @param {number} [params.messageId] - Identifier of the message containing the
 * poll
 * @param {number[]} [params.optionIds] - 0-based identifiers of answer options,
 * chosen by the user. User can choose more than 1 answer option only is the poll allows
 * multiple answers
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SetPollAnswerParams, OkUnion>>}
 */
export declare type setPollAnswer = (params?: SetPollAnswerParams, options?: ApiRequestOptions) => Promise<ApiResponse<SetPollAnswerParams, OkUnion>>;
