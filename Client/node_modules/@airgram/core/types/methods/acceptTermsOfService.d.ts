import { ApiRequestOptions, ApiResponse } from '../airgram';
import { OkUnion } from '../outputs';
export interface AcceptTermsOfServiceParams {
    termsOfServiceId?: string;
}
/**
 * Accepts Telegram terms of services
 * @param {Object} params
 * @param {string} [params.termsOfServiceId] - Terms of service identifier
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<AcceptTermsOfServiceParams, OkUnion>>}
 */
export declare type acceptTermsOfService = (params?: AcceptTermsOfServiceParams, options?: ApiRequestOptions) => Promise<ApiResponse<AcceptTermsOfServiceParams, OkUnion>>;
