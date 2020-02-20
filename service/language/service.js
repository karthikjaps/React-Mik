import AuthenticatedApiService from "../authenticatedApiService";

export default class LanguageService extends AuthenticatedApiService {
  getServiceUrl() {
    return `http://efocus.store/design/language`;
  }

  getLangKeys({ lang }) {
    return super.get({
      url: `${this.getServiceUrl()}-${lang.toLowerCase()}`
    });
  }
}
