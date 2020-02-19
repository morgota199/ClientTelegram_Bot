import { ApiRequestOptions, ApiResponse } from '../airgram';
import { OkUnion } from '../outputs';
export interface CheckDatabaseEncryptionKeyParams {
    encryptionKey?: string;
}
/**
 * Checks the database encryption key for correctness. Works only when the current authorization
 * state is authorizationStateWaitEncryptionKey
 * @param {Object} params
 * @param {string} [params.encryptionKey] - Encryption key to check or set up
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<CheckDatabaseEncryptionKeyParams, OkUnion>>}
 */
export declare type checkDatabaseEncryptionKey = (params?: CheckDatabaseEncryptionKeyParams, options?: ApiRequestOptions) => Promise<ApiResponse<CheckDatabaseEncryptionKeyParams, OkUnion>>;
