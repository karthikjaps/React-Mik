import AuthenticatedApiService from "../authenticatedApiService";

export default class Service extends AuthenticatedApiService {
  getServiceUrl() {
    return `${super.getServiceUrl()}connector/config/`;
  }

  get({ data }) {
    return super.post({
      url: `${this.getServiceUrl()}get_page`,
      data
    });
  }
}
