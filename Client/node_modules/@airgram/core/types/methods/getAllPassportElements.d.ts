import { ApiRequestOptions, ApiResponse } from '../airgram';
import { PassportElementsUnion } from '../outputs';
export interface GetAllPassportElementsParams {
    password?: string;
}
/**
 * Returns all available Telegram Passport elements
 * @param {Object} params
 * @param {string} [params.password] - Password of the current user
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetAllPassportElementsParams, PassportElementsUnion>>}
 */
export declare type getAllPassportElements = (params?: GetAllPassportElementsParams, options?: ApiRequestOptions) => Promise<ApiResponse<GetAllPassportElementsParams, PassportElementsUnion>>;
