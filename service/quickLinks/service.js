import AuthenticatedApiService from "../authenticatedApiService";

export default class QuickLinksService extends AuthenticatedApiService {
  getServiceUrl() {
    return `${super.getServiceUrl()}connector/config/quick_links`;
  }
}
