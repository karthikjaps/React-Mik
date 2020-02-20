import AuthenticatedApiService from "../authenticatedApiService";

export default class CartService extends AuthenticatedApiService {
  getServiceUrl() {
    return `${super.getServiceUrl()}connector/checkout/`;
  }

  get({ data }) {
    return super.get({
      url: `${this.getServiceUrl()}get_cart`,
      data
    });
  }

  submit({ data }) {
    return super.post({
      url: `${this.getServiceUrl()}add_to_cart_bulk`,
      data
    });
  }

  submitVoucher({ data }) {
    return super.post({
      url: `${this.getServiceUrl()}set_coupon`,
      data
    });
  }
}
