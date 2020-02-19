import { ApiRequestOptions, ApiResponse } from '../airgram';
import { InputCredentialsInputUnion } from '../inputs';
import { PaymentResultUnion } from '../outputs';
export interface SendPaymentFormParams {
    chatId?: number;
    messageId?: number;
    orderInfoId?: string;
    shippingOptionId?: string;
    credentials?: InputCredentialsInputUnion;
}
/**
 * Sends a filled-out payment form to the bot for final verification
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier of the Invoice message
 * @param {number} [params.messageId] - Message identifier
 * @param {string} [params.orderInfoId] - Identifier returned by ValidateOrderInfo,
 * or an empty string
 * @param {string} [params.shippingOptionId] - Identifier of a chosen shipping option,
 * if applicable
 * @param {InputCredentialsInputUnion} [params.credentials] - The credentials chosen
 * by user for payment
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SendPaymentFormParams, PaymentResultUnion>>}
 */
export declare type sendPaymentForm = (params?: SendPaymentFormParams, options?: ApiRequestOptions) => Promise<ApiResponse<SendPaymentFormParams, PaymentResultUnion>>;
