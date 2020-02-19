import { ApiRequestOptions, ApiResponse } from '../airgram';
import { GameHighScoresUnion } from '../outputs';
export interface GetGameHighScoresParams {
    chatId?: number;
    messageId?: number;
    userId?: number;
}
/**
 * Returns the high scores for a game and some part of the high score table in the range
 * of the specified user; for bots only
 * @param {Object} params
 * @param {number} [params.chatId] - The chat that contains the message with the
 * game
 * @param {number} [params.messageId] - Identifier of the message
 * @param {number} [params.userId] - User identifier
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetGameHighScoresParams, GameHighScoresUnion>>}
 */
export declare type getGameHighScores = (params?: GetGameHighScoresParams, options?: ApiRequestOptions) => Promise<ApiResponse<GetGameHighScoresParams, GameHighScoresUnion>>;
