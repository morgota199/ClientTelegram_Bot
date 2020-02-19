import { ApiRequestOptions, ApiResponse } from '../airgram';
import { StickerSetUnion } from '../outputs';
export interface GetStickerSetParams {
    setId?: string;
}
/**
 * Returns information about a sticker set by its identifier
 * @param {Object} params
 * @param {string} [params.setId] - Identifier of the sticker set
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetStickerSetParams, StickerSetUnion>>}
 */
export declare type getStickerSet = (params?: GetStickerSetParams, options?: ApiRequestOptions) => Promise<ApiResponse<GetStickerSetParams, StickerSetUnion>>;
