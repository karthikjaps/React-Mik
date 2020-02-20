import MockService from "./service.mock";
import {
  toPlaceOrderRequest,
  toSavePaymentMethodRequest,
  toPaymentFee,
  toPaymentDetails,
  toPayFortDetails,
  toPayFortPurchaseDetailsRequest
} from "./adapter";

export default class Payment {
  constructor({ service } = {}) {
    this.service = service || new MockService();
  }

  placeOrder(data) {
    return this.service
      .placeOrder({ data: toPlaceOrderRequest(data) })
      .then(response => {
        return toPaymentDetails(response);
      });
  }

  savePaymentMethod(data) {
    return this.service
      .savePaymentMethod({
        data: toSavePaymentMethodRequest(data)
      })
      .then(response => {
        return toPaymentFee(response);
      });
  }

  getPayFortDetails() {
    return this.service.getPayFortDetails().then(response => {
      return toPayFortDetails(response);
    });
  }

  getPayFortPurchaseDetails(data) {
    return this.service
      .getPayFortPurchaseDetails(toPayFortPurchaseDetailsRequest(data))
      .then(response => {
        return toPayFortDetails(response);
      });
  }

  submitPayFort(data) {
    return this.service.submitPayFort(data);
  }

  purchasePayFort(data) {
    return this.service.purchasePayFort(data);
  }
}
