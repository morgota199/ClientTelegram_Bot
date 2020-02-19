import { ApiRequestOptions, ApiResponse } from '../airgram';
import { OkUnion } from '../outputs';
export interface CancelDownloadFileParams {
    fileId?: number;
    onlyIfPending?: boolean;
}
/**
 * Stops the downloading of a file. If a file has already been downloaded, does nothing
 * @param {Object} params
 * @param {number} [params.fileId] - Identifier of a file to stop downloading
 * @param {boolean} [params.onlyIfPending] - Pass true to stop downloading only if
 * it hasn't been started, i.e. request hasn't been sent to server
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<CancelDownloadFileParams, OkUnion>>}
 */
export declare type cancelDownloadFile = (params?: CancelDownloadFileParams, options?: ApiRequestOptions) => Promise<ApiResponse<CancelDownloadFileParams, OkUnion>>;
