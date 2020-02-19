import { ApiRequestOptions, ApiResponse } from '../airgram';
import { AuthenticationCodeInfoUnion } from '../outputs';
/**
 * Resends phone number confirmation code
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<never, AuthenticationCodeInfoUnion>>}
 */
export declare type resendPhoneNumberConfirmationCode = (params?: never, options?: ApiRequestOptions) => Promise<ApiResponse<never, AuthenticationCodeInfoUnion>>;
