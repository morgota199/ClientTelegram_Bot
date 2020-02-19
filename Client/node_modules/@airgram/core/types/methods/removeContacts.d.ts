import { ApiRequestOptions, ApiResponse } from '../airgram';
import { OkUnion } from '../outputs';
export interface RemoveContactsParams {
    userIds?: number[];
}
/**
 * Removes users from the contact list
 * @param {Object} params
 * @param {number[]} [params.userIds] - Identifiers of users to be deleted
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<RemoveContactsParams, OkUnion>>}
 */
export declare type removeContacts = (params?: RemoveContactsParams, options?: ApiRequestOptions) => Promise<ApiResponse<RemoveContactsParams, OkUnion>>;
