import { ApiRequestOptions, ApiResponse } from '../airgram';
import { OkUnion } from '../outputs';
export interface SetFileGenerationProgressParams {
    generationId?: string;
    expectedSize?: number;
    localPrefixSize?: number;
}
/**
 * Informs TDLib on a file generation progress
 * @param {Object} params
 * @param {string} [params.generationId] - The identifier of the generation process
 * @param {number} [params.expectedSize] - Expected size of the generated file, in
 * bytes; 0 if unknown
 * @param {number} [params.localPrefixSize] - The number of bytes already generated
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SetFileGenerationProgressParams, OkUnion>>}
 */
export declare type setFileGenerationProgress = (params?: SetFileGenerationProgressParams, options?: ApiRequestOptions) => Promise<ApiResponse<SetFileGenerationProgressParams, OkUnion>>;
