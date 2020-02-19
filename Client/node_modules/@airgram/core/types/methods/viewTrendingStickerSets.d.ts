import { ApiRequestOptions, ApiResponse } from '../airgram';
import { OkUnion } from '../outputs';
export interface ViewTrendingStickerSetsParams {
    stickerSetIds?: string[];
}
/**
 * Informs the server that some trending sticker sets have been viewed by the user
 * @param {Object} params
 * @param {string[]} [params.stickerSetIds] - Identifiers of viewed trending sticker
 * sets
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<ViewTrendingStickerSetsParams, OkUnion>>}
 */
export declare type viewTrendingStickerSets = (params?: ViewTrendingStickerSetsParams, options?: ApiRequestOptions) => Promise<ApiResponse<ViewTrendingStickerSetsParams, OkUnion>>;
