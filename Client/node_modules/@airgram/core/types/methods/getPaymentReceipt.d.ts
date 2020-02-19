import { ApiRequestOptions, ApiResponse } from '../airgram';
import { PaymentReceiptUnion } from '../outputs';
export interface GetPaymentReceiptParams {
    chatId?: number;
    messageId?: number;
}
/**
 * Returns information about a successful payment
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier of the PaymentSuccessful message
 * @param {number} [params.messageId] - Message identifier
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetPaymentReceiptParams, PaymentReceiptUnion>>}
 */
export declare type getPaymentReceipt = (params?: GetPaymentReceiptParams, options?: ApiRequestOptions) => Promise<ApiResponse<GetPaymentReceiptParams, PaymentReceiptUnion>>;
