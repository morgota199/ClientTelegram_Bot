import { ApiRequestOptions, ApiResponse } from '../airgram';
import { MessageUnion } from '../outputs';
export interface SetGameScoreParams {
    chatId?: number;
    messageId?: number;
    editMessage?: boolean;
    userId?: number;
    score?: number;
    force?: boolean;
}
/**
 * Updates the game score of the specified user in the game; for bots only
 * @param {Object} params
 * @param {number} [params.chatId] - The chat to which the message with the game
 * belongs
 * @param {number} [params.messageId] - Identifier of the message
 * @param {boolean} [params.editMessage] - True, if the message should be edited
 * @param {number} [params.userId] - User identifier
 * @param {number} [params.score] - The new score
 * @param {boolean} [params.force] - Pass true to update the score even if it decreases.
 * If the score is 0, the user will be deleted from the high score table
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SetGameScoreParams, MessageUnion>>}
 */
export declare type setGameScore = (params?: SetGameScoreParams, options?: ApiRequestOptions) => Promise<ApiResponse<SetGameScoreParams, MessageUnion>>;
