import AuthenticatedApiService from "../authenticatedApiService";

export default class PromotionService extends AuthenticatedApiService {
  getServiceUrl() {
    return `${super.getServiceUrl()}connector/config/product_landing_page`;
  }

  getProduct({ data }) {
    return super.post({
      url: this.getServiceUrl(),
      data
    });
  }
}
