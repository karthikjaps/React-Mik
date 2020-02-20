import AuthenticatedApiService from "../authenticatedApiService";

export default class StoreLocationsService extends AuthenticatedApiService {
  getServiceUrl() {
    return `${super.getServiceUrl()}connector/config/get_store_locations`;
  }
}
