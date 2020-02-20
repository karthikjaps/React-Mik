import AuthenticatedApiService from "../authenticatedApiService";

export default class CatalogueSortService extends AuthenticatedApiService {
  getServiceUrl() {
    return `${super.getServiceUrl()}connector/config/`;
  }

  getCatalogueConfig(data) {
    return super.post({
      url: `${this.getServiceUrl()}get_store_view`,
      data
    });
  }
}
