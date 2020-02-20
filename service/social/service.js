import AuthenticatedApiService from "../authenticatedApiService";

export default class SocialService extends AuthenticatedApiService {
  getServiceUrl() {
    return `${super.getServiceUrl()}connector/config/social_links`;
  }
}
