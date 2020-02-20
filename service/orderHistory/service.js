import AuthenticatedApiService from "../authenticatedApiService";

export default class OrderHistoryService extends AuthenticatedApiService {
  getServiceUrl() {
    return `${super.getServiceUrl()}connector/`;
  }

  getOrderHistory({ data }) {
    return super.post({
      url: `${this.getServiceUrl()}customer/get_order_history`,
      data
    });
  }
}
