import AuthenticatedApiService from "../authenticatedApiService";

export default class NewsletterService extends AuthenticatedApiService {
  getServiceUrl() {
    return `${super.getServiceUrl()}connector/config/signup_newsletter`;
  }

  postUserEmail({ data }) {
    return super.post({
      url: this.getServiceUrl(),
      data
    });
  }
}
