import MockService from "./service.mock";
import {
  toOffsetLimit,
  toOrderHistory,
  toCancelOrderJson,
  toCancelOrder
} from "./adapter";

export default class OrderHistory {
  constructor({ service } = {}) {
    this.service = service || new MockService();
  }

  getOrderHistory(data) {
    return this.service
      .getOrderHistory({ data: toOffsetLimit(data) })
      .then(response => {
        return toOrderHistory(response);
      })
      .catch(error => {
        console.error(error);
        throw error;
      });
  }
}
