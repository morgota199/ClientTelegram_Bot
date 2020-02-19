import { ApiRequestOptions, ApiResponse } from '../airgram';
import { InputFileInputUnion } from '../inputs';
import { OkUnion } from '../outputs';
export interface RemoveRecentStickerParams {
    isAttached?: boolean;
    sticker?: InputFileInputUnion;
}
/**
 * Removes a sticker from the list of recently used stickers
 * @param {Object} params
 * @param {boolean} [params.isAttached] - Pass true to remove the sticker from the
 * list of stickers recently attached to photo or video files; pass false to remove
 * the sticker from the list of recently sent stickers
 * @param {InputFileInputUnion} [params.sticker] - Sticker file to delete
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<RemoveRecentStickerParams, OkUnion>>}
 */
export declare type removeRecentSticker = (params?: RemoveRecentStickerParams, options?: ApiRequestOptions) => Promise<ApiResponse<RemoveRecentStickerParams, OkUnion>>;
