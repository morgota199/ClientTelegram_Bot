import { ApiRequestOptions, ApiResponse } from '../airgram';
import { PassportAuthorizationFormUnion } from '../outputs';
export interface GetPassportAuthorizationFormParams {
    botUserId?: number;
    scope?: string;
    publicKey?: string;
    nonce?: string;
}
/**
 * Returns a Telegram Passport authorization form for sharing data with a service
 * @param {Object} params
 * @param {number} [params.botUserId] - User identifier of the service's bot
 * @param {string} [params.scope] - Telegram Passport element types requested by
 * the service
 * @param {string} [params.publicKey] - Service's public_key
 * @param {string} [params.nonce] - Authorization form nonce provided by the service
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetPassportAuthorizationFormParams, PassportAuthorizationFormUnion>>}
 */
export declare type getPassportAuthorizationForm = (params?: GetPassportAuthorizationFormParams, options?: ApiRequestOptions) => Promise<ApiResponse<GetPassportAuthorizationFormParams, PassportAuthorizationFormUnion>>;
