import AuthenticatedApiService from "../authenticatedApiService";

export default class NotifyMeService extends AuthenticatedApiService {
  getServiceUrl() {
    return `${super.getServiceUrl()}connector/config/notify_me`;
  }

  postUserEmail({ data }) {
    return super.post({
      url: this.getServiceUrl(),
      data
    });
  }
}
