import { ApiRequestOptions, ApiResponse } from '../airgram';
import { LanguagePackInfoUnion } from '../outputs';
export interface GetLanguagePackInfoParams {
    languagePackId?: string;
}
/**
 * Returns information about a language pack. Returned language pack identifier may
 * be different from a provided one. Can be called before authorization
 * @param {Object} params
 * @param {string} [params.languagePackId] - Language pack identifier
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetLanguagePackInfoParams, LanguagePackInfoUnion>>}
 */
export declare type getLanguagePackInfo = (params?: GetLanguagePackInfoParams, options?: ApiRequestOptions) => Promise<ApiResponse<GetLanguagePackInfoParams, LanguagePackInfoUnion>>;
