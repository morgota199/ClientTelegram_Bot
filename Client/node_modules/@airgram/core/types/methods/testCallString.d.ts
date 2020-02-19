import { ApiRequestOptions, ApiResponse } from '../airgram';
import { TestStringUnion } from '../outputs';
export interface TestCallStringParams {
    x?: string;
}
/**
 * Returns the received string; for testing only. This is an offline method. Can be
 * called before authorization
 * @param {Object} params
 * @param {string} [params.x] - String to return
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<TestCallStringParams, TestStringUnion>>}
 */
export declare type testCallString = (params?: TestCallStringParams, options?: ApiRequestOptions) => Promise<ApiResponse<TestCallStringParams, TestStringUnion>>;
