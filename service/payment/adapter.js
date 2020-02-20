import { STATUS_SUCCESS, STATUS_FAIL } from "../constants";
import { toPriceString } from "../adapter";
import { toFee } from "../cart/adapter";
import { DECIMAL_MULTIPLIER } from "../payfort/constants";

export const toPlaceOrderRequest = data => ({
  customer_email: data.email,
  payment_method: data.paymentMethod,
  line_items:
    data.items &&
    data.items.map(n => ({
      product_sku: n.item.sku,
      discountAmount: n.item.discountAmount,
      promotionCode: n.item.promotionCode,
      rmsPromotionCode: n.item.rmsPromotionCode
    }))
});

export const toSavePaymentMethodRequest = data => ({
  payment_method: data.paymentMethod
});

export const toPaymentDetails = data => {
  if (data) {
    if (data.status === STATUS_SUCCESS) {
      const { data: responseData } = data;

      return {
        orderNumber: responseData.order_number,
        billingPhone: responseData.billing_phone,
        shippingPhone: responseData.shipping_phone,
        paymentMethod: responseData.payment_method,
        orderStatus: responseData.order_status,
        orderDate: responseData.order_date,
        deliveryDate: responseData.delivery_date,
        total: toPriceString(responseData.order_total, true)
      };
    }
    if (data.status === STATUS_FAIL) {
      throw Error(data.message);
    }
  }
  return null;
};

export const toPaymentFee = data => {
  if (data) {
    if (data.status === STATUS_SUCCESS) {
      const { data: responseData } = data;

      if (responseData && responseData[0]) {
        const { fee } = responseData[0];

        if (fee) {
          return toFee(fee);
        }
      }
    }
    if (data.status === STATUS_FAIL) {
      throw Error(data.message);
    }
  }
  return null;
};

export const toPayFortDetails = data => {
  if (data) {
    if (data.status === STATUS_SUCCESS) {
      const { data: responseData } = data;

      return {
        serviceCommand: responseData.payment_info.payfort_service_command,
        accessCode: responseData.payment_info.payfort_access_code,
        merchantIdentifier:
          responseData.payment_info.payfort_merchant_identifier,
        merchantReference: responseData.payment_info.payfort_merchant_reference,
        language: responseData.payment_info.language,
        signature: responseData.payment_info.payfort_signature,
        tokenUrl: responseData.payment_info.payfort_token_url
      };
    }
    if (data.status === STATUS_FAIL) {
      throw Error(data.message);
    }
  }
  return null;
};

export const toPayFortPurchaseDetailsRequest = data => ({
  amount: data.amount * DECIMAL_MULTIPLIER,
  currency: data.currency,
  language: data.language,
  email: data.email,
  merchant_reference: data.merchantReference,
  return_url: `${data.host}/payfort/return`
});
