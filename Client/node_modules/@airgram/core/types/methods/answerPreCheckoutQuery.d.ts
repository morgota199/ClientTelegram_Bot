import { ApiRequestOptions, ApiResponse } from '../airgram';
import { OkUnion } from '../outputs';
export interface AnswerPreCheckoutQueryParams {
    preCheckoutQueryId?: string;
    errorMessage?: string;
}
/**
 * Sets the result of a pre-checkout query; for bots only
 * @param {Object} params
 * @param {string} [params.preCheckoutQueryId] - Identifier of the pre-checkout query
 * @param {string} [params.errorMessage] - An error message, empty on success
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<AnswerPreCheckoutQueryParams, OkUnion>>}
 */
export declare type answerPreCheckoutQuery = (params?: AnswerPreCheckoutQueryParams, options?: ApiRequestOptions) => Promise<ApiResponse<AnswerPreCheckoutQueryParams, OkUnion>>;
