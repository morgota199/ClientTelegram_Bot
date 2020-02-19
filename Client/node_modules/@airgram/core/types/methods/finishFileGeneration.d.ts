import { ApiRequestOptions, ApiResponse } from '../airgram';
import { ErrorInput } from '../inputs';
import { OkUnion } from '../outputs';
export interface FinishFileGenerationParams {
    generationId?: string;
    error?: ErrorInput;
}
/**
 * Finishes the file generation
 * @param {Object} params
 * @param {string} [params.generationId] - The identifier of the generation process
 * @param {ErrorInput} [params.error] - If set, means that file generation has failed
 * and should be terminated
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<FinishFileGenerationParams, OkUnion>>}
 */
export declare type finishFileGeneration = (params?: FinishFileGenerationParams, options?: ApiRequestOptions) => Promise<ApiResponse<FinishFileGenerationParams, OkUnion>>;
