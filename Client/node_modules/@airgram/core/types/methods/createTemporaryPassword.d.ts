import { ApiRequestOptions, ApiResponse } from '../airgram';
import { TemporaryPasswordStateUnion } from '../outputs';
export interface CreateTemporaryPasswordParams {
    password?: string;
    validFor?: number;
}
/**
 * Creates a new temporary password for processing payments
 * @param {Object} params
 * @param {string} [params.password] - Persistent user password
 * @param {number} [params.validFor] - Time during which the temporary password will
 * be valid, in seconds; should be between 60 and 86400
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<CreateTemporaryPasswordParams, TemporaryPasswordStateUnion>>}
 */
export declare type createTemporaryPassword = (params?: CreateTemporaryPasswordParams, options?: ApiRequestOptions) => Promise<ApiResponse<CreateTemporaryPasswordParams, TemporaryPasswordStateUnion>>;
