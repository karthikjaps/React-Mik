import AuthenticatedApiService from "../authenticatedApiService";

export default class NavigationService extends AuthenticatedApiService {
  getServiceUrl() {
    return `${super.getServiceUrl()}/connector/config/get_navigation_menu`;
  }
}
