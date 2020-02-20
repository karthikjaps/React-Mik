import MockService from "./service.mock";
import {
  toCart,
  toVoucher,
  toSubmitCartRequest,
  toSubmitCouponRequest,
  toRemoveCouponRequest,
  toRemoveVoucher
} from "./adapter";

export default class Catalogue {
  constructor({ service } = {}) {
    this.service = service || new MockService();
  }

  getCart() {
    return this.service
      .get()
      .then(response => {
        return toCart(response);
      })
      .catch(error => {
        console.error(error);
        throw error;
      });
  }

  submitCart(data) {
    return this.service
      .submit({ data: toSubmitCartRequest(data) })
      .then(response => toCart(response))
      .catch(error => {
        console.error(error);
        throw error;
      });
  }

  submitVoucher(data) {
    return this.service
      .submitVoucher({ data: toSubmitCouponRequest(data) })
      .then(response => toVoucher(response))
      .catch(error => {
        console.error(error);
        throw error;
      });
  }

  removeVoucher(data) {
    return this.service
      .submitVoucher({ data: toRemoveCouponRequest(data) })
      .then(response => toRemoveVoucher(response))
      .catch(error => {
        console.error(error);
        throw error;
      });
  }
}
