import AuthenticatedApiService from "../authenticatedApiService";

export default class PaymentService extends AuthenticatedApiService {
  getServiceUrl() {
    return `${super.getServiceUrl()}connector/checkout/`;
  }

  placeOrder({ data }) {
    return super.post({
      url: `${this.getServiceUrl()}place_order`,
      data
    });
  }

  savePaymentMethod({ data }) {
    return super.post({
      url: `${this.getServiceUrl()}save_payment_method`,
      data
    });
  }

  getPayFortDetails() {
    return super.get({
      url: `${this.getServiceUrl()}get_payfort_details`
    });
  }

  getPayFortPurchaseDetails(data) {
    return super.post({
      url: `${this.getServiceUrl()}get_payfort_purchase`,
      data
    });
  }

  submitPayFort(data) {
    return super.post({
      url: `/payfort/submit`,
      data
    });
  }

  purchasePayFort(data) {
    return super.post({
      url: `/payfort/purchase`,
      data
    });
  }
}
