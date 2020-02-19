import { ApiRequestOptions, ApiResponse } from '../airgram';
import { OkUnion } from '../outputs';
export interface TerminateSessionParams {
    sessionId?: string;
}
/**
 * Terminates a session of the current user
 * @param {Object} params
 * @param {string} [params.sessionId] - Session identifier
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<TerminateSessionParams, OkUnion>>}
 */
export declare type terminateSession = (params?: TerminateSessionParams, options?: ApiRequestOptions) => Promise<ApiResponse<TerminateSessionParams, OkUnion>>;
