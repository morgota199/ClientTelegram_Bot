import { ApiRequestOptions, ApiResponse } from '../airgram';
import { PassportElementTypeInputUnion } from '../inputs';
import { PassportElementUnion } from '../outputs';
export interface GetPassportElementParams {
    type?: PassportElementTypeInputUnion;
    password?: string;
}
/**
 * Returns one of the available Telegram Passport elements
 * @param {Object} params
 * @param {PassportElementTypeInputUnion} [params.type] - Telegram Passport element
 * type
 * @param {string} [params.password] - Password of the current user
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetPassportElementParams, PassportElementUnion>>}
 */
export declare type getPassportElement = (params?: GetPassportElementParams, options?: ApiRequestOptions) => Promise<ApiResponse<GetPassportElementParams, PassportElementUnion>>;
