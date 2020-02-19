import { ApiRequestOptions, ApiResponse } from '../airgram';
import { CountUnion } from '../outputs';
/**
 * Returns the total number of imported contacts
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<never, CountUnion>>}
 */
export declare type getImportedContactCount = (params?: never, options?: ApiRequestOptions) => Promise<ApiResponse<never, CountUnion>>;
