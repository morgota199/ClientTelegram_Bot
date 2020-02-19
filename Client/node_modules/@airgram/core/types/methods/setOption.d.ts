import { ApiRequestOptions, ApiResponse } from '../airgram';
import { OptionValueInputUnion } from '../inputs';
import { OkUnion } from '../outputs';
export interface SetOptionParams {
    name?: string;
    value?: OptionValueInputUnion;
}
/**
 * Sets the value of an option. (Check the list of available options on https://core.telegram.org/tdlib/options.)
 * Only writable options can be set. Can be called before authorization
 * @param {Object} params
 * @param {string} [params.name] - The name of the option
 * @param {OptionValueInputUnion} [params.value] - The new value of the option
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SetOptionParams, OkUnion>>}
 */
export declare type setOption = (params?: SetOptionParams, options?: ApiRequestOptions) => Promise<ApiResponse<SetOptionParams, OkUnion>>;
