import AuthenticatedApiService from "../authenticatedApiService";

export default class CatalogueService extends AuthenticatedApiService {
  getServiceUrl() {
    return `${super.getServiceUrl()}connector/catalog/`;
  }

  getProducts({ data }) {
    return super.post({
      url: `${this.getServiceUrl()}get_all_productsV2`,
      data
    });
  }

  getProduct({ data }) {
    return super.post({
      url: `${this.getServiceUrl()}get_product_detail`,
      data
    });
  }

  getFilters({ data }) {
    return super.post({
      url: `${this.getServiceUrl()}get_category_filters`,
      data
    });
  }
}
