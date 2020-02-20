import AuthenticatedApiService from "../authenticatedApiService";

export default class HeaderService extends AuthenticatedApiService {
  getServiceUrl() {
    return `${super.getServiceUrl()}/header`;
  }
}
