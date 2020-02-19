import { ApiRequestOptions, ApiResponse } from '../airgram';
import { OkUnion } from '../outputs';
export interface SetDatabaseEncryptionKeyParams {
    newEncryptionKey?: string;
}
/**
 * Changes the database encryption key. Usually the encryption key is never changed
 * and is stored in some OS keychain
 * @param {Object} params
 * @param {string} [params.newEncryptionKey] - New encryption key
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SetDatabaseEncryptionKeyParams, OkUnion>>}
 */
export declare type setDatabaseEncryptionKey = (params?: SetDatabaseEncryptionKeyParams, options?: ApiRequestOptions) => Promise<ApiResponse<SetDatabaseEncryptionKeyParams, OkUnion>>;
