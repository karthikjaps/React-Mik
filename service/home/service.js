import AuthenticatedApiService from "../authenticatedApiService";

export default class HomeService extends AuthenticatedApiService {
  getServiceUrl() {
    return `${super.getServiceUrl()}connector/config/`;
  }

  getHomeContent(data) {
    return super.post({
      url: `${this.getServiceUrl()}get_home_dataV2`,
      data
    });
  }
}
